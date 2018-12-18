$(document).ready(function(){
	$("#searchButton").click(function(){
		var searchText = $("#searchInput").val();

		var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchText + "&format=json&callback=?";

		$.ajax({
			type: "GET",
			url: url,
			async: false,
			dataType: "json",
			success: function(data){
				console.log(data);
				
			$("#output").html()
			for(var i=0; i<data[1].length; i++){
				$("#output").prepend("<li><a href="+ data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
			}

			$("#searchInput").val("");

			},
			error: function(errorMessage){
				alert("Error");
			}
		
		});
	});
	
	$("#searchInput").keypress(function(e){
	if(e.which==13){
		$("#searchButton").click();
		}		
	});
});