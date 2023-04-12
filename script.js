const inputField = document.getElementById("input-field");
const optionsDiv = document.getElementById("options");
const outputDiv = document.getElementById("output");
let currentOption = "plain-text"; // Default option is plain text

inputField.addEventListener("input", () => {
  const inputValue = inputField.value;

  optionsDiv.innerHTML = "";

  // Display options based on current input

  if (inputValue === "/1") {
    optionsDiv.innerHTML = '<h1 class="btn"  id="header1-btn">Heading 1</h1>';
  } else if (inputValue.startsWith("/1 ")) {
    optionsDiv.innerHTML =
      '<h1 class="btn" id="header1-btn">Heading 1</h1><span class="btn"  id="plain-text-btn">Normaltext</span>';
  } else if (inputValue === "") {
    optionsDiv.innerHTML =
      '<span class="btn" id="plain-text-btn">Normal  Text</span>';
  }

  // Add event listeners to options
  const header1Btn = document.getElementById("header1-btn");
  if (header1Btn) {
    header1Btn.addEventListener("click", () => {
      currentOption = "header1";
    });
  }

  const plainTextBtn = document.getElementById("plain-text-btn");
  if (plainTextBtn) {
    plainTextBtn.addEventListener("click", () => {
      currentOption = "plain-text";
    });
  }
});

inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const inputValue = inputField.value.trim();

    // Convert text to header 1 if option is selected
    let formattedText = inputValue;
    if (currentOption === "header1") {
      if (inputValue === "/1") {
        formattedText = '<h1 contenteditable="true" class="editable-header1">Header 1</h1>';
      } else {
        formattedText = `<h1 contenteditable="true">${inputValue.replace("/1 ", "")}</h1>`;
      }
    } else if (currentOption === "plain-text") {
      formattedText = inputValue;
    }

    // Add text to output and clear input field
    outputDiv.innerHTML += `<div class=" text" contenteditable="true">${formattedText}</div>`;
    inputField.value = "";
		currentOption = "plain-text"
  }
});
