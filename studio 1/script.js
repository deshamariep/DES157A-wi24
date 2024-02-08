(function(){
    'use strict'
    console.log("reading js");

    const madLib = document.querySelector('article')
    const myForm = document.querySelector('form');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        const nickName1 = document.querySelector('#nickName1').value;
        const yourName = document.querySelector('#yourName').value;
        const adj1 = document.querySelector('#adj1').value;
        const adj2 = document.querySelector('#adj2').value;
        const date = document.querySelector('#date').value;
        const nickName2 = document.querySelector('#nickName2').value;
        const noun1 = document.querySelector('#noun1').value;
        const nickName3 = document.querySelector('#nickName3').value;
        const verb1 = document.querySelector('#verb1').value;
        const food1 = document.querySelector('#food1').value;
        const color = document.querySelector('#color').value;
        const food2 = document.querySelector('#food2').value;
        const time = document.querySelector('#time').value;
        const noun2 = document.querySelector('#noun2').value;
        const body = document.querySelector('#body').value;
        const verb2 = document.querySelector('#verb2').value;

        let myText

        if (nickName1 == ''){
            myText = "Please provide an answer"
            document.querySelector('#nickName1').focus();
        } else if (yourName == ''){
            myText = "Please provide an answer"
            document.querySelector('#yourName').focus();
        } else if (adj1 == ''){
            myText = "Please provide an answer"
            document.querySelector('#adj1').focus();
        } else if (adj2 == ''){
            myText = "Please provide an answer"
            document.querySelector('#adj2').focus();
        } else if (date == ''){
            myText = "Please provide an answer"
            document.querySelector('#date').focus();
        } else if (nickName2 == ''){
            myText = "Please provide an answer"
            document.querySelector('#nickName2').focus();
        } else if (noun1 == ''){
            myText = "Please provide an answer"
            document.querySelector('#noun1').focus();
        } else if (nickName3 == ''){
            myText = "Please provide an answer"
            document.querySelector('#nickName3').focus();
        } else if (verb1 == ''){
            myText = "Please provide an answer"
            document.querySelector('#verb1').focus();
        } else if (food1 == ''){
            myText = "Please provide an answer"
            document.querySelector('#food1').focus();
        } else if (color == ''){
            myText = "Please provide an answer"
            document.querySelector('#color').focus();
        } else if (food2 == ''){
            myText = "Please provide an answer"
            document.querySelector('#food2').focus();
        } else if (time == ''){
            myText = "Please provide an answer"
            document.querySelector('#time').focus();
        } else if (noun2 == ''){
            myText = "Please provide an answer"
            document.querySelector('#noun2').focus();
        } else if (body == ''){
            myText = "Please provide an answer"
            document.querySelector('#body').focus();
        } else if (verb2 == ''){
            myText = "Please provide an answer"
            document.querySelector('#verb2').focus();
        } if (nickName1 && yourName && adj1 && adj2 && date && nickName2 && noun1 && nickName3 && verb1 && food1 && color && food2 && time && noun2 && body && verb2){
            myText = `To: ${nickName1} <br>
            From: ${yourName} <br>
            
            I am ${adj1} to invite you to the ${adj2} ball this upcoming ${date}. Many royals will be in attendance including ${nickName2} with their pet ${noun1}. Unfortunately your cousin ${nickName3} will not be there due to past ball actions, of him ${verb1} in the ${food1}. The dress code is formal but be sure to wear ${color} and avoid the ${food2}. Guests are expected to arrive at ${time} on the dot. Don't forget to bring your ${noun2} in case the king asks you to take his ${body} We can't ${verb2} to see you.
            <br>
            <br>
            Sincerely ${yourName}
            `
        } else {
            myText = "404 ERROR: no input";
        }
        madLib.innerHTML = myText;
        
    });
}());