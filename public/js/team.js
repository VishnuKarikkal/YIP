var optionVoted = "";
var noOfActiveGames=0;
var activeGames=[];
var activeGameCheckUrl = "http://localhost:5000/game/activeGame";
var votePostUrl='http://localhost:5000/game/vote';
var teamStatsUrl='http://localhost:5000/gameData/teamStats';
var team=localStorage.getItem('teamName');
var name=`name=${team}`;
document.getElementById('teamName').innerText=team;

$(document).ready(function () {
  $.each($(".opt"), function (key, value) {
    $(this).click(function (e) {
      $(".radio-btn-selected")
        .removeClass("radio-btn-selected")
        .addClass("radio-btn");

      $(this).removeClass("radio-btn").addClass("radio-btn-selected");
      if (key == 0) {
        optionVoted = "C";
      } else {
        optionVoted = "D";
      }
      console.log(optionVoted);
    });
  });
});

function gameCheck() {
  //to check for active games and load it to the page (on page load)
  var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function()
                                {
                                    if((this.readyState==4)&&(this.status==200))
                                    {
                                      var res=JSON.parse(this.responseText);
                                      
                                        //returns active-games-month or "none"
                                      if(res['message']!="none")  //if any active
                                      {
                                        activeGames=res['games'];
                                        noOfActiveGames=activeGames.length-1;
                                        
                                        document.getElementById('month').innerText=activeGames[0].month;
                                        activeGames.shift();
                                        //console.log(activeGames)
                                        document.getElementById('voteOptions').hidden=false;
                                      }
                                      else      //no active game
                                      {
                                        document.getElementById('month').innerText="No Active Games!";
                                        document.getElementById('voteOptions').hidden=true;
                                      }
                                    }
                                    else
                                    {
                                      document.getElementById('month').innerText="No Active Games!";
                                      document.getElementById('voteOptions').hidden=true;
                                    }
                                }
      
    xhttp.open("GET",activeGameCheckUrl,true);
    xhttp.send();
}
/*-----------------post request for vote-----------------------*/
let votedValue=null;
 let voteBtns=document.getElementsByClassName('vote-btn');
 //adding event listener's on Vote c/d button
[...voteBtns].forEach(function(btn){
  btn.addEventListener('click', function(btn){
       votedValue=btn.target.innerText;
       console.log(votedValue);
  })
})
document.getElementById('vote').addEventListener('click', event => {
  let teamName=team.toUpperCase();  //document.getElementById('teamName').innerText
  let month=document.getElementById('month').innerText;
  let vote=votedValue;
  if(vote){
  $.post('http://localhost:5000/game/vote' , { teamName:teamName, month:month, vote:vote } )
.done(function( data ) {
    console.log( "Data Loaded: " + data.message);

    teamStats(); //to load team game stats
  //check if any more active games avilable in the current time
                                     if(noOfActiveGames>0)   //if games exits
                                     {
                                        noOfActiveGames=activeGames.length-1;
                                        document.getElementById('month').innerText=activeGames[0].month;
                                        activeGames.shift();
                                        //console.log(activeGames)
                                        document.getElementById('voteOptions').hidden=false;
                                      }
                                      else      //no active game
                                      {
                                        document.getElementById('month').innerText="No Active Games!";
                                        document.getElementById('voteOptions').hidden=true;
                                      }
  });
  }
  else{
    alert('Please vote!');
  }
});

