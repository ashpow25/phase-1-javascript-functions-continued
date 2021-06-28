// Your code here //

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork (work = "go to the office"){
    return `This Monday, I will ${work}.`
}

mondayWork()

function wrapAdjective(string="*"){
    return function(parameter="special"){
        return `You are ${string}${parameter}${string}!`
    }
}