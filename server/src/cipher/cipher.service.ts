import { Injectable } from "@nestjs/common";

@Injectable()
export class CipherService {
  isUpperCase(char) {
    return char.match(/[A-Z]/);
  }

  isLowerCase(char) {
    return char.match(/[a-z]/);
  }

  cipher(phrase, offset) {
    let cipheredPhrase = "";

    for (let i = 0; i < phrase.length; i++) {
      if (this.isUpperCase(phrase[i])) {
        cipheredPhrase += String.fromCharCode(
          ((phrase.charCodeAt(i) + offset - 65) % 26) + 65
        );
      } else if (this.isLowerCase(phrase[i])) {
        cipheredPhrase += String.fromCharCode(
          ((phrase.charCodeAt(i) + offset - 97) % 26) + 97
        );
      } else {
        cipheredPhrase += phrase[i];
      }
    }

    return cipheredPhrase;
  }
}
