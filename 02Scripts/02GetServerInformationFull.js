/** @param {NS} ns **/
/** @param {import(".").NS } ns */
export async function main(ns) 
{
	if ((haveArgs(ns, ns.args[0])) == false){
		ns.alert("There is not arguments!!");
	}
	else
	{
		// SERVER OBJECT INFORMATION EXAMPLE
		var varServer = ns.getServer(ns.args[0]);
		//######################################################################
		title(ns, "SERVER TARGET🖥: " + (varServer["hostname"]).toString());
		ns.tprintf(`Organization:           \t\t${varServer["organizationName"]}`);
		ns.tprintf(`IP:                     \t\t${varServer["ip"]}`)
		ns.tprintf(`Cpu Cores ${varServer["cpuCores"]}  \t\t\t\tRAM: ${varServer["ramUsed"]}/${varServer["maxRam"]} GB.`);
				
		//######################################################################
		title(ns, "MONEY 💰");
		ns.tprintf(`Max capacity:           \t\t${moneyFormat(varServer["moneyMax"])}`);
		ns.tprintf(`Available:              \t\t${moneyFormat(varServer["moneyAvailable"])}`); // how to align right side???
		ns.tprintf(`Growth:                 \t\t${varServer["serverGrowth"]}`);
		ns.tprintf(`Purchased By Player:    \t\t${varServer["purchasedByPlayer"]}`);
		
		//######################################################################
		title(ns, "PORTS");
		ns.tprintf(`\tPorts required: ${varServer["openPortCount"]}/${varServer["numOpenPortsRequired"]}`);
		ns.tprintf(`\tHTTP\tFTP\tSMPT\tSQL\tSSH`);
		ns.tprintf(`\t${isPortOpen(varServer["httpPortOpen"])}\t${isPortOpen(varServer["ftpPortOpen"])}\t${isPortOpen(varServer["smtpPortOpen"])}\t${isPortOpen(varServer["sqlPortOpen"])}\t${isPortOpen(varServer["sshPortOpen"])}`);
		
		//######################################################################
		title(ns, "HACKING");
		ns.tprintf(`\t   Permisions\t\t   Requirements`);
		ns.tprintf(`\tADMIN\tBACKDOOR\tSKILL\tBASE\tMIN`);
		ns.tprintf(`\t${varServer["hasAdminRights"]}\t${varServer["backdoorInstalled"]}\t\t${varServer["baseDifficulty"]}\t${varServer["hackDifficulty"]}\t${varServer["minDifficulty"]}`);
		
		//######################################################################
		title(ns, "FILES");
		ns.tprintf(`Is connected to: \t${varServer["isConnectedTo"]}`);
		ns.tprintf(`Messages:        \t${varServer["testFiles"]}`);
		ns.tprintf(`Programs:        \t${varServer["programs"]}`);
		ns.tprintf(`scripts:         \t${varServer["scripts"]}`);
		ns.tprintf(`Running scripts: \t${varServer["scripts"]}`);
		ns.tprintf(`Contracts:       \t${varServer["contracts"]}`);


		//######################################################################
		/*title(ns, "ALL DATA SERVER")
		for (const property in varServer){
			
			ns.tprintf(`${property}: ${varServer[property]}`);		
		}*/
	}
}

/** @param {NS} ns **/
export function moneyFormat(varMoney)
{
	return varMoney.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
} 

/** @param {NS} ns **/
export function title(ns, message)
{
	ns.tprintf(`\n`);
	//ns.tprintf("=============================================================");
	ns.tprintf(`${message}`);
	ns.tprintf("=============================================================");
}

export function isPortOpen(door)
{
	return door == true ? "Open": "Closed";
}

export function haveArgs(ns, args)
{
	if (args == null)
	{
		var bf = new Boolean(false)
		return bf;
	}
	else
	{
		var bt = new Boolean(true);
		return bt;
	}
}