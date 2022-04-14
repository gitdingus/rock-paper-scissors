function computerPlay(){
    let rand = Math.floor(Math.random() * 3);

    switch (rand){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissors";
        default:
            console.log("Error in computerPlay()");
    }
}