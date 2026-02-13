const calcDisplay=(content)=>{
    result.value+=content
}
// clear calc screen
const clearCalcScreen=()=>{
    result.placeholder=0
    result.value=""
}
// calculator output(=)
const calcResult=()=>{
    try{
        result.value=eval(result.value)

    }catch(err){
        result.value= ""
        result.placeholder="Invalid Expression"
    }
}

// delete calc scren

const delCalcScreen=()=>{
    result.value=result.value.slice(0,-1)
}