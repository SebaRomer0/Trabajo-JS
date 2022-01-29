// Codigo del Menu (Hamburguer)

const hamburguesa = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguesa.addEventListener('click', ()=>{
    menu.classList.toggle("muestra")
    $("li").css("align-self-center")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('muestra') && e.target != menu && e.target != hamburguesa){
        menu.classList.toggle("muestra")
    };
});

