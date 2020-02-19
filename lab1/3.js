function nod(n, m) {
    if(m > 0) { 
      var k = n%m;
      return nod(m, k); 
    } 
    else { 
      return Math.abs(n);  
    }
  }
console.log(nod(25,15))