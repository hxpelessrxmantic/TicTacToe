var cells = document.querySelectorAll('.cell');
var turn = 0;
var grid_values = ["","","","","","","","",""];
let isGameActive = true;

cells.forEach(cell => {
    cell.addEventListener('click' ,() => {
        if(turn ===0)
        cell.style.backgroundColor="red";
        else
        cell.style.backgroundColor="blue"
        turn = 1-turn
    })
});

function handleCellPlayed(clickedCell, clickedCellIndex) {
    grid_values[clickedCellIndex] = turn;
    clickedCell.innerHTML = turn;
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('id'));

    if (grid_values[clickedCellIndex] !== "" || !isGameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
}

