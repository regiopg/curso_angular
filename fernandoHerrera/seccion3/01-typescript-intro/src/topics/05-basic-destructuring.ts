interface Details{
    author:string,
    year:number
}

interface AudioPlayer{
    audioVolume:number,
    songDuration:number,
    song:string,
    details:Details
}

const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author:'Ed Sheeran',
        year:2015
    }
}

let { song:cancion, songDuration:duracion, details:{author:autor,year:anio} } = audioPlayer; 
// let { details:detalles } = audioPlayer;
// let { author:autor, year:anio} = detalles;

console.log(`Canción: ${audioPlayer.song}`)
console.log(`Author: ${audioPlayer.details.author}`)
console.log(`Canción: ${cancion}, duración: ${duracion}`)
console.log(`Author: ${autor}, año: ${anio}`);

// const dbz:string[]=['goku','vegeta','trunk'];
// const trunks:string = dbz[3]||'No hay personaje'
const [ , , trunks, otro='No encontrado']:string[]=['goku','vegeta','trunk'];

console.log(`Personaje 3: ${trunks}`)
console.log(`Personaje 3: ${otro}`)