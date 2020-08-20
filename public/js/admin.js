var bpTeamN=0;
var bpTeamS=0;
var bpTeamE=0;
var bpTeamW=0;

$(document).ready(function()
{
    $(':checkbox').click(function(e)
    {
        if(e.target.checked==true)
        {
        console.log(e.target.value); //to identify which all team's bonus switches checked
        }
    })

})