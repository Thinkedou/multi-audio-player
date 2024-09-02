// display.js
export function displayTeams(teams1,teams2) {
	const team1 = document.querySelector('#team1>p')
	const team2 = document.querySelector('#team2>p')
    team1.textContent = teams1.join(' - ')
    team2.textContent = teams2.join(' - ')

}
