/*
 * @Author: nghiemtv.com
 */
$("#login-button").click(function (event) {
    var userName = document.getElementById("userName").value;
    var pwd = document.getElementById("pwd").value;
    if (userName == "AT19D" && pwd == "2010") {
      event.preventDefault();
      $("form").fadeOut(500);
      $(".wrapper").addClass("form-success");
      setTimeout(function () {
        location.href = "Memories.html";
      }, 2000);
    } else {
      alert("Wrong Password");
    }
  });