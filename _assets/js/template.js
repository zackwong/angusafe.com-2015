function FastClick(t) {
    var e, i = this;
    if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.lastTouchIdentifier = this.touchStartY = this.touchStartX = 0, this.touchBoundary = 10, this.layer = t, !t || !t.nodeType) throw new TypeError("Layer must be a document node");
    this.onClick = function() {
        return FastClick.prototype.onClick.apply(i, arguments)
    },
    this.onMouse = function() {
        return FastClick.prototype.onMouse.apply(i, arguments)
    },
    this.onTouchStart = function() {
        return FastClick.prototype.onTouchStart.apply(i, arguments)
    },
    this.onTouchEnd = function() {
        return FastClick.prototype.onTouchEnd.apply(i, arguments)
    },
    this.onTouchCancel = function() {
        return FastClick.prototype.onTouchCancel.apply(i, arguments)
    },
    FastClick.notNeeded(t) || (this.deviceIsAndroid && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, i, n) {
        var s = Node.prototype.removeEventListener;
        "click" === e ? s.call(t, e, i.hijacked || i, n) : s.call(t, e, i, n)
    },
    t.addEventListener = function(e, i, n) {
        var s = Node.prototype.addEventListener;
        "click" === e ? s.call(t, e, i.hijacked || (i.hijacked = function(t) {
            t.propagationStopped || i(t)
        }), n) : s.call(t, e, i, n)
    }), "function" == typeof t.onclick && (e = t.onclick, t.addEventListener("click",
    function(t) {
        e(t)
    },
    !1), t.onclick = null))
} (function() {
    jQuery(function(t) {
        var e, i;
        return e = function(e) {
            var n;
            return e.find(".link").hide(),
            e.removeClass("active"),
            n = e.next().length > 0 ? e.next() : t("#billboard .bb:first"),
            n.addClass("active"),
            n.find(".link").show(),
            i()
        },
        i = function() {
            var i, n, s, o, a;
            return i = t("#billboard .bb.active"),
            o = t(".subtitle", i).css("left"),
            s = t(".image", i).css("right"),
            a = t(".title", i).css("left"),
            t(window).width() <= 480 ? (n = t(".title", i).width() / -2, t(".title", i).css({
                left: "50%",
                "margin-left": n
            }).animate({
                opacity: 1
            },
            200,
            function() {
                return n = t(".image", i).width() / -2,
                t(".image", i).css({
                    right: "50%",
                    "margin-right": n
                }).animate({
                    opacity: 1
                },
                200,
                function() {
                    return setTimeout(function() {
                        return t(".title", i).animate({
                            opacity: 0
                        },
                        200,
                        function() {
                            return t(".image", i).animate({
                                opacity: 0
                            },
                            200,
                            function() {
                                return t(".subtitle", i).animate({
                                    opacity: 0
                                },
                                200,
                                function() {
                                    return t(".subtitle", i).css({
                                        "margin-left": 0,
                                        left: o
                                    }),
                                    t(".image", i).css({
                                        "margin-right": 0,
                                        right: s
                                    }),
                                    t(".title", i).css({
                                        "margin-left": 0,
                                        left: a
                                    }),
                                    e(i)
                                })
                            })
                        })
                    },
                    4e3)
                })
            })) : t(".image", i).animate({
                right: "+=50",
                opacity: 1
            },
            200,
            function() {
                return t(".title", i).animate({
                    left: "-=50",
                    opacity: 1
                },
                200,
                function() {
                    return t(".subtitle", i).animate({
                        left: "-=50",
                        opacity: 1
                    }),
                    setTimeout(function() {
                        return t(".image", i).animate({
                            right: "+=50",
                            opacity: 0
                        },
                        200,
                        function() {
                            return t(".title", i).animate({
                                left: "-=50",
                                opacity: 0
                            },
                            200,
                            function() {
                                return t(".subtitle", i).animate({
                                    left: "-=50",
                                    opacity: 0
                                },
                                200,
                                function() {
                                    return t(".subtitle", i).css("left", o),
                                    t(".image", i).css("right", s),
                                    t(".title", i).css("left", a),
                                    e(i)
                                })
                            })
                        })
                    },
                    4e3)
                })
            })
        },
        setTimeout(i, 500)
    })
}).call(this),
function() {
    jQuery(function(t) {
        return t("#case_container").isotope({
            itemSelector: "#casesz .case_item"
        }),
        setTimeout(function() {
            t("#case_container").isotope("reLayout")
        },
        3e3),
        t("#filters a").click(function(e) {
            var i;
            return t(this).data("filter") ? (e.preventDefault(), i = t(this).parent(), i.siblings("li").removeClass("active"), i.addClass("active"), t("#case_container").isotope({
                filter: t(this).data("filter")
            })) : void 0
        }),
        t("#casesz .case_item").each(function(e, i) {
            return t(i).magnificPopup({
                items: {
                    src: '<div style="text-align: center;"><iframe class="vid" height=400 width=720 src="' + t(i).find("a").data("iframe") + '" frameborder=0 allowfullscreen></iframe></div>'
                },
                type: "inline"
            })
        }),
        t(".social-media, .clicktozoom").magnificPopup({
            type: "image",
            zoom: {
                enabled: !0,
                duration: 300,
                opener: function(t) {
                    return t
                }
            }
        }),
        t(".openinline").magnificPopup({
            type: "inline"
        })
    })
}.call(this),
function(t) {
    t.fn.hoverIntent = function(e, i, n) {
        var s = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        s = "object" == typeof e ? t.extend(s, e) : t.isFunction(i) ? t.extend(s, {
            over: e,
            out: i,
            selector: n
        }) : t.extend(s, {
            over: e,
            out: e,
            selector: i
        });
        var o, a, r, l, c = function(t) {
            o = t.pageX,
            a = t.pageY
        },
        h = function(e, i) {
            return i.hoverIntent_t = clearTimeout(i.hoverIntent_t),
            Math.abs(r - o) + Math.abs(l - a) < s.sensitivity ? (t(i).off("mousemove.hoverIntent", c), i.hoverIntent_s = 1, s.over.apply(i, [e])) : (r = o, l = a, i.hoverIntent_t = setTimeout(function() {
                h(e, i)
            },
            s.interval), void 0)
        },
        u = function(t, e) {
            return e.hoverIntent_t = clearTimeout(e.hoverIntent_t),
            e.hoverIntent_s = 0,
            s.out.apply(e, [t])
        },
        d = function(e) {
            var i = jQuery.extend({},
            e),
            n = this;
            n.hoverIntent_t && (n.hoverIntent_t = clearTimeout(n.hoverIntent_t)),
            "mouseenter" == e.type ? (r = i.pageX, l = i.pageY, t(n).on("mousemove.hoverIntent", c), 1 != n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function() {
                h(i, n)
            },
            s.interval))) : (t(n).off("mousemove.hoverIntent", c), 1 == n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function() {
                u(i, n)
            },
            s.timeout)))
        };
        return this.on({
            "mouseenter.hoverIntent": d,
            "mouseleave.hoverIntent": d
        },
        s.selector)
    }
} (jQuery),
$(function() {
    var t = 300,
    e = 300,
    i = .5;
    $(".contact_square").hoverIntent({
        over: function() {
            var n = $(this).find(".cs_header, .cs_shadow, .cs_content"),
            s = n.slice(3, 6);
            0 == s.length && (s = n.clone().insertAfter(n.eq(2)), s.slice(0, 2).css({
                left: -t,
                opacity: i
            }), s.slice(2, 3).css({
                left: t,
                opacity: i
            })),
            n = n.slice(0, 3),
            n.slice(0, 2).animate({
                left: t,
                opacity: i
            },
            e),
            n.slice(2, 3).animate({
                left: -t,
                opacity: i
            },
            e),
            s.slice(0, 2).animate({
                left: 0,
                opacity: 1
            },
            e),
            s.slice(2, 3).animate({
                left: 0,
                opacity: 1
            },
            e)
        },
        out: function() {
            var n = $(this).find(".cs_header, .cs_shadow, .cs_content");
            n.slice(0, 2).animate({
                left: 0,
                opacity: 1
            },
            e),
            n.slice(2, 3).animate({
                left: 0,
                opacity: 1
            },
            e),
            n.slice(3, 5).animate({
                left: -t,
                opacity: i
            },
            e),
            n.slice(5, 6).animate({
                left: t,
                opacity: i
            },
            e)
        },
        timeout: 0,
        interval: 20
    })
}),
FastClick.prototype.deviceIsAndroid = 0 < navigator.userAgent.indexOf("Android"),
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
FastClick.prototype.needsClick = function(t) {
    switch (t.nodeName.toLowerCase()) {
    case "button":
    case "select":
    case "textarea":
        if (t.disabled) return ! 0;
        break;
    case "input":
        if (this.deviceIsIOS && "file" === t.type || t.disabled) return ! 0;
        break;
    case "label":
    case "video":
        return ! 0
    }
    return /\bneedsclick\b/.test(t.className)
},
FastClick.prototype.needsFocus = function(t) {
    switch (t.nodeName.toLowerCase()) {
    case "textarea":
    case "select":
        return ! 0;
    case "input":
        switch (t.type) {
        case "button":
        case "checkbox":
        case "file":
        case "image":
        case "radio":
        case "submit":
            return ! 1
        }
        return ! t.disabled && !t.readOnly;
    default:
        return /\bneedsfocus\b/.test(t.className)
    }
},
FastClick.prototype.sendClick = function(t, e) {
    var i, n;
    document.activeElement && document.activeElement !== t && document.activeElement.blur(),
    n = e.changedTouches[0],
    i = document.createEvent("MouseEvents"),
    i.initMouseEvent("click", !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
    i.forwardedTouchEvent = !0,
    t.dispatchEvent(i)
},
FastClick.prototype.focus = function(t) {
    var e;
    this.deviceIsIOS && t.setSelectionRange ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
},
FastClick.prototype.updateScrollParent = function(t) {
    var e, i;
    if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
        i = t;
        do {
            if (i.scrollHeight > i.offsetHeight) {
                e = i,
                t.fastClickScrollParent = i;
                break
            }
            i = i.parentElement
        } while ( i )
    }
    e && (e.fastClickLastScrollTop = e.scrollTop)
},
FastClick.prototype.getTargetElementFromEventTarget = function(t) {
    return t.nodeType === Node.TEXT_NODE ? t.parentNode: t
},
FastClick.prototype.onTouchStart = function(t) {
    var e, i, n;
    if (1 < t.targetTouches.length) return ! 0;
    if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], this.deviceIsIOS) {
        if (n = window.getSelection(), n.rangeCount && !n.isCollapsed) return ! 0;
        if (!this.deviceIsIOS4) {
            if (i.identifier === this.lastTouchIdentifier) return t.preventDefault(),
            !1;
            this.lastTouchIdentifier = i.identifier,
            this.updateScrollParent(e)
        }
    }
    return this.trackingClick = !0,
    this.trackingClickStart = t.timeStamp,
    this.targetElement = e,
    this.touchStartX = i.pageX,
    this.touchStartY = i.pageY,
    200 > t.timeStamp - this.lastClickTime && t.preventDefault(),
    !0
},
FastClick.prototype.touchHasMoved = function(t) {
    t = t.changedTouches[0];
    var e = this.touchBoundary;
    return Math.abs(t.pageX - this.touchStartX) > e || Math.abs(t.pageY - this.touchStartY) > e ? !0 : !1
},
FastClick.prototype.findControl = function(t) {
    return void 0 !== t.control ? t.control: t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
},
FastClick.prototype.onTouchEnd = function(t) {
    var e, i, n = this.targetElement;
    if (this.touchHasMoved(t) && (this.trackingClick = !1, this.targetElement = null), !this.trackingClick) return ! 0;
    if (200 > t.timeStamp - this.lastClickTime) return this.cancelNextClick = !0;
    if (this.lastClickTime = t.timeStamp, e = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (i = t.changedTouches[0], n = document.elementFromPoint(i.pageX - window.pageXOffset, i.pageY - window.pageYOffset) || n, n.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = n.tagName.toLowerCase(), "label" === i) {
        if (e = this.findControl(n)) {
            if (this.focus(n), this.deviceIsAndroid) return ! 1;
            n = e
        }
    } else if (this.needsFocus(n)) return 100 < t.timeStamp - e || this.deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(n), this.deviceIsIOS4 && "select" === i || (this.targetElement = null, t.preventDefault()), !1);
    return this.deviceIsIOS && !this.deviceIsIOS4 && (e = n.fastClickScrollParent) && e.fastClickLastScrollTop !== e.scrollTop ? !0 : (this.needsClick(n) || (t.preventDefault(), this.sendClick(n, t)), !1)
},
FastClick.prototype.onTouchCancel = function() {
    this.trackingClick = !1,
    this.targetElement = null
},
FastClick.prototype.onMouse = function(t) {
    return this.targetElement && !t.forwardedTouchEvent && t.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
},
FastClick.prototype.onClick = function(t) {
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (t = this.onMouse(t), t || (this.targetElement = null), t)
},
FastClick.prototype.destroy = function() {
    var t = this.layer;
    this.deviceIsAndroid && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)),
    t.removeEventListener("click", this.onClick, !0),
    t.removeEventListener("touchstart", this.onTouchStart, !1),
    t.removeEventListener("touchend", this.onTouchEnd, !1),
    t.removeEventListener("touchcancel", this.onTouchCancel, !1)
},
FastClick.notNeeded = function(t) {
    var e;
    if ("undefined" == typeof window.ontouchstart) return ! 0;
    if (/Chrome\/[0-9]+/.test(navigator.userAgent)) {
        if (!FastClick.prototype.deviceIsAndroid) return ! 0;
        if ((e = document.querySelector("meta[name=viewport]")) && -1 !== e.content.indexOf("user-scalable=no")) return ! 0
    }
    return "none" === t.style.msTouchAction ? !0 : !1
},
FastClick.attach = function(t) {
    return new FastClick(t)
},
"undefined" != typeof define && define.amd ? define(function() {
    return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick,
function() {
    jQuery(function(t) {
        var e;
        return t("#finder").isotope({
            itemSelector: ".item"
        }),
        setTimeout(function() {
            t("#finder").isotope("reLayout")
        },
        3e3),
        e = function() {
            var e;
            return e = "",
            t("#finder-filter .panel").each(function(i, n) {
                var s;
                return s = t(n).find("a.active:first"),
                e += s.data("filter"),
                t(n).find("span.value").text(s.text())
            }),
            t("#finder").isotope({
                filter: e
            })
        },
        t("#finder-filter a").click(function(i) {
            return i.preventDefault(),
            t(this).siblings().removeClass("active"),
            t(this).addClass("active"),
            e()
        })
    })
}.call(this),
function(t, e) {
    t.CatSlider = function(e, i) {
        this.$el = t(i),
        this._init(e)
    },
    t.CatSlider.prototype = {
        _init: function(t) {
            this.$categories = this.$el.children("ul"),
            this.$navcategories = this.$el.find(".nav > a"),
            this.animEndEventName = {
                WebkitAnimation: "webkitAnimationEnd",
                OAnimation: "oAnimationEnd",
                msAnimation: "MSAnimationEnd",
                animation: "animationend"
            } [Modernizr.prefixed("animation")],
            this.support = Modernizr.csstransforms && Modernizr.cssanimations,
            this.isAnimating = !1,
            this.current = 0,
            t = this.$categories.eq(0),
            this.support ? t.addClass("mi-current") : (this.$categories.hide(), t.show()),
            this.$navcategories.eq(0).addClass("mi-selected"),
            this._initEvents()
        },
        _initEvents: function() {
            var i = this;
            this.$navcategories.on("click.catslider",
            function() {
                return i.showCategory(t(this).index()),
                !1
            }),
            t(e).on("resize",
            function() {
                i.$categories.removeClass().eq(0).addClass("mi-current"),
                i.$navcategories.eq(i.current).removeClass("mi-selected").end().eq(0).addClass("mi-selected"),
                i.current = 0
            })
        },
        showCategory: function(e) {
            if (e === this.current || this.isAnimating) return ! 1;
            this.isAnimating = !0,
            this.$navcategories.eq(this.current).removeClass("mi-selected").end().eq(e).addClass("mi-selected");
            var i = e > this.current ? "right": "left",
            n = "right" === i ? "mi-moveToLeft": "mi-moveToRight",
            s = "right" === i ? "mi-moveFromRight": "mi-moveFromLeft",
            o = this.$categories.eq(this.current),
            a = this.$categories.eq(e),
            r = a.children(),
            l = "right" === i ? r.length - 1 : 0,
            c = this;
            this.support ? (o.removeClass().addClass(n), setTimeout(function() {
                a.removeClass().addClass(s),
                r.eq(l).on(c.animEndEventName,
                function() {
                    t(this).off(c.animEndEventName),
                    a.addClass("mi-current"),
                    c.current = e;
                    var i = t(this);
                    c.forceRedraw(i.get(0)),
                    c.isAnimating = !1
                })
            },
            90 * r.length)) : (o.hide(), a.show(), this.current = e, this.isAnimating = !1)
        },
        forceRedraw: function(t) {
            if (t) {
                var e = document.createTextNode(" "),
                i = t.style.position;
                t.appendChild(e),
                t.style.position = "relative",
                setTimeout(function() {
                    t.style.position = i,
                    e.parentNode.removeChild(e)
                },
                25)
            }
        }
    },
    t.fn.catslider = function(e) {
        var i = t.data(this, "catslider");
        if ("string" == typeof e) {
            var n = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                i[e].apply(i, n)
            })
        } else this.each(function() {
            i ? i._init() : i = t.data(this, "catslider", new t.CatSlider(e, this))
        });
        return i
    }
} (jQuery, window),
function(t, e) {
    "use strict";
    var i, n = t.document,
    s = t.Modernizr,
    o = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    },
    a = "Moz Webkit O Ms".split(" "),
    r = function(t) {
        var e, i = n.documentElement.style;
        if ("string" == typeof i[t]) return t;
        t = o(t);
        for (var s = 0,
        r = a.length; r > s; s++) if (e = a[s] + t, "string" == typeof i[e]) return e
    },
    l = r("transform"),
    c = r("transitionProperty"),
    h = {
        csstransforms: function() {
            return !! l
        },
        csstransforms3d: function() {
            var t = !!r("perspective");
            if (t) {
                var i = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                n = "@media (" + i.join("transform-3d),(") + "modernizr)",
                s = e("<style>" + n + "{#modernizr{height:3px}}</style>").appendTo("head"),
                o = e('<div id="modernizr" />').appendTo("html");
                t = 3 === o.height(),
                o.remove(),
                s.remove()
            }
            return t
        },
        csstransitions: function() {
            return !! c
        }
    };
    if (s) for (i in h) s.hasOwnProperty(i) || s.addTest(i, h[i]);
    else {
        s = t.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var u, d = " ";
        for (i in h) u = h[i](),
        s[i] = u,
        d += " " + (u ? "": "no-") + i;
        e("html").addClass(d)
    }
    if (s.csstransforms) {
        var p = s.csstransforms3d ? {
            translate: function(t) {
                return "translate3d(" + t[0] + "px, " + t[1] + "px, 0) "
            },
            scale: function(t) {
                return "scale3d(" + t + ", " + t + ", 1) "
            }
        }: {
            translate: function(t) {
                return "translate(" + t[0] + "px, " + t[1] + "px) "
            },
            scale: function(t) {
                return "scale(" + t + ") "
            }
        },
        f = function(t, i, n) {
            var s, o, a = e.data(t, "isoTransform") || {},
            r = {},
            c = {};
            r[i] = n,
            e.extend(a, r);
            for (s in a) o = a[s],
            c[s] = p[s](o);
            var h = c.translate || "",
            u = c.scale || "",
            d = h + u;
            e.data(t, "isoTransform", a),
            t.style[l] = d
        };
        e.cssNumber.scale = !0,
        e.cssHooks.scale = {
            set: function(t, e) {
                f(t, "scale", e)
            },
            get: function(t) {
                var i = e.data(t, "isoTransform");
                return i && i.scale ? i.scale: 1
            }
        },
        e.fx.step.scale = function(t) {
            e.cssHooks.scale.set(t.elem, t.now + t.unit)
        },
        e.cssNumber.translate = !0,
        e.cssHooks.translate = {
            set: function(t, e) {
                f(t, "translate", e)
            },
            get: function(t) {
                var i = e.data(t, "isoTransform");
                return i && i.translate ? i.translate: [0, 0]
            }
        }
    }
    var m, v;
    s.csstransitions && (m = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    } [c], v = r("transitionDuration"));
    var g, y = e.event,
    C = e.event.handle ? "handle": "dispatch";
    y.special.smartresize = {
        setup: function() {
            e(this).bind("resize", y.special.smartresize.handler)
        },
        teardown: function() {
            e(this).unbind("resize", y.special.smartresize.handler)
        },
        handler: function(t, e) {
            var i = this,
            n = arguments;
            t.type = "smartresize",
            g && clearTimeout(g),
            g = setTimeout(function() {
                y[C].apply(i, n)
            },
            "execAsap" === e ? 0 : 100)
        }
    },
    e.fn.smartresize = function(t) {
        return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"])
    },
    e.Isotope = function(t, i, n) {
        this.element = e(i),
        this._create(t),
        this._init(n)
    };
    var b = ["width", "height"],
    w = e(t);
    e.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    },
    e.Isotope.prototype = {
        _create: function(t) {
            this.options = e.extend({},
            e.Isotope.settings, t),
            this.styleQueue = [],
            this.elemCount = 0;
            var i = this.element[0].style;
            this.originalStyle = {};
            var n = b.slice(0);
            for (var s in this.options.containerStyle) n.push(s);
            for (var o = 0,
            a = n.length; a > o; o++) s = n[o],
            this.originalStyle[s] = i[s] || "";
            this.element.css(this.options.containerStyle),
            this._updateAnimationEngine(),
            this._updateUsingTransforms();
            var r = {
                "original-order": function(t, e) {
                    return e.elemCount++,
                    e.elemCount
                },
                random: function() {
                    return Math.random()
                }
            };
            this.options.getSortData = e.extend(this.options.getSortData, r),
            this.reloadItems(),
            this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var l = this;
            setTimeout(function() {
                l.element.addClass(l.options.containerClass)
            },
            0),
            this.options.resizable && w.bind("smartresize.isotope",
            function() {
                l.resize()
            }),
            this.element.delegate("." + this.options.hiddenClass, "click",
            function() {
                return ! 1
            })
        },
        _getAtoms: function(t) {
            var e = this.options.itemSelector,
            i = e ? t.filter(e).add(t.find(e)) : t,
            n = {
                position: "absolute"
            };
            return i = i.filter(function(t, e) {
                return 1 === e.nodeType
            }),
            this.usingTransforms && (n.left = 0, n.top = 0),
            i.css(n).addClass(this.options.itemClass),
            this.updateSortData(i, !0),
            i
        },
        _init: function(t) {
            this.$filteredAtoms = this._filter(this.$allAtoms),
            this._sort(),
            this.reLayout(t)
        },
        option: function(t) {
            if (e.isPlainObject(t)) {
                this.options = e.extend(!0, this.options, t);
                var i;
                for (var n in t) i = "_update" + o(n),
                this[i] && this[i]()
            }
        },
        _updateAnimationEngine: function() {
            var t, e = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
            switch (e) {
            case "css":
            case "none":
                t = !1;
                break;
            case "jquery":
                t = !0;
                break;
            default:
                t = !s.csstransitions
            }
            this.isUsingJQueryAnimation = t,
            this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function() {
            var t = this.usingTransforms = this.options.transformsEnabled && s.csstransforms && s.csstransitions && !this.isUsingJQueryAnimation;
            t || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale),
            this.getPositionStyles = t ? this._translate: this._positionAbs
        },
        _filter: function(t) {
            var e = "" === this.options.filter ? "*": this.options.filter;
            if (!e) return t;
            var i = this.options.hiddenClass,
            n = "." + i,
            s = t.filter(n),
            o = s;
            if ("*" !== e) {
                o = s.filter(e);
                var a = t.not(n).not(e).addClass(i);
                this.styleQueue.push({
                    $el: a,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: o,
                style: this.options.visibleStyle
            }),
            o.removeClass(i),
            t.filter(e)
        },
        updateSortData: function(t, i) {
            var n, s, o = this,
            a = this.options.getSortData;
            t.each(function() {
                n = e(this),
                s = {};
                for (var t in a) s[t] = i || "original-order" !== t ? a[t](n, o) : e.data(this, "isotope-sort-data")[t];
                e.data(this, "isotope-sort-data", s)
            })
        },
        _sort: function() {
            var t = this.options.sortBy,
            e = this._getSorter,
            i = this.options.sortAscending ? 1 : -1,
            n = function(n, s) {
                var o = e(n, t),
                a = e(s, t);
                return o === a && "original-order" !== t && (o = e(n, "original-order"), a = e(s, "original-order")),
                (o > a ? 1 : a > o ? -1 : 0) * i
            };
            this.$filteredAtoms.sort(n)
        },
        _getSorter: function(t, i) {
            return e.data(t, "isotope-sort-data")[i]
        },
        _translate: function(t, e) {
            return {
                translate: [t, e]
            }
        },
        _positionAbs: function(t, e) {
            return {
                left: t,
                top: e
            }
        },
        _pushPosition: function(t, e, i) {
            e = Math.round(e + this.offset.left),
            i = Math.round(i + this.offset.top);
            var n = this.getPositionStyles(e, i);
            this.styleQueue.push({
                $el: t,
                style: n
            }),
            this.options.itemPositionDataEnabled && t.data("isotope-item-position", {
                x: e,
                y: i
            })
        },
        layout: function(t, e) {
            var i = this.options.layoutMode;
            if (this["_" + i + "Layout"](t), this.options.resizesContainer) {
                var n = this["_" + i + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: n
                })
            }
            this._processStyleQueue(t, e),
            this.isLaidOut = !0
        },
        _processStyleQueue: function(t, i) {
            var n, o, a, r, l = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate": "css": "css",
            c = this.options.animationOptions,
            h = this.options.onLayout;
            if (o = function(t, e) {
                e.$el[l](e.style, c)
            },
            this._isInserting && this.isUsingJQueryAnimation) o = function(t, e) {
                n = e.$el.hasClass("no-transition") ? "css": l,
                e.$el[n](e.style, c)
            };
            else if (i || h || c.complete) {
                var u = !1,
                d = [i, h, c.complete],
                p = this;
                if (a = !0, r = function() {
                    if (!u) {
                        for (var e, i = 0,
                        n = d.length; n > i; i++) e = d[i],
                        "function" == typeof e && e.call(p.element, t, p);
                        u = !0
                    }
                },
                this.isUsingJQueryAnimation && "animate" === l) c.complete = r,
                a = !1;
                else if (s.csstransitions) {
                    for (var f, g = 0,
                    y = this.styleQueue[0], C = y && y.$el; ! C || !C.length;) {
                        if (f = this.styleQueue[g++], !f) return;
                        C = f.$el
                    }
                    var b = parseFloat(getComputedStyle(C[0])[v]);
                    b > 0 && (o = function(t, e) {
                        e.$el[l](e.style, c).one(m, r)
                    },
                    a = !1)
                }
            }
            e.each(this.styleQueue, o),
            a && r(),
            this.styleQueue = []
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function(t) {
            this["_" + this.options.layoutMode + "Reset"](),
            this.layout(this.$filteredAtoms, t)
        },
        addItems: function(t, e) {
            var i = this._getAtoms(t);
            this.$allAtoms = this.$allAtoms.add(i),
            e && e(i)
        },
        insert: function(t, e) {
            this.element.append(t);
            var i = this;
            this.addItems(t,
            function(t) {
                var n = i._filter(t);
                i._addHideAppended(n),
                i._sort(),
                i.reLayout(),
                i._revealAppended(n, e)
            })
        },
        appended: function(t, e) {
            var i = this;
            this.addItems(t,
            function(t) {
                i._addHideAppended(t),
                i.layout(t),
                i._revealAppended(t, e)
            })
        },
        _addHideAppended: function(t) {
            this.$filteredAtoms = this.$filteredAtoms.add(t),
            t.addClass("no-transition"),
            this._isInserting = !0,
            this.styleQueue.push({
                $el: t,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function(t, e) {
            var i = this;
            setTimeout(function() {
                t.removeClass("no-transition"),
                i.styleQueue.push({
                    $el: t,
                    style: i.options.visibleStyle
                }),
                i._isInserting = !1,
                i._processStyleQueue(t, e)
            },
            10)
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function(t, e) {
            this.$allAtoms = this.$allAtoms.not(t),
            this.$filteredAtoms = this.$filteredAtoms.not(t);
            var i = this,
            n = function() {
                t.remove(),
                e && e.call(i.element)
            };
            t.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: t,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(n)) : n()
        },
        shuffle: function(t) {
            this.updateSortData(this.$allAtoms),
            this.options.sortBy = "random",
            this._sort(),
            this.reLayout(t)
        },
        destroy: function() {
            var t = this.usingTransforms,
            e = this.options;
            this.$allAtoms.removeClass(e.hiddenClass + " " + e.itemClass).each(function() {
                var e = this.style;
                e.position = "",
                e.top = "",
                e.left = "",
                e.opacity = "",
                t && (e[l] = "")
            });
            var i = this.element[0].style;
            for (var n in this.originalStyle) i[n] = this.originalStyle[n];
            this.element.unbind(".isotope").undelegate("." + e.hiddenClass, "click").removeClass(e.containerClass).removeData("isotope"),
            w.unbind(".isotope")
        },
        _getSegments: function(t) {
            var e, i = this.options.layoutMode,
            n = t ? "rowHeight": "columnWidth",
            s = t ? "height": "width",
            a = t ? "rows": "cols",
            r = this.element[s](),
            l = this.options[i] && this.options[i][n] || this.$filteredAtoms["outer" + o(s)](!0) || r;
            e = Math.floor(r / l),
            e = Math.max(e, 1),
            this[i][a] = e,
            this[i][n] = l
        },
        _checkIfSegmentsChanged: function(t) {
            var e = this.options.layoutMode,
            i = t ? "rows": "cols",
            n = this[e][i];
            return this._getSegments(t),
            this[e][i] !== n
        },
        _masonryReset: function() {
            this.masonry = {},
            this._getSegments();
            var t = this.masonry.cols;
            for (this.masonry.colYs = []; t--;) this.masonry.colYs.push(0)
        },
        _masonryLayout: function(t) {
            var i = this,
            n = i.masonry;
            t.each(function() {
                var t = e(this),
                s = Math.ceil(t.outerWidth(!0) / n.columnWidth);
                if (s = Math.min(s, n.cols), 1 === s) i._masonryPlaceBrick(t, n.colYs);
                else {
                    var o, a, r = n.cols + 1 - s,
                    l = [];
                    for (a = 0; r > a; a++) o = n.colYs.slice(a, a + s),
                    l[a] = Math.max.apply(Math, o);
                    i._masonryPlaceBrick(t, l)
                }
            })
        },
        _masonryPlaceBrick: function(t, e) {
            for (var i = Math.min.apply(Math, e), n = 0, s = 0, o = e.length; o > s; s++) if (e[s] === i) {
                n = s;
                break
            }
            var a = this.masonry.columnWidth * n,
            r = i;
            this._pushPosition(t, a, r);
            var l = i + t.outerHeight(!0),
            c = this.masonry.cols + 1 - o;
            for (s = 0; c > s; s++) this.masonry.colYs[n + s] = l
        },
        _masonryGetContainerSize: function() {
            var t = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: t
            }
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function(t) {
            var i = this,
            n = this.element.width(),
            s = this.fitRows;
            t.each(function() {
                var t = e(this),
                o = t.outerWidth(!0),
                a = t.outerHeight(!0);
                0 !== s.x && o + s.x > n && (s.x = 0, s.y = s.height),
                i._pushPosition(t, s.x, s.y),
                s.height = Math.max(s.y + a, s.height),
                s.x += o
            })
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function() {
            return ! 0
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            },
            this._getSegments(),
            this._getSegments(!0)
        },
        _cellsByRowLayout: function(t) {
            var i = this,
            n = this.cellsByRow;
            t.each(function() {
                var t = e(this),
                s = n.index % n.cols,
                o = Math.floor(n.index / n.cols),
                a = (s + .5) * n.columnWidth - t.outerWidth(!0) / 2,
                r = (o + .5) * n.rowHeight - t.outerHeight(!0) / 2;
                i._pushPosition(t, a, r),
                n.index++
            })
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function(t) {
            var i = this;
            t.each(function() {
                var t = e(this);
                i._pushPosition(t, 0, i.straightDown.y),
                i.straightDown.y += t.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function() {
            return ! 0
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {},
            this._getSegments(!0);
            var t = this.masonryHorizontal.rows;
            for (this.masonryHorizontal.rowXs = []; t--;) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function(t) {
            var i = this,
            n = i.masonryHorizontal;
            t.each(function() {
                var t = e(this),
                s = Math.ceil(t.outerHeight(!0) / n.rowHeight);
                if (s = Math.min(s, n.rows), 1 === s) i._masonryHorizontalPlaceBrick(t, n.rowXs);
                else {
                    var o, a, r = n.rows + 1 - s,
                    l = [];
                    for (a = 0; r > a; a++) o = n.rowXs.slice(a, a + s),
                    l[a] = Math.max.apply(Math, o);
                    i._masonryHorizontalPlaceBrick(t, l)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(t, e) {
            for (var i = Math.min.apply(Math, e), n = 0, s = 0, o = e.length; o > s; s++) if (e[s] === i) {
                n = s;
                break
            }
            var a = i,
            r = this.masonryHorizontal.rowHeight * n;
            this._pushPosition(t, a, r);
            var l = i + t.outerWidth(!0),
            c = this.masonryHorizontal.rows + 1 - o;
            for (s = 0; c > s; s++) this.masonryHorizontal.rowXs[n + s] = l
        },
        _masonryHorizontalGetContainerSize: function() {
            var t = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: t
            }
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function(t) {
            var i = this,
            n = this.element.height(),
            s = this.fitColumns;
            t.each(function() {
                var t = e(this),
                o = t.outerWidth(!0),
                a = t.outerHeight(!0);
                0 !== s.y && a + s.y > n && (s.x = s.width, s.y = 0),
                i._pushPosition(t, s.x, s.y),
                s.width = Math.max(s.x + o, s.width),
                s.y += a
            })
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function() {
            return ! 0
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            },
            this._getSegments(),
            this._getSegments(!0)
        },
        _cellsByColumnLayout: function(t) {
            var i = this,
            n = this.cellsByColumn;
            t.each(function() {
                var t = e(this),
                s = Math.floor(n.index / n.rows),
                o = n.index % n.rows,
                a = (s + .5) * n.columnWidth - t.outerWidth(!0) / 2,
                r = (o + .5) * n.rowHeight - t.outerHeight(!0) / 2;
                i._pushPosition(t, a, r),
                n.index++
            })
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function(t) {
            var i = this;
            t.each(function() {
                var t = e(this);
                i._pushPosition(t, i.straightAcross.x, 0),
                i.straightAcross.x += t.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function() {
            return ! 0
        }
    },
    e.fn.imagesLoaded = function(t) {
        function i() {
            t.call(s, o)
        }
        function n(t) {
            var s = t.target;
            s.src !== r && -1 === e.inArray(s, l) && (l.push(s), --a <= 0 && (setTimeout(i), o.unbind(".imagesLoaded", n)))
        }
        var s = this,
        o = s.find("img").add(s.filter("img")),
        a = o.length,
        r = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
        l = [];
        return a || i(),
        o.bind("load.imagesLoaded error.imagesLoaded", n).each(function() {
            var t = this.src;
            this.src = r,
            this.src = t
        }),
        s
    };
    var _ = function(e) {
        t.console && t.console.error(e)
    };
    e.fn.isotope = function(t, i) {
        if ("string" == typeof t) {
            var n = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var i = e.data(this, "isotope");
                return i ? e.isFunction(i[t]) && "_" !== t.charAt(0) ? (i[t].apply(i, n), void 0) : (_("no such method '" + t + "' for isotope instance"), void 0) : (_("cannot call methods on isotope prior to initialization; attempted to call method '" + t + "'"), void 0)
            })
        } else this.each(function() {
            var n = e.data(this, "isotope");
            n ? (n.option(t), n._init(i)) : e.data(this, "isotope", new e.Isotope(t, this, i))
        });
        return this
    }
} (window, jQuery),
function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(t.jQuery)
} (this,
function(t) {
    "use strict";
    function e(e) {
        var i = {
            range: !0,
            animate: !0
        };
        return "boolean" == typeof e ? i.animate = e: t.extend(i, e),
        i
    }
    var i = {
        props: ["touches", "pageX", "pageY"],
        filter: function(t, e) {
            var i;
            return ! e.pageX && e.touches && (i = e.touches[0]) && (t.pageX = i.pageX, t.pageY = i.pageY),
            t
        }
    };
    t.each(["touchstart", "touchmove", "touchend"],
    function(e, n) {
        t.event.fixHooks[n] = i
    });
    var n = "__pz__",
    s = Array.prototype.slice,
    o = /([A-Z])/g,
    a = /^http:[\w\.\/]+svg$/,
    r = "(\\-?[\\d\\.e]+)",
    l = "\\,?\\s*",
    c = RegExp("^matrix\\(" + r + l + r + l + r + l + r + l + r + l + r + "\\)$"),
    h = function(e, i) {
        1 !== e.nodeType && t.error("Panzoom called on non-Element node"),
        t.contains(document, e) || t.error("Panzoom element must be attached to the document");
        var s = t.data(e, n);
        if (s) return s;
        if (! (this instanceof h)) return new h(e, i);
        this.options = i = t.extend({},
        h.defaults, i),
        this.elem = e;
        var r = this.$elem = t(e);
        this.$parent = r.parent(),
        this.isSVG = a.test(e.namespaceURI) && "svg" !== e.nodeName.toLowerCase(),
        this.panning = !1,
        this._buildTransform(),
        this._transform = t.cssProps.transform.replace(o, "-$1").toLowerCase(),
        this._buildTransition(),
        this._buildContain();
        var l = t(),
        c = this;
        return t.each(["$zoomIn", "$zoomOut", "$zoomRange", "$reset"],
        function(t, e) {
            c[e] = i[e] || l
        }),
        this.enable(),
        t.data(e, n, this),
        this
    };
    return h.rmatrix = c,
    h.defaults = {
        eventNamespace: ".panzoom",
        transition: !0,
        cursor: "move",
        disablePan: !1,
        disableZoom: !1,
        increment: .3,
        minScale: .4,
        maxScale: 5,
        duration: 200,
        easing: "ease-in-out",
        contain: !1
    },
    h.prototype = {
        constructor: h,
        instance: function() {
            return this
        },
        enable: function() {
            this._unbind(),
            this._initStyle(),
            this._bind(),
            this.disabled = !1
        },
        disable: function() {
            this.disabled = !0,
            this._resetStyle(),
            this._unbind()
        },
        isDisabled: function() {
            return this.disabled
        },
        destroy: function() {
            this.disable(),
            t.removeData(this.elem, n)
        },
        reset: function(t) {
            t = e(t);
            var i = this.setMatrix(this._origTransform, t);
            t.silent || this._trigger("reset", i)
        },
        resetZoom: function(t) {
            t = e(t);
            var i = this.getMatrix(this._origTransform);
            t.dValue = i[3],
            this.zoom(i[0], t)
        },
        resetPan: function(t) {
            var i = this.getMatrix(this._origTransform);
            this.pan(i[4], i[5], e(t))
        },
        getTransform: function() {
            var e = this.elem,
            i = t.style(e, "transform");
            return this.isSVG && !i ? i = t.attr(e, "transform") : "none" === i || c.test(i) || (i = t.style(e, "transform", t.css(e, "transform"))),
            i || "none"
        },
        getMatrix: function(t) {
            var e = c.exec(t || this.getTransform());
            return e && e.shift(),
            e || [1, 0, 0, 1, 0, 0]
        },
        setMatrix: function(e, i) {
            if (!this.disabled) {
                i || (i = {}),
                "string" == typeof e && (e = this.getMatrix(e));
                var n, s, o, a, r, l = +e[0];
                return (n = void 0 !== i.contain ? i.contain: this.options.contain) && (s = "invert" === n, o = this.container, a = this.dimensions, r = (a.width * l - o.width) / 2, e[4] = Math[s ? "max": "min"](Math[s ? "min": "max"](e[4], r - a.left), -r - a.left), r = (a.height * l - o.height) / 2, e[5] = Math[s ? "max": "min"](Math[s ? "min": "max"](e[5], r - a.top), -r - a.top)),
                "skip" !== i.animate && this.transition(!i.animate),
                i.range && this.$zoomRange.val(l),
                t[this.isSVG ? "attr": "style"](this.elem, "transform", "matrix(" + e.join(",") + ")"),
                i.silent || this._trigger("change", e),
                e
            }
        },
        isPanning: function() {
            return this.panning
        },
        transition: function(e) {
            var i = e || !this.options.transition ? "none": this._transition;
            t.style(this.elem, "transition", i)
        },
        pan: function(t, e, i) {
            i || (i = {});
            var n = i.matrix;
            n || (n = this.getMatrix()),
            i.relative ? (n[4] = +n[4] + t, n[5] = +n[5] + e) : (n[4] = t, n[5] = e),
            this.setMatrix(n, i),
            i.silent || this._trigger("pan", t, e)
        },
        zoom: function(t, e) {
            var i = !1,
            n = this.options;
            if (!n.disableZoom) {
                "object" == typeof t ? (e = t, t = null) : e || (e = {});
                var s = this.getMatrix(),
                o = e.middle;
                o && (s[4] = +s[4] + (o.pageX === s[4] ? 0 : o.pageX > s[4] ? 1 : -1), s[5] = +s[5] + (o.pageY === s[5] ? 0 : o.pageY > s[5] ? 1 : -1)),
                "number" != typeof t && (t = +s[0] + n.increment * (t ? -1 : 1), i = !0),
                t > n.maxScale ? t = n.maxScale: n.minScale > t && (t = n.minScale),
                s[0] = t,
                s[3] = "number" == typeof e.dValue ? e.dValue: t,
                this.setMatrix(s, {
                    animate: "boolean" == typeof e.animate ? e.animate: i,
                    range: !e.noSetRange
                }),
                e.silent || this._trigger("zoom", t, e)
            }
        },
        option: function(e, i) {
            var n;
            if (!e) return t.extend({},
            this.options);
            if ("string" == typeof e) {
                if (1 === arguments.length) return this.options[e];
                n = {},
                n[e] = i
            } else n = e;
            this._setOptions(n)
        },
        _setOptions: function(e) {
            var i = this;
            t.each(e,
            function(e, n) {
                switch (e) {
                case "disablePan":
                    i._resetStyle();
                case "disableZoom":
                case "$zoomIn":
                case "$zoomOut":
                case "$zoomRange":
                case "$reset":
                case "onStart":
                case "onChange":
                case "onZoom":
                case "onPan":
                case "onEnd":
                case "onReset":
                case "eventNamespace":
                    i._unbind()
                }
                switch (i.options[e] = n, e) {
                case "disablePan":
                    i._initStyle();
                case "disableZoom":
                case "$zoomIn":
                case "$zoomOut":
                case "$zoomRange":
                case "$reset":
                case "onStart":
                case "onChange":
                case "onZoom":
                case "onPan":
                case "onEnd":
                case "onReset":
                case "eventNamespace":
                    i._bind();
                    break;
                case "cursor":
                    t.style(i.elem, "cursor", n);
                    break;
                case "minScale":
                    i.$zoomRange.attr("min", n);
                    break;
                case "maxScale":
                    i.$zoomRange.attr("max", n);
                    break;
                case "contain":
                    i._buildContain();
                    break;
                case "startTransform":
                    i._buildTransform();
                    break;
                case "duration":
                case "easing":
                    i._buildTransition();
                case "transition":
                    i.transition()
                }
            })
        },
        _initStyle: function() {
            this.options.disablePan || this.$elem.css("cursor", this.options.cursor);
            var e = this.$parent;
            if (e.length && !t.nodeName(e[0], "body")) {
                var i = {
                    overflow: "hidden"
                };
                "static" === e.css("position") && (i.position = "relative"),
                e.css(i)
            }
        },
        _resetStyle: function() {
            this.$elem.css({
                cursor: "",
                transition: ""
            }),
            this.$parent.css({
                overflow: "",
                position: ""
            })
        },
        _bind: function() {
            var e = this,
            i = this.options,
            n = i.eventNamespace,
            s = "touchstart" + n + " mousedown" + n,
            o = "touchend" + n + " click" + n,
            a = {};
            if (t.each(["Start", "Change", "Zoom", "Pan", "End", "Reset"],
            function() {
                var e = i["on" + this];
                t.isFunction(e) && (a["panzoom" + this.toLowerCase() + n] = e)
            }), i.disablePan && i.disableZoom || (a[s] = function(t) {
                var n; ("mousedown" === t.type ? i.disablePan || 1 !== t.which: !(n = t.touches) || (1 !== n.length || i.disablePan) && 2 !== n.length) || (t.preventDefault(), t.stopPropagation(), e._startMove(t, n))
            }), this.$elem.on(a), !i.disableZoom) {
                var r = this.$zoomIn,
                l = this.$zoomOut,
                c = this.$zoomRange,
                h = this.$reset;
                r.length && l.length && (r.on(o,
                function(t) {
                    t.preventDefault(),
                    e.zoom()
                }), l.on(o,
                function(t) {
                    t.preventDefault(),
                    e.zoom(!0)
                })),
                c.length && (c.attr({
                    min: i.minScale,
                    max: i.maxScale,
                    step: .05
                }).prop({
                    value: this.getMatrix()[0]
                }), a = {},
                a.mousedown = function() {
                    e.transition(!0)
                },
                a["change" + n] = function() {
                    e.zoom( + this.value, {
                        noSetRange: !0
                    })
                },
                c.on(a)),
                h.length && h.on(o,
                function(t) {
                    t.preventDefault(),
                    e.reset()
                })
            }
        },
        _unbind: function() {
            this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace)
        },
        _buildTransform: function() {
            this._origTransform = this.options.startTransform || this.getTransform()
        },
        _buildTransition: function() {
            var t = this.options;
            this._transform && (this._transition = this._transform + " " + t.duration + "ms " + t.easing)
        },
        _buildContain: function() {
            if (this.options.contain) {
                var e = this.$parent;
                this.container = {
                    width: e.width(),
                    height: e.height()
                };
                var i = this.elem,
                n = this.$elem;
                this.dimensions = this.isSVG ? {
                    left: i.getAttribute("x") || 0,
                    top: i.getAttribute("y") || 0,
                    width: i.getAttribute("width") || n.width(),
                    height: i.getAttribute("height") || n.height()
                }: {
                    left: t.css(i, "left", !0) || 0,
                    top: t.css(i, "top", !0) || 0,
                    width: n.width(),
                    height: n.height()
                }
            }
        },
        _getDistance: function(t) {
            var e = t[0],
            i = t[1];
            return Math.sqrt(Math.pow(Math.abs(i.pageX - e.pageX), 2) + Math.pow(Math.abs(i.pageY - e.pageY), 2))
        },
        _getMiddle: function(t) {
            var e = t[0],
            i = t[1];
            return {
                pageX: (i.pageX - e.pageX) / 2 + e.pageX,
                pageY: (i.pageY - e.pageY) / 2 + e.pageY
            }
        },
        _trigger: function(t) {
            this.$elem.triggerHandler("panzoom" + t, [this].concat(s.call(arguments, 1)))
        },
        _startMove: function(e, i) {
            var n, s, o, a, r, l, c = this,
            h = this.options,
            u = "touchstart" === e.type,
            d = h.eventNamespace,
            p = (u ? "touchmove": "mousemove") + d,
            f = (u ? "touchend": "mouseup") + d,
            m = this.getMatrix(),
            v = {
                matrix: m,
                animate: "skip"
            },
            g = m.slice(0),
            y = +g[4],
            C = +g[5];
            this.transition(!0),
            this.panning = !0,
            this._trigger("start", e, i),
            i && 2 === i.length ? (s = this._getDistance(i), o = +m[0], a = this._getMiddle(i), n = function(t) {
                t.preventDefault();
                var e = c._getMiddle(i = t.touches);
                c.pan(y + e.pageX - a.pageX, C + e.pageY - a.pageY, v);
                var n = c._getDistance(i) - s;
                c.zoom(n / 300 + o, {
                    middle: e
                })
            }) : (r = e.pageX, l = e.pageY, n = function(t) {
                t.preventDefault(),
                c.pan(y + t.pageX - r, C + t.pageY - l, v)
            }),
            t(document).off(d).on(p, n).on(f,
            function(e) {
                e.preventDefault(),
                t(this).off(d),
                c.panning = !1,
                c._trigger("end", m, !!t(g).not(m).length)
            })
        }
    },
    t.fn.panzoom = function(e) {
        var i, o, a, r;
        return "string" == typeof e ? (r = [], o = s.call(arguments, 1), this.each(function() {
            i = t.data(this, n),
            i ? "_" !== e.charAt(0) && "function" == typeof(a = i[e]) && void 0 !== (a = a.apply(i, o)) && r.push(a) : r.push(void 0)
        }), r.length ? 1 === r.length ? r[0] : r: this) : this.each(function() {
            new h(this, e)
        })
    },
    h
}),
function(t) {
    var e, i, n, s, o, a, r, l = "Close",
    c = "BeforeClose",
    h = "AfterClose",
    u = "BeforeAppend",
    d = "MarkupParse",
    p = "Open",
    f = "Change",
    m = "mfp",
    v = "." + m,
    g = "mfp-ready",
    y = "mfp-removing",
    C = "mfp-prevent-close",
    b = function() {},
    w = !!window.jQuery,
    _ = t(window),
    I = function(t, i) {
        e.ev.on(m + t + v, i)
    },
    x = function(e, i, n, s) {
        var o = document.createElement("div");
        return o.className = "mfp-" + e,
        n && (o.innerHTML = n),
        s ? i && i.appendChild(o) : (o = t(o), i && o.appendTo(i)),
        o
    },
    k = function(i, n) {
        e.ev.triggerHandler(m + i, n),
        e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n: [n]))
    },
    S = function(i) {
        return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i),
        e.currTemplate.closeBtn
    },
    T = function() {
        t.magnificPopup.instance || (e = new b, e.init(), t.magnificPopup.instance = e)
    },
    P = function() {
        var t = document.createElement("p").style,
        e = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== t.transition) return ! 0;
        for (; e.length;) if (e.pop() + "Transition" in t) return ! 0;
        return ! 1
    };
    b.prototype = {
        constructor: b,
        init: function() {
            var i = navigator.appVersion;
            e.isIE7 = -1 !== i.indexOf("MSIE 7."),
            e.isIE8 = -1 !== i.indexOf("MSIE 8."),
            e.isLowIE = e.isIE7 || e.isIE8,
            e.isAndroid = /android/gi.test(i),
            e.isIOS = /iphone|ipad|ipod/gi.test(i),
            e.supportsTransition = P(),
            e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            s = t(document),
            e.popupsCache = {}
        },
        open: function(i) {
            n || (n = t(document.body));
            var o;
            if (i.isObj === !1) {
                e.items = i.items.toArray(),
                e.index = 0;
                var r, l = i.items;
                for (o = 0; l.length > o; o++) if (r = l[o], r.parsed && (r = r.el[0]), r === i.el[0]) {
                    e.index = o;
                    break
                }
            } else e.items = t.isArray(i.items) ? i.items: [i.items],
            e.index = i.index || 0;
            if (e.isOpen) return e.updateItemHTML(),
            void 0;
            e.types = [],
            a = "",
            e.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : s,
            i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {},
            e.st = t.extend(!0, {},
            t.magnificPopup.defaults, i),
            e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile: e.st.fixedContentPos,
            e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1),
            e.bgOverlay || (e.bgOverlay = x("bg").on("click" + v,
            function() {
                e.close()
            }), e.wrap = x("wrap").attr("tabindex", -1).on("click" + v,
            function(t) {
                e._checkIfClose(t.target) && e.close()
            }), e.container = x("container", e.wrap)),
            e.contentContainer = x("content"),
            e.st.preloader && (e.preloader = x("preloader", e.container, e.st.tLoading));
            var c = t.magnificPopup.modules;
            for (o = 0; c.length > o; o++) {
                var h = c[o];
                h = h.charAt(0).toUpperCase() + h.slice(1),
                e["init" + h].call(e)
            }
            k("BeforeOpen"),
            e.st.showCloseBtn && (e.st.closeBtnInside ? (I(d,
            function(t, e, i, n) {
                i.close_replaceWith = S(n.type)
            }), a += " mfp-close-btn-in") : e.wrap.append(S())),
            e.st.alignTop && (a += " mfp-align-top"),
            e.fixedContentPos ? e.wrap.css({
                overflow: e.st.overflowY,
                overflowX: "hidden",
                overflowY: e.st.overflowY
            }) : e.wrap.css({
                top: _.scrollTop(),
                position: "absolute"
            }),
            (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                height: s.height(),
                position: "absolute"
            }),
            e.st.enableEscapeKey && s.on("keyup" + v,
            function(t) {
                27 === t.keyCode && e.close()
            }),
            _.on("resize" + v,
            function() {
                e.updateSize()
            }),
            e.st.closeOnContentClick || (a += " mfp-auto-cursor"),
            a && e.wrap.addClass(a);
            var u = e.wH = _.height(),
            f = {};
            if (e.fixedContentPos && e._hasScrollBar(u)) {
                var m = e._getScrollbarSize();
                m && (f.marginRight = m)
            }
            e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : f.overflow = "hidden");
            var y = e.st.mainClass;
            return e.isIE7 && (y += " mfp-ie7"),
            y && e._addClassToMFP(y),
            e.updateItemHTML(),
            k("BuildControls"),
            t("html").css(f),
            e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || n),
            e._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                e.content ? (e._addClassToMFP(g), e._setFocus()) : e.bgOverlay.addClass(g),
                s.on("focusin" + v, e._onFocusIn)
            },
            16),
            e.isOpen = !0,
            e.updateSize(u),
            k(p),
            i
        },
        close: function() {
            e.isOpen && (k(c), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(y), setTimeout(function() {
                e._close()
            },
            e.st.removalDelay)) : e._close())
        },
        _close: function() {
            k(l);
            var i = y + " " + g + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                var n = {
                    marginRight: ""
                };
                e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "",
                t("html").css(n)
            }
            s.off("keyup" + v + " focusin" + v),
            e.ev.off(v),
            e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            e.bgOverlay.attr("class", "mfp-bg"),
            e.container.attr("class", "mfp-container"),
            !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(),
            e._lastFocusedEl && t(e._lastFocusedEl).focus(),
            e.currItem = null,
            e.content = null,
            e.currTemplate = null,
            e.prevHeight = 0,
            k(h)
        },
        updateSize: function(t) {
            if (e.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                n = window.innerHeight * i;
                e.wrap.css("height", n),
                e.wH = n
            } else e.wH = t || _.height();
            e.fixedContentPos || e.wrap.css("height", e.wH),
            k("Resize")
        },
        updateItemHTML: function() {
            var i = e.items[e.index];
            e.contentContainer.detach(),
            e.content && e.content.detach(),
            i.parsed || (i = e.parseEl(e.index));
            var n = i.type;
            if (k("BeforeChange", [e.currItem ? e.currItem.type: "", n]), e.currItem = i, !e.currTemplate[n]) {
                var s = e.st[n] ? e.st[n].markup: !1;
                k("FirstMarkupParse", s),
                e.currTemplate[n] = s ? t(s) : !0
            }
            o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
            var a = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
            e.appendContent(a, n),
            i.preloaded = !0,
            k(f, i),
            o = i.type,
            e.container.prepend(e.contentContainer),
            k("AfterChange")
        },
        appendContent: function(t, i) {
            e.content = t,
            t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(S()) : e.content = t: e.content = "",
            k(u),
            e.container.addClass("mfp-" + i + "-holder"),
            e.contentContainer.append(e.content)
        },
        parseEl: function(i) {
            var n, s = e.items[i];
            if (s.tagName ? s = {
                el: t(s)
            }: (n = s.type, s = {
                data: s,
                src: s.src
            }), s.el) {
                for (var o = e.types,
                a = 0; o.length > a; a++) if (s.el.hasClass("mfp-" + o[a])) {
                    n = o[a];
                    break
                }
                s.src = s.el.attr("data-mfp-src"),
                s.src || (s.src = s.el.attr("href"))
            }
            return s.type = n || e.st.type || "inline",
            s.index = i,
            s.parsed = !0,
            e.items[i] = s,
            k("ElementParse", s),
            e.items[i]
        },
        addGroup: function(t, i) {
            var n = function(n) {
                n.mfpEl = this,
                e._openClick(n, t, i)
            };
            i || (i = {});
            var s = "click.magnificPopup";
            i.mainEl = t,
            i.items ? (i.isObj = !0, t.off(s).on(s, n)) : (i.isObj = !1, i.delegate ? t.off(s).on(s, i.delegate, n) : (i.items = t, t.off(s).on(s, n)))
        },
        _openClick: function(i, n, s) {
            var o = void 0 !== s.midClick ? s.midClick: t.magnificPopup.defaults.midClick;
            if (o || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                var a = void 0 !== s.disableOn ? s.disableOn: t.magnificPopup.defaults.disableOn;
                if (a) if (t.isFunction(a)) {
                    if (!a.call(e)) return ! 0
                } else if (a > _.width()) return ! 0;
                i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()),
                s.el = t(i.mfpEl),
                s.delegate && (s.items = n.find(s.delegate)),
                e.open(s)
            }
        },
        updateStatus: function(t, n) {
            if (e.preloader) {
                i !== t && e.container.removeClass("mfp-s-" + i),
                n || "loading" !== t || (n = e.st.tLoading);
                var s = {
                    status: t,
                    text: n
                };
                k("UpdateStatus", s),
                t = s.status,
                n = s.text,
                e.preloader.html(n),
                e.preloader.find("a").on("click",
                function(t) {
                    t.stopImmediatePropagation()
                }),
                e.container.addClass("mfp-s-" + t),
                i = t
            }
        },
        _checkIfClose: function(i) {
            if (!t(i).hasClass(C)) {
                var n = e.st.closeOnContentClick,
                s = e.st.closeOnBgClick;
                if (n && s) return ! 0;
                if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return ! 0;
                if (i === e.content[0] || t.contains(e.content[0], i)) {
                    if (n) return ! 0
                } else if (s && t.contains(document, i)) return ! 0;
                return ! 1
            }
        },
        _addClassToMFP: function(t) {
            e.bgOverlay.addClass(t),
            e.wrap.addClass(t)
        },
        _removeClassFromMFP: function(t) {
            this.bgOverlay.removeClass(t),
            e.wrap.removeClass(t)
        },
        _hasScrollBar: function(t) {
            return (e.isIE7 ? s.height() : document.body.scrollHeight) > (t || _.height())
        },
        _setFocus: function() { (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
        },
        _onFocusIn: function(i) {
            return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
        },
        _parseMarkup: function(e, i, n) {
            var s;
            n.data && (i = t.extend(n.data, i)),
            k(d, [e, i, n]),
            t.each(i,
            function(t, i) {
                if (void 0 === i || i === !1) return ! 0;
                if (s = t.split("_"), s.length > 1) {
                    var n = e.find(v + "-" + s[0]);
                    if (n.length > 0) {
                        var o = s[1];
                        "replaceWith" === o ? n[0] !== i[0] && n.replaceWith(i) : "img" === o ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(s[1], i)
                    }
                } else e.find(v + "-" + t).html(i)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.id = "mfp-sbm",
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(t),
                e.scrollbarSize = t.offsetWidth - t.clientWidth,
                document.body.removeChild(t)
            }
            return e.scrollbarSize
        }
    },
    t.magnificPopup = {
        instance: null,
        proto: b.prototype,
        modules: [],
        open: function(e, i) {
            return T(),
            e = e ? t.extend(!0, {},
            e) : {},
            e.isObj = !0,
            e.index = i || 0,
            this.instance.open(e)
        },
        close: function() {
            return t.magnificPopup.instance && t.magnificPopup.instance.close()
        },
        registerModule: function(e, i) {
            i.options && (t.magnificPopup.defaults[e] = i.options),
            t.extend(this.proto, i.proto),
            this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    },
    t.fn.magnificPopup = function(i) {
        T();
        var n = t(this);
        if ("string" == typeof i) if ("open" === i) {
            var s, o = w ? n.data("magnificPopup") : n[0].magnificPopup,
            a = parseInt(arguments[1], 10) || 0;
            o.items ? s = o.items[a] : (s = n, o.delegate && (s = s.find(o.delegate)), s = s.eq(a)),
            e._openClick({
                mfpEl: s
            },
            n, o)
        } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else i = t.extend(!0, {},
        i),
        w ? n.data("magnificPopup", i) : n[0].magnificPopup = i,
        e.addGroup(n, i);
        return n
    };
    var z, E, A, M = "inline",
    O = function() {
        A && (E.after(A.addClass(z)).detach(), A = null)
    };
    t.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                e.types.push(M),
                I(l + "." + M,
                function() {
                    O()
                })
            },
            getInline: function(i, n) {
                if (O(), i.src) {
                    var s = e.st.inline,
                    o = t(i.src);
                    if (o.length) {
                        var a = o[0].parentNode;
                        a && a.tagName && (E || (z = s.hiddenClass, E = x(z), z = "mfp-" + z), A = o.after(E).detach().removeClass(z)),
                        e.updateStatus("ready")
                    } else e.updateStatus("error", s.tNotFound),
                    o = t("<div>");
                    return i.inlineElement = o,
                    o
                }
                return e.updateStatus("ready"),
                e._parseMarkup(n, {},
                i),
                n
            }
        }
    });
    var B, N = "ajax",
    L = function() {
        B && n.removeClass(B)
    },
    F = function() {
        L(),
        e.req && e.req.abort()
    };
    t.magnificPopup.registerModule(N, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                e.types.push(N),
                B = e.st.ajax.cursor,
                I(l + "." + N, F),
                I("BeforeChange." + N, F)
            },
            getAjax: function(i) {
                B && n.addClass(B),
                e.updateStatus("loading");
                var s = t.extend({
                    url: i.src,
                    success: function(n, s, o) {
                        var a = {
                            data: n,
                            xhr: o
                        };
                        k("ParseAjax", a),
                        e.appendContent(t(a.data), N),
                        i.finished = !0,
                        L(),
                        e._setFocus(),
                        setTimeout(function() {
                            e.wrap.addClass(g)
                        },
                        16),
                        e.updateStatus("ready"),
                        k("AjaxContentAdded")
                    },
                    error: function() {
                        L(),
                        i.finished = i.loadError = !0,
                        e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                    }
                },
                e.st.ajax.settings);
                return e.req = t.ajax(s),
                ""
            }
        }
    });
    var j, $ = function(i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = e.st.image.titleSrc;
        if (n) {
            if (t.isFunction(n)) return n.call(e, i);
            if (i.el) return i.el.attr(n) || ""
        }
        return ""
    };
    t.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var t = e.st.image,
                i = ".image";
                e.types.push("image"),
                I(p + i,
                function() {
                    "image" === e.currItem.type && t.cursor && n.addClass(t.cursor)
                }),
                I(l + i,
                function() {
                    t.cursor && n.removeClass(t.cursor),
                    _.off("resize" + v)
                }),
                I("Resize" + i, e.resizeImage),
                e.isLowIE && I("AfterChange", e.resizeImage)
            },
            resizeImage: function() {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var i = 0;
                    e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)),
                    t.img.css("max-height", e.wH - i)
                }
            },
            _onImageHasSize: function(t) {
                t.img && (t.hasSize = !0, j && clearInterval(j), t.isCheckingImgSize = !1, k("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
            },
            findImageSize: function(t) {
                var i = 0,
                n = t.img[0],
                s = function(o) {
                    j && clearInterval(j),
                    j = setInterval(function() {
                        return n.naturalWidth > 0 ? (e._onImageHasSize(t), void 0) : (i > 200 && clearInterval(j), i++, 3 === i ? s(10) : 40 === i ? s(50) : 100 === i && s(500), void 0)
                    },
                    o)
                };
                s(1)
            },
            getImage: function(i, n) {
                var s = 0,
                o = function() {
                    i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, k("ImageLoadComplete")) : (s++, 200 > s ? setTimeout(o, 100) : a()))
                },
                a = function() {
                    i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", r.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                },
                r = e.st.image,
                l = n.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img",
                    i.img = t(c).on("load.mfploader", o).on("error.mfploader", a),
                    c.src = i.src,
                    l.is("img") && (i.img = i.img.clone()),
                    c = i.img[0],
                    c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return e._parseMarkup(n, {
                    title: $(i),
                    img_replaceWith: i.img
                },
                i),
                e.resizeImage(),
                i.hasSize ? (j && clearInterval(j), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", r.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
            }
        }
    });
    var D, H = function() {
        return void 0 === D && (D = void 0 !== document.createElement("p").style.MozTransform),
        D
    };
    t.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(t) {
                return t.is("img") ? t: t.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var t, i = e.st.zoom,
                n = ".zoom";
                if (i.enabled && e.supportsTransition) {
                    var s, o, a = i.duration,
                    r = function(t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                        n = "all " + i.duration / 1e3 + "s " + i.easing,
                        s = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        },
                        o = "transition";
                        return s["-webkit-" + o] = s["-moz-" + o] = s["-o-" + o] = s[o] = n,
                        e.css(s),
                        e
                    },
                    h = function() {
                        e.content.css("visibility", "visible")
                    };
                    I("BuildControls" + n,
                    function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(s), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return h(),
                            void 0;
                            o = r(t),
                            o.css(e._getOffset()),
                            e.wrap.append(o),
                            s = setTimeout(function() {
                                o.css(e._getOffset(!0)),
                                s = setTimeout(function() {
                                    h(),
                                    setTimeout(function() {
                                        o.remove(),
                                        t = o = null,
                                        k("ZoomAnimationEnded")
                                    },
                                    16)
                                },
                                a)
                            },
                            16)
                        }
                    }),
                    I(c + n,
                    function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(s), e.st.removalDelay = a, !t) {
                                if (t = e._getItemToZoom(), !t) return;
                                o = r(t)
                            }
                            o.css(e._getOffset(!0)),
                            e.wrap.append(o),
                            e.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                o.css(e._getOffset())
                            },
                            16)
                        }
                    }),
                    I(l + n,
                    function() {
                        e._allowZoom() && (h(), o && o.remove(), t = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === e.currItem.type
            },
            _getItemToZoom: function() {
                return e.currItem.hasSize ? e.currItem.img: !1
            },
            _getOffset: function(i) {
                var n;
                n = i ? e.currItem.img: e.st.zoom.opener(e.currItem.el || e.currItem);
                var s = n.offset(),
                o = parseInt(n.css("padding-top"), 10),
                a = parseInt(n.css("padding-bottom"), 10);
                s.top -= t(window).scrollTop() - o;
                var r = {
                    width: n.width(),
                    height: (w ? n.innerHeight() : n[0].offsetHeight) - a - o
                };
                return H() ? r["-moz-transform"] = r.transform = "translate(" + s.left + "px," + s.top + "px)": (r.left = s.left, r.top = s.top),
                r
            }
        }
    });
    var R = "iframe",
    W = "//about:blank",
    Q = function(t) {
        if (e.currTemplate[R]) {
            var i = e.currTemplate[R].find("iframe");
            i.length && (t || (i[0].src = W), e.isIE8 && i.css("display", t ? "block": "none"))
        }
    };
    t.magnificPopup.registerModule(R, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                e.types.push(R),
                I("BeforeChange",
                function(t, e, i) {
                    e !== i && (e === R ? Q() : i === R && Q(!0))
                }),
                I(l + "." + R,
                function() {
                    Q()
                })
            },
            getIframe: function(i, n) {
                var s = i.src,
                o = e.st.iframe;
                t.each(o.patterns,
                function() {
                    return s.indexOf(this.index) > -1 ? (this.id && (s = "string" == typeof this.id ? s.substr(s.lastIndexOf(this.id) + this.id.length, s.length) : this.id.call(this, s)), s = this.src.replace("%id%", s), !1) : void 0
                });
                var a = {};
                return o.srcAction && (a[o.srcAction] = s),
                e._parseMarkup(n, a, i),
                e.updateStatus("ready"),
                n
            }
        }
    });
    var Y = function(t) {
        var i = e.items.length;
        return t > i - 1 ? t - i: 0 > t ? i + t: t
    },
    X = function(t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
    };
    t.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = e.st.gallery,
                n = ".mfp-gallery",
                o = Boolean(t.fn.mfpFastClick);
                return e.direction = !0,
                i && i.enabled ? (a += " mfp-gallery", I(p + n,
                function() {
                    i.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img",
                    function() {
                        return e.items.length > 1 ? (e.next(), !1) : void 0
                    }),
                    s.on("keydown" + n,
                    function(t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                    })
                }), I("UpdateStatus" + n,
                function(t, i) {
                    i.text && (i.text = X(i.text, e.currItem.index, e.items.length))
                }), I(d + n,
                function(t, n, s, o) {
                    var a = e.items.length;
                    s.counter = a > 1 ? X(i.tCounter, o.index, a) : ""
                }), I("BuildControls" + n,
                function() {
                    if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                        var n = i.arrowMarkup,
                        s = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(C),
                        a = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(C),
                        r = o ? "mfpFastClick": "click";
                        s[r](function() {
                            e.prev()
                        }),
                        a[r](function() {
                            e.next()
                        }),
                        e.isIE7 && (x("b", s[0], !1, !0), x("a", s[0], !1, !0), x("b", a[0], !1, !0), x("a", a[0], !1, !0)),
                        e.container.append(s.add(a))
                    }
                }), I(f + n,
                function() {
                    e._preloadTimeout && clearTimeout(e._preloadTimeout),
                    e._preloadTimeout = setTimeout(function() {
                        e.preloadNearbyImages(),
                        e._preloadTimeout = null
                    },
                    16)
                }), I(l + n,
                function() {
                    s.off(n),
                    e.wrap.off("click" + n),
                    e.arrowLeft && o && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(),
                    e.arrowRight = e.arrowLeft = null
                }), void 0) : !1
            },
            next: function() {
                e.direction = !0,
                e.index = Y(e.index + 1),
                e.updateItemHTML()
            },
            prev: function() {
                e.direction = !1,
                e.index = Y(e.index - 1),
                e.updateItemHTML()
            },
            goTo: function(t) {
                e.direction = t >= e.index,
                e.index = t,
                e.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var t, i = e.st.gallery.preload,
                n = Math.min(i[0], e.items.length),
                s = Math.min(i[1], e.items.length);
                for (t = 1; (e.direction ? s: n) >= t; t++) e._preloadItem(e.index + t);
                for (t = 1; (e.direction ? n: s) >= t; t++) e._preloadItem(e.index - t)
            },
            _preloadItem: function(i) {
                if (i = Y(i), !e.items[i].preloaded) {
                    var n = e.items[i];
                    n.parsed || (n = e.parseEl(i)),
                    k("LazyLoad", n),
                    "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader",
                    function() {
                        n.hasSize = !0
                    }).on("error.mfploader",
                    function() {
                        n.hasSize = !0,
                        n.loadError = !0,
                        k("LazyLoadError", n)
                    }).attr("src", n.src)),
                    n.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    t.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(t) {
                return t.src.replace(/\.\w+$/,
                function(t) {
                    return "@2x" + t
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina,
                    i = t.ratio;
                    i = isNaN(i) ? i() : i,
                    i > 1 && (I("ImageHasSize." + U,
                    function(t, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    }), I("ElementParse." + U,
                    function(e, n) {
                        n.src = t.replaceSrc(n, i)
                    }))
                }
            }
        }
    }),
    function() {
        var e = 1e3,
        i = "ontouchstart" in window,
        n = function() {
            _.off("touchmove" + o + " touchend" + o)
        },
        s = "mfpFastClick",
        o = "." + s;
        t.fn.mfpFastClick = function(s) {
            return t(this).each(function() {
                var a, r = t(this);
                if (i) {
                    var l, c, h, u, d, p;
                    r.on("touchstart" + o,
                    function(t) {
                        u = !1,
                        p = 1,
                        d = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0],
                        c = d.clientX,
                        h = d.clientY,
                        _.on("touchmove" + o,
                        function(t) {
                            d = t.originalEvent ? t.originalEvent.touches: t.touches,
                            p = d.length,
                            d = d[0],
                            (Math.abs(d.clientX - c) > 10 || Math.abs(d.clientY - h) > 10) && (u = !0, n())
                        }).on("touchend" + o,
                        function(t) {
                            n(),
                            u || p > 1 || (a = !0, t.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                a = !1
                            },
                            e), s())
                        })
                    })
                }
                r.on("click" + o,
                function() {
                    a || s()
                })
            })
        },
        t.fn.destroyMfpFastClick = function() {
            t(this).off("touchstart" + o + " click" + o),
            i && _.off("touchmove" + o + " touchend" + o)
        }
    } (),
    T()
} (window.jQuery || window.Zepto),
function() {
    jQuery(function(t) {
        var e, i, n;
        return i = -110,
        t("#catalog .line .figure").each(function(e, n) {
            return t(n).css("background-position", e * i + "px 0")
        }),
        t("ul.model").each(function(e, n) {
            var s;
            return s = t(n).siblings(".figure"),
            t("a", n).hover(function() {
                var n;
                return n = t(this).parent().index(),
                s.css("background-position", e * i + "px " + n * i + "px")
            })
        }),
        e = function(e) {
            return e.parent().removeClass("active"),
            t("#catalog").css("z-index", 5).animate({
                top: -500
            },
            200, "easeInQuart",
            function() {
                return e.removeClass("active").addClass("inactive")
            }),
            t(window).width() <= 480 ? t("ul.nav li:gt(0):lt(3)").animate({
                "margin-top": 3
            },
            200, "easeInQuart") : void 0
        },
        t.extend(t.easing, {
            easeInQuart: function(t, e, i, n, s) {
                return n * (e /= s) * e * e * e + i
            },
            easeOutQuart: function(t, e, i, n, s) {
                return - n * ((e = e / s - 1) * e * e * e - 1) + i
            }
        }),
        t("#nav-catalog").addClass("inactive").click(function(i) {
            var n;
            if (i.stopPropagation(), i.preventDefault(), n = t(this), n.hasClass("inactive")) {
                if (n.parent().addClass("active"), t("#catalog").animate({
                    top: 37
                },
                200, "easeOutQuart",
                function() {
                    return n.removeClass("inactive").addClass("active"),
                    t("#catalog").css("z-index", 51)
                }), t(window).width() <= 480) return t("ul.nav li:gt(0):lt(3)").animate({
                    "margin-top": t("#catalog").height() + 10
                },
                200, "easeOutQuart")
            } else if (n.hasClass("active")) return e(n)
        }),
        n = t("#catalog_select").data("selected"),
        t("#catalog .line a").each(function() {
            var e, s, o;
            return o = t("<option />", {
                text: t(this).text(),
                value: t(this).attr("href")
            }),
            e = t(this).closest(".line > li").index(),
            s = t(this).parent().index(),
            o.data("bgpos", e * i + "px " + s * i + "px"),
            n === t(this).text() && o.prop("selected", !0),
            t("#catalog_select").append(o)
        }),
        t("#catalog_select").change(function() {
            return t(this).closest(".select_box").find(".figure").css("background-position", t("option:checked", this).data("bgpos"))
        }).trigger("change"),
        t("#catalog_go").click(function(e) {
            return e.preventDefault(),
            window.location.href = t("#catalog_select").val()
        }),
        t("#catalog").click(function(t) {
            return t.stopPropagation()
        }),
        t("html").click(function() {
            var i;
            return i = t("#nav-catalog"),
            i.hasClass("active") ? e(i) : void 0
        }),
        1 === t("#newsslider").length && t("#newsslider").sliderkit({
            auto: !0,
            autospeed: 5e3,
            circular: !0,
            shownavitems: 1,
            panelfx: "sliding",
            panelfxspeed: 500,
            verticalnav: !0,
            verticalslide: !0
        })
    })
}.call(this),
function() {
    jQuery(function(t) {
        return t(".page_nav li.active a").bind("click",
        function(e) {
            var i;
            return i = t(this).closest(".page_nav").find(".dropdown"),
            i.is(":visible") ? (e.preventDefault(), i.find("a").trigger("click")) : void 0
        }),
        t(".page_nav li.dropdown a").bind("click",
        function(e) {
            var i;
            return e.preventDefault(),
            i = t(this),
            i.find(".triangle").hasClass("down") ? (i.parent("li").siblings().andSelf().addClass("dropshow"), i.find(".triangle").removeClass("down").addClass("up"), t("html, body").animate({
                scrollTop: 100
            },
            200)) : (i.parent("li").siblings().andSelf().removeClass("dropshow"), i.find(".triangle").removeClass("up").addClass("down"))
        })
    })
}.call(this),
window.Modernizr = function(t, e, i) {
    function n(t) {
        y.cssText = t
    }
    function s(t, e) {
        return typeof t === e
    }
    function o(t, e) {
        return !! ~ ("" + t).indexOf(e)
    }
    function a(t, e) {
        for (var n in t) {
            var s = t[n];
            if (!o(s, "-") && y[s] !== i) return "pfx" == e ? s: !0
        }
        return ! 1
    }
    function r(t, e, n) {
        for (var o in t) {
            var a = e[t[o]];
            if (a !== i) return n === !1 ? t[o] : s(a, "function") ? a.bind(n || e) : a
        }
        return ! 1
    }
    function l(t, e, i) {
        var n = t.charAt(0).toUpperCase() + t.slice(1),
        o = (t + " " + b.join(n + " ") + n).split(" ");
        return s(e, "string") || s(e, "undefined") ? a(o, e) : (o = (t + " " + w.join(n + " ") + n).split(" "), r(o, e, i))
    }
    var c, h, u, d = "2.6.2",
    p = {},
    f = !0,
    m = e.documentElement,
    v = "modernizr",
    g = e.createElement(v),
    y = g.style,
    C = ({}.toString, "Webkit Moz O ms"),
    b = C.split(" "),
    w = C.toLowerCase().split(" "),
    _ = {},
    I = [],
    x = I.slice,
    k = {}.hasOwnProperty;
    u = s(k, "undefined") || s(k.call, "undefined") ?
    function(t, e) {
        return e in t && s(t.constructor.prototype[e], "undefined")
    }: function(t, e) {
        return k.call(t, e)
    },
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        var e = this;
        if ("function" != typeof e) throw new TypeError;
        var i = x.call(arguments, 1),
        n = function() {
            if (this instanceof n) {
                var s = function() {};
                s.prototype = e.prototype;
                var o = new s,
                a = e.apply(o, i.concat(x.call(arguments)));
                return Object(a) === a ? a: o
            }
            return e.apply(t, i.concat(x.call(arguments)))
        };
        return n
    }),
    _.cssanimations = function() {
        return l("animationName")
    },
    _.csstransforms = function() {
        return !! l("transform")
    };
    for (var S in _) u(_, S) && (h = S.toLowerCase(), p[h] = _[S](), I.push((p[h] ? "": "no-") + h));
    return p.addTest = function(t, e) {
        if ("object" == typeof t) for (var n in t) u(t, n) && p.addTest(n, t[n]);
        else {
            if (t = t.toLowerCase(), p[t] !== i) return p;
            e = "function" == typeof e ? e() : e,
            "undefined" != typeof f && f && (m.className += " " + (e ? "": "no-") + t),
            p[t] = e
        }
        return p
    },
    n(""),
    g = c = null,
    function(t, e) {
        function i(t, e) {
            var i = t.createElement("p"),
            n = t.getElementsByTagName("head")[0] || t.documentElement;
            return i.innerHTML = "x<style>" + e + "</style>",
            n.insertBefore(i.lastChild, n.firstChild)
        }
        function n() {
            var t = g.elements;
            return "string" == typeof t ? t.split(" ") : t
        }
        function s(t) {
            var e = v[t[f]];
            return e || (e = {},
            m++, t[f] = m, v[m] = e),
            e
        }
        function o(t, i, n) {
            if (i || (i = e), h) return i.createElement(t);
            n || (n = s(i));
            var o;
            return o = n.cache[t] ? n.cache[t].cloneNode() : p.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t),
            o.canHaveChildren && !d.test(t) ? n.frag.appendChild(o) : o
        }
        function a(t, i) {
            if (t || (t = e), h) return t.createDocumentFragment();
            i = i || s(t);
            for (var o = i.frag.cloneNode(), a = 0, r = n(), l = r.length; l > a; a++) o.createElement(r[a]);
            return o
        }
        function r(t, e) {
            e.cache || (e.cache = {},
            e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()),
            t.createElement = function(i) {
                return g.shivMethods ? o(i, t, e) : e.createElem(i)
            },
            t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g,
            function(t) {
                return e.createElem(t),
                e.frag.createElement(t),
                'c("' + t + '")'
            }) + ");return n}")(g, e.frag)
        }
        function l(t) {
            t || (t = e);
            var n = s(t);
            return g.shivCSS && !c && !n.hasCSS && (n.hasCSS = !!i(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),
            h || r(t, n),
            t
        }
        var c, h, u = t.html5 || {},
        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        f = "_html5shiv",
        m = 0,
        v = {}; !
        function() {
            try {
                var t = e.createElement("a");
                t.innerHTML = "<xyz></xyz>",
                c = "hidden" in t,
                h = 1 == t.childNodes.length ||
                function() {
                    e.createElement("a");
                    var t = e.createDocumentFragment();
                    return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                } ()
            } catch(i) {
                c = !0,
                h = !0
            }
        } ();
        var g = {
            elements: u.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: u.shivCSS !== !1,
            supportsUnknownElements: h,
            shivMethods: u.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: o,
            createDocumentFragment: a
        };
        t.html5 = g,
        l(e)
    } (this, e),
    p._version = d,
    p._domPrefixes = w,
    p._cssomPrefixes = b,
    p.testProp = function(t) {
        return a([t])
    },
    p.testAllProps = l,
    p.prefixed = function(t, e, i) {
        return e ? l(t, e, i) : l(t, "pfx")
    },
    m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + I.join(" ") : ""),
    p
} (this, this.document),
function(t, e, i) {
    function n(t) {
        return "[object Function]" == v.call(t)
    }
    function s(t) {
        return "string" == typeof t
    }
    function o() {}
    function a(t) {
        return ! t || "loaded" == t || "complete" == t || "uninitialized" == t
    }
    function r() {
        var t = g.shift();
        y = 1,
        t ? t.t ? f(function() { ("c" == t.t ? d.injectCss: d.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
        },
        0) : (t(), r()) : y = 0
    }
    function l(t, i, n, s, o, l, c) {
        function h(e) {
            if (!p && a(u.readyState) && (C.r = p = 1, !y && r(), u.onload = u.onreadystatechange = null, e)) {
                "img" != t && f(function() {
                    w.removeChild(u)
                },
                50);
                for (var n in S[i]) S[i].hasOwnProperty(n) && S[i][n].onload()
            }
        }
        var c = c || d.errorTimeout,
        u = e.createElement(t),
        p = 0,
        v = 0,
        C = {
            t: n,
            s: i,
            e: o,
            a: l,
            x: c
        };
        1 === S[i] && (v = 1, S[i] = []),
        "object" == t ? u.data = i: (u.src = i, u.type = t),
        u.width = u.height = "0",
        u.onerror = u.onload = u.onreadystatechange = function() {
            h.call(this, v)
        },
        g.splice(s, 0, C),
        "img" != t && (v || 2 === S[i] ? (w.insertBefore(u, b ? null: m), f(h, c)) : S[i].push(u))
    }
    function c(t, e, i, n, o) {
        return y = 0,
        e = e || "j",
        s(t) ? l("c" == e ? I: _, t, e, this.i++, i, n, o) : (g.splice(this.i++, 0, t), 1 == g.length && r()),
        this
    }
    function h() {
        var t = d;
        return t.loader = {
            load: c,
            i: 0
        },
        t
    }
    var u, d, p = e.documentElement,
    f = t.setTimeout,
    m = e.getElementsByTagName("script")[0],
    v = {}.toString,
    g = [],
    y = 0,
    C = "MozAppearance" in p.style,
    b = C && !!e.createRange().compareNode,
    w = b ? p: m.parentNode,
    p = t.opera && "[object Opera]" == v.call(t.opera),
    p = !!e.attachEvent && !p,
    _ = C ? "object": p ? "script": "img",
    I = p ? "script": _,
    x = Array.isArray ||
    function(t) {
        return "[object Array]" == v.call(t)
    },
    k = [],
    S = {},
    T = {
        timeout: function(t, e) {
            return e.length && (t.timeout = e[0]),
            t
        }
    };
    d = function(t) {
        function e(t) {
            var e, i, n, t = t.split("!"),
            s = k.length,
            o = t.pop(),
            a = t.length,
            o = {
                url: o,
                origUrl: o,
                prefixes: t
            };
            for (i = 0; a > i; i++) n = t[i].split("="),
            (e = T[n.shift()]) && (o = e(o, n));
            for (i = 0; s > i; i++) o = k[i](o);
            return o
        }
        function a(t, s, o, a, r) {
            var l = e(t),
            c = l.autoCallback;
            l.url.split(".").pop().split("?").shift(),
            l.bypass || (s && (s = n(s) ? s: s[t] || s[a] || s[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, s, o, a, r) : (S[l.url] ? l.noexec = !0 : S[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c": i, l.noexec, l.attrs, l.timeout), (n(s) || n(c)) && o.load(function() {
                h(),
                s && s(l.origUrl, r, a),
                c && c(l.origUrl, r, a),
                S[l.url] = 2
            })))
        }
        function r(t, e) {
            function i(t, i) {
                if (t) {
                    if (s(t)) i || (u = function() {
                        var t = [].slice.call(arguments);
                        d.apply(this, t),
                        p()
                    }),
                    a(t, u, e, 0, c);
                    else if (Object(t) === t) for (l in r = function() {
                        var e, i = 0;
                        for (e in t) t.hasOwnProperty(e) && i++;
                        return i
                    } (), t) t.hasOwnProperty(l) && (!i && !--r && (n(u) ? u = function() {
                        var t = [].slice.call(arguments);
                        d.apply(this, t),
                        p()
                    }: u[l] = function(t) {
                        return function() {
                            var e = [].slice.call(arguments);
                            t && t.apply(this, e),
                            p()
                        }
                    } (d[l])), a(t[l], u, e, l, c))
                } else ! i && p()
            }
            var r, l, c = !!t.test,
            h = t.load || t.both,
            u = t.callback || o,
            d = u,
            p = t.complete || o;
            i(c ? t.yep: t.nope, !!h),
            h && i(h)
        }
        var l, c, u = this.yepnope.loader;
        if (s(t)) a(t, 0, u, 0);
        else if (x(t)) for (l = 0; l < t.length; l++) c = t[l],
        s(c) ? a(c, 0, u, 0) : x(c) ? d(c) : Object(c) === c && r(c, u);
        else Object(t) === t && r(t, u)
    },
    d.addPrefix = function(t, e) {
        T[t] = e
    },
    d.addFilter = function(t) {
        k.push(t)
    },
    d.errorTimeout = 1e4,
    null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", u = function() {
        e.removeEventListener("DOMContentLoaded", u, 0),
        e.readyState = "complete"
    },
    0)),
    t.yepnope = h(),
    t.yepnope.executeStack = r,
    t.yepnope.injectJs = function(t, i, n, s, l, c) {
        var h, u, p = e.createElement("script"),
        s = s || d.errorTimeout;
        p.src = t;
        for (u in n) p.setAttribute(u, n[u]);
        i = c ? r: i || o,
        p.onreadystatechange = p.onload = function() { ! h && a(p.readyState) && (h = 1, i(), p.onload = p.onreadystatechange = null)
        },
        f(function() {
            h || (h = 1, i(1))
        },
        s),
        l ? p.onload() : m.parentNode.insertBefore(p, m)
    },
    t.yepnope.injectCss = function(t, i, n, s, a, l) {
        var c, s = e.createElement("link"),
        i = l ? r: i || o;
        s.href = t,
        s.rel = "stylesheet",
        s.type = "text/css";
        for (c in n) s.setAttribute(c, n[c]);
        a || (m.parentNode.insertBefore(s, m), f(i, 0))
    }
} (this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
},
function() {
    jQuery(function(t) {
        var e, i, n, s, o, a, r, l, c, h, u;
        if (window.screen && window.screen.width > 480) {
            for (i = t("#product_menu > ul.ddmenu > li").length, n = Math.ceil(i / 6), o = r = 1; n >= 1 ? n >= r: r >= n; o = n >= 1 ? ++r: --r) for (a = t("<ul />").appendTo("#showcase"), s = l = h = 6 * (o - 1), u = 6 * o - 1; u >= h ? u >= l: l >= u; s = u >= h ? ++l: --l) e = t("#product_menu > ul.ddmenu > li").eq(s),
            1 === e.length && a.append(e.clone());
            if (6 >= i && t("#showcase").addClass("shorter"), t("#showcase").append('<div class="nav"></div>'), n > 1) for (o = c = 1; n >= 1 ? n >= c: c >= n; o = n >= 1 ? ++c: --c) t("#showcase .nav").append('<a href="#">' + o + "</a>");
            t("#showcase").catslider()
        }
        return t(".dropdownmenu a.btn").click(function(e) {
            var i;
            return e.preventDefault(),
            e.stopPropagation(),
            i = t(this).closest(".dropdownmenu"),
            i.hasClass("open") ? i.removeClass("open") : i.addClass("open")
        }),
        t(document).click(function() {
            return t(".dropdownmenu").removeClass("open")
        }),
        t(".page_nav.is_pager").find("li:not(.dropdown)").find("a").click(function(e) {
            var n;
            return e.preventDefault(),
            t(this).parent().siblings("li").removeClass("active"),
            t(this).parent().addClass("active"),
            n = t(this).parent().index(),
            i = t(".pages").children(),
            i.filter(":visible").fadeOut("fast",
            function() {
                return i.eq(n).fadeIn("fast")
            })
        }),
        t("#product_details .cc .image").delay(500).animate({
            right: "+=50",
            opacity: 1
        },
        200,
        function() {
            return t("#product_details .cc .title").animate({
                left: "-=50",
                opacity: 1
            },
            200)
        }),
        t("#product_details .cc").hover(function() {
            return t(this).find(".hover").removeClass("hidden")
        },
        function() {
            return t(this).find(".hover").addClass("hidden")
        }),
        t("#features").panzoom()
    })
}.call(this),
function(t) {
    SliderKit = function() {
        var e = this;
        this._init = function(i, n) {
            if (this.options = t.extend({},
            this._settings, n), this.cssNames = {
                selected: this.options.cssprefix + "-selected",
                panel: this.options.cssprefix + "-panel",
                panels: this.options.cssprefix + "-panels",
                panelActive: this.options.cssprefix + "-panel-active",
                panelOld: this.options.cssprefix + "-panel-old",
                panelsWrapper: this.options.cssprefix + "-panels-wrapper",
                nav: this.options.cssprefix + "-nav",
                navClip: this.options.cssprefix + "-nav-clip",
                navBtn: this.options.cssprefix + "-nav-btn",
                navPrev: this.options.cssprefix + "-nav-prev",
                navNext: this.options.cssprefix + "-nav-next",
                btnDisable: this.options.cssprefix + "-btn-disable",
                btnPause: this.options.cssprefix + "-pause-btn",
                goPrev: this.options.cssprefix + "-go-prev",
                goNext: this.options.cssprefix + "-go-next",
                playBtn: this.options.cssprefix + "-play-btn",
                goBtns: this.options.cssprefix + "-go-btn"
            },
            this.domObj = t(i), this.panels = t("." + this.cssNames.panel, this.domObj), this.allItems = this.panels.size(), this.nav = t("." + this.cssNames.nav, this.domObj), this.navClip = t("." + this.cssNames.navClip, this.nav), this.arePanels = 0 < this.allItems ? 1 : 0, this.isNavClip = 0 < this.navClip.size() ? 1 : 0, !this.arePanels && !this.isNavClip && this._errorReport("Error #01", this.options.debug, 1), this.domObjHeight = this.domObj.height(), this.domObjWidth = this.domObj.width(), !this.domObjHeight && !this.options.freeheight && (this.domObjHeight = this.options.height, this.domObj.css("height", this.domObjHeight), this._errorReport("Error #02", this.options.debug, 0)), this.domObjWidth || (this.domObjWidth = this.options.width, this.domObj.css("width", this.domObjWidth), this._errorReport("Error #02", this.options.debug, 0)), this.domObj.css("display", "block"), this.newId = this.prevId = this.currId = 0, this.currPanel = null, this.prevPanelStill = this.prevPanel = 0, this.firstTime = 1, this.scrollActive = 0, this.isPlaying = null, this.changeOngoing = !1, this.currLine = 1, this.animating = !1, this.panelAnteFns = [], this.panelPostFns = [], this.navAnteFns = [], this.navPostFns = [], this.runningScope = this.nav, this.isNavClip && this._buildNav(), this._buildControls(), this.arePanels && (this.panelsBag = t("." + this.cssNames.panels, this.domObj), "sliding" == this.options.panelfx && this._wrapPanels()), this.lineScrollDo = this.arePanels ? 0 : 1, this.options.mousewheel && this.domObj.mousewheel(function(t, i) {
                return i > 0 ? e.stepBackward() : e.stepForward(),
                !1
            }), this.options.keyboard && this.domObj.keyup(function(t) {
                37 == t.keyCode ? e.stepBackward() : 39 == t.keyCode && e.stepForward()
            }), this.options.panelclick && this.arePanels && this.panelsBag.click(function() {
                return e.stepForward(),
                !1
            }), this.startId = this.options.start >= this.allItems ? this.allItems - 1 : 0 > this.options.start ? 0 : this.options.start, this.options.counter) try {
                this.Counter()
            } catch(s) {
                this._errorReport(s, this.options.debug, 0)
            }
            if (this.imageFx) try {
                this.imageFx()
            } catch(o) {
                this._errorReport(o, this.options.debug, 0)
            }
            if (this.options.delaycaptions) try {
                this.DelayCaptions(this.options.delaycaptions)
            } catch(a) {
                this._errorReport(a, this.options.debug, 0)
            }
            if (this.changeWithId(this.startId, null), this.options.auto && (this.autoScrollStart(), this._autoScrollHoverStop()), this.options.timer) try {
                this.Timer(this.options.timer)
            } catch(r) {
                this._errorReport(r, this.options.debug, 0)
            }
            return this.arePanels && !this.options.fastchange && (this.runningScope = this.domObj.find("." + this.cssNames.panels, "." + this.cssNames.nav)),
            this
        },
        this._settings = {
            cssprefix: "sliderkit",
            width: 500,
            height: 350,
            start: 0,
            auto: !0,
            autospeed: 4e3,
            autostill: !1,
            mousewheel: !1,
            keyboard: !1,
            circular: !1,
            shownavitems: 5,
            navitemshover: !1,
            navclipcenter: !1,
            navcontinuous: !1,
            navscrollatend: !1,
            navpanelautoswitch: !0,
            navfx: "sliding",
            navfxbefore: function() {},
            navfxafter: function() {},
            scroll: null,
            scrollspeed: 600,
            scrolleasing: null,
            panelfx: "fading",
            panelfxspeed: 700,
            panelfxeasing: null,
            panelfxfirst: "none",
            panelfxbefore: function() {},
            panelfxafter: function() {},
            panelbtnshover: !1,
            panelclick: !1,
            verticalnav: !1,
            verticalslide: !1,
            tabs: !1,
            freeheight: !1,
            fastchange: !0,
            counter: !1,
            delaycaptions: !1,
            timer: !1,
            imagefx: !1,
            debug: !1
        },
        this._errorReport = function(t, e, i) {
            return e && alert("Slider Kit error!\nMessage = " + t + " (see doc for details)\nElement id = " + this.domObj.attr("id") + "\nElement class = " + this.domObj.attr("class")),
            i ? !1 : void 0
        },
        this._autoScrollHoverStop = function() { ! this.isPlayBtn && !this.options.autostill && this.domObj.hover(function() {
                null != e.isPlaying && e.autoScrollStop()
            },
            function() {
                e.autoScrollStart()
            }),
            this.options.autostill && this.domObj.mouseleave(function() {
                null == e.isPlaying && e.autoScrollStart()
            })
        },
        this._buildNav = function() {
            if (this.navUL = t("ul", this.navClip), this.navLI = t("li", this.navUL), this.navLINum = this.navLI.size(), this.arePanels && this.navLINum != this.allItems && 1 == this.nav.size() && this._errorReport("Error #03", this.options.debug, 1), this.options.tabs) this.options.shownavitems = this.allItems;
            else {
                var i = function(t) {
                    return attrVal = e.navLI.css(t),
                    "auto" != attrVal && "" != t && "0px" != t ? parseInt(attrVal) : 0
                },
                n = this.options.verticalnav ? this.nav.height() : this.nav.width(),
                s = this.navLI.outerWidth(!0),
                o = this.navLI.outerHeight(!0),
                a = i("margin-left") + i("margin-right"),
                i = i("margin-top") + i("margin-bottom");
                this.allItems = this.navLINum,
                this.options.shownavitems > this.allItems && (this.options.shownavitems = this.navLINum),
                this.navLIsize = this.options.verticalnav ? o: s,
                this.navULSize = this.navLIsize * this.navLINum,
                this.navClipSize = this.options.shownavitems * this.navLIsize - (this.options.verticalnav ? i: a),
                this.cssPosAttr = this.options.verticalnav ? "top": "left",
                a = this.options.verticalnav ? "height": "width",
                this.navLI.css({
                    width: this.navLI.width(),
                    height: this.navLI.height()
                }),
                this.navUL.css(a, this.navULSize + "px"),
                this.navClip.css({
                    width: this.options.verticalnav ? s: this.navClipSize,
                    height: this.options.verticalnav ? this.navClipSize: o
                }),
                this.options.navclipcenter && this.navClip.css(this.cssPosAttr, (n - this.navClipSize) / 2).css("margin", "0"),
                this.allItems > this.options.shownavitems && (this.scrollActive = !0, null == this.options.scroll || 0 > this.options.scroll || this.options.scroll > this.allItems) && (this.options.scroll = this.options.shownavitems),
                this.navBtns = t("." + this.cssNames.navBtn, this.nav),
                0 < this.navBtns.size() && this._buildNavButtons()
            }
            this.options.navitemshover && this.arePanels ? this.navLI.mouseover(function() {
                e.changeWithId(t("li", t(this).parent()).index(this), t(this))
            }) : (this.arePanels || this.options.navscrollatend) && this.navLI.click(function() {
                return e.changeWithId(t("li", t(this).parent()).index(this), t(this)),
                !1
            })
        },
        this._buildNavButtons = function() {
            this.scrollActive ? (this.scrollBtns = !0, this.navBtnPrev = t("." + this.cssNames.navPrev, this.nav), this.navBtnNext = t("." + this.cssNames.navNext, this.nav), this.navBtns.removeClass(this.cssNames.btnDisable), this.navBtnPrev.click(function() {
                return e.navPrev(),
                !1
            }), this.navBtnNext.click(function() {
                return e.navNext(),
                !1
            }), this.options.navcontinuous && (this.navBtnPrev.mouseover(function() {
                e.navPrev(!0)
            }), this.navBtnNext.mouseover(function() {
                e.navNext(!0)
            }), this.navBtns.mouseout(function() {
                e.navStopContinuous()
            })), this.options.circular || this.navBtnPrev.addClass(this.cssNames.btnDisable)) : this.navBtns.addClass(this.cssNames.btnDisable)
        },
        this._getNavPos = function() {
            this.navPos = this.options.verticalnav ? this.navUL.position().top: this.navUL.position().left,
            this.LIbefore = Math.ceil(Math.abs(this.navPos) / this.navLIsize),
            this.LIafter = Math.floor((this.navULSize - Math.abs(this.navPos) - this.navClipSize) / this.navLIsize),
            0 > this.LIafter && (this.LIafter = 0)
        },
        this._buildControls = function() {
            this.playBtn = t("." + this.cssNames.playBtn, this.domObj),
            this.gBtns = t("." + this.cssNames.goBtns, this.domObj),
            this.isPlayBtn = 0 < this.playBtn.size() ? 1 : 0,
            this.goBtns = 0 < this.gBtns.size() ? 1 : 0,
            this.isPlayBtn && (this.options.auto && this.playBtn.addClass(this.cssNames.btnPause), this.playBtn.click(function() {
                return e.playBtn.hasClass(e.cssNames.btnPause) ? e.playBtnPause() : e.playBtnStart(),
                !1
            })),
            this.goBtns && (this.goBtnPrev = t("." + this.cssNames.goPrev, this.domObj), this.goBtnNext = t("." + this.cssNames.goNext, this.domObj), this.options.panelbtnshover && (this.gBtns.hide(), t("." + this.cssNames.panels, this.domObj).hover(function() {
                e.gBtns.fadeIn()
            },
            function() {
                e.gBtns.fadeOut()
            })), this.goBtnPrev.click(function() {
                return e.stepBackward(t(this)),
                !1
            }), this.goBtnNext.click(function() {
                return e.stepForward(t(this)),
                !1
            }))
        },
        this._wrapPanels = function() {
            0 == t("." + this.cssNames.panelsWrapper, this.domObj).size() && (this.panels.wrapAll('<div class="' + this.cssNames.panelsWrapper + '"></div>'), this.panelsWrapper = t("." + this.cssNames.panelsWrapper, this.panelsBag), this.panelsWrapper.css("position", "relative"))
        },
        this._change = function(i, n, s, o, a) {
            if (a && null != this.isPlaying && (this.isPlayBtn && this.playBtnPause(), this.options.autostill && e.autoScrollStop()), i && i.hasClass(this.cssNames.btnDisable)) return ! 1;
            if (a = 0, !(0 < t(":animated", this.runningScope).size() || this.animating)) {
                if (this.prevId = this.currId, null != s || o) {
                    if (null != s) {
                        s = parseInt(s),
                        this.currId = 0 > s ? 0 : s > this.allItems - 1 ? this.allItems - 1 : s;
                        var r = i ? i.parent().parent().hasClass(this.cssNames.navClip) ? !1 : !0 : !0
                    }
                } else this.currId = "-=" == n ? this.currId + 1 : this.currId - 1;
                this.goBtns && this.gBtns.removeClass(this.cssNames.btnDisable),
                this.options.circular ? this.scrollActive || (this.currId == this.allItems && (this.currId = 0), -1 != this.currId) || (this.currId = this.allItems - 1) : ( - 1 == this.currId && (this.currId = 0, a = 1), 0 == this.currId && this.goBtns && this.goBtnPrev.addClass(this.cssNames.btnDisable), this.currId == this.allItems && (this.currId = this.allItems - 1, a = 1), this.currId == this.allItems - 1 && (this.options.auto && this.autoScrollStop(), this.goBtns && this.goBtnNext.addClass(this.cssNames.btnDisable))),
                this.scrollActive && !a && this._setNavScroll(o, n, r),
                this.isNavClip && this.selectThumbnail(this.currId),
                (!o || this.options.navpanelautoswitch) && this.arePanels && this._animPanel(this.currId, n),
                this.firstTime && (this.firstTime = 0)
            }
        },
        this._setNavScroll = function(t, e, i) {
            this._getNavPos();
            var n = t ? !0 : !1,
            s = 0;
            if (!t) {
                var t = Math.abs(this.currId + 1 - this.LIbefore),
                o = this.options.shownavitems - t + 1,
                a = 0 == this.currId || this.currId == this.allItems - 1 ? 1 : 0; ! this.options.navscrollatend || 1 != o && 1 != t || this.firstTime || a || (s = this.options.scroll - 1, n = !0),
                (0 == o || 0 == t) && (n = !0),
                i && (0 > o && (o = 0), e = this.prevId < this.currId ? "-=": "+=", i = Math.abs(this.prevId - this.currId), i - 1 > o && "-=" == e || i > t && "+=" == e) && (s = i, n = !0),
                "" == e && (e = this.prevId != this.currId || a ? this.prevId < this.currId ? "-=": "+=": "-=" == this.scrollWay ? "+=": "-="),
                this.scrollWay = e
            }
            n && (n = s > 0 ? s: this.options.scroll, s = "-=" == e ? this.LIafter: this.LIbefore, n = n > s ? s: n, s = n * this.navLIsize, this.newId = "-=" == e ? this.LIbefore + n: this.LIbefore - n + this.options.shownavitems - 1, ("-=" == e && this.newId > this.currId || "+=" == e && this.newId < this.currId) && (this.currId = this.newId), this.options.circular && (0 >= this.LIbefore && "+=" == e ? (e = "-=", this.currId = this.allItems - 1, s = this.LIafter / this.options.scroll * this.navLIsize * this.options.scroll) : 0 == this.LIafter && "-=" == e && (e = "+=", this.currId = 0, s = Math.abs(this.navPos))), this._animNav(e, s))
        },
        this._animPanel = function(i, n) {
            this.currPanel = this.panels.eq(i),
            this.prevPanelStill = this.panels.eq(this.prevId);
            var s = function() {
                t.isFunction(e.options.panelfxafter) && e.options.panelfxafter(),
                e._runCallBacks(e.panelPostFns)
            };
            if (!this.currPanel.hasClass(this.cssNames.panelActive)) {
                if (this.firstTime) {
                    this.panelTransition = this.options.panelfxfirst;
                    var o = 1
                } else {
                    var a = this.options.freeheight && "fading" == this.options.panelfx ? "tabsfading": "none";
                    this.panelTransition = this.options.freeheight ? a: this.options.panelfx
                }
                t.isFunction(e.options.panelfxbefore) && e.options.panelfxbefore(),
                this._runCallBacks(this.panelAnteFns),
                this._panelTransitions[this.panelTransition](n, o, s)
            }
        },
        this._animNav = function(i, n) {
            t.isFunction(e.options.navfxbefore) && e.options.navfxbefore(),
            e._runCallBacks(e.navAnteFns),
            this._navTransitions[this.options.navfx](i, n,
            function() { ! e.options.circular && e.scrollBtns && (e.navBtns.removeClass(e.cssNames.btnDisable), e._getNavPos(), 0 >= e.LIbefore ? e.navBtnPrev.addClass(e.cssNames.btnDisable) : 0 >= e.LIafter && e.navBtnNext.addClass(e.cssNames.btnDisable)),
                e.scrollcontinue ? setTimeout(function() {
                    "-=" == e.scrollcontinue ? e.navPrev() : e.navNext()
                },
                0) : t.isFunction(e.options.navfxafter) && e.options.navfxafter(),
                e._runCallBacks(e.navPostFns)
            })
        },
        this._runCallBacks = function(e) {
            t.each(e,
            function(e, i) {
                t.isFunction(i) && i()
            })
        },
        this._clearCallBacks = function(t) {
            t.length = 0
        },
        this._panelTransitions = {
            none: function(t, i, n) {
                e.panels.removeClass(e.cssNames.panelActive).hide(),
                e.currPanel.addClass(e.cssNames.panelActive).show(),
                n()
            },
            sliding: function(i, n, s) {
                "" == i && (i = e.prevPanel < e.currId ? "-=": "+="),
                e.prevPanel = e.currId;
                var n = "-=" == i ? "+": "-",
                o = e.options.verticalslide ? "top": "left",
                a = e.options.verticalnav ? e.domObjHeight: e.domObjWidth,
                i = "top" == o ? {
                    top: i + a
                }: {
                    left: i + a
                };
                e.oldPanel = t("." + e.cssNames.panelOld, e.domObj),
                e.activePanel = t("." + e.cssNames.panelActive, e.domObj),
                e.panels.css(o, "0"),
                e.oldPanel.removeClass(e.cssNames.panelOld).hide(),
                e.activePanel.removeClass(e.cssNames.panelActive).addClass(e.cssNames.panelOld),
                e.currPanel.addClass(e.cssNames.panelActive).css(o, n + a + "px").show(),
                e.panelsWrapper.stop(!0, !0).css(o, "0").animate(i, e.options.panelfxspeed, e.options.panelfxeasing,
                function() {
                    s()
                })
            },
            fading: function(i, n, s) {
                n ? e.panels.hide() : e.currPanel.css("display", "none"),
                t("." + e.cssNames.panelOld, e.domObj).removeClass(e.cssNames.panelOld),
                t("." + e.cssNames.panelActive, e.domObj).stop(!0, !0).removeClass(e.cssNames.panelActive).addClass(e.cssNames.panelOld),
                e.currPanel.addClass(e.cssNames.panelActive).animate({
                    opacity: "show"
                },
                e.options.panelfxspeed, e.options.panelfxeasing,
                function() {
                    s()
                })
            },
            tabsfading: function(t, i, n) {
                e.panels.removeClass(e.cssNames.panelActive).hide(),
                e.currPanel.fadeIn(e.options.panelfxspeed,
                function() {
                    n()
                })
            }
        },
        this._navTransitions = {
            none: function(t, i, n) {
                e.navUL.css(e.cssPosAttr, ("-=" == t ? e.navPos - i: e.navPos + i) + "px"),
                n()
            },
            sliding: function(t, i, n) {
                e.navUL.animate("left" == e.cssPosAttr ? {
                    left: t + i
                }: {
                    top: t + i
                },
                e.options.scrollspeed, e.options.scrolleasing,
                function() {
                    n()
                })
            }
        },
        this.playBtnPause = function() {
            this.playBtn.removeClass(this.cssNames.btnPause),
            this.autoScrollStop()
        },
        this.playBtnStart = function() {
            this.playBtn.addClass(e.cssNames.btnPause),
            this.autoScrollStart()
        },
        this.autoScrollStart = function() {
            var t = this;
            this.isPlaying = setInterval(function() {
                t._change(null, "-=", null, t.lineScrollDo, null)
            },
            t.options.autospeed)
        },
        this.autoScrollStop = function() {
            clearTimeout(this.isPlaying),
            this.isPlaying = null
        },
        this.changeWithId = function(t, e) {
            this._change(e, "", t, 0, 1)
        },
        this.stepBackward = function(t) {
            this._change(t, "+=", null, e.lineScrollDo, 1)
        },
        this.stepForward = function(t) {
            this._change(t, "-=", null, e.lineScrollDo, 1)
        },
        this.navPrev = function(t) {
            t && (e.scrollcontinue = "-="),
            this._change(this.navBtnPrev, "+=", null, 1, 1)
        },
        this.navNext = function(t) {
            t && (e.scrollcontinue = "+="),
            this._change(this.navBtnNext, "-=", null, 1, 1)
        },
        this.navStopContinuous = function() {
            e.scrollcontinue = ""
        },
        this.selectThumbnail = function(e) {
            t("." + this.cssNames.selected, this.navUL).removeClass(this.cssNames.selected),
            this.navLI.eq(e).addClass(this.cssNames.selected)
        }
    },
    t.fn.sliderkit = function(e) {
        return this.each(function() {
            t(this).data("sliderkit", (new SliderKit)._init(this, e))
        })
    }
} (jQuery),
function(t) {
    t.fn.UItoTop = function(e) {
        var i = t.extend({
            text: "To Top",
            min: 200,
            inDelay: 600,
            outDelay: 400,
            containerID: "toTop",
            containerHoverID: "toTopHover",
            scrollSpeed: 1200,
            easingType: "linear"
        },
        e),
        n = "#" + i.containerID,
        s = "#" + i.containerHoverID;
        t("body").append($('<a href="javascript:;" id="' + i.containerID + '">' + i.text + "</a>").click(function() {
            window.scrollTo(0, 0)
        })),
        t(n).hide().on("click.UItoTop",
        function() {
            return t("html, body").animate({
                scrollTop: 0
            },
            i.scrollSpeed, i.easingType),
            t("#" + i.containerHoverID, this).stop().animate({
                opacity: 0
            },
            i.inDelay, i.easingType),
            !1
        }).prepend('<span id="' + i.containerHoverID + '"></span>').hover(function() {
            t(s, this).stop().animate({
                opacity: 1
            },
            600, "linear")
        },
        function() {
            t(s, this).stop().animate({
                opacity: 0
            },
            700, "linear")
        }),
        t(window).scroll(function() {
            var e = t(window).scrollTop();
            "undefined" == typeof document.body.style.maxHeight && t(n).css({
                position: "absolute",
                top: e + t(window).height() - 50
            }),
            e > i.min ? t(n).fadeIn(i.inDelay) : t(n).fadeOut(i.Outdelay)
        })
    }
} (jQuery),
$(function() {
    $(window).width() > 480 && $().UItoTop({
        scrollSpeed: 100
    })
}),
window.addEventListener("load",
function() {
    FastClick.attach(document.body)
},
!1);