/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    //The number starts at 1
    let cur = 1;

    let i = 0;
    while (i < arr.length) {
        //If the cur is not the same as arr[i] means that there's gap, we need to fill the gap
        if (cur != arr[i]) {
            //As we fill the gap, we decrement k because we have one less number to fill
            k--;
            //If the gap is filled, we find our kth positive number
            if (k == 0) return cur;
            cur++;
        } else {
            i++;
            cur++;
        }
    }
    //If k is not lower than 0,  the next k -1 number is the answer
    return cur + k - 1;
};