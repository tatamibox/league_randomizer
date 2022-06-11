
let randomizeButton = document.getElementsByClassName('randomActivate');
function testButton() {
    alert('hello!');
}


randomizeButton.addEventListener('click', testButton());


// const roles = [jungle, adc, support, top, mid];

// const jungle = [amumu,];
// const adc = [fill in with objects when done];
// const support = [fill in with objects when done];
// const top = [fill in with objects when done];
// const mid = [fill in with objects when done];


// jungler objects start
const amumu = {
    champName: 'Amumu',
    position: 'Jungle',
    buildsLink: '',
    imageLink: 'imgs\champions\amumu_LoT.jpg'
}

const leeSin = {
    champName: 'Lee Sin',
    position: 'Jungle',
    buildsLink: '',
    imageLink: 'imgs\champions\leesin_LoT.jpg'
}

// // jungler objects finish