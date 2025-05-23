"use strict"

console.log("-arrow-function-");

// ----------------------------------------
// arrow-function : syntax
// ----------------------------------------

// -----------------------------
// regular-function-expression
// -----------------------------
let getPrice = function () {
    return 100 + 200;
}


// -----------------------------
// arrow-function-expression
// -----------------------------

let getPrice = () => {
    return 100 + 200;
}

let getPrice = (count) => {
    return count * (100 + 200);
}
// or
let getPrice = count => {
    return count * (100 + 200);
}

let getPrice = (count, tax) => {
    return count * (100 + 200) + tax;
}
// or
let getPrice = (count, tax) => count * (100 + 200) + tax;


let getPrice = (count, tax) => {
    let cost = count * (100 + 200);
    let total = cost + tax;
    return total
}

// -------------------------------------------
// why/where we need arrow-function-expression
// -------------------------------------------

// -------------------------------------------
// use 1 : for compact function-argument syntax
// -------------------------------------------

let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
nums.sort();
nums.sort(function (x, y) { return x - y })
// or
nums.sort((x, y) => { return x - y })
// or
nums.sort((x, y) => x - y)

// -------------------------------------------
// use 2 : to capture 'this'
// In classic function expressions, the 'this' keyword is bound to different values based on the context in which the function is called. 
// Whereas arrow functions use the value of 'this' in their lexical scope. This leads to very different behaviour.
// What’s the difference between context and scope? The context is (roughly) the object that calls the function. 
// And the scope is all the variables visible to a function where it is defined. 
// One cares about how it is called, the other cares about how it is defined.
// -------------------------------------------

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching");
        // let askQues = function (q) {
        //     console.log(this.name + " answering " + q);
        // }
        //or
        let askQues = (q) => {          //inner function defined in member function scope with =>
            console.log(this.name + " answering " + q);
        }
        console.log("teaching ends");
        return askQues;
    }
};

let askQues = tnr.doTeach();
askQues('Q1')

let newTnr = { name: 'Subbu' }
askQues.call(newTnr, "Q2")


// -------------------------------------------
// Quiz-1
// -------------------------------------------


console.log(this)

let regFunc = function () {
    console.log(this);
}
regFunc();

let arrFunc = () => {
    console.log(this)
}
arrFunc();


let o1 = {
    name: 'One',
    regFunc: regFunc,
    arrFunc: arrFunc            //member function defined in global scope with =>
}
o1.regFunc();
o1.arrFunc();


let o2 = { name: 'Two' }
regFunc.call(o2)
arrFunc.call(o2);



// -------------------------------------------
// Quiz-2
// -------------------------------------------

//#1
let invoice = {
    num: 123,
    process: function () {
        console.log('INV-' + this.num + " procesed")
    }
};

// #2
let invoice = {
    num: 123,
    process: () => {
        console.log('INV-' + this.num + " procesed")
    }
};

// #3
let invoice = {
    num: 123,
    process: function () {
        console.log('INV-' + this.num + " procesed partialy")
        return function () {
            console.log('INV-' + this.num + " procesed completly")
        }
    }
};

// #4

let invoice = {
    num: 123,
    process: function () {
        console.log('INV-' + this.num + " procesed partialy")
        return () => {
            console.log('INV-' + this.num + " procesed completly")
        }
    }
};


// -------------------------------------------
//Quiz -3
// -------------------------------------------


function Person(name, age) {
    this.name = name;
    this.age = age;

    // let self=this;
    // regular classical functions bind 'this' with context of the callee so, it'll be bind to global windows obj as called within global 'setInterval' method
    // let incAge = function () {
    //     console.log(this);  
    //     self.age++;
    //     console.log(self.name + " : " + self.age);
    // }

    // Arrow function is suitable here as it's not an object method but only a local method to be called with global 'setInterval' method
    let incAge = () => {
        console.log(this);
        this.age++;
        console.log(this.age)
    };

    setInterval(incAge, 1000)

}

new Person('Ria', 3)




// -------------------------------------------
//Quiz -4
// -------------------------------------------

//Service
let service = {
    doTeach: function () {
        console.log(this.name + " teaching .js");
    }
}

// Model
let tnr = { name: 'Nag' }


// View
let teachBtn = document.getElementById('teachBtn');

teachBtn.addEventListener('click', function (e) {
    service.doTeach.call(tnr)
})
//or
teachBtn.addEventListener('click', service.doTeach.bind(tnr))


// -------------------------------------------

