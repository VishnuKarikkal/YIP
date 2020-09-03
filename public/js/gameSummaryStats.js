var teamStatsUrl = "/gameData/teamStats";

var NCB;
var ECB;
var WCB;
var SCB;

//to load data each team to the corresponding rows in the stats table
function teamStats() {
  //to update teamStats data
  fetchTeamStats("NORTH");
  fetchTeamStats("SOUTH");
  fetchTeamStats("EAST");
  fetchTeamStats("WEST");
}

function fetchTeamStats(team) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    const l = team.split("")[0];
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);

      if (res["message"] != "none") {
        document.getElementById(`${team.toLowerCase()}Bal`).innerText = res[
          "balance"
        ].toFixed(3);
        if (team == "NORTH") {
          NCB = res["balance"];
        } else if (team == "SOUTH") {
          SCB = res["balance"];
        } else if (team == "WEST") {
          WCB = res["balance"];
        } else {
          ECB = res["balance"];
        }
        let i = 0;
        console.log(res["history"]);
        while (i < res["history"].length) {
          switch (res["history"][i].month) {
            case "JAN":
              populateTeamStatsRow("Jan", i, res, l);
              break;
            case "FEB":
              populateTeamStatsRow("Feb", i, res, l);
              break;
            case "MAR":
              populateTeamStatsRow("Mar", i, res, l);
              break;
            case "APR":
              populateTeamStatsRow("Apr", i, res, l);
              break;
            case "MAY":
              populateTeamStatsRow("May", i, res, l);
              break;
            case "JUN":
              populateTeamStatsRow("Jun", i, res, l);
              break;
            case "JUL":
              populateTeamStatsRow("Jul", i, res, l);
              break;
            case "AUG":
              populateTeamStatsRow("Aug", i, res, l);
              break;
            case "SEP":
              populateTeamStatsRow("Sep", i, res, l);
              break;
            case "OCT":
              populateTeamStatsRow("Oct", i, res, l);
              break;
            case "NOV":
              populateTeamStatsRow("Nov", i, res, l);
              break;
            case "DEC":
              populateTeamStatsRow("Dec", i, res, l);
              break;
            default:
          }
          i++;
        }
      } else {
        document.getElementById("balance").innerText = res["balance"];
        let months = [
          "jan",
          "feb",
          "mar",
          "apr",
          "may",
          "jun",
          "jul",
          "aug",
          "sep",
          "oct",
          "nov",
          "dec",
        ];
        months.forEach((month) => {
          document.getElementById(`${month}Balance`).innerText = "";
          document.getElementById(`${month}Vote`).innerText = "";
        });
      }
    }
  };

  xhttp.open("GET", teamStatsUrl + `?name=${team}`, true);
  xhttp.send();
}

function populateTeamStatsRow(month, i, res, l) {
  let amount = res["history"][i].amount;
  if (amount) {
    if (amount < 0) {
      amount = -amount;
      document.getElementById(`A${l}${month}`).style.color = "red";
    } else {
      document.getElementById(`A${l}${month}`).style.color = "green";
    }
    document.getElementById(`A${l}${month}`).innerText = amount + "";
  } else {
    document.getElementById(`A${l}${month}`).innerText = "";
  }
  document.getElementById(`V${l}${month}`).innerText = res["history"][i].vote;
  var remark = res["history"][i].remarks;
  if (remark) {
    if (remark < 0) {
      remark = -remark;
      document.getElementById(`R${l}${month}`).style.color = "red";
    } else {
      document.getElementById(`R${l}${month}`).style.color = "green";
    }
    document.getElementById(`R${l}${month}`).innerText = remark;
  } else {
    document.getElementById(`R${l}${month}`).innerText = "0";
  }
}

//to reload data to the summary section on every 6th second
function reloadSummaryData() {
  // console.log(NCB, ECB, WCB, SCB);
  let arr = [NCB, ECB, WCB, SCB];
  var largest = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  // console.log(largest);
  document.getElementById("leadAmount").innerText = largest.toFixed(3);
  var leading = "";
  if (largest == NCB) {
    leading += "North ";
  }
  if (largest == ECB) {
    leading += "East ";
  }
  if (largest == WCB) {
    leading += "West ";
  }
  if (largest == SCB) {
    leading += "South";
  }
  // console.log(leading);
  document.getElementById("leading").innerText = leading;
}

setInterval(refreshTables, 5000);

function refreshTables() {
  teamStats();
  reloadSummaryData();
}
