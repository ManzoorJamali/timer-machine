/*var mint = 0
var second = 0
var mili = 0

var getmili = document.getElementById('mili')
var getsecond = document.getElementById('second')
var getmint = document.getElementById('mint')
var btn1 = document.getElementById('btn');


var interval
function start(){

    interval =  setInterval(function(){
        mili++
        getmili.innerHTML = mili
        if(mili >=100){
            second++
            getsecond.innerHTML = second
    
            mili = 0
        }
        else if(second >=60){
            mint++
            getmint.innerHTML = mint
            second = 0
        }
        },10)
        document.getElementById('btn').disabled = true
}

function stop(){
    clearInterval(interval)
   document.getElementById('btn').disabled = false

}

function reset(){
 mint = 0
 second = 0
 mili = 0
 getmili .innerHTML = mili
 getsecond .innerHTML = second
 getmint .innerHTML = mint

}*/

var mint = 0
var second = 0
var mili = 0

var getmint = document.getElementById('mint')
var getsecond = document.getElementById('second')
var getmili = document.getElementById('mili')

var interval
function start(){
interval = setInterval(function(){
mili++
getmili .innerHTML = mili
if(mili >= 100){
   second++
   getsecond .innerHTML = second
   mili=0
}
else if(second >= 60){
    mint++
    getmint .innerHTML = mint
    second = 0
}

},10)
 document.getElementById('on').disabled = true
}
function stop(){
    clearInterval(interval)
document.getElementById('on').disabled = false
}
function reset(){
mint =0
second = 0
mili = 0
getmili.innerHTML = mili
getmint.innerHTML = mint
getsecond.innerHTML = second
}