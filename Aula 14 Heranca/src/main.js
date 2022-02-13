class Veículo {
    constructor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log('acelerou')
    }
}

class Moto extends Veículo {
    empinar() {
        console.log(`empinou com ${this.rodas}  rodas`)
    }
}
const bross= new Moto(2)
bross.empinar()



class Veículo {
    constructor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log('acelerou')
    }
}

class Moto extends Veículo {
    empinar() {
        console.log(`empinou com ${this.rodas}  rodas`)
    }
    acelerar() {
        console.log('acelerou muuito')
    }
}
const bross= new Moto(2)
bross.acelerar()



class Veículo {
    constructor(rodas) {
        this.rodas = rodas
    }

    acelerar() {
        console.log('acelerou')
    }
}

class Moto extends Veículo {
    constructor(rodas, capacete){
        super(rodas)
        this.capacete = capacete
    }
    empinar() {
        console.log(`empinou com ${this.rodas} rodas`)
    } 
    
    taUsandoCapacete(){
        console.log(this.capacete)
    }
}      
const bross= new Moto(2, true)
bross.taUsandoCapacete()