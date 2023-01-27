/* ============ input ================ */
/* tarif */
const grundtarif = document.getElementById("grundtarif")
const splittingtarif = document.getElementById("splittingtarif")
/* steuerjahr */
const zweitausenzwanzig = document.getElementById("zweitausenzwanzig")
const zweitausendeinundzwanzig = document.getElementById("zweitausendeinundzwanzig")
const zweitausendzweiundzwanzig = document.getElementById("zweitausendzweiundzwanzig")
/* einkommen */
const einkommenInput = document.getElementById("einkommenInput")
/* submit */
const button = document.getElementById("button")
/* ========== output ====================== */
const output = document.getElementById("output")


/* ============ variables global ============ */
const freiBetrag2020 = 9408
const freiBetrag2021 = 9744
const freiBetrag2022 = 10347

let steuerGrenze1
let steuerGrenze2
let steuerGrenze3
let steuerGrenze4

const calculate = () =>{
    let einkommen
    splittingtarif.checked ? einkommen = Number(einkommenInput.value) / 2 : einkommen = Number(einkommenInput.value)
    console.log(einkommen);

    zweitausenzwanzig.checked ? 
}

