String.prototype.toCapitalize = function () {
    return this.split(' ').reduce((acc, curr) => `${acc} ${curr.charAt(0).toUpperCase() + curr.slice(1)}`, '');
};