class Maestro{

    /**
     * Creates an instance of Maestro.
     * @param {*} nombre
     * @param {*} horario
     * @memberof Maestro
     */
    constructor(nombre, horario){
        this.nombre = nombre;
        this.horario = horario;
    }
    
    /**
     *
     *
     * @param {*} nombre
     * @memberof Maestro
     */
    setNombre(nombre){
        this.nombre = nombre;
    }


    /**
     *
     *
     * @return {*} 
     * @memberof Maestro
     */
    getNombre(){
        return this.nombre;
    }

    /**
     *
     *
     * @param {*} Horario
     * @memberof Maestro
     */
    setHorario(Horario){
        this.horario = horario;
    }

    /**
     *
     *
     * @return {*} 
     * @memberof Maestro
     */
    getHorario(){
        return this.horario;
    }

}

export default Maestro;