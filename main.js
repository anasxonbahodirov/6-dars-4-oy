let a = +prompt(`Birinchi sonni kkiriting`)
let b = +prompt(`Ikkinchi sonni kiriting`)
let c = prompt(`Amalni tanlang` + `\n 1.qo'shish` + `\n 2.ayirish` + `\n 3.ko'paytirish` + `\n 4.bo'lish` )



if(c == 1){
    console.log(`${a} + ${b} = ${a + b}`)
}else if(c == 2){
    console.log(`${a} - ${b} = ${a - b}`)
}else if(c == 3){
    console.log(`${a} * ${b} = ${a * b}`)
}else if(c == 4){
    console.log(`${a} / ${b} = ${a / b}`)
}
