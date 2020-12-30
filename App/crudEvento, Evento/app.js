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

class Evento {
    constructor(nombre, lugar, descricion, hora, responsable){
        this.nombre = nombre;
        this.lugar = lugar;
        this.descricion = descricion;
        this.hora = hora;
        this.responsable = responsable;
    }

}

class Lugar{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

var Cafe = new Lugar(213, 123);
var evento = new Evento("Pizza", Cafe, "Chido tu coto", 4, "Jose" );
var evento2 = new Evento("Pizza2", Cafe, "Chido tu coto", 4, "Jose" );

var eventos = new CrudEventos([]);

eventos.agregarEvento(evento);
eventos.agregarEvento(evento2);
console.log(eventos);



