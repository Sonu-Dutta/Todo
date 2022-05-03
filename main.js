$(document).ready(function(){
    $('#input').change(function(){
        var input=$(this).val();
       
        $('ul').append('<li>'+ input+'<i class="fas fa-check"></i><i class="fa fa-times" aria-hidden="true"></i></li>')
        $(this).val('');
    });
    $('ul').on('click','.fa-times', function(){
        $(this).parent('li').fadeOut(200);
    });

    $('ul').on('click','.fa-check', function(){
        $(this).parent('li').toggleClass('checked');
    });
});