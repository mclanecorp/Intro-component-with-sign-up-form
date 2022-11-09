function checkEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  let email = document.getElementById("email").value;
  const empty4 = document.querySelector(".empty-4");
  if (checkEmail(email)) {
    empty4.style.display = "none";
  } else {
    empty4.style.display = "block";
  }
  return false;
}
function firstName() {
  let firstname = document.getElementById("name").value;
  const empty1 = document.querySelector(".empty-1");
  if (firstname === "") {
    empty1.style.display = "block";
  } else {
    empty1.style.display = "none";
  }
  return false;
}

function lastName() {
  let lastname = document.getElementById("lastname").value;
  const empty2 = document.querySelector(".empty-2");
  if (lastname === "") {
    empty2.style.display = "block";
  } else {
    empty2.style.display = "none";
  }
  return false;
}

function password() {
  let password = document.getElementById("password").value;
  const empty3 = document.querySelector(".empty-3");
  if (password === "") {
    empty3.style.display = "block";
  } else {
    empty3.style.display = "none";
  }
  return false;
}

function claim() {
  firstName();
  lastName();
  validate();
  password();
}
