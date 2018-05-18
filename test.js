const maslow = require('./index');

// Make a person with most basic needs
let person = new maslow('physiological');
console.log(`The pyramid of needs has the following stages: ${person.stages}`);
console.log(`Person is at the stage: ${person.stage}`);
console.log(`Previous stage is: ${person.prevStage}`);
console.log(`Next stage is ${person.nextStage}`);
console.log(`Person needs: ${person.needs}`);
