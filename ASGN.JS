// Write a js function to get an array and to read the first element of an array. check whether its prime or not.

let myArray = [1,2,3,4,5];

console.log(myArray[0]);

if(myArray[0] % 2==0){
    console.log("prime number");
}else{
    console.log("not a prime number")
}

//Write a js program to find the most frequent item of an array

let array =[5,10,10,10,2,2,3,4,];
let f=1;
let g=0;
let num;

for(let i=0;i<array.length; i++){
    for(let j=i; j<array.length; j++){
        if(array[i]==array[j])
        g++;

        if(f<g){
            f=g;
            num =array[i];
        }

    }
    g=0;

}
console.log(`${num} is the most frequent element (${f} times)`);

//Write a js for loop that will iterate from 0to 15. For each iteration, check if the current number is odd or even.

for(let i=0;i<=15;i++){
    if(i%2==0){
        console.log( i + " iS an even number");
    }else{
        console.log(i+" is an odd number");
    }
}

// Write a js program to find the sum of squares of the elemets of an array

function sumofsq(arrayS){
    var sum=0,
    i =arrayS.length;
    while(i--)
    sum += Math.pow(arrayS[i],2);
return sum;
}
console.log(sumofsq([1,2,3,4]));