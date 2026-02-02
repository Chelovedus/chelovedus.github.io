document.addEventListener("DOMContentLoaded", loadAnimeData)

const template = document.getElementById('title-block-template');
const container = document.querySelector('.titles-container');

async function loadAnimeData() {
    let response =  await fetch('/data/anime-list.json');
    let fileData = await response.json();
    processAnimeData(fileData);
}

function processAnimeData(fileData)
{
    let i = 0;
    while (i < fileData.length) {
        let element = template.content.cloneNode(true);
        let block = element.querySelector('.title-block');
        let nameElement = element.querySelector('.title-name');
        let descriptionElement = element.querySelector('.title-description');
        let genresElement = element.querySelector('.title-genres');

        createElement(i, fileData, element, block, nameElement, descriptionElement, genresElement);
        i++;
    }
}

function createElement(i, fileData, element, block, nameElement, descriptionElement, genresElement)
{
    if (nameElement) nameElement.textContent = fileData[i].title;
    if (descriptionElement) descriptionElement.textContent = fileData[i].description;
    if (genresElement) genresElement.textContent = fileData[i].genres;
    block.style.backgroundImage = `url(${fileData[i].image})`;
    container.appendChild(element);
}

