/* eslint-disable no-unused-vars */

const users = document.querySelector('.users');
const posts = document.querySelector('.posts');
// add to database
const addComment= (id,inputComment)=> fetch(`/posts/${id}/comments`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  redirect: 'follow',
  body: JSON.stringify({
    description: inputComment,
  }),
});

const createUser = (userDATA) => {
  console.log(userDATA);
  const user = document.createElement('div');
  user.className = 'user';

  const image = document.createElement('div');
  image.className = 'image';

  const img = document.createElement('img');
  img.src = userDATA.user_url_img;

  const username = document.createElement('h3');
  username.className = 'username';
  username.textContent = userDATA.username;
  username.onclick=()=>{
    addProfile(userDATA.id)
    // window.location.assign('/')
  }
  image.appendChild(img);

  user.appendChild(image);
  user.appendChild(username);

  users.appendChild(user);
};

const createPost = (postDATA) => {
  const box = document.createElement('div');
  box.className = 'box';

  const post = document.createElement('div');
  post.className = 'post';

  const user_data = document.createElement('div');
  user_data.className = 'user_data';

  const image = document.createElement('div');
  image.className = 'image';

  const img = document.createElement('img');
  img.src = postDATA.user_url_img;

  const username = document.createElement('div');
  username.className = 'username';
  username.textContent = postDATA.username;

  const post_data = document.createElement('div');
  post_data.className = 'post_data';

  const post_title = document.createElement('div');
  post_title.className = 'post_title';
  post_title.textContent = postDATA.title;

  const post_description = document.createElement('p');
  post_description.textContent = postDATA.description;

  const comment = document.createElement('div');
  comment.className = 'comment';

  const inputComment = document.createElement('input');
  inputComment.id = 'inputComment';
  inputComment.placeholder = 'Comment';

  const btnComment = document.createElement('button');
  btnComment.className = 'btnComment';
  btnComment.textContent = 'Comment';

  btnComment.onclick=()=>{
    addComment(postDATA.id,inputComment.value)
    window.location.assign('/')
  }

  const hr = document.createElement('hr');
  
  const comments = document.createElement('div');
  comments.className = 'comments';
  comments.id = postDATA.id;

  const CommentsText = document.createElement('h2');
  CommentsText.textContent = 'Comments';

  image.appendChild(img);

  user_data.appendChild(image);
  user_data.appendChild(username);

  comment.appendChild(inputComment);
  comment.appendChild(btnComment);

  post_data.appendChild(post_title);
  post_data.appendChild(post_description);
  post_data.appendChild(comment);

  post.appendChild(user_data);
  post.appendChild(post_data);

  comments.appendChild(CommentsText)

  box.appendChild(post);
  box.appendChild(hr)
  box.appendChild(comments)

  posts.appendChild(box);
};

// const createComment = (commentData,id) => {

// }
