var button = document.getElementById('button');

var body = document.querySelector('body');

        body.style.backgroundColor = "red";
        button.onclick =function botton(){
            if(body.style.backgroundColor == "red"){
                body.style.backgroundColor = "green";
            }else{
                body.style.backgroundColor = "red";
            }
        }