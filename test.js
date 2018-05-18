const maslow = require('./index');

// Make a person with most basic needs
let person = new maslow('physiological');
console.log(`The pyramid of needs has the following stages: ${person.stages}`);
console.log(`Person is at the stage: ${person.stage}`);
console.log(`Previous stage is: ${person.prevStage}`);
console.log(`Next stage is ${person.nextStage}`);
console.log(`Person needs: ${person.needs}`);

// Help them achieve a need/needs
let need = 'air';
person.fulfillNeed(need);
console.log(`Person fulfilled need: ${need}`);
console.log(`Person has fulfilled the following: ${person.needsFulfilled}`);
console.log(`Person now has the remaining needs: ${person.needs}`);
let remainingNeeds = ['water', 'food', 'shelter', 'sleep'];
person.fulfillNeeds(remainingNeeds);
console.log(`Person fulfilled needs: ${remainingNeeds}`);
if (person.needsMet) {
    console.log(`Person has fulfilled all needs for stage: ${person.stage}`);
}
// Move onto next stage (manually)
person.advanceStage();
console.log(`Person is at the stage: ${person.stage}`);
