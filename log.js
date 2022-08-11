var msg = new SpeechSynthesisUtterance();
msg.text="here please enter your email and password";
window.speechSynthesis.speak(msg);

if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
        // username is the identifier to perform the task
        'email *tag': function(variable){
            
            let email =document.getElementById("email");
            email.value= variable.split(" ").join("");
            
        },
        'password *tag': function(variable){
            
            let password =document.getElementById("password");
            
            password.value= variable.split(" ").join("");//to remove the space we have used split it first splits the text with spaces and then joins the text removing spaces
        },
        'ok *tag': function(variable){
            let button1 =document.getElementById("button1");
            button1.value=button1.click()=true;
            
        },
      }
    };
  
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  