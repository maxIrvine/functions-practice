var positiveNumbers = function(nums) {
    result = [];
    nums.forEach(function (num){
        if (num >= 0){
            result.push(num);
        }
    });
    console.log(result);
}