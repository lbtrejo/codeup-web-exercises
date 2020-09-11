"use strict";

$(document).ready(function() {
    console.log("Document is ready")

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
        console.log(event);
    })
})