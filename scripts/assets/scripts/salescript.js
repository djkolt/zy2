$(document).ready(function() {
	$('.script-link').each(function() {
		var rel = $(this).attr('rel');
		$(this).click(function(e) {
			e.preventDefault();
			$('.script-content').hide();
			$('#' + rel).show();
		});
	});

	$('.button-forward').each(function() {
		$(this).click(function(e) {
			e.preventDefault();
			var r = $(this).attr('rel');
			r = parseInt(r);
			var fromId = addr[r];
			var toId = addr[r + 1];

			var partsFrom = fromId.split('_');
			var partsTo = toId.split('_');
			if (partsFrom[1] != partsTo[1]) {
				$('#linktab_' + partsTo[0] + '_' + partsTo[1]).tab('show');
			}
			$('#accordion' + fromId).collapse('hide');
			$('#accordion' + toId).collapse('show');
		});
	});

	$('.button-back').each(function() {
		$(this).click(function(e) {
			e.preventDefault();
			var r = $(this).attr('rel');
			r = parseInt(r);
			var fromId = addr[r];
			var toId = addr[r - 1];

			var partsFrom = fromId.split('_');
			var partsTo = toId.split('_');
			if (partsFrom[1] != partsTo[1]) {
				$('#linktab_' + partsTo[0] + '_' + partsTo[1]).tab('show');
			}
			$('#accordion' + fromId).collapse('hide');
			$('#accordion' + toId).collapse('show');
		});
	});

	$('.button-additional').each(function() {
		$(this).click(function(e) {
			e.preventDefault();
			var r = $(this).attr('rel');
			r = parseInt(r);
			var fromId = addr[r];
			var r = $(this).attr('href');
			r = r.replace('#', '');
			r = parseInt(r);
			if (addr[r] != undefined) {
				var toId = addr[r];

				var partsFrom = fromId.split('_');
				var partsTo = toId.split('_');
				if (partsFrom[0] != partsTo[0]) {
					if ($('#linkscript_' + partsTo[0]).parent().parent().css('display') == 'none') {
						var section = $('#linkscript_' + partsTo[0]).parent().parent().attr('rel');
						$('#linksection_' + section).trigger('click');
					}

					$('#linkscript_' + partsTo[0]).trigger('click');
					$('#linktab_' + partsTo[0] + '_' + partsTo[1]).tab('show');
				} else {
					if (partsFrom[1] != partsTo[1]) {
						$('#linktab_' + partsTo[0] + '_' + partsTo[1]).tab('show');
					}
				}
				$('#accordion' + fromId).collapse('hide');
				$('#accordion' + toId).collapse('show');
			}
		});
	});
});
