function closure (){
    var _counter = 0;
    return {
        add: function (param) {
            _counter += param;
        },
        retrive: function () {
            return "the value is now at" + _counter;
        }
    }
}

var c = closure();
c.add(5);
console.log(c.retrive());