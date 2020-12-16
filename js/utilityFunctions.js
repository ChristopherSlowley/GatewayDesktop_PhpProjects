/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getLoginForm()
{
    $.ajax({
        type: "POST",
        url: "html/forms/form.login.html",
        data: "",
        success: function(data){
            phpResult = data;
            $('#login-form-div').html(phpResult).hide().slideDown(500);
        }
    });
}

function processLoginForm()
{
    var email = $('#email');
    var password = $('#password');
    var formResponse = $('#login-form-div-response'); 
    var formDiv = $('#login-form-div');
    
    if(password.val() == "abc")
    {
        formResponse.html("Success").show().hide(2000);
        //alert("Success");
        formDiv.html("Welcome");
        return true;
    }
    else
    {
        formResponse.html("Fail").show().hide(2000);
       return false;
       //alert("Fail");
    }
    
}


