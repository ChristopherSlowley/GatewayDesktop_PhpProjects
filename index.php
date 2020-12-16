<html>
    
    <head>
        <title>Php Test 1 - Home Page</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="js/getHeader.js"></script>
        <script src="js/utilityFunctions.js"></script>
        <link rel="stylesheet" href="css/mainstyle.css"/>
        <link rel="stylesheet" href="css/Tables.css"/>
        <link rel="stylesheet" href="css/loginform.css" />
    </head>
    <body>
        <div id="headerRow"></div>
        <button onclick="getHeader()">Get Header using AJAX</button>
        <br/>
        
        <?php
            echo "Welcome to the World of PHP Web Development using the LAMP stack!" ;  
        ?>
        <table class="normal-table">
            
        </table>
        
        <button onclick="getLoginForm()">Get login form</button>
        <div id="login-form-div"> </div>
        <div id="login-form-div-response"></div>
    </body>
</html>


