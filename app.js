const apiUrl = 'http://localhost:3000/api';

document.getElementById('post-button').addEventListener('click', () => {
    const content = document.getElementById('post-content').value;
    fetch(`${apiUrl}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
    })
    .then(response => response.json())
    .then(data => {
        loadPosts();
        document.getElementById('post-content').value = '';
    });
});

function loadPosts() {
    fetch(`${apiUrl}/posts`)
    .then(response => response.json())
    .then(data => {
        const postList = document.getElementById('post-list');
        postList.innerHTML = '';
        data.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `<p>${post.content}</p><small>Likes: ${post.likes}</small>`;
            postList.appendChild(postDiv);
        });
    });
}

loadPosts();
