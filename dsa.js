function twoSum(nums, target) {
    if (!Array.isArray(nums)) 
    {
        console.log("nums must be array");
    }
    if (typeof target !== "number") {
        console.log("Target must be a number");
    }
    
    let map = new Map(); 
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i]; 
        }
        
        map.set(nums[i], i); 
    }
    
    console.log("No valid pair found"); 
}


const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); 
