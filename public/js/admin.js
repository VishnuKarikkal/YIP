var month = "";
var checked = 0; // checks whether any month selectors checked or not
var months=[];
var bpChecked=0;
var bpMonths=[];

var gameCheckUrl='http://localhost:5000/gameData/gameStats';
var calculateBalanceUrl='http://localhost:5000/gameData/calculateBalance';
var readyForRemarksUrl='http://localhost:5000/gameData/readyForRemarks';
var postRemarksUrl='http://localhost:5000/game/addRemarks';
$(document).ready(function () {
  $(":checkbox").slice(0,12).click(function (e) {
    if (e.target.checked == true) {
      //to verify how many months checked
     checked+=1;
     document.getElementById('activateMonthBtn').disabled=false;
    }
    else
    {
      checked-=1;
      if(checked==0)
      {
        document.getElementById('activateMonthBtn').disabled=true;
      }
    }
    
  });
  
  $(".bpChecks").click(function(e)
  {
    if(e.target.checked)
    {
      bpChecked++;
      document.getElementById('bpMonthBtn').disabled=false;
    }
    else
    {
      bpChecked--;
      if(bpChecked==0)
      {
        document.getElementById('bpMonthBtn').disabled=true;
      }
    }
  });

});
function gameCheck()
{
  remarkTableData();
  var monthChecks=$(":checkbox");   //to enable all months for activation
  let i=0;
  while(i<12){monthChecks[i].disabled=false;i++}  //making all month checks active (first 12 aims -> the 1st table)
  if(checked>0)
  {
    checked=0;    //resetting checked months counter
    months.splice(0,months.length);   //resetting months array
  } 

  //to check for active games and load it to the page
  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function()
                                {
                                    if((this.readyState==4)&&(this.status==200))
                                    {
                                      var res=JSON.parse(this.responseText);
                                      
                                      if(res['message']!="none")
                                      {
                                        let i=0;
                                        while(i<res['games'].length)
                                        {
                                          switch(res['games'][i].month)
                                          {
                                            case "JAN": 
                                                        if(res['games'][i].teamName == "NORTH")
                                                        {
                                                          document.getElementById('nJan').innerText=res['games'][i].vote;
                                                        }
                                                        else if(res['games'][i].teamName == "SOUTH")
                                                        {
                                                          document.getElementById('sJan').innerText=res['games'][i].vote;
                                                        }
                                                        else if(res['games'][i].teamName == "EAST")
                                                        {
                                                          document.getElementById('eJan').innerText=res['games'][i].vote;
                                                        }
                                                        else
                                                        {
                                                          document.getElementById('wJan').innerText=res['games'][i].vote;
                                                        }
                                                        break;
                                            case "FEB":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nFeb').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sFeb').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eFeb').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wFeb').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "MAR":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nMar').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sMar').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eMar').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wMar').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "APR":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nApr').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sApr').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eApr').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wApr').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "MAY":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nMay').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sMay').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eMay').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wMay').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "JUN":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nJun').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sJun').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eJun').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wJun').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "JUL":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nJul').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sJul').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eJul').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wJul').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "AUG":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nAug').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sAug').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eAug').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wAug').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "SEP":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nSep').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sSep').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eSep').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wSep').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "OCT":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nOct').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sOct').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eOct').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wOct').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "NOV":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nNov').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sNov').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eNov').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wNov').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            default:
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nDec').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sDec').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eDec').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wDec').innerText=res['games'][i].vote;
                                              }
                                          }
                                          if(res['games'][i].amount)
                                            { //disables checkboxes of published games
                                              switch(res['games'][i].month)
                                              {
                                                case "JAN":
                                                  document.getElementById('actJan').disabled=true;
                                                  break;
                                                case "FEB":
                                                  document.getElementById('actFeb').disabled=true;
                                                  break;
                                                case "MAR":
                                                  document.getElementById('actMar').disabled=true;
                                                  break;
                                                case "APR":
                                                  document.getElementById('actApr').disabled=true;
                                                  break;
                                                case "MAY":
                                                  document.getElementById('actMay').disabled=true;
                                                  break;
                                                case "JUN":
                                                  document.getElementById('actJun').disabled=true;
                                                  break;
                                                case "JUL":
                                                  document.getElementById('actJul').disabled=true;
                                                  break;
                                                case "AUG":
                                                  document.getElementById('actAug').disabled=true;
                                                  break;
                                                case "SEP":
                                                  document.getElementById('actSep').disabled=true;
                                                  break;
                                                case "OCT":
                                                  document.getElementById('actOct').disabled=true;
                                                  break;
                                                case "NOV":
                                                  document.getElementById('actNov').disabled=true;
                                                  break;
                                                default:
                                                  document.getElementById('actDec').disabled=true;
                                              }
                                            }
                                          i++;
                                        }
                                      }
                                      
                                    }
                                }
    xhttp.open("GET",gameCheckUrl,true);
    xhttp.send();
}

