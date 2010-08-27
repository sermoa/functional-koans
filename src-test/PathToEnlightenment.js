var jstestdriver; //global variables

var koans = {
		all: [],
		add: function (groupName, functionName, functionPtr) {
				this.all.push({group: groupName, name: functionName, fn: functionPtr});
			}
};
   
var koanTestCases = new TestCase("JavascriptKoans", {
	testYourKarma: function () { 
		var advanceToNextKoan = true;
		var previousGroup = "";
		var i = 0; 
		while (advanceToNextKoan && i < koans.all.length) {
			if (koans.all[i].group !== previousGroup) {
				jstestdriver.console.log("");
				jstestdriver.console.log("Thinking about '" + koans.all[i].group +"'");
				previousGroup = koans.all[i].group;
			}
			
			try {
				koans.all[i].fn(); 
				jstestdriver.console.log("    '" + koans.all[i].name + "' has increased your awareness"); 
				i += 1; 
			} catch (e) {
				advanceToNextKoan = false;

				
				var sourceLocation = new RegExp('src-test.*\\)').exec(e.stack)[0].replace(')','');			

				var msg = "\n'" + koans.all[i].name + "' has damaged your karma\n\n" 
						+ "You have not yet reached enlightenment:\n"
						+ "==> " + e.message
						+ "\n\n"
				        + "Meditate on the following code:\n"
				        + koans.all[i].group + " :: " + koans.all[i].name +"\n"
					+ sourceLocation;
				jstestdriver.console.log(msg);
				fail();
			} 
		}
	}
}); 
