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

  var btn=document.getElementById("btn")
  var modal=document.getElementById("myModal")
  var span = document.getElementsByClassName("close")[0];
  
  //Modals Register//
 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  


  //Bu istifade olunmur numune kimi yazilib
  //---------------------------------//
  // function showAlert() {
  //   var myText = "Adminin Gmail Addressi: Vahidsalimov12@gmail.com"
  //  var myText2="SuperAdminin Gmail Addressi: tu6g17bsz@gmail.com";
  // alert (myText);
  //   alert(myText2);
  // }

