import Gallery from '../export/gallery.js';

var img01 = new Gallery('images/gallery/luthra_hospital_cataract_treatment_phaco_surgery_by_dr_saurabh_luthra.jpg','luthra hospital cataract treatment phaco surgery by dr saurabh luthra');

var img02 = new Gallery('images/gallery/dr_kalpana_skin_solution_hair_fall_treatmnet_acne_removal_botox_treatmnet_in_luthra_hospital.jpg','dr kalpana skin solution hair fall treatmnet acne removal botox treatmnet in luthra hospital');

var img03 = new Gallery('images/gallery/intralesionals_treatment_in_bilaspur_by_dr_kalpana_luthra_cosmetologost.jpg','intralesionals treatment in bilaspur by dr kalpana luthra cosmetologost');

var img04 = new Gallery('images/gallery/hair_redution_in_luthra_hospital_bilaspur_nehru_nagar_by_dr_kalpana_luthra_cosmetologist.jpg','hair redution in luthra hospital bilaspur nehru nagar by dr kalpana luthra cosmetologist');

var img05 = new Gallery('images/gallery/green_laser_treatment_in_bilaspur_luthra_hospital_in_nehru_nagar_road_by_dr_shourabh_luthra.jpg','green laser treatment in bilaspur luthra hospital in nehru nagar road by dr shourabh luthra');

var img06 = new Gallery('images/gallery/multi_focal_lens_in_luthra_hospital_bilaspur.jpg','multi focal lens in luthra hospital bilaspur');

var img07 = new Gallery('images/gallery/glaucoma_treatment_in_bilaspur_by_dr_SK_luthra_in_luthra_hospital_nehru_nagar_road.jpg','glaucoma  treatment in bilaspur by dr SK luthra in luthra hospital nehru nagar road');

var img08 = new Gallery('images/gallery/vison_care_and_reasearch_centre_in_bilapsur.jpg','vison care and reasearch centre in bilapsur');

var img09 = new Gallery('images/gallery/phaco_surgery_in_bilaspur_luthra_hospital_nehru_nagar_road_dr_sk_luthra.jpg','phaco surgery in bilaspur luthra hospital nehru nagar road dr sk luthra');

var img10 = new Gallery('images/gallery/retina_treatment_in_bilaspur_luthra_hospital_by_dr_saurabh.jpg','retina treatment in bilaspur luthra hospital by dr saurabh');

var img11 = new Gallery('images/gallery/toric_lens_in_bilaspur_luthra_hospital.jpg','toric lens in bilaspur luthra hospital');

var img12 = new Gallery('images/gallery/fluorescein_angiography_treatment_in_bilaspur_by_dr_Sk_luthra_from__luthra_hospital_nehru_nagar_road.jpg','fluorescein angiography treatment in bilaspur by dr Sk luthra from luthra hospital nehru nagar road');


var img_arr = [img01,img02,img03,img04,img05,img06,img07,img08,img09,img10,img11,img12];

document.querySelector('.gallery').innerHTML+=`
    <div class="container">
	     <div class="row">
		    <h1>Gallery</h1>
		 </div>
	</div>
`;



for(var i in img_arr){
	document.querySelector('.gallery>.container>.row').innerHTML+=`
	     <div class="col-md-3">
		      <div class="gallery_img">
			        <img src="${img_arr[i].img}" alt="${img_arr[i].alt}" class="img-thumbnail">
			  </div>
		 </div>
	`;
}