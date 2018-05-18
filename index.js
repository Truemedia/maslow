const pyramid = require('./pyramid.json');

class Maslow
{
    constructor(stage = null)
    {
        this.stage = stage;
        this.levels = pyramid;
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
      * Get needs for stage
      * @param {string} stage - Name of stage
      * @return {array} Needs
      */
    needsForStage(stage)
    {
        return this.levels[stage];
    }

    /**
      * Get current needs
      * @return {array} Needs
      */
    get needs()
    {
        return this.needsForStage(this.stage);
    }
}

module.exports = Maslow;
