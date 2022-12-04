let text = "<h1>Winter is coming</h1>";
let myRegex = /<h*?1>/; // by default greedy, ? - is used to make it lazy match
let result = text.match(myRegex);
