const form = document.querySelector('form');
// const weight = parseInt(document.querySelector('#weight').value)
// this use case will give you empty value


form.addEventListener('submit', function(event) {
  event.preventDefault(); //when we take the input from form then it pass the values to server so by need to prevent this we use preventDefault beacause its default  of form

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height < 0) {
    results.innerHTML = 'Please give a valid height';
  }else if (isNaN(weight) || height < 0) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});



