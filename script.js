  let vidCount = 0;

  $(document).ready(function(){
  	setDefaultVids();
  	$("#load-more-btn").click(function(){
  		(function addVidEle(num) {
  			if( vidCount < 10 ) {
  				vidCount++;
  				$("#vid-list").append(addVidEle(id, title, desc)); 
  			}
  			if (num > 1) addVidEle(num - 1);
  		})(3);
  	});
  });

  const addVidEle = (id, title, desc) =>
  `<div class="container">
  <div class="row video-slider-row">
  <div class="col-sm-12 col-md-4 col-lg-4 video-info-left">
  <div class="video-left">
  </div>
  </div>
  <div class="col-sm-12 col-md-8 col-lg-8 video-info-right">
  <div class="">
  <div id="${id}" class="video-content">
  <h1>${title}</h1>
  <p>${desc}</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  `;