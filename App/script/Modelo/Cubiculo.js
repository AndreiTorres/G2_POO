class Cubiculo extends Ubicacion{
    constructor (nombre, nivel, cooX, cooY, maestros = []){
        super(nombre, nivel, cooX, cooY);
        this.maestros = maestros;
    }

    setMaestros(maestros){
        this.maestros = maestros;
    }

    getMaestros(){
        return this.maestros;
    }
}

export default Cubiculo;