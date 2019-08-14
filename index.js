const CODE_A = 'A'.charCodeAt(0);
const CODE_Z = 'Z'.charCodeAt(0);
const CODE_a = 'a'.charCodeAt(0);
const CODE_z = 'z'.charCodeAt(0);

export const rotate = (str = '', _offset = 13) => {
  if (!Number.isInteger(_offset)) {
    throw 'offset must be integer';
  }
  const offset = _offset % 26;
  return str
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);
      if (code < CODE_A) {
        return char;
      } else if (code <= CODE_Z) {
        const added = code + offset;
        if (added < CODE_A) {
          return String.fromCharCode(CODE_Z - (CODE_A - added - 1));
        }
        if (CODE_Z < added) {
          return String.fromCharCode(CODE_A + (added - CODE_Z - 1));
        }
        return String.fromCharCode(added);
      } else if (code < CODE_a) {
        return char;
      } else if (code <= CODE_z) {
        const added = code + offset;
        if (added < CODE_a) {
          return String.fromCharCode(CODE_z - (CODE_a - added - 1));
        }
        if (CODE_z < added) {
          return String.fromCharCode(CODE_a + (added - CODE_z - 1));
        }
        return String.fromCharCode(added);
      } else {
        return char;
      }
    })
    .join('');
};

export default class Rot13 {
  constructor(offset = 13) {
    if (Number.isInteger(offset)) {
      this.offset = offset;
    } else {
      throw 'offset must be integer';
    }
  }

  encrypt(str) {
    return this.rotate(str, this.offset);
  }

  decrypt(str) {
    return this.rotate(str, -this.offset);
  }

  rotate(str, offset) {
    return rotate(str, offset);
  }
}
