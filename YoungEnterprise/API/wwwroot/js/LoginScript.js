﻿//Test User:
//usr: mikkelljungberg@gmail.com
//pw: ls99cTO9
//dawdawdwa

$(document).ready(function () {
    alert('Page Loaded!');

    $('#loginButton').click(function () {
        alert('Login Button Clicked!');

        // Username and password text variables.
        var usernameText = document.getElementById('emailInput').value;
        alert('username: ' + usernameText.toString());
        var passwordText = document.getElementById('passwordInput').value;
        alert('password: ' + passwordText.toString());

        

        alert(JSON.stringify({ username: usernameText, password: passwordText } ));

        $.ajax({
            type: 'POST',
            url: 'http://localhost:53112/api/Login',
            data: { Username: usernameText, Password: passwordText },
            success: function (data) {
                alert(JSON.stringify(data));
                if (JSON.stringify(data.authenticated) === 'true') {
                    alert('Logged in!! :D');
                } else {
                    alert('Could not login!! :D');
                }
            },
            error: function (data) {
                console.log(data.statusCode);
            }

            
        });


        return false;
    });

    // Make regular post, then use .then to get the true/false.



});

    /*$("#loginButton").click(function () {
        var username = document.getElementById("usernameInput").innerText;
        var password = document.getElementById("passwordInput").innerText;

        if ($.get("http://localhost:53112/"))
        {
        // Todo change window
        } else {
            alert("Username and Password does not match. Try again!");
        }
    });*/

/*$('#loginButton').click(function () {
    $.ajax({
        // Post username, password & the grant type to /token
        url: '/token',
        method: 'POST',
        contentType: 'application/json',
        data: {
            username: $('#txtUsername').val(),
            password: $('#txtPassword').val(),
            grant_type: 'password'
        },
        // When the request completes successfully, save the
        // access token in the browser session storage and
        // redirect the user to judge.html page
        success: function (response) {
            sessionStorage.setItem("accessToken", response.access_token);
            window.location.href = "JudgeStartPage.cshtml";
        },
        // Display Error message if username and password does not match
        error: function () {
            alert("Username and Password does not match. Try again!");
        }

    });
});*/