function activateMonths()
{
  let boxes=$(":checkbox");   //get all checkoxes
  months=[];  //list of all months checked
  let i=0;
  while(i<12)
  {
    if(boxes[i].checked)
    {
      switch(i)
      {
        case 0:months.push("JAN");break;
        case 1:months.push("FEB");break;
        case 2:months.push("MAR");break;
        case 3:months.push("APR");break;
        case 4:months.push("MAY");break;
        case 5:months.push("JUN");break;
        case 6:months.push("JUL");break;
        case 7:months.push("AUG");break;
        case 8:months.push("SEP");break;
        case 9:months.push("OCT");break;
        case 10:months.push("NOV");break;
        default:months.push("DEC");
      }
    }
    boxes[i].disabled=true;
    boxes[i].checked=false;
    i++;
  }

  if(months.length>0)
  {
    $.post('http://localhost:5000/game/activate' , {activateMonths:months } )
.done(function( data )
    {
    console.log( "Data Loaded: " + data.message);
    })
    document.getElementById('activateMonthBtn').disabled=true;
    document.getElementById('publishMonthBtn').disabled=false;
  }
  else
  {
    console.log("select months!");
    alert("no months activated!")
  }
}

function publishMonths()
{
  let i=true;
if(months.length>0)
{
  months.some(month=>
    {
      switch(month)
      {
        case "JAN": if((document.getElementById('nJan').innerText=="")
                        ||(document.getElementById('sJan').innerText=="")
                        ||(document.getElementById('eJan').innerText=="")
                        ||(document.getElementById('wJan').innerText==""))
                        {
                         i=false; 
                        }
                        break;
        case "FEB":if((document.getElementById('nFeb').innerText=="")
        ||(document.getElementById('sFeb').innerText=="")
        ||(document.getElementById('eFeb').innerText=="")
        ||(document.getElementById('wFeb').innerText==""))
        {
         i=false; 
        }
        break;
        case "MAR":if((document.getElementById('nMar').innerText=="")
        ||(document.getElementById('sMar').innerText=="")
        ||(document.getElementById('eMar').innerText=="")
        ||(document.getElementById('wMar').innerText==""))
        {
         i=false; 
        }
        break;
        case "APR":if((document.getElementById('nApr').innerText=="")
        ||(document.getElementById('sApr').innerText=="")
        ||(document.getElementById('eApr').innerText=="")
        ||(document.getElementById('wApr').innerText==""))
        {
         i=false; 
        }
        break;
        case "MAY":if((document.getElementById('nMay').innerText=="")
        ||(document.getElementById('sMay').innerText=="")
        ||(document.getElementById('eMay').innerText=="")
        ||(document.getElementById('wMay').innerText==""))
        {
         i=false; 
        }
        break;
        case "JUN":if((document.getElementById('nJun').innerText=="")
        ||(document.getElementById('sJun').innerText=="")
        ||(document.getElementById('eJun').innerText=="")
        ||(document.getElementById('wJun').innerText==""))
        {
         i=false; 
        }
        break;
        case "JUL":if((document.getElementById('nJul').innerText=="")
        ||(document.getElementById('sJul').innerText=="")
        ||(document.getElementById('eJul').innerText=="")
        ||(document.getElementById('wJul').innerText==""))
        {
         i=false; 
        }
        break;
        case "AUG":if((document.getElementById('nAug').innerText=="")
        ||(document.getElementById('sAug').innerText=="")
        ||(document.getElementById('eAug').innerText=="")
        ||(document.getElementById('wAug').innerText==""))
        {
         i=false; 
        }
        break; 
        case "SEP":if((document.getElementById('nSep').innerText=="")
        ||(document.getElementById('sSep').innerText=="")
        ||(document.getElementById('eSep').innerText=="")
        ||(document.getElementById('wSep').innerText==""))
        {
         i=false; 
        }
        break;
        case "OCT":if((document.getElementById('nOct').innerText=="")
        ||(document.getElementById('sOct').innerText=="")
        ||(document.getElementById('eOct').innerText=="")
        ||(document.getElementById('wOct').innerText==""))
        {
         i=false; 
        }
        break;
        case "NOV":if((document.getElementById('nNov').innerText=="")
        ||(document.getElementById('sNov').innerText=="")
        ||(document.getElementById('eNov').innerText=="")
        ||(document.getElementById('wNov').innerText==""))
        {
         i=false; 
        }
        break;
        default:if((document.getElementById('nDec').innerText=="")
        ||(document.getElementById('sDec').innerText=="")
        ||(document.getElementById('eDec').innerText=="")
        ||(document.getElementById('wDec').innerText==""))
        {
         i=false; 
        } 
      }
      if(!i)
      {
        alert("NOT All Teams Voted their Response!");
        return !i;
      }
    })
    if(i)
    {
      calculateLossOrGain();
    }
}
}

