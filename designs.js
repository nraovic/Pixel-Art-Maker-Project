//add event listener to the submit button to create the canvas(grid) with the makeGrid funtion
document.getElementById("sizePicker").addEventListener("submit", makeGrid);

function makeGrid(evt) {
    //clear the previous canvas (table)
    const canvas = document.getElementById("pixel_canvas");
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    
    //get the values of canvas' width and height
    const width = document.getElementById('input_width').value;
    const height = document.getElementById('input_height').value;
    
    //create canvas
    //loop through the height value to append rows to the canvas
    let i = 0;
    while (i < height) {   
        const row = document.createElement("tr");
        canvas.appendChild(row);
        //loop through the width value to append cells to the canvas
        let j = 0;
        while (j < width) {
            const cell = document.createElement("td");
            row.appendChild(cell);
            //add event listener to each cell to change the background color on 'click'
            cell.addEventListener("click", function () {
                //get the color from the color picker
                const color = document.getElementById('colorPicker').value;
                //set it as a background color of the cell
                cell.style.backgroundColor = color;
            })
            j++;
        }
        i++;
    }
    //prevent refreshing the page and clearing the canvas
    evt.preventDefault();
};
