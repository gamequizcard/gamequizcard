// Daftar soal dan jawaban berdasarkan kode
const daftarSoal = {
    "H0" : "5",
    "H1" : "7",
    "H2" : "10",
    "H3" : "4",
    "H4" : "5",
    "H5" : "18",
    "H6" : "2",
    "H7" : "12",
    "H8" : "3",
    "H9" : "32",
    "H10": "10",
    "H11": "6",
    "H12": "40",
    "H13": "20",
    "H14": "4",
    "H15": "-18",
    "H16": "4",
    "H17": "5",
    "H18": "17",
    "B0" : "7",
    "B1" : "12000",
    "B2" : "20000",
    "B3" : "14",
    "B4" : "5000",
    "B5" : "20",
    "B6" : "13",
    "B7" : "-8",
    "B8" : "8/3",
    "B9" : "4",
    "B10": "52/9",
    "B11": "10",
    "B12": "12",
    "B13": "9",
    "B14": "15",
    "B15": "-3",
    "B16": "15/2",
    "B17": "4/11",
    "B18": "5",
    "K0" : "1",
    "K1" : "70",
    "K2" : "10",
    "K3" : "96",
    "K4" : "19",
    "K5" : "95",
    "K6" : "21/2",
    "K7" : "21",
    "K8" : "13 dan 18",
    "K9" : "12 dan 24",
    "K10": "4 dan 16",
    "K11": "7",
    "K12": "20 dan 60",
    "K13": "15",
    "K14": "20",
    "K15": "1",
    "K16": "10",
    "K17": "15 dan 32",
    "K18": "60",
    "M0" : "30",
    "M1" : "8",
    "M2" : "4",
    "M3" : "11",
    "M4" : "25",
    "M5" : "29",
    "M6" : "76",
    "M7" : "6000",
    "M8" : "15",
    "M9" : "tidak ada solusi",
    "M10": "-3",
    "M11": "40",
    "M12": "26",
    "M13": "20-6=38",
    "M14": "30",
    "M15": "1/7",
    "M16": "80",
    "M17": "10 dan 40",
    "M18": "10286"
  };
  
  function cekJawaban() {
    const kode = document.getElementById("kode").value.trim().toUpperCase();
    const jawaban = document.getElementById("jawaban").value.trim();
    const hasil = document.getElementById("hasil");
    const audioBenar = document.getElementById("audioBenar");
    const audioSalah = document.getElementById("audioSalah");
  
    if (daftarSoal[kode]) {
      if (jawaban === daftarSoal[kode]) {
        hasil.textContent = "Jawaban Benar!";
        hasil.style.color = "green";
        audioBenar.play();
      } else {
        hasil.textContent = "Jawaban Salah!";
        hasil.style.color = "red";
        audioSalah.play();
      }
    } else {
      hasil.textContent = "Kode soal tidak ditemukan.";
      hasil.style.color = "orange";
    }
  }