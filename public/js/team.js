var optionVoted = "";
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
  //to check for active games and load it to the page
  var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function()
                                {
                                    if((this.readyState==4)&&(this.status==200))
                                    {
                                      var mes=JSON.parse(this.responseText);
                                      var months=mes['active'];
                                      console.log(mes['active']);
                                      for(let i=0;i<months.length;i++)
                                      {
                                        console.log(months[i]);
                                      }
                                        //returns active-game-month or "none"
                                      if(mes['message']!="none")  //if any active
                                      {
                                        document.getElementById('active').innerText=mes['message'];
                                        document.getElementById('voteOptions').hidden=false;
                                        document.getElementById('voteBtn').hidden=false;
                                      }
                                      else      //no active game
                                      {
                                        document.getElementById('active').innerText="No Active Games!";
                                        document.getElementById('voteOptions').hidden=true;
                                        document.getElementById('voteBtn').hidden=true;
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
  });
  }
  else{
    alert('please choose a value');
  }
});

/*---------------------logout---------------*/
function logout() {
  //for logging out
}
