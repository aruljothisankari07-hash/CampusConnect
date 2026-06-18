// =========================
// CAMPUSCONNECT SCRIPT
// =========================

console.log("CampusConnect Loaded 🚀");

// Toast Notification
function showToast(message){

let toast = document.createElement("div");

toast.className = "toast";
toast.innerText = message;

document.body.appendChild(toast);

setTimeout(() => {
toast.classList.add("show");
},100);

setTimeout(() => {
toast.classList.remove("show");
toast.remove();
},2500);

}

function searchCompany(){

let input =
document.getElementById("searchInput").value.toUpperCase();

let cards =
document.querySelectorAll(".company-card");

cards.forEach(card => {

let company =
card.querySelector("h2").innerText.toUpperCase();

if(company.indexOf(input) > -1){

card.style.display = "";

}
else{

card.style.display = "none";

}

});

}