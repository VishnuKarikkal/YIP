var optionVoted = "";
var activeGameCheckUrl = "http://localhost:5000/game/activeGame";

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

function logout() {
  //for logging out
}
