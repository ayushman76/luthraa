import Dr_saurabh from '../export/dr_kalpana.js';



var treat01 = new Dr_saurabh('images/dr_sourabh_and_dr_sk_luthra/cataract_treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Cataract Treatment','acne scar treatment in luthra hospital bilapsur dr kalpana luthra');

var treat02 = new Dr_saurabh('images/dr_sourabh_and_dr_sk_luthra/cornea-treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Cornea Treatment','cornea-treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra');

var treat03= new Dr_saurabh('images/dr_sourabh_and_dr_sk_luthra/glaucoma_treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Glaucoma Treatment','glaucoma treatment in luthra hospital bilaspur dr sk luthra and dr saurabh luthra');

var treat04= new Dr_saurabh('images/dr_sourabh_and_dr_sk_luthra/retina_treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Retina Treatment','retina treatment in luthra hospital bilaspur dr sk luthra and dr saurabh luthra');



var treat05 = new  Dr_saurabh ('images/dr_sourabh_and_dr_sk_luthra/green_laser_treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Green Laser Treatment','green laser treatment in luthra hospital bilaspur dr sk luthra and dr saurabh luthra');

var treat06 = new  Dr_saurabh ('images/dr_sourabh_and_dr_sk_luthra/fundus_treatmnt_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Fundus Camera','fundus treatmnt in luthra hospital bilaspur dr sk luthra and dr saurabh luthra');

var treat07= new  Dr_saurabh('images/dr_sourabh_and_dr_sk_luthra/yag-laser_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Yag Laser','yag aser in luthra hospital bilaspur dr sk luthra and dr saurabh luthra');

var treat08= new  Dr_saurabh('images/dr_sourabh_and_dr_sk_luthra/optical_coherence_tomography_treatment_in_bilaspur_dr_sk_luthra_and_dr_saurabh-luthra.jpg','Optical Coherence Tomography Treatment','optical coherence tomography treatment in bilaspur dr sk luthra and dr saurabh luthra');


var treat09 = new  Dr_saurabh('images/dr_sourabh_and_dr_sk_luthra/pachymetry-eye_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.png','Pachymetry','pachymetry eye treatment in luthra hospital bilaspur dr sk luthra and dr saurabh luthra');

var treat10 = new  Dr_saurabh ('images/dr_sourabh_and_dr_sk_luthra/dry-eyes_treatmnt_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Dry Eyes Treatmnt','dry eyes treatmnt in luthra hospital bilaspur dr sk luthra and dr saurabh luthra');

var treat11= new Dr_saurabh('images/dr_sourabh_and_dr_sk_luthra/epithelial_treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','Epithelial Map OCT','epithelial treatment in luthra hospital bilaspur dr sk luthra and dr saurabh luthra');

var treat12= new  Dr_saurabh('images/dr_sourabh_and_dr_sk_luthra/hfa_eye_treatment_in_luthra_hospital_bilaspur_dr_sk_luthra_and_dr_saurabh+luthra.jpg','HFA (Perimetry)','hfa eye treatment in luthra hospital bilaspur dr sk luthra and dr saurabh luthra');


var treat13 = new   Dr_saurabh('images/dr_sourabh_and_dr_sk_luthra/toric_lens_in_luthra_hospital.jpg','Toric Lens','toric lens in luthra hospital');

var treat14 = new  Dr_saurabh ('images/dr_sourabh_and_dr_sk_luthra/multi_focal_lens_inluthra_hospital.jpg','Multi Focal Lens','multi focal lens inluthra hospital');








var treatment_arr = [treat01,treat02,treat03,treat04,treat05,treat06,treat07,treat08,treat09,treat10,treat11,treat12,treat13,treat14];

document.querySelector('.dr_saurabh').innerHTML+=`
      <div class="container">
	       <div class="row">
				<h4><strong>Eye Treatments</strong></h4>
				<h5>Dr. S.k. Luthra </h5> 
				<p>Eye Specialist (M.B.B.S., D.O.M.S.)</p>

				<h6>Dr. Saurabh. Luthra </h6> 
				<p>Phaco Surgeon (M.B.B.S., D.O., D.N.B.)</p>
		   </div>
	</div>
`;
for(var i in treatment_arr){
	document.querySelector('.dr_saurabh>.container>.row').innerHTML+=`
	     <div class="col-md-3">
		      <div class="treatment_item">
			        <img src="${treatment_arr[i].img}" alt="${treatment_arr[i].alt}" class="img-thumbnail">
					<p>${treatment_arr[i].name}</p>
			  </div>
		 </div>
	`;
}