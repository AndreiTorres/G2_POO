class Evento {

    /**
     * Creates an instance of Evento.
     * @param {*} nombreEvento
     * @param {*} ubicacion
     * @param {*} descricionEvento
     * @param {*} hora
     * @param {*} responsable
     * @memberof Evento
     */
    constructor(nombreEvento, ubicacion, descricionEvento, hora, responsable){
        this.nombreEvento = nombreEvento;
        this.ubicacion = ubicacion;
        this.descricionEvento = descricionEvento;
        this.hora = hora;
        this.responsable = responsable;
    }

    /**
     *
     *
     * @param {*} nombreEvento
     * @memberof Evento
     */
    setNombreEvento(nombreEvento){ this.nombreEvento = nombreEvento }
    
    /**
     *
     *
     * @param {*} descricionEvento
     * @memberof Evento
     */
    setDescripcionEvento(descricionEvento){ this.descripcionEvento = descripcionEvento }
    
    /**
     *
     *
     * @param {*} hora
     * @memberof Evento
     */
    setHora(hora){ this.hora = hora }
    
    /**
     *
     *
     * @param {*} responsable
     * @memberof Evento
     */
    setResponsable(responsable){ this.responsable = responsable }
    
    /**
     *
     *
     * @return {*} 
     * @memberof Evento
     */
    getNombreEvento(){ return this.nombreEvento }
    
    /**
     *
     *
     * @return {*} 
     * @memberof Evento
     */
    getUbicacion(){ return this.ubicacion }
    
    /**
     *
     *
     * @return {*} 
     * @memberof Evento
     */
    getDescricionEvento(){ return this.descricionEvento }
    
    /**
     *
     *
     * @return {*} 
     * @memberof Evento
     */
    getHora(){ return this.hora }
    
    /**
     *
     *
     * @return {*} 
     * @memberof Evento
     */
    getResponsable(){ return this.responsable }
}

export default Evento;