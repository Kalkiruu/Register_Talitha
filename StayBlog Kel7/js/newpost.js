function createPostCard(postData) {
    const card = document.createElement('div');
    card.classList.add('blog-cardnew');
    
    const cardHTML = `
                    <div class="card-content">
                        <div class="userinfo">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="User Avatar" class="profilepic">   
                            <div class="userdate">
                                <h4>${postData.author}</h4>
                                <p class="post-metanew">${postData.timestamp}</p>
                            </div>
                        </div>
                        <h3 class="post-titlenew">${postData.title}</h3>
                        <p class="post-snippetnew">${postData.content}</p>
                    </div>
                    `;
        card.innerHTML = cardHTML;
        const postsGrid = document.getElementById('posts-grid');

        if (postsGrid.firstChild) {
            postsGrid.insertBefore(card, postsGrid.firstChild);
        }
        else {
            postGrid.appendChild(card);
        }
}

// =============================================================================================LOAD PAGE ambalabom=========================//

function loadAllPosts() {
    const postsJSON = localStorage.getItem("posts");
    
    if (postsJSON) {
        const posts = JSON.parse(postsJSON);
        
        // Loop through posts and create a card for each
        // Posts are displayed newest first (because createPostCard uses insertBefore)
        posts.slice().reverse().forEach(post => {
            createPostCard(post);
        });
    }
}

window.addEventListener("DOMContentLoaded", loadAllPosts);