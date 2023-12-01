// Desafio 01

class MathUtils {
  constructor(){}
  static PI() {
    return 3.14
  }

  static sum(n1, n2) {
    return n1 + n2;
  }

  static sub(n1, n2){
    return n1 - n2;
  }

  static mul(n1, n2){
    return n1 * n2
  }

  static div(n1, n2) {
    return n1 / n2
  }
}

const m = new MathUtils();

console.log(MathUtils.PI());
console.log(MathUtils.sum(20, 2));
console.log(MathUtils.sub(20, 2));
console.log(MathUtils.mul(20, 2));
console.log(MathUtils.div(20, 2));

// Desafio 02
 
class Circulo {
  
  constructor(raio){
    this.raio = raio
}

  static calcularArea(raio) {
    return Math.PI * raio ** 2
  }

  static calcularCircunferencia(raio){
    return 2 * Math.PI * raio
  }
}

const areaCirculo = Circulo.calcularArea(10).toFixed(2)
const circunferenciaCirculo = Circulo.calcularCircunferencia(10).toFixed(2)

console.log(`A área do círculo é ${areaCirculo}`)
console.log(`A circunferência do círculo é ${circunferenciaCirculo}`)

// Desafio 03

class Conta {
  #numeroConta
  #nomeTitular
  #saldo

  constructor(numeroConta, nomeTitular, saldo = 0){
    this.#numeroConta = numeroConta
    this.#nomeTitular = nomeTitular
    this.#saldo = saldo
  }

  get numeroConta(){
    return this.#numeroConta
  }

  get nomeTitular() {
    return this.#nomeTitular
  }

  get saldo(){
    return this.#saldo
  }

  efetuarDepositos(valor){
    this.#saldo += valor
    console.log(`Deposito de R$ ${valor} realizado com sucesso! Seu saldo é de R$ ${this.#saldo} `)
  }

  efetuarSaques(valor) {
    if (this.#validarSaldo(valor)){
      this.#saldo -= valor
      console.log(`Saque de ${valor} efetuado com sucesso! Seu saldo é de R$ ${this.#saldo}`)
    } else{
      console.log(`Saque não permitido. Saldo insuficiente!`)
    }
  }

    #validarSaldo(valor){
      return this.#saldo >= valor
      }
    } 

  const primeiraConta = new Conta(589, "João")

  console.log(primeiraConta)
  primeiraConta.efetuarDepositos(500)
  primeiraConta.efetuarDepositos(200)
  primeiraConta.efetuarSaques(300)
  primeiraConta.efetuarSaques(500)




