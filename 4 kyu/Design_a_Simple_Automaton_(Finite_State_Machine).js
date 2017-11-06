function Automaton()
{  
   this.states = [{"q1": ["q1", "q2"], "q2": ["q3", "q2"], "q3": ["q2", "q2"]}];
   this.initialState = "q1";
}

Automaton.prototype.readCommands = function(commands)
{
  // Return true if we end in our accept state, false otherwise.
  for (var x = 0; x < commands.length; x++) {
     if (commands[x] == "0") {
           this.initialState = this.states[0][this.initialState][0];  
     } else {
           this.initialState = this.states[0][this.initialState][1]; 
     }
  }
  return this.initialState == "q2";
}

var myAutomaton = new Automaton();

// Do anything necessaryto set up your automaton's states, q1, q2, and q3.
