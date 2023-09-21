let  name = prompt('kogo xochesh udalit')
let arr=['xojik' , 'aziza' ,'samira', 'abdukhafiz']

let a = arr.length
arr.splice(name , 1)
let b=arr.length
if(b===a){
    alert('нет его/ее')
}
console.log(arr)