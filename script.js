function randNum(){
  var num1 = Math.ceil(Math.random()*20);
  var num2 = Math.ceil(Math.random()*20);
  var num3 = Math.ceil(Math.random()*20);
          
  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;
  document.getElementById("num3").innerHTML = num3;
  
  document.getElementById("greatestNum").innerHTML = "The strongest among the astronauts are: "+ greatestNum(num1, num2, num3);
  document.getElementById("numthLetter").innerHTML = "The name of the planet starts with the letter: "+ numthLetter(num1);
  document.getElementById("hrMin").innerHTML = "The time it will take to travel to the planet is ("+ hrMin(num2, num3);
  
  return;
}

function greatestNum(num1, num2, num3){
  var text;
  
  if (num1>num2 && num1>num3){
    text = "Astronaut 1 ("+num1+")";
  }
  else if (num2>num1 && num2>num3){
    text = "Astronaut 2 ("+num2+")";
  }
  else if (num3>num1 && num3>num2){
    text = "Astronaut 3 ("+num3+")";
  }
  else if (num1==num2 && num1>num3 && num2>num3){
    text = "Astronaut 1, Astronaut 2 ("+num1+")";
  }
  else if (num1==num3 && num1>num2 && num3>num2){
    text = "Astronaut 1, Astronaut 3 ("+num1+")";
  }
  else if (num2==num3 && num2>num1 && num3>num1){
    text = "Astronaut 2, Astronaut 3 ("+num2+")";
  }
  else if (num1==num2==num3){
    text = "Astronaut 1, Astronaut 2, Astronaut 3 ("+num1+")";
  }
  
  return text;
}

function numthLetter(num1){
  var alphabet = ".abcdefghijklmnopqrst";
  
  var text = alphabet.charAt(num1);
  
  return text;
}

function hrMin(num2, num3){
  var total = parseInt(num2 * num3);
  
  var hrs = Math.floor(total/60);
  
  var rem = total%60;
  
  var text = total+" min): "+hrs+"hr "+rem+"min";
  
  return text;
}



