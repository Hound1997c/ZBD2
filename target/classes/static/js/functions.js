
function findFunction() {
    // Declare variables
    //alert("xddd");
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function findFunction2() {
    // Declare variables
    //alert("xddd");
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td2 = tr[i].getElementsByTagName("td")[2];
        table2 = td2.getElementsByTagName("table");
        tr2 = table2.getElementsByTagName("tr");
        for(j=0;j<tr2.length;j++){
            td3 = tr2[j].getElementsByTagName("td");
            if (td3) {
                txtValue = td3.textContent || td3.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr2[i].style.display = "";
                } else {
                    tr2[i].style.display = "none";
                }
            }
        }

    }
}
