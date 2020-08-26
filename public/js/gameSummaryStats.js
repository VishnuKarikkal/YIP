var teamStatsUrl = "http://localhost:5000/gameData/teamStats";

function teamStats() {
  //to update teamStats data
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);

      if (res["message"] != "none") {
        document.getElementById("northBal").innerText = res["balance"];

        let i = 0;
        while (i < res["history"].length) {
          switch (res["history"][i].month) {
            case "JAN":
              document.getElementById("ANJan").innerText =
                res["history"][i].amount;
              document.getElementById("VNJan").innerText =
                res["history"][i].vote;
              break;
            case "FEB":
              document.getElementById("ANFeb").innerText =
                res["history"][i].amount;
              document.getElementById("VNFeb").innerText =
                res["history"][i].vote;
              break;
            case "MAR":
              document.getElementById("ANMar").innerText =
                res["history"][i].amount;
              document.getElementById("VNMar").innerText =
                res["history"][i].vote;
              break;
            case "APR":
              document.getElementById("ANApr").innerText =
                res["history"][i].amount;
              document.getElementById("VNApr").innerText =
                res["history"][i].vote;
              break;
            case "MAY":
              document.getElementById("ANMay").innerText =
                res["history"][i].amount;
              document.getElementById("VNMay").innerText =
                res["history"][i].vote;
              break;
            case "JUN":
              document.getElementById("ANJun").innerText =
                res["history"][i].amount;
              document.getElementById("VNJun").innerText =
                res["history"][i].vote;
              break;
            case "JUL":
              document.getElementById("ANJul").innerText =
                res["history"][i].amount;
              document.getElementById("VNJul").innerText =
                res["history"][i].vote;
              break;
            case "AUG":
              document.getElementById("ANAug").innerText =
                res["history"][i].amount;
              document.getElementById("VNAug").innerText =
                res["history"][i].vote;
              break;
            case "SEP":
              document.getElementById("ANSep").innerText =
                res["history"][i].amount;
              document.getElementById("VNSep").innerText =
                res["history"][i].vote;
              break;
            case "OCT":
              document.getElementById("ANOct").innerText =
                res["history"][i].amount;
              document.getElementById("VNOct").innerText =
                res["history"][i].vote;
              break;
            case "NOV":
              document.getElementById("ANNov").innerText =
                res["history"][i].amount;
              document.getElementById("VNNov").innerText =
                res["history"][i].vote;
              break;
            default:
              document.getElementById("ANDec").innerText =
                res["history"][i].amount;
              document.getElementById("VNDec").innerText =
                res["history"][i].vote;
          }
          i++;
        }
      } else {
        document.getElementById("balance").innerText = res["balance"];

        document.getElementById("janBalance").innerText = "";
        document.getElementById("janVote").innerText = "";

        document.getElementById("febBalance").innerText = "";
        document.getElementById("febVote").innerText = "";

        document.getElementById("marBalance").innerText = "";
        document.getElementById("marVote").innerText = "";

        document.getElementById("aprBalance").innerText = "";
        document.getElementById("aprVote").innerText = "";

        document.getElementById("mayBalance").innerText = "";
        document.getElementById("mayVote").innerText = "";

        document.getElementById("junBalance").innerText = "";
        document.getElementById("junVote").innerText = "";

        document.getElementById("julBalance").innerText = "";
        document.getElementById("julVote").innerText = "";

        document.getElementById("augBalance").innerText = "";
        document.getElementById("augVote").innerText = "";

        document.getElementById("sepBalance").innerText = "";
        document.getElementById("sepVote").innerText = "";

        document.getElementById("octBalance").innerText = "";
        document.getElementById("octVote").innerText = "";

        document.getElementById("novBalance").innerText = "";
        document.getElementById("novVote").innerText = "";

        document.getElementById("decBalance").innerText = "";
        document.getElementById("decVote").innerText = "";
      }
    }
  };

  xhttp.open("GET", teamStatsUrl + "?name=NORTH", true);
  xhttp.send();

  statsEast();
  statsWest();
  statsSouth();
}

