/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    const queue = [];
    //Make sure the taller guys are in the front
    people.sort((a, b) => {
        if (b[0] !== a[0]) {//
            return b[0] - a[0]
        } else {
            return a[1] - b[1];//If same height, put the one with less people in the front
        }
    });

    for (let i = 0; i < people.length; i++) {
        let position = people[i][1];//Get the position of the person
        queue.splice(position, 0, people[i]);//Put them in the queue based on how many people taller are in the front
    }
    return queue;
};