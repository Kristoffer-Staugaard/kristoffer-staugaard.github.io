window.addEventListener("load", function() {
    var omMigLink = document.getElementById("om-mig-link");

    // Initially set the style for "Om mig" link
    omMigLink.style.color = "#EF6F6C";
    omMigLink.style.opacity = "1"; // Change the opacity for "Om mig"


    // Add scroll event listener to handle color and opacity changes
    window.addEventListener("scroll", function() {
        // Rest of your scroll event code here
    });
});

window.addEventListener("scroll", function() {
    var omMigLink = document.getElementById("om-mig-link");
    var projekterLink = document.getElementById("projekter-link");
    var kontaktLink = document.getElementById("kontakt-link");

    var omMigSection = document.getElementById("om-mig");
    var projekterSection = document.getElementById("projekter");
    var kontaktSection = document.getElementById("kontakt");

    // Calculate the visible height of each section
    var omMigVisibleHeight = Math.min(window.innerHeight, omMigSection.getBoundingClientRect().bottom) - Math.max(omMigSection.getBoundingClientRect().top, 0);
    var projekterVisibleHeight = Math.min(window.innerHeight, projekterSection.getBoundingClientRect().bottom) - Math.max(projekterSection.getBoundingClientRect().top, 0);
    var kontaktVisibleHeight = Math.min(window.innerHeight, kontaktSection.getBoundingClientRect().bottom) - Math.max(kontaktSection.getBoundingClientRect().top, 0);

    // Find the section with the most visible height
    var maxVisibleHeight = Math.max(omMigVisibleHeight, projekterVisibleHeight, kontaktVisibleHeight);

    // Reset the styles for all links
    omMigLink.style.color = "";
    projekterLink.style.color = "";
    kontaktLink.style.color = "";
    omMigLink.style.opacity = "";
    projekterLink.style.opacity = "";
    kontaktLink.style.opacity = "";

    // Set the styles for the link corresponding to the section with the most visible height
    if (maxVisibleHeight === omMigVisibleHeight) {
        omMigLink.style.color = "#EF6F6C"; // Change the color for "Om mig"
        omMigLink.style.opacity = "1"; // Change the opacity for "Om mig"
    } else if (maxVisibleHeight === projekterVisibleHeight) {
        projekterLink.style.color = "#EF6F6C"; // Change the color for "Projekter"
        projekterLink.style.opacity = "1"; // Change the opacity for "Projekter"
    } else if (maxVisibleHeight === kontaktVisibleHeight) {
        kontaktLink.style.color = "#EF6F6C"; // Change the color for "Kontakt"
        kontaktLink.style.opacity = "1"; // Change the opacity for "Kontakt"
    }
});