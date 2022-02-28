/**
 * @param {number[][]} intervals
 * @return {number}
 */

//Method 1: Sort the intervals by the ends
var eraseOverlapIntervals = function (intervals) {
    //Sort the ends of intervals in an ascending order
    intervals.sort((a, b) => {
        return a[1] - b[1];
    });
    var count = 1;//Count the number of intervals that are non-overlapping
    var end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (end <= intervals[i][0]) {//If the end is smaller, it means the previous interval is non-overlapping
            end = intervals[i][1];//Update the end
            count++;
        }
    }
    return intervals.length - count;
};
//Sort the interval by the starts
var eraseOverlapIntervals = function (intervals) {
    //Sort the starts of intervals in an ascending order
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    var count = 1;//Count the number of intervals that are non-overlapping
    var end = intervals[intervals.length - 1][0];//The end of interval
    //Iterate from the back
    for (let i = intervals.length - 2; i >= 0; i--) {
        if (intervals[i][1] <= end) {//Count the number of non-overlapping intervals
            end = intervals[i][0];
            count++;
        }
    }
    return intervals.length - count;
};