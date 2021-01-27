$(document).ready(function() {
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 900) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });
});

function validate(){
    let name = document.getElementById("name").value,
        subject = document.getElementById("subject").value,
        phone = document.getElementById("phone").value,
        email = document.getElementById("email").value,
        message = document.getElementById("message").value,
        error_message = document.getElementById("error_message"),
        text;

    error_message.style.padding = "10px";

    if (name.length < 5) {
        text = "Please enter a valid name";
        error_message.innerHTML = text;

        return false;
    }

    if (subject.length < 10) {
        text = "Please enter a correct Subject";
        error_message.innerHTML = text;

        return false;
    }

    if (isNaN(phone) || phone.length != 10) {
        text = "Please enter a valid Phone Number";
        error_message.innerHTML = text;

        return false;
    }

    if (email.indexOf("@") === -1 || email.length < 6) {
        text = "Please enter a valid Email";
        error_message.innerHTML = text;

        return false;
    }

    if (message.length <= 140) {
        text = "Please Enter more than 140 characters";
        error_message.innerHTML = text;

        return false;
    }

    alert("Form Submitted Successfully!");

    return true;
}
