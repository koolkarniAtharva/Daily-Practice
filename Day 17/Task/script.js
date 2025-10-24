var username = "athuu";


var a;
// this is declaration
var a = 10;
// this is declaration and initialization

// var allows redeclaration
var a = 20; // valid

// but this is wrong , as in you NEED to get error if you reused a variable ...
// that is why we use let

let b = 20;
// correct 
// let b = 30;
// this will give you error 
// but the value of let can change
// if you want that the let value should not change , we use const

const c = 30;
// correct


// Scope (golbal , block , functional)

var a = 12; // global scope

// var is a functional scoped , it does not respescts block"{}"

{
    var a = 20; // this is still global scope
}

// let respects the block , ie it is block scoped 
{
    let b = 45; // block scoped 
}
// b cannot be accessed here , it will give error

function demo(){
    if(true){
        var a = 12;
    }
}


// here var a should be restricted to if block only , but it does not cares about the if block it only respects the function block
// there fore it is accessible outside the if block but inside the function block 

// Reassignment and redeclaration

var a = 10;// declaration and initialization 

a = 20; // reassignment , valid ✅

var a = 30 ; // redeclaration , valid ✅

let v = 20 ; // declaration and initialization

v = 30; // reassignment , valid ✅

// let v = 40; // redeclaration , invalid ❌

// const doest allow both reassignment and redeclaration


//  TEMPORAL DEAD ZONE 

// tdz - utna area jitna main js ko pataa to hai ki variable exists karta hai par vo app ko value nahi de sakta 


console.log(x); // error ❌
{
    
    
    

    // temporal dead Zone for x
    
    


}

let x = 10;



// HOISTING

// Hoisting impact per type
// hoisting -> ek variable ko jab js main banatee hai to wo varaible 2 parts mai divide ho jata hai and uska declared part upar chala jata hai aur uska initialized part neeche rehta hai

console.log(a); // undefined

var a = 20;

{

    // here now whene we declared a it will be on top 
    var a  = undefined; // declared part

    console.log(a); // error , const ko initialize karna jaruri hai ❌
     a = 30; // initialized part

}

// var -> hoist -> undefined
// let -> hoist -> temporal dead zone (Reference Error for initialization not declaration)
// const -> hoist -> temporal dead zone (Reference Error for initialization not declaration)


// const allows updation of objects and arrays but not reassignment

const obj = {
    name : "atharva",
    age : 22
}   
obj.age = 23; // valid

console.log(obj.age); // 23
obj = {}; // invalid ❌

