var test = require('tape');
var objectsort = require('./object-sort');

test('comparator as a string', function (t) {
    var array = [
        {id: 1, name: 'larry'},
        {id: 2, name: 'curly'},
        {id: 3, name: 'moe'}
    ];
    var comparator = 'name';
    objectsort(array, comparator);
    t.equal(array[0].name, 'curly');
    t.equal(array[1].name, 'larry');
    t.equal(array[2].name, 'moe');
    t.end();
});

test('comparator as a 1 arg function', function (t) {
    var array = [
        {id: 1, name: 'larry'},
        {id: 2, name: 'curly'},
        {id: 3, name: 'moe'}
    ];
    var comparator = function (m) {
        return m.name;
    };
    objectsort(array, comparator);
    t.equal(array[0].name, 'curly');
    t.equal(array[1].name, 'larry');
    t.equal(array[2].name, 'moe');
    t.end();
});

test('comparator as standard 2 arg sort function', function (t) {
    var array = [
        {id: 1, name: 'larry'},
        {id: 2, name: 'curly'},
        {id: 3, name: 'moe'}
    ];
    var comparator = function (m1, m2) {
        if (m1.name > m2.name) return 1;
        if (m1.name < m2.name) return -1;
        return 0;
    };
    objectsort(array, comparator);
    t.equal(array[0].name, 'curly');
    t.equal(array[1].name, 'larry');
    t.equal(array[2].name, 'moe');
    t.end();
});

test('comparator as standard 2 arg sort function with context', function (t) {
    var Collection = function(){
        this.sortBy = 'name';
        this.models = [
            {id: 1, name: 'larry'},
            {id: 2, name: 'curly'},
            {id: 3, name: 'moe'}
        ];
    };
    var context = new Collection();
    var comparator = function (m1, m2) {
        if (m1[this.sortBy] > m2[this.sortBy]) return 1;
        if (m1[this.sortBy] < m2[this.sortBy]) return -1;
        return 0;
    };
    objectsort(context.models, comparator, context);
    t.equal(context.models[0].name, 'curly');
    t.equal(context.models[1].name, 'larry');
    t.equal(context.models[2].name, 'moe');
    t.end();
});