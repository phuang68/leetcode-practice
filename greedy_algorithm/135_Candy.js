/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const candies = new Array(ratings.length).fill(1);
    var sum = 0;

    for (let i = 1; i < ratings.length; i++) {//Make sure the kid with higher rate on the right has one more candy
        if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1;
    }

    for (let i = ratings.length - 2; i >= 0; i--) {//Make sure the kid with higher rate on the left, no need to give one more candy if the condition is met
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1)
        }
    }

    for (let k = 0; k < candies.length; k++) {
        sum += candies[k];
    }

    return sum;
};