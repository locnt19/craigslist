jQuery.fn.initMenu = function () {
	return this.each(function () {
		$(".acitem", this).hide(), $("li.expand > .acitem", this).show().prev().addClass("active"), $("li h5", this).on("click", function () {
			var a = $(this).next(),
				b = this.parentNode.parentNode;
			return $(b).hasClass("noaccordion") ? (void 0 === a[0] && (window.location.href = this.href), $(a).slideToggle("normal", function () {
				var a = $(this);
				a.is(":visible") ? a.prev().addClass("active") : a.prev().removeClass("active")
			}), !1) : a.hasClass("acitem") && a.is(":visible") ? !!$(b).hasClass("collapsible") && ($(".acitem:visible", b).first().slideUp("normal", function () {
				$(this).prev().removeClass("active")
			}), !1) : a.hasClass("acitem") && !a.is(":visible") ? ($(".acitem:visible", b).slideUp("normal", function () {
				$(this).prev().removeClass("active")
			}), a.slideDown("normal", function () {
				$(this).prev().addClass("active")
			}), !1) : void 0
		})
	})
},
function () {
	var a = $("#rightbar");
	if (a.find("h5").addClass("hot").end().find(".more").remove().end().find("li").addClass("s").end().initMenu(), $("#chlang").on("change", function () {
			window.location.href = this.value
		}), CL.page.isMobile) {
		var b = $(".cal"),
			c = $(".calban"),
			d = $("#center"),
			e = $("#topban").find(".mobile-menu-button");
		a.find(".expand h5").trigger("click");
		var f = function (a) {
			var b = {},
				c = $("#" + a),
				d = c.find(".ban a"),
				e = d.clone().html(d.data("alltitle")).wrapAll("<li></li>").parent(),
				f = c;
			c.find("li").each(function () {
				b[$(this).find("a").html()] = this
			});
			var g = Object.keys(b).sort();
			if (g.length) {
				for (;
					"[" === g[0].charAt(0);) g.push(g.shift());
				g = g.map(function (a) {
					return b[a]
				}), g.unshift(e[0]), f.find(".cats").html($('<ul id="' + a + '0"></ul>').html(g))
			}
			return f
		};
		["sss", "jjj", "hhh", "ppp", "ccc", "bbb", "ggg", "rrr"].forEach(function (a) {
			var b = f(a);
			$("#" + a).remove(), d.append(b)
		});
		var g = [$(".community"), $(".jobs"), c[0], b[0]].filter(function (a) {
			return a
		});
		$.each(g, function (a, b) {
			d.append(b)
		}), c.addClass("ban").on("click", "a", function (a) {
			a.preventDefault(), b.toggleClass("active-cal")
		}), $(".ban").filter(function () {
			return $(this).siblings(".cats").children().length
		}).on("click", function (a) {
			var b = $(this);
			if ("forums" !== b.parent().attr("id")) {
				if (a.preventDefault(), b.hasClass("disabled")) return e.trigger("click"), !1;
				b.siblings(".cats").toggleClass("active-category")
			}
		}), d.append($(".leftlinks").show()), $("body").trigger("mobilePageReady")
	}
	var h = $("#query"),
		i = $("input#postal")[0],
		j = $("input#search_distance")[0],
		k = $("input#ordinal")[0],
		l = $("input#ratio")[0],
		m = $("input#clicked")[0];
	CL.autocomplete({
		type: "search-count",
		url: "/count-search",
		buildParams: function (a) {
			var b = {
				query: a.term
			};
			return i && (b.postal = i.value), j && (b.search_distance = j.value), b.ordinal = k.value, b.ratio = l.value, b.clicked = m.value, b
		},
		onSuccess: function (a, b) {
			var c = Object.keys(a.fetched).map(function (c) {
				var d = 0,
					e = a.fetched[c];
				return Object.keys(e).forEach(function (a) {
					d += e[a]
				}), {
					label: "<b>" + d + "</b> &ldquo;" + b + "&rdquo; in " + window.categoryNames[c],
					value: b,
					cat: c,
					total: d
				}
			}).sort(function (a, b) {
				return a.total < b.total ? 1 : -1
			});
			c.length > 1 ? l.value = Math.round(c[0].total / c[1].total) : l.value = 1;
			var d = 1;
			c = c.map(function (a) {
				return a.ordinal = d++, a
			});
			var e = a.remembered.map(function (a) {
				var b = a.term.replace(/&(amp;)+/, "&"),
					c = a.cat;
				return {
					label: "<b>" + b + "</b> in " + window.categoryNames[c] + '<span class="remove" data-remembered="' + JSON.stringify(a).replace(/"/g, "&quot;") + '">&times;</span>',
					value: b,
					cat: c
				}
			});
			return c.length > 0 && $("#catAbb").val(c[0].cat), c.length > 0 && e.length > 0 ? c.push({
				label: '<hr class="ui-autocomplete-divider">',
				value: ""
			}) : 0 === c.length && 0 === e.length && c.push({
				label: window.noResults + " <b>" + CL.util.escapeHtml(b) + "</b>",
				value: b
			}), c.concat(e)
		},
		onSelect: function (a, b, c, d) {
			var e = b.item;
			e.value === d(h.val()) ? (c({
				term: e.value,
				cat: e.cat
			}), $("#catAbb").val(e.cat)) : $("#catAbb").val(""), k.value = e.ordinal, 13 == a.keyCode ? m.value = 0 : m.value = 1, $("#search").submit()
		},
		remember: !0
	}), "" !== h.val() && h.trigger("focus");
	var n = CL.url.params();
	if ("US" === window.areaCountry || null === window.areaCountry && n.postal) {
		CL.autocomplete({
			type: "subarea",
			buildParams: function (a) {
				return {
					term: a.term
				}
			},
			onSelect: function (a, b) {
				r = "custom", t(b.item)
			},
			autocomplete: {
				autoFocus: !0
			}
		});
		var o = $("#topban"),
			p = $(".regular-area"),
			q = $(".custom-area"),
			r = "",
			s = function (a) {
				var b = ["regular", "custom", "enter"];
				o.removeClass(b.join(" ")).addClass(a), "enter" === a && setTimeout(function () {
					$(".subarea-input").focus().select()
				}, 1)
			};
		p.find(".area").on("click", function (a) {
			r = "regular", a.preventDefault(), s("enter")
		}), q.find(".area, .radius-info").on("click", function (a) {
			r = "custom", a.preventDefault(), s("enter")
		}), $(".subarea-input").on("blur", function () {
			s(r)
		}).on("keydown", function (a) {
			27 === Number(a.which) && $(this).blur()
		}), $(".exit-subarea").on("click", function () {
			CL.when.localStorageAvailable.then(function (a) {
				a.removeItem("subarea")
			}), t(null)
		});
		var t = function (a) {
			var b, c = CL.url.params(window.location.search);
			a ? (Object.assign(c, {
				search_distance: a.radius,
				postal: a.postal
			}), b = a.url, q.removeClass("no-name").find(".area").text(a.label).end().find(".postal").text(a.postal).end().find(".distance").text(a.radius), s("custom")) : (delete c.postal, delete c.search_distance, b = window.location.hostname, s("regular")), window.location.href = "//" + b + "?" + Object.keys(c).map(function (a) {
				return a + "=" + c[a]
			}).join("&")
		}
	}
}();
/* {"sources":{"homepage-concat.js":"c4072c3f133c99c8d97b8c96e3ec6dc8"}} */