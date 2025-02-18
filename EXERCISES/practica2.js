class persona {
    constructor(pais, color){
        this.pais = pais;
        this.color = color;
    }
    info_persona(){
        return `Antonio es ${this.pais} y es de color ${this.color}`
    }
}
let persona1 = new persona('Mexicano', 'Café');
console.log(persona1.info_persona());