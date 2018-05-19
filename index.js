const pyramid = require('./data/pyramid.json');

class Maslow
{
    constructor(stage = null)
    {
        this.stage = stage;
        this.fulfillment = {};
        this.stages.map( (stage) => {
            this.fulfillment[stage] = [];
        });
    }

    /**
      * Calibrate stage and needs based on focus of need
      * @param {string} currentNeed - Name of need
      */
    calibrate(currentNeed)
    {
        this.stage = this.stageOfNeed(currentNeed);
        let needs = Array.from( this.needsForStage(this.stage) );
        needs.splice(needs.indexOf(currentNeed), 1);
        this.fulfillment[this.stage] = needs;
    }

    /**
      * Get levels of pyramid
      * @return {object} Pyramid
      */
    get levels()
    {
        return pyramid;
    }

    /**
      * Get stages
      * @return {array} All possible stages
      */
    get stages()
    {
        return Object.keys(this.levels);
    }

    /**
      * Get previous stage
      * @return {string} Name of previous stage
      */
    get prevStage()
    {
        let nextIndex = this.stages.indexOf(this.stage);
        nextIndex++;
        return this.stages[nextIndex];
    }

    /**
      * Get next stage
      * @return {string} Name of next stage
      */
    get nextStage()
    {
        let prevIndex = this.stages.indexOf(this.stage);
        prevIndex--;
        return this.stages[prevIndex];
    }

    /**
      * Get current needs
      * @return {array} Needs
      */
    get needs()
    {
        return this.needsForStage(this.stage).filter( (need) => {
            return (!this.needsFulfilled.includes(need));
        });
    }

    /**
      * Get current needs fulfilled
      */
    get needsFulfilled()
    {
        return this.fulfillment[this.stage];
    }

    /**
      * Check if needs have been met
      */
    get needsMet()
    {
        return (this.needs.length == 0);
    }

    /**
      * Get needs for stage
      * @param {string} stage - Name of stage
      * @return {array} Needs
      */
    needsForStage(stage)
    {
        return this.levels[stage];
    }

    /**
      * Advance to next stage
      */
    advanceStage()
    {
        this.stage = this.nextStage;
    }

    /**
      * Find stage of need
      */
    stageOfNeed(need)
    {
        return this.stages.find( (stage) => {
            return this.needsForStage(stage).includes(need);
        });
    }

    /**
      * Fulfill need
      * @param {string} need - Need for current stage
      */
    fulfillNeed(need, advance = false)
    {
        this.fulfillment[this.stage].push(need);
        if (this.needsMet && advance) {
            this.advanceStage();
        }
    }

    /**
      * Fulfill needs
      * @param {array} needs - Needs for current stage
      */
    fulfillNeeds(needs)
    {
        needs.forEach( (need) => {
            this.fulfillNeed(need);
        });
    }
}

module.exports = Maslow;
