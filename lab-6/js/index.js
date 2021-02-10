var first = document.getElementById('row-first');
var allCollection = document.all;
var second = allCollection.namedItem('row-second');
var third = document.getElementById('row-third');
var fourth = document.getElementById('row-fourth');
var group1 = [first, third];
var toggleFirstNThird = function () {
    group1.forEach(function (x) {
        if (x.className.indexOf("w3-yellow") == -1) {
            x.className = x.className.replace("w3-blue", "w3-yellow");
        }
        else {
            x.className = x.className.replace("w3-yellow", "w3-blue");
        }
    });
};
var toggleSecond = function () {
    var classes = second.classList;
    if (classes.contains('w3-text-red')) {
        classes.remove('w3-text-red');
        classes.add('w3-green');
    }
    else {
        classes.add('w3-text-red');
        classes.remove('w3-green');
    }
};
var zoomFourth = function () {
    var classes = fourth.classList;
    if (!classes.contains('zoom')) {
        classes.add('zoom');
        classes.add('w3-text-indigo');
    }
    else {
        classes.remove('zoom');
        classes.remove('w3-text-indigo');
    }
};
