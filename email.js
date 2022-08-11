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
Speak("hello welcome to the mail page.");
Speak("Do you want to compose a new mail");
function ProcessCommand(UserText) {
    if (UserText.includes("yes")) {
        

        Speak("say mail");
        // Speak("enter the sender's mail using the word from");
        if (annyang) {
            // Let's define our first command. First the text we expect, and then the function it should call
             
            var commands = {
                'mail *tag': function (variable) {
                    Speak("enter your details for composing");
                    Speak("enter the sender's mail using the word from");
                    let mail= document.getElementById("mail");
                    mail.value = mail.click(true) ;

                },
                
                'from *tag': function (variable) {
                    Speak("enter receiver's mail using the word to");
                    let Frommail = document.getElementById("Frommail");
                    Frommail.value = variable.split(" ").join("");

                },
                'to *tag': function (variable) {
                    Speak("Enter the subject for the mail ");
                    let Tomail = document.getElementById("Tomail");
                    Tomail.value = variable.split(" ").join("");

                },
                'subject *tag': function (variable) {
                    Speak("enter your message");
                    let Subject = document.getElementById("Subject");
                    Subject.value = variable;

                },
                'message *tag': function (variable) {
                    Speak("say ok to send your mail");
                    let email_message = document.getElementById("email_message");
                    email_message.value = variable;

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
    else Speak("i cannot perform the task");
}
function Speak(TEXT) {

    const utter = new SpeechSynthesisUtterance();
    utter.text = TEXT;

    window.speechSynthesis.speak(utter);
}


startListening();//1.working

        