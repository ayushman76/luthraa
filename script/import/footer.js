import Footer from '../export/footer.js';


var footer_nav = new Footer('Home','index.html');
var footer_nav01 = new Footer ('About','about.html');
var footer_nav02 = new Footer ('Skin Treatments','dr_kalpana.html'); 
var footer_nav03 = new Footer ('Eye Treatments','dr_saurabh.html');
var footer_nav04 = new Footer ('Gallery','gallery.html');
var footer_nav05 = new Footer ('Contact Us','contact.html');

var footer_arr = [footer_nav,footer_nav01,footer_nav02,footer_nav03,footer_nav04,footer_nav05]

document.querySelector('footer').innerHTML+=`
      <div class="container">
	        <div class="row">
			      <div class="col-md-4">
				       <div class="footer_item">
					          <h2></strong>Main Menu</strong></h2>
						      <ul class="nav"></ul>
						</div>
				  </div>
				  <!--//col-md-4-->
				   <div class="col-md-4">
				        <div class="footer_item01">
						      <h3><strong>Social Connect</strong></h3>
						      <ul class="nav">
									<li><a href="#">Facebook</a></li>
									<li><a href="#">WhatsApp</a></li>
									<li><a href="#">Facebook</a></li>
							  </ul>
						</div>
				  </div>
				  <!--//col-md-4-->
				  <div class="col-md-4">
				        <div class="footer_item01">
						     <h4><strong>Address</strong></h4>
						      <ul class="nav">
									<li><a href="tel:07752271297"><i class="fa fa-phone" style="font-size:24px"></i> 07752-271297</a></li>
									<li><a href="tel:70240-21186"><i class="fa fa-phone" style="font-size:24px"></i> 70240-21186</a></li>
									<li><a href="mailto:luthrahospital@gmail.com"><i class="fa fa-envelope" style="font-size:24px"></i> luthrahospital@gmail.com</a></li>
									<li><a href="#"><i class="fa fa-map-marker" style="font-size:24px"></i> Nehru Nagar Road, Bilaspur (C.G.)</a></li>
							  </ul>
						</div>
				  </div>
				  <!--//col-md-4-->
			</div>
	  </div>
`;

for(var i in footer_arr){
	document.querySelector('.footer_item>ul').innerHTML+=`
	     <li><a href="${footer_arr[i].tabLink}">${footer_arr[i].tabName}</a></li>
	`;
}