// Rata rata
function rataRata() {
  let meancounting = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    let mean = total / array.length;
    return mean;
  };

  let arr = [10, 20, 10, 30, 30];
  console.log("Mean = ", meancounting(arr));
}
rataRata();

// Median
function median() {
    
}
