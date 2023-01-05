$(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");

    var input = $($(this).attr("toggle"));

    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  $(document).ready(function() {
    $("body").on("contextmenu", function(e) {
        return false;
      });
  });
  
  // function showAlert() {
  //   var myText = "Adminin Gmail Addressi: Vahidsalimov12@gmail.com"
  //  var myText2="SuperAdminin Gmail Addressi: tu6g17bsz@gmail.com";
  // alert (myText);
  //   alert(myText2);
  // }

