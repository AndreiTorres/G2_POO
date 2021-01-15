class Cubiculo extends Ubicacion{

    /**
     * Creates an instance of Cubiculo.
     * @param {*} nombre
     * @param {*} nivel
     * @param {*} cooX
     * @param {*} cooY
     * @param {*} [maestros=[]]
     * @memberof Cubiculo
     */
    constructor (nombre, nivel, cooX, cooY, maestros = []){
        super(nombre, nivel, cooX, cooY);
        this.maestros = maestros;
    }

    /**
     *
     *
     * @param {*} maestros
     * @memberof Cubiculo
     */
    setMaestros(maestros){
        this.maestros = maestros;
    }

    /**
     *
     *
     * @return {*} 
     * @memberof Cubiculo
     */
    getMaestros(){
        return this.maestros;
    }
}

export default Cubiculo;