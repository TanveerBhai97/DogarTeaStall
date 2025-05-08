function togglePassword() {
    const pass = document.getElementById("password");
    const toggle = document.querySelector(".toggle-password");
    if (pass.type === "password") {
      pass.type = "text";
      toggle.textContent = "Hide";
    } else {
      pass.type = "password";
      toggle.textContent = "Show";
    }
  }

  function validateLogin() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorDiv = document.getElementById("error");

    if (!email || !password) {
      errorDiv.textContent = "Please fill in all fields.";
      return;
    }

    if (!email.includes("@") || email.length < 5) {
      errorDiv.textContent = "Enter a valid email address.";
      return;
    }

    if (password.length < 6) {
      errorDiv.textContent = "Password must be at least 6 characters.";
      return;
    }

    errorDiv.textContent = "";
    alert("WellCome Sir");
    window.location.href="homepage.html"
    // You can redirect or handle authentication here
  }
 function handleForgotPassword() {
   const choice = confirm("Forgot password?\n\nPress OK to go to Sign Up, or Cancel to go to Sign In.");
    if (choice) {
       //Redirect to Sign Up
     window.location.href = "page.html"; // Change to your actual sign-up page
    } else {
       //Redirect to Sign In
      window.location.href = "page.html"; // Change to your actual sign-in page
 }
  }
  
//reset
function resetPassword() {
  const email = document.getElementById('email').value;
  const oldPassword = document.getElementById('oldPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  const message = document.getElementById('message');

  // Simple validation
  if (!email || !oldPassword || !newPassword) {
    message.textContent = "Please fill all fields.";
    return;
  }

  if (newPassword.length < 6) {
    message.textContent = "New password must be at least 6 characters.";
    return;
  }

  // Here you would typically send a request to your backend
  // For example, using fetch():
  /*
  fetch('/api/reset-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, oldPassword, newPassword })
  }).then(response => {
    if (response.ok) {
      message.style.color = "green";
      message.textContent = "Password successfully changed.";
    } else {
      message.textContent = "Failed to reset password.";
    }
  });
  */

  // For demo:
  message.style.color = "green";
  message.textContent = "Password reset successfully (demo only).";
}
  //...
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    console.log('Search Input:', searchInput);

    // If the search input is empty, do nothing
    if (!searchInput) {
        return;
    }

    const sections = document.querySelectorAll('.apple, .lenovo, .dell, .hp, .microsoft');
    const sect = document.querySelectorAll('.shop, .sale-section, .new-product, .trending-product');
    let found = false;

    // Hide the sections with class names .sale-section, .new-product, and .trending-product
    sect.forEach(section => {
        section.style.display = 'none';
    });

    sections.forEach(section => {
        const cards = section.querySelectorAll('.card');
        let sectionFound = false;

        cards.forEach(card => {
            const productName = card.querySelector('.name h3').textContent.toLowerCase();
            console.log('Product Name:', productName);
            if (productName.includes(searchInput)) {
                card.style.display = 'block';
                sectionFound = true;
                found = true;
            } else {
                card.style.display = 'none';
            }
        });

        if (sectionFound) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    const noResultsMessage = document.getElementById('noResultsMessage');
    if (found) {
        noResultsMessage.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'block';
    }
});
// Toggle cart and wishlist visibility
document.getElementById('wishlist').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('cart').checked = false;
    }
});

document.getElementById('cart').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('wishlist').checked = false;
    }
});
