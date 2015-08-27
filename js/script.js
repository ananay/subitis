$(document).ready(function(){
	var i = 0;
	var j = 0;
	var k = 0;
	$(window).mousewheel(function(event, delta){
		if (delta > 0){
			alert('down');
		} else if (delta < 0){
			alert('up');
		}
	});
	setInterval(function(){
		if (i>=1000){i=0;}
		i += 0.7;
		$(".bg1").css({
			'backgroundPosition': '0px '+i+'px'
		});

	}, 50);
	setInterval(function(){
		j += 2;
		if (j>=3000){j=0;}
		$(".bg3").css({
			'backgroundPosition': '0px '+j+'px'
		});

	}, 50);
	setInterval(function(){
		k += 0.5;
		if (k>=3000){k=0;}
		$(".bg2").css({
			'backgroundPosition': '0px -'+k+'px'
		});

	}, 50);
	// Rohan's code
	var mH = window.innerHeight * 0.456;

	$(window).resize(function(){
		mH = window.innerHeight * 0.456;		
	});

	var txt = {
		'pi0':"Innovation",
		'pi1':"Design",
		'pi2':"Creative",
		'pi3':"ANALYTICS",
		'pi4':"Performnace"		
	}

	function flip(id){
		var sid =  id.substr(2);
		
		$('#main1, #main2').animate({
			scrollTop: (mH*sid)
		});
	}

	$('.peice').click(function(){
		if($(this).hasClass('activePeice') ===  false){
			$('.peice').text('');
			$('.peice').not(this).removeClass('activePeice');
			$(this).addClass('activePeice');
			var that = $(this); 
			flip(that.attr('id'));
			setTimeout(function(){
				that.text(txt[that.attr('id')]);
			}, 150);
		}
	});

	$(document).mousemove(function(e){
        cx = Math.ceil(window.innerWidth / 2.0);
        cy = Math.ceil(window.innerWidth / 2.0);
        dx = e.pageX - cx;
        dy = e.pageY - cy;

        tiltx = (dy / cy);
        tilty = - (dx / cx);
        radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
        degree = (radius * 10);

        $('#holder').css({
        	'-webkit-transform':'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
        	'-ms-transform':'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
        	'-moz-transform':'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
        	'transform':'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'
    	});
   
	});
});