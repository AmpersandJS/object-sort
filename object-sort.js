module.exports = function(array, comparator, context) {
    if (typeof comparator === 'string') {
        array.sort(function (left, right) {
            if (left.get) {
                left = left.get(comparator);
                right = right.get(comparator);
            } else {
                left = left[comparator];
                right = right[comparator];
            }
            if (left > right || left === void 0) return 1;
            if (left < right || right === void 0) return -1;
            return 0;
        });
    } else if (comparator.length === 1) {
        array.sort(function (left, right) {
            left = comparator(left);
            right = comparator(right);
            if (left > right || left === void 0) return 1;
            if (left < right || right === void 0) return -1;
            return 0;
        });
    } else {
        if (typeof context !== "undefined"){
            array.sort(comparator.bind(context));
        }else{
            array.sort(comparator);
        }
    }
};