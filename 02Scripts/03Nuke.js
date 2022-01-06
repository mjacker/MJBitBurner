/** @param {NS} ns **/
/** @param {import(".").NS } ns */
export async function main(ns) 
{
    var varArrayViruses = ["NUKE.exe"];
    var varArgs = ns.args;
    var varServerTarget = varArgs[0]


    if (ns.args.length == 0){
		ns.alert("There is not arguments!!");
	}
	else
	{
        var varRequiredPorts = ns.getServerNumPortsRequired(varServerTarget);
        if (varRequiredPorts == 0)
        {
            ns.nuke(varServerTarget);
            //ns.exec("NUKE.exe", varServerTarget, 1);
        }
        ns.tprint("test args:", varArgs);
    }
}