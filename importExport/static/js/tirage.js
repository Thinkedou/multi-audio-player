// tirage.js
export function makeTeams(arr) {
	if(Array.isArray(arr)){
        const half=arr.length/2
        let teams1=[]
        let copyOfTeams = [...arr]
        for (let i = 0; i < half; i++) {
            let idx= getRandom(copyOfTeams.length)
            teams1.push(copyOfTeams[idx]) // j'ajoute un membre à cette équipe
            copyOfTeams.splice(idx,1) // du coup je l'enlève
        }
        return [teams1,copyOfTeams] // je retourne la team 1 et le reste de l'autre
    }else{
        console.warn('makeTeams attend un tableau, coquin va')
    }
}


function getRandom(max){
    return Math.floor(Math.random()*max)
}
