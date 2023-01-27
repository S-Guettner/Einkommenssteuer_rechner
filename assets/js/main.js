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
let output = document.getElementById("output")
let changepP = document.getElementById("changepP")

/* ============ variables global ============ */
let freiBetrag
let steuerGrenze1
let steuerGrenze2
let steuerGrenze3
let steuerVariable1
let steuerVariable2
let steuerVariable3
let steuerVariable4
let steuerVariable5
let steuerVariable6
let steuerVariable7
let einkommen
let einkommenssteuer

/* fügt bei splittingtarif pro Person hinzu */
grundtarif.addEventListener('change', () =>{
    changepP.style.display="none";
})
splittingtarif.addEventListener('change', () =>{
    changepP.style.display="block"
})

const calculate = () =>{
/* ================ prüft tarif ==================*/
    splittingtarif.checked ? einkommen = ((Number(einkommenInput.value) / 2) ) : einkommen = Number(einkommenInput.value)

/* ================= prüft steuerjahr und weist variablen werte hinzu ===========*/
    /* 2020 */
    zweitausenzwanzig.checked ? (steuerVariable1 = 972.87,steuerVariable2 = 1400,steuerVariable3 = 212.02,steuerVariable4 = 2397,steuerVariable5 = 972.79,steuerVariable6 = 8963.74,steuerVariable7 = 17078.74,freiBetrag = 9408,steuerGrenze1 = 14532, steuerGrenze2 = 57051, steuerGrenze3 = 270500)
    /* 2021 */
    : zweitausendeinundzwanzig.checked ? (steuerVariable1 = 995.21,steuerVariable2 = 1400,steuerVariable3 = 208.85,steuerVariable4 = 2397,steuerVariable5 = 950.96,steuerVariable6 = 9136.63,steuerVariable7 = 17374.99,freiBetrag = 9744, steuerGrenze1 = 14753, steuerGrenze2 = 57918, steuerGrenze3 = 274612)
    /* 2022 */
    : (steuerVariable1 = 1088.67,steuerVariable2 = 1400,steuerVariable3 = 206.43,steuerVariable4 = 2397,steuerVariable5 = 869.32,steuerVariable6 = 9336.45,steuerVariable7 = 17671.20, freiBetrag = 10347, steuerGrenze1 = 14926, steuerGrenze2 = 58596, steuerGrenze3 = 277825)

/*================ prüft steuergrenzen ======================*/
    if(einkommen <= freiBetrag){
        einkommenssteuer = 0
    }
    else if(einkommen > freiBetrag && einkommen <= steuerGrenze1){
        let y = (einkommen - freiBetrag) / 10000;
        einkommenssteuer =  ((steuerVariable1 * y + steuerVariable2) * y).toFixed(2);
    }
    else if(einkommen > steuerGrenze1 && einkommen <= steuerGrenze2){
        let z = (einkommen - steuerGrenze1) / 10000;
        einkommenssteuer = ((steuerVariable3 * z + steuerVariable4) * z + steuerVariable5).toFixed(2)
    }
    else if(einkommen > steuerGrenze2 && einkommen <= steuerGrenze3){
        einkommenssteuer = (0.42 * einkommen - steuerVariable6).toFixed(2)
    }
    else{
        einkommenssteuer = (0.45 * einkommen - steuerVariable7).toFixed(2)
    }

/* =============== output ================ */
    output.innerHTML = einkommenssteuer
}








