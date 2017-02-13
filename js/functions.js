// Made by Athul Jayaram, juniorhero.com
var target_date = new Date("Jan 8, 2016").getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown="";

//make sure the footer is in the right place
//window.onresize = stretch_footer();

function isIE()
{
	var myNav = navigator.userAgent.toLowerCase();
	return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

function count()
{
	countdown = document.getElementById('timer');
}

function resizeIframe(iframe) {
	alert("test");
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
  }


// update the tag with id "countdown" every 1 second
var inter = setInterval(function () {

    if (countdown == null) {
        
        return;
    }


    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
	
	if( seconds_left < 0)
	{
		
		countdown.innerHTML = "AMIMUN'16 is here!";
		
	}
	else
	{
		// do some time calculations
		days = parseInt(seconds_left / 86400);
		seconds_left = seconds_left % 86400;
		 
		hours = parseInt(seconds_left / 3600);
		seconds_left = seconds_left % 3600;
		 
		minutes = parseInt(seconds_left / 60);
		seconds = parseInt(seconds_left % 60);

		// format countdown string + set tag value
		countdown.innerHTML = days + " Days, " + hours + " Hours, "
		+ minutes + " Minutes, " + seconds + " Seconds";  
	}
 
}, 1000);

// Handle committee scrolling
function committeeClick(id)
{
	if(typeof(Storage) !== "undefined") {
    localStorage.setItem("clicked", id);
}
}

function handleCommitteeClick()
{
	if(localStorage.clicked){
	var id = localStorage.getItem("clicked", id);
	toggle(id);
	localStorage.removeItem("clicked");
	}
}

function centerCommitteeBoxes()
{
	var width = window.innerWidth;
	if (width>1500){
		document.getElementById("com-wrapper").setAttribute("style","max-width:1500px");
	}else if (width<600){
		var newWidth = 600;
	document.getElementById("com-wrapper").setAttribute("style","max-width:"+newWidth+"px");
	}else{
		var newWidth = 300*Math.floor(width/300);
	document.getElementById("com-wrapper").setAttribute("style","max-width:"+newWidth+"px");
	}
	
}



function toggle(id)
{
  var e = document.getElementById(id);	
 
  if (e.style.display == '')
    e.style.display = 'none';
  else
    e.style.display = '';
	
	stretch_footer();
}

function stretch_footer()
{
	//get the footer
	var foot = document.getElementById('footer');
	
	if(foot != null)
	{
		//what is the longest element?
		//alert("height before = " + height);
		var body = document.body,
		html = document.documentElement;
		var height = Math.max( body.offsetHeight, html.clientHeight, html.offsetHeight );
		
		//position is highest - 94 (height of footer)
		//alert("height after = " + height);

		//alert(html.clientHeight);
		
		if( isIE() != 8 )
		{
			var y = document.getElementsByClassName('oxcontent');
		}
		else
		{
			var y = document.querySelectorAll('.oxcontent');
		}
		
		// The following forces the header to be at the bottom of the page when the content is not very long (rather than being 1000px below the content, which would be floating mid-screen).
		var oxcont = y[0];
		var windowHeight = window.innerHeight;
		var footerHeight = document.getElementById("footer").offsetHeight;
		var headerHeight = document.getElementById("menubar").offsetHeight;
		//alert(oxcont.clientHeight);
		if( oxcont != null )
		{
			if( oxcont.clientHeight < windowHeight - footerHeight - headerHeight )
			{
				foot.style.position = "absolute";
				foot.style.bottom = "0px";
			}
			else
			{
				foot.style.position = "";
				foot.style.bottom ="";
			}
		}
		
	}
}

function stretch_footer2()
{
	//get the footer
	var foot = document.getElementById('footer');
	
	if(foot != null)
	{
		//what is the longest element?
		//alert("height before = " + height);
		var body = document.body,
		html = document.documentElement;
		var height = Math.max( body.offsetHeight, html.clientHeight, html.offsetHeight );
		
		//position is highest - 94 (height of footer)
		//alert("height after = " + height);

		//alert(html.clientHeight);
		
		if( isIE() != 8 )
		{
			var y = document.getElementsByClassName('oxcontent2');
		}
		else
		{
			var y = document.querySelectorAll('.oxcontent2');
		}
		
		// The following forces the header to be at the bottom of the page when the content is not very long (rather than being 1000px below the content, which would be floating mid-screen).
		var oxcont = y[0];
		var windowHeight = window.innerHeight;
		var footerHeight = document.getElementById("footer").offsetHeight;
		var headerHeight = document.getElementById("menubar").offsetHeight;
		//alert(oxcont.clientHeight);
		if( oxcont != null )
		{
			if( oxcont.clientHeight < windowHeight - footerHeight - headerHeight )
			{
				foot.style.position = "absolute";
				foot.style.bottom = "0px";
			}
			else
			{
				foot.style.position = "";
				foot.style.bottom ="";
			}
		}
		
	}
}

function changeBackground()
{
	var pic = Math.round(Math.random()*8);
	document.body.style.background = "url('images/backgrounds/" + pic + ".jpg') fixed";
}

// PDF Changers

function bluePDF(button)
{
	button.children[0].src="images/pdf_blue.png"
}

function whitePDF(button)
{
	button.children[0].src="images/pdf.png"
}

// Menubar Changers

function blueLogo(button)
{
	button.src="images/menu-logo-blue.png"
}

function whiteLogo(button)
{
	button.src="images/menu-logo.png"
}

// Apply Below Changers


function blueChair(button)
{
	button.children[0].src="images/chair-blue.png"
}

function whiteChair(button)
{
	button.children[0].src="images/chair.png"
}

function blueDelegate(button)
{
	button.children[0].src="images/delegate-blue.png"
}

function whiteDelegate(button)
{
	button.children[0].src="images/delegate.png"
}

function blueStaff(button)
{
	button.children[0].src="images/press-blue.png"
}

function whiteStaff(button)
{
	button.children[0].src="images/press.png"
}

function nukeNode(node)
{
	var n = document.getElementById(node);

	while( n.firstChild )
	{
		n.removeChild( n.firstChild);
	}
}


function resizeCommitteeWrapper()
{
	wrap = document.getElementById("comwrapper");
	
	if(wrap != null)
	{
		width = window.innerWidth;
		
		if( width >= 1500 )
		{
			wrap.style.width = "1500px"
			wrap.style.height = "800px;"
			FiveByFourComboxes()
		}		
		else if( width >= 1200  )
		{
			wrap.style.width = "1200px"
			wrap.style.height = "1000px"
			FourByFiveComboxes()
		}		
		else if( width >= 900 )
		{
			wrap.style.width = "900px"
			wrap.style.height = "1400px"
			FiveByFourComboxes()
		}		
		else if( width >= 600 )
		{
			wrap.style.width = "600px"
			wrap.style.height = "1800px"
			FourByFiveComboxes()
		}
	}
}

// Make it smaller
function FourByFiveComboxes()
{
	var k = document.getElementById("comwrapper");

	if( k.childNodes[1].nodeName == 'A' )
	{
		var introbox = k.childNodes[0]
	}
	else
	{
		var introbox = k.childNodes[1]
	}
	
	var comboxes = [];
	
	for(i = 0; i < k.childNodes.length; i++)
	{
		if( k.childNodes[i].nodeName == 'A' )
		{
			comboxes.push(k.childNodes[i])
		}
	}
	
	if( String( comboxes[0].childNodes[1].childNodes[3].innerHTML ).search("DISEC") != -1 )
	{
		console.log("disec detected - rearranging")
		
		comboxes[14].childNodes[1].style.background = "url('images/committees/ecowas2.jpg')"
		
		comboxes.push(comboxes[0])
		comboxes.push(comboxes[9])
		comboxes.push(comboxes[4])
		comboxes.push(comboxes[14])
		
		nukeNode("comwrapper")
		
		k.appendChild( introbox )
		
		for(i = 0; i < comboxes.length; i++)
		{
			k.appendChild(comboxes[i])
		}
	}
	
	return comboxes;
}

// Restore original
function FiveByFourComboxes()
{
	var k = document.getElementById("comwrapper");

	var introbox = k.childNodes[0]
	var comboxes = [];
	
	for(i = 0; i < k.childNodes.length; i++)
	{
		if( k.childNodes[i].nodeName == 'A' )
		{
			comboxes.push(k.childNodes[i])
		}
	}
	
	if( String( comboxes[0].childNodes[1].childNodes[3].innerHTML ).search("IMF") != -1 )
	{
		console.log("imf detected - rearranging")
		
		comboxes[18].childNodes[1].style.background = "url('images/committees/ecowas.jpg')"
		
		/*
		comboxes.push(comboxes[0])
		comboxes.push(comboxes[9])
		comboxes.push(comboxes[4])
		comboxes.push(comboxes[14])
		*/
		
		//First Row
		comboxes.push(k.childNodes[16])
		comboxes.push(k.childNodes[1])
		comboxes.push(k.childNodes[2])
		comboxes.push(k.childNodes[3])
		
		//Second Row
		comboxes.push(k.childNodes[18])
		comboxes.push(k.childNodes[4])
		comboxes.push(k.childNodes[5])
		comboxes.push(k.childNodes[6])
		comboxes.push(k.childNodes[7])
		
		//Third Row
		comboxes.push(k.childNodes[17])
		comboxes.push(k.childNodes[8])
		comboxes.push(k.childNodes[9])
		comboxes.push(k.childNodes[10])
		comboxes.push(k.childNodes[11])
		
		//last Row
		comboxes.push(k.childNodes[19])
		comboxes.push(k.childNodes[12])
		comboxes.push(k.childNodes[13])
		comboxes.push(k.childNodes[14])
		comboxes.push(k.childNodes[15])
		
		nukeNode("comwrapper")
		
		k.appendChild( introbox )
		
		for(i = 0; i < comboxes.length; i++)
		{
			k.appendChild(comboxes[i])
		}
	}
	
	return comboxes;
}
