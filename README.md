# Coverage

## How to test:
1. Clone this repo: `git clone https://github.com/Richardowsky/kingdom_connectivity.git`
2. `npm i`
3. `npm test`

## How to use:
```javascript
const countPaths = require('./src/index');
    
    let array = [[1, 2], [2, 4], [2, 3], [3, 4], [4, 5]]
   

let res = countPaths(5, 5, array);
console.log(res)
```