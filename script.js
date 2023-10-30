function previewContent() {
    const url = document.getElementById('url-input').value;
    const contentType = document.getElementById('content-type').value;
    const contentViewer = document.getElementById('content-viewer');
    // Clear previous content
    contentViewer.innerHTML = '';

    if (url) {
        if (contentType === 'image') {
            const img = new Image();
            img.src = url;
            img.style.border = '1px solid #00ff00';
            contentViewer.appendChild(img);
        } else if (contentType === 'html' || contentType === 'svg') {
            const iframe = document.createElement('iframe');
            iframe.srcdoc = encodeURIComponent(url);
            iframe.width = '800';
            iframe.height = '600';
            iframe.style.border = '1px solid #00ff00';
            contentViewer.appendChild(iframe);
        } else if (contentType === 'p5') {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.innerHTML = url;
            contentViewer.appendChild(script);
        }
    }
}
