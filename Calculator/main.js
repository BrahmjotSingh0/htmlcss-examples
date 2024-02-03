var calculationHistory = [];

function clrscr() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calc() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    calculationHistory.push(p + " = " + q);
}

function showHistory() {
    alert("Calculation History:\n" + calculationHistory.join("\n"));
}
