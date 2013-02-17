var stringifyJSON = function(object){
	if(typeof object === 'object'){
		var newJSON = "{";
	}else if(typeof object === 'array'){
		var newJSON = "[";
	}else{throw new Error("Input must be an object or array.");}

	var makeNewJSONString = function(object){
		//test for object type (array/object?)
		//if there is nothing inside, return appropriate message

		//add quotes
		for(var key in object){
			var addQuotesToElements = function(element){
				return '\"' + element + '\"';
			}
		}

		//handle each type of data: strings, nums, booleans, objects (recurse for objects!)
		switch(typeof object[key]){
			case 'string':
				newJSON += addQuotesToElements(key) + " : " + addQuotesToElements(value);

			case 'number':
				newJSON += addQuotesToElements(key) + " : " + addQuotesToElements(value);

			case 'boolean':
				newJSON += addQuotesToElements(key) + " : " + addQuotesToElements(value);

			case 'object':
				stringifyJSON(object[key]);
		}

	}

	makeNewJSONString(object);

	//if it's an array, return a ] at the end
	//if it's an object, return a } at the end
	if(typeof object === 'object'){
		return newJSON += "}";
	}else if(typeof object === 'array'){
		return newJSON += "]";
	}


	//return the newJSON

} 