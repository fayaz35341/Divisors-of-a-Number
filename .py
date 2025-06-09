class Solution:
    def divisors(self, n):
        a=[]
        for i in range(1,n+1):
            if n%i==0:
                a.append(i)
        return a
print(Solution().divisors(6))

    
            
