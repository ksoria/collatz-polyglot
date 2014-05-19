console.log("Kevin's Collatz");

function collatz(x) {
  var seq = 'x';
  
  while (x > 1) {
    if (x % 2 == 0) {
      x = x / 2;
    }
    else {
       x = 3*x + 1;
    }
     seq.append(x);
  }  
  return seq;
}

try{
    start = int(Decimal(sys.argv[1]))
}
catch(err){
    console.log("Usage: collatz starting-number (default is 10)")
    start = 10
}

seq = collatz(start)
console.log(seq)
console.log("collatz(%d) has %d items" % (start, len(seq)))
