//Eventos del DOM - Clicks
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')
// heading.addEventListener('click', function(){
//     heading.textContent = ' Heading al dar click'
// })
// heading.addEventListener('mouseenter', function(){
//     heading.textContent = ' Saliendo...'
// })

enlaces.forEach( enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e.target)
    })
})

