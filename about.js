
function perc(d,n) {
  return (d/100)*n;
}

window.addEventListener('load', function () {
  $( document ).ready(function() {
  $("#preload").delay(200).fadeOut(700);
  $("#logo").css("marginTop",perc($(window).height(),10));
  $("#logo").css("marginLeft",$(window).width()/2 - $("#logo").width()/2);
  $("#underlogo").css("marginTop",perc($(window).height(),10)-5);
  $("#underlogo").css("marginLeft",$(window).width()/2 - $("#logo").width()/2 - 5);

  $("#logot").css("marginTop",perc($(window).height(),10)+155);
  $("#logot").css("marginLeft",$(window).width()/2 - $("#logot").width()/2 - 5);

  $("#img1").css("marginTop",perc($(window).height(),10)+255);
  $("#underimg1").css("marginTop",perc($(window).height(),10)+258);
  $("#underimg1").css("marginLeft",perc($(window).width(),10)+3);
  $("#img1t").css("marginTop",perc($(window).height(),10)+265);
  $("#img1t").css("marginLeft",perc($(window).width(),10)+90);

  $("#img2").css("marginTop",perc($(window).height(),10)+365);
  $("#img2t").css("marginTop",perc($(window).height(),10)+380);
  $("#img2t").css("marginLeft",perc($(window).width(),10)+90);

  $("#img3").css("marginTop",perc($(window).height(),10)+545);
  $("#img3t").css("marginTop",perc($(window).height(),10)+560);
  $("#img3t").css("marginLeft",perc($(window).width(),10)+90);

  $("#img4").css("marginTop",perc($(window).height(),10)+745);
  $("#img4t").css("marginTop",perc($(window).height(),10)+760);
  $("#img4t").css("marginLeft",perc($(window).width(),10)+90);

  $("#start").css("marginTop",perc($(window).height(),10)+910);
  $("#start").css("marginLeft",$(window).width()/2 - $("#start").width()/2);

  $("#start").click(function () {
    if (window.ethereum) {
         try {
            window.ethereum.enable().then(function() {
              web3.version.getNetwork((err, netId) => {
  switch (netId) {
    case "1":
      console.log('This is mainnet');
      window.location.href = "app.html";
      break
    case "2":
      console.log('This is the deprecated Morden test network.')
      break
    case "3":
      console.log('This is the ropsten test network.')
      //window.location.href = "app.html";
      alert("Change network to Mainnet")

      break
    case "4":
      console.log('This is the Rinkeby test network.')
      break
    case "42":
      console.log('This is the Kovan test network.')
      break
    default:
      console.log('This is an unknown network.')
  }
})
            });
         } catch(e) {
            alert("You has denied account access to Aandrom");
         }
      }
      // Legacy DApp Browsers
      else if (window.web3) {
          web3 = new Web3(web3.currentProvider);
      }
      // Non-DApp Browsers
      else {
          alert('You have to install MetaMask !');
      }
  })

  });
});
