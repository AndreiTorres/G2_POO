class Edificio{
    constructor(name, lugar, salon = []) {
        this.name = name;
        this.lugar = lugar;
        this.salon = salon;
    }


    getName() {
        return this.name;
    }

    getLugar(){
        return this.lugar;
    }

    getSalon() {
        return this.salon;
    }
  
    setName(name) {
      this.name = name;
    }
  
    setLugar(lugar) {
      this.lugar = lugar;
    }
  
    setSalon(salon) {
      this.salon = salon;
    }
  
}



class Salon{

    constructor(name, lugar, nivel) {
        this.name = name;
        this.lugar = lugar;
        this.nivel = nivel;
    }
    getName() {
        return this.name;
    }

    getLugar(){
        return this.lugar;
    }

    getNivel() {
        return this.nivel;
    }
  
    setName(name) {
      this.name = name;
    }
  
    setLugar(lugar) {
      this.lugar = lugar;
    }
  
    setNivel(nivel) {
      this.salon = nivel;
    }
      
}

class Lugar{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.punto = "" + x + ", " + y;
    }
  
  getPunto() {
    return this.punto;
  }
}


class Maestro{
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

class Cubiculos{
    constructor(maestros = [], horainicial, horafinal) {
        this.maestro = maestros;
        this.horainicial = horainicial;
        this.horafinal = horafinal;
    }

    getHoraFinal() {
        return this.horafinal;
    }

    getHoraInicial() {
        return this.horainicial;
    }

    setMaestro(maestro = []) {
        this.maestro = maestro;
    }

    getMaestro() {
        return this.maestro;
    }
}

class Horario{
    constructor(hora, minutos) {
      this.hora = hora;
      this.minutos = minutos;  
    }

    getHora() {
        return this.hora;
    }

    getMinutos() {
        return this.minutos;
    }

    setHora(hora) {
        this.hora = hora;
    }

    setMinutos(minutos) {
        this.minutos = minutos;
    }


}



var lugar1 = new Lugar(2, 3);
var salon1 = new Salon("C8", lugar1, 1);
var salon2 = new Salon("C88", lugar1, 2);
var salones = new Array();
salones.push(salon1);
salones.push(salon2);
var Edificio1 = new Edificio("Complejo A", lugar1, salones);
//Edificio1.getSalon();
//Edificio1.getLugar();
//Edificio1.getName();
//salon1.getName();

console.log(Edificio1.getSalon());

