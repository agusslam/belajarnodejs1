// array = [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ]

// function loopA (a,b,c){
//     if( (c + (b.length) + a) != 25){
//         for(let i=0 ; i<b.length ; i++){
//             console.log(b[i])
//         }
//     }else {
//         console.log(false)
//     }
// }

// loopA (5,array,3)


//Import Modules
const Rumus = require('./Modules/Rumus')

console.log(Rumus)

console.log('Luas Persegi = '+ Rumus.LuasPersegi(2,2))
console.log('Keliling Persegi = '+ Rumus.KelPersegi(2))
console.log('Luas Segitiga = '+ Rumus.LuasSegitiga(2,3))
console.log('Keliling Segitiga = '+ Rumus.KelSegitiga(2,3,4))
console.log('Luas PersegiPanjang = '+ Rumus.LuasPersegiPanjang(2,3))
console.log('Keliling PersegiPanjang = '+ Rumus.KelPersegiPanjang(2,3))
console.log('Luas Jajar Genjang = '+ Rumus.LuasJajargenjang(2,3))
console.log('Keliling Jajar Genjang = '+ Rumus.KelJajargenjang(2,3,4,5))
console.log('Luas Belah Ketupat = '+ Rumus.LuasBelahketupat(2,3))
console.log('Keliling Belah Ketupat = '+ Rumus.KelBelahketupat(2,3,4,5))
console.log('Luas Trapesium = '+ Rumus.LuasTrapesium(2,3,4))
console.log('Keliling Trapesium = '+ Rumus.KelTrapesium(2,3,4,5))
console.log('Luas Layang-layang = '+ Rumus.LuasLayanglayang(2,3))
console.log('Keliling Layang-layang = '+ Rumus.KelLayanglayang(2,3,4,5))
console.log('Luas Lingkaran = '+ Rumus.LuasLingkaran(2))
console.log('Keliling Lingkaran = '+ Rumus.KelLingkaran(2))