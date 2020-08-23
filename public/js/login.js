var team;
var password;
var url='http://localhost:5000/userLogin/'
$(document).ready(function()
{
   document.getElementById('selectedTeam').addEventListener('change', event => {
       var e = document.getElementById("selectedTeam");
       team = e.options[e.selectedIndex].value;
       console.log(team);
   });
});

function checkLogIn()
{
    password=document.getElementById('password').value;
    if(!team)
    {
        alert("select Team Name!");
        return false;
    }
    if(!password){
        alert("Enter password");
        return false;
    }
    else{
        signIn();
    }
    return true;
}
//submit
document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault()
    console.log('submit');
    checkLogIn();
})
function signIn(){
    let data={ 'username':team,'password':password};
    $.post(url,data) .done(function( data ) {
   window.localStorage.setItem('token',data.token);
   window.localStorage.setItem('teamName',data.teamName);
   window.location.href='/';
});


}
