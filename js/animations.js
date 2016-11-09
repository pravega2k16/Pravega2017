// JavaScript Document

var elem = document.getElementById('button_container');
var elem1 = document.getElementById('button_container1');
var elem2 = document.getElementById('button_container2');
var elem3 = document.getElementById('button_container3');
var elem31 = document.getElementById('button_container3_1');
var elem32 = document.getElementById('button_container3_2');
var elem33 = document.getElementById('button_container3_3');
var elem4 = document.getElementById('button_container4');
var banner = document.getElementById('flex-banner');
var dim1= document.getElementById('dim');
var text= document.getElementById('text-field');
var hmtxt= document.getElementById('home-text');

elem.onclick = function()
{
	if(!elem.classList.contains('final'))
	{
		elem.classList.toggle('final');
		elem1.classList.toggle('final');
		elem2.classList.toggle('final');
		elem3.classList.toggle('final');
		elem31.classList.add('final');
		elem32.classList.add('final');
		elem33.classList.add('final');
		elem4.classList.toggle('final');
		banner.classList.toggle('final');
		dim1.classList.toggle('final');
		text.classList.toggle('final');
		hmtxt.classList.toggle('final');
	}
};

document.body.onclick = function(event)
{
	if(event.screenX>200&&!elem32.classList.contains('final1'))
	{
		if(elem.classList.contains('final'))
		{
			elem.classList.toggle('final');
			elem1.classList.toggle('final');
			elem2.classList.toggle('final');
			elem3.classList.toggle('final');
			elem4.classList.toggle('final');
			banner.classList.toggle('final');
			dim1.classList.toggle('final');
			text.classList.toggle('final');
			elem31.classList.remove('final');
			elem32.classList.remove('final');
			elem33.classList.remove('final');
			hmtxt.classList.toggle('final');
		}
	}
	else if(event.screenX>400&&elem32.classList.contains('final1'))
	{
		if(elem.classList.contains('final'))
		{
			elem31.classList.toggle('final1');
			elem32.classList.toggle('final1');
			elem33.classList.toggle('final1');
			banner.classList.toggle('final1');
			elem.classList.toggle('final');
			elem1.classList.toggle('final');
			elem2.classList.toggle('final');
			elem3.classList.toggle('final');
			elem4.classList.toggle('final');
			banner.classList.toggle('final');
			dim1.classList.toggle('final');
			text.classList.toggle('final');
			elem31.classLList.remove('final');
			elem32.classList.remove('final');
			elem33.classList.remove('final');
			hmtxt.classList.toggle('final');
		}
	}
};

elem3.onclick = function() {
	if(elem3.classList.contains('final')){
		elem31.classList.toggle('final1');
		elem32.classList.toggle('final1');
		elem33.classList.toggle('final1');
		banner.classList.toggle('final1');
	}
};