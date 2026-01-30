document.addEventListener("DOMContentLoaded", loadAnimeData)

const template = document.getElementById('title-block-template');
const container = document.querySelector('.titles-container');

async function loadAnimeData() {
    let response =  await fetch('../anime-list.json');
    let fileData = await response.json();
    creatorElement(fileData);
}

function creatorElement(fileData)
{
    //console.log(fileData);
    //console.log(fileLength);

    const element = template.content.cloneNode(true);
    
    let block = element.querySelector('.title-block');

    let i = 0;
    while (i < fileData.length) {
        const element = template.content.cloneNode(true);
        const block = element.querySelector('.title-block');
        
        if (block) {
            // Fill with current anime's data
            const nameElement = element.querySelector('.title-name');
            const descElement = element.querySelector('.title-description');
            const genresElement = element.querySelector('.title-genres');
            
            if (nameElement) nameElement.textContent = fileData[i].name;
            if (descElement) descElement.textContent = fileData[i].description;
            if (genresElement) genresElement.textContent = fileData[i].genres;

            block.style.backgroundImage = `url(/img/anime-titles/Charlotte.jpg)`;
            
            container.appendChild(element);
        }
        
        i++;
    }
}

function createElement()
{
    
}

