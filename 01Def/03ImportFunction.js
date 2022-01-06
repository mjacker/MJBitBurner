/** @param {NS} ns **/
/** @param {import(".").NS } ns */

import { juiceFunction } from "/01Def/04ExportFunction.js";
export async function main(ns) 
{
	juiceFunction(ns, ns.args[0]);
}