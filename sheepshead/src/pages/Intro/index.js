import React from 'react';

function Intro() {
  return (
    <div>
      <h1>Welcome to Sheepshead!</h1>
      <p>
        <h3>Instructions:</h3>
        Sheepshead is a five player card game played with a standard deck of cards. Each 2,3,4,5, and 6 card is set aside and not used during the game. 
        
        The remaining cards are split into four suits:

        Trump

        Hearts

        Clubs

        Spades

        The trump suit consists of the following cards in rank order:

        1. Queen of Clubs
        2. Queen of Spades
        3. Queen of Hearts
        4. Queen of Diamonds
        5. Jack of Clubs
        6. Jack of Spades
        7. Jack of Hearts
        8. Jack of Diamonds
        9. Ace of Diamonds
        10. Ten of Diamonds
        11. King of Diamonds
        12. Nine of Diamonds
        13. Eight of Diamonds
        14. Seven of Diamonds

        Note: In Sheepshead, the Queens and Jacks are all considered part of the trump suit, and not part of the suit on their card face.

        Each of the other suits is ranked as follows:

        1. Ace
        2. Ten
        3. King
        4. Nine
        5. Eight
        6. Seven

        Some cards in the game are worth points. The point values are as follows:

        Ace-11 points
        Ten - 10 points
        King - 4 points
        Queen - 3 points
        Jack - 2 points

        Nines, Eights, Sevens - 0 points each
        
        The game is played in a series of hands, with each hand played as follows:

        1.First deal out 6 cards to each player. This should leave 2 cards facedown in the deck (referred to as the 'blind')

        2. beginning with the player left of the dealer, each player will have a chance to 'take the bid'. If they pass the next player to their left has a chance to pick. When a player takes the bid, they become the 'picker'. They pick up the blind, add it to their hand, then 'bury' any two cards from their hand back into the blind. These cards count as taken by the picker.

        3. Whichever player has the Jack of Diamonds is the partner, and they are on the picker's team. However, this information is a secret and only that player will know for sure what team they are on until the Jack of Diamonds is played.

        The players are now split into two teams. The picker and partner versus the three defenders. In the case that the picker has the Jack of Diamonds or buried it in the blind, the picker is alone against four defenders. 

        4. The player left of the dealer plays the first card (regardless of who the picker is). This is known as leading. Play proceeds to the left until each player has played one card. While playing, every player must follow the suit of the first card played if they are able. For example, if player 1 plays a heart, each other player MUST play a heart if they have one. Remember that the Queen of Hearts and the Jack of Hearts are not Hearts in this game, but are instead trump. So if a trump card were led, each player would HAVE to play a trump card.

        5. Once each player has played one card, the trick is finished. If there are no trump on the trick, the player who played the highest card in the led suit wins the trick. If there are trump, the player who played the highest trump wins the trick. They place it face down near them.

        6. Once all 6 tricks have been played, each team tallies their point totals (listed above). There are 120 total points in each hand. Post round scoring is as follows:

        Picking team score:

        0: Picker -6, partner -3, each defender +3

        1-30: Picker -4, partner -2, each defender +2

        31-60: Picker -2, partner -1, each defender +1

        61-89: Picker +2, partner +1, each defender -1

        90-119: Picker +4, partner +2, each defender -2

        120: Picker +6, partner +3, each defender -3

        Play continues with a new hand. The game is typically played to ten hands, or however long the players feel like playing.
      </p>
    </div>

  );
}

export default Intro;