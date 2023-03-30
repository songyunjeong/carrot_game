'use strict';
import Popup from './popup.js';
import GameBuilder from './game.js';

const gameFinishBanner = new Popup();
const game = new GameBuilder()
  .withGameDuration(60)
  .withCarrotCount(15)
  .withBugCount(10)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case 'cancel':
      message = 'REPLAY ❓';
      break;
    case 'win':
      message = 'YOU WON 🎉';
      break;
    case 'lose':
      message = 'YOU LOST 💩';
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
