const LuasSegitiga = (a,t) => {
    return a*t*0.5
}

const KelSegitiga = (a,b,c) => {
    return a+b+c
}

const LuasPersegi = (a,b) => {
    return a*b
}

const KelPersegi = (s) => {
    return 4*s
}

const LuasPersegiPanjang = (a,b) => {
    return a*b
}

const KelPersegiPanjang = (p,l) => {
    return (2*p) + (2*l)
}

const LuasJajargenjang = (a,t) => {
    return a*t
}

const KelJajargenjang = (a,b,c,d) => {
    return a+b+c+d
}

const LuasBelahketupat = (d1,d2) => {
    return d1*d2/2
}

const KelBelahketupat = (a,b,c,d) => {
    return a+b+c+d
}

const LuasLayanglayang = (d1,d2) => {
    return d1*d2/2
}

const KelLayanglayang = (a,b,c,d) => {
    return a+b+c+d
}

const LuasTrapesium = (a,b,t) => {
    return (a+b)/2*t
}

const KelTrapesium = (a,b,c,d) => {
    return a+b+c+d
}

const LuasLingkaran = (r) => {
    return 3.14*r*r
}

const KelLingkaran = (r) => {
    return 2*3.14*r
}

//Export Modules
exports.LuasPersegi = LuasPersegi
exports.KelPersegi = KelPersegi
exports.LuasSegitiga = LuasSegitiga
exports.KelSegitiga = KelSegitiga
exports.LuasPersegiPanjang = LuasPersegiPanjang
exports.KelPersegiPanjang = KelPersegiPanjang
exports.LuasJajargenjang = LuasJajargenjang
exports.KelJajargenjang = KelJajargenjang
exports.LuasBelahketupat = LuasBelahketupat
exports.KelBelahketupat = KelBelahketupat
exports.LuasTrapesium =LuasTrapesium
exports.KelTrapesium = KelTrapesium
exports.LuasLayanglayang = LuasLayanglayang
exports.KelLayanglayang = KelLayanglayang
exports.LuasLingkaran = LuasLingkaran
exports.KelLingkaran = KelLingkaran



