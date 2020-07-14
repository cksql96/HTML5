
    var id = new Array();
    var password = new Array();
    var count = 0;

    function SaveData() {

    var tp1 = document.getElementById("ID").value;
    var tp2 = document.getElementById("PASSWORDS").value;

    id[count] = tp1;
    password[count] = tp2;
    }

    function see() {
      document.write(id[count]);
      document.write("<br>")
      document.write(password[count]);
    }
