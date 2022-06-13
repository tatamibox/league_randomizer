
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

// jungle objects finish

// const adc = [fill in with objects when done];
// const support = [fill in with objects when done];
// const top = [fill in with objects when done];
// const mid = [fill in with objects when done];

//



const roleSelect = document.querySelector('.roleSelect');
const randomizeButton = document.querySelector('.randomActivate');
let currentRole;

// selects a random champion from a large list of champions 
let currentChamp;
function randomizeChampionSelected() {
    currentChamp = Math.floor(Math.random() * 2);
}

//

// changes the champion image on randomizer card based on object link
function changeChampImg() {
    const champImg = document.getElementById("champImg")
    champImg.src = `${currentRole[currentChamp].imageLink}`;
};
// 

// changes the champion name on randomizer card
function changeChampName() {
    const currentChampName = document.querySelector('.cardName');
    currentChampName.innerHTML = `${currentRole[currentChamp].champName}`;
}
//

// changes the U.GG link under champ info
function changeChampBuildLink() {
    const currentBuildLink = document.querySelector('.buildURL');
    currentBuildLink.href = `${currentRole[currentChamp].buildsLink}`;
}


// combines all functions to change what you see on the randomizer card
function randomizeAll() {
    if (roleSelect.value === 'jungle') {
        currentRole = jungle;
    } else if (roleSelect.value === 'adc') {
        alert('work in progress for this role');
        return;
    } else if (roleSelect.value === 'mid') {
        alert('work in progress for this role');
        return;
    } else if (roleSelect.value === 'top') {
        alert('work in progress for this role');
        return;
    } else if (roleSelect.value === 'support') {
        alert('work in progress for this role');
        return;
    }
    else {
        alert('No role is selected, so please select a role.');
        return;
    }
    randomizeChampionSelected();
    changeChampImg();
    changeChampName();
    changeChampBuildLink();


}
//


randomizeButton.addEventListener('click', randomizeAll);

// const roles = [jungle, adc, support, top, mid];

// // jungler objects finish