// Demo of setting up a button to download data from a WFS


function initialize() { 
	var szTemp = 'https://ctps.org/maploc/wfs' + '?';  
	
	szTemp += "&service=wfs";
	szTemp += "&version=1.0.0";
	szTemp += "&typename=postgis:ctps_cmp_2015_exp_routes_ext";
	szTemp += "&request=getfeature";
	szTemp += "&outputFormat=csv";
		
	szTemp += "&propertyname=route_num,direction,community,seg_begin,seg_end,distance,lanes,spd_limit,";
	szTemp += "am_cong_sp,am_avg_sp,am_spd_ix,am_avtt_ix,am_5ptt_ix,am_del_mi,am_cong_mn,";
	szTemp += "pm_cong_sp,pm_avg_sp,pm_spd_ix,pm_avtt_ix,pm_5ptt_ix,pm_del_mi,pm_cong_mn"

	$('.spanForButtonWithLink').each(function() { 
		$(this).click(function() {
			location = $(this).find('a').attr('href');
		});	
	}); // end each() 

	var szUrl = szTemp;	
	$("#downloadAnchorTag").attr("href", szUrl);
} // initialize()