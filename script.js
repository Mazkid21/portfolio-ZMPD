$(document).ready(function () {
  ShopifyBuyInit();

  $('#lightgallery').lightGallery({
    pager: true,
    download: false,
    hash: false,
    hideBarsDelay: 2000

    // thumbnail: true,
    // showThumbByDefault: false,
    // animateThumb: false

  });

  $("#photo .content").click(function () {

    $("#photo-overlay").addClass("animated fadeInLeft open").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated fadeInLeft");
    });
    $("#photo-overlay .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated flipInY");
    });
  });
  $("#photo-overlay .close-icon").click(function () {
    $("#photo-overlay").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated flipOutY open");
    });
  });
  $("#dev .content").click(function () {
    $("#dev-overlay").addClass("animated fadeInRight open").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated fadeInRight");
    });
    $("#dev-overlay .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated flipInY");
    });
  });
  $("#dev-overlay .close-icon").click(function () {
    $("#dev-overlay").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated flipOutY open");
    });
  });




  $("#test").click(function () {
    console.log("hio");
    $("#dev-single").addClass("animated fadeInLeft open").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated fadeInRight");
    });
    $("#dev-single .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated flipInY");
    });
  });
  $("#dev-single .close-icon").click(function () {
    $("#dev-single").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated flipOutY open");
    });
  });


  $("#test2").click(function () {
    console.log("hio2");
    $("#photo-single").addClass("animated fadeInRight open").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated fadeInRight");
    });
    $("#photo-single .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated flipInY");
    });
  });
  $("#photo-single .close-icon").click(function () {
    $("#photo-single").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated flipOutY open");
    });
  });




  var isOpen = 0; // Is the menu open or closed?

  $('.nav').on('click', 'a', function () {
    $('.nav a.active').removeClass('active');
    $('.nav-li').removeClass('navResponsive');
    $('i.icon').removeClass('fa-times');
    $('i.icon').addClass('fa-bars');
    $(this).addClass('active');

  });



  $('.sidebar').on('click', '.icon', function () {
    if (isOpen == 0) {

      $('i.icon').removeClass('fa-bars');
      $('i.icon').addClass('fa-times');
      $('.nav-li').addClass('navResponsive');
      isOpen++;
    } else {

      $('.nav-li').removeClass('navResponsive');
      $('i.icon').removeClass('fa-times');
      $('i.icon').addClass('fa-bars');
      isOpen--;
    }

  });





  $('.IA_window .full_scr').on('click', function () {
    $(this).parents().toggleClass('f_scr');

    $("html, body").animate({
      scrollTop: $(this).parents().offset().top
    }, 500);
  });



});






function ShopifyBuyInit() {
  var client = ShopifyBuy.buildClient({
    domain: 'zmpd.myshopify.com',
    storefrontAccessToken: 'b82b7ace004d146ddd10d10ed592bb49',
  });
  ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('collection', {
      id: '153491996708',
      node: document.getElementById('collection-component-1572132323818'),
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      options: {
        "product": {
          "styles": {
            "product": {
              "margin-bottom": "20px",
              "@media (min-width: 601px)": {
                "max-width": "calc(33.33333% - 30px)",
                "margin-left": "30px",
                "margin-bottom": "50px",
                "width": "calc(33.33333% - 30px)"
              },
              "img": {
                "height": "calc(100% - 15px)",
                "position": "absolute",
                "left": "0",
                "right": "0",
                "top": "0"
              },
              "imgWrapper": {
                "padding-top": "calc(75% + 15px)",
                "position": "relative",
                "height": "0"
              }
            },
            "button": {
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              }
            }
          },
          "buttonDestination": "modal",
          "contents": {
            "options": false
          },
          "text": {
            "button": "View product"
          }
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-30px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              }
            }
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "cart": {
          "styles": {
            "button": {
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              }
            }
          },
          "text": {
            "total": "Subtotal",
            "button": "Checkout"
          },
          "contents": {
            "note": true
          }
        },
        "toggle": {
          "styles": {
            "toggle": {
              "background-color": "#000000",
              ":hover": {
                "background-color": "#000000"
              },
              ":focus": {
                "background-color": "#000000"
              }
            }
          }
        }
      },
    });
    ui.createComponent('collection', {
      id: '149911011364',
      node: document.getElementById('collection-component-1572132363389'),
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      options: {
        "product": {
          "styles": {
            "product": {
              "margin-bottom": "20px",
              "@media (min-width: 601px)": {
                "max-width": "calc(33.33333% - 30px)",
                "margin-left": "30px",
                "margin-bottom": "50px",
                "width": "calc(33.33333% - 30px)"
              },
              "img": {
                "height": "calc(100% - 15px)",
                "position": "absolute",
                "left": "0",
                "right": "0",
                "top": "0"
              },
              "imgWrapper": {
                "padding-top": "calc(75% + 15px)",
                "position": "relative",
                "height": "0"
              }
            },
            "button": {
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              }
            }
          },
          "buttonDestination": "modal",
          "contents": {
            "options": false
          },
          "text": {
            "button": "View product"
          }
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-30px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              }
            }
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "cart": {
          "styles": {
            "button": {
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              }
            }
          },
          "text": {
            "total": "Subtotal",
            "button": "Checkout"
          },
          "contents": {
            "note": true
          }
        },
        "toggle": {
          "styles": {
            "toggle": {
              "background-color": "#000000",
              ":hover": {
                "background-color": "#000000"
              },
              ":focus": {
                "background-color": "#000000"
              }
            }
          }
        }
      },
    });
    ui.createComponent('collection', {
      id: '153491963940',
      node: document.getElementById('collection-component-1572132399183'),
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      options: {
        "product": {
          "styles": {
            "product": {
              "margin-bottom": "20px",
              "@media (min-width: 601px)": {
                "max-width": "calc(33.33333% - 30px)",
                "margin-left": "30px",
                "margin-bottom": "50px",
                "width": "calc(33.33333% - 30px)"
              },
              "img": {
                "height": "calc(100% - 15px)",
                "position": "absolute",
                "left": "0",
                "right": "0",
                "top": "0"
              },
              "imgWrapper": {
                "padding-top": "calc(75% + 15px)",
                "position": "relative",
                "height": "0"
              }
            },
            "button": {
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              }
            }
          },
          "buttonDestination": "modal",
          "contents": {
            "options": false
          },
          "text": {
            "button": "View product"
          }
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-30px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px",
              }
            },
            "button": {
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              }
            }
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "cart": {
          "styles": {
            "button": {
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              }
            }
          },
          "text": {
            "total": "Subtotal",
            "button": "Checkout"
          },
          "contents": {
            "note": true
          }
        },
        "toggle": {
          "styles": {
            "toggle": {
              "background-color": "#000000",
              ":hover": {
                "background-color": "#000000"
              },
              ":focus": {
                "background-color": "#000000"
              }
            }
          }
        }
      },
    });
  });

}



// ///////////////////////////////////////