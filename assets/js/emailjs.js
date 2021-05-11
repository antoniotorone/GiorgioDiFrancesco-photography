function sendMail(contactForm) {
    emailjs.send("service_jee9pg2", "Giorgio photography", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "service_request": contactForm.messagerequest.value
        })

        .then(
            function (response) {
                console.log("SUCCESS", response)
                alert("Thanks for getting in contact your request is successfully sent");
            },
            function (error) {
                console.log("FAILED", error)
                alert("Sorry your request is failed. Please try again later ");
            }

        );


        contactForm.reset()

return false;

}