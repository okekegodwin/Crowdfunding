const hamburger = document.querySelector('.hamburger')
const contact = document.querySelector('.contact')

hamburger.addEventListener('click', () => {
    if (contact.style.transform === 'scale(1)') {
        (contact.style.transform = 'scale(0)');

    } else (contact.style.transform = 'scale(1)');
});