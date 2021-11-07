const btn = document.querySelector(".notify");
const main = document.querySelector("main");
const input = document.querySelector("input");
const regExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.value.match(regExp)) {
    errorState(main);
  } else {
    okState(main)
  }
});
let errorState = (e) => {
  e.classList.remove('ok')
  e.classList.remove("active");
  void e.offsetWidth;
  e.classList.add("active");
  document.querySelector('.error-message').textContent='Please provide a valid email address ! ';
};
let okState= (e) =>{
  e.classList.remove("active");
  e.classList.add("ok");
  document.querySelector('.error-message').textContent='Perfect ! ';
}