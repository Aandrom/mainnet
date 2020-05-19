
ethereum.enable()
web3 = new Web3(web3.currentProvider)
var abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"ViewStakeDetails","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activateZIR","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"delegate","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"delegate","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"canActivateZIR","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"uint256","name":"_days","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"viewCirculate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewCurrPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewEndSales","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"pass__","type":"string"}],"name":"viewUntakenETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

var atAddr = "0x0e5d687b6d2c8d225149420fec220e16f9db0706";
var contract =new web3.eth.Contract(abi,atAddr);

maxwidth = $(window).width();
var todayPrice = 0;
var end = 0;
var countdown = 0;
var setstakeam = 1;
var setstakedays = 1;
var amtosend = 0;

function perc(d,n) {
  return (d/100)*n;
}


function secondsToDhms(seconds) {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (3600*24));
  let h = Math.floor(seconds % (3600*24) / 3600);
  let m = Math.floor(seconds % 3600 / 60);
  let s = Math.floor(seconds % 60);
  $("#salesend").html("Sales End: <br>"+d+":"+h+":"+m+":"+s);
}

function endstakingcountdown(seconds) {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (3600*24));
  let h = Math.floor(seconds % (3600*24) / 3600);
  let m = Math.floor(seconds % 3600 / 60);
  let s = Math.floor(seconds % 60);
  $("#safeend").html("Staking ends: <br><br>"+d+":"+h+":"+m+":"+s);
}

function startIntervaltimer() {
  setInterval(function () {
    secondsToDhms(end);
    end -= 1;
  },1000);
}

function salesEnd() {
  contract.methods.viewEndSales().call().then(function (e) {
    if(Number(e[0]) > 0){
      end = e[0];
    }
  });
}


function getAddress() {
  let i = ethereum.selectedAddress;
  setTimeout(function () {
    $("#logedas").html(i.slice(0,6)+"..."+i.slice(i.length-4));
  });
}
function canActivateZIRr() {
  contract.methods.canActivateZIR(ethereum.selectedAddress).call().then(function (e) {
    if(e==true){
      $("#active").css("display","block");
      $("#active").css("marginTop",perc($(window).height(),10)+30);
      $("#active").css("marginLeft",$(window).width()-240);
    }else{
      $("#cantactive").css("display","block");
      $("#cantactive").css("marginTop",perc($(window).height(),10)+30);
      $("#cantactive").css("marginLeft",$(window).width()-270);
    }
  });
}


function onclickActivaeZIR(){
  setTimeout(function () {
 document.getElementById("arrowup").style.display="block";
 document.getElementById("confirmalert").style.display="block";
 document.getElementById("arrowup").style.marginLeft = perc($(window).width(),90)+"px";
 document.getElementById("confirmalert").style.marginLeft=perc($(window).width(),90)-90+"px";
},700);

setTimeout(function() {
 document.getElementById("arrowup").style.display="none";
 document.getElementById("confirmalert").style.display="none";
},6000);
contract.methods.activateZIR().send({from: web3.givenProvider.selectedAddress}).then(function (e) {
document.getElementById("transconfirmedwrapper").style.display="block";
document.getElementById("maindivtransconfirmed").style.marginLeft=perc($(window).width(),50)-250+"px";
document.getElementById("maindivtransconfirmed").style.marginTop=perc($(window).width(),10)+"px";

document.getElementById("confirmedtext").style.marginLeft =   document.getElementById("maindivtransconfirmed").offsetWidth / 2 - document.getElementById("confirmedtext").offsetWidth/2 +"px"
$("#active").css("display","none");
$("#cantactive").css("display","none");
canActiveZIR();
}).catch(function (e) {

 document.getElementById("arrowup").style.display="block";
 document.getElementById("rejectalert").style.display="block";
 document.getElementById("arrowup").style.marginLeft = perc($(window).width(),90)+"px";
 document.getElementById("rejectalert").style.marginLeft=perc($(window).width(),90)-90+"px";

 setTimeout(function () {
   document.getElementById("arrowup").style.display="none";
   document.getElementById("rejectalert").style.display="none";
 },5000);

});
}

function closeAlert() {
  $("#transconfirmedwrapper").css("display","none");
}

