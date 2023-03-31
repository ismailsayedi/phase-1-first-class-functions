function receivesAFunction(callback) {
    callback("Hello World")
  }
  
  function returnsANamedFunction() {
    function named() {
  
    }
    return named
  }
    function returnsAnAnonymousFunction() {
    return function() {
    }
  }
  