function calculateLossOrGain()
{
//to calculate each team's balances ased on their votes
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function()
                              {
                                  if((this.readyState==4)&&(this.status==200))
                                  {
                                    var res=JSON.parse(this.responseText);
                                    
                                    if(res['message']!="none")
                                    {
                                      console.log(res['message']);
                                      remarkTableData();
                                      gameCheck();
                                      document.getElementById("activateMonthBtn").disabled=true;
                                      document.getElementById("publishMonthBtn").disabled=true;
                                    }
                                  }
                                }
 xhttp.open("GET",calculateBalanceUrl,true);
 xhttp.send();
}

function remarksMonths()
{
  let boxes=$(".bpChecks");   //get all checkoxes
  bpMonths=[];  //list of all months checked in remarks table
  let i=0;
  while(i<12)
  {
    if(boxes[i].checked)
    {
      switch(i)
      {
        case 0:bpMonths.push("JAN");break;
        case 1:bpMonths.push("FEB");break;
        case 2:bpMonths.push("MAR");break;
        case 3:bpMonths.push("APR");break;
        case 4:bpMonths.push("MAY");break;
        case 5:bpMonths.push("JUN");break;
        case 6:bpMonths.push("JUL");break;
        case 7:bpMonths.push("AUG");break;
        case 8:bpMonths.push("SEP");break;
        case 9:bpMonths.push("OCT");break;
        case 10:bpMonths.push("NOV");break;
        default:bpMonths.push("DEC");
      }
    }
    boxes[i].disabled=true;
    boxes[i].checked=false;
    i++;
  }
  document.getElementById("bpMonthBtn").disabled=true;
  document.getElementById("bpAddBtn").disabled=false;
}

