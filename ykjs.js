(function() {
	var P, z, C, H, W, X, Y;
	function B(b, d) {
		if (!d) return b;
		for (var c in d) Ea.call(d, c) && (b[c] = d[c]);
		return b
	}
	function Fa(b) {
		if (!b) return "";
		var b = b.toString(),
		d,
		c,
		f,
		i,
		g,
		h = [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
		i = b.length;
		f = 0;
		for (g = ""; f < i;) {
			do d = h[b.charCodeAt(f++) & 255];
			while (f < i && -1 == d);
			if ( - 1 == d) break;
			do c = h[b.charCodeAt(f++) & 255];
			while (f < i && -1 == c);
			if ( - 1 == c) break;
			g += String.fromCharCode(d << 2 | (c & 48) >> 4);
			do {
				d = b.charCodeAt(f++) & 255;
				if (61 == d) return g;
				d = h[d]
			} while ( f < i && - 1 == d );
			if ( - 1 == d) break;
			g += String.fromCharCode((c & 15) << 4 | (d & 60) >> 2);
			do {
				c = b.charCodeAt(f++) & 255;
				if (61 == c) return g;
				c = h[c]
			} while ( f < i && - 1 == c );
			if ( - 1 == c) break;
			g += String.fromCharCode((d & 3) << 6 | c)
		}
		return g
	}
	function L(b, d) {
		for (var c = [], f = 0, i, g = "", h = 0; 256 > h; h++) c[h] = h;
		for (h = 0; 256 > h; h++) f = (f + c[h] + b.charCodeAt(h % b.length)) % 256,
		i = c[h],
		c[h] = c[f],
		c[f] = i;
		for (var m = f = h = 0; m < d.length; m++) h = (h + 1) % 256,
		f = (f + c[h]) % 256,
		i = c[h],
		c[h] = c[f],
		c[f] = i,
		g += String.fromCharCode(d.charCodeAt(m) ^ c[(c[h] + c[f]) % 256]);
		return g
	}
	function M(b, d) {
		for (var c = [], f = 0; f < b.length; f++) {
			for (var i = 0,
			i = "a" <= b[f] && "z" >= b[f] ? b[f].charCodeAt(0) - 97 : b[f] - 0 + 26, g = 0; 36 > g; g++) if (d[g] == i) {
				i = g;
				break
			}
			c[f] = 25 < i ? i - 26 : String.fromCharCode(i + 97)
		}
		return c.join("")
	}
	function Z(b) {
		for (var b = parseInt(b) || 3, b = isNaN(b) ? 3 : b, d = $.length, c = ""; 0 <= b;) c += $[Math.floor(Math.random() * d)],
		b--;
		return c
	}
	function Ga(b) {
		function d(b, d) {
			return b << d | b >>> 32 - d
		}
		function c(b) {
			var d = "",
			e, f;
			for (e = 7; 0 <= e; e--) f = b >>> 4 * e & 15,
			d += f.toString(16);
			return d
		}
		var f, i, g = Array(80),
		h = 1732584193,
		m = 4023233417,
		j = 2562383102,
		l = 271733878,
		n = 3285377520,
		o,
		t,
		u,
		r,
		p,
		b = function(b) {
			for (var b = b.replace(/\r\n/g, "\n"), d = "", c = 0; c < b.length; c++) {
				var e = b.charCodeAt(c);
				128 > e ? d += String.fromCharCode(e) : (127 < e && 2048 > e ? d += String.fromCharCode(e >> 6 | 192) : (d += String.fromCharCode(e >> 12 | 224), d += String.fromCharCode(e >> 6 & 63 | 128)), d += String.fromCharCode(e & 63 | 128))
			}
			return d
		} (b);
		o = b.length;
		var q = [];
		for (f = 0; f < o - 3; f += 4) i = b.charCodeAt(f) << 24 | b.charCodeAt(f + 1) << 16 | b.charCodeAt(f + 2) << 8 | b.charCodeAt(f + 3),
		q.push(i);
		switch (o % 4) {
		case 0:
			f = 2147483648;
			break;
		case 1:
			f = b.charCodeAt(o - 1) << 24 | 8388608;
			break;
		case 2:
			f = b.charCodeAt(o - 2) << 24 | b.charCodeAt(o - 1) << 16 | 32768;
			break;
		case 3:
			f = b.charCodeAt(o - 3) << 24 | b.charCodeAt(o - 2) << 16 | b.charCodeAt(o - 1) << 8 | 128
		}
		for (q.push(f); 14 != q.length % 16;) q.push(0);
		q.push(o >>> 29);
		q.push(o << 3 & 4294967295);
		for (b = 0; b < q.length; b += 16) {
			for (f = 0; 16 > f; f++) g[f] = q[b + f];
			for (f = 16; 79 >= f; f++) g[f] = d(g[f - 3] ^ g[f - 8] ^ g[f - 14] ^ g[f - 16], 1);
			i = h;
			o = m;
			t = j;
			u = l;
			r = n;
			for (f = 0; 19 >= f; f++) p = d(i, 5) + (o & t | ~o & u) + r + g[f] + 1518500249 & 4294967295,
			r = u,
			u = t,
			t = d(o, 30),
			o = i,
			i = p;
			for (f = 20; 39 >= f; f++) p = d(i, 5) + (o ^ t ^ u) + r + g[f] + 1859775393 & 4294967295,
			r = u,
			u = t,
			t = d(o, 30),
			o = i,
			i = p;
			for (f = 40; 59 >= f; f++) p = d(i, 5) + (o & t | o & u | t & u) + r + g[f] + 2400959708 & 4294967295,
			r = u,
			u = t,
			t = d(o, 30),
			o = i,
			i = p;
			for (f = 60; 79 >= f; f++) p = d(i, 5) + (o ^ t ^ u) + r + g[f] + 3395469782 & 4294967295,
			r = u,
			u = t,
			t = d(o, 30),
			o = i,
			i = p;
			h = h + i & 4294967295;
			m = m + o & 4294967295;
			j = j + t & 4294967295;
			l = l + u & 4294967295;
			n = n + r & 4294967295
		}
		p = c(h) + c(m) + c(j) + c(l) + c(n);
		return p.toLowerCase()
	}
	function D(b, d) {
		if ("js" == d) {
			var c = document.createElement("script");
			c.setAttribute("type", "text/javascript");
			c.setAttribute("src", b)
		} else "css" == d && (c = document.createElement("link"), c.setAttribute("rel", "stylesheet"), c.setAttribute("type", "text/css"), c.setAttribute("href", b));
		"undefined" != typeof c && document.getElementsByTagName("head")[0].appendChild(c)
	}
	function aa() {
		return g.isAndroid ? g.isAndroid4 ? "adr4": "adr": g.isIPHONE ? "iph": g.isIPAD ? "ipa": g.isIPOD ? "ipo": "oth"
	}
	function E(b) {
		return g.isIPAD && 0 <= window.location.href.indexOf("v.youku.com") ? "x-player": 200 >= b ? "x-player x-player-200": 300 >= b ? "x-player x-player-200-300": 660 >= b ? "x-player x-player-300-660": 800 >= b ? "x-player x-player-660-800": "x-player"
	}
	var j = "2016/04/1312:11:20",
	j = "2017/01/0411:29:59",
	j = "2017/01/0411:31:26",
	j = "2017/01/0411:34:31",
	j = "2017/01/0411:35:53",
	j = "2017/01/0411:36:23",
	j = "2017/01/0411:37:01",
	j = "2017/01/0411:38:42",
	j = "2017/01/0517:19:52",
	j = "2017/01/1116:30:37",
	j = "2017/01/1310:17:12",
	j = "2017/01/1310:41:29",
	j = "2017/01/1310:57:49",
	j = "2017/01/1311:05:57",
	j = "2017/01/1316:12:21",
	j = "2017/01/1709:51:47",
	j = "2017/01/1709:52:18",
	j = "2017/01/1709:52:55",
	j = "2017/01/1709:53:58",
	j = "2017/01/1709:54:31",
	j = "2017/01/1817:30:25",
	j = "2017/01/1910:24:06",
	j = "2017/01/1915:04:23",
	j = "2017/01/1915:11:18",
	j = "2017/01/1915:16:05",
	j = "2017/01/1915:54:07",
	j = "2017/01/1916:52:30",
	j = "2017/01/1916:57:48",
	j = "2017/01/1916:59:54",
	j = "2017/01/1917:08:28",
	j = "2017/02/0614:31:34",
	j = "2017/02/0614:36:25",
	j = "2017/02/0614:44:25",
	j = "2017/02/0614:45:21",
	j = "2017/02/0614:53:18",
	j = "2017/02/0614:53:52",
	j = "2017/02/0614:55:17",
	j = "2017/02/0614:55:39",
	j = "2017/02/0614:56:45",
	j = "2017/02/0614:57:33",
	j = "2017/02/0614:58:12",
	j = "2017/02/1616:43:42",
	j = "2017/02/1616:50:13",
	j = "2017/02/1617:02:09",
	j = "2017/02/1718:33:25",
	j = "2017/02/1718:34:09",
	j = "2017/02/1718:34:54",
	j = "2017/02/1718:40:59",
	j = "2017/02/1718:45:10",
	j = "2017/02/1718:46:22",
	j = "2017/02/1718:47:29",
	j = "2017/02/2010:00:09",
	j = "2017/02/2010:48:32",
	j = "2017/02/2010:48:52",
	j = "2017/02/2010:51:26",
	j = "2017/02/2010:52:03",
	j = "2017/02/2010:52:46",
	j = "2017/02/2010:53:13",
	j = "2017/02/2010:54:17",
	j = "2017/02/2010:56:48",
	j = "2017/02/2010:57:21",
	j = "2017/02/2010:58:18",
	j = "2017/02/2011:00:01",
	j = "2017/02/2011:02:17",
	j = "2017/02/2014:47:41",
	j = "2017/02/2014:51:17",
	j = "2017/02/2014:51:38",
	j = "2017/02/2014:52:21",
	j = "2017/02/2014:53:12",
	j = "2017/02/2015:47:58",
	j = "2017/02/2016:51:23",
	j = "2017/02/2016:52:43",
	j = "2017/02/2016:53:16",
	v = window.console;
	v || (v = {
		log: function() {}
	});
	var h = {
		log: function() {}
	},
	c = {},
	q = {},
	g = {
		playerType: "",
		userCache: {
			a1: "4",
			a2: "1"
		},
		playerState: {
			PLAYER_STATE_INIT: "PLAYER_STATE_INIT",
			PLAYER_STATE_READY: "PLAYER_STATE_READY",
			PLAYER_STATE_AD: "PLAYER_STATE_AD",
			PLAYER_STATE_PLAYING: "PLAYER_STATE_PLAYING",
			PLAYER_STATE_END: "PLAYER_STATE_END",
			PLAYER_STATE_ERROR: "PLAYER_STATE_ERROR"
		},
		playerCurrentState: "PLAYER_STATE_INIT"
	},
	ba = function() {
		this._player = document.getElementById(g.playerId)
	};
	ba.prototype = {
		resize: function(b, d) {
			this._player.style.width = b + "px";
			this._player.style.height = d + "px"
		},
		currentTime: function() {
			var b = this._player.getPlayerState().split("|");
			return 3 <= b.length ? b[2] : -1
		},
		totalTime: function() {
			var b = this._player.getPlayerState().split("|");
			return 4 <= b.length ? b[3] : -1
		},
		playVideo: function() {
			this._player.pauseVideo(!1)
		},
		pauseVideo: function() {
			this._player.pauseVideo(!0)
		},
		seekTo: function(b) {
			this._player.nsseek(b)
		},
		playVideoById: function(b) {
			this._player.playVideoByID(b)
		},
		hideControls: function() {
			this._player.showControlBar(!1)
		},
		showControls: function() {
			this._player.showControlBar(!0)
		}
	};
	var ca = function(b) {
		this._handler = {};
		var d = this;
		w.custom = (new Date).getTime();
		g.sendPlayServiceQuality("custom", 0, 0);
		q.jsonp({
			url: "https://api.youku.com/players/custom.json",
			data: b,
			time: 2E3,
			success: function(b) {
				var c = (new Date).getTime() - w.custom;
				g.sendPlayServiceQuality("custom", 200, c);
				d.parse(b)
			},
			fail: function(b) {
				var c = (new Date).getTime() - w.custom;
				g.sendPlayServiceQuality("custom", "timeout" == b.message ? 408 : 404, c);
				d.dispatch({
					type: "openapitimeoutyouku"
				})
			}
		})
	};
	ca.prototype = {
		addEventListener: function(b, d) {
			this._handler[b] = d
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		dispatch: function(b) {
			b && this._handler[b.type] && (b._target = this, this._handler[b.type](b))
		},
		parse: function(b) {
			null != b.error || 1 != b.status ? this.dispatch({
				type: "openapierror"
			}) : this.dispatch({
				type: "openapiokyouku",
				data: b
			})
		}
	};
	var n = {},
	F = {},
	I = [];
	n.start = function(b, d, c, f) {
		this._callback = f ||
		function() {};
		null != F[b] && null != F[b][c] ? (v.log("Cache Hit vid = " + b), this._callback(F[b][c].v, F[b][c].videoInfo)) : (this._vid = decodeURIComponent(b), this._password = d, this.requestError = !1, this._type = c, this._videoInfo = null, this._url = "", this.request())
	};
	n.cache = function() {
		F[n._vid] = {};
		F[n._vid][n._type] = {
			v: this._v,
			videoInfo: this._videoInfo
		}
	};
	n.error = function() {
		g.sendErrorReport(0);
		g.showError({
			code: "2002",
			message: "\u8be5\u89c6\u9891\u5728H5\u7aef\u6682\u4e0d\u652f\u6301\u64ad\u653e"
		},
		"\u8be5\u89c6\u9891\u6682\u65f6\u4e0d\u80fd\u64ad\u653e,\u8bf7\u4e0b\u8f7dAPP\u6216\u5728PC\u4e0a\u89c2\u770b", 320)
	};
	n.reportPlayListUep = function() {
		var b = (new Date).getTime() - w.get_json;
		I.push({
			type: "getplaylist",
			time: b
		})
	};
	n.response = function(b) {
		var d = b.data,
		e = d.stream; ! this.playlistError && !n.requestError && (this.playlistOK = !0, this.reportPlayListUep(), (c.v = b) && d ? e && ("default" !== e[0].drm_type || "http" !== e[0].transfer_mode) ? this.error(1, b, d, e) : this.init(b) : this.error(1, b, d, e))
	};
	n.request = function() {
		var b = c.https + "//play-ali.youku.com/play/get.json",
		d = function(b) {
			var b = b.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
			d,
			c;
			if (!b) return null;
			d = b[1] && parseFloat(b[1]);
			c = b[2] && parseFloat(b[2]);
			return d && c ? parseFloat(b[1] + "." + b[2]) : d ? d: null
		} (navigator.userAgent),
		e = B({
			vid: decodeURIComponent(this._vid),
			ct: 12
		},
		this.playlistconfig),
		f = navigator.userAgent.toLowerCase();
		"" == location.protocol && (e.pro = 1);
		/android|linux|u;/i.test(f) && (!d || 2.3 >= d) && delete e.pro;
		this._password && (e.pwd = encodeURI(this._password));
		this._password && (c.initConfig.client_id && c.config.partner_config && 1 == c.config.partner_config.status && 1 == c.config.partner_config.passless) && (e.cid = c.initConfig.client_id);
		c.config.partner_config && c.config.partner_config.stealsign && (e.r = encodeURIComponent(c.config.partner_config.stealsign));
		e = B(e, c.getUCParam(this._vid));
		w.get_json = (new Date).getTime();
		g.sendPlayServiceQuality("get_json", 0, 0);
		q.jsonp({
			url: b,
			data: e,
			time: 1E4,
			success: function(b) {
				var d = (new Date).getTime() - w.get_json;
				g.sendPlayServiceQuality("get_json", 200, d);
				n.response(b)
			},
			fail: function(b) {
				var d = (new Date).getTime() - w.get_json;
				g.sendPlayServiceQuality("get_json", b.message == "timeout" ? 408 : 404, d);
				self.playlistError = true;
				g.sendErrorReport(2003);
				g.showError({
					code: "2003",
					message: "\u89c6\u9891\u4fe1\u606f\u51fa\u9519\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5"
				},
				"\u89c6\u9891\u4fe1\u606f\u51fa\u9519\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5")
			}
		})
	};
	n.m3u8src = function(b) {
		c.password = this._password;
		return c.m3u8src_v2(this._vid, b)
	};
	n.total = function(b, d, e) {
		b = b[d][e];
		e = d = 0;
		if (c.v.data.controller && c.v.data.controller.html5_disable) d += c.v.data.video.seconds;
		else for (var f = 0; f < b.length; f++) var i = b[f],
		d = d + i.seconds,
		e = e + parseInt(i.size);
		return {
			totalTime: parseInt(d),
			totalBytes: e
		}
	};
	n.processError = function(b) {
		h.log("playlist errorcode = " + b.error.code);
		var d = b.stream;
		if ( - 301 == b.error.code || -303 == b.error.code || -307 == b.error.code || -308 == b.error.code) {
			for (b = 0; b < d.length; b++) {
				d[b].audio_lang = "default";
				d[b].drm_type = "";
				d[b].logo = "";
				d[b].milliseconds_audio = 0;
				d[b].milliseconds_video = 0;
				d[b].kye = "";
				d[b].size = 0;
				d[b].stream_fileid = "0*0";
				d[b].subtitle_lang = "";
				for (var c = 0; c < d[b].segs.length; c++) d[b].segs[c].kye = "",
				d[b].segs[c].size = 0,
				d[b].segs[c].total_milliseconds_audio = 0,
				d[b].segs[c].total_milliseconds_video = 0
			}
			return ! 1
		}
		this._callback(this._v, {});
		return ! 0
	};
	n.init = function(b) {
		this._v = b;
		var d = b.data,
		e = d.stream;
		if (!d.security || !d.security.encrypt_string || !d.security.ip) g.sendErrorReport(2004),
		g.showError({
			code: "2004",
			message: "\u6570\u636e\u89e3\u6790\u9519\u8bef"
		},
		"\u6570\u636e\u89e3\u6790\u9519\u8bef");
		else if (!e && !d.error) g.showError({
			code: "2999",
			message: "\u6570\u636e\u89e3\u6790\u9519\u8bef"
		},
		'\u8be5\u89c6\u9891\u6682\u4e0d\u80fd\u64ad\u653e <a href="' + c.https + '//m.youku.com/webapp/dl?app=youku&amp;source=webqr" title="\u4e0b\u8f7d\u4f18\u9177\u5ba2\u6237\u7aef" target="_blank"><button type="button" class="x-btn" style="background: #3bb4fc;text-align: center;color: #fff;border-radius: 1rem;">\u7528app\u89c2\u770b</button></a>');
		else {
			var f = L(M(c.mk.a3 + "o0b" + g.userCache.a1, [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26]).toString(), Fa(d.security.encrypt_string));
			if (2 > f.split("_").length) g.sendErrorReport(2004),
			g.showError({
				code: "2004",
				message: "\u6570\u636e\u89e3\u6790\u9519\u8bef"
			},
			"\u6570\u636e\u89e3\u6790\u9519\u8bef");
			else {
				g.userCache.sid = f.split("_")[0];
				g.userCache.token = f.split("_")[1];
				if (null != d.error) {
					if ( - 202 == d.error.code || -203 == d.error.code) g.sendErrorReport(4E3);
					else {
						if ( - 402 == d.error.code) {
							g.sendErrorReport(2007);
							g.showError({
								code: "2007",
								message: "\u7528\u6237\u6ca1\u6709\u6743\u9650\u89c2\u770b"
							},
							"\u7528\u6237\u6ca1\u6709\u6743\u9650\u89c2\u770b,\u8bf7\u8fd4\u56de\u4e3b\u7ad9\u64ad\u653e");
							return
						}
						g.sendErrorReport(1E3)
					}
					if (this.processError(d)) return
				}
				this._videoInfo = new da(d, e, this._type);
				e = this._videoInfo._videoSegsDic;
				f = "";
				c.defaultLanguage == e.lang ? f = c.defaultLanguage: (f = e.lang, c.defaultLanguage = e.lang);
				var i = n.total(e.streams, f, e.typeArr[f][0]);
				this._videoInfo.totalTime = i ? i.totalTime: d.video.seconds;
				if ("m3u8" == this._type) c.defaultVideoType = "mp4",
				null != l.getItem("defaultVideoType") && (c.defaultVideoType = l.getItem("defaultVideoType")),
				-1 == b.data.stream[0].stream_type.indexOf(c.defaultVideoType) && (c.defaultVideoType = "mp4", -1 == b.data.stream[0].stream_type.indexOf("mp4") && (c.defaultVideoType = "flv")),
				h.log("default = " + c.defaultVideoType),
				this._videoInfo.src = n.m3u8src(c.defaultVideoType),
				this.cache(),
				this._callback(this._v, this._videoInfo);
				else if ("mp4" == this._type) {
					d = ["3gphd", "mp4", "flv"];
					c.defaultVideoType = null;
					for (i = 0; i < d.length; i++) if (e.streams[f][d[i]] && !("3gphd" == d[i] && 7200 < parseInt(b.seconds))) {
						c.defaultVideoType = d[i];
						break
					}
					h.log("mp4 type=" + c.defaultVideoType);
					c.defaultVideoType ? ("flv" == c.defaultVideoType && (c.config.playType = "directsrc"), this.cache(), this._callback(this._v, this._videoInfo)) : this.error(2)
				}
			}
		}
	};
	var da = function(b, d, c) {
		this._sid = g.userCache.sid;
		this._fileType = c;
		this._videoSegsDic = {};
		new ea;
		var c = [],
		f = [];
		f.streams = {};
		f.logos = {};
		f.typeArr = {};
		f.totalTime = {};
		for (var i = 0; i < d.length; i++) {
			for (var s = d[i].audio_lang, h = !1, m = 0; m < c.length; m++) if (c[m] == s) {
				h = !0;
				break
			}
			h || c.push(s)
		}
		for (i = 0; i < c.length; i++) {
			for (var j = c[i], s = {},
			h = {},
			l = [], m = 0; m < d.length; m++) {
				var n = d[m];
				if (j == n.audio_lang && this.isValidType(n.stream_type)) {
					var o = this.convertType(n.stream_type),
					t = 0;
					"none" != n.logo && (t = 1);
					h[o] = t;
					var u = !1,
					r;
					for (r in l) o == l[r] && (u = !0);
					u || l.push(o);
					t = n.segs;
					if (null != t) {
						var p = [];
						u && (p = s[o]);
						for (u = 0; u < t.length; u++) {
							var q = t[u];
							if (null == q) break;
							var v = {};
							v.no = u;
							v.size = q.size;
							v.seconds = Number(q.total_milliseconds_video) / 1E3;
							v.milliseconds_video = Number(n.milliseconds_video) / 1E3;
							v.key = q.key;
							v.fileId = q.fileid;
							v.src = this.getVideoSrc(m, u, b, n.stream_type, v.fileId);
							v.type = o;
							p.push(v)
						}
						s[o] = p
					}
				}
			}
			m = this.langCodeToCN(j).key;
			f.logos[m] = h;
			f.streams[m] = s;
			f.typeArr[m] = l
		}
		this._videoSegsDic = f;
		this._videoSegsDic.lang = this.langCodeToCN(c[0]).key
	},
	ea = function(b) {
		this._randomSeed = b;
		this.cg_hun()
	};
	ea.prototype = {
		cg_hun: function() {
			this._cgStr = "";
			for (var b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/\\:._-1234567890",
			d = b.length,
			c = 0; c < d; c++) {
				var f = parseInt(this.ran() * b.length);
				this._cgStr += b.charAt(f);
				b = b.split(b.charAt(f)).join("")
			}
		},
		cg_fun: function(b) {
			for (var b = b.split("*"), d = "", c = 0; c < b.length - 1; c++) d += this._cgStr.charAt(b[c]);
			return d
		},
		ran: function() {
			this._randomSeed = (211 * this._randomSeed + 30031) % 65536;
			return this._randomSeed / 65536
		}
	};
	da.prototype = {
		getFileId: function(b, d) {
			if (null == b || "" == b) return "";
			var c = b.slice(0, 8),
			f = d.toString(16);
			1 == f.length && (f = "0" + f);
			var f = f.toUpperCase(),
			i = b.slice(10, b.length);
			return c + f + i
		},
		isValidType: function(b) {
			return "3gphd" == b || "flv" == b || "flvhd" == b || "mp4hd" == b || "mp4hd2" == b || "mp4hd3" == b ? !0 : !1
		},
		convertType: function(b) {
			var d = b;
			switch (b) {
			case "m3u8":
				d = "mp4";
				break;
			case "3gphd":
				d = "3gphd";
				break;
			case "flv":
				d = "flv";
				break;
			case "flvhd":
				d = "flv";
				break;
			case "mp4hd":
				d = "mp4";
				break;
			case "mp4hd2":
				d = "hd2";
				break;
			case "mp4hd3":
				d = "hd3"
			}
			return d
		},
		langCodeToCN: function(b) {
			var d = "";
			switch (b) {
			case "default":
				d = {
					key: "guoyu",
					value: "\u56fd\u8bed"
				};
				break;
			case "guoyu":
				d = {
					key: "guoyu",
					value: "\u56fd\u8bed"
				};
				break;
			case "yue":
				d = {
					key: "yue",
					value: "\u7ca4\u8bed"
				};
				break;
			case "chuan":
				d = {
					key: "chuan",
					value: "\u5ddd\u8bdd"
				};
				break;
			case "tai":
				d = {
					key: "tai",
					value: "\u53f0\u6e7e"
				};
				break;
			case "min":
				d = {
					key: "min",
					value: "\u95fd\u5357"
				};
				break;
			case "en":
				d = {
					key: "en",
					value: "\u82f1\u8bed"
				};
				break;
			case "ja":
				d = {
					key: "ja",
					value: "\u65e5\u8bed"
				};
				break;
			case "kr":
				d = {
					key: "kr",
					value: "\u97e9\u8bed"
				};
				break;
			case "in":
				d = {
					key: "in",
					value: "\u5370\u5ea6"
				};
				break;
			case "ru":
				d = {
					key: "ru",
					value: "\u4fc4\u8bed"
				};
				break;
			case "fr":
				d = {
					key: "fr",
					value: "\u6cd5\u8bed"
				};
				break;
			case "de":
				d = {
					key: "de",
					value: "\u5fb7\u8bed"
				};
				break;
			case "it":
				d = {
					key: "it",
					value: "\u610f\u8bed"
				};
				break;
			case "es":
				d = {
					key: "es",
					value: "\u897f\u8bed"
				};
				break;
			case "po":
				d = {
					key: "po",
					value: "\u8461\u8bed"
				};
				break;
			case "th":
				d = {
					key: "th",
					value: "\u6cf0\u8bed"
				};
				break;
			case "man":
				d = {
					key: "man",
					value: "\u6696\u7537"
				};
				break;
			case "baby":
				d = {
					key: "baby",
					value: "\u840c\u7ae5"
				}
			}
			return d
		},
		getVideoSrc: function(b, d, e, f, i, s, h) {
			var m = e.stream[b];
			if (!e.video.encodeid || !f) return "";
			var b = {
				flv: 0,
				flvhd: 0,
				mp4: 1,
				hd2: 2,
				"3gphd": 1,
				"3gp": 0
			} [f],
			f = {
				flv: "flv",
				mp4: "mp4",
				hd2: "flv",
				mp4hd: "mp4",
				mp4hd2: "mp4",
				"3gphd": "mp4",
				"3gp": "flv",
				flvhd: "flv"
			} [f],
			j = d.toString(16);
			1 == j.length && (j = "0" + j);
			var l = m.segs[d].total_milliseconds_video / 1E3,
			d = m.segs[d].key;
			if ("" == d || -1 == d) d = m.key2 + m.key1;
			m = "";
			e.show && (m = e.show.pay ? "&ypremium=1": "&ymovie=1");
			e = "/player/getFlvPath/sid/" + g.userCache.sid + "_" + j + "/st/" + f + "/fileid/" + i + "?K=" + d + "&hd=" + b + "&myp=0&ts=" + l + "&ypp=0" + m;
			i = encodeURIComponent(J(L(M(c.mk.a4 + "poz" + g.userCache.a2, [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26]).toString(), g.userCache.sid + "_" + i + "_" + g.userCache.token)));
			e = e + ("&ep=" + i) + "&ctype=12&ev=1" + ("&token=" + g.userCache.token);
			e += "&oip=" + c.v.data.security.ip;
			return e = c.https + "//k.youku.com" + (e + ((s ? "/password/" + s: "") + (h ? h: "")))
		}
	};
	var fa = function(b) {
		this._player = b.video;
		null == this._player && (this._player = document.getElementById("youku-html5player-video-0"));
		this._oplayer = b
	};
	fa.prototype = {
		resize: function(b, d) {
			this._oplayer.resize(b, d)
		},
		currentTime: function() {
			return this._player.currentTime
		},
		totalTime: function() {
			return this._player.duration
		},
		playVideo: function() {
			this._oplayer.play()
		},
		startPlayVideo: function() {
			if (g.isNeedFrontAd) this._oplayer.controls.onVideoBtnTouchEnd();
			else this._oplayer.controls.onVideoBtnClick()
		},
		pauseVideo: function() {
			this._player.pause()
		},
		seekTo: function(b) {
			try {
				this._player.currentTime = b
			} catch(d) {}
		},
		playVideoById: function(b, d) {
			h.log("YKH5Player playVideoByid");
			var e = this._oplayer;
			c.config.autoplay = !0;
			c.config.vid = b;
			n.start(b, d, c.config.content,
			function(b, d) {
				e.startPlay(b, d)
			})
		},
		hideControls: function() {
			this._player.removeAttribute("controls")
		},
		showControls: function() {
			this._player.setAttribute("controls", !0)
		},
		switchFullScreen: function() {
			this._oplayer.controls.fullscreenPanel.switchFullScreen({})
		}
	};
	g.Log = function(b, d) {
		var c = document.createElement("img");
		d && c.addEventListener("error", d, !1);
		c.src = b + "&r_=" + Math.floor(1E4 * Math.random());
		c.id = "youku-uniplayer-stat"
	};
	g.isNeedAdrTrick = function() {
		return g.isAndroid && !g.adrPlayTrick && !g.isHTC && g.isNeedFrontAd && !g.isVIVO
	};
	g.getParentUrl = function() {
		var b = null;
		if (parent !== window) try {
			b = parent.location.href
		} catch(d) {
			b = document.referrer
		}
		return b
	};
	g.adrInvalidPauseCheck = function(b) {
		var d = b.currentTime,
		c = 0,
		f = !1;
		g.adrPlayTrick = !0;
		b.pause();
		b.play();
		setInterval(function() {
			b.currentTime == d && !f ? (c++, b.play(), 0 == c % 10 && (b.load(), b.play())) : f = !0
		},
		1E3)
	};
	g.sendPlayServiceQuality = function(b, d, e) {
		var f = c.https + "//v.l.youku.com/h_player_service?",
		b = {
			n: b,
			vid: c.initConfig.vid,
			u: encodeURIComponent(g.getParentUrl() ? g.getParentUrl() : window.location.href),
			c: d,
			t: e / 1E3,
			p: "hvp"
		};
		g.Log(f + r(b))
	};
	g.sendErrorReport = function(b) {
		var d = c.https + "//v.l.youku.com/perror?",
		e = {},
		f = "",
		f = g.isIPAD ? "xplayer_ipad": g.isIPHONE ? "xplayer_iphone": "xplayer_android";
		e.m = f;
		e.ec = b;
		f = "";
		1E3 == b && (f = c.v.data.error.code);
		e.gc = f;
		e.u = encodeURIComponent(window.location.href);
		e.v = c.videoInfo ? c.videoInfo._sid: "";
		e.ct = c.v ? c.v.data ? c.v.data.video ? c.v.data.video.category_id: "": "": "";
		e.hd = g.hd ? g.hd: 0;
		c.v && c.v.data.network && (e.a = c.v ? c.v.data.network.area_code + "|" + c.v.data.network.dma_code: "");
		b = "";
		c.initConfig.vvlogconfig && c.initConfig.vvlogconfig.pvid && (b = c.initConfig.vvlogconfig.pvid);
		e.pid = b;
		g.Log(d + r(e))
	};
	g.Load = function(b, d) {
		if ("js" == d) {
			var c = document.createElement("script");
			c.setAttribute("type", "text/javascript");
			c.setAttribute("src", b)
		} else "css" == d && (c = document.createElement("link"), c.setAttribute("rel", "stylesheet"), c.setAttribute("type", "text/css"), c.setAttribute("href", b));
		"undefined" != typeof c && document.getElementsByTagName("head")[0].appendChild(c)
	};
	g.showError = function(b, d) {
		var e = c.get("#x-player");
		e.innerHTML = d ? d: "\u8be5\u89c6\u9891\u683c\u5f0f\u7279\u6b8a\uff0c\u8bf7\u5728PC\u4e0a\u89c2\u770b";
		e.style.textAlign = "center";
		e.style.color = "white";
		e.style.lineHeight = e.offsetHeight + "px";
		g.onError(b, d)
	};
	g.onError = function(b, d) {
		b = b || {
			code: "1000",
			message: "\u672a\u5b9a\u4e49\u9519\u8bef"
		};
		if (c.playerEvents && c.playerEvents.onPlayError) c.playerEvents.onPlayError(d ? d: "\u8be5\u89c6\u9891\u683c\u5f0f\u7279\u6b8a\uff0c\u8bf7\u5728PC\u4e0a\u89c2\u770b", b)
	}; (function() {
		var b = document.createElement("video"),
		d = {
			MP4: "video/mp4",
			OGG: "video/ogg",
			WEBM: "video/webm"
		},
		c = {
			isWin: "Win",
			isMac: "Mac",
			isSafari: "Safari",
			isChrome: "Chrome",
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
		g.supportHTML5Video = !1;
		g.isIOS = !1;
		g.os = "";
		if (b.canPlayType) {
			g.supportHTML5Video = !0;
			for (var f in d) g["canPlay" + f] = b.canPlayType(d[f]) ? !0 : !1
		}
		for (var i in c) if ( - 1 !== navigator.userAgent.indexOf(c[i]) ? (g[i] = !0, g.os += c[i] + " ") : g[i] = !1, -1 !== navigator.userAgent.indexOf("Android")) b = navigator.userAgent.indexOf("Android"),
		b = navigator.userAgent.substr(b, 10),
		b > c.isAndroid4 && (g.isAndroid4 = !0, g.os += b + " ");
		g.isMobileIOS = g.isIPAD || g.isIPHONE || g.isIPOD;
		g.isIOS = g.isMobileIOS || g.isMac;
		g.isSupportH5M3U8 = g.isMobileIOS || g.isMac && g.isSafari && !g.isChrome || g.isLEPAD || g.isSonyDTV;
		g.isSupportH5MP4 = (g.isChrome || g.isIE10 || g.isAndroid41 || g.isAndroid4 || g.isLumia) && g.canPlayMP4;
		i = c = 0;
		try {
			if (document.all) {
				var s = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
				if (s) {
					var c = 1,
					h = s.GetVariable("$version");
					parseInt(h.split(" ")[1].split(",")[0])
				}
			} else if (navigator.plugins && 0 < navigator.plugins.length && (s = navigator.plugins["Shockwave Flash"])) for (var c = 1,
			m = s.description.split(" "), s = 0; s < m.length; ++s) isNaN(parseInt(m[s])) || parseInt(m[s])
		} catch(j) {
			i = c = 1
		}
		g.isSupportFlash = c && !i;
		g.isMQQBrowser && (g.isSupportFlash = !1);
		g.isLumia && (g.isSupportFlash = !1);
		g.isPhone = g.isIPHONE || g.isIPOD || g.isAndroid && g.isMobile;
		g.isAndroidPad = g.isAndroid && !g.isMobile;
		g.isPad = g.isIPAD || g.isAndroidPad;
		g.isMobile = g.isIPAD || g.isIPHONE || g.isIPOD || g.isLEPAD || g.isMIUI || g.isAndroid4 || g.isSonyDTV || g.isLumia
	})();
	var Q = function(b) {
		h.log("canplay mp4 = " + g.canPlayMP4);
		c.initConfig = b;
		this._vid = b.vid;
		this._target = b.target;
		this._partnerId = b.partnerId;
		b.client_id && (this._partnerId = b.client_id); ! b.pkid && (!this._vid || !this._target || !this._partnerId) ? alert("[Fail]The params of {vid,target,client_id} are necessary !") : (this._events = b.events, c.playerEvents = b.events, g._target = this._target, this._paid = 0, null != b.paid && (this._paid = b.paid), this._id = b.id, null == this._id && (this._id = "youku-player"), g.playerId = this._id, this._width = b.width, this._height = b.height, this._expand = b.expand, null == b.width || null == b.height ? null == b.expand && (this._expand = 0) : null == b.expand && (this._expand = 1), this._prefer = b.prefer ? b.prefer.toLowerCase() : "flash", this._starttime = b.starttime, this._password = b.password, this._poster = b.poster, this._autoplay = !!b.autoplay, this._canWide = b.canWide, "undefined" != typeof b.show_related && (this._showRelated = !!b.show_related), this._winType = b.wintype, this._pkid = b.pkid, this._pkpid = b.pkpid, this._pkurl = b.pkurl, this._playlistconfig = b.playlistconfig, this._isMobile = g.isMobile, this._isMobileIOS = g.isMobileIOS, c.isWeixin = g.isWeixin, "undefined" != typeof b.weixin && (c.isWeixin = !!b.weixin), this._loop = !!b.loop || !1, this._playerType = "", c.mk = {},
		c.mk.a3 = "b4et", c.mk.a4 = "boa4")
	};
	Q.prototype = {
		isSupportH5MP4: function() {
			return g.isSupportH5MP4
		},
		isSupportH5M3U8: function() {
			return g.isSupportH5M3U8
		},
		isSupportFlash: function() {
			return g.isSupportFlash
		},
		playerType: function() {
			if ("" != this._playerType) return this._playerType;
			this._playerType = "h5" == this._prefer ? this.isSupportH5M3U8() ? "h5m3u8": this.isSupportH5MP4() ? "h5mp4": this.isSupportFlash() ? "flash": "error": "flash" == this._prefer ? this.isSupportFlash() ? "flash": this.isSupportH5M3U8() ? "h5m3u8": this.isSupportH5MP4() ? "h5mp4": "error": "error";
			if (("h5m3u8" == this._playerType || "h5mp4" == this._playerType) && void 0 != this._pkid) this._playerType = "h5pk";
			return this._playerType
		},
		select: function() {
			h.log("playerType = " + this.playerType());
			if (this.isThirdParty()) {
				var b = this;
				this.processThirdParty(function() {
					b.selectHandler()
				})
			} else this.selectHandler()
		},
		selectHandler: function() {
			"h5m3u8" == this.playerType() ? this.selectH5M3U8() : "h5mp4" == this.playerType() ? this.selectH5MP4() : "h5pk" == this.playerType() ? this.selectH5PK() : "flash" == this.playerType() ? this.selectFlash() : this.selectDirectUrl();
			if (this._events && this._events.onPlayerReady) {
				var b = this._events.onPlayerReady;
				if ("h5" == g.playerType) var d = setInterval(function() {
					if (p(g.playerId)) {
						g.playerCurrentState = g.playerState.PLAYER_STATE_READY;
						h.log(g.playerCurrentState);
						clearInterval(d);
						try {
							l.appendItem("phase", "playerready"),
							b()
						} catch(c) {}
					}
				},
				500);
				else "flash" == g.playerType && (d = setInterval(function() {
					if (1 == q.swfLoaded) {
						g.playerCurrentState = g.playerState.PLAYER_STATE_READY;
						h.log(g.playerCurrentState);
						clearInterval(d);
						try {
							l.appendItem("phase", "playerready"),
							b()
						} catch(c) {}
					}
				},
				500))
			}
		},
		selectH5MP4: function() {
			g.playerType = "h5";
			var b = this._h5player = new YoukuHTML5Player({
				id: this._id,
				vid: this._vid,
				partnerId: this._partnerId,
				parentBox: this._target,
				events: this._events,
				width: this._width,
				height: this._height,
				poster: this._poster,
				autoplay: this._autoplay,
				isMobile: this._isMobile,
				isMobileIOS: this._isMobileIOS,
				content: "mp4",
				loop: this._loop,
				wintype: this._winType,
				expand: this._expand,
				partner_config: this.partner_config,
				canWide: this._canWide ? this._canWide: 0
			},
			c.initConfig);
			n.playlistconfig = this._playlistconfig;
			n.start(this._vid, this._password, "mp4",
			function(d, e) {
				l.appendItem("phase", "vinfo_mp4");
				b.startPlay(d, e);
				if (c.initConfig.events && c.initConfig.events.onMediaSrcOK) c.initConfig.events.onMediaSrcOK(c.defaultVideoType, e._videoSegsDic.streams[e._videoSegsDic.lang][c.defaultVideoType][0].src)
			})
		},
		selectH5M3U8: function() {
			g.playerType = "h5";
			var b = {
				id: this._id,
				vid: this._vid,
				partnerId: this._partnerId,
				parentBox: this._target,
				events: this._events,
				width: this._width,
				height: this._height,
				poster: this._poster,
				autoplay: this._autoplay,
				isMobile: this._isMobile,
				isMobileIOS: this._isMobileIOS,
				content: "m3u8",
				loop: this._loop,
				wintype: this._winType,
				expand: this._expand,
				partner_config: this.partner_config,
				canWide: this._canWide ? this._canWide: 0
			};
			if (g.isIPHONE || g.isIPOD) b.playType = "directsrc";
			var d = new YoukuHTML5Player(b, c.initConfig);
			this._h5player = d;
			n.playlistconfig = this._playlistconfig;
			n.start(this._vid, this._password, "m3u8",
			function(b, c) {
				l.appendItem("phase", "vinfo_m3u8");
				d.startPlay(b, c)
			})
		},
		selectH5PK: function() {
			g.playerType = "h5";
			var b = {
				id: this._pkid,
				pid: this._pkpid,
				url: decodeURIComponent(this._pkurl),
				parentBox: this._target
			};
			this._h5player = new ga(b, c.initConfig)
		},
		processThirdParty: function(b) {
			var d = new ca({
				type: "h5",
				client_id: c.initConfig.client_id,
				video_id: c.initConfig.vid,
				embsig: c.initConfig.embsig,
				refer: encodeURIComponent(window.location.href)
			}),
			e = this;
			d.addEventListener("openapiokyouku",
			function(d) {
				h.log("thirdparty res ok");
				e.partner_config = d.data;
				b()
			});
			d.addEventListener("openapierror",
			function() {
				h.log("thirdparty res error");
				b()
			});
			d.addEventListener("openapitimeoutyouku",
			function() {
				h.log("thirdparty res timeout");
				b()
			})
		},
		selectH5VTag: function() {
			g.playerType = "h5";
			var b = c.https + "//v.youku.com/player/getM3U8/vid/" + this._vid + "/type/mp4/ts/" + parseInt((new Date).getTime() / 1E3),
			b = b + (this._password ? "/password/" + this._password: ""),
			b = '<video src="' + (b + "/v.m3u8") + '" controls width=' + this._width + " height=" + this._height + " id=" + this._id + " autohide=false " + (this._poster ? "poster=" + this._poster: "") + " " + (!0 == this._autoplay ? "autoplay=true": "") + "></video>";
			p(this._target).innerHTML = b
		},
		isThirdParty: function() {
			if (void 0 != this._pkid) return ! 1;
			var b = c.initConfig.client_id;
			return null != b && 16 == (b + "").length ? !0 : !1
		},
		selectFlash: function() {
			g.playerType = "flash";
			var b = {
				imglogo: this._poster || "",
				paid: this._paid,
				partnerId: c.initConfig.client_id
			};
			this._loop && (b.isLoop = "true");
			null != c.initConfig.firsttime && (b.firsttime = c.initConfig.firsttime);
			null != c.initConfig.embsig && (b.embsig = c.initConfig.embsig);
			null != c.initConfig.password && (b.passwordstr = c.initConfig.password);
			null != c.initConfig.styleid && (b.styleid = c.initConfig.styleid);
			null != c.initConfig.vext && (b.vext = c.initConfig.vext);
			for (var d in c.initConfig.adconfig) b[d] = c.initConfig.adconfig[d];
			for (d in c.initConfig.flashconfig) b[d] = c.initConfig.flashconfig[d];
			var e = {
				sid: this._vid,
				isAutoPlay: this._autoplay,
				isShowRelatedVideo: this._showRelated,
				winType: this._winType,
				newPlayer: c.initConfig.newPlayer
			};
			this.isThirdParty() && !b.delayload && (e.partnerid = this._partnerId);
			null != c.initConfig.pkid && (b.VideoIDS = c.initConfig.pkid);
			null != c.initConfig.pkpid && (b.pkpid = c.initConfig.pkpid);
			null != c.initConfig.pkurl && (b.pkurl = c.initConfig.pkurl);
			var f = ha + "/player.php/",
			i;
			for (i in e) {
				var s = e[i];
				"undefined" != typeof s && "" !== s && (f += i + "/" + s + "/")
			}
			f += "v.swf";
			c.initConfig.flashsrc && (f = c.initConfig.flashsrc);
			null != c.initConfig.pkid && (f = "youkupaike.swf");
			b = {
				allowFullScreen: !0,
				allowScriptAccess: "always",
				movie: f,
				flashvars: b
			};
			c.initConfig.wmode && (b.wmode = c.initConfig.wmode);
			if ((s = c.initConfig.flashparam) && "object" == typeof s) for (i in s) b[i] = s[i];
			i = "";
			for (d in b) s = b[d],
			"object" == typeof s && (s = r(s)),
			i += "<param name=" + d + " value=" + s + ">";
			i += decodeURI(c.initConfig.flashext || "");
			p(this._target).innerHTML = "<object type=application/x-shockwave-flash data= " + f + " width=100% height=100% id=" + this._id + ">" + i + "</object>";
			this._expand && (p(this._target).style.width = this._width + "px", p(this._target).style.height = this._height + "px")
		},
		selectDirectUrl: function(b) {
			b = b || "mp4";
			h.log("select directsrc");
			g.playerType = "directsrc";
			var d = new ia({
				id: this._id,
				vid: this._vid,
				partnerId: this._partnerId,
				parentBox: this._target,
				events: this._events,
				width: this._width,
				height: this._height,
				poster: this._poster,
				autoplay: this._autoplay,
				isMobile: this._isMobile,
				isMobileIOS: this._isMobileIOS,
				content: b,
				playType: "directsrc",
				wintype: this._winType,
				expand: this._expand,
				canWide: this._canWide ? this._canWide: 0
			});
			this._h5player = d;
			n.playlistconfig = this._playlistconfig;
			n.start(this._vid, this._password, b,
			function(b, c) {
				d.startPlay(b, c)
			})
		}
	};
	q.Player = function(b, d) {
		d.target = b;
		this.select = new Q(d);
		this.select.select();
		this._player = ""
	};
	q.Player.prototype = {
		getPlayerState: function() {
			return this.select._h5player.getPlayerState()
		},
		player: function() {
			return "" != this._player ? this._player: this._player = "h5" == g.playerType ? new fa(this.select._h5player) : "flash" == g.playerType ? new ba: "error"
		},
		resize: function(b, d) {
			this.player().resize(b, d)
		},
		currentTime: function() {
			return this.player().currentTime()
		},
		totalTime: function() {
			return this.player().totalTime()
		},
		playVideo: function() {
			this.player().playVideo()
		},
		startPlayVideo: function() {
			this.player().startPlayVideo()
		},
		pauseVideo: function() {
			this.player().pauseVideo()
		},
		seekTo: function(b) {
			this.player().seekTo(b)
		},
		hideControls: function() {
			this.player().hideControls()
		},
		showControls: function() {
			this.player().showControls()
		},
		playVideoById: function(b) {
			this.player().playVideoById(b)
		},
		switchFullScreen: function() {
			try {
				this.player().switchFullScreen()
			} catch(b) {}
		}
	};
	var ja = function(b) {
		this.video = b;
		this.bindEvent()
	};
	ja.prototype = {
		onLoadedStartST: function() {
			v.log("onLoadedStartIPH");
			this._load_data = !0
		},
		onLoadedDataST: function() {
			v.log("onLoadedDataST");
			this._load_data = !1
		},
		onLoadedMetaDataST: function() {
			v.log("onLoadedMetaDataST");
			if (this.getM3U8XhrState) {
				var b = (new Date).getTime() - w.m3u8;
				g.sendPlayServiceQuality("m3u8", 200, b);
				this.getM3U8XhrState = !1
			}
		},
		onErrorST: function() {
			if (this.getM3U8XhrState) {
				var b = (new Date).getTime() - w.m3u8;
				g.sendPlayServiceQuality("m3u8", 404, b);
				this.getM3U8XhrState = !1
			}
		},
		onPlayST: function() {
			v.log("onPlayST");
			if (!0 == this._load_data) {
				w.m3u8 = (new Date).getTime();
				g.sendPlayServiceQuality("m3u8", 0, 0);
				this.getM3U8XhrState = !0;
				var b = this;
				setTimeout(function() {
					if (b.getM3U8XhrState) {
						var d = (new Date).getTime() - w.m3u8;
						g.sendPlayServiceQuality("m3u8", 408, d);
						b.getM3U8XhrState = !1
					}
				},
				1E4)
			}
		},
		bindEvent: function() {
			"m3u8" == c.config.content && (c.addEventHandler(this.video, "play", c.bindAsEventListener(this, this.onPlayST)), c.addEventHandler(this.video, "loadstart", c.bindAsEventListener(this, this.onLoadedStartST)), c.addEventHandler(this.video, "loadedmetadata", c.bindAsEventListener(this, this.onLoadedMetaDataST)), c.addEventHandler(this.video, "error", c.bindAsEventListener(this, this.onErrorST)), c.addEventHandler(this.video, "loadeddata", c.bindAsEventListener(this, this.onLoadedDataST)))
		}
	};
	var p = function(b) {
		return document.getElementById(b)
	},
	Ha = function(b) {
		b = parseInt(b);
		return Math.min(Math.max(b, 0), c.videoInfo.totalTime)
	},
	Ea = Object.prototype.hasOwnProperty,
	r = function(b) {
		var d = [],
		c;
		for (c in b) d.push(c + "=" + b[c]);
		return d.join("&")
	},
	J = function(b) {
		if (!b) return "";
		var b = b.toString(),
		d,
		c,
		f,
		i,
		g,
		h;
		f = b.length;
		c = 0;
		for (d = ""; c < f;) {
			i = b.charCodeAt(c++) & 255;
			if (c == f) {
				d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 2);
				d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((i & 3) << 4);
				d += "==";
				break
			}
			g = b.charCodeAt(c++);
			if (c == f) {
				d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 2);
				d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((i & 3) << 4 | (g & 240) >> 4);
				d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((g & 15) << 2);
				d += "=";
				break
			}
			h = b.charCodeAt(c++);
			d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 2);
			d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((i & 3) << 4 | (g & 240) >> 4);
			d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((g & 15) << 2 | (h & 192) >> 6);
			d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(h & 63)
		}
		return d
	}; (function() {
		this.FX = function(d, c, e, g, h, j) {
			this.el = b.get(d);
			this.attributes = c;
			this.duration = e || 0.7;
			this.transition = g && g in FX.transitions ? g: "easeInOut";
			this.callback = h ||
			function() {};
			this.ctx = j || window;
			this.units = {};
			this.frame = {};
			this.endAttr = {};
			this.startAttr = {}
		};
		this.FX.transitions = {
			linear: function(b, d, c, e) {
				return c * b / e + d
			},
			easeIn: function(b, d, c, e) {
				return - c * Math.cos(b / e * (Math.PI / 2)) + c + d
			},
			easeOut: function(b, d, c, e) {
				return c * Math.sin(b / e * (Math.PI / 2)) + d
			},
			easeInOut: function(b, d, c, e) {
				return - c / 2 * (Math.cos(Math.PI * b / e) - 1) + d
			}
		};
		this.FX.prototype = {
			start: function() {
				var b = this;
				this.getAttributes();
				this.duration *= 1E3;
				this.time = (new Date).getTime();
				this.animating = !0;
				this.timer = setInterval(function() {
					var d = (new Date).getTime();
					d < b.time + b.duration ? (b.elapsed = d - b.time, b.setCurrentFrame()) : (b.frame = b.endAttr, b.complete());
					b.setAttributes()
				},
				10)
			},
			ease: function(b, d) {
				return FX.transitions[this.transition](this.elapsed, b, d - b, this.duration)
			},
			complete: function() {
				clearInterval(this.timer);
				this.timer = null;
				this.animating = !1;
				this.callback.call(this.ctx)
			},
			setCurrentFrame: function() {
				for (var b in this.startAttr) if (this.startAttr[b] instanceof Array) {
					this.frame[b] = [];
					for (var d = 0; d < this.startAttr[b].length; d++) this.frame[b][d] = this.ease(this.startAttr[b][d], this.endAttr[b][d])
				} else this.frame[b] = this.ease(this.startAttr[b], this.endAttr[b])
			},
			getAttributes: function() {
				for (var d in this.attributes) switch (d) {
				case "color":
				case "borderColor":
				case "border-color":
				case "backgroundColor":
				case "background-color":
					this.startAttr[d] = c(this.attributes[d].from || b.getStyle(this.el, d));
					this.endAttr[d] = c(this.attributes[d].to);
					break;
				case "scrollTop":
				case "scrollLeft":
					var i = this.el == document.body ? document.documentElement || document.body: this.el;
					this.startAttr[d] = this.attributes[d].from || i[d];
					this.endAttr[d] = this.attributes[d].to;
					break;
				default:
					var g = this.attributes[d].to,
					h = this.attributes[d].units || "px";
					this.attributes[d].from ? i = this.attributes[d].from: (i = parseFloat(b.getStyle(this.el, d)) || 0, "px" != h && document.defaultView && (b.setStyle(this.el, d, (g || 1) + h), i *= (g || 1) / parseFloat(b.getStyle(this.el, d)), b.setStyle(this.el, d, i + h)));
					this.units[d] = h;
					this.endAttr[d] = g;
					this.startAttr[d] = i
				}
			},
			setAttributes: function() {
				for (var d in this.frame) switch (d) {
				case "opacity":
					b.setStyle(this.el, d, this.frame[d]);
					break;
				case "scrollLeft":
				case "scrollTop":
					(this.el == document.body ? document.documentElement || document.body: this.el)[d] = this.frame[d];
					break;
				case "color":
				case "borderColor":
				case "border-color":
				case "backgroundColor":
				case "background-color":
					b.setStyle(this.el, d, "rgb(" + Math.floor(this.frame[d][0]) + "," + Math.floor(this.frame[d][1]) + "," + Math.floor(this.frame[d][2]) + ")");
					break;
				default:
					b.setStyle(this.el, d, this.frame[d] + this.units[d])
				}
			}
		};
		var b = {
			get: function(b) {
				return "string" == typeof b ? document.getElementById(b) : b
			},
			getStyle: function(b, c) {
				var c = d(c),
				e = document.defaultView;
				return e && e.getComputedStyle ? e.getComputedStyle(b, "")[c] || null: "opacity" == c ? (e = b.filters("alpha").opacity, isNaN(e) ? 1 : e ? e / 100 : 0) : b.currentStyle[c] || null
			},
			setStyle: function(b, c, e) {
				"opacity" == c ? (b.style.filter = "alpha(opacity=" + 100 * e + ")", b.style.opacity = e) : (c = d(c), b.style[c] = e)
			}
		},
		d = function() {
			var b = {};
			return function(d) {
				if (b[d]) return b[d];
				var c = d.split("-"),
				e = c[0];
				if (1 < c.length) for (var g = 1,
				h = c.length; g < h; g++) e += c[g].charAt(0).toUpperCase() + c[g].substring(1);
				return b[d] = e
			}
		} (),
		c = function() {
			var b = /^#?(\w{2})(\w{2})(\w{2})$/,
			d = /^#?(\w{1})(\w{1})(\w{1})$/,
			c = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
			return function(e) {
				var g = e.match(b);
				if (g && 4 == g.length) return [parseInt(g[1], 16), parseInt(g[2], 16), parseInt(g[3], 16)];
				if ((g = e.match(c)) && 4 == g.length) return [parseInt(g[1], 10), parseInt(g[2], 10), parseInt(g[3], 10)];
				if ((g = e.match(d)) && 4 == g.length) return [parseInt(g[1] + g[1], 16), parseInt(g[2] + g[2], 16), parseInt(g[3] + g[3], 16)]
			}
		} ()
	})();
	FX.transitions.quadIn = function(b, d, c, f) {
		return c * (b /= f) * b + d
	};
	FX.transitions.quadOut = function(b, d, c, f) {
		return - c * (b /= f) * (b - 2) + d
	};
	FX.transitions.quadInOut = function(b, d, c, f) {
		return 1 > (b /= f / 2) ? c / 2 * b * b + d: -c / 2 * (--b * (b - 2) - 1) + d
	};
	FX.transitions.cubicIn = function(b, d, c, f) {
		return c * (b /= f) * b * b + d
	};
	FX.transitions.cubicOut = function(b, d, c, f) {
		return c * ((b = b / f - 1) * b * b + 1) + d
	};
	FX.transitions.cubicInOut = function(b, d, c, f) {
		return 1 > (b /= f / 2) ? c / 2 * b * b * b + d: c / 2 * ((b -= 2) * b * b + 2) + d
	};
	FX.transitions.quartIn = function(b, d, c, f) {
		return c * (b /= f) * b * b * b + d
	};
	FX.transitions.quartOut = function(b, d, c, f) {
		return - c * ((b = b / f - 1) * b * b * b - 1) + d
	};
	FX.transitions.quartInOut = function(b, d, c, f) {
		return 1 > (b /= f / 2) ? c / 2 * b * b * b * b + d: -c / 2 * ((b -= 2) * b * b * b - 2) + d
	};
	FX.transitions.quintIn = function(b, d, c, f) {
		return c * (b /= f) * b * b * b * b + d
	};
	FX.transitions.quintOut = function(b, d, c, f) {
		return c * ((b = b / f - 1) * b * b * b * b + 1) + d
	};
	FX.transitions.quintInOut = function(b, d, c, f) {
		return 1 > (b /= f / 2) ? c / 2 * b * b * b * b * b + d: c / 2 * ((b -= 2) * b * b * b * b + 2) + d
	};
	FX.transitions.expoIn = function(b, d, c, f) {
		return 0 == b ? d: c * Math.pow(2, 10 * (b / f - 1)) + d - 0.001 * c
	};
	FX.transitions.expoOut = function(b, d, c, f) {
		return b == f ? d + c: 1.001 * c * ( - Math.pow(2, -10 * b / f) + 1) + d
	};
	FX.transitions.expoInOut = function(b, d, c, f) {
		return 0 == b ? d: b == f ? d + c: 1 > (b /= f / 2) ? c / 2 * Math.pow(2, 10 * (b - 1)) + d - 5.0E-4 * c: 1.0005 * (c / 2) * ( - Math.pow(2, -10 * --b) + 2) + d
	};
	FX.transitions.circIn = function(b, d, c, f) {
		return - c * (Math.sqrt(1 - (b /= f) * b) - 1) + d
	};
	FX.transitions.circOut = function(b, d, c, f) {
		return c * Math.sqrt(1 - (b = b / f - 1) * b) + d
	};
	FX.transitions.circInOut = function(b, d, c, f) {
		return 1 > (b /= f / 2) ? -c / 2 * (Math.sqrt(1 - b * b) - 1) + d: c / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + d
	};
	FX.transitions.backIn = function(b, d, c, f, i) {
		i = i || 1.70158;
		return c * (b /= f) * b * ((i + 1) * b - i) + d
	};
	FX.transitions.backOut = function(b, d, c, f, i) {
		i = i || 1.70158;
		return c * ((b = b / f - 1) * b * ((i + 1) * b + i) + 1) + d
	};
	FX.transitions.backBoth = function(b, d, c, f, i) {
		i = i || 1.70158;
		return 1 > (b /= f / 2) ? c / 2 * b * b * (((i *= 1.525) + 1) * b - i) + d: c / 2 * ((b -= 2) * b * (((i *= 1.525) + 1) * b + i) + 2) + d
	};
	FX.transitions.elasticIn = function(b, d, c, f, i, g) {
		if (0 == b) return d;
		if (1 == (b /= f)) return d + c;
		g || (g = 0.3 * f); ! i || i < Math.abs(c) ? (i = c, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(c / i);
		return - (i * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * f - c) * 2 * Math.PI / g)) + d
	};
	FX.transitions.elasticOut = function(b, c, e, f, i, g) {
		if (0 == b) return c;
		if (1 == (b /= f)) return c + e;
		g || (g = 0.3 * f);
		if (!i || i < Math.abs(e)) var i = e,
		h = g / 4;
		else h = g / (2 * Math.PI) * Math.asin(e / i);
		return i * Math.pow(2, -10 * b) * Math.sin((b * f - h) * 2 * Math.PI / g) + e + c
	};
	FX.transitions.elasticBoth = function(b, c, e, f, i, g) {
		if (0 == b) return c;
		if (2 == (b /= f / 2)) return c + e;
		g || (g = f * 0.3 * 1.5);
		if (!i || i < Math.abs(e)) var i = e,
		h = g / 4;
		else h = g / (2 * Math.PI) * Math.asin(e / i);
		return 1 > b ? -0.5 * i * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * f - h) * 2 * Math.PI / g) + c: 0.5 * i * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * f - h) * 2 * Math.PI / g) + e + c
	};
	FX.transitions.backIn = function(b, c, e, f, i) {
		"undefined" == typeof i && (i = 1.70158);
		return e * (b /= f) * b * ((i + 1) * b - i) + c
	};
	FX.transitions.backOut = function(b, c, e, f, i) {
		"undefined" == typeof i && (i = 1.70158);
		return e * ((b = b / f - 1) * b * ((i + 1) * b + i) + 1) + c
	};
	FX.transitions.backBoth = function(b, c, e, f, i) {
		"undefined" == typeof i && (i = 1.70158);
		return 1 > (b /= f / 2) ? e / 2 * b * b * (((i *= 1.525) + 1) * b - i) + c: e / 2 * ((b -= 2) * b * (((i *= 1.525) + 1) * b + i) + 2) + c
	};
	FX.transitions.bounceIn = function(b, c, e, f) {
		return e - FX.transitions.bounceOut(f - b, 0, e, f) + c
	};
	FX.transitions.bounceOut = function(b, c, e, f) {
		return (b /= f) < 1 / 2.75 ? e * 7.5625 * b * b + c: b < 2 / 2.75 ? e * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c: b < 2.5 / 2.75 ? e * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c: e * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c
	};
	FX.transitions.bounceBoth = function(b, c, e, f) {
		return b < f / 2 ? 0.5 * FX.transitions.bounceIn(2 * b, 0, e, f) + c: 0.5 * FX.transitions.bounceOut(2 * b - f, 0, e, f) + 0.5 * e + c
	}; (function(b) {
		function c(b, d) {
			b.timer && clearTimeout(b.timer);
			b.clearAttributes ? b.clearAttributes() : b.onload = b.onreadystatechange = b.onerror = null;
			delete e[d];
			b.parentNode.removeChild(b)
		}
		var e = q.callback = q.callback || {};
		b.jsonp = function(b) {
			b = b || {};
			if (!b.url) throw new TypeError("Param Error");
			var i = b.callback || "callback",
			g = b.data || {},
			j = parseInt(b.time) || 1E4,
			m = "cb_" + Z(6);
			g[i] = "YKU.callback." + m;
			var i = r(g),
			g = b.url,
			g = -1 === g.indexOf("?") ? g + ("?" + i) : g + ("&" + i),
			l = document.createElement("script");
			e[m] = function(c) {
				try {
					"timeout" != l.jsonp && (l.jsonp = "success", b.success && b.success(c))
				} catch(d) {
					h.log("-- JSONP --"),
					h.log(d)
				}
			};
			j && (l.timer = setTimeout(function() {
				l.jsonp = "timeout";
				b.fail && b.fail({
					message: "timeout"
				})
			},
			j));
			l.onreadystatechange = l.onload = function() {
				if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
					l.jsonp !== "timeout" && l.jsonp != "success" && b.fail && b.fail({
						message: "fail"
					});
					c(l, m)
				}
			};
			l.onerror = function() {
				l.jsonp = "error";
				c(l, m);
				b.fail && b.fail({
					message: "error"
				})
			};
			l.src = g;
			document.getElementsByTagName("head")[0].appendChild(l)
		}
	})(q);
	var ka = function() {};
	ka.prototype = {
		cookie: function(b, c, e, f) {
			"string" == typeof b && (f = e, e = c, c = b, b = window);
			if (void 0 !== e) {
				var f = f || {},
				i;
				i = "";
				f.expires && (f.expires.constructor == Date ? i = f.expires: (i = new Date, i.setTime(i.getTime() + 864E5 * f.expires)), i = "; expires=" + i.toGMTString());
				var g = f.path ? "; path=" + f.path: "",
				h = f.domain ? "; domain=" + f.domain: "",
				f = f.secure ? "; secure": "";
				b.document.cookie = [c, "=", encodeURIComponent(e), i, g, h, f].join("")
			} else return (e = b.document.cookie.match(RegExp("(?:\\s|^)" + c + "\\=([^;]*)"))) ? decodeURIComponent(e[1]) : null
		},
		pvid: function() {
			return this.rand(this.cookie("u_id"))
		},
		Mash: function() {
			var b = 4022871197,
			c = function(c) {
				for (var c = c.toString(), d = 0; d < c.length; d++) {
					b += c.charCodeAt(d);
					var i = 0.02519603282416938 * b;
					b = i >>> 0;
					i -= b;
					i *= b;
					b = i >>> 0;
					i -= b;
					b += 4294967296 * i
				}
				return 2.3283064365386963E-10 * (b >>> 0)
			};
			c.version = "Mash 0.9";
			return c
		},
		MRG32k3a: function() {
			var b = this;
			return function(c) {
				var e = 12345,
				f = 12345,
				i = 123,
				g = 12345,
				h = 12345,
				j = 123;
				0 === c.length && (c = [ + new Date]);
				for (var l = b.Mash(), n = 0; n < c.length; n++) e += 4294967296 * l(c[n]),
				f += 4294967296 * l(c[n]),
				i += 4294967296 * l(c[n]),
				g += 4294967296 * l(c[n]),
				h += 4294967296 * l(c[n]),
				j += 4294967296 * l(c[n]);
				var e = e % 4294967087,
				f = f % 4294967087,
				i = i % 4294967087,
				g = g % 4294944443,
				h = h % 4294944443,
				j = j % 4294944443,
				l = null,
				p = function() {
					var b, c;
					b = 1403580 * f - 810728 * e;
					b -= 4294967087 * (b / 4294967087 | 0);
					0 > b && (b += 4294967087);
					e = f;
					f = i;
					i = b;
					c = 527612 * j - 1370589 * g;
					c -= 4294944443 * (c / 4294944443 | 0);
					0 > c && (c += 4294944443);
					g = h;
					h = j;
					j = c;
					return b <= c ? b - c + 4294967087 : b - c
				},
				o = function() {
					return 2.3283064365386963E-10 * p()
				};
				o.uint32 = p;
				o.fract53 = function() {
					return o() + 1.1102230246251565E-16 * (p() & 2097151)
				};
				o.version = "MRG32k3a 0.9";
				o.args = c;
				return o
			} (Array.prototype.slice.call(arguments))
		},
		rand: function(b, c) {
			var c = "undefined" == typeof c ? "": c,
			e = this.MRG32k3a(b || 0, location.href, Date.now());
			return c + ( + new Date).toString(32) + parseInt(1E5 * e()).toString(32)
		},
		seid: function() {
			var b = this.cookie("seid");
			if (!b || +new Date > (parseInt(this.cookie("seidtimeout")) || 0)) b = this.rand(this.cookie("u_id"), "0"),
			this.cookie("seid", b, {
				domain: "youku.com",
				path: "/"
			}),
			b = this.cookie("seid") || 1;
			var c = this.cookie("referhost");
			if (!c || +new Date > (parseInt(this.cookie("seidtimeout")) || 0)) c = (c = /^https?:\/\/[^\/]+/.exec(document.referrer || "")) ? c[0] : "",
			this.cookie("referhost", c, {
				domain: "youku.com",
				path: "/"
			});
			this.cookie("seidtimeout", Date.now() + 18E5, {
				domain: "youku.com",
				path: "/"
			});
			return b
		},
		juid: function() {
			var b = this.cookie("juid");
			b || (b = this.rand(this.cookie("u_id"), "0"), this.cookie("juid", b, {
				expires: 36500,
				domain: "youku.com",
				path: "/"
			}), b = this.cookie("juid") || 1);
			return window.juidStr = b
		}
	};
	var K = {
		"-100": "\u8be5\u89c6\u9891\u6b63\u5728\u8f6c\u7801\u4e2d... , \u8bf7\u7a0d\u5019",
		"-101": "\u8be5\u89c6\u9891\u6b63\u5728\u5ba1\u6838\u4e2d... , \u8bf7\u7a0d\u5019",
		"-102": "\u8be5\u89c6\u9891\u5df2\u88ab\u5c4f\u853d",
		"-103": "\u8be5\u89c6\u9891\u8f6c\u7801\u5931\u8d25",
		"-201": "\u8be5\u89c6\u9891\u88ab\u8bbe\u4e3a\u79c1\u5bc6",
		"-202": "\u8be5\u89c6\u9891\u5df2\u7ecf\u52a0\u5bc6",
		"-203": "\u5bf9\u4e0d\u8d77\uff0c\u60a8\u8f93\u5165\u7684\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
		"-204": "\u7c89\u4e1d\u89c2\u770b\u89c6\u9891",
		"-301": "",
		"-302": "\u4ed8\u8d39\u89c6\u9891\u8d85\u8fc7\u89c2\u770b\u4e0a\u9650\u6b21\u6570",
		"-303": "\u4ed8\u8d39\u89c6\u9891\u4e0b\u7ebf",
		"-306": "\u8d26\u53f7\u5206\u4eab\u4e0d\u5408\u6cd5, IP\u4e0a\u9650",
		"-307": "\u4ed8\u8d39\u89c6\u9891, \u672a\u767b\u5f55",
		"-401": "\u96c6\u56e2\u64ad\u63a7\u7cfb\u7edf\u9650\u5236",
		"-402": "\u7528\u6237\u6ca1\u6709\u6743\u9650\u89c2\u770b(\u9632\u76d7\u94fenonce)",
		"-501": "\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef",
		"-601": "\u53c2\u6570\u9519\u8bef"
	},
	R = function(b, d) {
		this.player = b;
		this._handle = {};
		this._feedback = c.get(".x-feedback");
		this._message = this._feedback.getElementsByClassName("x-message")[0];
		this._messagetxt = this._message.getElementsByClassName("x-message-txt")[0];
		this._messagebtn = this._message.getElementsByClassName("x-message-btn")[0];
		this._errorcode = this._error = null;
		this.init(d);
		this.bindEvent()
	};
	R.prototype = {
		init: function(b) {
			if (b && (b.data && b.data && b.data.error) && (c.hide(c.get(".x-video-button")), c.hide(c.get(".x-console")), this._vid = b.data.id, this._title = b.data.video.title, this._userid = b.data.video.userid, this._error = b.data.error, this._errorcode = parseInt(b.data.error.code), !( - 301 == this._errorcode || -307 == this._errorcode || -308 == this._errorcode))) {
				switch (this._errorcode) {
				case - 100 : this.setMessage(K["-100"]);
					g.onError({
						code: "1000",
						message: "\u89c6\u9891\u8f6c\u7801\u4e2d"
					},
					"\u89c6\u9891\u8f6c\u7801\u4e2d");
					break;
				case - 101 : this.setMessage(K["-101"]);
					g.onError({
						code: "1000",
						message: "\u89c6\u9891\u5ba1\u6838\u4e2d"
					},
					"\u89c6\u9891\u5ba1\u6838\u4e2d");
					break;
				case - 102 : this.setMessage(K["-102"]);
					this.setButton("\u641c\u7d22", this.search);
					g.onError({
						code: "2999",
						message: "\u89c6\u9891\u5df2\u88ab\u5c4f\u853d"
					},
					"\u89c6\u9891\u5df2\u88ab\u5c4f\u853d");
					break;
				case - 103 : this.setMessage(K["-103"]);
					this.bind_feedback = c.bindAsEventListener(this, this.feedback);
					this.setButton("\u5728\u7ebf\u53cd\u9988", this.bind_feedback);
					g.onError({
						code: "2999",
						message: "\u89c6\u9891\u8f6c\u7801\u5931\u8d25"
					},
					"\u89c6\u9891\u8f6c\u7801\u5931\u8d25");
					break;
				case - 201 : this.setMessage(K["-201"]);
					this.bind_contact = c.bindAsEventListener(this, this.contactOwner);
					this.setButton("\u8054\u7cfb\u4e0a\u4f20\u8005", this.bind_contact);
					g.onError({
						code: "1000",
						message: "\u79c1\u5bc6\u89c6\u9891\uff0c\u7528\u6237\u6ca1\u6709\u6743\u9650\u89c2\u770b"
					},
					"\u79c1\u5bc6\u89c6\u9891\uff0c\u7528\u6237\u6ca1\u6709\u6743\u9650\u89c2\u770b");
					break;
				case - 202 : this._messagetxt.innerHTML = "<input type=password placeholder=\u8f93\u5165\u5bc6\u7801\u89c2\u770b\u89c6\u9891 class=x-message-input>";
					this.bind_inputpassword = c.bindAsEventListener(this, this.inputPassword);
					this.setButton("\u786e\u5b9a", this.bind_inputpassword);
					break;
				case - 203 : this._messagetxt.innerHTML = '<input type=password placeholder="\u5bf9\u4e0d\u8d77,\u60a8\u8f93\u5165\u7684\u5bc6\u7801\u9519\u8bef,\u8bf7\u91cd\u65b0\u8f93\u5165" class=x-message-input>';
					this.bind_inputpassword = c.bindAsEventListener(this, this.inputPassword);
					this.setButton("\u786e\u5b9a", this.bind_inputpassword);
					break;
				case - 306 : this._messagetxt.innerHTML = '<a style="color:#3399e0;text-decoration:underline;position:relative;top:3px;" href="' + b.data.error.link + '" target="_blank">' + b.data.error.note + "</a>";
					g.onError({
						code: "2008",
						message: "\u8d26\u53f7\u7591\u4f3c\u88ab\u5206\u4eab"
					},
					"\u5e10\u53f7\u5206\u4eab\u4e0d\u5408\u6cd5");
					break;
				default:
					this.setMessage(b.data.error.note),
					g.onError({
						code: "1000",
						message: b.data.error.note
					},
					b.data.error.note)
				}
				this.show();
				this.showMessage()
			}
		},
		bindEvent: function() {},
		show: function() {
			c.show(this._feedback)
		},
		hide: function() {
			c.hide(this._feedback)
		},
		showMessage: function() {
			c.show(this._message)
		},
		hideMessage: function() {
			c.hide(this._message)
		},
		setMessage: function(b) {
			this._messagetxt.innerHTML = "<p>" + b + "</p>"
		},
		setButton: function(b, d) {
			this._messagebtn.innerHTML = "<button type=button class=x-btn>" + b + "</button>";
			var e = this._message.getElementsByClassName("x-btn")[0];
			c.addEventHandler(e, "click", d)
		},
		search: function() {
			window.location.href = c.https + "//www.soku.com/search_video/q_" + this._title
		},
		feedback: function() {
			window.location.href = c.https + "//www.youku.com/service/feed/subtype/4/"
		},
		contactOwner: function() {
			window.location.href = c.https + "//i.youku.com/u/id_" + this._userid
		},
		onPasswordConfirm: function() {},
		inputPassword: function() {
			var b = this._messagetxt.getElementsByClassName("x-message-input")[0],
			d = b.value;
			if (null == d || 0 == d.replace(/\s/g, "").length) b.value = "",
			b.placeholder = "\u5bc6\u7801\u4e3a\u7a7a\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165";
			else {
				var e = this.player;
				c.password = d;
				n.start(this._vid, d, c.config.content,
				function(b, i) {
					c.hide(c.get(".x-feedback"));
					c.password = d;
					c.show(c.get(".x-video-button"));
					c.hide(c.get(".x-message"));
					e.startPlay(b, i)
				})
			}
		}
	};
	var la = function(b) {
		this._handler = {};
		this.player = b;
		this._fullflag = null;
		this.init();
		this._fullscreen = c.get(".x-fullscreen");
		this._btn = this._fullscreen.getElementsByTagName("button")[0];
		this._btnb = this._btn.getElementsByTagName("b")[0];
		this.bindEvent()
	};
	la.prototype = {
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		dispatch: function(b) {
			b && this._handler[b.type] && (b._target = this, this._handler[b.type](b))
		},
		init: function() {},
		bindEvent: function() {
			this.bind_switch = c.bindAsEventListener(this, this.switchFullScreen);
			c.addEventHandler(this._fullscreen, "click", this.bind_switch, !0)
		},
		removeEvent: function() {
			c.removeEventHandler(this._fullscreen, "click", this.bind_switch, !0)
		},
		zoomStatus: function() {
			return this._btnb.className
		},
		fullFlag: function() {
			if (null !== this._fullflag) return this._fullflag;
			var b = this.player.video.fullscreenchange;
			return this._fullflag = "undefined" != typeof b ? b: !1
		},
		switchFullScreen: function(b) {
			var d = b.method || "c",
			e = this._btnb.className;
			c.config.events && c.config.events.onSwitchFullScreen ? ( - 1 === e.indexOf("in") ? (this._fullflag = !1, this._btnb.className = e.replace(/out/g, "in"), this.player.controls.hideShowListBtn(), this.player._reporter.sendUserActionReport("xexfs", d), this.player.adjustVideoRatio(1), this.dispatch({
				type: "exitfullscreen"
			})) : (this._fullflag = !0, this._btnb.className = e.replace(/in/g, "out"), this.player.controls.showShowListBtn(), this.player._reporter.sendUserActionReport("xenfs", d), this.player.adjustVideoRatio(), this.dispatch({
				type: "enterfullscreen"
			})), d = c.config.events.onSwitchFullScreen, d(b, e)) : (b = document.getElementById("x-player"), -1 === e.indexOf("in") ? (this.player._reporter.sendUserActionReport("xexfs", d), document.webkitCancelFullScreen && (this._btnb.className = e.replace(/out/g, "in"), this._fullflag = !1, document.webkitCancelFullScreen())) : (this.player._reporter.sendUserActionReport("xenfs", d), b.webkitRequestFullScreen ? (this._btnb.className = e.replace(/in/g, "out"), this._fullflag = !0, b.webkitRequestFullScreen()) : this.player.video.webkitSupportsFullscreen && 1 <= this.player.video.readyState && this.player.video.webkitEnterFullscreen()))
		}
	};
	var ma = function(b, d) {
		this.handler = {};
		this.player = b;
		this.information = c.get(".x-video-info");
		this.title = this.information.getElementsByClassName("x-title")[0];
		this.videoState = this.information.getElementsByClassName("x-video-state")[0];
		c.hide(this.videoState);
		this.init(d)
	};
	ma.prototype = {
		init: function(b) {
			this.title.innerHTML = b.data.show && b.data.show.title ? b.data.show.title.substr(0, 20) : b.data.video.title.substr(0, 20);
			if (b.data.trial || b.data.error) if ("episodes" == c.v.data.trial.type) this.show();
			else return;
			this.videoState.innerHTML = "<span>\u65f6\u957f: " + c.getTime(parseInt(b.data.video.seconds)) + "</span>";
			this.show()
		},
		show: function() {
			if (c.v.data.trial) if ("episodes" == c.v.data.trial.type) c.show(this.information);
			else return;
			c.show(this.information)
		},
		hide: function() {
			c.hide(this.information)
		},
		bindEvent: function() {}
	};
	var na = function(b) {
		this.player = b;
		this._tip = c.get(".x-prompt");
		this.init()
	};
	na.prototype = {
		init: function() {
			this._tip.innerHTML = '<div class=x-prompt-mode><div class=x-prompt-time></div><div class=x-prompt-forward>\u5feb\u8fdb</div><div class=x-prompt-back>\u5feb\u9000</div><div class=x-mask></div></div><div class=x-prompt-status style="display:none"><div class=x-prompt-txt></div><div class=x-mask></div></div>';
			this._mode = this._tip.getElementsByClassName("x-prompt-mode")[0];
			this._time = this._tip.getElementsByClassName("x-prompt-time")[0];
			this._back = this._tip.getElementsByClassName("x-prompt-back")[0];
			this._forward = this._tip.getElementsByClassName("x-prompt-forward")[0];
			this._status = this._tip.getElementsByClassName("x-prompt-status")[0];
			this._statusTxt = this._tip.getElementsByClassName("x-prompt-txt")[0]
		},
		setProgress_: function(b) { ! 0 != this._progressFlag && (this._time.innerHTML = c.getTime(parseInt(b)))
		},
		setStatus: function(b) {
			this._statusTxt.innerHTML = b;
			this.showStatus()
		},
		hideStatus: function() {
			c.hide(this._status);
			c.hide(this._tip)
		},
		showStatus: function() {
			c.hide(this._mode);
			c.show(this._status);
			c.show(this._tip)
		},
		setTip: function(b, d) {
			this._progressFlag = !0;
			this._time.innerHTML = c.getTime(Ha(b + d));
			0 >= d ? (c.show(this._back), c.hide(this._forward)) : (c.show(this._forward), c.hide(this._back));
			var e = this;
			setTimeout(function() {
				e._progressFlag = false
			},
			1E3)
		},
		isVisible: function() {
			return "none" != this._tip.style.display
		},
		hide: function() {
			c.hide(this._tip)
		},
		show: function() {
			c.show(this._mode);
			c.hide(this._status);
			c.show(this._tip)
		},
		autoHide: function(b) {
			var c = this;
			setTimeout(function() {
				c.hide()
			},
			b || 1E3)
		}
	};
	var oa = function(b, d) {
		var e = !0;
		this._handler = {};
		if (c.isWeixin) c.get(".x-localization").style.display = "none";
		else if (!d || !d.data || !d.data || !d.data.dvd || !d.data.dvd.audiolang) c.get(".x-localization").style.display = "none";
		else {
			if (c.videoInfo._videoSegsDic) {
				var f = c.videoInfo._videoSegsDic.streams,
				i = !1,
				g;
				for (g in f) {
					e = "";
					for (k in f[g]) e += k + ","; (e = -1 < e.indexOf("3gphd") || -1 < e.indexOf("mp4") ? !1 : !0) && (i = !0)
				}
				if (e && i) {
					c.get(".x-localization").style.display = "none";
					return
				}
			}
			this.player = b;
			this._language = c.get(".x-localization");
			this.init(d);
			this.bindEvent();
			this._button = this._language.getElementsByTagName("button")[0];
			this._panel = this._language.getElementsByTagName("div")[0];
			this._nodes = this._language.getElementsByTagName("li")
		}
	};
	oa.prototype = {
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		dispatch: function(b) {
			b && this._handler[b.type] && (b._target = this, this._handler[b.type](b))
		},
		init: function(b) {
			for (var b = b.data,
			c = b.dvd.audiolang,
			e = ["<button class=x-control-btn>", "", "</button>"], f = ["<div class=x-panel><ul>", "", "</ul><div class=x-mask></div>", "</div>"], i = [], g = 0; g < c.length; g++) {
				var h = "",
				h = h + ("<li data-vid=" + c[g].vid),
				h = h + (" data-language=" + c[g].lang),
				h = h + (" data-language-code=" + c[g].langcode);
				c[g].vid == b.video.encodeid ? (e[1] = c[g].lang, h += " class=selected>") : h += ">";
				h += c[g].lang + "</li>";
				i[g] = h
			}
			f[1] = i.join("");
			this._language.innerHTML = e.join("") + f.join("")
		},
		bindEvent: function() {
			var b = this._language.getElementsByTagName("li");
			if (0 != b.length) {
				this.bind_toggle = c.bindAsEventListener(this, this.toggleLanguagePanel);
				c.addEventHandler(this._language, "click", this.bind_toggle);
				for (var d = 0; d < b.length; d++) c.addEventHandler(b[d], "click", c.bindAsEventListener(this, this.switchLanguage))
			}
		},
		removeEvent: function() {
			null != this._language && c.removeEventHandler(this._language, "click", this.bind_toggle)
		},
		hide: function(b) {
			if (this._language) {
				var c = this._panel;
				this._language.className = this._language.className.replace(/[\s]*pressed/g, "");
				c.style.display = "none";
				b || this.dispatch({
					type: "settinghide"
				})
			}
		},
		toggleLanguagePanel: function(b) {
			var c = this._panel; - 1 === this._language.className.indexOf("pressed") ? (this._language.className += " pressed", c.style.display = "block", this.dispatch({
				type: "settingshow"
			}), this.player._reporter.sendUserActionReport("xcl", "c")) : (this.hide(), this.player._reporter.sendUserActionReport("xhl", "c"));
			this.dispatch(b)
		},
		switchLanguage: function(b) {
			this.player._reporter.sendUserActionReport("xsl", "c");
			b.stopPropagation();
			var b = b.target,
			d = null;
			b.getAttribute ? (d = b.getAttribute("data-vid"), b.getAttribute("data-language"), b = b.getAttribute("data-language-code")) : (d = b.parentNode.getAttribute("data-vid"), b.parentNode.getAttribute("data-language"), b = b.parentNode.getAttribute("data-language-code"));
			for (var e = this._nodes,
			f = 0; f < e.length; f++) if (e[f].getAttribute("data-vid") == d) {
				if ( - 1 !== e[f].className.indexOf("selected")) {
					this.toggleLanguagePanel();
					return
				}
				e[f].innerHTML = e[f].getAttribute("data-language");
				e[f].className += " selected";
				this._button.innerHTML = e[f].getAttribute("data-language")
			} else e[f].innerHTML = e[f].getAttribute("data-language"),
			e[f].className = e[f].className.replace(/[\s]*selected/g, "");
			this.toggleLanguagePanel();
			this.dispatch({
				type: "settingdone"
			});
			var i = this.player,
			g = this.player.currentTime;
			v.log("switchLanguage vid = " + d);
			c.config.nextAutoPlay = 1;
			if (null != c.videoInfo._videoSegsDic && null != c.videoInfo._videoSegsDic.streams[b]) {
				if ("m3u8" == c.config.content) c.defaultLanguage = b,
				i.video.src = c.m3u8src_v2(d, c.defaultVideoType);
				else {
					d = c.videoInfo._videoSegsDic.streams[b];
					if (d[c.defaultVideoType]) c.defaultLanguage = b;
					else {
						e = ["3gphd", "mp4"];
						for (f = 0; f < e.length; f++) if (d[e[f]]) {
							c.defaultVideoType = e[f];
							c.defaultLanguage = b;
							break
						}
					}
					i.video.src = c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType][0].src
				}
				i.video.load();
				i.video.play()
			}
			var h = 0;
			i.video.addEventListener("canplay",
			function() {
				if (h !== 1) {
					h = 1;
					i.seek(g)
				}
			})
		}
	};
	var l = {
		setItem: function(b, c) {
			try {
				window.localStorage.setItem(b, c)
			} catch(e) {}
		},
		appendItem: function(b, c) {
			"phase" == b && !this.phaseTag && (this.phaseTag = !0, l.removeItem("phase"));
			try {
				var e = l.getItem(b);
				null !== e && (c = e + "-" + c);
				window.localStorage.setItem(b, c)
			} catch(f) {}
		},
		getItem: function(b) {
			try {
				return window.localStorage.getItem(b)
			} catch(c) {
				return null
			}
		},
		removeItem: function(b) {
			try {
				window.localStorage.removeItem(b)
			} catch(c) {}
		}
	},
	pa = function(b) {
		this.player = b;
		this._progress = c.get(".x-progress-mini");
		this._track = this._progress.getElementsByClassName("x-progress-track-mini")[0];
		this._play = this._progress.getElementsByClassName("x-progress-play-mini")[0];
		this._load = this._progress.getElementsByClassName("x-progress-load-mini")[0];
		this._handler = {};
		this.bindEvent();
		this.resetProgress();
		this.hide()
	};
	pa.prototype = {
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		bindEvent: function() {},
		removeEvent: function() {},
		dispatch: function(b) {
			if (b && this._handler[b.type]) this._handler[b.type]()
		},
		setProgress: function(b, d) {
			var e = Math.min(b, c.videoInfo.totalTime);
			this.playTime = e;
			var f = e / c.videoInfo.totalTime;
			this._play.style.width = 100 * f + "%"; ! 0 !== d && (this.loadTime = e += Math.max(this.player.bufferedEnd() - b, 0), f = e / c.videoInfo.totalTime + 0.05, this._load.style.width = 100 * Math.min(Math.max(f, 0), 1) + "%")
		},
		resetProgress: function() {
			this._play.style.width = "0%";
			this._load.style.width = "0%"
		},
		show: function() {
			this._progress.style.display = "block"
		},
		hide: function() {
			this._progress.style.display = "none"
		}
	};
	var qa = function(b, d) {
		this._handler = {};
		this._hasPayInfo = !1;
		this._payInfo = c.get(".x-pay", b.root);
		this._text = c.get(".x-pay-txt", this._payInfo);
		this._title = this._text.getElementsByTagName("h1")[0];
		this._vip = this._text.getElementsByTagName("em")[0];
		this._tip = c.get(".x-pay-tips", this._payInfo);
		this._button = c.get(".x-pay-btn", this._payInfo);
		this._tryBtn = c.get(".x-btn-try", this._button);
		this._payBtn = c.get(".x-btn-pay", this._button);
		this._panel = c.get(".x-pay-panel", b.root);
		this._panelTitle = c.get(".x-pay-txt", this._panel);
		this._panelTip = c.get(".x-pay-title", this._panel);
		this._panelTry = c.get(".x-try", this._panel);
		this._panelPay = c.get(".x-buy", this._panel);
		this.player = b;
		this.init(d)
	};
	qa.prototype = {
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		dispatch: function(b) {
			b && this._handler[b.type] && (b._target = this, this._handler[b.type](b))
		},
		bindEvent: function() {
			this.bind_try = c.bindAsEventListener(this, this.play);
			this.bind_pay = c.bindAsEventListener(this, this.pay);
			c.addEventHandler(this._tryBtn, "touchend", this.bind_try);
			c.addEventHandler(this._payBtn, "touchend", this.bind_pay);
			c.addEventHandler(this._panelTry, "touchend", this.bind_try);
			c.addEventHandler(this._panelPay, "touchend", this.bind_pay)
		},
		removeEvent: function() {
			c.removeEventHandler(this._tryBtn, "touchend", this.bind_try);
			c.removeEventHandler(this._payBtn, "touchend", this.bind_pay);
			c.addEventHandler(this._panelTry, "touchend", this.bind_try);
			c.addEventHandler(this._panelPay, "touchend", this.bind_pay)
		},
		init: function(b) {
			var c = this,
			e = {},
			f = !0,
			i = b.data.video;
			if (b.data.trial && i.type && "episodes" != b.data.trial.type) {
				i = i.type.join(",") + ",";
				if (! (0 <= i.indexOf("fee,"))) if (0 <= i.indexOf("channel_vip,")) f = !1;
				else return;
				"vod" == this._type ? (e.product_desc = "<\u4ed8\u8d39\u5f71\u7247>", e.buy_desc = "\u7acb\u5373\u8d2d\u4e70") : (e.product_desc = "<\u4ed8\u8d39\u5305\u6708\u5f71\u7247>", e.buy_desc = "\u5f00\u901a\u4f1a\u5458");
				this._type = b.data.show.pay_type;
				if (!f && b.data.error) switch (parseInt(b.data.error.code)) {
				case - 301 : break;
				case - 307 : e.product_desc = "<\u4ed8\u8d39\u8282\u76ee\uff0c\u8bf7\u5148\u767b\u5f55\uff01>";
					e.buy_desc = "";
					break;
				default:
					e.product_desc = "<\u81ea\u9891\u9053\u4f1a\u5458\u89c6\u9891>",
					e.buy_desc = ""
				}
				c._hasPayInfo = !0;
				this._tryDuration = parseInt(b.data.trial.time || 0);
				this.player.tryDuration = this._tryDuration;
				h.log("try = " + this._tryDuration);
				this.processData(e, b);
				this.bindEvent();
				this._payData = e;
				f && c.getData({
					vid: b.data.id
				},
				function(e) {
					c._payData = e;
					c.processData(e, b);
					b.data.error && c.showTip()
				},
				function() {
					b.data.error && c.showTip()
				});
				0 >= this._tryDuration ? this.showTip() : this.show()
			}
		},
		processData: function(b, d) {
			var e = b.product_desc || "",
			f = d.data.video.title;
			12 < f.length && (f = f.substr(0, 12) + "...");
			e = " " + e.replace(/<[^(<||>)]{0,}>/g,
			function(b) {
				var c = b.indexOf("<"),
				d = b.indexOf(">");
				return b.substring(0, c) + " <span class=x-vip>" + b.substring(c + 1, d) + "</span> " + b.substring(d + 1) + " "
			});
			this._title.innerHTML = f + e;
			this._payBtn.innerHTML = b.buy_desc;
			this._panelTitle.innerHTML = "<h1>" + d.data.video.title + "</h1>";
			this._panelTip.innerHTML = '<i class="x-icon-prompt"></i>' + e; (this._panelPay.innerHTML = b.buy_desc) ? (this._payBtn.style.cssText = "", this._panelPay.style.cssText = "") : (c.hide(this._payBtn), c.hide(this._panelPay))
		},
		getData: function(b, d, e) {
			q.jsonp({
				url: c.https + "//vip.youku.com/",
				data: {
					c: "xhr",
					a: "h5_player_get_pay_info",
					video_id: b.vid
				},
				success: function(b) {
					b.code && b.result ? d(b.result) : e(b)
				},
				fail: function(b) {
					e(b)
				}
			})
		},
		play: function() {
			if ((g.isIPHONE || g.isIPOD) && null != c.v.data.trial) this.player.video.style.display = "block";
			0 === this.activeTime || this.player.currentTime >= this._tryDuration ? (this.player.replay(), this.activeTime = -1) : this.player.video.load();
			this.player._reporter.sendUserActionReport("xtry", "c");
			c.hide(this._panel)
		},
		pay: function() {
			this.player.video.pause();
			this._payData.buy_link ? window.open(this._payData.buy_link, "", "", !1) : (c.v.data.pay && c.v.data.pay.h5_caseurl && window.open(c.v.data.pay.h5_caseurl, "", "", !1), this.player._reporter.sendUserActionReport("xbuy", "c"))
		},
		hide: function() {
			this._payInfo && (this._payInfo.style.display = "none")
		},
		show: function() { ! 1 != this._hasPayInfo && (this._payInfo.style.display = "block", 0 >= this._tryDuration && c.hide(this._tryBtn))
		},
		isBlock: function() {
			return "block" == this._payInfo.style.display
		},
		showTip: function() {
			this._hasPayInfo && (this._panel.style.display = "block", 0 >= this._tryDuration && c.hide(this._panelTry))
		},
		hideTip: function() {
			this._hasPayInfo && c.hide(this._panel)
		},
		clearTip: function() {
			this._tip.innerHTML = ""
		},
		hasPayInfo: function() {
			return this._hasPayInfo
		},
		tryDuration: function() {
			return this._tryDuration
		}
	};
	var ra = function(b, d, e) {
		this.player = b;
		this._videoInfo = d;
		this.hasPausead = !1;
		this._limitTime = 1E5;
		this._html5_disable = !1;
		b = this._videoInfo.data;
		this.cateId = b.video.category_id;
		this.statCommon = new ka;
		this._limitVip = !0 == b.user.vip || (b.pay && !0 == b.pay.can_play ? !0 : !1);
		this.needOpen = this._isLimit = !1;
		var d = parseInt(c.videoInfo.totalTime, 10),
		f = b.show && b.show.showkind;
		if (g.isIPAD) {
			if (f && f.length && -1 != f.indexOf("PGC") || b.controller && !0 == b.controller.app_disable) {
				this._isLimit = !1;
				return
			}
			this._isLimit = !0;
			b.trial && "h5" == b.trial.type ? (this.needOpen = !0, this._limitTime = b.trial.time || 600) : (this.needOpen = !1, this._limitTime = d);
			if (!this._limitVip) {
				if (600 <= d) switch (this.cateId) {
				case 100:
				case 103:
				case 176:
				case 95:
				case 90:
					this.needOpen = !0,
					this._limitTime = 600
				}
				99 == this.cateId && 300 <= d && (this.needOpen = !0, this._limitTime = 300)
			}
			try {
				v.log(playPageUrl)
			} catch(i) {
				e && (this._isLimit = !1),
				this.needOpen = !1,
				this._limitTime = d
			}
		}
		this._isLimitNormal = b.controller && !0 == b.controller.html5_disable;
		this._isEpisodes = b.trial && "episodes" == b.trial.type;
		this._isCreated = !1;
		this.xplayer = c.get("#x-player");
		c.videoInfo.totalTime = d > this._limitTime ? this._limitTime: d;
		if (this._isLimit || this._isLimitNormal) this._html5_disable = !0;
		this._html5_disable && (this.player.tryDuration = this._limitTime)
	};
	ra.prototype = {
		create: function() {
			var b = this;
			if (!this._isCreated) {
				var d;
				d = 99 == this.cateId && this.needOpen ? "x-app-guide-5min": 600 == c.videoInfo.totalTime ? "x-app-guide": "x-app-guide-other";
				this._isLimit && (this.xplayer.appendChild(this._createTemplate("x-app-bg", "&nbsp;")), this.xplayer.appendChild(this._createTemplate(d, '<div class="x-app-guide-par"><p class="x-btn-closep">&nbsp;</p><div class="x-app-openapp"></div></div>')), this._content = c.get("." + d), this._bg = document.querySelectorAll(".x-app-bg")[0], this._closeBtn = this._content.getElementsByClassName("x-btn-closep")[0], this._downloadBtn = this._content.getElementsByClassName("x-app-openapp")[0], this._closeBtn.addEventListener("touchend",
				function() {
					b.limitAppHide()
				},
				!1), this._downloadBtn.addEventListener("touchend",
				function() {
					b.openApp()
				},
				!1), this._isCreated = !0)
			}
		},
		_createTemplate: function(b, c) {
			var e = document.createElement("div");
			e.className = b;
			e.innerHTML = c;
			return e
		},
		limitAppShow: function() {
			this._isLimit && (this.player.video.pause(), this._isCreated ? (this._content.style.display = "block", this._bg.style.display = "block") : this.create())
		},
		limitAppEnd: function() {
			if (this._isLimit && this._content) {
				this.player.video.pause();
				for (var b = "x-video-logo x-video-loading x-video-info x-video-button x-feedback x-pay x-pay-panel x-advert x-ad-pause x-prompt x-dashboard x-showlist x-tips x-trigger".split(" "), c = 0, e = b.length; c < e; c++) {
					var f = document.querySelectorAll("." + b[c]);
					f && this.xplayer.removeChild(f[0])
				}
				this._content.style.display = "block";
				this._bg.style.display = "block";
				this.needOpen && this.openApp()
			}
		},
		limitAppHide: function() {
			this._isLimit && (this._content.style.display = "none", this._bg.style.display = "none")
		},
		onDownloadClick: function() {
			g.isAndroid ? window.open(c.https + "//dl.m.cc.youku.com/android/phone/Youku_Android_xianbobofangqi.apk") : window.location.href = c.https + "//hz.youku.com/red/click.php?tp=1&cp=4007554&cpp=1000673&url=//itunes.apple.com/cn/app/id394075284?l=cn&mt=8"
		},
		toReload: function() {
			g.Log(c.https + "//hz.youku.com/red/click.php?tp=1&cp=4009216&cpp=1000752&url=");
			setTimeout(function() {
				window.location.reload()
			},
			500)
		},
		getYoukuAppSchema: function(b, d) {
			var e, f = [];
			d ? e = c.https + "//iosport.youku.com/ipad/ulink?": (e = "youku://", "ipad" == b.client ? e = "youkuhd://": "isAndroidChrome" == b.client && (e = "intent://"), e += "play?");
			f.push("vid=" + b.id);
			f.push("pid=" + b.pid);
			f.push("guid=" + b.guid);
			f.push("idfa=" + b.idfa);
			f.push("ouid=" + b.ouid);
			f.push("source=" + b.source);
			f.push("ua=" + b.ua);
			f.push("ver=" + b.ver);
			f.push("datetime=" + b.datetime);
			f.push("from=" + encodeURIComponent(window.location.href));
			f.push("pagetype=1");
			f.push("cookieid=" + b.cookieid);
			f.push("tuid=" + b.tuid);
			f.push("refer=" + (b.refer || "87c959fb273378eb"));
			f.push("special=" + b.special);
			f.push("sender=" + b.sender);
			e += f.join("&");
			"isAndroidChrome" == b.client && (e += "#Intent;scheme=youku;package=com.youku.phone;end;");
			return e
		},
		openApp: function() {
			var b = navigator.userAgent,
			c = b.toLowerCase();
			/iPhone/.test(b) || /iPod/.test(b) || /iPad/.test(b);
			var e = function() {
				if (b) {
					var c = /OS (\d+_\d(_\d)?)/.exec(b);
					if (!c) return null;
					c = c[1].split("_").map(function(b) {
						return parseInt(b, 10)
					});
					return {
						major: c[0],
						minor: c[1],
						patch: c[2] || 0
					}
				}
			} (),
			c = b.toLowerCase(),
			c = -1 < c.indexOf("micromessenger") ? "wechat": -1 < c.indexOf("ucbrowser") ? "uc": -1 < c.indexOf("weibo") ? "weibo": "other",
			f = !1;
			8 < e.major && -1 == b.toLowerCase().indexOf("youku") && (f = !0);
			this.YoukuAppSchema = this.getYoukuAppSchema({
				id: this._videoInfo.data.video.encodeid,
				client: g.isIPAD && "ipad" || -1 != b.indexOf("Android") && -1 < b.indexOf("Chrome") && null == b.match(/Chrome\/\d+\.0\.0\.0/i) && "androidChrome",
				pid: "87c959fb273378eb",
				guid: this.statCommon.seid(),
				idfa: "",
				ouid: "",
				source: "mplaypage4",
				ua: c,
				ver: "",
				datetime: Math.floor( + new Date / 1E3),
				refer: "pad-play",
				cookieid: this.statCommon.juid(),
				tuid: 0,
				special: 0,
				sender: 1
			},
			f);
			8 >= e.major ? (c = document.createElement("iframe"), c.height = 0, c.width = 0, c.frameBorder = "no", c.src = this.YoukuAppSchema, document.getElementsByTagName("body")[0].appendChild(c)) : window.location.href = this.YoukuAppSchema
		},
		isLimit: function() {
			return this._isLimit
		},
		limitTime: function() {
			return this._limitTime
		}
	};
	var G = {
		2 : "2\u500d",
		"1.5": "1.5\u500d",
		1 : "\u5e38\u901f",
		"0.8": "0.8\u500d"
	},
	sa = function(b, d) {
		this._handler = {}; ! c.isWeixin && g.isIPAD7 && (this.player = b, this.playRate = c.get(".x-playspeed"), this.init(d), this.bindEvent(), this.button = this.playRate.getElementsByTagName("button")[0], this.panel = this.playRate.getElementsByTagName("div")[0], this.nodes = this.playRate.getElementsByTagName("li"), c.show(this.playRate))
	};
	sa.prototype = {
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		dispatch: function(b) {
			b && this._handler[b.type] && (b._target = this, this._handler[b.type](b))
		},
		init: function() {
			for (var b = ["<button class=x-control-btn>", "", "</button>"], c = ['<div class=x-panel style="display:none"><ul>', "", "</ul><div class=x-mask></div>", "</div>"], e = "", f = [], g = ["2", "1.5", "1", "0.8"], h = 0; h < g.length; h++) {
				var j = g[h],
				m = "",
				l = "";
				"1" == j && (m = "", b[1] = G[j], l = " class=selected");
				e += "<li data-vtype=" + j + l + ">" + m + G[j] + "</li>";
				f.push(G[j])
			}
			c[1] = e;
			this.playRate.innerHTML = b.join("") + c.join("")
		},
		bindEvent: function() {
			var b = this.playRate.getElementsByTagName("li");
			if (0 != b.length) {
				this.bind_toggle = c.bindAsEventListener(this, this.toggleRatePanel);
				c.addEventHandler(this.playRate, "click", this.bind_toggle);
				for (var d = 0; d < b.length; d++) c.addEventHandler(b[d], "click", c.bindAsEventListener(this, this.switchRate))
			}
		},
		removeEvent: function() {
			null != this.playRate && c.removeEventHandler(this.playRate, "click", this.bind_toggle)
		},
		hide: function(b) {
			if (this.playRate) {
				var c = this.panel;
				this.playRate.className = this.playRate.className.replace(/[\s]*pressed/g, "");
				c.style.display = "none";
				b || this.dispatch({
					type: "settinghide"
				})
			}
		},
		toggleRatePanel: function(b) {
			var c = this.panel; - 1 === this.playRate.className.indexOf("pressed") ? (this.playRate.className += " pressed", c.style.display = "block", this.player._reporter.sendUserActionReport("xcra", "c"), this.dispatch({
				type: "settingshow"
			})) : (this.hide(), this.player._reporter.sendUserActionReport("xhra", "c"));
			this.dispatch(b)
		},
		switchRate: function(b) {
			b.stopPropagation();
			var c = b.target,
			b = null,
			b = c.getAttribute ? c.getAttribute("data-vtype") : c.parentNode.getAttribute("data-vtype");
			this.player._reporter.sendUserActionReport("xsra", "c", {
				rate: b
			});
			for (var c = this.button,
			e = this.nodes,
			f = 0; f < e.length; f++) if (e[f].getAttribute("data-vtype") == b) {
				if ( - 1 !== e[f].className.indexOf("selected")) {
					this.toggleRatePanel();
					return
				}
				e[f].innerHTML = G[b];
				e[f].className += " selected";
				c.innerHTML = G[b]
			} else {
				var g = e[f].getAttribute("data-vtype");
				e[f].innerHTML = G[g];
				e[f].className = e[f].className.replace(/selected/, "")
			}
			this.toggleRatePanel();
			this.dispatch({
				type: "settingdone"
			});
			this.player.video.pause();
			this.player.video.playbackRate = parseFloat(b);
			this.player.video.play()
		}
	};
	var ta = function(b) {
		this.player = b;
		this.maybeSeek = !1;
		this._progress = c.get(".x-progress");
		this._track = this._progress.getElementsByClassName("x-progress-track")[0];
		this._play = this._progress.getElementsByClassName("x-progress-play")[0];
		this._load = this._progress.getElementsByClassName("x-progress-load")[0];
		this._seek = this._progress.getElementsByClassName("x-progress-seek")[0];
		this._seekHandle = this._seek.getElementsByClassName("x-seek-handle")[0];
		this._handler = {};
		this.bindEvent()
	};
	ta.prototype = {
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		bindEvent: function() {
			this.bind_seek = c.bindAsEventListener(this, this.seek);
			this.bind_touchstart = c.bindAsEventListener(this, this.onTouchStart);
			c.addEventHandler(this._track, "click", this.bind_seek, !0);
			c.addEventHandler(this._seek, "touchstart", this.bind_touchstart)
		},
		removeEvent: function() {
			c.removeEventHandler(this._track, "click", this.bind_seek, !0);
			c.removeEventHandler(this._seek, "touchstart", this.bind_touchstart)
		},
		removeClickEvent: function() {
			c.removeEventHandler(this._track, "click", this.bind_seek, !0)
		},
		addClickEvent: function() {
			c.addEventHandler(this._track, "click", this.bind_seek, !0)
		},
		dispatch: function(b) {
			if (b && this._handler[b.type]) this._handler[b.type](b)
		},
		setProgress: function(b, d) {
			var e = Math.min(Math.max(b, 0), c.videoInfo.totalTime);
			this.playTime = e;
			var f = e / c.videoInfo.totalTime,
			g = this._track.offsetWidth,
			h = this._seek.offsetWidth;
			this._play.style.width = Math.min(100 * (f + h / g / 2), 100) + "%";
			this._seek.style.left = f * g > g - h ? g - h + "px": 100 * Math.min(Math.max(f, 0), 1) + "%";
			this.uCurrentTime.innerHTML = c.getTime(e); ! 0 !== d && (this.loadTime = e += Math.max(this.player.bufferedEnd() - b, 0), f = e / c.videoInfo.totalTime, this._load.style.width = 100 * Math.min(Math.max(f + 0.05, 0), 1) + "%")
		},
		resetProgress: function() {
			this._seek.style.left = this._seek.style.width;
			this._load.style.width = "0";
			this._play.style.width = "0"
		},
		getRate: function(b, d) {
			var e = 1,
			f = c.get(".x-fs-console");
			f && (e = parseFloat(c.getCurrentStyle(f).zoom));
			return b / (d * e)
		},
		seek: function(b) {
			var d = (new Date).getTime() - ua;
			if (b.srcElement == this._seek || d < va) return h.log(d + "," + va),
			!1;
			this.player._reporter.sendUserActionReport("xcs", "c");
			d = b.offsetX || b.changedTouches[0].clientX - this._track.clientX;
			h.log("x = " + d);
			var d = this.getRate(d, this._track.offsetWidth),
			e = d * c.videoInfo.totalTime;
			h.log("progress bar time = " + e + "rate = " + d + "total = " + c.videoInfo.totalTime);
			this.setProgress(e, !0);
			this.dispatch({
				type: "progressend"
			});
			this.player.seek(e);
			this.dispatch(b)
		},
		handleX: function() {
			return 0
		},
		onTouchStart: function(b) {
			this.maybeSeek = !0;
			if (1 != b.targetTouches.length || this.isTouching) return ! 1;
			this.startX = b.targetTouches[0].clientX;
			b.preventDefault();
			this.isTouching = !0;
			this.startTime = this._currentTime = this.player.currentTime || 0;
			"m3u8" == c.config.content && (this._prepaused = this.player.video.paused, this.player.video.pause(), this.startTime = this.player.currentTime);
			if ("mp4" == c.config.content) {
				this.player.video.pause();
				this.startTime = this.player.video.currentTime;
				for (b = 0; b < x; b++) this.startTime += parseInt(c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType][b].seconds)
			}
			this.bind_onTouchMove = c.bindAsEventListener(this, this.onTouchMove);
			this.bind_onTouchEnd = c.bindAsEventListener(this, this.onTouchEnd);
			c.addEventHandler(this._seek, "touchmove", this.bind_onTouchMove);
			c.addEventHandler(this._seek, "touchend", this.bind_onTouchEnd)
		},
		onTouchMove: function(b) {
			this.maybeSeek = !0;
			if (1 != b.targetTouches.length) return ! 1;
			b.preventDefault();
			b.stopPropagation();
			b = this.startTime + this.getRate(b.targetTouches[0].clientX - this.startX, this._track.offsetWidth) * c.videoInfo.totalTime;
			this.dispatch({
				type: "progressing",
				st: this._currentTime,
				dt: b - this._currentTime
			});
			this._currentTime = b;
			this.setProgress(Math.min(Math.max(this._currentTime, 0), c.videoInfo.totalTime), !0);
			return ! 1
		},
		onTouchEnd: function(b) {
			this.dispatch({
				type: "progressend"
			});
			this.isTouching = !1;
			if (1 < b.changedTouches.length) return ! 1;
			var d = {
				tb: parseInt(100 * this.startTime) / 100,
				to: parseInt(100 * this._currentTime) / 100
			};
			h.log("tb=" + d.tb);
			this.player._reporter.sendUserActionReport("xds", "d", d);
			b.preventDefault();
			b.stopPropagation();
			c.removeEventHandler(this._seek, "touchmove", this.bind_onTouchMove);
			c.removeEventHandler(this._seek, "touchend", this.bind_onTouchEnd);
			b = Math.min(Math.max(this._currentTime, 0), c.videoInfo.totalTime - 5);
			this.player.controls.onPlay();
			var e = this.player;
			this.player.seek(b,
			function() {
				e.video.play()
			});
			return this.maybeSeek = !1
		}
	};
	var wa = function(b, d) {
		this._handler = {};
		c.isWeixin && (c.get(".x-quality").style.display = "none");
		"m3u8" != c.config.content ? c.get(".x-quality").style.display = "none": !d || !d.data || !d.data.stream[0] || !d.data.stream[0].stream_type ? c.get(".x-quality").style.display = "none": (this.player = b, this._quality = c.get(".x-quality"), this.init(d), this.bindEvent(), this._button = this._quality.getElementsByTagName("button")[0], this._panel = this._quality.getElementsByTagName("div")[0], this._nodes = this._quality.getElementsByTagName("li"))
	};
	wa.prototype = {
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		dispatch: function(b) {
			b && this._handler[b.type] && (b._target = this, this._handler[b.type](b))
		},
		init: function() {
			var b = c.videoInfo._videoSegsDic.typeArr,
			d = ["<button class=x-control-btn title=\u753b\u8d28\u8bbe\u7f6e>", "", "</button>"],
			e = ['<div class=x-panel style="display:none"><ul>', "", "</ul><div class=x-mask></div>", "</div>"],
			f = "",
			g = [],
			h;
			for (h in A) if ( - 1 !== b[c.defaultLanguage].indexOf(h) && -1 === g.indexOf(A[h])) {
				var j = "",
				m = "";
				h == c.defaultVideoType && (j = "", d[1] = A[h], m = " class=selected");
				f += "<li data-vtype=" + h + m + ">" + j + A[h] + "</li>";
				g.push(A[h])
			}
			"" == d[1] && (d[1] = g[0]);
			e[1] = f;
			this._quality.innerHTML = d.join("") + e.join("")
		},
		bindEvent: function() {
			var b = this._quality.getElementsByTagName("li");
			if (0 != b.length) {
				this.bind_toggle = c.bindAsEventListener(this, this.toggleQualityPanel);
				c.addEventHandler(this._quality, "click", this.bind_toggle);
				for (var d = 0; d < b.length; d++) c.addEventHandler(b[d], "click", c.bindAsEventListener(this, this.switchQuality))
			}
		},
		removeEvent: function() {
			null != this._quality && c.removeEventHandler(this._quality, "click", this.bind_toggle)
		},
		hide: function(b) {
			if (this._quality) {
				var c = this._panel;
				this._quality.className = this._quality.className.replace(/[\s]*pressed/g, "");
				c.style.display = "none";
				b || this.dispatch({
					type: "settinghide"
				})
			}
		},
		toggleQualityPanel: function(b) {
			var c = this._panel; - 1 === this._quality.className.indexOf("pressed") ? (this._quality.className += " pressed", c.style.display = "block", this.player._reporter.sendUserActionReport("xcq", "c"), this.dispatch({
				type: "settingshow"
			})) : (this.hide(), this.player._reporter.sendUserActionReport("xhq", "c"));
			this.dispatch(b)
		},
		switchQuality: function(b) {
			this.player._reporter.sendUserActionReport("xsq", "c");
			b.stopPropagation();
			for (var d = b.target,
			b = null,
			b = d.getAttribute ? d.getAttribute("data-vtype") : d.parentNode.getAttribute("data-vtype"), d = this._button, e = this._nodes, f = 0; f < e.length; f++) if (e[f].getAttribute("data-vtype") == b) {
				if ( - 1 !== e[f].className.indexOf("selected")) {
					this.toggleQualityPanel();
					return
				}
				e[f].innerHTML = A[b];
				e[f].className += " selected";
				d.innerHTML = A[b];
				l.setItem("defaultVideoType", b);
				c.defaultVideoType = b
			} else {
				var g = e[f].getAttribute("data-vtype");
				e[f].innerHTML = A[g];
				e[f].className = e[f].className.replace(/selected/, "")
			}
			h.log("q1");
			this.toggleQualityPanel();
			this.dispatch({
				type: "settingdone"
			});
			var j = this.player.currentTime,
			n = c.m3u8src_v2(c.v.data.id, b);
			c.unitedTag = null;
			this.player.video.src = n;
			var m = this,
			p = 0;
			this.player.video.addEventListener("canplay",
			function() {
				1 === p ? h.log("XXXXXXXXXXXXXXXXXXXXX") : (p = 1, h.log("q2 nsrc=" + n), m.player.seek(j), h.log("q3"))
			});
			this.player.video.load();
			this.player.video.play()
		}
	};
	var xa = function(b, d) {
		this._handler = {};
		this.player = b;
		this._panel = document.createElement("div");
		this._panel.className = "x-recommend";
		this.init(d);
		this.request(d);
		window.relatedpanel = this;
		c.get("#x-player").appendChild(this._panel);
		this._panel.style.display = "box"
	};
	xa.prototype = {
		bindDynamicEvent: function() {
			var b = this._listinner.getElementsByClassName("x-item");
			this.bind_itemclick = c.bindAsEventListener(this, this.onItemClick);
			for (var d = 0; d < b.length; d++) c.addEventHandler(b[d], "click", this.bind_itemclick, !0)
		},
		onItemClick: function(b) {
			b = b.currentTarget.getAttribute("data-i");
			"x" == b ? this.replay() : this.player._reporter.sendRecommendLog(this.getReportParam(b))
		},
		init: function() {
			this._panel.innerHTML = "<div class=x-pages></div>";
			this._listinner = this._panel.getElementsByClassName("x-pages")[0]
		},
		request: function(b) {
			var d = c.https + "//ykrec.youku.com/video/packed/list.json?",
			e = {};
			e.vid = b.data.id;
			e.uid = b.data.video.userid;
			b.data.show && b.data.show.id && (e.sid = b.data.show.id);
			e.cate = b.data.video.category_id;
			e.site = "1";
			e.module = "2";
			b = b.data.controller.play_mode;
			e.pg = "1";
			e.pg = {
				normal: 1,
				show: 3,
				folder: 4
			} [b];
			"interior" == c.config.winType ? e.apptype = 12 : (e.apptype = 12, e.pg = 1);
			e.pl = 36;
			for (var f in c.initConfig.playlistconfig) e[f] = c.initConfig.playlistconfig[f];
			var g = this;
			q.jsonp({
				url: d,
				data: e,
				success: function(b) {
					g.parseResponse(b)
				},
				fail: function() {}
			});
			this._apt = e.apptype;
			this._pg = e.pg;
			this._md = e.module
		},
		parseResponse: function(b) {
			this._info = b;
			this.buildPanel(this._info)
		},
		buildPanel: function(b) {
			var b = b.data,
			d = b.length;
			h.log("realted len = " + d);
			var e = [];
			e.push('<ul class="x-item" data-i="x"><li class="x-item-img"><img src="' + c.https + '//player.youku.com/h5player/img/replay.png"></li></ul>');
			for (var f = Math.floor((this._panel.offsetWidth - 60 + 16) / 166) * Math.floor((this._panel.offsetHeight - 120 + 12) / 97), f = (f > d ? d: f) - 1, f = 0 > f ? 0 : f, d = 0; d < f; d++) {
				var g = b[d].picUrl,
				j = b[d].title.substr(0, 20),
				l = c.https + "//v.youku.com/v_show/id_" + b[d].codeId + ".html?from=",
				m = "y7",
				m = "interior" == c.config.winType ? m + ".2-1-": m + ".7-1-",
				m = m + c.v.data.video.category_id,
				m = m + ".4",
				m = m + ("." + (d + 1) + "-1"),
				m = m + ("." + this._apt + "-" + this._pg + "-" + this._md + "-" + d),
				l = l + m;
				h.log(l);
				"myoukucom" == c.initConfig.client_id && (l = c.https + "//m.youku.com/smartphone/detail?vid=" + b[d].codeId);
				e.push('<ul class="x-item" data-i=' + d + '><li class="x-item-img"><img src=' + g + '></li><li class="x-item-info"><div class="x-item-title">' + j + '</div><div class="x-item-bg"></div></li><li class="x-item-url"><a href=' + l + ' target="_blank"></a></li><li class="x-item-loading"><div class="x-play-loading"></div></li></ul>')
			}
			this._listinner.innerHTML = e.join("");
			this.bindDynamicEvent();
			this.buildImgEvent()
		},
		getReportParam: function(b) {
			var d = {};
			d.pos = "" + b;
			d.sct = c.v.data.video.category_id;
			d.dct = this._info.data[b].dct;
			d.ord = this._info.ord;
			d.req_id = this._info.req_id;
			d.abver = this._info.ver;
			d.dma = this._info.data[b].dma;
			d.algInfo = this._info.data[b].algInfo;
			d.apt = this._apt;
			d.md = this._md;
			d.pg = this._pg;
			d.r = (new Date).getTime();
			d.vid = c.v.data.video.encodeid;
			d.uid = c.v.data.video.userid;
			1 == this._info.data[b].type ? d.dvid = this._info.data[b].id: d.dsid = this._info.data[b].id;
			d.sid = "";
			c.v.data.show && c.v.data.show.id && (d.sid = c.v.data.show.id);
			return d
		},
		buildImgEvent: function() {
			for (var b = this._listinner.getElementsByClassName("x-item-img"), d = 0; d < b.length; d++) c.addEventHandler(b[d], "error", c.bindAsEventListener(this, this.onLoadImgError)),
			c.addEventHandler(b[d], "abort", c.bindAsEventListener(this, this.onLoadImgError))
		},
		onLoadImgError: function(b) {
			h.log("img error");
			b = b.target;
			c.addClass(b.parentNode.parentNode, "x-no-pic");
			b.src = c.https + "//player.youku.com/h5player/img/no_pic.png"
		},
		replay: function(b) {
			this.player.controls.rePlay(b)
		},
		onResize: function() {
			var b = this;
			setTimeout(function() {
				b.buildPanel(b._info)
			},
			500)
		}
	};
	var ya = function(b, d) {
		this._handler = {};
		this.player = b;
		this._showbtn = c.get(".x-playshow");
		this._showlist = c.get(".x-showlist");
		this.init(d);
		this._inner = this._showlist.getElementsByClassName("x-showlist-inner");
		this._bullet = this._showlist.getElementsByClassName("x-showlist-bullet");
		this.bindEvent()
	};
	ya.prototype = {
		init: function(b) {
			this._showlist.innerHTML = '<div class=x-showlist-inner><div class=x-showlist-hd></div><div class=x-showlist-bd></div><div class=x-showlist-ft style="display:none"></div><div class=x-mask></div></div>';
			this._slhd = this._showlist.getElementsByClassName("x-showlist-hd")[0];
			this._slbd = this._showlist.getElementsByClassName("x-showlist-bd")[0];
			this._slft = this._showlist.getElementsByClassName("x-showlist-ft")[0];
			this._slhd.innerHTML = "<label>\u9009\u96c6</label><div class=x-showlist-close></div>";
			this._closeHandle = this._slhd.getElementsByClassName("x-showlist-close")[0];
			if (b.data.videos) {
				for (var d = b.data.videos.list,
				e = ["<ul class=x-showlist-bullet>", "", "</ul>"], f = [], g = 0; g < d.length; g++) {
					var h = d[g],
					j = c.https + "//v.youku.com/v_show/id_" + h.encodevid + ".html";
					c.v.folder && (j = j + "?f=" + c.v.folder.folderId);
					var l = "";
					h.encodevid == c.v.data.video.encodeid && (l = " class=selected");
					h = "<li" + l + "><a touchstart=\"this.parentNode.className='selected'\" href=" + j + ">" + h.title.substr(0, 20) + "</a></li>";
					f.push(h)
				}
				e[1] = f.join("");
				this._slbd.innerHTML = e.join("");
				e = "<div class=x-showlist-pages>;<span class=x-showlist-pre></span>;<ul>;;</ul>;<span class=x-showlist-next></span>".split(";");
				f = [];
				l = b.data.videos.previous ? parseInt(b.data.videos.previous.seq / 60) : 0;
				for (g = 0; g < (d.length - 1) / 60 + 1; g++) b = "",
				g == l && (b = " class=current"),
				h = "<li" + b + "><em>" + (g + 1) + "</em></li>",
				f.push(h);
				e[3] = f.join("");
				this._slft.innerHTML = e.join("")
			}
		},
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		dispatch: function(b) {
			b && this._handler[b.type] && (b._target = this, this._handler[b.type](b))
		},
		bindEvent: function() {
			this.bind_close = c.bindAsEventListener(this, this.hide);
			c.addEventHandler(this._closeHandle, "click", this.bind_close);
			this.bind_toggle = c.bindAsEventListener(this, this.toggle);
			c.addEventHandler(this._showbtn, "click", this.bind_toggle)
		},
		removeEvent: function() {
			c.removeEventHandler(this._closeHandle, "click", this.bind_close)
		},
		hide: function() {
			this._showbtn.className = this._showbtn.className.replace(/[\s]*pressed/g, "");
			c.hide(this._showlist)
		},
		show: function() {
			this._showbtn.className += " pressed";
			c.show(this._showlist)
		},
		showListBtn: function() {
			if (c.v.data.videos) {
				var b = c.v.data.videos.list;
				null == b || 1 >= b.length || c.show(this._showbtn)
			} else c.hide(this._showbtn)
		},
		hideListBtn: function() {
			if (c.v.data.videos) {
				var b = c.v.data.videos.list;
				null == b || 0 == b.length || (c.hide(this._showbtn), this.hide())
			}
		},
		toggle: function(b) {
			"block" != this._showlist.style.display ? (this.show(), this.player._reporter.sendUserActionReport("xshl", "c")) : this.hide();
			this.dispatch(b)
		},
		touchStart: function(b) {
			this._sx = b.targetTouches[0].clientX;
			this._sy = b.targetTouches[0].clientY;
			this._ex = this._sx;
			this._ey = this._ey
		},
		touchEnd: function() {},
		touchMove: function(b) {
			this._ex = b.targetTouches[0].clientX;
			this._ey = b.targetTouches[0].clientY;
			this._dx = this._ex - this._sx;
			this._dy = this._ey - this._sy;
			Math.abs(this._dx) > Math.abs(this._dy) || b.preventDefault()
		}
	};
	var za = function(b) {
		this.player = b;
		this._handle = {};
		this._tips = c.get(".x-tips");
		c.hide(this._tips);
		this._tips.innerHTML = "<div class=x-tips-txt></div><div class=x-tips-close><a href=#><em>\u5173\u95ed</em></a></div><div class=x-tips-mask></div>";
		this._ptip = this._tips.getElementsByClassName("x-tips-txt")[0];
		this._ctip = this._tips.getElementsByClassName("x-tips-close")[0];
		null == l.getItem("youku_conf_skip") && l.setItem("youku_conf_skip", !0);
		this.bindEvent()
	};
	za.prototype = {
		bindEvent: function() {
			c.addEventHandler(this._ctip, "click", c.bindAsEventListener(this, this.closeTip))
		},
		closeTip: function() {
			c.hide(this._tips);
			this.keepLastTime()
		},
		autoHide: function(b) {
			var c = this;
			setTimeout(function() {
				c.closeTip()
			},
			b)
		},
		keepLastTime: function() {},
		ignoreLastTime: function() {},
		isShowTimeTip: function() {
			var b = l.getItem("youku_keep_lasttime"),
			b = parseInt(b),
			c = l.getItem("youku_ignore_lasttime"),
			c = parseInt(c);
			return 3 <= b || 3 <= c ? !1 : !0
		},
		showLastTimeTip: function(b) {
			b = c.getTime(b);
			h.log("last = " + b); ! 1 != this.isShowTimeTip() && (this._ptip.innerHTML = "\u4f18\u9177\u8bb0\u5fc6\u60a8\u4e0a\u6b21\u64ad\u653e\u5230<span class=x-tips-time>" + b + "</span>, <a class=x-tip-timebegin href=#>\u4ece\u5934\u89c2\u770b</a>", this._playBegin = this._ptip.getElementsByClassName("x-tip-timebegin")[0], c.addEventHandler(this._playBegin, "click", c.bindAsEventListener(this, this.seekBegin)), c.show(this._tips), this.autoHide(5E3))
		},
		onSkipTail: function() {
			"true" == l.getItem("youku_conf_skip") ? (this._ptip.innerHTML = "\u5373\u5c06\u4e3a\u60a8\u8df3\u8fc7\u7247\u5c3e, <a class=x-tip-skipnoway href=#>\u4e0d\u518d\u8df3\u8fc7</a>", this._skipnowtail = this._ptip.getElementsByClassName("x-tip-skipnoway")[0], c.addEventHandler(this._skipnowtail, "click", c.bindAsEventListener(this, this.skipNoway))) : (this._ptip.innerHTML = "\u662f\u5426\u8df3\u8fc7\u7247\u5934\u7247\u5c3e? <a class=x-tip-skipalways href=#>\u59cb\u7ec8\u8df3\u8fc7</a>", this._skipalwtail = this._ptip.getElementsByClassName("x-tip-skipalways")[0], c.addEventHandler(this._skipalwtail, "click", c.bindAsEventListener(this, this.skipAlways)));
			c.show(this._tips);
			this.autoHide(1E4)
		},
		onSkipHead: function() {
			"true" == l.getItem("youku_conf_skip") ? (this._ptip.innerHTML = "\u5df2\u7ecf\u4e3a\u60a8\u8df3\u8fc7\u7247\u5934, <a class=x-tip-skipnoway href=#>\u4e0d\u518d\u8df3\u8fc7</a>", this._skipnow = this._ptip.getElementsByClassName("x-tip-skipnoway")[0], c.addEventHandler(this._skipnow, "click", c.bindAsEventListener(this, this.skipNoway))) : (this._ptip.innerHTML = "\u662f\u5426\u8df3\u8fc7\u7247\u5934\u7247\u5c3e? <a class=x-tip-skipalways href=#>\u59cb\u7ec8\u8df3\u8fc7</a>", this._skipalw = this._ptip.getElementsByClassName("x-tip-skipalways")[0], c.addEventHandler(this._skipalw, "click", c.bindAsEventListener(this, this.skipImediately)));
			c.show(this._tips);
			this.autoHide(5E3)
		},
		onUglyAdPlay: function() {
			this._ptip.innerHTML = "\u5c0a\u656c\u7684\u4f1a\u5458\uff0c\u56e0\u7248\u6743\u539f\u56e0\uff0c\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2 \u5173\u95ed\u5e7f\u544a ";
			c.show(this._tips);
			var b = this;
			setTimeout(function() {
				c.hide(b._tips)
			},
			15E3)
		},
		closeUglyHint: function() {
			c.hide(this._tips)
		},
		skipImediately: function() {
			h.log("skip imediately");
			this.player._reporter.sendUserActionReport("xskh", "c");
			l.setItem("youku_conf_skip", !0);
			var b = parseInt((c.v.data.dvd || "").head) / 1E3;
			this.onSkipHead();
			this.player.seek(b);
			return ! 1
		},
		skipNoway: function() {
			this.player._reporter.sendUserActionReport("xnsk", "c");
			l.setItem("youku_conf_skip", !1);
			this._ptip.innerHTML = "\u8bbe\u7f6e\u6210\u529f";
			return ! 1
		},
		skipAlways: function() {
			this.player._reporter.sendUserActionReport("xask", "c");
			l.setItem("youku_conf_skip", !0);
			this._ptip.innerHTML = "\u8bbe\u7f6e\u6210\u529f";
			return ! 1
		},
		seekBegin: function() {
			this.player._reporter.sendUserActionReport("xseb", "c");
			c.hide(this._tips);
			this.ignoreLastTime();
			this.player.seek(0);
			return ! 1
		}
	};
	var $ = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
	S = function(b, c, e) {
		this.player = b;
		this.v = c;
		this.sid = e;
		this.isSendedConsumeReport = !1;
		g.hd = this.getHDFlag();
		if (0 < I.length) for (b = 0; b < I.length; b++) this.sendUepReport(I[b].type, I[b].time);
		this.forclb = 0;
		this.dimension = {
			w: document.getElementById("x-player").offsetWidth,
			h: document.getElementById("x-player").offsetHeight
		};
		this.screenDim = {
			w: screen.availWidth,
			h: screen.availHeight
		}
	};
	S.prototype = {
		sendRecommendLog: function(b) {
			g.Log(c.https + "//r.l.youku.com/recclick?" + r(b))
		},
		tsInit: function() {
			this.tsSn = null
		},
		sendTSLog: function(b) {
			null == this.tsSn && (this.tsSn = 0);
			var d = 5,
			d = 24 < this.tsSn ? 20 : 12 < this.tsSn ? 10 : 5,
			e = this;
			this.tstimer = setTimeout(function() {
				e.sendTSLog(60)
			},
			1E3 * d);
			if (61 == b) clearTimeout(this.tstimer),
			this.tstimer = null;
			else if (e.player.video.paused) return;
			if (0 == this.tsSn) this.tsSn++;
			else {
				var f = c.v.data;
				f.sid = c.videoInfo._sid;
				c.initConfig.tslogconfig = c.initConfig.tslogconfig || {};
				var i = {};
				this.rs && (i.rs = 1, this.rs = 0);
				i.vvid = f.sid;
				i.vid = f.id;
				i.cf = this.getHDFlag();
				i.cpt = this.player.currentTime ? Math.floor(this.player.currentTime) : 0;
				i.cpt = i.cpt > c.videoInfo.totalTime ? c.videoInfo.totalTime: i.cpt;
				i.full = this.player.controls.fullscreenPanel.fullFlag() ? 1 : 0;
				i.lang = this.getLanguage();
				i.pc = 60 == b ? 0 : 1;
				i.type = "h5";
				i.clientid = c.initConfig.client_id || "";
				i.clb = 128 * (0 >= i.cpt - this.forclb ? 0 : i.cpt - this.forclb) * [256, 350, 800, 1500, 3E3][this.getHDFlag()];
				this.forclb = i.cpt;
				i.iku = "m";
				i.pt = this.getPlayTime();
				i.sn = this.tsSn++;
				i.hi = d;
				i.uid = c.v.data.user.uid;
				i.r = this.signTS(i.vvid + i.vid + i.cpt + i.pt + i.sn);
				g.Log(c.https + "//p-log.ykimg.com/tslog?" + r(i));
				g.Log(c.https + "//yt.mmstat.com/yt/vp.vtslog?" + r(i))
			}
		},
		signTS: function(b) {
			if (null == b) return 0;
			for (var c = 0,
			e = b.length,
			f = 0; f < e; f++) c = 43 * c + b.charCodeAt(f),
			c %= 1E10;
			return c
		},
		getPlayTime: function() {
			var b = 0;
			return b = 24 < this.tsSn ? 180 + 20 * (this.tsSn - 24) : 12 < this.tsSn ? 60 + 10 * (this.tsSn - 12) : 5 * this.tsSn
		},
		tslogparse: function() {},
		sendTSErrorLog: function() {},
		getSubCategories: function(b) {
			for (var c = "",
			e = 0; e < b.length; e++) c += b[e].id + "|";
			return c.substring(0, c.length - 1)
		},
		getLanguage: function() {
			null == this.langMap && (this.langMap = {
				"default": 1,
				guoyu: 1,
				yue: 2,
				chuan: 3,
				tai: 4,
				min: 5,
				en: 6,
				ja: 7,
				kr: 8,
				"in": 9,
				ru: 10,
				fr: 11,
				de: 12,
				it: 13,
				es: 14,
				th: 15,
				po: 16,
				man: 17,
				baby: 18
			});
			return this.langMap[c.defaultLanguage || "default"]
		},
		getExtString: function(b) {
			var d = {
				iku: "m"
			};
			d.full = this.player.controls.fullscreenPanel.fullFlag();
			d.lang = this.getLanguage();
			d.num = b;
			d.ctp = 0;
			d.pc = 60 == b ? 0 : 1;
			d.clb = 0;
			d.ctype = "12";
			d.ev = "1";
			d.tk = g.userCache.token;
			d.oip = c.v.data.security.ip;
			d.isvip = c.v.data.user.vip ? "1": "0";
			d.paystate = this.getPayState();
			d.playstate = null == c.v.data.trial ? "1": "2";
			return encodeURI(r(d))
		},
		getPlayByType_: function(b) {
			var d = 0;
			62 == b && (d = 2);
			c.initConfig.vvlogconfig && c.initConfig.vvlogconfig.pb && (d = c.initConfig.vvlogconfig.pb);
			return d
		},
		getMaxFileType: function() {
			var b = n._videoInfo._videoSegsDic;
			return b.hd2 ? 2 : b.mp4 ? 1 : 0
		},
		getHDFlag: function() {
			if (null == this.player) return 0;
			var b = null,
			d = this.player.video.src; - 1 != d.indexOf("m3u8") ? (b = {
				flv: 0,
				flvhd: 0,
				mp4: 1,
				hd2: 2,
				hd3: 3
			},
			d = c.defaultVideoType) : b = {
				"030020": 4,
				"030004": 0,
				"030008": 1,
				"030080": 3
			};
			for (var e in b) if ( - 1 !== d.indexOf(e)) return b[e];
			return 0
		},
		getParentUrl: function() {
			var b = null;
			if (parent !== window) try {
				b = parent.location.href
			} catch(c) {
				b = document.referrer
			}
			return b
		},
		addClientDurationReport: function(b) {
			null == this.tsSn && (this.tsSn = 0);
			var d = 5,
			d = 24 < this.tsSn ? 20 : 12 < this.tsSn ? 10 : 5,
			e = this;
			this.ct_timer = setTimeout(function() {
				e.addClientDurationReport(60)
			},
			1E3 * d);
			if (61 == b) clearTimeout(this.ct_timer),
			this.ct_timer = null;
			else if (e.player.video.paused) return;
			if (0 != this.tsSn) {
				var f = c.v.data;
				f.sid = c.videoInfo._sid;
				c.initConfig.tslogconfig = c.initConfig.tslogconfig || {};
				var i = {};
				i.vvid = f.sid;
				i.vid = f.id;
				i.cf = this.getHDFlag();
				i.ctype = 12;
				i.cpt = this.player.currentTime ? Math.floor(this.player.currentTime) : 0;
				i.full = this.player.controls.fullscreenPanel.fullFlag() || 0;
				i.lang = this.getLanguage();
				i.pc = 60 == b ? 0 : 1;
				i.type = "h5";
				i.clientid = c.initConfig.client_id || "";
				i.clb = 128 * (this.player.currentTime ? Math.floor(this.player.currentTime) : 0) * [256, 350, 800, 1500, 3E3][this.getHDFlag()];
				i.iku = c.initConfig.client_id || "m";
				i.pt = this.getPlayTime();
				i.sn = this.tsSn;
				i.hi = d;
				i.uid = c.v.data.user.uid;
				i.r = this.signTS(i.vvid + i.vid + i.cpt + i.pt + i.sn);
				g.Log(c.https + "//p-log.ykimg.com/acfunts?" + r(i))
			}
		},
		countBuffered: function() {
			var b, c;
			try {
				b = this.player.video.buffered.length,
				c = this.player.video.buffered.end(b - 1),
				alert(c)
			} catch(e) {
				c = this.player.currentTime ? Math.floor(this.player.currentTime) : 0
			}
			return c
		},
		addPlayerDurationReport: function(b) {
			var d = c.videoInfo;
			if (! (null == d || null == d._playListData)) {
				if (null == this.drtimer) {
					var e = this;
					this.drtimer = setInterval(function() {
						e.player.video.paused || e.addPlayerDurationReport(60)
					},
					6E4)
				}
				61 == b && (clearInterval(this.drtimer), this.drtimer = null);
				var f = {
					viewUserId: 0
				};
				f.sid = d._sid;
				f.videoOwnerId = c.v.data.video.userid;
				c.v.data.user.uid && (f.viewUserId = c.v.data.user.uid);
				f.videoid = c.v.data.id;
				f.ct = c.v.data.video.category_letter_id;
				f.cs = this.getSubCategories(c.v.data.video.subcategories);
				f.number = b;
				f.rnd = ((new Date).getTime() - d.abstarttime) / 1E3;
				d._playListData.show ? (f.showid_v2 = d._playListData.show.id, f.showid_v3 = d._playListData.show.encodeid, f.show_videotype = d._playListData.show.video_type, f.stg = d._playListData.show.stage, f.Copyright = d._playListData.show.copyright) : (f.showid_v2 = "", f.Copyright = "");
				f.Tid = "";
				f.hd = 0;
				f.ikuflag = "m";
				f.hd = {
					flv: 0,
					flvhd: 0,
					mp4: 1,
					hd2: 2,
					hd3: 3
				} [c.defaultVideoType];
				f.winType = c.WIN_TYPE;
				f.mtype = aa();
				f.totalsec = d.totalTime;
				f.fullflag = this.player.controls.fullscreenPanel.fullFlag();
				f.playComplete = 0;
				61 == b && (f.playComplete = 1);
				59 == b && (f.referUrl = (c.initConfig.vvlogconfig || "").rurl, f.url = encodeURIComponent(window.location.href), f.starttime = 0);
				f.currentPlayTime = parseInt(this.player.currentTime || 0);
				f.continuationPlay = 0;
				f.pid = c.initConfig.client_id;
				f.timestamp = (new Date).getTime();
				f.ctype = "12";
				f.ev = "1";
				f.tk = g.userCache.token;
				f.oip = c.v.data.security.ip;
				f.isvip = c.v.data.user.vip ? "1": "0";
				f.paystate = this.getPayState();
				f.playstate = null == c.v.data.trial ? "1": "2";
				f.pvid = (c.initConfig.vvlogconfig || "").pvid || (window.UrchinAplus && window.UrchinAplus._yVvlogInfo() || "").pvid;
				g.Log(c.https + "//stat.youku.com/player/addPlayerDurationReport?" + r(f));
				delete f.pvid;
				b = c.https + "//yt.mmstat.com/yt/vp.vdoview?";
				if (window.UrchinAplus && window.UrchinAplus._yVvlogInfo) d = window.UrchinAplus._yVvlogInfo();
				else {
					var d = {},
					i = this.cookie("__ysuid"),
					h = this.cookie("_l_lgi"),
					j = this.cookie("__arpvid"),
					l = this.cookie("__arycid"),
					n = this.cookie("__ayft"),
					p = this.cookie("__ayscnt"),
					q = this.cookie("__aysid"),
					o = this.cookie("__ayvstp"),
					t = this.cookie("__ayspstp");
					i && (d.pc_i = i);
					h && (d.pc_u = h);
					j && (d.rvpvid = j);
					l && (d.rycid = l);
					n && (d.yvft = n);
					p && (d.vsidc = p);
					q && (d.seid = q);
					o && (d.vstp = o);
					t && (d.svstp = t)
				}
				g.Log(b + r(f) + "&" + r(d))
			}
		},
		addPlayerStaticReport: function() {
			var b = c.https + "//stat.youku.com/player/addPlayerStaticReport",
			d = {};
			d.videoid = this.v.data.id;
			this.v.data.token && (d.t = this.v.data.token.vv);
			d.totalsec = parseInt(this.v.data.video.seconds);
			d.ikuflag = "m_" + this.getShowFlag();
			d.url = encodeURIComponent(this.getParentUrl() ? this.getParentUrl() : window.location.href);
			d.fullflag = this.player.controls.fullscreenPanel.fullFlag();
			d.source = "video";
			d.referer = (c.initConfig.vvlogconfig || "").rurl;
			d.sid = this.sid;
			d.uid = this.v.data.user.uid;
			for (var e = d.t,
			f = !1,
			i = ""; ! f;) i = Z(20),
			"00" == Ga(e + i).substring(0, 2) && (f = !0);
			d.h = i;
			d.totalseg = c.pieceLength();
			d = r(d);
			g.Log(b + "?" + d)
		},
		sendUserActionReport: function(b, d, e) {
			var f = c.https + "//e.stat.ykimg.com/red/ytes.php?",
			d = {
				t: 1002,
				e: b,
				v: d
			};
			d.d = J(aa());
			var i = {
				v: "h5player",
				vid: c.v.data.id,
				ssid: c.videoInfo._sid,
				ct: c.v.data.video.category_letter_id,
				cs: c.v.data.video.subcategories,
				uid: 0
			};
			c.v.data.user && (i.uid = c.v.data.user.uid);
			i.sid = "";
			c.v.data.show && (i.sid = c.v.data.show.id);
			i.tc = this.player.currentTime || 0;
			i.w = c.get("#x-player").offsetWidth;
			i.h = c.get("#x-player").offsetHeight;
			i.f = this.player.video.fullscreenchange ? "on": "off";
			i.q = this.player.getQuality();
			i.ver = "1.0.0";
			for (var h in e) i[h] = e[h];
			d.x = J(r(i));
			e = r(d);
			if ("xre" == b) this.checkPlayerResize(f, e);
			else {
				if ("xenfs" == b || "xexfs" == b) {
					this._giveupReTag = !0;
					var j = this;
					setTimeout(function() {
						j._giveupReTag = false
					},
					800)
				}
				d.pc_i = this.cookie("__ysuid") || 0;
				d.cna = this.cookie("cna") || 0;
				d.pc_u = c.v.data.user.uid || 0;
				d.rurl = (c.initConfig.vvlogconfig || "").rurl;
				d.url = encodeURIComponent(window.location.href);
				d.jurl = "";
				g.Log(c.https + "//yt.mmstat.com/yt/vp.event?" + r(d));
				g.Log(c.https + "//p-log.ykimg.com/event?" + e)
			}
		},
		checkScreenRotate: function(b, c) {
			var e = screen.availWidth,
			f = screen.availHeight;
			h.log("<hr/>rota w,h = " + e + "," + f);
			if (this.screenDim.w != e || this.screenDim.h != f) this.screenDim.w = e,
			this.screenDim.h = f,
			h.log("<b><font color=red>rotate</font></b>"),
			g.Log(b + c)
		},
		checkPlayerResize: function(b, c) {
			if (!0 === this._giveupReTag) h.log("give up xre after enfs or exfs");
			else {
				var e = document.getElementById("x-player");
				this._resizeList = this._resizeList || [];
				this._resizeList.push({
					str: c,
					time: (new Date).getTime(),
					w: e.offsetWidth,
					h: e.offsetHeight
				});
				var f = this;
				setTimeout(function() {
					if (0 != f._resizeList.length) {
						for (var c = f._resizeList[0].time, d = 0; d < f._resizeList.length; d++) {
							var e = f._resizeList[d].w,
							h = f._resizeList[d].h,
							j = f._resizeList[d].time;
							if (e != f.dimension.w || h != f.dimension.h) f.dimension.w = e,
							f.dimension.h = h,
							(800 < j - c || d == f._resizeList.length - 1) && g.Log(b + f._resizeList[d].str)
						}
						f._resizeList = []
					}
				},
				1E3)
			}
		},
		cookie: function(b, c, e, f) {
			"string" == typeof b && (f = e, e = c, c = b, b = window);
			if (void 0 !== e) {
				var f = f || {},
				g;
				g = "";
				f.expires && (f.expires.constructor == Date ? g = f.expires: (g = new Date, g.setTime(g.getTime() + 864E5 * f.expires)), g = "; expires=" + g.toGMTString());
				var h = f.path ? "; path=" + f.path: "",
				j = f.domain ? "; domain=" + f.domain: "",
				f = f.secure ? "; secure": "";
				b.document.cookie = [c, "=", encodeURIComponent(e), g, h, j, f].join("")
			} else return (e = b.document.cookie.match(RegExp("(?:\\s|^)" + c + "\\=([^;]*)"))) ? decodeURIComponent(e[1]) : null
		},
		sendUepReport: function(b, d, e) {
			if (! (!1 !== e && 10 < 100 * Math.random())) {
				var e = c.https + "//v.l.youku.com/uep?",
				f = "",
				f = g.isIPAD ? "xplayer_ipad": g.isIPHONE ? "xplayer_iphone": "xplayer_android",
				b = {
					m: f,
					hd: this.getHDFlag(),
					t: b,
					s: d,
					u: encodeURIComponent(this.getParentUrl() ? this.getParentUrl() : window.location.href),
					p: 2,
					v: c.videoInfo._sid,
					ct: c.v.data.video.category_letter_id,
					cs: c.v.data.video.subcategories
				};
				g.Log(e + r(b))
			}
		},
		sendLoadedTime: function(b) {
			h.log("loaded cost = " + b);
			this.sendUepReport("videoload", b)
		},
		sendComScoreReport: function(b) {
			if (!this._hasComScore) {
				for (var d = document.getElementsByTagName("script"), e = 0; e < d.length; e++) if ( - 1 !== d[e].src.indexOf("scorecardresearch.com/beacon.js")) {
					this._hasComScore = !0;
					break
				} ! 0 !== this._hasComScore && (d = document.createElement("script"), e = document.getElementsByTagName("script")[0], d.async = !0, d.src = ("" == document.location.protocol ? "//sb": "//b") + ".scorecardresearch.com/beacon.js", e.parentNode.insertBefore(d, e));
				this._hasComScore = !0
			}
			var f = setInterval(function() {
				if ("undefined" != typeof COMSCORE) {
					clearInterval(f);
					try {
						COMSCORE.beacon({
							c1: 1,
							c2: 7293931,
							c3: b,
							c6: c.v.data.video.category_id
						})
					} catch(d) {
						h.log("beacon exception")
					}
				}
			},
			500)
		},
		sendIResearchReport: function() {},
		sendThirdPartyReport: function(b) {
			"xplayer_h5" == b && (b = g.isAndroid ? "xplayer_h5_android": g.isIPAD ? "xplayer_h5_ipad": "xplayer_h5_other");
			this.sendComScoreReport(b);
			this.sendIResearchReport(b)
		},
		sendClientConsumeReport: function() { ! 0 != this.isSendedConsumeReport && (null != c.config.partner_config && 1 == c.config.partner_config.status && null != c.config.partner_config.token && "" != c.config.partner_config.token) && (this.isSendedConsumeReport = !0, g.Log("https://api.youku.com/players/consume.json?token=" + c.config.partner_config.token))
		},
		getPayState: function() {
			var b = 0;
			c.v.data.show && "vod" == c.v.data.show.pay_type && (b = 1);
			c.v.data.show && "mon" == c.v.data.show.pay_type && (b = 2);
			return b
		},
		getShowFlag: function() {
			var b = "m";
			return b = c.v.data.show ? b + "1": b + "0"
		}
	};
	var Aa = function(b, d) {
		this._handler = {};
		this.player = b;
		this.controls = b.controls;
		this.adplugin = this.controls._pauseAdPlugin;
		this.info = d.data.info;
		this.adjustIMGWH();
		this.adpause = c.get(".x-ad-pause");
		this.info.VAL[0].VT = parseInt(this.info.VAL[0].VT);
		2 != this.info.VAL[0].VT && (this.init(), this.bindEvent(), this._adreporter = new N(this, d.data));
		this.loadVC()
	};
	Aa.prototype = {
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		dispatch: function(b) {
			b && this._handler[b.type] && (b._target = this, this._handler[b.type](b))
		},
		bindEvent: function() {
			c.addEventHandler(this.adcontent, "click", c.bindAsEventListener(this, this.adClick));
			c.addEventHandler(this.adclose, "click", c.bindAsEventListener(this, this.hide));
			var b = this;
			window.addEventListener("orientationchange",
			function() {
				setTimeout(function() {
					c.isLandScape() || b.hide()
				},
				1E3)
			})
		},
		adjustIMGWH: function() {
			var b = this.info.VAL[0].W,
			d = this.info.VAL[0].H,
			e = (c.get("#x-player").offsetHeight - 110) / d;
			if (1 < e || 0 >= e) e = 1;
			this.info.VAL[0].W = b * e;
			this.info.VAL[0].H = d * e;
			h.log("pause img adjusted w = " + this.info.VAL[0].W + " h = " + this.info.VAL[0].H)
		},
		init: function() {
			this.adpause.innerHTML = "<div class=x-pause-content></div><div class=x-pause-close></div><div class=x-pause-prompt></div>";
			this.adcontent = this.adpause.getElementsByClassName("x-pause-content")[0];
			this.adcontent.innerHTML = " <img class=x-pause-img width=" + this.info.VAL[0].W + " height=" + this.info.VAL[0].H + " src=" + this.info.VAL[0].RS + ">";
			this.adclose = this.adpause.getElementsByClassName("x-pause-close")[0];
			this.adimg = this.adcontent.getElementsByClassName("x-pause-img")[0];
			this.adimg.style.height = this.info.VAL[0].H + "px";
			this.adimg.style.width = this.info.VAL[0].W + "px";
			this.adpause.style.marginLeft = "-" + this.info.VAL[0].W / 2 + "px";
			this.adpause.style.marginTop = "-" + this.info.VAL[0].H / 2 + "px"
		},
		hide: function() {
			c.hide(this.adpause)
		},
		play: function() {
			2 != this.info.VAL[0].VT && (c.show(this.adpause), this._adreporter.sendSUS())
		},
		adClick: function() {
			window.open(this.info.VAL[0].CU, null);
			this._adreporter && this._adreporter.sendCUM()
		},
		loadVC: function() { (2 == this.info.VAL[0].VT || 1 == this.info.VAL[0].VT) && D(this.info.VAL[0].VC, "js")
		}
	};
	var Ba = function(b, c) {
		this._handler = {};
		this._adinfo = b;
		this._info = {
			VAL: []
		};
		for (var e in b)"VAL" != e && (this._info[e] = b[e]);
		this._vt2nodes = c || []
	};
	Ba.prototype = {
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		dispatch: function(b) {
			b && this._handler[b.type] && (b._target = this, this._handler[b.type](b))
		},
		buildAdRS: function() {
			for (var b = c.https + "//pl-ali.youku.com/playlist/m3u8?",
			d = {},
			e = {},
			f = this._adinfo.VAL,
			i = 0; i < f.length; i++) {
				var h = f[i];
				e["a" + (i + 1)] = h.VID + "_" + h.VQT
			}
			e.v = c.v.data.id + "_" + c.defaultVideoType;
			var i = encodeURI,
			h = [],
			j;
			for (j in e) h.push('"' + j + '":"' + e[j] + '"');
			e = "{" + h.join(",") + "}";
			d.ids = i(e);
			d.ts = parseInt((new Date).getTime() / 1E3);
			c.password && (d.password = c.password);
			c.password && (c.initConfig.client_id && c.config.partner_config && 1 == c.config.partner_config.status && 1 == c.config.partner_config.passless) && (d.client_id = c.initConfig.client_id);
			e = [];
			for (j = 0; j < f.length; j++) e.push(f[j].VID);
			e.push(c.v.data.id);
			f = encodeURIComponent(J(L(M(c.mk.a4 + "poz" + g.userCache.a2, [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26]).toString(), g.userCache.sid + "_" + e.join("") + "_" + g.userCache.token)));
			d.ep = f;
			d.sid = g.userCache.sid;
			d.token = g.userCache.token;
			d.ctype = "12";
			d.ev = "1";
			d.oip = c.v.data.security.ip;
			return b += r(B(d, c.getUCParam(c.v.data.id)))
		},
		run: function() {
			if (! (null == this._adinfo || null == this._adinfo.VAL || 0 == this._adinfo.VAL.length)) {
				for (var b = {
					SUS: [],
					SU: [],
					SUE: [],
					CU: [],
					CUM: [],
					VTVC: []
				},
				c = 0, e = 0; e < this._adinfo.VAL.length; e++) {
					var f = this._adinfo.VAL[e];
					if (! (null == f.VID || null == f.VQT)) {
						null == f.SU && (f.SU = []);
						null == f.SUE && (f.SUE = []);
						if (0 == e) b.SUS = f.SUS || [];
						else for (var g = 0; g < f.SUS.length; g++) b.SU.push({
							T: c,
							U: f.SUS[g].U
						});
						for (g = 0; g < f.SU.length; g++) {
							var h = f.SU[g].T + c;
							b.SU.push({
								T: h,
								U: f.SU[g].U
							})
						}
						if (e == this._adinfo.VAL.length - 1) b.SUE = f.SUE;
						else for (g = 0; g < f.SUE.length; g++) h = c + f.AL,
						b.SU.push({
							T: h,
							U: f.SUE[g].U
						});
						c += f.AL;
						b.CU.push({
							T: c,
							U: f.CU
						});
						b.CUM.push({
							T: c,
							CUM: f.CUM
						});
						1 == parseInt(f.VT) && b.VTVC.push({
							U: f.VC,
							T: c
						});
						if (0 != this._vt2nodes.length) for (g = 0; g < this._vt2nodes.length; g++) f = this._vt2nodes[g].VC,
						h = this._vt2nodes[g].pos_,
						-1 == h && b.VTVC.push({
							U: f,
							T: 0
						}),
						h == e && b.VTVC.push({
							U: f,
							T: c
						})
					}
				}
				b.AL = c;
				b.RS = this.buildAdRS();
				this._info.VAL.push(b);
				this._info.src = b.RS
			}
			this.dispatch({
				type: P,
				data: this._info
			})
		}
	};
	var T = function(b, c) {
		this._handler = {};
		this.player = b;
		this.video = this.player.video;
		this.controls = this.player.controls;
		this._adplugin = this.player._adplugin;
		this._adplugin.adplayer = this;
		this.video.preload = "none";
		this.video.src = c.data.urls[0];
		h.log("ad src=" + this.video.src);
		this.video.style.display = "block";
		this._addata = c.data;
		this._addata.curnum = 0;
		this._playTag = [];
		this.bindAdEvent();
		this._adreporter = new N(this, this._addata)
	};
	T.prototype = {
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		dispatch: function(b) {
			b && this._handler[b.type] && (b._target = this, this._handler[b.type](b))
		},
		bindAdEvent: function() {
			this.bind_fadtoplay = c.bindAsEventListener(this, this.onPlayClick);
			this.bind_fadplay = c.bindAsEventListener(this, this.onAdPlay);
			this.bind_fadended = c.bindAsEventListener(this, this.onAdEnded);
			this.bind_faderror = c.bindAsEventListener(this, this.onAdError);
			this.bind_fadpause = c.bindAsEventListener(this, this.onAdPause);
			this.bind_fadsuspend = c.bindAsEventListener(this, this.onAdSuspend);
			this.bind_fadstalled = c.bindAsEventListener(this, this.onAdStalled);
			this.bind_fadwaiting = c.bindAsEventListener(this, this.onAdWaiting);
			this.bind_fadloadedmetadata = c.bindAsEventListener(this, this.onAdLoadedMetaData);
			this.bind_fadtimeupdate = c.bindAsEventListener(this, this.onAdTimeUpdate);
			c.addEventHandler(this.video, "play", this.bind_fadplay);
			c.addEventHandler(this.video, "ended", this.bind_fadended);
			c.addEventHandler(this.video, "error", this.bind_faderror);
			c.addEventHandler(this.video, "pause", this.bind_fadpause);
			c.addEventHandler(this.video, "suspend", this.bind_fadsuspend);
			c.addEventHandler(this.video, "stalled", this.bind_fadstalled);
			c.addEventHandler(this.video, "waiting", this.bind_fadwaiting);
			c.addEventHandler(this.video, "loadedmetadata", this.bind_fadloadedmetadata);
			c.addEventHandler(this.video, "timeupdate", this.bind_fadtimeupdate);
			this.shadow = this.controls.buttons.shadow;
			this.videobtn = this.controls.buttons.videobtn;
			c.addEventHandler(this.videobtn, "click", this.bind_fadtoplay, !0)
		},
		removeAdEvent: function() {
			c.removeEventHandler(this.video, "play", this.bind_fadplay);
			c.removeEventHandler(this.video, "ended", this.bind_fadended);
			c.removeEventHandler(this.video, "error", this.bind_faderror);
			c.removeEventHandler(this.video, "pause", this.bind_fadpause);
			c.removeEventHandler(this.video, "suspend", this.bind_fadsuspend);
			c.removeEventHandler(this.video, "stalled", this.bind_fadstalled);
			c.removeEventHandler(this.video, "waiting", this.bind_fadwaiting);
			c.removeEventHandler(this.video, "timeupdate", this.bind_fadtimeupdate);
			c.removeEventHandler(this.video, "loadedmetadata", this.bind_fadloadedmetadata);
			c.removeEventHandler(this.videobtn, "click", this.bind_fadtoplay, !0)
		},
		onPlayClick: function() {
			this.video.play()
		},
		checkVTVC: function(b) {
			var c = this._addata.vtvc;
			if (! (null == c || 0 === c.length)) for (var e = 0; e < c.length; e++) {
				var f = c[e];
				f.pos_ == b - 1 && D(f.VC, "js")
			}
		},
		play: function() {
			this.checkVTVC(0);
			this.video.load();
			this.video.play()
		},
		leftSecond: function() {
			for (var b = this._addata.curnum,
			c = this._addata.seconds.length,
			e = this._addata.seconds[b] - this.video.currentTime, b = b + 1; b < c; b++) e += this._addata.seconds[b];
			return parseInt(e)
		},
		clearTimer: function() {
			clearInterval(this._checkTimer);
			this._checkTimer = null
		},
		checkPause: function() {
			if (!this._checkTimer) {
				var b = this;
				this._timelist = [];
				this._checkTimer = setInterval(function() {
					if (b.video.paused) b.onAdPause();
					else b._timelist.push(b.video.currentTime),
					3 <= b._timelist.length && (1 > Math.abs(b._timelist[0] - b._timelist[2]) && (h.log("<b>ad unexpected pause</b>"), b.video.play(), 0 == b.leftSecond() && (h.log("<b>exception left = 0 </b>"), b.onAdEnded())), b._timelist = [])
				},
				1E3)
			}
		},
		onAdPlay: function() {
			this.checkPause();
			var b = this.controls.container.poster;
			c.hide(this.controls.buttons.videobtn);
			c.hide(b);
			c.hide(c.get(".x-video-info"));
			this.video.style.display = "block";
			b = this._addata.curnum;
			h.log("left=" + this.leftSecond() + " curtotal=" + this._addata.seconds[b] + " curtime=" + this.video.currentTime);
			this._adplugin.setLeftSecond(this.leftSecond());
			var d = this;
			setTimeout(function() {
				h.log("ad media timeout check begin = " + d._adBegin);
				d._adBegin || (d.removeAdEvent(), d._adplugin.hide(), d._adplugin.reportTime("advideo", -1, !1), d.dispatch({
					type: z,
					data: !0
				}))
			},
			1E4);
			this._playTag[b] || (this._playTag[b] = !0, this._adfirsttu = !1, this._adplugin.recordTime("advideo"), l.appendItem("phase", "adplay"))
		},
		uglyClose: function() {
			this.video.src = "";
			this.video.load();
			this.video.play()
		},
		onAdError: function() {
			this.checkVTVC(this._addata.curnum + 1);
			this.removeAdEvent();
			this._adplugin.hide();
			this._adplugin.reportTime("advideo", -1, !1);
			this.dispatch({
				type: z,
				data: !0
			})
		},
		onAdEnded: function(b) {
			h.log("ad ended");
			this._adreporter.sendSUE();
			this.checkVTVC(this._addata.curnum + 1);
			if (this._addata.curnum < this._addata.urls.length - 1) this.onMiddleAdEnded(b);
			else this.removeAdEvent(),
			this._adplugin.hide(),
			this.clearTimer(),
			this.dispatch({
				type: C,
				data: !0
			}),
			l.appendItem("phase", "adend")
		},
		onMiddleAdEnded: function() {
			h.log("onMiddleAdEnded");
			this._pauseLeftSec = !0;
			var b = this;
			setTimeout(function() {
				b._pauseLeftSec = !1
			},
			1E3);
			this._addata.curnum++;
			this.video.src = this._addata.urls[this._addata.curnum];
			this.video.load();
			this.video.play();
			this._adBegin = !1
		},
		onAdPause: function() {
			this.player.video.ended || (c.show(this.controls.buttons.videobtn), c.hide(this.controls.buttons.shadow))
		},
		onAdSuspend: function() {
			h.log("<font color=red>ad suspend</font>")
		},
		onAdStalled: function() {
			h.log("<font color=red>ad stalled</font>")
		},
		onAdWaiting: function(b) {
			this.controls.onWaiting(b)
		},
		onAdTimeUpdate: function() {
			c.hide(this.controls.buttons.loading);
			this._adBegin = !0;
			c.hide(this.controls.buttons.loading);
			this._pauseLeftSec || this._adplugin.setLeftSecond(this.leftSecond());
			this._adreporter.sendSU(this.video.currentTime);
			0.5 <= this.video.currentTime && this._adplugin.show();
			this._adfirsttu || (this._adfirsttu = !0, this._adreporter.sendSUS(), this._adreporter.sendVC(), this._adplugin.reportTime("advideo"), g.isNeedAdrTrick() && g.adrInvalidPauseCheck(this.video), 0 === this._adplugin.SKIP && this.dispatch({
				type: H
			}))
		},
		onAdLoadedMetaData: function() {
			this._adBegin = !0
		},
		onAdClick: function() {
			this.video.pause();
			this._adreporter.sendCUM();
			var b = this._addata,
			b = b.info.VAL[b.curnum].CU;
			h.log("click cu=" + b);
			window.open(b, "", "", !1)
		}
	};
	W = c.https + "//mf.atm.youku.com/mf?";
	X = c.https + "//mb.atm.youku.com/mb?";
	Y = c.https + "//mp.atm.youku.com/mp?";
	C = "adend";
	z = "aderror";
	P = "frontAdinfoadapterok";
	H = void 0;
	var U = function(b, d, e) {
		this._handler = {};
		this.player = b;
		this.sid = e;
		this._advids = [];
		this._adsecs = [];
		this._adsrcs = [];
		this._vid = d.data.video.encodeid;
		this._advert = c.get(".x-advert");
		this._adskip = this._advert.getElementsByClassName("x-advert-skip")[0];
		this._adcount = this._advert.getElementsByClassName("x-advert-countdown")[0];
		this._adknowdet = this._advert.getElementsByClassName("x-advert-detail")[0];
		this.init(d);
		this.bindEvent()
	};
	U.prototype = {
		init: function(b) {
			this.initRequestParam(b);
			this._adskipTxt = this._adskip.getElementsByClassName("x-advert-txt")[0];
			this._adskipTxt.innerHTML = "\u8df3\u8fc7\u5e7f\u544a";
			this._adcountTxt = this._adcount.getElementsByClassName("x-advert-txt")[0];
			this._adcountTxt.innerHTML = "\u5e7f\u544a <span class=x-advert-sec></span> \u79d2";
			this._adsec = this._adcountTxt.getElementsByClassName("x-advert-sec")[0]
		},
		getSubCategories: function(b) {
			for (var c = "",
			e = 0; e < b.length; e++) c += b[e].id + "|";
			return c.substring(0, c.length - 1)
		},
		initRequestParam: function(b) {
			var d = {
				site: 1,
				p: 0,
				vl: parseInt(b.data.video.seconds),
				fu: 0,
				ct: b.data.video.category_letter_id,
				cs: this.getSubCategories(b.data.video.subcategories),
				d: 0,
				paid: b.data.show ? b.data.show.pay: 0,
				s: b.data.show ? b.data.show.id: 0,
				sid: this.sid,
				td: b.data.video.source ? b.data.video.source: 0,
				v: b.data.id,
				vip: b.data.user.vip ? 1 : 0,
				wintype: "xplayer_m3u8",
				u: b.data.video.userid,
				bt: g.isPad ? "pad": "phone",
				os: g.isMobileIOS ? "ios": "Android",
				rst: g.isMobileIOS ? "m3u8": "3gphd",
				tict: 0,
				aw: "w",
				vs: "1.0"
			};
			null != c.config.partner_config && (d.partnerid = c.initConfig.client_id, d.atm = c.config.partner_config.atm);
			for (var e in c.initConfig.adconfig) d[e] = c.initConfig.adconfig[e];
			this._param = d;
			this._ti = encodeURIComponent(b.data.video.title);
			this._k = encodeURIComponent((b.data.video.tags || []).join("|"));
			this.loadPartnerParam()
		},
		loadPartnerParam: function() {},
		partnerParse: function() {},
		initRequestParam_: function(b) {
			var d = {
				ct: b.data.video.category_letter_id,
				cs: b.data.video.subcategories,
				v: b.data.id,
				t: parseInt(b.data.video.seconds),
				u: b.data.video.userid,
				fileid: "todo",
				winType: "xplayer_m3u8",
				partnerid: c.config.partnerId,
				sid: this.sid,
				k: "",
				td: "todo"
			};
			d.s = b.data.show ? b.data.show.id: "";
			b.user && (d.vip = b.data.user.vip ? 1 : 0);
			d.paid = b.data.show ? b.data.show.pay: 0;
			for (var e in c.initConfig.adconfig) d[e] = c.initConfig.adconfig[e];
			this._param = d
		},
		bindEvent: function() {
			var b = this;
			this.fSkipAd = function() {
				b.adplayer.video.pause();
				window.open(c.https + "//cps.youku.com/redirect.html?id=000002bf", "", "", !1)
			};
			this._adskip.addEventListener("click", this.fSkipAd, !1);
			this._adknowdet.addEventListener("click",
			function() {
				h.log("detail clicked");
				b.adplayer.onAdClick("")
			},
			!1)
		},
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		dispatch: function(b) {
			b && this._handler[b.type] && (b._target = this, this._handler[b.type](b))
		},
		show: function() {
			c.show(this._advert)
		},
		hide: function() {
			c.hide(this._advert)
		},
		setLeftSecond: function(b) {
			h.log(b);
			this._adsec && (this._adsec.innerText = b)
		},
		splitVTVC: function(b) {
			h.log("split adinfo vt vc");
			this._vtvc = [];
			var c = {},
			e;
			for (e in b)"VAL" != e && (c[e] = b[e]);
			c.VAL = [];
			b = b.VAL;
			for (e = 0; e < b.length; e++) 2 === parseInt(b[e].VT) ? (b[e].pos_ = e - 1 - this._vtvc.length, this._vtvc.push(b[e])) : null == b[e].RS || ("" == b[e].RS.trim() || null == b[e].VID || null == b[e].VQT) || c.VAL.push(b[e]);
			return c
		},
		checkSkip: function(b) {
			b && 0 === parseInt(b.SKIP) && (c.hide(this._adskip), this.SKIP = 0)
		},
		adParseUnited: function(b) {
			this.checkSkip(b);
			l.appendItem("phase", "adinfo");
			this.reportTime("adinfo");
			b && b.VAL && (h.log("<b>before split val length =  " + b.VAL.length + "</b>"), b = this.splitVTVC(b), h.log("<b>after : val length =  " + b.VAL.length + "</b>"));
			if (null == b || null == b.VAL || 0 == b.VAL.length) b = {
				VAL: []
			},
			this.dispatch({
				type: "unitedfrontadinfook",
				data: {
					info: {
						VAL: []
					},
					vtvc: this._vtvc || []
				}
			});
			else {
				var b = new Ba(b, this._vtvc),
				c = this;
				b.addEventListener(P,
				function(b) {
					h.log("ad info adapter ok");
					c.dispatch({
						type: "unitedfrontadinfook",
						data: {
							info: b.data,
							vtvc: c._vtvc || []
						}
					})
				});
				b.run()
			}
		},
		adParse: function(b) {
			this.checkSkip(b);
			l.appendItem("phase", "adinfo");
			this.reportTime("adinfo");
			if (b && b.VAL) for (var b = this.splitVTVC(b), c = b.VAL, e = 0; e < c.length; e++) this._adsrcs.push(c[e].RS),
			this._adsecs.push(parseInt(c[e].AL));
			h.log("frontad len =" + this._adsrcs.length);
			this.dispatch({
				type: "frontAdinfook",
				data: {
					ids: this._advids || [],
					urls: this._adsrcs,
					seconds: this._adsecs,
					info: b,
					vtvc: this._vtvc || []
				}
			})
		},
		adParsePause: function(b) {
			h.log("<b> ad parse pause </b>");
			l.appendItem("phase", "pauseadinfo");
			this.reportTime("adinfo");
			null == b || null == b.VAL || 0 == b.VAL.length || 10 != b.P ? this.dispatch({
				type: "pauseAdinfoerror"
			}) : (h.log("<b>pause ad len = " + b.VAL.length + "</b>"), this.dispatch({
				type: "pauseAdinfook",
				data: {
					info: b
				}
			}))
		},
		frontAd: function() {
			this._param.fu = this.player.controls.fullscreenPanel.fullFlag() ? 1 : 0;
			this._param.p = 7;
			var b = this;
			q.jsonp({
				url: W,
				data: B(this._param, {
					ti: this._ti,
					k: this._k
				}),
				time: 8E3,
				success: function(d) {
					g.isIPAD ? (h.log("<font color=red> new m3u8 api</font>"), c.OLD_M3U8 = !1, b.adParseUnited(d)) : b.adParse(d)
				},
				fail: function() {
					h.log("adinfo timeout");
					b.reportTime("adinfo", -1);
					b.dispatch({
						type: "frontAdinfotimeout",
						data: {
							timeout: 8E3
						}
					})
				}
			});
			this.recordTime("adinfo")
		},
		pauseAd: function() {
			this._param.r_ = parseInt(1E4 * Math.random());
			this._param.p = 10;
			this._param.fu = this.player.controls.fullscreenPanel.fullFlag() ? 1 : 0;
			var b = this;
			q.jsonp({
				url: Y,
				data: B(this._param, {
					ti: this._ti,
					k: this._k
				}),
				callback: "callback",
				time: 1E3,
				success: function(c) {
					b.adParsePause(c)
				},
				fail: function() {
					h.log("pause ad info timeout");
					b.reportTime("adinfo", -1);
					b.dispatch({
						type: "pauseadinfotimeout",
						data: {
							timeout: 8E3
						}
					})
				}
			});
			this.recordTime("adinfo")
		},
		recordTime: function(b) {
			null == this._timearr && (this._timearr = {});
			this._timearr[b] = (new Date).getTime()
		},
		reportTime: function(b, c, e) {
			null == this._timearr && (this._timearr = {});
			c = c || (new Date).getTime() - this._timearr[b];
			this.player._reporter.sendUepReport({
				adinfo: "valfload",
				advideo: "adload"
			} [b], c, e)
		},
		backAd: function() {
			this._param.fu = this.player.controls.fullscreenPanel.fullFlag();
			this._param.p = 9;
			this._param.ctu = 0;
			var b = this;
			q.jsonp({
				url: X,
				data: B(this._param, {
					ti: this._ti,
					k: this._k
				}),
				time: 5E3,
				success: function(c) {
					b.adParse(c)
				},
				fail: function() {
					h.log("adinfo timeout");
					b.dispatch({
						type: " backAdinfotimeout",
						data: {
							timeout: 5E3
						}
					})
				}
			})
		},
		insertAd: function() {
			this._param.ps = 0;
			this._param.pt = 0
		}
	};
	var N = function(b, c) {
		this.adplayer = b;
		this.addata = c;
		"undefined" == typeof c.curnum && (this.addata.curnum = 0)
	};
	N.prototype = {
		sendSUS: function() {
			var b = this.addata.info.VAL[this.addata.curnum].SUS;
			if ("undefined" != typeof b) for (var c = 0; c < b.length; c++) g.Log(b[c].U)
		},
		sendUnitedVTVC: function(b) {
			var b = b + 2,
			c = this.addata.info.VAL[0].VTVC;
			this._vtccache || (this._vtccache = []);
			for (var e = null,
			f = 1E6,
			g = 1E5,
			j = 0; j < c.length; j++) {
				var l = c[j].U,
				m = parseInt(c[j].T),
				n = b - m;
				0 <= n && n < g && (g = n, e = l, f = m)
			}
			null != e && -1 == this._vtccache.indexOf(f) && (this._vtccache.push(f), h.log("<b> vc = " + e + "</b>"), D(e, "js"))
		},
		sendVC: function() {
			var b = this.addata.info.VAL[this.addata.curnum];
			"undefined" != typeof b.VT && D(b.VC, "js")
		},
		sendSUS_: function() {
			var b = this.addata.info,
			c = this.addata.curnum + 2,
			e = b["A" + c].ATMSU,
			f = b["A" + c].ISOSU;
			g.Log(b["A" + c].SU);
			g.Log(e);
			g.Log(f)
		},
		sendSUE: function() {
			var b = this.addata.info.VAL[this.addata.curnum].SUE;
			if ("undefined" != typeof b) for (var c = 0; c < b.length; c++) g.Log(b[c].U)
		},
		sendSUE_: function() {
			var b = this.addata.info,
			c = this.addata.curnum + 2,
			e = b["A" + c].COU;
			g.Log(b["A" + c].OU);
			g.Log(e)
		},
		sendSU: function(b) {
			var c = this.addata.info.VAL[this.addata.curnum].SU;
			if ("undefined" != typeof c) {
				this._sucache || (this._sucache = []);
				for (var e = 1E4,
				f = 1E6,
				i = 0; i < c.length; i++) {
					var h = parseInt(c[i].T),
					j = b - h;
					0 <= j && j < e && (e = j, f = h)
				}
				if (1E6 != f && -1 == this._sucache.indexOf(f)) {
					this._sucache.push(f);
					for (i = 0; i < c.length; i++) parseInt(c[i].T) == f && g.Log(c[i].U)
				}
			}
		},
		sendSU_: function(b) {
			var c = c + 2,
			e = this.addata.info["A" + c].MT;
			e && b >= parseInt(e) && (b = this.addata.info["A" + c].CMU, g.Log(this.addata.info["A" + c].MU), g.Log(b))
		},
		sendCUM: function() {
			var b = this.addata.info.VAL[this.addata.curnum].CUM;
			if ("undefined" != typeof b) for (var c = 0; c < b.length; c++) g.Log(b[c].U)
		},
		sendUnitedCUM: function(b) {
			var c = this.addata.info.VAL[0].CUM;
			if (! ("undefined" == typeof c || 0 === c.length)) for (var e = 0; e < c.length; e++) if (b < parseInt(c[e].T)) {
				for (b = 0; b < (c[e].CUM || []).length; b++) g.Log(c[e].CUM[b].U);
				break
			}
		},
		sendCUM_: function() {
			var b = this.addata;
			g.Log(b.info["A" + (b.curnum + 2)].VCU)
		}
	};
	var Ca = function(b, c) {
		this._handler = {};
		this.player = b;
		this.video = this.player.video;
		this.controls = this.player.controls;
		this._adplugin = this.player._adplugin;
		this._adplugin.adplayer = this;
		this._addata = c.data.info;
		this.video.preload = "none";
		this.video.src = this._addata.VAL[0].RS;
		h.log("ad src=" + this.video.src);
		this.video.style.display = "block";
		this._playTag = [];
		this.bindAdEvent();
		this._adreporter = new N(this, {
			curnum: 0,
			info: this._addata
		})
	};
	Ca.prototype = {
		addEventListener: function(b, c) {
			this._handler[b] = c
		},
		removeEventListener: function(b) {
			this._handler[b] = null
		},
		dispatch: function(b) {
			b && this._handler[b.type] && (b._target = this, this._handler[b.type](b))
		},
		bindAdEvent: function() {
			this.bind_fadtoplay = c.bindAsEventListener(this, this.onPlayClick);
			this.bind_fadplay = c.bindAsEventListener(this, this.onAdPlay);
			this.bind_fadended = c.bindAsEventListener(this, this.onAdEnded);
			this.bind_faderror = c.bindAsEventListener(this, this.onAdError);
			this.bind_fadpause = c.bindAsEventListener(this, this.onAdPause);
			this.bind_fadsuspend = c.bindAsEventListener(this, this.onAdSuspend);
			this.bind_fadstalled = c.bindAsEventListener(this, this.onAdStalled);
			this.bind_fadwaiting = c.bindAsEventListener(this, this.onAdWaiting);
			this.bind_fadloadedmetadata = c.bindAsEventListener(this, this.onAdLoadedMetaData);
			this.bind_fadtimeupdate = c.bindAsEventListener(this, this.onAdTimeUpdate);
			this.bind_fademptied = c.bindAsEventListener(this, this.onEmptied);
			c.addEventHandler(this.video, "play", this.bind_fadplay);
			c.addEventHandler(this.video, "error", this.bind_faderror);
			c.addEventHandler(this.video, "pause", this.bind_fadpause);
			c.addEventHandler(this.video, "suspend", this.bind_fadsuspend);
			c.addEventHandler(this.video, "stalled", this.bind_fadstalled);
			c.addEventHandler(this.video, "waiting", this.bind_fadwaiting);
			c.addEventHandler(this.video, "loadedmetadata", this.bind_fadloadedmetadata);
			c.addEventHandler(this.video, "timeupdate", this.bind_fadtimeupdate);
			c.addEventHandler(this.video, "emptied", this.bind_fademptied);
			this.shadow = this.controls.buttons.shadow;
			this.videobtn = this.controls.buttons.videobtn;
			c.addEventHandler(this.videobtn, "click", this.bind_fadtoplay, !0)
		},
		removeAdEvent: function() {
			c.removeEventHandler(this.video, "play", this.bind_fadplay);
			c.removeEventHandler(this.video, "ended", this.bind_fadended);
			c.removeEventHandler(this.video, "error", this.bind_faderror);
			c.removeEventHandler(this.video, "pause", this.bind_fadpause);
			c.removeEventHandler(this.video, "suspend", this.bind_fadsuspend);
			c.removeEventHandler(this.video, "stalled", this.bind_fadstalled);
			c.removeEventHandler(this.video, "waiting", this.bind_fadwaiting);
			c.removeEventHandler(this.video, "timeupdate", this.bind_fadtimeupdate);
			c.removeEventHandler(this.video, "loadedmetadata", this.bind_fadloadedmetadata);
			c.removeEventHandler(this.video, "loadedmetadata", this.bind_fademptied);
			c.removeEventHandler(this.videobtn, "click", this.bind_fadtoplay, !0)
		},
		onPlayClick: function() {
			this.video.play()
		},
		play: function() {
			this.video.load();
			this.video.play()
		},
		onEmptied: function() {
			this.checkPause()
		},
		leftSecond: function() {
			return parseInt(Math.max(0, this._addata.VAL[0].AL - this.video.currentTime))
		},
		clearTimer: function() {
			clearInterval(this._checkTimer);
			this._checkTimer = null
		},
		checkPause: function() {
			if (!this._checkTimer) {
				var b = this;
				this._timelist = [];
				this._checkTimer = setInterval(function() {
					if (b.video.paused) b.onAdPause();
					else b._timelist.push(b.video.currentTime),
					3 <= b._timelist.length && (1 > Math.abs(b._timelist[0] - b._timelist[2]) && (h.log("<b>ad unexpected pause</b>"), b.video.play(), 0 == b.leftSecond() && (h.log("<b>exception left = 0 </b>"), b.onAdEnded())), b._timelist = [])
				},
				1E3)
			}
		},
		onAdPlay: function() {
			this.checkPause();
			var b = this.controls.container.poster;
			c.hide(this.controls.buttons.videobtn);
			c.hide(b);
			c.hide(c.get(".x-video-info"));
			this.video.style.display = "block";
			this._adplugin.setLeftSecond(this.leftSecond());
			var d = this;
			setTimeout(function() {
				h.log("ad media timeout check begin = " + d._adBegin);
				d._adBegin || (d.removeAdEvent(), d._adplugin.hide(), d._adplugin.reportTime("advideo", -1, !1), d.dispatch({
					type: z,
					data: !0
				}))
			},
			15E3);
			this._playTag[0] || (this._playTag[0] = !0, this._adfirsttu = !1, this._adplugin.recordTime("advideo"), l.appendItem("phase", "adplay"))
		},
		uglyClose: function() {
			h.log("united ugly close");
			this.onAdError()
		},
		onAdError: function() {
			this.removeAdEvent();
			this._adplugin.hide();
			this._adplugin.reportTime("advideo", -1, !1);
			this.clearTimer();
			this.dispatch({
				type: z,
				data: !0
			})
		},
		onAdEnded: function() {
			h.log("united ad ended");
			this._adreporter.sendSUE();
			this.removeAdEvent();
			this._adplugin.hide();
			this.clearTimer();
			this.dispatch({
				type: C,
				data: !0
			});
			l.appendItem("phase", "adend")
		},
		onAdPause: function() {
			this.player.video.ended || (c.show(this.controls.buttons.videobtn), c.hide(this.controls.buttons.shadow))
		},
		onAdSuspend: function() {
			h.log("<font color=red>ad suspend</font>")
		},
		onAdStalled: function() {
			h.log("<font color=red>ad stalled</font>")
		},
		onAdWaiting: function(b) {
			this.controls.onWaiting(b)
		},
		onAdTimeUpdate: function() {
			if (this.video.currentTime > this._addata.VAL[0].AL) this.onAdEnded();
			else c.hide(this.controls.buttons.loading),
			this._adBegin = !0,
			c.hide(this.controls.buttons.loading),
			this._adplugin.setLeftSecond(this.leftSecond()),
			this._adreporter.sendSU(this.video.currentTime),
			this._adreporter.sendUnitedVTVC(this.video.currentTime),
			this._adfirsttu || (this._adplugin.show(), this._adreporter.sendSUS(), this._adfirsttu = !0, this._adplugin.reportTime("advideo"), 0 === this._adplugin.SKIP && this.dispatch({
				type: H
			}))
		},
		onAdLoadedMetaData: function() {
			this._adBegin = !0
		},
		onAdClick: function() {
			this.video.pause();
			this._adreporter.sendUnitedCUM(this.video.currentTime || 0);
			for (var b = this._addata.VAL[0].CU, c = this.video.currentTime, e = 0; e < b.length; e++) {
				var f = b[e],
				g = f.U;
				if (c <= parseInt(f.T)) {
					window.open(g, "", "", !1);
					break
				}
			}
		}
	};
	var ia = function(b) {
		c.config = b;
		this.parentBox = p(c.config.parentBox);
		null == c.config.width && (c.config.width = this.parentBox.offsetWidth);
		this.buildDirectDom(this.parentBox)
	};
	ia.prototype = {
		buildDirectDom: function(b) {
			b.innerHTML = "<div id=x-player class=" + E(c.config.width) + '><div class="x-video-poster"><img id="x-img"/></div><div class="x-video-button"><div class="x-video-play-ico"></div></div><div class="x-video-info"><h1 class="x-title"></h1><div class="x-video-state" style="display:none"><span class="x-time-span"></span></div><div class="x-showmore"></div><div class="x-mask"></div></div>'
		},
		bindEvent: function() {
			this._videobtn = c.get(".x-video-button", this.parentBox);
			c.addEventHandler(this._videobtn, "click", c.bindAsEventListener(this, this.redirect))
		},
		startPlay: function(b, d) {
			c.v = b;
			c.videoInfo = d;
			c.videoInfo._playListData = b.data;
			this._pimg = c.get("#x-img", this.parentBox);
			this._pimg.src = b.data.video.logo;
			this._title = c.get(".x-title", this.parentBox);
			this._title.innerHTML = b.data.video.title;
			this._timespan = c.get(".x-time-span", this.parentBox);
			this._timespan.innerHTML = c.getTime(b.data.video.seconds);
			c.show(c.get(".x-video-poster", this.parentBox));
			c.show(c.get(".x-video-info", this.parentBox));
			this.adapterForReport();
			this._reporter = new S(this, c.v, c.videoInfo._sid);
			this.bindEvent()
		},
		onPlayStart: function() {
			g.playerCurrentState = g.playerState.PLAYER_STATE_PLAYING;
			c.config.events && c.config.events.onPlayStart && (h.log(g.playerCurrentState), h.log("api:onplaystart"), c.config.events.onPlayStart())
		},
		getSrc: function() {
			if (this.src) return this.src;
			"m3u8" == c.config.content ? this.src = c.videoInfo.src: null != c.videoInfo._videoSegsDic && null != c.videoInfo._videoSegsDic[c.defaultVideoType] && (this.src = c.videoInfo._videoSegsDic[c.defaultVideoType][0].src);
			return this.src
		},
		redirect: function() {
			var b = this.getSrc();
			h.log("redirect play src=" + b);
			g.isMIUI ? window.location.href = b: window.open(b, "", "", !1);
			this.onPlayStart();
			this._reporter.addPlayerStaticReport();
			this._reporter.sendTSLog(60);
			this._reporter.sendUserActionReport("xps", "c");
			this._reporter.sendThirdPartyReport("xplayer_dl");
			this._reporter.sendClientConsumeReport()
		},
		adapterForReport: function() {
			this.controls = {
				fullscreenPanel: {
					fullFlag: function() {
						return 1
					}
				}
			};
			this.video = {
				src: this.getSrc()
			};
			this.getQuality = function() {
				return "m"
			}
		}
	}; (function(b) {
		b.getCurrAbsPath = function() {
			if (document.currentScript) return document.currentScript.src;
			var b;
			try {
				a.b.c()
			} catch(c) {
				b = c.fileName || c.sourceURL || c.stack || c.stacktrace,
				!b && window.opera && (b = (("" + c).match(/of linked script \S+/g) || []).join(" "))
			}
			if (b) return b = b.split(/[@ ]/g).pop(),
			b = "(" == b[0] ? b.slice(1, -1) : b,
			b.replace(/(:\d+)?:\d+$/i, "");
			b = -1 === ("" + document.querySelector).indexOf("[native code]");
			for (var f = document.scripts,
			g = f.length - 1,
			h; h = f[g--];) if ("interactive" === h.readyState) return b ? h.getAttribute("src", 4) : h.src
		}
	})(window);
	c.https || (c.https = "https:" == location.protocol ? "https:": "http:");
	var ha = c.https + "//player.youku.com";
	D(ha + "/h5player/play.css?ver=" + j.replace(/[-:]/g, ""), "css");
	var ga = function(b) {
		this._id = b.id;
		this._pid = b.pid || "";
		this._url = b.url;
		this._box = p(b.parentBox);
		this._gotInfo = false;
		b.width = p(b.parentBox).offsetWidth;
		b.height = p(b.parentBox).offsetHeight;
		c.config = b;
		this.request()
	};
	ga.prototype = {
		request: function() {
			var b = this;
			q.jsonp({
				url: this._url + "/h5/videos/play.json",
				data: {
					vid: this._id,
					pid: this._pid
				},
				time: 5E3,
				success: function(c) {
					b.parse(c)
				},
				fail: function() {
					b.showError()
				}
			})
		},
		parse: function(b) {
			this._gotInfo = true;
			if (b.error == 0) {
				this.videoSrc = b.results.url;
				this.imgSrc = b.results.cover;
				this.buildDom()
			} else this.showError()
		},
		buildDom: function() {
			this._box.innerHTML = '<div id="x-player class="' + this.cssAdapt(parseInt(c.config.width)) + '><video class="x-video-player" id="youku-html5player-video" style="width: 100%; height: 100%; position: relative; display: none; top: -1000px;" src="' + this.videoSrc + '"></video><div class=x-video-poster><img src="' + this.imgSrc + '"></img></div><div class="x-video-loading"></div><div id="x-video-button" class="x-video-button"><div class="x-video-play-ico"></div></div></div>';
			this.video = c.get(".x-video-player", this._box);
			this.cover = c.get(".x-video-poster", this._box);
			this.videoBtn = c.get(".x-video-button", this._box);
			this.loading = c.get(".x-video-loading", this._box);
			c.addEventHandler(this.videoBtn, "click", c.bindAsEventListener(this, this.onOverBtnClick));
			c.addEventHandler(this.video, "ended", c.bindAsEventListener(this, this.onEnded));
			c.addEventHandler(this.video, "timeupdate", c.bindAsEventListener(this, this.onTimeUpdate));
			c.addEventHandler(this.video, "waiting", c.bindAsEventListener(this, this.onWaiting))
		},
		showError: function() {
			this._box.innerHTML = '<div style="background:#000; color:#FFF; text-align:center; color: white; line-height:' + this._box.offsetHeight + 'px " >\u89c6\u9891\u4fe1\u606f\u51fa\u9519 <a href="' + c.https + '//m.youku.com/webapp/dl?app=youku&amp;source=webqr" title="\u4e0b\u8f7d\u4f18\u9177\u5ba2\u6237\u7aef" target="_blank"><button type="button" class="x-btn" style="background: #3bb4fc;text-align: center;color: #fff;border-radius: 1rem;">\u7528app\u89c2\u770b</button></a></div>'
		},
		onOverBtnClick: function() {
			this.video.play();
			this.loading.style.display = "block";
			this.videoBtn.style.display = "none"
		},
		onEnded: function() {
			this.cover.style.display = "block";
			this.videoBtn.style.display = "block";
			this.loading.style.display = "none";
			this.video.style.display = "none"
		},
		onTimeUpdate: function() {
			if (this.loading.style.display != "none") this.loading.style.display = "none";
			if (this.video.style.display != "block") this.video.style.display = "block";
			if (this.cover.style.display != "none") this.cover.style.display = "none"
		},
		onWaiting: function() {
			this.loading.style.display = "block"
		},
		cssAdapt: function(b) {
			return g.isIPAD && window.location.href.indexOf("v.youku.com") >= 0 ? "x-player": b <= 200 ? "x-player x-player-200": b <= 300 ? "x-player x-player-200-300": b <= 660 ? "x-player x-player-300-660": b <= 800 ? "x-player x-player-660-800": "x-player"
		}
	};
	var Da = function(b, d) {
		this.setting = {
			debug: false,
			controls: c.get(".x-console"),
			feedback: c.get(".x-feedback"),
			container: {
				poster: c.get(".x-video-poster"),
				logo: c.get(".x-video-logo")
			},
			buttons: {
				pointVideo: c.get("#point-video"),
				playControl: c.get(".x-play-control"),
				play: c.get("#x-playbtn"),
				loading: c.get(".x-video-loading"),
				videobtn: c.get(".x-video-button"),
				videoinfo: c.get(".x-video-info"),
				shadow: c.get(".x-trigger"),
				currentTime: c.get(".x-time-current"),
				totalTime: c.get(".x-time-duration"),
				fullscreen: c.get(".x-fullscreen")
			},
			classNames: {
				play: "x-playing",
				pause: "x-pause"
			},
			init: function() {}
		};
		c.extend(this.setting, d);
		this.player = b;
		this.dashboard = this.setting.controls;
		this.container = this.setting.container;
		this.progressBar = new ta(b);
		this.progressBar.uCurrentTime = this.setting.buttons.currentTime;
		this.miniProgressBar = new pa(b);
		this.fullscreenPanel = new la(b);
		this.interactionPanel = new na(b);
		this.xplayer = c.get("#x-player");
		this.buttons = this.setting.buttons
	};
	Da.prototype = {
		init: function(b, d) {
			this.playLimit = new ra(this.player, b, this.setting.client_id);
			this.buttons.totalTime.innerHTML = d.totalTime ? c.getTime(d.totalTime) : "00:00";
			this.resetProgress();
			this.buttons.play.className = this.setting.classNames.play;
			this.playlog_time = 0;
			var e = this.container.poster.getElementsByTagName("img")[0];
			if (c.config.poster) e.src = c.config.poster;
			else if (b.data.error) {
				if (b.data.error != null && b.data.error.code == -203) {
					this.container.poster.style.backgroundColor = "black";
					e.parentNode.removeChild(e);
					c.show(this.container.poster)
				}
			} else {
				e.src = b.data.video.logo;
				this.container.poster.style.display = "block"
			}
			this._qualityPanel = new wa(this.player, b);
			this._languagePanel = new oa(this.player, b);
			this._playratePanel = new sa(this.player, b);
			this._payPanel = new qa(this.player, b);
			this._feedbackPanel = new R(this.player, b);
			this._informationPanel = new ma(this.player, b);
			this.tipPanel = new za(this.player, b);
			this.showlistPanel = new ya(this.player, b);
			this.bindDynamicEvent();
			this._isShowLogo = false;
			c.hide(this.container.logo);
			this.playLimit.limitAppShow();
			if (b.data.show && b.data.show.exclusive && b.data.stream[0].logo == "none") this._isShowLogo = true
		},
		bindDynamicEvent: function() {
			this.bind_mutualHide = c.bindAsEventListener(this, this.mutualHide);
			c.addEventHandler(this._languagePanel, "click", this.bind_mutualHide);
			c.addEventHandler(this._qualityPanel, "click", this.bind_mutualHide);
			c.addEventHandler(this.showlistPanel, "click", this.bind_mutualHide);
			c.addEventHandler(this._playratePanel, "click", this.bind_mutualHide);
			this.bind_progress = c.bindAsEventListener(this, this.onProgress);
			c.addEventHandler(this.progressBar, "progressing", this.bind_progress);
			c.addEventHandler(this.progressBar, "progressend", c.bindAsEventListener(this, this.onProgressEnd));
			c.addEventHandler(this._languagePanel, "settingdone", c.bindAsEventListener(this, this.onSettingDone));
			c.addEventHandler(this._qualityPanel, "settingdone", c.bindAsEventListener(this, this.onSettingDone));
			c.addEventHandler(this._playratePanel, "settingdone", c.bindAsEventListener(this, this.onSettingDone));
			c.addEventHandler(this._languagePanel, "settingshow", c.bindAsEventListener(this, this.onSettingShow));
			c.addEventHandler(this._qualityPanel, "settingshow", c.bindAsEventListener(this, this.onSettingShow));
			c.addEventHandler(this._playratePanel, "settingshow", c.bindAsEventListener(this, this.onSettingShow));
			c.addEventHandler(this._languagePanel, "settinghide", c.bindAsEventListener(this, this.onSettingHide));
			c.addEventHandler(this._qualityPanel, "settinghide", c.bindAsEventListener(this, this.onSettingHide));
			c.addEventHandler(this._playratePanel, "settinghide", c.bindAsEventListener(this, this.onSettingHide));
			c.addEventHandler(this.fullscreenPanel, "enterfullscreen", c.bindAsEventListener(this, this.onEnterFullScreen));
			c.addEventHandler(this.fullscreenPanel, "exitfullscreen", c.bindAsEventListener(this, this.onExitFullScreen))
		},
		retimer: function() {
			h.log("retimer");
			this.autoHideDashBoard()
		},
		hideDashBoard: function() {
			var b = this._payPanel,
			c = this._informationPanel,
			e = this.miniProgressBar,
			f = this.interactionPanel,
			g = this._languagePanel;
			this.setting.controls.style.display = "none";
			e.show();
			b.hide();
			c.hide();
			f.hideStatus();
			g.hide();
			this._qualityPanel.hide();
			this._playratePanel.hide()
		},
		autoHideDashBoard: function(b) {
			this.dashboardTimer && clearTimeout(this.dashboardTimer);
			var d = this;
			this.dashboardTimer = setTimeout(function() {
				var e = c.get(".x-showlist");
				e && e.style.display == "block" ? d.autoHideDashBoard(b) : d.player.video.paused || d.hideDashBoard()
			},
			b || 2E3)
		},
		onMultiTouch: function() {},
		showUglyHint: function() {},
		closeUglyHint: function() {},
		showBoardInfo: function() {
			c.show(this.setting.controls);
			this.miniProgressBar.hide();
			this._informationPanel.show();
			this._payPanel.hasPayInfo() && this._payPanel.show()
		},
		toggleDashBoard: function(b) {
			if (! (b.type == "touchend" && b.changedTouches.length > 1)) {
				this._sx = this._sx || 0;
				this._sy = this._sy || 0;
				b.changedTouches = b.changedTouches || [{
					clientX: this._sx,
					clientY: this._sy
				}];
				var c = {
					x: this._sx,
					y: this._sy
				},
				b = {
					x: b.changedTouches[0].clientX,
					y: b.changedTouches[0].clientY
				};
				if (!this._stmtag && this._sactionType !== 1 && this.isTouchTooShort(c, b, 100)) {
					c = this.setting.controls.style.display;
					if (c == "none" || c == "") {
						this.player._reporter.sendUserActionReport("xcd", "c");
						this.showBoardInfo();
						this.autoHideDashBoard();
						ua = (new Date).getTime()
					} else {
						this.player._reporter.sendUserActionReport("xhd", "c");
						clearTimeout(this.dashboardTimer);
						this.hideDashBoard()
					}
				}
			}
		},
		bindAdVideoBtnEvent: function() {
			c.addEventHandler(this.buttons.videobtn, "click", c.bindAsEventListener(this, this.onVideoBtnTouchEnd))
		},
		bindVideoBtnEvent: function() {
			c.addEventHandler(this.buttons.videobtn, "click", c.bindAsEventListener(this, this.onVideoBtnClick), true)
		},
		startPlay: function() {
			if (this._isShowLogo) {
				var b = this,
				d = function() {
					c.show(b.container.logo);
					b.player.video.removeEventListener("canplay", d)
				};
				b.player.video.addEventListener("canplay", d)
			}
		},
		bindEvent: function() {
			h.log("bind event");
			this.bind_uireinit = c.bindAsEventListener(this, this.uiInit);
			this.bind_play = c.bindAsEventListener(this, this.play);
			this.bind_redirect = c.bindAsEventListener(this, this.redirect);
			this.bind_showTimeTip = c.bindAsEventListener(this, this.showTimeTip);
			this.bind_hideTimeTip = c.bindAsEventListener(this, this.hideTimeTip);
			this.bind_changeVolume = c.bindAsEventListener(this, this.changeVolume);
			this.bind_toggleVolume = c.bindAsEventListener(this, this.toggleVolume);
			this.bind_gestureChange = c.bindAsEventListener(this, this.onGestureChange);
			this.bind_toggleDashBoard = c.bindAsEventListener(this, this.toggleDashBoard);
			this.bind_retimer = c.bindAsEventListener(this, this.retimer);
			c.addEventHandler(this.progressBar, "click", this.bind_uireinit);
			c.addEventHandler(this.setting.controls, "click", this.bind_retimer);
			c.addEventHandler(this.setting.controls, "touchstart", this.bind_retimer);
			c.addEventHandler(this.buttons.playControl, "click", this.bind_play);
			c.config.playType == "directsrc" && (!g.isIPHONE && !g.isIPOD ? c.addEventHandler(this.buttons.videobtn, "click", this.bind_redirect, true) : c.addEventHandler(this.buttons.videobtn, "click", c.bindAsEventListener(this, this.playIPH), true));
			c.addEventHandler(this.buttons.shadow, "touchstart", c.bindAsEventListener(this, this.shadowTouchStart));
			c.addEventHandler(this.buttons.shadow, "touchmove", c.bindAsEventListener(this, this.shadowTouchMove));
			c.addEventHandler(this.buttons.shadow, "touchend", c.bindAsEventListener(this, this.shadowTouchEnd));
			c.addEventHandler(this.buttons.shadow, "click", this.bind_toggleDashBoard);
			c.addEventHandler(this.buttons.shadow, "touchend", c.bindAsEventListener(this, this.onMultiTouch));
			c.addEventHandler(this.buttons.shadow, "gesturechange", this.bind_gestureChange)
		},
		removeEvent: function() {
			h.log("remove event begin");
			c.removeEventHandler(this.progressBar, "click", this.bind_uireinit);
			c.removeEventHandler(this.buttons.playControl, "click", this.bind_play);
			c.removeEventHandler(this.buttons.shadow, "click", this.bind_toggleDashBoard);
			c.removeEventHandler(this.progressBar, "touchstart", this.bind_uireinit);
			c.removeEventHandler(this._languagePanel, "click", this.bind_mutualHide);
			c.removeEventHandler(this._qualityPanel, "click", this.bind_mutualHide);
			c.removeEventHandler(this._playratePanel, "click", this.bind_mutualHide);
			this.progressBar.removeEvent();
			this.fullscreenPanel.removeEvent();
			this._languagePanel.removeEvent();
			this._qualityPanel.removeEvent();
			h.log("remove event end")
		},
		onGestureChange: function(b) {
			b.preventDefault();
			var c = this.fullscreenPanel.zoomStatus().indexOf("in") !== -1;
			if (b.scale > 1.1 && c || b.scale < 0.9 && !c) {
				b.method = "m";
				this.fullscreenPanel.switchFullScreen(b)
			}
		},
		toggleVolume: function() {},
		changeVolume: function() {},
		rePlay: function() {
			h.log("replay");
			this.player._reporter.sendUserActionReport("xrp", "c");
			y = false; (this._recommend = c.get(".x-recommend")) && c.get("#x-player").removeChild(this._recommend);
			this.resetProgress();
			this._first = false;
			this.player.replay();
			h.log("replay func end")
		},
		redirect: function(b) {
			this.player.redirect(b)
		},
		hideFacade: function() {
			var b = this.container.poster;
			c.hide(this.buttons.videobtn);
			c.hide(b);
			c.hide(c.get(".x-feedback"));
			h.log("<font color=blue>hide facade</font>")
		},
		onVideoBtnTouchStart: function(b) {
			this._vtsx = b.targetTouches[0].clientX;
			this._vtsy = b.targetTouches[0].clientY
		},
		onVideoBtnTouchEnd: function(b) {
			if (!this.onceReport) {
				this.onceReport = 59;
				this.player._reporter.addPlayerDurationReport(this.onceReport)
			}
			h.log("<font color=red>video btn clicked</font>");
			b = b || {};
			if (y) this.rePlay();
			else if (b && b.changedTouches && Math.abs(b.changedTouches[0].clientY - this._vtsy) > 50) h.log("videobtn too long y");
			else {
				this.playLimit.isLimit() && this.playLimit.limitAppHide();
				this.player._reporter.sendUserActionReport("xps", "c");
				this.hideFacade();
				this.container.poster.style.display = "none";
				if (this._hasAdReq === true) this.player.video.play();
				else {
					this._hasAdReq = true;
					this.player.video.load();
					h.log("active src=" + this.player.video.src);
					this.player.requestAd()
				}
			}
		},
		onVideoBtnClick: function() {
			if ((g.isIPHONE || g.isIPOD) && c.v.data.trial) this.player.video.style.display = "block";
			this.container.poster.style.display = "none";
			this.buttons.videobtn.style.display = "none";
			if (y) this.rePlay();
			else {
				this.player.video.load();
				this.player.video.play()
			}
		},
		playIPH: function() {
			if (!this.iphTag) {
				this.player.video.load();
				var b = this;
				this.player.video.addEventListener("timeupdate",
				function(c) {
					if (c.target.readyState == 4) b.iphTag = true
				})
			}
			this.player.video.play()
		},
		play: function(b) {
			b = b || {};
			if (y) this.rePlay();
			else {
				var c = this.player.video.paused;
				h.log("m3u8 isPause = " + c + " e = " + b);
				if (c) {
					if (this._payPanel.activeTime === 0) {
						this._payPanel.activeTime = -1;
						this.player.seek(0)
					} else this.player.video.play();
					this.player._reporter.sendUserActionReport("xpl", "c");
					this.interactionPanel.setStatus("\u64ad\u653e")
				} else {
					this.player.video.pause();
					this.player._reporter.sendUserActionReport("xpa", "c");
					this.interactionPanel.setStatus("\u6682\u505c")
				}
				this.checkPauseAd()
			}
		},
		isProperWH: function(b, d) {
			var e = c.get("#x-player");
			return e.offsetWidth >= b && e.offsetHeight >= d
		},
		isNeedPauseAd: function() {
			return this.player.video.paused && c.isLandScape()
		},
		checkPauseAd: function() {
			if (this.isNeedPauseAd()) {
				this._pauseAdPlugin = new U(this.player, c.v, c.videoInfo._sid);
				this._pauseAdPlugin.addEventListener("pauseAdinfook", c.bindAsEventListener(this, this.onPauseAdInfoOK));
				this._pauseAdPlugin.addEventListener("pauseadinfotimeout", c.bindAsEventListener(this, this.onPauseAdInfoTimeout));
				this._pauseAdPlugin.addEventListener("pauseAdinfoerror", c.bindAsEventListener(this, this.onPauseAdInfoERROR));
				window.adpluginobject = this._pauseAdPlugin;
				this._pauseAdPlugin.pauseAd();
				h.log("send pause ad request<br/>")
			} else {
				h.log("<font color=blue> donot need pause ad </font>");
				this.hidePauseAd();
				if (this.playLimit.isLimit()) this.playLimit.hasPausead = false
			}
		},
		hidePauseAd: function() {
			c.hide(c.get(".x-ad-pause"))
		},
		onPauseAdInfoOK: function(b) {
			h.log("pause info ok");
			if (!this._pauseAdStart) this._pauseAdStart = true;
			if (this.playLimit.isLimit() && this.playLimit._content) {
				this.playLimit.limitAppHide();
				this.playLimit.hasPausead = true
			}
			this._pauseAdPlayer = new Aa(this.player, b);
			this._pauseAdPlayer.play()
		},
		onPauseAdInfoTimeout: function(b) {
			h.log("pause info timeout = " + b.data.timeout);
			if (!this._pauseAdStart) this._pauseAdStart = true
		},
		onPauseAdInfoERROR: function() {
			h.log("<font color=blue>pause info error no info</font>");
			if (!this._pauseAdStart) this._pauseAdStart = true
		},
		autoShow: function() {
			this.show();
			var b = this;
			setTimeout(function() {
				b.hide()
			},
			5E3)
		},
		mutualHide: function(b) {
			if (b._target == this._languagePanel) {
				this._qualityPanel.hide(true);
				this._playratePanel.hide(true);
				this.showlistPanel.hide()
			} else if (b._target == this._qualityPanel) {
				this._languagePanel.hide(true);
				this._playratePanel.hide(true);
				this.showlistPanel.hide()
			} else if (b._target == this.showlistPanel) {
				this._qualityPanel.hide(true);
				this._languagePanel.hide(true);
				this._playratePanel.hide(true)
			} else if (b._target == this._playratePanel) {
				this._qualityPanel.hide(true);
				this._languagePanel.hide(true);
				this.showlistPanel.hide()
			}
		},
		show: function(b) {
			b ? c.show(this.buttons[b]) : c.show(this.setting.controls)
		},
		hide: function(b) {
			b ? c.hide(this.buttons[b]) : c.hide(this.setting.controls)
		},
		backAdPrepare: function() {
			this.dashboard.style.display = "none";
			this.buttons.shadow.display = "none"
		},
		onEnded: function() {
			this.dashboard.style.display = "none";
			this.buttons.shadow.display = "none";
			this.buttons.videobtn.style.display = "block";
			this._isShowLogo && c.hide(this.container.logo);
			this.container.poster.style.display = "block";
			this._informationPanel.show();
			this.miniProgressBar.hide();
			this.interactionPanel.hide();
			if (c.v.data.trial == null && c.initConfig.show_related != false) {
				this.playLimit.isLimit() && (this.playLimit.needOpen ? this.playLimit.limitAppEnd() : this.playLimit.limitAppHide());
				this._relatedPanel = new xa(this.player, c.v)
			}
		},
		onPlay: function() {
			if (!this.playlog_first) {
				window.playlog_start && window.playlog_start();
				this.playlog_first = true
			}
			this.playLimit._isLimit && this.playLimit.limitAppHide();
			this.player.video.style.display = "block";
			this.buttons.play.className = this.setting.classNames.pause;
			this.buttons.videobtn.style.display = "none";
			this.container.poster.style.display = "none";
			this.hidePauseAd();
			this.buttons.shadow.style.display = "block"; (this._recommend = c.get(".x-recommend")) && c.get("#x-player").removeChild(this._recommend);
			y = false;
			if (!this._first) {
				this._first = true;
				this._informationPanel.show();
				this.setting.controls.style.display = "block"
			}
			this.autoHideDashBoard()
		},
		onPause: function() { ! this.playLimit.hasPausead && (this.playLimit.isLimit() && (!this.playLimit._content || !this.progressBar.maybeSeek)) && this.playLimit.limitAppShow();
			this.buttons.play.className = this.setting.classNames.play;
			c.hide(this.buttons.loading);
			if (!this.interactionPanel.isVisible()) {
				this.showBoardInfo(); (!this.playLimit.isLimit() || !allow) && this.interactionPanel.setStatus("\u6682\u505c")
			}
		},
		onWaiting: function() {
			if (!this.player.video.paused && this.buttons.videobtn.style.display == "none") this.buttons.loading.style.display = "block"
		},
		onError: function() {
			this._isShowLogo && c.hide(this.container.logo)
		},
		onTryPlayEnded: function() {
			h.log("try end");
			this.player.video.pause();
			this._payPanel.activeTime = 0;
			y = true;
			this._payPanel.showTip()
		},
		onTimeUpdate: function(b) {
			this.buttons.loading.style.display = "none";
			if (b.target == this.player.video) {
				var c = this.player.currentTime;
				if (b.target.readyState == 4) {
					if (Math.abs(c - this.playlog_time) >= 10) {
						window.playlog_current && window.playlog_current(c);
						this.playlog_time = c
					}
					this.setProgress(c)
				}
				if (this._payPanel.hasPayInfo() && c >= this._payPanel.tryDuration()) {
					this.onTryPlayEnded();
					this.onPlayEnd()
				}
				this.playLimit.isLimit() && c >= this.playLimit.limitTime() && this.playLimit.needOpen && this.playLimit.limitAppEnd()
			}
		},
		onPlayEnd: function() {
			if (g.playerCurrentState != g.playerState.PLAYER_STATE_END) {
				if (this.playLimit._limitVip) this.playLimit._isLimit = false;
				g.playerCurrentState = g.playerState.PLAYER_STATE_END;
				if (c.config.events && c.config.events.onPlayEnd) {
					h.log("callback: on play end");
					c.config.events.onPlayEnd()
				}
			}
		},
		checkPlayLimit: function() {
			return this.playLimit.needOpen
		},
		removeControls: function() {
			this.video.controls = false
		},
		loadControls: function() {
			this.video.controls = true
		},
		setProgress: function(b) {
			b = Math.min(Math.max(b, 0), c.videoInfo.totalTime);
			this.progressBar.setProgress(b);
			this.miniProgressBar.setProgress(b);
			this.buttons.currentTime.innerHTML = c.getTime(this.progressBar.playTime)
		},
		resetProgress: function() {
			this.progressBar.resetProgress();
			this.miniProgressBar.resetProgress();
			this.buttons.currentTime.innerHTML = "00:00"
		},
		hideTimeTip: function(b) {
			if (b.srcElement.id == this.buttons.progressHandler.id) return false;
			this.buttons.progressTime.style.display = "none"
		},
		showTimeTip: function(b) {
			if (b.srcElement.id == this.buttons.progressHandler.id || b.srcElement.id == this.buttons.progressTime.id || b.srcElement.id == this.buttons.pointVideo.id) return false;
			b = b.offsetX / this.buttons.progressBar.offsetWidth;
			this.buttons.progressTime.innerHTML = c.getTime(b * c.videoInfo.totalTime);
			this.buttons.progressTime.style.left = Math.min(Math.max(b, 0.023), 0.977) * 100 + "%";
			this.buttons.progressTime.style.display = "block"
		},
		shadowTouchStart: function(b) {
			this.progressBar.maybeSeek = true;
			if (b.targetTouches.length > 1) this.interactionPanel.hide();
			else {
				this._sx = b.targetTouches[0].clientX;
				this._sy = b.targetTouches[0].clientY;
				this._smx = this._sx;
				this._smy = this._sy;
				this._presmx = this._sx;
				this._presmy = this._sy;
				this._deltaxs = [];
				this._ttime = this._stime = this.player.currentTime || 0;
				this._spretag = this._stmtag = false;
				this._presmt = this._sactionTime = (new Date).getTime();
				this._stmlrtag = this._sactionType = 0
			}
		},
		shadowTouchMove: function(b) {
			this.progressBar.maybeSeek = true;
			if (b.targetTouches.length > 1) this.interactionPanel.hide();
			else {
				this._smx = b.targetTouches[0].clientX;
				this._smy = b.targetTouches[0].clientY;
				this._smt = (new Date).getTime();
				var c = Math.abs(this._smx - this._sx),
				e = Math.abs(this._smy - this._sy),
				f = this._smt - this._sactionTime;
				if (this._stmlrtag === 0) this._stmlrtag = c > e ? 1 : -1;
				this._stmlrtag == 1 && b.preventDefault();
				if (this._sactionType != 1) if (c > 100 && c > e && f < 500) {
					h.log("quick seek moving");
					this.player.video.pause();
					this._sactionType = 1;
					f = this._smx > this._sx ? 30 : -30;
					this.interactionPanel.setTip(this._stime, f);
					this.interactionPanel.show()
				} else {
					if (c < 200 && e < 100 && f > 1E3) this._spretag = true;
					if (this._spretag && c > e || this._stmtag) {
						h.log("stmtag =" + this._stmtag);
						this._sactionType = 2;
						this._stmtag = true;
						this.player.video.pause();
						this.dragging(b)
					}
				}
			}
		},
		shadowTouchEnd: function(b) {
			if (b.changedTouches.length > 1) this.interactionPanel.hide();
			else {
				this.progressBar.maybeSeek = false;
				this.adrAdapt(b);
				if (this.isShadowTouchTooShort() && !this._stmtag && this._sactionType != 1) h.log("too short or horizontal");
				else {
					b = Math.abs(this._smy - this._sy) > Math.abs(this._smx - this._sx) ? "xdud": "xdlr";
					h.log("shadow action = " + b);
					this.player._reporter.sendUserActionReport(b, "d");
					if (this._sactionType == 2) {
						h.log("<br/><b>normal seek</b>");
						this.player.video.play();
						this.player.seek(this._ttime);
						this.interactionPanel.hide();
						this.player._reporter.sendUserActionReport("xtseek", "d")
					} else if (this._sactionType == 1) {
						b = this._smx - this._sx > 0 ? 30 : -30;
						h.log("<br/><font color=red>quick seek deltat = " + b + " cur=" + this._stime + "</font>");
						this.setProgress(this._stime + b);
						this.interactionPanel.setTip(this._stime, b);
						this.interactionPanel.show();
						this.interactionPanel.autoHide();
						this.player.video.play();
						this.player.seek(this._stime + b);
						this.player._reporter.sendUserActionReport("xqseek", "d");
						h.log("<br/>")
					}
				}
			}
		},
		dragging_: function(b) {
			var d = this._smx - this._presmx;
			this._deltaxs.push(d > 10 ? d / 2 : d);
			for (var e = d = 0; e < this._deltaxs.length; e++) d = d + this._deltaxs[e];
			b = Math.min(Math.max(d / b.currentTarget.offsetWidth * c.videoInfo.totalTime + this._stime, 0), c.videoInfo.totalTime);
			this.setProgress(b);
			this.interactionPanel.show();
			this._ttime = b;
			this._presmx = this._smx;
			this._presmy = this._smy;
			this._presmt = this._smt
		},
		dragging: function(b) {
			b = Math.min(Math.max((this._smx - this._sx) / b.currentTarget.offsetWidth * 60 + this._stime, 0), c.videoInfo.totalTime);
			this.setProgress(b);
			this.interactionPanel.setTip(this._ttime, b - this._ttime);
			this.interactionPanel.show();
			this._ttime = b;
			this._presmx = this._smx;
			this._presmy = this._smy;
			this._presmt = this._smt
		},
		onProgress: function(b) {
			this.interactionPanel.setTip(b.st || 0, b.dt || 0);
			this.interactionPanel.show()
		},
		onProgressEnd: function() {
			this.interactionPanel.hide()
		},
		onSettingDone: function() {
			this.interactionPanel.setStatus("\u8bbe\u7f6e\u6210\u529f")
		},
		onSettingShow: function() {
			h.log("<b>setting show</b>");
			clearTimeout(this.pbarClickTimer);
			this.progressBar.removeClickEvent()
		},
		onSettingHide: function() {
			h.log("<b>setting hide</b>");
			var b = this;
			this.pbarClickTimer = setTimeout(function() {
				b.progressBar.addClickEvent()
			},
			1E3)
		},
		onEnterFullScreen: function() {
			if (c.initConfig.events && c.initConfig.events.onFullScreen) c.initConfig.events.onFullScreen(true);
			g.isIPAD && c.addClass(this.setting.controls, "x-fs-console")
		},
		onExitFullScreen: function() {
			if (c.initConfig.events && c.initConfig.events.onFullScreen) c.initConfig.events.onFullScreen(false);
			g.isIPAD && c.removeClass(this.setting.controls, "x-fs-console")
		},
		adrAdapt: function(b) {
			if (g.isAndroid) {
				this._smx = b.changedTouches[0].clientX;
				this._smy = b.changedTouches[0].clientY;
				h.log("<hr/>adr smy= " + this._smy + " y = " + this._sy)
			}
		},
		isShadowTouchTooShort: function(b) {
			return this.isTouchTooShort({
				x: this._sx,
				y: this._sy
			},
			{
				x: this._smx,
				y: this._smy
			},
			b)
		},
		isTouchTooShort: function(b, c, e) {
			var f = Math.abs(c.x - b.x),
			f = f || 1.0E-6,
			b = (b = Math.abs(c.y - b.y)) || 1.0E-6;
			h.log(f + "," + b);
			e = e || 100;
			return f < e && b < e ? true: false
		},
		showShowListBtn: function() {
			this.showlistPanel.showListBtn()
		},
		hideShowListBtn: function() {
			this.showlistPanel.hideListBtn()
		},
		showLastTimeTip: function(b) {
			b <= 0 || this.tipPanel.showLastTimeTip(b)
		},
		uiInit: function() {
			h.log("uiInit");
			if (y) {
				y = false;
				this.buttons.videobtn.style.display = "block"
			}
		},
		onResize: function(b) {
			var d = p(c.config.parentBox).offsetWidth,
			e = p(c.config.parentBox).offsetHeight;
			if (d && e && c.resizeTag) {
				e = this.xplayer.className;
				if (this.xplayer) if (e.indexOf("fullscreen") === -1) this.xplayer.className = E(d);
				else {
					d = window.innerWidth;
					this.xplayer.className = E(d) + " x-player-fullscreen"
				}
				if (this._relatedPanel) this._relatedPanel.onResize(b)
			}
		}
	};
	var V = function(b) {
		this.video = b;
		this._startPlayTime = -1;
		this._waitTry = 0;
		this.forFlashState = "pause";
		this.currentTime = 0
	};
	V.prototype = {
		getVideo: function() {
			return this.video
		},
		getPlayerState: function() {
			return this.forFlashState
		},
		show: function() {
			c.show(this.video)
		},
		hide: function() {
			c.hide(this.video)
		},
		play: function() {
			c.v && c.v.data.trial && c.v.data.trial.time == 0 ? h.log("<b> trial time = 0  </b>") : this.video.play()
		},
		pause: function() {
			this.video.pause()
		},
		setupControls: function(b, c) {
			this.controls && this.controls.removeEvent();
			return new Da(b, c)
		},
		hideControls: function() {
			this.controls.hide()
		},
		showControls: function() {
			this.controls.show()
		},
		removeControls: function() {
			this.controls.removeControls()
		},
		loadControls: function() {
			this.controls.loadControls()
		},
		retry: function() {},
		showError: function(b) {
			if (!this.errorBox) {
				this.errorBox = document.createElement("div");
				this.errorBox.style.cssText = "position:absolute;width:100%;top:50%;display:none;text-align:center;";
				this.video.parentNode.appendChild(this.errorBox)
			}
			this.errorBox.innerHTML = b;
			this.errorBox.style.marginTop = "-" + this.errorBox.offsetHeight / 2 + "px";
			this.errorBox.style.display = "block"
		},
		onLoadStart: function() {},
		onCanPlay: function() {},
		onLoadedData: function() {},
		onLoadedMetaData: function() {},
		onAbort: function() {},
		onError: function() {
			this._reporter.sendUserActionReport("xve", "e");
			this._reporter.sendUepReport("videoload", -1, false);
			g.sendErrorReport(2001);
			if (this._retry-->=0) {
				if (this.video.src.indexOf("m3u8") !== -1) this.video.src = c.m3u8src_v2(c.v.data.id, c.defaultVideoType);
				h.log("video onerror retry it ,time=" + this.currentTime + " src=" + this.video.src);
				this.video.load();
				this.video.play();
				this.seek(this.currentTime);
				this.controls.onError()
			} else if (! (this.isOnePiece() && this.controls.checkPlayLimit() == true)) if (this._errorTag) this.controls.onError();
			else {
				this._errorTag = true;
				g.playerCurrentState = g.playerState.PLAYER_STATE_ERROR;
				g.showError({
					code: "2001",
					message: "\u62b1\u6b49\uff0c\u89c6\u9891\u51fa\u9519\uff0c\u8bf7\u5237\u65b0"
				},
				"\u62b1\u6b49\uff0c\u89c6\u9891\u51fa\u9519\uff0c\u8bf7\u5237\u65b0")
			}
		},
		onPause: function() {
			this.forFlashState = "pause";
			if (c.initConfig.events && c.initConfig.events.onPause) c.initConfig.events.onPause();
			this.controls.onPause()
		},
		onPlayIPH: function() {
			h.log("onplayiph");
			this.onPlayStart();
			if (this._firstPlayTag) {
				if (this._endedIPH == true) {
					this._reporter.tsInit();
					this._reporter.sendTSLog(60);
					this._reporter.addClientDurationReport(60);
					this._reporter.addPlayerDurationReport(62)
				}
			} else {
				this._firstPlayTag = true;
				this._reporter.addPlayerStaticReport();
				this._reporter.rs = 1;
				this._reporter.sendTSLog(60);
				this._reporter.addClientDurationReport(60);
				this._reporter.sendUserActionReport("xps", "c");
				this._reporter.sendLoadedTime(3);
				this._reporter.sendThirdPartyReport("xplayer_iph");
				this._reporter.sendClientConsumeReport()
			}
		},
		onTimeUpdateIPH: function() {
			this.currentTime = this.video.currentTime
		},
		onEndedIPH: function() {
			this.onPlayEnd();
			this._reporter.addPlayerDurationReport(61);
			this._reporter.sendTSLog(61);
			this._reporter.addClientDurationReport(61);
			this._endedIPH = true
		},
		onPlay: function() {
			this.forFlashState = "playing";
			if (c.initConfig.events && c.initConfig.events.onPlay) c.initConfig.events.onPlay();
			h.log("onplay");
			this.controls.onPlay();
			if (this._firstPlayTag) {
				if (g.playerCurrentState == g.playerState.PLAYER_STATE_END || g.playerCurrentState == g.playerState.PLAYER_STATE_ERROR) this.onPlayStart()
			} else {
				this._firstPlayTag = true;
				this.onPlayStart();
				if (c.initConfig.firsttime) {
					h.log("starttime = " + c.initConfig.firsttime);
					this.seek(c.initConfig.firsttime)
				} else this.seekToLastPoint() || this.skipHead();
				this._startPlayTime = (new Date).getTime();
				this._reporter.addPlayerStaticReport();
				this._reporter.rs = 1;
				this._reporter.sendTSLog(60);
				this._reporter.addClientDurationReport(60);
				this._reporter.sendClientConsumeReport()
			}
			l.appendItem("phase", "videoplay")
		},
		onVolumeChange: function() {},
		onPlaying: function() {
			this.forFlashState = "playing"
		},
		onStalled: function(b) {
			h.log("<b>stalled</b>");
			if (this.isOnePiece() || b.target == this.video) this.controls.onWaiting(b)
		},
		onSuspend: function() {},
		onWaiting: function(b) {
			this.forFlashState = "waiting";
			if (c.initConfig.events && c.initConfig.events.onBuffer) c.initConfig.events.onBuffer();
			if (this.isOnePiece() || b.target == this.video) this.controls.onWaiting(b)
		},
		onSeeked: function() {
			h.log("onSeeked waitSkip=" + this._waitSeek + " try= " + this._waitTry);
			if (!isNaN(this._waitSeek)) {
				var b = this._waitSeek;
				if (Math.abs(this.video.currentTime - b) > 10 && this._waitTry <= 5) {
					this._waitTry = this._waitTry + 1;
					this.seek(b)
				} else this._waitSeek = "NaN"
			}
		},
		onSeeking: function(b) {
			h.log("seeking");
			if (this.isOnePiece() || b.target == this.video) {
				var c = this;
				setTimeout(function() {
					c.controls.onWaiting(b)
				},
				100)
			}
		},
		onDurationChange: function() {},
		onProgress: function() {},
		onRateChange: function() {},
		customWaiting: function() {
			var b = this;
			if (this.video.paused == false && this._lastTime === this.currentTime) {
				h.log("custom waiting!:) networkstate=" + this.video.networkState);
				this.controls.onWaiting()
			}
			this._lastTime = this.currentTime;
			setTimeout(function() {
				b.customWaiting()
			},
			5E3)
		},
		sendLoadedTime: function() {
			var b = 0,
			b = this._startPlayTime == -1 ? 0 : (new Date).getTime() - this._startPlayTime;
			this._reporter.sendLoadedTime(b)
		},
		onTimeUpdate: function(b) {
			if (this.isOnePiece()) {
				this.currentTime = this.video.currentTime;
				if (c.unitedTag) this.currentTime = this.currentTime - c.unitedTag.offset
			} else {
				for (var d = 0,
				e = 0; e < x; e++) d = d + parseInt(c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType][e].seconds);
				this.currentTime = d + this.video.currentTime
			}
			this.controls.onTimeUpdate(b);
			if (!this._firstflag) {
				this._firstflag = true;
				this.customWaiting();
				this.recordLocalPlayPoint();
				this.sendLoadedTime();
				l.appendItem("phase", "videotimeupdate");
				g.isNeedAdrTrick() && g.adrInvalidPauseCheck(this.video)
			}
			if (!this._comscoreflag) {
				this._comscoreflag = true;
				this._reporter.sendThirdPartyReport("xplayer_h5")
			}
			this.skipTail(this.currentTime)
		},
		curVideo: function() {
			return this.video
		},
		getQuality: function() {
			if (c.config.content == "m3u8") {
				var b = this.video.src;
				if (b.indexOf("mp4") !== -1) return "m";
				if (b.indexOf("flv") !== -1) return "f";
				if (b.indexOf("hd2") !== -1) return "h"
			} else return "m"
		},
		bufferedEnd: function() {
			var b = this.curVideo().buffered;
			return b.length == 0 ? 0 : b.end(b.length - 1)
		},
		loadNextVideo: function() {
			var b = c.v.data.videos.next,
			d = this;
			h.log("loadNextVideo vid = " + b.encodevid);
			if (b.encodevid) {
				var e = {
					isFullScreen: true,
					vid: b.vid,
					encodevid: b.encodevid,
					Pt: window.playmode == 2 ? b.seq: null
				};
				c.config.nextAutoPlay = true;
				n.start(b.encodevid, "", c.config.content,
				function(b, c) {
					d.startPlay(b, c);
					try {
						onPlayerStart(e)
					} catch(g) {
						v.log("onPlayerStart error")
					}
				})
			}
		},
		onPlayEnd: function() {
			if (g.playerCurrentState != g.playerState.PLAYER_STATE_END) {
				g.playerCurrentState = g.playerState.PLAYER_STATE_END;
				h.log(g.playerCurrentState);
				if (c.config.events && c.config.events.onPlayEnd && c.v.data.videos) {
					h.log("callback: on play end");
					c.config.events.onPlayEnd(c.v.data.videos.next)
				} else {
					if (c.config.loop && this.replay) {
						v.log("--loop--");
						this.replay()
					}
					if (c.config.events && c.config.events.onPlayEnd) {
						h.log("callback: on play end");
						c.config.events.onPlayEnd()
					}
				}
			}
		},
		onPlayStart: function() {
			g.playerCurrentState = g.playerState.PLAYER_STATE_PLAYING;
			if (c.config.events && c.config.events.onPlayStart) {
				h.log(g.playerCurrentState);
				h.log("callback: on play start");
				c.config.events.onPlayStart()
			}
		},
		onMiddleEnded: function() {
			x++;
			this.video.src = c.multiPieceSrc(x);
			this.video.load();
			this.video.play();
			this.video.style.display = "block";
			h.log("middle src = " + this.video.src)
		},
		onEnded: function(b) {
			if (! (this.isOnePiece() && this.controls.checkPlayLimit() == true)) if (this.isOnePiece() || x == c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType].length - 1) {
				y = true;
				this._reporter.addPlayerDurationReport(61);
				this._reporter.sendTSLog(61);
				this._reporter.addClientDurationReport(61);
				this.clearLocalPlayPoint();
				this.showEndCard(b);
				l.appendItem("phase", "videoended")
			} else this.onMiddleEnded(b)
		},
		showEndCard: function(b) {
			this.video.style.display = "none";
			this.controls.onEnded(b);
			this.onPlayEnd()
		},
		onBeginFullscreen: function() {},
		onEndFullscreen: function() {
			if ((g.isIPHONE || g.isIPOD) && c.v.data.trial != null) this.video.style.display = "none"
		},
		detectIsPlaying: function(b) {
			var c = b || 0,
			e = this;
			clearTimeout(this.timeoutTimer);
			if (this.video.currentTime === 0 && c <= 60) {
				this.video.load();
				this.play();
				this.timeoutTimer = setTimeout(function() {
					e.detectIsPlaying(++c)
				},
				1E3)
			}
		},
		isOnePiece: function() {
			return c.config.content == "m3u8" || c.config.content == "mp4" && c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType].length == 1
		},
		removeEvent: function() {},
		bindEvent: function() {
			if (!c.v.data.error) {
				var b = {
					loadstart: "onLoadStart",
					canplay: "onCanPlay",
					loadeddata: "onLoadedData",
					loadedmetadata: "onLoadedMetaData",
					abort: "onAbort",
					error: "onError",
					pause: "onPause",
					waiting: "onWaiting",
					stalled: "onStalled",
					suspend: "onSuspend",
					play: "onPlay",
					volumechange: "onVolumeChange",
					playing: "onPlaying",
					seeked: "onSeeked",
					seeking: "onSeeking",
					durationchange: "onDurationChange",
					progress: "onProgress",
					ratechange: "onRateChange",
					timeupdate: "onTimeUpdate",
					ended: "onEnded",
					webkitbeginfullscreen: "onBeginFullscreen",
					webkitendfullscreen: "onEndFullscreen"
				},
				d;
				for (d in b) c.addEventHandler(this.video, d, c.bindAsEventListener(this, this[b[d]]))
			}
		}
	};
	var x = -1,
	y = !1;
	c.https = "https:" == location.protocol ? "https:": "http:";
	var ua = 0,
	va = 600,
	w = [],
	A = {
		flvhd: "\u6807\u6e05",
		flv: "\u6807\u6e05",
		mp4: "\u9ad8\u6e05",
		hd2: "\u8d85\u6e05"
	};
	c.WIN_TYPE = 30;
	c.defaultVideoType = null;
	c.defaultLanguage = "guoyu";
	c.resizeTag = !0;
	c.extend = function(b, c) {
		for (var e in c) b[e] = c[e]
	};
	c.inherits = function(b, c) {
		var e = function() {};
		e.prototype = c.prototype;
		b.prototype = new e;
		b.prototype.constructor = b
	};
	c.fire = function(b, c) {
		if (document.createEventObject) {
			var e = document.createEventObject();
			return b.fireEvent("on" + c, e)
		}
		e = document.createEvent("HTMLEvents");
		e.initEvent(c, true, true);
		return ! b.dispatchEvent(e)
	};
	c.bind = function(b, c) {
		return function() {
			return c.apply(b, arguments)
		}
	};
	c.bindAsEventListener = function(b, c) {
		var e = Array.prototype.slice.call(arguments).slice(2);
		return function(f) {
			return c.apply(b, [f || window.event].concat(e))
		}
	};
	c.getCurrentStyle = function(b) {
		return b.currentStyle || document.defaultView.getComputedStyle(b, null)
	};
	c.addEventHandler = function(b, d, e, f) {
		c.config.isMobile && (d == "click" && !f) && (d = "touchend");
		b.addEventListener ? b.addEventListener(d, e, false) : b.attachEvent ? b.attachEvent("on" + d, e) : b["on" + d] = e
	};
	c.removeEventHandler = function(b, d, e, f) {
		c.config.isMobile && (d == "click" && !f) && (d = "touchend");
		b.removeEventListener ? b.removeEventListener(d, e, false) : b.detachEvent ? b.detachEvent("on" + d, e) : b["on" + d] = null
	};
	c.show = function(b) {
		b.style.display = b.tagName.toLowerCase() === "video" ? "": "block"
	};
	c.hide = function(b) {
		if (b) b.style.display = "none"
	};
	c.getLeftPosition = function(b) {
		for (var c = b.offsetLeft; b.offsetParent;) {
			b = b.offsetParent;
			c = c + b.offsetLeft
		}
		return c
	};
	c.get = function(b, c) {
		return (c || document).querySelector(b)
	};
	c.pieceLength = function() {
		return c.config.content == "m3u8" ? 1 : c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType].length
	};
	c.multiPieceSrc = function(b) {
		return b >= c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType].length ? "": c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType][b].src
	};
	c.getTime = function(b) {
		if (!b) return "00:00";
		var c = Math.floor(b),
		b = c % 60,
		c = Math.floor(c / 60);
		return (c < 10 ? "0" + c: c) + ":" + (b < 10 ? "0" + b: b)
	};
	c.addClass = function(b, d) {
		if (!c.hasClass(b, d)) b.className = b.className + (" " + d)
	};
	c.hasClass = function(b, c) {
		return RegExp("(^| )" + c + "( |$)").test(b.className)
	};
	c.removeClass = function(b, c) {
		b.className = b.className.replace(RegExp("(^| )" + c + "( |$)"), " ").replace(/^\s+|\s+$/g, "")
	};
	c.m3u8src = function(b, d) {
		var e = c.https + "//v.youku.com/player/getM3U8/vid/" + b + "/type/" + d + "/ts/" + parseInt((new Date).getTime() / 1E3);
		if (g.isIPHONE || g.isIPOD) e = e + "/useKeyFrame/0";
		return e + "/v.m3u8"
	};
	c.m3u8src_v2 = function(b, d) {
		if (c.OLD_M3U8) return c.m3u8src(b, d);
		var e = {
			vid: b,
			type: d,
			ts: parseInt((new Date).getTime() / 1E3),
			keyframe: g.isIPHONE ? 0 : 1
		};
		if (c.password) e.password = c.password;
		if (c.password && c.initConfig.client_id && c.config.partner_config && c.config.partner_config.status == 1 && c.config.partner_config.passless == 1) e.client_id = c.initConfig.client_id;
		var f = encodeURIComponent(J(L(M(c.mk.a4 + "poz" + g.userCache.a2, [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26]).toString(), g.userCache.sid + "_" + b + "_" + g.userCache.token)));
		e.ep = f;
		e.sid = g.userCache.sid;
		e.token = g.userCache.token;
		e.ctype = "12";
		e.ev = "1";
		e.oip = c.v.data.security.ip;
		return c.https + "//pl-ali.youku.com/playlist/m3u8?" + r(B(e, c.getUCParam(b)))
	};
	c.isLandScape = function() {
		return window.orientation == 90 || window.orientation == -90
	};
	c.getUCParam = function(b) {
		var d = {};
		if (typeof getUCSecret != "undefined") d.xk = getUCSecret(b);
		else if (typeof uckey != "undefined") {
			d.uc_param_str = "xk";
			d.xk = uckey.getUCKey(b)
		} else if (c.isUCBrowserAndValidVersion() == true) d.uc_param_str = "xk";
		return d
	};
	c.isUCBrowserAndValidVersion = function() {
		var b = navigator.userAgent,
		c = b.search(/ucbrowser/i);
		return c != -1 && parseFloat(b.substr(c + 10, 4)) >= 9.8 ? true: false
	};
	YoukuHTML5Player = function(b, d) {
		if (b.parentBox == null) b.parentBox = "parentBox";
		if (b.expand && parseInt(b.width) > 0) {
			p(b.parentBox).style.width = b.width + "px";
			p(b.parentBox).style.height = b.height + "px"
		} else {
			b.width = p(b.parentBox).offsetWidth;
			b.height = p(b.parentBox).offsetHeight
		}
		c.config = b;
		this.setting = d || {};
		this.root = p(c.config.parentBox);
		var e = p(c.config.parentBox),
		f = "",
		g = parseInt(c.config.width),
		f = f + " webkit-playsinline";
		if (c.initConfig.iswifi || c.initConfig.autoplay) f = f + " autoplay";
		f = '<div id="x-player" class="' + E(g) + '"><video class="x-video-player"' + f + '></video><div class="x-video-poster"><img/></div><div class="x-video-logo"><div class="x-icon-exclusive"></div></div><div class="x-video-loading"></div><div class="x-video-info"><h1 class="x-title"></h1><div class="x-video-state"></div><div class="x-showmore"></div><div class="x-mask"></div></div><div id="x-video-button" class="x-video-button"><div class="x-video-play-ico"></div></div><div class="x-feedback"><div class="x-message"><div class="x-message-txt"></div><div class="x-message-btn"></div></div><div class="x-mask"></div></div><div class="x-pay"><div class="x-pay-txt"><h1><em class="vip"></em></h1><p class="x-pay-tips"></p></div><div class="x-pay-btn"><button type="button" class="x-btn x-btn-try">\u514d\u8d39\u8bd5\u770b</button><button type="button" class="x-btn x-btn-pay"></button></div></div><div class="x-pay-panel" style="display: none;"><div class="x-pay-txt"></div><div class="x-pay-content"><div class="x-pay-title"></div><div><button class="x-button x-try">\u514d\u8d39\u8bd5\u770b</button><button class="x-button x-buy"></button></div></div></div><div class="x-advert"><div class="x-advert-info"><div class="x-advert-skip"><div class="x-advert-txt"></div><div class="x-mask"></div></div><div class="x-advert-countdown"><div class="x-advert-txt"></div><div class="x-mask"></div></div></div><div class="x-advert-detail"><div class="x-advert-txt">\u8be6\u7ec6\u4e86\u89e3<span class="x-ico-detail"></span></div><div class="x-mask"></div></div></div><div class="x-ad-pause"></div><div class="x-prompt"></div><div class="x-dashboard"><div class="x-progress-mini"><div class="x-progress-track-mini"></div><div class="x-progress-load-mini"></div><div class="x-progress-play-mini"></div></div><div class="x-console"><div class="x-progress"><div class="x-progress-track"><div class="x-progress-load"></div><div class="x-progress-play"></div><div class="x-progress-seek"><div class="x-seek-handle"></div></div></div></div><div class="x-controls"><div class="x-play-control"><button class="x-control-btn"><b id=x-playbtn class="x-playing"><em>\u64ad\u653e</em></b></button></div><div class="x-time-display"><span class="x-time-current">00:00</span><span class="x-time-splite">/</span><span class="x-time-duration">00:00</span></div><div class="x-settings"><div class="x-playspeed"></div><div class="x-playshow" style="display:none"><button class="x-control-btn" title="\u9009\u96c6">\u9009\u96c6</button></div><div class="x-localization"></div><div class="x-quality"></div><div class="x-fullscreen"><button class="x-control-btn" type="button" title="\u5168\u5c4f\u6a21\u5f0f" rol="button"><b class="x-zoomin"><em>\u5168\u5c4f</em></b></button></div></div></div></div></div><div class="x-showlist"></div><div class="x-tips"></div><div class="x-trigger"></div></div>';
		e.innerHTML = f;
		e = c.get("video", this.root);
		V.apply(this, [e].concat([].slice.call(arguments)));
		this.video.style.width = "100%";
		this.video.style.height = "100%";
		this.video.style.display = "none";
		this.video.style.position = "relative";
		this._firstPlayTag = false;
		this._retry = 2;
		this.uiAdapter()
	};
	c.inherits(YoukuHTML5Player, V);
	c.extend(YoukuHTML5Player.prototype, {
		startPlay: function(b, d, e) {
			if (b && b.data) {
				b.data.show = b.data.show || {};
				d.abstarttime = (new Date).getTime();
				d._playListData = b.data;
				d._user = b.user;
				c.v = b;
				c.videoInfo = d;
				c.extend(this.setting, e);
				if (!b.data.error || !this.processError(b, d, e)) {
					this._reporter = new S(this, c.v, c.videoInfo._sid);
					this.controls = this.setupControls(this, this.setting);
					this.controls.init(c.v, c.videoInfo);
					this.mpieceReport();
					this.createIdNode();
					if (this.isNeedAdRequest()) this.processAd();
					else {
						this.controls.bindVideoBtnEvent();
						this.realStartPlay();
						if (c.initConfig.ucautoplay == 1) this.controls.onVideoBtnClick({})
					}
					c.config.content == "m3u8" && new ja(this.video)
				}
			}
		},
		isNeedAdRequest: function() {
			if (typeof this._frontAdTag == "undefined") this._frontAdTag = false;
			g.isNeedFrontAd = !this._frontAdTag && c.config.playType != "directsrc";
			return g.isNeedFrontAd
		},
		processAd: function() {
			if (this.isNeedAdRequest()) {
				this._frontAdTag = true;
				this._adplugin = new U(this, c.v, c.videoInfo._sid);
				this.bind_frontAd = c.bindAsEventListener(this, this.onFrontAdInfoOK);
				this.bind_frontAdInfoTimeout = c.bindAsEventListener(this, this.onFrontAdInfoTimeout);
				this._adplugin.addEventListener("frontAdinfook", this.bind_frontAd, false);
				this._adplugin.addEventListener("frontAdinfotimeout", this.bind_frontAdInfoTimeout);
				this.bind_unitedFrontAd = c.bindAsEventListener(this, this.onUnitedFrontAdInfoOK);
				this._adplugin.addEventListener("unitedfrontadinfook", this.bind_unitedFrontAd, false);
				this.bind_backAdInfoOK = c.bindAsEventListener(this, this.onBackAdInfoOK);
				this.bind_backAdInfoTimeout = c.bindAsEventListener(this, this.onBackAdInfoTimeout);
				this._adplugin.addEventListener("backAdinfook", this.bind_backAdInfoOK, false);
				this._adplugin.addEventListener(" backAdinfotimeout", this.bind_backAdInfoTimeout);
				this.bind_uglyCloseAd = c.bindAsEventListener(this, this.onUglyCloseAd);
				this._adplugin.addEventListener("uglyclosead", this.bind_uglyCloseAd);
				this.controls.bindAdVideoBtnEvent();
				window.adpluginobject = this._adplugin;
				if (c.initConfig.ucautoplay == 1) this.controls.onVideoBtnTouchEnd({})
			}
		},
		requestAd: function() {
			this._adplugin && this._adplugin.frontAd()
		},
		onUglyCloseHint: function() {
			this.controls.showUglyHint()
		},
		onUglyCloseAd: function() {
			h.log("ugly close");
			this.controls.closeUglyHint();
			this.adplayer.uglyClose()
		},
		onFrontAdInfoTimeout: function() {
			this._hasStartPlay = true;
			this.realStartPlay(true)
		},
		onUnitedFrontAdInfoOK: function(b) {
			h.log("<b>on united front adinfo ok</b>");
			var d = b.data.info;
			if (b.data.info.VAL.length == 0) {
				h.log("<b>onUnitedFrontAdInfoOK val length == 0 </b>");
				this.loadVTVC(b.data.vtvc);
				this.video.src = c.m3u8src_v2(c.v.data.id, c.defaultVideoType);
				this.unitedStartPlay(d, true)
			} else {
				this.adplayer = new Ca(this, b);
				var e = this;
				this.adplayer.addEventListener(C,
				function() {
					e.controls.startPlay();
					h.log("<font color=red>united ad end</font>");
					if (!e._realFlag) {
						e._realFlag = true;
						e.adplayer.clearTimer();
						e.unitedStartPlay(d)
					}
				},
				false);
				this.adplayer.addEventListener(z,
				function() {
					h.log("<font color=red>united ad error</font>");
					if (!e._realFlag) {
						c.unitedTag = null;
						e._realFlag = true;
						e.adplayer.clearTimer();
						e.video.src = c.m3u8src_v2(c.v.data.id, c.defaultVideoType);
						e.unitedStartPlay(d, true)
					}
				},
				false);
				this.adplayer.addEventListener(H,
				function() {
					h.log("<b>ugly hint</b>");
					e.onUglyCloseHint()
				},
				false);
				this.adplayer.play();
				this.createIdNode()
			}
		},
		loadVTVC: function(b) {
			for (var c = 0; c < b.length; c++) D(b[c].VC, "js")
		},
		onFrontAdInfoOK: function(b) {
			h.log("onFrontAdInfoOK");
			if (this._hasStartPlay !== true) if (b.data.urls.length == 0) {
				this.loadVTVC(b.data.vtvc);
				this.realStartPlay(true)
			} else {
				g.playerCurrentState = g.playerState.PLAYER_STATE_AD;
				h.log(g.playerCurrentState);
				this.adplayer = new T(this, b);
				var c = this;
				this.adplayer.addEventListener(C,
				function(b) {
					h.log("ad end");
					if (!c._realFlag) {
						c._realFlag = true;
						c.adplayer.clearTimer();
						c.realStartPlay(b.data)
					}
				},
				false);
				this.adplayer.addEventListener(z,
				function(b) {
					h.log("<font color=red>ad error</font>");
					if (!c._realFlag) {
						c._realFlag = true;
						c.adplayer.clearTimer();
						c.realStartPlay(b.data)
					}
				},
				false);
				this.adplayer.addEventListener(H,
				function() {
					h.log("<b>ugly hint</b>");
					c.onUglyCloseHint()
				},
				false);
				this.adplayer.play();
				this.createIdNode()
			}
		},
		onBackAdInfoTimeout: function() {
			h.log("onBackAdInfoTimeout");
			this.showEndCard()
		},
		onBackAdInfoOK: function(b) {
			h.log("onBackAdInfoOK");
			if (b.data.urls.length == 0) this.showEndCard();
			else {
				this.adplayer = new T(this, b);
				var c = this;
				this.adplayer.addEventListener(C,
				function() {
					c.showEndCard()
				});
				this.adplayer.addEventListener(z,
				function() {
					c.showEndCard()
				});
				this.adplayer.play()
			}
		},
		prepareVideoTag: function() {
			this.video.preload = "none";
			if (c.config.content == "m3u8") this.video.src = c.videoInfo.src;
			else if (c.videoInfo._videoSegsDic != null && c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType] != null) this.video.src = c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType][0].src;
			if (c.v.data.trial && c.v.data.trial.type != "episodes" && c.v.data.trial.time == 0) this.video.src = null;
			this.createIdNode()
		},
		createIdNode: function() {
			if (!p(c.config.id)) {
				var b = document.createElement("div");
				b.id = c.config.id;
				p(c.config.parentBox).appendChild(b)
			}
		},
		redirect: function() {
			var b = "";
			if (c.config.content == "m3u8") b = c.videoInfo.src;
			else if (c.videoInfo._videoSegsDic != null && c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType] != null) b = c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType][0].src;
			h.log("redirect play src=" + b);
			this._reporter.addPlayerStaticReport();
			this._reporter.sendTSLog(60);
			this._reporter.addClientDurationReport(60);
			this._reporter.sendUserActionReport("xps", "c");
			window.open(b, "", "", false);
			this._reporter.sendClientConsumeReport();
			this.onPlayStart()
		},
		realStartPlay: function(b) {
			h.log("realStartPlay " + b);
			this.controls.bindEvent();
			this.controls.startPlay();
			this.bindEvent();
			this.prepareVideoTag();
			this.playVideos(b)
		},
		unitedStartPlay: function(b, d) {
			h.log("<b>united start play </b>");
			c.unitedTag = {
				offset: b.VAL.length ? b.VAL[0].AL: 0
			};
			this.controls.bindEvent();
			this.bindEvent();
			if (d === true) {
				this.video.load();
				this.video.play();
				this.controls.startPlay()
			} else this.onPlay();
			this.controls.onPlay()
		},
		playVideos: function(b) {
			h.log("playVideos " + b);
			y = false;
			x = 0;
			this.video.style.display = (g.isIPHONE || g.isIPOD) && c.v.data.trial != null ? "none": "block";
			if (c.config.autoplay || c.config.nextAutoPlay || b) {
				h.log("src= " + this.video.src + " auto = " + b);
				this.video.load();
				this.video.play()
			}
		},
		processError: function(b) {
			var d = b.data.error.code;
			if (d == -301 || d == -307 || d == -308) {
				b.data.trial ? b.data.trial.time = 0 : b.data.trial = {
					time: 0
				};
				return false
			}
			c.hide(c.get(".x-video-poster"), this.root);
			this.feedbackPanel = new R(this, b);
			return true
		},
		mpieceReport: function() {
			c.config.content == "mp4" && (c.videoInfo._videoSegsDic && c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType] != null && c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType].length > 1) && h.log("mpiece report")
		},
		resize_: function(b, d, e) {
			h.log("resize=" + c.resizeTag);
			if (d && e && c.resizeTag && this.controls) {
				b = this.controls.xplayer.className;
				if (this.controls && this.controls.xplayer) if (b.indexOf("fullscreen") === -1) this.controls.xplayer.className = E(d);
				else {
					d = window.innerWidth;
					this.controls.xplayer.className = E(d) + " x-player-fullscreen"
				}
			}
		},
		uiAdapter: function() {
			if (c.config.wintype == "index") {
				c.hide(c.get(".x-localization", this.root));
				c.hide(c.get(".x-quality", this.root))
			}
			c.get("#x-video-button", this.root).className = "x-video-button";
			c.config.content != "m3u8" && c.hide(c.get(".x-quality", this.root));
			var b = this;
			window.addEventListener("resize",
			function(c) {
				h.log("window.resize");
				if (b.controls) b.controls.onResize(c)
			},
			false)
		},
		isOutTryDuration: function(b) {
			return this.tryDuration ? b >= this.tryDuration: false
		},
		replay: function() {
			x = 0;
			this._ireflag = this._comscoreflag = false;
			this._firstflag = g.adrPlayTrick = false;
			this.video.style.display = "block";
			if (!this.isOnePiece()) this.video.src = c.multiPieceSrc(x);
			if (g.isIPAD) {
				this.video.src = c.m3u8src_v2(c.v.data.id, c.defaultVideoType);
				c.unitedTag = null
			}
			this.video.load();
			this.video.play();
			this._reporter.tsInit();
			this._reporter.sendTSLog(60);
			this._reporter.addClientDurationReport(60);
			this._reporter.addPlayerDurationReport(62)
		},
		seekToLastPoint: function() {
			if (g.isAndroid) return false;
			var b = c.v.data.id,
			d = -1;
			c.v.data.playlog && (d = c.v.data.playlog.lastpoint / 1E3);
			var e = parseInt(l.getItem(b + "_playpoint")) || -1,
			b = -1;
			if (d != -1 && e != -1) {
				b = d;
				Math.abs(d - e) < 60 && (b = e)
			} else {
				b = d;
				d == -1 && (b = e)
			}
			h.log("lastpoint=" + b);
			d = l.getItem("youku_ignore_lasttime");
			d = parseInt(d) || 0;
			if (b !== -1 && b >= 120 && d < 3 && !c.v.data.trial && b < c.videoInfo.totalTime - 120) {
				this.controls.showLastTimeTip(b);
				if (g.isAndroid) this._waitSeek = b;
				this.seek(b);
				return true
			}
			return false
		},
		clearLocalPlayPoint: function() {
			var b = c.v.data.id;
			clearTimeout(this._recordLPPTimer);
			l.removeItem(b + "_playpoint")
		},
		recordLocalPlayPoint: function() {
			var b = c.v.data.id + "",
			d = this.currentTime || 0,
			e = this;
			this._recordLPPTimer = setTimeout(function() {
				e.recordLocalPlayPoint()
			},
			1E4);
			l.removeItem(b + "_playpoint");
			if (c.v.data.video.seconds >= 600 && d < c.videoInfo.totalTime - 120 && !c.v.data.trial && d >= 120) {
				l.setItem(b + "_playpoint", d);
				if (!this.updatePPVids) {
					this.updatePPVids = true;
					d = l.getItem("youku_playpoint_vids") || "";
					if (d == "") d = b;
					else {
						for (var d = d.split(":"), f = 0; f < d.length; f++) d[f] == b && (d[f] = "");
						d.push(b);
						d = d.join(":");
						for (b = 0; d.charAt(b) == ":";) b++;
						d = d.substring(b);
						d = d.replace(/:(:)+/g, ":")
					}
					b = d.split(":");
					if (b.length > 30) {
						h.log("slice");
						l.removeItem(b[0] + "_playpoint");
						d = b.slice(1).join(":")
					}
					h.log("youku_playpoint_vids=" + d);
					l.setItem("youku_playpoint_vids", d)
				}
			}
		},
		skipHead: function() {
			if (!g.isAndroid) {
				var b = parseInt((c.v.data.dvd || {}).head || -1);
				h.log("skiphead = " + b);
				if (b != -1) {
					this.controls.tipPanel.onSkipHead();
					if (l.getItem("youku_conf_skip") == "true") {
						if (g.isAndroid) this._waitSeek = b / 1E3;
						this.seek(b / 1E3)
					}
				}
			}
		},
		skipTail: function(b) {
			if (!g.isAndroid) {
				var d = parseInt((c.v.data.dvd || {}).tail || -1);
				if (d != -1 && b >= d / 1E3 - 10 && !this._tailTip) {
					h.log("skiptail(act before 10) =" + d);
					this._tailTip = true;
					this.controls.tipPanel.onSkipTail()
				}
				if (d != -1 && b >= d / 1E3 && !this._tailSkipped) {
					this._tailSkipped = true;
					l.getItem("youku_conf_skip") == "true" && this.seek(parseInt(c.v.data.video.seconds) - 1)
				}
			}
		},
		assistSkipTail: function(b) {
			var d = parseInt((c.v.data.dvd || {}).tail || -1);
			if (b >= d / 1E3) this._tailTip = this._tailSkipped = true;
			else this._tailTip = this._tailSkipped = false
		},
		seek: function(b, d) {
			b = b || 0;
			b = Math.max(b, 0);
			c.videoInfo.totalTime && (b = Math.min(b, c.videoInfo.totalTime - 5));
			this.isOutTryDuration(b) && (b = this.tryDuration - 1);
			this.assistSkipTail(b);
			var e = this;
			this.switchTimer && clearTimeout(this.switchTimer);
			this.currentTime = b;
			if (this.isOnePiece()) {
				var f = this.video.seekable,
				g = f.length == 1 ? f.end(0) : 0;
				if (c.unitedTag) {
					b = b + c.unitedTag.offset;
					g = g + c.unitedTag.offset
				}
				if (f.length == 1 && b < g) {
					h.log("seek ct = " + b + ",end = " + f.end(0));
					this.seekTo(b, d)
				} else {
					this.controls.onWaiting();
					this.switchTimer = setTimeout(function() {
						e.seek(b, d)
					},
					100)
				}
			} else {
				h.log("multi seek");
				this.multiSeekTo(b)
			}
		},
		seekTo: function(b, c) {
			if (this.isOnePiece()) {
				h.log("is one piece");
				var e = this;
				try {
					e.video.currentTime = b
				} catch(f) {
					var g = 0;
					this.video.addEventListener("canplay",
					function() {
						if (g !== 1) {
							g = 1;
							h.log("canplay time=" + b);
							e.video.currentTime = b
						}
					})
				}
				if (typeof c == "function") {
					h.log("<b>seekto callback(mayby play)</b>");
					c()
				}
			}
		},
		multiSeekTo_: function() {
			h.log("YoukuHTML5 ")
		},
		multiSeekTo: function(b) {
			h.log("YoukuHTML5Player multiSeekTo !");
			for (var d = 0,
			e = 0,
			f = 0,
			g = 0; g < c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType].length; g++) {
				var j = parseInt(c.videoInfo._videoSegsDic.streams[c.defaultLanguage][c.defaultVideoType][g].seconds),
				d = d + j;
				if (d > b) {
					e = g;
					f = j - (d - b);
					break
				} else if (d == b) {
					e = g + 1;
					f = 0;
					break
				}
			}
			this.video.pause();
			if (e == x) {
				h.log(" piece time = " + f);
				try {
					this.video.currentTime = f
				} catch(l) {}
				this.video.play()
			} else {
				x = e;
				var m = 0,
				n = this;
				this.video.addEventListener("canplay",
				function() {
					if (m !== 1) {
						m = 1;
						h.log("canplay time=" + f);
						n.video.currentTime = f
					}
				});
				if (b = c.multiPieceSrc(x)) {
					this.video.src = b;
					this.video.load();
					this.video.play()
				} else this.video.pause()
			}
			this.video.style.display = "block"
		},
		adjustVideoRatio: function(b) {
			if (!g.isIOS) {
				if (("onorientationchange" in window || "orientation" in window) && !this._avrTag) {
					this._avrTag = true;
					var d = this;
					window.addEventListener("orientationchange",
					function() {
						d.controls.fullscreenPanel.fullFlag() === true && d.adjustVideoRatio()
					})
				}
				var d = this,
				e = this.video;
				setTimeout(function() {
					if (b === 1) {
						e.style.width = "100%";
						e.style.height = "100%";
						e.style.top = null;
						e.style.left = null
					} else {
						var d = c.get(".x-player", this.root),
						d = d.offsetWidth / d.offsetHeight,
						g = e.videoWidth / e.videoHeight;
						if (isNaN(g) || isNaN(d) || !isFinite(d) || !isFinite(g)) {
							e.style.width = "100%";
							e.style.height = "100%";
							e.style.top = null;
							e.style.left = null
						} else if (d < g) {
							e.style.width = "100%";
							e.style.height = d / g * 100 + "%";
							e.style.top = (1 / d - 1 / g) / 2 * d * 100 + "%";
							e.style.left = null
						} else {
							e.style.height = "100%";
							e.style.width = g / d * 100 + "%";
							e.style.left = (d - g) / 2 / d * 100 + "%";
							e.style.top = null
						}
					}
				},
				2E3)
			}
		}
	});
	window.YoukuPlayerSelect = Q;
	window.BuildVideoInfo = n;
	window.QS = function() {
		var b = {},
		c = window.location.search.match(RegExp("[?&][^?&]+=[^?&]+", "g"));
		if (c != null) for (var e = 0; e < c.length; e++) {
			var f = c[e],
			g = f.indexOf("="),
			h = f.substring(1, g),
			f = f.substring(g + 1);
			try {
				f = decodeURI(f)
			} catch(j) {}
			if (f == "true") f = true;
			else if (f != "false") if (isNaN(f)) {
				if ("string" == typeof f && /{[^{^}]{0,}}/.test(f)) try {
					f = JSON.parse(f)
				} catch(l) {}
			} else f = +f;
			"undefined" == typeof b[h] ? b[h] = f: b[h] instanceof Array ? b[h].push(f) : b[h] = [b[h], f]
		}
		return b
	};
	window.YKP = g;
	window.YKU = q;
	window.YoukuHTML5Player = YoukuHTML5Player;
	for (var j = document.getElementsByTagName("script"), O = 0; O < j.length; O++) if ( - 1 !== j[O].src.indexOf("player.youku.com/jsapi")) {
		eval(j[O].innerHTML);
		break
	}
	window.notifyYKU = function() {
		q.swfLoaded = 1
	};
	window.onPlayerReady = function() {
		if (c.initConfig.events && c.initConfig.events.onPlayerReady) {
			g.playerCurrentState = g.playerState.PLAYER_STATE_READY;
			h.log(g.playerCurrentState);
			h.log("api:flash play ready");
			c.initConfig.events.onPlayerReady()
		}
	};
	window.onPlayerStart = function() {
		if (c.initConfig.events && c.initConfig.events.onPlayStart) {
			g.playerCurrentState = g.playerState.PLAYER_STATE_PLAYING;
			h.log(g.playerCurrentState);
			h.log("api:flash play start");
			c.initConfig.events.onPlayStart()
		}
	};
	window.onPlayerComplete = function() {
		if (c.initConfig.events && c.initConfig.events.onPlayEnd) {
			g.playerCurrentState = g.playerState.PLAYER_STATE_END;
			h.log(g.playerCurrentState);
			h.log("api:flash play end");
			c.initConfig.events.onPlayEnd()
		}
	};
	window.onPlayerError = function(b) {
		if (c.initConfig.events && c.initConfig.events.onPlayError) {
			g.playerCurrentState = g.playerState.PLAYER_STATE_ERROR;
			h.log(g.playerCurrentState);
			if ((b.code || "1000") != "4000") {
				h.log("api:flash play error");
				c.initConfig.events.onPlayError(b.message || "\u64ad\u653e\u51fa\u9519", b)
			}
		}
	}
})();
