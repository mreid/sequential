/**
 * A bandit game.
 *    run(steps): Runs the game for the given number of steps.
 */
function Game(agents, bandits) {
   var agents = agents;
   var bandits = bandits;
   
   return {
      run: function(steps) {
         // Initialise all the agents
         for(var a=0 ; a<agents.length ; a++) { 
            agents[a].init(bandits.length); 
         }

         // Play the game for the required number of steps
         for(var t=0 ; t<steps ; t++) {

            // Compute all the rewards
            var rewards = [];
            for(var b=0 ; b<bandits.length ; b++) {
               rewards[b] = bandits[b].reward();
            }
            
            // Get the agents' predictions and give rewards
            for(var a=0 ; a<agents.length ; a++) {
               var choice = agents[a].predict();
               var reward = rewards[choice];
               agents[a].update(reward);               
            }
         }
      }
   }
}