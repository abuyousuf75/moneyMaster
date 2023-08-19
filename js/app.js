function calculateMoney(){
    const getBlanceValue = document.getElementById('incomeField').value;
    const getTotalBlance = parseFloat(getBlanceValue);
    const setIncome = document.getElementById('blanceTotal').innerText= getTotalBlance;
    // total expance 

    const getfoodInput = document.getElementById('foodValu').value;
    const foodValue = parseFloat(getfoodInput);
    const getrentInput = document.getElementById('rentValue').value;
    const rentValue = parseFloat(getrentInput);
    const getclothInput = document.getElementById('clothValue').value;
    const clothValue =  parseFloat(getclothInput)
    const totalExpnace =  foodValue+rentValue+ clothValue;
    const setTotalExpance = document.getElementById('totalExpence').innerText= totalExpnace;
    // caslculate saving amound
    const savingElement = document.getElementById('saveInput').value;
    const savingValue = parseFloat(savingElement);
    const saving = setIncome*savingValue/100;
    const setSavingAmound = document.getElementById('savingAmound').innerText = saving;
    // remaing --> saving+expance - total 
    const totalReaming =setSavingAmound+setTotalExpance;
    const finalTotal = setIncome-totalReaming;
     document.getElementById('remaningAmound').innerText= finalTotal;


}