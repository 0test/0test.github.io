$(document).ready(function() {
	var access_cookie_name = 'save_params';

	$('.my_cow').click(function(){
		values = Cookies.getJSON(access_cookie_name);
		Cookies.remove(access_cookie_name);
		Cookies.set(access_cookie_name,{
			bg: 1,
			items: [1,2,3,4,5]
		});
		return false;
	});

	

	if(Cookies.get(access_cookie_name)){
		values = Cookies.getJSON(access_cookie_name);
		console.log(values);
	}
	else{
		Cookies.set(access_cookie_name,{
			bg: 0,
			items: [1,2,3,4]
		});
	}
	
});