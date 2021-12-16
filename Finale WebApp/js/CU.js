function validation(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var emailaddress = document.getElementById("emailaddress").value;
    var question = document.getElementById("question").value;
    var error_message = document.getElementById("error_message");
    var text;
    
    error_message.style.padding = "10px";

    if(firstname.length <3){
        text = "Please Enter Valid First name";
        error_message.innerHTML = text;
        return false;
    }

    if(lastname.length <2){
        text = "Please Enter Valid Last name";
        error_message.innerHTML = text;
        return false;
    }

    if(emailaddress.indexOf("@") == -1 || emailaddress.length < 6){
        text = "Please Enter Valid Email Address";
        error_message.innerHTML = text;
        return false;
    }

    if(question.length <= 10){
        text = "Please Enter More Than 10 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!")
    return true;      
}
