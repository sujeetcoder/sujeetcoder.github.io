export   function toggleClick(id){
    console.log("done")
    let value = document.getElementById(id)
    window.scrollTo({top:value.offsetTop-90,behavior:"smooth"})
 }