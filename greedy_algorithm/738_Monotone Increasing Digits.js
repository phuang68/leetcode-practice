/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
    const sn = String(n).split('').map(i => parseInt(i));
    var flag = sn.length;//For marking the start of assigning 9
    // With it by default, the second for loop won't be executed without flag being assigned
    for (let i = sn.length - 1; i > 0; i--) {
        if (sn[i] < sn[i - 1]) {//Update the non ascending position and start assigning 9
            flag = i
            sn[i - 1]--;
        }
    }

    for (let i = flag; i < sn.length; i++) {
        sn[i] = 9;
    }

    return Number(sn.join(""));
};