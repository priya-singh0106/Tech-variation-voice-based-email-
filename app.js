const speechRecognition = window.webkitSpeechRecognition;
const recog = new speechRecognition();//2. working
function startListening() {
    recog.continuous = true;// 3.working but repating same thing
    recog.start();
    recog.onstart = console.log("Started Listenig..");
    // data comes from onresult
    recog.onresult = function (data) {
        handleResults(data);
    };
}

function handleResults(data) {
    let text = data.results[0][0].transcript;
    text = text.toLowerCase();
    ProcessCommand(text);
}

Speak("hello welcome to tech mail");
Speak("are you a new user?");

function ProcessCommand(UserText) {
    if (UserText.includes("yes")) {
        Speak("enter your details for sign up");
        Speak("enter your name");
        if (annyang) {
            // Let's define our first command. First the text we expect, and then the function it should call
             
            var commands = {
                
                
                // username is the identifier to perform the task
                'name *tag': function (variable) {
                    Speak("enter your age");
                    let name = document.getElementById("name");
                    name.value = variable;

                },
            
                'age *tag': function (variable) {
                    Speak("enter your gender");
                    let age = document.getElementById("age");
                    age.value = variable;

                },
                'gender *tag': function (variable) {
                    Speak("enter your date of birth");
                    let gen = document.getElementById("gen");
                    gen.value = variable;

                },
                
                'date of birth *tag': function (variable) {
                    Speak("enter your email");
                    let dob = document.getElementById("dob");
                    dob.value = variable;

                },
                'email *tag': function(variable){
                    Speak("enter your password");
                    let email=document.getElementById("email");
                    email.value=variable.split(" ").join("");
                },
                'password *tag': function (variable) {
                    Speak("enter your phone number");
                    let password = document.getElementById("password");
                    password.value = variable.split(" ").join("");

                },
                'phone number *tag': function (variable) {
                    Speak("say ok to submit your form");
                    let number = document.getElementById("number");
                    number.value = variable.split(" ").join("");

                },
                'ok *tag': function (variable) {

                    let submit = document.getElementById("submit");
                    submit.value = submit.click() = true;

                },


            }
        };

        // Add our commands to annyang
        annyang.addCommands(commands);

        // Start listening. You can call this here, or attach this call to an event, button, etc.
        annyang.start();
    }
    else if (UserText.includes("no") || UserText.includes("login")) {
        Speak("Opening login page");
        window.open("Login.html");
    }
    else Speak("i cannot perform the task");
}
function Speak(TEXT) {

    const utter = new SpeechSynthesisUtterance();
    utter.text = TEXT;

    window.speechSynthesis.speak(utter);
}


startListening();//1.working



























