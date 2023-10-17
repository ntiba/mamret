// ******************************************************************
//	top js
// ******************************************************************

// ******************************************************************
//	delay
// ******************************************************************

jQuery.fn.delay = function (time, func) {
  return this.each (function () {
    setTimeout (func, time);
  });
};

// ******************************************************************

$ ('a[href*="#"]').each (function (i) {
  var select_target = $ (this).attr ('href');
  select_target2 = select_target.split ('#');
  if (select_target2[0] != '') {
    set_target = select_target2[0] + '?linkanchor=' + select_target2[1];
    $ (this).attr ('href', set_target);
  }
});

function select_target () {
  var href = $ (this).attr ('href');
  alert (href);
}

window.onload = function () {
  var urlParam = location.search;
  if (urlParam) {
    var anchor = urlParam.replace ('?linkanchor=', '#');
    var anchorset = document.getElementById (anchor);
    var position = $ (anchor).offset ().top - 176;
    scrollTo (0, position);
  }
};

// ******************************************************************
// ready

$ (function () {
  var showFlag = false;
  var topBtn = $ ('#pagetop');
  topBtn.css ('bottom', '-100px');
  var showFlag = false;
  $ (window).scroll (function () {
    menu_resize ();
    if ($ (this).scrollTop () > 100) {
      if (showFlag == false) {
        showFlag = true;
        topBtn.stop ().animate ({bottom: '15px'}, 200);
      }
    } else {
      if (showFlag) {
        showFlag = false;
        topBtn.stop ().animate ({bottom: '-100px'}, 200);
      }
    }
  });

  var state = false;
  var scrollpos = 0;
  function mm_control () {
    if ($ ('.mean-nav ul').is (':visible')) {
      if (state == false) {
        scrollpos = $ (window).scrollTop ();
        $ ('body').addClass ('fixed').css ({top: -scrollpos});
        $ ('.mean-container').addClass ('open');
        $ ('.mean-nav #sp_cover').fadeIn ();
        state = true;
      }
    } else {
      if (state == true) {
        $ ('body').removeClass ('fixed').css ({top: 0});
        window.scrollTo (0, scrollpos);
        $ ('.mean-container').removeClass ('open');
        $ ('.mean-nav #sp_cover').fadeOut ();
        state = false;
      }
    }
  }

  $ ('#main_nav').meanmenu ({
    meanScreenWidth: '1000',
  });

  $ (document)
    .on ('opend.meanmenu closed.meanmenu', function () {
      mm_control ();
    })
    .on ('touchend click', '.mean-bar #sp_cover', function (e) {
      $ ('.mean-bar .meanmenu-reveal').trigger ('click');
      return false;
    });
  $ (window).on ('resize', function () {
    mm_control ();
    menu_resize ();
  });

  var heightSize = $ (window).height ();
  var set_height = heightSize - 107;
  $ ('.mean-container .mean-nav > ul').css ('max-height', set_height);

  $ (window).scroll (function () {
    $ ('#programs').each (function () {
      var elemPos = $ (this).offset ().top;
      var scroll = $ (window).scrollTop ();
      var windowHeight = $ (window).height ();
      if (scroll > elemPos - windowHeight + 200) {
        $ (this).addClass ('scrollin');
      } else {
        $ (this).removeClass ('scrollin');
      }
    });
  });
});
