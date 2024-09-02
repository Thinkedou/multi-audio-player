import {makeTeams}    from './tirage.js'
import {displayTeams} from './display.js'

const PLAYERS =['Amanda', 'Pierre', 'Medhi','colette', 'Alma', 'Jacques', 'Betty', 'Bob', 'Alistair', 'Manu', 'Yvon', 'Diane', 'Andréas'];



document.querySelector('.test-button').addEventListener('click',()=>{
    const TEAMS = makeTeams(PLAYERS); // cela va renvoyer un tableau de tableaux
    displayTeams(TEAMS[0],TEAMS[1]);
})
