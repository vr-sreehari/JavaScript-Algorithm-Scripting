function closestNumbers(numbers) {
    // Write your code here
    numbers.sort((a,b)=>a-b);
    
    let minDiff=Infinity;
    
    for(var i=0;i<numbers.length-1;i++){
      const diff=numbers[i+1]-numbers[i];
      if(diff<minDiff){
        minDiff=diff;
      }
    }
    
    for(var i=0;i<numbers.length-1;i++){
      const diff=numbers[i+1]-numbers[i];
      if(diff===minDiff){
        console.log(numbers[i],numbers[i+1])
      }
    }
    
}
