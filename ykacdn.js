/*! ykv <0.1.4@2017-05-22T08:34Z> | Copyright (c) 2015-2016 1VERGE, Inc */
!
function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ykv = e() : t.ykv = e()
} (this,
function() {
	return function(t) {
		function e(i) {
			if (n[i]) return n[i].exports;
			var r = n[i] = {
				exports: {},
				id: i,
				loaded: !1
			};
			return t[i].call(r.exports, r, r.exports, e),
			r.loaded = !0,
			r.exports
		}
		var n = {};
		return e.m = t,
		e.c = n,
		e.p = "",
		e(0)
	} ([function(t, e, n) { (function(e) {
			var i = n(3),
			r = n(17),
			o = [].slice;
			window.ykv = e,
			e.fn.extend({
				getPlayData: function() {
					if (this[0]) return this[0].getPlayData()
				},
				getState: function() {
					if (this[0]) return this[0].getState()
				},
				language: function() {
					if (this[0]) return this[0].language()
				},
				quality: function() {
					if (arguments.length > 0) {
						var t = o.call(arguments);
						this.each(function(e, n) {
							n.quality.apply(n, t)
						})
					}
					if (this[0]) return this[0].quality()
				},
				seek: function() {
					if (arguments.length > 0) {
						var t = o.call(arguments);
						this.each(function(e, n) {
							n.seek.apply(n, t)
						})
					}
					return this
				},
				playVideo: function() {
					return arguments.length > 0 && this.each(function(t, e) {
						e.playVideo.apply(e, o.call(arguments))
					}),
					this
				}
			}),
			e.extend({
				Promise: n(19),
				jsonp: n(20),
				version: "0.1.4",
				dispatch: function() {
					if (e.browser.isSupportH5M3U8) return i;
					if (e.browser.isSupportH5MP4) return r;
					throw this.isSupportFlash ? new Error("Please Use Flash Player") : new Error("The Device not support")
				}
			}),
			t.exports = e
		}).call(e, n(1))
	},
	function(t, e, n) { (function(e) {
			/*! Verge <0.1.0@2016-04-12T12:15Z> | Copyright (c) 2015-2016 1VERGE, Inc | Released under the MIT license | https://github.com/vergeplayer/Verge/blob/master/LICENSE */
			!
			function(e, n) {
				t.exports = n()
			} (this,
			function() {
				return function(t) {
					function e(i) {
						if (n[i]) return n[i].exports;
						var r = n[i] = {
							exports: {},
							id: i,
							loaded: !1
						};
						return t[i].call(r.exports, r, r.exports, e),
						r.loaded = !0,
						r.exports
					}
					var n = {};
					return e.m = t,
					e.c = n,
					e.p = "",
					e(0)
				} ([function(t, n, i) {
					if ("function" != typeof e || !e.fn || !e.extend) throw new TypeError("The Verge need The vQ : npm install vQ --save");
					"undefined" == typeof HTMLVideoElement && (document.createElement("video"), document.createElement("audio"), document.createElement("track"));
					var r = i(1);
					i(12);
					var o = window.verge;
					r.extend({
						utils: i(2),
						browser: i(3),
						playerApi: i(9),
						fullscreenApi: i(10),
						log: i(11),
						ObjectCreate: i(6),
						CoreObject: i(5),
						Event: i(13),
						EventManager: i(7),
						VideoPlayer: i(4),
						noConflict: function() {
							return window.verge == r && (window.verge = o),
							r
						}
					}),
					t.exports = r
				},
				function(t, n, i) {
					var r = i(2),
					o = i(3),
					a = i(4),
					s = function(t, e) {
						return new s.fn.init(t, e)
					},
					u = {};
					s.fn = {
						constructor: s,
						length: 0,
						init: function(t, n) {
							var i = this;
							if (e.isFunction(t)) e.ready(t),
							n && log.warn("the selector is not String or Dom Element,Options will not be applied.");
							else {
								var o = e(t),
								a = s.dispatch(t, n);
								o.each(function(t, e) {
									if (e.nodeName) {
										var o;
										if (e.playerId) o = u[e.playerId],
										o.options(n);
										else {
											var s = r.guid();
											e.playerId = s,
											o = new a(e, n),
											u[s] = o
										}
										i[t] = o,
										i.length++
									}
								})
							}
							return this
						},
						each: function(t) {
							for (var e = 0,
							n = this.length; e < n; e += 1) t.call(this[e], e, this[e]);
							return this
						}
					},
					s.fn.init.prototype = s.fn,
					s.extend = s.fn.extend = function() {
						e.extend.apply(this, arguments)
					},
					s.extend({
						version: "0.1.0",
						dispatch: function(t, e) {
							if (o.supportHTML5Video) return a;
							throw o.isSupportFlash ? new Error("Please Use Flash Player") : new Error("The Device not support")
						}
					}),
					t.exports = s
				},
				function(t, n) {
					function i(t, e) {
						return (Array(e).join(0) + t).slice( - e)
					}
					var r = (new Date).getTime().toString(16).substring(4, 10),
					o = 0,
					a = {
						isDOMElement: function(t) {
							return t && 1 === t.nodeType
						},
						isVideoElement: function(t) {
							return a.isDOMElement(t) && "video" == t.nodeName.toLowerCase()
						},
						guid: function() {
							return r + "_" + o++
						},
						long2array: function(t) {
							var e, n = [],
							r = [60, 1];
							return t >= 3600 && (r = [3600, 60, 1]),
							r.forEach(function(r) {
								n.push(i(e = t / r | 0, 2)),
								t -= e * r
							}),
							n
						},
						long2time: function(t) {
							var e = a.long2array(t);
							return e.join(":")
						},
						long2text: function(t) {
							for (var e = [], n = a.long2array(t), i = 2, r = n.length - 1; r >= 0; r--) {
								var o = parseInt(n[r]);
								e.unshift(o + uint[unitIndex[i]]),
								i--
							}
							return e.join("")
						},
						time2long: function(t) {
							for (var e = t.split(":"), n = 0, i = e.length, r = i - 1; r >= 0; r--) {
								var o = parseInt(e[r]);
								if (!isNaN(o)) {
									for (var a = i - r - 1,
									s = 0; s < a; s++) o *= 60;
									n += o
								}
							}
							return n
						}
					};
					a.extend = function() {
						e.extend.apply(this, arguments)
					},
					t.exports = a
				},
				function(t, e) {
					function n() {
						var t = 0,
						e = 0,
						n = 0;
						try {
							var i = i ||
							function() {};
							if (document.all) {
								var r = new i("ShockwaveFlash.ShockwaveFlash");
								if (r) {
									t = 1;
									var o = r.GetVariable("$version");
									e = parseInt(o.split(" ")[1].split(",")[0])
								}
							} else if (navigator.plugins && navigator.plugins.length > 0) {
								var a = navigator.plugins["Shockwave Flash"];
								if (a) {
									t = 1;
									for (var s = a.description.split(" "), u = 0; u < s.length; ++u) isNaN(parseInt(s[u])) || (e = parseInt(s[u]))
								}
							}
						} catch(l) {
							t = 1,
							n = 1
						}
						return {
							f: t,
							v: e,
							e: n
						}
					}
					var i = {},
					r = document.createElement("video"),
					o = {
						MP4: "video/mp4",
						OGG: "video/ogg",
						WEBM: "video/webm"
					},
					a = {
						isWin: "Win",
						isMac: "Mac",
						isSafari: "Safari",
						isChrome: "Chrome",
						isFirefox: "Firefox",
						isIPAD: "iPad",
						isIPAD7: "iPad; CPU OS 7",
						isIPHONE: "iPhone",
						isIPOD: "iPod",
						isLEPAD: "lepad_hls",
						isMIUI: "MI-ONE",
						isAndroid: "Android",
						isAndroid4: "Android 4.",
						isAndroid41: "Android 4.1",
						isSonyDTV: "SonyDTV",
						isBlackBerry: "BlackBerry",
						isMQQBrowser: "MQQBrowser",
						isMobile: "Mobile",
						isSamSung: "SAMSUNG",
						isHTC: "HTC",
						isLumia: "Lumia",
						isVIVO: "vivo",
						isWeixin: "MicroMessenger"
					};
					if (i.supportHTML5Video = !1, i.isIOS = !1, i.os = "", r.canPlayType) {
						i.supportHTML5Video = !0;
						for (var s in o) r.canPlayType(o[s]) ? i["canPlay" + s] = !0 : i["canPlay" + s] = !1
					}
					var u = navigator.userAgent;
					for (var l in a) if (u.indexOf(a[l]) !== -1 ? (i[l] = !0, i.os += a[l] + " ") : i[l] = !1, u.indexOf("Android") !== -1) {
						var c = u.indexOf("Android"),
						d = u.substr(c, 10);
						d > a.isAndroid4 && (i.isAndroid4 = !0, i.os += d + " ")
					}
					i.isMobileIOS = i.isIPAD || i.isIPHONE || i.isIPOD,
					i.isIOS = i.isMobileIOS || i.isMac,
					i.isSupportH5M3U8 = i.isMobileIOS || i.isMac && i.isSafari && !i.isChrome || i.isLEPAD || i.isSonyDTV,
					i.isSupportH5MP4 = (i.isChrome || i.isIE10 || i.isAndroid41 || i.isAndroid4 || i.isLumia) && i.canPlayMP4;
					var h = n();
					i.isSupportFlash = h.f && !h.e,
					(i.isMQQBrowser || i.isLumia) && (i.isSupportFlash = !1),
					i.isPhone = i.isIPHONE || i.isIPOD || i.isAndroid && i.isMobile,
					i.isAndroidPad = i.isAndroid && !i.isMobile,
					i.isPad = i.isIPAD || i.isAndroidPad,
					i.isMobile = i.isIPAD || i.isIPHONE || i.isIPOD || i.isLEPAD || i.isMIUI || i.isAndroid4 || i.isSonyDTV || i.isLumia,
					t.exports = i
				},
				function(t, n, i) {
					var r = i(5),
					o = i(3),
					a = i(7),
					s = i(2),
					u = [].slice,
					l = i(9),
					c = i(10)(document.createElement("video")),
					d = i(11),
					h = r.extend({
						init: function(t, n) {
							var i = this;
							if (t instanceof e && (t = t[0]), !s.isVideoElement(t)) throw new TypeError("The video not a video element");
							n = e.merge({
								isWeixin: o.isWeixin,
								controls: !1
							},
							n),
							i.video = t,
							i.options(n),
							i.bindEvents()
						},
						options: function(t) {
							var n = this;
							if (arguments.length > 0) {
								var i = ["isWeixin", "attr", "plugins"].join("-") + "-";
								if (e.isPlainObject(t)) {
									var r = {};
									e.each(t,
									function(t, e) {
										i.indexOf(t + "-") < 0 && (r[t] = e)
									}),
									t.isWeixin && (r["webkit-playsinline"] = ""),
									t.attr && (e.isPlainObject(t.attr) ? e.each(t.attr,
									function(t, e) {
										r[t] = e
									}) : r.attr = t.attr),
									n.attr(r),
									t.plugins && e.each(t.plugins,
									function(t, n) {
										e.isFunction(this[t]) ? this[t](n) : d.error("Unable to find plugin:", t)
									},
									this),
									n._options = e.merge(n._options || {},
									t)
								} else if ("string" == typeof t) {
									if (arguments.length > 1) {
										var r = {};
										r[t] = arguments[1],
										n.options(r)
									}
									return i.indexOf(t + "-") >= 0 ? n._options[t] : n.attr(t)
								}
							}
							return n._options
						},
						currentTime: function(t, n) {
							var i = this;
							if (arguments.length > 0) {
								var r, o = function() {
									r && (clearTimeout(r), r = void 0)
								},
								a = function() {
									i.video.currentTime = t,
									e.isFunction(n) && n(),
									o(),
									i.video.play()
								},
								s = this.video.seekable;
								if (1 == s.length && t < s.end(0)) try {
									a()
								} catch(u) {
									i.one("onCanPlay",
									function() {
										a()
									})
								} else {
									o();
									var l = arguments.callee;
									r = setTimeout(function() {
										l.apply(i, arguments)
									},
									100)
								}
							}
							return this.video.currentTime
						},
						src: function(t) {
							if (arguments.length > 0) {
								var e = !this._options.autoplay;
								if (this.video.src && (e = this.video.paused), this.video.paused || this.video.pause(), this.video.src = t, this.video.load(), !e) {
									var n = this;
									this.one("canplay",
									function() {
										n.play()
									}),
									this.play()
								}
							}
							return this.video.src
						},
						fullscreen: function(t) {
							if (arguments.length > 0 && t != this.isFullscreen) {
								var e = this;
								t ? o.isIPAD ? (e._enterFullWindow(), e.trigger("onFullscreenChange", [e.isFullWindow])) : this.requestFullscreen() : o.isIPAD ? (e._exitFullWindow(), e.trigger("onFullscreenChange", [e.isFullWindow])) : this.exitFullscreen()
							}
							return this.isFullscreen
						},
						requestFullscreen: function() {
							var t = this;
							return c.requestFullscreen ? t._enterFullscreen() : (t.isFullscreen = !0, t._enterFullWindow(), t.trigger("onFullscreenChange", [t.isFullscreen])),
							this
						},
						_enterFullscreen: function() {
							var t = this.video;
							t.paused && t.networkState <= t.HAVE_METADATA ? (t.play(), setTimeout(function() {
								t.pause(),
								t[c.requestFullscreen]()
							},
							0)) : t[c.exitFullscreen]()
						},
						_enterFullWindow: function() {
							var t = this;
							t.isFullWindow = !0,
							t.docOrigOverflow = document.documentElement.style.overflow,
							e.bind(document, "keydown", t._fullWindowOnEscKey, t),
							document.documentElement.style.overflow = "hidden",
							e.addClass(document.body, "vvp-full-window"),
							t.trigger("onFullWindowChange", [t.isFullWindow])
						},
						_fullWindowOnEscKey: function(t) {
							27 === t.keyCode && (this.isFullscreen === !0 ? this.exitFullscreen() : this._exitFullWindow())
						},
						exitFullscreen: function() {
							var t = this;
							return t.isFullscreen = !1,
							c.exitFullscreen ? t.video[c.exitFullscreen]() : (this._exitFullWindow(), t.trigger("onFullscreenChange", [t.isFullscreen])),
							this
						},
						_exitFullWindow: function() {
							this.isFullWindow = !1,
							e.unbind(document, "keydown", this._fullWindowOnEscKey),
							document.documentElement.style.overflow = this.docOrigOverflow,
							e.removeClass(document.body, "vvp-full-window"),
							this.trigger("onFullWindowChange", [this.isFullWindow])
						},
						removeEvent: function() {
							var t = this;
							e.each(l.callbacks,
							function(n, i) {
								var r = t[i].eventTarget;
								e.unbind(t.video, n, r)
							})
						},
						bindEvents: function() {
							var t = this;
							e.each(l.callbacks,
							function(n, i) {
								var r = function() {
									var e = t[i].apply(t, arguments);
									0 != e && t.trigger(i, arguments)
								};
								e.bind(t.video, n, r),
								t[i].eventTarget = r
							}),
							c.requestFullscreen && (e.bind(t.video, c.fullscreenchange,
							function() {
								t.trigger("onFullscreenChange", [])
							}), e.bind(t.video, c.fullscreenerror,
							function() {
								t.trigger("onFullscreenError", [])
							}))
						},
						attr: function(t) {
							var n = l.attrs.readonly.concat(l.attrs.specialReadonly),
							i = l.attrs.readwrite.concat(l.attrs.specialReadwrite),
							r = this;
							if (e.isPlainObject(t)) {
								var o = {};
								e.each(t,
								function(t, e) {
									for (var a = !1,
									s = 0,
									l = n.length; s < l; s++) if (t.toLowerCase() == n[s].toLowerCase()) {
										a = !0;
										break
									}
									if (!a) for (var c = 0,
									d = i.length; c < d; c++) if (t.toLowerCase() == i[c].toLowerCase()) {
										a = !0,
										r[i[c]].apply(r, u.call(arguments, 1));
										break
									}
									a || (o[t] = e)
								}),
								e.attr(this.video, o)
							} else if ("string" == typeof t) {
								for (var a = n.concat(i), s = 0, c = a.length; s < c; s++) if (t.toLowerCase() == a[s].toLowerCase()) return r[a[s]].apply(r, u.call(arguments, 1));
								return e.attr.apply(e, [this.video].concat(u.call(arguments)))
							}
						},
						plugin: function(t, e) {
							return this.expand({
								name: e
							}),
							this
						}
					});
					h.expand(function() {
						var t = {},
						n = l.methods,
						i = l.callbacks,
						r = l.attrs;
						return events = new a,
						e.each(["bind", "unbind", "one", "trigger"],
						function(n, i) {
							t[i] = function() {
								var t = this,
								n = u.call(arguments);
								if (e.isArray(n[0])) e.each(n[0],
								function(e, r) {
									t[i].apply(t, [r].concat(n.slice(1)))
								});
								else if ("string" == typeof n[0]) {
									n[0] = n[0].toLowerCase(),
									0 == n[0].indexOf("on") && (n[0] = n[0].substring(2));
									var r = events[i].apply(events, n);
									if (null != r) return r
								}
								return t
							}
						}),
						e.each(n["native"].concat(n.specialNative),
						function(e, n) {
							t[n] = function() {
								var t = this;
								return t.video[n].apply(t.video, arguments),
								t
							}
						}),
						e.each(r.readonly.concat(r.specialReadonly),
						function(n, i) {
							t[i] = function() {
								var t = e.attr(this.video, i);
								return e.isFunction(t) ? t.apply(this.video, arguments) : t
							}
						}),
						e.each(r.readwrite,
						function(n, i) {
							t[i] = function(t) {
								return arguments.length > 0 ? e.attr(this.video, i, t) : e.attr(this.video, i)
							}
						}),
						e.each(n.callbacks.concat(n.specialNative).concat(r.specialReadonly),
						function(e, n) {
							var r = i[n.toLowerCase()] || n;
							t[r] = function() {
								d(r, arguments)
							}
						}),
						t
					} ()),
					t.exports = h
				},
				function(t, n, i) {
					var r = i(6),
					o = !1,
					a = /'xyz'/.test(function() {
						"xyz"
					}) ? /\b_super\b/: /.*/,
					s = function() {};
					s.extend = function(t) {
						function n(t, e) {
							return function() {
								var n = this._super;
								this._super = r[t];
								var i = e.apply(this, arguments);
								return this._super = n,
								i
							}
						}
						function i() { ! o && this.init && this.init.apply(this, arguments)
						}
						var r = this.prototype,
						u = arguments.length;
						o = !0;
						var l = new this;
						o = !1;
						for (var c = 0; c < u; c++) {
							var d = arguments[c];
							e.isFunction(d) && e.isFunction(d.extend) && (d = d.prototype);
							for (var h in d) l[h] = "function" == typeof d[h] && "function" == typeof r[h] && a.test(d[h]) ? n(h, d[h]) : d[h]
						}
						return i.prototype = l,
						i.prototype.constructor = i,
						i.extend = arguments.callee,
						i.create = s.create,
						i.expand = s.expand,
						i
					},
					s.create = function() {
						var t = r(this.prototype);
						return this.apply(t, arguments),
						t
					},
					s.expand = function(t) {
						e.extend.apply(this.prototype, arguments)
					},
					t.exports = s
				},
				function(t, e) {
					var n = Object.create ||
					function(t) {
						function e() {}
						return e.prototype = t,
						new e
					};
					t.exports = n
				},
				function(t, n, i) {
					var r = i(5),
					o = [].slice,
					a = i(8),
					s = +(new Date).getTime().toString().substring(5),
					u = r.extend({
						init: function(t, n) {
							this._handlers = {},
							this._contexts = {},
							this._target = n;
							var i = this;
							t && e.each(t,
							function(t, e) {
								i.bind(t, e)
							})
						},
						bind: function(t, n, i) {
							var r = this;
							if (e.isArray(t)) return r._handleMultipleEvents.apply(r, [r.bind].concat(o.call(arguments)));
							n.$$guid || (n.$$guid = s++),
							i && (this._contexts[n.$$guid] = i);
							var a = r._handlers[t];
							a || (a = r._handlers[t] = {}),
							a[n.$$guid] = n
						},
						unbind: function(t, n, i) {
							var r = this;
							if (e.isArray(t)) return r._handleMultipleEvents.apply(r, [r.unbind].concat(o.call(arguments)));
							var a = r._handlers[t];
							if (a) {
								r._contexts[n.$$guid] && delete r._contexts[n.$$guid],
								delete a[n.$$guid];
								var s = !1;
								for (var u in a) s = !0;
								s || delete r._handlers[t]
							}
						},
						one: function(t, n, i) {
							var r = this,
							a = o.call(arguments);
							if (e.isArray(t)) return r._handleMultipleEvents.apply(r, [r.one].concat(a));
							var u = function() {
								r.unbind(t, u),
								n.apply(i || n, arguments)
							};
							u.$$guid = n.$$guid = n.$$guid || s++,
							r.bind(t, u)
						},
						trigger: function(t, n, i) {
							var r = this;
							if (!t) throw new TypeError("need the 'type'");
							var o;
							t.constructor == a ? (o = t, o.currentTarget = r._target) : o = new a(t, r._target);
							var s = r._handlers[o.type];
							if (s) {
								n = [o].concat(null == n ? [] : e.isArray(n) ? n: [n]);
								for (var u in s) {
									i = i || r._contexts[s[u].$$guid];
									var l = s[u].apply(i || this, n);
									void 0 !== l && (o.result = l) === !1 && o.stopPropagation()
								}
							}
							return o
						},
						_handleMultipleEvents: function(t, n) {
							var i = this,
							r = o.call(arguments, 2);
							e.each(n,
							function(e, n) {
								t.apply(i, [n].concat(r))
							})
						}
					});
					t.exports = u
				},
				function(t, e, n) {
					var i = n(5),
					r = i.extend({
						type: "",
						target: null,
						currentTarget: null,
						cancelBubble: !1,
						fall: !1,
						result: null,
						init: function(t, e) {
							"string" == typeof t && (this.type = t),
							e && (this.target = e, this.currentTarget = e)
						},
						stopPropagation: function() {
							this.cancelBubble = !0
						}
					});
					t.exports = r
				},
				function(t, e) {
					var n = {
						methods: {
							events: ["bind", "unbind", "one", "trigger"],
							"native": ["load"],
							specialNative: ["play", "pause"],
							callbacks: ["abort", "canPlay", "canPlayThrough", "durationChange", "emptied", "loadedData", "loadedMetaData", "loadStart", "playing", "progress", "rateChange", "readyStateChange", "seeked", "stalled", "suspend", "timeUpdate", "volumeChange", "waiting", "fullScreenChange", "fullWindowChange"]
						},
						attrs: {
							readonly: ["duration", "currentSrc", "buffered", "played", "readyState", "seekable", "networkState", "videoWidth", "videoHeight", "canPlayType"],
							specialReadonly: ["ended", "error", "seeking"],
							readwrite: ["autoplay", "height", "width", "loop", "preload", "paused", "poster", "muted", "volume", "controls", "playbackRate"],
							specialReadwrite: ["src", "currentTime", "fullscreen"]
						},
						callbacks: {
							abort: "onAbort",
							canplay: "onCanPlay",
							canplaythrough: "onCanPlayThrough",
							durationchange: "onDurationChange",
							emptied: "onEmptied",
							ended: "onEnded",
							error: "onError",
							loadeddata: "onLoadedData",
							loadedmetadata: "onLoadedMetaData",
							loadstart: "onLoadStart",
							pause: "onPause",
							play: "onPlay",
							playing: "onPlaying",
							progress: "onProgress",
							ratechange: "onRateChange",
							readystatechange: "onReadyStateChange",
							seeked: "onSeeked",
							seeking: "onSeeking",
							stalled: "onStalled",
							suspend: "onSuspend",
							timeupdate: "onTimeUpdate",
							volumechange: "onVolumeChange",
							waiting: "onWaiting"
						}
					};
					t.exports = n
				},
				function(t, e) {
					var n = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]],
					i = n[0];
					t.exports = function(t) {
						for (var e, t = t || document,
						r = 0; r < n.length; r++) if (n[r][1] in t) {
							e = n[r];
							break
						}
						var o = {};
						if (e) for (var a = 0; a < e.length; a++) o[i[a]] = e[a];
						return o
					}
				},
				function(t, e) {
					var n = function() {},
					i = window.console || {
						log: n,
						warn: n,
						error: n
					},
					r = function(t, e) {
						var n = [].slice.call(e);
						t ? n.unshift(t.toUpperCase() + ":") : t = "log",
						o.history.push(n),
						n.unshift("verge:"),
						i[t].apply ? i[t].apply(i, n) : i[t](n.join(" "))
					},
					o = function() {
						r("log", arguments)
					};
					o.error = function() {
						r("error", arguments)
					},
					o.warn = function() {
						r("warn", arguments)
					},
					o.history = [],
					t.exports = o
				},
				function(t, n, i) {
					var r = i(1),
					o = i(9),
					a = [].slice;
					r.fn.extend(function() {
						var t = {},
						n = o.methods,
						i = o.attrs;
						return e.each(n.events.concat(n["native"]).concat(["plugin"]),
						function(e, n) {
							t[n] = function() {
								var t = a.call(arguments);
								return this.each(function(e, i) {
									i[n].apply(i, t)
								}),
								this
							}
						}),
						e.each(n.specialNative,
						function(n, i) {
							t[i] = function(t, n) {
								if (arguments.length > 0 && e.isFunction(t)) {
									var r = [i].concat(a.call(arguments));
									this.each(function(t, e) {
										e.bind.apply(e, r)
									})
								}
								if (n !== !1) {
									var o = a.call(arguments);
									this.each(function(t, e) {
										e[i].apply(e, o)
									})
								}
								return this
							}
						}),
						e.each(i.readonly,
						function(e, n) {
							t[n] = function() {
								var t = this[0];
								if (t) return t[n].apply(t, arguments)
							}
						}),
						e.each(i.specialReadonly,
						function(n, i) {
							t[i] = function(t) {
								if (arguments.length > 0 && e.isFunction(t)) {
									var n = [i].concat(a.call(arguments));
									this.each(function(t, e) {
										e.bind.apply(this, n)
									})
								}
								var r = this[0];
								if (r) return r[i].apply(r, arguments)
							}
						}),
						e.each(i.readwrite.concat(i.specialReadwrite).concat(["attr", "options"]),
						function(n, i) {
							t[i] = function(t) { (arguments.length > 1 || e.isPlainObject(t)) && this.each(function(t, e) {
									e[i].apply(e, arguments)
								});
								var n = this[0];
								if (n) return n[i].apply(n, a.call(arguments))
							}
						}),
						e.each(n.callbacks,
						function(e, n) {
							t[n] = function() {
								var t = this,
								e = [n].concat(a.call(arguments));
								return t.each(function(t, n) {
									n.bind.apply(n, e)
								}),
								this
							}
						}),
						t
					} ())
				},
				function(t, e, n) {
					var i = n(5),
					r = i.extend({
						type: "",
						target: null,
						currentTarget: null,
						cancelBubble: !1,
						fall: !1,
						result: null,
						init: function(t, e) {
							"string" == typeof t && (this.type = t),
							e && (this.target = e, this.currentTarget = e)
						},
						stopPropagation: function() {
							this.cancelBubble = !0
						}
					});
					t.exports = r
				}])
			})
		}).call(e, n(2))
	},
	function(t, e, n) {
		/*! vQ <0.1.1@2016-04-13T16:08Z> | Copyright (c) 2015-2016 1VERGE, Inc | Released under the MIT license | https://github.com/vergeplayer/vQ/blob/master/LICENSE */
		!
		function(e, n) {
			t.exports = n()
		} (this,
		function() {
			return function(t) {
				function e(i) {
					if (n[i]) return n[i].exports;
					var r = n[i] = {
						exports: {},
						id: i,
						loaded: !1
					};
					return t[i].call(r.exports, r, r.exports, e),
					r.loaded = !0,
					r.exports
				}
				var n = {};
				return e.m = t,
				e.c = n,
				e.p = "",
				e(0)
			} ([function(t, e, n) {
				var i, r;
				i = [n(1), n(2), n(3), n(4), n(5), n(7), n(8), n(9)],
				r = function(t) {
					if (!window || !window.document) throw new Error("vQ requires a window with a document");
					var e = window.vQ;
					return t.extend({
						noConflict: function() {
							return window.vQ == t && (window.vQ = e),
							t
						}
					}),
					t
				}.apply(e, i),
				!(void 0 !== r && (t.exports = r))
			},
			function(t, e, n) {
				var i, r;
				i = [],
				r = function() {
					var t = [].slice,
					e = ([].concat, [].filter),
					n = [].push,
					i = document.createElement("div"),
					r = /^[\w-]*$/,
					o = Object.prototype.hasOwnProperty,
					a = function(t, e) {
						return new a.fn.init(t, e)
					};
					return a.fn = a.prototype = {
						constructor: a,
						length: 0,
						init: function(t, e) {
							if (!t) return this;
							if ("string" == typeof t) {
								e = e instanceof a ? e[0] : e;
								var n = (e || document).querySelectorAll(t);
								this.length = n.length;
								for (var i = 0; i < this.length; i += 1) this[i] = n[i]
							} else {
								if (t.nodeType) return this[0] = t,
								this.length = 1,
								this;
								if (t instanceof a) return t;
								if (a.isFunction(t)) a.ready(t);
								else if (a.isArrayLike(t)) {
									this.length = t.length;
									for (var r = 0; r < t.length; r += 1) this[r] = t[r]
								}
							}
							return this
						},
						each: function(t) {
							for (var e = 0,
							n = this.length; e < n; e += 1) t.call(this[e], e, this[e]);
							return this
						},
						toArray: function() {
							return t.call(this)
						},
						get: function(e) {
							return null != e ? e < 0 ? this[e + this.length] : this[e] : t.call(this)
						},
						eq: function(t) {
							var e = this.length,
							n = +t + (t < 0 ? e: 0);
							return n >= 0 && n < e ? a(this[n]) : null
						},
						slice: function() {
							return t.apply(this, t.call(arguments))
						},
						find: function(t) {
							var e, n = this;
							return e = t ? "object" == typeof t ? a(t).filter(function() {
								for (var t = this,
								e = 0; e < n.length; e++) if (a.contains(n[e], t)) return ! 0;
								return ! 1
							}) : 1 == this.length ? a(a.qsa(this[0], t)) : this.map(function() {
								return a.qsa(this, t)
							}) : a()
						},
						filter: function(t) {
							return a.isFunction(t) ? this.not(this.not(t)) : a(e.call(this,
							function(e) {
								return a.matches(e, t)
							}))
						},
						map: function(t) {
							return a(a.map(this,
							function(e, n) {
								return t.call(e, n)
							}))
						},
						not: function(e) {
							var n = [];
							if (a.isFunction(e) && void 0 !== e.call) this.each(function(t) {
								e.call(this, t) || n.push(this)
							});
							else {
								var i = "string" == typeof e ? this.filter(e) : a.isArrayLike(e) && a.isFunction(e.item) ? t.call(e) : a(e);
								this.each(function(t, e) {
									i.indexOf(e) < 0 && n.push(e)
								})
							}
							return a(n)
						},
						grep: function(t, e) {
							for (var n, i = [], r = 0, o = this.length, a = !e; r < o; r++) n = !t(this[r], r),
							n !== a && i.push(this[r]);
							return i
						}
					},
					a.fn.init.prototype = a.fn,
					a.extend = a.fn.extend = function() {
						var t, e, n, i, r, o, s = arguments[0] || {},
						u = 1,
						l = arguments.length,
						c = !1;
						for ("boolean" == typeof s && (c = s, s = arguments[u] || {},
						u++), "object" == typeof s || a.isFunction(s) || (s = {}), u === l && (s = this, u--); u < l; u++) if (null != (t = arguments[u])) for (e in t) n = s[e],
						i = t[e],
						s !== i && (c && i && (a.isPlainObject(i) || (r = a.isArray(i))) ? (r ? (r = !1, o = n && a.isArray(n) ? n: []) : o = n && a.isPlainObject(n) ? n: {},
						s[e] = a.extend(c, o, i)) : void 0 !== i && (s[e] = i));
						return s
					},
					a.extend({
						version: "0.1.1",
						isObject: function(t) {
							return "object" == typeof t
						},
						isPlainObject: function(t) {
							return !! t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
						},
						isEmptyObject: function(t) {
							var e;
							for (e in t) return ! 0;
							return ! 1
						},
						isArray: function(t) {
							return "[object Array]" === Object.prototype.toString.call(t)
						},
						isArrayLike: function(t) {
							return a.isArray(t) || !a.isFunction(t) && (0 === t.length || "number" == typeof t.length && t.length > 0 && t.length - 1 in t)
						},
						isFunction: function(t) {
							return "[object Function]" === Object.prototype.toString.call(t)
						},
						isWindow: function(t) {
							return null != t && t == t.window
						},
						isDocument: function(t) {
							return null != t && t.nodeType == t.DOCUMENT_NODE
						},
						nodeName: function(t, e) {
							return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
						},
						matches: function(t, e) {
							if (!e || !t || 1 !== t.nodeType) return ! 1;
							var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
							if (n) return n.call(t, e);
							var r, o = t.parentNode,
							s = !o;
							return s && (o = i).appendChild(t),
							r = a.qsa(o, e).indexOf(t),
							s && i.removeChild(t),
							r
						},
						qsa: function(e, n) {
							var i, o = "#" == n[0],
							a = !o && "." == n[0],
							s = o || a ? n.slice(1) : n,
							u = r.test(s);
							return e.getElementById && u && o ? (i = e.getElementById(s)) ? [i] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : t.call(u && !o && e.getElementsByClassName ? a ? e.getElementsByClassName(s) : e.getElementsByTagName(n) : e.querySelectorAll(n))
						},
						makeArray: function(t, e) {
							var i = e || [];
							return null != t && (a.isArrayLike(Object(t)) ? a.merge(i, "string" == typeof t ? [t] : t) : n.call(i, t)),
							i
						},
						each: function(t, e, n) {
							for (var i in t) o.call(t, i) && e.call(n || this, i, t[i])
						},
						map: function(t, e) {
							var n = [];
							if (a.isArrayLike(t)) for (var i = 0; i < t.length; i++) {
								var r = e(t[i], i);
								null != r && n.push(r)
							} else for (var o in t) {
								var s = e(t[o], o);
								null != s && n.push(s)
							}
							return n
						},
						trim: function(t) {
							var e = /(^\s*)|(\s*$)/g;
							return null == t ? "": (t + "").replace(e, "")
						},
						noop: function() {},
						merge: function(t, e) {
							if (!e) return t;
							for (var n in e) o.call(e, n) && (t[n] = e[n]);
							return t
						}
					}),
					a
				}.apply(e, i),
				!(void 0 !== r && (t.exports = r))
			},
			function(t, e, n) {
				var i, r;
				i = [n(1)],
				r = function(t) {
					function e(t, e) {
						Object.getOwnPropertyNames(e).forEach(function(n) {
							var i = e[n];
							null === i || "undefined" == typeof i || i === !1 ? t.removeAttribute(n) : t.setAttribute(n, i === !0 ? "": i)
						})
					}
					function n(t, e) {
						var n, i, r, o, a;
						if (n = {},
						i = ",autoplay,controls,loop,muted,default,", t && t.attributes && t.attributes.length > 0) {
							r = t.attributes;
							for (var s = r.length - 1; s >= 0; s--) {
								if (o = r[s].name, a = r[s].value, "boolean" != typeof t[o] && i.indexOf("," + o + ",") === -1 || (a = null !== a), e && o == e) return a;
								n[o] = a
							}
						}
						return e && "string" == typeof e ? t[e] : n
					}
					t.extend({
						attr: function(t, i) {
							var r;
							if ("object" == typeof i && (r = i), "string" == typeof i) {
								if (! (arguments.length > 2)) return n(t, i);
								r = {},
								r[i] = arguments[2]
							}
							r && e(t, r)
						},
						contains: function(t, e) {
							if (t.compareDocumentPosition) return t === e || !!(16 & t.compareDocumentPosition(e));
							if (t.contains && 1 === e.nodeType) return t.contains(e) && t !== e;
							for (; e = e.parentNode;) if (e === t) return ! 0;
							return ! 1
						}
					}),
					t.fn.extend({
						attr: function(t) {
							var i;
							if ("object" == typeof t && (i = t), "string" == typeof t) {
								if (! (arguments.length > 1)) return n(this[0], t);
								i = {},
								i[t] = arguments[1]
							}
							i && this.each(function(t, n) {
								e(n, i)
							})
						},
						contains: function(e) {
							for (var n = 0; n < this.length; n++) {
								var i = t.contains(this[n], e);
								if (i) return ! 0
							}
							return ! 1
						}
					})
				}.apply(e, i),
				!(void 0 !== r && (t.exports = r))
			},
			function(t, e, n) {
				var i, r;
				i = [n(1)],
				r = function(t) {
					function e(t, e) {
						return (" " + t.className + " ").indexOf(" " + e + " ") !== -1
					}
					t.extend({
						hasClass: function(t, n) {
							return e.apply(this, arguments)
						},
						addClass: function(t, n) {
							return e(t, n) || (t.className = "" === t.className ? n: t.className + " " + n),
							this
						},
						removeClass: function(t, n) {
							if (e(t, n)) {
								for (var i = t.className.split(" "), r = i.length - 1; r >= 0; r--) i[r] === n && i.splice(r, 1);
								return t.className = i.join(" "),
								this
							}
						},
						toggleClass: function(t, n) {
							return e(t, n) ? this.removeClass(t, n) : this.addClass(t, n),
							this
						}
					}),
					t.fn.extend({
						hasClass: function(e) {
							return t.hasClass(this[0], e)
						},
						addClass: function(e) {
							return this.each(function(n, i) {
								t.addClass(i, e)
							}),
							this
						},
						removeClass: function(e) {
							return this.each(function(n, i) {
								t.removeClass(i, e)
							}),
							this
						},
						toggleClass: function(e, n) {
							return this.each(function(e, i) {
								t.toggleClass(i, n)
							}),
							this
						}
					})
				}.apply(e, i),
				!(void 0 !== r && (t.exports = r))
			},
			function(t, e, n) {
				var i, r;
				i = [n(1)],
				r = function(t) {
					function e(t, e) {
						return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, !1)[e]
					}
					function n(n) {
						return "none" === e(n, "display") || !t.contains(n.ownerDocument, n)
					}
					function i(t, n) {
						var i = e(t, "display");
						n ? "none" === i && (t.style.display = t.prevDisplay || "block") : "none" !== i && (t.style.display && (t.prevDisplay = t.style.display), t.style.display = "none")
					}
					function r(t, e) {
						function n(t, e) {
							var n = t.length - e.length;
							return n >= 0 && t.indexOf(e, n) == n
						}
						var i = t.style,
						r = i.cssText;
						n(r, ";") || (r += ";"),
						i.cssText = r + e
					}
					var o = /^(?:body|html)$/i,
					a = function(t) {
						return t.replace(/(\w)/,
						function(t) {
							return t.toUpperCase()
						})
					};
					t.extend({
						show: function(e, n) {
							i(e, !0),
							t.isFunction(n) && n()
						},
						hide: function(e, n) {
							i(e),
							t.isFunction(n) && n()
						},
						toggle: function(t, e) {
							return "boolean" == typeof e ? e ? this.show() : this.hide() : (n(t) ? i(t, !0) : i(t), this)
						}
					}),
					t.fn.extend({
						offsetParent: function() {
							for (var e = this.offsetParent || document.body; e && !o.test(e.nodeName) && "static" == t(e).css("position");) e = e.offsetParent;
							return t(e)
						},
						offset: function(e) {
							if (arguments.length > 0 && this.each(function(e, n) {
								var i = t(n),
								r = i.offset(),
								o = n.offsetParent.offset(),
								a = {
									top: r.top - o.top,
									left: r.left - o.left
								};
								"static" == i.css("position") && (a.position = "relative"),
								i.css(a)
							}), !this.length) return null;
							if (!t.contains(document.documentElement, this[0])) return {
								top: 0,
								left: 0
							};
							var n = this[0].getBoundingClientRect();
							return {
								left: n.left + window.pageXOffset,
								top: n.top + window.pageYOffset,
								width: Math.round(n.width),
								height: Math.round(n.height)
							}
						},
						position: function() {
							if (this.length) {
								var e = t(this[0]),
								n = this.offsetParent(),
								i = this.offset(),
								r = o.test(n[0].nodeName) ? {
									top: 0,
									left: 0
								}: n.offset();
								return i.top -= parseFloat(e.css("margin-top")) || 0,
								i.left -= parseFloat(e.css("margin-left")) || 0,
								r.top += parseFloat(n.css("border-top-width")) || 0,
								r.left += parseFloat(n.css("border-left-width")) || 0,
								{
									top: i.top - r.top,
									left: i.left - r.left
								}
							}
						},
						css: function(n, i) {
							if (1 == arguments.length) {
								if ("string" == typeof n) return e(this[0], n);
								if (t.isPlainObject(n)) {
									var o = "";
									t.each(n,
									function(t, e) {
										o += t + ":" + e + ";"
									}),
									r(this[0], o)
								}
							} else 2 == arguments.length && r(this[0], n + ":" + i + ";");
							return this
						},
						show: function(e) {
							return this.each(function() {
								i(this, !0)
							}),
							t.isFunction(e) && e(),
							this
						},
						hide: function(e) {
							return this.each(function() {
								i(this)
							}),
							t.isFunction(e) && e(),
							this
						},
						isHidden: function() {
							return n(this[0])
						},
						toggle: function(t) {
							return "boolean" == typeof t ? t ? this.show() : this.hide() : (this.each(function() {
								n(this) ? i(this, !0) : i(this)
							}), this)
						}
					});
					var s = {};
					t.each(["width", "height"],
					function(e, n) {
						s[n] = function(e) {
							var i = this[0];
							if (arguments.length > 0 && this.each(function(i, r) {
								var o = t(r);
								o.css(n, e)
							}), t.isWindow(i)) return i["inner" + a(n)];
							if (t.isDocument(i)) return i.documentElement["scroll" + a(n)];
							var r = this.offset();
							return r[n]
						}
					}),
					t.fn.extend(s)
				}.apply(e, i),
				!(void 0 !== r && (t.exports = r))
			},
			function(t, e, n) {
				var i, r;
				i = [n(1), n(6)],
				r = function(t, e) {
					var n = [].slice,
					i = e({
						bind: function(e, n, i, r) {
							var o = this;
							if ((1 == e.nodeType || 9 == e.nodeType || e === window) && t.isFunction(i)) {
								if (t.isArray(n)) return o._handleMultipleEvents(o.observe, e, n, i);
								var a = i;
								if (r && (a = function() {
									i.apply(r, arguments)
								},
								o._contextHandler[i.$$guid] = a, a.$$guid = i.$$guid = i.$$guid || o._guid++), e.addEventListener) e.addEventListener(n, a, !1);
								else {
									a.$$guid || (a.$$guid = this._guid++),
									e.events || (e.events = {});
									var s = e.events[n];
									s || (s = e.events[n] = {},
									e["on" + n] && (s[0] = e["on" + n])),
									s[a.$$guid] = a,
									e["on" + n] = o._handleEvent
								}
							}
						},
						unbind: function(e, n, i) {
							var r = this;
							if ((1 == e.nodeType || 9 == e.nodeType || e === window) && t.isFunction(i)) {
								if (t.isArray(n)) return r._handleMultipleEvents(r.remove, e, n, i);
								var o = r._contextHandler[i.$$guid];
								if (e.removeEventListener) e.removeEventListener(n, o || i, !1);
								else {
									var a = e.events;
									if (a) {
										delete a[i.$$guid];
										var s = !1;
										for (var u in a) s = !0;
										s || delete e.events
									}
								}
								o && !delete r._contextHandler[i.$$guid] && (r._contextHandler[i.$$guid] = null)
							}
						},
						one: function(e, i, r, o) {
							var a = this;
							if ((1 == e.nodeType || 9 == e.nodeType || e === window) && t.isFunction(r)) {
								var s = n.call(arguments);
								if (t.isArray(i)) return a._handleMultipleEvents.apply(a, [a.one].concat(s));
								var u = function() {
									a.unbind(e, i, u),
									r.apply(o || e, arguments)
								};
								u.$$guid = r.$$guid = r.$$guid || a._guid++,
								a.bind(e, i, u)
							}
						},
						_guid: 0,
						_contextHandler: {},
						_handleMultipleEvents: function(e, n, i) {
							var r = this,
							o = Array.prototype.slice.call(arguments).slice(3);
							t.each(i,
							function(t, i) {
								e.apply(r, [n, i].concat(o))
							})
						},
						_handleEvent: function(t) {
							var e = this,
							n = !0;
							t = t || e._fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
							var i = this.events[t.type];
							for (var r in i) {
								var o = i[r];
								o(t) === !1 && (n = !1)
							}
							return n
						},
						_fixEvent: function(t) {
							function e() {
								return ! 0
							}
							function n() {
								return ! 1
							}
							if (!t || !t.isPropagationStopped) {
								var i = t || window.event;
								t = {};
								for (var r in i)"layerX" !== r && "layerY" !== r && "keyLocation" !== r && ("returnValue" == r && i.preventDefault || (t[r] = i[r]));
								if (t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement: t.fromElement, t.preventDefault = function() {
									i.preventDefault && i.preventDefault(),
									t.returnValue = !1,
									t.isDefaultPrevented = e,
									t.defaultPrevented = !0
								},
								t.isDefaultPrevented = n, t.defaultPrevented = !1, t.stopPropagation = function() {
									i.stopPropagation && i.stopPropagation(),
									t.cancelBubble = !0,
									t.isPropagationStopped = e
								},
								t.isPropagationStopped = n, t.stopImmediatePropagation = function() {
									i.stopImmediatePropagation && i.stopImmediatePropagation(),
									t.isImmediatePropagationStopped = e,
									t.stopPropagation()
								},
								t.isImmediatePropagationStopped = n, null != t.clientX) {
									var o = document.documentElement,
									a = document.body;
									t.pageX = t.clientX + (o && o.scrollLeft || a && a.scrollLeft || 0) - (o && o.clientLeft || a && a.clientLeft || 0),
									t.pageY = t.clientY + (o && o.scrollTop || a && a.scrollTop || 0) - (o && o.clientTop || a && a.clientTop || 0)
								}
								t.which = t.charCode || t.keyCode,
								null != t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
							}
							return t
						}
					});
					t.extend({
						bind: function(t, e, n) {
							i.bind.apply(i, arguments)
						},
						unbind: function(t, e, n) {
							i.unbind.apply(i, arguments)
						},
						one: function(t, e, n) {
							i.one.apply(i, arguments)
						}
					}),
					t.fn.extend({
						bind: function(e, n) {
							return this.each(function(i, r) {
								t.bind(r, e, n)
							}),
							this
						},
						unbind: function(e, n) {
							return this.each(function(i, r) {
								t.unbind(r, e, n)
							}),
							this
						},
						one: function(e, n) {
							return this.each(function(i, r) {
								t.one(r, e, n)
							}),
							this
						}
					})
				}.apply(e, i),
				!(void 0 !== r && (t.exports = r))
			},
			function(t, e, n) {
				var i, r;
				i = [],
				r = function() {
					return Object.create ||
					function(t) {
						function e() {}
						return e.prototype = t,
						new e
					}
				}.apply(e, i),
				!(void 0 !== r && (t.exports = r))
			},
			function(t, e, n) {
				var i, r;
				i = [n(1)],
				r = function(t) {
					var e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
					n = /<script|<style|<link/i;
					t.extend({
						htmlPrefilter: function(t) {
							return t.replace(e, "<$1></$2>")
						}
					}),
					t.fn.extend({
						remove: function() {
							return this.each(function(t, e) {
								e.parentNode && e.parentNode.removeChild(e)
							}),
							this
						},
						append: function(e) {
							var n = this[0];
							return 1 !== n.nodeType && 11 !== n.nodeType && 9 !== n.nodeType || (e instanceof t ? e.each(function(t, e) {
								n.appendChild(e)
							}) : e.nodeType && n.appendChild(e)),
							this
						},
						prepend: function(t) {
							var e = this[0];
							return 1 !== e.nodeType && 11 !== e.nodeType && 9 !== e.nodeType || e.insertBefore(t, e.firstChild),
							this
						},
						before: function(t) {
							var e = this[0];
							return e.parentNode && e.parentNode.insertBefore(t, e),
							this
						},
						after: function(t) {
							var e = this[0];
							return e.parentNode && e.parentNode.insertBefore(t, e.nextSibling),
							this
						},
						empty: function() {
							for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (t.textContent = "");
							return this
						},
						replaceWith: function(e) {
							var n = this[0];
							if (n.parentNode) {
								var i = n.parentNode;
								e instanceof t ? e.each(function(t, e) {
									i.replaceChild(e, n)
								}) : i.replaceChild(e, n)
							}
							return this
						},
						html: function(e) {
							var i = this[0] || {},
							r = 0,
							o = this.length;
							if (void 0 === e && 1 === i.nodeType) return i.innerHTML;
							if ("string" == typeof e && !n.test(e)) try {
								for (e = t.htmlPrefilter(e); r < o; r++) i = this[r] || {},
								1 === i.nodeType && (i.innerHTML = e);
								i = 0
							} catch(a) {}
							return this[0].innerHTML
						},
						text: function(t) {
							var e = this[0] || {},
							n = 0;
							if (arguments.length > 0) for (; null != (e = this[n]); n++) 1 !== e.nodeType && 11 !== e.nodeType && 9 !== e.nodeType || (e.textContent = t);
							var i = this[0];
							return 1 === i.nodeType || 9 === i.nodeType || 11 === i.nodeType ? i.textContent: 3 === i.nodeType || 4 === i.nodeType ? i.nodeValue: ""
						}
					})
				}.apply(e, i),
				!(void 0 !== r && (t.exports = r))
			},
			function(t, e, n) {
				var i, r;
				i = [n(1)],
				r = function(t) {
					function e(t, e) {
						for (; (t = t[e]) && 1 !== t.nodeType;);
						return t
					}
					var n = function(t, e) {
						for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
						return n
					},
					i = [].indexOf;
					t.fn.extend({
						index: function() {
							var e = this[0];
							return e ? "string" == typeof e ? i.call(t(e), this[0]) : i.call(this, e.constructor == t ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
						},
						parent: function() {
							var t = this[0],
							e = t.parentNode;
							return e && 11 !== e.nodeType ? e: null
						},
						next: function() {
							var t = this[0];
							return e(t, "nextSibling")
						},
						prev: function() {
							var t = this[0];
							return e(t, "previousSibling")
						},
						siblings: function() {
							var t = this[0];
							return n((t.parentNode || {}).firstChild, t)
						},
						children: function() {
							var t = this[0];
							return n(t.firstChild)
						},
						contents: function() {
							var e = this[0];
							return e.contentDocument || t.merge([], e.childNodes)
						}
					})
				}.apply(e, i),
				!(void 0 !== r && (t.exports = r))
			},
			function(t, e, n) {
				var i, r;
				i = [n(1)],
				r = function(t) {
					function e() {
						document.removeEventListener("DOMContentLoaded", e),
						window.removeEventListener("load", e),
						t.ready()
					}
					var n = [];
					"complete" === document.readyState ? window.setTimeout(t.ready) : (document.addEventListener("DOMContentLoaded", e), window.addEventListener("load", e)),
					t.extend({
						isReady: !1,
						readyWait: 1,
						ready: function(e) {
							if (t.isFunction(e)) t.isReady ? e.apply(document, [t]) : n.push(e);
							else {
								if (e === !0 ? --t.readyWait: t.isReady) return;
								if (t.isReady = !0, e !== !0 && --t.readyWait > 0) return;
								t.each(n,
								function(e, n) {
									n.apply(document, [t])
								})
							}
						}
					})
				}.apply(e, i),
				!(void 0 !== r && (t.exports = r))
			}])
		})
	},
	function(t, e, n) { (function(e, i, r) {
			var o = [].slice,
			a = n(5),
			s = n(16),
			u = a.extend({
				init: function(t, e) {
					var n = this;
					n._super(t, e)
				},
				getPlayData: function() {
					var t = this,
					n = [];
					return e.each(i.qualitys,
					function(t) {
						n.push(t)
					}),
					[{
						key: t.currentLang.key,
						cn: t.currentLang.cn,
						qualitys: n
					}]
				},
				seek: function(t, e) {
					this.currentTime(t, e)
				},
				currentTime: function() {
					return "INIT" == this.currentState || "AD" == this.currentState ? 0 : this._super.apply(this, o.call(arguments))
				},
				language: function(t) {
					return arguments.length > 0,
					{
						key: this.currentLang.key,
						cn: this.currentLang.cn
					}
				},
				getM3u8src: function() {
					var t = this;
					return m3u8url = t.playData.getM3u8srcByType(t.currentLang.key, t.data.type.key),
					null != m3u8url && "" != m3u8url || (m3u8url = t.playData.getM3u8src(t.currentLang.vid, t.currentQuality, t._options.password)),
					m3u8url
				},
				quality: function(t) {
					var e = this;
					if (arguments.length > 0) if ("PLAYING" == this.currentState || "ERROR" == this.currentState) {
						if (t != this.currentQuality && (e.src(e.getM3u8src()), url)) {
							e.currentQuality = t;
							var n = e.currentTime();
							e.src(url),
							e.one("onLoadedData",
							function() {
								e.seek(n)
							})
						}
					} else e._options.quality = t;
					return e.currentQuality || null
				},
				rePlay: function() {
					var t = this;
					if ("INIT" != this.currentState && "AD" != this.currentState) return r.browser.isIPAD && t.src(t.getM3u8src()),
					t.seek(0),
					this
				},
				getState: function() {
					return i.PLAYERSTATE[this.currentState]
				},
				onEnded: function() {
					this._setState("END"),
					this.reporter.addPlayerDurationReport(61),
					this.reporter.sendTSLog(61),
					this._endedIPH = !0
				},
				startPlay: function() {
					var t = this;
					r.browser.isIPAD && t._initFrontAd(function(e, n) {
						t.src(e.getRS()),
						t.play();
						new s(t, e.getData())
					})
				},
				play: function() {
					var t = this;
					null != t.src() && "" != t.src() || t.src(t.getM3u8src()),
					t._setState("PLAYING"),
					t.video.play()
				},
				_initPlay: function() {
					var t = this;
					t.currentQuality = t.data.type.quality,
					t._options.autoplay && (t.src(t.getM3u8src()), t.play(), t._setState("PLAYING"), t._super())
				},
				bindEvents: function() {
					var t = this,
					e = this._super;
					r.browser.isIPAD ? t.one("onAdEnded",
					function() {
						e.apply(t)
					},
					t) : t.one("onPlayerReady",
					function() {
						e.apply(t)
					},
					t)
				}
			});
			t.exports = u
		}).call(e, n(2), n(4), n(1))
	},
	function(t, e, n) { (function(e) {
			var n = e.browser,
			i = e.ObjectCreate({
				ctype: "86",
				ev: 4,
				defaultQuality: "mp4",
				defaultLanguage: "guoyu",
				ek: {
					a1: "bf",
					a8: "f",
					x2: "Kz0mooZM"
				},
				mk: {
					a3: "1z4i",
					a4: "86rv",
					a5: "f45",
					k3: "b7",
					nk: "m1uN9G6c"
				},
				PLAYERSTATE: {
					INIT: "PLAYER_STATE_INIT",
					READY: "PLAYER_STATE_READY",
					AD: "PLAYER_STATE_AD",
					PLAYING: "PLAYER_STATE_PLAYING",
					END: "PLAYER_STATE_END",
					ERROR: "PLAYER_STATE_ERROR"
				},
				userCache: {
					a1: "v",
					a2: "b"
				},
				langs: {
					"default": {
						key: "guoyu",
						value: "国语",
						id: 1
					},
					guoyu: {
						key: "guoyu",
						value: "国语",
						id: 1
					},
					yue: {
						key: "yue",
						value: "粤语",
						id: 2
					},
					chuan: {
						key: "chuan",
						value: "川话",
						id: 3
					},
					tai: {
						key: "tai",
						value: "台湾",
						id: 4
					},
					min: {
						key: "min",
						value: "闽南",
						id: 5
					},
					en: {
						key: "en",
						value: "英语",
						id: 6
					},
					ja: {
						key: "ja",
						value: "日语",
						id: 7
					},
					kr: {
						key: "kr",
						value: "韩语",
						id: 8
					},
					"in": {
						key: "in",
						value: "印度",
						id: 9
					},
					ru: {
						key: "ru",
						value: "俄语",
						id: 10
					},
					fr: {
						key: "fr",
						value: "法语",
						id: 11
					},
					de: {
						key: "de",
						value: "德语",
						id: 12
					},
					it: {
						key: "it",
						value: "意语",
						id: 13
					},
					es: {
						key: "es",
						value: "西语",
						id: 14
					},
					th: {
						key: "th",
						value: "泰语",
						id: 15
					},
					po: {
						key: "po",
						value: "葡语",
						id: 16
					},
					man: {
						key: "man",
						value: "暖男",
						id: 17
					},
					baby: {
						key: "baby",
						value: "萌童",
						id: 18
					}
				},
				stream_types: {
					flv: {
						key: "flv",
						quality: "flv",
						hd: 0,
						suffix: "flv",
						play: !1,
						loghd: 0
					},
					flvhd: {
						key: "flvhd",
						quality: "flv",
						hd: 0,
						suffix: "flv",
						play: !1,
						loghd: 0
					},
					mp4hd: {
						key: "mp4hd",
						quality: "mp4",
						hd: 1,
						suffix: "mp4",
						play: !0,
						loghd: 1
					},
					"3gphd": {
						key: "3gphd",
						quality: "mp4",
						hd: 1,
						suffix: "mp4",
						play: !0,
						loghd: 4
					},
					mp4hd2: {
						key: "mp4hd2",
						quality: "hd2",
						hd: 2,
						suffix: "flv",
						play: !1,
						loghd: 2
					},
					mp4hd3: {
						key: "mp4hd3",
						quality: "hd3",
						hd: 3,
						suffix: "flv",
						play: !1,
						loghd: 3
					},
					m3u8_flv: {
						key: "m3u8_flv",
						quality: "flv",
						hd: 0,
						suffix: "m3u8",
						play: !0,
						loghd: 0
					},
					m3u8_mp4: {
						key: "m3u8_mp4",
						quality: "mp4",
						hd: 1,
						suffix: "m3u8",
						play: !0,
						loghd: 0
					},
					m3u8_hd: {
						key: "m3u8_hd",
						quality: "hd2",
						hd: 2,
						suffix: "m3u8",
						play: !0,
						loghd: 0
					},
					m3u8_hd3: {
						key: "m3u8_hd3",
						quality: "hd3",
						hd: 3,
						suffix: "m3u8",
						play: !0,
						loghd: 0
					}
				},
				m3u8_types: {
					m3u8_flv: "flvhd",
					m3u8_mp4: "mp4hd",
					m3u8_hd: "mp4hd2",
					m3u8_hd3: "mp4hd3"
				},
				qualitys: {
					flv: 0,
					mp4: 1,
					hd2: 2
				},
				getUCStr: function(t) {
					var e = "";
					if ("undefined" != typeof getUCSecret) {
						var n = getUCSecret(t);
						e += "&xk=" + n
					} else if ("undefined" != typeof uckey) {
						var i = uckey.getUCKey(t);
						e += "&vid=" + t + "&uc_param_str=xk&xk=" + i
					} else this.isUCBrowserAndValidVersion() === !0 && (e += "&vid=" + t + "&uc_param_str=xk");
					return e
				},
				isUCBrowserAndValidVersion: function() {
					var t = navigator.userAgent,
					e = t.search(/ucbrowser/i);
					return e != -1 && parseFloat(t.substr(e + 10, 4)) >= 9.8
				},
				isNeedAdrTrick: function() {
					return n.isAndroid && !this.adrPlayTrick && !n.isHTC && !n.isVIVO
				},
				adrInvalidPauseCheck: function(t) {
					var e = t.currentTime,
					n = 0,
					i = !1;
					this.adrPlayTrick = !0,
					t.pause(),
					t.play(),
					setInterval(function() {
						t.currentTime != e || i ? i = !0 : (n++, t.play(), n % 10 === 0 && (t.load(), t.play()))
					},
					1e3)
				},
				getPlayerType: function(t) {
					var e;
					return e = "h5" == t ? n.isSupportH5M3U8 ? "h5m3u8": n.isSupportH5MP4 ? "h5mp4": n.isSupportFlash ? "flash": "error": "flash" == t ? n.isSupportFlash ? "flash": n.isSupportH5M3U8 ? "h5m3u8": n.isSupportH5MP4 ? "h5mp4": "error": "error"
				},
				k3: {
					a0: "3d9",
					a2: "ae1"
				},
				isPlayFromAli: !1,
				MONITOR_TYPE: {
					GET_LIST_NETWORK: "web_playlist_nt",
					GET_LIST_FORMAT: "web_playlist_ft"
				},
				MONITOR_STATUS_SUCCESS: 0,
				MONITOR_STATUS_FAILED: -1
			});
			t.exports = i
		}).call(e, n(1))
	},
	function(t, e, n) { (function(e, i, r, o, a) {
			function s(t) {
				var n = null,
				i = t;
				if ("string" == typeof t && (i = document.getElementById(t), e.utils.isDOMElement(i) || (i = document.querySelectorAll(t)[0])), !e.utils.isDOMElement(i)) throw new TypeError("Not Found Video Element");
				return e.utils.isVideoElement(i) ? (n = i, n.preload = "none", n.controls = !1) : (n = document.createElement("video"), n.style.width = "100%", n.style.height = "100%", n.preload = "none", n.controls = !1, i.appendChild(n)),
				n
			}
			var u = [].slice,
			l = n(12),
			c = (n(13), n(14));
			Statistics = n(15);
			var d = e.VideoPlayer.extend({
				init: function(t, e) {
					var n = this;
					n._setState("INIT"),
					e = i.merge({
						password: null,
						vid: "",
						client_id: "",
						embsig: null,
						autoplay: !1
					},
					e),
					e.events && i.each(["onPlayerReady", "onPlayStart", "onPlayEnd", "onPlayError", "onAdReady", "onAdPlay", "onAdTimeUpdate", "onAdEnded", "onAdError"],
					function(t, r) {
						i.isFunction(e.events[r]) && n.bind(r, e.events[r])
					});
					var r = {},
					o = ["password", "vid", "client_id", "embsig", "events", "quality"].join("-") + "-";
					i.each(e,
					function(t, e) {
						o.indexOf(t + "-") < 0 && (r[t] = e)
					}),
					n._options = e,
					n._super(s(t), r),
					n.playVideo()
				},
				_setState: function(t) {
					var e = r.PLAYERSTATE[t];
					if (e) {
						var n = this;
						this.currentState = t;
						var i = {
							READY: "onPlayerReady",
							END: "onPlayEnd",
							ERROR: "onPlayError",
							PLAYING: "onPlayStart"
						};
						if (i[t]) try {
							n.trigger(i[t], u.call(arguments, 1))
						} catch(o) {
							throw "ERROR" != t && n.trigger("onPlayError", [8001, i[t] + " error"]),
							o
						}
					}
				},
				_setError: function(t, e) {
					this._setState("ERROR", t, e)
				},
				loop: function(t) {
					return arguments.length > 0 && "undefined" != typeof t && (this._options.loop = t),
					this._options.loop
				},
				autoplay: function(t) {
					return arguments.length > 0 && "undefined" != typeof t && (this._options.autoplay = t),
					this._options.autoplay
				},
				language: function(t) {
					return arguments.length > 0,
					{
						key: this.currentLang.key,
						cn: this.currentLang.cn
					}
				},
				seek: function(t, e) {
					return this.currentTime(t, e),
					this
				},
				getState: function() {
					return r.PLAYERSTATE[this.currentState]
				},
				onError: function(t) {
					this.vd && (this.reporter.sendUserActionReport("xve", "e"), this.reporter.sendUepReport("videoload", -1, !1), this.reporter.sendErrorReport(2001)),
					this._setState("ERROR", t)
				},
				onTimeUpdate: function(t) {
					this._super(),
					this._comscoreflag || (this._comscoreflag = !0, this.reporter.sendThirdPartyReport("xplayer_h5"))
				},
				_initData: function(t) {
					var e = this;
					this._retryCustom || (this._retryCustom = 0);
					arguments.callee,
					{
						vid: decodeURIComponent(e._options.vid),
						client_id: e._options.client_id,
						password: e._options.password,
						embsig: e._options.embsig
					};
					e._options.sign = e._options.embsig,
					e._getPlayData(t)
				},
				_getPlayData: function(t) {
					var e = this;
					this._retryPlay || (this._retryPlay = 0);
					var n = arguments.callee,
					i = (new Date).getTime();
					e._promise = o.play.getPlayData(e._options).then(function(n) {
						var o = (new Date).getTime() - i;
						e.sendAcfunMonitor(e._options.vid, r.MONITOR_TYPE.GET_LIST_NETWORK, r.MONITOR_STATUS_SUCCESS, o),
						e._parseData(n, t)
					},
					function() {
						if (this._retryPlay < 3) n(t),
						this._retryPlay++;
						else {
							var o = (new Date).getTime() - i;
							e.sendAcfunMonitor(e._options.vid, r.MONITOR_TYPE.GET_LIST_NETWORK, r.MONITOR_STATUS_FAILED, o),
							e._setError(2003, "Get PlayData Failed"),
							delete this._retryPlay
						}
					})
				},
				_parseData: function(t, e) {
					var n = this,
					i = {};
					try {
						i = new l(t),
						n.videoData = t,
						n.playData = i
					} catch(o) {
						return n.sendAcfunMonitor(n._options.vid, r.MONITOR_TYPE.GET_LIST_FORMAT, r.MONITOR_STATUS_FAILED),
						void n._setError(2004, "Parse Data Error")
					}
					i.error ? (n.sendAcfunMonitor(n._options.vid, r.MONITOR_TYPE.GET_LIST_FORMAT, r.MONITOR_STATUS_FAILED), n._setError(i.error.code, i.error.msg)) : (n._setVideoData(r.defaultLanguage), e())
				},
				_setVideoData: function(t) {
					var e = this,
					n = e.playData.getIndexes();
					if (n.length <= 0) return e._setError(2002, "Parse Data Error"),
					void e.sendAcfunMonitor(e._options.vid, r.MONITOR_TYPE.GET_LIST_FORMAT, r.MONITOR_STATUS_FAILED);
					var i = e.playData.getIndexes(t) || n[0];
					e.currentLang = i;
					var o = e._getTypeByQuality(this._options.quality || r.defaultQuality);
					if (!o) return e._setError(2002, "没有对应的格式"),
					void e.sendAcfunMonitor(e._options.vid, r.MONITOR_TYPE.GET_LIST_FORMAT, r.MONITOR_STATUS_FAILED);
					var a = e.playData.getData(i.key, o.key);
					e.currentType = o,
					e.indexes = n,
					e.data = a,
					e.sendAcfunMonitor(e._options.vid, r.MONITOR_TYPE.GET_LIST_FORMAT, r.MONITOR_STATUS_SUCCESS)
				},
				_getTypeByQuality: function(t) {
					var e = this,
					n = e.currentLang,
					r = n.types;
					if (r.length <= 0) return null;
					var o = [],
					a = {
						mp4: ["3gphd", "mp4hd"],
						flv: ["flvhd"],
						hd2: ["mp4hd2"]
					},
					s = a[t];
					s && (o = o.concat(s), delete a[t]),
					i.each(a,
					function(t, e) {
						o = o.concat(e)
					});
					for (var u = null,
					l = 0,
					c = o.length; l < c; l++) {
						for (var d = 0,
						h = r.length; d < h; d++) if (o[l] == r[d].key) {
							u = r[d];
							break
						}
						if (u) break
					}
					return u
				},
				playVideo: function(t) {
					var e = this;
					return e._options = i.merge(e._options || {},
					t || {}),
					e._options.vid && e._options.client_id ? void e._initData(function() {
						e.statis = new Statistics(e),
						i.one(e.video, "play", e.startPlay, e),
						e._options.autoplay && i.one(e.video, "canplay",
						function() {
							e.play()
						}),
						e.reporter = new c(e),
						e._setState("READY")
					}) : void e._setError(1e4, "Param Error:please set vid && client_id")
				},
				startPlay: function() {
					var t = this;
					t.abstarttime = (new Date).getTime(),
					t.one("onPlay",
					function() {
						t._setState("PLAYING");
						var e = parseInt(t._options.firsttime);
						isNaN(e) || t.seek(e)
					})
				},
				_initAdOptions: function() {
					var t = this,
					n = t._options,
					i = t.videoData,
					r = t.customData,
					o = t.playData.sid,
					a = t.data.seconds,
					s = {
						site: 1,
						p: 0,
						vl: a,
						fu: 0,
						ct: "",
						d: 0,
						paid: 0,
						s: 0,
						sid: o,
						td: i.video.source ? i.video.source: 0,
						v: i.id,
						vip: 0,
						wintype: "xplayer_m3u8",
						u: i.video.userid,
						bt: e.browser.isPad ? "pad": "phone",
						os: e.browser.isMobileIOS ? "ios": "Android",
						rst: e.browser.isMobileIOS ? "m3u8": "3gphd",
						tict: 0,
						aw: "w",
						vs: "1.0"
					};
					n.client_id && (s.partnerid = n.client_id),
					r && r.atm && (s.atm = r.atm),
					s._ti = encodeURIComponent(i.video.title),
					this._adoptions = s
				},
				_initFrontAd: function(t) {
					var e = this;
					e.playData.sid;
					e._initAdOptions(),
					e._adoptions.p = 7,
					e._setState("AD"),
					e.trigger("onAdEnded")
				},
				_initPauseAd: function() {
					var t = this;
					t.ad.pauseAd().then(function(t) {},
					function() {})
				},
				_initPlay: function() {
					this.reporter.addPlayerStaticReport(),
					this.reporter.addPlayerDurationReport(59),
					this.reporter.sendVVLog(59),
					this.reporter.sendTSLog(60)
				},
				bindEvents: function() {
					var t = this;
					t._initPlay(),
					this._super()
				},
				bind: function(t, e) {
					var n = e,
					r = u.call(arguments, 2);
					if ("string" == typeof t) {
						var o = ["onPlayerReady", "onPlayEnd", "onPlayError", "onPlayStart", "onPlayError"].join("-") + "-";
						if (o.indexOf(t + "-") >= 0) {
							if (!i.isFunction(e)) return this;
							n = function(t) {
								e.apply(e, u.call(arguments, 1))
							}
						}
					}
					var a = this._super.apply(this, [t, n].concat(r));
					return e.$$guid = n.$$guid,
					a
				},
				sendAcfunMonitor: function(t, e, n, i) {
					var r = this,
					s = "http://aplay-vod.cn-beijing.aliyuncs.com/acfun/monitor?",
					u = {};
					u.sign = r._options.embsig,
					u.vid = t,
					u.source = e,
					u.code = n,
					u.time = i,
					o.log.send(s + a.urlParameter(u))
				}
			});
			t.exports = d
		}).call(e, n(1), n(2), n(4), n(6), n(11))
	},
	function(t, e, n) {
		t.exports = {
			ad: n(7),
			log: n(8),
			open: n(9),
			play: n(10),
			ad: n(7)
		}
	},
	function(t, e, n) { (function(e) {
			t.exports = e.ObjectCreate({
				getFrontData: function(t) {
					return new e.Promise(function(n, i) {
						e.jsonp({
							url: "http://mf.atm.youku.com/mf",
							callback: "callback",
							data: t,
							success: function(t) {
								n(t)
							},
							fail: function(t) {
								i({
									code: "404",
									note: "获取数据失败"
								})
							}
						})
					})
				},
				getBackData: function(t) {
					return new e.Promise(function(n, i) {
						e.jsonp({
							url: "http://mp.atm.youku.com/mp",
							callback: "callback",
							data: t,
							time: 2e3,
							success: function(t) {
								n(t)
							},
							fail: function(t) {
								i({
									code: "404",
									note: "获取数据失败"
								})
							}
						})
					})
				},
				getPauseData: function(t) {
					return new e.Promise(function(n, i) {
						e.jsonp({
							url: "http://mb.atm.youku.com/mb",
							callback: "callback",
							data: t,
							time: 2e3,
							success: function(t) {
								n(t)
							},
							fail: function(t) {
								i({
									code: "404",
									note: "获取数据失败"
								})
							}
						})
					})
				}
			})
		}).call(e, n(1))
	},
	function(t, e, n) { (function(e) {
			t.exports = e.ObjectCreate({
				send: function(t, e) {
					var n = "youku-uniplayer-stat",
					i = document.createElement("img");
					e && i.addEventListener("error", e, !1),
					i.src = t + "&r_=" + Math.floor(1e4 * Math.random()),
					i.id = n
				}
			})
		}).call(e, n(1))
	},
	function(t, e, n) { (function(e) {
			t.exports = e.ObjectCreate({
				getCustom: function(t) {
					return new e.Promise(function(n, i) {
						var r = {
							type: "h5",
							client_id: t.client_id,
							video_id: t.vid,
							embsig: t.embsig,
							refer: escape(window.location.href)
						};
						e.jsonp({
							url: "https://api.youku.com/players/custom.json",
							callback: "callback",
							data: r,
							time: 3e3,
							success: function(t) {
								return t.status && 1 != t.status ? void i(t.error || {
									code: "101",
									note: "验证失败"
								}) : void n(t)
							},
							fail: function(t) {
								i({
									code: "404",
									note: "获取数据失败"
								})
							}
						})
					})
				}
			})
		}).call(e, n(1))
	},
	function(t, e, n) { (function(e, n, i) {
			t.exports = e.ObjectCreate({
				getEncryptStr: function(t, e) {
					var i = [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26];
					return encodeURIComponent(n.encode64(n.rc4(n.translate(t, i).toString(), e)))
				},
				getMP4Src: function(t, e) {
					var i = this._parsePaths(t),
					r = "http://k.youku.com/player/getFlvPath/" + i + "?" + n.urlParameter(e);
					return r
				},
				getM3u8src: function(t) {
					var e = "http://pl.youku.com/partner/m3u8?" + n.urlParameter(t);
					return e
				},
				getPlayData: function(t) {
					var r = this;
					return new e.Promise(function(o, a) {
						var s = {
							vid: t.vid,
							ct: i.ctype,
							ev: i.ev
						};
						t.client_id && (s.cid = t.client_id),
						t.sign && (s.sign = t.sign),
						t.password && (s.pwd = escape(t.password));
						var u = "http://aplay-vod.cn-beijing.aliyuncs.com/acfun/web";
						u = "http://www.acfun.cn/jsplayer_data",
						e.jsonp({
							url: u,
							callback: "callback",
							data: s,
							time: 1e4,
							success: function(e) {
								if (e.encrypt && "1" === e.encrypt) {
									var i = r._decode(n.decode64(e.data));
									e.data = JSON.parse(i)
								}
								var s = e.data;
								s.stream || s.error ? (r._Cache[t.vid] = s, o(s)) : a({
									code: "101",
									note: "该视频暂不能播放"
								})
							},
							fail: function(t) {
								a({
									code: "404",
									note: "获取数据失败"
								})
							}
						})
					})
				},
				_decode: function(t) {
					return n.jie(i.mk.nk + i.ek.x2, t)
				},
				_Cache: {},
				_parsePaths: function(t, e) {
					var n = "";
					e = e || "/";
					for (var i in t) n += i + e + t[i] + e;
					return n
				}
			})
		}).call(e, n(1), n(11), n(4))
	},
	function(t, e) {
		function n(t) {
			t = t || 3;
			for (var e = s.length,
			n = ""; t >= 0;) n += s[Math.floor(Math.random() * e)],
			t--;
			return n
		}
		function i(t) {
			var e = [];
			for (var n in t) e.push(n + "=" + t[n]);
			return e.join("&")
		}
		function r(t, e) {
			for (var n = [], i = 0; i < t.length; i++) {
				var r = 0;
				r = t[i] >= "a" && t[i] <= "z" ? t[i].charCodeAt(0) - "a".charCodeAt(0) : t[i] - "0" + 26;
				for (var o = 0; o < 36; o++) if (e[o] == r) {
					r = o;
					break
				}
				r > 25 ? n[i] = r - 26 : n[i] = String.fromCharCode(r + 97)
			}
			return n.join("")
		}
		function o(t, e) {
			for (var n, i = [], r = 0, o = "", a = 0; a < 256; a++) i[a] = a;
			for (a = 0; a < 256; a++) r = (r + i[a] + t.charCodeAt(a % t.length)) % 256,
			n = i[a],
			i[a] = i[r],
			i[r] = n;
			a = 0,
			r = 0;
			for (var s = 0; s < e.length; s++) a = (a + 1) % 256,
			r = (r + i[a]) % 256,
			n = i[a],
			i[a] = i[r],
			i[r] = n,
			o += String.fromCharCode(e.charCodeAt(s) ^ i[(i[a] + i[r]) % 256]);
			return o
		}
		function a(t) {
			if (!t) return "";
			t = t.toString();
			var e, n, i, r, o, a, s, u = new Array(( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), 62, ( - 1), ( - 1), ( - 1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, ( - 1), ( - 1), ( - 1), ( - 1), ( - 1));
			for (a = t.length, o = 0, s = ""; o < a;) {
				do e = u[255 & t.charCodeAt(o++)];
				while (o < a && e == -1);
				if (e == -1) break;
				do n = u[255 & t.charCodeAt(o++)];
				while (o < a && n == -1);
				if (n == -1) break;
				s += String.fromCharCode(e << 2 | (48 & n) >> 4);
				do {
					if (i = 255 & t.charCodeAt(o++), 61 == i) return s;
					i = u[i]
				} while ( o < a && i == - 1 );
				if (i == -1) break;
				s += String.fromCharCode((15 & n) << 4 | (60 & i) >> 2);
				do {
					if (r = 255 & t.charCodeAt(o++), 61 == r) return s;
					r = u[r]
				} while ( o < a && r == - 1 );
				if (r == -1) break;
				s += String.fromCharCode((3 & i) << 6 | r)
			}
			return s
		}
		var s = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
		u = function(t) {
			if (!t) return "";
			t = t.toString();
			var e, n, i, r, o, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
			for (i = t.length, n = 0, e = ""; n < i;) {
				if (r = 255 & t.charCodeAt(n++), n == i) {
					e += s.charAt(r >> 2),
					e += s.charAt((3 & r) << 4),
					e += "==";
					break
				}
				if (o = t.charCodeAt(n++), n == i) {
					e += s.charAt(r >> 2),
					e += s.charAt((3 & r) << 4 | (240 & o) >> 4),
					e += s.charAt((15 & o) << 2),
					e += "=";
					break
				}
				a = t.charCodeAt(n++),
				e += s.charAt(r >> 2),
				e += s.charAt((3 & r) << 4 | (240 & o) >> 4),
				e += s.charAt((15 & o) << 2 | (192 & a) >> 6),
				e += s.charAt(63 & a)
			}
			return e
		};
		t.exports = {
			getRandomString: n,
			urlParameter: i,
			translate: r,
			decode64: a,
			encode64: u,
			jie: o
		}
	},
	function(t, e, n) { (function(e, n, i, r, o) {
			var a = e.CoreObject.extend({
				init: function(t) {
					var e = this;
					if (!e._initSecurity(t) || !e._checkData(t)) return e.getData = function(t, e) {
						return null
					},
					void(e.getIndexes = function(t) {
						return null
					});
					e.videoData = t;
					var n = e._parseData(t.stream),
					i = e._parseIndexes(n);
					e.getIndexes = function(t) {
						if (arguments.length > 0) {
							for (var e = 0,
							n = i.length; e < n; e++) {
								var r = i[e];
								if (t == r.key) return r
							}
							return null
						}
						return i
					},
					e.getData = function(t, e) {
						return arguments.length > 0 ? n[t] ? 1 == arguments.length ? n[t] : n[t].types[e] : null: n
					}
				},
				getLangByKey: function(t) {
					return n.langs[t]
				},
				getTypeByKey: function(t) {
					return n.stream_types[t]
				},
				getM3u8srcByType: function(t, e) {
					var n = this,
					i = n.getData(t, e);
					return i.m3u8
				},
				getM3u8src: function(t, e, r) {
					if ("undefined" == typeof n.qualitys[e]) return null;
					var o = i.play.getEncryptStr(n.mk.a4 + "ail" + n.userCache.a2, this.sid + "_" + t + "_" + this.token),
					a = {
						vid: t,
						type: e,
						ep: o,
						sid: this.sid,
						token: this.token,
						ctype: n.ctype,
						ev: "1",
						oip: this.oip
					};
					return r && (a.password = r),
					i.play.getM3u8src(a)
				},
				setError: function(t, e) {
					this.error = {
						code: t,
						msg: e
					}
				},
				_initSecurity: function(t) {
					if ("undefined" == typeof t.security || "undefined" == typeof t.security.encrypt_string) return this.setError(2004, "Parse Data Error"),
					!1;
					var e = [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26],
					i = r.jie(r.translate(n.mk.a3 + "ogb" + n.userCache.a1, e).toString(), r.decode64(t.security.encrypt_string)),
					o = i.split("_");
					return o.length < 2 ? (this.error = new new Error(2004, "Parse Data Error"), !1) : (this.sid = i.split("_")[0], this.token = i.split("_")[1], this.oip = t.security.ip, !0)
				},
				_checkData: function(t) {
					if (null != t.error) {
						var e = t.error.code;
						if (e == -202 || e == -203) return this.setError(4e3, "The Video Password Error"),
						!1;
						if (e == -402) return this.setError(2007, "No authority to access"),
						!1;
						if (e == -301 || e == -303) return this.setError(3001, "No authority to access"),
						!1
					}
					return ! 0
				},
				_parseIndexes: function(t) {
					var e = [];
					return o.each(t,
					function(t, n) {
						var i = [],
						r = [];
						o.each(n.types,
						function(t, e) {
							var n = e.type.quality;
							r.push({
								key: e.type.key,
								quality: n
							});
							for (var o = !1,
							a = 0,
							s = i.length; a < s; a++) if (n == i[a]) {
								o = !0;
								break
							}
							o || i.push(n)
						}),
						e.push({
							key: n.key,
							cn: n.cn,
							vid: n.vid,
							id: n.id,
							types: r,
							qualitys: i
						})
					}),
					e
				},
				_parseData: function(t) {
					for (var e = this,
					i = {},
					r = 0; r < t.length; r++) {
						var o = t[r],
						a = e.getTypeByKey(o.stream_type),
						s = e.getLangByKey(o.audio_lang);
						if (a && s && a.key.indexOf("m3u8") == -1) {
							for (var u = o.segs,
							l = 0,
							c = 0,
							d = [], h = 0; h < u.length; h++) {
								var p = u[h];
								if (null == p) break;
								var f = {
									no: h,
									seconds: Number(p.total_milliseconds_video) / 1e3,
									seconds_video: Number(o.milliseconds_video) / 1e3,
									key: p.key,
									fileId: e._getFileId(o.stream_fileid, h),
									type: a,
									url: p.url
								};
								f.url ? f.src = f.url: f.src = e._getVideoSrc(f),
								l += parseInt(f.seconds),
								c += parseInt(p.size),
								d.push(f)
							}
							e._getLangVid(s.key);
							i[s.key] || (i[s.key] = {
								key: s.key,
								cn: s.value,
								id: s.id,
								vid: e._getLangVid(s.key),
								types: {}
							}),
							i[s.key].types[a.key] = {
								no: r,
								logoFlag: "none" != o.logo ? 1 : 0,
								type: a,
								segs: d,
								seconds: l,
								size: c
							}
						}
					}
					for (var r = 0; r < t.length; r++) {
						var o = t[r],
						a = e.getTypeByKey(o.stream_type),
						s = e.getLangByKey(o.audio_lang);
						if (a && s && a.key.indexOf("m3u8") != -1) {
							var v = o.m3u8,
							y = n.m3u8_types[a.key];
							i[s.key].types[y] && (i[s.key].types[y].m3u8 = v)
						}
					}
					return i
				},
				_getLangVid: function(t) {
					var e = this,
					n = e.videoData.dvd;
					if (!n || !n.audiolang) return e.videoData.video.encodeid;
					for (var i = n.audiolang,
					r = 0,
					o = i.length; r <= o; r++) if (t == i[r].langcode) return i[r].vid
				},
				_getFileId: function(t, e) {
					if (null == t || "" === t) return "";
					var n = "",
					i = t.slice(0, 8),
					r = e.toString(16);
					1 == r.length && (r = "0" + r),
					r = r.toUpperCase();
					var o = t.slice(10, t.length);
					return n = i + r + o
				},
				_getVideoSrc: function(t) {
					var e = this,
					r = t.type,
					o = t.no.toString(16);
					1 == o.length && (o = "0" + o);
					var a = i.play.getEncryptStr(n.mk.a4 + "ail" + n.userCache.a2, this.sid + "_" + t.fileId + "_" + this.token),
					s = {
						sid: e.sid + "_" + o,
						st: r.suffix,
						fileid: t.fileId
					},
					u = {
						K: t.key,
						hd: r.hd,
						myp: 0,
						ts: t.seconds,
						ypp: 0,
						ep: a,
						ctype: n.ctype,
						ev: 1,
						token: this.token,
						oip: this.oip
					};
					return i.play.getMP4Src(s, u)
				}
			});
			t.exports = a
		}).call(e, n(1), n(4), n(6), n(11), n(2))
	},
	function(t, e, n) { (function(e, n, i, r) {
			var o = e.CoreObject.extend({
				init: function(t, e) {
					this.data = n.merge({
						VAL: []
					},
					t),
					this.options = e,
					this._advids = [],
					this._adsecs = [],
					this._adsrcs = [];
					for (var i = this._splitVTVC(this.data), r = 0, o = i.VAL, a = 0; a < o.length; a++) this._adsrcs.push(o[a].RS),
					r += parseInt(o[a].AL),
					this._adsecs.push(parseInt(o[a].AL));
					this._total = r
				},
				getData: function() {
					if (0 === this.data.VAL.length) return {
						ids: this._advids || [],
						urls: this._adsrcs,
						seconds: this._adsecs,
						info: this.data,
						vtvc: this._vtvc || [],
						duration: this._total || 0
					};
					for (var t = {
						SUS: [],
						SU: [],
						SUE: [],
						CU: [],
						CUM: [],
						VTVC: []
					},
					e = 0, n = 0; n < this.data.VAL.length; n++) {
						var i = this.data.VAL[n];
						if (null != i.VID && null != i.VQT) {
							if (null == i.SU && (i.SU = []), null == i.SUE && (i.SUE = []), 0 === n) t.SUS = i.SUS || [];
							else for (var r = 0; r < i.SUS.length; r++) t.SU.push({
								T: e,
								U: i.SUS[r].U
							});
							for (var o = 0; o < i.SU.length; o++) {
								var a = i.SU[o].T + e;
								t.SU.push({
									T: a,
									U: i.SU[o].U
								})
							}
							if (n == this.data.VAL.length - 1) t.SUE = i.SUE;
							else for (var s = 0; s < i.SUE.length; s++) {
								var u = e + i.AL;
								t.SU.push({
									T: u,
									U: i.SUE[s].U
								})
							}
							e += i.AL,
							t.CU.push({
								T: e,
								U: i.CU
							}),
							t.CUM.push({
								T: e,
								CUM: i.CUM
							});
							var l = parseInt(i.VT);
							if (1 == l && t.VTVC.push({
								U: i.VC,
								T: e
							}), 0 !== this._vtvc.length) for (var c = 0; c < this._vtvc.length; c++) {
								var d = this._vtvc[c],
								h = this._vtvc[c].VC,
								p = d.pos_;
								p == -1 && t.VTVC.push({
									U: h,
									T: 0
								}),
								p == n && t.VTVC.push({
									U: h,
									T: e
								})
							}
						}
					}
					return t.AL = e,
					t.RS = this.getRS(),
					this.data.VAL.push(t),
					this.data.src = t.RS,
					{
						ids: this._advids || [],
						urls: this._adsrcs,
						seconds: this._adsecs,
						info: this.data,
						vtvc: this._vtvc || [],
						duration: this._total || 0
					}
				},
				getRS: function() {
					for (var t = this.options,
					e = {},
					n = {},
					o = this.data.VAL,
					a = 0; a < o.length; a++) {
						var s = o[a],
						u = s.VID,
						l = s.VQT;
						n["a" + (a + 1)] = u + "_" + l
					}
					n.v = t.vid + "_" + t.quality,
					e.ids = escape(JSON.stringify(n)),
					e.ts = parseInt((new Date).getTime() / 1e3),
					t.password && (e.password = e.password),
					t.password && t.client_id && (e.client_id = e.client_id);
					for (var c = [], d = 0; d < o.length; d++) c.push(o[d].VID);
					c.push(t.vid);
					var h = i.play.getEncryptStr(r.mk.a4 + "ail" + r.userCache.a2, t.sid + "_" + c.join("") + "_" + t.token);
					return e.ep = h,
					e.sid = t.sid,
					e.token = t.token,
					e.ctype = r.ctype,
					e.ev = "1",
					e.oip = t.oip,
					i.play.getM3u8src(e) + r.getUCStr(t.vid) || ""
				},
				_splitVTVC: function(t) {
					this._vtvc = [];
					var e = {};
					for (var n in t)"VAL" != n && (e[n] = t[n]);
					e.VAL = [];
					for (var i = t.VAL,
					r = 0; r < i.length; r++) 2 !== parseInt(i[r].VT) ? null != i[r].RS && "" !== i[r].RS.trim() && null != i[r].VID && null != i[r].VQT && e.VAL.push(i[r]) : (i[r].pos_ = r - 1 - this._vtvc.length, this._vtvc.push(i[r]));
					return e
				}
			});
			t.exports = o
		}).call(e, n(1), n(2), n(6), n(4))
	},
	function(t, e, n) { (function(e, n, i, r, o) {
			var a = function(t) {
				this.player = t,
				this.vd = this.player.videoData,
				this.isSendedConsumeReport = !1,
				this.dimension = {
					w: this.player.video.offsetWidth,
					h: this.player.video.offsetHeight
				},
				this.screenDim = {
					w: screen.availWidth,
					h: screen.availHeight
				},
				this.tsclb = 0
			};
			a.prototype = {
				sendErrorReport: function(t) {
					var r = "http://v.l.youku.com/perror?",
					o = {},
					a = "";
					a = e.browser.isIPAD ? "xplayer_ipad": e.browser.isIPHONE ? "xplayer_iphone": "xplayer_android",
					o.m = a,
					o.ec = t;
					var s = "";
					1e3 == t && (s = this.vd.error.code),
					o.gc = s,
					o.u = encodeURIComponent(window.location.href),
					o.v = this.player.playData.sid || "",
					o.hd = this.player.data.type.hd || 0;
					var u = "",
					l = this.player._options;
					l.vvlogconfig && l.vvlogconfig.pvid && (u = l.vvlogconfig.pvid),
					o.pid = u,
					n.log.send(r + i.urlParameter(o))
				},
				sendRecommendLog: function(t) {
					var e = "http://r.l.youku.com/recclick?";
					n.log.send(e + i.urlParameter(t))
				},
				tsInit: function() {
					this.tsSn = null
				},
				sendTSLog: function(t) {
					var e = this;
					if (61 == t) return clearTimeout(this.tstimer),
					void(this.tstimer = null);
					null == this.tsSn && (this.tsSn = 0);
					var o = 5;
					if (this.tsSn > 24 ? o = 20 : this.tsSn > 12 && (o = 10), this.tstimer = setTimeout(function(t) {
						e.sendTSLog(60)
					},
					1e3 * o), !e.player.video.paused) {
						var a = this.player.statis,
						s = a.total();
						if (0 === this.tsSn) return void this.tsSn++;
						var u = this.vd,
						l = {};
						l.vvid = this.player.playData.sid,
						l.vid = isNaN(parseInt(u.id, 10)) ? 0 : u.id,
						l.cf = this.getHDFlag(),
						l.cpt = this.player.currentTime() ? Math.floor(this.player.currentTime()) : 0,
						l.full = 0,
						l.lang = this.player.currentLang.id,
						l.pc = 60 == t ? 0 : 1,
						r.isPlayFromAli || (l.clb = s - this.tsclb),
						l.iku = "m",
						this.player._options.client_id && (l.iku = this.player._options.client_id),
						l.pt = this.getPlayTime(),
						l.sn = this.tsSn++,
						l.hi = o,
						l.uid = isNaN(parseInt(u.video.userid, 10)) ? 0 : u.video.userid,
						l.ctype = r.ctype,
						l.r = this.signTS(l.vvid + l.vid + l.cpt + l.pt + l.sn);
						var c = "http://p-log.ykimg.com/acfunts?";
						n.log.send(c + i.urlParameter(l)),
						this.tsclb = s
					}
				},
				signTS: function(t) {
					if (null == t) return 0;
					for (var e = 0,
					n = t.length,
					i = 0; i < n; i++) e = 43 * e + t.charCodeAt(i),
					e %= 1e10;
					return e
				},
				getPlayTime: function() {
					var t = 0;
					return t = this.tsSn > 24 ? 180 + 20 * (this.tsSn - 24) : this.tsSn > 12 ? 60 + 10 * (this.tsSn - 12) : 5 * this.tsSn
				},
				sendVVLog: function(t) {
					var e = this.vd;
					e.sid = this.player.playData.sid;
					var r = this.player._options.vvlogconfig || {},
					a = {};
					a.pvid = "",
					a.url = encodeURIComponent(this.getParentUrl() ? this.getParentUrl() : window.location.href),
					a.rurl = "",
					a.vvid = this.player.playData.sid,
					a.vid = isNaN(parseInt(e.id, 10)) ? 0 : e.id,
					a.plid = "",
					a.plchid = "",
					a.shid = null != e.show && e.show.id ? e.show.id: "",
					a.vl = parseInt(e.video.seconds),
					a.cf = this.getHDFlag(),
					a.hf = this.getMaxFileType(),
					a.spt = 0,
					a.pb = 62 === t ? 2 : 0,
					a.r = this.signTS(a.vvid + a.vid),
					a.ext = this.getExtString(t),
					o.each(r,
					function(t, e) {
						a[t] = e
					});
					var s = "http://v.l.youku.com/ykvvlog?";
					n.log.send(s + i.urlParameter(a))
				},
				toGBK: function(t) {
					function e(t) {
						return t.replace(/([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/g,
						function() {
							return "\\u" + RegExp.$1.charCodeAt(0).toString(16)
						})
					}
					for (var n = t.split(""), i = "", r = 0, o = n.length; r < o; r++) i += e(n[r]);
					return i
				},
				getExtString: function(t) {
					var e = {};
					return e.iku = "m",
					e.full = "0",
					e.lang = this.player.currentLang.id,
					e.num = t,
					e.ctp = 0,
					e.pc = 60 == t ? 0 : 1,
					e.clb = 0,
					e.ctype = r.ctype,
					e.ev = "1",
					e.tk = this.player.playData.token,
					e.oip = this.player.playData.oip,
					e.paystate = this.getPayState(),
					e.playstate = null == this.vd.trial ? "1": "2",
					this.player._options.client_id && (e.client_id = this.player._options.client_id),
					encodeURI(i.urlParameter(e))
				},
				getPlayByType_: function(t) {
					var e = 0;
					return 62 == t && (e = 2),
					this.player._options.vvlogconfig && this.player._options.vvlogconfig.pb && (e = this.player._options.vvlogconfig.pb),
					e
				},
				getMaxFileType: function() {
					return this.player.data.type.hd
				},
				getHDFlag: function() {
					return null == this.player ? 0 : this.player.data.type.loghd
				},
				getParentUrl: function() {
					var t = null;
					if (parent !== window) try {
						t = parent.location.href
					} catch(e) {
						t = document.referrer
					}
					return t
				},
				addPlayerDurationReport: function(t) {
					if (null == this.drtimer) {
						var e = this;
						this.drtimer = setInterval(function(t) {
							e.player.video.paused || e.addPlayerDurationReport(60)
						},
						6e4)
					}
					61 == t && (clearInterval(this.drtimer), this.drtimer = null);
					var n = this.vd,
					i = {};
					i.viewUserId = 0,
					i.sid = this.player.playData.sid,
					i.videoid = this.vd.id,
					i.number = t;
					var r = new Date;
					i.rnd = (r.getTime() - this.player.abstarttime) / 1e3,
					i.showid_v2 = "",
					i.Copyright = "",
					i.Tid = "",
					i.hd = 0,
					i.ikuflag = "m",
					i.hd = this.player.data.type.hd,
					i.totalsec = this.player.data.totalTime,
					i.playComplete = 0,
					61 == t && (i.playComplete = 1),
					59 == t && (i.referUrl = (this.player._options.vvlogconfig || {}).rurl, i.url = encodeURIComponent(window.location.href), i.starttime = 0),
					i.currentPlayTime = parseInt(this.player.currentTime() || 0),
					i.continuationPlay = 0,
					i.pid = this.player._options.client_id,
					i.timestamp = (new Date).getTime(),
					i.ctype = "86",
					i.ev = "1",
					i.tk = this.player.playData.token,
					i.oip = n.security.ip,
					i.paystate = this.getPayState(),
					i.playstate = null == n.trial ? "1": "2"
				},
				addPlayerStaticReport: function() {
					var t = {},
					e = this.vd;
					t.videoid = this.vd.id,
					(e.token || this.player.playData.token) && (t.t = e.vv || ""),
					t.totalsec = parseInt(e.video.seconds),
					t.ikuflag = "m_" + this.getShowFlag(),
					t.url = encodeURIComponent(this.getParentUrl() ? this.getParentUrl() : window.location.href),
					t.fullflag = "0",
					t.source = "video",
					t.referer = (this.player._options.vvlogconfig || {}).rurl,
					t.sid = this.player.playData.sid;
					i.urlParameter(t)
				},
				sendUserActionReport: function(t, e, r) {
					var o = "http://e.stat.ykimg.com/red/ytes.php?",
					a = {
						t: 1002,
						e: t,
						v: e
					},
					s = this.vd,
					u = {
						v: "h5player",
						vid: s.id,
						ssid: this.player.playData.sid
					};
					u.uid = 0,
					u.sid = "",
					u.tc = this.player.currentTime() || 0,
					u.w = this.player.video.offsetWidth,
					u.h = this.player.video.offsetHeight,
					u.f = this.player.video.fullscreenchange ? "on": "off",
					u.q = this.player.data.type.hd,
					u.ver = "0.1.4";
					for (var l in r) u[l] = r[l];
					a.x = i.encode64(i.urlParameter(u));
					var c = i.urlParameter(a);
					if ("xre" == t) this.checkPlayerResize(o, c);
					else {
						if ("xenfs" == t || "xexfs" == t) {
							this._giveupReTag = !0;
							var d = this;
							setTimeout(function(t) {
								d._giveupReTag = !1
							},
							800)
						}
						n.log.send("http://p-log.ykimg.com/event?" + c)
					}
				},
				checkScreenRotate: function(t, e) {
					var i = screen.availWidth,
					r = screen.availHeight;
					this.screenDim.w == i && this.screenDim.h == r || (this.screenDim.w = i, this.screenDim.h = r, n.log.send(t + e))
				},
				checkPlayerResize: function(t, e) {
					if (this._giveupReTag !== !0) {
						this._resizeList = this._resizeList || [],
						this._resizeList.push({
							str: e,
							time: (new Date).getTime(),
							w: this.player.video.offsetWidth,
							h: this.player.video.offsetHeight
						});
						var i = this;
						setTimeout(function(e) {
							if (0 !== i._resizeList.length) {
								for (var r = i._resizeList[0].time, o = 0; o < i._resizeList.length; o++) {
									var a = i._resizeList[o].w,
									s = i._resizeList[o].h,
									u = i._resizeList[o].time;
									a == i.dimension.w && s == i.dimension.h || (i.dimension.w = a, i.dimension.h = s, (u - r > 800 || o == i._resizeList.length - 1) && n.log.send(t + i._resizeList[o].str))
								}
								i._resizeList = []
							}
						},
						1e3)
					}
				},
				sendUepReport: function(t, r, o) {
					if (! (o !== !1 && 100 * Math.random() > 10)) {
						var a = "http://v.l.youku.com/uep?",
						s = "";
						s = e.browser.isIPAD ? "xplayer_ipad": e.browser.isIPHONE ? "xplayer_iphone": "xplayer_android";
						var u = {
							m: s,
							hd: this.getHDFlag(),
							t: t,
							s: r,
							u: encodeURIComponent(this.getParentUrl() ? this.getParentUrl() : window.location.href),
							p: 2,
							v: this.player.playData.sid
						};
						n.log.send(a + i.urlParameter(u))
					}
				},
				sendLoadedTime: function(t) {
					this.sendUepReport("videoload", t)
				},
				sendComScoreReport: function(t) {
					if (!this._hasComScore) {
						for (var e = document.getElementsByTagName("script"), n = 0; n < e.length; n++) if (e[n].src.indexOf("scorecardresearch.com/beacon.js") !== -1) {
							this._hasComScore = !0;
							break
						}
						if (this._hasComScore !== !0) try {
							var i = document.createElement("script");
							document.getElementsByTagName("script")[0];
							i.async = !0,
							i.src = ("https:" == document.location.protocol ? "https://sb": "http://b") + ".scorecardresearch.com/beacon.js"
						} catch(r) {}
						this._hasComScore = !0
					}
					var o = setInterval(function(e) {
						if ("undefined" != typeof COMSCORE) {
							clearInterval(o);
							try {
								COMSCORE.beacon({
									c1: 1,
									c2: 7293931,
									c3: t
								})
							} catch(n) {}
						}
					},
					500)
				},
				sendThirdPartyReport: function(t) {
					"xplayer_h5" == t && (t = e.browser.isAndroid ? "xplayer_h5_android": e.browser.isIPAD ? "xplayer_h5_ipad": "xplayer_h5_other"),
					this.sendComScoreReport(t)
				},
				sendPayReport: function() {
					var t = "http://passport-log.youku.com/logsys/logstorage/append?project=unipay&log=",
					i = {
						vid: this.vd.id,
						os: encodeURI(e.browser.os)
					};
					n.log.send(t + JSON.stringify(i))
				},
				sendClientConsumeReport: function() {
					this.isSendedConsumeReport !== !0 && this.player.customData.token && (this.isSendedConsumeReport = !0, n.log.send("https://api.youku.com/players/consume.json?token=" + this.player.customData.token))
				},
				getPayState: function() {
					var t = 0;
					return this.vd.show && "vod" == this.vd.show.pay_type && (t = 1),
					this.vd.show && "mon" == this.vd.show.pay_type && (t = 2),
					t
				},
				getShowFlag: function() {
					var t = "m";
					return t += this.vd.show ? "1": "0"
				}
			},
			t.exports = a
		}).call(e, n(1), n(6), n(11), n(4), n(2))
	},
	function(t, e, n) { (function(e) {
			var n = e.CoreObject.extend({
				init: function(t) {
					var e = {},
					n = t.video,
					i = t.data.no;
					t.bind("onProgress",
					function() {
						if (n.readyState > 2 && n.buffered.length > 0) {
							for (var t = n.buffered.length,
							r = 0,
							o = 0; o < t; o++) {
								var a = n.buffered.start(o),
								s = n.buffered.end(o);
								r += s - a
							}
							r > 0 && (e[i] || (e[i] = {}), e[i].loaded = r)
						}
					}),
					t.bind("onLoadedmetadata",
					function() {
						var n = t.data;
						i = n.no,
						e[i] || (e[i] = {
							loaded: 0
						}),
						e[i].unitSize = parseFloat(n.size / n.seconds)
					}),
					this.data = e
				},
				total: function() {
					var t = 0,
					e = this.data;
					for (var n in e) {
						var i = e[n];
						t += parseInt(i.loaded * i.unitSize)
					}
					return t
				}
			});
			t.exports = n
		}).call(e, n(1))
	},
	function(t, e, n) { (function(e, n, i) {
			t.exports = e.CoreObject.extend({
				init: function(t, e) {
					var n = this;
					return n.player = t,
					n.data = e,
					n.player.trigger("onAdReady", [e]),
					e.urls.length < 1 ? void n.player.trigger("onAdEnded") : void n._start()
				},
				currentTime: function() {
					return this.player.currentTime()
				},
				duration: function() {
					return this.data.duration || 0
				},
				_start: function() {
					var t = this,
					e = t.player;
					t._bindEvents(),
					e.play(),
					this.prevControls = e.controls(),
					e.controls(!1)
				},
				_end: function() {
					var t = this;
					t._removeEvents(),
					this.player.trigger("onAdEnded"),
					this.player.controls(this.prevControls)
				},
				_events: {
					play: "_onPlay",
					error: "_onError",
					pause: "_onPause",
					timeupdate: "_onTimeUpdate",
					loadedmetadata: "_onLoadedMetaData"
				},
				_removeEvents: function() {
					var t = this,
					e = t.player.video;
					n.each(t._events,
					function(i, r) {
						n.unbind(e, i, t[r]._tagetFun)
					})
				},
				_bindEvents: function() {
					var t = this,
					e = t.player.video;
					n.each(t._events,
					function(i, r) {
						var o = function() {
							t[r].apply(t, arguments)
						};
						t[r]._tagetFun = o,
						n.bind(e, i, o)
					})
				},
				_onPlay: function(t) {
					var e = this;
					setTimeout(function() {
						e._adBegin || e._end()
					},
					1e4),
					this.player.trigger("onAdPlay")
				},
				_onError: function(t) {
					this._checkTimer && (clearInterval(this._checkTimer), this._checkTimer = null),
					this.player.trigger("onAdError", arguments)
				},
				_onPause: function(t) {
					this.player.trigger("onAdPause")
				},
				_onTimeUpdate: function(t) {
					this._adBegin = !0,
					this._adfirsttu || (this._adfirsttu = !0, i.isNeedAdrTrick() && i.adrInvalidPauseCheck(this.player.video));
					var e = this.currentTime(),
					n = this.duration();
					this.player.trigger("onAdTimeUpdate", [e, n]),
					e >= n && this._end()
				},
				_onLoadedMetaData: function(t) {
					this._adBegin = !0
				}
			})
		}).call(e, n(1), n(2), n(4))
	},
	function(t, e, n) {
		var i = [].slice,
		r = n(5),
		o = n(18),
		a = r.extend({
			init: function(t, e) {
				var n = this;
				n._super(t, e),
				this.isAuto = !1,
				n.curr_seg_inx = 0
			},
			getPlayData: function() {
				return this.indexes
			},
			quality: function(t) {
				var e = this;
				if (arguments.length > 0 && t) if ("PLAYING" == this.currentState || "ERROR" == this.currentState) {
					var n = e.currentLang.types;
					if (n.length > 0 && t != this.currentType.quality) {
						var i = e._getTypeByQuality(t);
						if (i) {
							e._options.quality = t;
							var r = e.playData.getData(e.currentLang.key, i.key),
							o = e.currentTime();
							e._setInitSrc(r) ? e.seek(o) : e.pause()
						}
					} else e.play()
				} else this._options.quality = t;
				return this.currentType.quality
			},
			rePlay: function() {
				var t = this;
				if ("INIT" != this.currentState && "AD" != this.currentState) return this.seek(0,
				function() {
					t._setState("PLAYING")
				}),
				this
			},
			seek: function(t, e) {
				if ("INIT" != this.currentState && "AD" != this.currentState) {
					var n = this;
					t = t || 0,
					t = Math.max(t, 0),
					t = Math.min(t, n.data.seconds - 5);
					var i = n.data.segs;
					1 == i.length ? n.currentTime(!1, t, e) : this._multiSeekTo(t, e)
				}
			},
			currentTime: function() {
				if (arguments.length > 0) {
					var t = i.call(arguments); ! 1 === t[0] ? this._super.apply(this, t.slice(1)) : this.seek.apply(this, t)
				}
				for (var e = this,
				n = 0,
				r = e.data.segs,
				o = 0; o < r.length; o++) {
					if (o == e.curr_seg_inx) {
						n += this.video.currentTime;
						break
					}
					var a = parseInt(r[o].seconds);
					n += a
				}
				return n
			},
			duration: function() {
				return this.data.seconds
			},
			_multiSeekTo: function(t, e) {
				for (var n = this,
				i = 0,
				r = 0,
				o = 0,
				a = n.data.segs,
				s = 0; s < a.length; s++) {
					var u = parseInt(a[s].seconds);
					if (i += u, i > t) {
						r = s,
						o = u - (i - t);
						break
					}
					if (i == t) {
						r = s + 1,
						o = 0;
						break
					}
				}
				if (this.video.pause(), r == n.curr_seg_inx) this.currentTime(!1, o);
				else {
					n.curr_seg_inx = r;
					var l = a[n.curr_seg_inx].src;
					l ? (this.video.src = l, this.video.load(), this.currentTime(!1, o)) : this.video.pause()
				}
				this.video.style.display = "block"
			},
			_setInitSrc: function(t) {
				var e = this;
				t = t || e.data;
				var n = t.type;
				if (n.play) {
					var i = e.currentTime();
					return this.src(t.segs[0].src),
					this.seek(i),
					!0
				}
				if ("flv" === n.key || "flvhd" === n.key) {
					var r = e.getM3u8src();
					return this.src(r),
					this.seek(i),
					!0
				}
				return ! 1
			},
			getM3u8src: function() {
				var t = this;
				return m3u8url = t.playData.getM3u8srcByType(t.currentLang.key, t.data.type.key),
				null != m3u8url && "" != m3u8url || (m3u8url = t.playData.getM3u8src(t.currentLang.vid, t.currentQuality, t._options.password)),
				m3u8url
			},
			onEnded: function() {
				var t = this,
				e = t.data.segs;
				t.curr_seg_inx == e.length - 1 ? (t.curr_seg_inx = 0, t._setState("END"), t._options.loop && t.startPlay(), this.reporter.addPlayerDurationReport(61), this.reporter.sendTSLog(61)) : (t.curr_seg_inx++, t.video.src = e[t.curr_seg_inx].src, t.video.load(), t.video.play(), t.video.style.display = "block")
			},
			startPlay: function() {
				var t = this;
				this._initFrontAd(function(e, n) {
					new o(t, e.getData())
				})
			},
			_initPlay: function() {
				var t = this;
				t.curr_seg_inx = 0,
				t._setInitSrc() || t.pause(),
				t.video.play(),
				t._setState("PLAYING"),
				this._super()
			},
			bindEvents: function() {
				var t = this,
				e = this._super;
				t.one(["onAdError", "onAdEnded"], e, t)
			}
		});
		t.exports = a
	},
	function(t, e, n) { (function(e, n, i) {
			t.exports = e.CoreObject.extend({
				init: function(t, e) {
					var n = this;
					return n.player = t,
					n.data = e,
					n.player.trigger("onAdReady", [e]),
					e.urls.length < 1 ? void n.player.trigger("onAdEnded") : void n._start()
				},
				currentTime: function() {
					for (var t = this,
					e = 0,
					n = t.data.seconds,
					i = 0; i < n.length; i++) {
						if (i == t._cur_num) {
							e += this.player.video.currentTime;
							break
						}
						var r = parseInt(n[i]);
						e += r
					}
					return e
				},
				duration: function() {
					return this.data.duration || 0
				},
				_start: function() {
					var t = this,
					e = t.player;
					t._bindEvents(),
					t._cur_num = 0,
					e.src(t.data.urls[0]),
					e.play(),
					this.prevControls = e.controls(),
					e.controls(!1)
				},
				_end: function() {
					var t = this;
					t._cur_num = 0,
					t._removeEvents(),
					this.player.trigger("onAdEnded"),
					this.player.controls(this.prevControls)
				},
				_events: {
					play: "_onPlay",
					error: "_onError",
					ended: "_onEnded",
					pause: "_onPause",
					timeupdate: "_onTimeUpdate",
					loadedmetadata: "_onLoadedMetaData"
				},
				_removeEvents: function() {
					var t = this,
					e = t.player.video;
					n.each(t._events,
					function(i, r) {
						n.unbind(e, i, t[r]._tagetFun)
					})
				},
				_bindEvents: function() {
					var t = this,
					e = t.player.video;
					n.each(t._events,
					function(i, r) {
						var o = function() {
							t[r].apply(t, arguments)
						};
						t[r]._tagetFun = o,
						n.bind(e, i, o)
					})
				},
				_onPlay: function(t) {
					var e = this;
					setTimeout(function() {
						e._adBegin || e._end()
					},
					1e4),
					this.player.trigger("onAdPlay")
				},
				_onError: function(t) {
					this._checkTimer && (clearInterval(this._checkTimer), this._checkTimer = null),
					this.player.trigger("onAdError", arguments)
				},
				_onEnded: function(t) {
					return this._cur_num < this.data.urls.length - 1 ? void this._onMiddleEnded(t) : (this._cur_num == this.data.urls.length - 1 && (this._end(), this._cur_num = 0), void(this._checkTimer && (clearInterval(this._checkTimer), this._checkTimer = null)))
				},
				_onMiddleEnded: function(t) {
					var e = this,
					n = e.player;
					n.src(e.data.urls[++e._cur_num]),
					n.play(),
					this._adBegin = !1
				},
				_onPause: function(t) {
					this.player.trigger("onAdPause")
				},
				_onTimeUpdate: function(t) {
					this._adBegin = !0,
					this._adfirsttu || (this._adfirsttu = !0, i.isNeedAdrTrick() && i.adrInvalidPauseCheck(this.player.video));
					var e = this.currentTime(),
					n = this.duration();
					this.player.trigger("onAdTimeUpdate", [e, n])
				},
				_onLoadedMetaData: function(t) {
					this._adBegin = !0
				}
			})
		}).call(e, n(1), n(2), n(4))
	},
	function(t, e) {
		function n(t, e, n, i) {
			this.onFulfilled = "function" == typeof t ? t: null,
			this.onRejected = "function" == typeof e ? e: null,
			this.resolve = n,
			this.reject = i
		}
		function i(t, e, n) {
			var i = !1;
			try {
				t(function(t) {
					i || (i = !0, e(t))
				},
				function(t) {
					i || (i = !0, n(t))
				})
			} catch(r) {
				if (i) return;
				i = !0,
				n(r)
			}
		}
		function r(t) {
			this.then = function(e) {
				return "function" != typeof e ? this: new a(function(n, i) {
					o(function() {
						try {
							n(e(t))
						} catch(r) {
							i(r)
						}
					})
				})
			}
		}
		var o = function(t) {
			setTimeout(t, 0)
		},
		a = e.Promise = function(t) {
			function e(t) {
				return null === u ? void c.push(t) : void o(function() {
					var e = u ? t.onFulfilled: t.onRejected;
					if (null === e) return void(u ? t.resolve: t.reject)(l);
					var n;
					try {
						n = e(l)
					} catch(i) {
						return void t.reject(i)
					}
					t.resolve(n)
				})
			}
			function r(t) {
				try {
					if (t === d) throw new TypeError("A promise cannot be resolved with itself.");
					if (t && ("object" == typeof t || "function" == typeof t)) {
						var e = t.then;
						if ("function" == typeof e) return void i(e.bind(t), r, a)
					}
					u = !0,
					l = t,
					s()
				} catch(n) {
					a(n)
				}
			}
			function a(t) {
				u = !1,
				l = t,
				s()
			}
			function s() {
				for (var t = 0,
				n = c.length; t < n; t++) e(c[t]);
				c = null
			}
			if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
			if ("function" != typeof t) throw new TypeError("not a function");
			var u = null,
			l = null,
			c = [],
			d = this;
			this.then = function(t, i) {
				return new d.constructor(function(r, o) {
					var a = new n(t, i, r, o);
					e(a)
				})
			},
			i(t, r, a)
		};
		r.prototype = a.prototype;
		var s = new r((!0)),
		u = new r((!1)),
		l = new r(null),
		c = new r((void 0)),
		d = new r(0),
		h = new r("");
		a.resolve = function(t) {
			if (t instanceof a) return t;
			if (null === t) return l;
			if (void 0 === t) return c;
			if (t === !0) return s;
			if (t === !1) return u;
			if (0 === t) return d;
			if ("" === t) return h;
			if ("object" == typeof t || "function" == typeof t) try {
				var e = t.then;
				if ("function" == typeof e) return new a(e.bind(t))
			} catch(n) {
				return new a(function(t, e) {
					e(n)
				})
			}
			return new r(t)
		},
		a.all = function(t) {
			var e = Array.prototype.slice.call(t);
			return new a(function(t, n) {
				function i(o, a) {
					try {
						if (a && ("object" == typeof a || "function" == typeof a)) {
							var s = a.then;
							if ("function" == typeof s) return void s.call(a,
							function(t) {
								i(o, t)
							},
							n)
						}
						e[o] = a,
						0 === --r && t(e)
					} catch(u) {
						throw n(u),
						u
					}
				}
				if (0 === e.length) return t([]);
				for (var r = e.length,
				o = 0; o < e.length; o++) i(o, e[o])
			})
		},
		a.reject = function(t) {
			return new a(function(e, n) {
				n(t)
			})
		},
		a.race = function(t) {
			return new a(function(e, n) {
				t.forEach(function(t) {
					a.resolve(t).then(e, n)
				})
			})
		},
		a.prototype["catch"] = function(t) {
			return this.then(null, t)
		},
		t.exports = a
	},
	function(t, e, n) { (function(e) {
			function n(t, e) {
				t.timer && clearTimeout(t.timer),
				t.clearAttributes ? t.clearAttributes() : t.onload = t.onreadystatechange = t.onerror = null,
				delete i[e],
				t.parentNode.removeChild(t)
			}
			var i = window.ykv.callbacks = window.ykv.callbacks || {},
			r = "ykv.callbacks.",
			o = function(t) {
				if (t = t || {},
				!t.url) throw new TypeError("Param Error");
				var o = t.callback || "callback",
				a = t.data || {},
				s = parseInt(t.time) || 1e4,
				u = "cb_";
				a[o] = r + u;
				var l = e.urlParameter(a),
				c = t.url;
				c += c.indexOf("?") === -1 ? "?" + l: "&" + l;
				var d = document.createElement("script");
				i[u] = function(e) {
					try {
						"timeout" != d.jsonp && (d.jsonp = "success", t.success && t.success(e))
					} catch(n) {}
				},
				s && (d.timer = setTimeout(function() {
					d.jsonp = "timeout",
					t.fail && t.fail({
						message: "timeout"
					})
				},
				s)),
				d.onreadystatechange = d.onload = function() {
					this.readyState && "loaded" != this.readyState && "complete" != this.readyState || ("timeout" !== d.jsonp && "success" != d.jsonp && t.fail && t.fail({
						message: "fail"
					}), n(d, u))
				},
				d.onerror = function() {
					d.jsonp = "error",
					n(d, u),
					t.fail && t.fail({
						message: "error"
					})
				},
				d.src = c,
				document.getElementsByTagName("head")[0].appendChild(d)
			};
			t.exports = o
		}).call(e, n(11))
	}])
});
