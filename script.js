const bt1 = [
  "define",
  "describe",
  "draw",
  "find",
  "identify",
  "label",
  "list",
  "locate",
  "match",
  "memorise",
  "name",
  "recall",
  "recite",
  "recognize",
  "relate",
  "reproduce",
  "select",
  "state",
  "tell",
  "write",
];
const bt2 = [
  "compare",
  "convert",
  "demonstarte",
  "describe",
  "discuss",
  "distinguish",
  "explain",
  "find out more information about",
  "generalize",
  "interpret",
  "outline",
  "paraphrase",
  "predict",
  "put into your own words",
  "relate",
  "restate",
  "summarize",
  "translate",
  "visualize",
];
const bt3 = [
  "apply",
  "calculate",
  "change",
  "choose",
  "complete",
  "construct",
  "examine",
  "illustrate",
  "interpret",
  "make",
  "manipulate",
  "modify",
  "produce",
  "put into practice",
  "put together",
  "solve",
  "show",
  "translate",
  "use",
];
const bt4 = [
  "advertise",
  "analyse",
  "categoriase",
  "compare",
  "contrast",
  "deduce",
  "differenciate",
  "distinguish",
  "examine",
  "explain",
  "identify",
  "investigate",
  "seperate",
  "subdivide",
  "take apart",
];
const bt5 = [
  "argue",
  "assess",
  "choose",
  "compose",
  "construct",
  "create",
  "criticise",
  "critique",
  "debate",
  "decide",
  "defend",
  "design",
  "determine",
  "device",
  "discuss",
  "estimate",
  "evaluate",
  "formulate",
  "imagine",
  "invent",
  "judge",
  "justify",
  "plan",
  "predict",
  "prioritise",
  "propose",
  "rate",
  "recommend",
  "select",
  "value",
];
const bt6 = [
  "add to",
  "argue",
  "assess",
  "choose",
  "combine",
  "compose",
  "construct",
  "create",
  "debate",
  "decide",
  "design",
  "determine",
  "devise",
  "discuss",
  "forcast",
  "formulate",
  "hypothesise",
  "imagine",
  "invent",
  "judge",
  "justify",
  "originate",
  "plan",
  "predict",
  "priortise",
  "propose",
  "rate",
  "recommend",
  "select",
  "verify",
];
const bt = { bt1: bt1, bt2: bt2, bt3: bt3, bt4: bt4, bt5: bt5, bt6: bt6 };

function searchWordPress(e) {
  // look for window.event in case event isn't passed in
  e = e || window.event;
  if (e.keyCode == 13 || e.keyCode == 32) {
    document.getElementById("wordSubmit").click();
    return false;
  }
  return true;
}
function wordToLevel() {
  const wordToLevel = document.getElementById("wordToLevel");
  let bool = false;
  const word = document.getElementById("word").value;
  for (const [key, value] of Object.entries(bt)) {
    if (value.includes(word)) {
      wordToLevel.innerHTML =
        key.slice(0, 2).toUpperCase() + "-" + key.slice(2, 3);
      bool = true;
    }
  }
  if (!bool) {
    wordToLevel.innerHTML = "Not found. Please enter the exact word";
  }
}
function searchLevelPress(e) {
  // look for window.event in case event isn't passed in
  e = e || window.event;
  if (e.keyCode == 13 || e.keyCode == 32) {
    document.getElementById("levelSubmit").click();
    return false;
  }
  return true;
}
function levelToWord() {
  const levelToWord = document.getElementById("levelToWord");
  let bool = false;
  const level = document.getElementById("level").value.toLowerCase();
  for (const [key, value] of Object.entries(bt)) {
    if (key == level) {
      levelToWord.innerHTML = "";
      levelToWord.classList.remove("display");
      for (const word of value) {
        const node = document.createElement("span");
        const textnode = document.createTextNode(word);
        node.appendChild(textnode);
        node.classList.add("display");
        document.getElementById("levelToWord").appendChild(node);
      }
      bool = true;
    }
  }
  if (!bool) {
    levelToWord.innerHTML =
      "Not found. Please enter the level in the form of bt1,bt2...bt6";
  }
}
