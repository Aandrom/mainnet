
ethereum.enable()
web3 = new Web3(web3.currentProvider)
var abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"ViewStakeDetails","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activateZIR","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"delegate","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"delegate","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"canActivateZIR","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"uint256","name":"_days","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"viewCirculate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewCurrPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewEndSales","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"pass__","type":"string"}],"name":"viewUntakenETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

var atAddr = "0x0e5d687b6d2c8d225149420fec220e16f9db0706";
var contract =new web3.eth.Contract(abi,atAddr);

maxwidth = $(window).width();
var todayPrice = 0;

function perc(d,n) {
  return (d/100)*n;
}


function secondsToDhms(seconds) {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (3600*24));
  let h = Math.floor(seconds % (3600*24) / 3600);
  let m = Math.floor(seconds % 3600 / 60);
  let s = Math.floor(seconds % 60);
  $("#days").html(d);
  $("#hours").html(h);
  $("#minutes").html(m);
  $("#seconds").html(s);
}


var endDay = 0;
window.addEventListener('load', function () {
  $( document ).ready(function() {

    $("#preload").delay(1000).fadeOut(500);

    $("#logot").css("marginTop",perc($(window).height(),5)+60);
    $("#logot").css("marginLeft",perc($(window).width(),10)+80);

    $(".headert").css("marginTop",perc($(window).height(),5)+63);
    $("#addmm").css("marginTop",perc($(window).height(),5)+65);

    $("#addmm").css("marginLeft",$(window).width() - 200);
    $("#walletheader").css("marginLeft",$(window).width() - 200 - 85);
    $("#buyheader").css("marginLeft",$(window).width() - 200 - 140);

    $("#salesend").css("marginLeft",$(window).width() / 2 - $("#salesend").width()/2);
    $("#salesend").css("marginTop",perc($(window).height(),20)+100);
    $("#totalpurchaset").css("marginLeft",$(window).width() / 2 - $("#salesend").width()/2);
    $("#totalpurchaset").css("marginTop",perc($(window).height(),20)+150);
    $("#totalStaket").css("marginLeft",$(window).width() / 2 - $("#salesend").width()/2);
    $("#totalStaket").css("marginTop",perc($(window).height(),20)+200);
    $("#circulatet").css("marginLeft",$(window).width() / 2 - $("#salesend").width()/2);
    $("#circulatet").css("marginTop",perc($(window).height(),20)+250);

    $("#centaurus").css("width",$("#salesend").width());
    $("#centaurus").css("marginLeft",$(window).width() / 2 - $("#salesend").width()/2);
    $("#centaurus").css("marginTop",perc($(window).height(),20)+285);

    $("#yourbalancet").css("marginLeft",$(window).width() / 2 - $("#salesend").width()/2);
    $("#yourbalancet").css("marginTop",perc($(window).height(),20)+300);

    $("#yourstaket").css("marginLeft",$(window).width() / 2 - $("#salesend").width()/2);
    $("#yourstaket").css("marginTop",perc($(window).height(),20)+350);

    $("#protectedimg").css("marginTop",perc($(window).height(),50));
    $("#protectedt").css("marginTop",perc($(window).height(),50)+110);
    $("#protectedt").css("marginLeft",perc($(window).width(),10)-20);

    $("#stakedesimg").css("marginTop",perc($(window).height(),50));
    $("#stakedesimg").css("marginLeft",perc($(window).width(),90)-70);
    $("#stakedest").css("marginTop",perc($(window).height(),50)+110);
    $("#stakedest").css("marginLeft",perc($(window).width(),90)-110);

    $("#opensourcet").css("marginTop",$(window).height()-30);

    $("#buyheader").click(function () {
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




//end of fucking buy div ~~ -2h finding bug
});





$("#buy").click(function () {
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
contract.methods.buy().send({from: web3.givenProvider.selectedAddress,value:Math.floor(finalprice)}).then(function (e) {
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
});




$("#reject").click(function () {
  $("#buydiv").css("display","none");
});



$("#closetransconfirmeddiv").click(function () {
  $("#transconfirmedwrapper").css("display","none");
});







//midddleee









//end f middle


    function getEndSales() {
        contract.methods.viewEndSales().call().then(function (e) {
          e[0] = Number(e[0]);
          endDay = e[0];
          if(e[0] > 0 && e[1] == true){
            setInterval(function () {
              secondsToDhms(endDay);
              endDay -= 1;
            },1000)
          }
    });
}

function totalPurchase() {
  contract.methods.balanceOf(atAddr).call().then(function (e) {
    e=Number(e)/1000;
    let total = 10000000-e;
    total = total.toFixed(3)
    $("#totalpurchasev").html(total)
  });
}

function  totalInStake() {
  contract.methods.totalInStake().call().then(function (e) {
    e=Number(e)/1000;
    e=e.toFixed(3);
    $("#totalStakev").html(e);
  });
}


function circulate() {
  contract.methods.viewCirculate().call().then(function (e) {
    e=Number(e)/1000;
    e=e.toFixed(3);
    $("#circulatev").html(e);
  });
}

function yourBalance() {
  contract.methods.balanceOf(ethereum.selectedAddress).call().then(function (e) {
    e=Number(e)/1000;
    e=e.toFixed(3);
    $("#yourbalancev").html(e);
  });
}

function yourStake() {
  contract.methods.ViewStakeDetails(ethereum.selectedAddress).call().then(function (e) {
    e[3]=Number(e[3])/1000;
    e[3]=e[3].toFixed(3);
    $("#yourstakev").html(e[3]);
  });
}

  $("#addmm").click(function () {
    window.web3.currentProvider.sendAsync({
        method: 'metamask_watchAsset',
        params: {
          "type":"ERC20",
          "options":{
            "address": atAddr,
            "symbol": "AND",
            "decimals": 3,
            "image": "https://raw.githubusercontent.com/Aandrom/logo/master/tokenimg.png",
          }
        }})
  });

totalInStake()
totalPurchase()
getEndSales()
circulate()
yourBalance();
yourStake()


//end
  });
});
