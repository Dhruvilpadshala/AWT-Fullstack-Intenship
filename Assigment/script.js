
$(".sigin-btn").click(function () {
    let inputname = document.getElementById("uname").value;
    let inputmail = document.getElementById("umail").value;
    let inputnum = document.getElementById("unum").value;
    let inputmess = document.getElementById("umess").value;
    // alert("hello " + inputname + " your number is " + inputnum + " and email is " + inputmail + " you say that " + inputmess);
    document.getElementById("namegreet").innerHTML = "Hello, " + inputname;
    document.getElementById("emailpop").innerHTML = inputmail;
    document.getElementById("conpop").innerHTML = inputnum;
    document.getElementById("messpop").innerHTML = inputmess;
    document.getElementById("pop").innerHTML = "hello " + inputname + " your number is " + inputnum + " and email is " + inputmail + " you say that " + inputmess;
});
$(".confirmcls").click(function () {
    // $(".conform").html("<p>Thank you sumiting your feedback it will be use full for us</p>");
     $(".conform").css({"height":"200px","width":"400px","background":"white","border-radius":"24px","font-size":"20px"});
    // $(".contact").css({"display":"flex","justify-content":"center","align-items":"center"})
    let iuname = document.getElementById("uname").value;
    $(".conform").html("<p class='alert alert-info' =>Thank you " + iuname + ", for your feedback</p>");
    $(".contact").css({"display":"flex","justify-content":"center","align-items":"center","width":"97vw","height":"90vh","font-size":"20px" });
})