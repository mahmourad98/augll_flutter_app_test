function printStackTrace(a) {
    var b = a && a.e ? a.e : null, c = !a || !!a.guess, d = Object.create(printStackTrace_impl), e = d.run(b);
    return c ? d.guessFunctions(e) : e
}

function buildStack(a) {
    null == a && (a = "<br />");
    for (var b = printStackTrace(), c = 0; c < 5; c++) b.shift();
    return a + b.join(a) + a
}

var AR = AR || {};
if (AR.build = AR.build || {}, !AR.build.mobile) {
    var AR = AR || {};
    AR.build = AR.build || {}, AR.build.desktop = !0, AR = AR || {}, AR.js = AR.js || {}, AR.js.clickbuster = {}, AR.js.clickbuster.preventGhostClick = function (a, b) {
        AR.js.clickbuster.coordinates.push(a, b), window.setTimeout(AR.js.clickbuster.pop, 2500)
    }, AR.js.clickbuster.pop = function () {
        AR.js.clickbuster.coordinates.splice(0, 2)
    }, AR.js.clickbuster.coordinates = [], AR.js.click = {}, AR.js.click.onClickTrigger = function (a) {
        for (var b = 0; b < a.drawables.length; b++) {
            var c = AR.om.getObjectForID(a.drawables[b].drawable);
            if (c && c.onClick) if (a.drawables[b].drawableParts) {
                if (c.__onClick__(AR.om.getObjectForID(a.drawables[b].arObject), a.drawables[b].drawableParts)) return
            } else if (c.__onClick__(AR.om.getObjectForID(a.drawables[b].arObject))) return
        }
        for (var b = 0; b < a.arObjects.length; b++) {
            var d = AR.om.getObjectForID(a.arObjects[b]);
            if (d && d.onClick && d.onClick()) return
        }
        AR.context.onScreenClick && AR.context.onScreenClick(a.touchLocation)
    }, AR.js.clickBehavior = {}, AR.js.clickBehavior = {
        clickEvent: function (a) {
            for (var b = 0; b < AR.js.clickbuster.coordinates.length; b += 2) {
                var c = AR.js.clickbuster.coordinates[b], d = AR.js.clickbuster.coordinates[b + 1];
                Math.abs(a.clientX - c) < 25 && Math.abs(a.clientY - d) < 25 && (a.stopPropagation(), a.preventDefault())
            }
        }, executeClick: function (a) {
            (a.target === document.body || a.target === document.documentElement || "none" == a.target.style.background && void 0 !== a.target.attributes["data-role"] && "page" === a.target.attributes["data-role"].value) && AR.js.click.executePlatformClick(a)
        }
    }, AR.js.clickBehavior.touchDown = {
        touchstartEvent: function (a) {
            AR.js.clickBehavior.executeClick(a)
        }
    }, AR.js.clickBehavior.touchClick = {
        touchstartEvent: function (a) {
            AR.js.clickBehavior.moveDistance = 0, AR.js.clickBehavior.startX = a.touches[0].screenX, AR.js.clickBehavior.startY = a.touches[0].screenY, AR.js.clickBehavior.lastX = a.touches[0].screenX, AR.js.clickBehavior.lastY = a.touches[0].screenY
        }, touchmoveEvent: function (a) {
            var b = a.touches[0].screenX - AR.js.clickBehavior.lastX,
                c = a.touches[0].screenY - AR.js.clickBehavior.lastY;
            AR.js.clickBehavior.lastX = a.touches[0].screenX, AR.js.clickBehavior.lastY = a.touches[0].screenY, AR.js.clickBehavior.moveDistance += b * b + c * c
        }, touchendEvent: function (a) {
            var b = a.changedTouches[0].screenX - AR.js.clickBehavior.lastX,
                c = a.changedTouches[0].screenY - AR.js.clickBehavior.lastY;
            AR.js.clickBehavior.moveDistance += b * b + c * c;
            var d = a.changedTouches[0].screenX - AR.js.clickBehavior.startX,
                e = a.changedTouches[0].screenY - AR.js.clickBehavior.startY, f = d * d + e * e;
            AR.js.clickBehavior.moveDistance < 1e3 && f < 100 && AR.js.clickBehavior.executeClick(a)
        }
    }, AR.js.clickBehavior.touchUp = {
        touchendEvent: function (a) {
            AR.js.clickBehavior.executeClick(a)
        }
    }, AR.js.clickBehavior.removeClickBehavior = function () {
        null != AR.js.clickBehavior.currentBehavior && (null != AR.js.clickBehavior.currentBehavior.touchstartEvent && document.removeEventListener("touchstart", AR.js.clickBehavior.currentBehavior.touchstartEvent, !0), null != AR.js.clickBehavior.currentBehavior.touchmoveEvent && document.removeEventListener("touchmove", AR.js.clickBehavior.currentBehavior.touchmoveEvent, !0), null != AR.js.clickBehavior.currentBehavior.touchendEvent && document.removeEventListener("touchend", AR.js.clickBehavior.currentBehavior.touchendEvent, !0), document.removeEventListener("click", AR.js.clickBehavior.clickEvent), AR.js.clickBehavior.currentBehavior = null)
    }, AR.js.clickBehavior.addClickBehavior = function (a) {
        var b;
        "touchDown" === a ? b = AR.js.clickBehavior.touchDown : "touchClick" === a ? b = AR.js.clickBehavior.touchClick : "touchUp" === a && (b = AR.js.clickBehavior.touchUp), null != b.touchstartEvent && document.addEventListener("touchstart", b.touchstartEvent, !0), null != b.touchmoveEvent && document.addEventListener("touchmove", b.touchmoveEvent, !0), null != b.touchendEvent && document.addEventListener("touchend", b.touchendEvent, !0), AR.js.clickBehavior.currentBehavior = b, AR.js.clickBehavior.clickEvent = document.addEventListener("click", AR.js.clickBehavior.clickEvent, !0)
    }, AR.js.clickBehavior.setClickBehavior = function (a) {
        AR.js.clickBehavior.removeClickBehavior(), AR.js.clickBehavior.addClickBehavior(a)
    }, AR.js.clickBehavior.setClickBehavior("touchClick");
    var AR = AR || {};
    AR.i = AR.i || {}, AR.js = AR.js || {}, AR.build && AR.build.mobile && AR.ADE && AR.ADE.instance.removeADE();
    var SUPPORT_BRIDGE_OBJECTS = !0;
    AR.isDefined = function (a) {
        return null != a && void 0 != a
    }, AR.__architectBuildVersion__ = 990, function () {
        var a = function (a) {
            return "function" == typeof a
        };
        PClass = function () {
        }, PClass.create = function (b) {
            var c = function (b) {
                b != a && a(this.init) && this.init.apply(this, arguments)
            };
            c.prototype = new this(a);
            for (key in b) !function (b, d) {
                c.prototype[key] = a(b) && a(d) ? function () {
                    return this._super = d, b.apply(this, arguments)
                } : b
            }(b[key], c.prototype[key]);
            return c.prototype.constructor = c, c.extend = this.extend || this.create, c
        }
    }(), AR.__toJSONString__ = function (a) {
        return JSON.stringify(a)
    }, AR.__fromJSONString__ = function (a) {
        return JSON.parse(a)
    }, AR.__resourceUrl = function (a) {
        if (/^([a-z\d.-]+:)?\/\//i.test(a)) return a;
        var b = document.baseURI.substring(0, document.baseURI.indexOf("/") + 2),
            c = document.baseURI.substring(document.baseURI.indexOf("/") + 2);
        c.indexOf("#") > 0 && c.length > c.indexOf("#") + 1 && (c = c.substring(0, c.lastIndexOf("#")), "/" === c[c.length - 1] && (c += "/")), c = c.substring(0, c.lastIndexOf("/") + 1);
        var d = b + c;
        return "/" !== d[d.length - 1] && (d += "/"), "/" === a[0] && (d = d.substring(0, d.indexOf("/", d.indexOf("//") + 2))), d + a
    }, AR.VALIDATE = {
        HEX_CHARS: "0123456789ABCDEF", isDefined: function (a) {
            return !(null == a || void 0 == a)
        }, isBoolean: function (a) {
            return "boolean" == typeof a
        }, isNumeric: function (a) {
            return "number" == typeof a
        }, isPositive: function (a) {
            return this.isNumeric(a) && a > 0
        }, isNonNegative: function (a) {
            return this.isNumeric(a) && a >= 0
        }, isInRange: function (a, b, c) {
            return this.isNumeric(a) && a >= b && a <= c
        }, isFunction: function (a) {
            return "function" == typeof a
        }, isWholeNumber: function (a) {
            return this.isNumeric(a) && Math.round(a) == a
        }, isTypeOf: function (a, b) {
            return a instanceof b
        }, isString: function (a) {
            return "string" == typeof a
        }, isArrayOf: function (a, b) {
            if (!(a instanceof Array)) return !1;
            for (var c = 0; c < a.length; c++) if (!this.isTypeOf(a[c], b)) return !1;
            return !0
        }, isHex: function (a) {
            if ("string" != typeof a || !AR.VALIDATE.isDefined(a) || "#" != a.charAt(0)) return !1;
            var b = a.length;
            if (7 != b && 9 != b) return !1;
            a = a.toUpperCase();
            for (var c = 1; c < b; c++) if (AR.VALIDATE.HEX_CHARS.indexOf(a.charAt(c)) < 0) return !1;
            return !0
        }, isEnumerated: function (a, b) {
            if (!AR.VALIDATE.isDefined(a)) return !1;
            for (var c in b) if (a == b[c]) return !0;
            return !1
        }
    }, AR.EXCEPTION = {
        EXCEPTION_PREFIX: "ARchitect Error: ",
        create: function (a, b, c, d) {
            c || (c = "");
            var e = "";
            switch (b) {
                case AR.EXCEPTION.TYPE.UNDEFINED:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " is undefined" + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.INVALID_VALUE:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " is invalid" + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.RANGE:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " is not in the valid range " + c + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.ENUMERATION:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " is not one of the allowed values defined in the 'enumeration-object' " + c + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.FLOAT:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " is not a numeric value." + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.INT:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " is not a whole number." + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.BOOLEAN:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " is not a boolean value." + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.ARRAY_CONTENT:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " contains invalid values in the array." + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.OBJECT:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " of object type " + d + " is not of the expected object type " + c + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.IMMUTABLE:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " must not be altered." + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.HEX:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " is not a valid hex value." + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.UNKNOWN_PROPERTY:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + "Property " + a + " cannot be found." + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.STRING:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " is not a String value." + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.DOM_ELEMENT:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " is not a DOM element." + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.TYPE_OBJECT:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " is not an Object." + buildStack("<br />");
                    break;
                case AR.EXCEPTION.TYPE.ILLEGAL_STATE:
                    e = AR.EXCEPTION.EXCEPTION_PREFIX + a + " may only be changed during state " + c + ". Current state is: " + d + "." + buildStack("<br />")
            }
            return AR.logger.error(e), e
        },
        TYPE: {
            UNDEFINED: "___UNDEFINED___",
            INVALID_VALUE: "___INVALID___",
            RANGE: "___RANGE___",
            FLOAT: "___FLOAT___",
            INT: "___INT___",
            BOOLEAN: "___BOOLEAN___",
            ARRAY_CONTENT: "___ARRAY_CONTENT___",
            OBJECT: "___OBJECT___",
            IMMUTABLE: "___IMMUTABLE___",
            HEX: "___HEX___",
            UNKNOWN_PROPERTY: "___UNKNOWN_PROPERTY___",
            STRING: "___STRING___",
            ENUMERATION: "___ENUMERATION___",
            DOM_ELEMENT: "___DOM_ELEMENT___",
            TYPE_OBJECT: "___TYPE_OBJECT___",
            ILLEGAL_STATE: "___ILLEGAL_STATE___"
        }
    }, _PROPERTY_VALIDATOR = {
        TYPE: {
            FUNCTION: 1,
            BOOLEAN: 2,
            STRING: 3,
            POSITIVE: 4,
            UNIT_INTERVAL: 5,
            CLASS: 6,
            ARRAY: 7,
            ARRAY_OR_PROPERTY: 8,
            NUMERIC: 9,
            POSITIVE_INT: 10,
            NON_NEGATIVE_INT: 11,
            INT: 12,
            RGBA: 13,
            NON_NEGATIVE: 14,
            DOM_ELEMENT: 15,
            OBJECT: 16
        }, RULE: {MUST_BE_SET: 0, CAN_BE_EMPTY: 1}, validate: function (a, b, c, d, e) {
            var f = !0;
            switch (d) {
                case _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY:
                    if (null == b || void 0 == b) {
                        f = !1;
                        break
                    }
                    break;
                case _PROPERTY_VALIDATOR.RULE.MUST_BE_SET:
                    if (null == b || void 0 == b) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.UNDEFINED)
            }
            if (f && c) switch (c.type || (c = {type: c}), c.type) {
                case _PROPERTY_VALIDATOR.TYPE.FUNCTION:
                    if ("function" == typeof b) break;
                    throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.OBJECT, "function", typeof b);
                case _PROPERTY_VALIDATOR.TYPE.BOOLEAN:
                    if ("boolean" == typeof b) break;
                    throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.BOOLEAN);
                case _PROPERTY_VALIDATOR.TYPE.STRING:
                    if ("string" == typeof b) break;
                    throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.STRING);
                case _PROPERTY_VALIDATOR.TYPE.NUMERIC:
                    if ("number" != typeof b) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.FLOAT);
                    break;
                case _PROPERTY_VALIDATOR.TYPE.UNIT_INTERVAL:
                    if ((b = _PROPERTY_VALIDATOR.validate(a, b, _PROPERTY_VALIDATOR.TYPE.NUMERIC, d, e)) < 0 || b > 1) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.RANGE, "[0, 1]");
                    break;
                case _PROPERTY_VALIDATOR.TYPE.POSITIVE:
                    if ((b = _PROPERTY_VALIDATOR.validate(a, b, _PROPERTY_VALIDATOR.TYPE.NUMERIC, d, e)) <= 0) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.RANGE, "(0, infinity)");
                    break;
                case _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE:
                    if ((b = _PROPERTY_VALIDATOR.validate(a, b, _PROPERTY_VALIDATOR.TYPE.NUMERIC, d, e)) < 0) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.RANGE, "[0, infinity)");
                    break;
                case _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT:
                    if ((b = _PROPERTY_VALIDATOR.validate(a, b, _PROPERTY_VALIDATOR.TYPE.INT, d, e)) <= 0) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.RANGE, "(0, infinity)");
                    break;
                case _PROPERTY_VALIDATOR.TYPE.INT:
                    if ("number" != typeof b) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.FLOAT);
                    if (Math.round(b) != b) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.INT);
                    break;
                case _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE_INT:
                    if ((b = _PROPERTY_VALIDATOR.validate(a, b, _PROPERTY_VALIDATOR.TYPE.INT, d, e)) <= 0) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.RANGE, "(0, infinity)");
                    break;
                case _PROPERTY_VALIDATOR.TYPE.CLASS:
                    if (b instanceof c.ofType) break;
                    throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.OBJECT, c.ofType);
                case _PROPERTY_VALIDATOR.TYPE.ARRAY:
                    if (!(b instanceof Array)) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.ARRAY_CONTENT);
                    for (var g = 0; g < b.length; g++) if (!(b[g] instanceof c.ofType)) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.ARRAY_CONTENT);
                    break;
                case _PROPERTY_VALIDATOR.TYPE.ARRAY_OR_PROPERTY:
                    if (b instanceof c.ofType) {
                        b = new Array(b);
                        break
                    }
                    b = _PROPERTY_VALIDATOR.validate(a, b, {
                        type: _PROPERTY_VALIDATOR.TYPE.ARRAY,
                        ofType: c.ofType
                    }, d, e);
                    break;
                case _PROPERTY_VALIDATOR.TYPE.RGBA:
                    if ("string" != typeof b || "#" != b.charAt(0)) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.HEX);
                    var h = b.length;
                    if (7 != h && 9 != h) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.HEX);
                    b = b.toUpperCase();
                    for (var i = "0123456789ABCDEF", g = 1; g < h; g++) if (i.indexOf(b.charAt(g)) < 0) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.HEX);
                    return 7 == h && (b += "FF"), b;
                case _PROPERTY_VALIDATOR.TYPE.DOM_ELEMENT:
                    if (!(b && "nodeType" in b)) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.DOM_ELEMENT);
                    break;
                case _PROPERTY_VALIDATOR.TYPE.OBJECT:
                    if ("[object Object]" !== Object.prototype.toString.apply(b)) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.TYPE_OBJECT);
                    break;
                default:
                    throw"Invalid test"
            }
            return e ? e(a, b) : b
        }
    }, AR.om = {
        __currentObjectID__: 1, __objects__: [], registerObjectForID: function (a, b) {
            AR.om.__objects__[a] = b
        }, getObjectForID: function (a) {
            return AR.om.__objects__[a]
        }, getExistingObjectForID: function (a) {
            var b = AR.om.__objects__[a];
            if (b) return b;
            throw"Object with ID " + a + " does not exist - maybe it was already destroyed?"
        }, createObjectID: function () {
            return AR.om.__currentObjectID__++
        }, destroyAllObjects: function (a) {
            for (var b in AR.om.__objects__) {
                var c = AR.om.getObjectForID(b);
                null != c && void 0 != c && void 0 != c.__id && c.destroy(a)
            }
            AR.om.resetObjectManager()
        }, resetObjectManager: function () {
            AR.om.__currentObjectID__ = 1, AR.om.__objects__.splice(0, AR.om.__objects__.length - 1)
        }, __getIds__: function (a) {
            var b = new Array;
            if (!a) return b;
            for (var c = 0, d = 0; d < a.length; d++) null == a[d] || a[d].destroyed || (b[c] = a[d].__id, c++);
            return b
        }, __getObjects__: function (a) {
            var b = new Array;
            if (!a) return b;
            for (var c = 0, d = 0; d < a.length; d++) null != a[d] && (b[c] = AR.om.getObjectForID(a[d]), c++);
            return b
        }
    }, AR.bm = {
        batchQueue: new Array,
        originalSyncDistributor: null,
        originalAsyncDistributor: null,
        batchSyncDistributor: function (a) {
            AR.bm.batchQueue.push(a)
        },
        batchAsyncDistributor: function (a) {
            AR.bm.batchQueue.push(a)
        },
        setBatchCreationActive: function () {
            AR.bm.originalSyncDistributor = AR.i.callSync, AR.bm.originalAsyncDistributor = AR.i.callAsync, AR.i.callSync = AR.bm.batchSyncDistributor, AR.i.callAsync = AR.bm.batchAsyncDistributor
        },
        setBatchCreationDeactivated: function () {
            AR.bm.originalAsyncDistributor(AR.bm.batchQueue), AR.i.callSync = AR.bm.originalSyncDistributor, AR.i.callAsync = AR.bm.originalAsyncDistributor, AR.bm.batchQueue.splice(0, AR.bm.batchQueue.length)
        }
    }, AR.ScreenSnapper = PClass.create({
        init: function (a, b) {
            var c = a, d = !1, e = -1, f = !1, g = null, h = null, i = null, j = null, k = function (a) {
                AR.js.click.executePlatformClick(a)
            };
            if (b && "object" != typeof b) throw AR.EXCEPTION.create("snapToScreen", AR.EXCEPTION.TYPE.OBJECT, "snapToScreen");
            b && (null != b.enabled && (d = _PROPERTY_VALIDATOR.validate("snapToScreen.enabled", b.enabled, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), null != b.enableDelayed && (e = _PROPERTY_VALIDATOR.validate("snapToScreen.enableDelayed", b.enableDelayed, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), null != b.enabledOnExitFieldOfVision && (f = _PROPERTY_VALIDATOR.validate("snapToScreen.enabledOnExitFieldOfVision", b.enabledOnExitFieldOfVision, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), null != b.snapContainer && (g = _PROPERTY_VALIDATOR.validate("snapToScreen.snapContainer", b.snapContainer, _PROPERTY_VALIDATOR.TYPE.DOM_ELEMENT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), g.addEventListener("touchend", k, !1)), null != b.onSnappedToScreen && (h = _PROPERTY_VALIDATOR.validate("snapToScreen.onSnapToScreen", b.onSnappedToScreen, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onDelayedSnapInterruption && (i = _PROPERTY_VALIDATOR.validate("snapToScreen.onDelayedSnapInterruption", b.onDelayedSnapInterruption, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)));
            var l = function (a) {
                var b = {id: "", right: 0, top: 0, left: 0, bottom: 0};
                if (a) {
                    var c = a.getBoundingClientRect(),
                        d = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                        e = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                    b.id = a.id, b.right = c.right / d, b.top = c.top / e, b.left = c.left / d, b.bottom = c.bottom / e
                }
                return b
            }, m = function () {
                var a;
                if (null === j) a = l(g), j = a, null !== a && n(a); else {
                    var b = setInterval(function () {
                        a = l(g), JSON.stringify(j) !== JSON.stringify(a) && (j = a, n(a))
                    }, 10);
                    setTimeout(function () {
                        clearInterval(b)
                    }, 250)
                }
            }, n = function (a) {
                AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.arObjectInterface.setSnapToScreenBoundingBox",
                    snapContainerId: a.id,
                    snapPositionRight: a.right,
                    snapPositionTop: a.top,
                    snapPositionLeft: a.left,
                    snapPositionBottom: a.bottom
                })
            };
            this.__defineSetter__("enabled", function (a) {
                d = _PROPERTY_VALIDATOR.validate("snapToScreen.enabled", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.arObjectInterface.setSnapToScreenEnabled",
                    snapToScreenEnabled: d
                })
            }), this.__defineGetter__("enabled", function () {
                return d
            }), this.__defineSetter__("enableDelayed", function (a) {
                e = _PROPERTY_VALIDATOR.validate("enableDelayed", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.arObjectInterface.setScreenSnapDelay",
                    screenSnapDelay: e
                })
            }), this.__defineGetter__("enableDelayed", function () {
                return e
            }), this.__defineSetter__("enabledOnExitFieldOfVision", function (a) {
                f = _PROPERTY_VALIDATOR.validate("snapToScreen.enabledOnExitFieldOfVision", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.imageTrackableInterface.enabledOnExitFieldOfVision",
                    enabledOnExitFieldOfVision: f
                })
            }), this.__defineGetter__("enabledOnExitFieldOfVision", function () {
                return f
            }), this.__defineSetter__("snapContainer", function (a) {
                var b = _PROPERTY_VALIDATOR.validate("snapToScreen.snapContainer", a, _PROPERTY_VALIDATOR.TYPE.DOM_ELEMENT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
                g && (g.removeEventListener("touchend", k), g.removeEventListener("resize", m, !1)), g = b, g.addEventListener("touchend", k, !1), g.addEventListener("resize", m, !1), m()
            }), this.__defineGetter__("snapContainer", function () {
                return g
            }), this.__defineSetter__("onSnappedToScreen", function (a) {
                h = _PROPERTY_VALIDATOR.validate("onSnappedToScreen", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.arObjectInterface.setOnSnappedToScreenTriggerActive",
                    onSnappedToScreenTriggerActive: null != h
                })
            }), this.__defineGetter__("onSnappedToScreen", function () {
                return h
            }), this.__defineSetter__("onDelayedSnapInterruption", function (a) {
                i = _PROPERTY_VALIDATOR.validate("onDelayedSnapInterruption", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.arObjectInterface.setOnDelayedSnapInterruptionTriggerActive",
                    onDelayedSnapInterruptionTriggerActive: null != i
                })
            }), this.__defineGetter__("onDelayedSnapInterruption", function () {
                return i
            }), this.__defineGetter__("resolvedBoundingBox", function () {
                return l(g)
            }), window.addEventListener("orientationchange", m, !1), window.addEventListener("resize", m, !1)
        }
    }), AR.DistanceToTargetController = PClass.create({
        init: function (a, b) {
            var c = a, d = 0, e = null;
            if (b && "object" != typeof b) throw AR.EXCEPTION.create("distanceToTarget", AR.EXCEPTION.TYPE.OBJECT, "distanceToTarget");
            b && (b.get, null != b.changedThreshold && (d = _PROPERTY_VALIDATOR.validate("distanceToTarget.changedThreshold", b.changedThreshold, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), null != b.onDistanceChanged && (e = _PROPERTY_VALIDATOR.validate("distanceToTarget.onDistanceChanged", b.onDistanceChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY))), this.__defineSetter__("changedThreshold", function (a) {
                d = _PROPERTY_VALIDATOR.validate("distanceToTarget.changedThreshold", a, _PROPERTY_VALIDATOR.TYPE.POSITIVE, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.imageTrackableInterface.setDistanceToTargetChangedThreshold",
                    changedThreshold: d
                })
            }), this.__defineGetter__("changedThreshold", function () {
                return d
            }), this.__defineSetter__("onDistanceChanged", function (a) {
                e = _PROPERTY_VALIDATOR.validate("distanceToTarget.onDistanceChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.imageTrackableInterface.setDistanceToTargetChangedTriggerActive",
                    onDistanceChangedTriggerActive: null != e
                })
            }), this.__defineGetter__("onDistanceChanged", function () {
                return e
            })
        }
    }), AR.Error = function (a, b, c) {
        this._id = a, this._domain = b, this._message = c, this.__defineGetter__("id", function () {
            return this._id
        }), this.__defineSetter__("id", function () {
            throw AR.EXCEPTION.create("id", AR.EXCEPTION.TYPE.IMMUTABLE)
        }), this.__defineGetter__("domain", function () {
            return this._domain
        }), this.__defineSetter__("domain", function () {
            throw AR.EXCEPTION.create("domain", AR.EXCEPTION.TYPE.IMMUTABLE)
        }), this.__defineGetter__("message", function () {
            return this._message
        }), this.__defineSetter__("message", function () {
            throw AR.EXCEPTION.create("message", AR.EXCEPTION.TYPE.IMMUTABLE)
        }), this.toString = function () {
            return "Error (Code '" + this.id + "', Domain '" + this.domain + "'): " + this.message
        }
    }, AR.ARchitectObject = PClass.create({
        init: function () {
            var a = {};
            this.__defineSetter__("destroyed", function (a) {
                throw AR.EXCEPTION.create("destroyed", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("destroyed", function () {
                return !1
            }), this.__isDirtyInternally = function (c) {
                return c = b(c), void 0 != a[c]
            }, this.__alertDirty = function (c) {
                c = b(c), a[c] ? a[c]++ : a[c] = 1
            }, this.__removeDirt = function (c) {
                c = b(c), a[c] && 0 == --a[c] && delete a[c]
            };
            var b = function (a) {
                return function (b) {
                    for (var c = [{
                        type: AR.Drawable,
                        deprecations: {roll: "rotate.roll", tilt: "rotate.tilt", heading: "rotate.heading"}
                    }, {
                        type: AR.Drawable2D,
                        deprecations: {scaling: "scale"}
                    }], d = 0; d < c.length; d++) if (a instanceof c[d].type) for (deprecatedProperty in c[d].deprecations) if (b == deprecatedProperty) return c[d].deprecations[b];
                    return b
                }
            }(this)
        }, __isDirty: function (a) {
            return this.__isDirtyInternally(a)
        }, destroy: function (a) {
            a || AR.i.callAsync({
                objectId: this.__id,
                is: "AR.i.contextInterface.destroy"
            }), AR.ADE && AR.ADE.instance && AR.ADE.instance.alertDeletion && AR.ADE.instance.alertDeletion(this.__id), delete AR.om.__objects__[this.__id];
            for (var b in this) if (delete this[b], void 0 != this[b]) try {
                this[b] = void 0
            } catch (a) {
                contextInterface.info && AR.i.callAsync({
                    is: "AR.i.contextInterface.info",
                    message: "Exception caught: " + a
                })
            }
            this.__defineSetter__("destroyed", function (a) {
                throw AR.EXCEPTION.create("destroyed", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("destroyed", function () {
                return !0
            })
        }
    }), AR.ARObject = AR.ARchitectObject.extend({
        init: function (a) {
            this._super();
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o = null, p = !0, q = 0;
            return a ? (void 0 != a.enabled && (p = _PROPERTY_VALIDATOR.validate("enabled", a.enabled, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), a.onClick && (b = _PROPERTY_VALIDATOR.validate("onClick", a.onClick, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onDragBegan && (c = _PROPERTY_VALIDATOR.validate("onDragBegan", a.onDragBegan, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onDragChanged && (d = _PROPERTY_VALIDATOR.validate("onDragChanged", a.onDragChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onDragEnded && (e = _PROPERTY_VALIDATOR.validate("onDragEnded", a.onDragEnded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onPanBegan && (f = _PROPERTY_VALIDATOR.validate("onPanBegan", a.onPanBegan, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onPanChanged && (g = _PROPERTY_VALIDATOR.validate("onPanChanged", a.onPanChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onPanEnded && (h = _PROPERTY_VALIDATOR.validate("onPanEnded", a.onPanEnded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onRotationBegan && (i = _PROPERTY_VALIDATOR.validate("onRotationBegan", a.onRotationBegan, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onRotationChanged && (j = _PROPERTY_VALIDATOR.validate("onRotationChanged", a.onRotationChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onRotationEnded && (k = _PROPERTY_VALIDATOR.validate("onRotationEnded", a.onRotationEnded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onScaleBegan && (l = _PROPERTY_VALIDATOR.validate("onScaleBegan", a.onScaleBegan, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onScaleChanged && (m = _PROPERTY_VALIDATOR.validate("onScaleChanged", a.onScaleChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onScaleEnded && (n = _PROPERTY_VALIDATOR.validate("onScaleEnded", a.onScaleEnded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), o = new AR.ARObjectDrawables(this, a.drawables), a.renderingOrder && (q = _PROPERTY_VALIDATOR.validate("renderingOrder", a.renderingOrder, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET))) : o = new AR.ARObjectDrawables(this, null), this.__defineSetter__("drawables", function (a) {
                throw AR.EXCEPTION.create("drawables", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("drawables", function () {
                return o
            }), this.__defineSetter__("enabled", function (a) {
                a = _PROPERTY_VALIDATOR.validate("enabled", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    objectId: this.__id,
                    enabled: a,
                    is: "AR.i.arObjectInterface.setEnabled"
                }), p = a
            }), this.__defineGetter__("enabled", function () {
                return p
            }), this.__defineSetter__("renderingOrder", function (a) {
                a = _PROPERTY_VALIDATOR.validate("renderingOrder", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    objectId: this.__id,
                    renderingOrder: a,
                    is: "AR.i.arObjectInterface.setRenderingOrder"
                }), q = a
            }), this.__defineGetter__("renderingOrder", function () {
                return q
            }), this.__defineSetter__("onClick", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onClick", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), b = a, AR.i.callAsync({
                    objectId: this.__id,
                    onClickTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnClickTriggerActive"
                })
            }), this.__defineGetter__("onClick", function () {
                return b
            }), this.__defineSetter__("onDragBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDragBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c = a, AR.i.callAsync({
                    objectId: this.__id,
                    onDragBeganTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnDragBeganTriggerActive"
                })
            }), this.__defineGetter__("onDragBegan", function () {
                return c
            }), this.__defineSetter__("onDragChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDragChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), d = a, AR.i.callAsync({
                    objectId: this.__id,
                    onDragChangedTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnDragChangedTriggerActive"
                })
            }), this.__defineGetter__("onDragChanged", function () {
                return d
            }), this.__defineSetter__("onDragEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDragEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), e = a, AR.i.callAsync({
                    objectId: this.__id,
                    onDragEndedTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnDragEndedTriggerActive"
                })
            }), this.__defineGetter__("onDragEnded", function () {
                return e
            }), this.__defineSetter__("onPanBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onPanBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), f = a, AR.i.callAsync({
                    objectId: this.__id,
                    onPanBeganTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnPanBeganTriggerActive"
                })
            }), this.__defineGetter__("onPanBegan", function () {
                return f
            }), this.__defineSetter__("onPanChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onPanChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), g = a, AR.i.callAsync({
                    objectId: this.__id,
                    onPanChangedTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnPanChangedTriggerActive"
                })
            }), this.__defineGetter__("onPanChanged", function () {
                return g
            }), this.__defineSetter__("onPanEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onPanEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), h = a, AR.i.callAsync({
                    objectId: this.__id,
                    onPanEndedTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnPanEndedTriggerActive"
                })
            }), this.__defineGetter__("onPanEnded", function () {
                return h
            }), this.__defineSetter__("onRotationBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onRotationBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), i = a, AR.i.callAsync({
                    objectId: this.__id,
                    onRotationBeganTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnRotationBeganTriggerActive"
                })
            }), this.__defineGetter__("onRotationBegan", function () {
                return i
            }), this.__defineSetter__("onRotationChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onRotationChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), j = a, AR.i.callAsync({
                    objectId: this.__id,
                    onRotationChangedTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnRotationChangedTriggerActive"
                })
            }), this.__defineGetter__("onRotationChanged", function () {
                return j
            }), this.__defineSetter__("onRotationEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onRotationEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), k = a, AR.i.callAsync({
                    objectId: this.__id,
                    onRotationEndedTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnRotationEndedTriggerActive"
                })
            }), this.__defineGetter__("onRotationEnded", function () {
                return k
            }), this.__defineSetter__("onScaleBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onScaleBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), l = a, AR.i.callAsync({
                    objectId: this.__id,
                    onScaleBeganTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnScaleBeganTriggerActive"
                })
            }), this.__defineGetter__("onScaleBegan", function () {
                return l
            }), this.__defineSetter__("onScaleChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onScaleChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), m = a, AR.i.callAsync({
                    objectId: this.__id,
                    onScaleChangedTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnScaleChangedTriggerActive"
                })
            }), this.__defineGetter__("onScaleChanged", function () {
                return m
            }), this.__defineSetter__("onScaleEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onScaleEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), n = a, AR.i.callAsync({
                    objectId: this.__id,
                    onScaleEndedTriggerActive: null != a,
                    is: "AR.i.arObjectInterface.setOnScaleEndedTriggerActive"
                })
            }), this.__defineGetter__("onScaleEnded", function () {
                return n
            }), {
                arObject: this,
                drawables: o,
                onClickTriggerActive: null != b,
                onDragBeganTriggerActive: null != c,
                onDragChangedTriggerActive: null != d,
                onDragEndedTriggerActive: null != e,
                onPanBeganTriggerActive: null != f,
                onPanChangedTriggerActive: null != g,
                onPanEndedTriggerActive: null != h,
                onRotationBeganTriggerActive: null != i,
                onRotationChangedTriggerActive: null != j,
                onRotationEndedTriggerActive: null != k,
                onScaleBeganTriggerActive: null != l,
                onScaleChangedTriggerActive: null != m,
                onScaleEndedTriggerActive: null != n,
                enabled: p,
                renderingOrder: q
            }
        }, isVisible: function () {
            return AR.i.callSync({objectId: this.__id, is: "AR.i.arObjectInterface.isVisible"})
        }, __addDrawable: function (a, b, c, d) {
            if (b = _PROPERTY_VALIDATOR.validate("drawable", b, {
                type: _PROPERTY_VALIDATOR.TYPE.ARRAY_OR_PROPERTY,
                ofType: d
            }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c) {
                if (!AR.VALIDATE.isWholeNumber(c)) throw AR.EXCEPTION.create("position", AR.EXCEPTION.TYPE.INT);
                if (!AR.VALIDATE.isNonNegative(c)) throw AR.EXCEPTION.create("position", AR.EXCEPTION.TYPE.RANGE, "[0, Infinity)")
            } else c = -1;
            if (c < 0) {
                for (var e = 0; e < b.length; e++) a.push(b[e]);
                return a
            }
            for (var f = [], g = 0, e = 0; e < c; e++) f[g] = a[e], g++;
            for (var e = 0; e < b.length; e++) f[g] = b[e], g++;
            for (var e = c; e < a.length; e++) f[g] = a[e], g++;
            return f
        }, __removeDrawable: function (a, b, c) {
            if (AR.VALIDATE.isWholeNumber(b)) {
                if (!AR.VALIDATE.isNonNegative(b)) throw AR.EXCEPTION.create("position", AR.EXCEPTION.TYPE.RANGE, "[0, Infinity)");
                return a.splice(b, 1), a
            }
            b = _PROPERTY_VALIDATOR.validate("drawable", b, {
                type: _PROPERTY_VALIDATOR.TYPE.ARRAY_OR_PROPERTY,
                ofType: c
            }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY);
            for (var d = 0; d < b.length; d++) for (var e = 0; e < a.length; e++) b[d] == a[e] && a.splice(e, 1);
            return a
        }
    }), AR.ARObjectDrawables = PClass.create({
        init: function (a, b) {
            var c = [], d = [], e = [], f = [];
            null != b && (b.cam && (c = _PROPERTY_VALIDATOR.validate("drawables.cam", b.cam, {
                type: _PROPERTY_VALIDATOR.TYPE.ARRAY_OR_PROPERTY,
                ofType: AR.Drawable
            }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.radar && (d = _PROPERTY_VALIDATOR.validate("drawables.radar", b.radar, {
                type: _PROPERTY_VALIDATOR.TYPE.ARRAY_OR_PROPERTY,
                ofType: AR.Drawable2D
            }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.indicator && (e = _PROPERTY_VALIDATOR.validate("drawables.indicator", b.indicator, {
                type: _PROPERTY_VALIDATOR.TYPE.ARRAY_OR_PROPERTY,
                ofType: AR.Drawable2D
            }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.initialization && (f = _PROPERTY_VALIDATOR.validate("drawables.initialization", b.initialization, {
                type: _PROPERTY_VALIDATOR.TYPE.ARRAY_OR_PROPERTY,
                ofType: AR.Drawable
            }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY))), this.__defineSetter__("cam", function (b) {
                b = _PROPERTY_VALIDATOR.validate("drawables.cam", b, {
                    type: _PROPERTY_VALIDATOR.TYPE.ARRAY_OR_PROPERTY,
                    ofType: AR.Drawable
                }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: a.__id,
                    camDrawableIds: AR.__toJSONString__(AR.om.__getIds__(b)),
                    is: "AR.i.arObjectInterface.setCamDrawables"
                }), c = b
            }), this.__defineGetter__("cam", function () {
                return c
            }), this.__defineSetter__("radar", function (b) {
                a instanceof AR.GeoObject && (b = _PROPERTY_VALIDATOR.validate("drawables.radar", b, {
                    type: _PROPERTY_VALIDATOR.TYPE.ARRAY_OR_PROPERTY,
                    ofType: AR.Drawable2D
                }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: a.__id,
                    radarDrawableIds: AR.__toJSONString__(AR.om.__getIds__(b)),
                    is: "AR.i.geoObjectInterface.setRadarDrawables"
                }), d = b)
            }), this.__defineGetter__("radar", function () {
                return d
            }), this.__defineSetter__("indicator", function (b) {
                a instanceof AR.GeoObject && (b = _PROPERTY_VALIDATOR.validate("drawables.indicator", b, {
                    type: _PROPERTY_VALIDATOR.TYPE.ARRAY_OR_PROPERTY,
                    ofType: AR.Drawable2D
                }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: a.__id,
                    indicatorDrawableIds: AR.__toJSONString__(AR.om.__getIds__(b)),
                    is: "AR.i.geoObjectInterface.setIndicatorDrawables"
                }), e = b)
            }), this.__defineGetter__("indicator", function () {
                return e
            }), this.__defineSetter__("initialization", function (b) {
                a instanceof AR.InstantTrackable && (b = _PROPERTY_VALIDATOR.validate("drawables.initialization", b, {
                    type: _PROPERTY_VALIDATOR.TYPE.ARRAY_OR_PROPERTY,
                    ofType: AR.Drawable
                }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: a.__id,
                    initializationDrawableIds: AR.__toJSONString__(AR.om.__getIds__(b)),
                    is: "AR.i.instantTrackableInterface.setInitializationDrawables"
                }), f = b)
            }), this.__defineGetter__("initialization", function () {
                return f
            }), this.addCamDrawable = function (b, d) {
                c = a.__addDrawable(c, b, d, AR.Drawable), AR.i.callAsync({
                    objectId: a.__id,
                    camDrawableIds: AR.__toJSONString__(AR.om.__getIds__(c)),
                    is: "AR.i.arObjectInterface.setCamDrawables"
                })
            }, this.removeCamDrawable = function (b) {
                c = a.__removeDrawable(c, b, AR.Drawable), AR.i.callAsync({
                    objectId: a.__id,
                    camDrawableIds: AR.__toJSONString__(AR.om.__getIds__(c)),
                    is: "AR.i.arObjectInterface.setCamDrawables"
                })
            }, this.addRadarDrawable = function (b, c) {
                a instanceof AR.GeoObject && (d = a.__addDrawable(d, b, c, AR.Drawable2D), AR.i.callAsync({
                    objectId: a.__id,
                    radarDrawableIds: AR.__toJSONString__(AR.om.__getIds__(d)),
                    is: "AR.i.geoObjectInterface.setRadarDrawables"
                }))
            }, this.removeRadarDrawable = function (b) {
                a instanceof AR.GeoObject && (d = a.__removeDrawable(d, b, AR.Drawable2D), AR.i.callAsync({
                    objectId: a.__id,
                    radarDrawableIds: AR.__toJSONString__(AR.om.__getIds__(d)),
                    is: "AR.i.geoObjectInterface.setRadarDrawables"
                }))
            }, this.addIndicatorDrawable = function (b, c) {
                a instanceof AR.GeoObject && (e = a.__addDrawable(e, b, c, AR.Drawable2D), AR.i.callAsync({
                    objectId: a.__id,
                    indicatorDrawableIds: AR.__toJSONString__(AR.om.__getIds__(e)),
                    is: "AR.i.geoObjectInterface.setIndicatorDrawables"
                }))
            }, this.removeIndicatorDrawable = function (b) {
                a instanceof AR.GeoObject && (e = a.__removeDrawable(e, b, AR.Drawable2D), AR.i.callAsync({
                    objectId: a.__id,
                    indicatorDrawableIds: AR.__toJSONString__(AR.om.__getIds__(e)),
                    is: "AR.i.geoObjectInterface.setIndicatorDrawables"
                }))
            }, this.addInitializationDrawable = function (b, c) {
                a instanceof AR.InstantTrackable && (f = a.__addDrawable(f, b, c, AR.Drawable), AR.i.callAsync({
                    objectId: a.__id,
                    initializationDrawableIds: AR.__toJSONString__(AR.om.__getIds__(f)),
                    is: "AR.i.intantTrackableInterface.setInitializationDrawables"
                }))
            }, this.removeInitializationDrawable = function (b) {
                a instanceof AR.InstantTrackable && (f = a.__removeDrawable(f, b, AR.Drawable), AR.i.callAsync({
                    objectId: a.__id,
                    initializationDrawableIds: AR.__toJSONString__(AR.om.__getIds__(f)),
                    is: "AR.i.intantTrackableInterface.setInitializationDrawables"
                }))
            }
        }
    }), AR.Drawable = AR.ARchitectObject.extend({
        init: function (a) {
            this._super();
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r = !0, s = !0, t = !0;
            return a && (r = _PROPERTY_VALIDATOR.validate("enabled", a.enabled, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), null == r && (r = !0), s = _PROPERTY_VALIDATOR.validate("mirrored", a.mirrored, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), null == s && (s = !0), t = _PROPERTY_VALIDATOR.validate("rotatesToCamera", a.rotatesToCamera, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), null == t && (t = !0), a.triggers && (b = _PROPERTY_VALIDATOR.validate("onClick", a.triggers.onClick, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onClick && (b = _PROPERTY_VALIDATOR.validate("onClick", a.onClick, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onDragBegan && (c = _PROPERTY_VALIDATOR.validate("onDragBegan", a.onDragBegan, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onDragChanged && (d = _PROPERTY_VALIDATOR.validate("onDragChanged", a.onDragChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onDragEnded && (e = _PROPERTY_VALIDATOR.validate("onDragEnded", a.onDragEnded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onPanBegan && (f = _PROPERTY_VALIDATOR.validate("onPanBegan", a.onPanBegan, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onPanChanged && (g = _PROPERTY_VALIDATOR.validate("onPanChanged", a.onPanChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onPanEnded && (h = _PROPERTY_VALIDATOR.validate("onPanEnded", a.onPanEnded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onRotationBegan && (i = _PROPERTY_VALIDATOR.validate("onRotationBegan", a.onRotationBegan, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onRotationChanged && (j = _PROPERTY_VALIDATOR.validate("onRotationChanged", a.onRotationChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onRotationEnded && (k = _PROPERTY_VALIDATOR.validate("onRotationEnded", a.onRotationEnded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onScaleBegan && (l = _PROPERTY_VALIDATOR.validate("onScaleBegan", a.onScaleBegan, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onScaleChanged && (m = _PROPERTY_VALIDATOR.validate("onScaleChanged", a.onScaleChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onScaleEnded && (n = _PROPERTY_VALIDATOR.validate("onScaleEnded", a.onScaleEnded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY))), p = new AR.DrawableTranslate(this, a && a.translate ? a.translate : null), q = new AR.DrawableScale(this, a && a.scale ? a.scale : null), o = new AR.DrawableRotate(this, a && a.rotate ? a.rotate : null), this.__defineSetter__("enabled", function (a) {
                a = _PROPERTY_VALIDATOR.validate("enabled", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), null == a && (a = !0), AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.drawableInterface.setEnabled",
                    enabled: a
                }), r = a
            }), this.__defineGetter__("enabled", function () {
                return r
            }), this.__defineSetter__("mirrored", function (a) {
                a = _PROPERTY_VALIDATOR.validate("mirrored", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), null == a && (a = !0), AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.drawableInterface.setMirrored",
                    mirrored: a
                }), s = a
            }), this.__defineGetter__("mirrored", function () {
                return s
            }), this.__defineSetter__("rotatesToCamera", function (a) {
                a = _PROPERTY_VALIDATOR.validate("rotatesToCamera", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), null == a && (a = !0), AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.drawableInterface.setRotatesToCamera",
                    rotatesToCamera: a
                }), t = a
            }), this.__defineGetter__("rotatesToCamera", function () {
                return t
            }), this.__defineSetter__("rotate", function (a) {
                var b = _PROPERTY_VALIDATOR.validate("rotate", a, _PROPERTY_VALIDATOR.TYPE.OBJECT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                    c = {is: "AR.i.drawableInterface.setRotation", objectId: this.__id};
                b.hasOwnProperty("x") && (c.rotationX = b.x, o.setX(b.x, !1)), b.hasOwnProperty("y") && (c.rotationY = b.y, o.setY(b.y, !1)), b.hasOwnProperty("z") && (c.rotationZ = b.z, o.setZ(b.z, !1)), b.global && (b.global.hasOwnProperty("x") && (c.globalRotationX = b.global.x, o.global.setX(b.global.x, !1)), b.global.hasOwnProperty("y") && (c.globalRotationY = b.global.y, o.global.setY(b.global.y, !1)), b.global.hasOwnProperty("z") && (c.globalRotationZ = b.global.z, o.global.setZ(b.global.z, !1))), AR.i.callAsync(c)
            }), this.__defineGetter__("rotate", function () {
                return o
            }), this.__defineSetter__("translate", function (a) {
                var b = _PROPERTY_VALIDATOR.validate("translate", a, _PROPERTY_VALIDATOR.TYPE.OBJECT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                    c = {is: "AR.i.drawableInterface.setTranslate", objectId: this.__id};
                b.hasOwnProperty("x") && (c.translateX = b.x, p.setX(b.x, !1)), b.hasOwnProperty("y") && (c.translateY = b.y, p.setY(b.y, !1)), b.hasOwnProperty("z") && (c.translateZ = b.z, p.setZ(b.z, !1)), b.global && (b.global.hasOwnProperty("x") && (c.globalTranslateX = b.global.x, p.global.setX(b.global.x, !1)), b.global.hasOwnProperty("y") && (c.globalTranslateY = b.global.y, p.global.setY(b.global.y, !1)), b.global.hasOwnProperty("z") && (c.globalTranslateZ = b.global.z, p.global.setZ(b.global.z, !1))), AR.i.callAsync(c)
            }), this.__defineGetter__("translate", function () {
                return p
            }), this.__defineSetter__("scale", function (a) {
                var b = a;
                "number" == typeof a && (b = {
                    x: b,
                    y: b,
                    z: b
                }), b = _PROPERTY_VALIDATOR.validate("translate", b, _PROPERTY_VALIDATOR.TYPE.OBJECT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
                var c = {is: "AR.i.drawableInterface.setScale", objectId: this.__id};
                b.hasOwnProperty("x") && (c.scaleX = b.x, q.setX(b.x, !1)), b.hasOwnProperty("y") && (c.scaleY = b.y, q.setY(b.y, !1)), b.hasOwnProperty("z") && (c.scaleZ = b.z, q.setZ(b.z, !1)), AR.i.callAsync(c)
            }), this.__defineGetter__("scale", function () {
                return q
            }), this.__defineSetter__("onClick", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onClick", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), b = a, AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.drawableInterface.setOnClickTriggerActive",
                    onClickTriggerActive: null != a
                })
            }), this.__defineGetter__("onClick", function () {
                return b
            }), this.__defineSetter__("__onClick__", function (a) {
            }), this.__defineGetter__("__onClick__", function () {
                var a = function () {
                    return null
                };
                return b && (a = this._triggers ? function (a) {
                    return b.call(this._triggers)
                } : function (a, c) {
                    return b.call(this, a, c ? c[0] : null)
                }), a
            }), this.__defineSetter__("onDragBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDragBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c = a, AR.i.callAsync({
                    objectId: this.__id,
                    onDragBeganTriggerActive: null != a,
                    is: "AR.i.drawableInterface.setOnDragBeganTriggerActive"
                })
            }), this.__defineGetter__("onDragBegan", function () {
                return c
            }), this.__defineSetter__("onDragChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDragChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), d = a, AR.i.callAsync({
                    objectId: this.__id,
                    onDragChangedTriggerActive: null != a,
                    is: "AR.i.drawableInterface.setOnDragChangedTriggerActive"
                })
            }), this.__defineGetter__("onDragChanged", function () {
                return d
            }), this.__defineSetter__("onDragEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDragEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), e = a, AR.i.callAsync({
                    objectId: this.__id,
                    onDragEndedTriggerActive: null != a,
                    is: "AR.i.drawableInterface.setOnDragEndedTriggerActive"
                })
            }), this.__defineGetter__("onDragEnded", function () {
                return e
            }), this.__defineSetter__("onPanBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onPanBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), f = a, AR.i.callAsync({
                    objectId: this.__id,
                    onPanBeganTriggerActive: null != a,
                    is: "AR.i.drawableInterface.setOnPanBeganTriggerActive"
                })
            }), this.__defineGetter__("onPanBegan", function () {
                return f
            }), this.__defineSetter__("onPanChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onPanChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), g = a, AR.i.callAsync({
                    objectId: this.__id,
                    onPanChangedTriggerActive: null != a,
                    is: "AR.i.drawableInterface.setOnPanChangedTriggerActive"
                })
            }), this.__defineGetter__("onPanChanged", function () {
                return g
            }), this.__defineSetter__("onPanEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onPanEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), h = a, AR.i.callAsync({
                    objectId: this.__id,
                    onPanEndedTriggerActive: null != a,
                    is: "AR.i.drawableInterface.setOnPanEndedTriggerActive"
                })
            }), this.__defineGetter__("onPanEnded", function () {
                return h
            }), this.__defineSetter__("onRotationBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onRotationBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), i = a, AR.i.callAsync({
                    objectId: this.__id,
                    onRotationBeganTriggerActive: null != a,
                    is: "AR.i.drawableInterface.setOnRotationBeganTriggerActive"
                })
            }), this.__defineGetter__("onRotationBegan", function () {
                return i
            }), this.__defineSetter__("onRotationChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onRotationChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), j = a, AR.i.callAsync({
                    objectId: this.__id,
                    onRotationChangedTriggerActive: null != a,
                    is: "AR.i.drawableInterface.setOnRotationChangedTriggerActive"
                })
            }), this.__defineGetter__("onRotationChanged", function () {
                return j
            }), this.__defineSetter__("onRotationEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onRotationEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), k = a, AR.i.callAsync({
                    objectId: this.__id,
                    onRotationEndedTriggerActive: null != a,
                    is: "AR.i.drawableInterface.setOnRotationEndedTriggerActive"
                })
            }), this.__defineGetter__("onRotationEnded", function () {
                return k
            }), this.__defineSetter__("onScaleBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onScaleBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), l = a, AR.i.callAsync({
                    objectId: this.__id,
                    onScaleBeganTriggerActive: null != a,
                    is: "AR.i.drawableInterface.setOnScaleBeganTriggerActive"
                })
            }), this.__defineGetter__("onScaleBegan", function () {
                return l
            }), this.__defineSetter__("onScaleChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onScaleChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), m = a, AR.i.callAsync({
                    objectId: this.__id,
                    onScaleChangedTriggerActive: null != a,
                    is: "AR.i.drawableInterface.setOnScaleChangedTriggerActive"
                })
            }), this.__defineGetter__("onScaleChanged", function () {
                return m
            }), this.__defineSetter__("onScaleEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onScaleEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), n = a, AR.i.callAsync({
                    objectId: this.__id,
                    onScaleEndedTriggerActive: null != a,
                    is: "AR.i.drawableInterface.setOnScaleEndedTriggerActive"
                })
            }), this.__defineGetter__("onScaleEnded", function () {
                return n
            }), {
                enabled: r,
                mirrored: s,
                rotatesToCamera: t,
                onClickActive: null != b,
                onDragBeganActive: null != c,
                onDragChangedActive: null != d,
                onDragEndedActive: null != e,
                onPanBeganActive: null != f,
                onPanChangedActive: null != g,
                onPanEndedActive: null != h,
                onRotationBeganActive: null != i,
                onRotationChangedActive: null != j,
                onRotationEndedActive: null != k,
                onScaleBeganActive: null != l,
                onScaleChangedActive: null != m,
                onScaleEndedActive: null != n,
                rotate: o,
                translate: p,
                scale: q
            }
        }
    }), AR.DrawableRotate = PClass.create({
        init: function (a, b) {
            var c, d = a, e = 0, f = 0, g = 0;
            if (b && "object" != typeof b) throw AR.EXCEPTION.create("rotate", AR.EXCEPTION.TYPE.OBJECT, "rotate");
            b && (b.x && (e = _PROPERTY_VALIDATOR.validate("rotate.x", b.x, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), b.y && (f = _PROPERTY_VALIDATOR.validate("rotate.y", b.y, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), b.z && (g = _PROPERTY_VALIDATOR.validate("rotate.z", b.z, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), b.tilt && (b.global ? b.global.x = _PROPERTY_VALIDATOR.validate("rotate.tilt", b.tilt, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET) : b.global = {x: _PROPERTY_VALIDATOR.validate("rotate.tilt", b.tilt, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)}), b.heading && (b.global ? b.global.y = _PROPERTY_VALIDATOR.validate("rotate.heading", b.heading, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET) : b.global = {y: _PROPERTY_VALIDATOR.validate("rotate.heading", b.heading, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)}), b.roll && (b.global ? b.global.z = _PROPERTY_VALIDATOR.validate("rotate.roll", b.roll, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET) : b.global = {z: _PROPERTY_VALIDATOR.validate("rotate.roll", b.roll, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)})), c = new AR.DrawableGlobalRotation(d, b && b.global ? b.global : null), this.setX = function (a, b) {
                a = _PROPERTY_VALIDATOR.validate("rotate.x", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b && AR.i.callAsync({
                    objectId: d.__id,
                    is: "AR.i.drawableInterface.setRotationX",
                    rotationX: a
                }), e = a
            }, this.setY = function (a, b) {
                a = _PROPERTY_VALIDATOR.validate("rotate.y", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b && AR.i.callAsync({
                    objectId: d.__id,
                    is: "AR.i.drawableInterface.setRotationY",
                    rotationY: a
                }), f = a
            }, this.setZ = function (a, b) {
                a = _PROPERTY_VALIDATOR.validate("rotate.z", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b && AR.i.callAsync({
                    objectId: d.__id,
                    is: "AR.i.drawableInterface.setRotationZ",
                    rotationZ: a
                }), g = a
            }, this.__defineSetter__("x", function (a) {
                this.setX(a, !0)
            }), this.__defineGetter__("x", function () {
                return d.__isDirty("rotate.x") ? AR.i.callSync({
                    objectId: d.__id,
                    is: "AR.i.drawableInterface.getRotationX"
                }) : e
            }), this.__defineSetter__("y", function (a) {
                this.setY(a, !0)
            }), this.__defineGetter__("y", function () {
                return d.__isDirty("rotate.y") ? AR.i.callSync({
                    objectId: d.__id,
                    is: "AR.i.drawableInterface.getRotationY"
                }) : f
            }), this.__defineSetter__("z", function (a) {
                this.setZ(a, !0)
            }), this.__defineGetter__("z", function () {
                return d.__isDirty("rotate.z") ? AR.i.callSync({
                    objectId: d.__id,
                    is: "AR.i.drawableInterface.getRotationZ"
                }) : g
            }), this.__defineSetter__("global", function (a) {
                c = new AR.DrawableRotate(this, a), AR.i.callAsync({
                    is: "AR.i.drawableInterface.setGlobalRotationX",
                    objectId: this.__id,
                    globalRotationX: c.x
                }), AR.i.callAsync({
                    is: "AR.i.drawableInterface.setGlobalRotationY",
                    objectId: this.__id,
                    globalRotationY: c.y
                }), AR.i.callAsync({
                    is: "AR.i.drawableInterface.setGlobalRotationZ",
                    objectId: this.__id,
                    globalRotationZ: c.z
                })
            }), this.__defineGetter__("global", function () {
                return c
            })
        }
    }), AR.DrawableGlobalRotation = PClass.create({
        init: function (a, b) {
            var c = a, d = 0, e = 0, f = 0;
            if (b && "object" != typeof b) throw AR.EXCEPTION.create("rotate.global", AR.EXCEPTION.TYPE.OBJECT, "rotate.global");
            b && (b.x && (d = _PROPERTY_VALIDATOR.validate("rotate.global.x", b.x, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), b.y && (e = _PROPERTY_VALIDATOR.validate("rotate.global.y", b.y, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), b.z && (f = _PROPERTY_VALIDATOR.validate("rotate.global.z", b.z, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET))), this.setX = function (a, b) {
                a = _PROPERTY_VALIDATOR.validate("rotate.global.x", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b && AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.setGlobalRotationX",
                    globalRotationX: a
                }), d = a
            }, this.setY = function (a, b) {
                a = _PROPERTY_VALIDATOR.validate("rotate.global.y", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b && AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.setGlobalRotationY",
                    globalRotationY: a
                }), e = a
            }, this.setZ = function (a, b) {
                a = _PROPERTY_VALIDATOR.validate("rotate.global.z", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b && AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.setGlobalRotationZ",
                    globalRotationZ: a
                }), f = a
            }, this.__defineSetter__("x", function (a) {
                this.setX(a, !0)
            }), this.__defineGetter__("x", function () {
                return c.__isDirty("rotate.global.x") ? AR.i.callSync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.getGlobalRotationX"
                }) : d
            }), this.__defineSetter__("y", function (a) {
                this.setY(a, !0)
            }), this.__defineGetter__("y", function () {
                return c.__isDirty("rotate.global.y") ? AR.i.callSync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.getGlobalRotationY"
                }) : e
            }), this.__defineSetter__("z", function (a) {
                this.setZ(a, !0)
            }), this.__defineGetter__("z", function () {
                return c.__isDirty("rotate.global.z") ? AR.i.callSync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.getGlobalRotationZ"
                }) : f
            })
        }
    }), AR.DrawableTranslate = PClass.create({
        init: function (a, b) {
            var c = a, d = 0, e = 0, f = 0, g = null;
            if (b && "object" != typeof b) throw AR.EXCEPTION.create("translate", AR.EXCEPTION.TYPE.OBJECT, "translate");
            b && (b.x && (d = _PROPERTY_VALIDATOR.validate("translate.x", b.x, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), b.y && (e = _PROPERTY_VALIDATOR.validate("translate.y", b.y, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), b.z && (f = _PROPERTY_VALIDATOR.validate("translate.z", b.z, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET))), g = new AR.DrawableGlobalTranslate(c, b && b.global ? b.global : null), this.setX = function (a, b) {
                a = _PROPERTY_VALIDATOR.validate("translate.x", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b && AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.setTranslateX",
                    translateX: a
                }), d = a
            }, this.setY = function (a, b) {
                a = _PROPERTY_VALIDATOR.validate("translate.y", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b && AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.setTranslateY",
                    translateY: a
                }), e = a
            }, this.setZ = function (a, b) {
                a = _PROPERTY_VALIDATOR.validate("translate.z", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b && AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.setTranslateZ",
                    translateZ: a
                }), f = a
            }, this.__defineSetter__("x", function (a) {
                this.setX(a, !0)
            }), this.__defineGetter__("x", function () {
                return c.__isDirty("translate.x") ? AR.i.callSync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.getTranslateX"
                }) : d
            }), this.__defineSetter__("y", function (a) {
                this.setY(a, !0)
            }), this.__defineGetter__("y", function () {
                return c.__isDirty("translate.y") ? AR.i.callSync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.getTranslateY"
                }) : e
            }), this.__defineSetter__("z", function (a) {
                this.setZ(a, !0)
            }), this.__defineGetter__("z", function () {
                return c.__isDirty("translate.z") ? AR.i.callSync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.getTranslateZ"
                }) : f
            }), this.__defineSetter__("global", function (a) {
                g = new AR.DrawableRotate(this, a), AR.i.callAsync({
                    is: "AR.i.drawableInterface.setGlobalTranslateX",
                    objectId: this.__id,
                    globalTranslationX: g.x
                }), AR.i.callAsync({
                    is: "AR.i.drawableInterface.setGlobalTranslateY",
                    objectId: this.__id,
                    globalTranslationY: g.y
                }), AR.i.callAsync({
                    is: "AR.i.drawableInterface.setGlobalTranslateZ",
                    objectId: this.__id,
                    globalTranslationZ: g.z
                })
            }), this.__defineGetter__("global", function () {
                return g
            })
        }
    }), AR.DrawableGlobalTranslate = PClass.create({
        init: function (a, b) {
            var c = a, d = 0, e = 0, f = 0;
            if (b && "object" != typeof b) throw AR.EXCEPTION.create("translate.global", AR.EXCEPTION.TYPE.OBJECT, "translate.global");
            b && (b.x && (d = _PROPERTY_VALIDATOR.validate("translate.global.x", b.x, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), b.y && (e = _PROPERTY_VALIDATOR.validate("translate.global.y", b.y, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), b.z && (f = _PROPERTY_VALIDATOR.validate("translate.global.z", b.z, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET))), this.setX = function (a, b) {
                a = _PROPERTY_VALIDATOR.validate("translate.global.x", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b && AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.setGlobalTranslateX",
                    globalTranslateX: a
                }), d = a
            }, this.setY = function (a, b) {
                a = _PROPERTY_VALIDATOR.validate("translate.global.y", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b && AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.setGlobalTranslateY",
                    globalTranslateY: a
                }), e = a
            }, this.setZ = function (a, b) {
                a = _PROPERTY_VALIDATOR.validate("translate.global.z", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b && AR.i.callAsync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.setGlobalTranslateZ",
                    globalTranslateZ: a
                }), f = a
            }, this.__defineSetter__("x", function (a) {
                this.setX(a, !0)
            }), this.__defineGetter__("x", function () {
                return c.__isDirty("translate.global.x") ? AR.i.callSync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.getGlobalTranslateX"
                }) : d
            }), this.__defineSetter__("y", function (a) {
                this.setY(a, !0)
            }), this.__defineGetter__("y", function () {
                return c.__isDirty("translate.global.y") ? AR.i.callSync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.getGlobalTranslateY"
                }) : e
            }), this.__defineSetter__("z", function (a) {
                this.setZ(a, !0)
            }), this.__defineGetter__("z", function () {
                return c.__isDirty("translate.global.z") ? AR.i.callSync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.getGlobalTranslateZ"
                }) : f
            })
        }
    }), AR.DrawableScale = PClass.create({
        init: function (a, b) {
            var c = a, d = 1, e = 1, f = 1;
            if (b) {
                if (isNaN(b) || (b = {
                    x: b,
                    y: b,
                    z: b
                }), "object" != typeof b) throw AR.EXCEPTION.create("scale", AR.EXCEPTION.TYPE.OBJECT, "scale");
                null != b.x && (d = _PROPERTY_VALIDATOR.validate("scale.x", b.x, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), null != b.y && (e = _PROPERTY_VALIDATOR.validate("scale.y", b.y, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), null != b.z && (f = _PROPERTY_VALIDATOR.validate("scale.z", b.z, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY))
            }
            this.setX = function (a, b) {
                d = _PROPERTY_VALIDATOR.validate("scale.x", a, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), b && AR.i.callAsync({
                    objectId: c.__id,
                    scaleX: d,
                    is: "AR.i.drawableInterface.setScaleX"
                })
            }, this.setY = function (a, b) {
                e = _PROPERTY_VALIDATOR.validate("scale.y", a, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), b && AR.i.callAsync({
                    objectId: c.__id,
                    scaleY: e,
                    is: "AR.i.drawableInterface.setScaleY"
                })
            }, this.setZ = function (a, b) {
                f = _PROPERTY_VALIDATOR.validate("scale.z", a, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), b && AR.i.callAsync({
                    objectId: c.__id,
                    scaleZ: f,
                    is: "AR.i.drawableInterface.setScaleZ"
                })
            }, this.__defineSetter__("x", function (a) {
                this.setX(a, !0)
            }), this.__defineGetter__("x", function () {
                return c.__isDirty("scale.x") ? AR.i.callSync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.getScaleX"
                }) : d
            }), this.__defineSetter__("y", function (a) {
                this.setY(a, !0)
            }), this.__defineGetter__("y", function () {
                return c.__isDirty("scale.y") ? AR.i.callSync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.getScaleY"
                }) : e
            }), this.__defineSetter__("z", function (a) {
                this.setZ(a, !0)
            }), this.__defineGetter__("z", function () {
                return c.__isDirty("scale.z") ? AR.i.callSync({
                    objectId: c.__id,
                    is: "AR.i.drawableInterface.getScaleZ"
                }) : f
            })
        }
    }), AR.Drawable2D = AR.Drawable.extend({
        validateHorizontalAnchor: function (a) {
            if (!AR.CONST.HORIZONTAL_ANCHOR.isValidHorizontalAnchor(a)) throw AR.EXCEPTION.create("horizontalAnchor", AR.EXCEPTION.TYPE.OBJECT, "HORIZONTAL_ANCHOR.___", typeof a);
            return a
        }, validateVerticalAnchor: function (a) {
            if (!AR.CONST.VERTICAL_ANCHOR.isValidVerticalAnchor(a)) throw AR.EXCEPTION.create("verticalAnchor", AR.EXCEPTION.TYPE.OBJECT, "VERTICAL_ANCHOR.___", typeof a);
            return a
        }, validateOpacity: function (a) {
            if (!AR.VALIDATE.isDefined(a)) throw AR.EXCEPTION.create("opacity", AR.EXCEPTION.TYPE.UNDEFINED);
            if (!AR.VALIDATE.isInRange(a, 0, 1)) throw AR.EXCEPTION.create("opacity", AR.EXCEPTION.TYPE.RANGE, "[0, 1]");
            return a
        }, validateZOrder: function (a) {
            if (!AR.VALIDATE.isDefined(a)) throw AR.EXCEPTION.create("zOrder", AR.EXCEPTION.TYPE.UNDEFINED);
            if (!AR.VALIDATE.isNumeric(a)) throw AR.EXCEPTION.create("zOrder", AR.EXCEPTION.TYPE.INT);
            return a
        }, init: function (a, b, c) {
            var d = this.validateHorizontalAnchor(a), e = this.validateVerticalAnchor(b), f = 1, g = 0;
            null != c && (null != c.horizontalAnchor && (d = this.validateHorizontalAnchor(c.horizontalAnchor)), null != c.verticalAnchor && (e = this.validateVerticalAnchor(c.verticalAnchor)), null != c.opacity && (f = this.validateOpacity(c.opacity)), null != c.zOrder && (g = this.validateZOrder(c.zOrder))), c && (c.rotation && (c.rotate ? c.rotate.z = c.rotation : c.rotate = {z: c.rotation}), c.offsetX && (c.translate ? c.translate.x = c.offsetX : c.translate = {x: c.offsetX}), c.offsetY && (c.translate ? c.translate.y = c.offsetY : c.translate = {y: c.offsetY}));
            var h = this._super(c);
            return this.__defineSetter__("opacity", function (a) {
                a = this.validateOpacity(a), AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.drawable2DInterface.setOpacity",
                    opacity: a
                }), f = a
            }), this.__defineGetter__("opacity", function () {
                return this.__isDirty("opacity") ? AR.i.callSync({
                    objectId: this.__id,
                    is: "AR.i.drawable2DInterface.getOpacity"
                }) : f
            }), this.__defineSetter__("horizontalAnchor", function (a) {
                a = this.validateHorizontalAnchor(a), AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.drawable2DInterface.setHorizontalAnchor",
                    horizontalAnchor: a
                }), d = a
            }), this.__defineGetter__("horizontalAnchor", function () {
                return d
            }), this.__defineSetter__("verticalAnchor", function (a) {
                a = this.validateVerticalAnchor(a), AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.drawable2DInterface.setVerticalAnchor",
                    verticalAnchor: a
                }), e = a
            }), this.__defineGetter__("verticalAnchor", function () {
                return e
            }), this.__defineSetter__("zOrder", function (a) {
                a = this.validateZOrder(a), AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.drawable2DInterface.setZOrder",
                    zOrder: a
                }), g = a
            }), this.__defineGetter__("zOrder", function () {
                return g
            }), h.horizontalAnchor = d, h.verticalAnchor = e, h.opacity = f, h.zOrder = g, h
        }, getBoundingRectangle: function () {
            var a = AR.i.callSync({objectId: this.__id, is: "AR.i.drawable2DInterface.getBoundingRectangle"});
            return a && AR.isDefined(a.width) && AR.isDefined(a.height) ? new AR.BoundingRectangle(a.width, a.height) : null
        }
    }), AR.Label = AR.Drawable2D.extend({
        init: function (a, b, c) {
            var d = a;
            "string" != typeof d && (d = "" + d);
            var e = this.validateHeight(b), f = null;
            null != c ? (f = new AR.Style(this, c.style), c.mirrored || (c.mirrored = !1)) : (f = new AR.Style(this, null), c = {mirrored: !1});
            var g = this._super(AR.CONST.HORIZONTAL_ANCHOR.CENTER, AR.CONST.VERTICAL_ANCHOR.MIDDLE, c),
                h = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: h,
                is: "AR.i.labelInterface.createLabel",
                enabled: g.enabled,
                mirrored: g.mirrored,
                rotatesToCamera: g.rotatesToCamera,
                zOrder: g.zOrder,
                onClickTriggerActive: g.onClickActive,
                onDragBeganTriggerActive: g.onDragBeganActive,
                onDragChangedTriggerActive: g.onDragChangedActive,
                onDragEndedTriggerActive: g.onDragEndedActive,
                onPanBeganTriggerActive: g.onPanBeganActive,
                onPanChangedTriggerActive: g.onPanChangedActive,
                onPanEndedTriggerActive: g.onPanEndedActive,
                onRotationBeganTriggerActive: g.onRotationBeganActive,
                onRotationChangedTriggerActive: g.onRotationChangedActive,
                onRotationEndedTriggerActive: g.onRotationEndedActive,
                onScaleBeganTriggerActive: g.onScaleBeganActive,
                onScaleChangedTriggerActive: g.onScaleChangedActive,
                onScaleEndedTriggerActive: g.onScaleEndedActive,
                horizontalAnchor: g.horizontalAnchor,
                verticalAnchor: g.verticalAnchor,
                opacity: g.opacity,
                text: d,
                fontStyle: f.fontStyle,
                textColor: f.textColor,
                backgroundColor: f.backgroundColor,
                height: e,
                globalRotationX: g.rotate.global.x,
                globalRotationY: g.rotate.global.y,
                globalRotationZ: g.rotate.global.z,
                globalTranslateX: g.translate.global.x,
                globalTranslateY: g.translate.global.y,
                globalTranslateZ: g.translate.global.z,
                rotationX: g.rotate.x,
                rotationY: g.rotate.y,
                rotationZ: g.rotate.z,
                translateX: g.translate.x,
                translateY: g.translate.y,
                translateZ: g.translate.z,
                scaleX: g.scale.x,
                scaleY: g.scale.y,
                scaleZ: g.scale.z
            });
            var i = h;
            AR.om.registerObjectForID(i, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return i
            }), this.__defineSetter__("text", function (a) {
                "string" != typeof a && (a = "" + a), AR.i.callAsync({
                    is: "AR.i.labelInterface.setText",
                    objectId: i,
                    text: a
                }), d = a
            }), this.__defineGetter__("text", function () {
                return d
            }), this.__defineSetter__("height", function (a) {
                a = this.validateHeight(a), AR.i.callAsync({
                    is: "AR.i.labelInterface.setHeight",
                    objectId: i,
                    height: a
                }), e = a
            }), this.__defineGetter__("height", function () {
                return this.__isDirty("height") ? AR.i.callSync({is: "AR.i.labelInterface.getHeight", objectId: i}) : e
            }), this.__defineSetter__("style", function (a) {
                f = new AR.Style(this, a), this.setStyleInInterface()
            }), this.__defineGetter__("style", function () {
                return f
            }), this.setStyleInInterface = function () {
                AR.i.callAsync({
                    is: "AR.i.labelInterface.setStyle",
                    objectId: i,
                    backgroundColor: f.backgroundColor,
                    textColor: f.textColor,
                    fontStyle: f.fontStyle
                })
            }
        }, validateHeight: function (a) {
            if (!AR.VALIDATE.isDefined(a) || !AR.VALIDATE.isNonNegative(a)) throw AR.EXCEPTION.create("height", AR.EXCEPTION.TYPE.RANGE, "(0, infinity)");
            return a
        }
    }), AR.Model = AR.Drawable.extend({
        init: function (a, b) {
            this.__modelNotCreatedInCoreYet = !0;
            var c, d, e,
                f = _PROPERTY_VALIDATOR.validate("uri", a, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
            b ? (b.onLoaded && (c = _PROPERTY_VALIDATOR.validate("onLoaded", b.onLoaded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onInitialized && (e = _PROPERTY_VALIDATOR.validate("onInitialized", b.onInitialized, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onError && (d = _PROPERTY_VALIDATOR.validate("onError", b.onError, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.rotatesToCamera || (b.rotatesToCamera = !1)) : b = {rotatesToCamera: !1}, this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return i
            });
            var g = this._super(b), h = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: h,
                is: "AR.i.modelInterface.createModel",
                enabled: g.enabled,
                mirrored: g.mirrored,
                rotatesToCamera: g.rotatesToCamera,
                onClickTriggerActive: g.onClickActive,
                onDragBeganTriggerActive: g.onDragBeganActive,
                onDragChangedTriggerActive: g.onDragChangedActive,
                onDragEndedTriggerActive: g.onDragEndedActive,
                onPanBeganTriggerActive: g.onPanBeganActive,
                onPanChangedTriggerActive: g.onPanChangedActive,
                onPanEndedTriggerActive: g.onPanEndedActive,
                onRotationBeganTriggerActive: g.onRotationBeganActive,
                onRotationChangedTriggerActive: g.onRotationChangedActive,
                onRotationEndedTriggerActive: g.onRotationEndedActive,
                onScaleBeganTriggerActive: g.onScaleBeganActive,
                onScaleChangedTriggerActive: g.onScaleChangedActive,
                onScaleEndedTriggerActive: g.onScaleEndedActive,
                uri: AR.__resourceUrl(f),
                onLoadedTriggerActive: null != c,
                onInitializedTriggerActive: null != e,
                onErrorTriggerActive: null != d,
                globalRotationX: g.rotate.global.x,
                globalRotationY: g.rotate.global.y,
                globalRotationZ: g.rotate.global.z,
                globalTranslateX: g.translate.global.x,
                globalTranslateY: g.translate.global.y,
                globalTranslateZ: g.translate.global.z,
                rotationX: g.rotate.x,
                rotationY: g.rotate.y,
                rotationZ: g.rotate.z,
                translateX: g.translate.x,
                translateY: g.translate.y,
                translateZ: g.translate.z,
                scaleX: g.scale.x,
                scaleY: g.scale.y,
                scaleZ: g.scale.z
            }), delete this.__modelNotCreatedInCoreYet;
            var i = h;
            AR.om.registerObjectForID(i, this), this.__defineSetter__("uri", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("uri", function () {
                return f
            }), this.__defineSetter__("onLoaded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onLoaded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c = a, AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.modelInterface.setOnLoadedTriggerActive",
                    onLoadedTriggerActive: null != a
                })
            }), this.__defineGetter__("onLoaded", function () {
                return c
            }), this.__defineSetter__("onInitialized", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onInitialized", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), e = a, AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.modelInterface.setOnInitializedTriggerActive",
                    onInitializedTriggerActive: null != a
                })
            }), this.__defineGetter__("onInitialized", function () {
                return e
            }), this.__defineSetter__("onError", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onError", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), d = a, AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.modelInterface.setOnErrorTriggerActive",
                    onErrorTriggerActive: null != a
                })
            }), this.__defineGetter__("onError", function () {
                return d
            })
        }, isLoaded: function () {
            return AR.i.callSync({is: "AR.i.modelInterface.isLoaded", objectId: this.__id})
        }, isInitialized: function () {
            return AR.i.callSync({is: "AR.i.modelInterface.isInitialized", objectId: this.__id})
        }
    }), AR.Circle = AR.Drawable2D.extend({
        init: function (a, b) {
            var c = this.validateRadius(a), d = null;
            d = null != b ? new AR.Style(this, b.style) : new AR.Style(this, null);
            var e = this._super(AR.CONST.HORIZONTAL_ANCHOR.CENTER, AR.CONST.VERTICAL_ANCHOR.MIDDLE, b),
                f = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: f,
                is: "AR.i.circleInterface.createCircle",
                enabled: e.enabled,
                mirrored: e.mirrored,
                rotatesToCamera: e.rotatesToCamera,
                zOrder: e.zOrder,
                onClickTriggerActive: e.onClickActive,
                onDragBeganTriggerActive: e.onDragBeganActive,
                onDragChangedTriggerActive: e.onDragChangedActive,
                onDragEndedTriggerActive: e.onDragEndedActive,
                onPanBeganTriggerActive: e.onPanBeganActive,
                onPanChangedTriggerActive: e.onPanChangedActive,
                onPanEndedTriggerActive: e.onPanEndedActive,
                onRotationBeganTriggerActive: e.onRotationBeganActive,
                onRotationChangedTriggerActive: e.onRotationChangedActive,
                onRotationEndedTriggerActive: e.onRotationEndedActive,
                onScaleBeganTriggerActive: e.onScaleBeganActive,
                onScaleChangedTriggerActive: e.onScaleChangedActive,
                onScaleEndedTriggerActive: e.onScaleEndedActive,
                horizontalAnchor: e.horizontalAnchor,
                verticalAnchor: e.verticalAnchor,
                opacity: e.opacity,
                radius: c,
                fillColor: d.fillColor,
                outlineColor: d.outlineColor,
                outlineSize: d.outlineSize,
                globalRotationX: e.rotate.global.x,
                globalRotationY: e.rotate.global.y,
                globalRotationZ: e.rotate.global.z,
                globalTranslateX: e.translate.global.x,
                globalTranslateY: e.translate.global.y,
                globalTranslateZ: e.translate.global.z,
                rotationX: e.rotate.x,
                rotationY: e.rotate.y,
                rotationZ: e.rotate.z,
                translateX: e.translate.x,
                translateY: e.translate.y,
                translateZ: e.translate.z,
                scaleX: e.scale.x,
                scaleY: e.scale.y,
                scaleZ: e.scale.z
            });
            var g = f;
            AR.om.registerObjectForID(g, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return g
            }), this.__defineSetter__("radius", function (a) {
                a = this.validateRadius(a), AR.i.callAsync({
                    objectId: g,
                    is: "AR.i.circleInterface.setRadius",
                    radius: a
                }), c = a
            }), this.__defineGetter__("radius", function () {
                return this.__isDirty("radius") ? AR.i.callSync({objectId: g, is: "AR.i.circleInterface.getRadius"}) : c
            }), this.__defineSetter__("style", function (a) {
                d = new AR.Style(this, a), this.setStyleInInterface()
            }), this.__defineGetter__("style", function () {
                return d
            }), this.setStyleInInterface = function () {
                AR.i.callAsync({
                    objectId: g,
                    is: "AR.i.circleInterface.setStyle",
                    fillColor: d.fillColor,
                    outlineColor: d.outlineColor,
                    outlineSize: d.outlineSize
                })
            }
        }, validateRadius: function (a) {
            if (!AR.VALIDATE.isNonNegative(a)) throw AR.EXCEPTION.create("radius", AR.EXCEPTION.TYPE.RANGE, "(0, infinity)");
            return a
        }
    }), AR.ImageDrawable = AR.Drawable2D.extend({
        init: function (a, b, c) {
            var d = _PROPERTY_VALIDATOR.validate("imageResource", a, {
                    type: _PROPERTY_VALIDATOR.TYPE.CLASS,
                    ofType: AR.ImageResource
                }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                e = _PROPERTY_VALIDATOR.validate("height", b, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                f = this._super(AR.CONST.HORIZONTAL_ANCHOR.CENTER, AR.CONST.VERTICAL_ANCHOR.MIDDLE, c);
            if (this.__defineSetter__("imageResource", function (a) {
                a = _PROPERTY_VALIDATOR.validate("imageResource", a, {
                    type: _PROPERTY_VALIDATOR.TYPE.CLASS,
                    ofType: AR.ImageResource
                }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    is: "AR.i.imageDrawableInterface.setImageResource",
                    objectId: this.__id,
                    imageResourceId: a.__id
                }), d = a
            }), this.__defineGetter__("imageResource", function () {
                return d
            }), this.__defineSetter__("height", function (a) {
                a = _PROPERTY_VALIDATOR.validate("height", a, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    is: "AR.i.imageDrawableInterface.setHeight",
                    objectId: this.__id,
                    height: a
                }), e = a
            }), this.__defineGetter__("height", function () {
                return this.__isDirty("height") && AR.i.callSync({
                    is: "AR.i.imageDrawableInterface.getHeight",
                    objectId: this.__id
                }), e
            }), c && c.__DO_NOT_CREATE_OBJECT) return f.imageResource = a, f.height = b, f;
            this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return h
            });
            var g = AR.om.createObjectID();
            AR.i.callAsync({
                is: "AR.i.imageDrawableInterface.createImageDrawable",
                objectId: g,
                enabled: f.enabled,
                mirrored: f.mirrored,
                rotatesToCamera: f.rotatesToCamera,
                zOrder: f.zOrder,
                onClickTriggerActive: f.onClickActive,
                onDragBeganTriggerActive: f.onDragBeganActive,
                onDragChangedTriggerActive: f.onDragChangedActive,
                onDragEndedTriggerActive: f.onDragEndedActive,
                onPanBeganTriggerActive: f.onPanBeganActive,
                onPanChangedTriggerActive: f.onPanChangedActive,
                onPanEndedTriggerActive: f.onPanEndedActive,
                onRotationBeganTriggerActive: f.onRotationBeganActive,
                onRotationChangedTriggerActive: f.onRotationChangedActive,
                onRotationEndedTriggerActive: f.onRotationEndedActive,
                onScaleBeganTriggerActive: f.onScaleBeganActive,
                onScaleChangedTriggerActive: f.onScaleChangedActive,
                onScaleEndedTriggerActive: f.onScaleEndedActive,
                horizontalAnchor: f.horizontalAnchor,
                verticalAnchor: f.verticalAnchor,
                opacity: f.opacity,
                imageResourceId: a.__id,
                height: b,
                globalRotationX: f.rotate.global.x,
                globalRotationY: f.rotate.global.y,
                globalRotationZ: f.rotate.global.z,
                globalTranslateX: f.translate.global.x,
                globalTranslateY: f.translate.global.y,
                globalTranslateZ: f.translate.global.z,
                rotationX: f.rotate.x,
                rotationY: f.rotate.y,
                rotationZ: f.rotate.z,
                translateX: f.translate.x,
                translateY: f.translate.y,
                translateZ: f.translate.z,
                scaleX: f.scale.x,
                scaleY: f.scale.y,
                scaleZ: f.scale.z
            });
            var h = g;
            AR.om.registerObjectForID(h, this)
        }
    }), AR.AnimatedImageDrawable = AR.ImageDrawable.extend({
        init: function (a, b, c, d, e) {
            var f,
                g = _PROPERTY_VALIDATOR.validate("keyFrameWidth", c, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                h = _PROPERTY_VALIDATOR.validate("keyFrameHeight", d, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                i = 0;
            e && (e.keyFrame && (i = _PROPERTY_VALIDATOR.validate("keyFrame", e.keyFrame, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), e.onFinish && (f = _PROPERTY_VALIDATOR.validate("onFinish", e.onFinish, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY))), e || (e = {}), e.__DO_NOT_CREATE_OBJECT = !0;
            var j = this._super(a, b, e), k = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: k,
                is: "AR.i.animatedImageDrawableInterface.createAnimatedImageDrawable",
                enabled: j.enabled,
                mirrored: j.mirrored,
                rotatesToCamera: j.rotatesToCamera,
                zOrder: j.zOrder,
                onClickTriggerActive: j.onClickActive,
                onDragBeganTriggerActive: j.onDragBeganActive,
                onDragChangedTriggerActive: j.onDragChangedActive,
                onDragEndedTriggerActive: j.onDragEndedActive,
                onPanBeganTriggerActive: j.onPanBeganActive,
                onPanChangedTriggerActive: j.onPanChangedActive,
                onPanEndedTriggerActive: j.onPanEndedActive,
                onRotationBeganTriggerActive: j.onRotationBeganActive,
                onRotationChangedTriggerActive: j.onRotationChangedActive,
                onRotationEndedTriggerActive: j.onRotationEndedActive,
                onScaleBeganTriggerActive: j.onScaleBeganActive,
                onScaleChangedTriggerActive: j.onScaleChangedActive,
                onScaleEndedTriggerActive: j.onScaleEndedActive,
                onFinishTriggerActive: null != f,
                horizontalAnchor: j.horizontalAnchor,
                verticalAnchor: j.verticalAnchor,
                opacity: j.opacity,
                imageResourceId: j.imageResource.__id,
                height: j.height,
                keyFrameWidth: g,
                keyFrameHeight: h,
                keyFrame: i,
                globalRotationX: j.rotate.global.x,
                globalRotationY: j.rotate.global.y,
                globalRotationZ: j.rotate.global.z,
                globalTranslateX: j.translate.global.x,
                globalTranslateY: j.translate.global.y,
                globalTranslateZ: j.translate.global.z,
                rotationX: j.rotate.x,
                rotationY: j.rotate.y,
                rotationZ: j.rotate.z,
                translateX: j.translate.x,
                translateY: j.translate.y,
                translateZ: j.translate.z,
                scaleX: j.scale.x,
                scaleY: j.scale.y,
                scaleZ: j.scale.z
            });
            var l = k;
            AR.om.registerObjectForID(l, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return l
            }), this.__defineSetter__("onFinish", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onFinish", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), f = a, AR.i.callAsync({
                    is: "AR.i.animatedImageDrawableInterface.setOnFinishTriggerActive",
                    objectId: this.__id,
                    onFinishTriggerActive: null != f
                })
            }), this.__defineGetter__("onFinish", function (a) {
                return f
            })
        }, setKeyFrame: function (a) {
            var b = _PROPERTY_VALIDATOR.validate("keyFramePos", a, _PROPERTY_VALIDATOR.TYPE.INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
            AR.i.callAsync({objectId: this.__id, is: "AR.i.animatedImageDrawableInterface.setKeyFrame", keyFrame: b})
        }, animate: function (a, b, c) {
            var d = this.validateKeyFrameArray(a),
                e = _PROPERTY_VALIDATOR.validate("duration", b, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                f = 1;
            c && (f = _PROPERTY_VALIDATOR.validate("loopTimes", c, _PROPERTY_VALIDATOR.TYPE.INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), AR.i.callAsync({
                objectId: this.__id,
                is: "AR.i.animatedImageDrawableInterface.animate",
                keyFrames: AR.__toJSONString__(d),
                duration: e,
                loopTimes: f
            })
        }, validateKeyFrameArray: function (a) {
            if (!(a instanceof Array)) throw AR.EXCEPTION.create(name, AR.EXCEPTION.TYPE.ARRAY_CONTENT);
            for (var b = 0; b < a.length; b++) if ("number" != typeof a[b] || Math.round(a[b]) != a[b]) throw AR.EXCEPTION.create(name, AR.EXCEPTION.TYPE.ARRAY_CONTENT);
            return a
        }
    }), AR.Location = AR.ARchitectObject.extend({
        distanceTo: function (a) {
            return a = _PROPERTY_VALIDATOR.validate("location", a, {
                type: _PROPERTY_VALIDATOR.TYPE.CLASS,
                ofType: AR.Location
            }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callSync({
                is: "AR.i.locationInterface.distanceTo",
                objectId: this.__id,
                locationId: a.__id
            })
        }, distanceToUser: function () {
            var a = AR.i.callSync({is: "AR.i.locationInterface.distanceToUser", objectId: this.__id});
            return a < 0 ? void 0 : a
        }
    }), AR.GeoLocation = AR.Location.extend({
        init: function (a, b, c, d) {
            this._super();
            var e = this.validateLatitude(a), f = this.validateLongitude(b), g = this.validateAltitude(c), h = null;
            d && d.onError && (h = _PROPERTY_VALIDATOR.validate("onError", d.onError, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY));
            var i = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: i,
                is: "AR.i.geoLocationInterface.createGeoLocation",
                latitude: e,
                longitude: f,
                altitude: g,
                onErrorTriggerActive: null != h
            }), AR.om.registerObjectForID(i, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return i
            }), this.__defineSetter__("onError", function (a) {
                h = _PROPERTY_VALIDATOR.validate("onError", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: i,
                    is: "AR.i.geoLocationInterface.setOnErrorTriggerActive",
                    onErrorTriggerActive: null != h
                })
            }), this.__defineGetter__("onError", function () {
                return h
            }), this.__defineSetter__("latitude", function (a) {
                a = this.validateLatitude(a), AR.i.callAsync({
                    objectId: i,
                    is: "AR.i.geoLocationInterface.setLatitude",
                    latitude: a
                }), e = a
            }), this.__defineGetter__("latitude", function () {
                return this.__isDirty("latitude") ? AR.i.callSync({
                    objectId: i,
                    is: "AR.i.geoLocationInterface.getLatitude"
                }) : e
            }), this.__defineSetter__("longitude", function (a) {
                a = this.validateLongitude(a), AR.i.callAsync({
                    objectId: i,
                    is: "AR.i.geoLocationInterface.setLongitude",
                    longitude: a
                }), f = a
            }), this.__defineGetter__("longitude", function () {
                return this.__isDirty("longitude") ? AR.i.callSync({
                    objectId: i,
                    is: "AR.i.geoLocationInterface.getLongitude"
                }) : f
            }), this.__defineSetter__("altitude", function (a) {
                a = this.validateAltitude(a), AR.i.callAsync({
                    objectId: i,
                    is: "AR.i.geoLocationInterface.setAltitude",
                    altitude: a
                }), g = a
            }), this.__defineGetter__("altitude", function () {
                return this.__isDirty("altitude") ? AR.i.callSync({
                    objectId: i,
                    is: "AR.i.geoLocationInterface.getAltitude"
                }) : g
            })
        }, validateLatitude: function (a) {
            if (!AR.VALIDATE.isNumeric(a)) throw AR.EXCEPTION.create("latitude", AR.EXCEPTION.TYPE.FLOAT);
            if (!AR.VALIDATE.isInRange(a, -90, 90)) throw AR.EXCEPTION.create("latitude", AR.EXCEPTION.TYPE.RANGE, "[-90, 90]");
            return a
        }, validateLongitude: function (a) {
            if (!AR.VALIDATE.isNumeric(a)) throw AR.EXCEPTION.create("longitude", AR.EXCEPTION.TYPE.FLOAT);
            if (!AR.VALIDATE.isInRange(a, -180, 180)) throw AR.EXCEPTION.create("longitude", AR.EXCEPTION.TYPE.RANGE, "[-180, 180]");
            return a
        }, validateAltitude: function (a) {
            if (a = AR.isDefined(a) ? a : AR.CONST.UNKNOWN_ALTITUDE, !AR.VALIDATE.isNumeric(a)) throw AR.EXCEPTION.create("altitude", AR.EXCEPTION.TYPE.FLOAT);
            return a
        }
    }), AR.RelativeLocation = AR.Location.extend({
        init: function (a, b, c, d) {
            this._super();
            var e = _PROPERTY_VALIDATOR.validate("location", a, {
                    type: _PROPERTY_VALIDATOR.TYPE.CLASS,
                    ofType: AR.Location
                }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY),
                f = _PROPERTY_VALIDATOR.validate("northing", b, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                g = _PROPERTY_VALIDATOR.validate("easting", c, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                h = _PROPERTY_VALIDATOR.validate("altitudeDelta", d, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY);
            h || (h = 0);
            var i = AR.om.createObjectID();
            e ? AR.i.callAsync({
                objectId: i,
                is: "AR.i.relativeLocationInterface.createRelativeLocation",
                locationId: e.__id,
                northing: f,
                easting: g,
                altitudeDelta: h
            }) : AR.i.callAsync({
                objectId: i,
                is: "AR.i.relativeLocationInterface.createRelativeLocationToUser",
                northing: f,
                easting: g,
                altitudeDelta: h
            }), AR.om.registerObjectForID(i, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return i
            }), this.__defineSetter__("location", function (a) {
                a = _PROPERTY_VALIDATOR.validate("location", a, {
                    type: _PROPERTY_VALIDATOR.TYPE.CLASS,
                    ofType: AR.Location
                }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), a ? AR.i.callAsync({
                    is: "AR.i.relativeLocationInterface.setLocation",
                    objectId: i,
                    locationId: a.__id
                }) : AR.i.callAsync({
                    is: "AR.i.relativeLocationInterface.setLocationRelativeToUser",
                    objectId: i
                }), e = a
            }), this.__defineGetter__("location", function () {
                return e
            }), this.__defineSetter__("northing", function (a) {
                a = _PROPERTY_VALIDATOR.validate("northing", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    is: "AR.i.relativeLocationInterface.setNorthing",
                    objectId: i,
                    northing: a
                }), f = a
            }), this.__defineGetter__("northing", function () {
                return this.__isDirty("northing") ? AR.i.callSync({
                    is: "AR.i.relativeLocationInterface.getNorthing",
                    objectId: i
                }) : f
            }), this.__defineSetter__("easting", function (a) {
                a = _PROPERTY_VALIDATOR.validate("easting", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    is: "AR.i.relativeLocationInterface.setEasting",
                    objectId: i,
                    easting: a
                }), g = a
            }), this.__defineGetter__("easting", function () {
                return this.__isDirty("easting") ? AR.i.callSync({
                    is: "AR.i.relativeLocationInterface.getEasting",
                    objectId: i
                }) : g
            }), this.__defineSetter__("altitudeDelta", function (a) {
                a = _PROPERTY_VALIDATOR.validate("altitudeDelta", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), a || (a = 0), AR.i.callAsync({
                    is: "AR.i.relativeLocationInterface.setAltitudeDelta",
                    objectId: i,
                    altitudeDelta: a
                }), h = a
            }), this.__defineGetter__("altitudeDelta", function () {
                return this.__isDirty("altitudeDelta") ? AR.i.callSync({
                    is: "AR.i.relativeLocationInterface.getAltitudeDelta",
                    objectId: i
                }) : h
            })
        }
    }), AR.GeoObject = AR.ARObject.extend({
        init: function (a, b) {
            var c, d, e = this._super(b);
            b && (b.onEnterFieldOfVision && (c = _PROPERTY_VALIDATOR.validate("onEnterFieldOfVision", b.onEnterFieldOfVision, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onExitFieldOfVision && (d = _PROPERTY_VALIDATOR.validate("onExitFieldOfVision", b.onExitFieldOfVision, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)));
            var f = this.validateLocations(a), g = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: g,
                is: "AR.i.geoObjectInterface.createGeoObject",
                locationIds: AR.__toJSONString__(AR.om.__getIds__(f)),
                enabled: e.enabled,
                onEnterFieldOfVisionTriggerActive: null != c,
                onExitFieldOfVisionTriggerActive: null != d,
                onClickTriggerActive: e.onClickTriggerActive,
                onDragBeganTriggerActive: e.onDragBeganTriggerActive,
                onDragChangedTriggerActive: e.onDragChangedTriggerActive,
                onDragEndedTriggerActive: e.onDragEndedTriggerActive,
                onPanBeganTriggerActive: e.onPanBeganTriggerActive,
                onPanChangedTriggerActive: e.onPanChangedTriggerActive,
                onPanEndedTriggerActive: e.onPanEndedTriggerActive,
                onRotationBeganTriggerActive: e.onRotationBeganTriggerActive,
                onRotationChangedTriggerActive: e.onRotationChangedTriggerActive,
                onRotationEndedTriggerActive: e.onRotationEndedTriggerActive,
                onScaleBeganTriggerActive: e.onScaleBeganTriggerActive,
                onScaleChangedTriggerActive: e.onScaleChangedTriggerActive,
                onScaleEndedTriggerActive: e.onScaleEndedTriggerActive,
                camDrawableIds: AR.__toJSONString__(AR.om.__getIds__(e.drawables.cam)),
                renderingOrder: e.renderingOrder,
                radarDrawableIds: AR.__toJSONString__(AR.om.__getIds__(e.drawables.radar)),
                indicatorDrawableIds: AR.__toJSONString__(AR.om.__getIds__(e.drawables.indicator))
            }), AR.om.registerObjectForID(g, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return g
            }), this.__defineSetter__("onEnterFieldOfVision", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onEnterFieldOfVision", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c = a, AR.i.callAsync({
                    objectId: this.__id,
                    onEnterFieldOfVisionTriggerActive: null != a,
                    is: "AR.i.geoObjectInterface.setOnEnterFieldOfVisionTriggerActive"
                })
            }), this.__defineGetter__("onEnterFieldOfVision", function () {
                return c
            }), this.__defineSetter__("onExitFieldOfVision", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onExitFieldOfVision", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), d = a, AR.i.callAsync({
                    objectId: this.__id,
                    onExitFieldOfVisionTriggerActive: null != a,
                    is: "AR.i.geoObjectInterface.setOnExitFieldOfVisionTriggerActive"
                })
            }), this.__defineGetter__("onExitFieldOfVision", function () {
                return d
            }), this.__defineSetter__("locations", function (a) {
                a = this.validateLocations(a), AR.i.callAsync({
                    objectId: g,
                    locationIds: AR.__toJSONString__(AR.om.__getIds__(a)),
                    is: "AR.i.geoObjectInterface.setLocations"
                }), f = a
            }), this.__defineGetter__("locations", function () {
                return f
            })
        }, validateLocations: function (a) {
            if (!AR.VALIDATE.isDefined(a)) throw AR.EXCEPTION.create("locations", AR.EXCEPTION.TYPE.UNDEFINED);
            if (a instanceof AR.Location) a = new Array(a); else if (!AR.VALIDATE.isArrayOf(a, AR.Location)) throw AR.EXCEPTION.create("locations", AR.EXCEPTION.TYPE.ARRAY_CONTENT);
            return a
        }
    }), AR.ActionArea = AR.ARchitectObject.extend({
        validateOnEnter: function (a) {
            if (AR.VALIDATE.isDefined(a) && !AR.VALIDATE.isFunction(a)) throw AR.EXCEPTION.create("_onEnter", AR.EXCEPTION.TYPE.OBJECT, "function", typeof a);
            return a
        }, validateOnExit: function (a) {
            if (AR.VALIDATE.isDefined(a) && !AR.VALIDATE.isFunction(a)) throw AR.EXCEPTION.create("_onExit", AR.EXCEPTION.TYPE.OBJECT, "function", typeof a);
            return a
        }, validateEnabled: function (a) {
            if (null == a || void 0 == a) return !0;
            if (!AR.VALIDATE.isBoolean(a)) throw AR.EXCEPTION.create("enabled", AR.EXCEPTION.TYPE.BOOLEAN);
            return a
        }, init: function (a) {
            this._super();
            var b = !0, c = null, d = null;
            return null != a && (b = this.validateEnabled(a.enabled), c = this.validateOnEnter(a.onEnter), d = this.validateOnExit(a.onExit)), this.__defineSetter__("enabled", function (a) {
                a = this.validateEnabled(a), AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.actionAreaInterface.setEnabled",
                    enabled: a
                }), b = a
            }), this.__defineGetter__("enabled", function () {
                return b
            }), this.__defineSetter__("onEnter", function (a) {
                a = this.validateOnEnter(a), c = a, AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.actionAreaInterface.setOnEnterTriggerActive",
                    onEnterTriggerActive: null != c
                })
            }), this.__defineGetter__("onEnter", function () {
                return c
            }), this.__defineSetter__("onExit", function (a) {
                a = this.validateOnExit(a), d = a, AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.actionAreaInterface.setOnExitTriggerActive",
                    onExitTriggerActive: null != d
                })
            }), this.__defineGetter__("onExit", function () {
                return d
            }), {enabled: b, onEnterTriggerActive: null != c, onExitTriggerActive: null != d}
        }, isInArea: function (a) {
            if (!AR.VALIDATE.isDefined(a)) throw AR.EXCEPTION.create("geoLocation", AR.EXCEPTION.TYPE.UNDEFINED);
            if (!AR.VALIDATE.isTypeOf(a, AR.GeoLocation)) throw AR.EXCEPTION.create("geoLocation", AR.EXCEPTION.TYPE.OBJECT, "geoLocation", typeof val);
            return AR.i.callSync({objectId: this.__id, is: "AR.i.actionAreaInterface.isInArea", geoLocationId: a.__id})
        }
    }), AR.ActionRange = AR.ActionArea.extend({
        init: function (a, b, c) {
            var d = this.validateRadius(b), e = this.validateLocation(a), f = this._super(c),
                g = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: g,
                is: "AR.i.actionRangeInterface.createActionRange",
                locationId: e.__id,
                radius: d,
                enabled: f.enabled,
                onEnterTriggerActive: f.onEnterTriggerActive,
                onExitTriggerActive: f.onExitTriggerActive
            }), AR.om.registerObjectForID(g, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return g
            }), this.__defineSetter__("radius", function (a) {
                a = this.validateRadius(a), AR.i.callAsync({
                    objectId: g,
                    radius: a,
                    is: "AR.i.actionRangeInterface.setRadius"
                }), d = a
            }), this.__defineGetter__("radius", function () {
                return this.__isDirty("radius") ? AR.i.callSync({
                    objectId: g,
                    is: "AR.i.actionRangeInterface.getRadius"
                }) : d
            }), this.__defineSetter__("location", function (a) {
                a = this.validateLocation(a), AR.i.callAsync({
                    objectId: g,
                    locationId: a.__id,
                    is: "AR.i.actionRangeInterface.setLocation"
                }), e = a
            }), this.__defineGetter__("location", function () {
                return e
            })
        }, validateRadius: function (a) {
            if (!AR.VALIDATE.isNonNegative(a)) throw AR.EXCEPTION.create("radius", AR.EXCEPTION.TYPE.RANGE, "[0, infinity)");
            return a
        }, validateLocation: function (a) {
            if (!AR.VALIDATE.isDefined(a)) throw AR.EXCEPTION.create("location", AR.EXCEPTION.TYPE.UNDEFINED);
            if (!AR.VALIDATE.isTypeOf(a, AR.Location)) throw AR.EXCEPTION.create("location", AR.EXCEPTION.TYPE.OBJECT, "Location", typeof a);
            return a
        }
    }), AR.BoundingRectangle = PClass.create({
        init: function (a, b) {
            var a = a, b = b;
            this.getWidth = function () {
                return a
            }, this.getHeight = function () {
                return b
            }
        }
    }), AR.ImageResource = AR.ARchitectObject.extend({
        init: function (a, b) {
            this._super();
            var c, d, e = this.validateUri(a);
            null != b && (null != b.onLoaded && (c = this.validateOnLoaded(b.onLoaded)), null != b.onError && (d = this.validateOnError(b.onError)));
            var f = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: f,
                is: "AR.i.imageResourceInterface.createImageResource",
                uri: AR.__resourceUrl(e),
                onLoadedTriggerActive: null != c,
                onErrorTriggerActive: null != d
            }), AR.om.registerObjectForID(f, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return f
            }), this.__defineSetter__("onLoaded", function (a) {
                a = this.validateOnLoaded(a), c = a, AR.i.callAsync({
                    is: "AR.i.imageResourceInterface.setOnLoadedTriggerActive",
                    objectId: f,
                    onLoadedTriggerActive: null != a
                })
            }), this.__defineGetter__("onLoaded", function () {
                return c
            }), this.__defineSetter__("onError", function (a) {
                a = this.validateOnError(a), d = a, AR.i.callAsync({
                    is: "AR.i.imageResourceInterface.setOnErrorTriggerActive",
                    objectId: f,
                    onErrorTriggerActive: null != a
                })
            }), this.__defineGetter__("onError", function () {
                return d
            }), this.getUri = function () {
                return e
            }
        }, validateUri: function (a) {
            if (!AR.VALIDATE.isDefined(a)) throw AR.EXCEPTION.create("uri", AR.EXCEPTION.TYPE.UNDEFINED);
            if (!AR.VALIDATE.isString(a)) throw AR.EXCEPTION.create("uri", AR.EXCEPTION.TYPE.STRING);
            return a
        }, validateOnLoaded: function (a) {
            if (AR.VALIDATE.isDefined(a) && !AR.VALIDATE.isFunction(a)) throw AR.EXCEPTION.create("onLoaded", AR.EXCEPTION.TYPE.OBJECT, "function", typeof a);
            return a
        }, validateOnError: function (a) {
            if (AR.VALIDATE.isDefined(a) && !AR.VALIDATE.isFunction(a)) throw AR.EXCEPTION.create("onError", AR.EXCEPTION.TYPE.OBJECT, "function", typeof a);
            return a
        }, getWidth: function () {
            return AR.i.callSync({is: "AR.i.imageResourceInterface.getWidth", objectId: this.__id})
        }, getHeight: function () {
            return AR.i.callSync({is: "AR.i.imageResourceInterface.getHeight", objectId: this.__id})
        }, isLoaded: function () {
            return AR.i.callSync({is: "AR.i.imageResourceInterface.isLoaded", objectId: this.__id})
        }
    }), AR.Animation = AR.ARchitectObject.extend({
        init: function (a) {
            this._super();
            var b = null, c = null;
            return null != a && (b = _PROPERTY_VALIDATOR.validate("onStart", a.onStart, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c = _PROPERTY_VALIDATOR.validate("onFinish", a.onFinish, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), this.__defineSetter__("onStart", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onStart", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), b = a, AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.animationInterface.setOnStartTriggerActive",
                    onStartTriggerActive: null != b
                })
            }), this.__defineGetter__("onStart", function () {
                return b
            }), this.__defineSetter__("onFinish", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onFinish", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c = a, AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.animationInterface.setOnFinishTriggerActive",
                    onFinishTriggerActive: null != c
                })
            }), this.__defineGetter__("onFinish", function () {
                return c
            }), {onStartActive: null != b, onFinishActive: null != c}
        }, isRunning: function () {
            return AR.i.callSync({objectId: this.__id, is: "AR.i.animationInterface.isRunning"})
        }, start: function (a) {
            a = _PROPERTY_VALIDATOR.validate("loopTimes", a, _PROPERTY_VALIDATOR.TYPE.INT, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), a || 0 == a || (a = 1), this instanceof AR.PropertyAnimation && this.__handleDirtyPropertyOnStart(), AR.i.callAsync({
                objectId: this.__id,
                is: "AR.i.animationInterface.start",
                loopTimes: a
            })
        }, stop: function () {
            AR.i.callAsync({
                objectId: this.__id,
                is: "AR.i.animationInterface.stop"
            }), this instanceof AR.PropertyAnimation && this.__handleDirtyPropertyOnStop()
        }, pause: function () {
            AR.i.callAsync({objectId: this.__id, is: "AR.i.animationInterface.pause"})
        }, resume: function () {
            AR.i.callAsync({objectId: this.__id, is: "AR.i.animationInterface.resume"})
        }
    }), AR.ModelAnimation = AR.Animation.extend({
        init: function (a, b, c) {
            var d = this._super(c), e = _PROPERTY_VALIDATOR.validate("model", a, {
                    type: _PROPERTY_VALIDATOR.TYPE.CLASS,
                    ofType: AR.Model
                }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                f = _PROPERTY_VALIDATOR.validate("animationId", b, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                g = -1;
            c && c.duration && (g = _PROPERTY_VALIDATOR.validate("duration", c.duration, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE_INT, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY));
            var h = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: h,
                is: "AR.i.modelAnimationInterface.createModelAnimation",
                modelId: e.__id,
                animationId: f,
                duration: g,
                onStartTriggerActive: d.onStartActive,
                onFinishTriggerActive: d.onFinishActive
            }), AR.om.registerObjectForID(h, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return h
            })
        }
    }), AR.PropertyAnimation = AR.Animation.extend({
        init: function (a, b, c, d, e, f, g) {
            for (var h = this._super(g), i = _PROPERTY_VALIDATOR.validate("target", a, {
                type: _PROPERTY_VALIDATOR.TYPE.CLASS,
                ofType: AR.ARchitectObject
            }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), j = _PROPERTY_VALIDATOR.validate("property", b, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), k = i, l = j.split("."), m = 0; m < l.length - 1; m++) k = k[l[m]];
            if ((null == k[l[l.length - 1]] || "number" != typeof k[l[l.length - 1]]) && "scale" != j) throw AR.EXCEPTION.EXCEPTION_PREFIX + "Property " + j + " is not animateable.";
            var n = _PROPERTY_VALIDATOR.validate("start", c, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY);
            null != n && void 0 != n && (n = "[" + n + "]");
            var o = "[" + _PROPERTY_VALIDATOR.validate("end", d, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET) + "]",
                p = _PROPERTY_VALIDATOR.validate("duration", e, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
            f && f.type || (f = {type: AR.CONST.EASING_CURVE_TYPE.LINEAR});
            var q = this.validateEasingCurve(f), r = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: r,
                is: "AR.i.propertyAnimationInterface.createPropertyAnimation",
                targetId: i.__id,
                property: j,
                start: n,
                end: o,
                duration: p,
                easingCurve: AR.__toJSONString__(q),
                onStartTriggerActive: h.onStartActive,
                onFinishTriggerActive: h.onFinishActive
            }), AR.om.registerObjectForID(r, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return r
            }), this.__handleDirtyPropertyOnStart = function (a) {
                i.__alertDirty(j)
            }, this.__handleDirtyPropertyOnStop = function (a) {
                i.__removeDirt(j)
            }
        }, validateEasingCurve: function (a) {
            if (!AR.VALIDATE.isDefined(a)) throw AR.EXCEPTION.create("easingCurve", AR.EXCEPTION.TYPE.UNDEFINED);
            if (!AR.CONST.EASING_CURVE_TYPE.isValidEasingCurveType(a.type)) throw AR.EXCEPTION.create("easingCurve.type", AR.EXCEPTION.TYPE.ENUMERATION, "AR.CONST.EASING_CURVE_TYPE.___");
            if (AR.VALIDATE.isDefined(a.amplitude) && !AR.VALIDATE.isNumeric(a.amplitude)) throw AR.EXCEPTION.create("easingCurve.amplitude", AR.EXCEPTION.TYPE.FLOAT);
            if (AR.VALIDATE.isDefined(a.period) && !AR.VALIDATE.isNumeric(a.period)) throw AR.EXCEPTION.create("easingCurve.period", AR.EXCEPTION.TYPE.FLOAT);
            if (AR.VALIDATE.isDefined(a.overshoot) && !AR.VALIDATE.isNumeric(a.overshoot)) throw AR.EXCEPTION.create("easingCurve.overshoot", AR.EXCEPTION.TYPE.FLOAT);
            return a
        }
    }), AR.AnimationGroup = AR.Animation.extend({
        init: function (a, b, c) {
            var d = this._super(c);
            if (!AR.CONST.ANIMATION_GROUP_TYPE.isValidAnimationGroupType(a)) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.OBJECT, "AR.CONST.ANIMATION_GROUP_TYPE");
            var e = a, f = _PROPERTY_VALIDATOR.validate("animations", b, {
                type: _PROPERTY_VALIDATOR.TYPE.ARRAY,
                ofType: AR.Animation
            }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), g = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: g,
                is: "AR.i.animationGroupInterface.createAnimationGroup",
                type: e,
                animationIds: AR.__toJSONString__(AR.om.__getIds__(f)),
                onStartTriggerActive: d.onStartActive,
                onFinishTriggerActive: d.onFinishActive
            }), AR.om.registerObjectForID(g, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return g
            })
        }
    }), AR.Sound = AR.ARchitectObject.extend({
        init: function (a, b) {
            this._super();
            var c = this.validateUri(a), d = (AR.CONST.STATE.INITIALIZED, null), e = null, f = null;
            null != b && (d = this.validateOnX("onLoaded", b.onLoaded), e = this.validateOnX("onFinishedPlaying", b.onFinishedPlaying), f = this.validateOnX("onError", b.onError));
            var g = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: g,
                is: "AR.i.soundInterface.createSound",
                uri: AR.__resourceUrl(c),
                onLoadedTriggerActive: null != d,
                onFinishedPlayingTriggerActive: null != e,
                onErrorTriggerActive: null != f
            }), AR.om.registerObjectForID(g, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return g
            }), this.__defineSetter__("uri", function (a) {
                throw AR.EXCEPTION.create("uri", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("uri", function () {
                return c
            }), this.__defineSetter__("state", function (a) {
                throw AR.EXCEPTION.create("state", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("state", function () {
                return AR.i.callSync({objectId: g, is: "AR.i.soundInterface.getState"})
            }), this.__defineSetter__("onLoaded", function (a) {
                a = this.validateOnX("onLoaded", a), d = a, AR.i.callAsync({
                    objectId: g,
                    is: "AR.i.soundInterface.setOnLoadedTriggerActive",
                    onLoadedTriggerActive: null != a
                })
            }), this.__defineGetter__("onLoaded", function () {
                return d
            }), this.__defineSetter__("onFinishedPlaying", function (a) {
                a = this.validateOnX("onFinishedPlaying", a), e = a, AR.i.callAsync({
                    objectId: g,
                    is: "AR.i.soundInterface.setOnFinishedPlayingTriggerActive",
                    onFinishedPlayingTriggerActive: null != a
                })
            }), this.__defineGetter__("onFinishedPlaying", function () {
                return e
            }), this.__defineSetter__("onError", function (a) {
                a = this.validateOnX("onError", a), f = a, AR.i.callAsync({
                    objectId: g,
                    is: "AR.i.soundInterface.setOnErrorTriggerActive",
                    onErrorTriggerActive: null != a
                })
            }), this.__defineGetter__("onError", function () {
                return f
            })
        }, validateUri: function (a) {
            if (!AR.VALIDATE.isDefined(a)) throw AR.EXCEPTION.create("uri", AR.EXCEPTION.TYPE.UNDEFINED);
            if (!AR.VALIDATE.isString(a)) throw AR.EXCEPTION.create("uri", AR.EXCEPTION.TYPE.STRING);
            return a
        }, validateOnX: function (a, b) {
            if (AR.VALIDATE.isDefined(b) && !AR.VALIDATE.isFunction(b)) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.OBJECT, "function", typeof b);
            return b
        }, play: function (a) {
            if (void 0 === a) a = 1; else if (!AR.VALIDATE.isWholeNumber(a)) throw AR.EXCEPTION.create("loopTimes", AR.EXCEPTION.TYPE.INT);
            AR.i.callAsync({objectId: this.__id, is: "AR.i.soundInterface.play", loopTimes: a})
        }, stop: function () {
            AR.i.callAsync({objectId: this.__id, is: "AR.i.soundInterface.stop"})
        }, pause: function () {
            AR.i.callAsync({objectId: this.__id, is: "AR.i.soundInterface.pause"})
        }, resume: function () {
            AR.i.callAsync({objectId: this.__id, is: "AR.i.soundInterface.resume"})
        }, load: function () {
            AR.i.callAsync({objectId: this.__id, is: "AR.i.soundInterface.load"})
        }
    }), AR.Style = PClass.create({
        validateHex: function (a, b) {
            if (!AR.VALIDATE.isHex(b)) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.HEX);
            return b
        }, validateOutlineSize: function (a) {
            if (!AR.VALIDATE.isWholeNumber(a)) throw AR.EXCEPTION.create("outlineSize", AR.EXCEPTION.TYPE.INT);
            if (!AR.VALIDATE.isInRange(a, 0, 128)) throw AR.EXCEPTION.create("outlineSize", AR.EXCEPTION.TYPE.RANGE, "[0, 128]");
            return a
        }, validateFontStyle: function (a) {
            if (!a) return AR.CONST.FONT_STYLE.NORMAL;
            if (!AR.CONST.FONT_STYLE.isValidFontStyle(a)) throw AR.EXCEPTION.create("fontStyle", AR.EXCEPTION.TYPE.RANGE, "AR.CONST.FONT_STYLE.___");
            return a
        }, init: function (a, b) {
            var c = a, d = "#00000000", e = "#000000FF", f = 0, g = "#FFFFFF00", h = AR.CONST.FONT_STYLE.NORMAL,
                i = "#000000FF";
            null != b && (null != b.backgroundColor && (d = this.validateHex("backgroundColor", b.backgroundColor)), null != b.fillColor && (e = this.validateHex("fillColor", b.fillColor)), null != b.outlineSize && (f = this.validateOutlineSize(b.outlineSize)), null != b.outlineColor && (g = this.validateHex("outlineColor", b.outlineColor)), null != b.fontStyle && (h = this.validateFontStyle(b.fontStyle)), null != b.textColor && (i = this.validateHex("textColor", b.textColor))), this.__defineSetter__("backgroundColor", function (a) {
                a = this.validateHex("backgroundColor", a), d = a, c.setStyleInInterface(a)
            }), this.__defineGetter__("backgroundColor", function () {
                return d
            }), this.__defineSetter__("fillColor", function (a) {
                a = this.validateHex("fillColor", a), e = a, c.setStyleInInterface(a)
            }), this.__defineGetter__("fillColor", function () {
                return e
            }), this.__defineSetter__("outlineSize", function (a) {
                a = this.validateOutlineSize(a), f = a, c.setStyleInInterface(a)
            }), this.__defineGetter__("outlineSize", function () {
                return f
            }), this.__defineSetter__("outlineColor", function (a) {
                a = this.validateHex("outlineColor", a), g = a, c.setStyleInInterface(a)
            }), this.__defineGetter__("outlineColor", function () {
                return g
            }), this.__defineSetter__("fontStyle", function (a) {
                a = this.validateFontStyle(a), h = a, c.setStyleInInterface(a)
            }), this.__defineGetter__("fontStyle", function () {
                return h
            }), this.__defineSetter__("textColor", function (a) {
                a = this.validateHex("textColor", a), i = a, c.setStyleInInterface(a)
            }), this.__defineGetter__("textColor", function () {
                return i
            })
        }
    }), AR.CONST = {
        LOCATION_ACCURACY: {LOW: 1, MEDIUM: 2, HIGH: 3},
        UNKNOWN_ALTITUDE: -32768,
        HORIZONTAL_ANCHOR: {
            LEFT: 0, CENTER: 1, RIGHT: 2, isValidHorizontalAnchor: function (a) {
                switch (a) {
                    case AR.CONST.HORIZONTAL_ANCHOR.LEFT:
                    case AR.CONST.HORIZONTAL_ANCHOR.CENTER:
                    case AR.CONST.HORIZONTAL_ANCHOR.RIGHT:
                        return !0;
                    default:
                        return !1
                }
            }, toName: function (a) {
                switch (a) {
                    case AR.CONST.HORIZONTAL_ANCHOR.LEFT:
                        return "AR.CONST.HORIZONTAL_ANCHOR.LEFT";
                    case AR.CONST.HORIZONTAL_ANCHOR.CENTER:
                        return "AR.CONST.HORIZONTAL_ANCHOR.CENTER";
                    case AR.CONST.HORIZONTAL_ANCHOR.RIGHT:
                        return "AR.CONST.HORIZONTAL_ANCHOR.RIGHT";
                    default:
                        return null
                }
            }
        },
        VERTICAL_ANCHOR: {
            TOP: 3, MIDDLE: 4, BOTTOM: 5, isValidVerticalAnchor: function (a) {
                switch (a) {
                    case AR.CONST.VERTICAL_ANCHOR.TOP:
                    case AR.CONST.VERTICAL_ANCHOR.MIDDLE:
                    case AR.CONST.VERTICAL_ANCHOR.BOTTOM:
                        return !0;
                    default:
                        return !1
                }
            }, toName: function (a) {
                switch (a) {
                    case AR.CONST.VERTICAL_ANCHOR.TOP:
                        return "AR.CONST.VERTICAL_ANCHOR.TOP";
                    case AR.CONST.VERTICAL_ANCHOR.MIDDLE:
                        return "AR.CONST.VERTICAL_ANCHOR.MIDDLE";
                    case AR.CONST.VERTICAL_ANCHOR.BOTTOM:
                        return "AR.CONST.VERTICAL_ANCHOR.BOTTOM";
                    default:
                        return null
                }
            }
        },
        EASING_CURVE_TYPE: {
            LINEAR: "linear",
            EASE_IN_QUAD: "easeInQuad",
            EASE_OUT_QUAD: "easeOutQuad",
            EASE_IN_OUT_QUAD: "easeInOutQuad",
            EASE_OUT_IN_QUAD: "easeOutInQuad",
            EASE_IN_CUBIC: "easeInCubic",
            EASE_OUT_CUBIC: "easeOutCubic",
            EASE_IN_OUT_CUBIC: "easeInOutCubic",
            EASE_OUT_IN_CUBIC: "easeOutInCubic",
            EASE_IN_QUAT: "easeInQuat",
            EASE_OUT_QUAT: "easeOutQuat",
            EASE_IN_OUT_QUAT: "easeInOutQuat",
            EASE_OUT_IN_QUAT: "easeOutInQuat",
            EASE_IN_QUINT: "easeInQuint",
            EASE_OUT_QUINT: "easeOutQuint",
            EASE_IN_OUT_QUINT: "easeInOutQuint",
            EASE_OUT_IN_QUINT: "easeOutInQuint",
            EASE_IN_ELASTIC: "easeInElastic",
            EASE_OUT_ELASTIC: "easeOutElastic",
            EASE_IN_OUT_ELASTIC: "easeInOutElastic",
            EASE_OUT_IN_ELASTIC: "easeOutInElastic",
            EASE_IN_BACK: "easeInBack",
            EASE_OUT_BACK: "easeOutBack",
            EASE_IN_OUT_BACK: "easeInOutBack",
            EASE_OUT_IN_BACK: "easeOutInBack",
            EASE_IN_SINE: "easeInSine",
            EASE_OUT_SINE: "easeOutSine",
            EASE_IN_OUT_SINE: "easeInOutSine",
            EASE_OUT_IN_SINE: "easeOutInSine",
            EASE_IN_EXPO: "easeInExpo",
            EASE_OUT_EXPO: "easeOutExpo",
            EASE_IN_OUT_EXPO: "easeInOutExpo",
            EASE_OUT_IN_EXPO: "easeOutInExpo",
            EASE_IN_CIRC: "easeInCirc",
            EASE_OUT_CIRC: "easeOutCirc",
            EASE_IN_OUT_CIRC: "easeInOutCirc",
            EASE_OUT_IN_CIRC: "easeOutInCirc",
            EASE_IN_BOUNCE: "easeInBounce",
            EASE_OUT_BOUNCE: "easeOutBounce",
            EASE_IN_OUT_BOUNCE: "easeInOutBounce",
            EASE_OUT_IN_BOUNCE: "easeOutInBounce",
            EASE_IN_CURVE: "easeInCurve",
            EASE_OUT_CURVE: "easeOutCurve",
            isValidEasingCurveType: function (a) {
                switch (a) {
                    case AR.CONST.EASING_CURVE_TYPE.LINEAR:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_QUAD:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_QUAD:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_OUT_QUAD:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_IN_QUAD:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_CUBIC:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_CUBIC:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_OUT_CUBIC:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_IN_CUBIC:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_QUAT:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_QUAT:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_OUT_QUAT:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_IN_QUAT:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_QUINT:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_QUINT:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_OUT_QUINT:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_IN_QUINT:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_ELASTIC:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_ELASTIC:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_OUT_ELASTIC:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_IN_ELASTIC:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_BACK:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_BACK:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_OUT_BACK:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_IN_BACK:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_SINE:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_SINE:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_OUT_SINE:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_IN_SINE:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_EXPO:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_EXPO:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_OUT_EXPO:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_IN_EXPO:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_CIRC:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_CIRC:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_OUT_CIRC:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_IN_CIRC:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_BOUNCE:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_BOUNCE:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_OUT_BOUNCE:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_IN_BOUNCE:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_IN_CURVE:
                    case AR.CONST.EASING_CURVE_TYPE.EASE_OUT_CURVE:
                        return !0;
                    default:
                        return !1
                }
            }
        },
        ANIMATION_GROUP_TYPE: {
            PARALLEL: "parallel", SEQUENTIAL: "sequential", isValidAnimationGroupType: function (a) {
                switch (a) {
                    case AR.CONST.ANIMATION_GROUP_TYPE.PARALLEL:
                    case AR.CONST.ANIMATION_GROUP_TYPE.SEQUENTIAL:
                        return !0;
                    default:
                        return !1
                }
            }
        },
        FONT_STYLE: {
            NORMAL: "normal", BOLD: "bold", ITALIC: "italic", isValidFontStyle: function (a) {
                switch (a) {
                    case AR.CONST.FONT_STYLE.NORMAL:
                    case AR.CONST.FONT_STYLE.BOLD:
                    case AR.CONST.FONT_STYLE.ITALIC:
                        return !0;
                    default:
                        return !1
                }
            }, toName: function (a) {
                switch (a) {
                    case AR.CONST.FONT_STYLE.NORMAL:
                        return "AR.CONST.FONT_STYLE.NORMAL";
                    case AR.CONST.FONT_STYLE.BOLD:
                        return "AR.CONST.FONT_STYLE.BOLD";
                    case AR.CONST.FONT_STYLE.ITALIC:
                        return "AR.CONST.FONT_STYLE.ITALIC";
                    default:
                        return null
                }
            }
        },
        STATE: {
            ERROR: -1, INITIALIZED: 0, LOADING: 1, LOADED: 2, PLAYING: 3, PAUSED: 4, toName: function (a) {
                switch (a) {
                    case AR.CONST.STATE.ERROR:
                        return "AR.CONST.STATE.ERROR";
                    case AR.CONST.STATE.INITIALIZED:
                        return "AR.CONST.STATE.INITIALIZED";
                    case AR.CONST.STATE.LOADING:
                        return "AR.CONST.STATE.LOADING";
                    case AR.CONST.STATE.LOADED:
                        return "AR.CONST.STATE.LOADED";
                    case AR.CONST.STATE.PLAYING:
                        return "AR.CONST.STATE.PLAYING";
                    case AR.CONST.STATE.PAUSED:
                        return "AR.CONST.STATE.PAUSED";
                    default:
                        return null
                }
            }
        },
        CLICK_BEHAVIOR: {CLICK: "touchClick", TOUCH_UP: "touchUp", TOUCH_DOWN: "touchDown"},
        CAMERA_POSITION: {FRONT: "front", BACK: "back"},
        CAMERA_FOCUS_MODE: {ONCE: "once", CONTINUOUS: "continuous", OFF: "off"},
        CLOUD_RECOGNITION_SERVER_REGION: {AMERICAS: 1, EUROPE: 3},
        CLOUD_RECOGNITION_SERVER_URL: {AMERICAS: "AMERICAS", EUROPE: "EUROPE"},
        INITIAL_INSTANT_TRACKING_PLANE_ORIENTATION: {HORIZONTAL: 0, VERTICAL: 90},
        IMAGE_RECOGNITION_RANGE_EXTENSION: {
            ON: 1, OFF: 0, AUTO: 2, isValidRangeExtension: function (a) {
                switch (a) {
                    case AR.CONST.IMAGE_RECOGNITION_RANGE_EXTENSION.ON:
                    case AR.CONST.IMAGE_RECOGNITION_RANGE_EXTENSION.OFF:
                    case AR.CONST.IMAGE_RECOGNITION_RANGE_EXTENSION.AUTO:
                        return !0;
                    default:
                        return !1
                }
            }
        },
        INSTANT_TARGET_EXPANSION_POLICY: {ALLOW_EXPANSION: 0, DISALLOW_EXPANSION: 1},
        TRACKER_EFFICIENCY_MODE: {
            HIGH_ACCURACY: 0, ENERGY_EFFICIENCY: 1, isValidTrackerEfficiencyMode: function (a) {
                switch (a) {
                    case AR.CONST.TRACKER_EFFICIENCY_MODE.HIGH_ACCURACY:
                    case AR.CONST.TRACKER_EFFICIENCY_MODE.ENERGY_EFFICIENCY:
                        return !0;
                    default:
                        return !1
                }
            }
        }
    }, AR.OneTimeUseContextConstructionPlan = PClass.create({
        validateFunction: function (a, b) {
            if (AR.VALIDATE.isDefined(b) && !AR.VALIDATE.isFunction(b)) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.OBJECT, "function", typeof b);
            return b
        }, init: function () {
            var a = null;
            _onScreenClick = null;
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o;
            _destroyAll = function () {
                AR.om.destroyAllObjects(!0), AR.i.callAsync({is: "AR.i.contextInterface.destroyAll"})
            }, _clickBehavior = AR.CONST.CLICK_BEHAVIOR.CLICK, _cloudRecognitionServerRegionOnSuccess = null, _cloudRecognitionServerRegionOnError = null, this.__defineSetter__("onLocationChanged", function (b) {
                b = this.validateFunction("onLocationChanged", b), a = b, AR.i.callAsync({
                    is: "AR.i.contextInterface.setOnLocationChangedTriggerActive",
                    onLocationChangedTriggerActive: null != a
                })
            }), this.__defineGetter__("onLocationChanged", function () {
                return a
            }), this.__defineSetter__("onScreenClick", function (a) {
                a = this.validateFunction("onScreenClick", a), _onScreenClick = a, AR.i.callAsync({
                    is: "AR.i.contextInterface.setOnScreenClickTriggerActive",
                    onScreenClickTriggerActive: null != _onScreenClick
                })
            }), this.__defineGetter__("onScreenClick", function () {
                return _onScreenClick
            }), this.__defineSetter__("onDragBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDragBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), b = a, AR.i.callAsync({
                    objectId: this.__id,
                    onDragBeganTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOnDragBeganTriggerActive"
                })
            }), this.__defineGetter__("onDragBegan", function () {
                return b
            }), this.__defineSetter__("onDragChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDragChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c = a, AR.i.callAsync({
                    objectId: this.__id,
                    onDragChangedTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOnDragChangedTriggerActive"
                })
            }), this.__defineGetter__("onDragChanged", function () {
                return c
            }), this.__defineSetter__("onDragEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDragEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), d = a, AR.i.callAsync({
                    objectId: this.__id,
                    onDragEndedTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOnDragEndedTriggerActive"
                })
            }), this.__defineGetter__("onDragEnded", function () {
                return d
            }), this.__defineSetter__("onPanBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onPanBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), e = a, AR.i.callAsync({
                    objectId: this.__id,
                    onPanBeganTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOnPanBeganTriggerActive"
                })
            }), this.__defineGetter__("onPanBegan", function () {
                return e
            }), this.__defineSetter__("onPanChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onPanChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), f = a, AR.i.callAsync({
                    objectId: this.__id,
                    onPanChangedTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOnPanChangedTriggerActive"
                })
            }), this.__defineGetter__("onPanChanged", function () {
                return f
            }), this.__defineSetter__("onPanEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onPanEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), g = a, AR.i.callAsync({
                    objectId: this.__id,
                    onPanEndedTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOnPanEndedTriggerActive"
                })
            }), this.__defineGetter__("onPanEnded", function () {
                return g
            }), this.__defineSetter__("onRotationBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onRotationBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), h = a, AR.i.callAsync({
                    objectId: this.__id,
                    onRotationBeganTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOnRotationBeganTriggerActive"
                })
            }), this.__defineGetter__("onRotationBegan", function () {
                return h
            }), this.__defineSetter__("onRotationChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onRotationChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), i = a, AR.i.callAsync({
                    objectId: this.__id,
                    onRotationChangedTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOnRotationChangedTriggerActive"
                })
            }), this.__defineGetter__("onRotationChanged", function () {
                return i
            }), this.__defineSetter__("onRotationEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onRotationEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), j = a, AR.i.callAsync({
                    objectId: this.__id,
                    onRotationEndedTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOnRotationEndedTriggerActive"
                })
            }), this.__defineGetter__("onRotationEnded", function () {
                return j
            }), this.__defineSetter__("onScaleBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onScaleBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), k = a, AR.i.callAsync({
                    objectId: this.__id,
                    onScaleBeganTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOnScaleBeganTriggerActive"
                })
            }), this.__defineGetter__("onScaleBegan", function () {
                return k
            }), this.__defineSetter__("onScaleChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onScaleChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), l = a, AR.i.callAsync({
                    objectId: this.__id,
                    onScaleChangedTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOnScaleChangedTriggerActive"
                })
            }), this.__defineGetter__("onScaleChanged", function () {
                return l
            }), this.__defineSetter__("onScaleEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onScaleEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), m = a, AR.i.callAsync({
                    objectId: this.__id,
                    onScaleEndedTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOnScaleEndedTriggerActive"
                })
            }), this.__defineGetter__("onScaleEnded", function () {
                return m
            }), this.__defineSetter__("destroyAll", function (a) {
                throw AR.EXCEPTION.create("destroyAll", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("destroyAll", function () {
                return _destroyAll
            }), this.__defineSetter__("clickBehavior", function (a) {
                if (a != AR.CONST.CLICK_BEHAVIOR.CLICK && a != AR.CONST.CLICK_BEHAVIOR.TOUCH_UP && a != AR.CONST.CLICK_BEHAVIOR.TOUCH_DOWN) throw AR.EXCEPTION.create("clickBehavior", AR.EXCEPTION.TYPE.OBJECT, "CLICK_BEHAVIOR.___", typeof a);
                _clickBehavior = a, AR.js.clickBehavior && AR.js.clickBehavior.setClickBehavior(_clickBehavior)
            }), this.__defineGetter__("clickBehavior", function () {
                return _clickBehavior
            }), this.__defineSetter__("cloudRecognitionServerRegionOnSuccess", function (a) {
                throw AR.EXCEPTION.create("cloudRecognitionServerRegionOnSuccess", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("cloudRecognitionServerRegionOnSuccess", function () {
                return _cloudRecognitionServerRegionOnSuccess
            }), this.__defineSetter__("cloudRecognitionServerRegionOnError", function (a) {
                throw AR.EXCEPTION.create("cloudRecognitionServerRegionOnError", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("cloudRecognitionServerRegionOnError", function () {
                return _cloudRecognitionServerRegionOnError
            }), this.__defineSetter__("on2FingerGestureStarted", function (a) {
                a = _PROPERTY_VALIDATOR.validate("on2FingerGestureStarted", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), n = a, AR.i.callAsync({
                    objectId: this.__id,
                    on2FingerGestureStartedTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOn2FingerGestureStartedTriggerActive"
                })
            }), this.__defineGetter__("on2FingerGestureStarted", function () {
                return n
            }), this.__defineSetter__("on2FingerGestureEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("on2FingerGestureEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), o = a, AR.i.callAsync({
                    objectId: this.__id,
                    on2FingerGestureEndedTriggerActive: null != a,
                    is: "AR.i.contextInterface.setOn2FingerGestureEndedTriggerActive"
                })
            }), this.__defineGetter__("on2FingerGestureEnded", function () {
                return o
            }), this.__defineSetter__("versionNumber", function () {
                throw AR.EXCEPTION.create("versionNumber", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("versionNumber", function () {
                return AR.i.callSync({is: "AR.i.contextInterface.getVersionNumber"})
            });
            var p = function () {
                var a = 5e4, b = 10, c = 2e4, d = .1, e = 1;
                this.__defineGetter__("minScalingDistance", function () {
                    return b
                }), this.__defineSetter__("minScalingDistance", function (a) {
                    a = _PROPERTY_VALIDATOR.validate("scene.minScalingDistance", a, _PROPERTY_VALIDATOR.TYPE.POSITIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b = a, f()
                }), this.__defineGetter__("maxScalingDistance", function () {
                    return c
                }), this.__defineSetter__("maxScalingDistance", function (a) {
                    a = _PROPERTY_VALIDATOR.validate("scene.maxScalingDistance", a, _PROPERTY_VALIDATOR.TYPE.POSITIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), c = a, f()
                }), this.__defineGetter__("scalingFactor", function () {
                    return d
                }), this.__defineSetter__("scalingFactor", function (a) {
                    a = _PROPERTY_VALIDATOR.validate("scene.scalingFactor", a, _PROPERTY_VALIDATOR.TYPE.UNIT_INTERVAL, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), d = a, f()
                });
                var f = function () {
                    AR.i.callAsync({
                        is: "AR.i.contextInterface.setDistanceBasedScalingParameters",
                        dbs: d,
                        dCutOffMin: b,
                        dCutOffMax: c
                    })
                };
                this.__defineGetter__("globalScale", function () {
                    return e
                }), this.__defineSetter__("globalScale", function (a) {
                    a = _PROPERTY_VALIDATOR.validate("scene.globalScale", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), e = a, AR.i.callAsync({
                        is: "AR.i.contextInterface.setGlobalSceneScale",
                        globalSceneScale: e
                    })
                }), this.__defineGetter__("cullingDistance", function () {
                    return a
                }), this.__defineSetter__("cullingDistance", function (b) {
                    b = _PROPERTY_VALIDATOR.validate("scene.cullingDistance", b, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), a = b, AR.i.callAsync({
                        is: "AR.i.contextInterface.setCullingDistance",
                        cullingDistance: a
                    })
                })
            }, q = new p;
            this.__defineSetter__("scene", function (a) {
                throw AR.EXCEPTION.create("scene", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("scene", function () {
                return q
            }), AR.OneTimeUseContextConstructionPlan = null
        }, startVideoPlayer: function (a) {
            if (!AR.VALIDATE.isDefined(a)) throw AR.EXCEPTION.create("uri", AR.EXCEPTION.TYPE.UNDEFINED);
            if (!AR.VALIDATE.isString(a)) throw AR.EXCEPTION.create("uri", AR.EXCEPTION.TYPE.STRING);
            AR.i.callAsync({is: "AR.i.contextInterface.startVideoPlayer", uri: AR.__resourceUrl(a)})
        }, openInBrowser: function (a, b) {
            if (!AR.VALIDATE.isDefined(a)) throw AR.EXCEPTION.create("url", AR.EXCEPTION.TYPE.UNDEFINED);
            if (AR.VALIDATE.isDefined(b) || (b = !1), !AR.VALIDATE.isBoolean(b)) throw AR.EXCEPTION.create("forceNativeBrowser", AR.EXCEPTION.TYPE.BOOLEAN);
            AR.i.callAsync({is: "AR.i.contextInterface.openInBrowser", url: a, forceNativeBrowser: b})
        }, setCloudRecognitionServerRegion: function (a, b) {
            if (!AR.VALIDATE.isEnumerated(a, AR.CONST.CLOUD_RECOGNITION_SERVER_REGION)) throw AR.EXCEPTION.create("region", AR.EXCEPTION.TYPE.ENUMERATION);
            b = b || {};
            var c = _PROPERTY_VALIDATOR.validate("serverUrl", b.serverUrl ? b.serverUrl : "", _PROPERTY_VALIDATOR.TYPE.STRING);
            b && (_cloudRecognitionServerRegionOnSuccess = _PROPERTY_VALIDATOR.validate("onSuccess", b.onSuccess, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), _cloudRecognitionServerRegionOnError = _PROPERTY_VALIDATOR.validate("onError", b.onError, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), AR.i.callAsync({
                is: "AR.i.setCloudRecognitionServerRegion",
                region: a,
                url: c,
                onSuccessTriggerActive: null != _cloudRecognitionServerRegionOnSuccess,
                onErrorTriggerActive: null != _cloudRecognitionServerRegionOnError
            })
        }, activateBatchCreation: function () {
            AR.bm.setBatchCreationActive()
        }, deactivateBatchCreation: function () {
            AR.bm.setBatchCreationDeactivated()
        }
    }), AR.context = new AR.OneTimeUseContextConstructionPlan, AR.OneTimeUseContextConstructionPlan = PClass.create({
        validateFunction: function (a, b) {
            if (AR.VALIDATE.isDefined(b) && !AR.VALIDATE.isFunction(b)) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.OBJECT, "function", typeof b);
            return b
        }, init: function () {
            var a = function () {
                var a = !0, b = !1, c = 1, d = AR.CONST.CAMERA_POSITION.BACK, e = AR.CONST.CAMERA_FOCUS_MODE.CONTINUOUS,
                    f = 0, g = null;
                this.__defineGetter__("enabled", function () {
                    return a
                }), this.__defineSetter__("enabled", function (b) {
                    b = _PROPERTY_VALIDATOR.validate("camera.enabled", b, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), a = b, AR.i.callAsync({
                        is: "AR.i.hardwareInterface.setServiceEnabled",
                        service: "camera",
                        enabled: a
                    })
                }), this.__defineGetter__("flashlight", function () {
                    return b
                }), this.__defineSetter__("flashlight", function (a) {
                    a = _PROPERTY_VALIDATOR.validate("camera.flashlight", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b = a, AR.i.callAsync({
                        is: "AR.i.hardwareInterface.setFlashlightEnabled",
                        enabled: a
                    })
                }), this.__defineGetter__("flashlightAvailable", function () {
                    return AR.i.callSync({is: "AR.i.hardwareInterface.isFlashlightAvailable"})
                }), this.__defineSetter__("flashlightAvailable", function () {
                    throw AR.EXCEPTION.create("flashlightAvailable", AR.ERROR.TYPE.IMMUTABLE)
                }), validatePosition = function (a) {
                    if (!AR.VALIDATE.isEnumerated(a, AR.CONST.CAMERA_POSITION)) throw AR.EXCEPTION.create("position", AR.ERROR.TYPE.ENUMERATION, "AR.CONST.CAMERA_POSITION.___");
                    return a
                }, this.__defineGetter__("position", function () {
                    return AR.i.callSync({is: "AR.i.hardwareInterface.camera_getCameraPosition"})
                }), this.__defineSetter__("position", function (a) {
                    d = validatePosition(a), AR.i.callAsync({
                        is: "AR.i.hardwareInterface.camera_setCameraPosition",
                        position: a
                    })
                }), this.__defineGetter__("zoom", function () {
                    return c
                }), this.__defineSetter__("zoom", function (a) {
                    a = _PROPERTY_VALIDATOR.validate("zoom", a, _PROPERTY_VALIDATOR.TYPE.POSITIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), c = a, AR.i.callAsync({
                        is: "AR.i.hardwareInterface.camera_setCameraZoomLevel",
                        level: a
                    })
                }), validateFocusMode = function (a) {
                    if (!AR.VALIDATE.isEnumerated(a, AR.CONST.CAMERA_FOCUS_MODE)) throw AR.EXCEPTION.create("focusMode", AR.EXCEPTION.TYPE.ENUMERATION, "AR.CONST.CAMERA_FOCUS_MODE.___");
                    return a
                }, this.__defineGetter__("focusMode", function () {
                    return e
                }), this.__defineSetter__("focusMode", function (a) {
                    e = validateFocusMode(a), AR.i.callAsync({
                        is: "AR.i.hardwareInterface.camera_setCameraFocusMode",
                        mode: a
                    })
                }), this.__defineGetter__("manualFocusAvailable", function () {
                    return AR.i.callSync({is: "AR.i.hardwareInterface.camera_isCameraManualFocusAvailable"})
                }), this.__defineSetter__("manualFocusAvailable", function () {
                    throw AR.EXCEPTION.create("manualFocusAvailable", AR.EXCEPTION.TYPE.IMMUTABLE)
                }), this.__defineGetter__("manualFocusDistance", function () {
                    return AR.i.callSync({is: "AR.i.hardwareInterface.camera_getCameraManualFocusDistance"})
                }), this.__defineSetter__("manualFocusDistance", function (a) {
                    a = _PROPERTY_VALIDATOR.validate("manualFocusDistance", a, _PROPERTY_VALIDATOR.TYPE.POSITIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET, function (a, b) {
                        if (b > 100) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.RANGE, "(0, 100)");
                        return b
                    }), f = a, AR.i.callAsync({
                        is: "AR.i.hardwareInterface.camera_setCameraManualFocusDistance",
                        distance: a
                    })
                }), this.setFocusPointOfInterest = function (a) {
                    AR.i.callAsync({is: "AR.i.hardwareInterface.camera_setFocusPointOfInterest", x: a.x, y: a.y})
                }, this.setExposurePointOfInterest = function (a) {
                    AR.i.callAsync({is: "AR.i.hardwareInterface.camera_setExposurePointOfInterest", x: a.x, y: a.y})
                }, this.__defineGetter__("features", function () {
                    return AR.i.callSync({is: "AR.i.hardwareInterface.getCameraFeatures"})
                }), this.__defineSetter__("features", function () {
                    throw AR.EXCEPTION.create("features", AR.EXCEPTION.TYPE.IMMUTABLE)
                }), this.__defineGetter__("onError", function () {
                    return g
                }), this.__defineSetter__("onError", function (a) {
                    g = _PROPERTY_VALIDATOR.validate("onError", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                        is: "AR.i.hardwareInterface.camera_setOnErrorTriggerActive",
                        onErrorTriggerActive: null !== g
                    })
                })
            }, b = function () {
                _enabled = !0, this.__defineGetter__("enabled", function () {
                    return _enabled
                }), this.__defineSetter__("enabled", function (a) {
                    a = _PROPERTY_VALIDATOR.validate("sensors.enabled", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), _enabled = a, AR.i.callAsync({
                        is: "AR.i.hardwareInterface.setServiceEnabled",
                        service: "sensors",
                        enabled: _enabled
                    })
                });
                var a = function () {
                    this.__defineGetter__("correctionAngle", function () {
                        return AR.i.callSync({is: "AR.i.hardwareInterface.compass_getCorrectionAngle"})
                    }), this.__defineSetter__("correctionAngle", function (a) {
                        a = _PROPERTY_VALIDATOR.validate("correctionAngle", a, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                            is: "AR.i.hardwareInterface.compass_setCorrectionAngle",
                            correctionAngle: a
                        })
                    })
                }, b = new a;
                this.__defineGetter__("compass", function () {
                    return b
                }), this.__defineSetter__("compass", function () {
                    throw AR.EXCEPTION.create("compass", AR.EXCEPTION.TYPE.IMMUTABLE)
                })
            }, c = this, d = function () {
                this.SmartAvailability = {
                    INDETERMINATE_QUERY_FAILED: 0,
                    CHECKING_QUERY_ONGOING: 1,
                    UNSUPPORTED: 2,
                    SUPPORTED_UPDATE_REQUIRED: 3,
                    SUPPORTED: 4
                }, this.isPlatformAssistedTrackingSupported = function () {
                    AR.i.callAsync({is: "AR.i.hardwareInterface.arKitCore_isDeviceSupported"})
                }, this.__defineSetter__("onPlatformAssistedTrackingAvailabilityChanged", function (a) {
                    a = c.validateFunction("onPlatformAssistedTrackingAvailabilityChanged", a), _onPlatformAssistedTrackingAvailabilityChanged = a, AR.i.callAsync({
                        is: "AR.i.hardwareInterface.setOnPlatformAssistedTrackingAvailabilityChangedTriggerActive",
                        onPlatformAssistedTrackingAvailabilityChangedTriggerActive: null != _onPlatformAssistedTrackingAvailabilityChanged
                    })
                }), this.__defineGetter__("onPlatformAssistedTrackingAvailabilityChanged", function () {
                    return _onPlatformAssistedTrackingAvailabilityChanged
                })
            }, e = new a;
            this.__defineGetter__("camera", function () {
                return e
            }), this.__defineSetter__("camera", function () {
                throw AR.EXCEPTION.create("camera", AR.EXCEPTION.TYPE.IMMUTABLE)
            });
            var f = new b;
            this.__defineGetter__("sensors", function () {
                return f
            }), this.__defineSetter__("sensors", function () {
                throw AR.EXCEPTION.create("sensors", AR.EXCEPTION.TYPE.IMMUTABLE)
            });
            var g = new d;
            this.__defineGetter__("smart", function () {
                return g
            }), this.__defineSetter__("smart", function () {
                throw AR.EXCEPTION.create("smart", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), AR.OneTimeUseContextConstructionPlan = null
        }
    }), AR.hardware = new AR.OneTimeUseContextConstructionPlan, AR.OneTimeUseLoggerConstructionPlan = function () {
        var a = !1, b = [], c = null, d = !1, e = !1, f = [], g = [];
        this.registerRegistrar = function (a, b) {
            c = a, e = b || !1
        }, this.changeHTMLLogLevelEnabled = function (a, b) {
            b ? -1 == f.indexOf(a) && f.push(a) : -1 != f.indexOf(a) && f.splice(f.indexOf(a), 1), i()
        }, this.changePlatformLogLevelEnabled = function (a, b) {
            b ? -1 == g.indexOf(a) && g.push(a) : -1 != g.indexOf(a) && g.splice(g.indexOf(a), 1)
        }, this.toggleLogLevelEnabled = function (a) {
            this.changeHTMLLogLevelEnabled(a, -1 == f.indexOf(a))
        }, this.togglePlatformLogLevelEnabled = function (a) {
            this.changePlatformLogLevelEnabled(a, -1 == g.indexOf(a))
        }, this.error = function (a) {
            h(new AR.__LOGGER_MESSAGE__("ERROR", a))
        }, this.warning = function (a) {
            h(new AR.__LOGGER_MESSAGE__("WARNING", a))
        }, this.info = function (a) {
            h(new AR.__LOGGER_MESSAGE__("INFO", a))
        }, this.debug = function (a) {
            h(new AR.__LOGGER_MESSAGE__("DEBUG", a))
        };
        var h = function (a) {
            c && (b.push(a), -1 != f.indexOf(a.type) && c.appendLine(a.toString(e), a.color)), d && -1 != g.indexOf(a.type) && AR.i.callAsync({
                is: "AR.i.platformInterface.log",
                logLevel: g.indexOf(a.type),
                message: a.message
            })
        }, i = function () {
            if (c) {
                c.clearConsole();
                for (var a = b.length, d = 0; d < a; d++) -1 != f.indexOf(b[d].type) && c.appendLine(b[d].toString(e), b[d].color)
            }
        };
        this.clearConsole = function () {
            b = [], c && c.clearConsole()
        }, this.activateDebugMode = function () {
            a || __ARCHITECT_LOGGER_FRAMEWORK__ && (a = !0, __ARCHITECT_LOGGER_FRAMEWORK__.setDebugModeEnabled(!0))
        }, this.setHTMLLoggingEnabled = function (a) {
            __ARCHITECT_LOGGER_FRAMEWORK__ && __ARCHITECT_LOGGER_FRAMEWORK__.setDebugModeEnabled(a)
        }, this.setPlatformLoggingEnabled = function (a) {
            d = a, this.changePlatformLogLevelEnabled("ERROR", !0), this.changePlatformLogLevelEnabled("WARNING", !0), this.changePlatformLogLevelEnabled("INFO", !0), this.changePlatformLogLevelEnabled("DEBUG", !0)
        }, AR.OneTimeUseLoggerConstructionPlan = null
    }, AR.logger = new AR.OneTimeUseLoggerConstructionPlan, AR.__LOGGER_MESSAGE__ = function (a, b) {
        switch (this.type = a, this.date = new Date, this.message = b, this.color = null, a) {
            case"ERROR":
                this.color = "red";
                break;
            case"WARNING":
                this.color = "orange";
                break;
            case"INFO":
                this.color = "green";
                break;
            default:
                this.color = "black"
        }
        this.toString = function (a) {
            var b = this.type.substring(0, 1) + " " + c(this.date) + " - " + this.message;
            return a ? "<font color=" + this.color + ">" + b + "</font>" : b
        };
        var c = function (a) {
            var b = a.getHours(), c = a.getMinutes(), e = a.getSeconds();
            return d(b) + ":" + d(c) + ":" + d(e)
        }, d = function (a) {
            return a < 10 ? "0" + a : a
        }
    }, AR.OneTimeUseRadarConstructionPlan = PClass.create({
        init: function () {
            var a, b, c, d = null, e = !1, f = .5, g = .5, h = .5, i = new AR._NorthIndicator, j = 0, k = 0, l = this;
            this.__defineSetter__("enabled", function (a) {
                a = _PROPERTY_VALIDATOR.validate("enabled", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), e = a, AR.i.callAsync({
                    is: "AR.i.radarInterface.setEnabled",
                    enabled: a
                })
            }), this.__defineGetter__("enabled", function () {
                return e
            }), this.__defineSetter__("background", function (b) {
                b = _PROPERTY_VALIDATOR.validate("background", b, {
                    type: _PROPERTY_VALIDATOR.TYPE.CLASS,
                    ofType: AR.ImageResource
                }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), a = b, AR.i.callAsync({
                    is: "AR.i.radarInterface.setBackground",
                    backgroundId: null == b || void 0 == b ? null : b.__id
                })
            }), this.__defineGetter__("background", function () {
                return a
            }), this.__defineSetter__("centerX", function (a) {
                a = _PROPERTY_VALIDATOR.validate("centerX", a, _PROPERTY_VALIDATOR.TYPE.UNIT_INTERVAL, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), f = a, AR.i.callAsync({
                    is: "AR.i.radarInterface.setCenterX",
                    centerX: a
                })
            }), this.__defineGetter__("centerX", function () {
                return f
            }), this.__defineSetter__("centerY", function (a) {
                a = _PROPERTY_VALIDATOR.validate("centerY", a, _PROPERTY_VALIDATOR.TYPE.UNIT_INTERVAL, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), g = a, AR.i.callAsync({
                    is: "AR.i.radarInterface.setCenterY",
                    centerY: a
                })
            }), this.__defineGetter__("centerY", function () {
                return g
            }), this.__defineSetter__("radius", function (a) {
                a = _PROPERTY_VALIDATOR.validate("radius", a, _PROPERTY_VALIDATOR.TYPE.UNIT_INTERVAL, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), h = a, AR.i.callAsync({
                    is: "AR.i.radarInterface.setRadius",
                    radius: a
                })
            }), this.__defineGetter__("radius", function () {
                return h
            }), this.__defineSetter__("container", function (a) {
                _PROPERTY_VALIDATOR.validate("container", a, _PROPERTY_VALIDATOR.TYPE.DOM_ELEMENT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), d = a, this.notifyUpdateRadarPosition()
            }), this.__defineGetter__("container", function () {
                return d
            }), this.__defineSetter__("maxDistance", function (a) {
                a = _PROPERTY_VALIDATOR.validate("maxDistance", a, _PROPERTY_VALIDATOR.TYPE.POSITIVE, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), b = a, AR.i.callAsync({
                    is: "AR.i.radarInterface.setMaxDistance",
                    maxDistance: a || -1
                })
            }), this.__defineGetter__("maxDistance", function () {
                return b
            }), this.__defineSetter__("northIndicator", function (a) {
                throw AR.EXCEPTION.create("northIndicator", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("northIndicator", function () {
                return i
            }), this.__defineSetter__("onClick", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onClick", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c = a, AR.i.callAsync({
                    is: "AR.i.radarInterface.setOnClickTriggerActive",
                    onClickTriggerActive: null != a
                })
            }), this.__defineGetter__("onClick", function () {
                return c
            }), this.notifyUpdateRadarPositionHelper = function (a, b, c) {
                var d = a.left / b, e = a.right / b, f = a.top / c, g = a.bottom / c;
                AR.i.callAsync({is: "AR.i.radarInterface.setBoundingBox", left: d, right: e, top: f, bottom: g})
            }, this.notifyUpdateRadarPosition = function () {
                if (d) {
                    var a = 0, b = 0;
                    if (0 === j && 0 === k) a = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, j = a, b = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, k = b, l.notifyUpdateRadarPositionHelper(d.getBoundingClientRect(), a, b); else {
                        var c = setInterval(function () {
                            if (a = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, b = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, a !== j && b !== k) {
                                j = a, k = b;
                                var c = d.getBoundingClientRect();
                                l.notifyUpdateRadarPositionHelper(c, a, b)
                            }
                        }, 10);
                        setTimeout(function () {
                            clearInterval(c)
                        }, 250)
                    }
                }
            }, AR.OneTimeUseRadarConstructionPlan = null
        }
    }), AR._NorthIndicator = PClass.create({
        init: function () {
            var a, b = .5;
            this.__defineSetter__("image", function (b) {
                b = _PROPERTY_VALIDATOR.validate("northIndicator.image", b, {
                    type: _PROPERTY_VALIDATOR.TYPE.CLASS,
                    ofType: AR.ImageResource
                }, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), a = b, AR.i.callAsync({
                    is: "AR.i.radarInterface.setNorthIndicatorImage",
                    northIndicatorImageId: null == b || void 0 == b ? null : b.__id
                })
            }), this.__defineGetter__("image", function () {
                return a
            }), this.__defineSetter__("radius", function (a) {
                a = _PROPERTY_VALIDATOR.validate("northIndicator.radius", a, _PROPERTY_VALIDATOR.TYPE.UNIT_INTERVAL, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b = a, AR.i.callAsync({
                    is: "AR.i.radarInterface.setNorthIndicatorRadius",
                    northIndicatorRadius: a
                })
            }), this.__defineGetter__("radius", function () {
                return b
            })
        }
    }), AR.radar = new AR.OneTimeUseRadarConstructionPlan, window.addEventListener("orientationchange", AR.radar.notifyUpdateRadarPosition), window.addEventListener("resize", AR.radar.notifyUpdateRadarPosition), AR.VideoDrawable = AR.Drawable2D.extend({
        init: function (a, b, c) {
            var d, e, f, g,
                h = _PROPERTY_VALIDATOR.validate("height", b, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                i = this.validateUri(a), j = !1;
            null != c && (null != c.onLoaded && (d = _PROPERTY_VALIDATOR.validate("onLoaded", c.onLoaded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), null != c.onPlaybackStarted && (e = _PROPERTY_VALIDATOR.validate("onPlaybackStarted", c.onPlaybackStarted, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), null != c.onFinishedPlaying && (f = _PROPERTY_VALIDATOR.validate("onFinishedPlaying", c.onFinishedPlaying, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), null != c.onError && (g = _PROPERTY_VALIDATOR.validate("onError", c.onError, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), null != c.isTransparent && (j = _PROPERTY_VALIDATOR.validate("isTransparent", c.isTransparent, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)));
            var k = this._super(AR.CONST.HORIZONTAL_ANCHOR.CENTER, AR.CONST.VERTICAL_ANCHOR.MIDDLE, c);
            this.__defineSetter__("height", function (a) {
                a = _PROPERTY_VALIDATOR.validate("height", a, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    is: "AR.i.videoDrawableInterface.setHeight",
                    objectId: this.__id,
                    height: a
                }), h = a
            }), this.__defineGetter__("height", function () {
                return this.__isDirty("height") && AR.i.callSync({
                    is: "AR.i.videoDrawableInterface.getHeight",
                    objectId: this.__id
                }), h
            }), this.__defineSetter__("onLoaded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onLoaded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), d = a, AR.i.callAsync({
                    is: "AR.i.videoDrawableInterface.setOnLoadedTriggerActive",
                    objectId: m,
                    onLoadedTriggerActive: null != a
                })
            }), this.__defineGetter__("onLoaded", function () {
                return d
            }), this.__defineSetter__("onPlaybackStarted", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onPlaybackStarted", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), e = a, AR.i.callAsync({
                    is: "AR.i.videoDrawableInterface.setOnPlaybackStartedTriggerActive",
                    objectId: m,
                    onPlaybackStartedTriggerActive: null != a
                })
            }), this.__defineGetter__("onPlaybackStarted", function () {
                return e
            }), this.__defineSetter__("onFinishedPlaying", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onFinishedPlaying", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), f = a, AR.i.callAsync({
                    is: "AR.i.videoDrawableInterface.setOnFinishedPlayingTriggerActive",
                    objectId: m,
                    onFinishedPlayingTriggerActive: null != a
                })
            }), this.__defineGetter__("onFinishedPlaying", function () {
                return f
            }), this.__defineSetter__("onError", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onError", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), g = a, AR.i.callAsync({
                    is: "AR.i.videoDrawableInterface.setOnErrorTriggerActive",
                    objectId: m,
                    onErrorTriggerActive: null != a
                })
            }), this.__defineGetter__("onError", function () {
                return g
            }), this.getUri = function () {
                return i
            }, this.isTransparent = function () {
                return j
            }, this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return m
            });
            var l = AR.om.createObjectID();
            AR.i.callAsync({
                is: "AR.i.videoDrawableInterface.createVideoDrawable",
                objectId: l,
                enabled: k.enabled,
                mirrored: k.mirrored,
                rotatesToCamera: k.rotatesToCamera,
                zOrder: k.zOrder,
                onClickTriggerActive: k.onClickActive,
                onDragBeganTriggerActive: k.onDragBeganActive,
                onDragChangedTriggerActive: k.onDragChangedActive,
                onDragEndedTriggerActive: k.onDragEndedActive,
                onPanBeganTriggerActive: k.onPanBeganActive,
                onPanChangedTriggerActive: k.onPanChangedActive,
                onPanEndedTriggerActive: k.onPanEndedActive,
                onRotationBeganTriggerActive: k.onRotationBeganActive,
                onRotationChangedTriggerActive: k.onRotationChangedActive,
                onRotationEndedTriggerActive: k.onRotationEndedActive,
                onScaleBeganTriggerActive: k.onScaleBeganActive,
                onScaleChangedTriggerActive: k.onScaleChangedActive,
                onScaleEndedTriggerActive: k.onScaleEndedActive,
                horizontalAnchor: k.horizontalAnchor,
                verticalAnchor: k.verticalAnchor,
                opacity: k.opacity,
                onLoadedTriggerActive: null != d,
                onPlaybackStartedTriggerActive: null != e,
                onFinishedPlayingTriggerActive: null != f,
                onErrorTriggerActive: null != g,
                uri: AR.__resourceUrl(i),
                height: h,
                isTransparent: j,
                globalRotationX: k.rotate.global.x,
                globalRotationY: k.rotate.global.y,
                globalRotationZ: k.rotate.global.z,
                globalTranslateX: k.translate.global.x,
                globalTranslateY: k.translate.global.y,
                globalTranslateZ: k.translate.global.z,
                rotationX: k.rotate.x,
                rotationY: k.rotate.y,
                rotationZ: k.rotate.z,
                translateX: k.translate.x,
                translateY: k.translate.y,
                translateZ: k.translate.z,
                scaleX: k.scale.x,
                scaleY: k.scale.y,
                scaleZ: k.scale.z
            });
            var m = l;
            AR.om.registerObjectForID(m, this)
        }, validateUri: function (a) {
            if (!AR.VALIDATE.isDefined(a)) throw AR.EXCEPTION.create("uri", AR.EXCEPTION.TYPE.UNDEFINED);
            if (!AR.VALIDATE.isString(a)) throw AR.EXCEPTION.create("uri", AR.EXCEPTION.TYPE.STRING);
            return a
        }, play: function (a) {
            AR.i.callAsync({is: "AR.i.videoDrawableInterface.play", objectId: this.__id, loopTimes: a || 1})
        }, pause: function () {
            return AR.i.callAsync({is: "AR.i.videoDrawableInterface.pause", objectId: this.__id})
        }, resume: function () {
            return AR.i.callAsync({is: "AR.i.videoDrawableInterface.resume", objectId: this.__id})
        }, stop: function () {
            return AR.i.callAsync({is: "AR.i.videoDrawableInterface.stop", objectId: this.__id})
        }
    }), AR.Drawable && (AR.DrawableRotate.prototype.__defineSetter__("roll", function (a) {
        this.global.z = a
    }), AR.DrawableRotate.prototype.__defineGetter__("roll", function () {
        return this.global ? this.global.z : void 0
    }), AR.DrawableRotate.prototype.__defineSetter__("tilt", function (a) {
        this.global.x = a
    }), AR.DrawableRotate.prototype.__defineGetter__("tilt", function () {
        return this.global ? this.global.x : void 0
    }), AR.DrawableRotate.prototype.__defineSetter__("heading", function (a) {
        this.global.y = a
    }), AR.DrawableRotate.prototype.__defineGetter__("heading", function () {
        return this.global ? this.global.y : void 0
    })), AR.Drawable2D && (AR.Drawable2D.prototype.__defineSetter__("offsetX", function (a) {
        this.translate.x = a
    }), AR.Drawable2D.prototype.__defineGetter__("offsetX", function () {
        return this.translate ? this.translate.x : void 0
    }), AR.Drawable2D.prototype.__defineSetter__("offsetY", function (a) {
        this.translate.y = a
    }), AR.Drawable2D.prototype.__defineGetter__("offsetY", function () {
        return this.translate ? this.translate.y : void 0
    }), AR.Drawable2D.prototype.__defineSetter__("rotation", function (a) {
        this.rotate.z = a
    }), AR.Drawable2D.prototype.__defineGetter__("rotation", function () {
        return this.rotate ? this.rotate.z : void 0
    })), AR.Positionable = AR.ARObject.extend({
        init: function (a, b) {
            b = b || {};
            var c, d, e = this._super(b), f = AR.om.createObjectID(),
                g = new AR.ScreenSnapper(this, b.snapToScreen ? b.snapToScreen : null);
            b.triggers && (b.triggers.onEnterFieldOfVision && (c = _PROPERTY_VALIDATOR.validate("triggers.onEnterFieldOfVision", b.triggers.onEnterFieldOfVision, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.triggers.onExitFieldOfVision && (d = _PROPERTY_VALIDATOR.validate("triggers.onExitFieldOfVision", b.triggers.onExitFieldOfVision, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY))), b.onEnterFieldOfVision && (c = _PROPERTY_VALIDATOR.validate("onEnterFieldOfVision", b.onEnterFieldOfVision, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onExitFieldOfVision && (d = _PROPERTY_VALIDATOR.validate("onExitFieldOfVision", b.onExitFieldOfVision, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY));
            var h = g.resolvedBoundingBox;
            AR.i.callAsync({
                objectId: f,
                is: "AR.i.positionableInterface.createPositionable",
                name: a,
                enabled: e.enabled,
                onEnterFieldOfVisionTriggerActive: null != c,
                onExitFieldOfVisionTriggerActive: null != d,
                onClickTriggerActive: e.onClickTriggerActive,
                onDragBeganTriggerActive: e.onDragBeganTriggerActive,
                onDragChangedTriggerActive: e.onDragChangedTriggerActive,
                onDragEndedTriggerActive: e.onDragEndedTriggerActive,
                onPanBeganTriggerActive: e.onPanBeganTriggerActive,
                onPanChangedTriggerActive: e.onPanChangedTriggerActive,
                onPanEndedTriggerActive: e.onPanEndedTriggerActive,
                onRotationBeganTriggerActive: e.onRotationBeganTriggerActive,
                onRotationChangedTriggerActive: e.onRotationChangedTriggerActive,
                onRotationEndedTriggerActive: e.onRotationEndedTriggerActive,
                onScaleBeganTriggerActive: e.onScaleBeganTriggerActive,
                onScaleChangedTriggerActive: e.onScaleChangedTriggerActive,
                onScaleEndedTriggerActive: e.onScaleEndedTriggerActive,
                camDrawableIds: AR.__toJSONString__(AR.om.__getIds__(e.drawables.cam)),
                renderingOrder: e.renderingOrder,
                snapToScreenEnabled: g.enabled,
                screenSnapDelay: g.enableDelayed,
                snapToScreenEnabledOnExitFieldOfVision: g.enabledOnExitFieldOfVision,
                snapContainerId: h.id,
                snapPositionRight: h.right,
                snapPositionTop: h.top,
                snapPositionLeft: h.left,
                snapPositionBottom: h.bottom,
                onSnappedToScreenTriggerActive: null != g.onSnappedToScreen,
                onDelayedSnapInterruptionTriggerActive: null != g.onDelayedSnapInterruption
            }), AR.om.registerObjectForID(f, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return f
            }), this.__defineSetter__("name", function (a) {
                throw AR.EXCEPTION.create("name", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("name", function () {
                return _targetName
            }), this.__defineSetter__("onEnterFieldOfVision", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onEnterFieldOfVision", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c = a, AR.i.callAsync({
                    objectId: this.__id,
                    onEnterFieldOfVisionTriggerActive: null != a,
                    is: "AR.i.positionableInterface.setOnEnterFieldOfVisionTriggerActive"
                })
            }), this.__defineGetter__("onEnterFieldOfVision", function () {
                return c
            }), this.__defineSetter__("onExitFieldOfVision", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onExitFieldOfVision", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), d = a, AR.i.callAsync({
                    objectId: this.__id,
                    onExitFieldOfVisionTriggerActive: null != a,
                    is: "AR.i.positionableInterface.setOnExitFieldOfVisionTriggerActive"
                })
            }), this.__defineGetter__("onExitFieldOfVision", function () {
                return d
            })
        }
    }), AR = AR || {}, AR.js = AR.js || {}, AR.js.touch = {}, AR.js.touch.onDragBegan = function (a, b, c) {
        for (var d = 0; d < a.drawables.length; d++) {
            var e = AR.om.getObjectForID(a.drawables[d].drawable);
            if (e && e.onDragBegan) if (a.drawables[d].drawableParts && a.drawables[d].planeIntersection) {
                if (e.onDragBegan(b, c, a.drawables[d].planeIntersection[0], a.drawables[d].planeIntersection[1], AR.om.getObjectForID(a.drawables[d].arObject), a.drawables[d].drawableParts)) return
            } else if (a.drawables[d].drawableParts) {
                if (e.onDragBegan(b, c, void 0, void 0, AR.om.getObjectForID(a.drawables[d].arObject), a.drawables[d].drawableParts)) return
            } else if (a.drawables[d].planeIntersection) {
                if (e.onDragBegan(b, c, a.drawables[d].planeIntersection[0], a.drawables[d].planeIntersection[1])) return
            } else if (e.onDragBegan(b, c)) return
        }
        for (var d = 0; d < a.arObjects.length; d++) {
            var f = AR.om.getObjectForID(a.arObjects[d]);
            if (f && f.onDragBegan && f.onDragBegan(b, c)) return
        }
        AR.context.onDragBegan && AR.context.onDragBegan(b, c)
    }, AR.js.touch.onDragChanged = function (a, b, c) {
        for (var d = 0; d < a.drawables.length; d++) {
            var e = AR.om.getObjectForID(a.drawables[d].drawable);
            if (e && e.onDragChanged) if (a.drawables[d].drawableParts && a.drawables[d].planeIntersection) {
                if (e.onDragChanged(b, c, a.drawables[d].planeIntersection[0], a.drawables[d].planeIntersection[1], AR.om.getObjectForID(a.drawables[d].arObject), a.drawables[d].drawableParts)) return
            } else if (a.drawables[d].drawableParts) {
                if (e.onDragChanged(b, c, void 0, void 0, AR.om.getObjectForID(a.drawables[d].arObject), a.drawables[d].drawableParts)) return
            } else if (a.drawables[d].planeIntersection) {
                if (e.onDragChanged(b, c, a.drawables[d].planeIntersection[0], a.drawables[d].planeIntersection[1])) return
            } else if (e.onDragChanged(b, c)) return
        }
        for (var d = 0; d < a.arObjects.length; d++) {
            var f = AR.om.getObjectForID(a.arObjects[d]);
            if (f && f.onDragChanged && f.onDragChanged(b, c)) return
        }
        AR.context.onDragChanged && AR.context.onDragChanged(b, c)
    }, AR.js.touch.onDragEnded = function (a, b, c) {
        for (var d = 0; d < a.drawables.length; d++) {
            var e = AR.om.getObjectForID(a.drawables[d].drawable);
            if (e && e.onDragEnded) if (a.drawables[d].drawableParts && a.drawables[d].planeIntersection) {
                if (e.onDragEnded(b, c, a.drawables[d].planeIntersection[0], a.drawables[d].planeIntersection[1], AR.om.getObjectForID(a.drawables[d].arObject), a.drawables[d].drawableParts)) return
            } else if (a.drawables[d].drawableParts) {
                if (e.onDragEnded(b, c, void 0, void 0, AR.om.getObjectForID(a.drawables[d].arObject), a.drawables[d].drawableParts)) return
            } else if (a.drawables[d].planeIntersection) {
                if (e.onDragEnded(b, c, a.drawables[d].planeIntersection[0], a.drawables[d].planeIntersection[1])) return
            } else if (e.onDragEnded(b, c)) return
        }
        for (var d = 0; d < a.arObjects.length; d++) {
            var f = AR.om.getObjectForID(a.arObjects[d]);
            if (f && f.onDragEnded && f.onDragEnded(b, c)) return
        }
        AR.context.onDragEnded && AR.context.onDragEnded(b, c)
    }, AR.js.touch.onPanBegan = function (a, b, c) {
        for (var d = 0; d < a.drawables.length; d++) {
            var e = AR.om.getObjectForID(a.drawables[d].drawable);
            if (e && e.onPanBegan) if (a.drawables[d].drawableParts) {
                if (e.onPanBegan(b, c, AR.om.getObjectForID(a.drawables[d].arObject), a.drawables[d].drawableParts)) return
            } else if (e.onPanBegan(b, c)) return
        }
        for (var d = 0; d < a.arObjects.length; d++) {
            var f = AR.om.getObjectForID(a.arObjects[d]);
            if (f && f.onPanBegan && f.onPanBegan(b, c)) return
        }
        AR.context.onPanBegan && AR.context.onPanBegan(b, c)
    }, AR.js.touch.onPanChanged = function (a, b, c) {
        for (var d = 0; d < a.drawables.length; d++) {
            var e = AR.om.getObjectForID(a.drawables[d].drawable);
            if (e && e.onPanChanged) if (a.drawables[d].drawableParts) {
                if (e.onPanChanged(b, c, AR.om.getObjectForID(a.drawables[d].arObject), a.drawables[d].drawableParts)) return
            } else if (e.onPanChanged(b, c)) return
        }
        for (var d = 0; d < a.arObjects.length; d++) {
            var f = AR.om.getObjectForID(a.arObjects[d]);
            if (f && f.onPanChanged && f.onPanChanged(b, c)) return
        }
        AR.context.onPanChanged && AR.context.onPanChanged(b, c)
    }, AR.js.touch.onPanEnded = function (a, b, c) {
        for (var d = 0; d < a.drawables.length; d++) {
            var e = AR.om.getObjectForID(a.drawables[d].drawable);
            if (e && e.onPanEnded) if (a.drawables[d].drawableParts) {
                if (e.onPanEnded(b, c, AR.om.getObjectForID(a.drawables[d].arObject), a.drawables[d].drawableParts)) return
            } else if (e.onPanEnded(b, c)) return
        }
        for (var d = 0; d < a.arObjects.length; d++) {
            var f = AR.om.getObjectForID(a.arObjects[d]);
            if (f && f.onPanEnded && f.onPanEnded(b, c)) return
        }
        AR.context.onPanEnded && AR.context.onPanEnded(b, c)
    }, AR.js.touch.onRotationBegan = function (a, b) {
        for (var c = 0; c < a.drawables.length; c++) {
            var d = AR.om.getObjectForID(a.drawables[c].drawable);
            if (d && d.onRotationBegan) if (a.drawables[c].drawableParts) {
                if (d.onRotationBegan(b, AR.om.getObjectForID(a.drawables[c].arObject), a.drawables[c].drawableParts)) return
            } else if (d.onRotationBegan(b)) return
        }
        for (var c = 0; c < a.arObjects.length; c++) {
            var e = AR.om.getObjectForID(a.arObjects[c]);
            if (e && e.onRotationBegan && e.onRotationBegan(b)) return
        }
        AR.context.onRotationBegan && AR.context.onRotationBegan(b)
    }, AR.js.touch.onRotationChanged = function (a, b) {
        for (var c = 0; c < a.drawables.length; c++) {
            var d = AR.om.getObjectForID(a.drawables[c].drawable);
            if (d && d.onRotationChanged) if (a.drawables[c].drawableParts) {
                if (d.onRotationChanged(b, AR.om.getObjectForID(a.drawables[c].arObject), a.drawables[c].drawableParts)) return
            } else if (d.onRotationChanged(b)) return
        }
        for (var c = 0; c < a.arObjects.length; c++) {
            var e = AR.om.getObjectForID(a.arObjects[c]);
            if (e && e.onRotationChanged && e.onRotationChanged(b)) return
        }
        AR.context.onRotationChanged && AR.context.onRotationChanged(b)
    }, AR.js.touch.onRotationEnded = function (a, b) {
        for (var c = 0; c < a.drawables.length; c++) {
            var d = AR.om.getObjectForID(a.drawables[c].drawable);
            if (d && d.onRotationEnded) if (a.drawables[c].drawableParts) {
                if (d.onRotationEnded(b, AR.om.getObjectForID(a.drawables[c].arObject), a.drawables[c].drawableParts)) return
            } else if (d.onRotationEnded(b)) return
        }
        for (var c = 0; c < a.arObjects.length; c++) {
            var e = AR.om.getObjectForID(a.arObjects[c]);
            if (e && e.onRotationEnded && e.onRotationEnded(b)) return
        }
        AR.context.onRotationEnded && AR.context.onRotationEnded(b)
    }, AR.js.touch.onScaleBegan = function (a, b) {
        for (var c = 0; c < a.drawables.length; c++) {
            var d = AR.om.getObjectForID(a.drawables[c].drawable);
            if (d && d.onScaleBegan) if (a.drawables[c].drawableParts) {
                if (d.onScaleBegan(b, AR.om.getObjectForID(a.drawables[c].arObject), a.drawables[c].drawableParts)) return
            } else if (d.onScaleBegan(b)) return
        }
        for (var c = 0; c < a.arObjects.length; c++) {
            var e = AR.om.getObjectForID(a.arObjects[c]);
            if (e && e.onScaleBegan && e.onScaleBegan(b)) return
        }
        AR.context.onScaleBegan && AR.context.onScaleBegan(b)
    }, AR.js.touch.onScaleChanged = function (a, b) {
        for (var c = 0; c < a.drawables.length; c++) {
            var d = AR.om.getObjectForID(a.drawables[c].drawable);
            if (d && d.onScaleChanged) if (a.drawables[c].drawableParts) {
                if (d.onScaleChanged(b, AR.om.getObjectForID(a.drawables[c].arObject), a.drawables[c].drawableParts)) return
            } else if (d.onScaleChanged(b)) return
        }
        for (var c = 0; c < a.arObjects.length; c++) {
            var e = AR.om.getObjectForID(a.arObjects[c]);
            if (e && e.onScaleChanged && e.onScaleChanged(b)) return
        }
        AR.context.onScaleChanged && AR.context.onScaleChanged(b)
    }, AR.js.touch.onScaleEnded = function (a, b) {
        for (var c = 0; c < a.drawables.length; c++) {
            var d = AR.om.getObjectForID(a.drawables[c].drawable);
            if (d && d.onScaleEnded) if (a.drawables[c].drawableParts) {
                if (d.onScaleEnded(b, AR.om.getObjectForID(a.drawables[c].arObject), a.drawables[c].drawableParts)) return
            } else if (d.onScaleEnded(b)) return
        }
        for (var c = 0; c < a.arObjects.length; c++) {
            var e = AR.om.getObjectForID(a.arObjects[c]);
            if (e && e.onScaleEnded && e.onScaleEnded(b)) return
        }
        AR.context.onScaleEnded && AR.context.onScaleEnded(b)
    }, AR.InstantTrackerState = Object.freeze({
        INITIALIZING: 0,
        TRACKING: 1,
        UNKNOWN: 2
    }), AR.InstantTracker = AR.ARchitectObject.extend({
        validateTrackerEfficiencyMode: function (a) {
            if (!AR.CONST.TRACKER_EFFICIENCY_MODE.isValidTrackerEfficiencyMode(a)) throw AR.EXCEPTION.create("trackerEfficiencyMode", AR.EXCEPTION.TYPE.OBJECT, "TRACKER_EFFICIENCY_MODE.___", typeof a);
            return a
        }, init: function (a) {
            var b, c, d, e, f = !0, g = 1, h = AR.CONST.INITIAL_INSTANT_TRACKING_PLANE_ORIENTATION.HORIZONTAL, i = !0,
                j = AR.CONST.TRACKER_EFFICIENCY_MODE.HIGH_ACCURACY;
            if (a && (null != a.enabled && (f = _PROPERTY_VALIDATOR.validate("enabled", a.enabled, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onError && (b = _PROPERTY_VALIDATOR.validate("onError", a.onError, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onDisabled && (c = _PROPERTY_VALIDATOR.validate("onDisabled", a.onDisabled, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.onChangedState && (d = _PROPERTY_VALIDATOR.validate("onChangedState", a.onChangedState, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.deviceHeight && (g = _PROPERTY_VALIDATOR.validate("deviceHeight", a.deviceHeight, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.trackingPlaneOrientation && (h = _PROPERTY_VALIDATOR.validate("trackingPlaneOrientation", a.trackingPlaneOrientation, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.hasOwnProperty("smartEnabled") && (i = _PROPERTY_VALIDATOR.validate("smartEnabled", a.smartEnabled, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), a.trackerEfficiencyMode && (j = this.validateTrackerEfficiencyMode(a.trackerEfficiencyMode))), i && AR.hardware.smart.platformAssistedTrackingSupported && a.trackingPlaneOrientation && (null != b && b(new AR.Error(301, "InstantTracking", "Unable to set the trackingPlaneOrientation when using platform assisted tracking. Disable SMART to use this feature.")), h = AR.CONST.INITIAL_INSTANT_TRACKING_PLANE_ORIENTATION.HORIZONTAL), !1 === AR.hardware.sensors.enabled) throw"AR.hardware.sensors have to be enabled when creating an AR.InstantTracker. " + buildStack("<br />");
            e = AR.om.createObjectID(), AR.i.callAsync({
                objectId: e,
                is: "AR.i.instantTrackerInterface.createTracker",
                enabled: f,
                onDisabledTriggerActive: null != c,
                onErrorTriggerActive: null != b,
                onChangedStateTriggerActive: null != d,
                deviceHeight: g,
                trackingPlaneOrientation: h,
                arKitCoreEnabled: i,
                trackerEfficiencyMode: j
            }), AR.om.registerObjectForID(e, this), this.__defineSetter__("__id", function () {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return e
            }), this.__defineSetter__("__smartEnabled", function () {
                throw AR.EXCEPTION.create("__smartEnabled", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__smartEnabled", function () {
                return i
            }), this.__defineSetter__("state", function (a) {
                a = _PROPERTY_VALIDATOR.validate("state", a, _PROPERTY_VALIDATOR.TYPE.INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    objectId: e,
                    is: "AR.i.instantTrackerInterface.setState",
                    state: a
                })
            }), this.__defineGetter__("state", function () {
                return AR.i.callSync({objectId: e, is: "AR.i.instantTrackerInterface.getState"})
            }), this.__defineSetter__("canStartTracking", function (a) {
                throw AR.EXCEPTION.create("canStartTracking", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("canStartTracking", function () {
                return AR.i.callSync({objectId: e, is: "AR.i.instantTrackerInterface.canStartTracking"})
            }), this.__defineSetter__("enabled", function (a) {
                a = _PROPERTY_VALIDATOR.validate("enabled", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    objectId: e,
                    is: "AR.i.instantTrackerInterface.setEnabled",
                    enabled: a
                })
            }), this.__defineGetter__("enabled", function () {
                return AR.i.callSync({objectId: e, is: "AR.i.instantTrackerInterface.isEnabled"})
            }), this.__defineSetter__("onError", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onError", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), b = a, AR.i.callAsync({
                    objectId: e,
                    is: "AR.i.instantTrackerInterface.setOnErrorTriggerActive",
                    onErrorTriggerActive: null != a
                })
            }), this.__defineGetter__("onError", function () {
                return b
            }), this.__defineSetter__("onDisabled", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDisabled", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), c = a, AR.i.callAsync({
                    objectId: e,
                    is: "AR.i.instantTrackerInterface.setOnDisabledTriggerActive",
                    onDisabledTriggerActive: null != a
                })
            }), this.__defineGetter__("onDisabled", function () {
                return c
            }), this.__defineSetter__("onChangedState", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onChangedState", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), d = a, AR.i.callAsync({
                    objectId: e,
                    is: "AR.i.instantTrackerInterface.setOnChangedStateTriggerActive",
                    onChangedStateTriggerActive: null != a
                })
            }), this.__defineGetter__("onChangedState", function () {
                return d
            }), this.__defineSetter__("deviceHeight", function (a) {
                if (a = _PROPERTY_VALIDATOR.validate("deviceHeight", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), this.state !== AR.InstantTrackerState.INITIALIZING) throw AR.EXCEPTION.create("deviceHeight", AR.EXCEPTION.TYPE.ILLEGAL_STATE, "AR.InstantTrackerState.INITIALIZING (" + AR.InstantTrackerState.INITIALIZING + ")", _state);
                g = a, AR.i.callAsync({
                    objectId: e,
                    is: "AR.i.instantTrackerInterface.setDeviceHeight",
                    deviceHeight: a
                })
            }), this.__defineGetter__("deviceHeight", function () {
                return g
            }), this.__defineSetter__("trackingPlaneOrientation", function (a) {
                if (i && AR.hardware.smart.platformAssistedTrackingSupported) return void (null != b && b(new AR.Error(300, "InstantTracking", "Unable to set the trackingPlaneOrientation when using platform assisted tracking. Disable SMART to use this feature.")));
                if (a = _PROPERTY_VALIDATOR.validate("trackingPlaneOrientation", a, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), this.state !== AR.InstantTrackerState.INITIALIZING) throw AR.EXCEPTION.create("trackingPlaneOrientation", AR.EXCEPTION.TYPE.ILLEGAL_STATE, "AR.InstantTrackerState.INITIALIZING (" + AR.InstantTrackerState.INITIALIZING + ")", _state);
                h = a, AR.i.callAsync({
                    objectId: e,
                    is: "AR.i.instantTrackerInterface.setTrackingPlaneOrientation",
                    trackingPlaneOrientation: a
                })
            }), this.__defineGetter__("trackingPlaneOrientation", function () {
                return h
            }), this.__defineGetter__("saveCurrentInstantTargetCompletionHandler", function () {
                return this._saveCurrentInstantTargetCompletionHandler
            }), this.__defineGetter__("saveCurrentInstantTargetErrorHandler", function () {
                return this._saveCurrentInstantTargetErrorHandler
            }), this.__defineGetter__("loadExistingInstantTargetCompletionHandler", function () {
                return this._loadExistingInstantTargetCompletionHandler
            }), this.__defineGetter__("loadExistingInstantTargetErrorHandler", function () {
                return this._loadExistingInstantTargetErrorHandler
            })
        }, saveCurrentInstantTarget: function (a, b, c) {
            a = _PROPERTY_VALIDATOR.validate("uri", a, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), this._saveCurrentInstantTargetCompletionHandler = _PROPERTY_VALIDATOR.validate("completionHandler", b, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), this._saveCurrentInstantTargetErrorHandler = _PROPERTY_VALIDATOR.validate("errorHandler", c, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                objectId: this.__id,
                is: "AR.i.instantTrackerInterface.saveCurrentInstantTarget",
                uri: a
            })
        }, loadExistingInstantTarget: function (a, b, c, d) {
            if (!(a instanceof AR.TargetCollectionResource)) throw AR.EXCEPTION.create("targetCollectionResource", AR.EXCEPTION.TYPE.OBJECT, "AR.TargetCollectionResource");
            var e = AR.CONST.INSTANT_TARGET_EXPANSION_POLICY.DISALLOW_EXPANSION;
            d && (e = _PROPERTY_VALIDATOR.validate("expansionPolicy", d.expansionPolicy, _PROPERTY_VALIDATOR.TYPE.NUMERIC, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY, function (a, b) {
                if (b !== AR.CONST.INSTANT_TARGET_EXPANSION_POLICY.ALLOW_EXPANSION && b !== AR.CONST.INSTANT_TARGET_EXPANSION_POLICY.DISALLOW_EXPANSION) throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.INVALID_VALUE);
                return b
            })), this._loadExistingInstantTargetCompletionHandler = _PROPERTY_VALIDATOR.validate("completionHandler", b, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), this._loadExistingInstantTargetErrorHandler = _PROPERTY_VALIDATOR.validate("errorHandler", c, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                objectId: this.__id,
                is: "AR.i.instantTrackerInterface.loadExistingInstantTarget",
                resourceId: a.__id,
                expansionPolicy: e
            })
        }
    }), AR.InstantTrackable = AR.ARObject.extend({
        init: function (a, b) {
            b = b || {};
            var c, d, e, f, g, h, i = this._super(b), j = _PROPERTY_VALIDATOR.validate("tracker", a, {
                    type: _PROPERTY_VALIDATOR.TYPE.CLASS,
                    ofType: AR.InstantTracker
                }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                k = new AR.ScreenSnapper(this, b.snapToScreen ? b.snapToScreen : null);
            b.onTrackingPlaneClick && (c = _PROPERTY_VALIDATOR.validate("onTrackingPlaneClick", b.onTrackingPlaneClick, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onTrackingPlaneDragBegan && (d = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragBegan", b.onTrackingPlaneDragBegan, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onTrackingPlaneDragChanged && (e = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragChanged", b.onTrackingPlaneDragChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onTrackingPlaneDragEnded && (f = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragEnded", b.onTrackingPlaneDragEnded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onTrackingStarted && (g = _PROPERTY_VALIDATOR.validate("onTrackingStarted", b.onTrackingStarted, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onTrackingStopped && (h = _PROPERTY_VALIDATOR.validate("onTrackingStopped", b.onTrackingStopped, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY));
            var l = AR.om.createObjectID(), m = k.resolvedBoundingBox;
            AR.i.callAsync({
                objectId: l,
                is: "AR.i.instantTrackableInterface.createInstantTrackable",
                trackerId: j.__id,
                enabled: i.enabled,
                onEnterFieldOfVisionTriggerActive: i.onEnterFieldOfVisionTriggerActive,
                onExitFieldOfVisionTriggerActive: i.onExitFieldOfVisionTriggerActive,
                onClickTriggerActive: i.onClickTriggerActive,
                onDragBeganTriggerActive: i.onDragBeganTriggerActive,
                onDragChangedTriggerActive: i.onDragChangedTriggerActive,
                onDragEndedTriggerActive: i.onDragEndedTriggerActive,
                onPanBeganTriggerActive: i.onPanBeganTriggerActive,
                onPanChangedTriggerActive: i.onPanChangedTriggerActive,
                onPanEndedTriggerActive: i.onPanEndedTriggerActive,
                onRotationBeganTriggerActive: i.onRotationBeganTriggerActive,
                onRotationChangedTriggerActive: i.onRotationChangedTriggerActive,
                onRotationEndedTriggerActive: i.onRotationEndedTriggerActive,
                onScaleBeganTriggerActive: i.onScaleBeganTriggerActive,
                onScaleChangedTriggerActive: i.onScaleChangedTriggerActive,
                onScaleEndedTriggerActive: i.onScaleEndedTriggerActive,
                onTrackingPlaneClickTriggerActive: null != c,
                onTrackingPlaneDragBeganTriggerActive: null != d,
                onTrackingPlaneDragChangedTriggerActive: null != e,
                onTrackingPlaneDragEndedTriggerActive: null != f,
                onTrackingStartedTriggerActive: null != g,
                onTrackingStoppedTriggerActive: null != h,
                camDrawableIds: AR.__toJSONString__(AR.om.__getIds__(i.drawables.cam)),
                initializationDrawableIds: AR.__toJSONString__(AR.om.__getIds__(i.drawables.initialization)),
                renderingOrder: i.renderingOrder,
                snapToScreenEnabled: k.enabled,
                screenSnapDelay: k.enableDelayed,
                snapToScreenEnabledOnExitFieldOfVision: k.enabledOnExitFieldOfVision,
                snapContainerId: m.id,
                snapPositionRight: m.right,
                snapPositionTop: m.top,
                snapPositionLeft: m.left,
                snapPositionBottom: m.bottom,
                onSnappedToScreenTriggerActive: null != k.onSnappedToScreen,
                onDelayedSnapInterruptionTriggerActive: null != k.onDelayedSnapInterruption
            }), AR.om.registerObjectForID(l, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return l
            }), this.__defineSetter__("tracker", function (a) {
                throw AR.EXCEPTION.create("tracker", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("tracker", function () {
                return j
            }), this.__defineSetter__("snapToScreen", function (a) {
                k = new AR.ScreenSnapper(this, a)
            }), this.__defineGetter__("snapToScreen", function () {
                return k
            }), this.__defineSetter__("onTrackingPlaneClick", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingPlaneClick", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingPlaneClickTriggerActive: null != a,
                    is: "AR.i.instantTrackableInterface.setOnTrackingPlaneClickTriggerActive"
                })
            }), this.__defineGetter__("onTrackingPlaneClick", function () {
                return c
            }), this.__defineSetter__("onTrackingPlaneDragBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), d = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingPlaneDragBeganTriggerActive: null != a,
                    is: "AR.i.instantTrackableInterface.setOnTrackingPlaneDragBeganTriggerActive"
                })
            }), this.__defineGetter__("onTrackingPlaneDragBegan", function () {
                return d
            }), this.__defineSetter__("onTrackingPlaneDragChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), e = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingPlaneDragChangedTriggerActive: null != a,
                    is: "AR.i.instantTrackableInterface.setOnTrackingPlaneDragChangedTriggerActive"
                })
            }), this.__defineGetter__("onTrackingPlaneDragChanged", function () {
                return e
            }), this.__defineSetter__("onTrackingPlaneDragEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), f = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingPlaneDragEndedTriggerActive: null != a,
                    is: "AR.i.instantTrackableInterface.setOnTrackingPlaneDragEndedTriggerActive"
                })
            }), this.__defineGetter__("onTrackingPlaneDragEnded", function () {
                return f
            }), this.__defineSetter__("onTrackingStarted", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingStarted", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), g = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingStartedTriggerActive: null != a,
                    is: "AR.i.instantTrackableInterface.setOnTrackingStartedTriggerActive"
                })
            }), this.__defineGetter__("onTrackingStarted", function () {
                return g
            }), this.__defineSetter__("onTrackingStopped", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingStopped", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), h = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingStoppedTriggerActive: null != a,
                    is: "AR.i.instantTrackableInterface.setOnTrackingStoppedTriggerActive"
                })
            }), this.__defineGetter__("onTrackingStopped", function () {
                return h
            }), this.__defineGetter__("screenCoordinateToPointCloudCoordinateConversionCompletionHandler", function () {
                return this._conversionCompletionHandler
            }), this.__defineGetter__("screenCoordinateToPointCloudCoordinateConversionErrorHandler", function () {
                return this._conversionErrorHandler
            })
        }, convertScreenCoordinateToPointCloudCoordinate: function (a, b, c, d) {
            c = _PROPERTY_VALIDATOR.validate("completionHandler", c, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), d = _PROPERTY_VALIDATOR.validate("errorHandler", d, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), this._conversionCompletionHandler = c, this._conversionErrorHandler = d, AR.i.callAsync({
                is: "AR.i.instantTrackableInterface.convertScreenCoordinateToPointCloudCoordinate",
                objectId: this.__id,
                screenX: a,
                screenY: b
            })
        }
    }), AR.EasingCurve = AR.ARchitectObject.extend({
        init: function (a, b) {
            this._super(), this.type = a, null != b && (null != b.amplitude && (this.amplitude = b.amplitude), null != b.overshoot && (this.overshoot = b.overshoot), null != b.period && (this.period = b.period))
        }
    }), AR.OneTimeUseContextConstructionPlanPlatform = PClass.create({
        init: function () {
            AR.OneTimeUseContextConstructionPlanPlatform = null
        }, sendJSONObject: function (a) {
            a = _PROPERTY_VALIDATOR.validate("jsonObject", a, _PROPERTY_VALIDATOR.TYPE.OBJECT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), a = JSON.stringify(a), AR.i.callAsync({
                is: "AR.i.platformInterface.sendJSONObject",
                jsonObject: a
            })
        }
    }), AR.platform = new AR.OneTimeUseContextConstructionPlanPlatform, AR.OneTimeUseLoggerConstructionPlan = function () {
        var a = [];
        this.addPluginAvailabilityObserver = function (b) {
            a.push(b)
        }, this.callSync = function (a, b, c) {
            return AR.i.callSync({is: "AR.i.pluginInterface.callSync", pluginId: a, methodId: b, parameter: c})
        }, this.callAsync = function (a, b, c) {
            AR.i.callAsync({is: "AR.i.pluginInterface.callAsync", pluginId: a, methodId: b, parameter: c})
        }, this.createInstance = function (a, b, c) {
            var d = AR.om.createObjectID();
            return AR.i.callAsync({
                is: "AR.i.pluginInterface.createInstance",
                objectId: d,
                pluginId: a,
                className: b.constructor.name,
                parameter: c
            }), AR.om.registerObjectForID(d, b), d
        }, this.get = function (a) {
            return AR.om.getObjectForID(a)
        }, this._pluginAdded = function (b) {
            for (var c = 0; c < a.length; c++) a[c](b, !0)
        }, this._pluginRemoved = function (b) {
            for (var c = 0; c < a.length; c++) a[c](b, !1)
        }, AR.OneTimeUseLoggerConstructionPlan = null
    }, AR.plugins = new AR.OneTimeUseLoggerConstructionPlan, AR.Occluder = AR.Drawable.extend({
        init: function (a, b) {
            this.__modelNotCreatedInCoreYet = !0;
            var c, d, e,
                f = _PROPERTY_VALIDATOR.validate("uri", a, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
            b ? (b.onLoaded && (c = _PROPERTY_VALIDATOR.validate("onLoaded", b.onLoaded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onInitialized && (e = _PROPERTY_VALIDATOR.validate("onInitialized", b.onInitialized, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onError && (d = _PROPERTY_VALIDATOR.validate("onError", b.onError, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.rotatesToCamera || (b.rotatesToCamera = !1)) : b = {rotatesToCamera: !1}, this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return i
            });
            var g = this._super(b), h = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: h,
                is: "AR.i.occluderInterface.createOccluder",
                enabled: g.enabled,
                mirrored: g.mirrored,
                rotatesToCamera: g.rotatesToCamera,
                onClickTriggerActive: g.onClickActive,
                onDragBeganTriggerActive: g.onDragBeganActive,
                onDragChangedTriggerActive: g.onDragChangedActive,
                onDragEndedTriggerActive: g.onDragEndedActive,
                onPanBeganTriggerActive: g.onPanBeganActive,
                onPanChangedTriggerActive: g.onPanChangedActive,
                onPanEndedTriggerActive: g.onPanEndedActive,
                onRotationBeganTriggerActive: g.onRotationBeganActive,
                onRotationChangedTriggerActive: g.onRotationChangedActive,
                onRotationEndedTriggerActive: g.onRotationEndedActive,
                onScaleBeganTriggerActive: g.onScaleBeganActive,
                onScaleChangedTriggerActive: g.onScaleChangedActive,
                onScaleEndedTriggerActive: g.onScaleEndedActive,
                uri: AR.__resourceUrl(f),
                onLoadedTriggerActive: null != c,
                onInitializedTriggerActive: null != e,
                onErrorTriggerActive: null != d,
                globalRotationX: g.rotate.global.x,
                globalRotationY: g.rotate.global.y,
                globalRotationZ: g.rotate.global.z,
                globalTranslateX: g.translate.global.x,
                globalTranslateY: g.translate.global.y,
                globalTranslateZ: g.translate.global.z,
                rotationX: g.rotate.x,
                rotationY: g.rotate.y,
                rotationZ: g.rotate.z,
                translateX: g.translate.x,
                translateY: g.translate.y,
                translateZ: g.translate.z,
                scaleX: g.scale.x,
                scaleY: g.scale.y,
                scaleZ: g.scale.z
            }), delete this.__modelNotCreatedInCoreYet;
            var i = h;
            AR.om.registerObjectForID(i, this), this.__defineSetter__("uri", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("uri", function () {
                return f
            }), this.__defineSetter__("onLoaded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onLoaded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c = a, AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.occluderInterface.setOnLoadedTriggerActive",
                    onLoadedTriggerActive: null != a
                })
            }), this.__defineGetter__("onLoaded", function () {
                return c
            }), this.__defineSetter__("onInitialized", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onInitialized", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), e = a, AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.occluderInterface.setOnInitializedTriggerActive",
                    onInitializedTriggerActive: null != a
                })
            }), this.__defineGetter__("onInitialized", function () {
                return e
            }), this.__defineSetter__("onError", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onError", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), d = a, AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.occluderInterface.setOnErrorTriggerActive",
                    onErrorTriggerActive: null != a
                })
            }), this.__defineGetter__("onError", function () {
                return d
            })
        }, isLoaded: function () {
            return AR.i.callSync({is: "AR.i.occluderInterface.isLoaded", objectId: this.__id})
        }, isInitialized: function () {
            return AR.i.callSync({is: "AR.i.occluderInterface.isInitialized", objectId: this.__id})
        }
    }), AR.OccluderSphere = AR.Drawable.extend({
        init: function (a, b, c, d) {
            var e = _PROPERTY_VALIDATOR.validate("radius", a, _PROPERTY_VALIDATOR.TYPE.FLOAT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                f = _PROPERTY_VALIDATOR.validate("slices", b, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                g = _PROPERTY_VALIDATOR.validate("stacks", c, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
            d ? d.rotatesToCamera || (d.rotatesToCamera = !1) : d = {rotatesToCamera: !1}, this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return j
            });
            var h = this._super(d), i = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: i,
                is: "AR.i.occluderInterface.createOccluderSphere",
                radius: e,
                slices: f,
                stacks: g,
                enabled: h.enabled,
                mirrored: h.mirrored,
                rotatesToCamera: h.rotatesToCamera,
                onClickTriggerActive: h.onClickActive,
                onDragBeganTriggerActive: h.onDragBeganActive,
                onDragChangedTriggerActive: h.onDragChangedActive,
                onDragEndedTriggerActive: h.onDragEndedActive,
                onPanBeganTriggerActive: h.onPanBeganActive,
                onPanChangedTriggerActive: h.onPanChangedActive,
                onPanEndedTriggerActive: h.onPanEndedActive,
                onRotationBeganTriggerActive: h.onRotationBeganActive,
                onRotationChangedTriggerActive: h.onRotationChangedActive,
                onRotationEndedTriggerActive: h.onRotationEndedActive,
                onScaleBeganTriggerActive: h.onScaleBeganActive,
                onScaleChangedTriggerActive: h.onScaleChangedActive,
                onScaleEndedTriggerActive: h.onScaleEndedActive,
                globalRotationX: h.rotate.global.x,
                globalRotationY: h.rotate.global.y,
                globalRotationZ: h.rotate.global.z,
                globalTranslateX: h.translate.global.x,
                globalTranslateY: h.translate.global.y,
                globalTranslateZ: h.translate.global.z,
                rotationX: h.rotate.x,
                rotationY: h.rotate.y,
                rotationZ: h.rotate.z,
                translateX: h.translate.x,
                translateY: h.translate.y,
                translateZ: h.translate.z,
                scaleX: h.scale.x,
                scaleY: h.scale.y,
                scaleZ: h.scale.z
            });
            var j = i;
            AR.om.registerObjectForID(j, this), this.__defineSetter__("radius", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("radius", function () {
                return e
            }), this.__defineSetter__("slices", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("slices", function () {
                return e
            }), this.__defineSetter__("stacks", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("stacks", function () {
                return e
            })
        }
    }), AR.OccluderBox = AR.Drawable.extend({
        init: function (a, b, c, d) {
            var e = _PROPERTY_VALIDATOR.validate("width", a, _PROPERTY_VALIDATOR.TYPE.FLOAT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                f = _PROPERTY_VALIDATOR.validate("height", b, _PROPERTY_VALIDATOR.TYPE.FLOAT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                g = _PROPERTY_VALIDATOR.validate("depth", c, _PROPERTY_VALIDATOR.TYPE.FLOAT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
            d ? d.rotatesToCamera || (d.rotatesToCamera = !1) : d = {rotatesToCamera: !1}, this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return j
            });
            var h = this._super(d), i = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: i,
                is: "AR.i.occluderInterface.createOccluderBox",
                width: e,
                height: f,
                depth: g,
                enabled: h.enabled,
                mirrored: h.mirrored,
                rotatesToCamera: h.rotatesToCamera,
                onClickTriggerActive: h.onClickActive,
                onDragBeganTriggerActive: h.onDragBeganActive,
                onDragChangedTriggerActive: h.onDragChangedActive,
                onDragEndedTriggerActive: h.onDragEndedActive,
                onPanBeganTriggerActive: h.onPanBeganActive,
                onPanChangedTriggerActive: h.onPanChangedActive,
                onPanEndedTriggerActive: h.onPanEndedActive,
                onRotationBeganTriggerActive: h.onRotationBeganActive,
                onRotationChangedTriggerActive: h.onRotationChangedActive,
                onRotationEndedTriggerActive: h.onRotationEndedActive,
                onScaleBeganTriggerActive: h.onScaleBeganActive,
                onScaleChangedTriggerActive: h.onScaleChangedActive,
                onScaleEndedTriggerActive: h.onScaleEndedActive,
                globalRotationX: h.rotate.global.x,
                globalRotationY: h.rotate.global.y,
                globalRotationZ: h.rotate.global.z,
                globalTranslateX: h.translate.global.x,
                globalTranslateY: h.translate.global.y,
                globalTranslateZ: h.translate.global.z,
                rotationX: h.rotate.x,
                rotationY: h.rotate.y,
                rotationZ: h.rotate.z,
                translateX: h.translate.x,
                translateY: h.translate.y,
                translateZ: h.translate.z,
                scaleX: h.scale.x,
                scaleY: h.scale.y,
                scaleZ: h.scale.z
            });
            var j = i;
            AR.om.registerObjectForID(j, this), this.__defineSetter__("width", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("width", function () {
                return e
            }), this.__defineSetter__("height", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("height", function () {
                return f
            }), this.__defineSetter__("depth", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("depth", function () {
                return g
            })
        }
    }), AR.OccluderCylinder = AR.Drawable.extend({
        init: function (a, b, c, d) {
            var e = _PROPERTY_VALIDATOR.validate("radius", a, _PROPERTY_VALIDATOR.TYPE.FLOAT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                f = _PROPERTY_VALIDATOR.validate("slices", b, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                g = _PROPERTY_VALIDATOR.validate("height", c, _PROPERTY_VALIDATOR.TYPE.FLOAT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
            d ? d.rotatesToCamera || (d.rotatesToCamera = !1) : d = {rotatesToCamera: !1}, this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return j
            });
            var h = this._super(d), i = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: i,
                is: "AR.i.occluderInterface.createOccluderCylinder",
                radius: e,
                slices: f,
                height: g,
                enabled: h.enabled,
                mirrored: h.mirrored,
                rotatesToCamera: h.rotatesToCamera,
                onClickTriggerActive: h.onClickActive,
                onDragBeganTriggerActive: h.onDragBeganActive,
                onDragChangedTriggerActive: h.onDragChangedActive,
                onDragEndedTriggerActive: h.onDragEndedActive,
                onPanBeganTriggerActive: h.onPanBeganActive,
                onPanChangedTriggerActive: h.onPanChangedActive,
                onPanEndedTriggerActive: h.onPanEndedActive,
                onRotationBeganTriggerActive: h.onRotationBeganActive,
                onRotationChangedTriggerActive: h.onRotationChangedActive,
                onRotationEndedTriggerActive: h.onRotationEndedActive,
                onScaleBeganTriggerActive: h.onScaleBeganActive,
                onScaleChangedTriggerActive: h.onScaleChangedActive,
                onScaleEndedTriggerActive: h.onScaleEndedActive,
                globalRotationX: h.rotate.global.x,
                globalRotationY: h.rotate.global.y,
                globalRotationZ: h.rotate.global.z,
                globalTranslateX: h.translate.global.x,
                globalTranslateY: h.translate.global.y,
                globalTranslateZ: h.translate.global.z,
                rotationX: h.rotate.x,
                rotationY: h.rotate.y,
                rotationZ: h.rotate.z,
                translateX: h.translate.x,
                translateY: h.translate.y,
                translateZ: h.translate.z,
                scaleX: h.scale.x,
                scaleY: h.scale.y,
                scaleZ: h.scale.z
            });
            var j = i;
            AR.om.registerObjectForID(j, this), this.__defineSetter__("radius", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("radius", function () {
                return e
            }), this.__defineSetter__("slices", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("slices", function () {
                return e
            }), this.__defineSetter__("height", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("height", function () {
                return g
            })
        }
    }), AR.ObjectTracker = AR.ARchitectObject.extend({
        validateTrackerEfficiencyMode: function (a) {
            if (!AR.CONST.TRACKER_EFFICIENCY_MODE.isValidTrackerEfficiencyMode(a)) throw AR.EXCEPTION.create("trackerEfficiencyMode", AR.EXCEPTION.TYPE.OBJECT, "TRACKER_EFFICIENCY_MODE.___", typeof a);
            return a
        }, init: function (a, b) {
            var c;
            if (!a instanceof AR.TargetCollectionResource) throw AR.EXCEPTION.create("trackerSource", AR.EXCEPTION.TYPE.OBJECT, "AR.TargetCollectionResource");
            var d, e, f, g = a.__id, h = !0, i = AR.CONST.TRACKER_EFFICIENCY_MODE.HIGH_ACCURACY;
            b && (null != b.enabled && (h = _PROPERTY_VALIDATOR.validate("enabled", b.enabled, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.trackerEfficiencyMode && (i = this.validateTrackerEfficiencyMode(b.trackerEfficiencyMode)), b.onError && (d = _PROPERTY_VALIDATOR.validate("onError", b.onError, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onDisabled && (e = _PROPERTY_VALIDATOR.validate("onDisabled", b.onDisabled, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onTargetsLoaded && (f = _PROPERTY_VALIDATOR.validate("onTargetsLoaded", b.onTargetsLoaded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY))), c = AR.om.createObjectID(), AR.i.callAsync({
                objectId: c,
                trackerSourceId: g,
                is: "AR.i.objectTrackerInterface.createTracker",
                enabled: h,
                trackerEfficiencyMode: i,
                onDisabledTriggerActive: null != e,
                onErrorTriggerActive: null != d,
                onTargetsLoadedTriggerActive: null != f
            }), AR.om.registerObjectForID(c, this), this.__defineSetter__("__id", function () {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return c
            }), this.__defineSetter__("enabled", function (a) {
                a = _PROPERTY_VALIDATOR.validate("enabled", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    objectId: c,
                    is: "AR.i.objectTrackerInterface.setEnabled",
                    enabled: a
                })
            }), this.__defineGetter__("enabled", function () {
                return AR.i.callSync({objectId: c, is: "AR.i.objectTrackerInterface.isEnabled"})
            }), this.__defineSetter__("onError", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onError", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), d = a, AR.i.callAsync({
                    objectId: c,
                    is: "AR.i.objectTrackerInterface.setOnErrorTriggerActive",
                    onErrorTriggerActive: null != a
                })
            }), this.__defineGetter__("onError", function () {
                return d
            }), this.__defineSetter__("onDisabled", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDisabled", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), e = a, AR.i.callAsync({
                    objectId: c,
                    is: "AR.i.objectTrackerInterface.setOnDisabledTriggerActive",
                    onDisabledTriggerActive: null != a
                })
            }), this.__defineGetter__("onDisabled", function () {
                return e
            }), this.__defineSetter__("onTargetsLoaded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTargetsLoaded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), f = a, AR.i.callAsync({
                    objectId: c,
                    is: "AR.i.objectTrackerInterface.setOnTargetsLoadedTriggerActive",
                    onTargetsLoadedTriggerActive: null != a
                })
            }), this.__defineGetter__("onTargetsLoaded", function () {
                return f
            })
        }
    }), AR.ObjectTrackable = AR.ARObject.extend({
        init: function (a, b, c) {
            c = c || {};
            var d, e, f, g, h, i, j = this._super(c), k = _PROPERTY_VALIDATOR.validate("tracker", a, {
                    type: _PROPERTY_VALIDATOR.TYPE.CLASS,
                    ofType: AR.ARchitectObject
                }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET, function (a, b) {
                    if (b instanceof AR.ObjectTracker || b instanceof AR.BaseTracker) return b;
                    throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.OBJECT, "ObjectTracker")
                }),
                l = _PROPERTY_VALIDATOR.validate("targetName", b, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                m = new AR.ScreenSnapper(this, c.snapToScreen ? c.snapToScreen : null);
            c.onObjectRecognized && (h = _PROPERTY_VALIDATOR.validate("onObjectRecognized", c.onObjectRecognized, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onObjectLost && (i = _PROPERTY_VALIDATOR.validate("onObjectLost", c.onObjectLost, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onTrackingPlaneClick && (d = _PROPERTY_VALIDATOR.validate("onTrackingPlaneClick", c.onTrackingPlaneClick, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onTrackingPlaneDragBegan && (e = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragBegan", c.onTrackingPlaneDragBegan, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onTrackingPlaneDragChanged && (f = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragChanged", c.onTrackingPlaneDragChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onTrackingPlaneDragEnded && (g = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragEnded", c.onTrackingPlaneDragEnded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY));
            var n = _PROPERTY_VALIDATOR.validate("enableExtendedTracking", !!c.enableExtendedTracking && c.enableExtendedTracking, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY),
                o = _PROPERTY_VALIDATOR.validate("extendedTarget", null != c.extendedTarget || void 0 != c.extendedTarget ? c.extendedTarget : "*", _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY),
                p = _PROPERTY_VALIDATOR.validate("onExtendedTrackingQualityChanged", c.onExtendedTrackingQualityChanged ? c.onExtendedTrackingQualityChanged : null, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY),
                q = AR.om.createObjectID(), r = m.resolvedBoundingBox;
            AR.i.callAsync({
                objectId: q,
                is: "AR.i.objectTrackableInterface.createObjectTrackable",
                trackerId: k.__id,
                targetName: b,
                enabled: j.enabled,
                onClickTriggerActive: j.onClickTriggerActive,
                onDragBeganTriggerActive: j.onDragBeganTriggerActive,
                onDragChangedTriggerActive: j.onDragChangedTriggerActive,
                onDragEndedTriggerActive: j.onDragEndedTriggerActive,
                onPanBeganTriggerActive: j.onPanBeganTriggerActive,
                onPanChangedTriggerActive: j.onPanChangedTriggerActive,
                onPanEndedTriggerActive: j.onPanEndedTriggerActive,
                onRotationBeganTriggerActive: j.onRotationBeganTriggerActive,
                onRotationChangedTriggerActive: j.onRotationChangedTriggerActive,
                onRotationEndedTriggerActive: j.onRotationEndedTriggerActive,
                onScaleBeganTriggerActive: j.onScaleBeganTriggerActive,
                onScaleChangedTriggerActive: j.onScaleChangedTriggerActive,
                onScaleEndedTriggerActive: j.onScaleEndedTriggerActive,
                camDrawableIds: AR.__toJSONString__(AR.om.__getIds__(j.drawables.cam)),
                renderingOrder: j.renderingOrder,
                snapToScreenEnabled: m.enabled,
                screenSnapDelay: m.enableDelayed,
                snapToScreenEnabledOnExitFieldOfVision: m.enabledOnExitFieldOfVision,
                snapContainerId: r.id,
                snapPositionRight: r.right,
                snapPositionTop: r.top,
                snapPositionLeft: r.left,
                snapPositionBottom: r.bottom,
                onSnappedToScreenTriggerActive: null != m.onSnappedToScreen,
                onDelayedSnapInterruptionTriggerActive: null != m.onDelayedSnapInterruption,
                onObjectRecognizedTriggerActive: null != h,
                onObjectLostTriggerActive: null != i,
                enableExtendedTracking: n,
                extendedTarget: o,
                onExtendedTrackingQualityChangedTriggerActive: null != p,
                onTrackingPlaneClickTriggerActive: null != d,
                onTrackingPlaneDragBeganTriggerActive: null != e,
                onTrackingPlaneDragChangedTriggerActive: null != f,
                onTrackingPlaneDragEndedTriggerActive: null != g
            }), AR.om.registerObjectForID(q, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return q
            }), this.__defineSetter__("onTrackingPlaneClick", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingPlaneClick", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), d = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingPlaneClickTriggerActive: null != a,
                    is: "AR.i.objectTrackerInterface.setOnTrackingPlaneClickTriggerActive"
                })
            }), this.__defineGetter__("onTrackingPlaneClick", function () {
                return d
            }), this.__defineSetter__("onTrackingPlaneDragBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), e = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingPlaneDragBeganTriggerActive: null != a,
                    is: "AR.i.objectTrackerInterface.setOnTrackingPlaneDragBeganTriggerActive"
                })
            }), this.__defineGetter__("onTrackingPlaneDragBegan", function () {
                return e
            }), this.__defineSetter__("onTrackingPlaneDragChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), f = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingPlaneDragChangedTriggerActive: null != a,
                    is: "AR.i.objectTrackerInterface.setOnTrackingPlaneDragChangedTriggerActive"
                })
            }), this.__defineGetter__("onTrackingPlaneDragChanged", function () {
                return f
            }), this.__defineSetter__("onTrackingPlaneDragEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), g = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingPlaneDragEndedTriggerActive: null != a,
                    is: "AR.i.objectTrackerInterface.setOnTrackingPlaneDragEndedTriggerActive"
                })
            }), this.__defineGetter__("onTrackingPlaneDragEnded", function () {
                return g
            }), this.__defineSetter__("tracker", function (a) {
                throw AR.EXCEPTION.create("tracker", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("tracker", function () {
                return k
            }), this.__defineSetter__("targetName", function (a) {
                throw AR.EXCEPTION.create("targetName", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("targetName", function () {
                return l
            }), this.__defineSetter__("snapToScreen", function (a) {
                m = new AR.ScreenSnapper(this, a)
            }), this.__defineGetter__("snapToScreen", function () {
                return m
            }), this.__defineSetter__("onObjectRecognized", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onObjectRecognized", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), h = a, AR.i.callAsync({
                    objectId: this.__id,
                    onObjectRecognizedTriggerActive: null != a,
                    is: "AR.i.objectTrackableInterface.setOnObjectRecognizedTriggerActive"
                })
            }), this.__defineGetter__("onObjectRecognized", function () {
                return h
            }), this.__defineSetter__("onObjectLost", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onObjectLost", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), _onObjectost = a, AR.i.callAsync({
                    objectId: this.__id,
                    onObjectLostTriggerActive: null != a,
                    is: "AR.i.objectTrackableInterface.setOnObjectLostTriggerActive"
                })
            }), this.__defineGetter__("onObjectLost", function () {
                return i
            }), this.__defineSetter__("enableExtendedTracking", function (a) {
                throw AR.EXCEPTION.create("enableExtendedTracking", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("enableExtendedTracking", function () {
                return n
            }), this.__defineSetter__("extendedTarget", function (a) {
                o = _PROPERTY_VALIDATOR.validate("extendedTarget", null != a || void 0 != a ? a : "*", _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    objectId: q,
                    is: "AR.i.objectTrackableInterface.setExtendedTarget",
                    extendedTarget: o
                })
            }), this.__defineGetter__("extendedTarget", function () {
                return o
            }), this.__defineSetter__("onExtendedTrackingQualityChanged", function (a) {
                p = _PROPERTY_VALIDATOR.validate("onExtendedTrackingQualityChanged", a || null, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: q,
                    is: "AR.i.objectTrackableInterface.setOnExtendedTrackingQualityChangedTriggerActive",
                    onExtendedTrackingQualityChangedTriggerActive: null != p
                })
            }), this.__defineGetter__("onExtendedTrackingQualityChanged", function () {
                return p
            })
        }, stopExtendedTracking: function () {
            AR.i.callAsync({objectId: this.__id, is: "AR.i.objectTrackableInterface.stopExtendedTracking"})
        }
    }), AR.HtmlDrawable = AR.Drawable2D.extend({
        init: function (a, b, c) {
            var d = function (a) {
                    return -1 == a.indexOf("<body") ? "<html><head/><body style='background:transparent;margin:0;'>" + a + "</body></html>" : a
                }, e = null, f = null, g = "#00000000", h = null, i = null, j = 256, k = 256, l = 1024, m = !1, n = !1,
                o = null;
            if (!a) throw AR.EXCEPTION.create("content", AR.EXCEPTION.TYPE.UNDEFINED);
            e = _PROPERTY_VALIDATOR.validate("content.html", a.html, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), f = _PROPERTY_VALIDATOR.validate("content.uri", a.uri, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY);
            var p = _PROPERTY_VALIDATOR.validate("width", b, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
            if (!e && !f) throw AR.EXCEPTION.create("content.html and content.uri", AR.EXCEPTION.TYPE.UNDEFINED);
            if (c) {
                if (c.onLoaded && (h = _PROPERTY_VALIDATOR.validate("onLoaded", c.onLoaded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onError && (i = _PROPERTY_VALIDATOR.validate("onError", c.onError, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.viewportWidth && (j = _PROPERTY_VALIDATOR.validate("viewportWidth", c.viewportWidth, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)) > l) throw AR.EXCEPTION.create("viewportWidth", AR.EXCEPTION.TYPE.RANGE, "(0, " + l + "]");
                if (c.viewportHeight && (k = _PROPERTY_VALIDATOR.validate("viewportHeight", c.viewportHeight, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)) > l) throw AR.EXCEPTION.create("viewportHeight", AR.EXCEPTION.TYPE.RANGE, "(0, " + l + "]");
                c.backgroundColor && (g = _PROPERTY_VALIDATOR.validate("backgroundColor", c.backgroundColor, _PROPERTY_VALIDATOR.TYPE.RGBA, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.clickThroughEnabled && (m = _PROPERTY_VALIDATOR.validate("clickThroughEnabled", c.clickThroughEnabled, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.allowDocumentLocationChanges && (n = _PROPERTY_VALIDATOR.validate("allowDocumentLocationChanges", c.allowDocumentLocationChanges, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onDocumentLocationChanged && (o = _PROPERTY_VALIDATOR.validate("onDocumentLocationChanged", c.onDocumentLocationChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.mirrored || (c.mirrored = !1)
            } else c = {mirrored: !1};
            f && (f = AR.__resourceUrl(f)), e && (e = d(e));
            var q = this._super(AR.CONST.HORIZONTAL_ANCHOR.CENTER, AR.CONST.VERTICAL_ANCHOR.MIDDLE, c),
                r = AR.om.createObjectID();
            AR.i.callAsync({
                objectId: r,
                is: "AR.i.htmlDrawableInterface.createHtmlDrawable",
                enabled: q.enabled,
                mirrored: q.mirrored,
                rotatesToCamera: q.rotatesToCamera,
                zOrder: q.zOrder,
                onClickTriggerActive: q.onClickActive,
                onDragBeganTriggerActive: q.onDragBeganActive,
                onDragChangedTriggerActive: q.onDragChangedActive,
                onDragEndedTriggerActive: q.onDragEndedActive,
                onPanBeganTriggerActive: q.onPanBeganActive,
                onPanChangedTriggerActive: q.onPanChangedActive,
                onPanEndedTriggerActive: q.onPanEndedActive,
                onRotationBeganTriggerActive: q.onRotationBeganActive,
                onRotationChangedTriggerActive: q.onRotationChangedActive,
                onRotationEndedTriggerActive: q.onRotationEndedActive,
                onScaleBeganTriggerActive: q.onScaleBeganActive,
                onScaleChangedTriggerActive: q.onScaleChangedActive,
                onScaleEndedTriggerActive: q.onScaleEndedActive,
                horizontalAnchor: q.horizontalAnchor,
                verticalAnchor: q.verticalAnchor,
                opacity: q.opacity,
                htmlOrUri: AR.__toJSONString__({html: e, uri: f}),
                viewportWidth: j,
                viewportHeight: k,
                width: p,
                onLoadedTriggerActive: null != h,
                onErrorTriggerActive: null != i,
                clickThroughEnabled: m,
                allowDocumentLocationChanges: n,
                onDocumentLocationChangedTriggerActive: null != o,
                backgroundColor: g,
                globalRotationX: q.rotate.global.x,
                globalRotationY: q.rotate.global.y,
                globalRotationZ: q.rotate.global.z,
                globalTranslateX: q.translate.global.x,
                globalTranslateY: q.translate.global.y,
                globalTranslateZ: q.translate.global.z,
                rotationX: q.rotate.x,
                rotationY: q.rotate.y,
                rotationZ: q.rotate.z,
                translateX: q.translate.x,
                translateY: q.translate.y,
                translateZ: q.translate.z,
                scaleX: q.scale.x,
                scaleY: q.scale.y,
                scaleZ: q.scale.z
            });
            var s = r;
            AR.om.registerObjectForID(s, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return s
            }), this.__defineSetter__("html", function (a) {
                a = _PROPERTY_VALIDATOR.validate("html", a, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), a = d(a), AR.i.callAsync({
                    is: "AR.i.htmlDrawableInterface.setHtml",
                    objectId: s,
                    html: a
                }), e = a
            }), this.__defineGetter__("html", function () {
                return e
            }), this.__defineSetter__("uri", function (a) {
                a = _PROPERTY_VALIDATOR.validate("uri", a, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), a && (a = AR.__resourceUrl(a)), AR.i.callAsync({
                    is: "AR.i.htmlDrawableInterface.setUri",
                    objectId: s,
                    uri: a
                }), f = a
            }), this.__defineGetter__("uri", function () {
                return f
            }), this.__defineSetter__("backgroundColor", function (a) {
                a = _PROPERTY_VALIDATOR.validate("backgroundColor", a, _PROPERTY_VALIDATOR.TYPE.RGBA, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    is: "AR.i.htmlDrawableInterface.setBackgroundColor",
                    objectId: s,
                    backgroundColor: a
                }), g = a
            }), this.__defineGetter__("backgroundColor", function () {
                return g
            }), this.__defineSetter__("width", function (a) {
                a = _PROPERTY_VALIDATOR.validate("width", a, _PROPERTY_VALIDATOR.TYPE.NON_NEGATIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    is: "AR.i.htmlDrawableInterface.setWidth",
                    objectId: s,
                    width: a
                }), p = a
            }), this.__defineGetter__("width", function () {
                return this.__isDirty("width") ? AR.i.callSync({
                    is: "AR.i.htmlDrawableInterface.getWidth",
                    objectId: s
                }) : p
            }), this.__defineSetter__("viewportWidth", function (a) {
                if ((a = _PROPERTY_VALIDATOR.validate("viewportWidth", a, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)) > l) throw AR.EXCEPTION.create("viewportWidth", AR.EXCEPTION.TYPE.RANGE, "(0, " + l + "]");
                AR.i.callAsync({
                    is: "AR.i.htmlDrawableInterface.setViewportWidth",
                    objectId: s,
                    viewportWidth: a
                }), j = a
            }), this.__defineGetter__("viewportWidth", function () {
                return j
            }), this.__defineSetter__("viewportHeight", function (a) {
                if ((a = _PROPERTY_VALIDATOR.validate("viewportHeight", a, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)) > l) throw AR.EXCEPTION.create("viewportHeight", AR.EXCEPTION.TYPE.RANGE, "(0, " + l + "]");
                AR.i.callAsync({
                    is: "AR.i.htmlDrawableInterface.setViewportHeight",
                    objectId: s,
                    viewportHeight: a
                }), k = a
            }), this.__defineGetter__("viewportHeight", function () {
                return k
            }), this.__defineSetter__("clickThroughEnabled", function (a) {
                a = _PROPERTY_VALIDATOR.validate("clickThroughEnabled", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    is: "AR.i.htmlDrawableInterface.setClickThroughEnabled",
                    objectId: s,
                    clickThroughEnabled: a
                }), m = a
            }), this.__defineGetter__("clickThroughEnabled", function () {
                return m
            }), this.__defineSetter__("allowDocumentLocationChanges", function (a) {
                a = _PROPERTY_VALIDATOR.validate("allowDocumentLocationChanges", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    is: "AR.i.htmlDrawableInterface.setAllowDocumentLocationChanges",
                    objectId: s,
                    allowDocumentLocationChanges: a
                }), n = a
            }), this.__defineGetter__("allowDocumentLocationChanges", function () {
                return n
            }), this.__defineSetter__("onDocumentLocationChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDocumentLocationChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), o = a, AR.i.callAsync({
                    is: "AR.i.htmlDrawableInterface.setOnDocumentLocationChangedTriggerActive",
                    objectId: s,
                    onDocumentLocationChangedTriggerActive: null != a
                })
            }), this.__defineGetter__("onDocumentLocationChanged", function () {
                return o
            }), this.__defineSetter__("onLoaded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onLoaded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), h = a, AR.i.callAsync({
                    is: "AR.i.htmlDrawableInterface.setOnLoadedTriggerActive",
                    objectId: s,
                    onLoadedTriggerActive: null != a
                })
            }), this.__defineGetter__("onLoaded", function () {
                return h
            }), this.__defineSetter__("onError", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onError", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), i = a, AR.i.callAsync({
                    is: "AR.i.htmlDrawableInterface.setOnErrorTriggerActive",
                    objectId: s,
                    onErrorTriggerActive: null != a
                })
            }), this.__defineGetter__("onError", function () {
                return i
            })
        }, evalJavaScript: function (a) {
            _PROPERTY_VALIDATOR.validate("js", a, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                is: "AR.i.htmlDrawableInterface.evalJavaScript",
                objectId: this.__id,
                js: a
            })
        }
    }), AR.ImageTracker = AR.ARchitectObject.extend({
        validateExtendedRangeRecognition: function (a) {
            if (!AR.CONST.IMAGE_RECOGNITION_RANGE_EXTENSION.isValidRangeExtension(a)) throw AR.EXCEPTION.create("extendedRangeRecognition", AR.EXCEPTION.TYPE.OBJECT, "IMAGE_RECOGNITION_RANGE_EXTENSION.___", typeof a);
            return a
        }, validateTrackerEfficiencyMode: function (a) {
            if (!AR.CONST.TRACKER_EFFICIENCY_MODE.isValidTrackerEfficiencyMode(a)) throw AR.EXCEPTION.create("trackerEfficiencyMode", AR.EXCEPTION.TYPE.OBJECT, "TRACKER_EFFICIENCY_MODE.___", typeof a);
            return a
        }, init: function (a, b) {
            if (!(a instanceof AR.TargetCollectionResource || a instanceof AR.CloudRecognitionService)) throw AR.EXCEPTION.create("trackerSource", AR.EXCEPTION.TYPE.OBJECT, "AR.TargetCollectionResource or AR.CloudRecognitionService");
            var c, d, e, f, g, h = a.__id, i = !0, j = AR.CONST.IMAGE_RECOGNITION_RANGE_EXTENSION.AUTO, k = 1,
                l = AR.CONST.TRACKER_EFFICIENCY_MODE.HIGH_ACCURACY, m = 0, n = 0, o = 0;
            if (b) {
                if (null != b.enabled && (i = _PROPERTY_VALIDATOR.validate("enabled", b.enabled, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), null != b.physicalTargetImageHeights) {
                    for (var p in b.physicalTargetImageHeights) _PROPERTY_VALIDATOR.validate("physicalTargetImageHeights", b.physicalTargetImageHeights[p], _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
                    d = b.physicalTargetImageHeights
                }
                null != b.extendedRangeRecognition && (j = this.validateExtendedRangeRecognition(b.extendedRangeRecognition)), b.maximumNumberOfConcurrentlyTrackableTargets && (k = _PROPERTY_VALIDATOR.validate("maximumNumberOfConcurrentlyTrackableTargets", b.maximumNumberOfConcurrentlyTrackableTargets, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), b.trackerEfficiencyMode && (l = this.validateTrackerEfficiencyMode(b.trackerEfficiencyMode)), b.onTargetsLoaded && (e = _PROPERTY_VALIDATOR.validate("onTargetsLoaded", b.onTargetsLoaded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onError && (f = _PROPERTY_VALIDATOR.validate("onError", b.onError, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onDisabled && (g = _PROPERTY_VALIDATOR.validate("onDisabled", b.onDisabled, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onDistanceChangedThreshold && (m = _PROPERTY_VALIDATOR.validate("onDistanceChangedThreshold", b.onDistanceChangedThreshold, _PROPERTY_VALIDATOR.TYPE.POSITIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), b.onTranslationChangedThreshold && (n = _PROPERTY_VALIDATOR.validate("onTranslationChangedThreshold", b.onTranslationChangedThreshold, _PROPERTY_VALIDATOR.TYPE.POSITIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET)), b.onRotationChangedThreshold && (o = _PROPERTY_VALIDATOR.validate("onRotationChangedThreshold", b.onRotationChangedThreshold, _PROPERTY_VALIDATOR.TYPE.POSITIVE, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET))
            }
            c = AR.om.createObjectID(), AR.i.callAsync({
                objectId: c,
                is: "AR.i.imageTrackerInterface.createTracker",
                sourceId: h,
                enabled: i,
                physicalTargetImageHeights: AR.__toJSONString__(d),
                extendedRangeRecognition: j,
                maximumNumberOfConcurrentlyTrackableTargets: k,
                trackerEfficiencyMode: l,
                onDisabledTriggerActive: null != g,
                onTargetsLoadedTriggerActive: null != e,
                onErrorTriggerActive: null != f,
                onDistanceChangedThreshold: m,
                onTranslationChangedThreshold: n,
                onRotationChangedThreshold: o
            }), AR.om.registerObjectForID(c, this), this.__defineSetter__("__id", function () {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return c
            }), this.__defineSetter__("__maximumNumberOfConcurrentlyTrackableTargets", function () {
                throw AR.EXCEPTION.create("__maximumNumberOfConcurrentlyTrackableTargets", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__maximumNumberOfConcurrentlyTrackableTargets", function () {
                return k
            }), this.__defineSetter__("enabled", function (a) {
                a = _PROPERTY_VALIDATOR.validate("enabled", a, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    objectId: c,
                    is: "AR.i.imageTrackerInterface.setEnabled",
                    enabled: a
                })
            }), this.__defineGetter__("enabled", function () {
                return AR.i.callSync({objectId: c, is: "AR.i.imageTrackerInterface.isEnabled"})
            }), this.__defineSetter__("physicalTargetImageHeights", function (a) {
                for (var b in a) _PROPERTY_VALIDATOR.validate("physicalTargetImageHeights", a[b], _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
                d = a, AR.i.callAsync({
                    objectId: c,
                    is: "AR.i.imageTrackerInterface.setPhysicalTargetImageHeights",
                    physicalTargetImageHeights: d
                })
            }), this.__defineGetter__("physicalTargetImageHeights", function () {
                return d
            }), this.__defineSetter__("onTargetsLoaded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTargetsLoaded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), e = a, AR.i.callAsync({
                    objectId: c,
                    is: "AR.i.imageTrackerInterface.setOnTargetsLoadedTriggerActive",
                    onTargetsLoadedTriggerActive: null != a
                })
            }), this.__defineGetter__("onTargetsLoaded", function () {
                return e
            }), this.__defineSetter__("onError", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onError", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), f = a, AR.i.callAsync({
                    objectId: c,
                    is: "AR.i.imageTrackerInterface.setOnErrorTriggerActive",
                    onErrorTriggerActive: null != a
                })
            }), this.__defineGetter__("onError", function () {
                return f
            }), this.__defineSetter__("onDisabled", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onDisabled", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), g = a, AR.i.callAsync({
                    objectId: c,
                    is: "AR.i.imageTrackerInterface.setOnDisabledTriggerActive",
                    onDisabledTriggerActive: null != a
                })
            }), this.__defineGetter__("onDisabled", function () {
                return g
            }), this.__defineSetter__("onDistanceChangedThreshold", function (a) {
                m = _PROPERTY_VALIDATOR.validate("onDistanceChangedThreshold", a, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    objectId: c,
                    is: "AR.i.imageTrackerInterface.setOnDistanceChangedThreshold",
                    onDistanceChangedThreshold: m
                })
            }), this.__defineGetter__("onDistanceChangedThreshold", function () {
                return m
            }), this.__defineSetter__("onTranslationChangedThreshold", function (a) {
                n = _PROPERTY_VALIDATOR.validate("onTranslationChangedThreshold", a, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    objectId: c,
                    is: "AR.i.imageTrackerInterface.setOnTranslationChangedThreshold",
                    onTranslationChangedThreshold: n
                })
            }), this.__defineGetter__("onTranslationChangedThreshold", function () {
                return n
            }), this.__defineSetter__("onRotationChangedThreshold", function (a) {
                o = _PROPERTY_VALIDATOR.validate("onRotationChangedThreshold", a, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    objectId: c,
                    is: "AR.i.imageTrackerInterface.setOnRotationChangedThreshold",
                    onRotationChangedThreshold: o
                })
            }), this.__defineGetter__("onRotationChangedThreshold", function () {
                return o
            })
        }
    }), AR.ImageTarget = AR.ARchitectObject.extend({
        init: function (a, b, c) {
            var d = [], e = a, f = b, g = c, h = function () {
            }, i = function () {
            }, j = function () {
            };
            this.__defineSetter__("__trackableId", function () {
                throw AR.EXCEPTION.create("__trackableId", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__trackableId", function () {
                return g
            }), this.__defineSetter__("__drawables", function (a) {
                d = a
            }), this.__defineGetter__("__drawables", function () {
                return d
            }), this.__defineSetter__("name", function () {
                throw AR.EXCEPTION.create("name", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("name", function () {
                return e
            }), this.__defineSetter__("uniqueId", function () {
                throw AR.EXCEPTION.create("uniqueId", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("uniqueId", function () {
                return f
            }), this.__defineSetter__("onDistanceChanged", function (a) {
                h = _PROPERTY_VALIDATOR.validate("onDistanceChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: this.__trackableId,
                    is: "AR.i.imageTrackableInterface.setImageTargetOnDistanceChangedTriggerActive",
                    imageTargetName: this.name,
                    imageTargetUniqueId: this.uniqueId,
                    onDistanceChangedTriggerActive: null != h
                })
            }), this.__defineGetter__("onDistanceChanged", function () {
                return h
            }), this.__defineSetter__("onTranslationChanged", function (a) {
                i = _PROPERTY_VALIDATOR.validate("onTranslationChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: this.__trackableId,
                    is: "AR.i.imageTrackableInterface.setImageTargetOnTranslationChangedTriggerActive",
                    imageTargetName: this.name,
                    imageTargetUniqueId: this.uniqueId,
                    onTranslationChangedTriggerActive: null != i
                })
            }), this.__defineGetter__("onTranslationChanged", function () {
                return i
            }), this.__defineSetter__("onRotationChanged", function (a) {
                j = _PROPERTY_VALIDATOR.validate("onRotationChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: this.__trackableId,
                    is: "AR.i.imageTrackableInterface.setImageTargetOnRotationChangedTriggerActive",
                    imageTargetName: this.name,
                    imageTargetUniqueId: this.uniqueId,
                    onRotationChangedTriggerActive: null != j
                })
            }), this.__defineGetter__("onRotationChanged", function () {
                return j
            })
        }, getDistanceTo: function (a) {
            return a = _PROPERTY_VALIDATOR.validate("destinationTarget", a, {
                type: _PROPERTY_VALIDATOR.TYPE.OBJECT,
                ofType: AR.ImageTarget
            }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callSync({
                objectId: this.__trackableId,
                is: "AR.i.imageTrackableInterface.getImageTargetDistanceTo",
                imageTargetName: this.name,
                imageTargetUniqueId: this.uniqueId,
                destinationImageTargetName: a.name,
                destinationImageTargetUniqueId: a.uniqueId
            })
        }, getTranslationTo: function (a) {
            return a = _PROPERTY_VALIDATOR.validate("destinationTarget", a, {
                type: _PROPERTY_VALIDATOR.TYPE.OBJECT,
                ofType: AR.ImageTarget
            }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callSync({
                objectId: this.__trackableId,
                is: "AR.i.imageTrackableInterface.getImageTargetTranslationTo",
                imageTargetName: this.name,
                imageTargetUniqueId: this.uniqueId,
                destinationImageTargetName: a.name,
                destinationImageTargetUniqueId: a.uniqueId
            })
        }, getRotationTo: function (a) {
            return a = _PROPERTY_VALIDATOR.validate("destinationTarget", a, {
                type: _PROPERTY_VALIDATOR.TYPE.OBJECT,
                ofType: AR.ImageTarget
            }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callSync({
                objectId: this.__trackableId,
                is: "AR.i.imageTrackableInterface.getImageTargetRotationTo",
                imageTargetName: this.name,
                imageTargetUniqueId: this.uniqueId,
                destinationImageTargetName: a.name,
                destinationImageTargetUniqueId: a.uniqueId
            })
        }
    }), AR.TargetCollectionResource = AR.ARchitectObject.extend({
        init: function (a, b) {
            var c, d, e, f,
                g = _PROPERTY_VALIDATOR.validate("url", a, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
            b && (b.onProgress && (c = _PROPERTY_VALIDATOR.validate("onProgress", b.onProgress, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onLoaded && (d = _PROPERTY_VALIDATOR.validate("onLoaded", b.onLoaded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), b.onError && (e = _PROPERTY_VALIDATOR.validate("onError", b.onError, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY))), f = AR.om.createObjectID(), AR.i.callAsync({
                objectId: f,
                is: "AR.i.targetCollectionResourceInterface.createTargetCollectionResource",
                url: AR.__resourceUrl(g),
                onProgressTriggerActive: null != c,
                onLoadedTriggerActive: null != d,
                onErrorTriggerActive: null != e
            }), AR.om.registerObjectForID(f, this), this.__defineSetter__("URL", function () {
                throw AR.EXCEPTION.create("URL", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("URL", function () {
                return g
            }), this.__defineSetter__("loading", function () {
                throw AR.EXCEPTION.create("loading", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("loading", function () {
                return AR.i.callSync({objectId: f, is: "AR.i.targetCollectionResourceInterface.isLoading"})
            }), this.__defineSetter__("onProgress", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onProgress", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), c = a, AR.i.callAsync({
                    objectId: f,
                    is: "AR.i.targetCollectionResourceInterface.setOnProgressTriggerActive",
                    onProgressTriggerActive: null != a
                })
            }), this.__defineGetter__("onProgress", function () {
                return c
            }), this.__defineSetter__("onLoaded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onLoaded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), d = a, AR.i.callAsync({
                    objectId: f,
                    is: "AR.i.targetCollectionResourceInterface.setOnLoadedTriggerActive",
                    onLoadedTriggerActive: null != a
                })
            }), this.__defineGetter__("onLoaded", function () {
                return d
            }), this.__defineSetter__("onError", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onError", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), e = a, AR.i.callAsync({
                    objectId: f,
                    is: "AR.i.targetCollectionResourceInterface.setOnErrorTriggerActive",
                    onErrorTriggerActive: null != a
                })
            }), this.__defineGetter__("onError", function () {
                return e
            }), this.__defineSetter__("__id", function () {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return f
            }), this.cancel = function () {
                AR.i.callAsync({objectId: f, is: "AR.i.targetCollectionResourceInterface.cancel"})
            }
        }
    }), AR.CloudRecognitionService = AR.ARchitectObject.extend({
        init: function (a, b, c, d) {
            var e, f, g, h;
            "string" == typeof a && "string" == typeof b && void 0 == c && void 0 == d ? (e = _PROPERTY_VALIDATOR.validate("clientToken", a, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), f = "", g = _PROPERTY_VALIDATOR.validate("targetCollectionId", b, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), h = void 0) : "string" == typeof a && "string" == typeof b && "object" == typeof c && void 0 == d ? (e = _PROPERTY_VALIDATOR.validate("clientToken", a, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), f = "", g = _PROPERTY_VALIDATOR.validate("targetCollectionId", b, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), h = c) : "string" == typeof a && "string" == typeof b && "string" == typeof c && void 0 == d ? (e = _PROPERTY_VALIDATOR.validate("clientToken", a, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), f = _PROPERTY_VALIDATOR.validate("groupId", b, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), g = _PROPERTY_VALIDATOR.validate("targetCollectionId", c, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), h = void 0) : "string" == typeof a && "string" == typeof b && "string" == typeof c && "object" == typeof d && (e = _PROPERTY_VALIDATOR.validate("clientToken", a, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), f = _PROPERTY_VALIDATOR.validate("groupId", b, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), g = _PROPERTY_VALIDATOR.validate("targetCollectionId", c, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), h = d);
            var i, j, k, l, m, n, o = e, p = f, q = g, r = "", s = 1e3;
            h && (h.onInitialized && (i = _PROPERTY_VALIDATOR.validate("onInitialized", h.onInitialized, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), h.onError && (j = _PROPERTY_VALIDATOR.validate("onError", h.onError, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), h.cloudRecognitionServerURL && (r = _PROPERTY_VALIDATOR.validate("cloudRecognitionServerURL", h.cloudRecognitionServerURL, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY))), k = AR.om.createObjectID(), AR.i.callAsync({
                objectId: k,
                is: "AR.i.cloudRecognitionServiceInterface.createCloudRecognitionService",
                clientToken: o,
                groupId: p,
                targetCollectionId: q,
                onInitializedTriggerActive: null != i,
                onErrorTriggerActive: null != j,
                cloudRecognitionServerURL: r
            }), AR.om.registerObjectForID(k, this), this.__defineSetter__("clientToken", function () {
                throw AR.EXCEPTION.create("clientToken", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("clientToken", function () {
                return o
            }), this.__defineSetter__("groupId", function () {
                throw AR.EXCEPTION.create("groupId", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("groupId", function () {
                return p
            }), this.__defineSetter__("targetCollectionId", function () {
                throw AR.EXCEPTION.create("targetCollectionId", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("targetCollectionId", function () {
                return q
            }), this.__defineSetter__("onInitialized", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onInitialized", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), i = a, AR.i.callAsync({
                    objectId: k,
                    is: "AR.i.cloudRecognitionServiceInterface.setOnInitializedTriggerActive",
                    onInitializedTriggerActive: null != a
                })
            }), this.__defineGetter__("onInitialized", function () {
                return i
            }), this.__defineSetter__("onError", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onError", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), j = a, AR.i.callAsync({
                    objectId: k,
                    is: "AR.i.cloudRecognitionServiceInterface.setOnErrorTriggerActive",
                    onErrorTriggerActive: null != a
                })
            }), this.__defineGetter__("onError", function () {
                return j
            }), this.__defineSetter__("__id", function () {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return k
            }), this.recognize = function (a, b) {
                l = _PROPERTY_VALIDATOR.validate("onRecognized", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), m = _PROPERTY_VALIDATOR.validate("onError", b, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    is: "AR.i.cloudRecognitionServiceInterface.recognize",
                    objectId: k,
                    onRecognizedTriggerActive: null != l,
                    onRecognitionErrorTriggerActive: null != m
                })
            }, this.startContinuousRecognition = function (a, b, c, d) {
                s = _PROPERTY_VALIDATOR.validate("interval", a, _PROPERTY_VALIDATOR.TYPE.POSITIVE_INT, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET, function (a, b) {
                    return b < 500 && AR.logger.error("The supplied interval is too short. A minimum interval of 500 ms is required. Continuous recognition is started with 500 ms."), Math.max(b, 500)
                }), l = _PROPERTY_VALIDATOR.validate("onRecognized", c, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), m = _PROPERTY_VALIDATOR.validate("onRecognitionError", d, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), n = _PROPERTY_VALIDATOR.validate("onInterruption", b, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    is: "AR.i.cloudRecognitionServiceInterface.startContinuousRecognition",
                    objectId: k,
                    continuousInterval: s,
                    onRecognizedTriggerActive: null != l,
                    onRecognitionErrorTriggerActive: null != m,
                    onContinuousRecognitionInterruptionTriggerActive: null != n
                })
            }, this.stopContinuousRecognition = function () {
                AR.i.callAsync({is: "AR.i.cloudRecognitionServiceInterface.stopContinuousRecognition", objectId: k})
            }, this.__defineSetter__("onRecognized", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onRecognized", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), l = a, AR.i.callAsync({
                    objectId: k,
                    is: "AR.i.cloudRecognitionServiceInterface.setOnRecognizedTriggerActive",
                    onRecognizedTriggerActive: null != a
                })
            }), this.__defineGetter__("onRecognized", function () {
                return l
            }), this.__defineSetter__("onRecognitionError", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onRecognitionError", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), m = a, AR.i.callAsync({
                    objectId: k,
                    is: "AR.i.cloudRecognitionServiceInterface.setOnRecognitionErrorTriggerActive",
                    onRecognitionErrorTriggerActive: null != a
                })
            }), this.__defineGetter__("onRecognitionError", function () {
                return m
            }), this.__defineSetter__("onContinuousRecognitionInterruption", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onContinuousRecognitionInterruption", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), n = a, AR.i.callAsync({
                    objectId: k,
                    is: "AR.i.cloudRecognitionServiceInterface.setOnContinuousRecognitionInterruptionTriggerActive",
                    onContinuousRecognitionInterruptionTriggerActive: null != a
                })
            }), this.__defineGetter__("onContinuousRecognitionInterruption", function () {
                return n
            })
        }
    }), AR.ImageTrackable = AR.ARObject.extend({
        init: function (a, b, c) {
            c = c || {};
            var d = this._super(c), e = _PROPERTY_VALIDATOR.validate("tracker", a, {
                type: _PROPERTY_VALIDATOR.TYPE.CLASS,
                ofType: AR.ARchitectObject
            }, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET, function (a, b) {
                if (b instanceof AR.ImageTracker || b instanceof AR.BaseTracker) return b;
                throw AR.EXCEPTION.create(a, AR.EXCEPTION.TYPE.OBJECT, "ImageTracker (or deprecated Cloud-/ClientTracker) ")
            });
            if (c.snapToScreen && e.__maximumNumberOfConcurrentlyTrackableTargets > 1) throw AR.EXCEPTION.create("snapToScreen", AR.EXCEPTION.TYPE.ILLEGAL_STATE, "SnapToScreen may not be set when tracking multiple concurrent images.");
            var f, g, h, i, j, k,
                l = _PROPERTY_VALIDATOR.validate("targetName", b, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET),
                m = new AR.ScreenSnapper(this, c.snapToScreen ? c.snapToScreen : null),
                n = new AR.DistanceToTargetController(this, c.distanceToTarget ? c.distanceToTarget : null),
                o = _PROPERTY_VALIDATOR.validate("enableExtendedTracking", !!c.enableExtendedTracking && c.enableExtendedTracking, _PROPERTY_VALIDATOR.TYPE.BOOLEAN, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY),
                p = _PROPERTY_VALIDATOR.validate("extendedTarget", null != c.extendedTarget || void 0 != c.extendedTarget ? c.extendedTarget : "*", _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY),
                q = _PROPERTY_VALIDATOR.validate("onExtendedTrackingQualityChanged", c.onExtendedTrackingQualityChanged ? c.onExtendedTrackingQualityChanged : null, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY),
                r = [];
            c.triggers && (c.triggers.onEnterFieldOfVision && (j = _PROPERTY_VALIDATOR.validate("triggers.onEnterFieldOfVision", c.triggers.onEnterFieldOfVision, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.triggers.onExitFieldOfVision && (k = _PROPERTY_VALIDATOR.validate("triggers.onExitFieldOfVision", c.triggers.onExitFieldOfVision, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY))), c.onEnterFieldOfVision && (j = _PROPERTY_VALIDATOR.validate("onEnterFieldOfVision", c.onEnterFieldOfVision, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onExitFieldOfVision && (k = _PROPERTY_VALIDATOR.validate("onExitFieldOfVision", c.onExitFieldOfVision, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY));
            var s, t;
            c.onImageRecognized && (s = _PROPERTY_VALIDATOR.validate("onImageRecognized", c.onImageRecognized, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onImageLost && (t = _PROPERTY_VALIDATOR.validate("onImageLost", c.onImageLost, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onTrackingPlaneClick && (f = _PROPERTY_VALIDATOR.validate("onTrackingPlaneClick", c.onTrackingPlaneClick, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onTrackingPlaneDragBegan && (g = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragBegan", c.onTrackingPlaneDragBegan, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onTrackingPlaneDragChanged && (h = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragChanged", c.onTrackingPlaneDragChanged, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)), c.onTrackingPlaneDragEnded && (i = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragEnded", c.onTrackingPlaneDragEnded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY));
            var u = AR.om.createObjectID(), v = m.resolvedBoundingBox;
            AR.i.callAsync({
                objectId: u,
                is: "AR.i.imageTrackableInterface.createImageTrackable",
                trackerId: e.__id,
                targetName: b,
                enabled: d.enabled,
                onEnterFieldOfVisionTriggerActive: null != j,
                onExitFieldOfVisionTriggerActive: null != k,
                onClickTriggerActive: d.onClickTriggerActive,
                onDragBeganTriggerActive: d.onDragBeganTriggerActive,
                onDragChangedTriggerActive: d.onDragChangedTriggerActive,
                onDragEndedTriggerActive: d.onDragEndedTriggerActive,
                onPanBeganTriggerActive: d.onPanBeganTriggerActive,
                onPanChangedTriggerActive: d.onPanChangedTriggerActive,
                onPanEndedTriggerActive: d.onPanEndedTriggerActive,
                onRotationBeganTriggerActive: d.onRotationBeganTriggerActive,
                onRotationChangedTriggerActive: d.onRotationChangedTriggerActive,
                onRotationEndedTriggerActive: d.onRotationEndedTriggerActive,
                onScaleBeganTriggerActive: d.onScaleBeganTriggerActive,
                onScaleChangedTriggerActive: d.onScaleChangedTriggerActive,
                onScaleEndedTriggerActive: d.onScaleEndedTriggerActive,
                camDrawableIds: AR.__toJSONString__(AR.om.__getIds__(d.drawables.cam)),
                renderingOrder: d.renderingOrder,
                snapToScreenEnabled: m.enabled,
                screenSnapDelay: m.enableDelayed,
                snapToScreenEnabledOnExitFieldOfVision: m.enabledOnExitFieldOfVision,
                snapContainerId: v.id,
                snapPositionRight: v.right,
                snapPositionTop: v.top,
                snapPositionLeft: v.left,
                snapPositionBottom: v.bottom,
                onSnappedToScreenTriggerActive: null != m.onSnappedToScreen,
                onDelayedSnapInterruptionTriggerActive: null != m.onDelayedSnapInterruption,
                distanceToTargetChangedThreshold: n.changedThreshold,
                distanceToTargetChangedTriggerActive: null != n.onDistanceChanged,
                enableExtendedTracking: o,
                extendedTarget: p,
                onExtendedTrackingQualityChangedTriggerActive: null != q,
                onImageRecognizedTriggerActive: null != s,
                onImageLostTriggerActive: null != t,
                onTrackingPlaneClickTriggerActive: null != f,
                onTrackingPlaneDragBeganTriggerActive: null != g,
                onTrackingPlaneDragChangedTriggerActive: null != h,
                onTrackingPlaneDragEndedTriggerActive: null != i
            }), AR.om.registerObjectForID(u, this), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return u
            }), this.__createImageTarget = function (a, b) {
                var c = new AR.ImageTarget(a, b, u);
                return r.push({name: a, uniqueId: b, target: c}), c
            }, this.__getImageTarget = function (a, b) {
                var c;
                return r.forEach(function (d) {
                    d.name == a && d.uniqueId == b && (c = d.target)
                }), c
            }, this.__destroyImageTarget = function (a, b) {
                var c = -1;
                r.forEach(function (d) {
                    d.name == a && d.uniqueId == b && (c = r.indexOf(d))
                }), c >= 0 && r.splice(c, 1)
            }, this.__defineSetter__("onTrackingPlaneClick", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingPlaneClick", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), f = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingPlaneClickTriggerActive: null != a,
                    is: "AR.i.imageTrackableInterface.setOnTrackingPlaneClickTriggerActive"
                })
            }), this.__defineGetter__("onTrackingPlaneClick", function () {
                return f
            }), this.__defineSetter__("onTrackingPlaneDragBegan", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragBegan", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), g = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingPlaneDragBeganTriggerActive: null != a,
                    is: "AR.i.imageTrackableInterface.setOnTrackingPlaneDragBeganTriggerActive"
                })
            }), this.__defineGetter__("onTrackingPlaneDragBegan", function () {
                return g
            }), this.__defineSetter__("onTrackingPlaneDragChanged", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragChanged", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), h = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingPlaneDragChangedTriggerActive: null != a,
                    is: "AR.i.imageTrackableInterface.setOnTrackingPlaneDragChangedTriggerActive"
                })
            }), this.__defineGetter__("onTrackingPlaneDragChanged", function () {
                return h
            }), this.__defineSetter__("onTrackingPlaneDragEnded", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onTrackingPlaneDragEnded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), i = a, AR.i.callAsync({
                    objectId: this.__id,
                    onTrackingPlaneDragEndedTriggerActive: null != a,
                    is: "AR.i.imageTrackableInterface.setOnTrackingPlaneDragEndedTriggerActive"
                })
            }), this.__defineGetter__("onTrackingPlaneDragEnded", function () {
                return i
            }), this.__defineSetter__("tracker", function (a) {
                throw AR.EXCEPTION.create("tracker", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("tracker", function () {
                return e
            }), this.__defineSetter__("targetName", function (a) {
                throw AR.EXCEPTION.create("targetName", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("targetName", function () {
                return l
            }), this.__defineSetter__("enableExtendedTracking", function (a) {
                throw AR.EXCEPTION.create("enableExtendedTracking", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("enableExtendedTracking", function () {
                return o
            }), this.__defineSetter__("extendedTarget", function (a) {
                p = _PROPERTY_VALIDATOR.validate("extendedTarget", null != a || void 0 != a ? a : "*", _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET), AR.i.callAsync({
                    objectId: u,
                    is: "AR.i.imageTrackableInterface.setExtendedTarget",
                    extendedTarget: p
                })
            }), this.__defineGetter__("extendedTarget", function () {
                return p
            }), this.__defineSetter__("onExtendedTrackingQualityChanged", function (a) {
                q = _PROPERTY_VALIDATOR.validate("onExtendedTrackingQualityChanged", a || null, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), AR.i.callAsync({
                    objectId: u,
                    is: "AR.i.imageTrackableInterface.setOnExtendedTrackingQualityChangedTriggerActive",
                    onExtendedTrackingQualityChangedTriggerActive: null != q
                })
            }), this.__defineGetter__("onExtendedTrackingQualityChanged", function () {
                return q
            }), this.__defineSetter__("snapToScreen", function (a) {
                m = new AR.ScreenSnapper(this, a)
            }), this.__defineGetter__("snapToScreen", function () {
                return m
            }), this.__defineSetter__("distanceToTarget", function (a) {
                throw AR.EXCEPTION.create("distanceToTarget", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("distanceToTarget", function () {
                return n
            }), this.__defineSetter__("aspectRatio", function (a) {
                throw AR.EXCEPTION.create("aspectRatio", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("aspectRatio", function () {
                var a = AR.i.callSync({objectId: u, is: "AR.i.imageTrackableInterface.getAspectRatio"});
                return a < 0 ? void 0 : a
            }), this.__defineSetter__("onEnterFieldOfVision", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onEnterFieldOfVision", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), j = a, AR.i.callAsync({
                    objectId: this.__id,
                    onEnterFieldOfVisionTriggerActive: null != a,
                    is: "AR.i.imageTrackableInterface.setOnEnterFieldOfVisionTriggerActive"
                })
            }), this.__defineGetter__("onEnterFieldOfVision", function () {
                return j
            }), this.__defineSetter__("onExitFieldOfVision", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onExitFieldOfVision", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), k = a, AR.i.callAsync({
                    objectId: this.__id,
                    onExitFieldOfVisionTriggerActive: null != a,
                    is: "AR.i.imageTrackableInterface.setOnExitFieldOfVisionTriggerActive"
                })
            }), this.__defineGetter__("onExitFieldOfVision", function () {
                return k
            }), this.__defineSetter__("onImageRecognized", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onImageRecognized", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), s = a, AR.i.callAsync({
                    objectId: this.__id,
                    onImageRecognizedTriggerActive: null != a,
                    is: "AR.i.imageTrackableInterface.setOnImageRecognizedTriggerActive"
                })
            }), this.__defineGetter__("onImageRecognized", function () {
                return s
            }), this.__defineSetter__("onImageLost", function (a) {
                a = _PROPERTY_VALIDATOR.validate("onImageLost", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY), t = a, AR.i.callAsync({
                    objectId: this.__id,
                    onImageLostTriggerActive: null != a,
                    is: "AR.i.imageTrackableInterface.setOnImageLostTriggerActive"
                })
            }), this.__defineGetter__("onImageLost", function () {
                return t
            }), this.addImageTargetCamDrawables = function (a, b, c) {
                Array.isArray(b) ? b.reverse().forEach(function (b) {
                    a.__drawables = d.arObject.__addDrawable(a.__drawables, b, c, AR.Drawable)
                }) : a.__drawables = d.arObject.__addDrawable(a.__drawables, b, c, AR.Drawable), AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.imageTrackableInterface.setImageTargetCamDrawables",
                    targetImageCamDrawableIds: AR.__toJSONString__(AR.om.__getIds__(a.__drawables)),
                    targetImageName: a.name,
                    targetImageUniqueId: a.uniqueId
                })
            }, this.removeImageTargetCamDrawables = function (a, b) {
                Array.isArray(b) ? b.forEach(function (b) {
                    a.__drawables = d.arObject.__removeDrawable(a.__drawables, b, AR.Drawable)
                }) : b > -1 ? a.__drawables.splice(b, 1) : a.__drawables = d.arObject.__removeDrawable(a.__drawables, b, AR.Drawable), AR.i.callAsync({
                    objectId: this.__id,
                    is: "AR.i.imageTrackableInterface.setImageTargetCamDrawables",
                    targetImageCamDrawableIds: AR.__toJSONString__(AR.om.__getIds__(a.__drawables)),
                    targetImageName: a.name,
                    targetImageUniqueId: a.uniqueId
                })
            }
        }, stopExtendedTracking: function () {
            AR.i.callAsync({objectId: this.__id, is: "AR.i.imageTrackableInterface.stopExtendedTracking"})
        }
    }), AR.Trackable2DObject = AR.ImageTrackable, AR.BaseTracker = AR.ARchitectObject.extend({
        init: function (a, b) {
            this._super();
            var c = !1, d = function () {
            }, e = function () {
                c = !0, d()
            };
            a.onLoaded && (a.onTargetsLoaded = e, d = _PROPERTY_VALIDATOR.validate("onLoaded", a.onLoaded, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY));
            var f = new AR.ImageTracker(b, a);
            return this.__defineSetter__("enabled", function (a) {
                f.enabled = a
            }), this.__defineGetter__("enabled", function () {
                return f.enabled
            }), this.__defineSetter__("physicalTargetImageHeights", function (a) {
                f.physicalTargetImageHeights = a
            }), this.__defineGetter__("physicalTargetImageHeights", function () {
                return f.physicalTargetImageHeights
            }), this.__defineSetter__("onDisabled", function (a) {
                f.onDisabled = a
            }), this.__defineGetter__("onDisabled", function () {
                return f.onDisabled
            }), this.__defineSetter__("onLoaded", function (a) {
                d = _PROPERTY_VALIDATOR.validate("onLoaded", a, _PROPERTY_VALIDATOR.TYPE.FUNCTION, _PROPERTY_VALIDATOR.RULE.CAN_BE_EMPTY)
            }), this.__defineGetter__("onLoaded", function () {
                return d
            }), this.__defineSetter__("onError", function (a) {
                f.onError = a
            }), this.__defineGetter__("onError", function () {
                return f.onError
            }), this.isLoaded = function () {
                return c
            }, f.__id
        }
    }), AR.CloudTracker = AR.BaseTracker.extend({
        init: function (a, b, c) {
            c = c || {}, c.onLoaded && (c.onInitialized = c.onLoaded, delete c.onLoaded), this._cloudRecognitionService = new AR.CloudRecognitionService(a, b, c), delete c.onError;
            var d = this._super(c, this._cloudRecognitionService);
            this.__defineSetter__("token", function (a) {
                throw AR.EXCEPTION.create("token", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("token", function () {
                return this._cloudRecognitionService.clientToken
            }), this.__defineSetter__("targetCollectionID", function (a) {
                throw AR.EXCEPTION.create("targetCollectionID", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("targetCollectionID", function () {
                return this._cloudRecognitionService.targetCollectionId
            }), this.__defineSetter__("onRecognized", function (a) {
                throw AR.EXCEPTION.create("onRecognized", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("onRecognized", function () {
                return this._cloudRecognitionService.onRecognized
            }), this.__defineSetter__("onRecognitionError", function (a) {
                throw AR.EXCEPTION.create("onRecognitionError", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("onRecognitionError", function () {
                return this._cloudRecognitionService.onRecognitionError
            }), this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return d
            }), this.__defineGetter__("__onContinuousInterruption__", function () {
                return this._cloudRecognitionService.onContinuousRecognitionInterruption
            }), this.recognize = function (a, b) {
                this._cloudRecognitionService.recognize(a, b)
            }, this.startContinuousRecognition = function (a, b, c, d) {
                this._cloudRecognitionService.startContinuousRecognition(a, d, b, c)
            }, this.stopContinuousRecognition = function () {
                this._cloudRecognitionService.stopContinuousRecognition()
            }
        }, destroy: function (a) {
            this._cloudRecognitionService.destroy(a), Object.getPrototypeOf(this.constructor.prototype).destroy.call(this, a)
        }
    }), AR.ClientTracker = AR.BaseTracker.extend({
        init: function (a, b) {
            b = b || {};
            var c = _PROPERTY_VALIDATOR.validate("src", a, _PROPERTY_VALIDATOR.TYPE.STRING, _PROPERTY_VALIDATOR.RULE.MUST_BE_SET);
            this.resource = new AR.TargetCollectionResource(a);
            var d = this._super(b, this.resource);
            this.__defineSetter__("__id", function (a) {
                throw AR.EXCEPTION.create("__id", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("__id", function () {
                return d
            }), this.__defineSetter__("src", function (a) {
                throw AR.EXCEPTION.create("src", AR.EXCEPTION.TYPE.IMMUTABLE)
            }), this.__defineGetter__("src", function () {
                return c
            })
        }, destroy: function (a) {
            this.resource.destroy(a), Object.getPrototypeOf(this.constructor.prototype).destroy.call(this, a)
        }
    }), AR.ImageTarget.prototype.toString = function () {
        return this.name
    };
    var printStackTrace_impl = {
        run: function (a) {
            a = a || function () {
                try {
                    return this.undef(), null
                } catch (a) {
                    return AR.logger.info && AR.logger.info("Exception caught: " + a), a
                }
            }();
            var b = this._mode || this.mode(a);
            return "other" === b ? this.other(arguments.callee) : this[b](a)
        }, mode: function (a) {
            return a.arguments ? this._mode = "chrome" : "undefined" != typeof window && window.opera && a.stacktrace ? this._mode = "opera10" : a.stack ? this._mode = "firefox" : "undefined" == typeof window || !window.opera || "stacktrace" in a ? this._mode = "other" : this._mode = "opera"
        }, instrumentFunction: function (a, b, c) {
            a = a || window, a["_old" + b] = a[b], a[b] = function () {
                return c.call(this, printStackTrace()), a["_old" + b].apply(this, arguments)
            }, a[b]._instrumented = !0
        }, deinstrumentFunction: function (a, b) {
            a[b].constructor === Function && a[b]._instrumented && a["_old" + b].constructor === Function && (a[b] = a["_old" + b])
        }, chrome: function (a) {
            return a.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@").split("\n")
        }, firefox: function (a) {
            return a.stack.replace(/(?:\n@:0)?\s+$/m, "").replace(/^\(/gm, "{anonymous}(").split("\n")
        }, opera10: function (a) {
            var b, c, d, e = a.stacktrace, f = e.split("\n"), g = "{anonymous}",
                h = /.*line (\d+), column (\d+) in ((<anonymous function\:?\s*(\S+))|([^\(]+)\([^\)]*\))(?: in )?(.*)\s*$/i;
            for (b = 2, c = 0, d = f.length; b < d - 2; b++) if (h.test(f[b])) {
                var i = RegExp.$6 + ":" + RegExp.$1 + ":" + RegExp.$2, j = RegExp.$3;
                j = j.replace(/<anonymous function\:?\s?(\S+)?>/g, g), f[c++] = j + "@" + i
            }
            return f.splice(c, f.length - c), f
        }, opera: function (a) {
            var b, c, d, e = a.message.split("\n"), f = "{anonymous}",
                g = /Line\s+(\d+).*script\s+(http\S+)(?:.*in\s+function\s+(\S+))?/i;
            for (b = 4, c = 0, d = e.length; b < d; b += 2) g.test(e[b]) && (e[c++] = (RegExp.$3 ? RegExp.$3 + "()@" + RegExp.$2 + RegExp.$1 : f + "()@" + RegExp.$2 + ":" + RegExp.$1) + " -- " + e[b + 1].replace(/^\s+/, ""));
            return e.splice(c, e.length - c), e
        }, other: function (a) {
            for (var b, c, d = "{anonymous}", e = /function\s*([\w\-$]+)?\s*\(/i, f = [], g = 10; a && f.length < g;) b = e.test(a.toString()) ? RegExp.$1 || d : d, c = Array.prototype.slice.call(a.arguments), f[f.length] = b + "(" + this.stringifyArguments(c) + ")", a = a.caller;
            return f
        }, stringifyArguments: function (a) {
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                void 0 === c ? a[b] = "undefined" : null === c ? a[b] = "null" : c.constructor && (c.constructor === Array ? c.length < 3 ? a[b] = "[" + this.stringifyArguments(c) + "]" : a[b] = "[" + this.stringifyArguments(Array.prototype.slice.call(c, 0, 1)) + "..." + this.stringifyArguments(Array.prototype.slice.call(c, -1)) + "]" : c.constructor === Object ? a[b] = "#object" : c.constructor === Function ? a[b] = "#function" : c.constructor === String && (a[b] = '"' + c + '"'))
            }
            return a.join(",")
        }, sourceCache: {}, ajax: function (a) {
            var b = this.createXMLHTTPObject();
            if (b) return b.open("GET", a, !1), b.setRequestHeader("User-Agent", "XMLHTTP/1.0"), b.send(""), b.responseText
        }, createXMLHTTPObject: function () {
            for (var a, b = [function () {
                return new XMLHttpRequest
            }, function () {
                return new ActiveXObject("Msxml2.XMLHTTP")
            }, function () {
                return new ActiveXObject("Msxml3.XMLHTTP")
            }, function () {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }], c = 0; c < b.length; c++) try {
                return a = b[c](), this.createXMLHTTPObject = b[c], a
            } catch (a) {
                AR.logger.info && AR.logger.info("Exception caught: " + a)
            }
        }, isSameDomain: function (a) {
            return -1 !== a.indexOf(location.hostname)
        }, getSource: function (a) {
            return a in this.sourceCache || (this.sourceCache[a] = this.ajax(a).split("\n")), this.sourceCache[a]
        }, guessFunctions: function (a) {
            for (var b = 0; b < a.length; ++b) {
                var c = /\{anonymous\}\(.*\)@(\w+:\/\/([\-\w\.]+)+(:\d+)?[^:]+):(\d+):?(\d+)?/, d = a[b], e = c.exec(d);
                if (e) {
                    var f = e[1], g = e[4];
                    if (f && this.isSameDomain(f) && g) {
                        var h = this.guessFunctionName(f, g);
                        a[b] = d.replace("{anonymous}", h)
                    }
                }
            }
            return a
        }, guessFunctionName: function (a, b) {
            var c;
            try {
                c = this.guessFunctionNameFromLines(b, this.getSource(a))
            } catch (b) {
                c = "getSource failed with url: " + a + ", exception: " + b.toString(), AR.logger.info && AR.logger.info("Exception caught: " + b)
            }
            return c
        }, guessFunctionNameFromLines: function (a, b) {
            for (var c = /function ([^(]*)\(([^)]*)\)/, d = /['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*(function|eval|new Function)/, e = "", f = 10, g = 0; g < f; ++g) if (void 0 !== (e = b[a - g] + e)) {
                var h = d.exec(e);
                if (h && h[1]) return h[1];
                if ((h = c.exec(e)) && h[1]) return h[1]
            }
            return "(?)"
        }
    };
    AR.overlay = AR.overlay || {}, AR.overlay.__OVERLAY_CONTAINER__CONSTRUCTION_PLAN = function () {
        var a = null, b = [], c = 0, d = function () {
            document.body.appendChild(a), document.body.appendChild(f);
            for (var c = 0; c < b.length; c++) b[c].initFunction && b[c].initFunction();
            b.length > 0 && l()
        };
        (function (a) {
            window.attachEvent ? window.attachEvent("onload", a) : window.addEventListener && window.addEventListener("load", a, !1)
        })(d), function () {
            var a = document.createElement("style"), b = "";
            if (b += "div.__OVERLAY__mainDiv {-webkit-box-shadow: #333 0px 0px 10px 0px; box-shadow: #333 0px 0px 10px 0px; background: #F0F0F0; position: absolute;top: 5%;left: 5%;right: 5%;bottom: 5%;z-index: 2147483647;padding: 20px;overflow: auto;font-family:Verdana;font-size:small;}", b += "input.__OVERLAY__closeButton {float: right;}", b += "div.__OVERLAY__openButton {position: absolute;right: 0px;bottom: 0px;z-index: 2147483647;width: 0; height: 0; border-bottom: 40px solid #FF8C0A; border-left: 40px solid transparent; }", b += "div.__OVERLAY__tab {margin-right:2px;border-style: groove;margin-bottom:1px;width: 30%;background: #F0F0F0;text-align: center;vertical-align: middle;font-weight: bold;height: 20px;border-top-left-radius:20px;border-top-right-radius:20px;cursor:pointer;cursor: pointer;border-width: 1px;border-color: black;}", b += "#toolTipDiv {font-family:Verdana; position: absolute;right: 5px;bottom: 65px;width: 220px;background-color: #FFBB24;padding-bottom: 5px;padding-top: 5px;z-index: 2147483646;}", b += "#toolTipDiv:before {  content: ' ';  position: absolute;  right: 20px;bottom: -40px;border: 20px solid;border-color: #FFBB24 #FFBB24 transparent transparent;}", a.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(a), a.styleSheet) a.styleSheet.cssText = b; else {
                var c = document.createTextNode(b);
                a.appendChild(c)
            }
        }(), a = document.createElement("div"), a.id = "overlayDiv", a.setAttribute("class", "__OVERLAY__mainDiv"), a.style.display = "none";
        var e = document.createElement("input");
        e.setAttribute("class", "__OVERLAY__closeButton"), e.setAttribute("type", "button"), e.setAttribute("value", "X"), e.onclick = function () {
            a.style.display = "none", f.style.display = "block"
        }, a.appendChild(e);
        var f = document.createElement("div");
        f.setAttribute("class", "__OVERLAY__openButton"), f.setAttribute("type", "button"), f.setAttribute("value", "^^"), f.onclick = function () {
            a.style.display = "block", f.style.display = "none"
        }, f.setEnabled = function (a) {
            f.style.display = a ? "block" : "none"
        }, f.setEnabled(!1);
        var g = document.createElement("div");
        a.appendChild(g);
        var h = document.createElement("div");
        h.setAttribute("style", "clear: right;"), a.appendChild(h);
        var i = 0, j = null, k = null;
        this.appendOverlay = function (a, d, e) {
            0 == c && (f.setEnabled(!0), l());
            var m = document.createElement("div");
            return m.setAttribute("class", "__OVERLAY__tab"), m.setAttribute("style", "margin-left:" + 31 * i + "%;" + (0 == i ? "float:left;" : "")), m.appendChild(document.createTextNode(a)), j ? d.style.display = "none" : (j = d, k = m, m.style.backgroundColor = "#BEBEBE"), m.onclick = function () {
                j.style.display = "none", k.style.backgroundColor = "#F0F0F0", d.style.display = "block", m.style.backgroundColor = "#BEBEBE", j = d, k = m
            }, g.appendChild(m), h.appendChild(d), b[i] = {tab: m, htmlElement: d, initFunction: e}, i++, c++, i - 1
        }, this.setVisibility = function (a) {
            a ? (h.style.visibility = "visible", f.style.visibility = "visible") : (e.click(), h.style.visibility = "hidden", f.style.visibility = "hidden", m())
        };
        var l = function () {
            var a = document.createElement("div");
            a.setAttribute("id", "toolTipDiv"), a.innerHTML = "Open Logger and/or ADE by pressing this button", document.body && document.body.appendChild(a), window.setTimeout(m, 3e3)
        }, m = function () {
            var a = document.getElementById("toolTipDiv");
            a && document.body.removeChild(a)
        };
        this.removeOverlay = function (a) {
            b[a].tab.style.display = "none", 0 == --c && (f.setEnabled(!1), m())
        }
    }, AR.overlay.OVERLAY_CONTAINER = new AR.overlay.__OVERLAY_CONTAINER__CONSTRUCTION_PLAN, AR.overlay.__OVERLAY_CONTAINER__CONSTRUCTION_PLAN = void 0;
    var __ARCHITECT_LOGGER_FRAMEWORK__ = new function () {
        var a = null, b = null, c = null, d = {};
        !function () {
            var a = document.createElement("style"), b = "";
            if (b += "div.__LOGGER__logSelector {cursor:pointer; border: 1px solid black; border-radius:20px; width: 99%;float: left;font-size: large;margin-top: 0.3%;padding: 0.3%;text-align: center;margin-bottom: 0.3%;}", b += "div.__LOGGER__messagesContainer {width: 99%;overflow: auto;font-family: monospace;margin-top: 5px;}", b += "table.__LOGGER__selectorTable {width: 100%;table-layout: fixed;}", b += "div.__LOGGER__logMessage{font-family:monospace;} div.red {color:red;} div.green {color:green;} div.orange {color:orange;} div.black {color:black;}", b += "#__LOGGER__ARCHITECT_ERROR_LOG_CONSOLE {width : 100%; overflow : auto; font-family: monospace;}", b += "#__LOGGER__masterDiv {top: 0; width: 100%;}", b += "#__LOGGER__CONTROL_DIV {width: 100%;}", a.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(a), a.styleSheet) a.styleSheet.cssText = b; else {
                var c = document.createTextNode(b);
                a.appendChild(c)
            }
        }();
        var e = {ERROR: [!0, "red"], WARNING: [!0, "orange"], INFO: [!1, "green"], DEBUG: [!1, "grey"]};
        this.__toggleLogLevel__ = function (a) {
            e[a][0] = !e[a][0], AR.logger.changeHTMLLogLevelEnabled(a, e[a][0]), f(a)
        };
        var f = function (a) {
            var b = d[a];
            e[a][0] ? b.style.backgroundColor = e[a][1] : b.style.backgroundColor = "#F0F0F0"
        }, g = function () {
            function a(a, b, c, e) {
                var f = document.createElement("div");
                return f.setAttribute("class", "__LOGGER__logSelector"), f.setAttribute("id", "LOG_SELECTOR_" + b), f.setAttribute("style", "background-color:" + e + ";"), f.onclick = function () {
                    __ARCHITECT_LOGGER_FRAMEWORK__.__toggleLogLevel__(b)
                }, f.appendChild(document.createTextNode(a)), d[b] = f, f
            }

            var b = document.createElement("div");
            b.setAttribute("id", "__LOGGER__CONTROL_DIV");
            var c = document.createElement("table");
            c.setAttribute("class", "__LOGGER__selectorTable");
            var e = document.createElement("tr"), f = document.createElement("td"), g = document.createElement("td");
            e.appendChild(f), e.appendChild(g), c.appendChild(e);
            var h = document.createElement("tr"), i = document.createElement("td"), j = document.createElement("td");
            h.appendChild(i), h.appendChild(j), c.appendChild(h), f.appendChild(a("Error", "ERROR", !0, "red")), g.appendChild(a("Warning", "WARNING", !0, "orange")), i.appendChild(a("Info", "INFO", !1, "green")), j.appendChild(a("Debug", "DEBUG", !1, "grey")), b.appendChild(c);
            var k = document.createElement("div");
            k.setAttribute("class", "__LOGGER__clearButtonDiv");
            var l = document.createElement("input");
            return l.setAttribute("type", "button"), l.setAttribute("value", "Clear Console"), l.onclick = function () {
                AR.logger.clearConsole()
            }, k.appendChild(l), b.appendChild(k), b
        }, h = function () {
            var a = document.createElement("div");
            return a.setAttribute("id", "ARCHITECT_ERROR_LOG_CONSOLE"), a.scrollTop = a.scrollHeight, a.appendLine = function (b, c) {
                var d = document.createElement("div");
                d.setAttribute("class", "__LOGGER__logMessage " + c), d.appendChild(document.createTextNode(b)), a.insertBefore(d, a.firstChild)
            }, a.clearConsole = function () {
                for (; a.hasChildNodes();) a.removeChild(a.firstChild)
            }, a.canHandleColorCodes = !1, a
        }, i = function () {
            var a = document.createElement("div");
            return a.setAttribute("id", "__LOGGER__masterDiv"), a
        };
        this.setDebugModeEnabled = function (d) {
            if (d) if (null == b) {
                b = g(), c = h(), a = i(), a.appendChild(b), a.appendChild(c), AR.logger.registerRegistrar(c, c.canHandleColorCodes), AR.logger.changeHTMLLogLevelEnabled("ERROR", !0), AR.logger.changeHTMLLogLevelEnabled("WARNING", !0), f("ERROR"), f("WARNING"), f("INFO"), f("DEBUG");
                AR.overlay.OVERLAY_CONTAINER.appendOverlay("Logger", a)
            } else AR.overlay.OVERLAY_CONTAINER.setVisibility(!0); else AR.overlay.OVERLAY_CONTAINER.setVisibility(!1)
        }
    }, __ARCHITECT_PROFILER_FRAMEWORK__ = new function () {
        var a = null, b = null, c = null, d = {}, e = {};
        !function () {
            var a = document.createElement("style"), b = "";
            if (b += "div.__PROFILER__logSelector {cursor:pointer; border: 1px solid black; border-radius:20px; width: 99%;float: left;font-size: large;margin-top: 0.3%;padding: 0.3%;text-align: center;margin-bottom: 0.3%;}", b += "div.__PROFILER__messagesContainer {width: 99%;overflow: auto;font-family: monospace;margin-top: 5px;}", b += "table.__PROFILER__selectorTable {width: 100%;table-layout: fixed;}", b += "div.__PROFILER__logMessage{font-family:monospace;} div.red {color:red;} div.green {color:green;} div.orange {color:orange;} div.black {color:black;}", b += "#__PROFILER__ARCHITECT_ERROR_LOG_CONSOLE {width : 100%; overflow : auto; font-family: monospace;}", b += "#__PROFILER__masterDiv {top: 0; width: 100%;}", b += "#__PROFILER__CONTROL_DIV {width: 100%;}", a.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(a), a.styleSheet) a.styleSheet.cssText = b; else {
                var c = document.createTextNode(b);
                a.appendChild(c)
            }
        }();
        var f = {CALLCOUNT: [!0, "#ff8c0a"], FPS: [!0, "#ff8c0a"], DURATION: [!0, "#ff8c0a"]};
        this.__toggleProfilerGroupVisibility = function (a) {
            f[a][0] = !f[a][0], g(a), e[a].style.display = f[a][0] ? "block" : "none"
        };
        var g = function (a) {
            var b = d[a];
            f[a][0] ? b.style.backgroundColor = f[a][1] : b.style.backgroundColor = "#F0F0F0"
        }, h = function () {
            function a(a, b, c, e) {
                var f = document.createElement("div");
                return f.setAttribute("class", "__PROFILER__logSelector"), f.setAttribute("id", "LOG_SELECTOR_" + b), f.setAttribute("style", "background-color:" + e + ";"), f.onclick = function () {
                    __ARCHITECT_PROFILER_FRAMEWORK__.__toggleProfilerGroupVisibility(b)
                }, f.appendChild(document.createTextNode(a)), d[b] = f, f
            }

            var b = document.createElement("div");
            b.setAttribute("id", "__PROFILER__CONTROL_DIV");
            var c = document.createElement("table");
            c.setAttribute("class", "__PROFILER__selectorTable");
            var e = document.createElement("tr"), f = document.createElement("td"), g = document.createElement("td"),
                h = document.createElement("td");
            e.appendChild(f), e.appendChild(g), e.appendChild(h), c.appendChild(e), f.appendChild(a("Call Count", "CALLCOUNT", !0, "#434343")), g.appendChild(a("FPS", "FPS", !0, "#434343")), h.appendChild(a("Duration", "DURATION", !0, "#434343")), b.appendChild(c);
            var i = document.createElement("div");
            i.setAttribute("class", "__PROFILER__RELOADOPTIONSDIV");
            var j = document.createElement("input");
            j.setAttribute("type", "button"), j.setAttribute("value", "Upload Report"), j.onclick = function () {
                AR.profiler.sendProfilingReportRequest()
            }, i.appendChild(j);
            var k = document.createElement("input");
            k.setAttribute("type", "button"), k.setAttribute("value", "Reload Data"), k.onclick = function () {
                AR.profiler.sendProfileReportRequest()
            }, i.appendChild(k), i.appendChild(document.createTextNode("  < or >  "));
            var l = document.createElement("input");
            l.setAttribute("type", "checkbox"), l.onchange = AR.profiler.automaticReloadSettingChanged, i.appendChild(l), i.appendChild(document.createTextNode("Automatic Reload  every: "));
            var m = document.createElement("select");
            m.setAttribute("id", "__ARCHITECT_PROFILER_RELOAD_SELECTION__");
            for (var n = 1; n <= 10; n++) m.options[n - 1] = new Option(n, n);
            return m.options[1].selected = !0, i.appendChild(m), i.appendChild(document.createTextNode(" seconds")), b.appendChild(i), b
        };
        this.getReloadInterval = function () {
            var a = document.getElementById("__ARCHITECT_PROFILER_RELOAD_SELECTION__");
            return Number(a.options[a.selectedIndex].text)
        };
        var i = function () {
            var a = document.createElement("div");
            a.setAttribute("id", "ARCHITECT_PROFILER_MASTER_CONSOLE"), a.scrollTop = a.scrollHeight;
            var b = document.createElement("div");
            b.setAttribute("id", "ARCHITECT_PROFILER_CALLCOUNT_CONSOLE"), b.appendLine = function (a, c) {
                var d = document.createElement("div");
                d.setAttribute("class", "__PROFILER__logMessage " + c), d.appendChild(document.createTextNode(a)), b.appendChild(d)
            }, e.CALLCOUNT = b;
            var c = document.createElement("div");
            c.setAttribute("id", "ARCHITECT_PROFILER_FPS_CONSOLE"), c.style.display = "block", c.appendLine = function (a, b) {
                var d = document.createElement("div");
                d.setAttribute("class", "__PROFILER__logMessage " + b), d.appendChild(document.createTextNode(a)), c.appendChild(d)
            }, e.FPS = c;
            var d = document.createElement("div");
            return d.setAttribute("id", "ARCHITECT_PROFILER_DURATION_CONSOLE"), d.appendLine = function (a, b) {
                var c = document.createElement("div");
                c.setAttribute("class", "__PROFILER__logMessage " + b), c.appendChild(document.createTextNode(a)), d.appendChild(c)
            }, e.DURATION = d, a.appendLine = function (b, c) {
                var d = document.createElement("div");
                d.setAttribute("class", "__PROFILER__logMessage " + c), d.appendChild(document.createTextNode(b)), a.insertBefore(d, a.firstChild)
            }, a.clearConsole = function () {
                for (; a.hasChildNodes();) a.removeChild(a.firstChild)
            }, a.canHandleColorCodes = !1, a.appendChild(b), a.appendChild(c), a.appendChild(d), a.callCountDiv = b, a.fpsDiv = c, a.durationDiv = d, a.appendLine("======= *Profiling* ======", "black"), __ARCHITECT_PROFILER_FRAMEWORK__.clearAllProfileConsoles(), a
        }, j = function () {
            var a = document.createElement("div");
            return a.setAttribute("id", "__PROFILER__masterDiv"), a
        };
        this.activateProfiler = function () {
            b = h(), c = i(), a = j(), a.appendChild(b), a.appendChild(c), AR.profiler.registerRegistrar(c, c.canHandleColorCodes), g("CALLCOUNT"), g("FPS"), g("DURATION");
            AR.overlay.OVERLAY_CONTAINER.appendOverlay("Profiler", a);
            activateDebugMode = null
        }, this.clearAllProfileConsoles = function () {
            __ARCHITECT_PROFILER_FRAMEWORK__.clearProfilerConsole("ARCHITECT_PROFILER_CALLCOUNT_CONSOLE", "------ Call Count -------"), __ARCHITECT_PROFILER_FRAMEWORK__.clearProfilerConsole("ARCHITECT_PROFILER_FPS_CONSOLE", "------ FPS -------"), __ARCHITECT_PROFILER_FRAMEWORK__.clearProfilerConsole("ARCHITECT_PROFILER_DURATION_CONSOLE", "------ Duration -------")
        }, this.clearProfilerConsole = function (a, b) {
            var c = document.getElementById(a);
            if (null !== c) {
                for (; c.firstChild;) c.removeChild(c.firstChild);
                c.appendLine("*         ", "black"), c.appendLine("*         ", "black"), c.appendLine(b, "black")
            }
        }
    }, AR = AR || {};
    AR.ADE = AR.ADE || {}, AR.ADE.Screen = function () {
        var a = "LS_PREDEF_LOCATIONS_";
        !function () {
            var a = document.createElement("style"),
                b = "table.ygtvtable{margin-bottom:0;border:0;border-collapse:collapse}td.ygtvcell{border:0;padding:0}a.ygtvspacer{text-decoration:none;outline-style:none;display:block}.ygtvtn{width:18px;height:22px;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -5600px no-repeat;cursor:pointer}.ygtvtm{width:18px;height:22px;cursor:pointer;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -4000px no-repeat}.ygtvtmh,.ygtvtmhh{width:18px;height:22px;cursor:pointer;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -4800px no-repeat}.ygtvtp{width:18px;height:22px;cursor:pointer;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -6400px no-repeat}.ygtvtph,.ygtvtphh{width:18px;height:22px;cursor:pointer;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -7200px no-repeat}.ygtvln{width:18px;height:22px;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -1600px no-repeat;cursor:pointer}.ygtvlm{width:18px;height:22px;cursor:pointer;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 0 no-repeat}.ygtvlmh,.ygtvlmhh{width:18px;height:22px;cursor:pointer;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -800px no-repeat}.ygtvlp{width:18px;height:22px;cursor:pointer;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -2400px no-repeat}.ygtvlph,.ygtvlphh{width:18px;height:22px;cursor:pointer;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -3200px no-repeat;cursor:pointer}.ygtvloading{width:18px;height:22px;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-loading.gif) 0 0 no-repeat}.ygtvdepthcell{width:18px;height:22px;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -8000px no-repeat}.ygtvblankdepthcell{width:18px;height:22px}* html .ygtvchildren{height:2%}.ygtvlabel,.ygtvlabel:link,.ygtvlabel:visited,.ygtvlabel:hover{margin-left:2px;text-decoration:none;cursor:pointer}.ygtvcontent{cursor:default}.ygtvspacer{height:22px;width:18px}.ygtvfocus{background-color:#c0e0e0;border:0}.ygtvfocus .ygtvlabel,.ygtvfocus .ygtvlabel:link,.ygtvfocus .ygtvlabel:visited,.ygtvfocus .ygtvlabel:hover{background-color:#c0e0e0}.ygtvfocus a{outline-style:none}.ygtvok{width:18px;height:22px;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -8800px no-repeat}.ygtvok:hover{background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -8844px no-repeat}.ygtvcancel{width:18px;height:22px;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -8822px no-repeat}.ygtvcancel:hover{background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/treeview-sprite.gif) 0 -8866px no-repeat}.ygtv-label-editor{background-color:#f2f2f2;border:1px solid silver;position:absolute;display:none;overflow:hidden;margin:auto;z-index:9000}.ygtv-edit-TextNode{width:190px}.ygtv-edit-TextNode .ygtvcancel,.ygtv-edit-TextNode .ygtvok{border:0}.ygtv-edit-TextNode .ygtv-button-container{float:right}.ygtv-edit-TextNode .ygtv-input input{width:140px}.ygtv-edit-DateNode .ygtvcancel{border:0}.ygtv-edit-DateNode .ygtvok{display:none}.ygtv-edit-DateNode .ygtv-button-container{text-align:right;margin:auto}.ygtv-highlight .ygtv-highlight1,.ygtv-highlight .ygtv-highlight1 .ygtvlabel{background-color:blue;color:white}.ygtv-highlight .ygtv-highlight2,.ygtv-highlight .ygtv-highlight2 .ygtvlabel{background-color:silver}.ygtv-highlight .ygtv-highlight0 .ygtvfocus .ygtvlabel,.ygtv-highlight .ygtv-highlight1 .ygtvfocus .ygtvlabel,.ygtv-highlight .ygtv-highlight2 .ygtvfocus .ygtvlabel{background-color:#c0e0e0}.ygtv-highlight .ygtvcontent{padding-right:1em}.ygtv-checkbox .ygtv-highlight0 .ygtvcontent{padding-left:1em;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/check0.gif) no-repeat}.ygtv-checkbox .ygtv-highlight0 .ygtvfocus.ygtvcontent,.ygtv-checkbox .ygtv-highlight1 .ygtvfocus.ygtvcontent,.ygtv-checkbox .ygtv-highlight2 .ygtvfocus.ygtvcontent{background-color:#c0e0e0}.ygtv-checkbox .ygtv-highlight1 .ygtvcontent{padding-left:1em;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/check1.gif) no-repeat}.ygtv-checkbox .ygtv-highlight2 .ygtvcontent{padding-left:1em;background:url(http://yui.yahooapis.com/2.9.0/build/treeview/assets/skins/sam/check2.gif) no-repeat}";
            if (b += "#__ADE__tree_div{padding-top:5px;padding-left:20px;min-height:400px;height:auto !important;height:400px; }", b += "div.__ADE__header{clear:left;font-weight:bold;padding-bottom: 10px;padding-left: 2px;padding-top: 10px;background-color:#707070; color: white;}", b += "#__ADE__treeDivHeader{padding-bottom:12px;}", b += "#__ADE__settingsMainBox{float:right;border:2px solid;border-color:#9D9D9D;min-height:100px;height:auto !important;height:100px;}", b += "#__ADE__applyButton{margin-right: 5px}", b += "#__ADE__saveButton{margin-left: 5px}", b += "#__ADE__settingsSubHeader{font-weight: bold;padding: 3px;background-color: #9D9D9D;padding: 3px;margin-top: 2px;font-size: smaller;}", b += "div.__ADE__settingsEntryBox{margin-top: 5px;border-bottom: 1px solid;padding: 5px;border-color: #9D9D9D;}div.settingsEntryHeader{font-weight: bold;margin-bottom: 2px;font-size: x-small;}", b += "#__ADE__hitARObjectDiv{font-family:Verdana;z-index: 2147483647;position: fixed;top: 50%;left: 50%;background-color: #FFBB24;margin-left: -280px;padding: 20px;border: 2px solid;}", a.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(a), a.styleSheet) a.styleSheet.cssText = b; else {
                var c = document.createTextNode(b);
                a.appendChild(c)
            }
        }(), function () {
            var a = 'if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO={};}YAHOO.namespace=function(){var b=arguments,g=null,e,c,f;for(e=0;e<b.length;e=e+1){f=(""+b[e]).split(".");g=YAHOO;for(c=(f[0]=="YAHOO")?1:0;c<f.length;c=c+1){g[f[c]]=g[f[c]]||{};g=g[f[c]];}}return g;};YAHOO.log=function(d,a,c){var b=YAHOO.widget.Logger;if(b&&b.log){return b.log(d,a,c);}else{return false;}};YAHOO.register=function(a,f,e){var k=YAHOO.env.modules,c,j,h,g,d;if(!k[a]){k[a]={versions:[],builds:[]};}c=k[a];j=e.version;h=e.build;g=YAHOO.env.listeners;c.name=a;c.version=j;c.build=h;c.versions.push(j);c.builds.push(h);c.mainClass=f;for(d=0;d<g.length;d=d+1){g[d](c);}if(f){f.VERSION=j;f.BUILD=h;}else{YAHOO.log("mainClass is undefined for module "+a,"warn");}};YAHOO.env=YAHOO.env||{modules:[],listeners:[]};YAHOO.env.getVersion=function(a){return YAHOO.env.modules[a]||null;};YAHOO.env.parseUA=function(d){var e=function(i){var j=0;return parseFloat(i.replace(/\\./g,function(){return(j++==1)?"":".";}));},h=navigator,g={ie:0,opera:0,gecko:0,webkit:0,chrome:0,mobile:null,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,webos:0,caja:h&&h.cajaVersion,secure:false,os:null},c=d||(navigator&&navigator.userAgent),f=window&&window.location,b=f&&f.href,a;g.secure=b&&(b.toLowerCase().indexOf("https")===0);if(c){if((/windows|win32/i).test(c)){g.os="windows";}else{if((/macintosh/i).test(c)){g.os="macintosh";}else{if((/rhino/i).test(c)){g.os="rhino";}}}if((/KHTML/).test(c)){g.webkit=1;}a=c.match(/AppleWebKit\\/([^\\s]*)/);if(a&&a[1]){g.webkit=e(a[1]);if(/ Mobile\\//.test(c)){g.mobile="Apple";a=c.match(/OS ([^\\s]*)/);if(a&&a[1]){a=e(a[1].replace("_","."));}g.ios=a;g.ipad=g.ipod=g.iphone=0;a=c.match(/iPad|iPod|iPhone/);if(a&&a[0]){g[a[0].toLowerCase()]=g.ios;}}else{a=c.match(/NokiaN[^\\/]*|Android \\d\\.\\d|webOS\\/\\d\\.\\d/);if(a){g.mobile=a[0];}if(/webOS/.test(c)){g.mobile="WebOS";a=c.match(/webOS\\/([^\\s]*);/);if(a&&a[1]){g.webos=e(a[1]);}}if(/ Android/.test(c)){g.mobile="Android";a=c.match(/Android ([^\\s]*);/);if(a&&a[1]){g.android=e(a[1]);}}}a=c.match(/Chrome\\/([^\\s]*)/);if(a&&a[1]){g.chrome=e(a[1]);}else{a=c.match(/AdobeAIR\\/([^\\s]*)/);if(a){g.air=a[0];}}}if(!g.webkit){a=c.match(/Opera[\\s\\/]([^\\s]*)/);if(a&&a[1]){g.opera=e(a[1]);a=c.match(/Version\\/([^\\s]*)/);if(a&&a[1]){g.opera=e(a[1]);}a=c.match(/Opera Mini[^;]*/);if(a){g.mobile=a[0];}}else{a=c.match(/MSIE\\s([^;]*)/);if(a&&a[1]){g.ie=e(a[1]);}else{a=c.match(/Gecko\\/([^\\s]*)/);if(a){g.gecko=1;a=c.match(/rv:([^\\s\\)]*)/);if(a&&a[1]){g.gecko=e(a[1]);}}}}}}return g;};YAHOO.env.ua=YAHOO.env.parseUA();(function(){YAHOO.namespace("util","widget","example");if("undefined"!==typeof YAHOO_config){var b=YAHOO_config.listener,a=YAHOO.env.listeners,d=true,c;if(b){for(c=0;c<a.length;c++){if(a[c]==b){d=false;break;}}if(d){a.push(b);}}}})();YAHOO.lang=YAHOO.lang||{};(function(){var f=YAHOO.lang,a=Object.prototype,c="[object Array]",h="[object Function]",i="[object Object]",b=[],g={"&":"&amp;","<":"&lt;",">":"&gt;",\'"\':"&quot;","\'":"&#x27;","/":"&#x2F;","`":"&#x60;"},d=["toString","valueOf"],e={isArray:function(j){return a.toString.apply(j)===c;},isBoolean:function(j){return typeof j==="boolean";},isFunction:function(j){return(typeof j==="function")||a.toString.apply(j)===h;},isNull:function(j){return j===null;},isNumber:function(j){return typeof j==="number"&&isFinite(j);},isObject:function(j){return(j&&(typeof j==="object"||f.isFunction(j)))||false;},isString:function(j){return typeof j==="string";},isUndefined:function(j){return typeof j==="undefined";},_IEEnumFix:(YAHOO.env.ua.ie)?function(l,k){var j,n,m;for(j=0;j<d.length;j=j+1){n=d[j];m=k[n];if(f.isFunction(m)&&m!=a[n]){l[n]=m;}}}:function(){},escapeHTML:function(j){return j.replace(/[&<>"\'\\/`]/g,function(k){return g[k];});},extend:function(m,n,l){if(!n||!m){throw new Error("extend failed, please check that "+"all dependencies are included.");}var k=function(){},j;k.prototype=n.prototype;m.prototype=new k();m.prototype.constructor=m;m.superclass=n.prototype;if(n.prototype.constructor==a.constructor){n.prototype.constructor=n;}if(l){for(j in l){if(f.hasOwnProperty(l,j)){m.prototype[j]=l[j];}}f._IEEnumFix(m.prototype,l);}},augmentObject:function(n,m){if(!m||!n){throw new Error("Absorb failed, verify dependencies.");}var j=arguments,l,o,k=j[2];if(k&&k!==true){for(l=2;l<j.length;l=l+1){n[j[l]]=m[j[l]];}}else{for(o in m){if(k||!(o in n)){n[o]=m[o];}}f._IEEnumFix(n,m);}return n;},augmentProto:function(m,l){if(!l||!m){throw new Error("Augment failed, verify dependencies.");}var j=[m.prototype,l.prototype],k;for(k=2;k<arguments.length;k=k+1){j.push(arguments[k]);}f.augmentObject.apply(this,j);return m;},dump:function(j,p){var l,n,r=[],t="{...}",k="f(){...}",q=", ",m=" => ";if(!f.isObject(j)){return j+"";}else{if(j instanceof Date||("nodeType" in j&&"tagName" in j)){return j;}else{if(f.isFunction(j)){return k;}}}p=(f.isNumber(p))?p:3;if(f.isArray(j)){r.push("[");for(l=0,n=j.length;l<n;l=l+1){if(f.isObject(j[l])){r.push((p>0)?f.dump(j[l],p-1):t);}else{r.push(j[l]);}r.push(q);}if(r.length>1){r.pop();}r.push("]");}else{r.push("{");for(l in j){if(f.hasOwnProperty(j,l)){r.push(l+m);if(f.isObject(j[l])){r.push((p>0)?f.dump(j[l],p-1):t);}else{r.push(j[l]);}r.push(q);}}if(r.length>1){r.pop();}r.push("}");}return r.join("");},substitute:function(x,y,E,l){var D,C,B,G,t,u,F=[],p,z=x.length,A="dump",r=" ",q="{",m="}",n,w;for(;;){D=x.lastIndexOf(q,z);if(D<0){break;}C=x.indexOf(m,D);if(D+1>C){break;}p=x.substring(D+1,C);G=p;u=null;B=G.indexOf(r);if(B>-1){u=G.substring(B+1);G=G.substring(0,B);}t=y[G];if(E){t=E(G,t,u);}if(f.isObject(t)){if(f.isArray(t)){t=f.dump(t,parseInt(u,10));}else{u=u||"";n=u.indexOf(A);if(n>-1){u=u.substring(4);}w=t.toString();if(w===i||n>-1){t=f.dump(t,parseInt(u,10));}else{t=w;}}}else{if(!f.isString(t)&&!f.isNumber(t)){t="~-"+F.length+"-~";F[F.length]=p;}}x=x.substring(0,D)+t+x.substring(C+1);if(l===false){z=D-1;}}for(D=F.length-1;D>=0;D=D-1){x=x.replace(new RegExp("~-"+D+"-~"),"{"+F[D]+"}","g");}return x;},trim:function(j){try{return j.replace(/^\\s+|\\s+$/g,"");}catch(k){return j;}},merge:function(){var n={},k=arguments,j=k.length,m;for(m=0;m<j;m=m+1){f.augmentObject(n,k[m],true);}return n;},later:function(t,k,u,n,p){t=t||0;k=k||{};var l=u,s=n,q,j;if(f.isString(u)){l=k[u];}if(!l){throw new TypeError("method undefined");}if(!f.isUndefined(n)&&!f.isArray(s)){s=[n];}q=function(){l.apply(k,s||b);};j=(p)?setInterval(q,t):setTimeout(q,t);return{interval:p,cancel:function(){if(this.interval){clearInterval(j);}else{clearTimeout(j);}}};},isValue:function(j){return(f.isObject(j)||f.isString(j)||f.isNumber(j)||f.isBoolean(j));}};f.hasOwnProperty=(a.hasOwnProperty)?function(j,k){return j&&j.hasOwnProperty&&j.hasOwnProperty(k);}:function(j,k){return !f.isUndefined(j[k])&&j.constructor.prototype[k]!==j[k];};e.augmentObject(f,e,true);YAHOO.util.Lang=f;f.augment=f.augmentProto;YAHOO.augment=f.augmentProto;YAHOO.extend=f.extend;})();YAHOO.register("yahoo",YAHOO,{version:"2.9.0",build:"2800"});(function(){YAHOO.env._id_counter=YAHOO.env._id_counter||0;var e=YAHOO.util,k=YAHOO.lang,L=YAHOO.env.ua,a=YAHOO.lang.trim,B={},F={},m=/^t(?:able|d|h)$/i,w=/color$/i,j=window.document,v=j.documentElement,C="ownerDocument",M="defaultView",U="documentElement",S="compatMode",z="offsetLeft",o="offsetTop",T="offsetParent",x="parentNode",K="nodeType",c="tagName",n="scrollLeft",H="scrollTop",p="getBoundingClientRect",V="getComputedStyle",y="currentStyle",l="CSS1Compat",A="BackCompat",E="class",f="className",i="",b=" ",R="(?:^|\\\\s)",J="(?= |$)",t="g",O="position",D="fixed",u="relative",I="left",N="top",Q="medium",P="borderLeftWidth",q="borderTopWidth",d=L.opera,h=L.webkit,g=L.gecko,s=L.ie;e.Dom={CUSTOM_ATTRIBUTES:(!v.hasAttribute)?{"for":"htmlFor","class":f}:{"htmlFor":"for","className":E},DOT_ATTRIBUTES:{checked:true},get:function(aa){var ac,X,ab,Z,W,G,Y=null;if(aa){if(typeof aa=="string"||typeof aa=="number"){ac=aa+"";aa=j.getElementById(aa);G=(aa)?aa.attributes:null;if(aa&&G&&G.id&&G.id.value===ac){return aa;}else{if(aa&&j.all){aa=null;X=j.all[ac];if(X&&X.length){for(Z=0,W=X.length;Z<W;++Z){if(X[Z].id===ac){return X[Z];}}}}}}else{if(e.Element&&aa instanceof e.Element){aa=aa.get("element");}else{if(!aa.nodeType&&"length" in aa){ab=[];for(Z=0,W=aa.length;Z<W;++Z){ab[ab.length]=e.Dom.get(aa[Z]);}aa=ab;}}}Y=aa;}return Y;},getComputedStyle:function(G,W){if(window[V]){return G[C][M][V](G,null)[W];}else{if(G[y]){return e.Dom.IE_ComputedStyle.get(G,W);}}},getStyle:function(G,W){return e.Dom.batch(G,e.Dom._getStyle,W);},_getStyle:function(){if(window[V]){return function(G,Y){Y=(Y==="float")?Y="cssFloat":e.Dom._toCamel(Y);var X=G.style[Y],W;if(!X){W=G[C][M][V](G,null);if(W){X=W[Y];}}return X;};}else{if(v[y]){return function(G,Y){var X;switch(Y){case"opacity":X=100;try{X=G.filters["DXImageTransform.Microsoft.Alpha"].opacity;}catch(Z){try{X=G.filters("alpha").opacity;}catch(W){}}return X/100;case"float":Y="styleFloat";default:Y=e.Dom._toCamel(Y);X=G[y]?G[y][Y]:null;return(G.style[Y]||X);}};}}}(),setStyle:function(G,W,X){e.Dom.batch(G,e.Dom._setStyle,{prop:W,val:X});},_setStyle:function(){if(!window.getComputedStyle&&j.documentElement.currentStyle){return function(W,G){var X=e.Dom._toCamel(G.prop),Y=G.val;if(W){switch(X){case"opacity":if(Y===""||Y===null||Y===1){W.style.removeAttribute("filter");}else{if(k.isString(W.style.filter)){W.style.filter="alpha(opacity="+Y*100+")";if(!W[y]||!W[y].hasLayout){W.style.zoom=1;}}}break;case"float":X="styleFloat";default:W.style[X]=Y;}}else{}};}else{return function(W,G){var X=e.Dom._toCamel(G.prop),Y=G.val;if(W){if(X=="float"){X="cssFloat";}W.style[X]=Y;}else{}};}}(),getXY:function(G){return e.Dom.batch(G,e.Dom._getXY);},_canPosition:function(G){return(e.Dom._getStyle(G,"display")!=="none"&&e.Dom._inDoc(G));},_getXY:function(W){var X,G,Z,ab,Y,aa,ac=Math.round,ad=false;if(e.Dom._canPosition(W)){Z=W[p]();ab=W[C];X=e.Dom.getDocumentScrollLeft(ab);G=e.Dom.getDocumentScrollTop(ab);ad=[Z[I],Z[N]];if(Y||aa){ad[0]-=aa;ad[1]-=Y;}if((G||X)){ad[0]+=X;ad[1]+=G;}ad[0]=ac(ad[0]);ad[1]=ac(ad[1]);}else{}return ad;},getX:function(G){var W=function(X){return e.Dom.getXY(X)[0];};return e.Dom.batch(G,W,e.Dom,true);},getY:function(G){var W=function(X){return e.Dom.getXY(X)[1];};return e.Dom.batch(G,W,e.Dom,true);},setXY:function(G,X,W){e.Dom.batch(G,e.Dom._setXY,{pos:X,noRetry:W});},_setXY:function(G,Z){var aa=e.Dom._getStyle(G,O),Y=e.Dom.setStyle,ad=Z.pos,W=Z.noRetry,ab=[parseInt(e.Dom.getComputedStyle(G,I),10),parseInt(e.Dom.getComputedStyle(G,N),10)],ac,X;ac=e.Dom._getXY(G);if(!ad||ac===false){return false;}if(aa=="static"){aa=u;Y(G,O,aa);}if(isNaN(ab[0])){ab[0]=(aa==u)?0:G[z];}if(isNaN(ab[1])){ab[1]=(aa==u)?0:G[o];}if(ad[0]!==null){Y(G,I,ad[0]-ac[0]+ab[0]+"px");}if(ad[1]!==null){Y(G,N,ad[1]-ac[1]+ab[1]+"px");}if(!W){X=e.Dom._getXY(G);if((ad[0]!==null&&X[0]!=ad[0])||(ad[1]!==null&&X[1]!=ad[1])){e.Dom._setXY(G,{pos:ad,noRetry:true});}}},setX:function(W,G){e.Dom.setXY(W,[G,null]);},setY:function(G,W){e.Dom.setXY(G,[null,W]);},getRegion:function(G){var W=function(X){var Y=false;if(e.Dom._canPosition(X)){Y=e.Region.getRegion(X);}else{}return Y;};return e.Dom.batch(G,W,e.Dom,true);},getClientWidth:function(){return e.Dom.getViewportWidth();},getClientHeight:function(){return e.Dom.getViewportHeight();},getElementsByClassName:function(ab,af,ac,ae,X,ad){af=af||"*";ac=(ac)?e.Dom.get(ac):null||j;if(!ac){return[];}var W=[],G=ac.getElementsByTagName(af),Z=e.Dom.hasClass;for(var Y=0,aa=G.length;Y<aa;++Y){if(Z(G[Y],ab)){W[W.length]=G[Y];}}if(ae){e.Dom.batch(W,ae,X,ad);}return W;},hasClass:function(W,G){return e.Dom.batch(W,e.Dom._hasClass,G);},_hasClass:function(X,W){var G=false,Y;if(X&&W){Y=e.Dom._getAttribute(X,f)||i;if(Y){Y=Y.replace(/\\s+/g,b);}if(W.exec){G=W.test(Y);}else{G=W&&(b+Y+b).indexOf(b+W+b)>-1;}}else{}return G;},addClass:function(W,G){return e.Dom.batch(W,e.Dom._addClass,G);},_addClass:function(X,W){var G=false,Y;if(X&&W){Y=e.Dom._getAttribute(X,f)||i;if(!e.Dom._hasClass(X,W)){e.Dom.setAttribute(X,f,a(Y+b+W));G=true;}}else{}return G;},removeClass:function(W,G){return e.Dom.batch(W,e.Dom._removeClass,G);},_removeClass:function(Y,X){var W=false,aa,Z,G;if(Y&&X){aa=e.Dom._getAttribute(Y,f)||i;e.Dom.setAttribute(Y,f,aa.replace(e.Dom._getClassRegex(X),i));Z=e.Dom._getAttribute(Y,f);if(aa!==Z){e.Dom.setAttribute(Y,f,a(Z));W=true;if(e.Dom._getAttribute(Y,f)===""){G=(Y.hasAttribute&&Y.hasAttribute(E))?E:f;Y.removeAttribute(G);}}}else{}return W;},replaceClass:function(X,W,G){return e.Dom.batch(X,e.Dom._replaceClass,{from:W,to:G});},_replaceClass:function(Y,X){var W,ab,aa,G=false,Z;if(Y&&X){ab=X.from;aa=X.to;if(!aa){G=false;}else{if(!ab){G=e.Dom._addClass(Y,X.to);}else{if(ab!==aa){Z=e.Dom._getAttribute(Y,f)||i;W=(b+Z.replace(e.Dom._getClassRegex(ab),b+aa).replace(/\\s+/g,b)).split(e.Dom._getClassRegex(aa));W.splice(1,0,b+aa);e.Dom.setAttribute(Y,f,a(W.join(i)));G=true;}}}}else{}return G;},generateId:function(G,X){X=X||"yui-gen";var W=function(Y){if(Y&&Y.id){return Y.id;}var Z=X+YAHOO.env._id_counter++;if(Y){if(Y[C]&&Y[C].getElementById(Z)){return e.Dom.generateId(Y,Z+X);}Y.id=Z;}return Z;};return e.Dom.batch(G,W,e.Dom,true)||W.apply(e.Dom,arguments);},isAncestor:function(W,X){W=e.Dom.get(W);X=e.Dom.get(X);var G=false;if((W&&X)&&(W[K]&&X[K])){if(W.contains&&W!==X){G=W.contains(X);}else{if(W.compareDocumentPosition){G=!!(W.compareDocumentPosition(X)&16);}}}else{}return G;},inDocument:function(G,W){return e.Dom._inDoc(e.Dom.get(G),W);},_inDoc:function(W,X){var G=false;if(W&&W[c]){X=X||W[C];G=e.Dom.isAncestor(X[U],W);}else{}return G;},getElementsBy:function(W,af,ab,ad,X,ac,ae){af=af||"*";ab=(ab)?e.Dom.get(ab):null||j;var aa=(ae)?null:[],G;if(ab){G=ab.getElementsByTagName(af);for(var Y=0,Z=G.length;Y<Z;++Y){if(W(G[Y])){if(ae){aa=G[Y];break;}else{aa[aa.length]=G[Y];}}}if(ad){e.Dom.batch(aa,ad,X,ac);}}return aa;},getElementBy:function(X,G,W){return e.Dom.getElementsBy(X,G,W,null,null,null,true);},batch:function(X,ab,aa,Z){var Y=[],W=(Z)?aa:null;X=(X&&(X[c]||X.item))?X:e.Dom.get(X);if(X&&ab){if(X[c]||X.length===undefined){return ab.call(W,X,aa);}for(var G=0;G<X.length;++G){Y[Y.length]=ab.call(W||X[G],X[G],aa);}}else{return false;}return Y;},getDocumentHeight:function(){var W=(j[S]!=l||h)?j.body.scrollHeight:v.scrollHeight,G=Math.max(W,e.Dom.getViewportHeight());return G;},getDocumentWidth:function(){var W=(j[S]!=l||h)?j.body.scrollWidth:v.scrollWidth,G=Math.max(W,e.Dom.getViewportWidth());return G;},getViewportHeight:function(){var G=self.innerHeight,W=j[S];if((W||s)&&!d){G=(W==l)?v.clientHeight:j.body.clientHeight;}return G;},getViewportWidth:function(){var G=self.innerWidth,W=j[S];if(W||s){G=(W==l)?v.clientWidth:j.body.clientWidth;}return G;},getAncestorBy:function(G,W){while((G=G[x])){if(e.Dom._testElement(G,W)){return G;}}return null;},getAncestorByClassName:function(W,G){W=e.Dom.get(W);if(!W){return null;}var X=function(Y){return e.Dom.hasClass(Y,G);};return e.Dom.getAncestorBy(W,X);},getAncestorByTagName:function(W,G){W=e.Dom.get(W);if(!W){return null;}var X=function(Y){return Y[c]&&Y[c].toUpperCase()==G.toUpperCase();};return e.Dom.getAncestorBy(W,X);},getPreviousSiblingBy:function(G,W){while(G){G=G.previousSibling;if(e.Dom._testElement(G,W)){return G;}}return null;},getPreviousSibling:function(G){G=e.Dom.get(G);if(!G){return null;}return e.Dom.getPreviousSiblingBy(G);},getNextSiblingBy:function(G,W){while(G){G=G.nextSibling;if(e.Dom._testElement(G,W)){return G;}}return null;},getNextSibling:function(G){G=e.Dom.get(G);if(!G){return null;}return e.Dom.getNextSiblingBy(G);},getFirstChildBy:function(G,X){var W=(e.Dom._testElement(G.firstChild,X))?G.firstChild:null;return W||e.Dom.getNextSiblingBy(G.firstChild,X);},getFirstChild:function(G,W){G=e.Dom.get(G);if(!G){return null;}return e.Dom.getFirstChildBy(G);},getLastChildBy:function(G,X){if(!G){return null;}var W=(e.Dom._testElement(G.lastChild,X))?G.lastChild:null;return W||e.Dom.getPreviousSiblingBy(G.lastChild,X);},getLastChild:function(G){G=e.Dom.get(G);return e.Dom.getLastChildBy(G);},getChildrenBy:function(W,Y){var X=e.Dom.getFirstChildBy(W,Y),G=X?[X]:[];e.Dom.getNextSiblingBy(X,function(Z){if(!Y||Y(Z)){G[G.length]=Z;}return false;});return G;},getChildren:function(G){G=e.Dom.get(G);if(!G){}return e.Dom.getChildrenBy(G);},getDocumentScrollLeft:function(G){G=G||j;return Math.max(G[U].scrollLeft,G.body.scrollLeft);},getDocumentScrollTop:function(G){G=G||j;return Math.max(G[U].scrollTop,G.body.scrollTop);},insertBefore:function(W,G){W=e.Dom.get(W);G=e.Dom.get(G);if(!W||!G||!G[x]){return null;}return G[x].insertBefore(W,G);},insertAfter:function(W,G){W=e.Dom.get(W);G=e.Dom.get(G);if(!W||!G||!G[x]){return null;}if(G.nextSibling){return G[x].insertBefore(W,G.nextSibling);}else{return G[x].appendChild(W);}},getClientRegion:function(){var X=e.Dom.getDocumentScrollTop(),W=e.Dom.getDocumentScrollLeft(),Y=e.Dom.getViewportWidth()+W,G=e.Dom.getViewportHeight()+X;return new e.Region(X,Y,G,W);},setAttribute:function(W,G,X){e.Dom.batch(W,e.Dom._setAttribute,{attr:G,val:X});},_setAttribute:function(X,W){var G=e.Dom._toCamel(W.attr),Y=W.val;if(X&&X.setAttribute){if(e.Dom.DOT_ATTRIBUTES[G]&&X.tagName&&X.tagName!="BUTTON"){X[G]=Y;}else{G=e.Dom.CUSTOM_ATTRIBUTES[G]||G;X.setAttribute(G,Y);}}else{}},getAttribute:function(W,G){return e.Dom.batch(W,e.Dom._getAttribute,G);},_getAttribute:function(W,G){var X;G=e.Dom.CUSTOM_ATTRIBUTES[G]||G;if(e.Dom.DOT_ATTRIBUTES[G]){X=W[G];}else{if(W&&"getAttribute" in W){if(/^(?:href|src)$/.test(G)){X=W.getAttribute(G,2);}else{X=W.getAttribute(G);}}else{}}return X;},_toCamel:function(W){var X=B;function G(Y,Z){return Z.toUpperCase();}return X[W]||(X[W]=W.indexOf("-")===-1?W:W.replace(/-([a-z])/gi,G));},_getClassRegex:function(W){var G;if(W!==undefined){if(W.exec){G=W;}else{G=F[W];if(!G){W=W.replace(e.Dom._patterns.CLASS_RE_TOKENS,"\\\\$1");W=W.replace(/\\s+/g,b);G=F[W]=new RegExp(R+W+J,t);}}}return G;},_patterns:{ROOT_TAG:/^body|html$/i,CLASS_RE_TOKENS:/([\\.\\(\\)\\^\\$\\*\\+\\?\\|\\[\\]\\{\\}\\\\])/g},_testElement:function(G,W){return G&&G[K]==1&&(!W||W(G));},_calcBorders:function(X,Y){var W=parseInt(e.Dom[V](X,q),10)||0,G=parseInt(e.Dom[V](X,P),10)||0;if(g){if(m.test(X[c])){W=0;G=0;}}Y[0]+=G;Y[1]+=W;return Y;}};var r=e.Dom[V];if(L.opera){e.Dom[V]=function(W,G){var X=r(W,G);if(w.test(G)){X=e.Dom.Color.toRGB(X);}return X;};}if(L.webkit){e.Dom[V]=function(W,G){var X=r(W,G);if(X==="rgba(0, 0, 0, 0)"){X="transparent";}return X;};}if(L.ie&&L.ie>=8){e.Dom.DOT_ATTRIBUTES.type=true;}})();YAHOO.util.Region=function(d,e,a,c){this.top=d;this.y=d;this[1]=d;this.right=e;this.bottom=a;this.left=c;this.x=c;this[0]=c;this.width=this.right-this.left;this.height=this.bottom-this.top;};YAHOO.util.Region.prototype.contains=function(a){return(a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom);};YAHOO.util.Region.prototype.getArea=function(){return((this.bottom-this.top)*(this.right-this.left));};YAHOO.util.Region.prototype.intersect=function(f){var d=Math.max(this.top,f.top),e=Math.min(this.right,f.right),a=Math.min(this.bottom,f.bottom),c=Math.max(this.left,f.left);if(a>=d&&e>=c){return new YAHOO.util.Region(d,e,a,c);}else{return null;}};YAHOO.util.Region.prototype.union=function(f){var d=Math.min(this.top,f.top),e=Math.max(this.right,f.right),a=Math.max(this.bottom,f.bottom),c=Math.min(this.left,f.left);return new YAHOO.util.Region(d,e,a,c);};YAHOO.util.Region.prototype.toString=function(){return("Region {"+"top: "+this.top+", right: "+this.right+", bottom: "+this.bottom+", left: "+this.left+", height: "+this.height+", width: "+this.width+"}");};YAHOO.util.Region.getRegion=function(e){var g=YAHOO.util.Dom.getXY(e),d=g[1],f=g[0]+e.offsetWidth,a=g[1]+e.offsetHeight,c=g[0];return new YAHOO.util.Region(d,f,a,c);};YAHOO.util.Point=function(a,b){if(YAHOO.lang.isArray(a)){b=a[1];a=a[0];}YAHOO.util.Point.superclass.constructor.call(this,b,a,b,a);};YAHOO.extend(YAHOO.util.Point,YAHOO.util.Region);(function(){var b=YAHOO.util,a="clientTop",f="clientLeft",j="parentNode",k="right",w="hasLayout",i="px",u="opacity",l="auto",d="borderLeftWidth",g="borderTopWidth",p="borderRightWidth",v="borderBottomWidth",s="visible",q="transparent",n="height",e="width",h="style",t="currentStyle",r=/^width|height$/,o=/^(\\d[.\\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i,m={get:function(x,z){var y="",A=x[t][z];if(z===u){y=b.Dom.getStyle(x,u);}else{if(!A||(A.indexOf&&A.indexOf(i)>-1)){y=A;}else{if(b.Dom.IE_COMPUTED[z]){y=b.Dom.IE_COMPUTED[z](x,z);}else{if(o.test(A)){y=b.Dom.IE.ComputedStyle.getPixel(x,z);}else{y=A;}}}}return y;},getOffset:function(z,E){var B=z[t][E],x=E.charAt(0).toUpperCase()+E.substr(1),C="offset"+x,y="pixel"+x,A="",D;if(B==l){D=z[C];if(D===undefined){A=0;}A=D;if(r.test(E)){z[h][E]=D;if(z[C]>D){A=D-(z[C]-D);}z[h][E]=l;}}else{if(!z[h][y]&&!z[h][E]){z[h][E]=B;}A=z[h][y];}return A+i;},getBorderWidth:function(x,z){var y=null;if(!x[t][w]){x[h].zoom=1;}switch(z){case g:y=x[a];break;case v:y=x.offsetHeight-x.clientHeight-x[a];break;case d:y=x[f];break;case p:y=x.offsetWidth-x.clientWidth-x[f];break;}return y+i;},getPixel:function(y,x){var A=null,B=y[t][k],z=y[t][x];y[h][k]=z;A=y[h].pixelRight;y[h][k]=B;return A+i;},getMargin:function(y,x){var z;if(y[t][x]==l){z=0+i;}else{z=b.Dom.IE.ComputedStyle.getPixel(y,x);}return z;},getVisibility:function(y,x){var z;while((z=y[t])&&z[x]=="inherit"){y=y[j];}return(z)?z[x]:s;},getColor:function(y,x){return b.Dom.Color.toRGB(y[t][x])||q;},getBorderColor:function(y,x){var z=y[t],A=z[x]||z.color;return b.Dom.Color.toRGB(b.Dom.Color.toHex(A));}},c={};c.top=c.right=c.bottom=c.left=c[e]=c[n]=m.getOffset;c.color=m.getColor;c[g]=c[p]=c[v]=c[d]=m.getBorderWidth;c.marginTop=c.marginRight=c.marginBottom=c.marginLeft=m.getMargin;c.visibility=m.getVisibility;c.borderColor=c.borderTopColor=c.borderRightColor=c.borderBottomColor=c.borderLeftColor=m.getBorderColor;b.Dom.IE_COMPUTED=c;b.Dom.IE_ComputedStyle=m;})();(function(){var c="toString",a=parseInt,b=RegExp,d=YAHOO.util;d.Dom.Color={KEYWORDS:{black:"000",silver:"c0c0c0",gray:"808080",white:"fff",maroon:"800000",red:"f00",purple:"800080",fuchsia:"f0f",green:"008000",lime:"0f0",olive:"808000",yellow:"ff0",navy:"000080",blue:"00f",teal:"008080",aqua:"0ff"},re_RGB:/^rgb\\(([0-9]+)\\s*,\\s*([0-9]+)\\s*,\\s*([0-9]+)\\)$/i,re_hex:/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,re_hex3:/([0-9A-F])/gi,toRGB:function(e){if(!d.Dom.Color.re_RGB.test(e)){e=d.Dom.Color.toHex(e);}if(d.Dom.Color.re_hex.exec(e)){e="rgb("+[a(b.$1,16),a(b.$2,16),a(b.$3,16)].join(", ")+")";}return e;},toHex:function(f){f=d.Dom.Color.KEYWORDS[f]||f;if(d.Dom.Color.re_RGB.exec(f)){f=[Number(b.$1).toString(16),Number(b.$2).toString(16),Number(b.$3).toString(16)];for(var e=0;e<f.length;e++){if(f[e].length<2){f[e]="0"+f[e];}}f=f.join("");}if(f.length<6){f=f.replace(d.Dom.Color.re_hex3,"$1$1");}if(f!=="transparent"&&f.indexOf("#")<0){f="#"+f;}return f.toUpperCase();}};}());YAHOO.register("dom",YAHOO.util.Dom,{version:"2.9.0",build:"2800"});YAHOO.util.CustomEvent=function(d,c,b,a,e){this.type=d;this.scope=c||window;this.silent=b;this.fireOnce=e;this.fired=false;this.firedWith=null;this.signature=a||YAHOO.util.CustomEvent.LIST;this.subscribers=[];if(!this.silent){}var f="_YUICEOnSubscribe";if(d!==f){this.subscribeEvent=new YAHOO.util.CustomEvent(f,this,true);}this.lastError=null;};YAHOO.util.CustomEvent.LIST=0;YAHOO.util.CustomEvent.FLAT=1;YAHOO.util.CustomEvent.prototype={subscribe:function(b,c,d){if(!b){throw new Error("Invalid callback for subscriber to \'"+this.type+"\'");}if(this.subscribeEvent){this.subscribeEvent.fire(b,c,d);}var a=new YAHOO.util.Subscriber(b,c,d);if(this.fireOnce&&this.fired){this.notify(a,this.firedWith);}else{this.subscribers.push(a);}},unsubscribe:function(d,f){if(!d){return this.unsubscribeAll();}var e=false;for(var b=0,a=this.subscribers.length;b<a;++b){var c=this.subscribers[b];if(c&&c.contains(d,f)){this._delete(b);e=true;}}return e;},fire:function(){this.lastError=null;var h=[],a=this.subscribers.length;var d=[].slice.call(arguments,0),c=true,f,b=false;if(this.fireOnce){if(this.fired){return true;}else{this.firedWith=d;}}this.fired=true;if(!a&&this.silent){return true;}if(!this.silent){}var e=this.subscribers.slice();for(f=0;f<a;++f){var g=e[f];if(!g||!g.fn){b=true;}else{c=this.notify(g,d);if(false===c){if(!this.silent){}break;}}}return(c!==false);},notify:function(g,c){var b,i=null,f=g.getScope(this.scope),a=YAHOO.util.Event.throwErrors;if(!this.silent){}if(this.signature==YAHOO.util.CustomEvent.FLAT){if(c.length>0){i=c[0];}try{b=g.fn.call(f,i,g.obj);}catch(h){this.lastError=h;if(a){throw h;}}}else{try{b=g.fn.call(f,this.type,c,g.obj);}catch(d){this.lastError=d;if(a){throw d;}}}return b;},unsubscribeAll:function(){var a=this.subscribers.length,b;for(b=a-1;b>-1;b--){this._delete(b);}this.subscribers=[];return a;},_delete:function(a){var b=this.subscribers[a];if(b){delete b.fn;delete b.obj;}this.subscribers.splice(a,1);},toString:function(){return"CustomEvent: "+"\'"+this.type+"\', "+"context: "+this.scope;}};YAHOO.util.Subscriber=function(a,b,c){this.fn=a;this.obj=YAHOO.lang.isUndefined(b)?null:b;this.overrideContext=c;};YAHOO.util.Subscriber.prototype.getScope=function(a){if(this.overrideContext){if(this.overrideContext===true){return this.obj;}else{return this.overrideContext;}}return a;};YAHOO.util.Subscriber.prototype.contains=function(a,b){if(b){return(this.fn==a&&this.obj==b);}else{return(this.fn==a);}};YAHOO.util.Subscriber.prototype.toString=function(){return"Subscriber { obj: "+this.obj+", overrideContext: "+(this.overrideContext||"no")+" }";};if(!YAHOO.util.Event){YAHOO.util.Event=function(){var g=false,h=[],j=[],a=0,e=[],b=0,c={63232:38,63233:40,63234:37,63235:39,63276:33,63277:34,25:9},d=YAHOO.env.ua.ie,f="focusin",i="focusout";return{POLL_RETRYS:500,POLL_INTERVAL:40,EL:0,TYPE:1,FN:2,WFN:3,UNLOAD_OBJ:3,ADJ_SCOPE:4,OBJ:5,OVERRIDE:6,CAPTURE:7,lastError:null,isSafari:YAHOO.env.ua.webkit,webkit:YAHOO.env.ua.webkit,isIE:d,_interval:null,_dri:null,_specialTypes:{focusin:(d?"focusin":"focus"),focusout:(d?"focusout":"blur")},DOMReady:false,throwErrors:false,startInterval:function(){if(!this._interval){this._interval=YAHOO.lang.later(this.POLL_INTERVAL,this,this._tryPreloadAttach,null,true);}},onAvailable:function(q,m,o,p,n){var k=(YAHOO.lang.isString(q))?[q]:q;for(var l=0;l<k.length;l=l+1){e.push({id:k[l],fn:m,obj:o,overrideContext:p,checkReady:n});}a=this.POLL_RETRYS;this.startInterval();},onContentReady:function(n,k,l,m){this.onAvailable(n,k,l,m,true);},onDOMReady:function(){this.DOMReadyEvent.subscribe.apply(this.DOMReadyEvent,arguments);},_addListener:function(m,k,v,p,t,y){if(!v||!v.call){return false;}if(this._isValidCollection(m)){var w=true;for(var q=0,s=m.length;q<s;++q){w=this.on(m[q],k,v,p,t)&&w;}return w;}else{if(YAHOO.lang.isString(m)){var o=this.getEl(m);if(o){m=o;}else{this.onAvailable(m,function(){YAHOO.util.Event._addListener(m,k,v,p,t,y);});return true;}}}if(!m){return false;}if("unload"==k&&p!==this){j[j.length]=[m,k,v,p,t];return true;}var l=m;if(t){if(t===true){l=p;}else{l=t;}}var n=function(z){return v.call(l,YAHOO.util.Event.getEvent(z,m),p);};var x=[m,k,v,n,l,p,t,y];var r=h.length;h[r]=x;try{this._simpleAdd(m,k,n,y);}catch(u){this.lastError=u;this.removeListener(m,k,v);return false;}return true;},_getType:function(k){return this._specialTypes[k]||k;},addListener:function(m,p,l,n,o){var k=((p==f||p==i)&&!YAHOO.env.ua.ie)?true:false;return this._addListener(m,this._getType(p),l,n,o,k);},addFocusListener:function(l,k,m,n){return this.on(l,f,k,m,n);},removeFocusListener:function(l,k){return this.removeListener(l,f,k);},addBlurListener:function(l,k,m,n){return this.on(l,i,k,m,n);},removeBlurListener:function(l,k){return this.removeListener(l,i,k);},removeListener:function(l,k,r){var m,p,u;k=this._getType(k);if(typeof l=="string"){l=this.getEl(l);}else{if(this._isValidCollection(l)){var s=true;for(m=l.length-1;m>-1;m--){s=(this.removeListener(l[m],k,r)&&s);}return s;}}if(!r||!r.call){return this.purgeElement(l,false,k);}if("unload"==k){for(m=j.length-1;m>-1;m--){u=j[m];if(u&&u[0]==l&&u[1]==k&&u[2]==r){j.splice(m,1);return true;}}return false;}var n=null;var o=arguments[3];if("undefined"===typeof o){o=this._getCacheIndex(h,l,k,r);}if(o>=0){n=h[o];}if(!l||!n){return false;}var t=n[this.CAPTURE]===true?true:false;try{this._simpleRemove(l,k,n[this.WFN],t);}catch(q){this.lastError=q;return false;}delete h[o][this.WFN];delete h[o][this.FN];h.splice(o,1);return true;},getTarget:function(m,l){var k=m.target||m.srcElement;return this.resolveTextNode(k);},resolveTextNode:function(l){try{if(l&&3==l.nodeType){return l.parentNode;}}catch(k){return null;}return l;},getPageX:function(l){var k=l.pageX;if(!k&&0!==k){k=l.clientX||0;if(this.isIE){k+=this._getScrollLeft();}}return k;},getPageY:function(k){var l=k.pageY;if(!l&&0!==l){l=k.clientY||0;if(this.isIE){l+=this._getScrollTop();}}return l;},getXY:function(k){return[this.getPageX(k),this.getPageY(k)];},getRelatedTarget:function(l){var k=l.relatedTarget;if(!k){if(l.type=="mouseout"){k=l.toElement;}else{if(l.type=="mouseover"){k=l.fromElement;}}}return this.resolveTextNode(k);},getTime:function(m){if(!m.time){var l=new Date().getTime();try{m.time=l;}catch(k){this.lastError=k;return l;}}return m.time;},stopEvent:function(k){this.stopPropagation(k);this.preventDefault(k);},stopPropagation:function(k){if(k.stopPropagation){k.stopPropagation();}else{k.cancelBubble=true;}},preventDefault:function(k){if(k.preventDefault){k.preventDefault();}else{k.returnValue=false;}},getEvent:function(m,k){var l=m||window.event;if(!l){var n=this.getEvent.caller;while(n){l=n.arguments[0];if(l&&Event==l.constructor){break;}n=n.caller;}}return l;},getCharCode:function(l){var k=l.keyCode||l.charCode||0;if(YAHOO.env.ua.webkit&&(k in c)){k=c[k];}return k;},_getCacheIndex:function(n,q,r,p){for(var o=0,m=n.length;o<m;o=o+1){var k=n[o];if(k&&k[this.FN]==p&&k[this.EL]==q&&k[this.TYPE]==r){return o;}}return -1;},generateId:function(k){var l=k.id;if(!l){l="yuievtautoid-"+b;++b;k.id=l;}return l;},_isValidCollection:function(l){try{return(l&&typeof l!=="string"&&l.length&&!l.tagName&&!l.alert&&typeof l[0]!=="undefined");}catch(k){return false;}},elCache:{},getEl:function(k){return(typeof k==="string")?document.getElementById(k):k;},clearCache:function(){},DOMReadyEvent:new YAHOO.util.CustomEvent("DOMReady",YAHOO,0,0,1),_load:function(l){if(!g){g=true;var k=YAHOO.util.Event;k._ready();k._tryPreloadAttach();}},_ready:function(l){var k=YAHOO.util.Event;if(!k.DOMReady){k.DOMReady=true;k.DOMReadyEvent.fire();k._simpleRemove(document,"DOMContentLoaded",k._ready);}},_tryPreloadAttach:function(){if(e.length===0){a=0;if(this._interval){this._interval.cancel();this._interval=null;}return;}if(this.locked){return;}if(this.isIE){if(!this.DOMReady){this.startInterval();return;}}this.locked=true;var q=!g;if(!q){q=(a>0&&e.length>0);}var p=[];var r=function(t,u){var s=t;if(u.overrideContext){if(u.overrideContext===true){s=u.obj;}else{s=u.overrideContext;}}u.fn.call(s,u.obj);};var l,k,o,n,m=[];for(l=0,k=e.length;l<k;l=l+1){o=e[l];if(o){n=this.getEl(o.id);if(n){if(o.checkReady){if(g||n.nextSibling||!q){m.push(o);e[l]=null;}}else{r(n,o);e[l]=null;}}else{p.push(o);}}}for(l=0,k=m.length;l<k;l=l+1){o=m[l];r(this.getEl(o.id),o);}a--;if(q){for(l=e.length-1;l>-1;l--){o=e[l];if(!o||!o.id){e.splice(l,1);}}this.startInterval();}else{if(this._interval){this._interval.cancel();this._interval=null;}}this.locked=false;},purgeElement:function(p,q,s){var n=(YAHOO.lang.isString(p))?this.getEl(p):p;var r=this.getListeners(n,s),o,k;if(r){for(o=r.length-1;o>-1;o--){var m=r[o];this.removeListener(n,m.type,m.fn);}}if(q&&n&&n.childNodes){for(o=0,k=n.childNodes.length;o<k;++o){this.purgeElement(n.childNodes[o],q,s);}}},getListeners:function(n,k){var q=[],m;if(!k){m=[h,j];}else{if(k==="unload"){m=[j];}else{k=this._getType(k);m=[h];}}var s=(YAHOO.lang.isString(n))?this.getEl(n):n;for(var p=0;p<m.length;p=p+1){var u=m[p];if(u){for(var r=0,t=u.length;r<t;++r){var o=u[r];if(o&&o[this.EL]===s&&(!k||k===o[this.TYPE])){q.push({type:o[this.TYPE],fn:o[this.FN],obj:o[this.OBJ],adjust:o[this.OVERRIDE],scope:o[this.ADJ_SCOPE],index:r});}}}}return(q.length)?q:null;},_unload:function(s){var m=YAHOO.util.Event,p,o,n,r,q,t=j.slice(),k;for(p=0,r=j.length;p<r;++p){n=t[p];if(n){try{k=window;if(n[m.ADJ_SCOPE]){if(n[m.ADJ_SCOPE]===true){k=n[m.UNLOAD_OBJ];}else{k=n[m.ADJ_SCOPE];}}n[m.FN].call(k,m.getEvent(s,n[m.EL]),n[m.UNLOAD_OBJ]);}catch(w){}t[p]=null;}}n=null;k=null;j=null;if(h){for(o=h.length-1;o>-1;o--){n=h[o];if(n){try{m.removeListener(n[m.EL],n[m.TYPE],n[m.FN],o);}catch(v){}}}n=null;}try{m._simpleRemove(window,"unload",m._unload);m._simpleRemove(window,"load",m._load);}catch(u){}},_getScrollLeft:function(){return this._getScroll()[1];},_getScrollTop:function(){return this._getScroll()[0];},_getScroll:function(){var k=document.documentElement,l=document.body;if(k&&(k.scrollTop||k.scrollLeft)){return[k.scrollTop,k.scrollLeft];}else{if(l){return[l.scrollTop,l.scrollLeft];}else{return[0,0];}}},regCE:function(){},_simpleAdd:function(){if(window.addEventListener){return function(m,n,l,k){m.addEventListener(n,l,(k));};}else{if(window.attachEvent){return function(m,n,l,k){m.attachEvent("on"+n,l);};}else{return function(){};}}}(),_simpleRemove:function(){if(window.removeEventListener){return function(m,n,l,k){m.removeEventListener(n,l,(k));};}else{if(window.detachEvent){return function(l,m,k){l.detachEvent("on"+m,k);};}else{return function(){};}}}()};}();(function(){var a=YAHOO.util.Event;a.on=a.addListener;a.onFocus=a.addFocusListener;a.onBlur=a.addBlurListener;/*! DOMReady: based on work by: Dean Edwards/John Resig/Matthias Miller/Diego Perini */if(a.isIE){if(self!==self.top){document.onreadystatechange=function(){if(document.readyState=="complete"){document.onreadystatechange=null;a._ready();}};}else{YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach,YAHOO.util.Event,true);var b=document.createElement("p");a._dri=setInterval(function(){try{b.doScroll("left");clearInterval(a._dri);a._dri=null;a._ready();b=null;}catch(c){}},a.POLL_INTERVAL);}}else{if(a.webkit&&a.webkit<525){a._dri=setInterval(function(){var c=document.readyState;if("loaded"==c||"complete"==c){clearInterval(a._dri);a._dri=null;a._ready();}},a.POLL_INTERVAL);}else{a._simpleAdd(document,"DOMContentLoaded",a._ready);}}a._simpleAdd(window,"load",a._load);a._simpleAdd(window,"unload",a._unload);a._tryPreloadAttach();})();}YAHOO.util.EventProvider=function(){};YAHOO.util.EventProvider.prototype={__yui_events:null,__yui_subscribers:null,subscribe:function(a,c,f,e){this.__yui_events=this.__yui_events||{};var d=this.__yui_events[a];if(d){d.subscribe(c,f,e);}else{this.__yui_subscribers=this.__yui_subscribers||{};var b=this.__yui_subscribers;if(!b[a]){b[a]=[];}b[a].push({fn:c,obj:f,overrideContext:e});}},unsubscribe:function(c,e,g){this.__yui_events=this.__yui_events||{};var a=this.__yui_events;if(c){var f=a[c];if(f){return f.unsubscribe(e,g);}}else{var b=true;for(var d in a){if(YAHOO.lang.hasOwnProperty(a,d)){b=b&&a[d].unsubscribe(e,g);}}return b;}return false;},unsubscribeAll:function(a){return this.unsubscribe(a);},createEvent:function(b,g){this.__yui_events=this.__yui_events||{};var e=g||{},d=this.__yui_events,f;if(d[b]){}else{f=new YAHOO.util.CustomEvent(b,e.scope||this,e.silent,YAHOO.util.CustomEvent.FLAT,e.fireOnce);d[b]=f;if(e.onSubscribeCallback){f.subscribeEvent.subscribe(e.onSubscribeCallback);}this.__yui_subscribers=this.__yui_subscribers||{};var a=this.__yui_subscribers[b];if(a){for(var c=0;c<a.length;++c){f.subscribe(a[c].fn,a[c].obj,a[c].overrideContext);}}}return d[b];},fireEvent:function(b){this.__yui_events=this.__yui_events||{};var d=this.__yui_events[b];if(!d){return null;}var a=[];for(var c=1;c<arguments.length;++c){a.push(arguments[c]);}return d.fire.apply(d,a);},hasEvent:function(a){if(this.__yui_events){if(this.__yui_events[a]){return true;}}return false;}};(function(){var a=YAHOO.util.Event,c=YAHOO.lang;YAHOO.util.KeyListener=function(d,i,e,f){if(!d){}else{if(!i){}else{if(!e){}}}if(!f){f=YAHOO.util.KeyListener.KEYDOWN;}var g=new YAHOO.util.CustomEvent("keyPressed");this.enabledEvent=new YAHOO.util.CustomEvent("enabled");this.disabledEvent=new YAHOO.util.CustomEvent("disabled");if(c.isString(d)){d=document.getElementById(d);}if(c.isFunction(e)){g.subscribe(e);}else{g.subscribe(e.fn,e.scope,e.correctScope);}function h(o,n){if(!i.shift){i.shift=false;}if(!i.alt){i.alt=false;}if(!i.ctrl){i.ctrl=false;}if(o.shiftKey==i.shift&&o.altKey==i.alt&&o.ctrlKey==i.ctrl){var j,m=i.keys,l;if(YAHOO.lang.isArray(m)){for(var k=0;k<m.length;k++){j=m[k];l=a.getCharCode(o);if(j==l){g.fire(l,o);break;}}}else{l=a.getCharCode(o);if(m==l){g.fire(l,o);}}}}this.enable=function(){if(!this.enabled){a.on(d,f,h);this.enabledEvent.fire(i);}this.enabled=true;};this.disable=function(){if(this.enabled){a.removeListener(d,f,h);this.disabledEvent.fire(i);}this.enabled=false;};this.toString=function(){return"KeyListener ["+i.keys+"] "+d.tagName+(d.id?"["+d.id+"]":"");};};var b=YAHOO.util.KeyListener;b.KEYDOWN="keydown";b.KEYUP="keyup";b.KEY={ALT:18,BACK_SPACE:8,CAPS_LOCK:20,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,META:224,NUM_LOCK:144,PAGE_DOWN:34,PAGE_UP:33,PAUSE:19,PRINTSCREEN:44,RIGHT:39,SCROLL_LOCK:145,SHIFT:16,SPACE:32,TAB:9,UP:38};})();YAHOO.register("event",YAHOO.util.Event,{version:"2.9.0",build:"2800"});YAHOO.register("yahoo-dom-event", YAHOO, {version: "2.9.0", build: "2800"});(function(){var d=YAHOO.util.Dom,b=YAHOO.util.Event,f=YAHOO.lang,e=YAHOO.widget;YAHOO.widget.TreeView=function(h,g){if(h){this.init(h);}if(g){this.buildTreeFromObject(g);}else{if(f.trim(this._el.innerHTML)){this.buildTreeFromMarkup(h);}}};var c=e.TreeView;c.prototype={id:null,_el:null,_nodes:null,locked:false,_expandAnim:null,_collapseAnim:null,_animCount:0,maxAnim:2,_hasDblClickSubscriber:false,_dblClickTimer:null,currentFocus:null,singleNodeHighlight:false,_currentlyHighlighted:null,setExpandAnim:function(g){this._expandAnim=(e.TVAnim.isValid(g))?g:null;},setCollapseAnim:function(g){this._collapseAnim=(e.TVAnim.isValid(g))?g:null;},animateExpand:function(i,j){if(this._expandAnim&&this._animCount<this.maxAnim){var g=this;var h=e.TVAnim.getAnim(this._expandAnim,i,function(){g.expandComplete(j);});if(h){++this._animCount;this.fireEvent("animStart",{"node":j,"type":"expand"});h.animate();}return true;}return false;},animateCollapse:function(i,j){if(this._collapseAnim&&this._animCount<this.maxAnim){var g=this;var h=e.TVAnim.getAnim(this._collapseAnim,i,function(){g.collapseComplete(j);});if(h){++this._animCount;this.fireEvent("animStart",{"node":j,"type":"collapse"});h.animate();}return true;}return false;},expandComplete:function(g){--this._animCount;this.fireEvent("animComplete",{"node":g,"type":"expand"});},collapseComplete:function(g){--this._animCount;this.fireEvent("animComplete",{"node":g,"type":"collapse"});},init:function(i){this._el=d.get(i);this.id=d.generateId(this._el,"yui-tv-auto-id-");this.createEvent("animStart",this);this.createEvent("animComplete",this);this.createEvent("collapse",this);this.createEvent("collapseComplete",this);this.createEvent("expand",this);this.createEvent("expandComplete",this);this.createEvent("enterKeyPressed",this);this.createEvent("clickEvent",this);this.createEvent("focusChanged",this);var g=this;this.createEvent("dblClickEvent",{scope:this,onSubscribeCallback:function(){g._hasDblClickSubscriber=true;}});this.createEvent("labelClick",this);this.createEvent("highlightEvent",this);this._nodes=[];c.trees[this.id]=this;this.root=new e.RootNode(this);var h=e.LogWriter;if(this._initEditor){this._initEditor();}},buildTreeFromObject:function(g){var h=function(q,n){var m,r,l,k,p,j,o;for(m=0;m<n.length;m++){r=n[m];if(f.isString(r)){l=new e.TextNode(r,q);}else{if(f.isObject(r)){k=r.children;delete r.children;p=r.type||"text";delete r.type;switch(f.isString(p)&&p.toLowerCase()){case"text":l=new e.TextNode(r,q);break;case"menu":l=new e.MenuNode(r,q);break;case"html":l=new e.HTMLNode(r,q);break;default:if(f.isString(p)){j=e[p];}else{j=p;}if(f.isObject(j)){for(o=j;o&&o!==e.Node;o=o.superclass.constructor){}if(o){l=new j(r,q);}else{}}else{}}if(k){h(l,k);}}else{}}}};if(!f.isArray(g)){g=[g];}h(this.root,g);},buildTreeFromMarkup:function(i){var h=function(j){var n,q,m=[],l={},k,o;for(n=d.getFirstChild(j);n;n=d.getNextSibling(n)){switch(n.tagName.toUpperCase()){case"LI":k="";l={expanded:d.hasClass(n,"expanded"),title:n.title||n.alt||null,className:f.trim(n.className.replace(/\\bexpanded\\b/,""))||null};q=n.firstChild;if(q.nodeType==3){k=f.trim(q.nodeValue.replace(/[\\n\\t\\r]*/g,""));if(k){l.type="text";l.label=k;}else{q=d.getNextSibling(q);}}if(!k){if(q.tagName.toUpperCase()=="A"){l.type="text";l.label=q.innerHTML;l.href=q.href;l.target=q.target;l.title=q.title||q.alt||l.title;}else{l.type="html";var p=document.createElement("div");p.appendChild(q.cloneNode(true));l.html=p.innerHTML;l.hasIcon=true;}}q=d.getNextSibling(q);switch(q&&q.tagName.toUpperCase()){case"UL":case"OL":l.children=h(q);break;}if(YAHOO.lang.JSON){o=n.getAttribute("yuiConfig");if(o){o=YAHOO.lang.JSON.parse(o);l=YAHOO.lang.merge(l,o);}}m.push(l);break;case"UL":case"OL":l={type:"text",label:"",children:h(q)};m.push(l);break;}}return m;};var g=d.getChildrenBy(d.get(i),function(k){var j=k.tagName.toUpperCase();return j=="UL"||j=="OL";});if(g.length){this.buildTreeFromObject(h(g[0]));}else{}},_getEventTargetTdEl:function(h){var i=b.getTarget(h);while(i&&!(i.tagName.toUpperCase()=="TD"&&d.hasClass(i.parentNode,"ygtvrow"))){i=d.getAncestorByTagName(i,"td");}if(f.isNull(i)){return null;}if(/\\bygtv(blank)?depthcell/.test(i.className)){return null;}if(i.id){var g=i.id.match(/\\bygtv([^\\d]*)(.*)/);if(g&&g[2]&&this._nodes[g[2]]){return i;}}return null;},_onClickEvent:function(j){var h=this,l=this._getEventTargetTdEl(j),i,k,g=function(m){i.focus();if(m||!i.href){i.toggle();try{b.preventDefault(j);}catch(n){}}};if(!l){return;}i=this.getNodeByElement(l);if(!i){return;}k=b.getTarget(j);if(d.hasClass(k,i.labelStyle)||d.getAncestorByClassName(k,i.labelStyle)){this.fireEvent("labelClick",i);}if(this._closeEditor){this._closeEditor(false);}if(/\\bygtv[tl][mp]h?h?/.test(l.className)){g(true);}else{if(this._dblClickTimer){window.clearTimeout(this._dblClickTimer);this._dblClickTimer=null;}else{if(this._hasDblClickSubscriber){this._dblClickTimer=window.setTimeout(function(){h._dblClickTimer=null;if(h.fireEvent("clickEvent",{event:j,node:i})!==false){g();}},200);}else{if(h.fireEvent("clickEvent",{event:j,node:i})!==false){g();}}}}},_onDblClickEvent:function(g){if(!this._hasDblClickSubscriber){return;}var h=this._getEventTargetTdEl(g);if(!h){return;}if(!(/\\bygtv[tl][mp]h?h?/.test(h.className))){this.fireEvent("dblClickEvent",{event:g,node:this.getNodeByElement(h)});if(this._dblClickTimer){window.clearTimeout(this._dblClickTimer);this._dblClickTimer=null;}}},_onMouseOverEvent:function(g){var h;if((h=this._getEventTargetTdEl(g))&&(h=this.getNodeByElement(h))&&(h=h.getToggleEl())){h.className=h.className.replace(/\\bygtv([lt])([mp])\\b/gi,"ygtv$1$2h");}},_onMouseOutEvent:function(g){var h;if((h=this._getEventTargetTdEl(g))&&(h=this.getNodeByElement(h))&&(h=h.getToggleEl())){h.className=h.className.replace(/\\bygtv([lt])([mp])h\\b/gi,"ygtv$1$2");}},_onKeyDownEvent:function(l){var n=b.getTarget(l),k=this.getNodeByElement(n),j=k,g=YAHOO.util.KeyListener.KEY;switch(l.keyCode){case g.UP:do{if(j.previousSibling){j=j.previousSibling;}else{j=j.parent;}}while(j&&!j._canHaveFocus());if(j){j.focus();}b.preventDefault(l);break;case g.DOWN:do{if(j.nextSibling){j=j.nextSibling;}else{j.expand();j=(j.children.length||null)&&j.children[0];}}while(j&&!j._canHaveFocus);if(j){j.focus();}b.preventDefault(l);break;case g.LEFT:do{if(j.parent){j=j.parent;}else{j=j.previousSibling;}}while(j&&!j._canHaveFocus());if(j){j.focus();}b.preventDefault(l);break;case g.RIGHT:var i=this,m,h=function(o){i.unsubscribe("expandComplete",h);m(o);};m=function(o){do{if(o.isDynamic()&&!o.childrenRendered){i.subscribe("expandComplete",h);o.expand();o=null;break;}else{o.expand();if(o.children.length){o=o.children[0];}else{o=o.nextSibling;}}}while(o&&!o._canHaveFocus());if(o){o.focus();}};m(j);b.preventDefault(l);break;case g.ENTER:if(k.href){if(k.target){window.open(k.href,k.target);}else{window.location(k.href);}}else{k.toggle();}this.fireEvent("enterKeyPressed",k);b.preventDefault(l);break;case g.HOME:j=this.getRoot();if(j.children.length){j=j.children[0];}if(j._canHaveFocus()){j.focus();}b.preventDefault(l);break;case g.END:j=j.parent.children;j=j[j.length-1];if(j._canHaveFocus()){j.focus();}b.preventDefault(l);break;case 107:case 187:if(l.shiftKey){k.parent.expandAll();}else{k.expand();}break;case 109:case 189:if(l.shiftKey){k.parent.collapseAll();}else{k.collapse();}break;default:break;}},render:function(){var g=this.root.getHtml(),h=this.getEl();h.innerHTML=g;if(!this._hasEvents){b.on(h,"click",this._onClickEvent,this,true);b.on(h,"dblclick",this._onDblClickEvent,this,true);b.on(h,"mouseover",this._onMouseOverEvent,this,true);b.on(h,"mouseout",this._onMouseOutEvent,this,true);b.on(h,"keydown",this._onKeyDownEvent,this,true);}this._hasEvents=true;},getEl:function(){if(!this._el){this._el=d.get(this.id);}return this._el;},regNode:function(g){this._nodes[g.index]=g;},getRoot:function(){return this.root;},setDynamicLoad:function(g,h){this.root.setDynamicLoad(g,h);},expandAll:function(){if(!this.locked){this.root.expandAll();}},collapseAll:function(){if(!this.locked){this.root.collapseAll();}},getNodeByIndex:function(h){var g=this._nodes[h];return(g)?g:null;},getNodeByProperty:function(j,h){for(var g in this._nodes){if(this._nodes.hasOwnProperty(g)){var k=this._nodes[g];if((j in k&&k[j]==h)||(k.data&&h==k.data[j])){return k;}}}return null;},getNodesByProperty:function(k,j){var g=[];for(var h in this._nodes){if(this._nodes.hasOwnProperty(h)){var l=this._nodes[h];if((k in l&&l[k]==j)||(l.data&&j==l.data[k])){g.push(l);}}}return(g.length)?g:null;},getNodesBy:function(j){var g=[];for(var h in this._nodes){if(this._nodes.hasOwnProperty(h)){var k=this._nodes[h];if(j(k)){g.push(k);}}}return(g.length)?g:null;},getNodeByElement:function(i){var j=i,g,h=/ygtv([^\\d]*)(.*)/;do{if(j&&j.id){g=j.id.match(h);if(g&&g[2]){return this.getNodeByIndex(g[2]);}}j=j.parentNode;if(!j||!j.tagName){break;}}while(j.id!==this.id&&j.tagName.toLowerCase()!=="body");return null;},getHighlightedNode:function(){return this._currentlyHighlighted;},removeNode:function(h,g){if(h.isRoot()){return false;}var i=h.parent;if(i.parent){i=i.parent;}this._deleteNode(h);if(g&&i&&i.childrenRendered){i.refresh();}return true;},_removeChildren_animComplete:function(g){this.unsubscribe(this._removeChildren_animComplete);this.removeChildren(g.node);},removeChildren:function(g){if(g.expanded){if(this._collapseAnim){this.subscribe("animComplete",this._removeChildren_animComplete,this,true);e.Node.prototype.collapse.call(g);return;}g.collapse();}while(g.children.length){this._deleteNode(g.children[0]);}if(g.isRoot()){e.Node.prototype.expand.call(g);}g.childrenRendered=false;g.dynamicLoadComplete=false;g.updateIcon();},_deleteNode:function(g){this.removeChildren(g);this.popNode(g);},popNode:function(k){var l=k.parent;var h=[];for(var j=0,g=l.children.length;j<g;++j){if(l.children[j]!=k){h[h.length]=l.children[j];}}l.children=h;l.childrenRendered=false;if(k.previousSibling){k.previousSibling.nextSibling=k.nextSibling;}if(k.nextSibling){k.nextSibling.previousSibling=k.previousSibling;}if(this.currentFocus==k){this.currentFocus=null;}if(this._currentlyHighlighted==k){this._currentlyHighlighted=null;}k.parent=null;k.previousSibling=null;k.nextSibling=null;k.tree=null;delete this._nodes[k.index];},destroy:function(){if(this._destroyEditor){this._destroyEditor();}var h=this.getEl();b.removeListener(h,"click");b.removeListener(h,"dblclick");b.removeListener(h,"mouseover");b.removeListener(h,"mouseout");b.removeListener(h,"keydown");for(var g=0;g<this._nodes.length;g++){var j=this._nodes[g];if(j&&j.destroy){j.destroy();}}h.innerHTML="";this._hasEvents=false;},toString:function(){return"TreeView "+this.id;},getNodeCount:function(){return this.getRoot().getNodeCount();},getTreeDefinition:function(){return this.getRoot().getNodeDefinition();},onExpand:function(g){},onCollapse:function(g){},setNodesProperty:function(g,i,h){this.root.setNodesProperty(g,i);if(h){this.root.refresh();}},onEventToggleHighlight:function(h){var g;if("node" in h&&h.node instanceof e.Node){g=h.node;}else{if(h instanceof e.Node){g=h;}else{return false;}}g.toggleHighlight();return false;}};var a=c.prototype;a.draw=a.render;YAHOO.augment(c,YAHOO.util.EventProvider);c.nodeCount=0;c.trees=[];c.getTree=function(h){var g=c.trees[h];return(g)?g:null;};c.getNode=function(h,i){var g=c.getTree(h);return(g)?g.getNodeByIndex(i):null;};c.FOCUS_CLASS_NAME="ygtvfocus";})();(function(){var b=YAHOO.util.Dom,c=YAHOO.lang,a=YAHOO.util.Event;YAHOO.widget.Node=function(f,e,d){if(f){this.init(f,e,d);}};YAHOO.widget.Node.prototype={index:0,children:null,tree:null,data:null,parent:null,depth:-1,expanded:false,multiExpand:true,renderHidden:false,childrenRendered:false,dynamicLoadComplete:false,previousSibling:null,nextSibling:null,_dynLoad:false,dataLoader:null,isLoading:false,hasIcon:true,iconMode:0,nowrap:false,isLeaf:false,contentStyle:"",contentElId:null,enableHighlight:true,highlightState:0,propagateHighlightUp:false,propagateHighlightDown:false,className:null,_type:"Node",init:function(g,f,d){this.data={};this.children=[];this.index=YAHOO.widget.TreeView.nodeCount;++YAHOO.widget.TreeView.nodeCount;this.contentElId="ygtvcontentel"+this.index;if(c.isObject(g)){for(var e in g){if(g.hasOwnProperty(e)){if(e.charAt(0)!="_"&&!c.isUndefined(this[e])&&!c.isFunction(this[e])){this[e]=g[e];}else{this.data[e]=g[e];}}}}if(!c.isUndefined(d)){this.expanded=d;}this.createEvent("parentChange",this);if(f){f.appendChild(this);}},applyParent:function(e){if(!e){return false;}this.tree=e.tree;this.parent=e;this.depth=e.depth+1;this.tree.regNode(this);e.childrenRendered=false;for(var f=0,d=this.children.length;f<d;++f){this.children[f].applyParent(this);}this.fireEvent("parentChange");return true;},appendChild:function(e){if(this.hasChildren()){var d=this.children[this.children.length-1];d.nextSibling=e;e.previousSibling=d;}this.children[this.children.length]=e;e.applyParent(this);if(this.childrenRendered&&this.expanded){this.getChildrenEl().style.display="";}return e;},appendTo:function(d){return d.appendChild(this);},insertBefore:function(d){var f=d.parent;if(f){if(this.tree){this.tree.popNode(this);}var e=d.isChildOf(f);f.children.splice(e,0,this);if(d.previousSibling){d.previousSibling.nextSibling=this;}this.previousSibling=d.previousSibling;this.nextSibling=d;d.previousSibling=this;this.applyParent(f);}return this;},insertAfter:function(d){var f=d.parent;if(f){if(this.tree){this.tree.popNode(this);}var e=d.isChildOf(f);if(!d.nextSibling){this.nextSibling=null;return this.appendTo(f);}f.children.splice(e+1,0,this);d.nextSibling.previousSibling=this;this.previousSibling=d;this.nextSibling=d.nextSibling;d.nextSibling=this;this.applyParent(f);}return this;},isChildOf:function(e){if(e&&e.children){for(var f=0,d=e.children.length;f<d;++f){if(e.children[f]===this){return f;}}}return -1;},getSiblings:function(){var d=this.parent.children.slice(0);for(var e=0;e<d.length&&d[e]!=this;e++){}d.splice(e,1);if(d.length){return d;}return null;},showChildren:function(){if(!this.tree.animateExpand(this.getChildrenEl(),this)){if(this.hasChildren()){this.getChildrenEl().style.display="";}}},hideChildren:function(){if(!this.tree.animateCollapse(this.getChildrenEl(),this)){this.getChildrenEl().style.display="none";}},getElId:function(){return"ygtv"+this.index;},getChildrenElId:function(){return"ygtvc"+this.index;},getToggleElId:function(){return"ygtvt"+this.index;},getEl:function(){return b.get(this.getElId());},getChildrenEl:function(){return b.get(this.getChildrenElId());},getToggleEl:function(){return b.get(this.getToggleElId());},getContentEl:function(){return b.get(this.contentElId);},collapse:function(){if(!this.expanded){return;}var d=this.tree.onCollapse(this);if(false===d){return;}d=this.tree.fireEvent("collapse",this);if(false===d){return;}if(!this.getEl()){this.expanded=false;}else{this.hideChildren();this.expanded=false;this.updateIcon();}d=this.tree.fireEvent("collapseComplete",this);},expand:function(f){if(this.isLoading||(this.expanded&&!f)){return;}var d=true;if(!f){d=this.tree.onExpand(this);if(false===d){return;}d=this.tree.fireEvent("expand",this);}if(false===d){return;}if(!this.getEl()){this.expanded=true;return;}if(!this.childrenRendered){this.getChildrenEl().innerHTML=this.renderChildren();}else{}this.expanded=true;this.updateIcon();if(this.isLoading){this.expanded=false;return;}if(!this.multiExpand){var g=this.getSiblings();for(var e=0;g&&e<g.length;++e){if(g[e]!=this&&g[e].expanded){g[e].collapse();}}}this.showChildren();d=this.tree.fireEvent("expandComplete",this);},updateIcon:function(){if(this.hasIcon){var d=this.getToggleEl();if(d){d.className=d.className.replace(/\\bygtv(([tl][pmn]h?)|(loading))\\b/gi,this.getStyle());}}d=b.get("ygtvtableel"+this.index);if(d){if(this.expanded){b.replaceClass(d,"ygtv-collapsed","ygtv-expanded");}else{b.replaceClass(d,"ygtv-expanded","ygtv-collapsed");}}},getStyle:function(){if(this.isLoading){return"ygtvloading";}else{var e=(this.nextSibling)?"t":"l";var d="n";if(this.hasChildren(true)||(this.isDynamic()&&!this.getIconMode())){d=(this.expanded)?"m":"p";}return"ygtv"+e+d;}},getHoverStyle:function(){var d=this.getStyle();if(this.hasChildren(true)&&!this.isLoading){d+="h";}return d;},expandAll:function(){var d=this.children.length;for(var e=0;e<d;++e){var f=this.children[e];if(f.isDynamic()){break;}else{if(!f.multiExpand){break;}else{f.expand();f.expandAll();}}}},collapseAll:function(){for(var d=0;d<this.children.length;++d){this.children[d].collapse();this.children[d].collapseAll();}},setDynamicLoad:function(d,e){if(d){this.dataLoader=d;this._dynLoad=true;}else{this.dataLoader=null;this._dynLoad=false;}if(e){this.iconMode=e;}},isRoot:function(){return(this==this.tree.root);},isDynamic:function(){if(this.isLeaf){return false;}else{return(!this.isRoot()&&(this._dynLoad||this.tree.root._dynLoad));}},getIconMode:function(){return(this.iconMode||this.tree.root.iconMode);},hasChildren:function(d){if(this.isLeaf){return false;}else{return(this.children.length>0||(d&&this.isDynamic()&&!this.dynamicLoadComplete));}},toggle:function(){if(!this.tree.locked&&(this.hasChildren(true)||this.isDynamic())){if(this.expanded){this.collapse();}else{this.expand();}}},getHtml:function(){this.childrenRendered=false;return[\'<div class="ygtvitem" id="\',this.getElId(),\'">\',this.getNodeHtml(),this.getChildrenHtml(),"</div>"].join("");},getChildrenHtml:function(){var d=[];d[d.length]=\'<div class="ygtvchildren" id="\'+this.getChildrenElId()+\'"\';if(!this.expanded||!this.hasChildren()){d[d.length]=\' style="display:none;"\';}d[d.length]=">";if((this.hasChildren(true)&&this.expanded)||(this.renderHidden&&!this.isDynamic())){d[d.length]=this.renderChildren();}d[d.length]="</div>";return d.join("");},renderChildren:function(){var d=this;if(this.isDynamic()&&!this.dynamicLoadComplete){this.isLoading=true;this.tree.locked=true;if(this.dataLoader){setTimeout(function(){d.dataLoader(d,function(){d.loadComplete();});},10);}else{if(this.tree.root.dataLoader){setTimeout(function(){d.tree.root.dataLoader(d,function(){d.loadComplete();});},10);}else{return"Error: data loader not found or not specified.";}}return"";}else{return this.completeRender();}},completeRender:function(){var e=[];for(var d=0;d<this.children.length;++d){e[e.length]=this.children[d].getHtml();}this.childrenRendered=true;return e.join("");},loadComplete:function(){this.getChildrenEl().innerHTML=this.completeRender();if(this.propagateHighlightDown){if(this.highlightState===1&&!this.tree.singleNodeHighlight){for(var d=0;d<this.children.length;d++){this.children[d].highlight(true);}}else{if(this.highlightState===0||this.tree.singleNodeHighlight){for(d=0;d<this.children.length;d++){this.children[d].unhighlight(true);}}}}this.dynamicLoadComplete=true;this.isLoading=false;this.expand(true);this.tree.locked=false;},getAncestor:function(e){if(e>=this.depth||e<0){return null;}var d=this.parent;while(d.depth>e){d=d.parent;}return d;},getDepthStyle:function(d){return(this.getAncestor(d).nextSibling)?"ygtvdepthcell":"ygtvblankdepthcell";},getNodeHtml:function(){var e=[];e[e.length]=\'<table id="ygtvtableel\'+this.index+\'" border="0" cellpadding="0" cellspacing="0" class="ygtvtable ygtvdepth\'+this.depth;e[e.length]=" ygtv-"+(this.expanded?"expanded":"collapsed");if(this.enableHighlight){e[e.length]=" ygtv-highlight"+this.highlightState;}if(this.className){e[e.length]=" "+this.className;}e[e.length]=\'"><tr class="ygtvrow">\';for(var d=0;d<this.depth;++d){e[e.length]=\'<td class="ygtvcell \'+this.getDepthStyle(d)+\'"><div class="ygtvspacer"></div></td>\';}if(this.hasIcon){e[e.length]=\'<td id="\'+this.getToggleElId();e[e.length]=\'" class="ygtvcell \';e[e.length]=this.getStyle();e[e.length]=\'"><a href="#" class="ygtvspacer">&#160;</a></td>\';}e[e.length]=\'<td id="\'+this.contentElId;e[e.length]=\'" class="ygtvcell \';e[e.length]=this.contentStyle+\' ygtvcontent" \';e[e.length]=(this.nowrap)?\' nowrap="nowrap" \':"";e[e.length]=" >";e[e.length]=this.getContentHtml();e[e.length]="</td></tr></table>";return e.join("");},getContentHtml:function(){return"";},refresh:function(){this.getChildrenEl().innerHTML=this.completeRender();if(this.hasIcon){var d=this.getToggleEl();if(d){d.className=d.className.replace(/\\bygtv[lt][nmp]h*\\b/gi,this.getStyle());}}},toString:function(){return this._type+" ("+this.index+")";},_focusHighlightedItems:[],_focusedItem:null,_canHaveFocus:function(){return this.getEl().getElementsByTagName("a").length>0;},_removeFocus:function(){if(this._focusedItem){a.removeListener(this._focusedItem,"blur");this._focusedItem=null;}var d;while((d=this._focusHighlightedItems.shift())){b.removeClass(d,YAHOO.widget.TreeView.FOCUS_CLASS_NAME);}},focus:function(){var f=false,d=this;if(this.tree.currentFocus){this.tree.currentFocus._removeFocus();}var e=function(g){if(g.parent){e(g.parent);g.parent.expand();}};e(this);b.getElementsBy(function(g){return(/ygtv(([tl][pmn]h?)|(content))/).test(g.className);},"td",d.getEl().firstChild,function(h){b.addClass(h,YAHOO.widget.TreeView.FOCUS_CLASS_NAME);if(!f){var g=h.getElementsByTagName("a");if(g.length){g=g[0];g.focus();d._focusedItem=g;a.on(g,"blur",function(){d.tree.fireEvent("focusChanged",{oldNode:d.tree.currentFocus,newNode:null});d.tree.currentFocus=null;d._removeFocus();});f=true;}}d._focusHighlightedItems.push(h);});if(f){this.tree.fireEvent("focusChanged",{oldNode:this.tree.currentFocus,newNode:this});this.tree.currentFocus=this;}else{this.tree.fireEvent("focusChanged",{oldNode:d.tree.currentFocus,newNode:null});this.tree.currentFocus=null;this._removeFocus();}return f;},getNodeCount:function(){for(var d=0,e=0;d<this.children.length;d++){e+=this.children[d].getNodeCount();}return e+1;},getNodeDefinition:function(){if(this.isDynamic()){return false;}var g,d=c.merge(this.data),f=[];if(this.expanded){d.expanded=this.expanded;}if(!this.multiExpand){d.multiExpand=this.multiExpand;}if(this.renderHidden){d.renderHidden=this.renderHidden;}if(!this.hasIcon){d.hasIcon=this.hasIcon;}if(this.nowrap){d.nowrap=this.nowrap;}if(this.className){d.className=this.className;}if(this.editable){d.editable=this.editable;}if(!this.enableHighlight){d.enableHighlight=this.enableHighlight;}if(this.highlightState){d.highlightState=this.highlightState;}if(this.propagateHighlightUp){d.propagateHighlightUp=this.propagateHighlightUp;}if(this.propagateHighlightDown){d.propagateHighlightDown=this.propagateHighlightDown;}d.type=this._type;for(var e=0;e<this.children.length;e++){g=this.children[e].getNodeDefinition();if(g===false){return false;}f.push(g);}if(f.length){d.children=f;}return d;},getToggleLink:function(){return"return false;";},setNodesProperty:function(d,g,f){if(d.charAt(0)!="_"&&!c.isUndefined(this[d])&&!c.isFunction(this[d])){this[d]=g;}else{this.data[d]=g;}for(var e=0;e<this.children.length;e++){this.children[e].setNodesProperty(d,g);}if(f){this.refresh();}},toggleHighlight:function(){if(this.enableHighlight){if(this.highlightState==1){this.unhighlight();}else{this.highlight();}}},highlight:function(e){if(this.enableHighlight){if(this.tree.singleNodeHighlight){if(this.tree._currentlyHighlighted){this.tree._currentlyHighlighted.unhighlight(e);}this.tree._currentlyHighlighted=this;}this.highlightState=1;this._setHighlightClassName();if(!this.tree.singleNodeHighlight){if(this.propagateHighlightDown){for(var d=0;d<this.children.length;d++){this.children[d].highlight(true);}}if(this.propagateHighlightUp){if(this.parent){this.parent._childrenHighlighted();}}}if(!e){this.tree.fireEvent("highlightEvent",this);}}},unhighlight:function(e){if(this.enableHighlight){this.tree._currentlyHighlighted=null;this.highlightState=0;this._setHighlightClassName();if(!this.tree.singleNodeHighlight){if(this.propagateHighlightDown){for(var d=0;d<this.children.length;d++){this.children[d].unhighlight(true);}}if(this.propagateHighlightUp){if(this.parent){this.parent._childrenHighlighted();}}}if(!e){this.tree.fireEvent("highlightEvent",this);}}},_childrenHighlighted:function(){var f=false,e=false;if(this.enableHighlight){for(var d=0;d<this.children.length;d++){switch(this.children[d].highlightState){case 0:e=true;break;case 1:f=true;break;case 2:f=e=true;break;}}if(f&&e){this.highlightState=2;}else{if(f){this.highlightState=1;}else{this.highlightState=0;}}this._setHighlightClassName();if(this.propagateHighlightUp){if(this.parent){this.parent._childrenHighlighted();}}}},_setHighlightClassName:function(){var d=b.get("ygtvtableel"+this.index);if(d){d.className=d.className.replace(/\\bygtv-highlight\\d\\b/gi,"ygtv-highlight"+this.highlightState);}}};YAHOO.augment(YAHOO.widget.Node,YAHOO.util.EventProvider);})();YAHOO.widget.RootNode=function(a){this.init(null,null,true);this.tree=a;};YAHOO.extend(YAHOO.widget.RootNode,YAHOO.widget.Node,{_type:"RootNode",getNodeHtml:function(){return"";},toString:function(){return this._type;},loadComplete:function(){this.tree.draw();},getNodeCount:function(){for(var a=0,b=0;a<this.children.length;a++){b+=this.children[a].getNodeCount();}return b;},getNodeDefinition:function(){for(var c,a=[],b=0;b<this.children.length;b++){c=this.children[b].getNodeDefinition();if(c===false){return false;}a.push(c);}return a;},collapse:function(){},expand:function(){},getSiblings:function(){return null;},focus:function(){}});(function(){var b=YAHOO.util.Dom,c=YAHOO.lang,a=YAHOO.util.Event;YAHOO.widget.TextNode=function(f,e,d){if(f){if(c.isString(f)){f={label:f};}this.init(f,e,d);this.setUpLabel(f);}};YAHOO.extend(YAHOO.widget.TextNode,YAHOO.widget.Node,{labelStyle:"ygtvlabel",labelElId:null,label:null,title:null,href:null,target:"_self",_type:"TextNode",setUpLabel:function(d){if(c.isString(d)){d={label:d};}else{if(d.style){this.labelStyle=d.style;}}this.label=d.label;this.labelElId="ygtvlabelel"+this.index;},getLabelEl:function(){return b.get(this.labelElId);},getContentHtml:function(){var d=[];d[d.length]=this.href?"<a":"<span";d[d.length]=\' id="\'+c.escapeHTML(this.labelElId)+\'"\';d[d.length]=\' class="\'+c.escapeHTML(this.labelStyle)+\'"\';if(this.href){d[d.length]=\' href="\'+c.escapeHTML(this.href)+\'"\';d[d.length]=\' target="\'+c.escapeHTML(this.target)+\'"\';}if(this.title){d[d.length]=\' title="\'+c.escapeHTML(this.title)+\'"\';}d[d.length]=" >";d[d.length]=c.escapeHTML(this.label);d[d.length]=this.href?"</a>":"</span>";return d.join("");},getNodeDefinition:function(){var d=YAHOO.widget.TextNode.superclass.getNodeDefinition.call(this);if(d===false){return false;}d.label=this.label;if(this.labelStyle!="ygtvlabel"){d.style=this.labelStyle;}if(this.title){d.title=this.title;}if(this.href){d.href=this.href;}if(this.target!="_self"){d.target=this.target;}return d;},toString:function(){return YAHOO.widget.TextNode.superclass.toString.call(this)+": "+this.label;},onLabelClick:function(){return false;},refresh:function(){YAHOO.widget.TextNode.superclass.refresh.call(this);var d=this.getLabelEl();d.innerHTML=this.label;if(d.tagName.toUpperCase()=="A"){d.href=this.href;d.target=this.target;}}});})();YAHOO.widget.MenuNode=function(c,b,a){YAHOO.widget.MenuNode.superclass.constructor.call(this,c,b,a);this.multiExpand=false;};YAHOO.extend(YAHOO.widget.MenuNode,YAHOO.widget.TextNode,{_type:"MenuNode"});(function(){var b=YAHOO.util.Dom,c=YAHOO.lang,a=YAHOO.util.Event;var d=function(h,g,f,e){if(h){this.init(h,g,f);this.initContent(h,e);}};YAHOO.widget.HTMLNode=d;YAHOO.extend(d,YAHOO.widget.Node,{contentStyle:"ygtvhtml",html:null,_type:"HTMLNode",initContent:function(f,e){this.setHtml(f);this.contentElId="ygtvcontentel"+this.index;if(!c.isUndefined(e)){this.hasIcon=e;}},setHtml:function(f){this.html=(c.isObject(f)&&"html" in f)?f.html:f;var e=this.getContentEl();if(e){if(f.nodeType&&f.nodeType==1&&f.tagName){e.innerHTML="";}else{e.innerHTML=this.html;}}},getContentHtml:function(){if(typeof this.html==="string"){return this.html;}else{d._deferredNodes.push(this);if(!d._timer){d._timer=window.setTimeout(function(){var e;while((e=d._deferredNodes.pop())){e.getContentEl().appendChild(e.html);}d._timer=null;},0);}return"";}},getNodeDefinition:function(){var e=d.superclass.getNodeDefinition.call(this);if(e===false){return false;}e.html=this.html;return e;}});d._deferredNodes=[];d._timer=null;})();(function(){var b=YAHOO.util.Dom,c=YAHOO.lang,a=YAHOO.util.Event,d=YAHOO.widget.Calendar;YAHOO.widget.DateNode=function(g,f,e){YAHOO.widget.DateNode.superclass.constructor.call(this,g,f,e);};YAHOO.extend(YAHOO.widget.DateNode,YAHOO.widget.TextNode,{_type:"DateNode",calendarConfig:null,fillEditorContainer:function(g){var h,f=g.inputContainer;if(c.isUndefined(d)){b.replaceClass(g.editorPanel,"ygtv-edit-DateNode","ygtv-edit-TextNode");YAHOO.widget.DateNode.superclass.fillEditorContainer.call(this,g);return;}if(g.nodeType!=this._type){g.nodeType=this._type;g.saveOnEnter=false;g.node.destroyEditorContents(g);g.inputObject=h=new d(f.appendChild(document.createElement("div")));if(this.calendarConfig){h.cfg.applyConfig(this.calendarConfig,true);h.cfg.fireQueue();}h.selectEvent.subscribe(function(){this.tree._closeEditor(true);},this,true);}else{h=g.inputObject;}g.oldValue=this.label;h.cfg.setProperty("selected",this.label,false);var i=h.cfg.getProperty("DATE_FIELD_DELIMITER");var e=this.label.split(i);h.cfg.setProperty("pagedate",e[h.cfg.getProperty("MDY_MONTH_POSITION")-1]+i+e[h.cfg.getProperty("MDY_YEAR_POSITION")-1]);h.cfg.fireQueue();h.render();h.oDomContainer.focus();},getEditorValue:function(f){if(c.isUndefined(d)){return f.inputElement.value;}else{var h=f.inputObject,g=h.getSelectedDates()[0],e=[];e[h.cfg.getProperty("MDY_DAY_POSITION")-1]=g.getDate();e[h.cfg.getProperty("MDY_MONTH_POSITION")-1]=g.getMonth()+1;e[h.cfg.getProperty("MDY_YEAR_POSITION")-1]=g.getFullYear();return e.join(h.cfg.getProperty("DATE_FIELD_DELIMITER"));}},displayEditedValue:function(g,e){var f=e.node;f.label=g;f.getLabelEl().innerHTML=g;},getNodeDefinition:function(){var e=YAHOO.widget.DateNode.superclass.getNodeDefinition.call(this);if(e===false){return false;}if(this.calendarConfig){e.calendarConfig=this.calendarConfig;}return e;}});})();(function(){var e=YAHOO.util.Dom,f=YAHOO.lang,b=YAHOO.util.Event,d=YAHOO.widget.TreeView,c=d.prototype;d.editorData={active:false,whoHasIt:null,nodeType:null,editorPanel:null,inputContainer:null,buttonsContainer:null,node:null,saveOnEnter:true,oldValue:undefined};c.validator=null;c._initEditor=function(){this.createEvent("editorSaveEvent",this);this.createEvent("editorCancelEvent",this);};c._nodeEditing=function(m){if(m.fillEditorContainer&&m.editable){var i,k,l,j,h=d.editorData;h.active=true;h.whoHasIt=this;if(!h.nodeType){h.editorPanel=i=this.getEl().appendChild(document.createElement("div"));e.addClass(i,"ygtv-label-editor");i.tabIndex=0;l=h.buttonsContainer=i.appendChild(document.createElement("div"));e.addClass(l,"ygtv-button-container");j=l.appendChild(document.createElement("button"));e.addClass(j,"ygtvok");j.innerHTML=" ";j=l.appendChild(document.createElement("button"));e.addClass(j,"ygtvcancel");j.innerHTML=" ";b.on(l,"click",function(q){var r=b.getTarget(q),o=d.editorData,p=o.node,n=o.whoHasIt;if(e.hasClass(r,"ygtvok")){b.stopEvent(q);n._closeEditor(true);}if(e.hasClass(r,"ygtvcancel")){b.stopEvent(q);n._closeEditor(false);}});h.inputContainer=i.appendChild(document.createElement("div"));e.addClass(h.inputContainer,"ygtv-input");b.on(i,"keydown",function(q){var p=d.editorData,n=YAHOO.util.KeyListener.KEY,o=p.whoHasIt;switch(q.keyCode){case n.ENTER:b.stopEvent(q);if(p.saveOnEnter){o._closeEditor(true);}break;case n.ESCAPE:b.stopEvent(q);o._closeEditor(false);break;}});}else{i=h.editorPanel;}h.node=m;if(h.nodeType){e.removeClass(i,"ygtv-edit-"+h.nodeType);}e.addClass(i," ygtv-edit-"+m._type);e.setStyle(i,"display","block");e.setXY(i,e.getXY(m.getContentEl()));i.focus();m.fillEditorContainer(h);return true;}};c.onEventEditNode=function(h){if(h instanceof YAHOO.widget.Node){h.editNode();}else{if(h.node instanceof YAHOO.widget.Node){h.node.editNode();}}return false;};c._closeEditor=function(j){var h=d.editorData,i=h.node,k=true;if(!i||!h.active){return;}if(j){k=h.node.saveEditorValue(h)!==false;}else{this.fireEvent("editorCancelEvent",i);}if(k){e.setStyle(h.editorPanel,"display","none");h.active=false;i.focus();}};c._destroyEditor=function(){var h=d.editorData;if(h&&h.nodeType&&(!h.active||h.whoHasIt===this)){b.removeListener(h.editorPanel,"keydown");b.removeListener(h.buttonContainer,"click");h.node.destroyEditorContents(h);document.body.removeChild(h.editorPanel);h.nodeType=h.editorPanel=h.inputContainer=h.buttonsContainer=h.whoHasIt=h.node=null;h.active=false;}};var g=YAHOO.widget.Node.prototype;g.editable=false;g.editNode=function(){this.tree._nodeEditing(this);};g.fillEditorContainer=null;g.destroyEditorContents=function(h){b.purgeElement(h.inputContainer,true);h.inputContainer.innerHTML="";};g.saveEditorValue=function(h){var j=h.node,k,i=j.tree.validator;k=this.getEditorValue(h);if(f.isFunction(i)){k=i(k,h.oldValue,j);if(f.isUndefined(k)){return false;}}if(this.tree.fireEvent("editorSaveEvent",{newValue:k,oldValue:h.oldValue,node:j})!==false){this.displayEditedValue(k,h);}};g.getEditorValue=function(h){};g.displayEditedValue=function(i,h){};var a=YAHOO.widget.TextNode.prototype;a.fillEditorContainer=function(i){var h;if(i.nodeType!=this._type){i.nodeType=this._type;i.saveOnEnter=true;i.node.destroyEditorContents(i);i.inputElement=h=i.inputContainer.appendChild(document.createElement("input"));}else{h=i.inputElement;}i.oldValue=this.label;h.value=this.label;h.focus();h.select();};a.getEditorValue=function(h){return h.inputElement.value;};a.displayEditedValue=function(j,h){var i=h.node;i.label=j;i.getLabelEl().innerHTML=j;};a.destroyEditorContents=function(h){h.inputContainer.innerHTML="";};})();YAHOO.widget.TVAnim=function(){return{FADE_IN:"TVFadeIn",FADE_OUT:"TVFadeOut",getAnim:function(b,a,c){if(YAHOO.widget[b]){return new YAHOO.widget[b](a,c);}else{return null;}},isValid:function(a){return(YAHOO.widget[a]);}};}();YAHOO.widget.TVFadeIn=function(a,b){this.el=a;this.callback=b;};YAHOO.widget.TVFadeIn.prototype={animate:function(){var e=this;var d=this.el.style;d.opacity=0.1;d.filter="alpha(opacity=10)";d.display="";var c=0.4;var b=new YAHOO.util.Anim(this.el,{opacity:{from:0.1,to:1,unit:""}},c);b.onComplete.subscribe(function(){e.onComplete();});b.animate();},onComplete:function(){this.callback();},toString:function(){return"TVFadeIn";}};YAHOO.widget.TVFadeOut=function(a,b){this.el=a;this.callback=b;};YAHOO.widget.TVFadeOut.prototype={animate:function(){var d=this;var c=0.4;var b=new YAHOO.util.Anim(this.el,{opacity:{from:1,to:0.1,unit:""}},c);b.onComplete.subscribe(function(){d.onComplete();});b.animate();},onComplete:function(){var a=this.el.style;a.display="none";a.opacity=1;a.filter="alpha(opacity=100)";this.callback();},toString:function(){return"TVFadeOut";}};YAHOO.register("treeview",YAHOO.widget.TreeView,{version:"2.9.0",build:"2800"});',
                b = document.createElement("script");
            if (b.setAttribute("type", "text/JavaScript"), b.text) b.text = a; else {
                var c = document.createTextNode(a);
                b.appendChild(c)
            }
            document.getElementsByTagName("head")[0].appendChild(b)
        }();
        var b = function () {
            var a = document.createElement("div");
            return a.setAttribute("id", "__ADE__tree_div"), a
        }, c = function () {
            var a = document.createElement("div");
            a.setAttribute("class", "__ADE__header");
            var b = document.createTextNode("Settings");
            a.appendChild(b);
            var c = document.createElement("div");
            c.setAttribute("id", "__ADE__settingsMainBox");
            var g = document.createElement("div"), h = function (a) {
                var b = document.createElement("div");
                return b.setAttribute("id", "__ADE__settingsSubHeader"), b.appendChild(document.createTextNode(a)), b
            }, i = document.createElement("div");
            i.appendChild(h("Location")), i.appendChild(f()), i.appendChild(e()), g.appendChild(i);
            var j = document.createElement("div");
            return j.appendChild(h("Resources")), j.appendChild(d()), g.appendChild(j), c.appendChild(a), c.appendChild(g), c
        }, d = function () {
            var a = document.createElement("div");
            a.setAttribute("class", "__ADE__settingsEntryBox");
            var b = document.createElement("div");
            b.setAttribute("class", "settingsEntryHeader"), b.appendChild(document.createTextNode("Ressource Loading")), a.appendChild(b);
            var c = document.createElement("div");
            c.setAttribute("class", "settingsSetting");
            var d = document.createElement("input");
            d.setAttribute("type", "checkbox"), d.onchange = function () {
                d.checked ? (AR.ADE.instance.loadAllRessourcesNow(), f.disabled = !0) : f.disabled = !1, AR.ADE.instance.autoLoadResources = d.checked
            };
            var e = document.createTextNode("Auto-Load ressources");
            c.appendChild(d), c.appendChild(e), c.appendChild(document.createElement("br"));
            var f = document.createElement("input");
            return f.setAttribute("type", "button"), f.setAttribute("value", "Load all Ressources now"), f.onclick = function () {
                AR.ADE.instance.loadAllRessourcesNow()
            }, c.appendChild(f), a.appendChild(c), a
        }, e = function () {
            var a = document.createElement("div");
            a.setAttribute("class", "__ADE__settingsEntryBox");
            var b = document.createElement("div");
            b.setAttribute("class", "settingsEntryHeader"), b.appendChild(document.createTextNode("Location Updates")), a.appendChild(b);
            var c = document.createElement("div");
            c.setAttribute("class", "settingsSetting");
            var d = document.createElement("input");
            d.setAttribute("type", "checkbox"), d.onchange = function () {
                AR.ADE.instance.simulateLocation = d.checked
            };
            var e = document.createTextNode("Receive Constant Location Updates");
            return c.appendChild(d), c.appendChild(e), a.appendChild(c), a
        }, f = function () {
            var b = document.createElement("div");
            b.setAttribute("class", "__ADE__settingsEntryBox");
            var c = document.createElement("div");
            c.setAttribute("class", "settingsEntryHeader"), c.appendChild(document.createTextNode("Current Location")), b.appendChild(c);
            var d = document.createElement("div");
            d.setAttribute("class", "settingsSetting");
            var e = document.createElement("div"), f = document.createElement("div");
            f.appendChild(document.createTextNode("Predefined Locations:"));
            var g = document.createElement("select");
            g.setAttribute("id", "preselectedCurrentLocations"), g.onchange = function () {
                var a = AR.__fromJSONString__(g.value);
                document.getElementById("currentLatitude").value = a[0], document.getElementById("currentLongitude").value = a[1], document.getElementById("currentAltitude").value = a[2]
            }, g.addOption = function (a, b, c) {
                var d = document.createElement("option");
                return d.setAttribute("value", a), d.appendChild(document.createTextNode(b)), c && (d.selected = !0), g.appendChild(d), d
            };
            var h = g.addOption("[0,0,0]", "Custom"), i = function (a, b) {
                return function () {
                    try {
                        if (localStorage) for (var c = 0; c < localStorage.length; c++) {
                            var d = localStorage.key(c);
                            d.substring(0, b.length) === b && a.addOption(localStorage.getItem(d), d.substring(b.length))
                        }
                    } catch (a) {
                        AR.logger.warning("Cannot access local storage. Local storage will be disabled.")
                    }
                }
            };
            window.setTimeout(i(g, a), 0), f.appendChild(g), e.appendChild(f);
            for (var j = document.createElement("table"), k = ["Latitude", "Longitude", "Altitude"], l = 0; l < 3; l++) {
                var m = document.createElement("tr"), n = document.createElement("td"),
                    o = document.createTextNode(k[l]), p = document.createElement("td"),
                    q = document.createElement("input");
                q.setAttribute("id", "current" + k[l]), q.setAttribute("type", "text"), q.setAttribute("value", "0.0"), q.onkeydown = function () {
                    h.selected = !0
                }, n.appendChild(o), p.appendChild(q), m.appendChild(n), m.appendChild(p), j.appendChild(m)
            }
            var r = function (a) {
                document.getElementById(a).style.backgroundColor = "lightcoral", window.setTimeout("document.getElementById('" + a + "').style.backgroundColor = 'white';", 1e3)
            }, s = document.createElement("div"), t = document.createElement("input");
            t.setAttribute("id", "__ADE__applyButton"), t.setAttribute("type", "button"), t.setAttribute("value", "Apply");
            var u = function () {
                var a = parseFloat(document.getElementById("currentLatitude").value),
                    b = parseFloat(document.getElementById("currentLongitude").value),
                    c = parseFloat(document.getElementById("currentAltitude").value);
                return null != a && AR.VALIDATE.isInRange(a, -90, 90) ? null != b && AR.VALIDATE.isInRange(b, -180, 180) ? null == c || !AR.VALIDATE.isNumeric(c) || isNaN(c) ? void r("currentAltitude") : [a, b, c] : void r("currentLongitude") : void r("currentLatitude")
            };
            t.onclick = function () {
                var a = u();
                a && AR.ADE.instance.applyLocationUpdate(a)
            }, e.appendChild(j), d.appendChild(e), d.setAttribute("class", "currentLocationBox"), s.appendChild(t), s.appendChild(document.createTextNode("or"));
            var v = document.createElement("input");
            return v.setAttribute("id", "__ADE__saveButton"), v.setAttribute("type", "button"), v.setAttribute("value", "Apply and Save"), v.onclick = function () {
                var b = u();
                if (b) {
                    AR.ADE.instance.applyLocationUpdate(b);
                    var c = prompt("Enter the ID the saved location:", "");
                    if (c) {
                        if (g.addOption(AR.__toJSONString__(b), c, !0), c = a + c, !localStorage) return void alert("Your Browser does not support local storage. Values will not be persisted.");
                        localStorage.setItem(c, AR.__toJSONString__(b))
                    }
                }
            }, s.appendChild(v), e.appendChild(s), b.appendChild(d), b
        };
        this.createWhichARObjectClickedBox = function (a, b) {
            var c = document.createElement("div");
            c.setAttribute("id", "__ADE__hitARObjectDiv");
            var d = document.createElement("select");
            d.addOption = function (a, b) {
                var c = document.createElement("option");
                c.setAttribute("value", a), c.appendChild(document.createTextNode(b)), d.appendChild(c)
            };
            for (var e = 0; e < a.length; e++) d.addOption(a[e].id, a[e].bo.type + " (#" + a[e].id + ")");
            var f = document.createElement("input");
            f.type = "button", f.value = "OK", f.onclick = function () {
                document.body.removeChild(c), b(d.value)
            };
            var g = document.createElement("div");
            g.innerHTML = "The Drawable is attached to multiple ARObjects.<br/>Select which attached ARObject was hit with the click.", c.appendChild(g), c.appendChild(d), c.appendChild(f), document.body.appendChild(c)
        }, this.remove = function () {
            AR.overlay.OVERLAY_CONTAINER.removeOverlay(l)
        };
        var g = null;
        this.getHtmlContainer = function () {
            return g
        };
        var h = document.createElement("div"), i = c();
        h.appendChild(i);
        var j = document.createElement("div"), k = document.createElement("div");
        k.setAttribute("id", "__ADE__treeDivHeader"), k.setAttribute("class", "__ADE__header"), k.appendChild(document.createTextNode("Known ARchitect Objects")), g = b(), j.appendChild(k), j.appendChild(g), h.appendChild(j);
        var l = AR.overlay.OVERLAY_CONTAINER.appendOverlay("ADE", h, function () {
            AR.ADE.instance && AR.ADE.instance.init()
        });
        AR.ADE.Screen = void 0
    };
    var AR = AR || {};
    AR.ADE = AR.ADE || {}, AR.ADE.ConstructionPlan = function () {
        var a, b = new AR.ADE.Screen, c = [];
        this.simulateLocation = !1, this.simulatedLocation = {
            latitude: 0,
            longitude: 0,
            altitude: 0,
            accuracy: AR.CONST.LOCATION_ACCURACY.HIGH
        }, this.applyLocationUncertainity = function () {
            AR.ADE.instance.simulateLocation && (deltaLatitude = (Math.random() - .5) / 1e3, deltaLongitude = (Math.random() - .5) / 1e3, deltaAltitude = 10 * (Math.random() - .5), this.simulatedLocation.latitude += deltaLatitude, this.simulatedLocation.longitude += deltaLongitude, this.simulatedLocation.altitude += deltaAltitude, AR.context.onLocationChanged && AR.context.onLocationChanged(this.simulatedLocation.latitude, this.simulatedLocation.longitude, this.simulatedLocation.altitude, this.simulatedLocation.accuracy))
        };
        var d = window.setInterval("AR.ADE.instance.applyLocationUncertainity();", 1e3);
        this.autoLoadResources = !1, this.init = function () {
            e();
            for (var a = 0; a < c.length; a++) {
                var b = AR.om.getObjectForID(c[a]);
                b && !b.destroyed && AR.ADE.instance.alertCreation(c[a])
            }
        }, this.removeADE = function () {
            b.remove(), window.clearInterval(d), AR.ADE.instance = void 0
        }, this.loadAllRessourcesNow = function () {
            for (objectId in AR.om.__objects__) {
                var a = AR.om.getObjectForID(objectId);
                a instanceof AR.ImageResource ? AR.i.imageResourceInterface.startLoading({objectId: a.__id}) : a instanceof AR.TargetCollectionResource ? AR.i.targetCollectionResourceInterface.startLoading({objectId: a.__id}) : a instanceof AR.CloudRecognitionService ? AR.i.cloudRecognitionServiceInterface.startLoading({objectId: a.__id}) : a instanceof AR.HtmlDrawable ? AR.i.htmlDrawableInterface.startLoading({objectId: a.__id}) : a instanceof AR.Sound ? AR.i.soundInterface.simulateLoad({objectId: a.__id}) : a instanceof AR.VideoDrawable ? AR.i.videoDrawableInterface.simulateLoad({objectId: a.__id}) : a instanceof AR.Model ? AR.i.modelInterface.simulateLoad({objectId: a.__id}) : a instanceof AR.Occluder && AR.i.occluderInterface.simulateLoad({objectId: a.__id})
            }
        }, this.applyLocationUpdate = function (a) {
            AR.ADE.instance.simulatedLocation.latitude = a[0], AR.ADE.instance.simulatedLocation.longitude = a[1], AR.ADE.instance.simulatedLocation.altitude = a[2], null != AR.context.onLocationChanged && AR.context.onLocationChanged(AR.ADE.instance.simulatedLocation.latitude, AR.ADE.instance.simulatedLocation.longitude, AR.ADE.instance.simulatedLocation.altitude, AR.ADE.instance.simulatedLocation.accuracy)
        };
        var e = function () {
            a = new AR.ADE.Tree(b.getHtmlContainer()), AR.i.bridgeObjects.context = AR.i.contextInterface, AR.om.registerObjectForID("context", AR.context), AR.ADE.instance.alertCreation("context"), AR.i.bridgeObjects.hardware = AR.i.hardwareInterface, AR.om.registerObjectForID("hardware", AR.hardware), AR.ADE.instance.alertCreation("hardware"), AR.i.bridgeObjects.radar = AR.i.radarInterface, AR.om.registerObjectForID("radar", AR.radar), AR.ADE.instance.alertCreation("radar")
        };
        this.alertCreation = function (b) {
            if (null == a) return void c.push(b);
            a.objectCreated(b)
        }, this.alertModification = function (b) {
            null != a && a.objectModified(b)
        }, this.alertDeletion = function (b) {
            null != a && a.objectDeleted(b)
        }, this.trigger = function (a, b, c) {
            for (var d = b.split("."), e = AR.om.getObjectForID(a), f = 0; f < d.length - 1; f++) e = e[d[f]];
            var g = [];
            c && (g = JSON.parse(c));
            var h = e[d[d.length - 1]];
            h.apply(h, g)
        }, this.triggerClickOnDrawable = function (a) {
            var c = [], d = null;
            for (objectId in AR.om.__objects__) {
                var e = AR.om.getObjectForID(objectId);
                if (e instanceof AR.ARObject) for (var f = e.drawables.cam, g = 0; g < f.length; g++) if (f[g].__id == a) {
                    d = e;
                    var h = AR.i.getBridgeObject(e.__id);
                    c.push({id: e.__id, bo: h.explain()})
                }
            }
            var i = function (b, c) {
                var d = {drawables: [{drawable: a, arObject: c}], arObjects: [c]};
                AR.js.click.onClickTrigger(d)
            };
            1 == c.length ? i(a, d.__id) : 0 == c.length ? i(a, null) : b.createWhichARObjectClickedBox(c, function (b) {
                i(a, b)
            })
        }
    }, AR.ADE.instance = new AR.ADE.ConstructionPlan, AR.ADE.ConstructionPlan = null;
    var AR = AR || {};
    AR.ADE = AR.ADE || {}, AR.ADE.Tree = function (a) {
        var b = new YAHOO.widget.TreeView(a);
        this.objectCreated = function (a) {
            var c = AR.i.getBridgeObject(a).explain();
            new e(a, c, {node: b.getRoot()});
            b.render()
        }, this.objectModified = function (a) {
            for (var c = b.getNodesByProperty("id", a), d = AR.i.getBridgeObject(a).explain(), e = 0; e < c.length; e++) {
                c[e].data.node.update(d)
            }
        }, this.objectDeleted = function (a) {
            for (var c = b.getNodesByProperty("id", a), d = 0; d < c.length; d++) {
                var e = c[d].parent;
                b.removeNode(c[d]);
                try {
                    e.refresh()
                } catch (a) {
                }
            }
        };
        var c = function (a, b) {
            var c = AR.i.getBridgeObject(a).explain(), e = [];
            for (var f in c.properties) {
                var g = c.properties[f];
                e.push(d(a, f, g, b))
            }
            return e
        }, d = function (a, b, c, d) {
            if (!c || !c.type) return new h(a, b, c, d);
            switch (c.type) {
                case"id":
                    return new f(a, b, c, d);
                case"ids":
                    return new g(a, b, c, d);
                case"trigger":
                    return new i(a, b, c, d);
                case"bridgecall":
                    return new j(a, b, c, d);
                case"html":
                    return new k(a, b, c, d);
                case"uri":
                    return new l(a, b, c, d);
                case"custom_Drawables_Click_Trigger":
                    return new m(a, b, c, d)
            }
        }, e = function (a, b, d) {
            this.nodeType = "ObjectNode";
            var e = {id: a, label: b.type + " (#" + a + ")", expanded: !1, node: this};
            this.node = new YAHOO.widget.TextNode(e, d.node);
            var f = c(a, this);
            this.update = function (a) {
                for (var b = 0; b < f.length; b++) f[b].update(a)
            }
        }, f = function (a, d, e, f) {
            this.nodeType = "IdNode", this.node = null;
            var g = [];
            if (e.value) {
                var i = AR.i.getBridgeObject(e.value).explain(),
                    j = {id: e.value, label: d + ": " + i.type + " (#" + e.value + ")", expanded: !1, node: this};
                this.node = new YAHOO.widget.TextNode(j, f.node), g = c(e.value, this)
            } else {
                var k = new h(a, d, "", f);
                this.node = k.node
            }
            this.referencedId = e.value, this.update = function (e) {
                var i = e.properties[d];
                if (i) {
                    if (i.value != this.referencedId) {
                        if (b.removeNode(this.node), i.value) {
                            var j = AR.i.getBridgeObject(i.value).explain(), k = {
                                id: i.value,
                                label: d + ": " + j.type + " (#" + i.value + ")",
                                expanded: !1,
                                node: this
                            };
                            this.node = new YAHOO.widget.TextNode(k, f.node), g = c(i.value, this)
                        } else this.node = new h(a, d, "", f);
                        this.referencedId = i.value;
                        try {
                            this.node.parent.refresh()
                        } catch (a) {
                        }
                    }
                } else for (var l = 0; l < g.length; l++) g[l].update(e)
            }
        }, g = function (a, c, d, f) {
            this.nodeType = "IdsNode";
            var g = {label: c, expanded: !1};
            this.node = new YAHOO.widget.TextNode(g, f.node);
            for (var h = AR.__fromJSONString__(d.value), i = [], j = 0; j < h.length; j++) i.push(new e(h[j], AR.i.getBridgeObject(h[j]).explain(), this));
            this.update = function (a) {
                for (var d = AR.__fromJSONString__(a.properties[c].value), f = 0; f < i.length; f++) b.removeNode(i[f].node);
                i = [];
                for (var f = 0; f < d.length; f++) i.push(new e(d[f], AR.i.getBridgeObject(d[f]).explain(), this));
                try {
                    this.node.refresh()
                } catch (a) {
                }
                h = d
            }
        }, h = function (a, b, c, d) {
            this.nodeType = "StandardPropertyNode";
            var e = {label: b + ": " + c, id: a + "_" + b, expanded: !1};
            this.value = c, this.node = new YAHOO.widget.TextNode(e, d.node), this.update = function (a) {
                var c = a.properties[b];
                if (c != this.value) {
                    this.node.setNodesProperty("label", b + ": " + c), this.value = c;
                    try {
                        this.node.parent.refresh()
                    } catch (a) {
                    }
                }
            }
        }, i = function (a, b, c, d) {
            this.nodeType = "TriggerNode";
            var e = function (a, b) {
                return "javascript:AR.ADE.instance.trigger('" + a + "','" + b.trigger + "'" + (b.parameters ? ", '" + JSON.stringify(b.parameters) + "'" : "") + ");"
            }, f = {label: b, id: a + "_" + b, expanded: !1};
            c.active && (f.href = e(a, c)), this.node = new YAHOO.widget.TextNode(f, d.node), this.update = function (c) {
                var d = c.properties[b];
                this.node.setNodesProperty("href", d.active ? e(a, d) : null);
                try {
                    this.node.parent.refresh()
                } catch (a) {
                }
            }
        }, j = function (a, b, c, d) {
            this.nodeType = "BridgeCallNode";
            var e = function (a, b) {
                return "javascript:" + b.interfaceObject + "." + b.functionName + "({objectId : '" + a + "'});"
            }, f = {label: b, id: a + "_" + b, expanded: !1};
            null != c.active && 0 == c.active || (f.href = e(a, c)), this.node = new YAHOO.widget.TextNode(f, d.node), this.update = function (c) {
                var d = c.properties[b];
                this.node.setNodesProperty("href", d.active ? e(a, d) : null);
                try {
                    this.node.parent.refresh()
                } catch (a) {
                }
            }
        }, k = function (a, b, c, d) {
            this.nodeType = "HtmlNode";
            var b = b, e = function (a) {
                return "javascript:var win=window.open();win.document.write('" + a.value.replace(/\'/g, "\\'") + "');"
            }, f = {label: b, id: a + "_" + b, expanded: !1};
            c && (f.label += ": " + c.value, c.value && (f.href = e(c))), this.node = new YAHOO.widget.TextNode(f, d.node), this.update = function (a) {
                var c = a.properties[b];
                this.node.setNodesProperty("label", b + (c && c.value ? ": " + c.value : "")), this.node.setNodesProperty("href", c && c.value ? e(c) : null);
                try {
                    this.node.parent.refresh()
                } catch (a) {
                }
            }
        }, l = function (a, b, c, d) {
            this.nodeType = "UriNode";
            var b = b, e = function (a) {
                return "javascript:var win=window.open('" + a.value + "');"
            }, f = {label: b, id: a + "_" + b, expanded: !1};
            c && (f.label += ": " + c.value, f.href = e(c)), this.node = new YAHOO.widget.TextNode(f, d.node), this.update = function (a) {
                var c = a.properties[b];
                this.node.setNodesProperty("label", b + (c ? ": " + c.value : "")), this.node.setNodesProperty("href", c && c.value ? e(c) : null);
                try {
                    this.node.parent.refresh()
                } catch (a) {
                }
            }
        }, m = function (a, b, c, d) {
            this.nodeType = "DrawablesClickTriggerNode";
            var e = function (a) {
                return "javascript:AR.ADE.instance.triggerClickOnDrawable('" + a + "');"
            }, f = {label: b, id: a + "_" + b, expanded: !1};
            c.active && (f.href = e(a)), this.node = new YAHOO.widget.TextNode(f, d.node), this.update = function (c) {
                var d = c.properties[b];
                this.node.setNodesProperty("href", d.active ? e(a) : null);
                try {
                    this.node.parent.refresh()
                } catch (a) {
                }
            }
        };
        AR.ADE.Tree = void 0
    }, AR.i = {
        callSync: function (a) {
            return AR.i.__executeFunctionByName(a.is, window, a)
        }, callAsync: function (a) {
            AR.i.__executeFunctionByName(a.is, window, a)
        }, __executeFunctionByName: function (a, b) {
            for (var c = Array.prototype.slice.call(arguments).splice(2), d = a.split("."), e = d.pop(), f = 0; f < d.length; f++) b = b[d[f]];
            return b[e].apply(b, c)
        }, __DEFAULT_RETURN_VALUE__: null, bridgeObjects: {}, getBridgeObject: function (a) {
            return AR.i.bridgeObjects[a]
        }, registerBridgeObject: function (a) {
            AR.i.bridgeObjects[a._id] = a
        }
    }, AR.i.arObjectInterface = {
        setEnabled: function (a) {
            AR.i.getBridgeObject(a.objectId)._enabled = a.enabled, AR.ADE.instance.alertModification(a.objectId)
        }, setRenderingOrder: function (a) {
            AR.i.getBridgeObject(a.objectId)._renderingOrder = a.renderingOrder, AR.ADE.instance.alertModification(a.objectId)
        }, setOnClickTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onClickTriggerActive = a.onClickTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnDragBeganTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onDragBeganTriggerActive = a.onDragBeganTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnDragChangedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onDragChangedTriggerActive = a.onDragChangedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnDragEndedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onDragEndedTriggerActive = a.onDragEndedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnPanBeganTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onPanBeganTriggerActive = a.onPanBeganTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnPanChangedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onPanChangedTriggerActive = a.onPanChangedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnPanEndedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onPanEndedTriggerActive = a.onPanEndedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnRotationBeganTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onRotationBeganTriggerActive = a.onRotationBeganTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnRotationChangedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onRotationChangedTriggerActive = a.onRotationChangedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnRotationEndedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onRotationEndedTriggerActive = a.onRotationEndedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnScaleBeganTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onScaleBeganTriggerActive = a.onScaleBeganTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnScaleChangedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onScaleChangedTriggerActive = a.onScaleChangedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnScaleEndedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onScaleEndedTriggerActive = a.onScaleEndedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setCamDrawables: function (a) {
            AR.i.getBridgeObject(a.objectId)._camDrawableIds = a.camDrawableIds, AR.i.getBridgeObject(a.objectId)._snapPositionRight = a.snapPositionRight, AR.i.getBridgeObject(a.objectId)._snapPositionTop = a.snapPositionTop, AR.i.getBridgeObject(a.objectId)._snapPositionLeft = a.snapPositionLeft, AR.i.getBridgeObject(a.objectId)._snapPositionBottom = a.snapPositionBottom, AR.ADE.instance.alertModification(a.objectId)
        }, setSnapToScreenBoundingBox: function (a) {
            AR.i.getBridgeObject(a.objectId)._snapContainerId = a.snapContainerId, AR.ADE.instance.alertModification(a.objectId)
        }, setSnapToScreenEnabled: function (a) {
            AR.i.getBridgeObject(a.objectId)._snapToScreenEnabled = a.snapToScreenEnabled, AR.ADE.instance.alertModification(a.objectId)
        }, setScreenSnapDelay: function (a) {
            AR.i.getBridgeObject(a.objectId)._screenSnapDelay = a.screenSnapDelay, AR.ADE.instance.alertModification(a.objectId)
        }, setOnSnappedToScreenTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onSnappedToScreenTriggerActive = a.onSnappedToScreenTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnDelayedSnapInterruptionTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onDelayedSnapInterruptionTriggerActive = a.onDelayedSnapInterruptionTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, isVisible: function (a) {
            return AR.i.getBridgeObject(a.objectId)._visible
        }, toggleVisibility: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId);
            b._visible = !b._visible, b._visible && null != c.onEnterFieldOfVision ? c.onEnterFieldOfVision() : b._visible || null == c.onExitFieldOfVision || c.onExitFieldOfVision(), AR.ADE.instance.alertModification(a.objectId)
        }
    }, AR.i.contextInterface = {
        _onLocationChangedTriggerActive: !1,
        _onScreenClickTriggerActive: !1,
        _onDragBeganTriggerActive: !1,
        _onDragChangedTriggerActive: !1,
        _onDragEndedTriggerActive: !1,
        _onPanBeganTriggerActive: !1,
        _onPanChangedTriggerActive: !1,
        _onPanEndedTriggerActive: !1,
        _onRotationBeganTriggerActive: !1,
        _onRotationChangedTriggerActive: !1,
        _onRotationEndedTriggerActive: !1,
        _onScaleBeganTriggerActive: !1,
        _onScaleChangedTriggerActive: !1,
        _onScaleEndedTriggerActive: !1,
        _on2FingerGestureStartedTriggerActive: !1,
        _on2FingerGestureEndedTriggerActive: !1,
        _onExitTriggerActive: !1,
        _servicesSensors: !0,
        _servicesCamera: !0,
        _cullingDistance: 5e4,
        _minScalingDistance: 10,
        _maxScalingDistance: 2e4,
        _scalingFactor: .1,
        _versionNumber: 6.1,
        destroyAll: function () {
            for (var a = AR.i.bridgeObjects.length; a--;) AR.i.bridgeObjects.splice(a), AR.ADE.instance.alertDeletion(a)
        },
        destroy: function (a) {
        },
        setOnLocationChangedTriggerActive: function (a) {
            AR.i.contextInterface._onLocationChangedTriggerActive = a.onLocationChangedTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOnScreenClickTriggerActive: function (a) {
            AR.i.contextInterface._onScreenClickTriggerActive = a.onScreenClickTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setDistanceBasedScalingParameters: function (a) {
            AR.i.contextInterface._scalingFactor = a.dbs, AR.i.contextInterface._minScalingDistance = a.dCutOffMin, AR.i.contextInterface._maxScalingDistance = a.dCutOffMax, AR.ADE.instance.alertModification("context")
        },
        setCullingDistance: function (a) {
            AR.i.contextInterface._cullingDistance = a.cullingDistance, AR.ADE.instance.alertModification("context")
        },
        startVideoPlayer: function (a) {
        },
        openInBrowser: function (a) {
            window.open(a.url)
        },
        clickScreen: function () {
            AR.context.onScreenClickDialogue = function () {
                null != AR.context.onScreenClick && AR.context.onScreenClick()
            }
        },
        setOnDragBeganTriggerActive: function (a) {
            AR.i.contextInterface._onDragBeganTriggerActive = a.onDragBeganTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOnDragChangedTriggerActive: function (a) {
            AR.i.contextInterface._onDragChangedTriggerActive = a.onDragChangedTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOnDragEndedTriggerActive: function (a) {
            AR.i.contextInterface._onDragEndedTriggerActive = a.onDragEndedTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOnPanBeganTriggerActive: function (a) {
            AR.i.contextInterface._onPanBeganTriggerActive = a.onPanBeganTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOnPanChangedTriggerActive: function (a) {
            AR.i.contextInterface._onPanChangedTriggerActive = a.onPanChangedTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOnPanEndedTriggerActive: function (a) {
            AR.i.contextInterface._onPanEndedTriggerActive = a.onPanEndedTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOnRotationBeganTriggerActive: function (a) {
            AR.i.contextInterface._onRotationBeganTriggerActive = a.onRotationBeganTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOnRotationChangedTriggerActive: function (a) {
            AR.i.contextInterface._onRotationChangedTriggerActive = a.onRotationChangedTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOnRotationEndedTriggerActive: function (a) {
            AR.i.contextInterface._onRotationEndedTriggerActive = a.onRotationEndedTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOnScaleBeganTriggerActive: function (a) {
            AR.i.contextInterface._onScaleBeganTriggerActive = a.onScaleBeganTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOnScaleChangedTriggerActive: function (a) {
            AR.i.contextInterface._onScaleChangedTriggerActive = a.onScaleChangedTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOnScaleEndedTriggerActive: function (a) {
            AR.i.contextInterface._onScaleEndedTriggerActive = a.onScaleEndedTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOn2FingerGestureStartedTriggerActive: function (a) {
            AR.i.contextInterface._on2FingerGestureStartedTriggerActive = a.on2FingerGestureStartedTriggerActive, AR.ADE.instance.alertModification("context")
        },
        setOn2FingerGestureEndedTriggerActive: function (a) {
            AR.i.contextInterface._on2FingerGestureEndedTriggerActive = a.on2FingerGestureEndedTriggerActive, AR.ADE.instance.alertModification("context")
        },
        getVersionNumber: function () {
            return AR.i.contextInterface._versionNumber
        },
        setGlobalSceneScale: function (a) {
            AR.i.contextInterface._globalSceneScale = a.globalSceneScale, AR.ADE.instance.alertModification("context")
        },
        explain: function () {
            return {
                type: "context", properties: {
                    "Click Screen": {
                        type: "bridgecall",
                        interfaceObject: "AR.i.contextInterface",
                        functionName: "clickScreen"
                    },
                    "scene.cullingDistance": this._cullingDistance,
                    "scene.scalingFactor": this._scalingFactor,
                    "scene.minScalingDistance": this._minScalingDistance,
                    "scene.maxScalingDistance": this._maxScalingDistance,
                    versionNumber: this._versionNumber,
                    onLocationChanged: {
                        type: "trigger",
                        active: this._onLocationChangedTriggerActive,
                        trigger: "onLocationChanged"
                    },
                    onScreenClick: {
                        type: "trigger",
                        active: this._onScreenClickTriggerActive,
                        trigger: "onScreenClick"
                    },
                    onDragBegan: {type: "trigger", active: this._onDragBeganTriggerActive, trigger: "onDragBegan"},
                    onDragChanged: {
                        type: "trigger",
                        active: this._onDragChangedTriggerActive,
                        trigger: "onDragChanged"
                    },
                    onDragEnded: {type: "trigger", active: this._onDragEndedTriggerActive, trigger: "onDragEnded"},
                    onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                    onPanChanged: {type: "trigger", active: this._onPanChangedTriggerActive, trigger: "onPanChanged"},
                    onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                    onRotationBegan: {
                        type: "trigger",
                        active: this._onRotationBeganTriggerActive,
                        trigger: "onRotationBegan"
                    },
                    onRotationChanged: {
                        type: "trigger",
                        active: this._onRotationChangedTriggerActive,
                        trigger: "onRotationChanged"
                    },
                    onRotationEnded: {
                        type: "trigger",
                        active: this._onRotationEndedTriggerActive,
                        trigger: "onRotationEnded"
                    },
                    onScaleBegan: {type: "trigger", active: this._onScaleBeganTriggerActive, trigger: "onScaleBegan"},
                    onScaleChanged: {
                        type: "trigger",
                        active: this._onScaleChangedTriggerActive,
                        trigger: "onScaleChanged"
                    },
                    onScaleEnded: {type: "trigger", active: this._onScaleEndedTriggerActive, trigger: "onScaleEnded"},
                    on2FingerGestureStarted: {
                        type: "trigger",
                        active: this._on2FingerGestureStartedTriggerActive,
                        trigger: "on2FingerGestureStarted"
                    },
                    on2FingerGestureEnded: {
                        type: "trigger",
                        active: this._on2FingerGestureEndedTriggerActive,
                        trigger: "on2FingerGestureEnded"
                    }
                }
            }
        }
    }, AR.i.platformInterface = {
        sendJSONObject: function (a) {
        }
    }, AR.i.hardwareInterface = {
        _servicesCamera: !0,
        _servicesSensors: !0,
        _flashlightEnabled: !1,
        _cameraPosition: AR.CONST.CAMERA_POSITION.BACK,
        _cameraZoomLevel: 0,
        _cameraFocusMode: AR.CONST.CAMERA_FOCUS_MODE.CONTINUOUS,
        _cameraManualFocusDistance: 0,
        _compassCorrectionAngle: 0,
        _onErrorTriggerActive: !1,
        _cameraFocusPointOfInterest: {x: 0, y: 0},
        _cameraExposurePointOfInterest: {x: 0, y: 0},
        setServiceEnabled: function (a) {
            switch (a.service) {
                case"camera":
                    AR.i.hardwareInterface._servicesCamera = a.enabled;
                    break;
                case"sensors":
                    AR.i.hardwareInterface._servicesSensors = a.enabled
            }
            AR.ADE.instance.alertModification("hardware")
        },
        setFlashlightEnabled: function (a) {
            AR.i.hardwareInterface._flashlightEnabled = a.enabled, AR.ADE.instance.alertModification("hardware")
        },
        camera_setCameraPosition: function (a) {
            AR.i.hardwareInterface._cameraPosition = a.position, AR.ADE.instance.alertModification("hardware")
        },
        camera_setCameraZoomLevel: function (a) {
            AR.i.hardwareInterface._cameraZoomLevel = a.level, AR.ADE.instance.alertModification("hardware")
        },
        camera_setCameraFocusMode: function (a) {
            AR.i.hardwareInterface._cameraFocusMode = a.mode, AR.ADE.instance.alertModification("hardware")
        },
        camera_setCameraManualFocusDistance: function (a) {
            AR.i.hardwareInterface._cameraManualFocusDistance = a.distance, AR.ADE.instance.alertModification("hardware")
        },
        camera_setFocusPointOfInterest: function (a) {
            AR.i.hardwareInterface._cameraFocusPointOfInterest.x = a.x, AR.i.hardwareInterface._cameraFocusPointOfInterest.y = a.y
        },
        camera_setExposurePointOfInterest: function (a) {
            AR.i.hardwareInterface._cameraExposurePointOfInterest.x = a.x, AR.i.hardwareInterface._cameraExposurePointOfInterest.y = a.y
        },
        compass_setCorrectionAngle: function (a) {
            AR.i.hardwareInterface._compassCorrectionAngle = a.correctionAngle, AR.ADE.instance.alertModification("hardware")
        },
        camera_getCameraPosition: function () {
            return AR.i.hardwareInterface._cameraPosition
        },
        camera_isCameraManualFocusAvailable: function () {
            return !1
        },
        camera_getCameraManualFocusDistance: function () {
            return AR.i.hardwareInterface._cameraManualFocusDistance
        },
        camera_setOnErrorTriggerActive: function (a) {
            AR.i.hardwareInterface._onErrorTriggerActive = a.onErrorTriggerActive, AR.ADE.instance.alertModification("hardware")
        },
        getCameraFeatures: function () {
            return {
                focusModes: [AR.CONST.CAMERA_POSITION.BACK, AR.CONST.CAMERA_POSITION.FRONT],
                positions: [AR.CONST.CAMERA_FOCUS_MODE.CONTINUOUS, AR.CONST.CAMERA_FOCUS_MODE.ONCE, AR.CONST.CAMERA_FOCUS_MODE.OFF],
                zoomRange: {max: 4}
            }
        },
        compass_getCorrectionAngle: function () {
            return AR.i.hardwareInterface._compassCorrectionAngle
        },
        isFlashlightAvailable: function () {
            return !0
        },
        arKitCore_isDeviceSupported: function () {
            return !1
        },
        explain: function () {
            return {
                type: "hardware",
                properties: {
                    "camera.enabled": this._servicesCamera,
                    "sensors.enabled": this._servicesSensors,
                    "camera.flashlightAvailable": !1,
                    "camera.flashlight": this._flashlightEnabled,
                    "camera.position": this._cameraPosition,
                    "camera.zoomLevel": this._cameraZoomLevel,
                    "camera.focusMode": this._cameraFocusMode,
                    "camera.focusDistance": this._cameraManualFocusDistance,
                    "sensors.compass.correctionAngle": this._compassCorrectionAngle,
                    "arKitCore.deviceSupported": !1
                }
            }
        }
    }, AR.i.soundInterface = {
        createSound: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _uri: a.uri,
                _state: AR.CONST.STATE.INITIALIZED,
                _onLoadedTriggerActive: a.onLoadedTriggerActive,
                _onFinishedPlayingTriggerActive: a.onFinishedPlayingTriggerActive,
                _onErrorTriggerActive: a.onErrorTriggerActive,
                _loaded: !1,
                _stopped: !1,
                length: 1e4 * Math.random(),
                explain: function () {
                    return {
                        type: "Sound",
                        properties: {
                            uri: {type: "uri", value: this._uri},
                            state: AR.CONST.STATE.toName(this._state),
                            onLoaded: {type: "trigger", active: this._onLoadedTriggerActive, trigger: "onLoaded"},
                            onFinishedPlaying: {
                                type: "trigger",
                                active: this._onFinishedPlayingTriggerActive,
                                trigger: "onFinishedPlaying"
                            },
                            onError: {type: "trigger", active: this._onErrorTriggerActive, trigger: "onError"},
                            "loaded (artificial property)": this._loaded,
                            Load: {type: "bridgecall", interfaceObject: "AR.i.soundInterface", functionName: "load"},
                            Play: {type: "bridgecall", interfaceObject: "AR.i.soundInterface", functionName: "play"},
                            Pause: {type: "bridgecall", interfaceObject: "AR.i.soundInterface", functionName: "pause"},
                            Resume: {
                                type: "bridgecall",
                                interfaceObject: "AR.i.soundInterface",
                                functionName: "resume"
                            },
                            Stop: {type: "bridgecall", interfaceObject: "AR.i.soundInterface", functionName: "stop"},
                            "Simulate Error": {
                                type: "bridgecall",
                                interfaceObject: "AR.i.soundInterface",
                                functionName: "simulateError"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }, getState: function (a) {
            return AR.i.getBridgeObject(a.objectId)._state
        }, setOnLoadedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onLoadedTriggerActive = a.onLoadedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnFinishedPlayingTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onFinishedPlayingTriggerActive = a.onFinishedPlayingTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnErrorTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onErrorTriggerActive = a.onErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, load: function (a) {
            window.setTimeout(function () {
                AR.i.soundInterface.simulateLoad({objectId: a.objectId})
            }, 5e3 * Math.random())
        }, play: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b._loaded ? (b._state = AR.CONST.STATE.PLAYING, window.setTimeout(function () {
                AR.i.getBridgeObject(a.objectId)._stopped || AR.i.soundInterface.simulatePlay({objectId: a.objectId})
            }, b.length * a.loopTimes)) : window.setTimeout(function () {
                AR.i.soundInterface.simulateStreaming({objectId: a.objectId})
            }, 5e3 * Math.random())
        }, simulateLoad: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId);
            b._loaded = !0, c.onLoaded && c.onLoaded(), b._state = AR.CONST.STATE.LOADED, AR.ADE.instance.alertModification(a.objectId)
        }, simulatePlay: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId);
            c.onFinishedPlaying && c.onFinishedPlaying(), b._state = AR.CONST.STATE.LOADED, b._stopped = !1, AR.ADE.instance.alertModification(a.objectId)
        }, simulateStreaming: function (a) {
            var b = AR.om.getExistingObjectForID(a.objectId);
            b.onLoaded && b.onLoaded(), window.setTimeout(function () {
                AR.i.getBridgeObject(a.objectId)._stopped || AR.om.getExistingObjectForID(a.objectId).onFinishedPlaying && AR.om.getExistingObjectForID(a.objectId).onFinishedPlaying()
            }, 1)
        }, stop: function (a) {
            AR.i.getBridgeObject(a.objectId)._stopped = !0
        }, pause: function (a) {
            AR.i.soundInterface.stop(a)
        }, resume: function (a) {
            AR.i.soundInterface.play(a)
        }, simulateError: function (a) {
            var b = AR.om.getExistingObjectForID(a.objectId);
            null != b.onError && b.onError()
        }
    }, AR.i.positionableInterface = {
        setOnEnterFieldOfVisionTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onEnterFieldOfVisionTriggerActive = a.onEnterFieldOfVisionTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnExitFieldOfVisionTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onExitFieldOfVisionTriggerActive = a.onExitFieldOfVisionTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, createPositionable: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _name: a.name,
                _enabled: a.enabled,
                _onEnterFieldOfVisionTriggerActive: a.onEnterFieldOfVisionTriggerActive,
                _onExitFieldOfVisionTriggerActive: a.onExitFieldOfVisionTriggerActive,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _camDrawableIds: a.camDrawableIds,
                _renderingOrder: a.renderingOrder,
                _snapToScreenEnabled: a.snapToScreenEnabled,
                _screenSnapDelay: a.screenSnapDelay,
                _snapToScreenEnabledOnExitFieldOfVision: a.snapToScreenEnabledOnExitFieldOfVision,
                _snapContainerId: a.snapContainerId,
                _snapPositionRight: a.snapPositionRight,
                _snapPositionTop: a.snapPositionTop,
                _snapPositionLeft: a.snapPositionLeft,
                _snapPositionBottom: a.snapPositionBottom,
                _onSnappedToScreenTriggerActive: a.onSnappedToScreenTriggerActive,
                _onDelayedSnapInterruptionTriggerActive: a.onDelayedSnapInterruptionTriggerActive,
                explain: function () {
                    return {
                        type: "Positionable", properties: {
                            locations: {type: "ids", value: this._locations},
                            name: this._name,
                            enabled: this._enabled,
                            renderingOrder: this._renderingOrder,
                            "drawables.cam": {type: "ids", value: this._camDrawableIds},
                            onEnterFieldOfVision: {
                                type: "trigger",
                                active: this._onEnterFieldOfVisionTriggerActive,
                                trigger: "onEnterFieldOfVision"
                            },
                            onExitFieldOfVision: {
                                type: "trigger",
                                active: this._onExitFieldOfVisionTriggerActive,
                                trigger: "onExitFieldOfVision"
                            },
                            onClick: {type: "trigger", active: this._onClickTriggerActive, trigger: "onClick"},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            },
                            onSnappedToScreen: {
                                type: "trigger",
                                active: this._onSnappedToScreenTriggerActive,
                                trigger: "onSnappedToScreen"
                            },
                            onDelayedSnapInterruption: {
                                type: "trigger",
                                active: this._onDelayedSnapInterruptionTriggerActive,
                                trigger: "onDelayedSnapInterruption"
                            },
                            snapToScreenEnabled: this._snapToScreenEnabled,
                            screenSnapDelay: this._screenSnapDelay,
                            snapToScreenEnabledOnExitFieldOfVision: this._snapToScreenEnabledOnExitFieldOfVision,
                            snapContainerId: this._snapContainerId,
                            snapPositionRight: this._snapPositionRight,
                            snapPositionTop: this._snapPositionTop,
                            snapPositionLeft: this._snapPositionLeft,
                            snapPositionBottom: this._snapPositionBottom,
                            "visible (artificial property)": this._visible,
                            "Toggle Visibility": {
                                type: "bridgecall",
                                interfaceObject: "AR.i.arObjectInterface",
                                functionName: "toggleVisibility"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }
    }, AR.i.actionAreaInterface = {
        setEnabled: function (a) {
            AR.i.getBridgeObject(a.objectId)._enabled = a.enabled, AR.ADE.instance.alertModification(a.objectId)
        }, setOnEnterTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onEnterTriggerActive = a.onEnterTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnExitTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onExitTriggerActive = a.onExitTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, isInArea: function (a) {
            return AR.i.actionRangeInterface.isInArea(a.objectId, a.geoLocationId)
        }
    }, AR.i.actionRangeInterface = {
        setRadius: function (a) {
            AR.i.getBridgeObject(a.objectId)._radius = a.radius, AR.ADE.instance.alertModification(a.objectId)
        }, getRadius: function (a) {
            return AR.i.getBridgeObject(a.objectId)._radius
        }, createActionRange: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _enabled: a.enabled,
                _location: a.location,
                _radius: a.radius,
                _onEnterTriggerActive: a.onEnterTriggerActive,
                _onExitTriggerActive: a.onExitTriggerActive,
                explain: function () {
                    return {
                        type: "ActionRange",
                        properties: {
                            enabled: this._enabled,
                            location: {type: "id", value: this._location},
                            radius: this._radius,
                            onEnter: {type: "trigger", active: this._onEnterTriggerActive, trigger: "onEnter"},
                            onExit: {type: "trigger", active: this._onExitTriggerActive, trigger: "onExit"}
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }, setLocation: function (a) {
            AR.i.getBridgeObject(a.objectId)._location = a.location, AR.ADE.instance.alertModification(a.objectId)
        }, isInArea: function (a, b) {
            return AR.om.getExistingObjectForID(a).location.distanceTo(AR.om.getExistingObjectForID(b)) <= AR.i.getBridgeObject(a)._radius
        }
    }, AR.i.geoLocationInterface = {
        setLatitude: function (a) {
            AR.i.getBridgeObject(a.objectId)._latitude = a.latitude, AR.ADE.instance.alertModification(a.objectId)
        }, getLatitude: function (a) {
            return AR.i.getBridgeObject(a.objectId)._latitude
        }, setLongitude: function (a) {
            AR.i.getBridgeObject(a.objectId)._longitude = a.longitude, AR.ADE.instance.alertModification(a.objectId)
        }, getLongitude: function (a) {
            return AR.i.getBridgeObject(a.objectId)._longitude
        }, setAltitude: function (a) {
            AR.i.getBridgeObject(a.objectId)._altitude = a.altitude, AR.ADE.instance.alertModification(a.objectId)
        }, getAltitude: function (a) {
            return AR.i.getBridgeObject(a.objectId)._altitude
        }, createGeoLocation: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _latitude: a.latitude,
                _longitude: a.longitude,
                _altitude: a.altitude,
                getCurrentLocation: function () {
                    return {latitude: this._latitude, longitude: this._longitude, altitude: this._altitude}
                },
                explain: function () {
                    return {
                        type: "GeoLocation",
                        properties: {
                            latitude: this._latitude,
                            longitude: this._longitude,
                            altitude: this._altitude == AR.CONST.UNKNOWN_ALTITUDE ? "AR.CONST.UNKNOWN_ALTITUDE" : this._altitude
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }
    }, AR.i.geoObjectInterface = {
        setLocations: function (a) {
            AR.i.getBridgeObject(a.objectId)._locations = a.locationIds, AR.ADE.instance.alertModification(a.objectId)
        }, setRadarDrawables: function (a) {
            AR.i.getBridgeObject(a.objectId)._radarDrawables = a.radarDrawableIds, AR.ADE.instance.alertModification(a.objectId)
        }, setIndicatorDrawables: function (a) {
            AR.i.getBridgeObject(a.objectId)._indicatorDrawables = a.indicatorDrawableIds, AR.ADE.instance.alertModification(a.objectId)
        }, setOnEnterFieldOfVisionTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onEnterFieldOfVisionTriggerActive = a.onEnterFieldOfVisionTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnExitFieldOfVisionTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onExitFieldOfVisionTriggerActive = a.onExitFieldOfVisionTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, createGeoObject: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _locations: a.locationIds,
                _enabled: a.enabled,
                _camDrawables: a.camDrawableIds,
                _radarDrawables: a.radarDrawableIds,
                _indicatorDrawables: a.indicatorDrawableIds,
                _renderingOrder: a.renderingOrder,
                _visible: !1,
                _onEnterFieldOfVisionTriggerActive: a.onEnterFieldOfVisionTriggerActive,
                _onExitFieldOfVisionTriggerActive: a.onExitFieldOfVisionTriggerActive,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                explain: function () {
                    return {
                        type: "GeoObject", properties: {
                            locations: {type: "ids", value: this._locations},
                            enabled: this._enabled,
                            renderingOrder: this._renderingOrder,
                            "drawables.cam": {type: "ids", value: this._camDrawables},
                            "drawables.radar": {type: "ids", value: this._radarDrawables},
                            "drawables.indicator": {type: "ids", value: this._indicatorDrawables},
                            onEnterFieldOfVision: {
                                type: "trigger",
                                active: this._onEnterFieldOfVisionTriggerActive,
                                trigger: "onEnterFieldOfVision"
                            },
                            onExitFieldOfVision: {
                                type: "trigger",
                                active: this._onExitFieldOfVisionTriggerActive,
                                trigger: "onExitFieldOfVision"
                            },
                            onClick: {type: "trigger", active: this._onClickTriggerActive, trigger: "onClick"},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            },
                            "visible (artificial property)": this._visible,
                            "Toggle Visibility": {
                                type: "bridgecall",
                                interfaceObject: "AR.i.arObjectInterface",
                                functionName: "toggleVisibility"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }
    }, AR.i.locationInterface = {
        distanceTo: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.i.getBridgeObject(a.locationId),
                d = b.getCurrentLocation(), e = c.getCurrentLocation(), f = d.latitude, g = e.latitude, h = d.longitude,
                i = e.longitude;
            return AR.i.locationInterface.calculateDistance(f, g, h, i)
        }, distanceToUser: function (a) {
            if (AR.ADE.instance.simulatedLocation) {
                var b = AR.i.getBridgeObject(a.objectId), c = b.getCurrentLocation(), d = c.latitude, e = c.longitude;
                return AR.i.locationInterface.calculateDistance(d, AR.ADE.instance.simulatedLocation.latitude, e, AR.ADE.instance.simulatedLocation.longitude)
            }
            return -1
        }, calculateDistance: function (a, b, c, d) {
            var e = (b - a) * Math.PI / 180, f = (d - c) * Math.PI / 180,
                g = Math.sin(e / 2) * Math.sin(e / 2) + Math.cos(a * Math.PI / 180) * Math.cos(b * Math.PI / 180) * Math.sin(f / 2) * Math.sin(f / 2);
            return 2 * Math.atan2(Math.sqrt(g), Math.sqrt(1 - g)) * 6371e3
        }
    }, AR.i.radarInterface = {
        _enabled: !1,
        _background: null,
        _positionX: 0,
        _positionY: 0,
        _width: 0,
        _centerX: .5,
        _centerY: .5,
        _radius: .5,
        _maxDistance: -1,
        _onClickTriggerActive: !1,
        _northIndicatorImage: null,
        _northIndicatorRadius: .5,
        _left: 0,
        _right: 0,
        _top: 0,
        _bottom: 0,
        setEnabled: function (a) {
            AR.i.radarInterface._enabled = a.enabled, AR.ADE.instance.alertModification("radar")
        },
        setBackground: function (a) {
            AR.i.radarInterface._background = a.backgroundId, AR.ADE.instance.alertModification("radar")
        },
        setCenterX: function (a) {
            AR.i.radarInterface._centerX = a.centerX, AR.ADE.instance.alertModification("radar")
        },
        setCenterY: function (a) {
            AR.i.radarInterface._centerY = a.centerY, AR.ADE.instance.alertModification("radar")
        },
        setRadius: function (a) {
            AR.i.radarInterface._radius = a.radius, AR.ADE.instance.alertModification("radar")
        },
        setMaxDistance: function (a) {
            AR.i.radarInterface._maxDistance = a.maxDistance, AR.ADE.instance.alertModification("radar")
        },
        setNorthIndicatorImage: function (a) {
            AR.i.radarInterface._northIndicatorImage = a.northIndicatorImageId, AR.ADE.instance.alertModification("radar")
        },
        setNorthIndicatorRadius: function (a) {
            AR.i.radarInterface._northIndicatorRadius = a.northIndicatorRadius, AR.ADE.instance.alertModification("radar")
        },
        setOnClickTriggerActive: function (a) {
            AR.i.radarInterface._onClickTriggerActive = a.onClickTriggerActive, AR.ADE.instance.alertModification("radar")
        },
        explain: function () {
            return {
                type: "radar",
                properties: {
                    enabled: AR.i.radarInterface._enabled,
                    background: {type: "id", value: AR.i.radarInterface._background},
                    centerX: AR.i.radarInterface._centerX,
                    centerY: AR.i.radarInterface._centerY,
                    radius: AR.i.radarInterface._radius,
                    maxDistance: AR.i.radarInterface._maxDistance < 0 ? void 0 : AR.i.radarInterface._maxDistance,
                    "northIndicator.image": {type: "id", value: AR.i.radarInterface._northIndicatorImage},
                    "northIndicator.radius": AR.i.radarInterface._northIndicatorRadius,
                    onClick: {type: "trigger", active: AR.i.radarInterface._onClickTriggerActive, trigger: "onClick"},
                    "bounding-box.left": AR.i.radarInterface._left,
                    "bounding-box.right": AR.i.radarInterface._right,
                    "bounding-box.top": AR.i.radarInterface._top,
                    "bounding-box.bottom": AR.i.radarInterface._bottom
                }
            }
        }
    }, AR.i.a = {
        radarInterface: {
            setBoundingBox: function (a) {
                AR.i.radarInterface._left = a.left, AR.i.radarInterface._right = a.right, AR.i.radarInterface._top = a.top, AR.i.radarInterface._bottom = a.bottom, AR.ADE.instance.alertModification("radar")
            }
        }
    }, AR.i.relativeLocationInterface = {
        setLocation: function (a) {
            AR.i.getBridgeObject(a.objectId)._location = a.locationId, AR.ADE.instance.alertModification(a.objectId)
        }, setLocationRelativeToUser: function (a) {
            AR.i.getBridgeObject(a.objectId)._location = null, AR.ADE.instance.alertModification(a.objectId)
        }, setNorthing: function (a) {
            AR.i.getBridgeObject(a.objectId)._northing = a.northing, AR.ADE.instance.alertModification(a.objectId)
        }, getNorthing: function (a) {
            return AR.i.getBridgeObject(a.objectId)._northing
        }, setEasting: function (a) {
            AR.i.getBridgeObject(a.objectId)._easting = a.easting, AR.ADE.instance.alertModification(a.objectId)
        }, getEasting: function (a) {
            return AR.i.getBridgeObject(a.objectId)._easting
        }, setAltitudeDelta: function (a) {
            AR.i.getBridgeObject(a.objectId)._altitudeDelta = a.altitudeDelta, AR.ADE.instance.alertModification(a.objectId)
        }, getAltitudeDelta: function (a) {
            return AR.i.getBridgeObject(a.objectId)._altitudeDelta
        }, createRelativeLocation: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _location: a.locationId,
                _northing: a.northing,
                _easting: a.easting,
                _altitudeDelta: a.altitudeDelta,
                getCurrentLocation: function () {
                    var b = AR.i.getBridgeObject(a.locationId), c = b.getCurrentLocation(),
                        d = AR.i.relativeLocationInterface.calculateNewLocation(c.latitude, c.longitude, c.altitude, a.northing, a.easting, a.altitudeDelta);
                    return {latitude: d.latitude, longitude: d.longitude, altitude: d.altitude}
                },
                explain: function () {
                    return {
                        type: "RelativeLocation",
                        properties: {
                            location: {type: "id", value: this._location},
                            northing: this._northing,
                            easting: this._easting,
                            altitudeDelta: this._altitudeDelta
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }, createRelativeLocationToUser: function (a) {
            AR.i.relativeLocationInterface.calculateNewLocation(AR.ADE.instance.simulatedLocation.latitude, AR.ADE.instance.simulatedLocation.longitude, AR.ADE.instance.simulatedLocation.altitude, a.northing, a.easting, a.altitudeDelta), AR.i.registerBridgeObject({
                _id: a.objectId,
                _northing: a.northing,
                _easting: a.easting,
                _altitudeDelta: a.altitudeDelta,
                explain: function () {
                    return {
                        type: "RelativeLocation",
                        properties: {
                            location: {type: "id", value: this._location},
                            northing: this._northing,
                            easting: this._easting,
                            altitudeDelta: this._altitudeDelta
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }, calculateNewLocation: function (a, b, c, d, e, f) {
            var g = a * Math.PI / 180, h = b * Math.PI / 180, i = Math.abs(d / 6371e3), j = d > 0 ? 0 : Math.PI;
            return g = Math.asin(Math.sin(g) * Math.cos(i) + Math.cos(g) * Math.sin(i) * Math.cos(j)), i = Math.abs(e / 6371e3), j = e > 0 ? Math.PI / 2 : 3 * Math.PI / 2, lat2 = Math.asin(Math.sin(g) * Math.cos(i) + Math.cos(g) * Math.sin(i) * Math.cos(j)), h += Math.atan2(Math.sin(j) * Math.sin(i) * Math.cos(g), Math.cos(i) - Math.sin(g) * Math.sin(lat2)), g = lat2, {
                latitude: 180 * g / Math.PI,
                longitude: 180 * h / Math.PI,
                altitude: c == AR.CONST.UNKNOWN_ALTITUDE ? AR.CONST.UNKNOWN_ALTITUDE : c + f
            }
        }
    }, AR.i.animationGroupInterface = {
        createAnimationGroup: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _type: a.type,
                _animations: a.animationIds,
                _onStartTriggerActive: a.onStartTriggerActive,
                _onFinishTriggerActive: a.onFinishTriggerActive,
                running: !1,
                explain: function () {
                    return {
                        type: "AnimationGroup",
                        properties: {
                            type: this._type,
                            animations: {type: "ids", value: this._animations},
                            onStart: {type: "trigger", active: this._onStartTriggerActive, trigger: "onStart"},
                            onFinish: {type: "trigger", active: this._onFinishTriggerActive, trigger: "onFinish"}
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }, start: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b.running = !0;
            var c = AR.__fromJSONString__(b._animations);
            if ("parallel" == b._type) for (var d = 0; d < c.length; d++) {
                var e = c[d];
                AR.i.callAsync({objectId: e, is: "AR.i.animationInterface.start", loopTimes: 1})
            } else if ("sequential" == b._type) for (var f = 0, g = function (a, b) {
                window.setTimeout(function () {
                    AR.i.callAsync({objectId: a, is: "AR.i.animationInterface.start", loopTimes: 1})
                }, b)
            }, d = 0; d < c.length; d++) {
                var e = c[d];
                g(e, f), f += AR.i.animationInterface.getDuration(e)
            }
            a.loopTimes - 1 != 0 ? window.setTimeout(function () {
                b.running && AR.i.animationGroupInterface.start({objectId: a.objectId, loopTimes: a.loopTimes - 1})
            }, AR.i.animationGroupInterface.getDuration(a.objectId)) : window.setTimeout(function () {
                var c = AR.om.getExistingObjectForID(a.objectId);
                b.running && null != c.onFinish && c.onFinish()
            }, AR.i.animationGroupInterface.getDuration(a.objectId))
        }, getDuration: function (a) {
            var b = AR.i.getBridgeObject(a), c = AR.__fromJSONString__(b._animations);
            if ("parallel" == b._type) {
                for (var d = 0, e = 0; e < c.length; e++) {
                    var f = c[e], g = AR.i.animationInterface.getDuration(f);
                    g > d && (d = g)
                }
                return d
            }
            if ("sequential" == b._type) {
                for (var d = 0, e = 0; e < c.length; e++) {
                    var f = c[e];
                    d += AR.i.animationInterface.getDuration(f)
                }
                return d
            }
        }, stopAllChildren: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b.running = !1;
            for (var c = AR.__fromJSONString__(b._animations), d = 0; d < c.length; d++) {
                var e = c[d];
                AR.i.callAsync({objectId: e, is: "AR.i.animationInterface.stop"})
            }
        }, isRunning: function (a) {
            return AR.i.getBridgeObject(a.objectId).running
        }
    }, AR.i.animationInterface = {
        setOnStartTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onStartTriggerActive = a.onStartTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnFinishTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onFinishTriggerActive = a.onFinishTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, start: function (a) {
            var b = AR.om.getExistingObjectForID(a.objectId);
            null != b.onStart && b.onStart(), b instanceof AR.PropertyAnimation ? AR.i.propertyAnimationInterface.start(a) : b instanceof AR.AnimationGroup ? AR.i.animationGroupInterface.start(a) : b instanceof AR.ModelAnimation && AR.i.modelAnimationInterface.start(a)
        }, isRunning: function (a) {
            var b = AR.om.getExistingObjectForID(a.objectId);
            return b instanceof AR.PropertyAnimation ? AR.i.propertyAnimationInterface.isRunning(a) : b instanceof AR.AnimationGroup ? AR.i.animationGroupInterface.isRunning(a) : b instanceof AR.ModelAnimation ? AR.i.modelAnimationInterface.isRunning(a) : void 0
        }, stop: function (a) {
            AR.i.getBridgeObject(a.objectId)._helper_isRunning = !1;
            var b = AR.om.getExistingObjectForID(a.objectId);
            b instanceof AR.AnimationGroup ? AR.i.animationGroupInterface.stopAllChildren(a) : b instanceof AR.PropertyAnimation ? AR.i.propertyAnimationInterface.stop(a) : b instanceof AR.ModelAnimation && AR.i.modelAnimationInterface.stop(a), AR.ADE.instance.alertModification(a.objectId)
        }, pause: function (a) {
            AR.i.animationInterface.stop(a)
        }, resume: function (a) {
            AR.i.animationInterface.start(a)
        }, getDuration: function (a) {
            var b = AR.om.getExistingObjectForID(a);
            return b instanceof AR.PropertyAnimation ? AR.i.propertyAnimationInterface.getDuration(a) : b instanceof AR.AnimationGroup ? AR.i.animationGroupInterface.getDuration(a) : b instanceof AR.ModelAnimation ? AR.i.modelAnimationInterface.getDuration(a) : void 0
        }
    }, AR.i.modelAnimationInterface = {
        createModelAnimation: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _model: a.modelId,
                _animationId: a.animationId,
                _duration: a.duration,
                _onStartTriggerActive: a.onStartTriggerActive,
                _onFinishTriggerActive: a.onFinishTriggerActive,
                runningId: null,
                explain: function () {
                    return {
                        type: "ModelAnimation",
                        properties: {
                            model: {type: "id", value: this._model},
                            animationId: this._animationId,
                            duration: this._duration < 0 ? void 0 : this._duration,
                            onStart: {type: "trigger", active: this._onStartTriggerActive, trigger: "onStart"},
                            onFinish: {type: "trigger", active: this._onFinishTriggerActive, trigger: "onFinish"}
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }, stop: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            window.clearInterval(b.runningId), b.runningId = null
        }, start: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b.runningId = window.setTimeout(function () {
                b.runningId = null
            }, AR.i.modelAnimationInterface.getDuration(a.objectId))
        }, getDuration: function () {
            return 2e3
        }, isRunning: function (a) {
            return null != AR.i.getBridgeObject(a.objectId).runningId
        }
    }, AR.i.propertyAnimationInterface = {
        createPropertyAnimation: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _target: a.targetId,
                _property: a.property,
                _start: a.start,
                _end: a.end,
                _duration: a.duration,
                _easingCurve: a.easingCurve,
                _onStartTriggerActive: a.onStartTriggerActive,
                _onFinishTriggerActive: a.onFinishTriggerActive,
                runningId: null,
                explain: function () {
                    return {
                        type: "PropertyAnimation",
                        properties: {
                            target: {type: "id", value: this._target},
                            property: this._property,
                            start: null == this._start ? null : AR.__fromJSONString__(this._start)[0],
                            end: AR.__fromJSONString__(this._end)[0],
                            duration: this._duration,
                            easingCurve: this._easingCurve,
                            onStart: {type: "trigger", active: this._onStartTriggerActive, trigger: "onStart"},
                            onFinish: {type: "trigger", active: this._onFinishTriggerActive, trigger: "onFinish"}
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }, stop: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b.runningId && (window.clearInterval(b.runningId), b.runningId = null)
        }, isRunning: function (a) {
            return null != AR.i.getBridgeObject(a.objectId).runningId
        }, start: function (a) {
            for (var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId), d = AR.om.getExistingObjectForID(b._target), e = b._property.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]];
            b._start && (d[e[e.length - 1]] = AR.__fromJSONString__(b._start)[0]);
            var g = d[e[e.length - 1]], h = AR.__fromJSONString__(b._end)[0], i = 100 * (h - g) / b._duration,
                j = function () {
                    if (b.runningId) {
                        d[e[e.length - 1]] < b._end && (d[e[e.length - 1]] += i)
                    }
                }, k = function () {
                    b.runningId && (window.clearInterval(b.runningId), b.runningId = null, d[e[e.length - 1]] = h, a.loopTimes - 1 != 0 ? AR.i.propertyAnimationInterface.start({
                        objectId: a.objectId,
                        loopTimes: a.loopTimes - 1
                    }) : null != c.onFinish && c.onFinish())
                };
            b.runningId = window.setInterval(j, 100), window.setTimeout(k, b._duration)
        }, getDuration: function (a) {
            return AR.i.getBridgeObject(a)._duration
        }
    }, AR.i.animatedImageDrawableInterface = {
        setOnFinishTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onFinishTriggerActive = a.onFinishTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setKeyFrame: function (a) {
            AR.i.getBridgeObject(a.objectId)._keyFrame = a.keyFrame, AR.ADE.instance.alertModification(a.objectId)
        }, animate: function (a) {
            AR.i.getBridgeObject(a.objectId)._animKeyFrames = a.keyFrames, AR.i.getBridgeObject(a.objectId)._animDuration = a.duration, AR.i.getBridgeObject(a.objectId)._animLoopTimes = a.loopTimes, AR.ADE.instance.alertModification(a.objectId)
        }, createAnimatedImageDrawable: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _onFinishTriggerActive: a.onFinishTriggerActive,
                _imageResourceId: a.imageResourceId,
                _height: a.height,
                _keyFrameWidth: a.keyFrameWidth,
                _keyFrameHeight: a.keyFrameHeight,
                _keyFrame: a.keyFrame,
                _animKeyFrames: "",
                _animDuration: 0,
                _animLoopTimes: 0,
                _enabled: a.enabled,
                _mirrored: a.mirrored,
                _rotatesToCamera: a.rotatesToCamera,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _globalRotationX: a.globalRotationX,
                _globalRotationY: a.globalRotationY,
                _globalRotationZ: a.globalRotationZ,
                _globalTranslateX: a.globalTranslateX,
                _globalTranslateY: a.globalTranslateY,
                _globalTranslateZ: a.globalTranslateZ,
                _rotationX: a.rotationX,
                _rotationY: a.rotationY,
                _rotationZ: a.rotationZ,
                _translateX: a.translateX,
                _translateY: a.translateY,
                _translateZ: a.translateZ,
                _scaleX: a.scaleX,
                _scaleY: a.scaleY,
                _scaleZ: a.scaleZ,
                _zOrder: a.zOrder,
                _horizontalAnchor: a.horizontalAnchor,
                _verticalAnchor: a.verticalAnchor,
                _opacity: a.opacity,
                explain: function () {
                    return {
                        type: "AnimatedImageDrawable", properties: {
                            imageResource: {type: "id", value: this._imageResourceId},
                            keyFrame: this._keyFrame,
                            height: this._height,
                            keyFrameWidth: this._keyFrameWidth,
                            keyFrameHeight: this._keyFrameHeight,
                            "animation.keyFrames": this._animKeyFrames,
                            "animation.duration": this._animDuration,
                            "animation.loopTimes": this._animLoopTimes,
                            onFinish: {type: "trigger", active: this._onFinishTriggerActive, trigger: "onFinish"},
                            enabled: this._enabled,
                            mirrored: this._mirrored,
                            rotatesToCamera: this._rotatesToCamera,
                            "rotate.global.x": this._globalRotationX,
                            "rotate.global.y": this._globalRotationY,
                            "rotate.global.z": this._globalRotationZ,
                            "translate.global.x": this._globalTranslateX,
                            "translate.global.y": this._globalTranslateY,
                            "translate.global.z": this._globalTranslateZ,
                            "rotate.x": this._rotationX,
                            "rotate.y": this._rotationY,
                            "rotate.z": this._rotationZ,
                            "translate.x": this._translateX,
                            "translate.y": this._translateY,
                            "translate.z": this._translateZ,
                            "scale.x": this._scaleX,
                            "scale.y": this._scaleY,
                            "scale.z": this._scaleZ,
                            opacity: this._opacity,
                            zOrder: this._zOrder,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.toName(this._horizontalAnchor),
                            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.toName(this._verticalAnchor),
                            offsetX: this._translateX,
                            offsetY: this._translateY,
                            scale: this._scaleX,
                            rotation: this._globalRotationZ,
                            "rotate.roll": this._globalRotationZ,
                            "rotate.tilt": this._globalRotationX,
                            "rotate.heading": this._globalRotationX,
                            onClick: {type: "custom_Drawables_Click_Trigger", active: this._onClickTriggerActive},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }
    }, AR.i.drawableInterface = {
        setEnabled: function (a) {
            AR.i.getBridgeObject(a.objectId)._enabled = a.enabled, AR.ADE.instance.alertModification(a.objectId)
        }, setMirrored: function (a) {
            AR.i.getBridgeObject(a.objectId)._mirrored = a.mirrored, AR.ADE.instance.alertModification(a.objectId)
        }, setRotatesToCamera: function (a) {
            AR.i.getBridgeObject(a.objectId)._rotatesToCamera = a.rotatesToCamera, AR.ADE.instance.alertModification(a.objectId)
        }, setRotation: function (a) {
            AR.i.getBridgeObject(a.objectId)._rotation = a.rotation, AR.ADE.instance.alertModification(a.objectId)
        }, setTranslate: function (a) {
            AR.i.getBridgeObject(a.objectId)._translate = a.translate, AR.ADE.instance.alertModification(a.objectId)
        }, setScale: function (a) {
            AR.i.getBridgeObject(a.objectId)._scale = a.scale, AR.ADE.instance.alertModification(a.objectId)
        }, setOnClickTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onClickTriggerActive = a.onClickTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnDragBeganTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onDragBeganTriggerActive = a.onDragBeganTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnDragChangedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onDragChangedTriggerActive = a.onDragChangedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnDragEndedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onDragEndedTriggerActive = a.onDragEndedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnPanBeganTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onPanBeganTriggerActive = a.onPanBeganTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnPanChangedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onPanChangedTriggerActive = a.onPanChangedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnPanEndedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onPanEndedTriggerActive = a.onPanEndedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnRotationBeganTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onRotationBeganTriggerActive = a.onRotationBeganTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnRotationChangedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onRotationChangedTriggerActive = a.onRotationChangedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnRotationEndedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onRotationEndedTriggerActive = a.onRotationEndedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnScaleBeganTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onScaleBeganTriggerActive = a.onScaleBeganTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnScaleChangedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onScaleChangedTriggerActive = a.onScaleChangedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnScaleEndedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onScaleEndedTriggerActive = a.onScaleEndedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setRotationX: function (a) {
            AR.i.getBridgeObject(a.objectId)._rotationX = a.rotationX, AR.ADE.instance.alertModification(a.objectId)
        }, setRotationY: function (a) {
            AR.i.getBridgeObject(a.objectId)._rotationY = a.rotationY, AR.ADE.instance.alertModification(a.objectId)
        }, setRotationZ: function (a) {
            AR.i.getBridgeObject(a.objectId)._rotationZ = a.rotationZ, AR.ADE.instance.alertModification(a.objectId)
        }, setGlobalRotationX: function (a) {
            AR.i.getBridgeObject(a.objectId)._globalRotationX = a.globalRotationX, AR.ADE.instance.alertModification(a.objectId)
        }, setGlobalRotationY: function (a) {
            AR.i.getBridgeObject(a.objectId)._globalRotationY = a.globalRotationY, AR.ADE.instance.alertModification(a.objectId)
        }, setGlobalRotationZ: function (a) {
            AR.i.getBridgeObject(a.objectId)._globalRotationZ = a.globalRotationZ, AR.ADE.instance.alertModification(a.objectId)
        }, setTranslateX: function (a) {
            AR.i.getBridgeObject(a.objectId)._translateX = a.translateX, AR.ADE.instance.alertModification(a.objectId)
        }, setTranslateY: function (a) {
            AR.i.getBridgeObject(a.objectId)._translateY = a.translateY, AR.ADE.instance.alertModification(a.objectId)
        }, setTranslateZ: function (a) {
            AR.i.getBridgeObject(a.objectId)._translateZ = a.translateZ, AR.ADE.instance.alertModification(a.objectId)
        }, setGlobalTranslateX: function (a) {
            AR.i.getBridgeObject(a.objectId)._globalTranslateX = a.globalTranslateX, AR.ADE.instance.alertModification(a.objectId)
        }, setGlobalTranslateY: function (a) {
            AR.i.getBridgeObject(a.objectId)._globalTranslateY = a.globalTranslateY, AR.ADE.instance.alertModification(a.objectId)
        }, setGlobalTranslateZ: function (a) {
            AR.i.getBridgeObject(a.objectId)._globalTranslateZ = a.globalTranslateZ, AR.ADE.instance.alertModification(a.objectId)
        }, setScaleX: function (a) {
            AR.i.getBridgeObject(a.objectId)._scaleX = a.scaleX, AR.ADE.instance.alertModification(a.objectId)
        }, setScaleY: function (a) {
            AR.i.getBridgeObject(a.objectId)._scaleY = a.scaleY, AR.ADE.instance.alertModification(a.objectId)
        }, setScaleZ: function (a) {
            AR.i.getBridgeObject(a.objectId)._scaleZ = a.scaleZ, AR.ADE.instance.alertModification(a.objectId)
        }, getRotationX: function (a) {
            return AR.i.getBridgeObject(a.objectId).rotationX
        }, getRotationY: function (a) {
            return AR.i.getBridgeObject(a.objectId).rotationY
        }, getRotationZ: function (a) {
            return AR.i.getBridgeObject(a.objectId).rotationZ
        }, getGlobalRotationX: function (a) {
            return AR.i.getBridgeObject(a.objectId).globalRotationX
        }, getGlobalRotationY: function (a) {
            return AR.i.getBridgeObject(a.objectId).globalRotationY
        }, getGlobalRotationZ: function (a) {
            return AR.i.getBridgeObject(a.objectId).globalRotationZ
        }, getTranslateX: function (a) {
            return AR.i.getBridgeObject(a.objectId).translateX
        }, getTranslateY: function (a) {
            return AR.i.getBridgeObject(a.objectId).translateY
        }, getTranslateZ: function (a) {
            return AR.i.getBridgeObject(a.objectId).translateZ
        }, getGlobalTranslateX: function (a) {
            return AR.i.getBridgeObject(a.objectId).globalTranslateX
        }, getGlobalTranslateY: function (a) {
            return AR.i.getBridgeObject(a.objectId).globalTranslateY
        }, getGlobalTranslateZ: function (a) {
            return AR.i.getBridgeObject(a.objectId).globalTranslateZ
        }, getScaleX: function (a) {
            return AR.i.getBridgeObject(a.objectId).scaleX
        }, getScaleY: function (a) {
            return AR.i.getBridgeObject(a.objectId).scaleY
        }, getScaleZ: function (a) {
            return AR.i.getBridgeObject(a.objectId).scaleZ
        }
    }, AR.i.drawable2DInterface = {
        setOpacity: function (a) {
            AR.i.getBridgeObject(a.objectId)._opacity = a.opacity, AR.ADE.instance.alertModification(a.objectId)
        }, getOpacity: function (a) {
            return AR.i.getBridgeObject(a.objectId)._opacity
        }, setHorizontalAnchor: function (a) {
            AR.i.getBridgeObject(a.objectId)._horizontalAnchor = a.horizontalAnchor, AR.ADE.instance.alertModification(a.objectId)
        }, setVerticalAnchor: function (a) {
            AR.i.getBridgeObject(a.objectId)._verticalAnchor = a.verticalAnchor, AR.ADE.instance.alertModification(a.objectId)
        }, setZOrder: function (a) {
            AR.i.getBridgeObject(a.objectId)._zOrder = a.zOrder, AR.ADE.instance.alertModification(a.objectId)
        }, getBoundingRectangle: function () {
            return {width: AR.i.__DEFAULT_RETURN_VALUE__, height: AR.i.__DEFAULT_RETURN_VALUE__}
        }
    }, AR.i.circleInterface = {
        setRadius: function (a) {
            AR.i.getBridgeObject(a.objectId)._radius = a.radius, AR.ADE.instance.alertModification(a.objectId)
        }, getRadius: function (a) {
            return AR.i.getBridgeObject(a.objectId)._radius
        }, setStyle: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b._fillColor = a.fillColor, b._outlineSize = a.outlineSize, b._outlineColor = a.outlineColor, AR.ADE.instance.alertModification(a.objectId)
        }, createCircle: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _fillColor: a.fillColor,
                _outlineSize: a.outlineSize,
                _outlineColor: a.outlineColor,
                _radius: a.radius,
                _enabled: a.enabled,
                _mirrored: a.mirrored,
                _rotatesToCamera: a.rotatesToCamera,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _globalRotationX: a.globalRotationX,
                _globalRotationY: a.globalRotationY,
                _globalRotationZ: a.globalRotationZ,
                _globalTranslateX: a.globalTranslateX,
                _globalTranslateY: a.globalTranslateY,
                _globalTranslateZ: a.globalTranslateZ,
                _rotationX: a.rotationX,
                _rotationY: a.rotationY,
                _rotationZ: a.rotationZ,
                _translateX: a.translateX,
                _translateY: a.translateY,
                _translateZ: a.translateZ,
                _scaleX: a.scaleX,
                _scaleY: a.scaleY,
                _scaleZ: a.scaleZ,
                _zOrder: a.zOrder,
                _horizontalAnchor: a.horizontalAnchor,
                _verticalAnchor: a.verticalAnchor,
                _opacity: a.opacity,
                explain: function () {
                    return {
                        type: "Circle", properties: {
                            radius: this._radius,
                            "style.fillColor": this._fillColor,
                            "style.outlineSize": this._outlineSize,
                            "style.outlineColor": this._outlineColor,
                            enabled: this._enabled,
                            mirrored: this._mirrored,
                            rotatesToCamera: this._rotatesToCamera,
                            "rotate.global.x": this._globalRotationX,
                            "rotate.global.y": this._globalRotationY,
                            "rotate.global.z": this._globalRotationZ,
                            "translate.global.x": this._globalTranslateX,
                            "translate.global.y": this._globalTranslateY,
                            "translate.global.z": this._globalTranslateZ,
                            "rotate.x": this._rotationX,
                            "rotate.y": this._rotationY,
                            "rotate.z": this._rotationZ,
                            "translate.x": this._translateX,
                            "translate.y": this._translateY,
                            "translate.z": this._translateZ,
                            "scale.x": this._scaleX,
                            "scale.y": this._scaleY,
                            "scale.z": this._scaleZ,
                            opacity: this._opacity,
                            zOrder: this._zOrder,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.toName(this._horizontalAnchor),
                            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.toName(this._verticalAnchor),
                            offsetX: this._translateX,
                            offsetY: this._translateY,
                            scale: this._scaleX,
                            rotation: this._globalRotationZ,
                            "rotate.roll": this._globalRotationZ,
                            "rotate.tilt": this._globalRotationX,
                            "rotate.heading": this._globalRotationX,
                            onClick: {type: "custom_Drawables_Click_Trigger", active: this._onClickTriggerActive},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }
    }, AR.i.htmlDrawableInterface = {
        setHtml: function (a) {
            AR.i.getBridgeObject(a.objectId)._html = a.html, AR.ADE.instance.autoLoadResources && window.setTimeout(function () {
                AR.i.htmlDrawableInterface.simulateLoad({objectId: a.objectId})
            }, 5e3 * Math.random()), AR.ADE.instance.alertModification(a.objectId)
        }, setUri: function (a) {
            AR.i.getBridgeObject(a.objectId)._uri = a.uri, AR.ADE.instance.autoLoadResources && window.setTimeout(function () {
                AR.i.htmlDrawableInterface.simulateLoad({objectId: a.objectId})
            }, 5e3 * Math.random()), AR.ADE.instance.alertModification(a.objectId)
        }, setWidth: function (a) {
            AR.i.getBridgeObject(a.objectId)._width = a.width, AR.ADE.instance.alertModification(a.objectId)
        }, getWidth: function (a) {
            return AR.i.getBridgeObject(a.objectId)._width
        }, setViewportWidth: function (a) {
            AR.i.getBridgeObject(a.objectId)._viewportWidth = a.viewportWidth, AR.ADE.instance.alertModification(a.objectId)
        }, setViewportHeight: function (a) {
            AR.i.getBridgeObject(a.objectId)._viewportHeight = a.viewportHeight, AR.ADE.instance.alertModification(a.objectId)
        }, setClickThroughEnabled: function (a) {
            AR.i.getBridgeObject(a.objectId)._clickThroughEnabled = a.clickThroughEnabled, AR.ADE.instance.alertModification(a.objectId)
        }, setAllowDocumentLocationChanges: function (a) {
            AR.i.getBridgeObject(a.objectId)._allowDocumentLocationChanges = a.allowDocumentLocationChanges, AR.ADE.instance.alertModification(a.objectId)
        }, setOnLoadedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onLoadedTriggerActive = a.onLoadedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnDocumentLocationChangedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onDocumentLocationChangedTriggerActive = a.onDocumentLocationChangedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnErrorTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onErrorTriggerActive = a.onErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setBackgroundColor: function (a) {
            AR.i.getBridgeObject(a.objectId)._backgroundColor = a.backgroundColor, AR.ADE.instance.alertModification(a.objectId)
        }, evalJavaScript: function (a) {
        }, createHtmlDrawable: function (a) {
            var b = AR.__fromJSONString__(a.htmlOrUri);
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _html: b.html,
                _uri: b.uri,
                _viewportWidth: a.viewportWidth,
                _viewportHeight: a.viewportHeight,
                _width: a.width,
                _onLoadedTriggerActive: a.onLoadedTriggerActive,
                _onErrorTriggerActive: a.onErrorTriggerActive,
                _backgroundColor: a.backgroundColor,
                _loaded: !1,
                _clickThroughEnabled: a.clickThroughEnabled,
                _allowDocumentLocationChanges: a.allowDocumentLocationChanges,
                _onDocumentLocationChangedTriggerActive: a.onDocumentLocationChangedTriggerActive,
                loading: !1,
                _enabled: a.enabled,
                _mirrored: a.mirrored,
                _rotatesToCamera: a.rotatesToCamera,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _globalRotationX: a.globalRotationX,
                _globalRotationY: a.globalRotationY,
                _globalRotationZ: a.globalRotationZ,
                _globalTranslateX: a.globalTranslateX,
                _globalTranslateY: a.globalTranslateY,
                _globalTranslateZ: a.globalTranslateZ,
                _rotationX: a.rotationX,
                _rotationY: a.rotationY,
                _rotationZ: a.rotationZ,
                _translateX: a.translateX,
                _translateY: a.translateY,
                _translateZ: a.translateZ,
                _scaleX: a.scaleX,
                _scaleY: a.scaleY,
                _scaleZ: a.scaleZ,
                _zOrder: a.zOrder,
                _horizontalAnchor: a.horizontalAnchor,
                _verticalAnchor: a.verticalAnchor,
                _opacity: a.opacity,
                explain: function () {
                    return {
                        type: "HtmlDrawable", properties: {
                            html: {type: "html", value: this._html},
                            uri: {type: "uri", value: this._uri},
                            width: this._width,
                            viewportWidth: this._viewportWidth,
                            viewportHeight: this._viewportHeight,
                            backgroundColor: this._backgroundColor,
                            clickThroughEnabled: this._clickThroughEnabled,
                            allowDocumentLocationChanges: this._allowDocumentLocationChanges,
                            onDocumentLocationChanged: {
                                type: "bridgecall",
                                interfaceObject: "AR.i.htmlDrawableInterface",
                                functionName: "onDocumentLocationChanged",
                                active: this._onDocumentLocationChangedTriggerActive
                            },
                            onLoaded: {type: "trigger", active: this._onLoadedTriggerActive, trigger: "onLoaded"},
                            onError: {type: "trigger", active: this._onErrorTriggerActive, trigger: "onError"},
                            enabled: this._enabled,
                            mirrored: this._mirrored,
                            rotatesToCamera: this._rotatesToCamera,
                            "rotate.global.x": this._globalRotationX,
                            "rotate.global.y": this._globalRotationY,
                            "rotate.global.z": this._globalRotationZ,
                            "translate.global.x": this._globalTranslateX,
                            "translate.global.y": this._globalTranslateY,
                            "translate.global.z": this._globalTranslateZ,
                            "rotate.x": this._rotationX,
                            "rotate.y": this._rotationY,
                            "rotate.z": this._rotationZ,
                            "translate.x": this._translateX,
                            "translate.y": this._translateY,
                            "translate.z": this._translateZ,
                            "scale.x": this._scaleX,
                            "scale.y": this._scaleY,
                            "scale.z": this._scaleZ,
                            opacity: this._opacity,
                            zOrder: this._zOrder,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.toName(this._horizontalAnchor),
                            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.toName(this._verticalAnchor),
                            offsetX: this._translateX,
                            offsetY: this._translateY,
                            scale: this._scaleX,
                            rotation: this._globalRotationZ,
                            "rotate.roll": this._globalRotationZ,
                            "rotate.tilt": this._globalRotationX,
                            "rotate.heading": this._globalRotationX,
                            onClick: {type: "custom_Drawables_Click_Trigger", active: this._onClickTriggerActive},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId), AR.ADE.instance.autoLoadResources && AR.i.htmlDrawableInterface.startLoading(a)
        }, onDocumentLocationChanged: function (a) {
            var b = AR.om.getExistingObjectForID(a.objectId);
            if (b.onDocumentLocationChanged) {
                var c = prompt("Enter the URL the document location will be changed to: ");
                c && b.onDocumentLocationChanged(c)
            }
        }, startLoading: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b._loaded || b.loading || (b.loading = !0, window.setTimeout(function () {
                AR.i.htmlDrawableInterface.simulateLoad({objectId: a.objectId})
            }, 5e3 * Math.random()))
        }, simulateLoad: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId);
            b._loaded = !0, null != c.onLoaded && c.onLoaded(), AR.ADE.instance.alertModification(a.objectId)
        }
    }, AR.i.imageDrawableInterface = {
        setImageResource: function (a) {
            AR.i.getBridgeObject(a.objectId)._imageResource = a.imageResourceId, AR.ADE.instance.alertModification(a.objectId)
        }, setHeight: function (a) {
            AR.i.getBridgeObject(a.objectId)._height = a.height, AR.ADE.instance.alertModification(a.objectId)
        }, getHeight: function (a) {
            return AR.i.getBridgeObject(a.objectId)._height
        }, createImageDrawable: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _imageResource: a.imageResourceId,
                _height: a.height,
                _enabled: a.enabled,
                _mirrored: a.mirrored,
                _rotatesToCamera: a.rotatesToCamera,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _globalRotationX: a.globalRotationX,
                _globalRotationY: a.globalRotationY,
                _globalRotationZ: a.globalRotationZ,
                _globalTranslateX: a.globalTranslateX,
                _globalTranslateY: a.globalTranslateY,
                _globalTranslateZ: a.globalTranslateZ,
                _rotationX: a.rotationX,
                _rotationY: a.rotationY,
                _rotationZ: a.rotationZ,
                _translateX: a.translateX,
                _translateY: a.translateY,
                _translateZ: a.translateZ,
                _scaleX: a.scaleX,
                _scaleY: a.scaleY,
                _scaleZ: a.scaleZ,
                _zOrder: a.zOrder,
                _horizontalAnchor: a.horizontalAnchor,
                _verticalAnchor: a.verticalAnchor,
                _opacity: a.opacity,
                explain: function () {
                    return {
                        type: "ImageDrawable", properties: {
                            imageResource: {type: "id", value: this._imageResource},
                            height: this._height,
                            enabled: this._enabled,
                            mirrored: this._mirrored,
                            rotatesToCamera: this._rotatesToCamera,
                            "rotate.global.x": this._globalRotationX,
                            "rotate.global.y": this._globalRotationY,
                            "rotate.global.z": this._globalRotationZ,
                            "translate.global.x": this._globalTranslateX,
                            "translate.global.y": this._globalTranslateY,
                            "translate.global.z": this._globalTranslateZ,
                            "rotate.x": this._rotationX,
                            "rotate.y": this._rotationY,
                            "rotate.z": this._rotationZ,
                            "translate.x": this._translateX,
                            "translate.y": this._translateY,
                            "translate.z": this._translateZ,
                            "scale.x": this._scaleX,
                            "scale.y": this._scaleY,
                            "scale.z": this._scaleZ,
                            opacity: this._opacity,
                            zOrder: this._zOrder,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.toName(this._horizontalAnchor),
                            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.toName(this._verticalAnchor),
                            offsetX: this._translateX,
                            offsetY: this._translateY,
                            scale: this._scaleX,
                            rotation: this._globalRotationZ,
                            "rotate.roll": this._globalRotationZ,
                            "rotate.tilt": this._globalRotationX,
                            "rotate.heading": this._globalRotationX,
                            onClick: {type: "custom_Drawables_Click_Trigger", active: this._onClickTriggerActive},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }
    }, AR.i.imageResourceInterface = {
        setOnLoadedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onLoadedTriggerActive = a.onLoadedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnErrorTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onErrorTriggerActive = a.onErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, getWidth: function () {
            return 10
        }, getHeight: function () {
            return 20
        }, isLoaded: function (a) {
            return AR.i.getBridgeObject(a.objectId)._loaded
        }, createImageResource: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _uri: a.uri,
                _onLoadedTriggerActive: a.onLoadedTriggerActive,
                _onErrorTriggerActive: a.onErrorTriggerActive,
                _loaded: !1,
                loading: !1,
                explain: function () {
                    return {
                        type: "ImageResource",
                        properties: {
                            uri: {type: "uri", value: this._uri},
                            onLoaded: {
                                type: "trigger",
                                active: this._onLoadedTriggerActive,
                                trigger: "onLoaded",
                                parameters: [AR.i.imageResourceInterface.getWidth({objectId: a.objectId}), AR.i.imageResourceInterface.getHeight({objectId: a.objectId})]
                            },
                            onError: {type: "trigger", active: this._onErrorTriggerActive, trigger: "onError"},
                            Load: {
                                type: "bridgecall",
                                interfaceObject: "AR.i.imageResourceInterface",
                                functionName: "startLoading"
                            },
                            "loaded (artificial property)": this._loaded
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId), AR.ADE.instance.autoLoadResources && AR.i.imageResourceInterface.startLoading(a)
        }, startLoading: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b._loaded || b.loading || (b.loading = !0, window.setTimeout(function () {
                AR.i.imageResourceInterface.simulateLoad({objectId: a.objectId})
            }, 0))
        }, simulateLoad: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId);
            b._loaded = !0, null != c.onLoaded && c.onLoaded(AR.i.imageResourceInterface.getWidth({objectId: c.__id}), AR.i.imageResourceInterface.getHeight({objectId: c.__id})), AR.ADE.instance.alertModification(a.objectId)
        }
    }, AR.i.labelInterface = {
        setText: function (a) {
            AR.i.getBridgeObject(a.objectId)._text = a.text, AR.ADE.instance.alertModification(a.objectId)
        }, setHeight: function (a) {
            AR.i.getBridgeObject(a.objectId)._height = a.height, AR.ADE.instance.alertModification(a.objectId)
        }, getHeight: function (a) {
            return AR.i.getBridgeObject(a.objectId)._height
        }, setStyle: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b._backgroundColor = a.backgroundColor, b._textColor = a.textColor, b._fontStyle = a.fontStyle, AR.ADE.instance.alertModification(a.objectId)
        }, createLabel: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _text: a.text,
                _height: a.height,
                _backgroundColor: a.backgroundColor,
                _textColor: a.textColor,
                _fontStyle: a.fontStyle,
                _enabled: a.enabled,
                _mirrored: a.mirrored,
                _rotatesToCamera: a.rotatesToCamera,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _globalRotationX: a.globalRotationX,
                _globalRotationY: a.globalRotationY,
                _globalRotationZ: a.globalRotationZ,
                _globalTranslateX: a.globalTranslateX,
                _globalTranslateY: a.globalTranslateY,
                _globalTranslateZ: a.globalTranslateZ,
                _rotationX: a.rotationX,
                _rotationY: a.rotationY,
                _rotationZ: a.rotationZ,
                _translateX: a.translateX,
                _translateY: a.translateY,
                _translateZ: a.translateZ,
                _scaleX: a.scaleX,
                _scaleY: a.scaleY,
                _scaleZ: a.scaleZ,
                _zOrder: a.zOrder,
                _horizontalAnchor: a.horizontalAnchor,
                _verticalAnchor: a.verticalAnchor,
                _opacity: a.opacity,
                explain: function () {
                    return {
                        type: "Label", properties: {
                            text: this._text,
                            height: this._height,
                            "style.textColor": this._textColor,
                            "style.backgroundColor": this._backgroundColor,
                            "style.fontStyle": this._fontStyle,
                            enabled: this._enabled,
                            mirrored: this._mirrored,
                            rotatesToCamera: this._rotatesToCamera,
                            "rotate.global.x": this._globalRotationX,
                            "rotate.global.y": this._globalRotationY,
                            "rotate.global.z": this._globalRotationZ,
                            "translate.global.x": this._globalTranslateX,
                            "translate.global.y": this._globalTranslateY,
                            "translate.global.z": this._globalTranslateZ,
                            "rotate.x": this._rotationX,
                            "rotate.y": this._rotationY,
                            "rotate.z": this._rotationZ,
                            "translate.x": this._translateX,
                            "translate.y": this._translateY,
                            "translate.z": this._translateZ,
                            "scale.x": this._scaleX,
                            "scale.y": this._scaleY,
                            "scale.z": this._scaleZ,
                            opacity: this._opacity,
                            zOrder: this._zOrder,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.toName(this._horizontalAnchor),
                            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.toName(this._verticalAnchor),
                            offsetX: this._translateX,
                            offsetY: this._translateY,
                            scale: this._scaleX,
                            rotation: this._globalRotationZ,
                            "rotate.roll": this._globalRotationZ,
                            "rotate.tilt": this._globalRotationX,
                            "rotate.heading": this._globalRotationX,
                            onClick: {type: "custom_Drawables_Click_Trigger", active: this._onClickTriggerActive},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }
    }, AR.i.modelInterface = {
        setOnLoadedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onLoadedTriggerActive = a.onLoadedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnErrorTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onErrorTriggerActive = a.onErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnInitializedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onInitializedTriggerActive = a.onInitializedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, isLoaded: function (a) {
            return AR.i.getBridgeObject(a.objectId)._loaded
        }, isInitialized: function (a) {
            return AR.i.getBridgeObject(a.objectId)._initialized
        }, createModel: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _uri: a.uri,
                _onLoadedTriggerActive: a.onLoadedTriggerActive,
                _onErrorTriggerActive: a.onErrorTriggerActive,
                _loaded: !1,
                _initialized: !1,
                loading: !1,
                _enabled: a.enabled,
                _mirrored: a.mirrored,
                _rotatesToCamera: a.rotatesToCamera,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _globalRotationX: a.globalRotationX,
                _globalRotationY: a.globalRotationY,
                _globalRotationZ: a.globalRotationZ,
                _globalTranslateX: a.globalTranslateX,
                _globalTranslateY: a.globalTranslateY,
                _globalTranslateZ: a.globalTranslateZ,
                _rotationX: a.rotationX,
                _rotationY: a.rotationY,
                _rotationZ: a.rotationZ,
                _translateX: a.translateX,
                _translateY: a.translateY,
                _translateZ: a.translateZ,
                _scaleX: a.scaleX,
                _scaleY: a.scaleY,
                _scaleZ: a.scaleZ,
                explain: function () {
                    return {
                        type: "Model", properties: {
                            url: {type: "uri", value: this._url},
                            onLoaded: {type: "trigger", active: this._onLoadedTriggerActive, trigger: "onLoaded"},
                            onError: {type: "trigger", active: this._onErrorTriggerActive, trigger: "onError"},
                            onInitialized: {
                                type: "trigger",
                                active: this._onInitializedTriggerActive,
                                trigger: "onInitialized"
                            },
                            Load: {
                                type: "bridgecall",
                                interfaceObject: "AR.i.modelInterface",
                                functionName: "startLoading"
                            },
                            "loaded (artificial property)": this._loaded,
                            enabled: this._enabled,
                            mirrored: this._mirrored,
                            rotatesToCamera: this._rotatesToCamera,
                            "rotate.global.x": this._globalRotationX,
                            "rotate.global.y": this._globalRotationY,
                            "rotate.global.z": this._globalRotationZ,
                            "translate.global.x": this._globalTranslateX,
                            "translate.global.y": this._globalTranslateY,
                            "translate.global.z": this._globalTranslateZ,
                            "rotate.x": this._rotationX,
                            "rotate.y": this._rotationY,
                            "rotate.z": this._rotationZ,
                            "translate.x": this._translateX,
                            "translate.y": this._translateY,
                            "translate.z": this._translateZ,
                            "scale.x": this._scaleX,
                            "scale.y": this._scaleY,
                            "scale.z": this._scaleZ,
                            opacity: this._opacity,
                            zOrder: this._zOrder,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.toName(this._horizontalAnchor),
                            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.toName(this._verticalAnchor),
                            "rotate.roll": this._globalRotationZ,
                            "rotate.tilt": this._globalRotationX,
                            "rotate.heading": this._globalRotationX,
                            onClick: {type: "custom_Drawables_Click_Trigger", active: this._onClickTriggerActive},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId), AR.ADE.instance.autoLoadResources && AR.i.modelInterface.startLoading(a)
        }, startLoading: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b._loaded || b.loading || (b.loading = !0, window.setTimeout(function () {
                AR.i.modelInterface.simulateLoad({objectId: a.objectId})
            }, 5e3 * Math.random()))
        }, simulateLoad: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId);
            b._loaded = !0, b._initialized = !0, null != c.onLoaded && c.onLoaded(), null != c.onInitialized && c.onInitialized(), AR.ADE.instance.alertModification(a.objectId)
        }
    }, AR.i.videoDrawableInterface = {
        play: function (a) {
        }, pause: function (a) {
        }, resume: function (a) {
        }, stop: function (a) {
        }, setHeight: function (a) {
            AR.i.getBridgeObject(a.objectId)._height = a.height, AR.ADE.instance.alertModification(a.objectId)
        }, getHeight: function (a) {
            return AR.i.getBridgeObject(a.objectId)._height
        }, setOnLoadedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onLoadedTriggerActive = a.onLoadedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnPlaybackStartedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onPlaybackStartedTriggerActive = a.onPlaybackStartedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnFinishedPlayingTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onFinishedPlayingTriggerActive = a.onFinishedPlayingTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnErrorTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onErrorTriggerActive = a.onErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, createVideoDrawable: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _onLoadedTriggerActive: a.onLoadedTriggerActive,
                _onPlaybackStartedTriggerActive: a.onPlaybackStartedTriggerActive,
                _onFinishedPlayingTriggerActive: a.onFinishedPlayingTriggerActive,
                _onErrorTriggerActive: a.onErrorTriggerActive,
                _uri: a.uri,
                _isTransparent: a.isTransparent,
                _enabled: a.enabled,
                _mirrored: a.mirrored,
                _rotatesToCamera: a.rotatesToCamera,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _globalRotationX: a.globalRotationX,
                _globalRotationY: a.globalRotationY,
                _globalRotationZ: a.globalRotationZ,
                _globalTranslateX: a.globalTranslateX,
                _globalTranslateY: a.globalTranslateY,
                _globalTranslateZ: a.globalTranslateZ,
                _rotationX: a.rotationX,
                _rotationY: a.rotationY,
                _rotationZ: a.rotationZ,
                _translateX: a.translateX,
                _translateY: a.translateY,
                _translateZ: a.translateZ,
                _scaleX: a.scaleX,
                _scaleY: a.scaleY,
                _scaleZ: a.scaleZ,
                _zOrder: a.zOrder,
                _horizontalAnchor: a.horizontalAnchor,
                _verticalAnchor: a.verticalAnchor,
                _opacity: a.opacity,
                explain: function () {
                    return {
                        type: "VideoDrawable", properties: {
                            uri: this._uri,
                            height: this._height,
                            isTransparent: this._isTransparent,
                            state: AR.CONST.STATE.toName(this._state),
                            onLoaded: {type: "trigger", active: this._onLoadedTriggerActive, trigger: "onLoaded"},
                            onPlaybackStarted: {
                                type: "trigger",
                                active: this._onPlaybackStartedTriggerActive,
                                trigger: "onPlaybackStarted"
                            },
                            onFinishedPlaying: {
                                type: "trigger",
                                active: this._onFinishedPlayingTriggerActive,
                                trigger: "onFinishedPlaying"
                            },
                            onError: {type: "trigger", active: this._onErrorTriggerActive, trigger: "onError"},
                            enabled: this._enabled,
                            mirrored: this._mirrored,
                            rotatesToCamera: this._rotatesToCamera,
                            "rotate.global.x": this._globalRotationX,
                            "rotate.global.y": this._globalRotationY,
                            "rotate.global.z": this._globalRotationZ,
                            "translate.global.x": this._globalTranslateX,
                            "translate.global.y": this._globalTranslateY,
                            "translate.global.z": this._globalTranslateZ,
                            "rotate.x": this._rotationX,
                            "rotate.y": this._rotationY,
                            "rotate.z": this._rotationZ,
                            "translate.x": this._translateX,
                            "translate.y": this._translateY,
                            "translate.z": this._translateZ,
                            "scale.x": this._scaleX,
                            "scale.y": this._scaleY,
                            "scale.z": this._scaleZ,
                            opacity: this._opacity,
                            zOrder: this._zOrder,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.toName(this._horizontalAnchor),
                            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.toName(this._verticalAnchor),
                            offsetX: this._translateX,
                            offsetY: this._translateY,
                            scale: this._scaleX,
                            rotation: this._globalRotationZ,
                            "rotate.roll": this._globalRotationZ,
                            "rotate.tilt": this._globalRotationX,
                            "rotate.heading": this._globalRotationX,
                            onClick: {type: "custom_Drawables_Click_Trigger", active: this._onClickTriggerActive},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }, simulateLoad: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId);
            b._loaded = !0, null != c.onLoaded && c.onLoaded(), AR.ADE.instance.alertModification(a.objectId)
        }
    }, AR.i.cloudRecognitionServiceInterface = {
        setOnInitializedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onInitializedTriggerActive = a.onInitializedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnErrorTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onErrorTriggerActive = a.onErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnRecognizedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onRecognizedTriggerActive = a.onRecognizedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnRecognitionErrorTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onRecognitionErrorTriggerActive = a.onRecognitionErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnContinuousRecognitionInterruptionTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onContinuousRecognitionInterruptionTriggerActive = a.onContinuousRecognitionInterruptionTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, stopContinuousRecognition: function (a) {
            AR.i.getBridgeObject(a.objectId)._continuousRecognitionActive = !1, AR.ADE.instance.alertModification(a.objectId)
        }, startContinuousRecognition: function (a) {
            AR.i.getBridgeObject(a.objectId)._continuousInterval = a.continuousInterval, AR.i.getBridgeObject(a.objectId)._onContinuousRecognitionInterruptionTriggerActive = a.onContinuousRecognitionInterruptionTriggerActive, AR.i.getBridgeObject(a.objectId)._continuousRecognitionActive = !0, AR.ADE.instance.alertModification(a.objectId)
        }, recognize: function (a) {
            AR.i.getBridgeObject(a.objectId)._onRecognizedTriggerActive = a.onRecognizedTriggerActive, AR.i.getBridgeObject(a.objectId)._onRecognitionErrorTriggerActive = a.onRecognitionErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, createCloudRecognitionService: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _clientToken: a.clientToken,
                _targetCollectionId: a.targetCollectionId,
                _onInitializedTriggerActive: a.onInitializedTriggerActive,
                _onErrorTriggerActive: a.onErrorTriggerActive,
                _onRecognizedTriggerActive: a.onRecognizedTriggerActive,
                _onRecognitionErrorTriggerActive: a.onRecognitionErrorTriggerActive,
                _onContinuousRecognitionInterruptionTriggerActive: a.onContinuousRecognitionInterruptionTriggerActive,
                _loaded: !1,
                _continuousRecognitionActive: !1,
                explain: function () {
                    return {
                        type: "CloudRecognitionService",
                        properties: {
                            clientToken: this._clientToken,
                            targetCollectionId: this._targetCollectionId,
                            onInitialized: {
                                type: "trigger",
                                active: this._onInitializedTriggerActive,
                                trigger: "onInitialized"
                            },
                            onError: {type: "trigger", active: this._onErrorTriggerActive, trigger: "onError"},
                            onRecognized: {
                                type: "trigger",
                                active: this._onRecognizedTriggerActive,
                                trigger: "onRecognized"
                            },
                            onRecognitionError: {
                                type: "trigger",
                                active: this._onRecognitionErrorTriggerActive,
                                trigger: "onRecognitionError"
                            },
                            onContinuousRecognitionInterruption: {
                                type: "trigger",
                                active: this._onContinuousRecognitionInterruptionTriggerActive,
                                trigger: "onContinuousRecognitionInterruption"
                            },
                            Load: {
                                type: "bridgecall",
                                interfaceObject: "AR.i.cloudRecognitionServiceInterface",
                                functionName: "startLoading"
                            },
                            "loaded (artificial property)": this._loaded,
                            "continuousRecognitionActive (artificial property)": this._continuousRecognitionActive
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId), AR.ADE.instance.autoLoadResources && AR.i.cloudRecognitionServiceInterface.startLoading(a)
        }, startLoading: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b._loaded || b.loading || (b.loading = !0, window.setTimeout(function () {
                AR.i.cloudRecognitionServiceInterface.simulateLoad({objectId: a.objectId})
            }, 5e3 * Math.random()))
        }, simulateLoad: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId);
            b._loaded = !0, null != c.onInitialized && c.onInitialized(), AR.ADE.instance.alertModification(a.objectId)
        }
    }, AR.i.instantTrackableInterface = {
        setOnTrackingPlaneClickTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onTrackingPlaneClickTriggerActive = a.onTrackingPlaneClickTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnTrackingPlaneDragBeganTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onTrackingPlaneDragBeganTriggerActive = a.onTrackingPlaneDragBeganTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnTrackingPlaneDragChangedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onTrackingPlaneDragChangedTriggerActive = a.onTrackingPlaneDragChangedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnTrackingPlaneDragEndedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onTrackingPlaneDragEndedTriggerActive = a.onTrackingPlaneDragEndedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnTrackingStartedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onTrackingStartedTriggerActive = a.onTrackingStartedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnTrackingStoppedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onTrackingStoppedTriggerActive = a.onTrackingStoppedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setInitializationDrawables: function (a) {
            AR.i.getBridgeObject(a.objectId)._initializationDrawableIds = a.initializationDrawableIds, AR.ADE.instance.alertModification(a.objectId)
        }, createInstantTrackable: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _trackerId: a.trackerId,
                _enabled: a.enabled,
                _targetName: a.targetName,
                _onEnterFieldOfVisionTriggerActive: a.onEnterFieldOfVisionTriggerActive,
                _onExitFieldOfVisionTriggerActive: a.onExitFieldOfVisionTriggerActive,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _onTrackingPlaneClickTriggerActive: a.onTrackingPlaneClickTriggerActive,
                _onTrackingPlaneDragBeganTriggerActive: a.onTrackingPlaneDragBeganTriggerActive,
                _onTrackingPlaneDragChangedTriggerActive: a.onTrackingPlaneDragChangedTriggerActive,
                _onTrackingPlaneDragEndedTriggerActive: a.onTrackingPlaneDragEndedTriggerActive,
                _onTrackingStartedTriggerActive: a.onTrackingStartedTriggerActive,
                _onTrackingStoppedTriggerActive: a.onTrackingStoppedTriggerActive,
                _onSnappedToScreenTriggerActive: a.onSnappedToScreenTriggerActive,
                _onDelayedSnapInterruptionTriggerActive: a.onDelayedSnapInterruptionTriggerActive,
                _camDrawableIds: a.camDrawableIds,
                _initializationDrawableIds: a.initializationDrawableIds,
                _renderingOrder: a.renderingOrder,
                _snapToScreenEnabled: a.snapToScreenEnabled,
                _screenSnapDelay: a.screenSnapDelay,
                _snapToScreenEnabledOnExitFieldOfVision: a.snapToScreenEnabledOnExitFieldOfVision,
                _snapContainerId: a.snapContainerId,
                _snapPositionRight: a.snapPositionRight,
                _snapPositionTop: a.snapPositionTop,
                _snapPositionLeft: a.snapPositionLeft,
                _snapPositionBottom: a.snapPositionBottom,
                _visible: !1,
                explain: function () {
                    return {
                        type: "ImageTrackable", properties: {
                            tracker: {type: "id", value: this._trackerId},
                            enabled: this._enabled,
                            targetName: this._targetName,
                            onEnterFieldOfVision: {
                                type: "trigger",
                                active: this._onEnterFieldOfVisionTriggerActive,
                                trigger: "onEnterFieldOfVision"
                            },
                            onExitFieldOfVision: {
                                type: "trigger",
                                active: this._onExitFieldOfVisionTriggerActive,
                                trigger: "onExitFieldOfVision"
                            },
                            onClick: {type: "trigger", active: this._onClickTriggerActive, trigger: "onClick"},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            },
                            onTrackingPlaneClick: {
                                type: "trigger",
                                active: this._onTrackingPlaneClickTriggerActive,
                                trigger: "onTrackingPlaneClick"
                            },
                            onTrackingPlaneDragBegan: {
                                type: "trigger",
                                active: this._onTrackingPlaneDragBeganTriggerActive,
                                trigger: "onTrackingPlaneDragBegan"
                            },
                            onTrackingPlaneDragChanged: {
                                type: "trigger",
                                active: this._onTrackingPlaneDragChangedTriggerActive,
                                trigger: "onTrackingPlaneDragChanged"
                            },
                            onTrackingPlaneDragEnded: {
                                type: "trigger",
                                active: this._onTrackingPlaneDragEndedTriggerActive,
                                trigger: "onTrackingPlaneDragEnded"
                            },
                            onTrackingStarted: {
                                type: "trigger",
                                active: this._onTrackingStartedTriggerActive,
                                trigger: "onTrackingStarted"
                            },
                            onTrackingStopped: {
                                type: "trigger",
                                active: this._onTrackingStoppedTriggerActive,
                                trigger: "onTrackingStopped"
                            },
                            onSnappedToScreen: {
                                type: "trigger",
                                active: this._onSnappedToScreenTriggerActive,
                                trigger: "onSnappedToScreen"
                            },
                            onDelayedSnapInterruption: {
                                type: "trigger",
                                active: this._onDelayedSnapInterruptionTriggerActive,
                                trigger: "onDelayedSnapInterruption"
                            },
                            "drawables.cam": {type: "ids", value: this._camDrawableIds},
                            "drawables.initialization": {type: "ids", value: this._initializationDrawableIds},
                            renderingOrder: this._renderingOrder,
                            snapToScreenEnabled: this._snapToScreenEnabled,
                            screenSnapDelay: this._screenSnapDelay,
                            snapToScreenEnabledOnExitFieldOfVision: this._snapToScreenEnabledOnExitFieldOfVision,
                            snapContainerId: this._snapContainerId,
                            snapPositionRight: this._snapPositionRight,
                            snapPositionTop: this._snapPositionTop,
                            snapPositionLeft: this._snapPositionLeft,
                            snapPositionBottom: this._snapPositionBottom,
                            "visible (artificial property)": this._visible,
                            "Toggle Visibility": {
                                type: "bridgecall",
                                interfaceObject: "AR.i.arObjectInterface",
                                functionName: "toggleVisibility"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }
    }, AR.i.imageTrackerInterface = {
        setEnabled: function (a) {
            AR.i.getBridgeObject(a.objectId)._enabled = a.enabled, AR.ADE.instance.alertModification(a.objectId)
        }, isEnabled: function (a) {
            return AR.i.getBridgeObject(a.objectId)._enabled
        }, setPhysicalTargetImageHeights: function (a) {
            AR.i.getBridgeObject(a.objectId)._physicalTargetImageHeights = a.physicalTargetImageHeights, AR.ADE.instance.alertModification(a.objectId)
        }, setOnTargetsLoadedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onLoadedTriggerActive = a.onLoadedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnErrorTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onErrorTriggerActive = a.onErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnDisabledTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onDisabledTriggerActive = a.onDisabledTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, createTracker: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _resourceId: a.sourceId,
                _onTargetsLoadedTriggerActive: a.onTargetsLoadedTriggerActive,
                _onErrorTriggerActive: a.onErrorTriggerActive,
                _onDisabledTriggerActive: a.onDisabledTriggerActive,
                _enabled: a.enabled,
                _physicalTargetImageHeights: a.physicalTargetImageHeights,
                _loaded: !1,
                explain: function () {
                    return {
                        type: "ImageTracker (Client-/CloudTracker)",
                        properties: {
                            resource: {type: "id", value: this._resourceId},
                            onTargetsLoaded: {
                                type: "trigger",
                                active: this._onTargetsLoadedTriggerActive,
                                trigger: "onTargetsLoaded"
                            },
                            onError: {type: "trigger", active: this._onErrorTriggerActive, trigger: "onError"},
                            onDisabled: {type: "trigger", active: this._onDisabledTriggerActive, trigger: "onDisabled"},
                            Load: {
                                type: "bridgecall",
                                interfaceObject: "AR.i.imageTrackerInterface",
                                functionName: "startLoading"
                            },
                            "loaded (artificial property)": this._loaded
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId), AR.ADE.instance.autoLoadResources && AR.i.imageTrackerInterface.startLoading(a)
        }, startLoading: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b._loaded || b.loading || (b.loading = !0, window.setTimeout(function () {
                AR.i.imageTrackerInterface.simulateLoad({objectId: a.objectId})
            }, 5e3 * Math.random()))
        }, simulateLoad: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId);
            b._loaded = !0, null != c.onTargetsLoaded && c.onTargetsLoaded(), AR.ADE.instance.alertModification(a.objectId)
        }
    }, AR.i.instantTrackerInterface = {
        setState: function (a) {
            AR.i.getBridgeObject(a.objectId)._state = a.state, AR.ADE.instance.alertModification(a.objectId)
        }, setEnabled: function (a) {
            AR.i.getBridgeObject(a.objectId)._enabled = a.enabled, AR.ADE.instance.alertModification(a.objectId)
        }, setOnErrorTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onErrorTriggerActive = a.onErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnDisabledTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onDisabledTriggerActive = a.onDisabledTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnChangedStateTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onChangedStateTriggerActive = a.onChangedStateTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setDeviceHeight: function (a) {
            AR.i.getBridgeObject(a.objectId)._deviceHeight = a.deviceHeight, AR.ADE.instance.alertModification(a.objectId)
        }, setTrackingPlaneOrientation: function (a) {
            AR.i.getBridgeObject(a.objectId)._trackingPlaneOrientation = a.trackingPlaneOrientation, AR.ADE.instance.alertModification(a.objectId)
        }, isEnabled: function (a) {
            return AR.i.getBridgeObject(a.objectId)._enabled
        }, getState: function (a) {
            return AR.i.getBridgeObject(a.objectId)._state
        }, canStartTracking: function (a) {
            return AR.i.getBridgeObject(a.objectId)._canStartTracking
        }, createTracker: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _enabled: a.enabled,
                _onDisabledTriggerActive: a.onDisabledTriggerActive,
                _onErrorTriggerActive: a.onErrorTriggerActive,
                _onChangedStateTriggerActive: a.onChangedStateTriggerActive,
                _deviceHeight: a.deviceHeight,
                _state: 0,
                _canStartTracking: !1,
                explain: function () {
                    return {
                        type: "InstantTracker",
                        properties: {
                            onChangedState: {
                                type: "trigger",
                                active: this._onChangedStateTriggerActive,
                                trigger: "onChangedState"
                            },
                            onError: {type: "trigger", active: this._onErrorTriggerActive, trigger: "onError"},
                            onDisabled: {type: "trigger", active: this._onDisabledTriggerActive, trigger: "onDisabled"},
                            deviceHeight: this._deviceHeight,
                            enabled: this._enabled,
                            state: this._state,
                            canStartTracking: this._canStartTracking
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }
    }, AR.i.imageTrackableInterface = {
        setExtendedTarget: function (a) {
            AR.i.getBridgeObject(a.objectId)._extendedTarget = a.extendedTarget, AR.ADE.instance.alertModification(a.objectId)
        }, setOnExtendedTrackingQualityChangedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onExtendedTrackingQualityChangedTriggerActive = a.onExtendedTrackingQualityChangedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnEnterFieldOfVisionTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onEnterFieldOfVisionTriggerActive = a.onEnterFieldOfVisionTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnExitFieldOfVisionTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onExitFieldOfVisionTriggerActive = a.onExitFieldOfVisionTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnImageRecognizedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onImageRecognizedTriggerActive = a.onImageRecognizedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnImageLostTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onImageLostTriggerActive = a.onImageLostTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, getAspectRatio: function (a) {
            return AR.i.getBridgeObject(a.objectId)._visible ? 2.5 : -1
        }, createImageTrackable: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _trackerId: a.trackerId,
                _enabled: a.enabled,
                _targetName: a.targetName,
                _onEnterFieldOfVisionTriggerActive: a.onEnterFieldOfVisionTriggerActive,
                _onExitFieldOfVisionTriggerActive: a.onExitFieldOfVisionTriggerActive,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _onExtendedTrackingQualityChangedTriggerActive: a.onExtendedTrackingQualityChangedTriggerActive,
                _onImageRecognizedTriggerActive: a.onImageRecognizedTriggerActive,
                _onImageLostTriggerActive: a.onImageLostTriggerActive,
                _distanceToTargetChangedTriggerActive: a.distanceToTargetChangedTriggerActive,
                _onSnappedToScreenTriggerActive: a.onSnappedToScreenTriggerActive,
                _onDelayedSnapInterruptionTriggerActive: a.onDelayedSnapInterruptionTriggerActive,
                _camDrawableIds: a.camDrawableIds,
                _renderingOrder: a.renderingOrder,
                _snapToScreenEnabled: a.snapToScreenEnabled,
                _screenSnapDelay: a.screenSnapDelay,
                _snapToScreenEnabledOnExitFieldOfVision: a.snapToScreenEnabledOnExitFieldOfVision,
                _snapContainerId: a.snapContainerId,
                _snapPositionRight: a.snapPositionRight,
                _snapPositionTop: a.snapPositionTop,
                _snapPositionLeft: a.snapPositionLeft,
                _snapPositionBottom: a.snapPositionBottom,
                _distanceToTargetChangedThreshold: a.distanceToTargetChangedThreshold,
                _enableExtendedTracking: a.enableExtendedTracking,
                _extendedTarget: a.extendedTarget,
                _visible: !1,
                explain: function () {
                    return {
                        type: "ImageTrackable", properties: {
                            tracker: {type: "id", value: this._trackerId},
                            enabled: this._enabled,
                            targetName: this._targetName,
                            onEnterFieldOfVision: {
                                type: "trigger",
                                active: this._onEnterFieldOfVisionTriggerActive,
                                trigger: "onEnterFieldOfVision"
                            },
                            onExitFieldOfVision: {
                                type: "trigger",
                                active: this._onExitFieldOfVisionTriggerActive,
                                trigger: "onExitFieldOfVision"
                            },
                            onClick: {type: "trigger", active: this._onClickTriggerActive, trigger: "onClick"},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            },
                            onExtendedTrackingQualityChanged: {
                                type: "trigger",
                                active: this._onExtendedTrackingQualityChangedTriggerActive,
                                trigger: "onExtendedTrackingQualityChanged"
                            },
                            onImageRecognized: {
                                type: "trigger",
                                active: this._onImageRecognizedTriggerActive,
                                trigger: "onImageRecognized"
                            },
                            onImageLost: {
                                type: "trigger",
                                active: this._onImageLostTriggerActive,
                                trigger: "onImageLost"
                            },
                            distanceToTargetChanged: {
                                type: "trigger",
                                active: this._distanceToTargetChangedTriggerActive,
                                trigger: "distanceToTargetChanged"
                            },
                            onSnappedToScreen: {
                                type: "trigger",
                                active: this._onSnappedToScreenTriggerActive,
                                trigger: "onSnappedToScreen"
                            },
                            onDelayedSnapInterruption: {
                                type: "trigger",
                                active: this._onDelayedSnapInterruptionTriggerActive,
                                trigger: "onDelayedSnapInterruption"
                            },
                            "drawables.cam": {type: "ids", value: this._camDrawableIds},
                            renderingOrder: this._renderingOrder,
                            snapToScreenEnabled: this._snapToScreenEnabled,
                            screenSnapDelay: this._screenSnapDelay,
                            snapToScreenEnabledOnExitFieldOfVision: this._snapToScreenEnabledOnExitFieldOfVision,
                            snapContainerId: this._snapContainerId,
                            snapPositionRight: this._snapPositionRight,
                            snapPositionTop: this._snapPositionTop,
                            snapPositionLeft: this._snapPositionLeft,
                            snapPositionBottom: this._snapPositionBottom,
                            distanceToTargetChangedThreshold: this._distanceToTargetChangedThreshold,
                            enableExtendedTracking: this._enableExtendedTracking,
                            extendedTarget: this._extendedTarget,
                            "visible (artificial property)": this._visible,
                            "Toggle Visibility": {
                                type: "bridgecall",
                                interfaceObject: "AR.i.arObjectInterface",
                                functionName: "toggleVisibility"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }
    }, AR.i.targetCollectionResourceInterface = {
        setOnLoadedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onLoadedTriggerActive = a.onLoadedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnErrorTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onErrorTriggerActive = a.onErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, createTargetCollectionResource: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _url: a.url,
                _onLoadedTriggerActive: a.onLoadedTriggerActive,
                _onErrorTriggerActive: a.onErrorTriggerActive,
                _loaded: !1,
                explain: function () {
                    return {
                        type: "TargetCollectionResource",
                        properties: {
                            url: {type: "uri", value: this._url},
                            onLoaded: {type: "trigger", active: this._onLoadedTriggerActive, trigger: "onLoaded"},
                            onError: {type: "trigger", active: this._onErrorTriggerActive, trigger: "onError"},
                            Load: {
                                type: "bridgecall",
                                interfaceObject: "AR.i.targetCollectionResourceInterface",
                                functionName: "startLoading"
                            },
                            "loaded (artificial property)": this._loaded
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId), AR.ADE.instance.autoLoadResources && AR.i.targetCollectionResourceInterface.startLoading(a)
        }, startLoading: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b._loaded || b.loading || (b.loading = !0, window.setTimeout(function () {
                AR.i.targetCollectionResourceInterface.simulateLoad({objectId: a.objectId})
            }, 5e3 * Math.random()))
        }, simulateLoad: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId);
            b._loaded = !0, null != c.onLoaded && c.onLoaded(), AR.ADE.instance.alertModification(a.objectId)
        }, isLoading: function (a) {
            return AR.i.getBridgeObject(a.objectId).loading()
        }
    }, AR.i.objectTrackerInterface = {
        setEnabled: function (a) {
            AR.i.getBridgeObject(a.objectId)._enabled = a.enabled, AR.ADE.instance.alertModification(a.objectId)
        }, setOnErrorTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onErrorTriggerActive = a.onErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnDisabledTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onDisabledTriggerActive = a.onDisabledTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnTargetsLoadedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onTargetsLoadedTriggerActive = a.onTargetsLoadedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, isEnabled: function (a) {
            return AR.i.getBridgeObject(a.objectId)._enabled
        }, createTracker: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _resourceId: a.trackerSourceId,
                _onTargetsLoadedTriggerActive: a.onTargetsLoadedTriggerActive,
                _onErrorTriggerActive: a.onErrorTriggerActive,
                _onDisabledTriggerActive: a.onDisabledTriggerActive,
                _enabled: a.enabled,
                _loaded: !1,
                explain: function () {
                    return {
                        type: "ObjectTracker",
                        properties: {
                            resource: {type: "id", value: this._resourceId},
                            onTargetsLoaded: {
                                type: "trigger",
                                active: this._onTargetsLoadedTriggerActive,
                                trigger: "onTargetsLoaded"
                            },
                            onError: {type: "trigger", active: this._onErrorTriggerActive, trigger: "onError"},
                            onDisabled: {type: "trigger", active: this._onDisabledTriggerActive, trigger: "onDisabled"},
                            Load: {
                                type: "bridgecall",
                                interfaceObject: "AR.i.imageTrackerInterface",
                                functionName: "startLoading"
                            },
                            "loaded (artificial property)": this._loaded
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId), AR.ADE.instance.autoLoadResources && AR.i.imageTrackerInterface.startLoading(a)
        }, startLoading: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b._loaded || b.loading || (b.loading = !0, window.setTimeout(function () {
                AR.i.imageTrackerInterface.simulateLoad({objectId: a.objectId})
            }, 5e3 * Math.random()))
        }, simulateLoad: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId);
            b._loaded = !0, null != c.onTargetsLoaded && c.onTargetsLoaded(), AR.ADE.instance.alertModification(a.objectId)
        }
    }, AR.i.objectTrackableInterface = {
        setExtendedTarget: function (a) {
            AR.i.getBridgeObject(a.objectId)._extendedTarget = a.extendedTarget, AR.i.getBridgeObject(a.objectId)._extendedTrackingActive = !1, AR.ADE.instance.alertModification(a.objectId)
        }, setOnExtendedTrackingQualityChangedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onExtendedTrackingQualityChangedTriggerActive = a.onExtendedTrackingQualityChangedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, stopExtendedTracking: function (a) {
            AR.i.getBridgeObject(a.objectId)._extendedTrackingActive = !1, AR.ADE.instance.alertModification(a.objectId)
        }, setOnObjectRecognizedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onObjectRecognizedTriggerActive = a.onObjectRecognizedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnObjectLostTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onObjectLostTriggerActive = a.onObjectLostTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, createObjectTrackable: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _trackerId: a.trackerId,
                _targetName: a.targetName,
                _enabled: a.enabled,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _camDrawableIds: a.camDrawableIds,
                _renderingOrder: a.renderingOrder,
                _snapToScreenEnabled: a.snapToScreenEnabled,
                _screenSnapDelay: a.screenSnapDelay,
                _snapToScreenEnabledOnExitFieldOfVision: a.snapToScreenEnabledOnExitFieldOfVision,
                _snapContainerId: a.snapContainerId,
                _snapPositionRight: a.snapPositionRight,
                _snapPositionTop: a.snapPositionTop,
                _snapPositionLeft: a.snapPositionLeft,
                _snapPositionBottom: a.snapPositionBottom,
                _onSnappedToScreenTriggerActive: a.onSnappedToScreenTriggerActive,
                _onDelayedSnapInterruptionTriggerActive: a.onDelayedSnapInterruptionTriggerActive,
                _onObjectRecognizedTriggerActive: a.onObjectRecognizedTriggerActive,
                _onObjectLostTriggerActive: a.onObjectLostTriggerActive,
                _enableExtendedTracking: a.enableExtendedTracking,
                _extendedTarget: a.extendedTarget,
                _onExtendedTrackingQualityChangedTriggerActive: a.onExtendedTrackingQualityChangedTriggerActive,
                _visible: !1,
                explain: function () {
                    return {
                        type: "ObjectTrackable", properties: {
                            tracker: {type: "id", value: this._trackerId},
                            enabled: this._enabled,
                            targetName: this._targetName,
                            onClick: {type: "trigger", active: this._onClickTriggerActive, trigger: "onClick"},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            },
                            onExtendedTrackingQualityChanged: {
                                type: "trigger",
                                active: this._onExtendedTrackingQualityChangedTriggerActive,
                                trigger: "onExtendedTrackingQualityChanged"
                            },
                            onObjectRecognized: {
                                type: "trigger",
                                active: this._onObjectRecognizedTriggerActive,
                                trigger: "onObjectRecognized"
                            },
                            onObjectLost: {
                                type: "trigger",
                                active: this._onObjectLostTriggerActive,
                                trigger: "onObjectLost"
                            },
                            onSnappedToScreen: {
                                type: "trigger",
                                active: this._onSnappedToScreenTriggerActive,
                                trigger: "onSnappedToScreen"
                            },
                            onDelayedSnapInterruption: {
                                type: "trigger",
                                active: this._onDelayedSnapInterruptionTriggerActive,
                                trigger: "onDelayedSnapInterruption"
                            },
                            "drawables.cam": {type: "ids", value: this._camDrawableIds},
                            renderingOrder: this._renderingOrder,
                            snapToScreenEnabled: this._snapToScreenEnabled,
                            screenSnapDelay: this._screenSnapDelay,
                            snapToScreenEnabledOnExitFieldOfVision: this._snapToScreenEnabledOnExitFieldOfVision,
                            snapContainerId: this._snapContainerId,
                            snapPositionRight: this._snapPositionRight,
                            snapPositionTop: this._snapPositionTop,
                            snapPositionLeft: this._snapPositionLeft,
                            snapPositionBottom: this._snapPositionBottom,
                            distanceToTargetChangedThreshold: this._distanceToTargetChangedThreshold,
                            enableExtendedTracking: this._enableExtendedTracking,
                            extendedTarget: this._extendedTarget,
                            "extended tracking active (artificial property)": this._extendedTrackingActive,
                            "visible (artificial property)": this._visible,
                            "Toggle Visibility": {
                                type: "bridgecall",
                                interfaceObject: "AR.i.arObjectInterface",
                                functionName: "toggleVisibility"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId)
        }
    }, AR.i.occluderInterface = {
        setOnLoadedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onLoadedTriggerActive = a.onLoadedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnErrorTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onErrorTriggerActive = a.onErrorTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, setOnInitializedTriggerActive: function (a) {
            AR.i.getBridgeObject(a.objectId)._onInitializedTriggerActive = a.onInitializedTriggerActive, AR.ADE.instance.alertModification(a.objectId)
        }, isLoaded: function (a) {
            return AR.i.getBridgeObject(a.objectId)._loaded
        }, isInitialized: function (a) {
            return AR.i.getBridgeObject(a.objectId)._initialized
        }, createOccluder: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _uri: a.uri,
                _onLoadedTriggerActive: a.onLoadedTriggerActive,
                _onErrorTriggerActive: a.onErrorTriggerActive,
                _loaded: !1,
                _initialized: !1,
                loading: !1,
                _enabled: a.enabled,
                _mirrored: a.mirrored,
                _rotatesToCamera: a.rotatesToCamera,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _globalRotationX: a.globalRotationX,
                _globalRotationY: a.globalRotationY,
                _globalRotationZ: a.globalRotationZ,
                _globalTranslateX: a.globalTranslateX,
                _globalTranslateY: a.globalTranslateY,
                _globalTranslateZ: a.globalTranslateZ,
                _rotationX: a.rotationX,
                _rotationY: a.rotationY,
                _rotationZ: a.rotationZ,
                _translateX: a.translateX,
                _translateY: a.translateY,
                _translateZ: a.translateZ,
                _scaleX: a.scaleX,
                _scaleY: a.scaleY,
                _scaleZ: a.scaleZ,
                explain: function () {
                    return {
                        type: "Occluder", properties: {
                            url: {type: "uri", value: this._url},
                            onLoaded: {type: "trigger", active: this._onLoadedTriggerActive, trigger: "onLoaded"},
                            onError: {type: "trigger", active: this._onErrorTriggerActive, trigger: "onError"},
                            onInitialized: {
                                type: "trigger",
                                active: this._onInitializedTriggerActive,
                                trigger: "onInitialized"
                            },
                            Load: {
                                type: "bridgecall",
                                interfaceObject: "AR.i.modelInterface",
                                functionName: "startLoading"
                            },
                            "loaded (artificial property)": this._loaded,
                            enabled: this._enabled,
                            mirrored: this._mirrored,
                            rotatesToCamera: this._rotatesToCamera,
                            "rotate.global.x": this._globalRotationX,
                            "rotate.global.y": this._globalRotationY,
                            "rotate.global.z": this._globalRotationZ,
                            "translate.global.x": this._globalTranslateX,
                            "translate.global.y": this._globalTranslateY,
                            "translate.global.z": this._globalTranslateZ,
                            "rotate.x": this._rotationX,
                            "rotate.y": this._rotationY,
                            "rotate.z": this._rotationZ,
                            "translate.x": this._translateX,
                            "translate.y": this._translateY,
                            "translate.z": this._translateZ,
                            "scale.x": this._scaleX,
                            "scale.y": this._scaleY,
                            "scale.z": this._scaleZ,
                            opacity: this._opacity,
                            zOrder: this._zOrder,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.toName(this._horizontalAnchor),
                            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.toName(this._verticalAnchor),
                            "rotate.roll": this._globalRotationZ,
                            "rotate.tilt": this._globalRotationX,
                            "rotate.heading": this._globalRotationX,
                            onClick: {type: "custom_Drawables_Click_Trigger", active: this._onClickTriggerActive},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId), AR.ADE.instance.autoLoadResources && AR.i.modelInterface.startLoading(a)
        }, createOccluderBox: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _width: a.width,
                _height: a.height,
                _depth: a.depth,
                _enabled: a.enabled,
                _mirrored: a.mirrored,
                _rotatesToCamera: a.rotatesToCamera,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _globalRotationX: a.globalRotationX,
                _globalRotationY: a.globalRotationY,
                _globalRotationZ: a.globalRotationZ,
                _globalTranslateX: a.globalTranslateX,
                _globalTranslateY: a.globalTranslateY,
                _globalTranslateZ: a.globalTranslateZ,
                _rotationX: a.rotationX,
                _rotationY: a.rotationY,
                _rotationZ: a.rotationZ,
                _translateX: a.translateX,
                _translateY: a.translateY,
                _translateZ: a.translateZ,
                _scaleX: a.scaleX,
                _scaleY: a.scaleY,
                _scaleZ: a.scaleZ,
                explain: function () {
                    return {
                        type: "OccluderBox", properties: {
                            width: this._width,
                            height: this._height,
                            depth: this._depth,
                            enabled: this._enabled,
                            mirrored: this._mirrored,
                            rotatesToCamera: this._rotatesToCamera,
                            "rotate.global.x": this._globalRotationX,
                            "rotate.global.y": this._globalRotationY,
                            "rotate.global.z": this._globalRotationZ,
                            "translate.global.x": this._globalTranslateX,
                            "translate.global.y": this._globalTranslateY,
                            "translate.global.z": this._globalTranslateZ,
                            "rotate.x": this._rotationX,
                            "rotate.y": this._rotationY,
                            "rotate.z": this._rotationZ,
                            "translate.x": this._translateX,
                            "translate.y": this._translateY,
                            "translate.z": this._translateZ,
                            "scale.x": this._scaleX,
                            "scale.y": this._scaleY,
                            "scale.z": this._scaleZ,
                            opacity: this._opacity,
                            zOrder: this._zOrder,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.toName(this._horizontalAnchor),
                            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.toName(this._verticalAnchor),
                            "rotate.roll": this._globalRotationZ,
                            "rotate.tilt": this._globalRotationX,
                            "rotate.heading": this._globalRotationX,
                            onClick: {type: "custom_Drawables_Click_Trigger", active: this._onClickTriggerActive},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId), AR.ADE.instance.autoLoadResources && AR.i.modelInterface.startLoading(a)
        }, createOccluderCylinder: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _radius: a.radius,
                _slices: a.slices,
                _height: a.height,
                _enabled: a.enabled,
                _mirrored: a.mirrored,
                _rotatesToCamera: a.rotatesToCamera,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _globalRotationX: a.globalRotationX,
                _globalRotationY: a.globalRotationY,
                _globalRotationZ: a.globalRotationZ,
                _globalTranslateX: a.globalTranslateX,
                _globalTranslateY: a.globalTranslateY,
                _globalTranslateZ: a.globalTranslateZ,
                _rotationX: a.rotationX,
                _rotationY: a.rotationY,
                _rotationZ: a.rotationZ,
                _translateX: a.translateX,
                _translateY: a.translateY,
                _translateZ: a.translateZ,
                _scaleX: a.scaleX,
                _scaleY: a.scaleY,
                _scaleZ: a.scaleZ,
                explain: function () {
                    return {
                        type: "OccluderCylinder", properties: {
                            radius: this._radius,
                            slices: this._slices,
                            height: this._height,
                            enabled: this._enabled,
                            mirrored: this._mirrored,
                            rotatesToCamera: this._rotatesToCamera,
                            "rotate.global.x": this._globalRotationX,
                            "rotate.global.y": this._globalRotationY,
                            "rotate.global.z": this._globalRotationZ,
                            "translate.global.x": this._globalTranslateX,
                            "translate.global.y": this._globalTranslateY,
                            "translate.global.z": this._globalTranslateZ,
                            "rotate.x": this._rotationX,
                            "rotate.y": this._rotationY,
                            "rotate.z": this._rotationZ,
                            "translate.x": this._translateX,
                            "translate.y": this._translateY,
                            "translate.z": this._translateZ,
                            "scale.x": this._scaleX,
                            "scale.y": this._scaleY,
                            "scale.z": this._scaleZ,
                            opacity: this._opacity,
                            zOrder: this._zOrder,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.toName(this._horizontalAnchor),
                            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.toName(this._verticalAnchor),
                            "rotate.roll": this._globalRotationZ,
                            "rotate.tilt": this._globalRotationX,
                            "rotate.heading": this._globalRotationX,
                            onClick: {type: "custom_Drawables_Click_Trigger", active: this._onClickTriggerActive},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId), AR.ADE.instance.autoLoadResources && AR.i.modelInterface.startLoading(a)
        }, createOccluderSphere: function (a) {
            AR.i.registerBridgeObject({
                _id: a.objectId,
                _radius: a.radius,
                _slices: a.slices,
                _stacks: a.stacks,
                _enabled: a.enabled,
                _mirrored: a.mirrored,
                _rotatesToCamera: a.rotatesToCamera,
                _onClickTriggerActive: a.onClickTriggerActive,
                _onDragBeganTriggerActive: a.onDragBeganTriggerActive,
                _onDragChangedTriggerActive: a.onDragChangedTriggerActive,
                _onDragEndedTriggerActive: a.onDragEndedTriggerActive,
                _onPanBeganTriggerActive: a.onPanBeganTriggerActive,
                _onPanChangedTriggerActive: a.onPanChangedTriggerActive,
                _onPanEndedTriggerActive: a.onPanEndedTriggerActive,
                _onRotationBeganTriggerActive: a.onRotationBeganTriggerActive,
                _onRotationChangedTriggerActive: a.onRotationChangedTriggerActive,
                _onRotationEndedTriggerActive: a.onRotationEndedTriggerActive,
                _onScaleBeganTriggerActive: a.onScaleBeganTriggerActive,
                _onScaleChangedTriggerActive: a.onScaleChangedTriggerActive,
                _onScaleEndedTriggerActive: a.onScaleEndedTriggerActive,
                _globalRotationX: a.globalRotationX,
                _globalRotationY: a.globalRotationY,
                _globalRotationZ: a.globalRotationZ,
                _globalTranslateX: a.globalTranslateX,
                _globalTranslateY: a.globalTranslateY,
                _globalTranslateZ: a.globalTranslateZ,
                _rotationX: a.rotationX,
                _rotationY: a.rotationY,
                _rotationZ: a.rotationZ,
                _translateX: a.translateX,
                _translateY: a.translateY,
                _translateZ: a.translateZ,
                _scaleX: a.scaleX,
                _scaleY: a.scaleY,
                _scaleZ: a.scaleZ,
                explain: function () {
                    return {
                        type: "OccluderSphere", properties: {
                            radius: this._radius,
                            slices: this._slices,
                            stacks: this._stacks,
                            enabled: this._enabled,
                            mirrored: this._mirrored,
                            rotatesToCamera: this._rotatesToCamera,
                            "rotate.global.x": this._globalRotationX,
                            "rotate.global.y": this._globalRotationY,
                            "rotate.global.z": this._globalRotationZ,
                            "translate.global.x": this._globalTranslateX,
                            "translate.global.y": this._globalTranslateY,
                            "translate.global.z": this._globalTranslateZ,
                            "rotate.x": this._rotationX,
                            "rotate.y": this._rotationY,
                            "rotate.z": this._rotationZ,
                            "translate.x": this._translateX,
                            "translate.y": this._translateY,
                            "translate.z": this._translateZ,
                            "scale.x": this._scaleX,
                            "scale.y": this._scaleY,
                            "scale.z": this._scaleZ,
                            opacity: this._opacity,
                            zOrder: this._zOrder,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.toName(this._horizontalAnchor),
                            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.toName(this._verticalAnchor),
                            "rotate.roll": this._globalRotationZ,
                            "rotate.tilt": this._globalRotationX,
                            "rotate.heading": this._globalRotationX,
                            onClick: {type: "custom_Drawables_Click_Trigger", active: this._onClickTriggerActive},
                            onDragBegan: {
                                type: "trigger",
                                active: this._onDragBeganTriggerActive,
                                trigger: "onDragBegan"
                            },
                            onDragChanged: {
                                type: "trigger",
                                active: this._onDragChangedTriggerActive,
                                trigger: "onDragChanged"
                            },
                            onDragEnded: {
                                type: "trigger",
                                active: this._onDragEndedTriggerActive,
                                trigger: "onDragEnded"
                            },
                            onPanBegan: {type: "trigger", active: this._onPanBeganTriggerActive, trigger: "onPanBegan"},
                            onPanChanged: {
                                type: "trigger",
                                active: this._onPanChangedTriggerActive,
                                trigger: "onPanChanged"
                            },
                            onPanEnded: {type: "trigger", active: this._onPanEndedTriggerActive, trigger: "onPanEnded"},
                            onRotationBegan: {
                                type: "trigger",
                                active: this._onRotationBeganTriggerActive,
                                trigger: "onRotationBegan"
                            },
                            onRotationChanged: {
                                type: "trigger",
                                active: this._onRotationChangedTriggerActive,
                                trigger: "onRotationChanged"
                            },
                            onRotationEnded: {
                                type: "trigger",
                                active: this._onRotationEndedTriggerActive,
                                trigger: "onRotationEnded"
                            },
                            onScaleBegan: {
                                type: "trigger",
                                active: this._onScaleBeganTriggerActive,
                                trigger: "onScaleBegan"
                            },
                            onScaleChanged: {
                                type: "trigger",
                                active: this._onScaleChangedTriggerActive,
                                trigger: "onScaleChanged"
                            },
                            onScaleEnded: {
                                type: "trigger",
                                active: this._onScaleEndedTriggerActive,
                                trigger: "onScaleEnded"
                            }
                        }
                    }
                }
            }), AR.ADE.instance.alertCreation(a.objectId), AR.ADE.instance.autoLoadResources && AR.i.modelInterface.startLoading(a)
        }, startLoading: function (a) {
            var b = AR.i.getBridgeObject(a.objectId);
            b._loaded || b.loading || (b.loading = !0, window.setTimeout(function () {
                AR.i.modelInterface.simulateLoad({objectId: a.objectId})
            }, 5e3 * Math.random()))
        }, simulateLoad: function (a) {
            var b = AR.i.getBridgeObject(a.objectId), c = AR.om.getExistingObjectForID(a.objectId);
            b._loaded = !0, b._initialized = !0, null != c.onLoaded && c.onLoaded(), null != c.onInitialized && c.onInitialized(), AR.ADE.instance.alertModification(a.objectId)
        }
    }
}