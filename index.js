setInterval(() => {
  const hariIni = new Date();
  const jam = hariIni.getHours();
  const menit = hariIni.getMinutes();
  const detik = hariIni.getSeconds();

  const formatedDate = (j, m, d) => {
    if (j < 10) {
      j = `0${j}`;
    }
    if (m < 10) {
      m = `0${m}`;
    }
    if (d < 10) {
      d = `0${d}`;
    }

    return `${j} : ${m} : ${d}`;
  };

  const elementJam = document.getElementById("clock");
  elementJam.textContent = formatedDate(jam, menit, detik);
}, 1000);

const year = new Date().getFullYear();

const elementTahun = document.getElementById("year");
elementTahun.textContent = year;
