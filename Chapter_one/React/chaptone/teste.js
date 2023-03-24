function getSmallestNoSum(nums) {
    const sums = new Set()
    sums.add(0)
  
    for (let num of nums) {
      let newSums = []
      for (let sum of sums) {
        newSums.push(sum + num)
      }
      for (let newSum of newSums) {
        sums.add(newSum)
      } 
    } 
    
    let i = 0
    while (sums.has(i)) {
      i++
    }
    return i
  }

 const value = [1,2,4]

console.log(getSmallestNoSum(value))