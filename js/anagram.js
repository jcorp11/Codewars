var isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort().join('');
    original = original.toLowerCase().split('').sort().join('');
    console.log(test, original)
    return test === original ;

};

const a = "foefet";
const b = "toffee";
console.log(isAnagram(a,b));