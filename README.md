# Favorite Anime

Список избранных аниме.
Данные подгружаются из JSON, интерфейс генерируется динамически. Основной акцент - на семантической разметке, адаптивности и интерактивных эффектах на CSS и JS.
<img width="1905" height="2832" alt="2026-02-09_15-23-54 (1)" src="https://github.com/user-attachments/assets/061254db-29cf-4f72-915e-29d98b4d0743" />
---

## Демонстрация интерфейса

### 1. Кнопки навигации

![Animation1](https://github.com/user-attachments/assets/c4009df8-4cba-4476-9a63-3f8b23da311f)

Hover-эффект у кнопок:
- изменение фона
- смещение по оси Y
- изменение тени
- плавные transition

---

### 2. Изменение фона header при наведении

![Animation2](https://github.com/user-attachments/assets/cf896323-c25b-4725-8725-bb9495aad40e)

При наведении на `header`:
- меняется background-image
- усиливается blur
- используется `:has()` для управления состоянием родителя

---

### 3. Анимация слова `still`

![Animation3](https://github.com/user-attachments/assets/ad7a14b5-dcf5-4168-82eb-5ab8c52fa5f8)

Слово `still`:
- отдельный span
- анимация через `@keyframes`
- кратковременная деформация (skew)
- изменение цвета в момент анимации

---

### 4. Hover по аватару

![Animation4](https://github.com/user-attachments/assets/ad779b2c-0aab-4e39-b793-a7fa233768cd)

При наведении на изображение:
- плавное скругление до 50%
- появляется рамка
- одновременно меняется стиль текста автора

---

### 5. Мигающий курсор

![Animation5](https://github.com/user-attachments/assets/2ae576b3-df96-4996-a4a8-0893f94aa5b4)

После текста Favorite anime:
- анимированный символ `|`
- реализован через `@keyframes`
- имитация мигающего курсора

---

### 6. Анимация карточек аниме

![Animation6](https://github.com/user-attachments/assets/d07650b6-782a-4993-a55c-478838d69cdb)

У карточек:
- плавное увеличение фонового изображения
- подъём текстового блока снизу
- применение `backdrop-filter`
- изменение `text-shadow`

---

### 7. Анимированная градиентная рамка

![Animation7](https://github.com/user-attachments/assets/e9b2895f-367a-46f2-884e-f1765d9f979a)

Используется:
- `border-image`
- анимация направления градиента
- бесконечный цикл через `@keyframes`

---

### 8. Появление блока below-footer

![Animation8](https://github.com/user-attachments/assets/cf5c6249-a568-4d0e-9e2a-8388d70e802b)

Блок появляется:
- при наведении на `footer`
- через изменение `opacity`
- с плавным переходом

---

## Технические особенности

- Семантическая HTML5-разметка
- Адаптивная вёрстка (media queries, clamp, vw/vh)
- Flexbox
- CSS-переменные
- Псевдоэлементы
- `:has()`
- Template + динамическая генерация DOM
- Fetch + JSON
- Определение языка пользователя













