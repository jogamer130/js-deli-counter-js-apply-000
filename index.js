function takeANumber(line){

for (var i = 0; i <line.length; i++) { 
  line.push(i+1)
}
 return `Your ticket number is ${line.length}.`
}

function nowServing(line){
  

  if (line.length === 0){
    return "There is nobody waiting to be served!"
}

var x = `Currently serving ${line[0]}.`;
line.splice(0,1);
return x;
}










function currentLine (line){
  if (line.length === 0){
    return "The line is currently empty."
  }
   var x = [];
   for (var i=0; i<line.length; i++) {
   x.push(i+1 + ". " + line[i])
}
  return "The line is currently: " + x.join(", ");
}