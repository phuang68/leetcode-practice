class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        LinkedList<List<Integer>> res = new LinkedList<List<Integer>>();

        if(nums.length < 3) return res;

        Arrays.sort(nums);

        for (int i = 0; i < nums.length; i++) {
            int start = nums[i];

            if (nums[i] > 0) break;

            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            int left = i + 1;
            int right = nums.length - 1;

            while (left < right) {
                if (start + nums[left] + nums[right] == 0) {
                    List<Integer> solution = new ArrayList<>();
                    solution.add(start);
                    solution.add(nums[left]);
                    solution.add(nums[right]);
                    res.add(solution);
                    // Skip duplicate from left
                    while (left < right && nums[left] == nums[left + 1]) {
                        left++;
                    }
                    // Skip duplicate from right
                    while (left < right && nums[right] == nums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                } else if (start + nums[left] + nums[right] < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return res;
    }
}