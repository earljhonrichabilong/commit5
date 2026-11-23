function calculateOxygenationIndex(meanAirwayPressure, fiO2, paO2MmHg) {
    if (paO2MmHg <= 0) throw new Error("PaO2 must be greater than zero.");
    const oi = (meanAirwayPressure * fiO2 * 100) / paO2MmHg;
    return Number(oi.toFixed(2));
}