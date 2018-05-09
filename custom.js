$(document).ready(function(){
    content();
    topbanner();
    sidebanner();

    function content(){
        $.ajax({
            type : "POST",
            url : "content.php",
            data:"",
            beforeSend: function(){
                $("div#content").html('<span class="loading">Loading....</span>');
            },
            cache: false,
            sucess: function(data){
                $("#content").hmtl(data);
            }
        });
    }

    function topbanner(){
        $.ajax({
            type: "POST",
            url: "topbanner.php",
            data: "",
            beforeSend: function(){
                $("div#top_banner".html('<span class="loading">Loading.....</span>'))
            },
            cache: false,
            success : function(data){
                    $("#top_banner").html(data);
            }
        });
    }
});