function openBuy() {
  $("#buydiv").css("display","block")
  $("#buytext").css("marginTop",perc($(window).height(),20))
  $("#buytext").css("marginLeft",perc($(window).width(),50)-$("#buytext").width()/2);

  $("#buydesctext").css("marginTop",perc($(window).height(),30)+30)
  $("#buydesctext").css("marginLeft",perc($(window).width(),50)-$("#buytext").width()/2);
  $("#buyinput").css("marginTop",perc($(window).height(),30)+80)
  $("#buyinput").css("marginLeft",perc($(window).width(),50)-$("#buytext").width()/2);

  $("#yougett").css("marginTop",perc($(window).height(),30)+120)
  $("#yougett").css("marginLeft",perc($(window).width(),50)-$("#buytext").width()/2);


  $("#buy").css("marginTop",perc($(window).height(),30)+170)
  $("#buy").css("marginLeft",perc($(window).width(),50)-$("#buytext").width()/2);

  $("#reject").css("marginTop",perc($(window).height(),30)+170)
  $("#reject").css("marginLeft",perc($(window).width(),50)-$("#buytext").width()/2 + 130);

  function getBalance() {
    web3.eth.getBalance(ethereum.selectedAddress).then(function (e) {
    maxAmount = e/1000000000000000000;
    maxAmount = maxAmount.toFixed(8);
    $("#ethavailable").html(maxAmount);
  })
}

function getPrice() {
  contract.methods.viewCurrPrice().call().then(function (e) {
      if(e[1] == true){
        let price = Number(e[0]);
        price = price / 1000000000000000000;
        price = price.toFixed(5);

        $("#currprice").html(price);
      }
  });
}

getBalance();
getPrice();

let amount = 0;
$("#buyinput").keyup(function(){
var val = $(this).val();
if(isNaN(val)){
val = val.replace(/[^0-9\.]/g,'');
if(val.split('.').length>2)
    val =val.replace(/\.+$/,"");
  }
  if(val>Number($("#ethavailable").html())){
    $(this).val(maxAmount);
    amount = maxAmount;
    let maxget = maxAmount / Number($("#currprice").html());
    maxget=maxget.toFixed(3)
    $("#yougetv").html(maxget);
  }else{
    $(this).val(val);
    amount = val;
    let maxget = Number(val) / Number($("#currprice").html());
    maxget = maxget.toFixed(3);
    $("#yougetv").html(maxget);

  }
});
}

function buyClick(){
  let x = Number($("#buyinput").val()).toFixed(8);
   finalprice = 1000000000000000000 * x;
   $("#buydiv").css("display","none");

   setTimeout(function () {
  document.getElementById("arrowup").style.display="block";
  document.getElementById("confirmalert").style.display="block";
  document.getElementById("arrowup").style.marginLeft = perc($(window).width(),90)+"px";
  document.getElementById("confirmalert").style.marginLeft=perc($(window).width(),90)-90+"px";
},700);

setTimeout(function() {
  document.getElementById("arrowup").style.display="none";
  document.getElementById("confirmalert").style.display="none";
},6000);
contract.methods.buy().send({from: web3.givenProvider.selectedAddress,value:finalprice}).then(function (e) {
document.getElementById("transconfirmedwrapper").style.display="block";
document.getElementById("maindivtransconfirmed").style.marginLeft=perc($(window).width(),50)-250+"px";
document.getElementById("maindivtransconfirmed").style.marginTop=perc($(window).width(),10)+"px";

document.getElementById("confirmedtext").style.marginLeft =   document.getElementById("maindivtransconfirmed").offsetWidth / 2 - document.getElementById("confirmedtext").offsetWidth/2 +"px"

}).catch(function (e) {

  document.getElementById("arrowup").style.display="block";
  document.getElementById("rejectalert").style.display="block";
  document.getElementById("arrowup").style.marginLeft = perc($(window).width(),90)+"px";
  document.getElementById("rejectalert").style.marginLeft=perc($(window).width(),90)-90+"px";

  setTimeout(function () {
    document.getElementById("arrowup").style.display="none";
    document.getElementById("rejectalert").style.display="none";
  },5000);

});
}

function userbalance() {
  contract.methods.balanceOf(ethereum.selectedAddress).call().then(function (e) {
    e=Number(e)/1000;
    e=e.toFixed(3);
    $("#curbal").html("Balance : "+e);
  });
}

function isInStake() {
  contract.methods.ViewStakeDetails(ethereum.selectedAddress).call().then(function (e) {
    if(e[3] > 0){
      $("#havestake").css("display","block");
      $("#donthavestake").css("display","none");

      let now = Date.now();
      now=now.toString()
      now=now.slice(0,now.length-3);
      now=Number(now);
      let endstakecontract = e[2];
      if(endstakecontract < now){
        $("#safeend").html("You can close staking.You will get:"+ (e[3]/1000+perc(e[3]/1000,e[3]/100000*e[0]*1)).toFixed(3))
        $("#suminstake").html("You have "+(e[3]/1000).toFixed(3)+" in stake.");

      }else{
        countdown = endstakecontract-now;
        $("#havestake").css("display","block");
        $("#suminstake").html("You have "+(e[3]/1000).toFixed(3)+" in stake.");

        setInterval(function () {
          if(countdown>0){
            endstakingcountdown(countdown);
            countdown-=1;
          }else{
            $("#safeend").html("You can close staking.You will get:"+ e[3]+perc(e[3],e[0]))
          }
        },1000)
      }

    }else{
      $("#donthavestake").css("display","block");
      $("#havestake").css("display","none");

      let bal = $("#curbal").html();
      bal=bal.slice(10);
      $("#stakeamountt").html("Stake amount in Aandrom ("+bal+" Available)");


    }
  });
}


