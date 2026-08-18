const buttons = document.querySelectorAll('.Button')
const body = document.querySelector("body")


buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(event){
    console.log(event)
    console.log(event.target)
    body.style.backgroundColor = event.target.id
  });
});