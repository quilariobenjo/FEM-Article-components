const button = document.getElementById('button');
const info = document.querySelector('.more-info');
const icon = document.querySelector('.share');
button.addEventListener('click', () => {
    info.classList.toggle('hide');
    if(info.classList.contains('active')) {
        icon.src = './images/icon-share2.svg'; 
        button.style.backgroundColor = 'hsl(217, 19%, 35%)';
        info.classList.remove('active');
    } else {
        icon.src = './images/icon-share.svg';
        button.style.backgroundColor = 'hsl(210, 46%, 95%)';
        info.classList.add('active');
    }
})