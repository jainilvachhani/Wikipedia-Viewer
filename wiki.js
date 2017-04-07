var arrResults = [];
var html = '';

window.onload = function()
{
	var query = document.getElementById('searchtext');
	var lan = document.getElementById("lang");
	
	var target = "https://" 
	+ lan.options[lan.selectedIndex].value +	".wikipedia.org/api/rest_v1/page/summary/" 
	+ query.value + 
	"?redirect=false";
	$('.results').empty();
	$.getJSON(target, function(data)
	{
		$('.results').append(data.extract); 
		$('#title').append(data.title);	
	});
	
	
}


function wikisearch()
{	
	var query = document.getElementById('searchtext');
	var lan = document.getElementById("lang");
	
	var target = "https://" 
	+ lan.options[lan.selectedIndex].value +	".wikipedia.org/api/rest_v1/page/summary/" 
	+ query.value + 
	"?redirect=false";
	$('.results').empty();
	$('#title').empty();
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log(xhr.responseText);
			$('.results').empty();
			$('#title').empty();
		
		
			$.getJSON(target, function(data)
			{
				$('.results').append(data.extract);
				$('#title').append(data.title);		
			});		
			} 
			else 
			{
			$('.results').empty();
			$('#title').empty();
			$('#title').append("Error 404. File Not Found");
			}
		}
	};
	xhr.open("GET", target , true);
	xhr.send(null);
	
}



