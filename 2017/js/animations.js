// JavaScript Document

var elem = document.getElementById('button_container');
var elem1 = document.getElementById('button_container1');
var elem2 = document.getElementById('button_container2');
var elem3 = document.getElementById('button_container3');
var elem31 = document.getElementById('button_container3_1');
var elem32 = document.getElementById('button_container3_2');
var elem33 = document.getElementById('button_container3_3');
var elem4 = document.getElementById('button_container4');
var elem5 = document.getElementById('button_container5');
var elem6 = document.getElementById('button_container6');
var elem7 = document.getElementById('button_container7');
var elem8 = document.getElementById('button_container8');
var banner = document.getElementById('flex-banner');
var dim1= document.getElementById('dim');
var text= document.getElementById('text-field');
var hmtxt= document.getElementById('text-home');
//var width=window.innerWidth;
var homelink=document.getElementById('home-link');
var sci_link=document.getElementById('sci-link');
var lasya_link=document.getElementById('lasya-link');
var tech_link=document.getElementById('tech-link');
var contact_link=document.getElementById('contact-link');
var bob_link=document.getElementById('bob-link');
var prosc_link=document.getElementById('prosc-link');
var reg_link=document.getElementById('reg-link');
var work_link=document.getElementById('work-link');
var spon_link=document.getElementById('spon-link');
var pro_link=document.getElementById('pro-link');
var navinfo=document.getElementById('navinfo');
elem.onclick = function()
{
	if(!elem.classList.contains('final'))
	{
		elem.classList.toggle('final');
		homelink.setAttribute('href', 'index.html');
		sci_link.setAttribute('href', 'science.html');
		tech_link.setAttribute('href', 'technical.html');
		contact_link.setAttribute('href', 'team.html');
		lasya_link.setAttribute('href', 'lasya.html');
		bob_link.setAttribute('href', 'bob.html');
		prosc_link.setAttribute('href', 'proscenium.html');
		reg_link.setAttribute('href', 'register.html');
		work_link.setAttribute('href', 'workshops.html');
		spon_link.setAttribute('href','sponsors.html');
		pro_link.setAttribute('href', 'pronites.html');
		hmtxt.classList.toggle('final');
		elem1.classList.toggle('final');
		elem2.classList.toggle('final');
		elem3.classList.toggle('final');
		navinfo.classList.toggle('final');
		elem31.classList.add('final');
		elem32.classList.add('final');
		elem33.classList.add('final');
		elem4.classList.toggle('final');
		elem5.classList.toggle('final');
		elem6.classList.toggle('final');
		elem7.classList.toggle('final');
		elem8.classList.toggle('final');
		banner.classList.toggle('final');
		dim1.classList.toggle('final');
		text.classList.toggle('final');
	}
};

document.body.onclick = function(event)
{
	if(event.screenX>220&&!elem32.classList.contains('final1'))
	{
		if(elem.classList.contains('final'))
		{
			elem.classList.toggle('final');
			homelink.removeAttribute('href');
			sci_link.removeAttribute('href');
			tech_link.removeAttribute('href');
			contact_link.removeAttribute('href');
			bob_link.removeAttribute('href');
			prosc_link.removeAttribute('href');
			reg_link.removeAttribute('href');
			work_link.removeAttribute('href');
			spon_link.removeAttribute('href');
			pro_link.removeAttribute('href');
			elem1.classList.toggle('final');
			elem2.classList.toggle('final');
			elem3.classList.toggle('final');
			navinfo.classList.toggle('final');
			hmtxt.classList.toggle('final');
			elem4.classList.toggle('final');
			elem5.classList.toggle('final');
			elem6.classList.toggle('final');
			elem7.classList.toggle('final');
			elem8.classList.toggle('final');
			banner.classList.toggle('final');
			dim1.classList.toggle('final');
			text.classList.toggle('final');
			elem31.classList.remove('final');
			elem32.classList.remove('final');
			elem33.classList.remove('final');
		}
	}
	else if(event.screenX>420&&elem32.classList.contains('final1'))
	{
		if(elem.classList.contains('final'))
		{
			homelink.removeAttribute('href');
			sci_link.removeAttribute('href');
			tech_link.removeAttribute('href');
			contact_link.removeAttribute('href');
			bob_link.removeAttribute('href');
			prosc_link.removeAttribute('href');
			reg_link.removeAttribute('href');
			work_link.removeAttribute('href');
			spon_link.removeAttribute('href');
			pro_link.removeAttribute('href');
			elem31.classList.toggle('final1');
			elem32.classList.toggle('final1');
			elem33.classList.toggle('final1');
			navinfo.classList.toggle('final');
			banner.classList.toggle('final1');
			hmtxt.classList.toggle('final');
			elem.classList.toggle('final');
			elem1.classList.toggle('final');
			elem2.classList.toggle('final');
			elem3.classList.toggle('final');
			elem4.classList.toggle('final');
			elem5.classList.toggle('final');
			elem6.classList.toggle('final');
			elem7.classList.toggle('final');
			elem8.classList.toggle('final');
			banner.classList.toggle('final');
			dim1.classList.toggle('final');
			text.classList.toggle('final');
			elem31.classLList.remove('final');
			elem32.classList.remove('final');
			elem33.classList.remove('final');
		}
	}
};

elem5.onclick = function() 
{
	if(elem5.classList.contains('final'))
	{
		elem31.classList.toggle('final1');
		elem32.classList.toggle('final1');
		elem33.classList.toggle('final1');
		banner.classList.toggle('final1');
	}
};
