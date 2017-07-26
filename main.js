$(document).ready(function(){
	if(Cookies.get('name')===undefined){
		$('#sub').submit(function(){
	 var name = $('#name').val()
	 Cookies.set('name', name)
	 Cookies.set('visited', 1)
	})
	
	}else{
		$('#sub').css('display', 'none')
		$('#greeting').append('Welcome ' + Cookies.get('name') + '!')
	}

})


if(Cookies.get('visited')===undefined){
		$('#welcome').text('Welcome to page two for the first time EVER!')
	}else{
		$('#welcome').text('Welcome back ' + Cookies.get('name') + '!')
	}


var sug = ''
$('#addMoreSug').click(function(){
	sug = parseInt(sug+=1)
	Cookies.set('sugarCookies', sug)
	$('#sugarCookies').text('Sugar Cookies: ' + Cookies.get('sugarCookies'))
})



//choc cookies
var cookies = ''

$('#addMore').click(function(){
	cookies = parseInt(cookies+=1)
	Cookies.set('cookieType', cookies)
	console.log(cookies)
	$('#chocCookies').text('Chocolate Cookies: ' + Cookies.get('cookieType'))
})









