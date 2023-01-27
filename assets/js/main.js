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


let steuerGrenze1
let steuerGrenze2
let steuerGrenze3


const calculate = () =>{
    let einkommen
    let freiBetrag
    let einkommenssteuer
    splittingtarif.checked ? einkommen = Number(einkommenInput.value) / 2 : einkommen = Number(einkommenInput.value)
    console.log(einkommen);

    zweitausenzwanzig.checked ? (freiBetrag = 9408,steuerGrenze1 = 14532, steuerGrenze2 = 57051, steuerGrenze3 = 270500) : zweitausendeinundzwanzig.checked ? (freiBetrag = 9744, steuerGrenze1 = 14753, steuerGrenze2 = 57918, steuerGrenze3 = 274612) : (freiBetrag = 10347, steuerGrenze1 = 14926, steuerGrenze2 = 58596, steuerGrenze3 = 277825)

    if(einkommen <= freiBetrag){
        return einkommenssteuer = 0
    }
    else if(einkommen > freiBetrag && einkommen <= steuerGrenze1){
        let y = (einkommen - freiBetrag) / 10000
        einkommenssteuer = 
    }
}
