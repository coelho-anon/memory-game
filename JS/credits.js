document.getElementById("close_credits_modal").addEventListener("click", function close_credits_modal (argument) {
	$('#blur_bg_credits').slideUp(300)
})

document.getElementById("credits").addEventListener("click", function open_credits_modal (argument) {
	$('#blur_bg_credits').slideDown(200)
})