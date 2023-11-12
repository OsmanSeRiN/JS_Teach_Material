let userForm = document.querySelector("#userForm");
userForm.addEventListener('submit',formSubmit);

function formSubmit(event) {
    console.log("tamam");
    event.preventDefault();//formun kendisini yenilemesini engeller
    let submitCode = document.querySelector("#varCode");
    console.log(submitCode.value)
}