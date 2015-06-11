function colorChange(){
        $('#optionModalBody').html("");
        $('#optionModalBody').load('options.html',function(){
              jscolor.init();
            } );
      
        
}
function goNews(){
        $('#mainPage').html("");
        $('#mainPage').load('news-page/news.html');
        
}
function goGrades(){
        $('#mainPage').html("");
        $('#mainPage').load('grade-page.html');
        
}

$("#saveColor").on("click",function(){
        var answer=confirm("Are you sure you want this color?")
        if(answer){
                  $('.sidebar-nav').shadeout({
                color: '#0D23E8',
                increment: 10
            });
            }
        })
