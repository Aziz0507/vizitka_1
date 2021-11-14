$(document).ready(function(){
    // alert("salom")
    $("#input_poisk").on("keyppress", function(){

        $("#ves_sayt h1 h3 h5 a").each(function(){

            var id = $(this).attr("id");

            if ($(this).find("h5.opisaniye").text().toLowerCase() == search.toLowerCase() || $(this).find("h3#seti").text().toLowerCase() == search.toLowerCase())
            {
                console.log(id+ "show");

                $("#"+id).addClass("show");

                ("#"+id).removeClass("hide");
            }
            else
            {
                console.log(id + "hide");

                $("#"+id).addClass("hide");
            
                ("#"+id).removeClass("show");
            }
        
        });
    });
});