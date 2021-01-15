class Horario {

    /**
     * Creates an instance of Horario.
     * @param {*} hora
     * @param {*} minutos
     * @memberof Horario
     */
    constructor(hora, minutos) {
        this.hora = hora;
        this.minutos = minutos;
    }

    /**
     *
     *
     * @param {*} hora
     * @param {*} minutos
     * @memberof Horario
     */
    setHorario(hora, minutos) {
        this.hora = hora;
        this.minutos = minutos;
    }

    /**
     *
     *
     * @return {*} 
     * @memberof Horario
     */
    getHorario() {
        return this.hora + " : " + this.minutos;
    }
}

export default Horario;