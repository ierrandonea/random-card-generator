let card = document.querySelector(".card");

let buttonEx = document.querySelector("#botoninofensivo");
buttonEx.addEventListener("click", () => {
    let theSymbol = symbolShuffler();
    document.querySelector(".symbol-t").innerHTML = theSymbol;
    document.querySelector(".symbol-b").innerHTML = theSymbol;

    document.querySelector(".the-number").innerHTML = numbersShuffler();

    if (theSymbol === '&hearts;' || theSymbol === '&diams;') {
        card.classList.remove("card-black");
        card.classList.add("card-red");
    } else {
        card.classList.remove("card-red");
        card.classList.add("card-black");
    };

    console.log("New card shuffled", symbolShuffler(), numbersShuffler(), theSymbol);
});





let symbolShuffler = () => {

    let symbols = ['&spades;', '&clubs;', '&hearts;', '&diams;'];

    let symbolsIndex = Math.floor(Math.random() * symbols.length);

    return symbols[symbolsIndex];
}

let numbersShuffler = () => {

    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let numbersIndex = Math.floor(Math.random() * numbers.length);

    return numbers[numbersIndex];
}
