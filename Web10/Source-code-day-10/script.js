// Đây là chú thích
/* Đây là chú thích trên nhiều dòng
*cả như này nữa
*/
/*
console.log('File Javascript');
console.log("Course");
console.log("Hôm nay 'trời đẹp quá'")
console.log("Khúc ruột 'miền Trung'")

//Khối dữ liệu number
var x = 5
var y = 5.5

//Khối dữ liệu boolean (đúng/sai)
var check = true
var uncheck = false

let name;

//bloack scope
var newname = 'Anna'
let newage = 20
function getname ()
    {
        newname = "Long"
        newage = 25
    }
console.log(newname)

function sayHello(user)
    {
        console.log(`Xin chào ${user}`)
    }
sayHello('Duong');
sayHello('Hieu');

function TinhTong(a,b)
    {
        //console.log(a+b)
        alert(`Tong cua 2 so la ${a} va ${b} là ${a+b}`)
    }
TinhTong(24,6);

function sendEmail(from, message = "Không có nội dung") 
    {
        alert(from + ": " + message);
    }
sendEmail("Robin");
*/

// let a=1;
// let b=22;
// let name = "abcdef";
// alert(a+b+name+b+a);
// alert(`b+2=${1+2}`);
// alert(`Hello ${name}`)

document.write(`Xin chao <br/>`)
document.writeln(`Xin chao <br/>`)

// function squareOfNumber(x)
//     {
//         return Math.pow(x,2);
//     }
function FunctionSum(a,b,c)
    {
        sum=(3*a+2*b-c);
        return Math.pow(sum,2)
    }