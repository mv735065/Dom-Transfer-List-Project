let container = document.querySelector(".container");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

let contentNames = [
  "HTML",
  "CSS",
  "JS",
  "VUE",
  "TS",
  "React",
  "Angular",
  "Svelte",
];

createContentItemAddInBox1(contentNames);

let buttons = [
  { label: "<<", action: "allLeft" },
  { label: "<", action: "left" },
  { label: ">", action: "right" },
  { label: ">>", action: "allRight" },
];

createButtonsAddInBox2(buttons);

let left = document.querySelector(".left");
let allLeft = document.querySelector(".allLeft");
let allRight = document.querySelector(".allRight");
let right = document.querySelector(".right");

disableFunctions();

right.addEventListener("click", () => {
  moveItems(box1, box3);
});
left.addEventListener("click", () => {
  moveItems(box3, box1);
});
allRight.addEventListener("click", () => {
  moveItems(box1, box3, true);
});
allLeft.addEventListener("click", () => {
  moveItems(box3, box1, true);
});

box1.addEventListener("click", () => {

  disableFunctions();
});

box3.addEventListener("click", () => {

  disableFunctions();
});


function disableFunctions() {
  let len1 = box1.children.length;
  let len2 = box3.children.length;

  allRight.disabled = len1 === 0;

  right.disabled = box1.querySelectorAll("input:checked").length === 0;

  allLeft.disabled = len2 === 0;

  left.disabled = box3.querySelectorAll("input:checked").length === 0;
}

function moveItems(sourceElement, targetElement, allItemsMove = false) {
  let items;
  if (allItemsMove) {
    items = sourceElement.querySelectorAll("input");
  } else {
    items = sourceElement.querySelectorAll("input:checked");
  }

  items.forEach((item) => {
    item.checked = false;
    let parent = item.parentElement;
    targetElement.append(parent);
  });
  disableFunctions();

}

function createContentItemAddInBox1(list) {
  list.forEach((ele) => {
    let div = document.createElement("div");
    let input = document.createElement("input");
    let label = document.createElement("label");
    input.setAttribute("type", "checkbox");
    input.id = ele;
    label.setAttribute("for", input.id);
    label.innerText = ele;
    label.style.padding = "10px";
    div.append(input, label);
    div.style.margin = "10px";
    box1.append(div);
  });
}

function createButtonsAddInBox2(buttons) {
  buttons.forEach((button) => {
    let btn = document.createElement("button");
    btn.innerText = button.label;
    btn.className = button.action;
    btn.style.width = "25px";
    box2.append(btn);
  });
}
