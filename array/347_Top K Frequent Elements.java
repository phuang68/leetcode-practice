class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> numFreqMap = new HashMap<>();
        List<Integer> freqBucket[] = new ArrayList[nums.length + 1];
        // Get frequency of each number
        for(int num : nums) {
            if(!numFreqMap.containsKey(num)) {
                numFreqMap.put(num, 0);
            }
            numFreqMap.put(num, numFreqMap.get(num) + 1);
        }
        // Collect numbers for each frequency
        for(int key : numFreqMap.keySet()){
            int freq = numFreqMap.get(key);
            if(freqBucket[freq] == null) {
                freqBucket[freq] = new ArrayList<>();
            }
            freqBucket[freq].add(key);
        }
        // Result has k numbers
        int kIndex = 0;
        int[] res = new int[k];
        // Collect num backwards in freqBucket as result is in descending order
        for(int i = nums.length; i >= 0; i--) {
            if(freqBucket[i] != null){
                for(int val : freqBucket[i]) {
                    res[kIndex++] = val;
                    if(kIndex == k) {
                        return res;
                    }
                }
            }
        }

        return res;
    }
}