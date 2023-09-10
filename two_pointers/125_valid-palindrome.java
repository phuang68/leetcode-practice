class Solution {
    public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            // Skip all non letter char from the left
            if (!Character.isLetterOrDigit(s.charAt(left))) {
                left++;
                continue;
            }
            // Skip all non letter char from the right
            if (!Character.isLetterOrDigit(s.charAt(right))) {
                right--;
                continue;
            }
            // Comparing the characters in lowercase
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}