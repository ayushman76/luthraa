import Popup from '../export/popup.js';

var pop01 = new Popup('images/eye_treatment_in_bilaspur_nehru_nagar_by_dr_saurabh_luthra_and_dr_sk_luthra.jpg','Eye Treatments','View More','dr_saurabh.html');

var pop02 = new Popup('images/skin_treatment_in_bilaspur_nehru_nagar_by_dr_Kalpana_luthra.jpg','Skin Treatments','View More','skin_solution.html');

var pop_arr = [pop01,pop02];

document.querySelector('.popup').innerHTML+=`
     <div class="container-fluid">
	       <div class="row">
		        <i class="fa fa-close" style="font-size:24px" onclick="my_pop()"></i>
		   </div>
	 </div>
`;

for(var i in pop_arr){
	document.querySelector('.popup>.container-fluid>.row').innerHTML+=`
	    <div class="col-md-6">
		      <div class="${pop_arr[i].name}  pad-10 text-center">
			        <img src="${pop_arr[i].img}" class="img-thumbnail">
					<div class="cont">
							<p class="name">${pop_arr[i].name}</p>
							<a  href="${pop_arr[i].link}" class="btn-primary pad-10">${pop_arr[i].btn}</a>
					</div>
					
			  </div>
		</div>
	`;
}