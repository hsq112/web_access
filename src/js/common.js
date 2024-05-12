/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
    }
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles = document.querySelectorAll('#nav-bar-content .dropdown-toggle');
    for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler').addEventListener('click', toggleNavigation, false);

    // Font size adjustment
    var fontSize = 100; // Set initial font size percentage
    var body = document.body; // Reference to the body element

    // Increase font size
    document.getElementById('font-increase-button').addEventListener('click', function() {
        fontSize += 10; // Increase the font size by 10%
        body.style.fontSize = fontSize + '%'; // Apply the new font size
        console.log("Increased font size to:", fontSize + '%'); // Log the change for debugging
    });

    // Decrease font size
    document.getElementById('font-decrease-button').addEventListener('click', function() {
        if (fontSize > 100) { // Prevent font size from going below the initial setting
            fontSize -= 10; // Decrease the font size by 10%
            body.style.fontSize = fontSize + '%'; // Apply the new font size
            console.log("Decreased font size to:", fontSize + '%'); // Log the change for debugging
        }
    });
});


