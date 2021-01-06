class Evento {
    constructor(nombreEvento, ubicacion, descricionEvento, hora, responsable){
        this.nombreEvento = nombreEvento;
        this.ubicacion = ubicacion;
        this.descricionEvento = descricionEvento;
        this.hora = hora;
        this.responsable = responsable;
    }

    setNombreEvento(nombreEvento){ this.nombreEvento = nombreEvento }
    setDescripcionEvento(descricionEvento){ this.descripcionEvento = descripcionEvento }
    setHora(hora){ this.hora = hora }
    setResponsable(responsable){ this.responsable = responsable }
    
    
    getNombreEvento(){ return this.nombreEvento }
    getUbicacion(){ return this.ubicacion }
    getDescricionEvento(){ return this.descricionEvento }
    getHora(){ return this.hora }
    getResponsable(){ return this.responsable }
}

export default Evento;