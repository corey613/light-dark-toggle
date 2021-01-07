const checkbox = document.getElementById('chk');

checkbox.addEventListener('change', () => {
// change the theme of the website
document.body.classList.toggle('dark');
});
