export   function toggleClick(id){
    console.log("done")
    let value = document.getElementById(id)
    let dec = 90
    if(id=="about"){
        dec = 160
    }
    window.scrollTo({top:value.offsetTop-dec,behavior:"smooth"})
 }