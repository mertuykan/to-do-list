const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.addEventListener("click", () => li.remove());

  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = "";
});
function updateClock() {
  const now = new Date();

  // Time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

  // Date
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const weekday = days[now.getDay()];

  document.getElementById("date").textContent = `${day} ${month} ${year} · ${weekday}`;
}

setInterval(updateClock, 1000);
updateClock(); // Display immediately when the page loads
