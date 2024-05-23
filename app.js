
        function ranPas() {
            var length = 8;
            var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+?><:{}[]";
            var password = "";
            for (var i = 0; i < length; ++i) {
                password += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            document.getElementById("password").value = password;
        }

        function copyPassword() {
            var passwordInput = document.getElementById("password");
            passwordInput.select();
            document.execCommand("copy");
            alert("Password copied");
        }