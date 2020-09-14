(function() {
    "use strict";

    let blogData = "data/blog.json"

    function fetchData(){
        $.get(blogData).done(function(data){
        console.log(data)});
    }

    function buildPosts() {
        $.get(blogData).done(function (data) {
            data.forEach(function (element) {
                let postHTML = "";
                postHTML += "<div class='card m-3 cowboys-silver-bg'><div class='card-header cowboys-dk-blue-bg text-white'>" + element.date + " 🏈 </div>";
                postHTML += "<div class='card-body'><h5 class='card-title text-white heading-font'>"+ element.title +"</h5>"
                postHTML += "<p class='card-text text-white'>"+ element.content +"</p>"
                for (let i = 0; i < element.categories.length; i++){
                    postHTML += "<a href='#' class='btn cowboys-lt-blue-bg text-white m-1'>"+ element.categories[i] +"</a>"
                }
                postHTML += "</div></div>";

                $("#posts").append(postHTML);
            })
        })
    }

    $( document ).ready(function() {
        console.log( "ready!" );
        fetchData();
        buildPosts();
    });


})();





// <div class="card">
//     <div class="card-header">
//         Featured
//     </div>
//     <div class="card-body">
//         <h5 class="card-title">Special title treatment</h5>
//         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
// </div>