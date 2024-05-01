function firstWord(s) {
  // your code here
	let res="";
	let i=0;
	while(i<s.length){
		if(s[i]==" "){
   return res;
		
		}
		else res+=s[i];
		i++;
	}
	return res;
}
  
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
