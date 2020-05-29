const {assert} = require('chai');
const {performance} = require('perf_hooks');
const countPaths = require('../src/index');

describe('Test case 1', function () {
let time= 0

    it('n = 10000, m = 89720, count of paths 460441436', function () {
        let start = performance.now()
        const result = countPaths(10000, 89720, [
        )
        let end = performance.now()
     time = end - start;
        assert.equal(result, 460441436);
    });


    after(() => {
        console.log('Test case 1 = ' + time)
    });
});