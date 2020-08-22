var optionVoted = "";
var noOfActiveGames=0;
var activeGames=[];
var activeGameCheckUrl = "http://localhost:5000/game/activeGame";
var votePostUrl='http://localhost:5000/game/vote'
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
  let teamName=document.getElementById('teamName').innerText;
  let month='JAN';// change it
  let vote=votedValue;
  if(vote){
  $.post('http://localhost:5000/game/vote' , { teamName:teamName, month:month, vote:vote } )
.done(function( data ) {
    console.log( "Data Loaded: " + data.message);

  //check if any more active games avilable in the current time
  noOfActiveGames=activeGames.length-1;
                                     if(noOfActiveGames>0)   //if games exits
                                     {
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

/*---------------------logout---------------*/
function logout() {
  //for logging out
}
