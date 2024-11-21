function calculate() {
    const presentation = parseFloat(document.getElementById('presentation').value);
    const volume = parseFloat(document.getElementById('volume').value);
    const ampoules = parseFloat(document.getElementById('ampoules').value || 1);
    const diluent = parseFloat(document.getElementById('diluent').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const rateMgKgH = parseFloat(document.getElementById('rateMgKgH').value || 0);
    const rateMgH = parseFloat(document.getElementById('rateMgH').value || 0);
    const rateMcgKgMin = parseFloat(document.getElementById('rateMcgKgMin').value || 0);

    // Cálculos
    const medicationAmount = presentation * volume * ampoules;
    const solutionVolume = volume * ampoules + diluent;
    const solutionConcentration = medicationAmount / solutionVolume;

    const mgKgHToMcgKgMin = rateMgKgH * (1000 / 60);
    const mcgKgMinToMgKgH = rateMcgKgMin * (60 / 1000);

    const infusionBicMlHRateMgKgH = rateMgKgH > 0 
        ? (rateMgKgH * weight * solutionVolume) / medicationAmount 
        : 0;

    const infusionBicMlHRateMgH = rateMgH > 0 
        ? (rateMgH * solutionVolume) / medicationAmount 
        : 0;

    // Exibindo resultados
    const results = `
        <h2>Resultados</h2>
        <p>Quantidade de medicação (mg): ${medicationAmount.toFixed(2)}</p>
        <p>Concentração da solução (mg/mL): ${solutionConcentration.toFixed(2)}</p>
        <p>Volume total da solução (mL): ${solutionVolume.toFixed(2)}</p>
        <p>Conversão mg/kg/h para mcg/kg/min: ${mgKgHToMcgKgMin.toFixed(2)}</p>
        <p>Conversão mcg/kg/min para mg/kg/h: ${mcgKgMinToMgKgH.toFixed(2)}</p>
        <p>Infusão em BIC (mL/h - taxa mg/kg/h): ${infusionBicMlHRateMgKgH.toFixed(2)}</p>
        <p>Infusão em BIC (mL/h - taxa mg/h): ${infusionBicMlHRateMgH.toFixed(2)}</p>
    `;
    document.getElementById('results').innerHTML = results;
}
