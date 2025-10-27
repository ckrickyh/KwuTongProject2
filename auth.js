/* auth.js – if user sneaks in without Google token, kick back to login */
(function(){
  // Retrieve the Google token from session storage
  const token = sessionStorage.getItem('g_token');
  
  // Check if the token exists
  if (!token) {
    location.replace('/'); // Redirect to login if no token
    return;
  }
  
  // Decode the JWT to extract user information
  const payload = JSON.parse(atob(token.split('.')[1]));
  
  // List of allowed email addresses
  const allowedEmails = [
    'ckricky.h@gmail.com', // Replace with actual allowed email
    'ricky.colabpython@gmail.com' // Replace with actual allowed email
  ];

  // Check if the logged-in user's email is in the allowed list
  if (!allowedEmails.includes(payload.email)) {
    console.log('Access Denied: Your account is not authorized.');
    location.replace('/'); // Redirect to login if not authorized
  } else {
    console.log('Logged in as:', payload.name); // Display user name in console
  }
})();