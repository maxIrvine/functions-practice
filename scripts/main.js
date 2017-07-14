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

function goodJob (people) {
    people.forEach(function (person){
        console.log("Good Job, " + person + "! \n");
    });
}

function call3Times(fun) {
    fun();
    fun();
    fun();
}

function callNTimes(times, fun) {
    for (var i=0;i<times;i++){
        fun();
    }
}

function product(nums) {
    var result = 1;
    nums.forEach(function (num) {
        result = result * num;
    });
    console.log(result);
}

function total(products) {
    var result = [];
    products.forEach(function (product){
        result.push(product["price"]);
    })
    var total = result.reduce(function (a,b){
        return a + b;
    }, 0);
    console.log(total);
}

function strJoin(strs, sep) {
    var result = "";
    result = strs.join(sep);
    console.log(result);
}

function acronym(words) {
    var result = [];
    words.forEach(function (word){
        result.push(word.slice(0,1));
    });
    strJoin(result, '');

}