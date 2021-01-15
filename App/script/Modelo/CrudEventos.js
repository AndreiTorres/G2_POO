class CrudEventos{

    /**
     * Creates an instance of CrudEventos.
     * @param {*} [eventos=[]]
     * @memberof CrudEventos
     */
    constructor(eventos = []){
        this.eventos = eventos;
    }

    /**
     *
     *
     * @param {*} evento
     * @memberof CrudEventos
     */
    eliminarEvento(evento){
        this.eventos.pop(evento);
    }

    /**
     *
     *
     * @param {*} evento
     * @memberof CrudEventos
     */
    agregarEvento(evento){
        this.eventos.push(evento);
    }

    /**
     *
     *
     * @param {*} evento
     * @memberof CrudEventos
     */
    modificarEvento(evento){
        this.eventos.sort(evento)
    }

}


export default CrudEventos;
