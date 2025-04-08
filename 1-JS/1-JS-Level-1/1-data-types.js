"use strict"

console.log('-data-types-');

/*
    -------------------------------------
    data-types
    -------------------------------------
    1. simple / primitives ==> values
        a.  undefined
        b.  string
        c.  number
        d.  boolean
    2. complex / reference ==> objects
*/



//-----------------------------------------------------------------
// 1. simple / primitive types ==> values
//-----------------------------------------------------------------

//-----------------------------
// a. undefined
//-----------------------------

var v;


//-----------------------------
// b. string
//-----------------------------

var name = "Nag";
var selection = 'abc';


var dynamicString = "the trainer " + name;

// or => string-interpolation ( es6 )

var dynamicString2 = `the trainer ${name}`
var result = `the sum of 1 and 2 ${1 + 2}`
var multiLineString = `
    line-1
    line-2
`;
var htmlTemplate = `
    <div>
        <h1>${name}</h1>
    </div>
`


//-----------------------------
// c. number
//-----------------------------

var count = 12;
var cost = 12.12;



//-----------------------------
// d. boolean
//-----------------------------

var isFound = true;  // or false



/*
    // imp-note :

    falsy-values => false,0,"",null,undefined,NAN,
    
    ref : https://dorey.github.io/JavaScript-Equality-Table/

*/




//-----------------------------------------------------------------
// 2. complex / reference types ==> objects
//-----------------------------------------------------------------


/*

how to create object ?

syntax:

var ref = new Constructor()

*/

//-----------------------------
// class
//-----------------------------

function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.sayName = function () {
    //     console.log('im ' + this.name)
    // }
    // this.sayAge = function () {
    //     console.log('im ' + this.age + " old ")
    // }
}
Person.prototype.sayName = function () {
    console.log('im ' + this.name)
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age + " old ")
}

var p1 = new Person('Nag', 35)




//-----------------------------
// class ( from ES6 )
//-----------------------------

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.address = null;
        Person.personCount++
    }
    sayName() {
        console.log('im ' + this.name)
    }
    sayAge() {
        console.log('im ' + this.age + " old ")
    }
}
Person.personCount = 0; // static variables

var p1 = new Person('Nag', 35)


//-----------------------------------------------------------------
//  dynamic properties
//-----------------------------------------------------------------

/*
    ==> .js-lang is dynamic language, so

    by default, 
    
    => objects are extensible 
        i.e we can add new properties as you need 
    => also can delete property if not required with 'delete' keyword

*/

console.log(Object.isExtensible(p1))
Object.preventExtensions(p1)    //cannot add new properties to non-extensible object but can edit/delete

console.log(Object.isSealed(p1))
Object.seal(p1)    //cannot add/delete properties from sealed object but can edit

console.log(Object.isFrozen(p1))
Object.freeze(p1);    //cannot add/delete/edit properties in frozen object


p1.techSkill = 'java,js'
delete p1.age;
p1.age = 35;

// Customizable Object properties
let o = { x:12, y:13 };
Object.defineProperty(o, 'x', {        //define 1 property at a time
    value: 12,                         //The value associated with the property.
    writable: false,                   //writable false restricts from making changes to value associated with the property
    configurable: false,               //configurable false restricts from making any changes to object's property except for value & writable
    enumerable: false                  //enumerable false restricts from listing the object property through Object.keys() or For-in loop
});
// Writable: If false, the value of the property can not be changed.

// Configurable: If false, any attempts to delete the property or change its attributes (Writable, Configurable, or Enumerable) will fail.

// Enumerable: If true, the property will be iterated over when a user does for (var prop in obj){} (or similar).

// All required properties except value must be defined in 1 go for a particular property as later attempt gets the error "Uncaught TypeError: Cannot redefine property"

var obj = {};
Object.defineProperties(obj, {         //define multiple properties together
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',                    //The value associated with the property. Can be any valid JavaScript value (string, number, object, function, etc)
    writable: false
  }
  // etc. etc.
});

// "For-In loop" to loop through Object Properties
for (property in o) {
    console.log(property + " => " , o[property]);
}

//-----------------------------------------------------------------
// literal-style object(s)
//-----------------------------------------------------------------

//-----------------------------
// a. Object
//-----------------------------


var reqConfig = new Object();
reqConfig.url = "http://"
reqConfig.httpMethod = "GET"
reqConfig.onSuccess = function () {
    console.log('on success consuming response');
}

// or

var newReqConfig = {
    url: 'http://',
    httpMethod: 'GET',
    onSuccess: function () { }
}

//-----------------------------
//  Array/List
//-----------------------------


var menu = new Array();

// or

var newMenu = [];


//-----------------------------
//  RegExp
//-----------------------------

var pattern = new RegExp('\\d{4}-\\d{4}-\\d{4}');

// or

var newAdharPattern = /\d{4}-\d{4}-\d{4}/



//-----------------------------
//  Function
//-----------------------------

var add = new Function("n1", "n2", "var result=n1+n2;return result;");

// or


function newAdd(n1, n2) {
    var result = n1 + n2; return result;
}


//-----------------------------------------------------------------
//  How to access obj's properties?
//-----------------------------------------------------------------

/*

    2 ways

    -> '.' , if property-name dont have space or '-' or digit
    else
    -> '[]' , for any property

*/


var person = {
    name: 'Nag',
    'home-address': 'chennai',
    1: 'one',
    100: 'hundred'
};

console.log(person.name)
console.log(person["home-address"])
console.log(person["1"])
console.log(person[100])


//-----------------------------------------------------------------