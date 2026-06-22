let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");

let turnO = false;

const winPatterns = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]

];

const showWinner = (winner) => {

    msg.innerText = `Winner is ${winner}`;

    boxes.forEach((box) => {
        box.disabled = true;
    });

};

const checkWinner = () => {

    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (
            pos1 !== "" &&
            pos2 !== "" &&
            pos3 !== ""
        ) {

            if (
                pos1 === pos2 &&
                pos2 === pos3
            ) {

                showWinner(pos1);
                return;
            }
        }
    }
    let filledBoxes = 0;

    boxes.forEach((box) => {
        if (box.innerText !== "") {
            filledBoxes++;
        }
    });

    if (filledBoxes === 9) {
        msg.innerText = "It's a Draw!";
    }
};

const resetGame = () => {

    turnO = false;

    msg.innerText = "Player X Turn";

    boxes.forEach((box) => {

        box.innerText = "";
        box.disabled = false;

    });

};

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turnO) {

            box.innerText = "O";
            turnO = false;

            msg.innerText = "Player X Turn";

        }

        else {

            box.innerText = "X";
            turnO = true;

            msg.innerText = "Player O Turn";

        }

        box.disabled = true;

        checkWinner();

    });

});

resetBtn.addEventListener("click", resetGame);