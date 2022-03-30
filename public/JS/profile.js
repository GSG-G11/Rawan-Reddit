/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const createProfile = (user) => {
const profileimage = document.querySelector('.profileimage')
const img = document.createElement('img')
img.src =user.user_url_img
profileimage.appendChild(img)
};

{/* <div class="box">
<div class="post">
<div class="user_data">
  <div class="image">
    <img src="../img/img.jpg" />
  </div>
  <div class="username">Rawan Eyad</div>
</div>
<div class="post_data">
  <div class="post_title">Title</div>
  <p>
    Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit.
    Ratione disuja doloremque reiciendi nemo.
  </p>
  <div class="comment">
    <input
      id="inputComment"
      type="text"
      placeholder="Comment"
      required
    />
    <button class="btnComment">Comment</button>
  </div>
</div>
</div>
<hr>
<div class="comments">
<h2>Comments</h2>
<div class="postComment">
  <div class="username">Rawan Eyad</div>
  <p>
    Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit.
    Ratione disuja doloremque reiciendi nemo.
  </p>
</div>
</div>
</div> */}

const addProfile = (userId) =>
  fetch(`/profile/${userId}/show`)
    .then((response) => response.json())
    .then(([user,posts]) => {
      
      createProfile(user)
      posts.forEach((postDATA) => {
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
      });
    });
  //   [
  //     [
  //         {
  //             "username": "Rawan",
  //             "user_url_img": "../img/img.jpg",
  //             "email": "rawaneyad@gmail.com"
  //         }
  //     ],
  //     [
  //         {
  //             "id": 6,
  //             "title": "Title",
  //             "description": "Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.",
  //             "username": "Rawan",
  //             "user_url_img": "../img/img.jpg"
  //         },
  //         {
  //             "id": 7,
  //             "title": "rtrrffffffffffv",
  //             "description": "Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.",
  //             "username": "Rawan",
  //             "user_url_img": "../img/img.jpg"
  //         }
  //     ]
  // ]