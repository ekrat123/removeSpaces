const textArea = document.getElementById("text");
const result = document.getElementById("result");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("clear");

function convertSpace(text) {
  return text.replace(/\s{2,}/g, " ");
}

function convertSpaces(text) {
  let words = text.split(/\s+/);
  words = words.filter((word) => word.trim() !== "");
  return words.join(" ");
}

btn.addEventListener("click", () => {
  const text = textArea.value;
  const lastText = convertSpaces(text);
  result.textContent = lastText;
});

btn2.addEventListener("click", () => {
  textArea.value = "";
  result.textContent = "";
});
