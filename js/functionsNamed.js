function zero(operation) {
    if (operation) {
      return operation(0);
    }
    return 0;
  }
function one(operation) {
    if (operation) {
      return operation(1);
    }
    return 1;
  }
function two(operation) {
    if (operation) {
      return operation(2);
    }
    return 2;
  }
function three(operation) {
    if (operation) {
      return operation(3);
    }
    return 3;
  }
function four(operation) {
    if (operation) {
      return operation(4);
    }
    return 4;
  }
function five(operation) {
    if (operation) {
      return operation(5);
    }
    return 5;
  }
function six(operation) {
    if (operation) {
      return operation(6);
    }
    return 6;
  }
function seven(operation) {
    if (operation) {
      return operation(7);
    }
    return 7;
  }
function eight(operation) {
    if (operation) {
      return operation(8);
    }
    return 8;
  }
function nine(operation) {
    if (operation) {
      return operation(9);
    }
    return 9;
  }
  // Define the remaining functions (two, three, etc.) similarly
  
  function plus(b) {
    return function(a) {
      return a + b;
    };
  }
  function minus(b) {
    return function(a) {
      return a - b;
    };
  }
  function times(b) {
    return function(a) {
      return a * b;
    };
  }
  function dividedBy(b) {
    return function(a) {
      return Math.floor(a / b);
    };
  }
  
  // Test the functions with some sample inputs
//   console.log(two(times(three()))); // Should print 35
//   console.log(seven(times(five()))); // Should print 35
//   console.log(four(plus(nine()))); // Should print 13
  console.log(eight(minus(three()))); // Should print 5
//   console.log(six(dividedBy(two()))); // Should print 3