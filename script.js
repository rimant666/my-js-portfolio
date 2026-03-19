function prettify() {
    const input = document.getElementById('jsonInput').value;
    const output = document.getElementById('jsonOutput');
    try {
        const obj = JSON.parse(input);
        output.innerText = JSON.stringify(obj, null, 4);
        output.style.display = "block";
    } catch (e) { 
        alert("Invalid JSON! Please check your syntax."); 
    }
}

// PX to REM Converter Logic
function convert() {
    const px = document.getElementById('pxInput').value;
    const rem = px / 16;
    document.getElementById('remResult').innerText = rem + "rem (based on 16px root)";
}
