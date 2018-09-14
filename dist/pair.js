exports.__esModule = true;
//--------------------------------------------------
//----------PAIR STRUCTURE--------------------------
//--------------------------------------------------
var Pair = /** @class */ (function () {
    /**
     * Creates new instance of a pair
     * @param first First value (default = null)
     * @param second Second value (default = null)
     */
    function Pair(first, second) {
        if (first === void 0) { first = null; }
        if (second === void 0) { second = null; }
        this.first = null;
        this.second = null;
        this.first = first;
        this.second = second;
    }
    /**
    * Prints values into the console
    */
    Pair.prototype.Print = function () {
        console.log("Pair: " + this.first + ", " + this.second);
    };
    return Pair;
}());
exports.Pair = Pair;
