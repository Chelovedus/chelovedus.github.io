document.addEventListener("DOMContentLoaded", loadAnimeData)

const animeListRu = '/data/anime-list-ru.json';
const animeListEn = '/data/anime-list-en.json';
var animeListData = '';

const template = document.getElementById('title-block-template');
const container = document.querySelector('.titles-container');

async function loadAnimeData() {
    selectLanguage();
    let response =  await fetch(animeListData);
    let fileData = await response.json();
    processAnimeData(fileData);
}

function selectLanguage()
{
    let preferredLanguage = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
    animeListData = preferredLanguage == 'ru' ? animeListRu : animeListEn;
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
