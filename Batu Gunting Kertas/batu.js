function getPilihanKomputer() {
    const pilihanKomputer = Math.random();
    if (pilihanKomputer < 0.34) return 'gunting';
    if (pilihanKomputer < 0.67) return 'batu';
    return 'kertas';
  }
  
  
  function getHasil(pilihanPlayer, pilihanKomputer) {
    if (pilihanPlayer === pilihanKomputer) return 'SERI';
    if (
      (pilihanPlayer === 'gunting' && pilihanKomputer === 'kertas') ||
      (pilihanPlayer === 'batu' && pilihanKomputer === 'gunting') ||
      (pilihanPlayer === 'kertas' && pilihanKomputer === 'batu')
    ) {
      return 'KAMU MENANG';
    } else {
      return 'KAMU KALAH';
    }
  }
  
  
  const pilihanPlayer = prompt('Pilih: gunting, batu, atau kertas').toLowerCase();
  
  
  const pilihanKomputer = getPilihanKomputer();
  
  
  const hasil = getHasil(pilihanPlayer, pilihanKomputer);

  alert(`Kamu memilih ${pilihanPlayer}\nKomputer memilih ${pilihanKomputer}\nHasil: ${hasil}`);