import Slider from '../export/slider.js';

var img01 = new Slider ('images/slider/green_laser_treatment_in_bilaspur_luthra_hospital_in_nehru_nagar_road_by_dr_sk_luthra.jpg','luthra hospital cataract treatment phaco surgery by dr saurabh luthra');
var img02 = new Slider ('images/slider/glaucoma_treatment_in_bilaspur_by_dr_saurabh_luthra_in_luthra_hospital_nehru_nagar_road.jpg','green laser treatment in bilaspur luthra hospital in nehru nagar road by dr sk luthra');
var img03 = new Slider ('images/slider/hair_redution_in_luthra_hospital_bilaspur_nehru_nagar_by_dr_kalpana_luthra_cosmetologist.jpg','glaucoma  treatment in bilaspur by dr SK luthra in luthra hospital nehru nagar road');

var img04 = new Slider ('images/slider/toric_lens_in_bilaspur_luthra_hospital.jpg','hair redution in luthra hospital bilaspur nehru nagar by dr kalpana luthra cosmetologist');

var img05 = new Slider ('images/slider/phaco_surgery_in_bilaspur_luthra_hospital_nehru_nagar_road_dr_sk_luthra.jpg','vison care and reasearch centre in bilapsur');
var img06 = new Slider ('images/slider/vison_care_and_reasearch_centre_in_bilapsur.jpg','phaco surgery in bilaspur luthra hospital nehru nagar road dr sk luthra');



var slider_arr = [img01,img02,img03,img04,img05,img06];

document.querySelector('section').innerHTML+=`
		  <div id="myCarousel" class="carousel slide" data-ride="carousel">
				<!-- Indicators -->
				<ol class="carousel-indicators">
				  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				  <li data-target="#myCarousel" data-slide-to="1"></li>
				  <li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>

		<!-- Wrapper for slides -->
				<div class="carousel-inner">
					 
					   <div class="item active">
						<img src="images/slider/luthra_hospital_cataract_treatment_phaco_surgery_by_dr_saurabh_luthra.jpg" alt="'retina treatment in bilaspur luthra hospital by dr saurabh" style="width:100%;">
				       </div>
                </div>

				<!-- Left and right controls -->
				<a class="left carousel-control" href="#myCarousel" data-slide="prev">
				  <span class="glyphicon glyphicon-chevron-left"></span>
				  <span class="sr-only">Previous</span>
				</a>
				<a class="right carousel-control" href="#myCarousel" data-slide="next">
				  <span class="glyphicon glyphicon-chevron-right"></span>
				  <span class="sr-only">Next</span>
				</a>
		</div>
`;


for(var i in slider_arr){
	document.querySelector('.carousel-inner').innerHTML+=`
	     <div class="item">
				<img src="${slider_arr[i].img_link}" alt="${slider_arr[i].img_alt}">
		</div>
	`;
}


