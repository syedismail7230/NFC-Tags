
document.getElementById('scanButton').addEventListener('click', function() {
    scanNFC(); // Call the scanNFC function from nfc.js to initiate NFC scanning
});

function processNFCData(nfcData) {

    fetch('/api/progressReport', {
        method: 'POST',
        body: JSON.stringify({ studentId: extractedStudentId }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        displayProgressReport(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function displayProgressReport(progressReport) {
    
}
