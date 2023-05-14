type Combinable = number | string;
type ConversionDescriptor = 'as_number' | 'as_string'

function combine(input1:Combinable,input2:Combinable,resultConversion:ConversionDescriptor){
    let result;
    if (resultConversion === 'as_number'){
        result = +input1 + +input2
        return result;
    }else{
        result = input1.toString() + input2.toString()
        return result;
    }
}

const combineAges = combine(30,20,'as_number')
console.log(combineAges)

const combinename = combine('max','annna','as_string')
console.log(combinename)