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
              var ANJan = res["history"][i].amount;
              if (ANJan < 0) {
                ANJan = -ANJan;
                document.getElementById("ANJan").style.color = "red";
              } else {
                document.getElementById("ANJan").style.color = "green";
              }
              document.getElementById("ANJan").innerText = ANJan;
              document.getElementById("VNJan").innerText =
                res["history"][i].vote;
              break;
            case "FEB":
              var ANFeb = res["history"][i].amount;
              if (ANFeb < 0) {
                ANFeb = -ANFeb;
                document.getElementById("ANFeb").style.color = "red";
              } else {
                document.getElementById("ANFeb").style.color = "green";
              }
              document.getElementById("ANFeb").innerText = ANFeb;
              document.getElementById("VNFeb").innerText =
                res["history"][i].vote;
              break;
            case "MAR":
              var ANMar = res["history"][i].amount;
              if (ANMar < 0) {
                ANMar = -ANMar;
                document.getElementById("ANMar").style.color = "red";
              } else {
                document.getElementById("ANMar").style.color = "green";
              }
              document.getElementById("ANMar").innerText = ANMar;
              document.getElementById("VNMar").innerText =
                res["history"][i].vote;
              break;
            case "APR":
              var ANApr = res["history"][i].amount;
              if (ANApr < 0) {
                ANApr = -ANApr;
                document.getElementById("ANApr").style.color = "red";
              } else {
                document.getElementById("ANApr").style.color = "green";
              }
              document.getElementById("ANApr").innerText = ANApr;
              document.getElementById("VNApr").innerText =
                res["history"][i].vote;
              break;
            case "MAY":
              var ANMay = res["history"][i].amount;
              if (ANMay < 0) {
                ANMay = -ANMay;
                document.getElementById("ANMay").style.color = "red";
              } else {
                document.getElementById("ANMay").style.color = "green";
              }
              document.getElementById("ANMay").innerText = ANMay;
              document.getElementById("VNMay").innerText =
                res["history"][i].vote;
              break;
            case "JUN":
              var ANJun = res["history"][i].amount;
              if (ANJun < 0) {
                ANJun = -ANJun;
                document.getElementById("ANJun").style.color = "red";
              } else {
                document.getElementById("ANJun").style.color = "green";
              }
              document.getElementById("ANJun").innerText = ANJun;
              document.getElementById("VNJun").innerText =
                res["history"][i].vote;
              break;
            case "JUL":
              var ANJul = res["history"][i].amount;
              if (ANJul < 0) {
                ANJul = -ANJul;
                document.getElementById("ANJul").style.color = "red";
              } else {
                document.getElementById("ANJul").style.color = "green";
              }
              document.getElementById("ANJul").innerText = ANJul;
              document.getElementById("VNJul").innerText =
                res["history"][i].vote;
              break;
            case "AUG":
              var ANAug = res["history"][i].amount;
              if (ANAug < 0) {
                ANAug = -ANAug;
                document.getElementById("ANAug").style.color = "red";
              } else {
                document.getElementById("ANAug").style.color = "green";
              }
              document.getElementById("ANAug").innerText = ANAug;
              document.getElementById("VNAug").innerText =
                res["history"][i].vote;
              break;
            case "SEP":
              var ANSep = res["history"][i].amount;
              if (ANSep < 0) {
                ANSep = -ANSep;
                document.getElementById("ANSep").style.color = "red";
              } else {
                document.getElementById("ANSep").style.color = "green";
              }
              document.getElementById("ANSep").innerText = ANSep;
              document.getElementById("VNSep").innerText =
                res["history"][i].vote;
              break;
            case "OCT":
              var ANOct = res["history"][i].amount;
              if (ANOct < 0) {
                ANOct = -ANOct;
                document.getElementById("ANOct").style.color = "red";
              } else {
                document.getElementById("ANOct").style.color = "green";
              }
              document.getElementById("ANOct").innerText = ANOct;
              document.getElementById("VNOct").innerText =
                res["history"][i].vote;
              break;
            case "NOV":
              var ANNov = res["history"][i].amount;
              if (ANNov < 0) {
                ANNov = -ANNov;
                document.getElementById("ANNov").style.color = "red";
              } else {
                document.getElementById("ANNov").style.color = "green";
              }
              document.getElementById("ANNov").innerText = ANNov;
              document.getElementById("VNNov").innerText =
                res["history"][i].vote;
              break;
            default:
              var ANDec = res["history"][i].amount;
              if (ANDec < 0) {
                ANDec = -ANDec;
                document.getElementById("ANDec").style.color = "red";
              } else {
                document.getElementById("ANDec").style.color = "green";
              }
              document.getElementById("ANDec").innerText = ANDec;
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
        ECB = res["balance"];

        let i = 0;
        while (i < res["history"].length) {
          switch (res["history"][i].month) {
            case "JAN":
              var AEJan = res["history"][i].amount;
              if (AEJan < 0) {
                AEJan = -AEJan;
                document.getElementById("AEJan").style.color = "red";
              } else {
                document.getElementById("AEJan").style.color = "green";
              }
              document.getElementById("AEJan").innerText = AEJan;
              document.getElementById("VEJan").innerText =
                res["history"][i].vote;
              break;
            case "FEB":
              var AEFeb = res["history"][i].amount;
              if (AEFeb < 0) {
                AEFeb = -AEFeb;
                document.getElementById("AEFeb").style.color = "red";
              } else {
                document.getElementById("AEFeb").style.color = "green";
              }
              document.getElementById("AEFeb").innerText = AEFeb;
              document.getElementById("VEFeb").innerText =
                res["history"][i].vote;
              break;
            case "MAR":
              var AEMar = res["history"][i].amount;
              if (AEMar < 0) {
                AEMar = -AEMar;
                document.getElementById("AEMar").style.color = "red";
              } else {
                document.getElementById("AEMar").style.color = "green";
              }
              document.getElementById("AEMar").innerText = AEMar;
              document.getElementById("VEMar").innerText =
                res["history"][i].vote;
              break;
            case "APR":
              var AEApr = res["history"][i].amount;
              if (AEApr < 0) {
                AEApr = -AEApr;
                document.getElementById("AEApr").style.color = "red";
              } else {
                document.getElementById("AEApr").style.color = "green";
              }
              document.getElementById("AEApr").innerText = AEApr;
              document.getElementById("VEApr").innerText =
                res["history"][i].vote;
              break;
            case "MAY":
              var AEMAy = res["history"][i].amount;
              if (AEMAy < 0) {
                AEMAy = -AEMAy;
                document.getElementById("AEMAy").style.color = "red";
              } else {
                document.getElementById("AEMAy").style.color = "green";
              }
              document.getElementById("AEMAy").innerText = AEMAy;
              document.getElementById("VEMay").innerText =
                res["history"][i].vote;
              break;
            case "JUN":
              var AEJun = res["history"][i].amount;
              if (AEJun < 0) {
                AEJun = -AEJun;
                document.getElementById("AEJun").style.color = "red";
              } else {
                document.getElementById("AEJun").style.color = "green";
              }
              document.getElementById("AEJun").innerText = AEJun;
              document.getElementById("VEJun").innerText =
                res["history"][i].vote;
              break;
            case "JUL":
              var AEJul = res["history"][i].amount;
              if (AEJul < 0) {
                AEJul = -AEJul;
                document.getElementById("AEJul").style.color = "red";
              } else {
                document.getElementById("AEJul").style.color = "green";
              }
              document.getElementById("AEJul").innerText = AEJul;
              document.getElementById("VEJul").innerText =
                res["history"][i].vote;
              break;
            case "AUG":
              var AEAug = res["history"][i].amount;
              if (AEAug < 0) {
                AEAug = -AEAug;
                document.getElementById("AEAug").style.color = "red";
              } else {
                document.getElementById("AEAug").style.color = "green";
              }
              document.getElementById("AEAug").innerText = AEAug;
              document.getElementById("VEAug").innerText =
                res["history"][i].vote;
              break;
            case "SEP":
              var AESep = res["history"][i].amount;
              if (AESep < 0) {
                AESep = -AESep;
                document.getElementById("AESep").style.color = "red";
              } else {
                document.getElementById("AESep").style.color = "green";
              }
              document.getElementById("AESep").innerText = AESep;
              document.getElementById("VESep").innerText =
                res["history"][i].vote;
              break;
            case "OCT":
              var AEOct = res["history"][i].amount;
              if (AEOct < 0) {
                AEOct = -AEOct;
                document.getElementById("AEOct").style.color = "red";
              } else {
                document.getElementById("AEOct").style.color = "green";
              }
              document.getElementById("AEOct").innerText = AEOct;
              document.getElementById("VEOct").innerText =
                res["history"][i].vote;
              break;
            case "NOV":
              var AENov = res["history"][i].amount;
              if (AENov < 0) {
                AENov = -AENov;
                document.getElementById("AENov").style.color = "red";
              } else {
                document.getElementById("AENov").style.color = "green";
              }
              document.getElementById("AENov").innerText = AENov;
              document.getElementById("VENov").innerText =
                res["history"][i].vote;
              break;
            default:
              var AEDec = res["history"][i].amount;
              if (AEDec < 0) {
                AEDec = -AEDec;
                document.getElementById("AEDec").style.color = "red";
              } else {
                document.getElementById("AEDec").style.color = "green";
              }
              document.getElementById("AEDec").innerText = AEDec;
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
        WCB = res["balance"];

        let i = 0;
        while (i < res["history"].length) {
          switch (res["history"][i].month) {
            case "JAN":
              var AWJan = res["history"][i].amount;
              if (AWJan < 0) {
                AWJan = -AWJan;
                document.getElementById("AWJan").style.color = "red";
              } else {
                document.getElementById("AWJan").style.color = "green";
              }
              document.getElementById("AWJan").innerText = AWJan;
              document.getElementById("VWJan").innerText =
                res["history"][i].vote;
              break;
            case "FEB":
              var AWFeb = res["history"][i].amount;
              if (AWFeb < 0) {
                AWFeb = -AWFeb;
                document.getElementById("AWFeb").style.color = "red";
              } else {
                document.getElementById("AWFeb").style.color = "green";
              }
              document.getElementById("AWFeb").innerText = AWFeb;
              document.getElementById("VWFeb").innerText =
                res["history"][i].vote;
              break;
            case "MAR":
              var AWMar = res["history"][i].amount;
              if (AWMar < 0) {
                AWMar = -AWMar;
                document.getElementById("AWMar").style.color = "red";
              } else {
                document.getElementById("AWMar").style.color = "green";
              }
              document.getElementById("AWMar").innerText = AWMar;
              document.getElementById("VWMar").innerText =
                res["history"][i].vote;
              break;
            case "APR":
              var AWApr = res["history"][i].amount;
              if (AWApr < 0) {
                AWApr = -AWApr;
                document.getElementById("AWApr").style.color = "red";
              } else {
                document.getElementById("AWApr").style.color = "green";
              }
              document.getElementById("AWApr").innerText = AWApr;
              document.getElementById("VWApr").innerText =
                res["history"][i].vote;
              break;
            case "MAY":
              var AWMay = res["history"][i].amount;
              if (AWMay < 0) {
                AWMay = -AWMay;
                document.getElementById("AWMay").style.color = "red";
              } else {
                document.getElementById("AWMay").style.color = "green";
              }
              document.getElementById("AWMay").innerText = AWMay;
              document.getElementById("VWMay").innerText =
                res["history"][i].vote;
              break;
            case "JUN":
              var AWJun = res["history"][i].amount;
              if (AWJun < 0) {
                AWJun = -AWJun;
                document.getElementById("AWJun").style.color = "red";
              } else {
                document.getElementById("AWJun").style.color = "green";
              }
              document.getElementById("AWJun").innerText = AWJun;
              document.getElementById("VWJun").innerText =
                res["history"][i].vote;
              break;
            case "JUL":
              var AWJul = res["history"][i].amount;
              if (AWJul < 0) {
                AWJul = -AWJul;
                document.getElementById("AWJul").style.color = "red";
              } else {
                document.getElementById("AWJul").style.color = "green";
              }
              document.getElementById("AWJul").innerText = AWJul;
              document.getElementById("VWJul").innerText =
                res["history"][i].vote;
              break;
            case "AUG":
              var AWAug = res["history"][i].amount;
              if (AWAug < 0) {
                AWAug = -AWAug;
                document.getElementById("AWAug").style.color = "red";
              } else {
                document.getElementById("AWAug").style.color = "green";
              }
              document.getElementById("AWAug").innerText = AWAug;
              document.getElementById("VWAug").innerText =
                res["history"][i].vote;
              break;
            case "SEP":
              var AWSep = res["history"][i].amount;
              if (AWSep < 0) {
                AWSep = -AWSep;
                document.getElementById("AWSep").style.color = "red";
              } else {
                document.getElementById("AWSep").style.color = "green";
              }
              document.getElementById("AWSep").innerText = AWSep;
              document.getElementById("VWSep").innerText =
                res["history"][i].vote;
              break;
            case "OCT":
              var AWOct = res["history"][i].amount;
              if (AWOct < 0) {
                AWOct = -AWOct;
                document.getElementById("AWOct").style.color = "red";
              } else {
                document.getElementById("AWOct").style.color = "green";
              }
              document.getElementById("AWOct").innerText = AWOct;
              document.getElementById("VWOct").innerText =
                res["history"][i].vote;
              break;
            case "NOV":
              var AWNov = res["history"][i].amount;
              if (AWNov < 0) {
                AWNov = -AWNov;
                document.getElementById("AWNov").style.color = "red";
              } else {
                document.getElementById("AWNov").style.color = "green";
              }
              document.getElementById("AWNov").innerText = AWNov;
              document.getElementById("VWNov").innerText =
                res["history"][i].vote;
              break;
            default:
              var AWDec = res["history"][i].amount;
              if (AWDec < 0) {
                AWDec = -AWDec;
                document.getElementById("AWDec").style.color = "red";
              } else {
                document.getElementById("AWDec").style.color = "green";
              }
              document.getElementById("AWDec").innerText = AWDec;
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
