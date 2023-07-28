function sortColors(nums){
    let min;
    let newArray = [];
    //recursive function
    while(nums.length!=0){
        // this loop puts minimum value at first place in nums[] by comparing first element with next consecutive elements, one by one
    for(let i=0;i<nums.length;i++){
        //sort --> nums[] => [2,0,2,1,1,0]
        if(nums[0]>nums[i+1]){
                //swap the elements
                min = nums[i+1];
                nums[i+1] = nums[0];
                nums[0] = min;            
        } 
        console.log(nums);
    }
    //now put the zero index of nums[] into new array
    newArray.push(nums[0]);
    console.log("new Array: "+newArray);
    //remove zeroth element from nums[]
    nums.shift();
    console.log("nums array: "+nums);
    }
    return newArray;
}

let result1 = sortColors([2,0,2,1,1,0]);
console.log("result1: "+result1);
let result2 = sortColors([2,0,1]);
console.log("result2: "+result2);

