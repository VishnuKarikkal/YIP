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
document.getElementById('submit').addEventListener('click',function(e){
   // e.preventDefault()
    console.log('submit');
   checkLogIn();

})
function signIn(){
    let data={ 'username':team,'password':password};
    $.post(url,data) .done(function( data ) {
        setCookie('token',data.token,1)
   window.localStorage.setItem('teamName',data.teamName);
        if(data.teamName=="ADMIN"){
            window.location.href='/';
        }
        else {
            window.location.href = '/gameTeam';
        }

});


}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
