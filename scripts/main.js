var positiveNumbers = function(nums) {
    var result = [];
    nums.forEach(function (num){
        if (num >= 0){
            result.push(num);
        }
    });
    console.log(result);
}

function evenNumber(nums) {
    var result = [];
    nums.forEach(function (num){
        if (num % 2 == 0){
            result.push(num);
        }
    });
    console.log(result);
}