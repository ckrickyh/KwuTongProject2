/* auth.js – if user sneaks in without Google token, kick back to login */
(function(){
  const token = sessionStorage.getItem('g_token');
  if (!token) {
    location.replace('/');
    return;
  }
  // Optional: you could decode the JWT and show user name in corner
  const payload = JSON.parse(atob(token.split('.')[1]));
  console.log('Logged in as:', payload.name);
})();