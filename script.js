//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value);
    const outputDiv = document.getElementById("output");
    
    if (!text) {
        outputDiv.textContent = "Please enter a message.";
        return;
    }
    
    if (isNaN(delay) || delay < 0) {
        outputDiv.textContent = "Please enter a valid delay time in milliseconds.";
        return;
    }
    
    outputDiv.textContent = "Waiting...";
    
    await new Promise(resolve => setTimeout(resolve, delay));
    
    outputDiv.textContent = text;
});