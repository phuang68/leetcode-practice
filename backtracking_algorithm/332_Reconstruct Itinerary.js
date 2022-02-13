/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

//Use JS object as map
var findItinerary = function (tickets) {
    const result = ['JFK'];
    const map = {};
    const ticketNum = tickets.length + 1;
    
    for (const ticket of tickets) {
        const [from, to] = ticket;
        if (!map[from]) map[from] = [];
        map[from].push(to);
    }

    for (const city in map) {
        map[city].sort();
    }

    const backtrack = () => {
        let pre = result[result.length - 1];
        if (result.length === ticketNum) {
            return true
        }
        if (!map[pre] || !map[pre].length) {
            return false
        }
        for (let i = 0; i < map[pre].length; i++) {
            let city = map[pre][i]
            // 删除已走过航线，防止死循环
            map[pre].splice(i, 1)
            result.push(city)
            if (backtrack()) {
                return true
            }
            result.pop()
            map[pre].splice(i, 0, city)
        }
    }
    backtrack();
    return result;
};
//Use JS Map
var findItinerary = function (tickets) {
    const map = new Map();
    for (let [from, to] of tickets) {
        if (!map.has(from)) map.set(from, []);
        map.get(from).push(to);
    }

    for (const entry of map.entries()) {
        entry[1].sort();
    }

    const res = ['JFK'];
    const backtracking = () => {
        if (res.length == tickets.length + 1) return true;

        let pre = res[res.length - 1];
        if (!map.has(pre) || !map.get(pre).length) return false;

        let cities = map.get(pre);
        for (let i = 0; i < cities.length; i++) {

            let city = cities[i];
            cities.splice(i, 1);
            res.push(city);
            if (backtracking()) return true;
            cities.splice(i, 0, city);
            res.pop();

        }
    }
    backtracking();
    return res;
};