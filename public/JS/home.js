/* eslint-disable no-undef */
const save = document.getElementById('save');
const title = document.getElementById('title');
const description = document.getElementById('description');

// const saveComment = document.getElementsByClassName('btnComment')
// const inputComment = document.getElementById('inputComment')

const deleteFunction = (id)=> fetch(`/delete/${id}`,{
  method:'DELETE',
  headers:{ 'Content-Type': 'application/json'},
  redirect: 'follow',
})

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
      // createComment(e);
      const comments = document.getElementById(e.post_id)

      const postComment =document.createElement('div')
      postComment.className = 'postComment'

      const username =document.createElement('div')
      username.className = 'username'
      username.textContent = e.username;

      const description =document.createElement('p')
      description.textContent = e.description;

      const deleteBtn = document.createElement('button');
      deleteBtn.className='Delete';
      deleteBtn.textContent='Delete';
      deleteBtn.onclick=()=>{
      deleteFunction(e.id)
      window.location.assign('/')
      }

      postComment.appendChild(username)
      postComment.appendChild(description)
      postComment.appendChild(deleteBtn)
      
      // postComment.append(username,description,deleteBtn)
      comments.appendChild(postComment)
    });
  });
