//  modal elements
const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("cnct-id"); 
const closeModalBtn = document.querySelector(".custom-close-btn");
const contactForm = document.getElementById("customContactForm");

// contact me pe click krne se modal open hoga 
openModalBtn.onclick = function () {
    modal.style.display = "block";
};

// cross pe click krne se modal close hoga
closeModalBtn.onclick = function () {
    modal.style.display = "none";
};

// bhr kaheen click krne pe modal close hojaye
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form validation logic
contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get input values
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    // form validations
    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    if (email === "") {
        alert("Please enter your email.");
        return;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (message === "") {
        alert("Please enter a message.");
        return;
    }

    // sbkuch fill hogya he to submit hoga
    alert("Form submitted successfully!");
    contactForm.reset(); // reset krne k liye
    modal.style.display = "none"; // Close the modal
});

// Email validations
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}


// email js

function SendMail()  {
    let parms ={
        from_name : document.getElementById("contactName").value,
        email_id : document.getElementById("contactEmail").value,
        message : document.getElementById("contactMessage").value,
    }
    emailjs.send("service_dr3500f", "template_xcq0oax", parms)
}

                 
