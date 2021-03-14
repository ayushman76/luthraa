import Dr_kalpana from '../export/treatment.js';

var treat01 = new  Dr_kalpana ('images/dr_kalpana/acne-scar-treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.png','Acne Scar Removal','acne-scar-treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra');

var treat02 = new  Dr_kalpana ('images/dr_kalpana/viltigo_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Viltigo Treatment','viltigo_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra');

var treat03= new  Dr_kalpana('images/dr_kalpana/psoriasis_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Psoriasis Treatment','psoriasis_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra');

var treat04= new  Dr_kalpana('images/dr_kalpana/hair_redustion_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Hair Redustion','hair_redustion_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra');


var treat05 = new   Dr_kalpana('images/dr_kalpana/glycolic_treatment_in_luthra_hospital_dr_kalpana_luthra.jpg','Glycolic Treatment','glycolic treatment in luthra hospital dr kalpana luthra');

var treat06 = new  Dr_kalpana ('images/dr_kalpana/skin-whitening-Peel-treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Salipeel & Cosmetic Peel','skin whitening  Peel treatment in luthra hospital bilapsur dr kalpana luthra');

var treat07= new  Dr_kalpana('images/dr_kalpana/subcision-skin_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.png','Subcision Treatment','subcision skin treatment in luthra hospital bilapsur dr kalpana luthra');

var treat08= new  Dr_kalpana('images/dr_kalpana/dermaroller_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Dermaroller Treatment','dermaroller treatment in luthra hospital bilaspur dr kalpana luthra');


var treat09 = new   Dr_kalpana('images/dr_kalpana/electro-cautery_treatment_in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Electrocautery Treatment','electro cautery treatment in luthra hospital bilapsur dr kalpana luthra');

var treat10 = new  Dr_kalpana ('images/dr_kalpana/radio-frequency-cautery-treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','RF Cautery','radio frequency cautery treatment in luthra hospital bilapsur dr kalpana luthra');

var treat11= new  Dr_kalpana('images/dr_kalpana/cryotherapy_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Cryotherapy Treatment','cryotherapy treatment in luthra hospital bilapsur dr kalpana luthra');

var treat12= new  Dr_kalpana('images/dr_kalpana/intralesionals_intralesional_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Intralesionals Treatment','intralesionals intralesional treatment in luthra hospital bilapsur dr kalpana luthra');



var treat13 = new   Dr_kalpana('images/dr_kalpana/botox_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Botox Treatment','botox treatment in luthra hospital bilapsur dr kalpana luthra');

var treat14 = new  Dr_kalpana ('images/dr_kalpana/punch_graft_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Punch Grafting','punch graft treatment in luthra hospital bilapsur dr kalpana luthra');

var treat15= new  Dr_kalpana('images/dr_kalpana/hair_fall_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.png','Hair Fall Treatment','hair fall treatment in luthra hospital bilapsur dr kalpana luthra')

var treat16= new  Dr_kalpana('images/dr_kalpana/skin-biopsy-treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Skin Biopsy','skin biopsy treatment in luthra hospital bilapsur dr kalpana luthra');

var treat17= new  Dr_kalpana('images/dr_kalpana/jet_facial_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Jet Facial','jet facial treatment in luthra hospital bilapsur dr kalpana luthra')

var treat18= new  Dr_kalpana('images/dr_kalpana/microdermabrasion_treatment-in_luthra_hospital_bilapsur_dr_kalpana_luthra.jpg','Microdermabrasion','microdermabrasion treatment in luthra hospital bilapsur dr kalpana luthra');







var treatment_arr = [treat01,treat02,treat03,treat04,treat05,treat06,treat07,treat08,treat09,treat10,treat11,treat12,treat13,treat14,treat15,treat16,treat17,treat18];

document.querySelector('.dr_kalpana').innerHTML+=`
      <div class="container">
	       <div class="row">
		         <h1><strong>Skin Solutions</strong></h1>
		         <h2>Dr. kalpana Luthra </h2> 
				 <p>M.D. (DERMOLOGIST)</p>
				<p>Consultant & Dermologist & Cosmetologist</p>
				
		   </div>
	</div>
`;
for(var i in treatment_arr){
	document.querySelector('.dr_kalpana>.container>.row').innerHTML+=`
	     <div class="col-md-3">
		      <div class="treatment_item">
			        <img src="${treatment_arr[i].img}" alt="${treatment_arr[i].alt}" class="img-thumbnail">
					<p>${treatment_arr[i].name}</p>
			  </div>
		 </div>
	`;
}