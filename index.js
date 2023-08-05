
const animarMain = () => {
     
    const anime = document.querySelectorAll("[data-anime]");
    

    anime.forEach((elemento) => {

        const altura = window.pageYOffset + window.innerHeight * 0.90;

        if(altura > elemento.offsetTop){
            elemento.classList.add("show")
        } 
    })


     
}

animarMain()

window.addEventListener("scroll", animarMain)



const abrirItem = () => {

    const item = document.querySelectorAll(".item-show");

    const alturaPagina = window.pageYOffset + window.innerHeight * 0.90; 
    
    item.forEach((elemento) => { 

       if(alturaPagina > elemento.offsetTop){  
        elemento.classList.add("item-visible")                
        elemento.setAttribute("aria-expanded", "true")

    }  
    })
 

}



window.addEventListener("scroll", abrirItem) 


    

        const adicionarEstiloTitulo = () => {

        
        const titulo = document.querySelectorAll(".title-skills")

       titulo.forEach((titulo) => {

        const altura = titulo.offsetTop + window.innerHeight * 0.90;

        if(altura > titulo.offsetTop) titulo.classList.add("title-decoration")
            
            
        


       })

    }


    window.addEventListener("scroll", adicionarEstiloTitulo)





const abrirAccordion = () => {

    const selecionarAccordionHeader = document.querySelectorAll(".accordion-header");

    
selecionarAccordionHeader.forEach((elemento) => {
    const proximoFilho = elemento.nextElementSibling

    
    elemento.addEventListener("click", () => {
        if(!proximoFilho.classList.contains("open-accordion")){
            proximoFilho.classList.remove("close-accordion")
            proximoFilho.classList.add("open-accordion")
            elemento.setAttribute("aria-expanded", "true")
            elemento.classList.add("active")

            

        } else {
            elemento.classList.remove("active")
            proximoFilho.classList.remove("open-accordion")
            proximoFilho.classList.add("close-accordion")
            elemento.setAttribute("aria-expanded", "false")
        }
    })

})

     
}

abrirAccordion()

const abrirMenu = () => {
     const ulMobile = document.querySelector(".ul-mobile");
 
     const span = document.querySelector(".hamburguer");

  
     span.addEventListener("click", () => {
        ulMobile.classList.toggle("open-hamburguer")

   })

 

}

abrirMenu();


const alterarIdiomaPT = () => {

   const select = document.querySelector("select");

    select.addEventListener("change", () => {
           if(select.value === "pt"){ 
            window.location.href = "./index.html"
        } else {
          
            window.location = "./en.html"
        }
    } )
       
 }

alterarIdiomaPT()

const alterarIdiomaEn = () => {

   const select = document.querySelector("select");

    select.addEventListener("change", () => {
           if(select.value === "en"){ 
            window.location.href = "./en.html"
        } else {
          
            window.location = "./index.html"
        }
    } )
       
 }

alterarIdiomaEn()