function teamStats()
{
  //to update teamStats data
  var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function()
                                {
                                    if((this.readyState==4)&&(this.status==200))
                                    {
                                      var res=JSON.parse(this.responseText);
                                      
                                      if (res['message']!="none")
                                      {
                                        document.getElementById('balance').innerText=res['balance'];

                                        let i=0;
                                        while(i<res['history'].length)
                                        {
                                          switch(res['history'][i].month)
                                          {
                                            case "JAN":
                                                        document.getElementById('janBalance').innerText=res['history'][i].totalBalance;
                                                        document.getElementById('janVote').innerText=res['history'][i].vote;
                                                  break;
                                            case "FEB":
                                                        document.getElementById('febBalance').innerText=res['history'][i].totalBalance;
                                                        document.getElementById('febVote').innerText=res['history'][i].vote;
                                                  break;
                                            case "MAR":
                                                        document.getElementById('marBalance').innerText=res['history'][i].totalBalance;
                                                        document.getElementById('marVote').innerText=res['history'][i].vote;
                                                  break;
                                            case "APR":
                                                        document.getElementById('aprBalance').innerText=res['history'][i].totalBalance;
                                                        document.getElementById('aprVote').innerText=res['history'][i].vote;
                                                  break;
                                            case "MAY":
                                                        document.getElementById('mayBalance').innerText=res['history'][i].totalBalance;
                                                        document.getElementById('mayVote').innerText=res['history'][i].vote;
                                                  break;
                                            case "JUN":
                                                        document.getElementById('junBalance').innerText=res['history'][i].totalBalance;
                                                        document.getElementById('junVote').innerText=res['history'][i].vote;
                                                  break;
                                            case "JUL":
                                                        document.getElementById('julBalance').innerText=res['history'][i].totalBalance;
                                                        document.getElementById('julVote').innerText=res['history'][i].vote;
                                                  break;
                                            case "AUG":
                                                        document.getElementById('augBalance').innerText=res['history'][i].totalBalance;
                                                        document.getElementById('augVote').innerText=res['history'][i].vote;
                                                  break;
                                            case "SEP":
                                                        document.getElementById('sepBalance').innerText=res['history'][i].totalBalance;
                                                        document.getElementById('sepVote').innerText=res['history'][i].vote;
                                                  break;
                                            case "OCT":
                                                        document.getElementById('octBalance').innerText=res['history'][i].totalBalance;
                                                        document.getElementById('octVote').innerText=res['history'][i].vote;
                                                  break;
                                            case "NOV":
                                                        document.getElementById('novBalance').innerText=res['history'][i].totalBalance;
                                                        document.getElementById('novVote').innerText=res['history'][i].vote;
                                                  break;
                                            default:
                                                        document.getElementById('decBalance').innerText=res['history'][i].totalBalance;
                                                        document.getElementById('decVote').innerText=res['history'][i].vote;
                                          }
                                          i++;
                                        }
                                      }
                                      else
                                      {
                                        document.getElementById('balance').innerText=res['balance'];

                                        document.getElementById('janBalance').innerText="";
                                        document.getElementById('janVote').innerText="";
                                                  
                                        document.getElementById('febBalance').innerText="";
                                        document.getElementById('febVote').innerText="";
                                                  
                                        document.getElementById('marBalance').innerText="";
                                        document.getElementById('marVote').innerText="";
                                                  
                                        document.getElementById('aprBalance').innerText="";
                                        document.getElementById('aprVote').innerText="";
                                                  
                                        document.getElementById('mayBalance').innerText="";
                                        document.getElementById('mayVote').innerText="";
                                                  
                                        document.getElementById('junBalance').innerText="";
                                        document.getElementById('junVote').innerText="";
                                                 
                                        document.getElementById('julBalance').innerText="";
                                        document.getElementById('julVote').innerText="";
                                                  
                                        document.getElementById('augBalance').innerText="";
                                        document.getElementById('augVote').innerText="";
                                                  
                                        document.getElementById('sepBalance').innerText="";
                                        document.getElementById('sepVote').innerText="";
                                                 
                                        document.getElementById('octBalance').innerText="";
                                        document.getElementById('octVote').innerText="";
                                                  
                                        document.getElementById('novBalance').innerText="";
                                        document.getElementById('novVote').innerText="";
                                                  
                                        document.getElementById('decBalance').innerText="";
                                        document.getElementById('decVote').innerText="";
                                      }
                                       
                                    }
                                }
      
    xhttp.open("GET",teamStatsUrl + "?" + name,true);
    xhttp.send();
}


