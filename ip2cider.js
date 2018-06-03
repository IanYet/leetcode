// ip 2 cidr
// input :"127.0.0.2", 4
// 127.0.0.2 .3 .4 .5
// output: 127.0.0.2/31  = .2 .3
//         127.0.0.4/31  = .4 .5

const ip2Cidr = (ip, range) => {
    const ipArr = ip.split('.')
    
    let x=0
    for(let i=0; i< ipArr.length; i++){
        x = parseInt(ipArr[i]) + x*256
    }
    
    let res = []
    
    while(range > 0){
        let temp = x & -x
        
        while(temp > range){
            temp = Math.floor(temp /2)
        }
        
        res.push(int2IP(x, temp))
        x+=temp
        range-=temp
    }
    
    return res
}

function int2IP(x, temp){
    let netId = 32
    
    while(temp >0){
        temp = Math.floor(temp/2)
        netId = netId -1
    }
    
    const ans = []
    
    for(let i=0; i<3; i++){
        ans.push(x&255)
        x>>=8
    }
    
    ans[3] = x
    
    netId++
    
    return ans.reverse().join('.') + '/' + netId
}
console.log(ip2Cidr("127.0.0.2", 6))