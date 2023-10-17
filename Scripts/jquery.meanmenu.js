/*!
* jQuery meanMenu v2.0.8
* @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
*
*/
!(function ($) {
  'use strict';
  $.fn.meanmenu = function (e) {
    var n = {
      meanMenuTarget: jQuery (this),
      meanMenuContainer: 'body',
      meanMenuClose: '<span /><span /><span />',
      meanMenuCloseSize: '',
      meanMenuOpen: '<span /><span /><span />',
      meanRevealPosition: 'right',
      meanRevealPositionDistance: '0',
      meanRevealColour: '',
      meanScreenWidth: '767',
      meanNavPush: '',
      meanShowChildren: !0,
      meanExpandableChildren: !0,
      meanExpand: '+',
      meanContract: '-',
      meanRemoveAttrs: !1,
      onePage: !1,
      meanDisplay: 'block',
      removeElements: '',
    };
    e = $.extend (n, e);
    var a = window.innerWidth || document.documentElement.clientWidth;
    return this.each (function () {
      var n = e.meanMenuTarget,
        t = e.meanMenuContainer,
        r = e.meanMenuClose,
        i = e.meanMenuCloseSize,
        s = e.meanMenuOpen,
        u = e.meanRevealPosition,
        m = e.meanRevealPositionDistance,
        l = e.meanRevealColour,
        o = e.meanScreenWidth,
        c = e.meanNavPush,
        v = '.meanmenu-reveal',
        h = e.meanShowChildren,
        d = e.meanExpandableChildren,
        y = e.meanExpand,
        j = e.meanContract,
        Q = e.meanRemoveAttrs,
        f = e.onePage,
        g = e.meanDisplay,
        p = e.removeElements,
        C = !1;
      (navigator.userAgent.match (/iPhone/i) ||
        navigator.userAgent.match (/iPod/i) ||
        navigator.userAgent.match (/iPad/i) ||
        navigator.userAgent.match (/Android/i) ||
        navigator.userAgent.match (/Blackberry/i) ||
        navigator.userAgent.match (/Windows Phone/i)) &&
        (C = !0), (navigator.userAgent.match (/MSIE 8/i) || navigator.userAgent.match (/MSIE 7/i)) && jQuery ('html').css ('overflow-y', 'scroll');
      var w = '',
        x = function () {
          if ('center' === u) {
            var e = window.innerWidth || document.documentElement.clientWidth,
              n = e / 2 - 22 + 'px';
            (w = 'left:' + n + ';right:auto;'), C
              ? jQuery ('.meanmenu-reveal').animate ({left: n})
              : jQuery ('.meanmenu-reveal').css ('left', n);
          }
        },
        A = !1,
        E = !1;
      'right' === u &&
        (w =
          'right:' +
          m +
          ';left:auto;'), 'left' === u && (w = 'left:' + m + ';right:auto;'), x ();
      var M = '',
        P = function () {
          M.html (jQuery (M).is ('.meanmenu-reveal.meanclose') ? r : s);
        },
        W = function () {
          jQuery ('.mean-bar,.mean-push').remove (), jQuery (t).removeClass (
            'mean-container'
          ), jQuery (n).css ('display', g), (A = !1), (E = !1), jQuery (
            p
          ).removeClass ('mean-remove');
        },
        b = function () {
          var e = 'background:' + l + ';color:' + l + ';' + w;
          var $dir = location.href.split ('/');
          var $dir2 = $dir[$dir.length - 2];
          var $dir3 = $dir[$dir.length - 3];
          var $dir4 = $dir[$dir.length - 4];
          var $dir5 = $dir[$dir.length - 5];
          var $dir6 = $dir[$dir.length - 6];
          var $search = document.getElementById ('set_meanmenu').src;
          var $search2 = $search.split ('/');
          var $search3 = $search2[$search2.length - 4];
          var $slashset = '/';

          if ($search3 == $dir2) {
            //top
            $slashset = '';
          } else if ($search3 == $dir3) {
            $slashset = '../';
          } else if ($search3 == $dir4) {
            $slashset = '../../';
          } else if ($search3 == $dir5) {
            $slashset = '../../../';
          } else if ($search3 == $dir6) {
            $slashset = '../../../../';
          } else {
            $slashset = '/';
          }

          var $geturl = location.href;
          if ($geturl.match (/en/)) {
            var set_header =
              '<div id="head_fix">Materials and Additive Manufacturing Research Team,<br> MAMReT</div><h1><a href="' +
              $slashset +
              'en/index.html"><img src="' +
              $slashset +
              'image/base/logo_sp_en.png" alt="MAMRET､"></a></h1>';
          } else {
            var set_header =
              '<div id="head_fix">mmret<br>Materials and Additive Manufacturing Research Team<br> MAMReT</div><h1><a href="' +
              $slashset +
              'index.html"><img src="' +
              $slashset +
              'image/base/logo_sp.png" alt="MAMRET"></a></h1>';
          }

          //
          if (o >= a) {
            jQuery (p).addClass ('mean-remove'), (E = !0), jQuery (t).addClass (
              'mean-container'
            ), jQuery ('.mean-container').prepend (
              '<div class="mean-bar">' +
                set_header +
                '<div class="meanmenu-reveal-btn"><a href="#nav" class="meanmenu-reveal">Show Navigation</a></div><nav class="mean-nav"></nav></div>'
            );

            var r = jQuery (n).html ();
            jQuery ('.mean-nav').html (r), Q &&
              jQuery ('nav.mean-nav ul,nav.mean-nav ul *').each (function () {
                jQuery (this).is ('.mean-remove')
                  ? jQuery (this).attr ('class', 'mean-remove')
                  : jQuery (this).removeAttr (
                      'class'
                    ), jQuery (this).removeAttr ('id');
              }), jQuery (n).before ('<div class="mean-push" />'), jQuery (
              '.mean-push'
            ).css ('margin-top', c), jQuery (n).hide (), jQuery (
              '.meanmenu-reveal'
            ).show (), jQuery (v).html (s), (M = jQuery (v)), jQuery (
              '.mean-nav ul'
            ).hide (), h
              ? d
                  ? (jQuery ('.mean-nav ul ul').each (function () {
                      jQuery (this).children ().length &&
                        jQuery (this, 'li:first')
                          .parent ()
                          .append ('<a class="mean-expand" href="#"></a>');
                    }), jQuery ('.mean-expand').on ('click', function (e) {
                      e.preventDefault (), jQuery (this).hasClass (
                        'mean-clicked'
                      )
                        ? //?(jQuery(this).text(y),
                          jQuery (this).prev ('ul').slideUp (300, function () {
                            //submenu_close
                            $ (this).parent ().removeClass ('mm_active');
                          })
                        : //:(jQuery(this).text(j),
                          jQuery (this)
                            .prev ('ul')
                            .slideDown (300, function () {
                              //submenu_open
                              $ (this).parent ().addClass ('mm_active');
                            }), jQuery (this).toggleClass ('mean-clicked');
                    }))
                  : jQuery ('.mean-nav ul ul').show ()
              : jQuery ('.mean-nav ul ul').hide (), jQuery ('.mean-nav ul li')
              .last ()
              .addClass ('mean-last'), M.removeClass ('meanclose'), jQuery (
              M
            ).click (function (e) {
              e.preventDefault (), A === !1
                ? (M.css ('text-align', 'center'), M.css (
                    'text-indent',
                    '0'
                  ), M.css ('font-size', i), jQuery (
                    '.mean-nav ul:first'
                  ).slideDown (function () {
                    $ (document).trigger ('opend.meanmenu');
                  }), (A = !0))
                : (jQuery ('.mean-nav ul:first').slideUp (function () {
                    $ (document).trigger ('closed.meanmenu');
                  }), (A = !1)), M.toggleClass ('meanclose'), P (), jQuery (p).addClass ('mean-remove');
            }), f &&
              jQuery (
                '.mean-nav ul > li > a:first-child'
              ).on ('click', function () {
                jQuery (
                  '.mean-nav ul:first'
                ).slideUp (), (A = !1), jQuery (M).toggleClass ('meanclose').html (s);
              });
          } else W ();
        };
      C ||
        jQuery (window).resize (function () {
          (a =
            window.innerWidth ||
            document.documentElement
              .clientWidth), a > o, W (), o >= a ? (b (), x ()) : W ();
        }), jQuery (window).resize (function () {
        (a =
          window.innerWidth ||
          document.documentElement
            .clientWidth), C ? (x (), o >= a ? E === !1 && b () : W ()) : (W (), o >= a && (b (), x ()));
      }), b ();
    });
  };
}) (jQuery);
