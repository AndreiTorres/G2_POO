exports = {Evento};

class Ubicacion {

    /**
     * Creates an instance of Ubicacion.
     * @param {*} nombre
     * @param {*} nivel
     * @param {*} x
     * @param {*} y
     * @memberof Ubicacion
     */
    constructor( nombre, nivel, x, y){
        this.nombre = nombre;
        this.nivel = nivel;
        this.x = x;
        this.y = y;
    };    

    /**
     *
     *
     * @return {*} 
     * @memberof Ubicacion
     */
    getName() {
        return this.nombre;
    }

    /**
     *
     *
     * @return {*} 
     * @memberof Ubicacion
     */
    getNivel(){
        return this.nivel;
    }

    /**
     *
     *
     * @return {*} 
     * @memberof Ubicacion
     */
    getCoordenadas() {
        return this.x + this.y;
    }

    /**
     *
     *
     * @return {*} 
     * @memberof Ubicacion
     */
    getX() {
        return this.x;
    }

    /**
     *
     *
     * @return {*} 
     * @memberof Ubicacion
     */
    getY() {
        return this.y;
    }

    /**
     *
     *
     * @param {*} nombre
     * @memberof Ubicacion
     */
    setName(nombre) {
        this.nombre = nombre;
    }

    /**
     *
     *
     * @param {*} nivel
     * @memberof Ubicacion
     */
    setNivel(nivel) {
        this.nivel = nivel;
    }

    /**
     *
     *
     * @param {*} x
     * @param {*} y
     * @memberof Ubicacion
     */
    setCoordenada(x, y) {
        this.x = x;
        this.y = y;
    }
    
}