$(document).ready(function() {
	var access_cookie_name = 'save_params';
	var eachItems = [];
	

	if(Cookies.get(access_cookie_name)){
		values = Cookies.getJSON(access_cookie_name);
		console.log(values);
		eachItems = values;
	}
	else{
		Cookies.set(access_cookie_name,{
			items: []
		});
	}
	reloadClasses(eachItems);
	
	
	$('.my_cow').click(function(){
		that = this;
		var eid = $(that).parent().attr('data-id');
		if( eachItems.indexOf(eid,0) == -1){
			eachItems.push( eid );
		}
		else{
			eachItems.splice( eachItems.indexOf(eid,0),1 );
		}
		Cookies.remove(access_cookie_name);
		Cookies.set(access_cookie_name,{
			items: eachItems
		});
		reloadClasses(eachItems);
		return false;
	});
	
	function reloadClasses(eachItems){
		$('li[data-id]').removeClass('green');
		$('li[data-id]').each(function(i,e){
			console.log(eachItems.indexOf(  $(e).attr('data-id') , 0) );
			if( eachItems.indexOf( $(e).attr('data-id'), 0)  != -1 ){
				$(e).addClass('green');
			}
		});
	}


	

});