function setStake() {
  setTimeout(function () {
 document.getElementById("arrowup").style.display="block";
 document.getElementById("confirmalert").style.display="block";
 document.getElementById("arrowup").style.marginLeft = perc($(window).width(),90)+"px";
 document.getElementById("confirmalert").style.marginLeft=perc($(window).width(),90)-90+"px";
},700);

setTimeout(function() {
 document.getElementById("arrowup").style.display="none";
 document.getElementById("confirmalert").style.display="none";
},6000);
contract.methods.stake(setstakeam,setstakedays).send({from:ethereum.selectedAddress}).then(function (e) {
isInStake();
document.getElementById("transconfirmedwrapper").style.display="block";
document.getElementById("maindivtransconfirmed").style.marginLeft=perc($(window).width(),50)-250+"px";
document.getElementById("maindivtransconfirmed").style.marginTop=perc($(window).width(),10)+"px";

document.getElementById("confirmedtext").style.marginLeft =   document.getElementById("maindivtransconfirmed").offsetWidth / 2 - document.getElementById("confirmedtext").offsetWidth/2 +"px"
$("#active").css("display","none");
$("#cantactive").css("display","none");
canActiveZIR();
}).catch(function (e) {

 document.getElementById("arrowup").style.display="block";
 document.getElementById("rejectalert").style.display="block";
 document.getElementById("arrowup").style.marginLeft = perc($(window).width(),90)+"px";
 document.getElementById("rejectalert").style.marginLeft=perc($(window).width(),90)-90+"px";

 setTimeout(function () {
   document.getElementById("arrowup").style.display="none";
   document.getElementById("rejectalert").style.display="none";
 },5000);

});
}






function closeStake() {
  setTimeout(function () {
 document.getElementById("arrowup").style.display="block";
 document.getElementById("confirmalert").style.display="block";
 document.getElementById("arrowup").style.marginLeft = perc($(window).width(),90)+"px";
 document.getElementById("confirmalert").style.marginLeft=perc($(window).width(),90)-90+"px";
},700);

setTimeout(function() {
 document.getElementById("arrowup").style.display="none";
 document.getElementById("confirmalert").style.display="none";
},6000);
contract.methods.closeStake().send({from:ethereum.selectedAddress}).then(function (e) {
  isInStake();
document.getElementById("transconfirmedwrapper").style.display="block";
document.getElementById("maindivtransconfirmed").style.marginLeft=perc($(window).width(),50)-250+"px";
document.getElementById("maindivtransconfirmed").style.marginTop=perc($(window).width(),10)+"px";

document.getElementById("confirmedtext").style.marginLeft =   document.getElementById("maindivtransconfirmed").offsetWidth / 2 - document.getElementById("confirmedtext").offsetWidth/2 +"px"
$("#active").css("display","none");
$("#cantactive").css("display","none");
canActiveZIR();
}).catch(function (e) {

 document.getElementById("arrowup").style.display="block";
 document.getElementById("rejectalert").style.display="block";
 document.getElementById("arrowup").style.marginLeft = perc($(window).width(),90)+"px";
 document.getElementById("rejectalert").style.marginLeft=perc($(window).width(),90)-90+"px";

 setTimeout(function () {
   document.getElementById("arrowup").style.display="none";
   document.getElementById("rejectalert").style.display="none";
 },5000);

});
}



