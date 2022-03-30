

let ButtonMenu = document.querySelector('#button-menu')
let Menu = document.querySelector('#menu')



ButtonMenu.addEventListener('click', (e) => {
    if(!Menu.style.width) Menu.style.width = '0px'
    Menu.style.width = Menu.style.width === '0px' ? '320px' : '0px'
})



document.querySelectorAll('.item').forEach( element => {
    element.addEventListener('click', () => {
        Menu.style.width = '0px'
    })
})


const firstProject = document.querySelector('.frontend-mentor-projects')
const softwareProject = document.querySelector('.projects-session')
const hero = document.querySelector('.hero')



const options ={
    rootMargin: "-150px"
}

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach( entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('slide-right')
        }

        else {
            entry.target.classList.remove('slide-right')
        }
    })
}, options)


const softwareProjectObserver = new IntersectionObserver(function(entries, observer){
    entries.forEach( entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in')
        }

        else {
            entry.target.classList.remove('fade-in')
        }
    })
}, options)

const heroObserver = new IntersectionObserver(function(entries, observer){
    entries.forEach( entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in')
        }

        else {
            entry.target.classList.remove('fade-in')
        }
    })
})



observer.observe(firstProject)
softwareProject.observe(softwareProject)
heroObserver.observe(hero)