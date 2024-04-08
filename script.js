// Target the input element which has id="google"
const google = document.getElementById("google");

const logo = document.getElementById("google-logo");

// Function that takes in a search query, replaces spaces with plus sign, and appends to the google search URL format to redirect
function redirector( rawQuery ) {
    let formatedQuery = rawQuery.replaceAll(" ", "+");
    if (logo.src == 'googleAnitaConti.gif') {
        window.location.assign("https://google.com/search?tbm=isch&q=" + formatedQuery);
    } else {
        window.location.assign("https://google.com/search?q=" + formatedQuery);
    }
}

// Event Listener whose function runs when the enter key is pressed
google.addEventListener("keydown", (event) => {
    let inputValue = google.value;
    if(event.key === 'Enter') {
        event.preventDefault();
        // alert("https://google.com/search?q=" + inputValue);
        redirector(inputValue);
    };
});

const searchButton = document.getElementById("google-search");

searchButton.addEventListener("click", () => {
    let buttonValue = google.value;
        redirector(buttonValue);
})

// Targets the setting item in the footer
const settings = document.getElementById("settings")

// Clicking the settings item toggles the display of the settings menu
settings.addEventListener("click", () => {
    const settingsMenu = document.getElementById("settings-menu");
    if(settingsMenu.style.display == "block"){
        settingsMenu.style.display = "none";
    } else {
        settingsMenu.style.display = "block";
    }
})


const imagesItem = document.getElementById("images");

imagesItem.addEventListener('click',  () => {
   logo.src = "googleAnitaConti.gif";
})

// variable to track dark mode state
let isDarkMode = false;

const darkMode = document.getElementById("dark-mode");
darkMode.addEventListener("click", () => {
    // Toggle Darkmode state
    isDarkMode = !isDarkMode

    if (isDarkMode) {
    event.preventDefault();
    document.documentElement.style.setProperty('--backgroundColor', 'rgba(32, 33, 36, 1)');
    document.documentElement.style.setProperty("--buttonBackgroundColor", "#303134");
    document.documentElement.style.setProperty('--footerColor', "#171717");
    document.documentElement.style.setProperty('--textColor', "#FFFFFF");
    document.documentElement.style.setProperty('--buttonTextColor', '#e8eaed');
    document.documentElement.style.setProperty('--settingsBackgroundColor', '#202124');
    document.documentElement.style.setProperty('--settingsBoxShadow', '1px 1px 15px 0px #171717')
    document.documentElement.style.setProperty('--signInBackgroundColor', '#8ab4f8');
    document.documentElement.style.setProperty('--signInTextColor','#202124')
    document.getElementById("google-logo").src = "googleLogoLight.png";
    }
})
