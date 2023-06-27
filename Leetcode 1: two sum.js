//solution for Leetcode 1. Two sum
//step-by-step explanation at: https://nimraahmed.hashnode.dev/

var twoSum = function(nums, target) {
    let map = {}
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i] 
        if(map[diff]!==undefined){ 
            return [map[diff], i] 
        }
        map[nums[i]]=i 
    }
    return []
    
};

console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]
