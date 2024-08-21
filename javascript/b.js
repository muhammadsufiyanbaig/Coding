let allnumbers = [5, 7, 8, 10];
let ans = {}
let firstNum = allnumbers[0]
let lastNum = allnumbers[allnumbers.length -1];
let  NewArr = [];
for(let i=firstNum; i<=lastNum; i++) {
   NewArr.push(i);
}
let missNum = NewArr.filter(x => !allnumbers.includes(x));
let currentIndex = 0;
for (let i = 0; i < missNum.length; i++) {
    while (NewArr[currentIndex] !== missNum[i]) {
        currentIndex++;
    }
ans[missNum[i]] = currentIndex;
}
console.log(ans);


