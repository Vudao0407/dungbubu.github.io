$(document).ready(function(){
    $('.dropdown-menu-1 a').click(function(){
        var html = $(this).find('span').html();
        alert(html);
    });

    // $('.input-currency').keyup(function(){
    //     var val = $('.input-currency').val();
    //     $('.currency-value-1').html(val);
    //     if(val2>0){
    //         var val2 = val * 0.0037727;
    //     } esle {
    //         var val2 = val * 0.0037727 / 20000;
    //     }
    //     /* tinh toan */
    //     $('.currency-value-2').html(val2);
    //     /* end tinh toan */
    //     $('.input-currency-2').val(val2);
    //     /* change button */
        
    // });
});