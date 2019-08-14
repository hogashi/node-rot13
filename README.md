# node-rot13

rot13 in node

## Usage

```javascript
import Rot13, { rotate } from '@hogashi/rot13';

// offset is 13 in default
const rot13 = new Rot13();
const c1 = rot13.encrypt('Golgo13'); // 'Tbytb13'
const d1 = rot13.decrypt(c1); // 'Golgo13'

// set offset
const rot7 = new Rot13(7);
const c2 = rot7.encrypt('Double-O-7'); // 'Kvbisl-V-7'
const d2 = rot7.decrypt(c2); // 'Double-O-7'

// or, rotate string simply
const c3 = rotate('large offset', 51); // 'kzqfd neerds'
const c4 = rotate('taken remainder with 26', -51); // 'ublfo sfnbjoefs xjui 26'
```
