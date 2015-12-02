//This is an example of how you can overload a function.
//In this case we defined 3 functions to handle different types of inputs.



var suits = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x: {suit: string; card: number;}[]): number;
function pickCard(x: number): {suit: string, card: number};
function pickCard(x) : any {
    if(typeof x == "object"){
	var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number"){
	var pickedSuit = Math.floor(x/13);
        return {suit: suits[pickedSuit], card: x % 13};
    }
}

var myDeck = [{suit: "diamonds", card: 2}, {suit: "spades", card: 10}, {suit: "hearts", card: 4}];

var pickedCard1 =  myDeck[pickCard(myDeck)];
alert("card " + pickedCard2.card + " of " + pickedCard1.suit);

var pickedCard2 = pickCard(15);
alert("card " + pickedCard2.card + " of " + pickedCard2.suit);


