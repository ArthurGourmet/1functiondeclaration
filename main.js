// declarar funçoes
// o jeito convenvional

// o hosting da funçao permite sempre priorizar  aexecuçao dela
function FalaOI(){
    console.log('oi')
};

FalaOI()
// em uma variavel
const fala = function(){
    console.log('oi')
};
fala()

// funçao como parametro

const fala1 = function(){
    console.log('oi')
};
executaFuncion(fala1)
function executaFuncion (funcao){
    funcao()
}
// Arrow Funcion

const arrow = ()=>{
    console.log("oi")
}
arrow()

// funçoes em objetos

const obj ={
    oi(){
        console.log("oi")
    }
}
obj.oi()