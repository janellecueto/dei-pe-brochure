$(function(){
    $("#nav-placeholder").load("../templates/navbar.html");
    $("#bottomNav-placeholder").load("../templates/bottomnav.html");
});

$('button.explr').click(function(){
    let mid = this.id;      //id as a string?
    mid = mid.substr(0, mid.length-3);
    let $explore = $(this).closest('.explore');    //div col on top of button
    let $row = $explore.closest('.row');            //row on top of div
    // alert(mid);
    if($(this).hasClass('infoShow')){
        $(this).removeClass("infoShow").addClass("infoHide");

        $explore.removeClass("active");
        $row.find('.active').hide();        //hide the other cols
        // $('#middle').hide();
        // $('#high').hide();
        $('#'+mid+'Info').show();
    }
    else if($(this).hasClass("infoHide")){
        $(this).removeClass("infoHide").addClass("infoShow");
        $explore.addClass("active");
        $row.find('.active').show();
        $('#'+mid+'Info').hide();
    }

});

$(".sec").hover(function(){
    $(this).find(".back").css("filter", "brightness(90%) grayscale(0)");
    $(this).find(".mtext button").show();
 }, function(){
     $(this).find(".back").css("filter", "brightness(40%) grayscale(80%)");
     $(this).find(".mtext button").hide();
 });

