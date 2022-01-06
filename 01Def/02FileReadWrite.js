/** @param {NS} ns **/
/** @param {import(".").NS } ns */
export async function main(ns) {
	//## FILE SECTION ##//
	// check if file exist
	if (ns.fileExists("/01Def/out.txt", "home"))
	{
			ns.tprint("out.txt file exist.");
		
		// read file
			let varFile ;
			varFile = await ns.read("/01Def/out.txt");

		// print file to console
			//ns.tprint(varFile); //this also work.
			ns.tprintf(`${varFile}`);
	}
	else
	{
		ns.tprint("file does not exist.");
		// Write to a file
		await ns.write("/01Def/out.txt", "testing 002", "a");
	}
}