function remarkTableData()
{//to load all documents that ready for "adding-remarks" to the remarks table
  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function()
                                {
                                    if((this.readyState==4)&&(this.status==200))
                                    {
                                      var res=JSON.parse(this.responseText);
                                      console.log(res);
                                      if(res['message']!="none")
                                      {
                                        let i=0;
                                        while(i<res['games'].length)
                                        {
                                          switch(res['games'][i].month)
                                          {
                                            case "JAN": 
                                            if(res['games'][i].teamName == "NORTH")
                                            {
                                              document.getElementById('northVoteJan').innerText=res['games'][i].vote;
                                            }
                                            else if(res['games'][i].teamName == "SOUTH")
                                            {
                                              document.getElementById('southVoteJan').innerText=res['games'][i].vote;
                                            }
                                            else if(res['games'][i].teamName == "EAST")
                                            {
                                              document.getElementById('eastVoteJan').innerText=res['games'][i].vote;
                                            }
                                            else
                                            {
                                              document.getElementById('westVoteJan').innerText=res['games'][i].vote;
                                            }
                                            break;
                                case "FEB":
                                  if(res['games'][i].teamName == "NORTH")
                                  {
                                    document.getElementById('northVoteFeb').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "SOUTH")
                                  {
                                    document.getElementById('southVoteFeb').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "EAST")
                                  {
                                    document.getElementById('eastVoteFeb').innerText=res['games'][i].vote;
                                  }
                                  else
                                  {
                                    document.getElementById('westVoteFeb').innerText=res['games'][i].vote;
                                  }
                                  break;
                                case "MAR":
                                  if(res['games'][i].teamName == "NORTH")
                                  {
                                    document.getElementById('northVoteMar').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "SOUTH")
                                  {
                                    document.getElementById('southVoteMar').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "EAST")
                                  {
                                    document.getElementById('eastVoteMar').innerText=res['games'][i].vote;
                                  }
                                  else
                                  {
                                    document.getElementById('westVoteMar').innerText=res['games'][i].vote;
                                  }
                                  break;
                                case "APR":
                                  if(res['games'][i].teamName == "NORTH")
                                  {
                                    document.getElementById('northVoteApr').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "SOUTH")
                                  {
                                    document.getElementById('southVoteApr').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "EAST")
                                  {
                                    document.getElementById('eastVoteApr').innerText=res['games'][i].vote;
                                  }
                                  else
                                  {
                                    document.getElementById('westVoteApr').innerText=res['games'][i].vote;
                                  }
                                  break;
                                case "MAY":
                                  if(res['games'][i].teamName == "NORTH")
                                  {
                                    document.getElementById('northVoteMay').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "SOUTH")
                                  {
                                    document.getElementById('southVoteMay').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "EAST")
                                  {
                                    document.getElementById('eastVoteMay').innerText=res['games'][i].vote;
                                  }
                                  else
                                  {
                                    document.getElementById('westVoteMay').innerText=res['games'][i].vote;
                                  }
                                  break;
                                case "JUN":
                                  if(res['games'][i].teamName == "NORTH")
                                  {
                                    document.getElementById('northVoteJun').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "SOUTH")
                                  {
                                    document.getElementById('southVoteJun').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "EAST")
                                  {
                                    document.getElementById('eastVoteJun').innerText=res['games'][i].vote;
                                  }
                                  else
                                  {
                                    document.getElementById('westVoteJun').innerText=res['games'][i].vote;
                                  }
                                  break;
                                case "JUL":
                                  if(res['games'][i].teamName == "NORTH")
                                  {
                                    document.getElementById('northVoteJul').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "SOUTH")
                                  {
                                    document.getElementById('southVoteJul').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "EAST")
                                  {
                                    document.getElementById('eastVoteJul').innerText=res['games'][i].vote;
                                  }
                                  else
                                  {
                                    document.getElementById('westVoteJul').innerText=res['games'][i].vote;
                                  }
                                  break;
                                case "AUG":
                                  if(res['games'][i].teamName == "NORTH")
                                  {
                                    document.getElementById('northVoteAug').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "SOUTH")
                                  {
                                    document.getElementById('southVoteAug').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "EAST")
                                  {
                                    document.getElementById('eastVoteAug').innerText=res['games'][i].vote;
                                  }
                                  else
                                  {
                                    document.getElementById('westVoteAug').innerText=res['games'][i].vote;
                                  }
                                  break;
                                case "SEP":
                                  if(res['games'][i].teamName == "NORTH")
                                  {
                                    document.getElementById('northVoteSep').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "SOUTH")
                                  {
                                    document.getElementById('southVoteSep').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "EAST")
                                  {
                                    document.getElementById('eastVoteSep').innerText=res['games'][i].vote;
                                  }
                                  else
                                  {
                                    document.getElementById('westVoteSep').innerText=res['games'][i].vote;
                                  }
                                  break;
                                case "OCT":
                                  if(res['games'][i].teamName == "NORTH")
                                  {
                                    document.getElementById('northVoteOct').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "SOUTH")
                                  {
                                    document.getElementById('southVoteOct').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "EAST")
                                  {
                                    document.getElementById('eastVoteOct').innerText=res['games'][i].vote;
                                  }
                                  else
                                  {
                                    document.getElementById('westVoteOct').innerText=res['games'][i].vote;
                                  }
                                  break;
                                case "NOV":
                                  if(res['games'][i].teamName == "NORTH")
                                  {
                                    document.getElementById('northVoteNov').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "SOUTH")
                                  {
                                    document.getElementById('southVoteNov').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "EAST")
                                  {
                                    document.getElementById('eastVoteNov').innerText=res['games'][i].vote;
                                  }
                                  else
                                  {
                                    document.getElementById('westVoteNov').innerText=res['games'][i].vote;
                                  }
                                  break;
                                default:
                                  if(res['games'][i].teamName == "NORTH")
                                  {
                                    document.getElementById('northVoteDec').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "SOUTH")
                                  {
                                    document.getElementById('southVoteDec').innerText=res['games'][i].vote;
                                  }
                                  else if(res['games'][i].teamName == "EAST")
                                  {
                                    document.getElementById('eastVoteDec').innerText=res['games'][i].vote;
                                  }
                                  else
                                  {
                                    document.getElementById('westVoteDec').innerText=res['games'][i].vote;
                                  }
                                          }
                                          i++;
                                        }
                                      }
                                    }
                                }
   xhttp.open("GET",readyForRemarksUrl,true);
   xhttp.send();
}

