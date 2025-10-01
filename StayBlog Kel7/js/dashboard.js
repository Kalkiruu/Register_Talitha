(function checkAuth() {
  if(!localStorage.getItem("currentUser")) {
    window.location.replace("index.html")
  }
})

window.addEventListener("DOMContentLoaded", () => {
    const currentUserJSON = localStorage.getItem("currentUser");

    if (currentUserJSON) {
        const currentUser = JSON.parse(currentUserJSON);
        
        document.getElementById("welcome").textContent = "Welcome back, " + currentUser.nama + ".";
        document.getElementById("createpostname").textContent = currentUser.nama;
    } else {
        document.getElementById("welcome").textContent = "Welcome back.";
    }
});
const createpost = document.getElementById("createpost");
const appear = document.getElementById("openbutton");
const disappear = document.getElementById("exit");
const notification = document.getElementById('notification');

appear.addEventListener("click", () => {
  createpost.classList.add("active");
});
disappear.addEventListener("click", () => {
  createpost.classList.remove("active");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    createpost.classList.remove("active");
  }
});

// --------------------------------------------------------------------------------CREATE POST JS ----------------------------------------// 
document.getElementById('newpost').addEventListener('submit', function(e) {
  e.preventDefault();

  const currentUserJSON = localStorage.getItem('currentUser');
  const currentUser = JSON.parse(currentUserJSON)

  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('textbody').value.trim();
  if (!title) {
    notification.textContent = "Title cannot be empty.";
    notification.style.color = "red";
    return;
  }

  const addPost = {
    id: Date.now(),
    author: currentUser.nama,
    title: title,
    content: content,
    timestamp: new Date().toLocaleString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    })
  }

  const postsJSON = localStorage.getItem('posts');
  let posts = postsJSON ? JSON.parse(postsJSON) : [];
  
  posts.push(addPost)
  
  localStorage.setItem('posts', JSON.stringify(posts))
  this.reset()

  createPostCard(addPost);
  createpost.classList.remove("active");
  }
)

// ------------------------------------------------------------------------------------LOG OUT------------------------------------------------//
document.getElementById("logoutButton").addEventListener("click", function(e) {
  e.preventDefault();

  localStorage.removeItem('currentUser');
  window.location.replace("index.html");
})