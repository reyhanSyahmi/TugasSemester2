function cekform() {
    nama = document.getElementById("nama");
    idanggota = document.getElementById("id")
    if (nama.value == "") {
      alert("nama tidak ada gblg");
      nama.focus();
      return false;
    } else if (idanggota.value == "") {
      alert("id anggota tidak ditemukan");
      idanggota.focus();
      return false;
    } else {
      alert("Data Tersimpan");
      return true;
    }
  }