// LOOPS
// 2 types of loops
// straight forward loop :- na hi value badalti hai naa hi printing badalti hai 
// dyanmic loop :- value badal sakti hai aur printing bhi badal sakti hai 

// for loop and foreach Loop



// Q1
let n = 5;
for (let i = 1; i<= n ;i++){
    row ="";
    for(let j = 1;j<=i ;j++){
        row += j;
    }
    console.log(row);
}