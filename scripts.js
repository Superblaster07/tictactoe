let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let newgm = document.querySelector('.new-game');

let turnO = true;
let count = 0;
const win = [
    
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8], 

    
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8], 

   
    [0, 4, 8], 
    [2, 4, 6]  
];


let i = 0;
boxes.forEach((box) => {
    box.addEventListener('click',() => {
        console.log("box clicked",box[i])
        if (turnO==true){
            turnO = false;
            box.innerText = 'X'
        }else{
            turnO = true;
            box.innerText = 'O'
        }
        count = count + 1;
        
        box.disabled = true;
        checkWinner();
        if (count == 9){
            document.querySelector('.win').classList.remove('hide');
            document.querySelector('.winner').innerText = `Draw`;
        }
        console.log(count)
    })
});

const checkWinner = () => {
    for (let pat of win){
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
    
};

const resetgm = () => {
    let turnO = true;
    for(let i of boxes){
        i.disabled = false;
        i.innerText = '';
    }
    document.querySelector('.win').classList.add('hide');
    count = 0;
};

reset.addEventListener("click", resetgm);

newgm.addEventListener('click', resetgm);