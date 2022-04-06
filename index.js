
    function scuberGreetingForFeet(freeSample) {
      // Write your code here!

      if (freeSample <= 400){
              return "This one is on me!";
      }
      else if (freeSample > 400 && freeSample<2000){
        return 'That will be twenty bucks.'
      }
      else if (freeSample > 2000 && freeSample < 2500){
          return "I will gladly take your thirty bucks.";
      }
      else if(freeSample > 2500){
          return "No can do.";
      }
  
  }
  
function ternaryCheckCity(city) {
  // Write your code here!

  if (city === "NYC") {
      return "Ok, sounds good.";
  }
  else{
      return "No go.";
  }
}

function switchOnCharmFromTip(generousTip){
  // Write your code here!
  switch(generousTip){
    case 'generous':
      return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
        default: 
        return 'Bye.';
  }
}

