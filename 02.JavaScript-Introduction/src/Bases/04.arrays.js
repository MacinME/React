const array = new Array(100);
array.fill('filled');
array.push(101)

const array1 = [1,2,3,4];
const array2 = [...array1, 5];
array2.push(6);
const array3 = array1.map( function(n){
    return n * 2
});
array3.push(10);

console.log(array);
console.log(array1);
console.log(array2);
console.log(array3);