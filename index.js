function largestSubarraySum(array)
{
  console.log('STARTING ARRAY')
  console.log(array)
  let largestArray = [];
  let currentTotal = sum(array)

  let removeFirst = array.slice(1)
  console.log('without first:')
  console.log(removeFirst)
  let removeLast = array.slice(0, -1)
  console.log('without last:')
  console.log(removeLast)
  
  if(sum(removeFirst) > sum(removeLast))
  {
    return largestSubarraySum(removeFirst)
  }
  else
  {
    return largestSubarraySum(removeLast)
  }
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