document.getElementById('bpAddBtn').addEventListener('click',function(){
if(isAllRowsFilled()){
  postRemarks();
}
else{
  alert('All the rows are not filled');
}
})
//adding capitalize function so String
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}
function isAllRowsFilled(){
  let flags=[];
  bpMonths.forEach(function(month) {

    let northVoteId = `northVote${month.capitalize()}`;
    let southVoteId = `southVote${month.capitalize()}`;
    let westVoteId = `westVote${month.capitalize()}`;
    let eastVoteId = `eastVote${month.capitalize()}`;
    let northVote = document.getElementById(northVoteId).innerText.trim();
    let southVote = document.getElementById(southVoteId).innerText.trim();
    let westVote = document.getElementById(westVoteId).innerText.trim();
    let eastVote = document.getElementById(eastVoteId).innerText.trim();
    if (!(eastVote.length > 0 && southVote.length > 0 && westVote.length > 0 && northVote.length > 0)) {
      flags.push(false);
    }
  });
   if(flags.length>0){
     return false;
   }
   return true;
}

function postRemarks(){
  var remarks=[];
 bpMonths.forEach(function(month){
   let remark;
   let northId=`n${month.capitalize()}BP`;
   let southId=`s${month.capitalize()}BP`;
   let westId=`w${month.capitalize()}BP`;
   let eastId=`e${month.capitalize()}BP`;
    remark={
     month:month.toUpperCase(),
      north:isSliderGreen(northId),
      south:isSliderGreen(southId),
      west:isSliderGreen(westId),
      east:isSliderGreen(eastId)
   }
   remarks.push(remark);
 })
  let bonus=document.getElementById('selectedBonusValue').value;
  let penalty=document.getElementById('selectedPenaltyValue').value;

  fetch(postRemarksUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({remarks:remarks,bonus:bonus,penalty:penalty}),
  })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
function isSliderGreen(Id){
  return !document.querySelector(`#${Id} input[type='checkbox']`).checked;
}
