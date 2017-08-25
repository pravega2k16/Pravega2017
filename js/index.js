// JavaScript Document
$(document).ready(function(){
	$('#gradient2').fadeIn(1000);
	$('#gradient').fadeIn(1000,function(){
		$('#header-logo').addClass('dikhraha');

		$('#header-logo').one('webkitTransitionEnd otransitionend msTransitionEnd transitionend', function(e) {
			$('#header-logo').addClass('chhota');
		});
	});
	var colors = new Array(
	  [230,105,147],
	  [58,164,178],
	  [40,26,88],
	  [232,24,122]);
	var step = 0;
	//color table indices for:
	// current color left
	// next color left
	// current color right
	// next color right
	var colorIndices = [0,1,2,3];
	//transition speed
	var gradientSpeed = 0.002;
	function updateGradient() {
	  var c0_0 = colors[colorIndices[0]];
	  var c0_1 = colors[colorIndices[1]];
	  var c1_0 = colors[colorIndices[2]];
	  var c1_1 = colors[colorIndices[3]];

	  var istep = 1 - step;
	  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	  var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);
	  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	  var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);
	$('#gradient').css({background: "-webkit-radial-gradient(80% 10%, circle, "+color1+", transparent), -webkit-radial-gradient(80% 50%, circle, "+color2+", transparent)"});

	step += gradientSpeed;
	if ( step >= 1 )
	{
	  step %= 1;
	  colorIndices[0] = colorIndices[1];
	  colorIndices[2] = colorIndices[3];
	  //pick two new target color indices
	  //do not pick the same as the current one
	  colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	  colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	}
	} setInterval(updateGradient,10);
});
(function() {

    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('resize', resize);
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
        };
    }

})();