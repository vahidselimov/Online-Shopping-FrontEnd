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
  var isNS = (navigator.appName == "Netscape") ? 1 : 0;
  if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
  function mischandler(){
  return false;
  }
  function mousehandler(e){
  var myevent = (isNS) ? e : event;
  var eventbutton = (isNS) ? myevent.which : myevent.button;
  if((eventbutton==2)||(eventbutton==3)) return false;
  }
  document.oncontextmenu = mischandler;
  document.onmousedown = mousehandler;
  document.onmouseup = mousehandler;
  // function showAlert() {
  //   var myText = "Adminin Gmail Addressi: Vahidsalimov12@gmail.com"
  //  var myText2="SuperAdminin Gmail Addressi: tu6g17bsz@gmail.com";
  // alert (myText);
  //   alert(myText2);
  // }

