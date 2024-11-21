const price = 0.0002 / 1000;
const messages = [
  {
    role: "system",
    content: "You are a computer answering questions in a formal way.",
  },
];
let totalTokens = 0;

async function sendChat() {
  const prompt = document.querySelector("#prompt").value;
  document.querySelector("#prompt").value = "";
  document.querySelector("ul").innerHTML += `<li><b>${prompt}</b></li>`;

  messages.push({ role: "user", content: prompt });

  const data = {
    model: "gpt-3.5-turbo",
    temperature: 0,
    messages,
  };

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  messages.push(json.choices[0].message);
  const message = json.choices[0].message.content;
  document.querySelector("ul").innerHTML += `<li>${message}</li>`;

  document.querySelector("#prompt").value = "";
}
