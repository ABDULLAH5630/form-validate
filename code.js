
$(document).ready(function () {


    $('#email').keyup(function () {
        var email = $('#email').val();
        var asign = new RegExp("@");
        var check = email.search(asign);
        if (check != -1) {
            $("#message").removeClass("red");
            $("#message").text("valid email address");
        } else {
            $("#message").addClass("red");
            $("#message").text("please enter valid email");
        }
    });


    $("#btn").click(function () {
        var name = $("#name").val();
        var pass = $("#pass").val();
        if (name.length == 0 || pass.length == 0) {
            $("#name").attr("required", true);
            $("#pass").attr("required", true);
            alert("Empty field not allow");
        } else {
            $("#message").removeClass("red");
            $("#message").text("You are ok");
        }
    });




    $("#pass").keyup(function () {
        var pass = $("#pass").val();
        if (pass.length < 6 && pass.length > 0 || pass.length==0) {
            $("#message").addClass("red");
            $("#message").text("your password is very week");
        } else {
            $("#message").removeClass("red");
            $("#message").text("your password is strong");
        }
    });
    
    
    
    $("#name").keyup(function () {
        var name = $("#name").val();
        if (name.length < 6 && name.length > 0 || name.length==0) {
            $("#message").addClass("red");
            $("#message").text("Name must be 6 charectar");
        } else {
            $("#message").removeClass("red");
            $("#message").text("Your input name is right");
        }
    });








});