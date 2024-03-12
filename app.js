function check() {
  var a = parseInt(document.getElementById("n1").value);
  var b = parseInt(document.getElementById("n2").value);
  var c = parseInt(document.getElementById("n3").value);
  var d = parseInt(document.getElementById("n4").value);
  var e = parseInt(document.getElementById("n5").value);

  var total = a + b + c + d + e;
  var percent = (total * 100) / 500;

  document.getElementById("data1").innerHTML = "Total Marks = " + total;
  document.getElementById("data2").innerHTML = "Persenteage = " + percent + "%";

  if (percent >= 60) {
    document.getElementById("data3").innerHTML =
      "Congrats! you got first Division with" + percent + "%";
  } else if (percent >= 45) {
    document.getElementById("data3").innerHTML =
      "Congrats! you got second Division with" + percent + "%";
  } else if (percent >= 33) {
    document.getElementById("data3").innerHTML =
      "Congrats! you got third Division with " + percent + "%";
  } else {
    document.getElementById("data3").innerHTML =
      "Sorry you are fale with " + percent + "%";
  }
}

// function printsum() {
//   var student_name = document.getElementById("std").value;
//   var sindhi = parseInt(document.getElementById("sub1").value);
//   var english = parseInt(document.getElementById("sub2").value);
//   var maths = parseInt(document.getElementById("sub3").value);
//   var science = parseInt(document.getElementById("sub4").value);

//   if (sindhi > 100 || english > 100 || maths > 100 || science > 100) {
//     alert("Wrong Input");
//   } else if (
//     student_name == "" ||
//     sindhi == "" ||
//     english == "" ||
//     maths == "" ||
//     science == ""
//   ) {
//     alert("Please Enter value in every fields");
//   } else {
//     var total = 400;
//     var sum = sindhi + english + maths + science;
//     var Average = (sindhi + english + maths + science) / 4;
//     var percent = (sum * 100) / total;
//     alert(
//       student_name +
//         "Total marks is: " +
//         sum +
//         "& Average is: " +
//         Average +
//         " & Total percenteages is:  " +
//         percent
//     );
//   }
// }
