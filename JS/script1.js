! function(e, t) {
  "use strict";

  function i(e) {
    p[p.length] = e
  }

  function o(e) {
    var t = new RegExp(" ?\\b" + e + "\\b");
    c.className = c.className.replace(t, "")
  }

  function s(e, t) {
    for (var i = 0, o = e.length; o > i; i++) t.call(e, e[i], i)
  }

  function n() {
    c.className = c.className.replace(
      / (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g,
      "");
    var t = e.innerWidth || c.clientWidth,
      o = e.outerWidth || e.screen.width;
    f.screen.innerWidth = t, f.screen.outerWidth = o, i("w-" + t), s(u.screens,
      function(e) {
        t > e ? (u.screensCss.gt && i("gt-" + e), u.screensCss.gte && i(
          "gte-" + e)) : e > t ? (u.screensCss.lt && i("lt-" + e), u.screensCss
          .lte && i("lte-" + e)) : t === e && (u.screensCss.lte && i(
            "lte-" + e), u.screensCss.eq && i("e-q" + e), u.screensCss.gte &&
          i("gte-" + e))
      });
    var n = e.innerHeight || c.clientHeight,
      r = e.outerHeight || e.screen.height;
    f.screen.innerHeight = n, f.screen.outerHeight = r, f.feature("portrait",
      n > t), f.feature("landscape", t > n)
  }

  function r() {
    e.clearTimeout($), $ = e.setTimeout(n, 50)
  }
  var l = e.document,
    a = e.navigator,
    d = e.location,
    c = l.documentElement,
    p = [],
    u = {
      screens: [240, 320, 480, 640, 768, 800, 1024, 1280, 1440, 1680, 1920],
      screensCss: {
        gt: !0,
        gte: !1,
        lt: !0,
        lte: !1,
        eq: !1
      },
      browsers: [{
        ie: {
          min: 6,
          max: 11
        }
      }],
      browserCss: {
        gt: !0,
        gte: !1,
        lt: !0,
        lte: !1,
        eq: !0
      },
      html5: !0,
      page: "-page",
      section: "-section",
      head: "head"
    };
  if (e.head_conf)
    for (var h in e.head_conf) e.head_conf[h] !== t && (u[h] = e.head_conf[h]);
  var f = e[u.head] = function() {
    f.ready.apply(null, arguments)
  };
  f.feature = function(e, t, s) {
    return e ? ("[object Function]" === Object.prototype.toString.call(t) &&
      (t = t.call()), i((t ? "" : "no-") + e), f[e] = !!t, s || (o("no-" +
        e), o(e), f.feature()), f) : (c.className += " " + p.join(" "), p = [],
      f)
  }, f.feature("js", !0);
  var v = a.userAgent.toLowerCase(),
    g = /mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(v);
  f.feature("mobile", g, !0), f.feature("desktop", !g, !0), v =
    /(chrome|firefox)[ \/]([\w.]+)/.exec(v) ||
    /(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(v) ||
    /(android)(?:.*version)?[ \/]([\w.]+)/.exec(v) ||
    /(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(v) || /(msie) ([\w.]+)/.exec(
      v) || /(trident).+rv:(\w.)+/.exec(v) || [];
  var m = v[1],
    w = parseFloat(v[2]);
  switch (m) {
    case "msie":
    case "trident":
      m = "ie", w = l.documentMode || w;
      break;
    case "firefox":
      m = "ff";
      break;
    case "ipod":
    case "ipad":
    case "iphone":
      m = "ios";
      break;
    case "webkit":
      m = "safari"
  }
  f.browser = {
    name: m,
    version: w
  }, f.browser[m] = !0;
  for (var y = 0, k = u.browsers.length; k > y; y++)
    for (var T in u.browsers[y])
      if (m === T) {
        i(T);
        for (var S = u.browsers[y][T].min, b = u.browsers[y][T].max, C = S; b >=
          C; C++) w > C ? (u.browserCss.gt && i("gt-" + T + C), u.browserCss.gte &&
          i("gte-" + T + C)) : C > w ? (u.browserCss.lt && i("lt-" + T + C),
          u.browserCss.lte && i("lte-" + T + C)) : w === C && (u.browserCss.lte &&
          i("lte-" + T + C), u.browserCss.eq && i("eq-" + T + C), u.browserCss
          .gte && i("gte-" + T + C))
      } else i("no-" + T);
  i(m), i(m + parseInt(w, 10)), u.html5 && "ie" === m && 9 > w && s(
    "abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|progress|section|summary|time|video"
    .split("|"), function(e) {
      l.createElement(e)
    }), s(d.pathname.split("/"), function(e, o) {
    if (this.length > 2 && this[o + 1] !== t) o && i(this.slice(o, o + 1).join(
      "-").toLowerCase() + u.section);
    else {
      var s = e || "index",
        n = s.indexOf(".");
      n > 0 && (s = s.substring(0, n)), c.id = s.toLowerCase() + u.page, o ||
        i("root" + u.section)
    }
  }), f.screen = {
    height: e.screen.height,
    width: e.screen.width
  }, n();
  var $ = 0;
  e.addEventListener ? e.addEventListener("resize", r, !1) : e.attachEvent(
    "onresize", r)
}(window),
function() {
  var e, t;
  e = function() {
      function e(e, t) {
        var i, o;
        if (this.options = {
          target: "instafeed",
          get: "popular",
          resolution: "thumbnail",
          sortBy: "none",
          links: !0,
          mock: !1,
          useHttp: !1
        }, "object" == typeof e)
          for (i in e) o = e[i], this.options[i] = o;
        this.context = null != t ? t : this, this.unique = this._genKey()
      }
      return e.prototype.hasNext = function() {
        return "string" == typeof this.context.nextUrl && this.context.nextUrl
          .length > 0
      }, e.prototype.next = function() {
        return this.hasNext() ? this.run(this.context.nextUrl) : !1
      }, e.prototype.run = function(t) {
        var i, o, s;
        if ("string" != typeof this.options.clientId && "string" != typeof this
          .options.accessToken) throw new Error(
          "Missing clientId or accessToken.");
        if ("string" != typeof this.options.accessToken && "string" != typeof this
          .options.clientId) throw new Error(
          "Missing clientId or accessToken.");
        return null != this.options.before && "function" == typeof this.options
          .before && this.options.before.call(this), "undefined" != typeof document &&
          null !== document && (s = document.createElement("script"), s.id =
            "instafeed-fetcher", s.src = t || this._buildUrl(), i = document.getElementsByTagName(
              "head"), i[0].appendChild(s), o = "instafeedCache" + this.unique,
            window[o] = new e(this.options, this), window[o].unique = this.unique
          ), !0
      }, e.prototype.parse = function(e) {
        var t, i, o, s, n, r, l, a, d, c, p, u, h, f, v, g, m, w, y, k, T, S;
        if ("object" != typeof e) {
          if (null != this.options.error && "function" == typeof this.options
            .error) return this.options.error.call(this, "Invalid JSON data"), !
            1;
          throw new Error("Invalid JSON response")
        }
        if (200 !== e.meta.code) {
          if (null != this.options.error && "function" == typeof this.options
            .error) return this.options.error.call(this, e.meta.error_message), !
            1;
          throw new Error("Error from Instagram: " + e.meta.error_message)
        }
        if (0 === e.data.length) {
          if (null != this.options.error && "function" == typeof this.options
            .error) return this.options.error.call(this,
            "No images were returned from Instagram"), !1;
          throw new Error("No images were returned from Instagram")
        }
        if (null != this.options.success && "function" == typeof this.options
          .success && this.options.success.call(this, e), this.context.nextUrl =
          "", null != e.pagination && (this.context.nextUrl = e.pagination.next_url),
          "none" !== this.options.sortBy) switch (f = "random" === this.options
          .sortBy ? ["", "random"] : this.options.sortBy.split("-"), h =
          "least" === f[0] ? !0 : !1, f[1]) {
          case "random":
            e.data.sort(function() {
              return .5 - Math.random()
            });
            break;
          case "recent":
            e.data = this._sortBy(e.data, "created_time", h);
            break;
          case "liked":
            e.data = this._sortBy(e.data, "likes.count", h);
            break;
          case "commented":
            e.data = this._sortBy(e.data, "comments.count", h);
            break;
          default:
            throw new Error("Invalid option for sortBy: '" + this.options.sortBy +
              "'.")
        }
        if ("undefined" != typeof document && null !== document && this.options
          .mock === !1) {
          if (a = e.data, null != this.options.limit && a.length > this.options
            .limit && (a = a.slice(0, this.options.limit + 1 || 9e9)), i =
            document.createDocumentFragment(), null != this.options.filter &&
            "function" == typeof this.options.filter && (a = this._filter(a,
              this.options.filter)), null != this.options.template &&
            "string" == typeof this.options.template) {
            for (s = "", r = "", c = "", v = document.createElement("div"), g =
              0, y = a.length; y > g; g++) n = a[g], l = n.images[this.options
              .resolution].url, this.options.useHttp || (l = l.replace(
              "http://", "//")), r = this._makeTemplate(this.options.template, {
              model: n,
              id: n.id,
              link: n.link,
              image: l,
              caption: this._getObjectProperty(n, "caption.text"),
              likes: n.likes.count,
              comments: n.comments.count,
              location: this._getObjectProperty(n, "location.name")
            }), s += r;
            for (v.innerHTML = s, S = [].slice.call(v.childNodes), m = 0, k =
              S.length; k > m; m++) u = S[m], i.appendChild(u)
          } else
            for (w = 0, T = a.length; T > w; w++) n = a[w], d = document.createElement(
                "img"), l = n.images[this.options.resolution].url, this.options
              .useHttp || (l = l.replace("http://", "//")), d.src = l, this.options
              .links === !0 ? (t = document.createElement("a"), t.href = n.link,
                t.appendChild(d), i.appendChild(t)) : i.appendChild(d);
          document.getElementById(this.options.target).appendChild(i), o =
            document.getElementsByTagName("head")[0], o.removeChild(document.getElementById(
              "instafeed-fetcher")), p = "instafeedCache" + this.unique,
            window[p] = void 0;
          try {
            delete window[p]
          } catch (b) {}
        }
        return null != this.options.after && "function" == typeof this.options
          .after && this.options.after.call(this), !0
      }, e.prototype._buildUrl = function() {
        var e, t, i;
        switch (e = "https://api.instagram.com/v1", this.options.get) {
          case "popular":
            t = "media/popular";
            break;
          case "tagged":
            if ("string" != typeof this.options.tagName) throw new Error(
              "No tag name specified. Use the 'tagName' option.");
            t = "tags/" + this.options.tagName + "/media/recent";
            break;
          case "location":
            if ("number" != typeof this.options.locationId) throw new Error(
              "No location specified. Use the 'locationId' option.");
            t = "locations/" + this.options.locationId + "/media/recent";
            break;
          case "user":
            if ("number" != typeof this.options.userId) throw new Error(
              "No user specified. Use the 'userId' option.");
            if ("string" != typeof this.options.accessToken) throw new Error(
              "No access token. Use the 'accessToken' option.");
            t = "users/" + this.options.userId + "/media/recent";
            break;
          default:
            throw new Error("Invalid option for get: '" + this.options.get +
              "'.")
        }
        return i = "" + e + "/" + t, i += null != this.options.accessToken ?
          "?access_token=" + this.options.accessToken : "?client_id=" + this.options
          .clientId, null != this.options.limit && (i += "&count=" + this.options
            .limit), i += "&callback=instafeedCache" + this.unique + ".parse"
      }, e.prototype._genKey = function() {
        var e;
        return e = function() {
          return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }, "" + e() + e() + e() + e()
      }, e.prototype._makeTemplate = function(e, t) {
        var i, o, s, n, r;
        for (o = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, i = e; o.test(i);) s = i.match(
            o)[1], n = null != (r = this._getObjectProperty(t, s)) ? r : "",
          i = i.replace(o, "" + n);
        return i
      }, e.prototype._getObjectProperty = function(e, t) {
        var i, o;
        for (t = t.replace(/\[(\w+)\]/g, ".$1"), o = t.split("."); o.length;) {
          if (i = o.shift(), !(null != e && i in e)) return null;
          e = e[i]
        }
        return e
      }, e.prototype._sortBy = function(e, t, i) {
        var o;
        return o = function(e, o) {
          var s, n;
          return s = this._getObjectProperty(e, t), n = this._getObjectProperty(
            o, t), i ? s > n ? 1 : -1 : n > s ? 1 : -1
        }, e.sort(o.bind(this)), e
      }, e.prototype._filter = function(e, t) {
        var i, o, s, n, r;
        for (i = [], s = function(e) {
          return t(e) ? i.push(e) : void 0
        }, n = 0, r = e.length; r > n; n++) o = e[n], s(o);
        return i
      }, e
    }(), t = "undefined" != typeof exports && null !== exports ? exports :
    window, t.Instafeed = e
}.call(this),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) :
      "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(
        jQuery)
  }(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
      function t(t, o) {
        var s, n, r, l = this;
        if (l.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: e(t),
            appendDots: e(t),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
              return '<button type="button" data-role="none">' + (t + 1) +
                "</button>"
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rtl: !1,
            slide: "",
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            variableWidth: !1,
            vertical: !1,
            waitForAnimate: !0
          }, l.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1
          }, e.extend(l, l.initials), l.activeBreakpoint = null, l.animType =
          null, l.animProp = null, l.breakpoints = [], l.breakpointSettings = [],
          l.cssTransitions = !1, l.hidden = "hidden", l.paused = !1, l.positionProp =
          null, l.respondTo = null, l.shouldClick = !0, l.$slider = e(t),
          l.$slidesCache = null, l.transformType = null, l.transitionType =
          null, l.visibilityChange = "visibilitychange", l.windowWidth =
          0, l.windowTimer = null, s = e(t).data("slick") || {}, l.options =
          e.extend({}, l.defaults, s, o), l.currentSlide = l.options.initialSlide,
          l.originalSettings = l.options, n = l.options.responsive ||
          null, n && n.length > -1) {
          l.respondTo = l.options.respondTo || "window";
          for (r in n) n.hasOwnProperty(r) && (l.breakpoints.push(n[r].breakpoint),
            l.breakpointSettings[n[r].breakpoint] = n[r].settings);
          l.breakpoints.sort(function(e, t) {
            return l.options.mobileFirst === !0 ? e - t : t - e
          })
        }
        "undefined" != typeof document.mozHidden ? (l.hidden =
            "mozHidden", l.visibilityChange = "mozvisibilitychange") :
          "undefined" != typeof document.msHidden ? (l.hidden =
            "msHidden", l.visibilityChange = "msvisibilitychange") :
          "undefined" != typeof document.webkitHidden && (l.hidden =
            "webkitHidden", l.visibilityChange = "webkitvisibilitychange"
          ), l.autoPlay = e.proxy(l.autoPlay, l), l.autoPlayClear = e.proxy(
            l.autoPlayClear, l), l.changeSlide = e.proxy(l.changeSlide, l),
          l.clickHandler = e.proxy(l.clickHandler, l), l.selectHandler =
          e.proxy(l.selectHandler, l), l.setPosition = e.proxy(l.setPosition,
            l), l.swipeHandler = e.proxy(l.swipeHandler, l), l.dragHandler =
          e.proxy(l.dragHandler, l), l.keyHandler = e.proxy(l.keyHandler,
            l), l.autoPlayIterator = e.proxy(l.autoPlayIterator, l), l.instanceUid =
          i++, l.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, l.init(), l.checkResponsive(!
            0)
      }
      var i = 0;
      return t
    }(), t.prototype.addSlide = t.prototype.slickAdd = function(t, i, o) {
      var s = this;
      if ("boolean" == typeof i) o = i, i = null;
      else if (0 > i || i >= s.slideCount) return !1;
      s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ?
        e(t).appendTo(s.$slideTrack) : o ? e(t).insertBefore(s.$slides.eq(i)) :
        e(t).insertAfter(s.$slides.eq(i)) : o === !0 ? e(t).prependTo(s.$slideTrack) :
        e(t).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(
          this.options.slide), s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides), s.$slides.each(function(t, i) {
          e(i).attr("data-slick-index", t)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, t.prototype.animateHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 &&
        e.options.vertical === !1) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.animate({
          height: t
        }, e.options.speed)
      }
    }, t.prototype.animateSlide = function(t, i) {
      var o = {},
        s = this;
      s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 &&
        (t = -t), s.transformsEnabled === !1 ? s.options.vertical === !1 ?
        s.$slideTrack.animate({
          left: t
        }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
          top: t
        }, s.options.speed, s.options.easing, i) : s.cssTransitions === !1 ?
        (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), e({
          animStart: s.currentLeft
        }).animate({
          animStart: t
        }, {
          duration: s.options.speed,
          easing: s.options.easing,
          step: function(e) {
            e = Math.ceil(e), s.options.vertical === !1 ? (o[s.animType] =
                "translate(" + e + "px, 0px)", s.$slideTrack.css(o)) :
              (o[s.animType] = "translate(0px," + e + "px)", s.$slideTrack
                .css(o))
          },
          complete: function() {
            i && i.call()
          }
        })) : (s.applyTransition(), t = Math.ceil(t), o[s.animType] = s.options
          .vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" :
          "translate3d(0px," + t + "px, 0px)", s.$slideTrack.css(o), i &&
          setTimeout(function() {
            s.disableTransition(), i.call()
          }, s.options.speed))
    }, t.prototype.asNavFor = function(t) {
      var i = this,
        o = null !== i.options.asNavFor ? e(i.options.asNavFor).slick(
          "getSlick") : null;
      null !== o && o.slideHandler(t, !0)
    }, t.prototype.applyTransition = function(e) {
      var t = this,
        i = {};
      i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " +
        t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options
        .speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack
        .css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.autoPlay = function() {
      var e = this;
      e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options
        .slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(
          e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
      var e = this;
      e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
      var e = this;
      e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 ===
          e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide +
            e.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction =
          1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) :
        e.slideHandler(e.currentSlide + e.options.slidesToScroll)
    }, t.prototype.buildArrows = function() {
      var t = this;
      t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (
        t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options
          .nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow
        .appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) &&
        t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !==
        !0 && t.$prevArrow.addClass("slick-disabled"))
    }, t.prototype.buildDots = function() {
      var t, i, o = this;
      if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
        for (i = '<ul class="' + o.options.dotsClass + '">', t = 0; t <= o.getDotCount(); t +=
          1) i += "<li>" + o.options.customPaging.call(this, o, t) +
          "</li>";
        i += "</ul>", o.$dots = e(i).appendTo(o.options.appendDots), o.$dots
          .find("li").first().addClass("slick-active").attr("aria-hidden",
            "false")
      }
    }, t.prototype.buildOut = function() {
      var t = this;
      t.$slides = t.$slider.children(t.options.slide +
          ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides
        .length, t.$slides.each(function(t, i) {
          e(i).attr("data-slick-index", t)
        }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"),
        t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>')
        .appendTo(t.$slider) : t.$slides.wrapAll(
          '<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap(
          '<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack
        .css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide ===
          !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider)
        .not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(),
        t.buildDots(), t.updateDots(), t.options.accessibility === !0 && t.$list
        .prop("tabIndex", 0), t.setSlideClasses("number" == typeof this.currentSlide ?
          this.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass(
          "draggable")
    }, t.prototype.checkResponsive = function(t) {
      var i, o, s, n = this,
        r = n.$slider.width(),
        l = window.innerWidth || e(window).width();
      if ("window" === n.respondTo ? s = l : "slider" === n.respondTo ? s =
        r : "min" === n.respondTo && (s = Math.min(l, r)), n.originalSettings
        .responsive && n.originalSettings.responsive.length > -1 && null !==
        n.originalSettings.responsive) {
        o = null;
        for (i in n.breakpoints) n.breakpoints.hasOwnProperty(i) && (n.originalSettings
          .mobileFirst === !1 ? s < n.breakpoints[i] && (o = n.breakpoints[
            i]) : s > n.breakpoints[i] && (o = n.breakpoints[i]));
        null !== o ? null !== n.activeBreakpoint ? o !== n.activeBreakpoint &&
          (n.activeBreakpoint = o, "unslick" === n.breakpointSettings[o] ?
            n.unslick() : (n.options = e.extend({}, n.originalSettings, n.breakpointSettings[
                o]), t === !0 && (n.currentSlide = n.options.initialSlide),
              n.refresh())) : (n.activeBreakpoint = o, "unslick" === n.breakpointSettings[
            o] ? n.unslick() : (n.options = e.extend({}, n.originalSettings,
            n.breakpointSettings[o]), t === !0 && (n.currentSlide = n.options
            .initialSlide), n.refresh())) : null !== n.activeBreakpoint &&
          (n.activeBreakpoint = null, n.options = n.originalSettings, t ===
            !0 && (n.currentSlide = n.options.initialSlide), n.refresh())
      }
    }, t.prototype.changeSlide = function(t, i) {
      var o, s, n, r = this,
        l = e(t.target);
      switch (l.is("a") && t.preventDefault(), n = r.slideCount % r.options
        .slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) %
        r.options.slidesToScroll, t.data.message) {
        case "previous":
          s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow -
            o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide -
              s, !1, i);
          break;
        case "next":
          s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options
            .slidesToShow && r.slideHandler(r.currentSlide + s, !1, i);
          break;
        case "index":
          var a = 0 === t.data.index ? 0 : t.data.index || e(t.target).parent()
            .index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(a), !1, i);
          break;
        default:
          return
      }
    }, t.prototype.checkNavigable = function(e) {
      var t, i, o = this;
      if (t = o.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length -
        1];
      else
        for (var s in t) {
          if (e < t[s]) {
            e = i;
            break
          }
          i = t[s]
        }
      return e
    }, t.prototype.clickHandler = function(e) {
      var t = this;
      t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(),
        e.preventDefault())
    }, t.prototype.destroy = function() {
      var t = this;
      t.autoPlayClear(), t.touchObject = {}, e(".slick-cloned", t.$slider).remove(),
        t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options
        .prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" !=
        typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass(
          "slick-slide slick-active slick-center slick-visible").attr(
          "aria-hidden", "true").removeAttr("data-slick-index").css({
          position: "",
          left: "",
          top: "",
          zIndex: "",
          opacity: "",
          width: ""
        }), t.$slider.removeClass("slick-slider"), t.$slider.removeClass(
          "slick-initialized"), t.$list.off(".slick"), e(window).off(
          ".slick-" + t.instanceUid), e(document).off(".slick-" + t.instanceUid),
        t.$slider.html(t.$slides)
    }, t.prototype.disableTransition = function(e) {
      var t = this,
        i = {};
      i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) :
        t.$slides.eq(e).css(i)
    }, t.prototype.fadeSlide = function(e, t) {
      var i = this;
      i.cssTransitions === !1 ? (i.$slides.eq(e).css({
        zIndex: 1e3
      }), i.$slides.eq(e).animate({
        opacity: 1
      }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e),
        i.$slides.eq(e).css({
          opacity: 1,
          zIndex: 1e3
        }), t && setTimeout(function() {
          i.disableTransition(e), t.call()
        }, i.options.speed))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
      var t = this;
      null !== e && (t.unload(), t.$slideTrack.children(this.options.slide)
        .detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit()
      )
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
      var e = this;
      return e.currentSlide
    }, t.prototype.getDotCount = function() {
      var e = this,
        t = 0,
        i = 0,
        o = 0;
      if (e.options.infinite === !0) o = Math.ceil(e.slideCount / e.options
        .slidesToScroll);
      else if (e.options.centerMode === !0) o = e.slideCount;
      else
        for (; t < e.slideCount;)++o, t = i + e.options.slidesToShow, i +=
          e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll :
          e.options.slidesToShow;
      return o - 1
    }, t.prototype.getLeft = function(e) {
      var t, i, o, s = this,
        n = 0;
      return s.slideOffset = 0, i = s.$slides.first().outerHeight(), s.options
        .infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset =
            s.slideWidth * s.options.slidesToShow * -1, n = i * s.options.slidesToShow *
            -1), s.slideCount % s.options.slidesToScroll !== 0 && e + s.options
          .slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow &&
          (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e -
            s.slideCount)) * s.slideWidth * -1, n = (s.options.slidesToShow -
            (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount %
            s.options.slidesToScroll * s.slideWidth * -1, n = s.slideCount %
            s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow >
        s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) *
          s.slideWidth, n = (e + s.options.slidesToShow - s.slideCount) * i
        ), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, n =
          0), s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset +=
        s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth :
        s.options.centerMode === !0 && (s.slideOffset = 0, s.slideOffset +=
          s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = s.options
        .vertical === !1 ? e * s.slideWidth * -1 + s.slideOffset : e * i *
        -1 + n, s.options.variableWidth === !0 && (o = s.$slideTrack.children(
            ".slick-slide").eq(s.slideCount <= s.options.slidesToShow || s.options
            .infinite === !1 ? e : e + s.options.slidesToShow), t = o[0] ?
          -1 * o[0].offsetLeft : 0, s.options.centerMode === !0 && (o = s.$slideTrack
            .children(".slick-slide").eq(s.options.infinite === !1 ? e : e +
              s.options.slidesToShow + 1), t = o[0] ? -1 * o[0].offsetLeft :
            0, t += (s.$list.width() - o.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
      var t = this;
      return t.options[e]
    }, t.prototype.getNavigableIndexes = function() {
      var e, t = this,
        i = 0,
        o = 0,
        s = [];
      for (t.options.infinite === !1 ? (e = t.slideCount - t.options.slidesToShow +
        1, t.options.centerMode === !0 && (e = t.slideCount)) : (i = -1 *
        t.slideCount, o = -1 * t.slideCount, e = 2 * t.slideCount); e > i;)
        s.push(i), i = o + t.options.slidesToScroll, o += t.options.slidesToScroll <=
        t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      return s
    }, t.prototype.getSlick = function() {
      return this
    }, t.prototype.getSlideCount = function() {
      var t, i, o, s = this;
      return o = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options
        .slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack
        .find(".slick-slide").each(function(t, n) {
          return n.offsetLeft - o + e(n).outerWidth() / 2 > -1 * s.swipeLeft ?
            (i = n, !1) : void 0
        }), t = Math.abs(e(i).attr("data-slick-index") - s.currentSlide) ||
        1) : s.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
      var i = this;
      i.changeSlide({
        data: {
          message: "index",
          index: parseInt(e)
        }
      }, t)
    }, t.prototype.init = function() {
      var t = this;
      e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass(
          "slick-initialized"), t.buildOut(), t.setProps(), t.startLoad(),
        t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()
      ), t.$slider.trigger("init", [t])
    }, t.prototype.initArrowEvents = function() {
      var e = this;
      e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (
        e.$prevArrow.on("click.slick", {
          message: "previous"
        }, e.changeSlide), e.$nextArrow.on("click.slick", {
          message: "next"
        }, e.changeSlide))
    }, t.prototype.initDotEvents = function() {
      var t = this;
      t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e(
          "li", t.$dots).on("click.slick", {
          message: "index"
        }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover ===
        !0 && t.options.autoplay === !0 && e("li", t.$dots).on(
          "mouseenter.slick", function() {
            t.paused = !0, t.autoPlayClear()
          }).on("mouseleave.slick", function() {
          t.paused = !1, t.autoPlay()
        })
    }, t.prototype.initializeEvents = function() {
      var t = this;
      t.initArrowEvents(), t.initDotEvents(), t.$list.on(
          "touchstart.slick mousedown.slick", {
            action: "start"
          }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
          action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
          action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
          action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), t.options
        .autoplay === !0 && (e(document).on(t.visibilityChange, function() {
          t.visibility()
        }), t.options.pauseOnHover === !0 && (t.$list.on(
          "mouseenter.slick", function() {
            t.paused = !0, t.autoPlayClear()
          }), t.$list.on("mouseleave.slick", function() {
          t.paused = !1, t.autoPlay()
        }))), t.options.accessibility === !0 && t.$list.on("keydown.slick",
          t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack)
        .children().on("click.slick", t.selectHandler), e(window).on(
          "orientationchange.slick.slick-" + t.instanceUid, function() {
            t.checkResponsive(), t.setPosition()
          }), e(window).on("resize.slick.slick-" + t.instanceUid, function() {
          e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
            t.windowDelay = window.setTimeout(function() {
              t.windowWidth = e(window).width(), t.checkResponsive(),
                t.setPosition()
            }, 50))
        }), e("*[draggable!=true]", t.$slideTrack).on("dragstart", function(
          e) {
          e.preventDefault()
        }), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function() {
      var e = this;
      e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (
          e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 &&
        e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay ===
        !0 && e.autoPlay()
    }, t.prototype.keyHandler = function(e) {
      var t = this;
      37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
        data: {
          message: "previous"
        }
      }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
        data: {
          message: "next"
        }
      })
    }, t.prototype.lazyLoad = function() {
      function t(t) {
        e("img[data-lazy]", t).each(function() {
          var t = e(this),
            i = e(this).attr("data-lazy");
          t.load(function() {
            t.animate({
              opacity: 1
            }, 200)
          }).css({
            opacity: 0
          }).attr("src", i).removeAttr("data-lazy").removeClass(
            "slick-loading")
        })
      }
      var i, o, s, n, r = this;
      r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide +
          (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow +
          2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow /
          2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) :
        (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide :
          r.currentSlide, n = s + r.options.slidesToShow, r.options.fade ===
          !0 && (s > 0 && s--, n <= r.slideCount && n++)), i = r.$slider.find(
          ".slick-slide").slice(s, n), t(i), r.slideCount <= r.options.slidesToShow ?
        (o = r.$slider.find(".slick-slide"), t(o)) : r.currentSlide >= r.slideCount -
        r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(
          0, r.options.slidesToShow), t(o)) : 0 === r.currentSlide && (o =
          r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow),
          t(o))
    }, t.prototype.loadSlider = function() {
      var e = this;
      e.setPosition(), e.$slideTrack.css({
          opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
      var e = this;
      e.changeSlide({
        data: {
          message: "next"
        }
      })
    }, t.prototype.pause = t.prototype.slickPause = function() {
      var e = this;
      e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
      var e = this;
      e.paused = !1, e.autoPlay()
    }, t.prototype.postSlide = function(e) {
      var t = this;
      t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(),
        t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 &&
        t.autoPlay()
    }, t.prototype.prev = t.prototype.slickPrev = function() {
      var e = this;
      e.changeSlide({
        data: {
          message: "previous"
        }
      })
    }, t.prototype.progressiveLazyLoad = function() {
      var t, i, o = this;
      t = e("img[data-lazy]", o.$slider).length, t > 0 && (i = e(
        "img[data-lazy]", o.$slider).first(), i.attr("src", i.attr(
        "data-lazy")).removeClass("slick-loading").load(function() {
        i.removeAttr("data-lazy"), o.progressiveLazyLoad(), o.options
          .adaptiveHeight === !0 && o.setPosition()
      }).error(function() {
        i.removeAttr("data-lazy"), o.progressiveLazyLoad()
      }))
    }, t.prototype.refresh = function() {
      var t = this,
        i = t.currentSlide;
      t.destroy(), e.extend(t, t.initials), t.init(), t.changeSlide({
        data: {
          message: "index",
          index: i
        }
      }, !0)
    }, t.prototype.reinit = function() {
      var t = this;
      t.$slides = t.$slideTrack.children(t.options.slide).addClass(
          "slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >=
        t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide -
          t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow &&
        (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(),
        t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(),
        t.initDotEvents(), t.options.focusOnSelect === !0 && e(t.$slideTrack)
        .children().on("click.slick", t.selectHandler), t.setSlideClasses(0),
        t.setPosition(), t.$slider.trigger("reInit", [t])
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
      var o = this;
      return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : o.slideCount -
          1) : e = t === !0 ? --e : e, o.slideCount < 1 || 0 > e || e > o.slideCount -
        1 ? !1 : (o.unload(), i === !0 ? o.$slideTrack.children().remove() :
          o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides =
          o.$slideTrack.children(this.options.slide), o.$slideTrack.children(
            this.options.slide).detach(), o.$slideTrack.append(o.$slides),
          o.$slidesCache = o.$slides, void o.reinit())
    }, t.prototype.setCSS = function(e) {
      var t, i, o = this,
        s = {};
      o.options.rtl === !0 && (e = -e), t = "left" == o.positionProp ? Math
        .ceil(e) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(e) +
        "px" : "0px", s[o.positionProp] = e, o.transformsEnabled === !1 ? o
        .$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] =
          "translate(" + t + ", " + i + ")", o.$slideTrack.css(s)) : (s[o
            .animType] = "translate3d(" + t + ", " + i + ", 0px)", o.$slideTrack
          .css(s)))
    }, t.prototype.setDimensions = function() {
      var e = this;
      if (e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list
        .css({
          padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
          e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
          })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(),
        e.options.vertical === !1 && e.options.variableWidth === !1) e.slideWidth =
        Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(
          Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)
        );
      else if (e.options.variableWidth === !0) {
        var t = 0;
        e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack
          .children(".slick-slide").each(function() {
            t += e.listWidth
          }), e.$slideTrack.width(Math.ceil(t) + 1)
      } else e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(
        Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(
          ".slick-slide").length));
      var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
      e.options.variableWidth === !1 && e.$slideTrack.children(
        ".slick-slide").width(e.slideWidth - i)
    }, t.prototype.setFade = function() {
      var t, i = this;
      i.$slides.each(function(o, s) {
        t = i.slideWidth * o * -1, e(s).css(i.options.rtl === !0 ? {
          position: "relative",
          right: t,
          top: 0,
          zIndex: 800,
          opacity: 0
        } : {
          position: "relative",
          left: t,
          top: 0,
          zIndex: 800,
          opacity: 0
        })
      }), i.$slides.eq(i.currentSlide).css({
        zIndex: 900,
        opacity: 1
      })
    }, t.prototype.setHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 &&
        e.options.vertical === !1) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.css("height", t)
      }
    }, t.prototype.setOption = t.prototype.slickSetOption = function(e, t,
      i) {
      var o = this;
      o.options[e] = t, i === !0 && (o.unload(), o.reinit())
    }, t.prototype.setPosition = function() {
      var e = this;
      e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(
        e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [
        e
      ])
    }, t.prototype.setProps = function() {
      var e = this,
        t = document.body.style;
      e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" ===
        e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass(
          "slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t
          .MozTransition || void 0 !== t.msTransition) && e.options.useCSS ===
        !0 && (e.cssTransitions = !0), void 0 !== t.OTransform && (e.animType =
          "OTransform", e.transformType = "-o-transform", e.transitionType =
          "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective &&
          (e.animType = !1)), void 0 !== t.MozTransform && (e.animType =
          "MozTransform", e.transformType = "-moz-transform", e.transitionType =
          "MozTransition", void 0 === t.perspectiveProperty && void 0 === t
          .MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform &&
        (e.animType = "webkitTransform", e.transformType =
          "-webkit-transform", e.transitionType = "webkitTransition", void 0 ===
          t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !
            1)), void 0 !== t.msTransform && (e.animType = "msTransform", e
          .transformType = "-ms-transform", e.transitionType =
          "msTransition", void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && e.animType !== !1 && (e.animType =
          "transform", e.transformType = "transform", e.transitionType =
          "transition"), e.transformsEnabled = null !== e.animType && e.animType !==
        !1
    }, t.prototype.setSlideClasses = function(e) {
      var t, i, o, s, n = this;
      n.$slider.find(".slick-slide").removeClass("slick-active").attr(
          "aria-hidden", "true").removeClass("slick-center"), i = n.$slider
        .find(".slick-slide"), n.options.centerMode === !0 ? (t = Math.floor(
          n.options.slidesToShow / 2), n.options.infinite === !0 && (e >=
          t && e <= n.slideCount - 1 - t ? n.$slides.slice(e - t, e + t +
            1).addClass("slick-active").attr("aria-hidden", "false") : (o =
            n.options.slidesToShow + e, i.slice(o - t + 1, o + t + 2).addClass(
              "slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(
            i.length - 1 - n.options.slidesToShow).addClass(
            "slick-center") : e === n.slideCount - 1 && i.eq(n.options.slidesToShow)
          .addClass("slick-center")), n.$slides.eq(e).addClass(
          "slick-center")) : e >= 0 && e <= n.slideCount - n.options.slidesToShow ?
        n.$slides.slice(e, e + n.options.slidesToShow).addClass(
          "slick-active").attr("aria-hidden", "false") : i.length <= n.options
        .slidesToShow ? i.addClass("slick-active").attr("aria-hidden",
          "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options
          .infinite === !0 ? n.options.slidesToShow + e : e, n.options.slidesToShow ==
          n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ?
          i.slice(o - (n.options.slidesToShow - s), o + s).addClass(
            "slick-active").attr("aria-hidden", "false") : i.slice(o, o + n
            .options.slidesToShow).addClass("slick-active").attr(
            "aria-hidden", "false")), "ondemand" === n.options.lazyLoad &&
        n.lazyLoad()
    }, t.prototype.setupInfinite = function() {
      var t, i, o, s = this;
      if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite ===
        !0 && s.options.fade === !1 && (i = null, s.slideCount > s.options.slidesToShow)
      ) {
        for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 :
          s.options.slidesToShow, t = s.slideCount; t > s.slideCount - o; t -=
          1) i = t - 1, e(s.$slides[i]).clone(!0).attr("id", "").attr(
          "data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass(
          "slick-cloned");
        for (t = 0; o > t; t += 1) i = t, e(s.$slides[i]).clone(!0).attr(
          "id", "").attr("data-slick-index", i + s.slideCount).appendTo(s
          .$slideTrack).addClass("slick-cloned");
        s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
          e(this).attr("id", "")
        })
      }
    }, t.prototype.selectHandler = function(t) {
      var i = this,
        o = parseInt(e(t.target).parents(".slick-slide").attr(
          "data-slick-index"));
      return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.$slider
        .find(".slick-slide").removeClass("slick-active").attr(
          "aria-hidden", "true"), i.$slides.eq(o).addClass("slick-active")
        .attr("aria-hidden", "false"), i.options.centerMode === !0 && (i.$slider
          .find(".slick-slide").removeClass("slick-center"), i.$slides.eq(
            o).addClass("slick-center")), void i.asNavFor(o)) : void i.slideHandler(
        o)
    }, t.prototype.slideHandler = function(e, t, i) {
      var o, s, n, r, l = null,
        a = this;
      return t = t || !1, a.animating === !0 && a.options.waitForAnimate ===
        !0 || a.options.fade === !0 && a.currentSlide === e || a.slideCount <=
        a.options.slidesToShow ? void 0 : (t === !1 && a.asNavFor(e), o = e,
          l = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft =
          null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 &&
          a.options.centerMode === !1 && (0 > e || e > a.getDotCount() * a.options
            .slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide,
            i !== !0 ? a.animateSlide(r, function() {
              a.postSlide(o)
            }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode ===
          !0 && (0 > e || e > a.slideCount - a.options.slidesToScroll) ?
          void(a.options.fade === !1 && (o = a.currentSlide, i !== !0 ? a.animateSlide(
            r, function() {
              a.postSlide(o)
            }) : a.postSlide(o))) : (a.options.autoplay === !0 &&
            clearInterval(a.autoPlayTimer), s = 0 > o ? a.slideCount % a.options
            .slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options
            .slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount %
            a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !
            0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n =
            a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide),
            a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (i !==
              !0 ? a.fadeSlide(s, function() {
                a.postSlide(s)
              }) : a.postSlide(s), void a.animateHeight()) : void(i !== !0 ?
              a.animateSlide(l, function() {
                a.postSlide(s)
              }) : a.postSlide(s))))
    }, t.prototype.startLoad = function() {
      var e = this;
      e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (
          e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 &&
        e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass(
          "slick-loading")
    }, t.prototype.swipeDirection = function() {
      var e, t, i, o, s = this;
      return e = s.touchObject.startX - s.touchObject.curX, t = s.touchObject
        .startY - s.touchObject.curY, i = Math.atan2(t, e), o = Math.round(
          180 * i / Math.PI), 0 > o && (o = 360 - Math.abs(o)), 45 >= o &&
        o >= 0 ? s.options.rtl === !1 ? "left" : "right" : 360 >= o && o >=
        315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && 225 >=
        o ? s.options.rtl === !1 ? "right" : "left" : "vertical"
    }, t.prototype.swipeEnd = function() {
      var e, t = this;
      if (t.dragging = !1, t.shouldClick = t.touchObject.swipeLength > 10 ?
        !1 : !0, void 0 === t.touchObject.curX) return !1;
      if (t.touchObject.edgeHit === !0 && t.$slider.trigger("edge", [t, t.swipeDirection()]),
        t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
        case "left":
          e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide +
            t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.slideHandler(
            e), t.currentDirection = 0, t.touchObject = {}, t.$slider.trigger(
            "swipe", [t, "left"]);
          break;
        case "right":
          e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide -
            t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.slideHandler(
            e), t.currentDirection = 1, t.touchObject = {}, t.$slider.trigger(
            "swipe", [t, "right"])
      } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(
        t.currentSlide), t.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
      var t = this;
      if (!(t.options.swipe === !1 || "ontouchend" in document && t.options
        .swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf(
          "mouse"))) switch (t.touchObject.fingerCount = e.originalEvent &&
        void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length :
        1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
        e.data.action) {
        case "start":
          t.swipeStart(e);
          break;
        case "move":
          t.swipeMove(e);
          break;
        case "end":
          t.swipeEnd(e)
      }
    }, t.prototype.swipeMove = function(e) {
      var t, i, o, s, n, r = this;
      return n = void 0 !== e.originalEvent ? e.originalEvent.touches :
        null, !r.dragging || n && 1 !== n.length ? !1 : (t = r.getLeft(r.currentSlide),
          r.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, r.touchObject
          .curY = void 0 !== n ? n[0].pageY : e.clientY, r.touchObject.swipeLength =
          Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX,
            2))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent &&
            r.touchObject.swipeLength > 4 && e.preventDefault(), s = (r.options
              .rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ?
              1 : -1), o = r.touchObject.swipeLength, r.touchObject.edgeHit = !
            1, r.options.infinite === !1 && (0 === r.currentSlide &&
              "right" === i || r.currentSlide >= r.getDotCount() && "left" ===
              i) && (o = r.touchObject.swipeLength * r.options.edgeFriction,
              r.touchObject.edgeHit = !0), r.swipeLeft = r.options.vertical ===
            !1 ? t + o * s : t + o * (r.$list.height() / r.listWidth) * s,
            r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating ===
            !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) :
          void 0)
    }, t.prototype.swipeStart = function(e) {
      var t, i = this;
      return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ?
        (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !==
          e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject
          .startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
          i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY :
          e.clientY, void(i.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
      var e = this;
      null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options
        .slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
      var t = this;
      e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(),
        t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow
        .remove(), t.$nextArrow && "object" != typeof t.options.nextArrow &&
        t.$nextArrow.remove(), t.$slides.removeClass(
          "slick-slide slick-active slick-visible").attr("aria-hidden",
          "true").css("width", "")
    }, t.prototype.unslick = function() {
      var e = this;
      e.destroy()
    }, t.prototype.updateArrows = function() {
      var e, t = this;
      e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 &&
        t.options.infinite !== !0 && t.slideCount > t.options.slidesToShow &&
        (t.$prevArrow.removeClass("slick-disabled"), t.$nextArrow.removeClass(
            "slick-disabled"), 0 === t.currentSlide ? (t.$prevArrow.addClass(
            "slick-disabled"), t.$nextArrow.removeClass("slick-disabled")) :
          t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options
          .centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow
            .removeClass("slick-disabled")) : t.currentSlide >= t.slideCount -
          1 && t.options.centerMode === !0 && (t.$nextArrow.addClass(
            "slick-disabled"), t.$prevArrow.removeClass("slick-disabled")))
    }, t.prototype.updateDots = function() {
      var e = this;
      null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr(
        "aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide /
        e.options.slidesToScroll)).addClass("slick-active").attr(
        "aria-hidden", "false"))
    }, t.prototype.visibility = function() {
      var e = this;
      document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : (e.paused = !
        1, e.autoPlay())
    }, e.fn.slick = function() {
      var e, i = this,
        o = arguments[0],
        s = Array.prototype.slice.call(arguments, 1),
        n = i.length,
        r = 0;
      for (r; n > r; r++)
        if ("object" == typeof o || "undefined" == typeof o ? i[r].slick =
          new t(i[r], o) : e = i[r].slick[o].apply(i[r].slick, s),
          "undefined" != typeof e) return e;
      return i
    }, e(function() {
      e("[data-slick]").slick()
    })
  }),
  function(e) {
    var t = 500,
      i = 680,
      o = window.location.pathname.split("/"),
      s = o[1],
      n = e("#menu"),
      r = e("#menu-main-menu"),
      l = e(".menu-link"),
      a = e(".menu-item-has-children > a");
    if ("project" == s && a.filter("[href^='/projects/']").parent("li").addClass(
      "current-menu-parent"), r.length) {
      var d = r.find(
        "> li.menu-item-has-children.current-menu-parent, > li.current-menu-item.menu-item-has-children"
      );
      if (d.length) {
        var c = d.find("> .sub-menu");
        if (c.length) {
          var p = e('<ul class="horizontal-subnavigation"></ul>');
          if (p.html(c.html()), n.after(p), "project" == s) {
            var u = e(".projects-subnavigation").eq(0);
            if (u.length) {
              var h = u.attr("data-cat-relative-url");
              p.find('a[href="' + h + '"]').addClass("selected")
            }
          }
        }
      }
      l.click(function(e) {
        e.preventDefault(), l.toggleClass("active"), n.toggleClass("active")
      }), a.click(function(t) {
        t.preventDefault();
        var i = e(this);
        i.toggleClass("active").next("ul").toggleClass("active")
      })
    }
    var f = e(".project_photo_wrapper");
    if (f.length) {
      var v = f.find("> div");
      if (v.length) {
        f.slick({
          dots: !1,
          touchMove: !1,
          lazyLoad: "progressive",
          arrows: !1,
          infinite: !0,
          autoplay: !1,
          autoplaySpeed: 4e3,
          speed: 800,
          responsive: [{
            breakpoint: i,
            settings: {
              arrows: !1,
              dots: !0,
              touchMove: !0,
              lazyLoad: "ondemand",
              autoplay: !1
            }
          }]
        });
        var g = e("#photo-details"),
          m = e("#photo-details-content"),
          w = e("#photo-details-heading"),
          y = e(".thumbnails_wrapper").find("a");
        f.on("beforeChange", function(t, i, o, s) {
          y.removeClass("selected"), y.eq(s).addClass("selected");
          var n = v.eq(s).find("div").html();
          n = e.trim(n), m.html(n), "" == n ? g.addClass("hidden") : (g.removeClass(
            "hidden"), g.css("top", .5 * (f.height() - g.height())))
        }), y.click(function(t) {
          t.preventDefault();
          var i = e(this),
            o = y.index(i);
          f.slick("slickGoTo", o)
        }), w.click(function(e) {
          e.preventDefault(), g.toggleClass("closed")
        }), y.eq(0).addClass("selected").trigger("click")
      }
    }
    var k = e("#team-cat-toggle");
    if (k.length) {
      var T = e(".team-member"),
        S = k.find("a");
      S.click(function(t) {
        if (t.preventDefault(), !e(this).hasClass("selected")) {
          var i = e(this).attr("href").replace("#", "");
          S.removeClass("selected"), e(this).addClass("selected"), T.addClass(
            "hidden"), T.filter("." + i).removeClass("hidden")
        }
      }), S.length && S.eq(0).trigger("click")
    }
    e("[data-component=instagram-feed]").each(function() {
      var t = e(this),
        i = new Instafeed({
          get: "user",
          userId: 2053453069,
          accessToken: "2053453069.467ede5.c9528149679447c2b6ee81e6540ad63c",
          limit: 2,
          resolution: "thumbnail",
          links: !1,
          sortBy: "most-recent",
          mock: !0,
          success: function(i) {
            e.each(i.data, function(e, i) {
              "undefined" != typeof i.images.thumbnail.url && t.append(
                '<span class="instagramImageWrapper' + e +
                '"><img src="' + i.images.thumbnail.url +
                '" /></span>')
            })
          }
        });
      i.run()
    }), e("[data-component=heroSlider], [data-component=standardSlider]").each(
      function() {
        var i = e(this);
        i.slick({
          dots: !0,
          touchMove: !1,
          lazyLoad: "progressive",
          arrows: !1,
          infinite: !0,
          autoplay: !0,
          autoplaySpeed: 4e3,
          fade: !0,
          speed: 800,
          cssEase: "linear",
          responsive: [{
            breakpoint: t,
            settings: {
              arrows: !1,
              dots: !0,
              touchMove: !0,
              lazyLoad: "ondemand"
            }
          }]
        })
      })
  }(jQuery);