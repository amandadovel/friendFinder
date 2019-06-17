$(document).ready(function(){
    $("#submit").click(function(e){
        e.preventDefault();
        var formIsValid = $("#survey")[0].checkValidity();
        var user = {
            name: null,
            image: null,
            scores: []
        }
        if (formIsValid) {
            user.name = $("#fullname").val().trim();
            user.image = $("#image").val().trim();
            $(".score").each(function(){
                var value = $(this).val();
                user.scores.push(value);
            })

            $.post("/api/friends", user, function(response){
            console.log(response);
                $("#match-name").text(response.name);
                $("#match-image").attr("src", response.image);
                $('.modal').modal();
                $("#modal1").modal("open");
            })
        } else {
            alert("Check form and resubmit");
        }
    })
   
})


