var buttonElement = document.getElementById("btn");
buttonElement.addEventListener("click", openURL);

var inputElement = document.getElementById("ticketId");
inputElement.addEventListener("keyup", validate);

function openURL(e) {
  e.preventDefault();
  //   add your base URL here
  let baseURL = "";
  chrome.tabs.create({ url: baseURL + inputElement.value });
}

function validate() {
  if (inputElement.value.length == 0) {
    inputElement.classList.remove("input_error");
    buttonElement.disabled = true;
  } else if (/^[0-9]{3,7}$/.test(inputElement.value)) {
    inputElement.classList.remove("input_error");
    buttonElement.disabled = false;
  } else {
    inputElement.classList.add("input_error");
    buttonElement.disabled = true;
  }
}
