function miniMaxSum(arr) {
    arr.sort(function(a, b){
        return a - b;
    });
    // Write your code 
    let result;
    let minSum = 0;
    let maxSum = 0;
for(let i = 0; i < arr.length-1; i++){
    minSum += arr[i];
}

 for(let j = 1; j < arr.length; j++){
     maxSum += arr[j]
 }
 
 result = minSum + ' '+ maxSum;
 console.log(result);

return result

}
