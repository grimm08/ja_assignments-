'use strict';
const candidates = [];

let numbers_of_candidates = parseInt(prompt("How many candidates are there?"));

for (let i = 1; i <= numbers_of_candidates; i++) {
    const name = prompt(`Enter the name of candidate ${i}:`);
    candidates.push(
        { 
            name: name, 
            votes: 0 
        }
    );
}
const nummber_of_voters = parseInt(prompt("How many voters are there:"));

for (let i= 1; i <= nummber_of_voters; i++){
    const vote = prompt(`Vote ${i}: to whom you vote?`)
    if (vote !=''){
        for (let j = 0; j < candidates.length; j++){
            if (candidates[j].name == vote) {
                candidates[j].votes++;
            }
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log('results:');
for (const candidate of candidates) {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
}