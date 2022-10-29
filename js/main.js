$(document).ready(function(){

$('.div_1').slideDown(2000,function(){
$('.Section').fadeIn(1000);
$('.wrapper').fadeIn(1000);
$('.btn_1').fadeIn(1000);
});
$('.btn_1').click(function(){
    $('.div_1').slideUp(2500);
    $('.Box').fadeIn(4000);
    $('.wrapper').fadeOut(2000);
});

     var click = 1;
     $('.btn').click(function(){
          images = ["url(img4.jpg)","url(img5.jpg)","url(img6.jpg)"],
       title = ["Beef Burger" ,"Beef Frills","Seafood"],
       main = ["1 burger 200g", " 1 grills 250g","2 fish 200g"],
  content_1 = ["1 medium fries","grills 250g","2 fish 200g"],
  content_2 =["1 pepsi","1 salad","1 medium fries"],
  content_3 =["1 pepsi","1 concout lemonade","sweet tea"],
  price = ["10$","12$","15$"];
 
   if (click > images.length - 1) {
       click = 0;
    }
       $('.image').css('background-image' , images[click]);
       $('.title').html(title[click]);
       $('.main').html(main[click]);
       $('.content_1').html(content_1[click]);
       $('.content_2').html(content_2[click]);
       $('.content_3').html(content_3[click]);
       $('.price').html(price[click]);
      
       click++;
    
     });
    });