/** @param {NS} ns **/
/** @param {import(".").NS } ns */
export async function main(ns) 
{
	if ((haveArgs(ns, ns.args[0])) == false)
	{
		ns.alert("There is not arguments!!");
	}
	else
	{
		ns.tprint("TENEMOS ARGUMENTOS!")
		var varServerName = ns.args[0];
	
		// SERVER INFORMATION EXAMPLE
		ns.tprint("Server target:           \t", varServerName);
		title(ns, "💲Money Information")
		ns.tprint("Max money:               \t", moneyFormat(ns.getServerMaxMoney(varServerName)));
		ns.tprint("Money available:         \t", moneyFormat(ns.getServerMoneyAvailable(varServerName)));
		ns.tprint("Server Growth:           \t", ns.getServerGrowth(varServerName));
		title(ns, "💻RAM INFORMATION");
		ns.tprint("Max RAM:                 \t", ns.getServerMaxRam(varServerName));
		ns.tprint("Used RAM:                \t", ns.getServerUsedRam(varServerName));
		title(ns, "🛡SECURITY INFORMATION")
		ns.tprint("Base Security Level:     \t", ns.getServerBaseSecurityLevel(varServerName));
		ns.tprint("Actual Security Level:   \t", ns.getServerSecurityLevel(varServerName));
		ns.tprint("Min Security Level:      \t", ns.getServerMinSecurityLevel(varServerName));
		title(ns, "🐱‍💻HACK INFORMATION")
		ns.tprint("Required Hacking Level:  \t", ns.getServerRequiredHackingLevel(varServerName));
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