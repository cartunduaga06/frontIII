
//ejemplosde funcion map

const tripulantes = [
    {nombre: "Mr. Poindibags", esImpostor: true},
    {nombre: "Bombom", esImpostor: false},
    {nombre: "Tito", esImpostor: false},
    {nombre: "X-Ray", esImpostor: false},
    {nombre: "Fixfox", esImpostor: false},
    ];

   
let tripulacion = tripulantes.map(
    tripulante =>
    `${ tripulante.nombre} ${tripulante.esImpostor ? '' : 'no ' }era el impostor`
    );

    console.log(tripulacion);

    //ahora con key 

    let tripulacion2 = tripulantes.map(
        (tripulante, index) => <StatusTripulante key={index} {...tripulante}/>
        );
        
        lista = <ul>{ tripulacion2 }</ul>;

        console.log(lista);
