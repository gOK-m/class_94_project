function logout(){
    localStorage.removeItem("user_name");
    window.location.assign("kwitter.html");
}
function user_name_enable(){
    document.getElementById("username_label").innerHTML = localStorage.getItem("user_name");
}