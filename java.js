function showCode() {
  const codeInput = document.getElementById('codeInput');
  const codeDisplay = document.getElementById('codeDisplay');
  
  // Clear previous content
  codeDisplay.innerHTML = '';
  
  // Create an iframe to display the code
  const iframe = document.createElement('iframe');
  iframe.style.width = '100%';
  iframe.style.height = '500px';
  iframe.style.border = 'none';
  
  // Set the srcdoc attribute to the input code
  iframe.srcdoc = codeInput.value;
  
  // Append the iframe to the code display div
  codeDisplay.appendChild(iframe);
}
