function checkWord( board, word ) {
    word = word.toUpperCase().split("");
    let arr  = [-5, -4, -3, -1, 1, 3, 4, 5];
    board = board.reduce( (s,v) => s.concat(v))
    
    return true
}

const board =  [["I","L","A","W"],
                ["B","N","G","E"],
                ["I","U","A","O"],
                ["A","S","R","L"] ];
// const word = "BINGO"
// const word = "LINGO"
const word = "SINUS";

console.log(checkWord(board, word));