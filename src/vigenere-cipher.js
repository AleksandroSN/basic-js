const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type ? "direct" : "reverse";
  }

  vigenereCipher(str, key, type) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    let mi, ki, c;
    let keyIndex = 0;
    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      mi = alphabet.indexOf(str[i >= str.length ? i % str.length : i]);
      ki = alphabet.indexOf(key[keyIndex]);
      ki = type === "decrypt" && type !== undefined ? -ki : ki;

      if (mi === -1) {
        result += str[i];
      } else {
        c = alphabet[(alphabet.length + (mi + ki)) % alphabet.length];
        result += c;
        keyIndex++;
      }

      if (keyIndex >= key.length) keyIndex = 0;
    }
    return result;
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error("arguments is Empty");

    const crypto = this.vigenereCipher(str, key, "encrypt");

    return this.type === "reverse"
      ? crypto.split("").reverse().join("")
      : crypto;
  }
  decrypt(str, key) {
    if (!str || !key) throw new Error("arguments is Empty");

    const crypto = this.vigenereCipher(str, key, "decrypt");

    return this.type === "reverse"
      ? crypto.split("").reverse().join("")
      : crypto;
  }
}

module.exports = VigenereCipheringMachine;
