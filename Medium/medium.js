//Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.


// Get User Input
var talk = prompt("Enter Text");

// Works when user uses all CAP
if (talk == talk.toUpperCase()){
    console.log("You're Shouting") // it'll show this when all CAP
}

// Works when user uses all lower case
else if (talk == talk.toLowerCase()){
    console.log("You're Whispering") // it'll show this when all lower case
}

// Works when user uses normal fonts
else {
    console.log ("You're talking normal")
} // it'll show this when it have normal fonts





