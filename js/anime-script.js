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
    let i = 0;
    while (i < fileData.length) {
        const element = template.content.cloneNode(true);
        const block = element.querySelector('.title-block');
        const nameElement = element.querySelector('.title-name');
        const descriptionElement = element.querySelector('.title-description');
        const genresElement = element.querySelector('.title-genres');

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

