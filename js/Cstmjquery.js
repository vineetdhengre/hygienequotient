// this console is for, to see that the file is working or not
console.log("this is working");


// Get the modal
var modal = document.getElementById("myModalOne");


// Get the button that opens the modal
var btn = document.getElementById("featFrst");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "inline-block";
  console.log("====================================");
  console.log("btn clicked");
  console.log("====================================");
};



// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};






// $("#submitBtn").click(function () {
//   var a = $("#sname").val();
//   var b = $("#semail").val();
//   var c = $("#smobile").val();
//   var d = $("#scompany").val();
//   alert("asdasd");
//   console.log("====================================");
//   console.log("working!!");
//   console.log("====================================");
//   if (a != "" && b != "" && c != "" && d != "") {
//     setTimeout(function () {
//       $("#sname").val();
//       $("#semail").val();
//       $("#smobile").val();
//       $("#scompany").val();

//       window.location.href = "../thankyou.html";
//     }, 1000);
//   } else {
//     alert("Please Fill all the details");
//   }
// });

function submitFormm() {
  // alert("Please");
  var a = $("#sname").val();
  var b = $("#semail").val();
  var c = $("#smobile").val();
  
  console.log("====================================");
  console.log("working!!");
  console.log("====================================");
  if (a != "" && b != "" && c != "" ) {
    setTimeout(function () {
      $("#sname").val();
      $("#semail").val();
      $("#smobile").val();
      

      window.location.href = "./thankyou.html ";
    }, 1000);
  } else {
    alert("Please Fill all the details");
  }
}

/*
function submitFormmm() {
  // alert("Please");
  var a = $("#mname").val();
  var b = $("#memail").val();
  var c = $("#mmobile").val();
  var d = $("#mcompany").val();
  console.log("====================================");
  console.log("working!!");
  console.log("====================================");
  if (a != "" && b != "" && c != "" && d != "") {
    setTimeout(function () {
      $("#mname").val();
      $("#memail").val();
      $("#mmobile").val();
      $("#mcompany").val();

      window.location.href = "../thankyou.html";
    }, 1000);
  } else {
    alert("Please Fill all the details");
  }
}
*/
