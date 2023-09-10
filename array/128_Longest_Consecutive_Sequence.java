class Solution {
    public int longestConsecutive(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }
        int longest = 0;
        for (int num : nums) {
            // Check if the number is the start of a sequence
            if (!set.contains(num - 1)) {
               int count = 1;
               // Get the longest sequence of the num
                while (set.contains(num + 1)) {
                    num++;
                    count++;
                }
                longest = Math.max(longest, count);
            }
        }
        return longest;
    }
}