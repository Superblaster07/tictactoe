let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let newgm = document.querySelector('.new-game');

let turnO = true;

const win = [
    // Rows
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row

    // Columns
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column

    // Diagonals
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
];
let i = 0;
boxes.forEach((box) => {
    box.addEventListener('click',() => {
        console.log("box clicked",box[i])
        if (turnO){
            turnO = false;
            box.innerText = 'X'
        }else{
            turnO = true;
            box.innerText = 'O'
        }
        box.disabled = true;
        checkWinner();
    })
});

const checkWinner = () => {
    for (let pat of win){
        console.log(boxes[pat[0]],boxes[pat[1]],boxes[pat[2]])
        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;

        if (pos1 != "" && pos2!= "" && pos3!= ""){
            if (pos1 === pos2 && pos2 === pos3){
                console.log("winner")
                document.querySelector('.win').classList.remove('hide');
                document.querySelector('.winner').innerText = `winner is ${pos1}`
                for(let i of boxes){
                    i.disabled = true;
                }
            }
        }

    }
}

const resetgm = () => {
    let turnO = true;
    for(let i of boxes){
        i.disabled = false;
        i.innerText = '';
    }
    document.querySelector('.win').classList.add('hide');
};

reset.addEventListener("click", resetgm);

newgm.addEventListener('click', resetgm);