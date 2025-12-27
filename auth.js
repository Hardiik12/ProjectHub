// REGISTER
function registerUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (password !== confirm) {
    alert("Passwords do not match");
    return;
  }

  const user = {
    name: name,
    email: email,
    pass: password
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration successful!");
  window.location.href = "login.html";
}

// LOGIN
function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("No user found. Please register first.");
    return;
  }

  if (user.email === email && user.pass === password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "profile.html";
  } else {
    alert("Invalid credentials");
  }
}
