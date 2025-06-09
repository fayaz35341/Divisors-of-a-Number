class Solution {
    armstrongNumber(n){
        let count=0
        let r=n
        while (n>0){
            let ld=n%10
            count+=(ld*ld*ld)
            n=Math.floor(n/10)
        }
        return count===r
    }
}
console.log(new Solution().armstrongNumber(153))

