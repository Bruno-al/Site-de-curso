function Moldal(){
    const body = document.querySelector("body")

    let moldal = document.createElement("div")
    let moldal_box = document.createElement("div")
    let h4 = document.createElement("h4")
    let span = document.createElement("span")
    let p = document.createElement("p")
    let form = document.createElement("form")
    let input = document.createElement("input")
    let button = document.createElement("button")

    moldal.classList.add("moldal")
    moldal_box.classList.add("moldal-box")
    button.classList.add("botao_ativado")

    h4.innerText = "Cadastro"
    span.innerText = "X"
    p.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    input.placeholder = "Digite seu E-mail"
    button.innerText = "Entrar na lista para próxima turma"
    
    span.addEventListener("click", () => {
        moldal.remove()
    })

    form.append(input,button)
    moldal_box.append(h4,span,p,form)
    moldal.appendChild(moldal_box)
    body.appendChild(moldal)
}





function text_retraido(){
    let seta = document.querySelector(".ler_mais")
    let texto = document.querySelector(".texto")
    console.log(seta)
    console.log(texto)
    
    
    
    seta.addEventListener("click", () => {

            if(seta.style.diplay === ""){
                texto.style.display = "inline"
                seta.style.src = "/img/angle-up.svg"
            }else{
                seta.style.display = ""
                seta.src = "/img/angle-down.svg"
            }
        })
        
}
    
text_retraido()