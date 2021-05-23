
/* These codes make it available to send a form request from the website to the owner email address with a form template imported from emailjs.com.
   Calling sendMail function from any Html pages where the form is attached*/

function sendMail(contactForm) {
    emailjs.send("service_jee9pg2", "Giorgio photography", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "service_request": contactForm.messagerequest.value
        })

        /*After that, the form has been sent by clicking on the "send" button. These two functions help to know if the forming process went successful o no
          by displaying, the result "200" or "304" on the console and also a pop up alert message after the send request*/

        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Thanks for getting in contact your request is successfully sent");
            },
            function (error) {
                console.log("FAILED", error);
                alert("Sorry your request is failed. Please try again later ");
            }

        );

       //this method reset and clean all form fields after send the form// 
        contactForm.reset();

return false;

}