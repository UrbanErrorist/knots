(function() {
    var e, t, n, s, i, o, d, r, a, u, l, c, m, p, h, v, g, b, y, f, x, w, k, U, L, z, E, T, O, A, S, R, N, I, M, F, C, P, q, D, Y, B, V, K, H, G, X, W, _, Z, J, $, Q, ee, te, ne, se, ie, de, re, oe, ae, ue, le, ce, me = Math.ceil,
        pe = Math.exp,
        ve = Math.pow,
        he = Math.floor,
        ge = Math.cos,
        be = Math.sin,
        fe = Math.sqrt,
        ye = Math.PI,
        xe = Number.EPSILON,
        we = Math.max,
        ke = Math.min,
        Ue = [].indexOf;
    for (_ = function(e, t) {
            return e + (t - e) * Math.random()
        }, b = function(e, t, n) {
            return we(e, ke(t, n))
        }, ce = function(e) {
            return Math.abs(e) < xe
        }, M = console.log, X = function(e) {
            return 180 * e / ye
        }, y = function(e) {
            return ye * e / 180
        }, u = class {
            constructor(e = 0, t = 0, n = 0) {
                this.x = e, this.y = t, this.z = n
            }
            cpy() {
                return oe(this.x, this.y, this.z)
            }
            add(e) {
                return this.x += e.x, this.y += e.y, this.z += e.z, this
            }
            mul(e) {
                return this.x *= e, this.y *= e, this.z *= e, this
            }
            times(e) {
                return this.cpy().mul(e)
            }
            minus(e) {
                return oe(this.x - e.x, this.y - e.y, this.z - e.z)
            }
            to(e) {
                return e.minus(this)
            }
            dist(e) {
                return this.minus(e).length()
            }
            dot(e) {
                return this.x * e.x + this.y * e.y + this.z * e.z
            }
            cross(e) {
                return oe(this.y * e.z - this.z * e.y, this.z * e.x - this.x * e.z, this.x * e.y - this.y * e.x)
            }
            length() {
                return fe(this.x * this.x + this.y * this.y + this.z * this.z)
            }
            norm() {
                var e;
                return e = this.length(), 0 === e ? (this.x = 0, this.y = 0, this.z = 0) : (e = 1 / e, this.x *= e, this.y *= e, this.z *= e), this
            }
            angle(e) {
                return Math.acos(b(-1, 1, this.dot(e) / fe(this.length() * e.length())))
            }
        }, oe = function(e, t, n) {
            return new u(e, t, n)
        }, o = class e {
            constructor(e, t, n, s) {
                this.x = e || 0, this.y = t || 0, this.z = n || 0, this.w = null == s ? 1 : s
            }
            copy(e) {
                return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w, this
            }
            static axis(t, n = 0) {
                var i, d;
                return i = n / 2, d = be(i), new e(t.x * d, t.y * d, t.z * d, ge(i))
            }
            rotate(e) {
                var t, n, s, i, d, r, o;
                return d = e.x, r = e.y, o = e.z, n = this.w * d + this.y * o - this.z * r, s = this.w * r + this.z * d - this.x * o, i = this.w * o + this.x * r - this.y * d, t = -this.x * d - this.y * r - this.z * o, d = n * this.w + t * -this.x + s * -this.z - i * -this.y, r = s * this.w + t * -this.y + i * -this.x - n * -this.z, o = i * this.w + t * -this.z + n * -this.y - s * -this.x, oe(d, r, o)
            }
            length() {
                return fe(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            }
            zero() {
                return ce(this.x) && ce(this.y) && ce(this.z)
            }
            norm() {
                var e;
                return e = this.length(), 0 === e ? (this.x = 0, this.y = 0, this.z = 0, this.w = 1) : (e = 1 / e, this.x *= e, this.y *= e, this.z *= e, this.w *= e), this
            }
            mul(e) {
                var t, n, s, i;
                return n = this.x, s = this.y, i = this.z, t = this.w, this.x = n * e.w + t * e.x + s * e.z - i * e.y, this.y = s * e.w + t * e.y + i * e.x - n * e.z, this.z = i * e.w + t * e.z + n * e.y - s * e.x, this.w = t * e.w - n * e.x - s * e.y - i * e.z, this
            }
            slerp(e, n) {
                var t, i, d, r, o, a, u, l, c, m, p;
                return 0 === n ? this : 1 === n ? this.copy(e) : (c = this.x, m = this.y, p = this.z, l = this.w, t = l * e.w + c * e.x + m * e.y + p * e.z, 0 > t ? (this.w = -e.w, this.x = -e.x, this.y = -e.y, this.z = -e.z, t = -t) : this.copy(e), 1 <= t) ? (this.w = l, this.x = c, this.y = m, this.z = p, this) : (u = 1 - t * t, u <= xe) ? (o = 1 - n, this.w = o * l + n * this.w, this.x = o * c + n * this.x, this.y = o * m + n * this.y, this.z = o * p + n * this.z, this.norm()) : (a = fe(u), i = Math.atan2(a, t), d = be((1 - n) * i) / a, r = be(n * i) / a, this.w = l * d + this.w * r, this.x = c * d + this.x * r, this.y = m * d + this.y * r, this.z = p * d + this.z * r, this)
            }
        }, i = class {
            constructor() {}
            load() {
                var e;
                this.cache = {
                    prefs: "prefs",
                    volume: .03125
                };
                try {
                    return this.req = window.indexedDB.open("konekt", 3), this.req.onerror = () => this.loadMenu("open error"), this.req.onsuccess = t => (this.db = t.target.result, this.read()), this.req.onupgradeneeded = t => {
                        var e, n, s;
                        return e = t.target.result, s = e.createObjectStore("prefs", {
                            keyPath: "prefs"
                        }), n = s.put(this.cache)
                    }
                } catch (t) {
                    return e = t, this.loadMenu("prefs catch")
                }
            }
            loadMenu() {
                var e;
                if (void 0 === ("undefined" != typeof le && null !== le ? le.level : void 0) || "menu" === (null == (e = le.level) ? void 0 : e.name)) return N("menu")
            }
            read() {
                var e, t, n;
                return n = this.db.transaction(["prefs"], "readonly"), t = n.objectStore("prefs"), e = t.get("prefs"), e.onerror = () => this.loadMenu("read error"), e.onsuccess = () => e.result ? (this.cache = e.result, se.volume(this.cache.volume), this.loadMenu("read")) : (this.write(), this.loadMenu("empty"))
            }
            write() {
                var e, t, n;
                return n = this.db.transaction(["prefs"], "readwrite"), t = n.objectStore("prefs"), e = t.put(this.cache)
            }
            clear() {
                var e;
                return this.cache = {
                    prefs: "prefs",
                    volume: null == (e = this.cache.volume) ? .03125 : e
                }, this.write()
            }
            set(e, t) {
                if (this.cache[e] = t, this.db) return this.write()
            }
            get(e, t) {
                var n;
                return null == (n = this.cache[e]) ? t : n
            }
        }, a = class {
            constructor(e, t, n) {
                var s;
                this.piano2 = this.piano2.bind(this), this.organ2 = this.organ2.bind(this), this.config = e, this.ctx = t, this.gain = n, this.freqs = [4186.01, 4434.92, 4698.63, 4978.03, 5274.04, 5587.65, 5919.91, 6271.93, 6644.88, 7040, 7458.62, 7902.13], null == (s = this.config).duration && (s.duration = .3), this.isr = 1 / 44100, this.initBuffers()
            }
            initBuffers() {
                return this.sampleLength = 44100 * this.config.duration, this.sampleLength = he(this.sampleLength), this.createBuffers()
            }
            createBuffers() {
                return this.samples = Array(108)
            }
            playNote(e) {
                var t, n, s, d, r, o, a, l, c, m, p, v, h, g;
                if (null == this.samples[e])
                    for (this.samples[e] = new Float32Array(this.sampleLength), s = this.freq(e), h = 2 * ye * s, d = this[this.config.instrument], (p = o = 0, l = this.sampleLength); 0 <= l ? o < l : o > l; p = 0 <= l ? ++o : --o) g = p / (this.sampleLength - 1), this.samples[e][p] = d(p * this.isr, h, g);
                for (m = this.samples[e], t = this.ctx.createBuffer(1, m.length, 44100), n = t.getChannelData(0), (r = v = 0, c = m.length); 0 <= c ? v < c : v > c; r = 0 <= c ? ++v : --v) n[r] = m[r];
                return a = this.ctx.createBufferSource(), a.buffer = t, a.connect(this.gain), a.state = a.noteOn, a.start(0)
            }
            freq(e) {
                return this.freqs[e % 12] / ve(2, 8 - e / 12).toFixed(3)
            }
            setDuration(e) {
                if (this.config.duration !== e) return this.config.duration = e, this.initBuffers()
            }
            fmod(e, t) {
                return e % t
            }
            sign(e) {
                return 0 < e && 1 || -1
            }
            frac(e) {
                return e % 1
            }
            sqr(e, t) {
                return be(t) > e ? 1 : -1
            }
            step(e, t) {
                return t >= e && 1 || 0
            }
            over(e, t) {
                return 1 - (1 - e) * (1 - t)
            }
            mix(e, t, n) {
                return e + (t - e) * ke(we(n, 0), 1)
            }
            saw(e, t) {
                var n;
                return n = e % 1, n < t ? n / t : 1 - (n - t) / (1 - t)
            }
            grad(e, t) {
                return e = e << 13 ^ e, e = e * (15731 * (e * e) + 789221) + 1376312589, 536870912 & e ? -t : t
            }
            noise(e) {
                var t, n, s, d, r;
                return d = he(e), s = e - d, r = s * s * s * (s * (6 * s - 15) + 10), t = this.grad(d + 0, s + 0), n = this.grad(d + 1, s - 1), t + (n - t) * r
            }
            piano1(e, t, n) {
                var s, i, r;
                return i = t * e, r = .6 * be(1 * i) * pe(-8e-4 * i), r += .3 * be(2 * i) * pe(-.001 * i), r += .1 * be(4 * i) * pe(-.0015 * i), r += .2 * r * r * r, r *= .9 + .1 * ge(70 * e), r = 2 * r * pe(-22 * e) + r, s = .8, n > s && (r *= ve(1 - (n - s) / (1 - s), 2)), r
            }
            piano2(e, n, s) {
                var i, o, u, l, c, m, p, v;
                return e += 15e-5 * this.noise(12 * e), c = e, l = .2 * (e * n), l = this.fmod(l, 1), i = .15 + .6 * c, o = .65 - .5 * c, m = 50 * l * (l - 1) * (l - .2) * (l - i) * (l - o), l = .401 * (e * n), l = this.fmod(l, 1), i = .12 + .65 * c, o = .67 - .55 * c, p = 50 * l * (l - 1) * (l - .4) * (l - i) * (l - o), l = .399 * (e * n), l = this.fmod(l, 1), i = .14 + .55 * c, o = .66 - .65 * c, v = 50 * l * (l - 1) * (l - .8) * (l - i) * (l - o), m += .02 * this.noise(1e3 * e), m /= .0015 * (e * n) + .1, p /= .002 * (e * n) + .1, v /= .0025 * (e * n) + .1, m = (m + p + v) / 3, u = .8, s > u && (m *= ve(1 - (s - u) / (1 - u), 2)), m
            }
            piano3(e, t, n) {
                var s, i, r, o, u;
                return o = 1 - e, s = be(.5 * (e * t)) * Math.log(e + .3) * o, i = .4 * (be(e * t) * e), u = (s + i) * o, r = .8, n > r && (u *= ve(1 - (n - r) / (1 - r), 2)), u
            }
            piano4(e, t, n) {
                var s;
                return s = be(t * e), s *= 1 - n * n * n * n
            }
            piano5(e, t, n) {
                var s, i;
                return s = t * e, i = .6 * be(1 * s) * pe(-8e-4 * s), i += .3 * be(2 * s) * pe(-.001 * s), i += .1 * be(4 * s) * pe(-.0015 * s), i += .2 * i * i * i, i *= .5 + .5 * ge(70 * e), i = 2 * i * pe(-22 * e) + i, i *= 1 - n * n * n * n
            }
            organ1(e, t, n) {
                var s, i;
                return i = .6 * ge(t * e) * pe(-4 * e), i += .4 * ge(2 * t * e) * pe(-3 * e), i += .01 * ge(4 * t * e) * pe(-1 * e), i = i * i * i + i * i * i * i * i + i * i, s = .5 + .5 * ge(3.14 * n), i = be(3.14 * (i * s)), i *= 20 * e * pe(-.1 * n)
            }
            organ2(e, t, n) {
                var s, i, d, r, o;
                return r = t * e, s = .5 + .5 * ge(0 + 12 * e), i = .5 + .5 * ge(1 + 8 * e), d = .5 + .5 * ge(2 + 4 * e), o = this.saw(.25 * r, s) * pe(-2 * n), o += this.saw(.125 * r, i) * pe(-3 * n), o += this.saw(.0625 * r, d) * pe(-4 * n), o *= .8 + .2 * ge(64 * e)
            }
            bell1(e, t, n) {
                var s, i;
                return s = t * e, i = .1 * pe(-e / 1) * be(.56 * s), i += .067 * pe(-e / .9) * be(.56 * s), i += .1 * pe(-e / .65) * be(.92 * s), i += .18 * pe(-e / .55) * be(.92 * s), i += .267 * pe(-e / .325) * be(1.19 * s), i += .167 * pe(-e / .35) * be(1.7 * s), i += .146 * pe(-e / .25) * be(2 * s), i += .133 * pe(-e / .2) * be(2.74 * s), i += .133 * pe(-e / .15) * be(3 * s), i += .1 * pe(-e / .1) * be(3.76 * s), i += .133 * pe(-e / .075) * be(4.07 * s), i *= 1 - n * n * n * n
            }
            bell2(e, t, n) {
                var s, i;
                return s = t * e, i = .1 * pe(-e / 1) * be(.56 * s), i += .067 * pe(-e / .9) * be(.56 * s), i += .1 * pe(-e / .65) * be(.92 * s), i += .18 * pe(-e / .55) * be(.92 * s), i += .267 * pe(-e / .325) * be(1.19 * s), i += .167 * pe(-e / .35) * be(1.7 * s), i += 2 * i * pe(-22 * e), i *= 1 - n * n * n * n
            }
            bell3(e, t, n) {
                var s, i;
                return s = t * e, i = 0, i += .1 * pe(-e / 1) * be(.25 * s), i += .2 * pe(-e / .75) * be(.5 * s), i += .4 * pe(-e / .5) * be(1 * s), i += .2 * pe(-e / .25) * be(2 * s), i += .1 * pe(-e / .1) * be(4 * s), i += 2 * i * pe(-22 * e), i *= 1 - n * n * n * n
            }
            bell4(e, t, n) {
                var s, i;
                return s = t * e, i = 0, i += .1 * pe(-e / .9) * be(.62 * s), i += .2 * pe(-e / .7) * be(.86 * s), i += .5 * pe(-e / .5) * be(1 * s), i += .2 * pe(-e / .2) * be(1.27 * s), i += .1 * pe(-e / .1) * be(1.4 * s), i += 2 * i * pe(-22 * e), i *= 1 - n * n * n * n
            }
            string(e, t, n) {
                var s, i, d;
                return i = t * e, s = be(.251 * i) * ye, d = .5 * be(1 * i + s) * pe(-1 * n), d += .4 * be(2 * i + s) * pe(-2 * n), d += .3 * be(4 * i + s) * pe(-3 * n), d += .2 * be(8 * i + s) * pe(-4 * n), d += 1 * d * pe(-10 * e), d *= 1 - n * n * n * n, d
            }
            flute(e, t, n) {
                var s, i;
                return i = 6 * n * pe(-2 * n) * be(t * e), i *= .6 + .4 * be(32 * (1 - n)), s = .87, n > s && (i *= ve(1 - (n - s) / (1 - s), 2)), i
            }
        }, d = class {
            constructor() {
                this.volDown = this.volDown.bind(this), this.volUp = this.volUp.bind(this), this.vol = 0, this.ctx = new(window.AudioContext || window.webkitAudioContext), this.gain = this.ctx.createGain(), this.gain.connect(this.ctx.destination), this.synt = {}, this.setSynt({
                    bot: {
                        instrument: "bell3"
                    },
                    usr: {
                        instrument: "bell3"
                    },
                    menu: {
                        instrument: "string"
                    },
                    line: {
                        instrument: "flute"
                    }
                })
            }
            play(e, t, n = 0) {
                return this.synt[e].playNote(function() {
                    return "draw" === t ? 36 + n + parseInt(_(0, 2)) : "send" === t ? 48 + n + parseInt(_(0, 2)) : "won" === t ? 60 + n + parseInt(_(0, 4)) : "lost" === t ? 72 + n + parseInt(_(0, 2)) : void 0
                }())
            }
            setSynt(e) {
                var t, n, s;
                for (t in n = [], e) s = e[t], n.push(this.synt[t] = new a(s, this.ctx, this.gain));
                return n
            }
            volDown() {
                return .0625 > this.vol ? this.volume(0) : this.volume(this.vol / 2)
            }
            volUp() {
                return this.volume(b(.03125, 1, 2 * this.vol))
            }
            volume(e) {
                return this.vol = e, q(this.vol), this.gain.gain.value = this.vol, G.set("volume", this.vol)
            }
        }, n = class {
            constructor() {
                this.maxSmpl = 300, this.smpls = {
                    bot: [],
                    usr: []
                }, this.g = l("g"), this.p = {
                    bot: m(this.g, "path", {
                        class: "grph bot"
                    }),
                    usr: m(this.g, "path", {
                        class: "grph usr"
                    })
                }
            }
            sample() {
                var e, t, n, i, r, a, l, c, m, p, v, h, g;
                for (a = function(e) {
                        return 60 * (.5 - e)
                    }, p = le.units.bot + le.units.usr, l = ["usr", "bot"], m = [], (t = 0, n = l.length); t < n; t++) {
                    for (r = l[t], this.smpls[r].push(le.units[r] / p), this.smpls[r].length > this.maxSmpl && this.smpls[r].shift(), e = `M 0 ${a(this.smpls[r][0])} `, g = 0, c = this.smpls[r], (h = 0, i = c.length); h < i; h++) v = c[h], g += 1, e += `L ${g} ${a(v)} `;
                    m.push(this.p[r].setAttribute("d", e))
                }
                return m
            }
            plot() {
                return this.g.setAttribute("transform", `translate(${Q.size.x-60-this.smpls.bot.length}, 47)`)
            }
        }, ue = window, F = document.getElementById("main"), G = new i, ie = F.children[0], V = function(t, e) {
            var n, s, i, d;
            if (null != e)
                for (d = Object.keys(e), n = 0, i = d.length; n < i; n++) s = d[n], t.setAttribute(s, e[s]);
            return t
        }, m = function(n, s, t) {
            var i;
            return i = document.createElementNS("http://www.w3.org/2000/svg", s), n.appendChild(V(i, t)), i
        }, l = function(e, t) {
            return m(ie, e, t)
        }, p = function(e, t) {
            var a, u, l, c, m, p, h, g, b;
            for (p = e.angle(t), c = parseInt(p / .087), g = re(e), a = `M ${g.x} ${g.y}`, m = o.axis(e.cross(t).norm(), p / (c + 1)), b = e.cpy(), (u = l = 0, h = c); 0 <= h ? l < h : l > h; u = 0 <= h ? ++l : --l) b = m.rotate(b), g = re(b), a += ` L ${g.x} ${g.y}`;
            return g = re(t), a += ` L ${g.x} ${g.y}`, a
        }, v = function(e) {
            return e.c.style.opacity = (e.depth() + .3) / 1.3
        }, Q = {
            size: oe(),
            center: oe(),
            radius: 0
        }, re = function(e) {
            return oe(Q.center.x + e.x * Q.radius, Q.center.y + e.y * Q.radius)
        }, $ = function(e) {
            return e = e.minus(Q.center).times(1 / Q.radius), 1 < e.length() ? e.norm() : oe(e.x, e.y, fe(1 - e.x * e.x - e.y * e.y))
        }, J = function(e) {
            return o.axis(oe(0, 1, 0), e.x / Q.radius).mul(o.axis(oe(1, 0, 0), e.y / -Q.radius))
        }, C = {
            left: F.children[1],
            right: F.children[2],
            buttons: {}
        }, le = {
            pause: 0,
            update: 0,
            time: 0,
            delta: 0,
            ticks: 0,
            dots: [],
            sparks: [],
            lines: [],
            tmpline: {},
            units: {},
            userRot: new o,
            inertRot: new o,
            circle: null,
            rotSum: oe()
        }, Y = {
            pos: oe(),
            drag: null,
            hover: null,
            touch: null
        }, h = null, se = new d, U = null, S = [{
            name: "menu",
            addUnit: 0,
            msg: "Knot",
            hint: ["WELCOME TO", "A PUZZLE GAME\nBY RISHABH GOSWAMI"],
            dots: [{
                v: [0, 0, 1],
                b: 0,
                l: "TUTORIAL 1"
            }, {
                v: [0, -.3, .8],
                l: "TUTORIAL 2"
            }, {
                v: [-.3, -.58, .75],
                l: "TUTORIAL 3"
            }, {
                v: [.3, -.58, .75],
                l: "TUTORIAL 4"
            }, {
                v: [0, -.82, .58],
                l: "TUTORIAL 5"
            }, {
                v: [0, -1, .01],
                l: "EASY"
            }, {
                v: [-1, 0, 0],
                l: "CIRCLES"
            }, {
                v: [-1, 0, -1],
                l: "RING"
            }, {
                v: [-1, 1, -1],
                l: "CLOSE"
            }, {
                v: [1, 1, -1],
                l: "POLES"
            }, {
                v: [1, 0, -1],
                l: "UNFAIR"
            }, {
                v: [1, 0, -.01],
                l: "FRENZY"
            }, {
                v: [0, 1, 0],
                l: "RANDOM"
            }],
            lines: [
                [0, 1],
                [1, 2],
                [1, 3],
                [3, 4],
                [2, 4],
                [4, 5],
                [5, 6],
                [6, 7],
                [7, 8],
                [8, 9],
                [9, 10],
                [10, 11],
                [11, 12]
            ]
        }, {
            name: "TUTORIAL 1",
            synt: {
                usr: {
                    instrument: "piano1"
                },
                bot: {
                    instrument: "piano2"
                }
            },
            addUnit: 0,
            hint: ["You control the blue nodes. Your task is to fight the red nodes.\n\nNodes contain processes. The more processes, the stronger the node.", "Attack the infected red node by dragging from your blue node.\n\nEach time you attack, half of the available processes will be sent."],
            dots: [{
                v: [-.5, 0, 1],
                u: 360
            }, {
                v: [.5, 0, 1],
                b: 270
            }]
        }, {
            name: "TUTORIAL 2",
            synt: {
                usr: {
                    instrument: "bell1"
                },
                bot: {
                    instrument: "bell2"
                }
            },
            addUnit: 0,
            hint: ["To win, you need to deactivate all red nodes.\n\nIt is OK to leave inactive red nodes!", "This level contains 4 inactive and 2 active red nodes.\n\nDrag anywhere to rotate the sphere."],
            dots: [{
                v: [0, 0, 1],
                u: 90
            }, {
                v: [-.2, 0, 1],
                b: 11
            }, {
                v: [.2, 0, 1],
                b: 11
            }, {
                v: [0, .2, 1],
                b: 11
            }, {
                v: [0, -.2, 1],
                b: 11
            }, {
                v: [-.1, .1, -1],
                b: 15
            }, {
                v: [.1, .1, -1],
                b: 15
            }]
        }, {
            name: "TUTORIAL 3",
            synt: {
                usr: {
                    instrument: "bell3"
                },
                bot: {
                    instrument: "bell4"
                }
            },
            addUnit: 0,
            hint: ["Sending to nodes that you don't own isn't free.\n\nThe farther away the target node, the higher the cost.", "The cost factor is multiplied by the number of processes sent. The more you send, the more you loose.\n\nNotice that you need more attacks -- and loose more processes -- when defeating the far node."],
            dots: [{
                v: [-.9, -.2, .1],
                u: 360
            }, {
                v: [-.9, .2, .1],
                u: 360
            }, {
                v: [-.9, 0, .1],
                b: 180
            }, {
                v: [.9, 0, .1],
                b: 180
            }]
        }, {
            name: "TUTORIAL 4",
            addUnit: 0,
            hint: ["Sending processes to nodes you own cost nothing.\n\nIt is efficient to occupy far away neutral nodes with few processes first and send larger groups later.", "Contrary to common believe,\nyou can't send processes between already connected nodes."],
            dots: [{
                v: [-.7, .1, .3],
                u: 180
            }, {
                v: [-.7, -.1, .3],
                u: 12
            }, {
                v: [.7, -.1, .3]
            }, {
                v: [.7, .1, .3],
                b: 135
            }],
            lines: [
                [0, 1]
            ]
        }, {
            name: "TUTORIAL 5",
            addUnit: 3,
            hint: ["New processes are spawned regularily in active nodes.\n\nAlways make sure you have more active nodes than the opponent.", "You can see the number of active nodes in the top right corner.\n\nThe graph plots the relative amount of available processes."],
            dots: [{
                v: [0, 0, 1],
                u: 60
            }, {
                v: [-.5, -.5, 1]
            }, {
                v: [.5, -.5, 1]
            }, {
                v: [-.5, .5, 1]
            }, {
                v: [.5, .5, 1]
            }, {
                v: [-1, 0, 1]
            }, {
                v: [1, 0, 1]
            }, {
                v: [0, -1, 1]
            }, {
                v: [0, 1, 1]
            }, {
                v: [-1, -1, 0],
                b: 12
            }, {
                v: [1, -1, 0],
                b: 12
            }, {
                v: [-1, 1, 0],
                b: 12
            }, {
                v: [1, 1, 0],
                b: 12
            }, {
                v: [0, 0, -1],
                b: 12
            }]
        }, {
            name: "EASY",
            synt: {
                usr: {
                    instrument: "organ1"
                },
                bot: {
                    instrument: "organ2"
                }
            },
            addUnit: 2,
            hint: ["Be prepared, the red nodes are fighting back!", "You learned the basics, remove the virus from the system!"],
            dots: [{
                v: [0, 0, 1],
                u: 60
            }, {
                v: [-.5, -.5, 1]
            }, {
                v: [.5, -.5, 1]
            }, {
                v: [-.5, .5, 1]
            }, {
                v: [.5, .5, 1]
            }, {
                v: [-1, 0, 1]
            }, {
                v: [1, 0, 1]
            }, {
                v: [0, -1, 1]
            }, {
                v: [0, 1, 1]
            }, {
                v: [-1, -1, -1]
            }, {
                v: [1, -1, -1]
            }, {
                v: [-1, 1, -1]
            }, {
                v: [1, 1, -1]
            }, {
                v: [0, 0, -1],
                b: 60
            }],
            bot: {
                speed: 8,
                i: -1
            }
        }, {
            name: "CIRCLES",
            synt: {
                usr: {
                    instrument: "string"
                },
                bot: {
                    instrument: "flute"
                }
            },
            addUnit: 4,
            dots: [{
                v: [0, 0, 1],
                u: 60
            }, {
                c: [8, 45, 0, 0]
            }, {
                c: [8, 45, 0, 180]
            }, {
                c: [16, 90, 0, 0]
            }, {
                v: [0, 0, -1],
                b: 60
            }],
            bot: {
                speed: 7,
                i: -1
            }
        }, {
            name: "RING",
            synt: {
                usr: {
                    instrument: "bell1"
                },
                bot: {
                    instrument: "bell2"
                }
            },
            addUnit: 4,
            dots: [{
                v: [0, 0, 1],
                u: 60
            }, {
                c: [5, 90, -30, 90, 30]
            }, {
                c: [5, -90, -30, 90, 30]
            }, {
                c: [5, 70, -120, 90, 30]
            }, {
                c: [5, 70, -60, -90, 30]
            }, {
                v: [0, 0, -1],
                b: 60
            }],
            bot: {
                speed: 5,
                i: -1
            }
        }, {
            name: "CLOSE",
            addUnit: 4,
            dots: [{
                v: [-.4, 0, 1],
                u: 60
            }, {
                c: [11, 90, -15, 45, 15]
            }, {
                c: [11, -90, -15, 45, 15]
            }, {
                v: [.4, 0, 1],
                b: 60
            }],
            bot: {
                speed: 4,
                i: -1
            }
        }, {
            name: "POLES",
            synt: {
                usr: {
                    instrument: "bell3"
                },
                bot: {
                    instrument: "bell4"
                }
            },
            addUnit: 4,
            dots: [{
                v: [0, 0, 1],
                u: 60
            }, {
                c: [8, 20, 90, 0]
            }, {
                c: [8, 20, -90, 0]
            }, {
                c: [8, 20, 0, 90]
            }, {
                c: [8, 20, 0, -90]
            }, {
                v: [0, 0, -1],
                b: 60
            }],
            bot: {
                speed: 6,
                i: -1
            }
        }, {
            name: "UNFAIR",
            addUnit: 6,
            synt: {
                usr: {
                    instrument: "bell3"
                },
                bot: {
                    instrument: "bell4"
                }
            },
            dots: [{
                v: [0, 0, 1],
                u: 90
            }, {
                c: [4, 15, 180, 0]
            }, {
                c: [8, 30, 180, 0]
            }, {
                c: [16, 45, 180, 0]
            }, {
                v: [0, 0, -1],
                b: 360
            }],
            bot: {
                speed: 3,
                i: -1
            }
        }, {
            name: "FRENZY",
            addUnit: 8,
            synt: {
                usr: {
                    instrument: "bell3"
                },
                bot: {
                    instrument: "bell4"
                }
            },
            dots: [{
                v: [0, 0, 1],
                u: 180
            }, {
                c: [4, 22.5, 0, 0]
            }, {
                c: [4, 22.5, 180, 0]
            }, {
                c: [4, 22.5, 90, 0]
            }, {
                c: [4, 22.5, -90, 0]
            }, {
                c: [6, 40, 0, 0]
            }, {
                c: [6, 40, 180, 0]
            }, {
                c: [6, 40, 90, 0]
            }, {
                c: [6, 40, -90, 0]
            }, {
                v: [0, 0, -1],
                b: 12
            }, {
                v: [1, 0, 0],
                b: 12
            }, {
                v: [-1, 0, 0],
                b: 12
            }, {
                v: [0, 1, 0],
                b: 12
            }, {
                v: [0, -1, 0],
                b: 12
            }],
            bot: {
                speed: 2,
                i: -1
            }
        }], R = {}, (z = O = 0, Z = S.length); 0 <= Z ? O < Z : O > Z; z = 0 <= Z ? ++O : --O) A = S[z], A.index = z, R[A.name] = A;
    r = class {
        constructor(e, t) {
            var n, s, d;
            for (this.dot = e, this.units = me(t / 3), this.sparks = [], this.ticks = 0, this.g = l("g"), (n = d = 0, s = this.units); 0 <= s ? d < s : d > s; n = 0 <= s ? ++d : --d) this.sparks.push(m(this.g, "circle", {
                class: `spark ${this.dot.own}`,
                r: Q.radius / 60
            }));
            le.sparks.push(this)
        }
        upd() {
            var e, t, n, i, d, r, o, a, l, c, m, h, g, b;
            if (o = re(this.dot.v), this.g.setAttribute("transform", `translate(${o.x}, ${o.y})`), b = .5 + .5 * this.dot.depth(), le.pause || (this.ticks += 1), r = we(5 * this.units, 120), this.ticks > r) {
                for (a = this.sparks, h = 0, i = a.length; h < i; h++) m = a[h], m.remove();
                return le.sparks.splice(le.sparks.indexOf(this), 1)
            }
            for (e = 0, t = this.ticks / r, l = this.sparks, c = [], (n = 0, d = l.length); n < d; n++) m = l[n], e += 2 * ye / this.sparks.length, g = oe(ge(e), be(e)), g.mul(this.dot.radius() + r * t * b * Q.radius / 500), m.setAttribute("r", (.5 + .5 * t) * b * Q.radius / 60), m.setAttribute("opacity", ge(t * ye)), m.setAttribute("cx", g.x), c.push(m.setAttribute("cy", g.y));
            return c
        }
    }, t = class {
        constructor(e) {
            this.onTimer = this.onTimer.bind(this), this.v = e, this.minUnits = 12, this.own = "", this.units = 0, this.targetUnits = 0, this.n = [], this.i = le.dots.length, this.v.norm(), this.g = l("g"), this.c = m(this.g, "circle", {
                class: "dot",
                id: this.i,
                cx: 0,
                cy: 0,
                r: 1.3
            }), this.c.dot = this, le.dots.push(this)
        }
        startTimer(e, t = "send", n = 0) {
            return this.snd = t, this.cst = n, this.targetUnits += e, clearInterval(this.timer), this.timer = setInterval(this.onTimer, 160)
        }
        onTimer() {
            if (!le.pause) return se.play(this.own, this.snd, this.cst), this.targetUnits > this.units ? (this.units += 10, this.units >= this.targetUnits && (this.units = this.targetUnits)) : (this.units -= 10, this.units <= this.targetUnits && (this.units = this.targetUnits)), this.units === this.targetUnits && (clearInterval(this.timer), delete this.timer), 0 === this.units && this.unlink(), this.drawPie()
        }
        setUnits(e) {
            return this.units = e, this.targetUnits = this.units, this.drawPie()
        }
        addUnit(e = 1) {
            if (0 !== e) return this.targetUnits = b(0, 360, this.targetUnits + e), this.units = b(0, 360, this.units + e), this.drawPie()
        }
        drawPie() {
            var e, t, n;
            return this.pie || (this.pie = m(this.g, "path", {
                class: "pie"
            })), this.units < this.minUnits ? (this.c.classList.remove("linked"), n = 0, e = -1, this.pie.setAttribute("d", "M0,-1 A1,1 0 1,0 0,1 A1,1 0 0,0 0,-1 z")) : (this.c.classList.add("linked"), n = be(y(this.units)), e = -ge(y(this.units)), t = 180 >= this.units && "1,0" || "0,0", this.pie.setAttribute("d", `M0,0 L0,-1 A1,1 0 ${t} ${n},${e} z`))
        }
        depth() {
            return (this.v.z + 1) / 2
        }
        zdepth() {
            return this.depth()
        }
        radius() {
            return (this.depth() + .3) / 1.5 * Q.radius / 20
        }
        raise() {
            return this.g.parentNode.appendChild(this.g)
        }
        closest() {
            return le.dots.slice(0).sort((e, t) => this.dist(e) - this.dist(t)).slice(1)
        }
        dist(e) {
            return this.v.angle(e.v)
        }
        neutralize() {
            return this.own = "", this.units = 0, this.targetUnits = 0, this.c.classList.remove("bot"), this.c.classList.remove("usr")
        }
        linked(e) {
            return 0 <= Ue.call(this.n, e) || 0 <= Ue.call(e.n, this)
        }
        unlink() {
            return le.lines = le.lines.filter(e => e.s !== this && e.e !== this || (e.e.n = e.e.n.filter(e => e !== this), e.s.n = e.s.n.filter(e => e !== this), e.c.remove(), !1)), this.n = [], this.neutralize()
        }
        link(e) {
            var t, n, i, d, o, a, u;
            if (!(e === this || this.targetUnits < this.minUnits || this.linked(e))) return t = .5 * X(this.dist(e)) / 180, e.own === this.own && (t = 0), u = me(.5 * this.targetUnits), a = me(u * (1 - t)), 0 === t && 360 < e.targetUnits + a && (o = e.targetUnits + a - 360, a -= o, u -= o), i = a, "" !== e.own && e.own !== this.own ? (i = -a, new r(this, u), a === e.targetUnits ? (d = "draw", new r(e, a)) : a < e.targetUnits ? (d = "lost", new r(e, a)) : (d = "won", n = 1, i = a - e.targetUnits, new r(e, e.targetUnits), e.unlink(), e.setOwn(this.own))) : (n = 1, d = "send", e.setOwn(this.own), new r(e, he(u * t))), this.startTimer(-u, d, parseInt(18 * t)), e.startTimer(i), n ? (le.update = 1, new s(this, e)) : null
        }
        setOwn(e) {
            return this.own = e, this.c.classList.toggle("bot", "bot" === this.own), this.c.classList.toggle("usr", "usr" === this.own)
        }
        send(e) {
            var t, n, i, d, r, o;
            return i = null == (d = le.tmpline.usr) ? void 0 : d.e, f("usr"), Y.touch && Y.touch !== this && !this.linked(Y.touch) ? o = Y.touch : (n = function(t) {
                return e.angle(t.v)
            }, t = le.dots.slice(0).sort((e, t) => n(e) - n(t)), o = t[0]), o === this || this.linked(o) ? r = {
                v: e,
                depth: function() {
                    return (e.z + 1) / 2
                }
            } : (r = o, i !== r && se.play("line", "won", parseInt(.1 * X(this.dist(r))))), le.tmpline.usr = new s(this, r, !0)
        }
        rot(e) {
            return this.v = e.rotate(this.v)
        }
        upd() {
            var e;
            return e = re(this.v), this.g.setAttribute("transform", `translate(${e.x},${e.y}) scale(${this.radius()})`), v(this)
        }
    }, e = class {
        constructor() {
            this.speed = 4, this.tsum = 0
        }
        tmpl(e, t) {
            return f("bot"), le.tmpline.bot = new s(e, t, !0), le.update = 1
        }
        anim(e) {
            var t, n, s, i, r, o;
            if (this.tsum += e, this.tsum > 60 * this.speed) {
                if (i = le.dots.filter(function(e) {
                        return "bot" === e.own
                    }), this.tsum = 0, 0 === i.length) return;
                for (i.sort(function(e, t) {
                        return t.units - e.units
                    }), s = i[0], n = s.closest(), (o = 0, r = n.length); o < r; o++)
                    if (t = n[o], !s.linked(t)) return s.link(t), void this.tmpl(s, t)
            }
        }
    }, s = class {
        constructor(e, t, n) {
            var s, i;
            this.s = e, this.e = t, this.c = l("path", {
                class: "line"
            }), this.s.own && this.c.classList.add(this.s.own), n ? (this.c.classList.add("tmp"), this.s.c.classList.add("src")) : (null != (s = this.s.n) && s.push(this.e), null != (i = this.e.n) && i.push(this.s), le.lines.push(this))
        }
        del() {
            return this.s.c.classList.remove("src"), this.c.remove()
        }
        depth() {
            return (this.s.depth() + this.e.depth()) / 2
        }
        zdepth() {
            return ke(this.s.depth(), this.e.depth()) - .001
        }
        raise() {
            var e;
            return null == (e = this.c.parentNode) ? void 0 : e.appendChild(this.c)
        }
        upd() {
            return this.c.setAttribute("d", p(this.s.v, this.e.v)), v(this), this.c.style.strokeWidth = (this.depth() + .3) / 1.5 * Q.radius / 50
        }
    }, I = function() {
        var e, t;
        return "usr" === le.winner ? N(null == (e = null == (t = S[le.level.index + 1]) ? void 0 : t.name) ? "menu" : e) : 6 > le.level.index ? k(le.level.name) : N("menu")
    }, k = function(e) {
        return le.level = null, N(e)
    }, N = function(e) {
        if (ie.innerHTML = "", C.bot.innerHTML = "", C.usr.innerHTML = "", le.circle = l("circle", {
                class: "world",
                cx: Q.center.x,
                cy: Q.center.y,
                r: Q.radius
            }), le.circle.v = oe(), le.ticks = 0, le.dots = [], le.lines = [], le.update = 1, le.winner = null, Y.drag = null, h = null, f("usr"), f("bot"), L(), H(), "menu" === e ? te("menu") : te("game"), ("RANDOM" === e ? W() : E(e), le.pause)) return K()
    }, E = function(r) {
        var c, m, p, g, b, f, x, w, k, z, E, T, O, S, N, I, M, F;
        if ((null == (E = le.level) ? void 0 : E.name) !== r) {
            for (A = R[r], T = A.dots, (M = 0, w = T.length); M < w; M++) {
                if (m = T[M], m.c) {
                    for (g = b = 0, O = m.c[0]; 0 <= O ? b < O : b > O; g = 0 <= O ? ++b : --b) z = o.axis(oe(0, 1, 0), y(m.c[2])).mul(o.axis(oe(1, 0, 0), y(m.c[3]))), F = oe(0, 0, 1), F = o.axis(oe(1, 0, 0), y(m.c[1])).rotate(F), c = null == (S = m.c[4]) ? 360 / m.c[0] : S, F = o.axis(oe(0, 0, 1), y(g * c)).rotate(F), F = z.rotate(F), p = new t(F);
                    continue
                }
                p = new t(oe(m.v[0], m.v[1], m.v[2])), m.u && (p.setOwn("usr"), p.setUnits(m.u)), m.b && (p.setOwn("bot"), p.setUnits(m.b)), "menu" === r && (p.level = m.l, G.get(m.l) && p.setOwn("usr"))
            }
            for (I = null == (N = A.lines) ? [] : N, f = 0, k = I.length; f < k; f++) x = I[f], new s(le.dots[x[0]], le.dots[x[1]]);
            if (A.bot && (x = le.dots.length, g = (x + A.bot.i) % x, h = new e(le.dots[g]), A.bot.speed && (h.speed = A.bot.speed)), A.msg ? B(A.msg) : B(), A.hint ? L(A.hint[0], A.hint[1]) : L("", A.name), "menu" === r && (delete A.msg, delete A.hint), le.level = A, le.addUnit = A.addUnit, A.synt && se.setSynt(A.synt), le.addUnit) return U = new n
        }
    }, W = function() {
        var s, r, o, a, l, c, m, p, g, f, y, x, w, k, L;
        for (U = new n, le.addUnit = parseInt(_(1, 8)), le.level = {
                name: "RANDOM"
            }, r = new t(oe(0, 0, 1)), r.setOwn("usr"), p = null == (f = le.nodes) ? 2 * parseInt(_(8, 20)) : f, (a = k = 1, y = p / 2); 1 <= y ? k < y : k > y; a = 1 <= y ? ++k : --k) {
            for (L = oe(_(-1, 1), _(-1, 1), _(0, 1)), L.norm();;) {
                for (g = !0, x = le.dots, (l = 0, m = x.length); l < m; l++)
                    if (o = x[l], .2 > L.angle(o.v)) {
                        L = oe(_(-1, 1), _(-1, 1), _(0, 1)), L.norm(), g = !1;
                        break
                    } if (g) break
            }
            new t(L)
        }
        for (a = c = w = p / 2 - 1; 0 >= w ? 0 >= c : 0 <= c; a = 0 >= w ? ++c : --c) new t(le.dots[a].v.times(-1).add(oe(.01)));
        return s = le.dots[le.dots.length - 1], s.setOwn("bot"), h = new e, h.speed = parseInt(_(2, 6)), se.setSynt({
            usr: {
                instrument: `bell${parseInt(_(1,5))}`
            },
            bot: {
                instrument: `piano${parseInt(_(1,6))}`
            }
        }), s.startTimer(180), r.startTimer(180)
    }, q = function(e) {
        var t;
        return se.play("menu", "draw"), null == (t = C.buttons.VOL) ? void 0 : t.innerHTML = `${he(100*e)/100}`
    }, D = {
        menu: [{
            OPTIONS: {
                click: function() {
                    return te("options")
                }
            }
        }],
        game: [{
            PAUSE: {
                click: function() {
                    return K()
                }
            }
        }],
        options: [{
            OPTIONS: {
                click: function() {
                    return te("menu")
                }
            }
        }, {
            FULLSCREEN: {
                click: function() {
                    return de()
                }
            }
        }, {
            VOLUME: {
                class: "choice",
                values: ["-", "VOL", "+"],
                cb: function(e) {
                    if ("+" === e) return se.volUp();
                    return "-" === e ? se.volDown() : void 0
                }
            }
        }, {
            ABOUT: {
                click: function() {
                    return P()
                }
            }
        }, {
            "RESET PROGRESS": {
                click: function() {
                    return G.clear(), k("menu")
                }
            }
        }],
        pause: [{
            UNPAUSE: {
                click: function() {
                    return K()
                }
            }
        }, {
            MENU: {
                click: function() {
                    return N("menu")
                }
            }
        }, {
            RESET: {
                click: function() {
                    return k(le.level.name)
                }
            }
        }, {
            FULLSCREEN: {
                click: function() {
                    return de()
                }
            }
        }, {
            VOLUME: {
                class: "choice",
                values: ["-", "VOL", "+"],
                cb: function(e) {
                    if ("+" === e) return se.volUp();
                    return "-" === e ? se.volDown() : void 0
                }
            }
        }],
        next: [{
            NEXT: {
                click: function() {
                    return I()
                }
            }
        }, {
            MENU: {
                click: function() {
                    return N("menu")
                }
            }
        }, {
            RESET: {
                click: function() {
                    return k(le.level.name)
                }
            }
        }]
    }, te = function(e) {
        var t, n, s, i, d, r, o, a, l, c;
        for (s in se.play("menu", "send", parseInt(_(0, 8))), o = C.buttons, o) c = o[s], c.remove(), delete C.buttons[s];
        for (d = D[e], a = [], (l = 0, i = d.length); l < i; l++) n = d[l], r = Object.keys(n)[0], t = n[r], null == t.class && (t.class = "button"), null == t.text && (t.text = r), "choice" === t.class ? a.push(g(t)) : a.push(C.buttons[r] = x("div", t, C.left));
        return a
    }, T = function() {
        return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement
    }, de = function() {
        var e, t, n;
        return se.play("menu", "draw"), T() ? (e = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen, e.call(document)) : (t = document.documentElement, n = t.requestFullscreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullscreen, n.call(t))
    }, x = function(n, t, s) {
        var i;
        return i = document.createElement(n), null != t.text && (i.innerText = t.text), null != t.html && (i.innerHTML = t.html), null != t.click && i.addEventListener("click", t.click), s.appendChild(V(i, t)), i
    }, B = function(e, t = "") {
        var n;
        if (null != (n = Q.msg) && n.remove(), e) return Q.msg = x("div", {
            class: `msg ${t}`,
            text: e
        }, F), w("msg", Q.msg)
    }, L = function(e, t) {
        var n, s;
        if (null != (n = Q.hint1) && n.remove(), null != (s = Q.hint2) && s.remove(), e && (Q.hint1 = x("div", {
                class: "hint1",
                text: e
            }, F), w("hint", Q.hint1)), t) return Q.hint2 = x("div", {
            class: "hint2",
            text: t
        }, F), w("hint", Q.hint2)
    }, H = function(e, n) {
        var t, i;
        if (null != (t = Q.popup) && t.remove(), n) return i = re(e), Q.popup = x("div", {
            class: "popup",
            text: n
        }, F), Q.popup.style.left = `${i.x}px`, Q.popup.style.top = `${i.y-Q.radius/7}px`, w("hint", Q.popup), se.play("line", "draw", parseInt(_(0, 8)))
    }, g = function(e) {
        var t, n, s, i, d, r;
        for (C.buttons[e.text] = x("div", e, C.left), i = e.values, d = [], (r = 0, s = i.length); r < s; r++) t = i[r], n = function(t, n) {
            return function(s) {
                var e, i, d, r;
                for (d = t.values, e = 0, i = d.length; e < i; e++) r = d[e], C.buttons[r].classList.remove("highlight");
                return "+" !== n && "-" !== n && "VOL" !== n && s.target.classList.add("highlight"), "VOL" !== n && t.cb(n), s.stopPropagation()
            }
        }, C.buttons[t] = x("div", {
            class: "button",
            text: t,
            click: n(e, t)
        }, C.left), "VOL" === t ? d.push(q(se.vol)) : d.push(void 0);
        return d
    }, P = function() {
        var e, n, s;
        return se.play("menu", "draw"), null != (n = C.about) && n.remove(), e = function() {
            return C.about.remove(), delete C.about, se.play("menu", "won")
        }, s = "", s += "<div class='konnekt'>KNOTS</div> <br>", s += "", s += "", s += "", s += "", C.about = x("", {
            class: "about",
            html: s,
            click: e
        }, F)
    }, C.usr = x("div", {
        class: "button usr"
    }, C.right), C.bot = x("div", {
        class: "button bot"
    }, C.right), w = function(t, n) {
        var e;
        if (n) return e = function() {
            return "msg" === t ? Q.radius / 6 : "hint" === t ? Q.radius / 20 : "menu" === t ? we(12, Q.radius / 30) : void 0
        }(), n.style.fontSize = `${parseInt(e)}px`
    }, ne = function() {
        var e;
        return e = ie.getBoundingClientRect(), Q.size = oe(e.width, e.height), Q.center = oe(e.width / 2, e.height / 2), Q.radius = .4 * ke(Q.size.x, Q.size.y), le.update = 1, le.circle && (le.circle.setAttribute("cx", Q.center.x), le.circle.setAttribute("cy", Q.center.y), le.circle.setAttribute("r", Q.radius)), w("hint", Q.hint1), w("hint", Q.hint2), w("msg", Q.msg), w("menu", C.left), null == U ? void 0 : U.plot()
    }, ne(), ue.addEventListener("mousemove", function(t) {
        var e, n, s, i;
        if (Y.pos = oe(t.clientX, t.clientY), "rot" === Y.drag) {
            for (le.userRot = J(oe(t.movementX, t.movementY)), s = le.dots, (i = 0, n = s.length); i < n; i++) e = s[i], e.rot(le.userRot), le.update = 1;
            return le.rotSum.add(oe(t.movementX / 10, t.movementY / 10))
        }
        if (Y.drag) switch (t.buttons) {
            case 1:
                return Y.drag.send($(Y.pos)), le.update = 1;
            case 2:
                return Y.drag.v = $(Y.pos), le.update = 1;
        }
    }), f = function(e) {
        var t;
        return null != (t = le.tmpline[e]) && t.del(), delete le.tmpline[e]
    }, ue.addEventListener("mousedown", function(t) {
        if (f("usr"), le.inertRot = new o, L(), H(), "menu" === le.level.name) B();
        else if (le.winner && 1 === t.buttons && !t.target.classList.contains("button")) return void I();
        if (Y.drag = t.target.dot) {
            if ("menu" === le.level.name) return void(1 === t.buttons && N(Y.drag.level));
            if (!le.pause && Y.drag.c.classList.contains("linked") && "bot" !== Y.drag.own) return
        }
        return Y.drag = "rot"
    }), ue.addEventListener("mouseup", function() {
        return "rot" === Y.drag ? le.inertRot = J(le.rotSum) : Y.drag && (le.inertRot = new o, le.tmpline.usr && le.tmpline.usr.e.c && Y.drag.link(le.tmpline.usr.e), Y.drag.c.classList.remove("src")), f("usr"), Y.drag = null, le.update = 1
    }), ie.addEventListener("mouseover", function(t) {
        var e;
        if ((Y.touch = t.target.dot, !Y.drag) && (e = t.target.dot))
            if (!le.pause && e.c.classList.contains("linked") && "usr" === e.own || "menu" === le.level.name) {
                if (e !== Y.hover && (ee(e), e.c.classList.add("src"), "menu" === le.level.name)) return B(), L(), H(e.v, e.level);
            } else if (Y.hover) return ee()
    }), ee = function(e, t = 1) {
        var n;
        return t && null != (n = Y.hover) && n.c.classList.remove("src"), Y.hover = e
    }, ie.addEventListener("mouseout", function(t) {
        var e;
        if (Y.touch = null, (e = t.target.dot) && e === Y.hover && (ee(null, e !== Y.drag), "menu" === le.level.name)) return H()
    }), ue.addEventListener("keydown", function(t) {
        switch (t.keyCode) {
            case 32:
            case 27:
                return K();
            case 82:
                return k(le.level.name);
        }
    }), K = function(e = "PAUSED", t = "", n = "pause") {
        var s;
        if ("menu" !== (null == (s = le.level) ? void 0 : s.name)) return le.pause = !le.pause, te(le.winner && "next" || le.pause && "pause" || "game"), B(le.pause && e || "", t)
    }, ae = function() {
        if (document.hidden && !le.pause) return K()
    }, c = function(e) {
        var t, n, s, i, r, a, m, p, v, g, b, f, y, w, k, L, z, E, T, O, A, S, R, N, I, M, F, P;
        if (L = function() {
                return ue.requestAnimationFrame(c), e
            }, le.delta = (e - le.time) / 16, le.time = e, !le.level) return L();
        if (!le.pause && "menu" !== le.level.name) {
            if (le.ticks += 1, 0 == le.ticks % 60) {
                for (E = ["usr", "bot"], F = 0, v = E.length; F < v; F++) {
                    if (z = E[F], n = le.dots.filter(function(e) {
                            return e.own === z
                        }), le.units[z] = n.reduce(function(e, t) {
                            return e + t.targetUnits
                        }, 0), n = n.filter(function(e) {
                            return e.units >= e.minUnits
                        }), C[z].innerHTML = `&#9679; ${n.length}`, 0 === n.length) return "bot" === z ? (le.winner = "usr", K("ONLINE!", "usr"), G.set(le.level.name, !0)) : (le.winner = "bot", K("OFFLINE!", "bot")), null != (T = Q.hint) && T.remove(), le.update = 1, L();
                    for (s = 0, g = n.length; s < g; s++) t = n[s], t.addUnit(le.addUnit)
                }
                null != U && U.sample(), null != U && U.plot()
            }
            null != h && h.anim(le.delta)
        }
        if (le.rotSum.mul(.8), le.inertRot.slerp(new o, .01 * le.delta), !le.inertRot.zero() || le.update) {
            for (O = le.dots, r = 0, b = O.length; r < b; r++) t = O[r], t.rot(le.inertRot), t.upd();
            for (A = le.lines, a = 0, f = A.length; a < f; a++) m = A[a], m.upd();
            for (null != (S = le.tmpline.usr) && S.upd(), null != (R = le.tmpline.bot) && R.upd(), i = le.lines.concat(le.dots), null != le.tmpline.usr && i.push(le.tmpline.usr), null != le.tmpline.bot && i.push(le.tmpline.bot), N = i.sort(function(e, t) {
                    return e.zdepth() - t.zdepth()
                }), (p = 0, y = N.length); p < y; p++) P = N[p], P.raise();
            le.update = 0
        }
        for (I = le.sparks.slice(0), k = 0, w = I.length; k < w; k++) M = I[k], M.upd();
        return L()
    }, ue.addEventListener("resize", ne), ue.addEventListener("contextmenu", function(t) {
        return t.preventDefault()
    }), document.addEventListener("visibilitychange", ae, !1), G.load(), ue.requestAnimationFrame(c)
}).call(this);