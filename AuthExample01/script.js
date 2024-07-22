const signUpBtnLink = document.querySelector(".sign_up_btn_link");
const signInBtnLink = document.querySelector(".sign_in_btn_link");
const wrapper = document.querySelector(".wrapper");

signUpBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
signInBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
