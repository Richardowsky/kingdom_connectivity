'use strict';

module.exports = function countPaths(n, m, array) {
  let edges = {};
  const ways = Array(n + 1);
  const visible = Array(n + 1);
  for (let i = 1; i <= n; i++) {
    edges[i] = {
      x:[],
      y: []
    };
    ways[i] = null;
    visible[i] = false;
  }
  for (let i = 0; i < m; i++) {
    const edge = array[i]
    edges[edge[0]].x.push(edge[1]);
    edges[edge[1]].y.push(edge[0]);
  }
  changeToVisible(1, edges, visible);
  ways[1] = 1;
  const result = pathSum(n, edges, ways, visible);
  return (result > 0 ? result : 'INFINITE PATHS');
}

function pathSum(s, edges, ways, visible) {
  if (ways[s] !== null && ways[s] >= 0) {
    return ways[s];
  }

  if (!visible[s]) {
    ways[s] = 0;
    return 0;
  }

  if (ways[s] < 0) {
    return -2;
  }
  ways[s] = -1;
  let sum = 0;
  for (let i = 0; i < edges[s].y.length; i++) {
    const way = pathSum(edges[s].y[i], edges, ways, visible);
    if (way < 0) {
      return way;
    }
    sum += way;
  }
  sum %= 1000000000
  ways[s] = sum;
  return sum;
}

function changeToVisible(s, edges, visible) {
  if (visible[s]) {
    return;
  }
  visible[s] = true;
  for (let i = 0; i < edges[s].x.length; i++) {
    changeToVisible(edges[s].x[i], edges, visible);
  }
}