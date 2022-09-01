// function Vehiculos(marca,modelo,color,anio,km,precio,cuotas,patente,vendido){  //funcion constructora de objetos.

//     this.marca = marca
//     this.modelo = modelo
//     this.color = color
//     this.anio = anio
//     this.km = km
//     this.precio = precio
//     this.cuotas = cuotas
//     this.patente = patente
//     this.vendido = vendido

// }

// let ford = new Vehiculos('Ford','Corolla','azul',2019,150000,12,'APL123', 'No venidido')
// let toyota = new Vehiculos('Toyota', 'Corolla','blanco',2019,0,100000,14,'JJK116','No venidido')

// let Autos= [ford, toyota]

// console.log(Autos)



let autos = [{

    marca : 'Ford', 
    modelo : 'Fiesta',
    color :'azul', 
    anio : 2019,
    km : 200,
    precio : 150000,
    cuotas : 12,
    patente : 'APL123',
    vendido : false

},{
    marca : 'Toyota', 
    modelo : 'Corolla',
    color :'blanco', 
    anio : 2019,
    km : 0,
    precio : 100000,
    cuotas : 14,
    patente : 'JJK116',
    vendido : false
}
]

//console.log(autos)
module.exports = autos  //exporto modulo.-