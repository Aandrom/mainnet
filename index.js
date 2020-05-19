

function perc(d,n) {
  return (d/100)*n;
}

window.addEventListener('load', function () {
  $( document ).ready(function() {
  $("#preload").delay(200).fadeOut(700);

  $("#logo").css("marginTop",perc($(window).height(),10))
  $("#logo").css("marginLeft",$(window).width()/2 - $("#logo").width()/2)
  $("#underlogo").css("marginTop",perc($(window).height(),10)-5)
  $("#underlogo").css("marginLeft",$(window).width()/2 - $("#logo").width()/2 - 5)

  $("#logot").css("marginTop",perc($(window).height(),10)+155)
  $("#logot").css("marginLeft",$(window).width()/2 - $("#logot").width()/2 - 5)

  $("#zirt").delay(1000).fadeIn(1000);
  $("#zirt").css("marginTop",perc($(window).height(),30)+150)
  $("#zirt").css("marginLeft",$(window).width()/2 - $("#zirt").width()/2 - 5)

  $("#zirunder").delay(1300).fadeIn(600);
  $("#zirunder").css("width",$("#zirt").width())
  $("#zirunder").css("marginTop",perc($(window).height(),30)+200)
  $("#zirunder").css("marginLeft",$(window).width()/2 - $("#zirt").width()/2 - 5)

  $("#chdiv1").delay(1800).fadeIn(600);
  $("#chdiv1").css("marginTop",perc($(window).height(),50)+150)
  $("#chdiv1").css("marginLeft",$(window).width()/2 - $("#chdiv1").width() - 20)

  $("#chdiv2").delay(1800).fadeIn(600);
  $("#chdiv2").css("marginTop",perc($(window).height(),50)+150)
  $("#chdiv2").css("marginLeft",$(window).width()/2  + 20)


  $("#chdiv1").click(function () {
    window.location.href = "about.html";
  });
  $("#chdiv2").click(function () {
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
      alert("Change network to Mainnet.");
      break
    case "3":
      console.log('This is the ropsten test network.')
      alert("Change network to Mainnet.");

      break
    case "4":
      console.log('This is the Rinkeby test network.')
      alert("Change network to Mainnet.");

      break
    case "42":
      console.log('This is the Kovan test network.')
      alert("Change network to Mainnet.");

      break
    default:
      console.log('This is an unknown network.')
      alert("Change network to Mainnet.");
      
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
