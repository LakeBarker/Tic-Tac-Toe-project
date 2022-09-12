const warGame = {
    //always start on the 'X' players turn//
    turnX: true,
    //initialize the arrays which will be the state of 'X' and 'O', we check these for end states//

    stateX: [],

    stateO: [],
    
    //create an array of arrays, these states are victory states, and we check the stateX or stateO against them
    victoryStates : [
        //column end states
        ['0','3','6'],
        ['1','4','7'],
        ['6','7','8'],
        //row end states
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        //diagonal end states
        ['0','4','8'],
        ['2','4','6']
    ]
}

//we now need to add a listener so players can try and beat eachother at Global Thermonuclea... uh, Tic Tac Toe...//
document.addEventListener('click', e => {
    const target = e.target
    //check if script is running
    console.log('script running')
    const freeSpace = target.classList.contains('gameGrid')
    const takenCell = target.classList.contains('taken')

//adding restart event listener
document.querySelector('.declareWar').addEventListener('click', () => {
    document.querySelector('.armistice').classList.remove('seen')
    document.querySelectorAll('.gameGrid').forEach(cell => {
        cell.classList.remove('taken', 'x', 'o')
    })

    warGame.turnX = true
    warGame.stateX = []
    warGame.stateO = []
})

    //now we loop to see if the player clicks on an available, or taken space//
    if (freeSpace && !takenCell) {
        //first we update the cell, then end turn
        const gridVal = target.dataset.value
        if (warGame.turnX === true) {
            warGame.stateX.push(gridVal)
        } else {
            warGame.stateO.push(gridVal)
        }
      console.log('pas push')
        target.classList.add('taken')
        if(warGame.turnX) {
            target.classList.add('x')
        } else {
            target.classList.add('o')
        }
    }
    //flip turn from current player to next player
    warGame.turnX = !warGame.turnX
    console.log('turn end')      
    
    console.log("checking for draw, win, and lose")
    //If the gameGrid does not have anymore freeSpace spots, show armistice message and declare war button
    if (!document.querySelectorAll('.gameGrid:not(.taken)').length) {
        document.querySelector('.armistice').classList.add('seen')
        document.querySelector('.armisticeText').textContent = 'Draw!'
        console.log("draw checked")
    }
    //loop through winning states, 'forEach' will cycle through every array in the victoryStates array, checking each condition
    warGame.victoryStates.forEach(victoryState => {
        const xVictory = victoryState.every(state => warGame.stateX.includes(state))
        const oVictory = victoryState.every(state => warGame.stateO.includes(state))

        if (xVictory || oVictory) {
            document.querySelectorAll('.gameGrid').forEach(cell => cell.classList.add('taken'))
            document.querySelector('.armistice').classList.add('seen')
            document.querySelector('.armisticeText').textContent = xVictory
                //the ?,: is a shorthand way of doing an if, else loop. very useful
                ? 'X wins!'
                : 'O wins!'
        }

    });

});