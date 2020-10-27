var currentage = 35;
var maximumage  = 90;
var amountperday = 1;
var totalamount = (maximumage - currentage) * 365 * amountperday;

document.body.innerHTML = `You will need ${totalamount} to last you until the ripe old age of X.`;
console.log(future);