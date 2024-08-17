let inputWord = document.querySelector("#inputbox");
let searchbtn = document.querySelector("#searchbtn");
let refresh = document.querySelector("#refresh")
let textBox = document.querySelector(".inputSearchbox");
let inputText = document.querySelector("#inputSearch");

document.querySelector("#searchbtn").addEventListener("click", () => {
  let word = inputWord.value;
  let text = inputText.value;
  if (word != "" && text != "") {
    textBox.innerHTML = `<p>${text}</p>`;
    inputText.classList.remove("show");
    inputText.classList.add("hide");
    text = text.replace(
      RegExp(word, "ig"),
      `<span class="active">${word}</span>`
    );
    textBox.innerHTML = `<p>${text}</p>`;
  } else {
    alert("You're input can not be empty.");
  }
});

document.querySelector("#refresh").addEventListener("click", () => {
  textBox.innerHTML = ""
  console.log(document.querySelector(".searchbox"));
  document.querySelector(".searchbox").innerHTML=`<div>
        <label for="inputbox">Word:</label>
        <input type="text" id="inputbox" placeholder="text..." />
      </div>
      <textarea
        name="inputSearch"
        class="show"
        id="inputSearch"
        placeholder="Input text..."
      ></textarea>
      <span>
        <button id="searchbtn">search</button>
        <button id="refresh">re</button>
      </span>`
      inputWord = document.querySelector("#inputbox");
      searchbtn = document.querySelector("#searchbtn");
      refresh = document.querySelector("#refresh");
      textBox = document.querySelector(".inputSearchbox");
      inputText = document.querySelector("#inputSearch");
})
