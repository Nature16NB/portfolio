function welcome() {
    let studentname = prompt("what is your name?")
    let message = "Welcome, " + studentname;
    document.getElementById('saywelcome').innerHTML = message;
}