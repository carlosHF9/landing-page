

let ButtonMenu = document.querySelector('#button-menu')
let Menu = document.querySelector('#menu')



ButtonMenu.addEventListener('click', (e) => {
    if(!Menu.style.width) Menu.style.width = '0px'
    Menu.style.width = Menu.style.width === '0px' ? '320px' : '0px'
})
