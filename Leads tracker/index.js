//myLeads = JSON.parse(myLeads)
//
//myLeads.push("www.epicland.com")
//myLeads = JSON.stringify(myLeads)
//console.log(typeof myLeads)

let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromlocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromlocalStorage);

if (leadsFromlocalStorage) {
  myLeads = leadsFromlocalStorage;
  render(myLeads);
}



tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let index = 0; index < leads.length; index++) {
    //listItems += "<li><a target = '_blank' href = ' " + myLeads[index] + "'>" + myLeads[index] + "</a></li>"
    listItems += `
       <li>
       <a target = '_blank' href = ' ${leads[index]}'>
       ${leads[index]}</a>
       </li>
       `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
