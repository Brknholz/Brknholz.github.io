const myProjectsButton = document.querySelector('#projects');
const about = document.querySelector('#about');

const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');
const paragraph = document.querySelector('p');
const boxes = [...document.getElementsByClassName('boxes')];

const start = document.querySelector('#start');

const activeBorder = '1px solid purple';

console.log(about);
let isStart = true;

const getJsonContent = async () => {
    try {
        const textJson = await fetch('./text-content.json');
        if (textJson.ok) {
            textJsonParse = await textJson.json();
            console.log(textJsonParse);
            return textJsonParse;
        }
        throw new Error(`Can't find a file!`);
    } catch (err) {
        console.log(err);
    }
}

getJsonContent();

const switchBorder = () => {
    start.style.borderBottom = 'none';
    start.nextElementSibling.style.borderBottom = activeBorder;
}

const createLi = textInfo => {
    const crumbLi = document.createElement('li');
    crumbLi.innerText = textInfo;
    crumbLi.style.marginLeft = '5%';
    start.parentNode.appendChild(crumbLi);
    const strikes = document.createElement('span');
    strikes.innerText = '>>';
    strikes.style.margin = '10%';
    start.appendChild(strikes)
    switchBorder();
}

const changeLi = titleText => {
    const currentTitle = start.nextElementSibling;
    currentTitle.innerText = titleText;
}

const removeLi = () => {
    const element = start.nextElementSibling;
    start.parentNode.removeChild(element);
    start.style.borderBottom = 'none';
    start.style.borderBottom = activeBorder;
    paragraph.innerText = textJsonParse.descriptions.welcome;
    start.removeChild(start.lastChild);
}

const textContent = (textInfo, title) => {
    let elementCount = start.parentNode.children.length;
    console.log(elementCount);
    if (start.parentNode.children.length <= 1) {
        createLi(title);
        paragraph.innerText = textInfo;
        isStart = false;
    } else if (start.parentNode.children.length > 1) {
        changeLi(title);
        paragraph.innerText = textInfo;
        isStart = false;
    }
}

boxes.forEach(box => {
    box.addEventListener('click', async (e) => {
        e.preventDefault();

        console.log(box.id, 'close box, open new one')
        switch (box.id) {
            case 'projects':
                const projectsTextContent = textJsonParse.descriptions['projects-description'];
                textContent(projectsTextContent, 'My Projects');
                break;
            case 'about':
                const aboutTextContent = textJsonParse.descriptions['about-description'];
                textContent(aboutTextContent, 'About');
                break;
        }
    });
})

start.onclick = removeLi;