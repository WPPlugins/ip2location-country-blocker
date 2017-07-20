jQuery(document).ready(function($) {

	$('#ip2location-country-blocker-notice').click(function() {

		data = {
			action: 'ip2location_country_blocker_admin_notice',
			ip2location_country_blocker_admin_nonce: ip2location_country_blocker_admin.ip2location_country_blocker_admin_nonce
		};

		$.post( ajaxurl, data );
		
		event.preventDefault();

		return false;
	});
	
});