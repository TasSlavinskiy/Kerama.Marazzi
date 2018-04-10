function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.689265, lng: 37.566928},
    // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
    zoom: 9,
    // disableDefaultUI: true
    //отключить скорлл
    scrollwheel: false
  });

  // map1 = new google.maps.Map(document.getElementById('map-one'), {
  //   center: {lat: 55.622882, lng: 37.666331},
  //   zoom: 17,
  //   scrollwheel: false
  // });

  // map2 = new google.maps.Map(document.getElementById('map-two'), {
  //   center: {lat: 55.791029, lng: 37.772815},
  //   zoom: 17,
  //   scrollwheel: false
  // });

  // map3 = new google.maps.Map(document.getElementById('map-three'), {
  //   center: {lat: 55.624980, lng: 37.441106},
  //   zoom: 17,
  //   scrollwheel: false
  // });

  // map4 = new google.maps.Map(document.getElementById('map-four'), {
  //   center: {lat: 55.815578, lng: 37.463833},
  //   zoom: 17,
  //   scrollwheel: false
  // });

  // map5 = new google.maps.Map(document.getElementById('map-five'), {
  //   center: {lat: 55.650556, lng: 37.530680},
  //   zoom: 17,
  //   scrollwheel: false
  // });

  // map6 = new google.maps.Map(document.getElementById('map-six'), {
  //   center: {lat: 55.872582, lng: 37.636933},
  //   zoom: 17,
  //   scrollwheel: false
  // });

  // map7 = new google.maps.Map(document.getElementById('map-seven'), {
  //   center: {lat: 55.611824, lng: 37.488795},
  //   zoom: 17,
  //   scrollwheel: false
  // });

  var marker = new google.maps.Marker({
    position: {lat: 55.689265, lng: 37.566928},
    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,
    title: 'УЛ. ДМИТРИЯ УЛЬЯНОВА, Д.10/1 КОРП.2'
  });

  var marker = new google.maps.Marker({
    position: {lat: 55.622882, lng: 37.666331},
    map: map,
    title: 'УЛ. СОЛНЕЧНАЯ, Д.6'
  });

  var marker = new google.maps.Marker({
    position: {lat: 55.791029, lng: 37.772815},
    map: map,
    title: 'УЛ. ПЕРВОМАЙСКАЯ, Д.5'
  });

  var marker = new google.maps.Marker({
    position: {lat: 55.624980, lng: 37.441106},
    map: map,
    title: 'КИЕВСКОЕ Ш. 1-Й КМ., "СТРОЙМАСТЕР"'
  });

  var marker = new google.maps.Marker({
    position: {lat: 55.815578, lng: 37.463833},
    map: map,
    title: 'УЛ.ГАБРИЧЕВСКОГО Д.10/4'
  });

  var marker = new google.maps.Marker({
    position: {lat: 55.650556, lng: 37.530680},
    map: map,
    title: 'УЛ. ПРОФСОЮЗНАЯ Д.88/20'
  });

  var marker = new google.maps.Marker({
    position: {lat: 55.872582, lng: 37.636933},
    map: map,
    title: 'УЛ. ПОЛЯРНАЯ, Д.3, КОРП.1'
  });

  var marker = new google.maps.Marker({
    position: {lat: 55.611824, lng: 37.488795},
    map: map,
    title: 'ТК "МЕЛЬНИЦА" 41КМ. МКАД, РЯД 3-4/7(И-4/7)'
  });
}


