const getTotalIsles = function (grid) {


  // write your code here
  if (!grid || grid.length === 0) {
    return 0;
}

const rows = grid.length;
const cols = grid[0].length;
const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

const dfs = (r, c) => {
    // Check for out of bounds or if it's water or already visited
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W' || visited[r][c]) {
        return;
    }
    // Mark the current land as visited
    visited[r][c] = true;
    // Explore all four directions
    dfs(r + 1, c);  // down
    dfs(r - 1, c);  // up
    dfs(r, c + 1);  // right
    dfs(r, c - 1);  // left
  };

  let islandCount = 0;
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L' && !visited[r][c]) {
              islandCount++;
              dfs(r, c); // start a DFS for a new island
          }
      }
  }

  return islandCount;


};

module.exports = getTotalIsles;