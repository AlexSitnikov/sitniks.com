jQuery(document).ready(function($) {
	// sidebar
	$('.sidebar__btn-open').on('click', function(event) {
		event.preventDefault();
		$('.page').toggleClass('sidebar_open');
	});

	// sidenav
	$('.sidenav__btn-open').on('click', function(event) {
		event.preventDefault();
		$('.page').toggleClass('sidenav_open');
	});

	// Расширенный поиск
	$('.advanced-search__btn-open').on('click', function(event) {
		event.preventDefault();
		$('.advanced-search').slideToggle();
	});

	// change-name блок смены названия
	function changeName() {
		var btnShow = $('.change-name__btn-show'),
			btnCancel = $('.change-name__btn-cancel'),
			parentBlock = '.change-name',
			nameBlock = '.change-name__name',
			editBlock = '.change-name__edit';

			btnShow.on('click', function(event) {
				event.preventDefault();
				parentBlock = $(this).parents(parentBlock);

				parentBlock.children(nameBlock).fadeOut(0);
				parentBlock.children(editBlock).fadeIn(300);
			});

			btnCancel.on('click', function(event) {
				event.preventDefault();
				parentBlock = $(this).parents(parentBlock);

				parentBlock.children(editBlock).fadeOut(0);
				parentBlock.children(nameBlock).fadeIn(300);
			});
	};
	changeName();


	// Подключения плагина масонри
	$('.promo__items').masonry({
	  // options
	  itemSelector: '.col',
	  columnWidth: '.col',
	  percentPosition: true
	});

	$('.tables-group__items').masonry({
	  // options
	  itemSelector: '.col',
	  columnWidth: '.col',
	  percentPosition: true
	});


	// Подключения плагина маски телефона
	function phoneMask() {
		var valid_phone = false;
		var phone = $('.input-phone');

		if ($('input').is('.input-phone')) {
			var country = phone.data('country');
		    var phone_template = phone.data('phone');
		    phone.mask(country + phone_template, {
			    completed:function() {
			      valid_phone = true;
			    }
			  });
		};

	};
	phoneMask();


	// tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// DataTable
	$('#main-table').DataTable();
	$('#structure-table').DataTable();
	$('#users-table').DataTable();

	// modal
	function modalShow() {
		var modalBtn = $('.modal-btn-show'),
			modalBlock;

			modalBtn.on('click', function(event) {
				event.preventDefault();
				var modalBlock = $(this).data('target');

				$(modalBlock).modal();
			});
	};
	modalShow();
});