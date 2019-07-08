$(function(){
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

 $('.group').hover(function(){
    $(this).find('.back').css("filter", "brightness(90%) grayscale(0)");
}, function(){
    if(!$(this).hasClass("active")){
        $(this).find(".back").css("filter", "brightness(40%) grayscale(80%)");
    }
});

$('.group').click(function(){
    if(!$(this).hasClass("active")){
        $(".group.active").find(".back").css("filter", "brightness(40%) grayscale(80%)");
        $(".group.active").removeClass("active");
    }
    $(this).addClass("active");
    if($(window).width() > 576){
        let $activeDrawer = $('.drawer.active');
        if($('.drawer.active:first').is(":visible")){
            $activeDrawer.slideUp("slow").removeClass("active");
        }
        $activeDrawer.removeClass("active");
        let h = $(this).attr("id");
        if($('#'+h+'Info:first').is(":hidden")) {
            $(this).find('.back').css("filter", "brightness(90%) grayscale(0) ");
            $('#' + h + 'Info').slideDown("slow").addClass("active");
        } else{
            $('#' + h + 'Info').slideUp("slow").removeClass("active");
            $(this).find(".back").css("filter", "brightness(40%) grayscale(80%)");
        }
    } else {
        $(".info-popover.active").removeClass("active").hide();
        let h = $(this).attr("id");
        $("#"+h+"Mini").addClass("active").show();
        $("#project-popover").modal("show");
    }
});