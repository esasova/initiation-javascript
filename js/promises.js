async function getNumber1() {
    return 10;
  }
  
  async function getNumber2() {
    return 4;
  }
  async function compute() {
    const num1 = await getNumber1();
    const num2 = await getNumber2();
    return num1 + num2;
    
  }
  compute()
  .then(function(result){
    document.getElementById('result').textContent = result;
  }) 
