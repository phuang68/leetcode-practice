// Brute force: Time - O(n^2), Space - O(n)
function productExceptSelf(nums) {
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        let left = 0;
        let right = nums.length - 1;
        let product = 1;

        while (left < i) {
            product *= nums[left];
            left++;
        }

        while (right > i) {
            product *= nums[right];
            right--;
        }

        res.push(product);
    }

    return res;
}

// Prefix * Postfix: Time - O(n), Space - O(n)
function productExceptSelf2(nums) {
    const res = new Array(nums.length).fill(1);

    // Get prefix arr
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i-1] * nums[i-1];
    }

    // Get result with postfix
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }

    return res;
}

console.log(productExceptSelf([1,2,3,4]));