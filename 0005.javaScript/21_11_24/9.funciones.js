function sayHello () {
    console.log("Hola");
}


sayHello();
sayHello();
sayHello();

//

function sayHelloWithName(name) {
    console.log("Hello "+ name);
}

sayHelloWithName("Manolo")
sayHelloWithName("Mario")

//

function sumNums (numA, numB) {
    const total = numA + numB;
    console.log("El total es: " + total);
}

sumNums(3, 8)

//

function calculateAgeWithName (name, birthYear, actualYear = 2024)  {
    const age = actualYear - birthYear;
    console.log(name + " tiene " + age + " años en "+ actualYear);
}

calculateAgeWithName("Manolo", 1983)

//

function doubleNums (num) {
    const total = num * 2;
    return total
}

console.log(doubleNums(8));

const x = doubleNums(9);
console.log(x);

//IMC

function calcularIMC(pesoKG, estaturaM){
    const total = pesoKG / (estaturaM * estaturaM);
    console.log(total);
}



function resultadoIMC (total) {
    if(total<18.5){
        console.log("peso bajo");
    }else if(total >= 18.5 && total < 25) {
        console.log("normal");
    }else if(total >= 25 && total< 30) {
        console.log("sobrepeso");
    }else{
        console.log("Obesidad")
    }
}

calcularIMC(69, 1.71)
