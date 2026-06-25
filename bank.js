const transBtn = document.getElementById("trans");

if (transBtn) {
    transBtn.addEventListener("click", function () {
        let box = document.querySelectorAll(".dis");

        box.forEach(function (boxes) {
            boxes.style.display =
                boxes.style.display === "block" ? "none" : "block";
        });
    });
}
// Get HTML elements
let balance = document.getElementById("balance");
let saving = document.getElementById("saving");

// Initial values
let moneyb = 100000;
let moneys = 50000;

// Display balance and saving
function disBS() {
    balance.textContent = `${moneyb} RWF`;
    saving.textContent = `${moneys} RWF`;
}

// Deposit button
let hello=document.getElementById("depbt");
hello.addEventListener("click", deposit);
function deposit(){
    let depinput = document.getElementById("dep");
    let dep = Number(depinput.value);

    if (isNaN(dep) || dep <= 0) {
        document.getElementById("msg").textContent = "Invalid amount!!";
        document.getElementById("msg").style.color = "red";
        depinput.value = "";
        return;
    }

    // Add deposit
    moneyb += dep * 0.9;
    moneys += dep * 0.1;

    document.getElementById("msg").textContent =
        "Deposit completed! 90% added to Balance and 10% added to Saving.";
    document.getElementById("msg").style.color = "green";

    depinput.value = "";

    disBS();
    save();
}

// Save to localStorage
function save() {
    localStorage.setItem("saveb", moneyb);
    localStorage.setItem("saves", moneys);
}

// Load from localStorage
function load() {
    let saved = localStorage.getItem("saveb");
    let saven = localStorage.getItem("saves");

    if (saved !== null) {
        moneyb = Number(saved);
    }

    if (saven !== null) {
        moneys = Number(saven);
    }

    disBS();
}

// Load data when page opens
load();