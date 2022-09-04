const myProjectsButton = document.querySelector('#projects');
const about = document.querySelector('#about');

const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');
const paragraph = document.querySelector('p');
const boxes = [...document.getElementsByClassName('boxes')];

const start = document.querySelector('#start');

const activeBorder = '1px solid purple';
const startText = `My name is Artur and I am a student at Wrocław University of Technology. 

Currently I\'m in my second year at Systems Engineering.`;

console.log(about);
let isStart = true;

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
    paragraph.innerText = startText;
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
    box.addEventListener('click', (e) => {
        e.preventDefault();

        console.log(box.id, 'close box, open new one')
        switch (box.id) {
            case 'projects':
                textContent('No projects already :)', 'My Projects');
                break;
            case 'about':
                textContent(`I have interest into web technologies like JS, HTML and CSS. I'm keeping learning and improving my skills by taking a full-stack course at CodeCademy. I've got basic knolwedge at Python language which is mainly used used at univeristy with data engineering.

                 For now it's quite a problem which path should I take but in my spare of time I'm trying to write JS and consequently getting success with that.`, 'About');
                break;
        }
    });
})

start.onclick = removeLi;