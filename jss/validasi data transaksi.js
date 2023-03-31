function cekform() {
    namabuku = document.getElementById("nama buku");
    idbuku = document.getElementById("id buku");
    if (namabuku.value == "") {
      alert("id kosong");
      idbuku.focus();
      return false;
    } else if (idbuku.value == "") {
        alert("id buku kosong");
        idbuku.focus();
        return false;

    } else {
      alert("Terima Kasih!!")
      return true;
    }
  }