const myProjectsButton = document.querySelector('#projects');
const about = document.querySelector('#about');

const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');
const paragraph = document.querySelector('p');
const boxes = [...document.getElementsByClassName('boxes')];


const start = document.querySelector('#start');

const activeBorder = '1px solid purple';
const startText = 'I have interest into Web Technology, especially Java Script which I am currently intensivly learning.';

console.log(about);
let isStart = true;

const switchBorder = () => {
    start.style.borderBottom = 'none';
    start.nextElementSibling.style.borderBottom = activeBorder;
    console.log('switched')
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
    console.log(currentTitle)
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
        console.log('Remove LI')
        changeLi(title); //change Li title
        paragraph.innerText = textInfo;
        isStart = false;
    }
}

let openedBox;
boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        if (openedBox !== undefined) {
            console.log(box.id, 'close box, open new one')
            switch (box.id) {
                case 'projects':
                    textContent('No projects already :)', 'My Projects');
                    break;
                case 'about':
                    textContent(`I'm a Systems Engineering student at Wroclaw University of Science and Technology at 2nd year.
I found that analytics and programming are the things that makes me satisfied and gives me a lot of pleasure when the problem is succesfully solved.`, 'About');
                    break;
            }
        }
        openedBox = box.id;
        console.log('Box clicked!', openedBox);
    });
})

document.addEventListener('click', e => {
    e.preventDefault();
})

// myProjectsButton.onclick = () => textContent('No projects already :)', 'My Projects');

// about.onclick = () => textContent(`I'm a Systems Engineering student at Wroclaw University of Science and Technology at 2nd year.
// I found that analytics and programming are the things that makes me satisfied and gives me a lot of pleasure when the problem is succesfully solved.`, 'About');

start.onclick = removeLi;