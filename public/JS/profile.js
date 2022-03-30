

const id = window.location.href.split('/')[4];
const profileimage = document.querySelector('.profileimage')
const profileUser = document.querySelector('.profileUser')
  fetch(`/profile/${id}/show`)
    .then((response) => response.json())
    .then(([user,posts]) => {
      const posts2 = document.querySelector('.posts');
      const img2 = document.createElement('img')
      img2.src =user[0].user_url_img
      const profileUsername = document.createElement('h3')
      profileUsername.className= 'profileUsername'
      profileUsername.textContent = user[0].username

      const profileEmail = document.createElement('h3')
      profileEmail.className= 'profileEmail'
      profileEmail.textContent = user[0].email

      profileUser.appendChild(profileUsername)
      profileUser.appendChild(profileEmail)
      profileimage.appendChild(img2)

      // window.location.assign('/profile')
      // createProfile(user)
    
      posts.forEach((postDATA) => {
        // console.log(postDATA);
      // createPost(postDATA)
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
    
      // btnComment.onclick=()=>{
      //   addComment(postDATA.id,inputComment.value)
      //   window.location.assign('/')
      // }
    
    
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
    
      // post_data.appendChild(deletePostBtn)
      post_data.appendChild(post_title);
      post_data.appendChild(post_description);
      post_data.appendChild(comment);
    
      post.appendChild(user_data);
      post.appendChild(post_data);
    
      comments.appendChild(CommentsText)
    
      box.appendChild(post);
      box.appendChild(hr)
      box.appendChild(comments)
    
      posts2.appendChild(box);

    });
  })