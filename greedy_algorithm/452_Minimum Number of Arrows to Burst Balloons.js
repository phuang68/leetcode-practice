/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => { return a[0] - b[0] });
    if (points.length == 0) return 0;
    var count = 1;
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > points[i - 1][1]) {
            count++;
        } else {
            points[i][0] = Math.min()
        }
    }
};