function statsEast() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);

      if (res["message"] != "none") {
        document.getElementById("eastBal").innerText = res["balance"];

        let i = 0;
        while (i < res["history"].length) {
          switch (res["history"][i].month) {
            case "JAN":
              document.getElementById("AEJan").innerText =
                res["history"][i].amount;
              document.getElementById("VEJan").innerText =
                res["history"][i].vote;
              break;
            case "FEB":
              document.getElementById("AEFeb").innerText =
                res["history"][i].amount;
              document.getElementById("VEFeb").innerText =
                res["history"][i].vote;
              break;
            case "MAR":
              document.getElementById("AEMar").innerText =
                res["history"][i].amount;
              document.getElementById("VEMar").innerText =
                res["history"][i].vote;
              break;
            case "APR":
              document.getElementById("AEApr").innerText =
                res["history"][i].amount;
              document.getElementById("VEApr").innerText =
                res["history"][i].vote;
              break;
            case "MAY":
              document.getElementById("AEMay").innerText =
                res["history"][i].amount;
              document.getElementById("VEMay").innerText =
                res["history"][i].vote;
              break;
            case "JUN":
              document.getElementById("AEJun").innerText =
                res["history"][i].amount;
              document.getElementById("VEJun").innerText =
                res["history"][i].vote;
              break;
            case "JUL":
              document.getElementById("AEJul").innerText =
                res["history"][i].amount;
              document.getElementById("VEJul").innerText =
                res["history"][i].vote;
              break;
            case "AUG":
              document.getElementById("AEAug").innerText =
                res["history"][i].amount;
              document.getElementById("VEAug").innerText =
                res["history"][i].vote;
              break;
            case "SEP":
              document.getElementById("AESep").innerText =
                res["history"][i].amount;
              document.getElementById("VESep").innerText =
                res["history"][i].vote;
              break;
            case "OCT":
              document.getElementById("AEOct").innerText =
                res["history"][i].amount;
              document.getElementById("VEOct").innerText =
                res["history"][i].vote;
              break;
            case "NOV":
              document.getElementById("AENov").innerText =
                res["history"][i].amount;
              document.getElementById("VENov").innerText =
                res["history"][i].vote;
              break;
            default:
              document.getElementById("AEDec").innerText =
                res["history"][i].amount;
              document.getElementById("VEDec").innerText =
                res["history"][i].vote;
          }
          i++;
        }
      } else {
        document.getElementById("balance").innerText = res["balance"];

        document.getElementById("janBalance").innerText = "";
        document.getElementById("janVote").innerText = "";

        document.getElementById("febBalance").innerText = "";
        document.getElementById("febVote").innerText = "";

        document.getElementById("marBalance").innerText = "";
        document.getElementById("marVote").innerText = "";

        document.getElementById("aprBalance").innerText = "";
        document.getElementById("aprVote").innerText = "";

        document.getElementById("mayBalance").innerText = "";
        document.getElementById("mayVote").innerText = "";

        document.getElementById("junBalance").innerText = "";
        document.getElementById("junVote").innerText = "";

        document.getElementById("julBalance").innerText = "";
        document.getElementById("julVote").innerText = "";

        document.getElementById("augBalance").innerText = "";
        document.getElementById("augVote").innerText = "";

        document.getElementById("sepBalance").innerText = "";
        document.getElementById("sepVote").innerText = "";

        document.getElementById("octBalance").innerText = "";
        document.getElementById("octVote").innerText = "";

        document.getElementById("novBalance").innerText = "";
        document.getElementById("novVote").innerText = "";

        document.getElementById("decBalance").innerText = "";
        document.getElementById("decVote").innerText = "";
      }
    }
  };

  xhttp.open("GET", teamStatsUrl + "?name=EAST", true);
  xhttp.send();
}

function statsWest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);

      if (res["message"] != "none") {
        document.getElementById("westBal").innerText = res["balance"];

        let i = 0;
        while (i < res["history"].length) {
          switch (res["history"][i].month) {
            case "JAN":
              document.getElementById("AWJan").innerText =
                res["history"][i].amount;
              document.getElementById("VWJan").innerText =
                res["history"][i].vote;
              break;
            case "FEB":
              document.getElementById("AWFeb").innerText =
                res["history"][i].amount;
              document.getElementById("VWFeb").innerText =
                res["history"][i].vote;
              break;
            case "MAR":
              document.getElementById("AWMar").innerText =
                res["history"][i].amount;
              document.getElementById("VWMar").innerText =
                res["history"][i].vote;
              break;
            case "APR":
              document.getElementById("AWApr").innerText =
                res["history"][i].amount;
              document.getElementById("VWApr").innerText =
                res["history"][i].vote;
              break;
            case "MAY":
              document.getElementById("AWMay").innerText =
                res["history"][i].amount;
              document.getElementById("VWMay").innerText =
                res["history"][i].vote;
              break;
            case "JUN":
              document.getElementById("AWJun").innerText =
                res["history"][i].amount;
              document.getElementById("VWJun").innerText =
                res["history"][i].vote;
              break;
            case "JUL":
              document.getElementById("AWJul").innerText =
                res["history"][i].amount;
              document.getElementById("VWJul").innerText =
                res["history"][i].vote;
              break;
            case "AUG":
              document.getElementById("AWAug").innerText =
                res["history"][i].amount;
              document.getElementById("VWAug").innerText =
                res["history"][i].vote;
              break;
            case "SEP":
              document.getElementById("AWSep").innerText =
                res["history"][i].amount;
              document.getElementById("VWSep").innerText =
                res["history"][i].vote;
              break;
            case "OCT":
              document.getElementById("AWOct").innerText =
                res["history"][i].amount;
              document.getElementById("VWOct").innerText =
                res["history"][i].vote;
              break;
            case "NOV":
              document.getElementById("AWNov").innerText =
                res["history"][i].amount;
              document.getElementById("VWNov").innerText =
                res["history"][i].vote;
              break;
            default:
              document.getElementById("AWDec").innerText =
                res["history"][i].amount;
              document.getElementById("VWDec").innerText =
                res["history"][i].vote;
          }
          i++;
        }
      } else {
        document.getElementById("balance").innerText = res["balance"];

        document.getElementById("janBalance").innerText = "";
        document.getElementById("janVote").innerText = "";

        document.getElementById("febBalance").innerText = "";
        document.getElementById("febVote").innerText = "";

        document.getElementById("marBalance").innerText = "";
        document.getElementById("marVote").innerText = "";

        document.getElementById("aprBalance").innerText = "";
        document.getElementById("aprVote").innerText = "";

        document.getElementById("mayBalance").innerText = "";
        document.getElementById("mayVote").innerText = "";

        document.getElementById("junBalance").innerText = "";
        document.getElementById("junVote").innerText = "";

        document.getElementById("julBalance").innerText = "";
        document.getElementById("julVote").innerText = "";

        document.getElementById("augBalance").innerText = "";
        document.getElementById("augVote").innerText = "";

        document.getElementById("sepBalance").innerText = "";
        document.getElementById("sepVote").innerText = "";

        document.getElementById("octBalance").innerText = "";
        document.getElementById("octVote").innerText = "";

        document.getElementById("novBalance").innerText = "";
        document.getElementById("novVote").innerText = "";

        document.getElementById("decBalance").innerText = "";
        document.getElementById("decVote").innerText = "";
      }
    }
  };

  xhttp.open("GET", teamStatsUrl + "?name=WEST", true);
  xhttp.send();
}

