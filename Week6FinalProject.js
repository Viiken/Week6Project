
player1Score = 0
player2Score = 0

class Deck {
  constructor() {
    this.deck = [];
    this.player1Hand = []
    this.player2Hand = []

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  shuffle(){
    const {deck} = this;
    let m = deck.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal(){
    const {deck} = this;
    
    var half = Math.floor(deck.length / 2);
    this.player1Hand = deck.slice(0,half)
    this.player2Hand = deck.slice(half)
  
    return this.player1Hand, this.player2Hand
  }


  round(){
    //const {player1Hand} = this.player1Hand
   //const {player2Hand} = this.player2Hand
    
    if(this.player1Hand.length != 0){
// picking two random cards
      var x, y;
      x = this.player1Hand.pop([(Math.floor(Math.random() * this.player1Hand.length))]);
      y = this.player2Hand.pop([(Math.floor(Math.random() * this.player2Hand.length))]);
// spliting the string into an array and getting the first value
      var xarr = x.split(" ")
      var yarr = y.split(" ")

// comparing the cards 
      if(parseInt(xarr[0]) > parseInt(yarr[0])){
          player1Score +=1;
          console.log(x + " - " + y)
          console.log("Player 1 wins a point!", '\n')
          this.round()
      }
      else if(parseInt(xarr[0]) < parseInt(yarr[0])){
          player2Score +=1;
          console.log(x + " - " + y)
          console.log("Player 2 wins a point!", '\n')
          this.round()
      }
      else{
        console.log(x + " - " + y)
          console.log("Tie, neither player gets a point", '\n')
          this.round()
      }
// when there are no more cards left
    }
    else{
      console.log("Player 1 Score: " + player1Score)
      console.log("Player 2 Score: " + player2Score, '\n')
      if(player1Score > player2Score){
        console.log("Player 1 wins!")
      }
      else if (player2Score > player1Score){
        console.log("Player 2 wins!")
      }
      else{
        console.log("It was a tie")
      }
    }
  }
  
}
// calling the above functions
function main(shuffledDeck){
  i = 0
  const deck1 = new Deck();
  deck1.shuffle()
  deck1.deal()
  deck1.round()
}
main()




