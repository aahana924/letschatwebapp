var username ="";
function send(){
     username = document.getElementById("username").value;
    localStorage.setItem("pinky",username);
}