let burgerMenu = document.querySelector('.burger__menu');

const avatarVideo = document.getElementById('avatar');
const avatarVideo2 = document.getElementById('avatar2');
const btnAgain = document.getElementById('btn');
const all = document.querySelector('.all');
const btnSkip = document.getElementById('skip');


btnAgain.addEventListener('click', function () {
   avatarVideo.play();
   avatarVideo.muted = false;
})

// btnSkip.addEventListener('click', function () {
//    avatarVideo2.play();
// })

// function handeMouseover() {
//    avatarVideo.play();
// }

// all.addEventListener('mouseover', handeMouseover());

// all.removeEventListener('mouseover', handeMouseover())

document.querySelector('.cap').addEventListener('mouseover', () => {
   document.querySelector('.capabilites-btn').classList.toggle('active-btn');
})

document.querySelector('.cap').addEventListener('mouseout', () => {
   document.querySelector('.capabilites-btn').classList.remove('active-btn');
})

document.querySelector('.plat').addEventListener('mouseover', () => {
   document.querySelector('.platform-btn').classList.toggle('active-btn');
})

document.querySelector('.plat').addEventListener('mouseout', () => {
   document.querySelector('.platform-btn').classList.remove('active-btn');
})

document.querySelector('.work').addEventListener('mouseover', () => {
   document.querySelector('.works-btn').classList.toggle('active-btn');
})

document.querySelector('.work').addEventListener('mouseout', () => {
   document.querySelector('.works-btn').classList.remove('active-btn');
})

document.querySelector('.back').addEventListener('mouseover', () => {
   document.querySelector('.back-btn').classList.toggle('active-btn');
})

document.querySelector('.back').addEventListener('mouseout', () => {
   document.querySelector('.back-btn').classList.remove('active-btn');
})

document.querySelector('.again').addEventListener('mouseover', () => {
   document.querySelector('.hear-again').classList.toggle('active-btn');
})

document.querySelector('.again').addEventListener('mouseout', () => {
   document.querySelector('.hear-again').classList.remove('active-btn');
})





