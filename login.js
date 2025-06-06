document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const loginMsg = document.getElementById('loginMsg');

  // Dummy credentials for demo
  const dummyUser = 'user123';
  const dummyPass = 'pass123';

  if (username === '' || password === '') {
    loginMsg.textContent = 'Please fill in both username and password.';
    loginMsg.style.color = 'red';
  } else if (username === dummyUser && password === dummyPass) {
    loginMsg.textContent = 'Login successful! Welcome back.';
    loginMsg.style.color = 'green';

    // Optionally, redirect to homepage or user dashboard after delay
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  } else {
    loginMsg.textContent = 'Invalid username or password.';
    loginMsg.style.color = 'red';
  }
});
