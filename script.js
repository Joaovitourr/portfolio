const hamburguer = document.getElementById('hamburguer')

hamburguer.addEventListener('click', () => {
    
    if(item.style.display == 'block'){
        item.style.display = 'none'
    } else{ 
        item.style.display = 'block'
    } 
}) 
 
const itemScroll = document.querySelectorAll('[data-anime]');


const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.95
    itemScroll.forEach(element => {
        if(windowTop > element.offsetTop){ 
            element.classList.add('animate')
        } 

    })
} 
window.addEventListener('scroll', () => {
    animeScroll();
}) 


animeScroll()
