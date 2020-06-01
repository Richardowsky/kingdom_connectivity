const {assert} = require('chai');
const {performance} = require('perf_hooks');
const countPaths = require('../src/index');

describe('Test case 2', function () {
let time = 0
    it('n = 5, m = 5, count of paths 2', function () {
        let start = performance.now()
        const result = countPaths(5, 5, [[1, 2], [2, 4], [2, 3], [3, 4], [4, 5]])
        let end = performance.now()
        time += end - start;
        assert.equal(result, 2);
    });

    it('n = 5, m = 5, result should equal INFINITE PATHS', function () {
        let start = performance.now()
        const result = countPaths(5, 5, [[1, 2], [4, 2], [2, 3], [3, 4], [4, 5]])
        let end = performance.now()
        time += end - start;
        assert.equal(result, 'INFINITE PATHS');
    });

    it('n = 20, m = 33, count of paths 9', function () {
        let start = performance.now()
        const result = countPaths(20, 33, [
            [10, 15], [15, 17], [8, 18], [12, 5], [11, 4], [16, 14], [10, 17], [12, 5], [4, 12], [10, 15], [1, 7], [2, 20], [1, 10], [2, 20], [12, 5], [15, 9], [8, 11], [16, 6], [4, 12], [13, 2], [15, 17], [3, 15], [14, 8], [11, 19], [1, 16], [9, 20], [9, 13], [16, 18], [14, 6], [1, 3], [12, 5], [4, 16], [6, 8]])
        let end = performance.now()
        time += end - start;
        assert.equal(result, 9);
    });

    it('n = 10, m = 10, count of paths INFINITE PATHS', function () {
        let start = performance.now()
        const result = countPaths(10, 10, [
            [1, 2], [2, 3], [3, 4], [4, 6], [6, 7], [7, 9], [9, 10], [10, 8], [8, 4], [4, 1]])
        let end = performance.now()
        time += end - start;
        assert.equal(result, 'INFINITE PATHS');
    });

    it('n = 20, m = 32, count of paths 12', function () {
        let start = performance.now()
        const result = countPaths(20, 32, [
            [3, 12], [4, 3], [16, 14], [18, 6], [15, 16], [13, 11], [6, 4], [10, 2], [1, 15], [15, 17], [13, 2], [16, 14], [18, 19], [17, 8], [1, 16], [16, 14], [6, 9], [19, 4], [4, 5], [13, 18], [12, 7], [7, 20], [12, 7], [17, 16], [8, 3], [9, 10], [2, 11], [19, 4], [10, 13], [13, 11], [3, 20], [16, 8]])
        let end = performance.now()
        time += end - start;
        assert.equal(result, 12);
    });

    // it('n = 20, m = 32, count of paths 5', function () {
    //     let start = performance.now()
    //     const result = countPaths(20, 32, [
    //         [2, 11], [4, 3], [16, 14], [18, 6], [15, 16], [13, 11], [6, 4], [10, 2], [1, 15], [16, 18], [13, 2], [16, 14], [18, 19], [17, 8], [2, 15], [16, 14], [6, 9], [19, 4], [5, 4], [13, 18], [12, 7], [7, 20], [13, 8], [17, 16], [8, 3], [9, 10], [2, 11], [19, 4], [10, 13], [13, 11], [3, 20], [16, 8]])
    //     let end = performance.now()
    //     time += end - start;
    //     assert.equal(result, 5);
    // });

    after(() => {

        console.log('Test case 2 = ' + time)
    });
});