'use strict';

class PostIt {
  private _backgroundColor: string;
  private _text: string;
  private _textColor: string;
  
  constructor(backgroundColor: string, textColor: string, text?: string) {
    this._backgroundColor = backgroundColor;
    this._textColor = textColor;
    
    if (text === undefined) {
      this._text = 'Hello Word!';
    } else {
      this._text = text;
    }
  }
}

let idea1 = new PostIt('orange', 'blue', 'Idea 1');
let awsome = new PostIt('pink', 'black', 'Awsome');
let superB = new PostIt('yellow', 'green', 'SuperB!')
console.log(idea1);
console.log(awsome);
console.log(superB);