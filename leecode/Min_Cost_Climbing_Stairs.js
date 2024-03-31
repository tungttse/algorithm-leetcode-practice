/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let totalCost = 0;
    let currIdx = 0;
    
    let costc1 = minCost(totalCost, currIdx, cost ,0);
    let costc2 = minCost(totalCost, currIdx, cost, 1)

    return Math.min(costc1, costc2);
};

function minCost(totalCost, currIdx, cost , step) {
    let maxStep = cost.length;
    let nextStep = currIdx + step;
      //base case
      if(nextStep >= maxStep) {
        return totalCost;
    }
    
    
    totalCost += cost[nextStep];

  
    currIdx = nextStep;
    let costc1 = minCost(totalCost, currIdx, cost ,1);
    let costc2 = minCost(totalCost, currIdx, cost, 2)

    return Math.min(costc1, costc2);
}

cost = [10,15,20];
let a = minCostClimbingStairs(cost);
console.log(a);
