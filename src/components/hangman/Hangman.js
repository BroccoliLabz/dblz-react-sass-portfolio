import React, { Component } from 'react';
import { randomWord } from './words';
import Typewriter from 'typewriter-effect';


import './Hangman.scss';

import img0 from './images/0.png';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.gif';

import str1 from './images/1strike.png';
import str2 from './images/2strike.png';
import str3 from './images/3strike.png';
import str4 from './images/4strike.png';
import str5 from './images/5strike.png';
import str6 from './images/6strike.png';

import rst from './images/reset.png';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);

    this.state = {
      nWrong: 0,
      guessed: new Set(),
      // answer: "apple"
      answer: randomWord(),
    };

    this.handleGuess = this.handleGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  // reset the game and put things in default
  resetGame() {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    // deconstructor
    const { answer, guessed } = this.state;

    return answer.split('').map((ltr) => (guessed.has(ltr) ? ltr : '_'));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;

    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    const { handleGuess } = this;
    const { guessed } = this.state;

    return 'abcdefghijklmnopqrstuvwxyz'.split('').map((ltr, index) => (
      <button
        key={index}
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    const { nWrong, answer } = this.state;
    const { images, maxWrong } = this.props;

    let alternateText = `${this.state.nWrong} wrong guesses`;
    // const { guessedWord, generateButtons } = this;

    return (
      <div id='hangman' className={this.active ? 'Hangman' : 'blocked Hangman'}>
        <h1>
          <Typewriter
            options={{
              strings: ['Hang man', 'Dead Man'],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              pauseFor: 1500,
              delay: 'natural',
            }}
          />
        </h1>
        <div className='screen'>
          <div className='game'>
            <div className='stage'>
              <img src={images[nWrong]} alt={alternateText} />
            </div>
            <div className='score'>
              {nWrong === 1 ? <img src={str1} alt='' /> : <></>}
              {nWrong === 2 ? <img src={str2} alt='' /> : <></>}
              {nWrong === 3 ? <img src={str3} alt='' /> : <></>}
              {nWrong === 4 ? <img src={str4} alt='' /> : <></>}
              {nWrong === 5 ? <img src={str5} alt='' /> : <></>}
              {nWrong === 6 ? <img src={str6} alt='' /> : <></>}
            </div>
          </div>

          {answer === this.guessedWord().join('') ? (
            <div className='result'>
              <div>
                <h2 className='bold'> NOICE!! </h2>
              </div>
              <div>
                Your Answer: <h2 className='bold'> {answer} </h2>
              </div>
              <div className='button'>
                <button id='reset' onClick={this.resetGame}>
                  <img src={rst} alt='' />
                </button>
              </div>
            </div>
          ) : nWrong === maxWrong ? (
            <div className='result'>
              <div>
                he <h2 className='bold'>dead</h2>💀{' '}
              </div>
              <div>
                Word was: <h2 className='bold'>{answer}</h2>
              </div>
              <div className='button'>
                <button id='reset' onClick={this.resetGame}>
                  <img className='arrow rotating' src={rst} alt='' />
                </button>
              </div>
            </div>
          ) : (
            <div className='controls'>
              <p className='word'>{this.guessedWord()}</p>
              <p className='btns'>{this.generateButtons()}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Hangman;
