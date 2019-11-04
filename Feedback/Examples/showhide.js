$(document).ready(function(){

    $('#home').click(function(){
        $('#Feedbackform').hide();
        $('#ShowFeedback').hide();
        $('#Home').show();
        $('#home').parent().addClass("active");
        $('#Form').parent().removeClass("active");
        $('#ShowForm').parent().removeClass("active");
        
    });
    $('#Form').click(function(){
        $('#Feedbackform').show();
        $('#ShowFeedback').hide();
        $('#Home').hide();
        $('#home').parent().removeClass("active");
        $('#Form').parent().addClass("active");
        $('#ShowForm').parent().removeClass("active");

    });

    $('#ShowForm').click(function(){
        $('#Feedbackform').hide();
        $('#ShowFeedback').show();
        $('#Home').hide();
 
        $('#home').parent().removeClass("active");
        $('#Form').parent().removeClass("active");
        $('#ShowForm').parent().addClass("active");

    });
});