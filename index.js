function largestSubarraySum(array)
{
  console.log('STARTING ARRAY')
  console.log(array)
  let largestArray = [];
  let currentTotal = sum(largestArray)

  for(let i = 0; i < array.length; i++)
  {
    let remainingArray = array.slice(i)
    
    if(sum(largestArray) <= sum(remainingArray))
    {
      console.log(`adding ${array[i]} to largestArray`)
      largestArray.push(array[i])
      currentTotal = sum(largestArray)
      console.log(`current total: ${currentTotal}`)
    }
    else
    {
      array.pop()
      return largestSubarraySum(array)
    }
  }
  return currentTotal
}

function sum(array)
{
  let sum = 0;
  for(let i = 0; i < array.length; i++)
  {
    sum = sum + array[i]
  }
  return sum
}