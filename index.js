function takeANumber(line, name){
  
line.push(name)
 return `Welcome, ${name}. You are number ${line.length} in line.`
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
<<<<<<< HEAD
   var x = [];
   for (var i=0; i<line.length; i++) {
   x.push(i+1 + ". " + line[i])
}
  return "The line is currently: " + x.join(", ");
=======
  
  return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]} `
>>>>>>> 67a2a0fcde32c981ed3124483d2b13c1999e8a68
}