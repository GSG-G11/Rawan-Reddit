/* eslint-disable no-unused-vars */
const logout=document.getElementById('logout')
const signup=document.getElementById('signup')
const login=document.getElementById('login')
const profile=document.getElementById('profile')

const showProfileLogout = () => {
  logout.style.display = 'inline-block';
  profile.style.display = 'inline-block';
  signup.style.display = 'none';
  login.style.display = 'none';
};
const hideProfileLogout = () => {
  logout.style.display = 'none';
  profile.style.display = 'none';
  signup.style.display = 'inline-block';
  login.style.display = 'inline-block';
};