function statsSouth() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);

      if (res["message"] != "none") {
        document.getElementById("southBal").innerText = res["balance"];

        let i = 0;
        while (i < res["history"].length) {
          switch (res["history"][i].month) {
            case "JAN":
              document.getElementById("ASJan").innerText =
                res["history"][i].amount;
              document.getElementById("VSJan").innerText =
                res["history"][i].vote;
              break;
            case "FEB":
              document.getElementById("ASFeb").innerText =
                res["history"][i].amount;
              document.getElementById("VSFeb").innerText =
                res["history"][i].vote;
              break;
            case "MAR":
              document.getElementById("ASMar").innerText =
                res["history"][i].amount;
              document.getElementById("VSMar").innerText =
                res["history"][i].vote;
              break;
            case "APR":
              document.getElementById("ASApr").innerText =
                res["history"][i].amount;
              document.getElementById("VSApr").innerText =
                res["history"][i].vote;
              break;
            case "MAY":
              document.getElementById("ASMay").innerText =
                res["history"][i].amount;
              document.getElementById("VSMay").innerText =
                res["history"][i].vote;
              break;
            case "JUN":
              document.getElementById("ASJun").innerText =
                res["history"][i].amount;
              document.getElementById("VSJun").innerText =
                res["history"][i].vote;
              break;
            case "JUL":
              document.getElementById("ASJul").innerText =
                res["history"][i].amount;
              document.getElementById("VSJul").innerText =
                res["history"][i].vote;
              break;
            case "AUG":
              document.getElementById("ASAug").innerText =
                res["history"][i].amount;
              document.getElementById("VSAug").innerText =
                res["history"][i].vote;
              break;
            case "SEP":
              document.getElementById("ASSep").innerText =
                res["history"][i].amount;
              document.getElementById("VSSep").innerText =
                res["history"][i].vote;
              break;
            case "OCT":
              document.getElementById("ASOct").innerText =
                res["history"][i].amount;
              document.getElementById("VSOct").innerText =
                res["history"][i].vote;
              break;
            case "NOV":
              document.getElementById("ASNov").innerText =
                res["history"][i].amount;
              document.getElementById("VSNov").innerText =
                res["history"][i].vote;
              break;
            default:
              document.getElementById("ASDec").innerText =
                res["history"][i].amount;
              document.getElementById("VSDec").innerText =
                res["history"][i].vote;
          }
          i++;
        }
      } else {
        document.getElementById("balance").innerText = res["balance"];

        document.getElementById("janBalance").innerText = "";
        document.getElementById("janVote").innerText = "";

        document.getElementById("febBalance").innerText = "";
        document.getElementById("febVote").innerText = "";

        document.getElementById("marBalance").innerText = "";
        document.getElementById("marVote").innerText = "";

        document.getElementById("aprBalance").innerText = "";
        document.getElementById("aprVote").innerText = "";

        document.getElementById("mayBalance").innerText = "";
        document.getElementById("mayVote").innerText = "";

        document.getElementById("junBalance").innerText = "";
        document.getElementById("junVote").innerText = "";

        document.getElementById("julBalance").innerText = "";
        document.getElementById("julVote").innerText = "";

        document.getElementById("augBalance").innerText = "";
        document.getElementById("augVote").innerText = "";

        document.getElementById("sepBalance").innerText = "";
        document.getElementById("sepVote").innerText = "";

        document.getElementById("octBalance").innerText = "";
        document.getElementById("octVote").innerText = "";

        document.getElementById("novBalance").innerText = "";
        document.getElementById("novVote").innerText = "";

        document.getElementById("decBalance").innerText = "";
        document.getElementById("decVote").innerText = "";
      }
    }
  };

  xhttp.open("GET", teamStatsUrl + "?name=SOUTH", true);
  xhttp.send();
}
