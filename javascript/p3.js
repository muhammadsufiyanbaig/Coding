let counter = function (init) {
    let count = init;
    function increament() {
        return ++count;
    }
    function decreament() {
        return --count;
    }
    function reset() {
        count = init;
        return count;
    }

    return{
        increament: increament,
        decreament: decreament,
        reset: reset
    }
};
