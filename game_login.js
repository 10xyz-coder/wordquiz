var score = 0

function loadBody() {
  score = parseInt(localStorage.getItem("score"));
  document.getElementById('score').innerHTML = "Score: " + score;
}

function updateScore() {
  score += 1;
  document.getElementById('score').innerHTML = "Score: " + score;
}

function saveScore() {
  localStorage.setItem("score", score);
}

function nextPage() {
  window.location.pathname = "wordquiz/login";
}