alert("Wanna hear a funny story?");

var story = "<h2>In a far away land, lived one ";
var adjective = prompt("Tell me an adjective.");
var noun = prompt("Now, tell me a noun.");
var verb = prompt("Last, tell me a past tense verb.");

alert("Once upon a time...");

story += adjective;
story += " princess, who fell in love with a ";
story += noun;
story += ". One day the princess ";
story += verb;
story += " the " + noun;
story += " and they lived happily every after.</h2>";

document.write(story);
