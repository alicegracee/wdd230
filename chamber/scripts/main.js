// footer 
// current year
document.querySelector('.year').textContent = new Date().getFullYear();

// last Modified
document.querySelector('.lastModified').textContent = new Date(document.lastModified).toUTCString();

// responsive navigation 
const hamButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
