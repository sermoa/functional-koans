
var koans = {
		all: [],
		add: function (groupName, functionName, functionPtr) {
				this.all.push({group: groupName, name: functionName, fn: functionPtr});
			}
};
