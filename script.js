function findLargest(a, b, c) {
  //your code here

	const arr = [a, b, c];

	const sortedArr = arr.sort((a,b) => b - a);

	if(a === b && a === c && b === c)
	{
		return 0;
	}else{
		return sortedArr[0];
	}
	
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
