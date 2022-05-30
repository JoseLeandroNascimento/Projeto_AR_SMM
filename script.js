
this.addEventListener("load",()=>{

    let btnEsquerda = document.querySelector(".btn-esquerda");
    let btnDireita = document.querySelector(".btn-direita")
    let btnTop = document.querySelector(".btn-top");
    let btnBottom = document.querySelector(".btn-bottom");
    let btnZoom = document.querySelector(".btnZoom");
    let camera = document.querySelector("#cameraId");
    

    let distancia = camera.getAttribute("position");

    let zoomStatus = true;
    let sSolar = document.querySelector("#sSolar");
    let rotacaoAtual = sSolar.getAttribute("rotation");

    btnEsquerda.addEventListener("click",()=>{

        rotacaoAtual.y -= 10;


        sSolar.setAttribute("rotation",`${rotacaoAtual.x} ${rotacaoAtual.y} ${rotacaoAtual.z}`)
    })

    btnZoom.addEventListener("click",()=>{

        zoomStatus = !zoomStatus;

        if(distancia.z == 120){

        distancia.z = 150;
        }else{

        distancia.z = 120;
        }

        camera.setAttribute("position",`${distancia.x} ${distancia.y} ${distancia.z}`);


    })

    btnDireita.addEventListener("click",()=>{

        rotacaoAtual.y += 10;


        sSolar.setAttribute("rotation",`${rotacaoAtual.x} ${rotacaoAtual.y} ${rotacaoAtual.z}`)
    })

    btnTop.addEventListener("click",()=>{

        rotacaoAtual.x += 10;


        sSolar.setAttribute("rotation",`${rotacaoAtual.x} ${rotacaoAtual.y} ${rotacaoAtual.z}`)
    })

    btnBottom.addEventListener("click",()=>{

        rotacaoAtual.x -= 10;


        sSolar.setAttribute("rotation",`${rotacaoAtual.x} ${rotacaoAtual.y} ${rotacaoAtual.z}`)
    })

    function listagemDosPlanetas(){
        
        fetch("./planetas.json").then(response=>{
            
            response.text().then(data=>{

                console.log(JSON.parse(data))
            })
        })
    }

    listagemDosPlanetas();
})
