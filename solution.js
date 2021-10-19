// There is a large pile of socks that must be paired by color. 
// Given an array of integers representing the color of each sock, 
// determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
  let pairs = 0;
  let uniqueNum = [...new Set(ar)];
  for (let i = 0; i < uniqueNum.length; i += 1) {
    let numberType = 0;
    for(let j = 0; j < ar.length; j += 1) {
      if(ar[j] === uniqueNum[i]) {
        numberType += 1; 
      }
    }
    let pairsNumber = Math.floor(numberType / 2);
    pairs += pairsNumber;
  }
return pairs;
}