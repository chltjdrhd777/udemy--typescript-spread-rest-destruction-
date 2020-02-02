//default parameters
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const de = (a, b = 3) => a + b; //function de makes a+b result. and I set the default in "b" In this case, I should be careful not to put this default to "a" like first parameter. Because, defuault cannot have the function ignorring such parameters.
console.log(de(2)); // it works with the rusult "4"  because automatically, a is asigned 2 and b's default is 3.
//spread operator
const things = ["what", "I want"];
const spread = ["in here"];
things.push(spread[0]);
things.unshift(spread[0]);
console.log(things);
spread.push(...things); //... = add all values out of the array to the last of target array.
console.log(spread);
const things2 = ["a", "b"];
const spread2 = ["test1", ...things2];
console.log(spread2); //["test1", "a", "b"]
const whenObject = { test1: "Key+values", test2: "are pulled out together" };
const spreadObject = Object.assign({}, whenObject); // in javascript, it is  Object.assign({}, whenObject);
console.log(spreadObject);
// rest parameters
const copied = { name: "anderson", age: 25, hobby: "work out" };
const privateInfo = Object.assign({}, copied);
const add = (...numbers) => {
    // the rest type means, "it's type is the arrys comprised of numbers but I am going to use each numbers as a parameter"
    // in parameters, I would delcare ...name -> which means I anticipate a specific value, and want to add this as a parameter. not doing like a,b,c,d,e ...../ in the particular argument below, "add" should be run with 5,6,7,8,9 and ..."members" accept this automatically and separately by comma.
    return numbers.reduce((a, b) => {
        // in terms of 5,6,7,8,9 => execute (a,b)=> return a+b;. This would start from '0'. In other words, 0+5=5 -> 5+6->11 -> 11+7=18 -> 18+8=26 -> 26+9=35.
        return a + b;
    }, 0);
};
const addedNumbers = add(5, 6, 7, 8, 9);
console.log(addedNumbers); // the final result is 35.
//Object, array destructing
const hobbies = ["object", "destruction"];
// we can split one array in like this inefficient way.
const hobby1 = hobbies[0];
const hobby2 = hobbies[1];
// it is redundant. to shorten this,
const [good1, good2] = hobbies; // Then, I store the first element in good1, and the second element in good2. let's check this,
console.log(good1);
// and if there are a lot of elements remain, I could do like this
const hobbies2 = ["split", "them", "all", "1", "2", "3"];
const [split1, ...split2] = hobbies2;
console.log(split2); // [ 'them', 'all', '1', '2', '3' ]  , If there is only one element is is splitted into the form like (const name = "abc")
//it is the same in an object.
const objectSeparate = { what: "name", would: "age", separate: "anything" };
//let's separate
//const { what, would, separate } = objectSeparate;
//console.log(would); // age
//I can change the key name to use override.
const { what: what2, would, separate } = objectSeparate;
console.log(what2); // name
const { what } = objectSeparate, whatever = __rest(objectSeparate, ["what"]);
console.log(whatever); // {would: 'age', separate: 'anything'}
//# sourceMappingURL=project5.js.map