  $(document).ready(function(){
  	$("#load-more-btn").click(function(){
  		(function addVidEle(num) {
  			$("#vid-list").append(vidEle); 
  			if (num > 1) addVidEle(num - 1);
  		})(3);
  	});
  });

  let vidEle = 
  `<div class="container">
  <div class="row video-slider-row">
  <div class="col-sm-12 col-md-4 col-lg-4 video-info-left">
  <div class="video-left">
  </div>
  </div>
  <div class="col-sm-12 col-md-8 col-lg-8 video-info-right">
  <div class="">
  <div class="video-content">
  <h1>Introducing the Canon XF405 & XF400 Camcorders</h1>
  <p>Really compact light form factor and all the features and quality that I want versus a more
  expensive and heavier higher end camera. Wi-Fi connectivity to iPhone and Laptop is VERY
  convenient. I use the iPhone as a remote trigger for low light.</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  `;