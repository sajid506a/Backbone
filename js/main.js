var MyModel = Backbone.Model.extend({
	
	defaults:{
		name:'imran',
		status:'online'
	}
	
});

var my = new MyModel();


console.log(my.attributes);
console.log(my.get('age'));
console.log(my.set('name'));



