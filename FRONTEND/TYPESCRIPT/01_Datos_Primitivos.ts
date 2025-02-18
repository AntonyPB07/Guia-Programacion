let clubAmerica: number;
let papaChuca: number = 11;
let fidalgo: number = 1;
let juegaFidalgo: boolean = true;

function partidoConca(equipo1: number, equipo2: number, juegaFidalgo: boolean){
    if(juegaFidalgo) equipo1+= fidalgo;
    if(equipo1 < equipo2) console.log(`Gana papaChuca`);
    if(equipo1 > equipo2) console.log('Gana el America');
};
//* partidoConca(clubAmerica, papaChuca, juegaFidalgo);