function sendAandrom() {
  setTimeout(function () {
 document.getElementById("arrowup").style.display="block";
 document.getElementById("confirmalert").style.display="block";
 document.getElementById("arrowup").style.marginLeft = perc($(window).width(),90)+"px";
 document.getElementById("confirmalert").style.marginLeft=perc($(window).width(),90)-90+"px";
},700);

setTimeout(function() {
 document.getElementById("arrowup").style.display="none";
 document.getElementById("confirmalert").style.display="none";
},6000);
contract.methods.transfer($("#toaddrinp").val(),amtosend).send({from:ethereum.selectedAddress}).then(function (e) {
isInStake();
document.getElementById("transconfirmedwrapper").style.display="block";
document.getElementById("maindivtransconfirmed").style.marginLeft=perc($(window).width(),50)-250+"px";
document.getElementById("maindivtransconfirmed").style.marginTop=perc($(window).width(),10)+"px";

document.getElementById("confirmedtext").style.marginLeft =   document.getElementById("maindivtransconfirmed").offsetWidth / 2 - document.getElementById("confirmedtext").offsetWidth/2 +"px"
$("#active").css("display","none");
$("#cantactive").css("display","none");
canActiveZIR();
}).catch(function (e) {

 document.getElementById("arrowup").style.display="block";
 document.getElementById("rejectalert").style.display="block";
 document.getElementById("arrowup").style.marginLeft = perc($(window).width(),90)+"px";
 document.getElementById("rejectalert").style.marginLeft=perc($(window).width(),90)-90+"px";

 setTimeout(function () {
   document.getElementById("arrowup").style.display="none";
   document.getElementById("rejectalert").style.display="none";
 },5000);

});
}


//onload function
window.addEventListener('load', function () {
  $( document ).ready(function() {
    salesEnd();
    $("#preload").delay(1000).fadeOut(500);
    setTimeout(function(){getAddress();},4000)
    $("#logedas").css("marginTop",perc($(window).height(),10));
    $("#logedas").css("marginLeft",$(window).width()-240);
    $("#underlogo").css("marginTop",perc($(window).height(),5)+32);
    $("#underlogo").css("marginLeft",perc($(window).width(),10)-5);
    $("#buyselector").css("marginTop",perc($(window).height(),45));
    $("#stakeselector").css("marginTop",perc($(window).height(),45)+53);
    $("#sendselector").css("marginTop",perc($(window).height(),45)+106);

    $("#curbal").css("marginTop",perc($(window).height(),10)+120);
    setTimeout(function(){canActivateZIRr();},3000)
    $("#active").click(function () {
      onclickActivaeZIR();
    });

    $("#closetransconfirmeddiv").click(function () {
      closeAlert();
    });

    setTimeout(function () {
      if(end>0){
        startIntervaltimer();
        $("#salesend").css("marginTop",perc($(window).height(),10));
        $("#salesend").css("marginLeft",$(window).width()/2-$("#salesend").width()/2 - 80);

      }
    },5000)

    $("#buyselector").click(function () {
      $("#buydiv").css("display","block");
      openBuy()
    });

    $("#buy").click(function () {
      buyClick();
    })

    $("#reject").click(function () {
      $("#buydiv").css("display","none");
    })

    $("#stakeselector").click(function () {
      $("#stake").css("display","block");
      $("#sendaandrom").css("display","none");

      isInStake();
    })

    $(".globalclose").click(function () {
      $("#stake").css("display","none");
    })

    userbalance()
    setInterval(function () {
      userbalance();
      canActiveZIR();
    },10000);



    $("#stakeamountinp").keyup(function(){
      let max = $("#curbal").html();
      max=max.slice(10);
      max=Number(max);
      console.log(max);
    var val = $(this).val();
    if(isNaN(val)){
    val = val.replace(/[^0-9\.]/g,'');
    if(val.split('.').length>2)
        val =val.replace(/\.+$/,"");
      }
      if(val>Number(max)){
        $(this).val(max);
        setstakeam = max*1000;
      }else{
        $(this).val(val);
        setstakeam = val*1000;
      }
    });


    $("#stakelengthinp").keyup(function(){

    var val = $(this).val();
    if(isNaN(val)){
    val = val.replace(/[^0-9\.]/g,'');
    if(val.split('.').length>2)
        val =val.replace(/\.+$/,"");
      }
      if(Number(val)<=0){
        $(this).val(1);
        setstakedays = 1;
      }else{
        $(this).val(val);
        setstakedays = val;
      }
    });

$("#startstaking").click(function () {
  setStake();
});

$("#forceclose").click(function () {
  closeStake();
})


$("#amtosendinp").keyup(function(){
  let max = $("#curbal").html();
  max=max.slice(10);
  max=Number(max);
  console.log(max);
var val = $(this).val();
if(isNaN(val)){
val = val.replace(/[^0-9\.]/g,'');
if(val.split('.').length>2)
    val =val.replace(/\.+$/,"");
  }
  if(val>Number(max)){
    $(this).val(max);
    amtosend = max*1000;
  }else{
    $(this).val(val);
    amtosend = val*1000;
  }
});

$("#senddiv").click(function () {
  sendAandrom();
});

$("#closesend").click(function () {
  $("#sendaandrom").css("display","none");
});

$("#sendselector").click(function () {
  $("#stake").css("display","none");
  $("#sendaandrom").css("display","block");
})

//end of onload
  });
});
