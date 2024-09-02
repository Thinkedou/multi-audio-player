import {audioPlayer} from './audioPlayer.js'


const allPlayers = document.querySelectorAll('audio')

// allPlayers.forEach((player)=>{
//     audioPlayer.init(player)
// })

const player1 = {...audioPlayer}
const player2 = {...audioPlayer}


player1.init(allPlayers[0])
player2.init(allPlayers[1])