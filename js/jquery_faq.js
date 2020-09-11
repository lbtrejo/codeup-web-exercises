"use strict";

$(document).ready(function() {
    console.log("Document is ready")

    $("ul").hide();
    $("#registration-container").hide();

    $("#toggle-btn").click(function () {
        $("dd").toggleClass("invisible-custom")
    })

    $(".faq-header").click(function () {
        $(this).addClass(["custom-peach-bg", "custom-dark"]);
    })

    $("#yellow-bg-btn").click(function(){
       $("#park-one-facts").children().last().css("background-color", "lightyellow");
       $("#park-two-facts").children().last().css("background-color", "lightyellow");
       $("#park-three-facts").children().last().css("background-color", "lightyellow");
    })

    $("h3").click(function(){
        $(this).next().children("li").css("font-weight", "bold");
        $(this).next().slideToggle(1000);
        // better solution is to toggle a class for this, since it's easier to scale/manage
    })

    $("li").click(function(){
        $(this).parent().children("li").first().css("color", "blue");
        // better solution is to toggle a class for this, since it's easier to scale/manage
    })

    $("#close-icon").click(function(){
        $("#newsletter-container").fadeOut(750);
    })

    window.setTimeout(function(){
        $("#registration-container").fadeIn(1500)
    }, 8000)

})