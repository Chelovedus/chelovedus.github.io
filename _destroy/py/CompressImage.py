import asyncio
import os
from concurrent.futures import ThreadPoolExecutor
from PIL import Image

folder_path = r"E:\All Folders\site.github\chelovedus.github.io\img\anime-titles"
initial_quality = 90
max_size = (1000, 1000)
max_file_size = 0.1 * 1024 * 1024


def compress_image(file_path, max_size, max_file_size):
    try:
        with Image.open(file_path) as img:
            img = img.convert("RGB")
            img.thumbnail(max_size)
            
            quality = initial_quality
            temp_path = file_path + ".temp.jpg"

            while quality > 10:
                img.save(temp_path, "JPEG", optimize=True, quality=quality)
                
                if os.path.exists(temp_path) and os.path.getsize(temp_path) <= max_file_size:
                    os.replace(temp_path, file_path)
                    print(f"Сжато: {file_path}, качество: {quality}, размер: {os.path.getsize(file_path) / 1024:.2f} KB")
                    return
                
                quality -= 5  

            if os.path.exists(temp_path):
                os.replace(temp_path, file_path)
                print(f"Не удалось сжать до 1.2 МБ, но уменьшено максимально: {file_path}, качество: {quality}")
    
    except Exception as e:
        print(f"Ошибка при обработке {file_path}: {e}")


async def compress_images_in_folder(root_folder, max_size, max_file_size):
    loop = asyncio.get_running_loop()
    tasks = []
    
    with ThreadPoolExecutor() as executor:
        for folder, _, files in os.walk(root_folder):
            for filename in files:
                file_path = os.path.join(folder, filename)
                
                if filename.lower().endswith((".jpg", ".jpeg", ".png", ".webp", ".bmp")):
                    if os.path.exists(file_path) and os.path.getsize(file_path) > max_file_size:
                        task = loop.run_in_executor(executor, compress_image, file_path, max_size, max_file_size)
                        tasks.append(task)
                    else:
                        print(f"Пропущено (уже меньше 1.2 МБ или не найдено): {file_path}")
    
        await asyncio.gather(*tasks)
    

if __name__ == "__main__":
    asyncio.run(compress_images_in_folder(folder_path, max_size, max_file_size))
    print("Все изображения обработаны.")
