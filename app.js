
// jungler objects start
const amumu = {
    champName: 'Amumu',
    position: 'Jungle',
    buildsLink: 'https://u.gg/lol/champions/jungle/amumu/build',
    imageLink: 'imgs/champions/jungle/amumu_LoT.jpg'
}

const leeSin = {
    champName: 'Lee Sin',
    position: 'Jungle',
    buildsLink: 'https://u.gg/lol/champions/jungle/leesin/build',
    imageLink: 'imgs/champions/jungle/leesin_LoT.jpg'
}
const jungle = [amumu, leeSin];

const aphelios = {
    champName: 'Aphelios',
    position: 'ADC',
    buildsLink: 'https://u.gg/lol/champions/aphelios/build',
    imageLink: 'imgs/champions/adc/aphelios_LoT.jpg'
}

const ashe = {
    champName: 'Ashe',
    position: 'ADC',
    buildsLink: 'https://u.gg/lol/champions/ashe/build',
    imageLink: 'imgs/champions/adc/ashe_LoT.jpg'
}

const adc = [aphelios, ashe];

// jungle objects finish

// const adc = [fill in with objects when done];
// const support = [fill in with objects when done];
// const top = [fill in with objects when done];
// const mid = [fill in with objects when done];

//


const cardRole = document.querySelector('.cardRole');
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
};
//

// changes the U.GG link under champ info
function changeChampBuildLink() {
    const currentBuildLink = document.querySelector('.buildURL');
    currentBuildLink.href = `${currentRole[currentChamp].buildsLink}`;
};
//

// changes the role display on the card of the randomizer
function changeCardRoleDisplay() {
    if (currentRole === jungle) {
        cardRole.innerHTML = 'Jungle';
    } else if (currentRole === adc) {
        cardRole.innerHTML = 'ADC';
    }
}


// combines all functions to change what you see on the randomizer card
function randomizeAll() {
    if (roleSelect.value === 'jungle') {
        currentRole = jungle;
    } else if (roleSelect.value === 'adc') {
        currentRole = adc;
    } else if (roleSelect.value === 'mid') {
        alert('work in progress for this role');

    } else if (roleSelect.value === 'top') {
        alert('work in progress for this role');

    } else if (roleSelect.value === 'support') {
        alert('work in progress for this role');

    }
    else if (roleSelect.value === 'allPositions') {
        alert('work in progress for this role');
    } else if (roleSelect.value === 'noRoleSelected') {
        alert('No role is currently selected.')
    };

    randomizeChampionSelected();
    changeChampImg();
    changeChampName();
    changeChampBuildLink();
    changeCardRoleDisplay();


}
//


randomizeButton.addEventListener('click', randomizeAll);

// const roles = [jungle, adc, support, top, mid];

// // jungler objects finish