var gaji = 4500000;
var trasnport = 10000*24;
var infak = 50000;
var bpjs = 250000;
var potongan = gaji*2.5/100;
var totalpotongan = bpjs+infak+potongan;
var hasil = gaji-totalpotongan+trasnport
// menghitung
console.log('potongan Kotor '+gaji);
console.log('==============================');
console.log('potongan BPJS '+bpjs);
console.log('potongan INFAK '+infak);
console.log('potongan PAJAK 2,5% '+potongan);
console.log('==============================');
console.log('TOTAL POTONGAN '+totalpotongan);
console.log('==============================');
console.log('tunjangan Transport 10000');
console.log('TOTAL 24 hari berkerja');
console.log('==============================');
console.log('TOTAL TUNJANGAN '+trasnport);
console.log('==============================');
console.log('PERHITUNGAN GAJI :');
console.log('Gaji Kotor - Potongan + Tunjangan ' );
console.log('(4500000-412500) + 240000');
console.log('==============================');
console.log('Gaji Bersih : Rp.'+hasil);