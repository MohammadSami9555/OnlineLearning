function login() {
  const name = document.getElementById("username").value;
  if (name.trim() !== "") {
    localStorage.setItem("studentName", name);
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter your name.");
  }
}



// script.js

// Login page code (already there)
function login() {
  const name = document.getElementById("username").value;
  if (name.trim() !== "") {
    localStorage.setItem("studentName", name);
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter your name.");
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const name = localStorage.getItem("studentName");
  if (name) {
    const nameSpan = document.getElementById("studentName");
    if (nameSpan) nameSpan.innerText = name;
  }
});

function checkAnswer(btn) {
  const correct = "Hyper Text Markup Language ✅";
  const result = document.getElementById("result");

  if (btn.innerText === correct) {
    result.innerText = "Correct! 🎉";
    result.style.color = "green";
    localStorage.setItem("score", "1");
  } else {
    result.innerText = "Oops! Try again.";
    result.style.color = "red";
    localStorage.setItem("score", "0");
  }
}

