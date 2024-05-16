// main_script.js
console.log("main_script.js loaded");

document.getElementById("commandingOfficerBtn").addEventListener("click", function () {
  console.log("Commanding Officer button clicked");
  window.location.href = "suggestion.html";
});

document.getElementById("companyCommanderBtn").addEventListener("click", function () {
  console.log("Company Commander button clicked");
  window.location.href = "suggestion.html";
});

document.getElementById("goBackBtn").addEventListener("click", function (event) {
  // event.preventDefault(); 
  console.log("Back button clicked");
  // window.location.href = "login.html"; 
});
