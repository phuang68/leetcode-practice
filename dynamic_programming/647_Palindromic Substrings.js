/**
 * https://leetcode-cn.com/problems/palindromic-substrings/
 * @param {string} s
 * @return {number}
 */

//DP: Time Complexity = Space Complexity = O(n^2) 
var countSubstrings = function(s) {
    const dp = Array.from(Array(s.length), () => Array(s.length).fill(false));
    var result = 0;
    for(let i = s.length - 1; i >=0; i--){
        for(let j = i; j < s.length; j++){
            if(s[i] == s[j]){
                if(j - i <= 1){
                    dp[i][j] = true;
                    result++;
                }else if(dp[i+1][j-1]){
                    dp[i][j] = true;
                    result++;
                }              
            }
        }
    }
    return result;
};

//Double pointer: Time Complexity = (n^2), Space Complexity = O(1)
var countSubstrings = function(s) { 
   var result = 0;
   const extend = (s, left, right, n) => {
       let res = 0;
       while(left>= 0 && right< n && s[left] == s[right]){
           left--;
           right++;
           res++;
       }
       return res;
   }

   for(let i = 0; i < s.length; i++){
       result += extend(s, i, i, s.length);//Extending from i as centre
       result += extend(s, i, i+1, s.length);//Extending from i and i+1 as centre
   }

   return result;
};