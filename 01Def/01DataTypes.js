/** @param {NS} ns **/
/** @param {import(".").NS } ns */
export async function main(ns) {
	//variables examples declarations
	var varInteger = 10;
	var varString = "This is a string text.";
	var varArray = ["lunes", "martes", "miercoles"];
	var varDictionary = {1:"uno", 2:"dos", 3:"tres"};
	var varObject = {firstname:"Jonh ", lastname:"Cena", age: 44};
	var varServer = ns.getServer("home");
	var varScan = await ns.scan("home");
	const varDate = new Date();

	
	//print variables to console.
	ns.tprintf(`\nVARIABLES: \n---------------------\n`);	
		ns.tprintf(`Integer variable: ${varInteger}`); 
		ns.tprintf(`String variable: ${varString}`);
	
		// Array type:
		ns.tprintf(`\nOBJECT Array type: ${typeof(varDictionary)}\n---------------------\n`);	
	
			ns.tprint("\t", varArray);
			ns.tprint("\t", varArray[2]);
	
			ns.tprintf(`\t\t\t${varArray}`);
			ns.tprintf(`\t\t\t${varArray[2]}`);

	//Dictionary type:
	ns.tprintf(`\nOBJECT Dictionary type: ${typeof(varDictionary)} \n---------------------\n`);	
	
		ns.tprint("\t", varDictionary);
		ns.tprint("\t", varDictionary[2]);
		
		ns.tprintf(`\t\t\t${varDictionary}`); //does not print properly?
		ns.tprintf(`\t\t\t${varDictionary[2]}`);


	//Dictionary type:
	ns.tprintf(`\nOBJECT Object type: ${typeof(varObject)} \n---------------------\n`);	
	
		ns.tprintf(`Firstname: \t ${varObject.firstname}`);
		ns.tprintf(`Lastname:  \t ${varObject.lastname}`);
		ns.tprintf(`Age:       \t ${varObject.age}`);
		
		ns.tprint(varObject);
		ns.tprintf(`\t\t\t${varObject}`); //does not print properly?


	// Server type:
	ns.tprintf(`\nOBJECT Server type: ${typeof(varServer)}\n---------------------\n`);
		ns.tprint(varServer);


	// Scan type:
	ns.tprintf(`\nOBJECT SCAN type: ${typeof(varScan)}\n---------------------\n`);
	ns.tprint(varScan);
	
	
	// Date type:
	ns.tprintf(`\nOBJECT Date type: ${typeof(varDate)}\n---------------------\n`);
	varDate.getTime();
	ns.tprint(varDate);
}