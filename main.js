function hide(variable1){
    let val1 = document.getElementById(variable1);
    if (val1.style.display !== "block"){
        val1.style.display = "block";
    }
    else{
        val1.style.display = "none";
    }
}

function dropping() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// function verify(){
//     var txt;
//     if(confirm("Is Faketoshi a fraud?")){
//         txt = "Success !";
//         demo.style.background = "green";
//         popup.style.display = "none";
//         sensetivdata.style.display = "block";
//     }
//     else{
//         txt = "Failed! Try again!";
//         demo.style.background = "red";
//         sensetivdata.style.display = "none";
//     }
//     document.getElementById("demo").innerHTML = txt;
// }

var $$ = document.querySelectorAll.bind( document );

const init = async () => {
            
    const { bitcoin: { blocks } } = mempoolJS({
    hostname: 'mempool.space'
    });

    const blocksTipHeight = await blocks.getBlocksTipHeight();
    var usFormat = blocksTipHeight.toLocaleString('en-US');

    $$( `.currentBlockHeight` )[ 0 ].innerHTML = 'Block:' + usFormat;
    setTimeout( init, 10000 );
};