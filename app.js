document.addEventListener("DOMContentLoaded", InsertTitle);
function InsertTitle() {
  const title = document.createElement("h1");
  title.textContent = "Virtual KeyBoard";
  document.body.append(title);
}
