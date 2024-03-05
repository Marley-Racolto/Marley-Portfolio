let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{

    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{

    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{

    menu.classList.remove('abrir-menu')
})

function toggleMenu() {
    if (window.innerWidth <= 1000) {  
        btnMenu.style.display = "block";
    } else {
        btnMenu.style.display = "none";
        menu.classList.remove('abrir-menu'); // Feche o menu se a tela for maior que 1000px
    }
}

// Chame a função para garantir que o botão de menu seja exibido corretamente no carregamento da página
toggleMenu();

// Adicione um ouvinte de evento para redimensionamento da janela
window.addEventListener('resize', toggleMenu);

function scrollToSection(sectionId, offset) {
    var section = document.getElementById(sectionId);
    var sectionPosition = section.getBoundingClientRect().top;
    var bodyPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollToPosition = sectionPosition + bodyPosition - offset;
    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
    });
}



