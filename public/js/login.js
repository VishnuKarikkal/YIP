var team="";
$(document).ready(function()
{
    $('.dropdown-item').click(function(e)
    {
        team=e.target.text;
        $('#drop').text(team);
        $('#team').val(team);
        console.log(team)       
    });
});

function checkLogIn()
{
    if(team=="")
    {
        alert("select Team Name!")
        return false;
    }
    return true;
}
