/**
* # Objetive:
*   - Get Admin Rigths.
*   - Open all ports needed to run NUKE.exe on a Server target using programs from home if exists.
*
* # Requirements:
*   - One server host name.
*
* # Space for improvement:
*   - Only try to inject if there is enouft programs open ports
* 
* # Argument:
*   - @param serverName
*
* # Return:
*   - @Returns true if got admins rights, false if not.
*/
/** @param {NS} ns **/
/** @param {import(".").NS } ns */
export async function main(ns) 
{
    NukeIt(ns);
}

/** @param {import(".").NS } ns */
export async function NukeIt(ns) 
{
    if (ns.args.length == 0) ns.tprint("There is not arguments!!");
    else if(ns.serverExists(ns.args[0]) == false) ns.tprintf(`Server ${ns.args[0]} does not exist.`);
	else
	{
        // Copy ns.args to an variable 
        let varArgs = ns.args;
        let varServerTarget = varArgs[0];
        //varServerTarget.push(varArgs[0]); //in the future could recieve many server simunstanesly and not only one or some agurments.

        // Get Server Object
        let varServerObject = (ns.getServer(varServerTarget));
        let isRooted = varServerObject["hasAdminRights"];
        let varOpennedPorts =  varServerObject["openPortCount"]//ns.getServerNumOpenned THIS COMMAND DOES NOS EXIST 
        
        if (isRooted == false)
        {
            const varArrayViruses = ["httpwerm.exe", "ftpcark.exe", "smtp.exe", "sqrlinjection.exe", "BruteSSH.exe", "NUKE.exe"];
            const varArrayVirusesToRun = [false, false, false, false, false, false];
            
            let varRequiredPorts = ns.getServerNumPortsRequired(varServerTarget);
            
            ns.tprint("Is ", varServerTarget, " rooted?: ", isRooted);
            ns.tprint("Required ports on ", varServerTarget, ": ", varOpennedPorts, "/", varRequiredPorts);

            //## check if virus programs exists at home:
            varArrayViruses.forEach(virusFile => {
                ns.fileExists(virusFile, "home") ? varArrayVirusesToRun[varArrayViruses.indexOf(virusFile)] = true: null; //ns.tprint(virusFile, " does not exists at home.");
            });

            ns.tprint(varArrayVirusesToRun);

            // run viruses on target server.
            varArrayVirusesToRun[0] == true ? ns.httpworm(varServerTarget): null;
            varArrayVirusesToRun[1] == true ? ns.ftpcrack(varServerTarget): null;
            varArrayVirusesToRun[2] == true ? ns.relaysmtp(varServerTarget): null;
            varArrayVirusesToRun[3] == true ? ns.sqlinject(varServerTarget): null;
            varArrayVirusesToRun[4] == true ? ns.brutessh(varServerTarget): null;
                ((varArrayVirusesToRun[5]) && (varOpennedPorts >= varRequiredPorts) && (varRequiredPorts != 0)) == true  ? ns.nuke(varServerTarget): null;
            isRooted = varServerObject["hasAdminRights"];
        }
        isRooted ? ns.tprint(varServerTarget, " has Admin rights.") : ns.tprint(varServerTarget, "has NOT Admin rights.");
        return isRooted;
    }
}