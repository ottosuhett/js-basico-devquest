function somar(numero1, numero2) { 
    let soma = numero1 + numero2;
    return "A soma de "+ numero1+" e "+ numero2+" é: " + soma; 
}
function subtrair(numero1, numero2){
    let subtracao = numero1 - numero2
    return "A subtracao de "+ numero1+" e "+ numero2+" é: " + subtracao;
}
function dividir(numero1, numero2){
    let divisao = numero1 / numero2
    return "A divisao de "+ numero1+" por "+ numero2+" é: " + divisao;
}
function multiplicar(numero1, numero2){
    let multiplicacao = numero1 * numero2
    return "A multiplicacao de "+ numero1+" e "+ numero2+" é: " + multiplicacao;
}

let resultadoSoma = somar(2,4)
let resultadoSubtracao = subtrair(10,5)
let resultadoDivisao = dividir(10,2)
let resultadoMultiplicacao = multiplicar(2,5)

console.log(resultadoSoma)
console.log(resultadoSubtracao)
console.log(resultadoDivisao)
console.log(resultadoMultiplicacao)


