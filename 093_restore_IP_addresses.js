/**
 * Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
 */

 /**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = []

    for(let a=1; a<=3; a++){
        for(let b=1;b<=3;b++){
            for(let c=1;c<=3;c++){
                for(let d=1;d<=3;d++){
                    let as = s.substring(0,a),
                        bs = s.substring(a, a+b),
                        cs = s.substring(a+b, a+b+c),
                        ds = s.substring(a+b+c, a+b+c+d)
                        ls = s.substring(a+b+c+d)

                    if(ls !== ''){
                        continue;
                    }
                    
                    if(isValid([as, bs, cs, ds])){
                        res.push(`${as}.${bs}.${cs}.${ds}`)
                    }
                }
            }
        }
    }

    console.log(Array.from(new Set(res)))
    return Array.from(new Set(res))
};

/**
 * 
 * @param {String[]} ips 
 */
var isValid = function(ips) {
    return ips.every((ip) => ip!=='' && Number(ip)<=255 && Number(ip)>=0 && Number(ip).toString() === ip)
}

restoreIpAddresses("1457801")