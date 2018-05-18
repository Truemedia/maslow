class Maslow
{
    constructor(level = null)
    {
        this.level = level;
        this.levels = { // The pyramid
            "self-actualization": [
                "accomplishment",
                "long-term-gratification"
            ],
            "esteem": [
                "self-respect",
                "self-esteem",
                "short-term-gratification"
            ],
            "belonging": [
                "friendships",
                "intimacy",
                "family"
            ],
            "safety": [
                "personal-security",
                "financial-security",
                "health",
                "well-being"
            ],
            "physiological": [
                "air",
                "water",
                "food",
                "shelter",
                "sleep"
            ]
        };
    }

    get stages()
    {
        return Object.keys(this.levels);
    }
}

module.exports = Maslow;
