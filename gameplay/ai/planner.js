var Planner = function() {

};

Planner.prototype.plan = function(agent) {
    var root = new Node(null, 0, null);

    var graph = this._buildGraph(root);

    var leaves = graph.leaves;

    if(!leaves) {
        console.log("no plan found");
        return null;
    }

    // get cheapest leave
    var cheapest = leaves.sort(function(a, b) {
        return a.cost < b.cost;
    })[0];

    var result = [];

    // work back to parents
    var node = cheapest;

    while(node) {
        if(node.action) {
            result.unshift(node.action);
        }

        node = node.parent;
    }

    return result;
};

Planner.prototype._buildGraph = function(root) {

};
