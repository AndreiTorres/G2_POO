export default Maestro;

class Maestro{
    constructor(nombre, horario){
        this.nombre = nombre;
        this.horario = horario;
    }
    
    setNombre(nombre){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

    setHorario(Horario){
        this.horario = horario;
    }

    getHorario(){
        return this.horario;
    }

}