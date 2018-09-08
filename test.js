function paginate(resultsPerPage, results) {
    const sortedResults = []

    
    do{
        let tempHosts = [], page = []
        
        for(let i=0; i<results.length;){

            const result = results[i]
            const resArr = result.split(',')
            const host = resArr[0]

            console.log(host);

            if(!tempHosts.includes(host)){
                // console.log('object');
                tempHosts.push(host)
                page.push(result)
                results.splice(i, 1)
            }else{
                ++i
            }

            if(page.length >= resultsPerPage){
                sortedResults.push(page)
                break
            }
        }

        if(page.length < resultsPerPage){
            let n = resultsPerPage - page.length
            let rs = results.splice(0, n)
            rs.forEach((r) => page.push(r))

            sortedResults.push(page)
        }
        
    }while(results.length > 0)

    // console.log(sortedResults.join('#'));
    const formattedRes = []
    sortedResults.forEach((re) => {
        formattedRes.push(...re)
        formattedRes.push('')
    })
    formattedRes.pop()

    console.log(formattedRes);
    return formattedRes
}

paginate(3, [
    "1,28,100.3,Paris",
"4,5,99.2,Paris",
'2,7,90.5,Paris',
"8,8,87.6,Paris",
"6,10,85.6,Paris",
"3,16,82.1,Paris",
"7,29,81.1,Paris",
"9,20,78.9,Paris",
"12,21,74.3,Paris"])