function isLower(char){
    let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

    for(let i=0; i<lowerCaseLetters.length; i++){
        if(lowerCaseLetters[i] == char){
            return true
        }
    }
    return false
}

let arr = ["S","a","A","L","e"]
let lenArr = arr.length

for(let j=0; j<lenArr; j++){
    if(isLower(arr[j]) == true){
        console.log(arr[j] +" " + "is a Lower Case Letter.")
    }
}