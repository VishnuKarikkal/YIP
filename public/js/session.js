function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
let token=getCookie('token')


let decoded ;
if(token===null){
    decoded=null
    window.location.href="/login"

}else{
   //get team name here
};
function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function redirectTologin() {
    window.localStorage.removeItem('teamName');
    delete_cookie('token')
   window.location.href='/login';
}
function logout(){
    redirectTologin();
}

