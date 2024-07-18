

let nombre = prompt("ingresá tu nombre")

let num1 = prompt("antes de empezar: cuantos anos tienes?"); 


if(num1 === 30){
    alert("aun somos jovenes")
}

if(num1 <=26 && num1 != "" ){
    alert("no necesitas una calculadora 😂")
}

if(num1 > 30){
    alert("veterano 🥸")
}

if(nombre === "" || num1 === ""){
    alert("nombre o edad inválido")
}
else{
    alert("tu nombre es: " + nombre + " " + "y tu edad es: " + num1)
}




let numeron = parseInt(prompt("ingrese un numero que este entre 300 y 600"));

while( numeron = isNaN(numeron) ||  numeron == ""){
    numeron = prompt("intenta nuevamente")

}
while (numeron < 300 || numeron > 600){
    numeron = parseInt(prompt("numero invalido, intenta nuevamente"))
}
console.log("felicitaciones tu número es: " + numeron)






const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones .forEach(boton => {
    boton.addEventListener("click", ()=> {
        const botonApretado = boton.textContent;

        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "F1 and come back!"){
                pantalla.textContent = 0;
            } else{
            pantalla.textContent = pantalla.textContent.slice(0, -1)
        }   return
        }

        if(boton.id === "igual"){
            try{
            pantalla.textContent = eval(pantalla.textContent);
        }
        catch{
            pantalla.textContent = "F1 and come back!"
        }

            return
        }
        if( pantalla.textContent === "0" || pantalla.textContent === "F1 and come back!"){
            pantalla.textContent = botonApretado
        }
        else{
            pantalla.textContent += botonApretado
        }
        
    })
})


