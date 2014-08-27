# object-sort

Sort an array of objects either by property, sort function, or comparator function.

## sort by property

You can use a single string as the second argument to sort by property.
```javascript
var objectsort = require('object-sort');

var array = [
    {id: 1, name: 'larry'},
    {id: 2, name: 'curly'},
    {id: 3, name: 'moe'}
];

objectsort(array, 'name');
```

## sort by function

You can use a function as the second argument to sort by function.

```javascript
var objectsort = require('object-sort');

var array = [
    {id: 1, name: 'larry'},
    {id: 2, name: 'curly'},
    {id: 3, name: 'moe'}
];

objectsort(array, function(m){
    return m.name;
});
```

## sort by comparator function

You can use a comparator function as the second argument.

```javascript
var objectsort = require('object-sort');

var array = [
    {id: 1, name: 'larry'},
    {id: 2, name: 'curly'},
    {id: 3, name: 'moe'}
];

objectsort(array, function (m1, m2) {
    if (m1.name > m2.name) return 1;
    if (m1.name < m2.name) return -1;
    return 0;
});
```

## sort using a context

You can use the third argument to provide a context.

```javascript
var objectsort = require('object-sort');

var Collection = function(){
    this.sortBy = 'name';
    this.models = [
        {id: 1, name: 'larry'},
        {id: 2, name: 'curly'},
        {id: 3, name: 'moe'}
    ];
};

var collection = new Collection();

var comparator = function (m1, m2) {
    if (m1[this.sortBy] > m2[this.sortBy]) return 1;
    if (m1[this.sortBy] < m2[this.sortBy]) return -1;
    return 0;
};

objectsort(collection.models, comparator, collection);
```

<!-- starthide -->

## credits

Initially created by ConneXNL but many ideas and some code should be credited to the Ampersand.js and Backbone.js authors.


## license

See LICENSE.md

<!-- endhide -->