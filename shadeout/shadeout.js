(function($) {
    $.fn.shadeout = function(params) {
        var color = params.color || '#0000FF';
        var color2 = params.color2 || '';
        var increment = params.increment || 25;

        var children = $(this).children();
        var count = children.length;

        function shadeColor(color, percent) {   
            var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
            return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
        }

        function blendColor(c0, c1, p) {
            var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
            return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
        }

        var colors = [color];
        for(var i=1; i<count; i++) {
            var index = i-1;
            var percent = increment/100;
            console.log(percent+' '+index+' '+colors[index]);
            if(color2) colors[i] = blendColor(colors[index], color2, percent);
            else colors[i] = shadeColor(colors[index], percent);
            console.log(colors);
        }

        function shade(activeIndex) {
            children.each(function() {
                var index = (Math.abs($(this).index() - activeIndex));
                $(this).css('background-color', colors[index]);
                index++;
            });
        }

        children.each(function() {
            $(this).click(function() {
                shade($(this).index());
            });
        });

        shade(0);
    };
}(jQuery));
