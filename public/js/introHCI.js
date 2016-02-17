'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here

	$(".project .likeBtn").click(likeBtnClick);
}

function likeBtnClick(e) {
	ga("send", "event", 'like', 'click');
}