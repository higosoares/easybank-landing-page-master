document.getElementById('menu-mobile').addEventListener('click', event => {
    document.getElementById('menu').className = 'menu show'
})

document.getElementById('menu-mobile-close').addEventListener('click', event => {
    document.getElementById('menu').className = 'menu'
})