function header_slider(selector) {
	$(selector).slick({
	  dots: false,
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: true,
	  prevArrow: '.prev',
	  nextArrow: '.next',
	  responsive: [
	    {
	      breakpoint: 840,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 645,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 601,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
}


$(document).ready(function(){
	if ($('.map').length) {
		initMap();
	}

	header_slider('.header-slider');

	$('.goal').styler();
	$('.radio').styler();
	$('.number').styler();

	$('.burger').click(function() {
	  $(this).toggleClass("selected");
	  $(this).next('ul').slideToggle();
	});

	$('.main-wrapper .filter-wrap .desc a').click(function() {
		$(this).closest('.desc').find('.hidden').toggleClass('active');
		$(this).text(function(i, text){
          return text === "Подробнее" ? "Скрыть" : "Подробнее";
      })
	})

	$('.buy, .book').fancybox({
		'beforeLoad': function(){
		    text = $(this.element).parent('.item').find('.name').text();
		    test = $(this.element).parent('.item').find('p').first().text().split('/ ')[0];
		    index = test.indexOf('*');
		    size1 = test.slice(index+1);
		    index2 = test.split("").reverse().join("").indexOf('*');
		    size2 = test.slice(-index2);
		    size = size1*size2;
			prodId = $(this.element).parent('.item').attr('id');
		},
		openEffect : 'fade',
	    closeEffect : 'fade',
	    autoSize:true,
	    width : 295,
	    height : 300,
	    maxWidth : '100%',
	    wrapCSS:'wrap-order',
	    'closeBtn' : true,
	    fitToView:true,
	    autoCenter: true,
	    padding:'2px',
	    'afterLoad': function(){

	    	$('#metr-styler').addClass('checked');
		    this.content.find('.order-title').text("Купить:" + text);
		    this.content.find('.btns .basket').attr("data-product", +prodId);

		    var numb = 'шт.';
		    var desc = 'Количество округляется до целой плитки.';
		    var val = $('.basket-form input.number').val();
		    var thiss = this.content;
		    var bol = false;

		    $('.number').on('change', function(){
		    	val = $('.basket-form input.number').val();
		    });

		    $('.check').on('mousedown', function(e){
		    	if ($(this).find('.radio').hasClass('checked')) {
		    		bol = true;
		    	} else {
		    		bol = false;
		    	}
		    });

		    $('.check').on('mouseup', function(e){
		    	if (bol==false) {
		    		if ($('#metr-styler').hasClass('checked')){
				    	val = val*(100*100/size);
				    	numb = 'шт.';
				    	desc = 'Количество округляется до целой плитки.';
				    } else if ($('#sht-styler').hasClass('checked')){
				    	val = (val*size)/10000;
				    	numb = 'кв.м.';
				    	desc = 'Количество плитки округляется кратно метражу целой упаковки.';
				    }
				    thiss.find('.number span:last-child').text(numb);
				    thiss.find('p').text(desc);
				    thiss.find('.basket-form input.number').val(Math.round(val));
				}
		    });

		    $('.btns .basket').on('click', function() {
		    	var qty = thiss.find('.basket-form input.number').val();
		    	var ID = $(this).attr('data-product');
		    	var formSur = $(this).closest('.basket-form').serialize();
		    	if ($('#metr-styler').hasClass('checked')) {
                    qty = Math.round(qty / size);
                } else {
                    qty = Math.round(qty * size * 10000) / 10000;
                }
                $.ajax({
	                type: 'POST',
	                url: '/catalog/',
	                data: {
	                    action: 'ADD2BASKET',
	                    id: ID,
	                    quantity: qty,
	                    ajax_request: 1
	                },
	                success: function() {
			            // $('#header').load('/bitrix/templates/PLITKAMSK_NEW/blocks/header_block.php');
			            // $('#footer_bottom_line').load('/bitrix/templates/PLITKAMSK_NEW/blocks/footer_bottom_line.php');
			            $('.close').click();
			            showMessage('Товар добавлен в корзину!<br><a href="/order/basket.php">Перейти в корзину</a>');
			            console.log("Success!");
			        }
	            });
		    });
		},
	});

	if ($('.wrap-mozaic').length) {
		$('.miscellanea .nav-collections').css('display', 'none');
	}

	$('.to-basket').fancybox({
		'beforeLoad': function(){
		    text = $(this.element).parent('.about-collect').find('.collect-name').text();
		},
		openEffect : 'fade',
	    closeEffect : 'fade',
	    autoSize:true,
	    width : 295,
	    height : 300,
	    maxWidth : '100%',
	    wrapCSS:'wrap-order',
	    'closeBtn' : true,
	    fitToView:true,
	    autoCenter: true,
	    padding:'2px',
	    'afterLoad': function(){
		    this.content.find('.order-title').text("Купить: " + text);
		},
	});

	$('.interier-item').fancybox({
		openEffect : 'fade',
	    closeEffect : 'fade',
	    autoSize:true,
	    width : 295,
	    height : 300,
	    maxWidth : '100%',
	    wrapCSS:'wrap-interier',
	    'closeBtn' : true,
	    fitToView:true,
	    autoCenter: true,
	    padding:'2px',
	});

	$('.close').click(function(e){
		e.preventDefault();
		$.fancybox.close();
	});

	$('.store .photos .pic, .wrap-content .content .photos .pic, .wrap-delivery .deliv-item .photos .pic').fancybox({
		openEffect	: 'fade',
		closeEffect	: 'fade'
	});

	// $('.metro-item .name').click(function(e){
	// 	e.preventDefault();
	// 	$(this).toggleClass('active');
	// 	$(this).next('.wrap-map').slideToggle();
	// 	initMap();
	// });

	$('.header-search .main-search .search .examples-search a').click(function() {
		var example = $(this).text();
		$(this).closest('.search').find('input').val(example);
	});

	$('.main-nav .main-link span').click(function(e){
		e.preventDefault();

		$(this).closest('.main-nav').find('.main-link').removeClass('active');

		var cur = $(this).closest('.main-link').next('ul');
		var test = true;

		if (cur.css('display') == 'none') {
			test = false;
			$(this).closest('.main-link').addClass('active');
		} else {
			test = true;
			$(this).closest('.main-link').removeClass('active');
		}
		$(this).closest('.main-nav').find('li ul').slideUp();
		
		if (test == false) {
			cur.slideToggle();
		}

	});

	$('.collect-tabs ul li a').click(function(e) {
		e.preventDefault();
		$(this).closest('ul').find('a').removeClass('active');
		$(this).addClass('active');
		var Index = $(this).parent('li').index();

		$(this).closest('ul').next('.wrap-content').find('.content').css('display', 'none');
		$(this).closest('ul').next('.wrap-content').find('.content').eq(Index).css('display', 'block');
	});

	// // basket table

	// $('.links .refresh').click(function(e){
	// 	e.preventDefault();
	// 	$('.basket .table-row').each(function(){
	// 		if ($(this).find('.table-col:nth-child(5) .jq-radio').hasClass('checked')) {
	// 			$(this).closest('.table-row').remove();
	// 			console.log(1);
	// 			Table();
	// 		}
	// 	});
	// });

	// function Table() {
	// 	var summ = 0;
	// 	var plus = 0;
	// 	$('.basket .table-row').not(":last-child").each(function(){
	// 		plus = +($(this).find('.table-col:nth-child(3) b').text());
	// 		summ += plus;
	// 	});
	// 	$('.basket .table-row:last-child .table-col b').text(summ);

	// 	var mainSumm = 0;
	// 	var mainPlus = 0;
	// 	$('.basket .table-row').not(":last-child").each(function(){
	// 		mainPlus = +($(this).find('.table-col:last-child i').text());
	// 		mainSumm += mainPlus;
	// 	});
	// 	var minus = $('.basket .table-row:last-child .table-col:last-child strong').text().slice(0, -4);
	// 	mainSumm -= minus;
	// 	$('.basket .table-row:last-child .table-col:last-child span').text(mainSumm.toFixed(2) + " руб");		
	// };

	// Table();

	// // /basket table

	$.widget( "custom.combobox", {
      _create: function() {
        this.wrapper = $( "<span>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );
 
        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
      },
 
      _createAutocomplete: function() {
        var selected = this.element.children( ":selected" ),
          value = selected.val() ? selected.text() : "";
 
        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
          .autocomplete({
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" )
          })
          .tooltip({
            classes: {
              "ui-tooltip": "ui-state-highlight"
            }
          });
 
        this._on( this.input, {
          autocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;
            this._trigger( "select", event, {
              item: ui.item.option
            });
          },
 
          autocompletechange: "_removeIfInvalid"
        });
      },
 
      _createShowAllButton: function() {
        var input = this.input,
          wasOpen = false;
 
        $( "<a>" )
          .attr( "tabIndex", -1 )
          .attr( "title", "Show All Items" )
          .tooltip()
          .appendTo( this.wrapper )
          .button({
            icons: {
              primary: "ui-icon-triangle-1-s"
            },
            text: false
          })
          .removeClass( "ui-corner-all" )
          .addClass( "custom-combobox-toggle ui-corner-right" )
          .on( "mousedown", function() {
            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
          })
          .on( "click", function() {
            input.trigger( "focus" );
 
            // Close if already visible
            if ( wasOpen ) {
              return;
            }
 
            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
          });
      },
 
      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children( "option" ).map(function() {
          var text = $( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this
            };
        }) );
      },
 
      _removeIfInvalid: function( event, ui ) {
 
        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
 
        // Found a match, nothing to do
        if ( valid ) {
          return;
        }
 
        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " didn't match any item" )
          .tooltip( "open" );
        this.element.val( "" );
        this._delay(function() {
          this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
        this.input.autocomplete( "instance" ).term = "";
      },
 
      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      }
    });
 
    $( "#combobox" ).combobox();
    $( "#toggle" ).on( "click", function() {
      $( "#combobox" ).toggle();
    });
});

$(window).load(function(){

});

$(window).resize(function(){

});