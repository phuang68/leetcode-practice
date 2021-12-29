function test_multi_pack1(){
    const weight = [1, 3, 4]
    const value = [15, 20, 30]
    const quantity = [2, 3, 2]
    let bagWeight = 10;
    const dp = new Array(bagWeight + 1).fill(0);

    for (let i = 0; i < weight.length; i++) {
        for (let j = bagWeight; j >= weight[i]; j--) {
            //Iterating through the number of the weight items
            for (let k = 1; k <= quantity[i] && (j - k * weight[i] >= 0); k++) {
                dp[j] = Math.max(dp[j], dp[j - k * weight[i]] + value[i] * k)
            }
        }

        console.log("After taking the " + i + " item, the dp array looks like: " + dp);
        // console.log("\n")
    }

    console.log("The bag pack can take the maximum value of " + dp[bagWeight]);
}

function test_multi_pack2(){
    const weight = [1, 3, 4]
    const value = [15, 20, 30]
    const quantity = [2, 3, 2]
    let bagWeight = 10;
    const dp = new Array(bagWeight + 1).fill(0);
    for(let i = 0; i < quantity.length; i++){
        while(quantity[i] > 1){
            weight.push(weight[i]);
            value.push(value[i])
            quantity[i] -= 1;
        }
    }

    for (let i = 0; i < weight.length; i++) {
        for (let j = bagWeight; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }


        console.log("After taking the " + i + " item, the dp array looks like: " + dp);
        // console.log("\n")
    }

    console.log("The bag pack can take the maximum value of " + dp[bagWeight]);
}

test_multi_pack1();
test_multi_pack2();