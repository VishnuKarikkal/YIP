var month="";
var bpTeamN="p";    // initially set to "p" assuming they may bluff
var bpTeamS="p";
var bpTeamE="p";
var bpTeamW="p";

$(document).ready(function()
{
    $(':checkbox').click(function(e)
    {
        if(e.target.checked==true)  //checked means "bonus"
        {
        console.log(e.target.value); //to identify which all team's bonus switches checked
        if(e.target.value==1)
        {
            bpTeamN="b";
            console.log(bpTeamN);
        }
        else if(e.target.value==2)
        {
            bpTeamS="b";
            console.log(bpTeamS);
        }
        else if(e.target.value==3)
        {
            bpTeamE="b";
            console.log(bpTeamE);
        }
        else
        {
            bpTeamW="b";
            console.log(bpTeamW);
        }
        }
        else            //unchecked means "penalty"
        {
            if(e.target.value==1)
            {
                bpTeamN="p";
                console.log(bpTeamN);
            }
            else if(e.target.value==2)
            {
                bpTeamS="p";
                console.log(bpTeamS);
            }
            else if(e.target.value==3)
            {
                bpTeamE="p";
                console.log(bpTeamE);
            }
            else
            {
                bpTeamW="p";
                console.log(bpTeamW);
            }  
        }
    })
    $('.dropdown-item').click(function(e)
    {
        month=e.target.text;
        console.log(month);
        $('#month').text(month);
    })

})