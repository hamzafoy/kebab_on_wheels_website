let menuArea = document.getElementById('kw_menu');
console.log(menuArea.getAttribute('src'))
let firstMenu = `img/kw_menu.png`;
let secondMenu = `img/kw_menu_2.png`;
let menuTernary = (menuArea.getAttribute('src') == `img/kw_menu.png`) ? `img/kw_menu_2.png` : `img/kw_menu.png`;


menuArea.addEventListener('click', () => {
    if(menuArea.getAttribute('src') == firstMenu) {
        menuArea.src = secondMenu
    } else if (menuArea.getAttribute('src') == secondMenu) {
        menuArea.src = firstMenu
    }
})