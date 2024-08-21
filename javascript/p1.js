function createHelloWorld() {
    return function() {
      return "Hello World";
    };
  }
  const f1 = createHelloWorld();
  console.log(f1()); 
  
  const f2 = createHelloWorld();
  console.log(f2({}, null, 42));
  