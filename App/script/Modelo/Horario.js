export default Horario;

class Horario {

    constructor(hora, minutos) {
        this.hora = hora;
        this.minutos = minutos;
    }

    setHorario(hora, minutos) {
        this.hora = hora;
        this.minutos = minutos;
    }

    getHorario() {
        return this.hora + " : " + this.minutos;
    }
}