function cekform() {
    namabuku = document.getElementById("nama buku");
    idbuku = document.getElementById("id buku");
    
    if (namabuku.value == "") {
      alert("nama buku tidak ditemukan");
      namabuku.focus();
      return false;
    } else if (idbuku.value == "") {
      alert("data id buku tidak ditemukan");
      idbuku.focus();
      return false;
    } else {
      alert("Data Tersimpan")
      return true;
    }
  }