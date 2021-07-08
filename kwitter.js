function adduser(){
    username = document.getElementById("user_name").value;
    if(username == empty){
       document.getElementById("user_name").innerHTML = "put username"
    }
    else{
        localStorage.setItem("user_name", username);
        window.location.assign("kwitter_room.html");
    }
}
empty = ""