$(document).ready(function(){
	
	function log(logText){
		console.log(logText);
	}

	// Thank you page question

		// Set data-index for each quiz__item
		$('.quiz__item').each(function(index){
			$(this).attr('data-index', index);
		});

		// Radio button change

		var quizArray = [];

		$('.js-quiz').change(function(){

			// Get value of changed radio
			var value = $(this).val();

			// Get title of input
			var title = $(this).attr('data-title');

			// Concat title and value
			var concat = title + ' - ' + value;

			// Get length of $('.quiz__item')
			var quizItemsLength = parseInt($('.quiz__item').length - 1);

			// Get parent of changed radio
			var quizParent = $(this).closest('.quiz__item');

			// Get index of parent $('.quiz__item')
			var quizParentIndex = parseInt(quizParent.attr('data-index'));

			// Add 1 for find next $('.quiz__item')
			var quizNextIndex = quizParentIndex + 1;

			quizArray.push(concat);

			if(quizParentIndex < quizItemsLength){

				// Remove class of parent
				quizParent.removeClass('quiz__item_active');

				// Show find element
				$('.quiz__item[data-index="'+ quizNextIndex +'"]').addClass('quiz__item_active');
			}

		});


});	