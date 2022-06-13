
// jungler objects start
const amumu = {
    champName: 'Amumu',
    position: 'Jungle',
    buildsLink: 'https://u.gg/lol/champions/amumu/build',
    imageLink: 'imgs/champions/amumu_LoT.jpg'
}

const leeSin = {
    champName: 'Lee Sin',
    position: 'Jungle',
    buildsLink: 'https://u.gg/lol/champions/leesin/build',
    imageLink: 'imgs/champions/leesin_LoT.jpg'
}
const jungle = [amumu, leeSin];
// const adc = [fill in with objects when done];
// const support = [fill in with objects when done];
// const top = [fill in with objects when done];
// const mid = [fill in with objects when done];

//




const randomizeButton = document.querySelector('.randomActivate');

// selects a random champion from a large list of champions 
let currentChamp;
function randomizeChampionSelected() {
    currentChamp = Math.floor(Math.random() * 2);
}

//

// changes the champion image on randomizer card based on object link
function changeChampImg() {
    const champImg = document.getElementById("champImg")
    champImg.src = `${jungle[currentChamp].imageLink}`;
};
// 

// changes the champion name on randomizer card
function changeChampName() {
    const currentChampName = document.querySelector('.cardName');
    currentChampName.innerHTML = `${jungle[currentChamp].champName}`;
}
//

// changes the U.GG link under champ info
function changeChampBuildLink() {
    const currentBuildLink = document.querySelector('.buildURL');
    currentBuildLink.href = `${jungle[currentChamp].buildsLink}`;
}


// combines all functions to change what you see on the randomizer card
function randomizeAll() {
    randomizeChampionSelected();
    changeChampImg();
    changeChampName();
    changeChampBuildLink();
}
//


randomizeButton.addEventListener('click', randomizeAll);

// const roles = [jungle, adc, support, top, mid];

// // jungler objects finish