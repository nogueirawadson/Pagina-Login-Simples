
const accountcreate = document.querySelector(".createaccount");
const account = document.querySelector(".account")

const ocultar = function () {
  accountcreate.style.display === "flex" ? accountcreate.style.display = "none" : accountcreate.style.display = "flex";
  account.style.display === "none" ? account.style.display = "flex" :
    account.style.display = "none";
}