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
    
    it("deve retornar o numero três por extenso",function(){
        expect(numeroPorExtenso.converteNumero(3)).toBe("três");
    })
    
    it("deve retornar o numero quatro por extenso",function(){
        expect(numeroPorExtenso.converteNumero(4)).toBe("quatro");
    })
    
    it("deve retornar o numero vinte e um por extenso",function(){
        expect(numeroPorExtenso.converteNumero(21)).toBe("vinte e um");
    })
    
    it("deve retornar o numero vinte e dois por extenso",function(){
        expect(numeroPorExtenso.converteNumero(22)).toBe("vinte e dois");
    })
    
    it("deve retornar o numero vinte e nove por extenso",function(){
        expect(numeroPorExtenso.converteNumero(29)).toBe("vinte e nove");
    })
    
})