
// Truthy and Falsy

// Truthy :

// Falsy : undefined, null, !0, !'', !NaN (false로 인식)


Function print(person) {
    if (person === undefined || person === null) { //!person
        return;
    }
    console.log(person.name);
}

const person = {
    name: 'John'
};

print();

// * falsy

// !undefined // true
// !null // true
// !0 // true
// !'' // true
// !NaN // true, Not a number
// !false // true

// * falsy를 제외한 모든 값은 truthy

// !3 // false
// !'hello' // false
// !['array'] // false
// ![] // false
// !{} // false


// ex1)

const value = null;

const truthy = value ? true : false;
console.log(truthy) //false


// ex2)

const value = {};

const truthy = !!value;
console.log(truthy) //false








