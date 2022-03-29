/* eslint-disable no-undef */
const save = document.getElementById('save');
const title = document.getElementById('title');
const description = document.getElementById('description');

// const saveComment = document.getElementsByClassName('btnComment')
// const inputComment = document.getElementById('inputComment')

fetch('/users')
  .then((response) => response.json())
  .then((userArr) => {
    userArr.forEach((e) => {
      createUser(e);
    });
  });

save.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify({
      title: title.value,
      description: description.value,
    }),
  }).then((response) => {
    if (response.redirected) {
      window.location.href = response.url;
    }
    return response;
  });
});

fetch('/post')
  .then((response) => response.json())
  .then((postArr) => {
    postArr.forEach((e) => {
      createPost(e);
    });
  });

  fetch(`/posts/comments`)
  .then((response) => response.json())
  .then((commentArr) => {
    // console.log(commentArr);
    commentArr.forEach((e) => {
      // createComment(e,id);
      const comments = document.getElementById(e.post_id)

      const postComment =document.createElement('div')
      postComment.className = 'postComment'

      const username =document.createElement('div')
      username.className = 'username'
      username.textContent = e.username;

      const description =document.createElement('p')
      description.textContent = e.description;

      postComment.append(username,description)
      comments.append(postComment)
    });
  });

// const logout=document.getElementById('logout')
// const signup=document.getElementById('signup')
// const login=document.getElementById('login')
// const profile=document.getElementById('profile')

// const showProfileLogout = () => {
//   logout.style.display = 'inline-block';
//   profile.style.display = 'inline-block';
//   signup.style.display = 'none';
//   login.style.display = 'none';
// };
// const hideProfileLogout = () => {
//   logout.style.display = 'none';
//   profile.style.display = 'none';
//   signup.style.display = 'inline-block';
//   login.style.display = 'inline-block';
// };
// const checkCookie = (data) => {
//   if (data.message === 'Unauthorized') hideProfileLogout();
//   else showProfileLogout();
// };
