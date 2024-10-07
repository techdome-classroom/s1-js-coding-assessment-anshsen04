const decodeTheRing = function (s, p) {

    // write your code here
    const m = s.length;
    const n = p.length;

    // Create a DP table
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    // Initial state
    dp[0][0] = true; // Both message and pattern are empty

    // Handle patterns that consist only of '*' at the start
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1]; // '*' can match an empty sequence
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                // '*' can match 0 or more characters
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
                // Match single character or '?'
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n]; // Final result indicating if the message matches the pattern


};
  
module.exports = decodeTheRing;