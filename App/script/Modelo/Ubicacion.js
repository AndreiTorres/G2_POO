class Ubicacion {

    constructor( nombre, nivel, x, y){
        this.nombre = nombre;
        this.nivel = nivel;
        this.x = x;
        this.y = y;
    };    

    getName() {
        return this.nombre;
    }
    getNivel(){
        return this.nivel;
    }
    getCoordenadas() {
        return this.x + this.y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setName(nombre) {
        this.nombre = nombre;
    }
    setNivel(nivel) {
        this.nivel = nivel;
    }
    setCoordenada(x, y) {
        this.x = x;
        this.y = y;
    }
    
}

exports = {Evento};