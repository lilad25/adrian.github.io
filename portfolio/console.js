document.addEventListener("DOMContentLoaded", function () {
    var currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Smooth scrolling script
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const contactForm = document.getElementById("contact-form");
    const facebookBtn = document.querySelector(".facebook-btn");
    const gmailBtn = document.querySelector(".gmail-btn");

    // Function to check if the form is filled
    function isFormFilled() {
        const name = document.getElementById("name").value;
        const subject = document.getElementById("subject").value;
        const to = document.getElementById("to").value;
        const message = document.getElementById("message").value;

        return name && subject && to && message;
    }

    // Function to handle form submission
    function handleSubmit(method) {
        if (isFormFilled()) {
            let message;
            if (method === "facebook") {
                message = "Your contact response is submitted to Adrian's Facebook";
            } else if (method === "gmail") {
                message = "Your contact response is submitted to Adrian's Gmail";
            }

            alert(message);
        } else {
            alert("Error! You need to fill up the form first before submitting");
        }
    }

    // Add click event listeners to the buttons
    facebookBtn.addEventListener("click", function () {
        handleSubmit("facebook");
    });

    gmailBtn.addEventListener("click", function () {
        handleSubmit("gmail");
    });

    // Add a submit event listener to the form (optional)
    contactForm.addEventListener("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();
    });
});