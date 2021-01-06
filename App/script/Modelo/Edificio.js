export default Edificio;

class Edificio extends Ubicacion{
    
    constructor(name, nivel, cooX, cooY, cooX2, cooY2 ) {
        super(name, nivel, cooX, cooY);
        this.cooX2 = cooX2;
        this.cooY2 = cooY2;
    }
    
    getCoordenadas(){
        return this.cooX2 + this.cooY2;
    }

}
