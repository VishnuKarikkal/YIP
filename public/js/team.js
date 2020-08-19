var optionVoted="";
var activeGameCheckUrl='http://localhost:3232/routes/games/activeGame';

$(document).ready(function()
{
    $.each($('.opt'), function (key, value) {
        $(this).click(function (e) {
            $('.radio-btn-selected')
                .removeClass('radio-btn-selected')
                .addClass('radio-btn');

            $(this)
                .removeClass('radio-btn')
                .addClass('radio-btn-selected');
    if(key==0)
    {
        optionVoted="C";
    }
    else
    {
        optionVoted="D";
    }
    console.log(optionVoted);
        });
    });

})

function gameCheck()
{
//to check for active games and load it to the page
}

function logout()
{
    //for logging out
}