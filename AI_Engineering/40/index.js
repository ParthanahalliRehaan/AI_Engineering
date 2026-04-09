const form = document.querySelector("form");
const input = document.querySelector("input");
const reply = document.querySelector(".reply");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  reply.textContent = "Thinking...";

  const res = await fetch("/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: input.value }),
  });

  const data = await res.json();
  reply.textContent = data.answer;
  input.value = "";
});