"use strict"

function handleData(data) {
	console.log(data);
	$("#wool_catelog").append(data);
}

// $(document).ready(function(){
// 	$.ajax({
// 		url: "/getWool",
// 		success: handleData
// 	})
// });