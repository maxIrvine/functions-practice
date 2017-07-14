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

function square(n) {
    return n*n;
}

function squareTheNumbers(nums) {
    var squares = [];
    squares = nums.map(square);
    console.log(squares);
}



function coolTemperature(cities) {
    var result = [];
    cities.forEach(function (city){
        var temp = city["temperature"];
        if (temp <= 70) {
            result.push(temp);
        }
    });
    console.log(result);
}

function coolCities(cities) {
    var result = [];
    cities.forEach(function (city){
        var temp = city["temperature"];
        if (temp <= 70) {
            result.push(city["name"]);
        }
    });
    console.log(result);
}