var cells = document.querySelectorAll('.cell');
var turn = 0;
var grid_values = ["","","","","","","","",""];
var values = [true,true,true,true,true,true,true,true,true];
let isGameActive = true;

cells.forEach(cell => {
    cell.addEventListener('click' ,() => {
        var index=cell.getAttribute("id");
        console.log(values[index]);

        if(turn ===0 && values[index])
        {
        cell.style.backgroundColor="red";
        values[index]= false;
        grid_values[index]=0;
        console.log(grid_values[index]);
        turn = 1-turn;
        }
        else if (values[index])
        {
        cell.style.backgroundColor="blue";
        values[index]=false;
        grid_values[index]=1;
        console.log(grid_values[index]);
        turn = 1-turn;
        }
        // console.log(cell);
    else{
        
        }
        
    })
});

