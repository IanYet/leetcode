// Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.
// 50



// Ruby  is  a  dynamic,  open   source   programming
// language  with   a   focus   on   simplicity   and
// productivity. It has an  elegant  syntax  that  is
// natural   to   read    and    easy    to    write.


const wrapLine = (oriStr, num) => {
    const oriArr = oriStr.split(' ')
    const len = oriStr.length
    
    const result = [[]]
    
    let aLen = 0
    let row = 0
    
    //划分行
    for(let i=0;i<oriArr.length;i++){
        aLen = aLen + oriArr[i].length + 1
        
        if(aLen -1 <= num){
            result[row].push(oriArr[i])
        }
        
        if(oriArr[i+1]){
            let nextLen = aLen + oriArr[i+1].length
            
            if(nextLen >num){
                aLen = 0
                row++
                result[row] = []
            }
        }
    }
    
    //插入空格
    const resArr = []
    
    for(let i=0; i<result.length; i++){
        resArr[i] = ''
        
        let letterLen=0
        let wordLen = 0
        for(let j=0; j<result[i].length;j++){
            letterLen = letterLen + result[i][j].length
            wordLen++
        }
        
        let spaceNum = num-letterLen
        
        if(wordLen === 1){
            resArr[i] = result[i][0] + createSpace(spaceNum)
            continue
        }
        
        let step = Math.floor(spaceNum/(wordLen -1))
        console.log(step)
        let left = spaceNum%(wordLen -1)
        
        let leftSign = 0
        
        for(let word of result[i]){
            
            if(resArr[i].length + word.length < num){
                console.log(resArr[i].length + word.length)
                resArr[i] = resArr[i] + word + createSpace(step)
            }else{
                resArr[i] = resArr[i] + word
            }
            
            if(leftSign < left){
                resArr[i] = resArr[i] + ' '
                leftSign++
            }
        }
    }
    
    console.log(resArr)
}

function createSpace(num){
    let res = ''
    for(let i=0;i<num;i++){
        res = res +' '
    }
    
    return res
}

const str = 'Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.'
wrapLine(str, 5)