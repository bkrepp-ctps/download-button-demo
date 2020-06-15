// Demo of setting up a button to download data from a WFS

function initialize() { 
	var szBaseUrl = 'https://ctps.org/maploc/wfs' + '?';  
	
	// URL for WFS request to download 2015 CMP express highway data
	szTemp = szBaseUrl + "&service=wfs";
	szTemp += "&version=1.0.0";
	szTemp += "&typename=postgis:ctps_cmp_2015_exp_routes_ext";
	szTemp += "&request=getfeature";
	szTemp += "&outputFormat=csv";
	
	// List of propertynames (i.e., fields) to be downloaded from 2015 CMP express highway data.
	// Note: Do NOT include the wkb_geometry field!
	szTemp += "&propertyname=route_num,direction,community,seg_begin,seg_end,distance,lanes,spd_limit,";
	szTemp += "am_cong_sp,am_avg_sp,am_spd_ix,am_avtt_ix,am_5ptt_ix,am_del_mi,am_cong_mn,";
	szTemp += "pm_cong_sp,pm_avg_sp,pm_spd_ix,pm_avtt_ix,pm_5ptt_ix,pm_del_mi,pm_cong_mn"

	$('.spanForButtonWithLink').each(function() { 
		$(this).click(function() {
			location = $(this).find('a').attr('href');
		});	
	}); // end each() 

	// Associate this URL with the anchor tag associated with button #1
	var szUrl = szTemp;	
	$("#downloadAnchorTag_1").attr("href", szUrl);
	
	// URL for WFS request for LRTP airports data
	szTemp = szTemp = szBaseUrl + "&service=wfs";
	szTemp += "&version=1.0.0";
	szTemp += "&typename=postgis:dest2040_airports_pt";
	szTemp += "&request=getfeature";
	szTemp += "&outputFormat=csv";
	
	// List of propertynames (i.e., fields) to be downloaded from LRTP airports data.
	// Note: Do NOT include the wkb_geometry field!
	szTemp += "&propertyname=id,town,airport_name,owner_type,facility_type,";
	szTemp += "class,runway,controltower,restaurant,rentalcar,servicelevel";
	
	// Associate this URL with the anchor tag associated with button #2
	var szUrl = szTemp;	
	$("#downloadAnchorTag_2").attr("href", szUrl);
} // initialize()