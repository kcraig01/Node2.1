$(function(){ 
	$('#selectedID').on('change',function(e){
		var selected = $(this).val()
		console.log(selected)
		$('#selectedNumber').html("The number you selected was " +selected);
	})

	$('#login').submit(function(e){
		e.preventDefault();
		$.post('/signup', $(this).serialize(),function(data){
					$('#message').text(data.success)
			})
	})
});