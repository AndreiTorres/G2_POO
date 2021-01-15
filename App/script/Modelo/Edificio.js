export default Edificio;

class Edificio extends Ubicacion{
    
    /**
     * Creates an instance of Edificio.
     * @param {*} name
     * @param {*} nivel
     * @param {*} cooX
     * @param {*} cooY
     * @param {*} cooX2
     * @param {*} cooY2
     * @memberof Edificio
     */
    constructor(name, nivel, cooX, cooY, cooX2, cooY2 ) {
        super(name, nivel, cooX, cooY);
        this.cooX2 = cooX2;
        this.cooY2 = cooY2;
    }
    
    /**
     *
     *
     * @return {*} 
     * @memberof Edificio
     */
    getCoordenadas(){
        return this.cooX2 + this.cooY2;
    }

}
