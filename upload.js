document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const messageDiv = document.getElementById('message');

    if (!file) {
        messageDiv.textContent = 'Please select a file';
        return;
    }

    const reader = new FileReader();
    reader.onload = async function (event) {
        const content = btoa(event.target.result); // Base64 encode the file content

        const fileName = file.name;
        const githubToken = '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';
        const repoOwner = 'Harshil-Anuwadia';
        const repoName = 'Cloud';
        const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${fileName}`;

        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${githubToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Upload ${fileName}`,
                content: content,
                branch: 'main'
            })
        });

        if (response.ok) {
            messageDiv.style.color = '#28a745';
            messageDiv.textContent = 'File uploaded successfully';
        } else {
            const errorData = await response.json();
            console.error('Error uploading file:', errorData);
            messageDiv.style.color = '#d9534f';
            messageDiv.textContent = 'Error uploading file: ' + errorData.message;
        }
    };

    reader.readAsBinaryString(file);
});