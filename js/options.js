function changeC(){
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

function changeColor(){
        var answer=confirm("Are you sure you want this color?");
        console.log(answer);
        if(answer){
                  $('.sidebar-nav').shadeout({
                color: $("#colorPicker").val(),
                increment: 10
            });
            }
        }
function teacherContact(){
        $('#info').html("");
        $('#info').load('teacherInfo.html');
        
}
function gradeTable(){
        $('#info').html("");
        $('#info').load('gradeTable.html');
        
}
function goDash(){
        $('#mainPage').html("");
        $('#mainPage').load('dashboard.html');
        
}
