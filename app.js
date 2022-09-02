
//1ra OPCION
// let concesionaria = {  //OBJETO DE METODOS

//     autos : require('./autos.js'),  //requiero el modulo -> requiero el array de objetos.


//     buscarAuto : function(patenteI){

//     let AutoPorPatente = this.autos.find((objeto) => objeto.patente == patenteI)   ;
//         return AutoPorPatente
                    
//         // if (AutoPorPatente.length == 0) {

//         //         return null;

//         // } else{

//         //     return AutoPorPatente;
//         // }
//         // }
    
// }
// }

// console.log(concesionaria.buscarAuto('JJK116'))




//2DA OPCION

let autos = require('./autos.js'); //requiero el modulo -> requiero el array de objetos.


let concesionaria = {  //OBJETO DE METODOS

    
    autos: autos,   //GUARDO COMO VALOR EL MODULO IMPORTADO -> ARRAY DE OBJETOS.

    buscarAuto : function(patenteI){

        let autosArray = this.autos;
        let AutoPorPatente = autosArray.find(objeto => objeto.patente == patenteI)   ;
                              
        if (AutoPorPatente == undefined) {

            return(null);

        } else{

            return(AutoPorPatente);
        }
        },


        //CAMBIE EL CONSOE.LOG(null) Y EL CONSOE.LOG(AutoPorPatente) POR return(null) y return(AutoPorPatente) para poder seguir con el punto siguiente

    venderAuto : function(patenteII){

        let autoEncontrado2 = this.buscarAuto(patenteII); //barre array de objetos y devuelve el que cumple la condicion pasada de patente como argumento.

        autoEncontrado2.vendido = true  // a ese objeto obtenido le cambio el valor de la prop 'vendido'
        console.log(autoEncontrado2)
        },


    autosParaLaVenta: function(){

        let autosArrayIII = this.autos  //array de objetos de autos.
        let autosFiltrados = autosArrayIII.filter((auto) => auto.vendido == false) // barre cada objeto y se queda con los que cumple la condicion.
        
        return autosFiltrados   //CAMBIE EL CONSOE.LOG(autosFiltrados) POR return(autosFiltrados) para poder seguir con el punto siguiente en playground.
            
        },


    autosNuevos: function(){

        let autosDisp = this.autosParaLaVenta() //devuelve array de objetos cuyo valor de prop 'venidos' sea true.
        let autoFiltradosKM = autosDisp.filter(objeto => objeto.km <100)
        return(autoFiltradosKM)  //CAMBIE EL CONSOE.LOG(autoFiltradosKM) POR return(autoFiltradosKM) para poder seguir con el punto siguiente en playground.
        },
    

    listaDeVentas: function(){

        let listaPrecios = []
        let autosArrayIV = this.autos  //array de objetos de autos.
        let autosFiltrados = autosArrayIV.filter((auto) => auto.vendido == true) // barre cada objeto y se queda con los que cumple la condicion.
        
        autosFiltrados.forEach(objeto => listaPrecios.push(objeto.precio)) //barre el array de objetos y va metiendo en el array vacio los valores de objeto.precio
            
        return(listaPrecios) //CAMBIE EL CONSOE.LOG(listaPrecios) POR return(listaPrecios) para poder seguir con el punto siguiente en playground.

    },

    totalDeVentas: function(){

        
        let listaPreciosVendidos = []
        let autosArrayV = this.autos
        autosFiltradosVendidos = autosArrayV.filter((auto) => auto.vendido == true)
        if (autosFiltradosVendidos.length == 0){
            return (0)  //CAMBIE EL CONSOE.LOG(0) POR return(0) para poder seguir con el punto siguiente en playground.
        } else {
        autosFiltradosVendidos.forEach(objeto => listaPreciosVendidos.push(objeto.precio)) 
        let totalPrecioVentas = listaPreciosVendidos.reduce(function(acum, suma){
            return acum + suma})
            return (totalPrecioVentas) //CAMBIE EL CONSOE.LOG(totalPrecioVentas) POR return(totalPrecioVentas) para poder seguir con el punto siguiente en playground.
        }
    },

    puedeComprar: function(personaX,auto){

        console.log(personaX.capacidadDePagoTotal)
        console.log(personaX.capacidadDePagoEnCuotas)
      
        if ((personaX.capacidadDePagoEnCuotas > (auto.precio/auto.cuotas)) && (personaX.capacidadDePagoTotal >= auto.precio)){

            console.log (true)
        } else{
            console.log(false)
            
        }
                
    }
}   
    
concesionaria.puedeComprar(({
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }), ({

        marca : 'Ford', 
        modelo : 'Fiesta',
        color :'azul', 
        anio : 2019,
        km : 200,
        precio : 160000,
        cuotas : 12,
        patente : 'APL123',
        vendido : false
    
    }))

    // puedeComprar: function(){

    //     let persona = {
    //         nombre: "Juan",
    //         capacidadDePagoEnCuotas: 20000,
    //         capacidadDePagoTotal: 100000
            
    //     };
    //     //console.log(persona.capacidadDePagoTotal)
    //     //console.log(persona.capacidadDePagoEnCuotas)
        
    //     let autosArrayVI = this.autos  //array de objetos autos.
    //     let capacidad = autosArrayVI.filter((auto) => ((persona.capacidadDePagoEnCuotas > (auto.precio/auto.cuotas)) && (persona.capacidadDePagoTotal >= auto.precio)))
    //     console.log(capacidad)
    //     if (capacidad.length !=0){
    //         console.log(true)
        
    // }


    
// concesionaria.buscarAuto('JJK116')
// console.log('************************************')
// concesionaria.buscarAuto('APL123')
// console.log('************************************')
// concesionaria.buscarAuto('etrtrt')
//concesionaria.venderAuto('JJK116')
//concesionaria.autosParaLaVenta()
//concesionaria.autosNuevos()
//concesionaria.listaDeVentas()
//concesionaria.totalDeVentas()
// concesionaria.puedeComprar(({
//     nombre: 'Juan',
//     capacidadDePagoEnCuotas: 20000,
//     capacidadDePagoTotal: 100000
//     }), ({

//         marca : 'Ford', 
//         modelo : 'Fiesta',
//         color :'azul', 
//         anio : 2019,
//         km : 200,
//         precio : 80000,
//         cuotas : 12,
//         patente : 'APL123',
//         vendido : false
    
//     }))