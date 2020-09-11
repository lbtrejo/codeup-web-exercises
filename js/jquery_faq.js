"use strict";

$(document).ready(function(){
    console.log("Document is ready")

    $("#toggle-btn").click(function(){
        $("dd").toggleClass("invisible-custom")
    })

    $(".faq-header").click(function(){
        $(this).addClass( ["custom-peach-bg", "custom-dark"] );
    })
})