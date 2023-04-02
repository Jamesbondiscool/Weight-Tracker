function calculate() {
    var currentWeight = document.getElementById("currentWeight").value;
    var goalWeight = document.getElementById("goalWeight").value;
    var result = document.getElementById("result");
  
    var weightToLose = currentWeight - goalWeight;
    result.innerHTML = "You need to lose " + weightToLose + " pounds to reach your goal.";
  }
  
