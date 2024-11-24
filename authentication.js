function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const defaultUsername = 'admin';
    const defaultPassword = 'password';
  
    if (username === defaultUsername && password === defaultPassword) {
      localStorage.setItem('username', username);
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }

  function displayName() {

    const welcome = document.writeln(defaultUsername);
  }
  