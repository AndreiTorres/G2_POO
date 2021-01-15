export default CrudEventos;

class CrudEventos{
    constructor(eventos = []){
        this.eventos = eventos;
    }

    eliminarEvento(evento){
        this.eventos.pop(evento);
    }

    agregarEvento(evento){
        this.eventos.push(evento);
    }

    modificarEvento(evento){
        this.eventos.sort(evento)
    }

}