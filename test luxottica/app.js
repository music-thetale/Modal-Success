
    const url1 = "https://www.ray-ban.com/RBClientSearchResponse?catalogId=22552&langId=-1&storeId=10151&viewMode=Client&searchType=1000&searchTermScope=&sType=SimpleSearch&newpage=true&facet=&clientSide=true&pageSize=9&searchTerm=RB_WW_BrandCampaign2019_ProductsA&orderBy=";
    const url2 = "https://www.ray-ban.com/RBClientSearchResponse?catalogId=22552&langId=-1&storeId=10151&viewMode=Client&searchType=1000&searchTermScope=&sType=SimpleSearch&newpage=true&facet=&clientSide=true&pageSize=3&searchTerm=RB_NA-EU-MX-AUS_BrandC2019_Wings-3Products";

$(document).ready(
    mobileSize(),
    showOverlayVideoModal(),
    loadSomething1(),
    loadSomething2(), 
    loadSomethingSlick(),
    slick()
);

var modal = document.getElementById("overlayVideoModal")
var span = document.getElementsByClassName("close")[0];
function showOverlayVideoModal() {
    $("#overlayVideoModal").css('display','block');
}


span.onclick = function() {
    modal.style.display = "none";
    $("#videoMain").css('display','block');
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      $("#videoMain").css('display','block');
    }
  }

function mobileSize() {
    if ($(window).width() < 768) {
      $("#media-span").show();
    } else {
      $("#media-span").hide();
    };
  }

function slick(){
    $('.carousel-main').slick({
      autoplay: true
    });
}
function loadSomething1() {
    fetch(url1)
    .then(
        response => response.text()
    )
    .then(
        response => {
            var products = JSON.parse(JSON.parse(response).products)['products']['product'];

            products.forEach(element => {
                var img = $("<img class='stripImage' width='107' height='98' />")
                    .attr('src' , "http:" + element['productImage'])
                    .attr('href' , "http:" + element['pdpURL'])
                        .ready(
                            function() {
                                $("#stripImages1").append(img);
                            }
                );
                /*var urlImage = $("<p />")
                    .attr('href' , element['pdpURL'])
                        .ready(
                            function() {
                                $("#images").append(urlImage);
                            }
                );*/
            })

            
        })
}

function loadSomething2() {
    fetch(url2)
    .then(
        response => response.text()
    )
    .then(
        response => {
            var products = JSON.parse(JSON.parse(response).products)['products']['product'];

            products.forEach(element => {
                var img = $("<img class='stripImage' width='107' height='98' />")
                    .attr('src' , "http:" + element['productImage'])
                    .attr('href' , "http:" + element['pdpURL'])
                        .ready(
                            function() {
                                $("#stripImages2").append(img);
                            }
                );
            })

            
        })
}

function loadSomethingSlick() {
    fetch(url2)
    .then(
        response => response.text()
    )
    .then(
        response => {
            var products = JSON.parse(JSON.parse(response).products)['products']['product'];

            products.forEach(element => {
                var img = $("<img width='107' height='98' />")
                    .attr('src' , "http:" + element['productImage'])
                    .attr('href' , "http:" + element['pdpURL'])
                        .ready(
                            function() {
                                $(".slick-track").append(img);
                            }
                );
            })

            
        })
}
function loadSomething() {
    fetch(url).then(
        response => response.text()
    ).then(
        
        response => {
            
          //var products = JSON.parse(JSON.parse(response).products)['products'];
          /*products['product'].forEach(element => {
              console.log(element['productImage']);
          });*/
  
          //console.log("***************** prima immagine: " + products['product'][0]['productImage']);
          //document.querySelector("#myImg").src=products['product'][0]['productImage'];
          $("#myImg").attr('src' , JSON.parse(JSON.parse(response).products)['products']['product'][0]['productImage']);
        }
    );
}
