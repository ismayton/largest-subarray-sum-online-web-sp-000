function largestSubarraySum(array)
{
  console.log('STARTING ARRAY')
  console.log(array)
  let largestArray = [];
  let currentTotal = sum(largestArray)

  for(let i = 0; i < array.length; i++)
  {
    let value = array[i]
    if(currentTotal <= currentTotal + value)
    {
      largestArray.push(array[i])
      currentTotal = sum(largestArray)
      console.log(`positive value found: ${array[i]}`)
      console.log(`largestArray now:`)
      console.log(largestArray)
    }
    else
    {
      let subArray = array.slice(i + 1)
      console.log('checking sub array:')
      console.log(subArray)
      if(largestSubarraySum(subArray) > currentTotal)
      {
        return largestSubarraySum(subArray)
      }
      else
      {
        return currentTotal
      }
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