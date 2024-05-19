function arrange(sentence) {
    // Write your code here    
    const words = sentence.slice(0,-1).toLowerCase().split(' ');
    
    words.sort((a,b)=>a.length - b.length);
    
    const fWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    const rWord = words.slice(1).join(' ');
    
    return `${fWord}${rWord ? ' ' + rWord : '' }.`;

}
