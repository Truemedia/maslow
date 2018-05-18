const pyramid = require('./pyramid.json');

class Maslow
{
    constructor(level = null)
    {
        this.level = level;
        this.levels = pyramid;
    }

    get stages()
    {
        return Object.keys(this.levels);
    }
}

module.exports = Maslow;
