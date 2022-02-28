/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    if (bills[0] > 5) return false;
    var five = 0;
    var ten = 0;
    var twenty = 0;
    for (let i = 0; i < bills.length; i++) {
        //No need to give change when the customer pays with 5 
        if (bills[i] === 5) five++;
        //We give a 5 dollar change if they pay with 10, if we run out of 5 dollars, we don't have enough change and return
        if (bills[i] === 10) {
            if (five > 0) {
                five--;
                ten++;
            } else {
                return false;
            }
        }
        //We give the change of 10 + 5 if they pay 20, if we run out of 10, we try to pay with three 5 dollar bills, if not, we return;
        if (bills[i] === 20) {
            if (ten > 0) {
                ten--;
                if (five >= 1) {
                    five--;
                    twenty++;
                } else {
                    return false;
                }
            } else if (five >= 3) {
                five -= 3;
                twenty++;
            } else {
                return false;
            }
        }
    }
    return true;
};