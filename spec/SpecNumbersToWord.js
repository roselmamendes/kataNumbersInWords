describe("Numero por extenso",function(){
    beforeEach(function(){
        numeroPorExtenso = new NumeroPorExtenso();    
    })
    
    it("deve retornar o numero um por extenso",function(){
        expect(numeroPorExtenso.converteNumero(1)).toBe("um");
    })
    
    it("deve retornar o numero dois por extenso",function(){
        expect(numeroPorExtenso.converteNumero(2)).toBe("dois");
    })
    
})