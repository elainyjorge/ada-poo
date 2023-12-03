// Desafio 04

class FormasGeometricas {
  constructor(cor){
    this.cor = cor || 'black'
  }

 calcularArea(){
  return "Resultado da área calculada!"
 } 

 imprimir() {
  return "Figura geométrica"
 }
}

class Quadrado extends FormasGeometricas{
  constructor(base, cor){
    super(cor)
    this.base = base
  }

  calcularArea(){
    return this.base ** 2
  }

  imprimir(){
    return `<div style="width:${this.base}px; height:${this.base}px; background-color:${this.cor}"></div>`;
  }
}

class Triangulo extends FormasGeometricas{
  constructor(base, altura, cor){
    super(cor)
    this.base = base
    this.altura = altura
  }

  calcularArea(){
    return (this.base * this.altura) / 2
  }

  imprimir(){
    return `<div style="width:0; height:0; border-left:${this.altura}px solid transparent; border-right:${this.altura}px solid transparent; border-bottom:${this.base}px solid ${this.cor};"></div>` 
  }
}

class Circulo extends FormasGeometricas{
  constructor(raio, cor){
    super(cor)
    this.raio = raio
  }

  calcularArea(){
    return Math.PI * this.raio ** 2
  }

  imprimir(){
    return `<div style="width:${this.raio}px; height:${this.raio}px; border-radius:50%; background-color:${this.cor}"></div>`;
  }
}

const figura = new Circulo(200, 'green')
const figura2 = new Triangulo(150, 100)
const figura3 = new Quadrado(75)

console.log(figura.calcularArea())
document.write(figura.imprimir())

console.log(figura2.calcularArea())
document.write(figura2.imprimir())

console.log(figura3.calcularArea())
document.write(figura3.imprimir())

// Desafio 05

class Animal {
   nome
   idade
   especie

  constructor(nome, idade, especie){
    this.nome = nome
    this.idade = idade
    this.especie = especie
  }

  imprimirDados(){
    return `O ${this.nome} tem ${this.idade} meses de idade e é da espécie ${this.especie}.`
  }

  emitirSom() {
   return "barulho qualquer"
  }
}

class Cachorro extends Animal{
  constructor(nome, idade, especie, tamanho) {
    super(nome, idade, especie)
    this.tamanho = tamanho
  }

  emitirSom() {
    return "au au"
   }

  imprimirDados(){
  return `O ${this.nome} tem ${this.idade} meses de idade, é da espécie ${this.especie} e tem tamanho ${this.tamanho}.`
}
 
}

class Gato extends Animal{
  constructor(nome, idade, especie, cor) {
    super(nome, idade, especie)
    this.cor = cor
  }

  imprimirDados(){
    return `O ${this.nome} tem ${this.idade} meses de idade, é da espécie ${this.especie} e tem cor ${this.cor}.`
  }
  emitirSom() {
    return "miau"
   }  
}

const bicho = new Animal('Leão', 30, 'Phantera Leo')
const gato = new Gato('Valente', 12, 'Felis Catus', 'cinza')
const cachorro = new Cachorro('Lessi', 18, 'Caramelo', 'porte médio' )
console.log(bicho.emitirSom())
console.log(bicho.imprimirDados())

console.log(gato.emitirSom())
console.log(gato.imprimirDados())

console.log(cachorro.emitirSom())
console.log(cachorro.imprimirDados())