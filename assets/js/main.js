// Convert Dollar To L.E
function D_TO_LE() {
  var dollar = document.getElementById("dollar").value;
  var result = document.getElementById("result");
  /*
  result.value = dollar * 50.84 + ' L.E';
  return false;
  */
  if (dollar == "") {
    result.value = "Please Enter Date."
    return false;
  } else if (dollar < 0) {
    result.value = "Please Enter Positive Number."
    return false;
  } else if (dollar == 0) {
    result.value = "Please Enter A Number Instead Of The Zero."
    return false;
  } else if (isNaN(dollar)) {
    result.value = "Please  Enter A Number Instead Of Text."
    return false;
  } else {
    result.value = dollar * 50.58 + ' L.E'
    return false;
  }
    
}


// Convert L.E To Dollar
function LE_TO_D() {
  var dollar = document.getElementById("dollar");
  var result = document.getElementById("result").value;

  if (result == "") {
    dollar.value = "Please Enter Date."
    return false;
  } else if (result < 0) {
    dollar.value = "Please Enter Positive Number."
    return false;
  } else if (result == 0) {
    dollar.value = "Please Enter A Number Instead Of The Zero."
    return false;
  } else if (isNaN(result)) {
    dollar.value = "Please  Enter A Number Instead Of Text."
    return false;
  } else {
    dollar.value = result / 50.84 + ' $';
    return false;
  }
}
