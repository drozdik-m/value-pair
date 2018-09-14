
//--------------------------------------------------
//----------PAIR STRUCTURE--------------------------
//--------------------------------------------------
export class Pair<T, E>
{
    first: T = null;
    second: E = null;

    /**
     * Creates new instance of a pair
     * @param first First value (default = null)
     * @param second Second value (default = null)
     */
    constructor(first: T = null, second: E = null)
    {
        this.first = first;
        this.second = second;
    }

    /**
    * Prints values into the console
    */
    Print(): void
    {
        console.log(`Pair: ${this.first}, ${this.second}`);
    }
}