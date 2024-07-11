document.addEventListener('DOMContentLoaded', function() {
            var defaultUsername = "123";
            var defaultPassword = "123";

            var usernameInput = document.getElementById('username');
            var passwordInput = document.getElementById('password');

            if (usernameInput && passwordInput) {
                usernameInput.value = sessionStorage.getItem("username") || defaultUsername;
                passwordInput.value = sessionStorage.getItem("password") || defaultPassword;
            }

            document.getElementById('loginForm').addEventListener('submit', function(event) {
                event.preventDefault();
                var username = usernameInput.value;
                var password = passwordInput.value;
                if (username === "123" && password === "123") {
                    sessionStorage.setItem("username", username);
                    sessionStorage.setItem("password", password);
                    alert("Login successful!");
                    window.location.href = "home.html"; 
                } else {
                    alert("Invalid username or password.");
                }
            });
        });

document.addEventListener("DOMContentLoaded", function() {
            const purchaseButtons = document.querySelectorAll(".purchase-btn");
        
            purchaseButtons.forEach(button => {
                button.addEventListener("click", function() {
                    alert_click();
                });
            });
        
            function alert_click() {
                alert("Transaction Complete.");
            }
        });