// fixme
var getElementsByClassName = function(className){
	var children = document.body.childNodes;
	console.log(children);

	//for each node, check to see if its child nodes
	//have the class name in question. if so, put the name of their elements
	//into an array to be returned.


	//if the child element has children, recurse
    return document.getElementsByClassName(className);
}