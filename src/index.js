module.exports = function reverse (n) {
    if (n < 0) {
        n = n * (-1);
        n = String(n);
        return n.split("").reverse().join("");
    } else {
        n = String(n);
        return n.split("").reverse().join("");
    }
};