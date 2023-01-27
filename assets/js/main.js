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
    let steuerVariable1
    let steuerVariable2
    let steuerVariable3
    let steuerVariable4
    let steuerVariable5
    let steuerVariable6
    let steuerVariable7
    splittingtarif.checked ? einkommen = Number(einkommenInput.value) / 2 : einkommen = Number(einkommenInput.value)
    console.log(einkommen);


    zweitausenzwanzig.checked ? (steuerVariable1 = 972.87,steuerVariable2 = 1400,steuerVariable3 = 212.02,steuerVariable4 = 2397,steuerVariable5 = 972.79,steuerVariable6 = 8963.74,steuerVariable7 = 17078.74,freiBetrag = 9408,steuerGrenze1 = 14532, steuerGrenze2 = 57051, steuerGrenze3 = 270500) : zweitausendeinundzwanzig.checked ? (steuerVariable1 = 995.21,steuerVariable2 = 1400,steuerVariable3 = 208.85,steuerVariable4 = 2397,steuerVariable5 = 950.96,steuerVariable6 = 9136.63,steuerVariable7 = 17374.99,freiBetrag = 9744, steuerGrenze1 = 14753, steuerGrenze2 = 57918, steuerGrenze3 = 274612) : (steuerVariable1 = 1088.67,steuerVariable2 = 1400,steuerVariable3 = 206.43,steuerVariable4 = 2397,steuerVariable5 = 869.32,steuerVariable6 = 9336.45,steuerVariable7 = 17671.20, freiBetrag = 10347, steuerGrenze1 = 14926, steuerGrenze2 = 58596, steuerGrenze3 = 277825)
    
    if(einkommen <= freiBetrag){
        return einkommenssteuer = 0
    }
    else if(einkommen > freiBetrag && einkommen <= steuerGrenze1){
        let y = (einkommen - freiBetrag) / 10000;
        einkommenssteuer =  (steuerVariable1 * y + steuerVariable2) * y;
        return Number(einkommenssteuer.toFixed(2));
    }
    else if(einkommen > steuerGrenze1 && einkommen <= steuerGrenze2){
        let z = (einkommen - steuerGrenze1) / 10000;
        einkommenssteuer = (steuerVariable3 * z + 2397) * z + steuerVariable4
        return Number(einkommenssteuer.toFixed(2));
    }
    else if(einkommen > steuerGrenze2 && einkommen <= steuerGrenze3){
        
    }
}
