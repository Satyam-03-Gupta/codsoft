var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(event, tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidebar = document.getElementById("sidemenu");
function openmenu() {
    sidebar.style.right = "0";

}
function closemenu() {
    sidebar.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyVf2UL4o0nGmh94iK0WV5tAD6EnvobXNisy6OBU_E2Sg4VrRqbSUCnZ4cLZNvNnALw/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("message")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            message.innerHTML = "Message Sent Successfull"
            setTimeout(function () {
                message.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message));
    message.innerHTML = "Sending message...";
})