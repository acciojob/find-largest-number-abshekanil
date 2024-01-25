function findLargest(a, b, c) {
  //your code here
	let arr = [a, b, c];
	let isequal = true;
let largest = Number.MIN_SAFE_INTEGER;
	for(let i=0; i<arr.length; i++)
		{
			if(arr[i] > largest)
			{
				isequal = false;
				largest = arr[i];
			}

			
		}
	
	if(isequal === true)
	{
		return arr[0];
	}
	
	return largest;
	  

	
	
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
