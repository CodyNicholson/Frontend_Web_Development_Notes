var s = "audacity";

var udacityizer = function(s) {
    s = s.replace("audacity", "Udacity");
    return s;
};

console.log(udacityizer(s));

// This will print "Udacity"