document.getElementById("waitlistForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = document.getElementById("email");

    if (emailInput.value) {
        document.getElementById("successMessage").classList.remove("hidden");
        emailInput.value = "";
    }
});
