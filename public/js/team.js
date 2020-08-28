var optionVoted = "";
var noOfActiveGames=0;
var activeGames=[];
var historyMonths=[];

var activeGameCheckUrl = "/game/activeGame";
var votePostUrl='/game/vote';
var teamStatsUrl='/gameData/teamStats';
var teamHistoryUrl="/game/teamGameHistory";

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
  //to check for active games and load it to the page
  teamStats();  //loading game-history to the page
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
                                        console.log("1")
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
      
    xhttp.open("GET",activeGameCheckUrl + "?" + name,false);
    xhttp.send();
                      console.log("2");console.log(activeGames)
    if(activeGames.length>0)    //if active games exist
    {
      let gamesNotPlayed=[];  //active months in which games aren't played yet
      teamGameHistory();
      console.log(gamesNotPlayed)
      activeGames.forEach(game=>
        {
          if(historyMonths.includes(game)){console.log("already played:"+game);}
          else{gamesNotPlayed.push(game);}
        })

        if(gamesNotPlayed.length>0)   //checking for games that are active and not played by the team
        {
          noOfActiveGames=gamesNotPlayed.length-1;
                                          
          document.getElementById('month').innerText=gamesNotPlayed[0];
          gamesNotPlayed.shift();
          console.log(gamesNotPlayed)
          document.getElementById('voteOptions').hidden=false;
        }
        else      //if every active games are played and team is waiting for results
        {
          document.getElementById('month').innerText="No Active Games!";
          document.getElementById('voteOptions').hidden=true;
        }
     
    }
    
}
function teamGameHistory()
{
  var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function()
                                {
                                    if((this.readyState==4)&&(this.status==200))
                                    {
                                      var res=JSON.parse(this.responseText);
                                      
                                        //returns gameHistory of team or "none"
                                      if(res['message']!="none")  //if any history is available
                                      {
                                        let history=res['history']; //game history of the team
                                        //let gamesNotPlayed=[];
                                        historyMonths=[];

                                        history.forEach(item=>
                                          {
                                            historyMonths.push(item.month);
                                          })
                                      }
                                    }
                                }  
  xhttp.open("GET",teamHistoryUrl + "?" + name,false);
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
  $.post('/game/vote' , { teamName:teamName, month:month, vote:vote } )
.done(function( data ) {
    console.log( "Data Loaded: " + data.message);

    teamStats(); //to load team game stats
  //check if any more active games avilable in the current time
                                     if(noOfActiveGames>0)   //if games exits
                                     {
                                        noOfActiveGames=gamesNotPlayed.length-1;
                                        document.getElementById('month').innerText=gamesNotPlayed[0].month;
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


