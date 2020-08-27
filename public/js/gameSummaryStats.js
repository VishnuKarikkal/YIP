var teamStatsUrl = "http://localhost:5000/gameData/teamStats";

var NCB = "";
var ECB = "";
var WCB = "";
var SCB = "";

function teamStats() {
  //to update teamStats data
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);

      if (res["message"] != "none") {
        document.getElementById("northBal").innerText = res["balance"];
        NCB = res["balance"];

        let i = 0;
        while (i < res["history"].length) {
          switch (res["history"][i].month) {
            case "JAN":
              if (res["history"][i].amount) {
                var ANJan = res["history"][i].amount;
                if (ANJan < 0) {
                  ANJan = -ANJan;
                  document.getElementById("ANJan").style.color = "red";
                } else {
                  document.getElementById("ANJan").style.color = "green";
                }
              } else {
                document.getElementById("ANJan").innerText = "";
              }
              document.getElementById("VNJan").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                var RNJan = res["history"][i].remarks;
                if (RNJan < 0) {
                  RNJan = -RNJan;
                  document.getElementById("RNJan").style.color = "red";
                } else {
                  document.getElementById("RNJan").style.color = "green";
                }
                document.getElementById("RNJan").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RNJan").innerText = "";
              }
              break;
            case "FEB":
              if (res["history"][i].amount) {
                var ANFeb = res["history"][i].amount;
                if (ANFeb < 0) {
                  ANFeb = -ANFeb;
                  document.getElementById("ANFeb").style.color = "red";
                } else {
                  document.getElementById("ANFeb").style.color = "green";
                }
              } else {
                document.getElementById("ANFeb").innerText = "";
              }
              document.getElementById("VNFeb").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                var RNFeb = res["history"][i].remarks;
                if (RNFeb < 0) {
                  RNFeb = -RNFeb;
                  document.getElementById("RNFeb").style.color = "red";
                } else {
                  document.getElementById("RNFeb").style.color = "green";
                }
                document.getElementById("RNFeb").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RNFeb").innerText = "";
              }
              break;
            case "MAR":
              if (res["history"][i].amount) {
                var ANMar = res["history"][i].amount;
                if (ANMar < 0) {
                  ANMar = -ANMar;
                  document.getElementById("ANMar").style.color = "red";
                } else {
                  document.getElementById("ANMar").style.color = "green";
                }
              } else {
                document.getElementById("ANMar").innerText = "";
              }
              document.getElementById("VNMar").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RNMar < 0) {
                  RNMar = -RNMar;
                  document.getElementById("RNMar").style.color = "red";
                } else {
                  document.getElementById("RNMar").style.color = "green";
                }
                document.getElementById("RNMar").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RNMar").innerText = "";
              }
              break;
            case "APR":
              if (res["history"][i].amount) {
                var ANApr = res["history"][i].amount;
                if (ANApr < 0) {
                  ANApr = -ANApr;
                  document.getElementById("ANApr").style.color = "red";
                } else {
                  document.getElementById("ANApr").style.color = "green";
                }
              } else {
                document.getElementById("ANApr").innerText = "";
              }
              document.getElementById("VNApr").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RNApr < 0) {
                  RNApr = -RNApr;
                  document.getElementById("RNApr").style.color = "red";
                } else {
                  document.getElementById("RNApr").style.color = "green";
                }
                document.getElementById("RNApr").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RNApr").innerText = "";
              }
              break;
            case "MAY":
              if (res["history"][i].amount) {
                var ANMay = res["history"][i].amount;
                if (ANMay < 0) {
                  ANMay = -ANMay;
                  document.getElementById("ANMay").style.color = "red";
                } else {
                  document.getElementById("ANMay").style.color = "green";
                }
              } else {
                document.getElementById("ANMay").innerText = "";
              }
              document.getElementById("VNMay").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RNMay < 0) {
                  RNMay = -RNMay;
                  document.getElementById("RNMay").style.color = "red";
                } else {
                  document.getElementById("RNMay").style.color = "green";
                }
                document.getElementById("RNMay").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RNMay").innerText = "";
              }
              break;
            case "JUN":
              if (res["history"][i].amount) {
                var ANJun = res["history"][i].amount;
                if (ANJun < 0) {
                  ANJun = -ANJun;
                  document.getElementById("ANJun").style.color = "red";
                } else {
                  document.getElementById("ANJun").style.color = "green";
                }
              } else {
                document.getElementById("ANJun").innerText = "";
              }
              document.getElementById("VNJun").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RNJun < 0) {
                  RNJun = -RNJun;
                  document.getElementById("RNJun").style.color = "red";
                } else {
                  document.getElementById("RNJun").style.color = "green";
                }
                document.getElementById("RNJun").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RNJun").innerText = "";
              }
              break;
            case "JUL":
              if (res["history"][i].amount) {
                var ANJul = res["history"][i].amount;
                if (ANJul < 0) {
                  ANJul = -ANJul;
                  document.getElementById("ANJul").style.color = "red";
                } else {
                  document.getElementById("ANJul").style.color = "green";
                }
              } else {
                document.getElementById("ANJul").innerText = "";
              }
              document.getElementById("VNJul").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RNJul < 0) {
                  RNJul = -RNJul;
                  document.getElementById("RNJul").style.color = "red";
                } else {
                  document.getElementById("RNJul").style.color = "green";
                }
                document.getElementById("RNJul").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RNJul").innerText = "";
              }
              break;
            case "AUG":
              if (res["history"][i].amount) {
                var ANAug = res["history"][i].amount;
                if (ANAug < 0) {
                  ANAug = -ANAug;
                  document.getElementById("ANAug").style.color = "red";
                } else {
                  document.getElementById("ANAug").style.color = "green";
                }
              } else {
                document.getElementById("ANAug").innerText = "";
              }
              document.getElementById("VNAug").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RNAug < 0) {
                  RNAug = -RNAug;
                  document.getElementById("RNAug").style.color = "red";
                } else {
                  document.getElementById("RNAug").style.color = "green";
                }
                document.getElementById("RNAug").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RNAug").innerText = "";
              }
              break;
            case "SEP":
              if (res["history"][i].amount) {
                var ANSep = res["history"][i].amount;
                if (ANSep < 0) {
                  ANSep = -ANSep;
                  document.getElementById("ANSep").style.color = "red";
                } else {
                  document.getElementById("ANSep").style.color = "green";
                }
              } else {
                document.getElementById("ANSep").innerText = "";
              }
              document.getElementById("VNSep").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RNSep < 0) {
                  RNSep = -RNSep;
                  document.getElementById("RNSep").style.color = "red";
                } else {
                  document.getElementById("RNSep").style.color = "green";
                }
                document.getElementById("RNSep").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RNSep").innerText = "";
              }
              break;
            case "OCT":
              if (res["history"][i].amount) {
                var ANOct = res["history"][i].amount;
                if (ANOct < 0) {
                  ANOct = -ANOct;
                  document.getElementById("ANOct").style.color = "red";
                } else {
                  document.getElementById("ANOct").style.color = "green";
                }
              } else {
                document.getElementById("ANOct").innerText = "";
              }
              document.getElementById("VNOct").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RNOct < 0) {
                  RNOct = -RNOct;
                  document.getElementById("RNOct").style.color = "red";
                } else {
                  document.getElementById("RNOct").style.color = "green";
                }
                document.getElementById("RNOct").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RNOct").innerText = "";
              }
              break;
            case "NOV":
              if (res["history"][i].amount) {
                var ANNov = res["history"][i].amount;
                if (ANNov < 0) {
                  ANNov = -ANNov;
                  document.getElementById("ANNov").style.color = "red";
                } else {
                  document.getElementById("ANNov").style.color = "green";
                }
              } else {
                document.getElementById("ANNov").innerText = "";
              }
              document.getElementById("VNNov").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RNNov < 0) {
                  RNNov = -RNNov;
                  document.getElementById("RNNov").style.color = "red";
                } else {
                  document.getElementById("RNNov").style.color = "green";
                }
                document.getElementById("RNNov").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RNNov").innerText = "";
              }
              break;
            default:
              if (res["history"][i].amount) {
                var ANDec = res["history"][i].amount;
                if (ANDec < 0) {
                  ANDec = -ANDec;
                  document.getElementById("ANDec").style.color = "red";
                } else {
                  document.getElementById("ANDec").style.color = "green";
                }
              } else {
                document.getElementById("ANDec").innerText = "";
              }
              document.getElementById("VNDec").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RNDec < 0) {
                  RNDec = -RNDec;
                  document.getElementById("RNDec").style.color = "red";
                } else {
                  document.getElementById("RNDec").style.color = "green";
                }
                document.getElementById("RNDec").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RNDec").innerText = "";
              }
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
        ECB = res["balance"];

        let i = 0;
        while (i < res["history"].length) {
          switch (res["history"][i].month) {
            case "JAN":
              if (res["history"][i].amount) {
                var AEJan = res["history"][i].amount;
                if (AEJan < 0) {
                  AEJan = -AEJan;
                  document.getElementById("AEJan").style.color = "red";
                } else {
                  document.getElementById("AEJan").style.color = "green";
                }
              } else {
                document.getElementById("AEJan").innerText = "";
              }
              document.getElementById("VEJan").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (REJan < 0) {
                  REJan = -REJan;
                  document.getElementById("REJan").style.color = "red";
                } else {
                  document.getElementById("REJan").style.color = "green";
                }
                document.getElementById("REJan").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("REJan").innerText = "";
              }
              break;
            case "FEB":
              if (res["history"][i].amount) {
                var AEFeb = res["history"][i].amount;
                if (AEFeb < 0) {
                  AEFeb = -AEFeb;
                  document.getElementById("AEFeb").style.color = "red";
                } else {
                  document.getElementById("AEFeb").style.color = "green";
                }
              } else {
                document.getElementById("AEFeb").innerText = "";
              }
              document.getElementById("VEFeb").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (REFeb < 0) {
                  REFeb = -REFeb;
                  document.getElementById("REFeb").style.color = "red";
                } else {
                  document.getElementById("REFeb").style.color = "green";
                }
                document.getElementById("REFeb").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("REFeb").innerText = "";
              }
              break;
            case "MAR":
              if (res["history"][i].amount) {
                var AEMar = res["history"][i].amount;
                if (AEMar < 0) {
                  AEMar = -AEMar;
                  document.getElementById("AEMar").style.color = "red";
                } else {
                  document.getElementById("AEMar").style.color = "green";
                }
              } else {
                document.getElementById("AEMar").innerText = "";
              }
              document.getElementById("VEMar").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (REMar < 0) {
                  REMar = -REMar;
                  document.getElementById("REMar").style.color = "red";
                } else {
                  document.getElementById("REMar").style.color = "green";
                }
                document.getElementById("REMar").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("REMar").innerText = "";
              }
              break;
            case "APR":
              if (res["history"][i].amount) {
                var AEApr = res["history"][i].amount;
                if (AEApr < 0) {
                  AEApr = -AEApr;
                  document.getElementById("AEApr").style.color = "red";
                } else {
                  document.getElementById("AEApr").style.color = "green";
                }
              } else {
                document.getElementById("AEApr").innerText = "";
              }
              document.getElementById("VEApr").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (REApr < 0) {
                  REApr = -REApr;
                  document.getElementById("REApr").style.color = "red";
                } else {
                  document.getElementById("REApr").style.color = "green";
                }
                document.getElementById("REApr").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("REApr").innerText = "";
              }
              break;
            case "MAY":
              if (res["history"][i].amount) {
                var AEMay = res["history"][i].amount;
                if (AEMay < 0) {
                  AEMay = -AEMay;
                  document.getElementById("AEMay").style.color = "red";
                } else {
                  document.getElementById("AEMay").style.color = "green";
                }
              } else {
                document.getElementById("AEMay").innerText = "";
              }
              document.getElementById("VEMay").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (REMay < 0) {
                  REMay = -REMay;
                  document.getElementById("REMay").style.color = "red";
                } else {
                  document.getElementById("REMay").style.color = "green";
                }
                document.getElementById("REMay").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("REMay").innerText = "";
              }
              break;
            case "JUN":
              if (res["history"][i].amount) {
                var AEJun = res["history"][i].amount;
                if (AEJun < 0) {
                  AEJun = -AEJun;
                  document.getElementById("AEJun").style.color = "red";
                } else {
                  document.getElementById("AEJun").style.color = "green";
                }
              } else {
                document.getElementById("AEJun").innerText = "";
              }
              document.getElementById("VEJun").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (REJun < 0) {
                  REJun = -REJun;
                  document.getElementById("REJun").style.color = "red";
                } else {
                  document.getElementById("REJun").style.color = "green";
                }
                document.getElementById("REJun").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("REJun").innerText = "";
              }
              break;
            case "JUL":
              if (res["history"][i].amount) {
                var AEJul = res["history"][i].amount;
                if (AEJul < 0) {
                  AEJul = -AEJul;
                  document.getElementById("AEJul").style.color = "red";
                } else {
                  document.getElementById("AEJul").style.color = "green";
                }
              } else {
                document.getElementById("AEJul").innerText = "";
              }
              document.getElementById("VEJul").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (REJul < 0) {
                  REJul = -REJul;
                  document.getElementById("REJul").style.color = "red";
                } else {
                  document.getElementById("REJul").style.color = "green";
                }
                document.getElementById("REJul").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("REJul").innerText = "";
              }
              break;
            case "AUG":
              if (res["history"][i].amount) {
                var AEAug = res["history"][i].amount;
                if (AEAug < 0) {
                  AEAug = -AEAug;
                  document.getElementById("AEAug").style.color = "red";
                } else {
                  document.getElementById("AEAug").style.color = "green";
                }
              } else {
                document.getElementById("AEAug").innerText = "";
              }
              document.getElementById("VEAug").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (REAug < 0) {
                  REAug = -REAug;
                  document.getElementById("REAug").style.color = "red";
                } else {
                  document.getElementById("REAug").style.color = "green";
                }
                document.getElementById("REAug").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("REAug").innerText = "";
              }
              break;
            case "SEP":
              if (res["history"][i].amount) {
                var AESep = res["history"][i].amount;
                if (AESep < 0) {
                  AESep = -AESep;
                  document.getElementById("AESep").style.color = "red";
                } else {
                  document.getElementById("AESep").style.color = "green";
                }
              } else {
                document.getElementById("AESep").innerText = "";
              }
              document.getElementById("VESep").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RESep < 0) {
                  RESep = -RESep;
                  document.getElementById("RESep").style.color = "red";
                } else {
                  document.getElementById("RESep").style.color = "green";
                }
                document.getElementById("RESep").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RESep").innerText = "";
              }
              break;
            case "OCT":
              if (res["history"][i].amount) {
                var AEOct = res["history"][i].amount;
                if (AEOct < 0) {
                  AEOct = -AEOct;
                  document.getElementById("AEOct").style.color = "red";
                } else {
                  document.getElementById("AEOct").style.color = "green";
                }
              } else {
                document.getElementById("AEOct").innerText = "";
              }
              document.getElementById("VEOct").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (REOct < 0) {
                  REOct = -REOct;
                  document.getElementById("REOct").style.color = "red";
                } else {
                  document.getElementById("REOct").style.color = "green";
                }
                document.getElementById("REOct").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("REOct").innerText = "";
              }
              break;
            case "NOV":
              if (res["history"][i].amount) {
                var AENov = res["history"][i].amount;
                if (AENov < 0) {
                  AENov = -AENov;
                  document.getElementById("AENov").style.color = "red";
                } else {
                  document.getElementById("AENov").style.color = "green";
                }
              } else {
                document.getElementById("AENov").innerText = "";
              }
              document.getElementById("VENov").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RENov < 0) {
                  RENov = -RENov;
                  document.getElementById("RENov").style.color = "red";
                } else {
                  document.getElementById("RENov").style.color = "green";
                }
                document.getElementById("RENov").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RENov").innerText = "";
              }
              break;
            default:
              if (res["history"][i].amount) {
                var AEDec = res["history"][i].amount;
                if (AEDec < 0) {
                  AEDec = -AEDec;
                  document.getElementById("AEDec").style.color = "red";
                } else {
                  document.getElementById("AEDec").style.color = "green";
                }
              } else {
                document.getElementById("AEDec").innerText = "";
              }
              document.getElementById("VEDec").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (REDec < 0) {
                  REDec = -REDec;
                  document.getElementById("REDec").style.color = "red";
                } else {
                  document.getElementById("REDec").style.color = "green";
                }
                document.getElementById("REDec").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("REDec").innerText = "";
              }
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
        WCB = res["balance"];

        let i = 0;
        while (i < res["history"].length) {
          switch (res["history"][i].month) {
            case "JAN":
              if (res["history"][i].amount) {
                var AWJan = res["history"][i].amount;
                if (AWJan < 0) {
                  AWJan = -AWJan;
                  document.getElementById("AWJan").style.color = "red";
                } else {
                  document.getElementById("AWJan").style.color = "green";
                }
              } else {
                document.getElementById("AWJan").innerText = "";
              }
              document.getElementById("VWJan").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RWJan < 0) {
                  RWJan = -RWJan;
                  document.getElementById("RWJan").style.color = "red";
                } else {
                  document.getElementById("RWJan").style.color = "green";
                }
                document.getElementById("RWJan").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RWJan").innerText = "";
              }
              break;
            case "FEB":
              if (res["history"][i].amount) {
                var AWFeb = res["history"][i].amount;
                if (AWFeb < 0) {
                  AWFeb = -AEFeb;
                  document.getElementById("AWFeb").style.color = "red";
                } else {
                  document.getElementById("AWFeb").style.color = "green";
                }
              } else {
                document.getElementById("AWFeb").innerText = "";
              }
              document.getElementById("VWFeb").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RWFeb < 0) {
                  RWFeb = -RWFeb;
                  document.getElementById("RWFeb").style.color = "red";
                } else {
                  document.getElementById("RWFeb").style.color = "green";
                }
                document.getElementById("RWFeb").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RWFeb").innerText = "";
              }
              break;
            case "MAR":
              if (res["history"][i].amount) {
                var AWMar = res["history"][i].amount;
                if (AWMar < 0) {
                  AWMar = -AEMar;
                  document.getElementById("AWMar").style.color = "red";
                } else {
                  document.getElementById("AWMar").style.color = "green";
                }
              } else {
                document.getElementById("AWMar").innerText = "";
              }
              document.getElementById("VWMar").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RWMar < 0) {
                  RWMar = -RWMar;
                  document.getElementById("RWMar").style.color = "red";
                } else {
                  document.getElementById("RWMar").style.color = "green";
                }
                document.getElementById("RWMar").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RWMar").innerText = "";
              }
              break;
            case "APR":
              if (res["history"][i].amount) {
                var AWApr = res["history"][i].amount;
                if (AWApr < 0) {
                  AWApr = -AEApr;
                  document.getElementById("AWApr").style.color = "red";
                } else {
                  document.getElementById("AWApr").style.color = "green";
                }
              } else {
                document.getElementById("AWApr").innerText = "";
              }
              document.getElementById("VWApr").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RWApr < 0) {
                  RWApr = -RWApr;
                  document.getElementById("RWApr").style.color = "red";
                } else {
                  document.getElementById("RWApr").style.color = "green";
                }
                document.getElementById("RWApr").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RWApr").innerText = "";
              }
              break;
            case "MAY":
              if (res["history"][i].amount) {
                var AWMay = res["history"][i].amount;
                if (AWMay < 0) {
                  AWMay = -AEMay;
                  document.getElementById("AWMay").style.color = "red";
                } else {
                  document.getElementById("AWMay").style.color = "green";
                }
              } else {
                document.getElementById("AWMay").innerText = "";
              }
              document.getElementById("VWMay").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RWMay < 0) {
                  RWMay = -RWMay;
                  document.getElementById("RWMay").style.color = "red";
                } else {
                  document.getElementById("RWMay").style.color = "green";
                }
                document.getElementById("RWMay").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RWMay").innerText = "";
              }
              break;
            case "JUN":
              if (res["history"][i].amount) {
                var AWJun = res["history"][i].amount;
                if (AWJun < 0) {
                  AWJun = -AEJun;
                  document.getElementById("AWJun").style.color = "red";
                } else {
                  document.getElementById("AWJun").style.color = "green";
                }
              } else {
                document.getElementById("AWJun").innerText = "";
              }
              document.getElementById("VWJun").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RWJun < 0) {
                  RWJun = -RWJun;
                  document.getElementById("RWJun").style.color = "red";
                } else {
                  document.getElementById("RWJun").style.color = "green";
                }
                document.getElementById("RWJun").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RWJun").innerText = "";
              }
              break;
            case "JUL":
              if (res["history"][i].amount) {
                var AWJul = res["history"][i].amount;
                if (AWJul < 0) {
                  AWJul = -AEJul;
                  document.getElementById("AWJul").style.color = "red";
                } else {
                  document.getElementById("AWJul").style.color = "green";
                }
              } else {
                document.getElementById("AWJul").innerText = "";
              }
              document.getElementById("VWJul").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RWJul < 0) {
                  RWJul = -RWJul;
                  document.getElementById("RWJul").style.color = "red";
                } else {
                  document.getElementById("RWJul").style.color = "green";
                }
                document.getElementById("RWJul").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RWJul").innerText = "";
              }
              break;
            case "AUG":
              if (res["history"][i].amount) {
                var AWAug = res["history"][i].amount;
                if (AWAug < 0) {
                  AWAug = -AEAug;
                  document.getElementById("AWAug").style.color = "red";
                } else {
                  document.getElementById("AWAug").style.color = "green";
                }
              } else {
                document.getElementById("AWAug").innerText = "";
              }
              document.getElementById("VWAug").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RWAug < 0) {
                  RWAug = -RWAug;
                  document.getElementById("RWAug").style.color = "red";
                } else {
                  document.getElementById("RWAug").style.color = "green";
                }
                document.getElementById("RWAug").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RWAug").innerText = "";
              }
              break;
            case "SEP":
              if (res["history"][i].amount) {
                var AWSep = res["history"][i].amount;
                if (AWSep < 0) {
                  AWSep = -AESep;
                  document.getElementById("AWSep").style.color = "red";
                } else {
                  document.getElementById("AWSep").style.color = "green";
                }
              } else {
                document.getElementById("AWSep").innerText = "";
              }
              document.getElementById("VWSep").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RWSep < 0) {
                  RWSep = -RWSep;
                  document.getElementById("RWSep").style.color = "red";
                } else {
                  document.getElementById("RWSep").style.color = "green";
                }
                document.getElementById("RWSep").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RWSep").innerText = "";
              }
              break;
            case "OCT":
              if (res["history"][i].amount) {
                var AWOct = res["history"][i].amount;
                if (AWOct < 0) {
                  AWOct = -AEOct;
                  document.getElementById("AWOct").style.color = "red";
                } else {
                  document.getElementById("AWOct").style.color = "green";
                }
              } else {
                document.getElementById("AWOct").innerText = "";
              }
              document.getElementById("VWOct").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RWOct < 0) {
                  RWOct = -RWOct;
                  document.getElementById("RWOct").style.color = "red";
                } else {
                  document.getElementById("RWOct").style.color = "green";
                }
                document.getElementById("RWOct").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RWOct").innerText = "";
              }
              break;
            case "NOV":
              if (res["history"][i].amount) {
                var AWNov = res["history"][i].amount;
                if (AWNov < 0) {
                  AWNov = -AENov;
                  document.getElementById("AWNov").style.color = "red";
                } else {
                  document.getElementById("AWNov").style.color = "green";
                }
              } else {
                document.getElementById("AWNov").innerText = "";
              }
              document.getElementById("VWNov").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RWNov < 0) {
                  RWNov = -RWNov;
                  document.getElementById("RWNov").style.color = "red";
                } else {
                  document.getElementById("RWNov").style.color = "green";
                }
                document.getElementById("RWNov").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RWNov").innerText = "";
              }
              break;
            default:
              if (res["history"][i].amount) {
                var AWDec = res["history"][i].amount;
                if (AWDec < 0) {
                  AWDec = -AEDec;
                  document.getElementById("AWDec").style.color = "red";
                } else {
                  document.getElementById("AWDec").style.color = "green";
                }
              } else {
                document.getElementById("AWDec").innerText = "";
              }
              document.getElementById("VWDec").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RWDec < 0) {
                  RWDec = -RWDec;
                  document.getElementById("RWDec").style.color = "red";
                } else {
                  document.getElementById("RWDec").style.color = "green";
                }
                document.getElementById("RWDec").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RWDec").innerText = "";
              }
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
        SCB = res["balance"];

        let i = 0;
        while (i < res["history"].length) {
          switch (res["history"][i].month) {
            case "JAN":
              var ASJan = res["history"][i].amount;
              if (ASJan < 0) {
                ASJan = -ASJan;
                document.getElementById("ASJan").style.color = "red";
              } else {
                document.getElementById("ASJan").style.color = "green";
              }
              document.getElementById("ASJan").innerText = ASJan;
              document.getElementById("VSJan").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RSJan < 0) {
                  RSJan = -RSJan;
                  document.getElementById("RSJan").style.color = "red";
                } else {
                  document.getElementById("RSJan").style.color = "green";
                }
                document.getElementById("RSJan").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RSJan").innerText = "";
              }
              break;
            case "FEB":
              var ASFeb = res["history"][i].amount;
              if (ASFeb < 0) {
                ASFeb = -ASFeb;
                document.getElementById("ASFeb").style.color = "red";
              } else {
                document.getElementById("ASFeb").style.color = "green";
              }
              document.getElementById("ASFeb").innerText = ASFeb;
              document.getElementById("VSFeb").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RSFeb < 0) {
                  RSFeb = -RSFeb;
                  document.getElementById("RSFeb").style.color = "red";
                } else {
                  document.getElementById("RSFeb").style.color = "green";
                }
                document.getElementById("RSFeb").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RSFeb").innerText = "";
              }
              break;
            case "MAR":
              var ASMar = res["history"][i].amount;
              if (ASMar < 0) {
                ASMar = -ASMar;
                document.getElementById("ASMar").style.color = "red";
              } else {
                document.getElementById("ASMar").style.color = "green";
              }
              document.getElementById("ASMar").innerText = ASMar;
              document.getElementById("VSMar").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RSMar < 0) {
                  RSMar = -RSMar;
                  document.getElementById("RSMar").style.color = "red";
                } else {
                  document.getElementById("RSMar").style.color = "green";
                }
                document.getElementById("RSMar").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RSMar").innerText = "";
              }
              break;
            case "APR":
              var ASApr = res["history"][i].amount;
              if (ASApr < 0) {
                ASApr = -ASApr;
                document.getElementById("ASApr").style.color = "red";
              } else {
                document.getElementById("ASApr").style.color = "green";
              }
              document.getElementById("ASApr").innerText = ASApr;
              document.getElementById("VSApr").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RSApr < 0) {
                  RSApr = -RSApr;
                  document.getElementById("RSApr").style.color = "red";
                } else {
                  document.getElementById("RSApr").style.color = "green";
                }
                document.getElementById("RSApr").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RSApr").innerText = "";
              }
              break;
            case "MAY":
              var ASMay = res["history"][i].amount;
              if (ASMay < 0) {
                ASMay = -ASMay;
                document.getElementById("ASMay").style.color = "red";
              } else {
                document.getElementById("ASMay").style.color = "green";
              }
              document.getElementById("ASMay").innerText = ASMay;
              document.getElementById("VSMay").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RSMay < 0) {
                  RSMay = -RSMay;
                  document.getElementById("RSMay").style.color = "red";
                } else {
                  document.getElementById("RSMay").style.color = "green";
                }
                document.getElementById("RSMay").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RSMay").innerText = "";
              }
              break;
            case "JUN":
              var ASJun = res["history"][i].amount;
              if (ASJun < 0) {
                ASJun = -ASJun;
                document.getElementById("ASJun").style.color = "red";
              } else {
                document.getElementById("ASJun").style.color = "green";
              }
              document.getElementById("ASJun").innerText = ASJun;
              document.getElementById("VSJun").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RSJun < 0) {
                  RSJun = -RSJun;
                  document.getElementById("RSJun").style.color = "red";
                } else {
                  document.getElementById("RSJun").style.color = "green";
                }
                document.getElementById("RSJun").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RSJun").innerText = "";
              }
              break;
            case "JUL":
              var ASJul = res["history"][i].amount;
              if (ASJul < 0) {
                ASJul = -ASJul;
                document.getElementById("ASJul").style.color = "red";
              } else {
                document.getElementById("ASJul").style.color = "green";
              }
              document.getElementById("ASJul").innerText = ASJul;
              document.getElementById("VSJul").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RSJul < 0) {
                  RSJul = -RSJul;
                  document.getElementById("RSJul").style.color = "red";
                } else {
                  document.getElementById("RSJul").style.color = "green";
                }
                document.getElementById("RSJul").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RSJul").innerText = "";
              }
              break;
            case "AUG":
              var ASAug = res["history"][i].amount;
              if (ASAug < 0) {
                ASAug = -ASAug;
                document.getElementById("ASAug").style.color = "red";
              } else {
                document.getElementById("ASAug").style.color = "green";
              }
              document.getElementById("ASAug").innerText = ASAug;
              document.getElementById("VSAug").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RSAug < 0) {
                  RSAug = -RSAug;
                  document.getElementById("RSAug").style.color = "red";
                } else {
                  document.getElementById("RSAug").style.color = "green";
                }
                document.getElementById("RSAug").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RSAug").innerText = "";
              }
              break;
            case "SEP":
              var ASSep = res["history"][i].amount;
              if (ASSep < 0) {
                ASSep = -ASSep;
                document.getElementById("ASSep").style.color = "red";
              } else {
                document.getElementById("ASSep").style.color = "green";
              }
              document.getElementById("ASSep").innerText = ASSep;
              document.getElementById("VSSep").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RSSep < 0) {
                  RSSep = -RSSep;
                  document.getElementById("RSSep").style.color = "red";
                } else {
                  document.getElementById("RSSep").style.color = "green";
                }
                document.getElementById("RSSep").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RSSep").innerText = "";
              }
              break;
            case "OCT":
              var ASOct = res["history"][i].amount;
              if (ASOct < 0) {
                ASOct = -ASOct;
                document.getElementById("ASOct").style.color = "red";
              } else {
                document.getElementById("ASOct").style.color = "green";
              }
              document.getElementById("ASOct").innerText = ASOct;
              document.getElementById("VSOct").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RSOct < 0) {
                  RSOct = -RSOct;
                  document.getElementById("RSOct").style.color = "red";
                } else {
                  document.getElementById("RSOct").style.color = "green";
                }
                document.getElementById("RSOct").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RSOct").innerText = "";
              }
              break;
            case "NOV":
              var ASNov = res["history"][i].amount;
              if (ASNov < 0) {
                ASNov = -ASNov;
                document.getElementById("ASNov").style.color = "red";
              } else {
                document.getElementById("ASNov").style.color = "green";
              }
              document.getElementById("ASNov").innerText = ASNov;
              document.getElementById("VSNov").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RSNov < 0) {
                  RSNov = -RSNov;
                  document.getElementById("RSNov").style.color = "red";
                } else {
                  document.getElementById("RSNov").style.color = "green";
                }
                document.getElementById("RSNov").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RSNov").innerText = "";
              }
              break;
            default:
              var ASDec = res["history"][i].amount;
              if (ASDec < 0) {
                ASDec = -ASDec;
                document.getElementById("ASDec").style.color = "red";
              } else {
                document.getElementById("ASDec").style.color = "green";
              }
              document.getElementById("ASDec").innerText = ASDec;
              document.getElementById("VSDec").innerText =
                res["history"][i].vote;
              if (res["history"][i].remarks) {
                if (RSDec < 0) {
                  RSDec = -RSDec;
                  document.getElementById("RSDec").style.color = "red";
                } else {
                  document.getElementById("RSDec").style.color = "green";
                }
                document.getElementById("RSDec").innerText =
                  res["history"][i].remarks;
              } else {
                document.getElementById("RSDec").innerText = "";
              }
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

setInterval(() => {
  // console.log(NCB, ECB, WCB, SCB);
  let arr = [NCB, ECB, ECB, SCB];
  var largest = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  // console.log(largest);
  document.getElementById("leadAmount").innerText = largest;
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
}, 3000);
