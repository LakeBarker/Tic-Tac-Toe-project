const warGame = {
    //always start on the 'X' players turn//
    turnX: true,
    //initialize the arrays which will be the state of 'X' and 'O', we check these for end states//

    stateX: [],

    stateO: [],
    //create an array of arrays, these states are win states, or end states, and we check the stateX or stateO against them
    endStates : [
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
        ['2','4','6'],
    ]
}

//we now need to add a listener so players can try and beat eachother at Global Thermonuclea... uh, Tic Tac Toe...//
document.addEventListener(click, event => {
    const target = event.target
    const freeSpace = target.classList.contains('gameGrid')
    const disabledCell = target.classList.contains('disabled')

    //now we loop to see if the player clicks on an available, or taken space//
    if (freespace && !disabledCell) {
        
    }
});