"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/scala/Scala.g4 by ANTLR 4.7.3-SNAPSHOT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ATN_1 = require("antlr4ts/atn/ATN");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var ScalaParser = /** @class */ (function (_super) {
    __extends(ScalaParser, _super);
    function ScalaParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(ScalaParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(ScalaParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return ScalaParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScalaParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Scala.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScalaParser.prototype, "ruleNames", {
        // @Override
        get: function () { return ScalaParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScalaParser.prototype, "serializedATN", {
        // @Override
        get: function () { return ScalaParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    ScalaParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ScalaParser.RULE_literal);
        var _la;
        try {
            this.state = 219;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 207;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.T__0) {
                            {
                                this.state = 206;
                                this.match(ScalaParser.T__0);
                            }
                        }
                        this.state = 209;
                        this.match(ScalaParser.IntegerLiteral);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 211;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.T__0) {
                            {
                                this.state = 210;
                                this.match(ScalaParser.T__0);
                            }
                        }
                        this.state = 213;
                        this.match(ScalaParser.FloatingPointLiteral);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 214;
                        this.match(ScalaParser.BooleanLiteral);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 215;
                        this.match(ScalaParser.CharacterLiteral);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 216;
                        this.match(ScalaParser.StringLiteral);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 217;
                        this.match(ScalaParser.SymbolLiteral);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 218;
                        this.match(ScalaParser.T__1);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.qualId = function () {
        var _localctx = new QualIdContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ScalaParser.RULE_qualId);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 221;
                this.match(ScalaParser.Id);
                this.state = 226;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__2) {
                    {
                        {
                            this.state = 222;
                            this.match(ScalaParser.T__2);
                            this.state = 223;
                            this.match(ScalaParser.Id);
                        }
                    }
                    this.state = 228;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.ids = function () {
        var _localctx = new IdsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ScalaParser.RULE_ids);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.match(ScalaParser.Id);
                this.state = 234;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__3) {
                    {
                        {
                            this.state = 230;
                            this.match(ScalaParser.T__3);
                            this.state = 231;
                            this.match(ScalaParser.Id);
                        }
                    }
                    this.state = 236;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.stableId = function () {
        var _localctx = new StableIdContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ScalaParser.RULE_stableId);
        var _la;
        try {
            this.state = 257;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 243;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                            case 1:
                                {
                                    this.state = 237;
                                    this.match(ScalaParser.Id);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 240;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === ScalaParser.Id) {
                                        {
                                            this.state = 238;
                                            this.match(ScalaParser.Id);
                                            this.state = 239;
                                            this.match(ScalaParser.T__2);
                                        }
                                    }
                                    this.state = 242;
                                    this.match(ScalaParser.T__4);
                                }
                                break;
                        }
                        this.state = 245;
                        this.match(ScalaParser.T__2);
                        this.state = 246;
                        this.match(ScalaParser.Id);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 249;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.Id) {
                            {
                                this.state = 247;
                                this.match(ScalaParser.Id);
                                this.state = 248;
                                this.match(ScalaParser.T__2);
                            }
                        }
                        this.state = 251;
                        this.match(ScalaParser.T__5);
                        this.state = 253;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.T__6) {
                            {
                                this.state = 252;
                                this.classQualifier();
                            }
                        }
                        this.state = 255;
                        this.match(ScalaParser.T__2);
                        this.state = 256;
                        this.match(ScalaParser.Id);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.classQualifier = function () {
        var _localctx = new ClassQualifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ScalaParser.RULE_classQualifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                this.match(ScalaParser.T__6);
                this.state = 260;
                this.match(ScalaParser.Id);
                this.state = 261;
                this.match(ScalaParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.type_ = function () {
        var _localctx = new Type_Context(this._ctx, this.state);
        this.enterRule(_localctx, 10, ScalaParser.RULE_type_);
        var _la;
        try {
            this.state = 271;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 263;
                        this.functionArgTypes();
                        this.state = 264;
                        this.match(ScalaParser.T__8);
                        this.state = 265;
                        this.type_();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 267;
                        this.infixType();
                        this.state = 269;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.T__11) {
                            {
                                this.state = 268;
                                this.existentialClause();
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.functionArgTypes = function () {
        var _localctx = new FunctionArgTypesContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, ScalaParser.RULE_functionArgTypes);
        var _la;
        try {
            this.state = 286;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 273;
                        this.infixType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 274;
                        this.match(ScalaParser.T__9);
                        this.state = 283;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScalaParser.T__4) | (1 << ScalaParser.T__5) | (1 << ScalaParser.T__8) | (1 << ScalaParser.T__9) | (1 << ScalaParser.T__12))) !== 0) || _la === ScalaParser.Id) {
                            {
                                this.state = 275;
                                this.paramType();
                                this.state = 280;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === ScalaParser.T__3) {
                                    {
                                        {
                                            this.state = 276;
                                            this.match(ScalaParser.T__3);
                                            this.state = 277;
                                            this.paramType();
                                        }
                                    }
                                    this.state = 282;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 285;
                        this.match(ScalaParser.T__10);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.existentialClause = function () {
        var _localctx = new ExistentialClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, ScalaParser.RULE_existentialClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 288;
                this.match(ScalaParser.T__11);
                this.state = 289;
                this.match(ScalaParser.T__12);
                this.state = 290;
                this.existentialDcl();
                this.state = 295;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.Sep) {
                    {
                        {
                            this.state = 291;
                            this.match(ScalaParser.Sep);
                            this.state = 292;
                            this.existentialDcl();
                        }
                    }
                    this.state = 297;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 298;
                this.match(ScalaParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.existentialDcl = function () {
        var _localctx = new ExistentialDclContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ScalaParser.RULE_existentialDcl);
        try {
            this.state = 304;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ScalaParser.T__14:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 300;
                        this.match(ScalaParser.T__14);
                        this.state = 301;
                        this.typeDcl();
                    }
                    break;
                case ScalaParser.T__15:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 302;
                        this.match(ScalaParser.T__15);
                        this.state = 303;
                        this.valDcl();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.infixType = function () {
        var _localctx = new InfixTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ScalaParser.RULE_infixType);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 306;
                this.compoundType();
                this.state = 311;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 307;
                                this.match(ScalaParser.Id);
                                this.state = 308;
                                this.compoundType();
                            }
                        }
                    }
                    this.state = 313;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.compoundType = function () {
        var _localctx = new CompoundTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, ScalaParser.RULE_compoundType);
        var _la;
        try {
            this.state = 326;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ScalaParser.T__4:
                case ScalaParser.T__5:
                case ScalaParser.T__9:
                case ScalaParser.Id:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 314;
                        this.annotType();
                        this.state = 319;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ScalaParser.T__16) {
                            {
                                {
                                    this.state = 315;
                                    this.match(ScalaParser.T__16);
                                    this.state = 316;
                                    this.annotType();
                                }
                            }
                            this.state = 321;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 323;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                            case 1:
                                {
                                    this.state = 322;
                                    this.refinement();
                                }
                                break;
                        }
                    }
                    break;
                case ScalaParser.T__12:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 325;
                        this.refinement();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.annotType = function () {
        var _localctx = new AnnotTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ScalaParser.RULE_annotType);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 328;
                this.simpleType(0);
                this.state = 332;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 329;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 334;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.simpleType = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new SimpleTypeContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 24;
        this.enterRecursionRule(_localctx, 24, ScalaParser.RULE_simpleType, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 351;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                    case 1:
                        {
                            this.state = 336;
                            this.stableId();
                        }
                        break;
                    case 2:
                        {
                            this.state = 343;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 337;
                                        this.stableId();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 340;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === ScalaParser.Id) {
                                            {
                                                this.state = 338;
                                                this.match(ScalaParser.Id);
                                                this.state = 339;
                                                this.match(ScalaParser.T__2);
                                            }
                                        }
                                        this.state = 342;
                                        this.match(ScalaParser.T__4);
                                    }
                                    break;
                            }
                            this.state = 345;
                            this.match(ScalaParser.T__2);
                            this.state = 346;
                            this.match(ScalaParser.T__14);
                        }
                        break;
                    case 3:
                        {
                            this.state = 347;
                            this.match(ScalaParser.T__9);
                            this.state = 348;
                            this.types();
                            this.state = 349;
                            this.match(ScalaParser.T__10);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 360;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 358;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new SimpleTypeContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, ScalaParser.RULE_simpleType);
                                        this.state = 353;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 354;
                                        this.typeArgs();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new SimpleTypeContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, ScalaParser.RULE_simpleType);
                                        this.state = 355;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 356;
                                        this.match(ScalaParser.T__17);
                                        this.state = 357;
                                        this.match(ScalaParser.Id);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 362;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.typeArgs = function () {
        var _localctx = new TypeArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ScalaParser.RULE_typeArgs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 363;
                this.match(ScalaParser.T__6);
                this.state = 364;
                this.types();
                this.state = 365;
                this.match(ScalaParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.types = function () {
        var _localctx = new TypesContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, ScalaParser.RULE_types);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 367;
                this.type_();
                this.state = 372;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__3) {
                    {
                        {
                            this.state = 368;
                            this.match(ScalaParser.T__3);
                            this.state = 369;
                            this.type_();
                        }
                    }
                    this.state = 374;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.refinement = function () {
        var _localctx = new RefinementContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, ScalaParser.RULE_refinement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 375;
                this.match(ScalaParser.T__12);
                this.state = 376;
                this.refineStat();
                this.state = 381;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.Sep) {
                    {
                        {
                            this.state = 377;
                            this.match(ScalaParser.Sep);
                            this.state = 378;
                            this.refineStat();
                        }
                    }
                    this.state = 383;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 384;
                this.match(ScalaParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.refineStat = function () {
        var _localctx = new RefineStatContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, ScalaParser.RULE_refineStat);
        try {
            this.state = 390;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 386;
                        this.dcl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 387;
                        this.match(ScalaParser.T__14);
                        this.state = 388;
                        this.typeDef();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.typePat = function () {
        var _localctx = new TypePatContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, ScalaParser.RULE_typePat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 392;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.ascription = function () {
        var _localctx = new AscriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, ScalaParser.RULE_ascription);
        var _la;
        try {
            this.state = 405;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 394;
                        this.match(ScalaParser.T__18);
                        this.state = 395;
                        this.infixType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 396;
                        this.match(ScalaParser.T__18);
                        this.state = 398;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 397;
                                    this.annotation();
                                }
                            }
                            this.state = 400;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === ScalaParser.T__43);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 402;
                        this.match(ScalaParser.T__18);
                        this.state = 403;
                        this.match(ScalaParser.T__19);
                        this.state = 404;
                        this.match(ScalaParser.T__20);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.expr = function () {
        var _localctx = new ExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, ScalaParser.RULE_expr);
        var _la;
        try {
            this.state = 418;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 413;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ScalaParser.T__9:
                                {
                                    this.state = 407;
                                    this.bindings();
                                }
                                break;
                            case ScalaParser.T__21:
                            case ScalaParser.Id:
                                {
                                    this.state = 409;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === ScalaParser.T__21) {
                                        {
                                            this.state = 408;
                                            this.match(ScalaParser.T__21);
                                        }
                                    }
                                    this.state = 411;
                                    this.match(ScalaParser.Id);
                                }
                                break;
                            case ScalaParser.T__19:
                                {
                                    this.state = 412;
                                    this.match(ScalaParser.T__19);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 415;
                        this.match(ScalaParser.T__8);
                        this.state = 416;
                        this.expr();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 417;
                        this.expr1();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.expr1 = function () {
        var _localctx = new Expr1Context(this._ctx, this.state);
        this.enterRule(_localctx, 40, ScalaParser.RULE_expr1);
        var _la;
        try {
            this.state = 522;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 420;
                        this.match(ScalaParser.T__22);
                        this.state = 421;
                        this.match(ScalaParser.T__9);
                        this.state = 422;
                        this.expr();
                        this.state = 423;
                        this.match(ScalaParser.T__10);
                        this.state = 424;
                        this.expr();
                        this.state = 430;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                            case 1:
                                {
                                    this.state = 426;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === ScalaParser.Semi) {
                                        {
                                            this.state = 425;
                                            this.match(ScalaParser.Semi);
                                        }
                                    }
                                    this.state = 428;
                                    this.match(ScalaParser.T__23);
                                    this.state = 429;
                                    this.expr();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 432;
                        this.match(ScalaParser.T__24);
                        this.state = 433;
                        this.match(ScalaParser.T__9);
                        this.state = 434;
                        this.expr();
                        this.state = 435;
                        this.match(ScalaParser.T__10);
                        this.state = 436;
                        this.expr();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 438;
                        this.match(ScalaParser.T__25);
                        this.state = 444;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                            case 1:
                                {
                                    this.state = 439;
                                    this.match(ScalaParser.T__12);
                                    this.state = 440;
                                    this.block();
                                    this.state = 441;
                                    this.match(ScalaParser.T__13);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 443;
                                    this.expr();
                                }
                                break;
                        }
                        this.state = 451;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                            case 1:
                                {
                                    this.state = 446;
                                    this.match(ScalaParser.T__26);
                                    this.state = 447;
                                    this.match(ScalaParser.T__12);
                                    this.state = 448;
                                    this.caseClauses();
                                    this.state = 449;
                                    this.match(ScalaParser.T__13);
                                }
                                break;
                        }
                        this.state = 455;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                            case 1:
                                {
                                    this.state = 453;
                                    this.match(ScalaParser.T__27);
                                    this.state = 454;
                                    this.expr();
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 457;
                        this.match(ScalaParser.T__28);
                        this.state = 458;
                        this.expr();
                        this.state = 460;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.Semi) {
                            {
                                this.state = 459;
                                this.match(ScalaParser.Semi);
                            }
                        }
                        this.state = 462;
                        this.match(ScalaParser.T__24);
                        this.state = 463;
                        this.match(ScalaParser.T__9);
                        this.state = 464;
                        this.expr();
                        this.state = 465;
                        this.match(ScalaParser.T__10);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 467;
                        this.match(ScalaParser.T__29);
                        this.state = 476;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ScalaParser.T__9:
                                {
                                    this.state = 468;
                                    this.match(ScalaParser.T__9);
                                    this.state = 469;
                                    this.enumerators();
                                    this.state = 470;
                                    this.match(ScalaParser.T__10);
                                }
                                break;
                            case ScalaParser.T__12:
                                {
                                    this.state = 472;
                                    this.match(ScalaParser.T__12);
                                    this.state = 473;
                                    this.enumerators();
                                    this.state = 474;
                                    this.match(ScalaParser.T__13);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 479;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.T__30) {
                            {
                                this.state = 478;
                                this.match(ScalaParser.T__30);
                            }
                        }
                        this.state = 481;
                        this.expr();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 483;
                        this.match(ScalaParser.T__31);
                        this.state = 484;
                        this.expr();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 485;
                        this.match(ScalaParser.T__32);
                        this.state = 487;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                            case 1:
                                {
                                    this.state = 486;
                                    this.expr();
                                }
                                break;
                        }
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        {
                            this.state = 499;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 489;
                                        this.match(ScalaParser.T__33);
                                        this.state = 492;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 490;
                                                    this.classTemplate();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 491;
                                                    this.templateBody();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 494;
                                        this.blockExpr();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 495;
                                        this.simpleExpr1(0);
                                        this.state = 497;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === ScalaParser.T__19) {
                                            {
                                                this.state = 496;
                                                this.match(ScalaParser.T__19);
                                            }
                                        }
                                    }
                                    break;
                            }
                            this.state = 501;
                            this.match(ScalaParser.T__2);
                        }
                        this.state = 503;
                        this.match(ScalaParser.Id);
                        this.state = 504;
                        this.match(ScalaParser.T__34);
                        this.state = 505;
                        this.expr();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 507;
                        this.simpleExpr1(0);
                        this.state = 508;
                        this.argumentExprs();
                        this.state = 509;
                        this.match(ScalaParser.T__34);
                        this.state = 510;
                        this.expr();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 512;
                        this.postfixExpr();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 513;
                        this.postfixExpr();
                        this.state = 514;
                        this.ascription();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 516;
                        this.postfixExpr();
                        this.state = 517;
                        this.match(ScalaParser.T__35);
                        this.state = 518;
                        this.match(ScalaParser.T__12);
                        this.state = 519;
                        this.caseClauses();
                        this.state = 520;
                        this.match(ScalaParser.T__13);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.postfixExpr = function () {
        var _localctx = new PostfixExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, ScalaParser.RULE_postfixExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 524;
                this.infixExpr(0);
                this.state = 526;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                    case 1:
                        {
                            this.state = 525;
                            this.match(ScalaParser.Id);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.infixExpr = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new InfixExprContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 44;
        this.enterRecursionRule(_localctx, 44, ScalaParser.RULE_infixExpr, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 529;
                    this.prefixExpr();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 536;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new InfixExprContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, ScalaParser.RULE_infixExpr);
                                this.state = 531;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 532;
                                this.match(ScalaParser.Id);
                                this.state = 533;
                                this.infixExpr(2);
                            }
                        }
                    }
                    this.state = 538;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.prefixExpr = function () {
        var _localctx = new PrefixExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, ScalaParser.RULE_prefixExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 540;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                    case 1:
                        {
                            this.state = 539;
                            _la = this._input.LA(1);
                            if (!(_la === ScalaParser.T__0 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (ScalaParser.T__36 - 37)) | (1 << (ScalaParser.T__37 - 37)) | (1 << (ScalaParser.T__38 - 37)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 552;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                    case 1:
                        {
                            this.state = 542;
                            this.match(ScalaParser.T__33);
                            this.state = 545;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 543;
                                        this.classTemplate();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 544;
                                        this.templateBody();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 547;
                            this.blockExpr();
                        }
                        break;
                    case 3:
                        {
                            this.state = 548;
                            this.simpleExpr1(0);
                            this.state = 550;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 549;
                                        this.match(ScalaParser.T__19);
                                    }
                                    break;
                            }
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.simpleExpr1 = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new SimpleExpr1Context(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 48;
        this.enterRecursionRule(_localctx, 48, ScalaParser.RULE_simpleExpr1, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 589;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                    case 1:
                        {
                            this.state = 555;
                            this.literal();
                        }
                        break;
                    case 2:
                        {
                            this.state = 556;
                            this.stableId();
                        }
                        break;
                    case 3:
                        {
                            this.state = 559;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === ScalaParser.Id) {
                                {
                                    this.state = 557;
                                    this.match(ScalaParser.Id);
                                    this.state = 558;
                                    this.match(ScalaParser.T__2);
                                }
                            }
                            this.state = 561;
                            this.match(ScalaParser.T__4);
                        }
                        break;
                    case 4:
                        {
                            this.state = 562;
                            this.match(ScalaParser.T__19);
                        }
                        break;
                    case 5:
                        {
                            this.state = 563;
                            this.match(ScalaParser.T__9);
                            this.state = 565;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScalaParser.T__0) | (1 << ScalaParser.T__1) | (1 << ScalaParser.T__4) | (1 << ScalaParser.T__5) | (1 << ScalaParser.T__9) | (1 << ScalaParser.T__12) | (1 << ScalaParser.T__19) | (1 << ScalaParser.T__21) | (1 << ScalaParser.T__22) | (1 << ScalaParser.T__24) | (1 << ScalaParser.T__25) | (1 << ScalaParser.T__28) | (1 << ScalaParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ScalaParser.T__31 - 32)) | (1 << (ScalaParser.T__32 - 32)) | (1 << (ScalaParser.T__33 - 32)) | (1 << (ScalaParser.T__36 - 32)) | (1 << (ScalaParser.T__37 - 32)) | (1 << (ScalaParser.T__38 - 32)) | (1 << (ScalaParser.Id - 32)) | (1 << (ScalaParser.BooleanLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ScalaParser.CharacterLiteral - 64)) | (1 << (ScalaParser.SymbolLiteral - 64)) | (1 << (ScalaParser.IntegerLiteral - 64)) | (1 << (ScalaParser.StringLiteral - 64)) | (1 << (ScalaParser.FloatingPointLiteral - 64)))) !== 0)) {
                                {
                                    this.state = 564;
                                    this.exprs();
                                }
                            }
                            this.state = 567;
                            this.match(ScalaParser.T__10);
                        }
                        break;
                    case 6:
                        {
                            this.state = 574;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case ScalaParser.T__33:
                                    {
                                        this.state = 568;
                                        this.match(ScalaParser.T__33);
                                        this.state = 571;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 569;
                                                    this.classTemplate();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 570;
                                                    this.templateBody();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                case ScalaParser.T__12:
                                    {
                                        this.state = 573;
                                        this.blockExpr();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 576;
                            this.match(ScalaParser.T__2);
                            this.state = 577;
                            this.match(ScalaParser.Id);
                        }
                        break;
                    case 7:
                        {
                            this.state = 585;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case ScalaParser.T__33:
                                    {
                                        this.state = 579;
                                        this.match(ScalaParser.T__33);
                                        this.state = 582;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 580;
                                                    this.classTemplate();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 581;
                                                    this.templateBody();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                case ScalaParser.T__12:
                                    {
                                        this.state = 584;
                                        this.blockExpr();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 587;
                            this.typeArgs();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 595;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new SimpleExpr1Context(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, ScalaParser.RULE_simpleExpr1);
                                this.state = 591;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 592;
                                this.argumentExprs();
                            }
                        }
                    }
                    this.state = 597;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.exprs = function () {
        var _localctx = new ExprsContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, ScalaParser.RULE_exprs);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 598;
                this.expr();
                this.state = 603;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 599;
                                this.match(ScalaParser.T__3);
                                this.state = 600;
                                this.expr();
                            }
                        }
                    }
                    this.state = 605;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.argumentExprs = function () {
        var _localctx = new ArgumentExprsContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, ScalaParser.RULE_argumentExprs);
        var _la;
        try {
            this.state = 624;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 606;
                        this.match(ScalaParser.T__9);
                        this.state = 608;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScalaParser.T__0) | (1 << ScalaParser.T__1) | (1 << ScalaParser.T__4) | (1 << ScalaParser.T__5) | (1 << ScalaParser.T__9) | (1 << ScalaParser.T__12) | (1 << ScalaParser.T__19) | (1 << ScalaParser.T__21) | (1 << ScalaParser.T__22) | (1 << ScalaParser.T__24) | (1 << ScalaParser.T__25) | (1 << ScalaParser.T__28) | (1 << ScalaParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ScalaParser.T__31 - 32)) | (1 << (ScalaParser.T__32 - 32)) | (1 << (ScalaParser.T__33 - 32)) | (1 << (ScalaParser.T__36 - 32)) | (1 << (ScalaParser.T__37 - 32)) | (1 << (ScalaParser.T__38 - 32)) | (1 << (ScalaParser.Id - 32)) | (1 << (ScalaParser.BooleanLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ScalaParser.CharacterLiteral - 64)) | (1 << (ScalaParser.SymbolLiteral - 64)) | (1 << (ScalaParser.IntegerLiteral - 64)) | (1 << (ScalaParser.StringLiteral - 64)) | (1 << (ScalaParser.FloatingPointLiteral - 64)))) !== 0)) {
                            {
                                this.state = 607;
                                this.exprs();
                            }
                        }
                        this.state = 610;
                        this.match(ScalaParser.T__10);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 611;
                        this.match(ScalaParser.T__9);
                        this.state = 615;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                            case 1:
                                {
                                    this.state = 612;
                                    this.exprs();
                                    this.state = 613;
                                    this.match(ScalaParser.T__3);
                                }
                                break;
                        }
                        this.state = 617;
                        this.postfixExpr();
                        this.state = 618;
                        this.match(ScalaParser.T__18);
                        this.state = 619;
                        this.match(ScalaParser.T__19);
                        this.state = 620;
                        this.match(ScalaParser.T__20);
                        this.state = 621;
                        this.match(ScalaParser.T__10);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 623;
                        this.blockExpr();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.blockExpr = function () {
        var _localctx = new BlockExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, ScalaParser.RULE_blockExpr);
        try {
            this.state = 634;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 626;
                        this.match(ScalaParser.T__12);
                        this.state = 627;
                        this.caseClauses();
                        this.state = 628;
                        this.match(ScalaParser.T__13);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 630;
                        this.match(ScalaParser.T__12);
                        this.state = 631;
                        this.block();
                        this.state = 632;
                        this.match(ScalaParser.T__13);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, ScalaParser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 636;
                this.blockStat();
                this.state = 641;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.Sep) {
                    {
                        {
                            this.state = 637;
                            this.match(ScalaParser.Sep);
                            this.state = 638;
                            this.blockStat();
                        }
                    }
                    this.state = 643;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 645;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScalaParser.T__0) | (1 << ScalaParser.T__1) | (1 << ScalaParser.T__4) | (1 << ScalaParser.T__5) | (1 << ScalaParser.T__9) | (1 << ScalaParser.T__12) | (1 << ScalaParser.T__19) | (1 << ScalaParser.T__21) | (1 << ScalaParser.T__22) | (1 << ScalaParser.T__24) | (1 << ScalaParser.T__25) | (1 << ScalaParser.T__28) | (1 << ScalaParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ScalaParser.T__31 - 32)) | (1 << (ScalaParser.T__32 - 32)) | (1 << (ScalaParser.T__33 - 32)) | (1 << (ScalaParser.T__36 - 32)) | (1 << (ScalaParser.T__37 - 32)) | (1 << (ScalaParser.T__38 - 32)) | (1 << (ScalaParser.Id - 32)) | (1 << (ScalaParser.BooleanLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ScalaParser.CharacterLiteral - 64)) | (1 << (ScalaParser.SymbolLiteral - 64)) | (1 << (ScalaParser.IntegerLiteral - 64)) | (1 << (ScalaParser.StringLiteral - 64)) | (1 << (ScalaParser.FloatingPointLiteral - 64)))) !== 0)) {
                    {
                        this.state = 644;
                        this.resultExpr();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.blockStat = function () {
        var _localctx = new BlockStatContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, ScalaParser.RULE_blockStat);
        var _la;
        try {
            this.state = 673;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 647;
                        this.import_();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 651;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ScalaParser.T__43) {
                            {
                                {
                                    this.state = 648;
                                    this.annotation();
                                }
                            }
                            this.state = 653;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 655;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.T__21 || _la === ScalaParser.T__39) {
                            {
                                this.state = 654;
                                _la = this._input.LA(1);
                                if (!(_la === ScalaParser.T__21 || _la === ScalaParser.T__39)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 657;
                        this.def();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 661;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ScalaParser.T__43) {
                            {
                                {
                                    this.state = 658;
                                    this.annotation();
                                }
                            }
                            this.state = 663;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 667;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (ScalaParser.T__21 - 22)) | (1 << (ScalaParser.T__39 - 22)) | (1 << (ScalaParser.T__49 - 22)) | (1 << (ScalaParser.T__50 - 22)) | (1 << (ScalaParser.T__51 - 22)))) !== 0)) {
                            {
                                {
                                    this.state = 664;
                                    this.localModifier();
                                }
                            }
                            this.state = 669;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 670;
                        this.tmplDef();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 671;
                        this.expr1();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.resultExpr = function () {
        var _localctx = new ResultExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, ScalaParser.RULE_resultExpr);
        var _la;
        try {
            this.state = 691;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 675;
                        this.expr1();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 686;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ScalaParser.T__9:
                                {
                                    this.state = 676;
                                    this.bindings();
                                }
                                break;
                            case ScalaParser.T__19:
                            case ScalaParser.T__21:
                            case ScalaParser.Id:
                                {
                                    this.state = 682;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case ScalaParser.T__21:
                                        case ScalaParser.Id:
                                            {
                                                this.state = 678;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                if (_la === ScalaParser.T__21) {
                                                    {
                                                        this.state = 677;
                                                        this.match(ScalaParser.T__21);
                                                    }
                                                }
                                                this.state = 680;
                                                this.match(ScalaParser.Id);
                                            }
                                            break;
                                        case ScalaParser.T__19:
                                            {
                                                this.state = 681;
                                                this.match(ScalaParser.T__19);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                    this.state = 684;
                                    this.match(ScalaParser.T__18);
                                    this.state = 685;
                                    this.compoundType();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 688;
                        this.match(ScalaParser.T__8);
                        this.state = 689;
                        this.block();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.enumerators = function () {
        var _localctx = new EnumeratorsContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, ScalaParser.RULE_enumerators);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 693;
                this.generator();
                this.state = 698;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.Sep) {
                    {
                        {
                            this.state = 694;
                            this.match(ScalaParser.Sep);
                            this.state = 695;
                            this.generator();
                        }
                    }
                    this.state = 700;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.generator = function () {
        var _localctx = new GeneratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, ScalaParser.RULE_generator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 701;
                this.pattern1();
                this.state = 702;
                this.match(ScalaParser.T__40);
                this.state = 703;
                this.expr();
                this.state = 715;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__22 || _la === ScalaParser.Semi) {
                    {
                        this.state = 713;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
                            case 1:
                                {
                                    this.state = 705;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === ScalaParser.Semi) {
                                        {
                                            this.state = 704;
                                            this.match(ScalaParser.Semi);
                                        }
                                    }
                                    this.state = 707;
                                    this.guard();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 708;
                                    this.match(ScalaParser.Semi);
                                    this.state = 709;
                                    this.pattern1();
                                    this.state = 710;
                                    this.match(ScalaParser.T__34);
                                    this.state = 711;
                                    this.expr();
                                }
                                break;
                        }
                    }
                    this.state = 717;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.caseClauses = function () {
        var _localctx = new CaseClausesContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, ScalaParser.RULE_caseClauses);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 719;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 718;
                            this.caseClause();
                        }
                    }
                    this.state = 721;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ScalaParser.T__41);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.caseClause = function () {
        var _localctx = new CaseClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, ScalaParser.RULE_caseClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 723;
                this.match(ScalaParser.T__41);
                this.state = 724;
                this.pattern();
                this.state = 726;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__22) {
                    {
                        this.state = 725;
                        this.guard();
                    }
                }
                this.state = 728;
                this.match(ScalaParser.T__8);
                this.state = 729;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.guard = function () {
        var _localctx = new GuardContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, ScalaParser.RULE_guard);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 731;
                this.match(ScalaParser.T__22);
                this.state = 732;
                this.postfixExpr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.pattern = function () {
        var _localctx = new PatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, ScalaParser.RULE_pattern);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 734;
                this.pattern1();
                this.state = 739;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__42) {
                    {
                        {
                            this.state = 735;
                            this.match(ScalaParser.T__42);
                            this.state = 736;
                            this.pattern1();
                        }
                    }
                    this.state = 741;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.pattern1 = function () {
        var _localctx = new Pattern1Context(this._ctx, this.state);
        this.enterRule(_localctx, 74, ScalaParser.RULE_pattern1);
        try {
            this.state = 749;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 742;
                        this.match(ScalaParser.Varid);
                        this.state = 743;
                        this.match(ScalaParser.T__18);
                        this.state = 744;
                        this.typePat();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 745;
                        this.match(ScalaParser.T__19);
                        this.state = 746;
                        this.match(ScalaParser.T__18);
                        this.state = 747;
                        this.typePat();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 748;
                        this.pattern2();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.pattern2 = function () {
        var _localctx = new Pattern2Context(this._ctx, this.state);
        this.enterRule(_localctx, 76, ScalaParser.RULE_pattern2);
        var _la;
        try {
            this.state = 757;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 751;
                        this.match(ScalaParser.Varid);
                        this.state = 754;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.T__43) {
                            {
                                this.state = 752;
                                this.match(ScalaParser.T__43);
                                this.state = 753;
                                this.pattern3();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 756;
                        this.pattern3();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.pattern3 = function () {
        var _localctx = new Pattern3Context(this._ctx, this.state);
        this.enterRule(_localctx, 78, ScalaParser.RULE_pattern3);
        var _la;
        try {
            this.state = 768;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 759;
                        this.simplePattern();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 760;
                        this.simplePattern();
                        this.state = 765;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ScalaParser.Id) {
                            {
                                {
                                    this.state = 761;
                                    this.match(ScalaParser.Id);
                                    this.state = 762;
                                    this.simplePattern();
                                }
                            }
                            this.state = 767;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.simplePattern = function () {
        var _localctx = new SimplePatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, ScalaParser.RULE_simplePattern);
        var _la;
        try {
            this.state = 802;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 770;
                        this.match(ScalaParser.T__19);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 771;
                        this.match(ScalaParser.Varid);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 772;
                        this.literal();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 773;
                        this.stableId();
                        this.state = 779;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.T__9) {
                            {
                                this.state = 774;
                                this.match(ScalaParser.T__9);
                                this.state = 776;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScalaParser.T__0) | (1 << ScalaParser.T__1) | (1 << ScalaParser.T__4) | (1 << ScalaParser.T__5) | (1 << ScalaParser.T__9) | (1 << ScalaParser.T__19))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (ScalaParser.Id - 62)) | (1 << (ScalaParser.BooleanLiteral - 62)) | (1 << (ScalaParser.CharacterLiteral - 62)) | (1 << (ScalaParser.SymbolLiteral - 62)) | (1 << (ScalaParser.IntegerLiteral - 62)) | (1 << (ScalaParser.StringLiteral - 62)) | (1 << (ScalaParser.FloatingPointLiteral - 62)) | (1 << (ScalaParser.Varid - 62)))) !== 0)) {
                                    {
                                        this.state = 775;
                                        this.patterns();
                                    }
                                }
                                this.state = 778;
                                this.match(ScalaParser.T__10);
                            }
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 781;
                        this.stableId();
                        this.state = 782;
                        this.match(ScalaParser.T__9);
                        this.state = 787;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                            case 1:
                                {
                                    this.state = 784;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScalaParser.T__0) | (1 << ScalaParser.T__1) | (1 << ScalaParser.T__4) | (1 << ScalaParser.T__5) | (1 << ScalaParser.T__9) | (1 << ScalaParser.T__19))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (ScalaParser.Id - 62)) | (1 << (ScalaParser.BooleanLiteral - 62)) | (1 << (ScalaParser.CharacterLiteral - 62)) | (1 << (ScalaParser.SymbolLiteral - 62)) | (1 << (ScalaParser.IntegerLiteral - 62)) | (1 << (ScalaParser.StringLiteral - 62)) | (1 << (ScalaParser.FloatingPointLiteral - 62)) | (1 << (ScalaParser.Varid - 62)))) !== 0)) {
                                        {
                                            this.state = 783;
                                            this.patterns();
                                        }
                                    }
                                    this.state = 786;
                                    this.match(ScalaParser.T__3);
                                }
                                break;
                        }
                        this.state = 791;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.Varid) {
                            {
                                this.state = 789;
                                this.match(ScalaParser.Varid);
                                this.state = 790;
                                this.match(ScalaParser.T__43);
                            }
                        }
                        this.state = 793;
                        this.match(ScalaParser.T__19);
                        this.state = 794;
                        this.match(ScalaParser.T__20);
                        this.state = 795;
                        this.match(ScalaParser.T__10);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 797;
                        this.match(ScalaParser.T__9);
                        this.state = 799;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScalaParser.T__0) | (1 << ScalaParser.T__1) | (1 << ScalaParser.T__4) | (1 << ScalaParser.T__5) | (1 << ScalaParser.T__9) | (1 << ScalaParser.T__19))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (ScalaParser.Id - 62)) | (1 << (ScalaParser.BooleanLiteral - 62)) | (1 << (ScalaParser.CharacterLiteral - 62)) | (1 << (ScalaParser.SymbolLiteral - 62)) | (1 << (ScalaParser.IntegerLiteral - 62)) | (1 << (ScalaParser.StringLiteral - 62)) | (1 << (ScalaParser.FloatingPointLiteral - 62)) | (1 << (ScalaParser.Varid - 62)))) !== 0)) {
                            {
                                this.state = 798;
                                this.patterns();
                            }
                        }
                        this.state = 801;
                        this.match(ScalaParser.T__10);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.patterns = function () {
        var _localctx = new PatternsContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, ScalaParser.RULE_patterns);
        var _la;
        try {
            var _alt = void 0;
            this.state = 817;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 804;
                        this.pattern();
                        this.state = 809;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 805;
                                        this.match(ScalaParser.T__3);
                                        this.state = 806;
                                        this.pattern();
                                    }
                                }
                            }
                            this.state = 811;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 813;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 812;
                                    this.match(ScalaParser.T__19);
                                }
                            }
                            this.state = 815;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === ScalaParser.T__19);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.typeParamClause = function () {
        var _localctx = new TypeParamClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, ScalaParser.RULE_typeParamClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 819;
                this.match(ScalaParser.T__6);
                this.state = 820;
                this.variantTypeParam();
                this.state = 825;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__3) {
                    {
                        {
                            this.state = 821;
                            this.match(ScalaParser.T__3);
                            this.state = 822;
                            this.variantTypeParam();
                        }
                    }
                    this.state = 827;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 828;
                this.match(ScalaParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.funTypeParamClause = function () {
        var _localctx = new FunTypeParamClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, ScalaParser.RULE_funTypeParamClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 830;
                this.match(ScalaParser.T__6);
                this.state = 831;
                this.typeParam();
                this.state = 836;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__3) {
                    {
                        {
                            this.state = 832;
                            this.match(ScalaParser.T__3);
                            this.state = 833;
                            this.typeParam();
                        }
                    }
                    this.state = 838;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 839;
                this.match(ScalaParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.variantTypeParam = function () {
        var _localctx = new VariantTypeParamContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, ScalaParser.RULE_variantTypeParam);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 842;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__43) {
                    {
                        this.state = 841;
                        this.annotation();
                    }
                }
                this.state = 845;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__0 || _la === ScalaParser.T__36) {
                    {
                        this.state = 844;
                        _la = this._input.LA(1);
                        if (!(_la === ScalaParser.T__0 || _la === ScalaParser.T__36)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 847;
                this.typeParam();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.typeParam = function () {
        var _localctx = new TypeParamContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, ScalaParser.RULE_typeParam);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 849;
                _la = this._input.LA(1);
                if (!(_la === ScalaParser.T__19 || _la === ScalaParser.Id)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 851;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__6) {
                    {
                        this.state = 850;
                        this.typeParamClause();
                    }
                }
                this.state = 855;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__44) {
                    {
                        this.state = 853;
                        this.match(ScalaParser.T__44);
                        this.state = 854;
                        this.type_();
                    }
                }
                this.state = 859;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__45) {
                    {
                        this.state = 857;
                        this.match(ScalaParser.T__45);
                        this.state = 858;
                        this.type_();
                    }
                }
                this.state = 865;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__46) {
                    {
                        {
                            this.state = 861;
                            this.match(ScalaParser.T__46);
                            this.state = 862;
                            this.type_();
                        }
                    }
                    this.state = 867;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 872;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__18) {
                    {
                        {
                            this.state = 868;
                            this.match(ScalaParser.T__18);
                            this.state = 869;
                            this.type_();
                        }
                    }
                    this.state = 874;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.paramClauses = function () {
        var _localctx = new ParamClausesContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, ScalaParser.RULE_paramClauses);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 878;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 875;
                                this.paramClause();
                            }
                        }
                    }
                    this.state = 880;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                }
                this.state = 886;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__9) {
                    {
                        this.state = 881;
                        this.match(ScalaParser.T__9);
                        this.state = 882;
                        this.match(ScalaParser.T__21);
                        this.state = 883;
                        this.params();
                        this.state = 884;
                        this.match(ScalaParser.T__10);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.paramClause = function () {
        var _localctx = new ParamClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, ScalaParser.RULE_paramClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 888;
                this.match(ScalaParser.T__9);
                this.state = 890;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__43 || _la === ScalaParser.Id) {
                    {
                        this.state = 889;
                        this.params();
                    }
                }
                this.state = 892;
                this.match(ScalaParser.T__10);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.params = function () {
        var _localctx = new ParamsContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, ScalaParser.RULE_params);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 894;
                this.param();
                this.state = 899;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__3) {
                    {
                        {
                            this.state = 895;
                            this.match(ScalaParser.T__3);
                            this.state = 896;
                            this.param();
                        }
                    }
                    this.state = 901;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.param = function () {
        var _localctx = new ParamContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, ScalaParser.RULE_param);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 905;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__43) {
                    {
                        {
                            this.state = 902;
                            this.annotation();
                        }
                    }
                    this.state = 907;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 908;
                this.match(ScalaParser.Id);
                this.state = 911;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__18) {
                    {
                        this.state = 909;
                        this.match(ScalaParser.T__18);
                        this.state = 910;
                        this.paramType();
                    }
                }
                this.state = 915;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__34) {
                    {
                        this.state = 913;
                        this.match(ScalaParser.T__34);
                        this.state = 914;
                        this.expr();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.paramType = function () {
        var _localctx = new ParamTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, ScalaParser.RULE_paramType);
        try {
            this.state = 923;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 917;
                        this.type_();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 918;
                        this.match(ScalaParser.T__8);
                        this.state = 919;
                        this.type_();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 920;
                        this.type_();
                        this.state = 921;
                        this.match(ScalaParser.T__20);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.classParamClauses = function () {
        var _localctx = new ClassParamClausesContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, ScalaParser.RULE_classParamClauses);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 928;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 925;
                                this.classParamClause();
                            }
                        }
                    }
                    this.state = 930;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                }
                this.state = 936;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
                    case 1:
                        {
                            this.state = 931;
                            this.match(ScalaParser.T__9);
                            this.state = 932;
                            this.match(ScalaParser.T__21);
                            this.state = 933;
                            this.classParams();
                            this.state = 934;
                            this.match(ScalaParser.T__10);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.classParamClause = function () {
        var _localctx = new ClassParamClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, ScalaParser.RULE_classParamClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 938;
                this.match(ScalaParser.T__9);
                this.state = 940;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__15 || _la === ScalaParser.T__21 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ScalaParser.T__39 - 40)) | (1 << (ScalaParser.T__43 - 40)) | (1 << (ScalaParser.T__47 - 40)) | (1 << (ScalaParser.T__48 - 40)) | (1 << (ScalaParser.T__49 - 40)) | (1 << (ScalaParser.T__50 - 40)) | (1 << (ScalaParser.T__51 - 40)) | (1 << (ScalaParser.T__52 - 40)) | (1 << (ScalaParser.T__53 - 40)) | (1 << (ScalaParser.Id - 40)))) !== 0)) {
                    {
                        this.state = 939;
                        this.classParams();
                    }
                }
                this.state = 942;
                this.match(ScalaParser.T__10);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.classParams = function () {
        var _localctx = new ClassParamsContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, ScalaParser.RULE_classParams);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 944;
                this.classParam();
                this.state = 949;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__3) {
                    {
                        {
                            this.state = 945;
                            this.match(ScalaParser.T__3);
                            this.state = 946;
                            this.classParam();
                        }
                    }
                    this.state = 951;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.classParam = function () {
        var _localctx = new ClassParamContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, ScalaParser.RULE_classParam);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 955;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__43) {
                    {
                        {
                            this.state = 952;
                            this.annotation();
                        }
                    }
                    this.state = 957;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 961;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__21 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ScalaParser.T__39 - 40)) | (1 << (ScalaParser.T__48 - 40)) | (1 << (ScalaParser.T__49 - 40)) | (1 << (ScalaParser.T__50 - 40)) | (1 << (ScalaParser.T__51 - 40)) | (1 << (ScalaParser.T__52 - 40)) | (1 << (ScalaParser.T__53 - 40)))) !== 0)) {
                    {
                        {
                            this.state = 958;
                            this.modifier();
                        }
                    }
                    this.state = 963;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 965;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__15 || _la === ScalaParser.T__47) {
                    {
                        this.state = 964;
                        _la = this._input.LA(1);
                        if (!(_la === ScalaParser.T__15 || _la === ScalaParser.T__47)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 967;
                this.match(ScalaParser.Id);
                this.state = 968;
                this.match(ScalaParser.T__18);
                this.state = 969;
                this.paramType();
                this.state = 972;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__34) {
                    {
                        this.state = 970;
                        this.match(ScalaParser.T__34);
                        this.state = 971;
                        this.expr();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.bindings = function () {
        var _localctx = new BindingsContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, ScalaParser.RULE_bindings);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 974;
                this.match(ScalaParser.T__9);
                this.state = 975;
                this.binding();
                this.state = 980;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__3) {
                    {
                        {
                            this.state = 976;
                            this.match(ScalaParser.T__3);
                            this.state = 977;
                            this.binding();
                        }
                    }
                    this.state = 982;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 983;
                this.match(ScalaParser.T__10);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.binding = function () {
        var _localctx = new BindingContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, ScalaParser.RULE_binding);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 985;
                _la = this._input.LA(1);
                if (!(_la === ScalaParser.T__19 || _la === ScalaParser.Id)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 988;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__18) {
                    {
                        this.state = 986;
                        this.match(ScalaParser.T__18);
                        this.state = 987;
                        this.type_();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.modifier = function () {
        var _localctx = new ModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, ScalaParser.RULE_modifier);
        try {
            this.state = 993;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ScalaParser.T__21:
                case ScalaParser.T__39:
                case ScalaParser.T__49:
                case ScalaParser.T__50:
                case ScalaParser.T__51:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 990;
                        this.localModifier();
                    }
                    break;
                case ScalaParser.T__52:
                case ScalaParser.T__53:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 991;
                        this.accessModifier();
                    }
                    break;
                case ScalaParser.T__48:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 992;
                        this.match(ScalaParser.T__48);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.localModifier = function () {
        var _localctx = new LocalModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, ScalaParser.RULE_localModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 995;
                _la = this._input.LA(1);
                if (!(((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (ScalaParser.T__21 - 22)) | (1 << (ScalaParser.T__39 - 22)) | (1 << (ScalaParser.T__49 - 22)) | (1 << (ScalaParser.T__50 - 22)) | (1 << (ScalaParser.T__51 - 22)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.accessModifier = function () {
        var _localctx = new AccessModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, ScalaParser.RULE_accessModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 997;
                _la = this._input.LA(1);
                if (!(_la === ScalaParser.T__52 || _la === ScalaParser.T__53)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 999;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__6) {
                    {
                        this.state = 998;
                        this.accessQualifier();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.accessQualifier = function () {
        var _localctx = new AccessQualifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, ScalaParser.RULE_accessQualifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1001;
                this.match(ScalaParser.T__6);
                this.state = 1002;
                _la = this._input.LA(1);
                if (!(_la === ScalaParser.T__4 || _la === ScalaParser.Id)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1003;
                this.match(ScalaParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.annotation = function () {
        var _localctx = new AnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, ScalaParser.RULE_annotation);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1005;
                this.match(ScalaParser.T__43);
                this.state = 1006;
                this.simpleType(0);
                this.state = 1010;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1007;
                                this.argumentExprs();
                            }
                        }
                    }
                    this.state = 1012;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.constrAnnotation = function () {
        var _localctx = new ConstrAnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, ScalaParser.RULE_constrAnnotation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1013;
                this.match(ScalaParser.T__43);
                this.state = 1014;
                this.simpleType(0);
                this.state = 1015;
                this.argumentExprs();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.templateBody = function () {
        var _localctx = new TemplateBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, ScalaParser.RULE_templateBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1018;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.NL) {
                    {
                        this.state = 1017;
                        this.match(ScalaParser.NL);
                    }
                }
                this.state = 1020;
                this.match(ScalaParser.T__12);
                this.state = 1022;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                    case 1:
                        {
                            this.state = 1021;
                            this.selfType();
                        }
                        break;
                }
                this.state = 1024;
                this.templateStat();
                this.state = 1029;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.Sep) {
                    {
                        {
                            this.state = 1025;
                            this.match(ScalaParser.Sep);
                            this.state = 1026;
                            this.templateStat();
                        }
                    }
                    this.state = 1031;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1032;
                this.match(ScalaParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.templateStat = function () {
        var _localctx = new TemplateStatContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, ScalaParser.RULE_templateStat);
        var _la;
        try {
            this.state = 1063;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1034;
                        this.import_();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1038;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ScalaParser.T__43) {
                            {
                                {
                                    this.state = 1035;
                                    this.annotation();
                                }
                            }
                            this.state = 1040;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1044;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ScalaParser.T__21 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ScalaParser.T__39 - 40)) | (1 << (ScalaParser.T__48 - 40)) | (1 << (ScalaParser.T__49 - 40)) | (1 << (ScalaParser.T__50 - 40)) | (1 << (ScalaParser.T__51 - 40)) | (1 << (ScalaParser.T__52 - 40)) | (1 << (ScalaParser.T__53 - 40)))) !== 0)) {
                            {
                                {
                                    this.state = 1041;
                                    this.modifier();
                                }
                            }
                            this.state = 1046;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1047;
                        this.def();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1051;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ScalaParser.T__43) {
                            {
                                {
                                    this.state = 1048;
                                    this.annotation();
                                }
                            }
                            this.state = 1053;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1057;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ScalaParser.T__21 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ScalaParser.T__39 - 40)) | (1 << (ScalaParser.T__48 - 40)) | (1 << (ScalaParser.T__49 - 40)) | (1 << (ScalaParser.T__50 - 40)) | (1 << (ScalaParser.T__51 - 40)) | (1 << (ScalaParser.T__52 - 40)) | (1 << (ScalaParser.T__53 - 40)))) !== 0)) {
                            {
                                {
                                    this.state = 1054;
                                    this.modifier();
                                }
                            }
                            this.state = 1059;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1060;
                        this.dcl();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1061;
                        this.expr();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.selfType = function () {
        var _localctx = new SelfTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, ScalaParser.RULE_selfType);
        var _la;
        try {
            this.state = 1076;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ScalaParser.Id:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1065;
                        this.match(ScalaParser.Id);
                        this.state = 1068;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.T__18) {
                            {
                                this.state = 1066;
                                this.match(ScalaParser.T__18);
                                this.state = 1067;
                                this.type_();
                            }
                        }
                        this.state = 1070;
                        this.match(ScalaParser.T__8);
                    }
                    break;
                case ScalaParser.T__4:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1071;
                        this.match(ScalaParser.T__4);
                        this.state = 1072;
                        this.match(ScalaParser.T__18);
                        this.state = 1073;
                        this.type_();
                        this.state = 1074;
                        this.match(ScalaParser.T__8);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.import_ = function () {
        var _localctx = new Import_Context(this._ctx, this.state);
        this.enterRule(_localctx, 132, ScalaParser.RULE_import_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1078;
                this.match(ScalaParser.T__54);
                this.state = 1079;
                this.importExpr();
                this.state = 1084;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__3) {
                    {
                        {
                            this.state = 1080;
                            this.match(ScalaParser.T__3);
                            this.state = 1081;
                            this.importExpr();
                        }
                    }
                    this.state = 1086;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.importExpr = function () {
        var _localctx = new ImportExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, ScalaParser.RULE_importExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1087;
                this.stableId();
                this.state = 1088;
                this.match(ScalaParser.T__2);
                this.state = 1092;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ScalaParser.Id:
                        {
                            this.state = 1089;
                            this.match(ScalaParser.Id);
                        }
                        break;
                    case ScalaParser.T__19:
                        {
                            this.state = 1090;
                            this.match(ScalaParser.T__19);
                        }
                        break;
                    case ScalaParser.T__12:
                        {
                            this.state = 1091;
                            this.importSelectors();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.importSelectors = function () {
        var _localctx = new ImportSelectorsContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, ScalaParser.RULE_importSelectors);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1094;
                this.match(ScalaParser.T__12);
                this.state = 1100;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1095;
                                this.importSelector();
                                this.state = 1096;
                                this.match(ScalaParser.T__3);
                            }
                        }
                    }
                    this.state = 1102;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
                }
                this.state = 1105;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ScalaParser.Id:
                        {
                            this.state = 1103;
                            this.importSelector();
                        }
                        break;
                    case ScalaParser.T__19:
                        {
                            this.state = 1104;
                            this.match(ScalaParser.T__19);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1107;
                this.match(ScalaParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.importSelector = function () {
        var _localctx = new ImportSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, ScalaParser.RULE_importSelector);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1109;
                this.match(ScalaParser.Id);
                this.state = 1114;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                    case 1:
                        {
                            this.state = 1110;
                            this.match(ScalaParser.T__8);
                            this.state = 1111;
                            this.match(ScalaParser.Id);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1112;
                            this.match(ScalaParser.T__8);
                            this.state = 1113;
                            this.match(ScalaParser.T__19);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.dcl = function () {
        var _localctx = new DclContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, ScalaParser.RULE_dcl);
        try {
            this.state = 1124;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ScalaParser.T__15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1116;
                        this.match(ScalaParser.T__15);
                        this.state = 1117;
                        this.valDcl();
                    }
                    break;
                case ScalaParser.T__47:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1118;
                        this.match(ScalaParser.T__47);
                        this.state = 1119;
                        this.varDcl();
                    }
                    break;
                case ScalaParser.T__55:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1120;
                        this.match(ScalaParser.T__55);
                        this.state = 1121;
                        this.funDcl();
                    }
                    break;
                case ScalaParser.T__14:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1122;
                        this.match(ScalaParser.T__14);
                        this.state = 1123;
                        this.typeDcl();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.valDcl = function () {
        var _localctx = new ValDclContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, ScalaParser.RULE_valDcl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1126;
                this.ids();
                this.state = 1127;
                this.match(ScalaParser.T__18);
                this.state = 1128;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.varDcl = function () {
        var _localctx = new VarDclContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, ScalaParser.RULE_varDcl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1130;
                this.ids();
                this.state = 1131;
                this.match(ScalaParser.T__18);
                this.state = 1132;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.funDcl = function () {
        var _localctx = new FunDclContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, ScalaParser.RULE_funDcl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1134;
                this.funSig();
                this.state = 1137;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__18) {
                    {
                        this.state = 1135;
                        this.match(ScalaParser.T__18);
                        this.state = 1136;
                        this.type_();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.funSig = function () {
        var _localctx = new FunSigContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, ScalaParser.RULE_funSig);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1139;
                this.match(ScalaParser.Id);
                this.state = 1141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__6) {
                    {
                        this.state = 1140;
                        this.funTypeParamClause();
                    }
                }
                this.state = 1143;
                this.paramClauses();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.typeDcl = function () {
        var _localctx = new TypeDclContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, ScalaParser.RULE_typeDcl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1145;
                this.match(ScalaParser.Id);
                this.state = 1147;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__6) {
                    {
                        this.state = 1146;
                        this.typeParamClause();
                    }
                }
                this.state = 1151;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__44) {
                    {
                        this.state = 1149;
                        this.match(ScalaParser.T__44);
                        this.state = 1150;
                        this.type_();
                    }
                }
                this.state = 1155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__45) {
                    {
                        this.state = 1153;
                        this.match(ScalaParser.T__45);
                        this.state = 1154;
                        this.type_();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.patVarDef = function () {
        var _localctx = new PatVarDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, ScalaParser.RULE_patVarDef);
        try {
            this.state = 1161;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ScalaParser.T__15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1157;
                        this.match(ScalaParser.T__15);
                        this.state = 1158;
                        this.patDef();
                    }
                    break;
                case ScalaParser.T__47:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1159;
                        this.match(ScalaParser.T__47);
                        this.state = 1160;
                        this.varDef();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.def = function () {
        var _localctx = new DefContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, ScalaParser.RULE_def);
        try {
            this.state = 1169;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ScalaParser.T__15:
                case ScalaParser.T__47:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1163;
                        this.patVarDef();
                    }
                    break;
                case ScalaParser.T__55:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1164;
                        this.match(ScalaParser.T__55);
                        this.state = 1165;
                        this.funDef();
                    }
                    break;
                case ScalaParser.T__14:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1166;
                        this.match(ScalaParser.T__14);
                        this.state = 1167;
                        this.typeDef();
                    }
                    break;
                case ScalaParser.T__41:
                case ScalaParser.T__56:
                case ScalaParser.T__57:
                case ScalaParser.T__58:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1168;
                        this.tmplDef();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.patDef = function () {
        var _localctx = new PatDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, ScalaParser.RULE_patDef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1171;
                this.pattern2();
                this.state = 1176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__3) {
                    {
                        {
                            this.state = 1172;
                            this.match(ScalaParser.T__3);
                            this.state = 1173;
                            this.pattern2();
                        }
                    }
                    this.state = 1178;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1183;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__18) {
                    {
                        {
                            this.state = 1179;
                            this.match(ScalaParser.T__18);
                            this.state = 1180;
                            this.type_();
                        }
                    }
                    this.state = 1185;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1186;
                this.match(ScalaParser.T__34);
                this.state = 1187;
                this.expr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.varDef = function () {
        var _localctx = new VarDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, ScalaParser.RULE_varDef);
        try {
            this.state = 1196;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 155, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1189;
                        this.patDef();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1190;
                        this.ids();
                        this.state = 1191;
                        this.match(ScalaParser.T__18);
                        this.state = 1192;
                        this.type_();
                        this.state = 1193;
                        this.match(ScalaParser.T__34);
                        this.state = 1194;
                        this.match(ScalaParser.T__19);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.funDef = function () {
        var _localctx = new FunDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, ScalaParser.RULE_funDef);
        var _la;
        try {
            this.state = 1219;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1198;
                        this.funSig();
                        this.state = 1201;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.T__18) {
                            {
                                this.state = 1199;
                                this.match(ScalaParser.T__18);
                                this.state = 1200;
                                this.type_();
                            }
                        }
                        this.state = 1203;
                        this.match(ScalaParser.T__34);
                        this.state = 1204;
                        this.expr();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1206;
                        this.funSig();
                        this.state = 1207;
                        this.match(ScalaParser.T__12);
                        this.state = 1208;
                        this.block();
                        this.state = 1209;
                        this.match(ScalaParser.T__13);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1211;
                        this.match(ScalaParser.T__4);
                        this.state = 1212;
                        this.paramClause();
                        this.state = 1213;
                        this.paramClauses();
                        this.state = 1217;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ScalaParser.T__34:
                                {
                                    this.state = 1214;
                                    this.match(ScalaParser.T__34);
                                    this.state = 1215;
                                    this.constrExpr();
                                }
                                break;
                            case ScalaParser.T__12:
                                {
                                    this.state = 1216;
                                    this.constrBlock();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.typeDef = function () {
        var _localctx = new TypeDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, ScalaParser.RULE_typeDef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1221;
                this.match(ScalaParser.Id);
                this.state = 1223;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__6) {
                    {
                        this.state = 1222;
                        this.typeParamClause();
                    }
                }
                this.state = 1225;
                this.match(ScalaParser.T__34);
                this.state = 1226;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.tmplDef = function () {
        var _localctx = new TmplDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, ScalaParser.RULE_tmplDef);
        var _la;
        try {
            this.state = 1240;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 162, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1229;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.T__41) {
                            {
                                this.state = 1228;
                                this.match(ScalaParser.T__41);
                            }
                        }
                        this.state = 1231;
                        this.match(ScalaParser.T__56);
                        this.state = 1232;
                        this.classDef();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1234;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ScalaParser.T__41) {
                            {
                                this.state = 1233;
                                this.match(ScalaParser.T__41);
                            }
                        }
                        this.state = 1236;
                        this.match(ScalaParser.T__57);
                        this.state = 1237;
                        this.objectDef();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1238;
                        this.match(ScalaParser.T__58);
                        this.state = 1239;
                        this.traitDef();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.classDef = function () {
        var _localctx = new ClassDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, ScalaParser.RULE_classDef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1242;
                this.match(ScalaParser.Id);
                this.state = 1244;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__6) {
                    {
                        this.state = 1243;
                        this.typeParamClause();
                    }
                }
                this.state = 1249;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__43) {
                    {
                        {
                            this.state = 1246;
                            this.constrAnnotation();
                        }
                    }
                    this.state = 1251;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1253;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__52 || _la === ScalaParser.T__53) {
                    {
                        this.state = 1252;
                        this.accessModifier();
                    }
                }
                this.state = 1255;
                this.classParamClauses();
                this.state = 1256;
                this.classTemplateOpt();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.traitDef = function () {
        var _localctx = new TraitDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, ScalaParser.RULE_traitDef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1258;
                this.match(ScalaParser.Id);
                this.state = 1260;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__6) {
                    {
                        this.state = 1259;
                        this.typeParamClause();
                    }
                }
                this.state = 1262;
                this.traitTemplateOpt();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.objectDef = function () {
        var _localctx = new ObjectDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, ScalaParser.RULE_objectDef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1264;
                this.match(ScalaParser.Id);
                this.state = 1265;
                this.classTemplateOpt();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.classTemplateOpt = function () {
        var _localctx = new ClassTemplateOptContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, ScalaParser.RULE_classTemplateOpt);
        var _la;
        try {
            this.state = 1275;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 169, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1267;
                        this.match(ScalaParser.T__59);
                        this.state = 1268;
                        this.classTemplate();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1273;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1270;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === ScalaParser.T__59) {
                                        {
                                            this.state = 1269;
                                            this.match(ScalaParser.T__59);
                                        }
                                    }
                                    this.state = 1272;
                                    this.templateBody();
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.traitTemplateOpt = function () {
        var _localctx = new TraitTemplateOptContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, ScalaParser.RULE_traitTemplateOpt);
        var _la;
        try {
            this.state = 1285;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 172, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1277;
                        this.match(ScalaParser.T__59);
                        this.state = 1278;
                        this.traitTemplate();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1283;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1280;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === ScalaParser.T__59) {
                                        {
                                            this.state = 1279;
                                            this.match(ScalaParser.T__59);
                                        }
                                    }
                                    this.state = 1282;
                                    this.templateBody();
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.classTemplate = function () {
        var _localctx = new ClassTemplateContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, ScalaParser.RULE_classTemplate);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1288;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__12) {
                    {
                        this.state = 1287;
                        this.earlyDefs();
                    }
                }
                this.state = 1290;
                this.classParents();
                this.state = 1292;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 174, this._ctx)) {
                    case 1:
                        {
                            this.state = 1291;
                            this.templateBody();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.traitTemplate = function () {
        var _localctx = new TraitTemplateContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, ScalaParser.RULE_traitTemplate);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1295;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__12) {
                    {
                        this.state = 1294;
                        this.earlyDefs();
                    }
                }
                this.state = 1297;
                this.traitParents();
                this.state = 1299;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
                    case 1:
                        {
                            this.state = 1298;
                            this.templateBody();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.classParents = function () {
        var _localctx = new ClassParentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, ScalaParser.RULE_classParents);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1301;
                this.constr();
                this.state = 1306;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1302;
                                this.match(ScalaParser.T__16);
                                this.state = 1303;
                                this.annotType();
                            }
                        }
                    }
                    this.state = 1308;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.traitParents = function () {
        var _localctx = new TraitParentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, ScalaParser.RULE_traitParents);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1309;
                this.annotType();
                this.state = 1314;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__16) {
                    {
                        {
                            this.state = 1310;
                            this.match(ScalaParser.T__16);
                            this.state = 1311;
                            this.annotType();
                        }
                    }
                    this.state = 1316;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.constr = function () {
        var _localctx = new ConstrContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, ScalaParser.RULE_constr);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1317;
                this.annotType();
                this.state = 1321;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1318;
                                this.argumentExprs();
                            }
                        }
                    }
                    this.state = 1323;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.earlyDefs = function () {
        var _localctx = new EarlyDefsContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, ScalaParser.RULE_earlyDefs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1324;
                this.match(ScalaParser.T__12);
                this.state = 1333;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ScalaParser.T__15 || _la === ScalaParser.T__21 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ScalaParser.T__39 - 40)) | (1 << (ScalaParser.T__43 - 40)) | (1 << (ScalaParser.T__47 - 40)) | (1 << (ScalaParser.T__48 - 40)) | (1 << (ScalaParser.T__49 - 40)) | (1 << (ScalaParser.T__50 - 40)) | (1 << (ScalaParser.T__51 - 40)) | (1 << (ScalaParser.T__52 - 40)) | (1 << (ScalaParser.T__53 - 40)))) !== 0)) {
                    {
                        this.state = 1325;
                        this.earlyDef();
                        this.state = 1330;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ScalaParser.Sep) {
                            {
                                {
                                    this.state = 1326;
                                    this.match(ScalaParser.Sep);
                                    this.state = 1327;
                                    this.earlyDef();
                                }
                            }
                            this.state = 1332;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 1335;
                this.match(ScalaParser.T__13);
                this.state = 1336;
                this.match(ScalaParser.T__16);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.earlyDef = function () {
        var _localctx = new EarlyDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, ScalaParser.RULE_earlyDef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1341;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__43) {
                    {
                        {
                            this.state = 1338;
                            this.annotation();
                        }
                    }
                    this.state = 1343;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1347;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.T__21 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ScalaParser.T__39 - 40)) | (1 << (ScalaParser.T__48 - 40)) | (1 << (ScalaParser.T__49 - 40)) | (1 << (ScalaParser.T__50 - 40)) | (1 << (ScalaParser.T__51 - 40)) | (1 << (ScalaParser.T__52 - 40)) | (1 << (ScalaParser.T__53 - 40)))) !== 0)) {
                    {
                        {
                            this.state = 1344;
                            this.modifier();
                        }
                    }
                    this.state = 1349;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1350;
                this.patVarDef();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.constrExpr = function () {
        var _localctx = new ConstrExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, ScalaParser.RULE_constrExpr);
        try {
            this.state = 1354;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ScalaParser.T__4:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1352;
                        this.selfInvocation();
                    }
                    break;
                case ScalaParser.T__12:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1353;
                        this.constrBlock();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.constrBlock = function () {
        var _localctx = new ConstrBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, ScalaParser.RULE_constrBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1356;
                this.match(ScalaParser.T__12);
                this.state = 1357;
                this.selfInvocation();
                this.state = 1362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.Semi) {
                    {
                        {
                            this.state = 1358;
                            this.match(ScalaParser.Semi);
                            this.state = 1359;
                            this.blockStat();
                        }
                    }
                    this.state = 1364;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1365;
                this.match(ScalaParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.selfInvocation = function () {
        var _localctx = new SelfInvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, ScalaParser.RULE_selfInvocation);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1367;
                this.match(ScalaParser.T__4);
                this.state = 1369;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1368;
                                    this.argumentExprs();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1371;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.topStatSeq = function () {
        var _localctx = new TopStatSeqContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, ScalaParser.RULE_topStatSeq);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1373;
                this.topStat();
                this.state = 1378;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ScalaParser.Sep) {
                    {
                        {
                            this.state = 1374;
                            this.match(ScalaParser.Sep);
                            this.state = 1375;
                            this.topStat();
                        }
                    }
                    this.state = 1380;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.topStat = function () {
        var _localctx = new TopStatContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, ScalaParser.RULE_topStat);
        var _la;
        try {
            this.state = 1398;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 190, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1384;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ScalaParser.T__43) {
                            {
                                {
                                    this.state = 1381;
                                    this.annotation();
                                }
                            }
                            this.state = 1386;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1390;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ScalaParser.T__21 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ScalaParser.T__39 - 40)) | (1 << (ScalaParser.T__48 - 40)) | (1 << (ScalaParser.T__49 - 40)) | (1 << (ScalaParser.T__50 - 40)) | (1 << (ScalaParser.T__51 - 40)) | (1 << (ScalaParser.T__52 - 40)) | (1 << (ScalaParser.T__53 - 40)))) !== 0)) {
                            {
                                {
                                    this.state = 1387;
                                    this.modifier();
                                }
                            }
                            this.state = 1392;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1393;
                        this.tmplDef();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1394;
                        this.import_();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1395;
                        this.packaging();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1396;
                        this.packageObject();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.packaging = function () {
        var _localctx = new PackagingContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, ScalaParser.RULE_packaging);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1400;
                this.match(ScalaParser.T__60);
                this.state = 1401;
                this.qualId();
                this.state = 1402;
                this.match(ScalaParser.T__12);
                this.state = 1403;
                this.topStatSeq();
                this.state = 1404;
                this.match(ScalaParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.packageObject = function () {
        var _localctx = new PackageObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, ScalaParser.RULE_packageObject);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1406;
                this.match(ScalaParser.T__60);
                this.state = 1407;
                this.match(ScalaParser.T__57);
                this.state = 1408;
                this.objectDef();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ScalaParser.prototype.compilationUnit = function () {
        var _localctx = new CompilationUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, ScalaParser.RULE_compilationUnit);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1417;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1410;
                                this.match(ScalaParser.T__60);
                                this.state = 1411;
                                this.qualId();
                                this.state = 1413;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 191, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1412;
                                            this.match(ScalaParser.Sep);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 1419;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
                }
                this.state = 1420;
                this.topStatSeq();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    ScalaParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 12:
                return this.simpleType_sempred(_localctx, predIndex);
            case 22:
                return this.infixExpr_sempred(_localctx, predIndex);
            case 24:
                return this.simpleExpr1_sempred(_localctx, predIndex);
        }
        return true;
    };
    ScalaParser.prototype.simpleType_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 5);
            case 1:
                return this.precpred(this._ctx, 4);
        }
        return true;
    };
    ScalaParser.prototype.infixExpr_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    ScalaParser.prototype.simpleExpr1_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    Object.defineProperty(ScalaParser, "_ATN", {
        get: function () {
            if (!ScalaParser.__ATN) {
                ScalaParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ScalaParser._serializedATN));
            }
            return ScalaParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ScalaParser.T__0 = 1;
    ScalaParser.T__1 = 2;
    ScalaParser.T__2 = 3;
    ScalaParser.T__3 = 4;
    ScalaParser.T__4 = 5;
    ScalaParser.T__5 = 6;
    ScalaParser.T__6 = 7;
    ScalaParser.T__7 = 8;
    ScalaParser.T__8 = 9;
    ScalaParser.T__9 = 10;
    ScalaParser.T__10 = 11;
    ScalaParser.T__11 = 12;
    ScalaParser.T__12 = 13;
    ScalaParser.T__13 = 14;
    ScalaParser.T__14 = 15;
    ScalaParser.T__15 = 16;
    ScalaParser.T__16 = 17;
    ScalaParser.T__17 = 18;
    ScalaParser.T__18 = 19;
    ScalaParser.T__19 = 20;
    ScalaParser.T__20 = 21;
    ScalaParser.T__21 = 22;
    ScalaParser.T__22 = 23;
    ScalaParser.T__23 = 24;
    ScalaParser.T__24 = 25;
    ScalaParser.T__25 = 26;
    ScalaParser.T__26 = 27;
    ScalaParser.T__27 = 28;
    ScalaParser.T__28 = 29;
    ScalaParser.T__29 = 30;
    ScalaParser.T__30 = 31;
    ScalaParser.T__31 = 32;
    ScalaParser.T__32 = 33;
    ScalaParser.T__33 = 34;
    ScalaParser.T__34 = 35;
    ScalaParser.T__35 = 36;
    ScalaParser.T__36 = 37;
    ScalaParser.T__37 = 38;
    ScalaParser.T__38 = 39;
    ScalaParser.T__39 = 40;
    ScalaParser.T__40 = 41;
    ScalaParser.T__41 = 42;
    ScalaParser.T__42 = 43;
    ScalaParser.T__43 = 44;
    ScalaParser.T__44 = 45;
    ScalaParser.T__45 = 46;
    ScalaParser.T__46 = 47;
    ScalaParser.T__47 = 48;
    ScalaParser.T__48 = 49;
    ScalaParser.T__49 = 50;
    ScalaParser.T__50 = 51;
    ScalaParser.T__51 = 52;
    ScalaParser.T__52 = 53;
    ScalaParser.T__53 = 54;
    ScalaParser.T__54 = 55;
    ScalaParser.T__55 = 56;
    ScalaParser.T__56 = 57;
    ScalaParser.T__57 = 58;
    ScalaParser.T__58 = 59;
    ScalaParser.T__59 = 60;
    ScalaParser.T__60 = 61;
    ScalaParser.Id = 62;
    ScalaParser.BooleanLiteral = 63;
    ScalaParser.CharacterLiteral = 64;
    ScalaParser.SymbolLiteral = 65;
    ScalaParser.IntegerLiteral = 66;
    ScalaParser.StringLiteral = 67;
    ScalaParser.FloatingPointLiteral = 68;
    ScalaParser.Varid = 69;
    ScalaParser.Paren = 70;
    ScalaParser.Delim = 71;
    ScalaParser.NEWLINE = 72;
    ScalaParser.Sep = 73;
    ScalaParser.Semi = 74;
    ScalaParser.WS = 75;
    ScalaParser.NL = 76;
    ScalaParser.COMMENT = 77;
    ScalaParser.LINE_COMMENT = 78;
    ScalaParser.RULE_literal = 0;
    ScalaParser.RULE_qualId = 1;
    ScalaParser.RULE_ids = 2;
    ScalaParser.RULE_stableId = 3;
    ScalaParser.RULE_classQualifier = 4;
    ScalaParser.RULE_type_ = 5;
    ScalaParser.RULE_functionArgTypes = 6;
    ScalaParser.RULE_existentialClause = 7;
    ScalaParser.RULE_existentialDcl = 8;
    ScalaParser.RULE_infixType = 9;
    ScalaParser.RULE_compoundType = 10;
    ScalaParser.RULE_annotType = 11;
    ScalaParser.RULE_simpleType = 12;
    ScalaParser.RULE_typeArgs = 13;
    ScalaParser.RULE_types = 14;
    ScalaParser.RULE_refinement = 15;
    ScalaParser.RULE_refineStat = 16;
    ScalaParser.RULE_typePat = 17;
    ScalaParser.RULE_ascription = 18;
    ScalaParser.RULE_expr = 19;
    ScalaParser.RULE_expr1 = 20;
    ScalaParser.RULE_postfixExpr = 21;
    ScalaParser.RULE_infixExpr = 22;
    ScalaParser.RULE_prefixExpr = 23;
    ScalaParser.RULE_simpleExpr1 = 24;
    ScalaParser.RULE_exprs = 25;
    ScalaParser.RULE_argumentExprs = 26;
    ScalaParser.RULE_blockExpr = 27;
    ScalaParser.RULE_block = 28;
    ScalaParser.RULE_blockStat = 29;
    ScalaParser.RULE_resultExpr = 30;
    ScalaParser.RULE_enumerators = 31;
    ScalaParser.RULE_generator = 32;
    ScalaParser.RULE_caseClauses = 33;
    ScalaParser.RULE_caseClause = 34;
    ScalaParser.RULE_guard = 35;
    ScalaParser.RULE_pattern = 36;
    ScalaParser.RULE_pattern1 = 37;
    ScalaParser.RULE_pattern2 = 38;
    ScalaParser.RULE_pattern3 = 39;
    ScalaParser.RULE_simplePattern = 40;
    ScalaParser.RULE_patterns = 41;
    ScalaParser.RULE_typeParamClause = 42;
    ScalaParser.RULE_funTypeParamClause = 43;
    ScalaParser.RULE_variantTypeParam = 44;
    ScalaParser.RULE_typeParam = 45;
    ScalaParser.RULE_paramClauses = 46;
    ScalaParser.RULE_paramClause = 47;
    ScalaParser.RULE_params = 48;
    ScalaParser.RULE_param = 49;
    ScalaParser.RULE_paramType = 50;
    ScalaParser.RULE_classParamClauses = 51;
    ScalaParser.RULE_classParamClause = 52;
    ScalaParser.RULE_classParams = 53;
    ScalaParser.RULE_classParam = 54;
    ScalaParser.RULE_bindings = 55;
    ScalaParser.RULE_binding = 56;
    ScalaParser.RULE_modifier = 57;
    ScalaParser.RULE_localModifier = 58;
    ScalaParser.RULE_accessModifier = 59;
    ScalaParser.RULE_accessQualifier = 60;
    ScalaParser.RULE_annotation = 61;
    ScalaParser.RULE_constrAnnotation = 62;
    ScalaParser.RULE_templateBody = 63;
    ScalaParser.RULE_templateStat = 64;
    ScalaParser.RULE_selfType = 65;
    ScalaParser.RULE_import_ = 66;
    ScalaParser.RULE_importExpr = 67;
    ScalaParser.RULE_importSelectors = 68;
    ScalaParser.RULE_importSelector = 69;
    ScalaParser.RULE_dcl = 70;
    ScalaParser.RULE_valDcl = 71;
    ScalaParser.RULE_varDcl = 72;
    ScalaParser.RULE_funDcl = 73;
    ScalaParser.RULE_funSig = 74;
    ScalaParser.RULE_typeDcl = 75;
    ScalaParser.RULE_patVarDef = 76;
    ScalaParser.RULE_def = 77;
    ScalaParser.RULE_patDef = 78;
    ScalaParser.RULE_varDef = 79;
    ScalaParser.RULE_funDef = 80;
    ScalaParser.RULE_typeDef = 81;
    ScalaParser.RULE_tmplDef = 82;
    ScalaParser.RULE_classDef = 83;
    ScalaParser.RULE_traitDef = 84;
    ScalaParser.RULE_objectDef = 85;
    ScalaParser.RULE_classTemplateOpt = 86;
    ScalaParser.RULE_traitTemplateOpt = 87;
    ScalaParser.RULE_classTemplate = 88;
    ScalaParser.RULE_traitTemplate = 89;
    ScalaParser.RULE_classParents = 90;
    ScalaParser.RULE_traitParents = 91;
    ScalaParser.RULE_constr = 92;
    ScalaParser.RULE_earlyDefs = 93;
    ScalaParser.RULE_earlyDef = 94;
    ScalaParser.RULE_constrExpr = 95;
    ScalaParser.RULE_constrBlock = 96;
    ScalaParser.RULE_selfInvocation = 97;
    ScalaParser.RULE_topStatSeq = 98;
    ScalaParser.RULE_topStat = 99;
    ScalaParser.RULE_packaging = 100;
    ScalaParser.RULE_packageObject = 101;
    ScalaParser.RULE_compilationUnit = 102;
    // tslint:disable:no-trailing-whitespace
    ScalaParser.ruleNames = [
        "literal", "qualId", "ids", "stableId", "classQualifier", "type_", "functionArgTypes",
        "existentialClause", "existentialDcl", "infixType", "compoundType", "annotType",
        "simpleType", "typeArgs", "types", "refinement", "refineStat", "typePat",
        "ascription", "expr", "expr1", "postfixExpr", "infixExpr", "prefixExpr",
        "simpleExpr1", "exprs", "argumentExprs", "blockExpr", "block", "blockStat",
        "resultExpr", "enumerators", "generator", "caseClauses", "caseClause",
        "guard", "pattern", "pattern1", "pattern2", "pattern3", "simplePattern",
        "patterns", "typeParamClause", "funTypeParamClause", "variantTypeParam",
        "typeParam", "paramClauses", "paramClause", "params", "param", "paramType",
        "classParamClauses", "classParamClause", "classParams", "classParam",
        "bindings", "binding", "modifier", "localModifier", "accessModifier",
        "accessQualifier", "annotation", "constrAnnotation", "templateBody", "templateStat",
        "selfType", "import_", "importExpr", "importSelectors", "importSelector",
        "dcl", "valDcl", "varDcl", "funDcl", "funSig", "typeDcl", "patVarDef",
        "def", "patDef", "varDef", "funDef", "typeDef", "tmplDef", "classDef",
        "traitDef", "objectDef", "classTemplateOpt", "traitTemplateOpt", "classTemplate",
        "traitTemplate", "classParents", "traitParents", "constr", "earlyDefs",
        "earlyDef", "constrExpr", "constrBlock", "selfInvocation", "topStatSeq",
        "topStat", "packaging", "packageObject", "compilationUnit",
    ];
    ScalaParser._LITERAL_NAMES = [
        undefined, "'-'", "'null'", "'.'", "','", "'this'", "'super'", "'['",
        "']'", "'=>'", "'('", "')'", "'forSome'", "'{'", "'}'", "'type'", "'val'",
        "'with'", "'#'", "':'", "'_'", "'*'", "'implicit'", "'if'", "'else'",
        "'while'", "'try'", "'catch'", "'finally'", "'do'", "'for'", "'yield'",
        "'throw'", "'return'", "'new'", "'='", "'match'", "'+'", "'~'", "'!'",
        "'lazy'", "'<-'", "'case'", "'|'", "'@'", "'>:'", "'<:'", "'<%'", "'var'",
        "'override'", "'abstract'", "'final'", "'sealed'", "'private'", "'protected'",
        "'import'", "'def'", "'class'", "'object'", "'trait'", "'extends'", "'package'",
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "';'", undefined,
        "'\n'",
    ];
    ScalaParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "Id",
        "BooleanLiteral", "CharacterLiteral", "SymbolLiteral", "IntegerLiteral",
        "StringLiteral", "FloatingPointLiteral", "Varid", "Paren", "Delim", "NEWLINE",
        "Sep", "Semi", "WS", "NL", "COMMENT", "LINE_COMMENT",
    ];
    ScalaParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ScalaParser._LITERAL_NAMES, ScalaParser._SYMBOLIC_NAMES, []);
    ScalaParser._serializedATNSegments = 3;
    ScalaParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03P\u0591\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x03" +
        "\x02\x05\x02\xD2\n\x02\x03\x02\x03\x02\x05\x02\xD6\n\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\xDE\n\x02\x03\x03\x03\x03\x03" +
        "\x03\x07\x03\xE3\n\x03\f\x03\x0E\x03\xE6\v\x03\x03\x04\x03\x04\x03\x04" +
        "\x07\x04\xEB\n\x04\f\x04\x0E\x04\xEE\v\x04\x03\x05\x03\x05\x03\x05\x05" +
        "\x05\xF3\n\x05\x03\x05\x05\x05\xF6\n\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x05\x05\xFC\n\x05\x03\x05\x03\x05\x05\x05\u0100\n\x05\x03\x05\x03\x05" +
        "\x05\x05\u0104\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0110\n\x07\x05\x07\u0112\n\x07\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x07\b\u0119\n\b\f\b\x0E\b\u011C\v\b\x05\b\u011E" +
        "\n\b\x03\b\x05\b\u0121\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0128\n" +
        "\t\f\t\x0E\t\u012B\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\n\u0133" +
        "\n\n\x03\v\x03\v\x03\v\x07\v\u0138\n\v\f\v\x0E\v\u013B\v\v\x03\f\x03\f" +
        "\x03\f\x07\f\u0140\n\f\f\f\x0E\f\u0143\v\f\x03\f\x05\f\u0146\n\f\x03\f" +
        "\x05\f\u0149\n\f\x03\r\x03\r\x07\r\u014D\n\r\f\r\x0E\r\u0150\v\r\x03\x0E" +
        "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0157\n\x0E\x03\x0E\x05\x0E\u015A" +
        "\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0162\n" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0169\n\x0E\f\x0E" +
        "\x0E\x0E\u016C\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
        "\x10\x07\x10\u0175\n\x10\f\x10\x0E\x10\u0178\v\x10\x03\x11\x03\x11\x03" +
        "\x11\x03\x11\x07\x11\u017E\n\x11\f\x11\x0E\x11\u0181\v\x11\x03\x11\x03" +
        "\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0189\n\x12\x03\x13\x03\x13" +
        "\x03\x14\x03\x14\x03\x14\x03\x14\x06\x14\u0191\n\x14\r\x14\x0E\x14\u0192" +
        "\x03\x14\x03\x14\x03\x14\x05\x14\u0198\n\x14\x03\x15\x03\x15\x05\x15\u019C" +
        "\n\x15\x03\x15\x03\x15\x05\x15\u01A0\n\x15\x03\x15\x03\x15\x03\x15\x05" +
        "\x15\u01A5\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16" +
        "\u01AD\n\x16\x03\x16\x03\x16\x05\x16\u01B1\n\x16\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
        "\x05\x16\u01BF\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01C6" +
        "\n\x16\x03\x16\x03\x16\x05\x16\u01CA\n\x16\x03\x16\x03\x16\x03\x16\x05" +
        "\x16\u01CF\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01DF" +
        "\n\x16\x03\x16\x05\x16\u01E2\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
        "\x16\x03\x16\x05\x16\u01EA\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01EF" +
        "\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01F4\n\x16\x05\x16\u01F6\n\x16" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x03\x16\x03\x16\x05\x16\u020D\n\x16\x03\x17\x03\x17\x05\x17\u0211" +
        "\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0219\n" +
        "\x18\f\x18\x0E\x18\u021C\v\x18\x03\x19\x05\x19\u021F\n\x19\x03\x19\x03" +
        "\x19\x03\x19\x05\x19\u0224\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0229" +
        "\n\x19\x05\x19\u022B\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05" +
        "\x1A\u0232\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0238\n\x1A\x03" +
        "\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u023E\n\x1A\x03\x1A\x05\x1A\u0241" +
        "\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0249\n" +
        "\x1A\x03\x1A\x05\x1A\u024C\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0250\n\x1A\x03" +
        "\x1A\x03\x1A\x07\x1A\u0254\n\x1A\f\x1A\x0E\x1A\u0257\v\x1A\x03\x1B\x03" +
        "\x1B\x03\x1B\x07\x1B\u025C\n\x1B\f\x1B\x0E\x1B\u025F\v\x1B\x03\x1C\x03" +
        "\x1C\x05\x1C\u0263\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C" +
        "\u026A\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05" +
        "\x1C\u0273\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1D\x05\x1D\u027D\n\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0282\n\x1E" +
        "\f\x1E\x0E\x1E\u0285\v\x1E\x03\x1E\x05\x1E\u0288\n\x1E\x03\x1F\x03\x1F" +
        "\x07\x1F\u028C\n\x1F\f\x1F\x0E\x1F\u028F\v\x1F\x03\x1F\x05\x1F\u0292\n" +
        "\x1F\x03\x1F\x03\x1F\x07\x1F\u0296\n\x1F\f\x1F\x0E\x1F\u0299\v\x1F\x03" +
        "\x1F\x07\x1F\u029C\n\x1F\f\x1F\x0E\x1F\u029F\v\x1F\x03\x1F\x03\x1F\x03" +
        "\x1F\x05\x1F\u02A4\n\x1F\x03 \x03 \x03 \x05 \u02A9\n \x03 \x03 \x05 \u02AD" +
        "\n \x03 \x03 \x05 \u02B1\n \x03 \x03 \x03 \x05 \u02B6\n \x03!\x03!\x03" +
        "!\x07!\u02BB\n!\f!\x0E!\u02BE\v!\x03\"\x03\"\x03\"\x03\"\x05\"\u02C4\n" +
        "\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x07\"\u02CC\n\"\f\"\x0E\"\u02CF" +
        "\v\"\x03#\x06#\u02D2\n#\r#\x0E#\u02D3\x03$\x03$\x03$\x05$\u02D9\n$\x03" +
        "$\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03&\x07&\u02E4\n&\f&\x0E&\u02E7" +
        "\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u02F0\n\'\x03(\x03" +
        "(\x03(\x05(\u02F5\n(\x03(\x05(\u02F8\n(\x03)\x03)\x03)\x03)\x07)\u02FE" +
        "\n)\f)\x0E)\u0301\v)\x05)\u0303\n)\x03*\x03*\x03*\x03*\x03*\x03*\x05*" +
        "\u030B\n*\x03*\x05*\u030E\n*\x03*\x03*\x03*\x05*\u0313\n*\x03*\x05*\u0316" +
        "\n*\x03*\x03*\x05*\u031A\n*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0322\n" +
        "*\x03*\x05*\u0325\n*\x03+\x03+\x03+\x07+\u032A\n+\f+\x0E+\u032D\v+\x03" +
        "+\x06+\u0330\n+\r+\x0E+\u0331\x05+\u0334\n+\x03,\x03,\x03,\x03,\x07,\u033A" +
        "\n,\f,\x0E,\u033D\v,\x03,\x03,\x03-\x03-\x03-\x03-\x07-\u0345\n-\f-\x0E" +
        "-\u0348\v-\x03-\x03-\x03.\x05.\u034D\n.\x03.\x05.\u0350\n.\x03.\x03.\x03" +
        "/\x03/\x05/\u0356\n/\x03/\x03/\x05/\u035A\n/\x03/\x03/\x05/\u035E\n/\x03" +
        "/\x03/\x07/\u0362\n/\f/\x0E/\u0365\v/\x03/\x03/\x07/\u0369\n/\f/\x0E/" +
        "\u036C\v/\x030\x070\u036F\n0\f0\x0E0\u0372\v0\x030\x030\x030\x030\x03" +
        "0\x050\u0379\n0\x031\x031\x051\u037D\n1\x031\x031\x032\x032\x032\x072" +
        "\u0384\n2\f2\x0E2\u0387\v2\x033\x073\u038A\n3\f3\x0E3\u038D\v3\x033\x03" +
        "3\x033\x053\u0392\n3\x033\x033\x053\u0396\n3\x034\x034\x034\x034\x034" +
        "\x034\x054\u039E\n4\x035\x075\u03A1\n5\f5\x0E5\u03A4\v5\x035\x035\x03" +
        "5\x035\x035\x055\u03AB\n5\x036\x036\x056\u03AF\n6\x036\x036\x037\x037" +
        "\x037\x077\u03B6\n7\f7\x0E7\u03B9\v7\x038\x078\u03BC\n8\f8\x0E8\u03BF" +
        "\v8\x038\x078\u03C2\n8\f8\x0E8\u03C5\v8\x038\x058\u03C8\n8\x038\x038\x03" +
        "8\x038\x038\x058\u03CF\n8\x039\x039\x039\x039\x079\u03D5\n9\f9\x0E9\u03D8" +
        "\v9\x039\x039\x03:\x03:\x03:\x05:\u03DF\n:\x03;\x03;\x03;\x05;\u03E4\n" +
        ";\x03<\x03<\x03=\x03=\x05=\u03EA\n=\x03>\x03>\x03>\x03>\x03?\x03?\x03" +
        "?\x07?\u03F3\n?\f?\x0E?\u03F6\v?\x03@\x03@\x03@\x03@\x03A\x05A\u03FD\n" +
        "A\x03A\x03A\x05A\u0401\nA\x03A\x03A\x03A\x07A\u0406\nA\fA\x0EA\u0409\v" +
        "A\x03A\x03A\x03B\x03B\x07B\u040F\nB\fB\x0EB\u0412\vB\x03B\x07B\u0415\n" +
        "B\fB\x0EB\u0418\vB\x03B\x03B\x07B\u041C\nB\fB\x0EB\u041F\vB\x03B\x07B" +
        "\u0422\nB\fB\x0EB\u0425\vB\x03B\x03B\x03B\x05B\u042A\nB\x03C\x03C\x03" +
        "C\x05C\u042F\nC\x03C\x03C\x03C\x03C\x03C\x03C\x05C\u0437\nC\x03D\x03D" +
        "\x03D\x03D\x07D\u043D\nD\fD\x0ED\u0440\vD\x03E\x03E\x03E\x03E\x03E\x05" +
        "E\u0447\nE\x03F\x03F\x03F\x03F\x07F\u044D\nF\fF\x0EF\u0450\vF\x03F\x03" +
        "F\x05F\u0454\nF\x03F\x03F\x03G\x03G\x03G\x03G\x03G\x05G\u045D\nG\x03H" +
        "\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0467\nH\x03I\x03I\x03I\x03I" +
        "\x03J\x03J\x03J\x03J\x03K\x03K\x03K\x05K\u0474\nK\x03L\x03L\x05L\u0478" +
        "\nL\x03L\x03L\x03M\x03M\x05M\u047E\nM\x03M\x03M\x05M\u0482\nM\x03M\x03" +
        "M\x05M\u0486\nM\x03N\x03N\x03N\x03N\x05N\u048C\nN\x03O\x03O\x03O\x03O" +
        "\x03O\x03O\x05O\u0494\nO\x03P\x03P\x03P\x07P\u0499\nP\fP\x0EP\u049C\v" +
        "P\x03P\x03P\x07P\u04A0\nP\fP\x0EP\u04A3\vP\x03P\x03P\x03P\x03Q\x03Q\x03" +
        "Q\x03Q\x03Q\x03Q\x03Q\x05Q\u04AF\nQ\x03R\x03R\x03R\x05R\u04B4\nR\x03R" +
        "\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05" +
        "R\u04C4\nR\x05R\u04C6\nR\x03S\x03S\x05S\u04CA\nS\x03S\x03S\x03S\x03T\x05" +
        "T\u04D0\nT\x03T\x03T\x03T\x05T\u04D5\nT\x03T\x03T\x03T\x03T\x05T\u04DB" +
        "\nT\x03U\x03U\x05U\u04DF\nU\x03U\x07U\u04E2\nU\fU\x0EU\u04E5\vU\x03U\x05" +
        "U\u04E8\nU\x03U\x03U\x03U\x03V\x03V\x05V\u04EF\nV\x03V\x03V\x03W\x03W" +
        "\x03W\x03X\x03X\x03X\x05X\u04F9\nX\x03X\x05X\u04FC\nX\x05X\u04FE\nX\x03" +
        "Y\x03Y\x03Y\x05Y\u0503\nY\x03Y\x05Y\u0506\nY\x05Y\u0508\nY\x03Z\x05Z\u050B" +
        "\nZ\x03Z\x03Z\x05Z\u050F\nZ\x03[\x05[\u0512\n[\x03[\x03[\x05[\u0516\n" +
        "[\x03\\\x03\\\x03\\\x07\\\u051B\n\\\f\\\x0E\\\u051E\v\\\x03]\x03]\x03" +
        "]\x07]\u0523\n]\f]\x0E]\u0526\v]\x03^\x03^\x07^\u052A\n^\f^\x0E^\u052D" +
        "\v^\x03_\x03_\x03_\x03_\x07_\u0533\n_\f_\x0E_\u0536\v_\x05_\u0538\n_\x03" +
        "_\x03_\x03_\x03`\x07`\u053E\n`\f`\x0E`\u0541\v`\x03`\x07`\u0544\n`\f`" +
        "\x0E`\u0547\v`\x03`\x03`\x03a\x03a\x05a\u054D\na\x03b\x03b\x03b\x03b\x07" +
        "b\u0553\nb\fb\x0Eb\u0556\vb\x03b\x03b\x03c\x03c\x06c\u055C\nc\rc\x0Ec" +
        "\u055D\x03d\x03d\x03d\x07d\u0563\nd\fd\x0Ed\u0566\vd\x03e\x07e\u0569\n" +
        "e\fe\x0Ee\u056C\ve\x03e\x07e\u056F\ne\fe\x0Ee\u0572\ve\x03e\x03e\x03e" +
        "\x03e\x03e\x05e\u0579\ne\x03f\x03f\x03f\x03f\x03f\x03f\x03g\x03g\x03g" +
        "\x03g\x03h\x03h\x03h\x05h\u0588\nh\x07h\u058A\nh\fh\x0Eh\u058D\vh\x03" +
        "h\x03h\x03h\x02\x02\x05\x1A.2i\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
        "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
        " \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
        "<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
        "X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
        "t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
        "\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
        "\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
        "\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
        "\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\x02\n" +
        "\x04\x02\x03\x03\')\x04\x02\x18\x18**\x04\x02\x03\x03\'\'\x04\x02\x16" +
        "\x16@@\x04\x02\x12\x1222\x05\x02\x18\x18**46\x03\x0278\x04\x02\x07\x07" +
        "@@\x02\u061C\x02\xDD\x03\x02\x02\x02\x04\xDF\x03\x02\x02\x02\x06\xE7\x03" +
        "\x02\x02\x02\b\u0103\x03\x02\x02\x02\n\u0105\x03\x02\x02\x02\f\u0111\x03" +
        "\x02\x02\x02\x0E\u0120\x03\x02\x02\x02\x10\u0122\x03\x02\x02\x02\x12\u0132" +
        "\x03\x02\x02\x02\x14\u0134\x03\x02\x02\x02\x16\u0148\x03\x02\x02\x02\x18" +
        "\u014A\x03\x02\x02\x02\x1A\u0161\x03\x02\x02\x02\x1C\u016D\x03\x02\x02" +
        "\x02\x1E\u0171\x03\x02\x02\x02 \u0179\x03\x02\x02\x02\"\u0188\x03\x02" +
        "\x02\x02$\u018A\x03\x02\x02\x02&\u0197\x03\x02\x02\x02(\u01A4\x03\x02" +
        "\x02\x02*\u020C\x03\x02\x02\x02,\u020E\x03\x02\x02\x02.\u0212\x03\x02" +
        "\x02\x020\u021E\x03\x02\x02\x022\u024F\x03\x02\x02\x024\u0258\x03\x02" +
        "\x02\x026\u0272\x03\x02\x02\x028\u027C\x03\x02\x02\x02:\u027E\x03\x02" +
        "\x02\x02<\u02A3\x03\x02\x02\x02>\u02B5\x03\x02\x02\x02@\u02B7\x03\x02" +
        "\x02\x02B\u02BF\x03\x02\x02\x02D\u02D1\x03\x02\x02\x02F\u02D5\x03\x02" +
        "\x02\x02H\u02DD\x03\x02\x02\x02J\u02E0\x03\x02\x02\x02L\u02EF\x03\x02" +
        "\x02\x02N\u02F7\x03\x02\x02\x02P\u0302\x03\x02\x02\x02R\u0324\x03\x02" +
        "\x02\x02T\u0333\x03\x02\x02\x02V\u0335\x03\x02\x02\x02X\u0340\x03\x02" +
        "\x02\x02Z\u034C\x03\x02\x02\x02\\\u0353\x03\x02\x02\x02^\u0370\x03\x02" +
        "\x02\x02`\u037A\x03\x02\x02\x02b\u0380\x03\x02\x02\x02d\u038B\x03\x02" +
        "\x02\x02f\u039D\x03\x02\x02\x02h\u03A2\x03\x02\x02\x02j\u03AC\x03\x02" +
        "\x02\x02l\u03B2\x03\x02\x02\x02n\u03BD\x03\x02\x02\x02p\u03D0\x03\x02" +
        "\x02\x02r\u03DB\x03\x02\x02\x02t\u03E3\x03\x02\x02\x02v\u03E5\x03\x02" +
        "\x02\x02x\u03E7\x03\x02\x02\x02z\u03EB\x03\x02\x02\x02|\u03EF\x03\x02" +
        "\x02\x02~\u03F7\x03\x02\x02\x02\x80\u03FC\x03\x02\x02\x02\x82\u0429\x03" +
        "\x02\x02\x02\x84\u0436\x03\x02\x02\x02\x86\u0438\x03\x02\x02\x02\x88\u0441" +
        "\x03\x02\x02\x02\x8A\u0448\x03\x02\x02\x02\x8C\u0457\x03\x02\x02\x02\x8E" +
        "\u0466\x03\x02\x02\x02\x90\u0468\x03\x02\x02\x02\x92\u046C\x03\x02\x02" +
        "\x02\x94\u0470\x03\x02\x02\x02\x96\u0475\x03\x02\x02\x02\x98\u047B\x03" +
        "\x02\x02\x02\x9A\u048B\x03\x02\x02\x02\x9C\u0493\x03\x02\x02\x02\x9E\u0495" +
        "\x03\x02\x02\x02\xA0\u04AE\x03\x02\x02\x02\xA2\u04C5\x03\x02\x02\x02\xA4" +
        "\u04C7\x03\x02\x02\x02\xA6\u04DA\x03\x02\x02\x02\xA8\u04DC\x03\x02\x02" +
        "\x02\xAA\u04EC\x03\x02\x02\x02\xAC\u04F2\x03\x02\x02\x02\xAE\u04FD\x03" +
        "\x02\x02\x02\xB0\u0507\x03\x02\x02\x02\xB2\u050A\x03\x02\x02\x02\xB4\u0511" +
        "\x03\x02\x02\x02\xB6\u0517\x03\x02\x02\x02\xB8\u051F\x03\x02\x02\x02\xBA" +
        "\u0527\x03\x02\x02\x02\xBC\u052E\x03\x02\x02\x02\xBE\u053F\x03\x02\x02" +
        "\x02\xC0\u054C\x03\x02\x02\x02\xC2\u054E\x03\x02\x02\x02\xC4\u0559\x03" +
        "\x02\x02\x02\xC6\u055F\x03\x02\x02\x02\xC8\u0578\x03\x02\x02\x02\xCA\u057A" +
        "\x03\x02\x02\x02\xCC\u0580\x03\x02\x02\x02\xCE\u058B\x03\x02\x02\x02\xD0" +
        "\xD2\x07\x03\x02\x02\xD1\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2" +
        "\xD3\x03\x02\x02\x02\xD3\xDE\x07D\x02\x02\xD4\xD6\x07\x03\x02\x02\xD5" +
        "\xD4\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7" +
        "\xDE\x07F\x02\x02\xD8\xDE\x07A\x02\x02\xD9\xDE\x07B\x02\x02\xDA\xDE\x07" +
        "E\x02\x02\xDB\xDE\x07C\x02\x02\xDC\xDE\x07\x04\x02\x02\xDD\xD1\x03\x02" +
        "\x02\x02\xDD\xD5\x03\x02\x02\x02\xDD\xD8\x03\x02\x02\x02\xDD\xD9\x03\x02" +
        "\x02\x02\xDD\xDA\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDC\x03\x02" +
        "\x02\x02\xDE\x03\x03\x02\x02\x02\xDF\xE4\x07@\x02\x02\xE0\xE1\x07\x05" +
        "\x02\x02\xE1\xE3\x07@\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE6\x03\x02" +
        "\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\x05\x03\x02" +
        "\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEC\x07@\x02\x02\xE8\xE9\x07\x06" +
        "\x02\x02\xE9\xEB\x07@\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEE\x03\x02" +
        "\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\x07\x03\x02" +
        "\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF6\x07@\x02\x02\xF0\xF1\x07@\x02" +
        "\x02\xF1\xF3\x07\x05\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02" +
        "\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6\x07\x07\x02\x02\xF5\xEF\x03\x02\x02" +
        "\x02\xF5\xF2\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x07\x05\x02" +
        "\x02\xF8\u0104\x07@\x02\x02\xF9\xFA\x07@\x02\x02\xFA\xFC\x07\x05\x02\x02" +
        "\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02" +
        "\xFD\xFF\x07\b\x02\x02\xFE\u0100\x05\n\x06\x02\xFF\xFE\x03\x02\x02\x02" +
        "\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x07" +
        "\x05\x02\x02\u0102\u0104\x07@\x02\x02\u0103\xF5\x03\x02\x02\x02\u0103" +
        "\xFB\x03\x02\x02\x02\u0104\t\x03\x02\x02\x02\u0105\u0106\x07\t\x02\x02" +
        "\u0106\u0107\x07@\x02\x02\u0107\u0108\x07\n\x02\x02\u0108\v\x03\x02\x02" +
        "\x02\u0109\u010A\x05\x0E\b\x02\u010A\u010B\x07\v\x02\x02\u010B\u010C\x05" +
        "\f\x07\x02\u010C\u0112\x03\x02\x02\x02\u010D\u010F\x05\x14\v\x02\u010E" +
        "\u0110\x05\x10\t\x02\u010F\u010E\x03\x02\x02\x02\u010F\u0110\x03\x02\x02" +
        "\x02\u0110\u0112\x03\x02\x02\x02\u0111\u0109\x03\x02\x02\x02\u0111\u010D" +
        "\x03\x02\x02\x02\u0112\r\x03\x02\x02\x02\u0113\u0121\x05\x14\v\x02\u0114" +
        "\u011D\x07\f\x02\x02\u0115\u011A\x05f4\x02\u0116\u0117\x07\x06\x02\x02" +
        "\u0117\u0119\x05f4\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011C\x03\x02" +
        "\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B" +
        "\u011E\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D\u0115\x03\x02" +
        "\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F" +
        "\u0121\x07\r\x02\x02\u0120\u0113\x03\x02\x02\x02\u0120\u0114\x03\x02\x02" +
        "\x02\u0121\x0F\x03\x02\x02\x02\u0122\u0123\x07\x0E\x02\x02\u0123\u0124" +
        "\x07\x0F\x02\x02\u0124\u0129\x05\x12\n\x02\u0125\u0126\x07K\x02\x02\u0126" +
        "\u0128\x05\x12\n\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012B\x03\x02\x02" +
        "\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012C" +
        "\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012D\x07\x10\x02\x02" +
        "\u012D\x11\x03\x02\x02\x02\u012E\u012F\x07\x11\x02\x02\u012F\u0133\x05" +
        "\x98M\x02\u0130\u0131\x07\x12\x02\x02\u0131\u0133\x05\x90I\x02\u0132\u012E" +
        "\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133\x13\x03\x02\x02\x02" +
        "\u0134\u0139\x05\x16\f\x02\u0135\u0136\x07@\x02\x02\u0136\u0138\x05\x16" +
        "\f\x02\u0137\u0135\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137" +
        "\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\x15\x03\x02\x02\x02" +
        "\u013B\u0139\x03\x02\x02\x02\u013C\u0141\x05\x18\r\x02\u013D\u013E\x07" +
        "\x13\x02\x02\u013E\u0140\x05\x18\r\x02\u013F\u013D\x03\x02\x02\x02\u0140" +
        "\u0143\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02" +
        "\x02\x02\u0142\u0145\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0144" +
        "\u0146\x05 \x11\x02\u0145\u0144\x03\x02\x02\x02\u0145\u0146\x03\x02\x02" +
        "\x02\u0146\u0149\x03\x02\x02\x02\u0147\u0149\x05 \x11\x02\u0148\u013C" +
        "\x03\x02\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149\x17\x03\x02\x02\x02" +
        "\u014A\u014E\x05\x1A\x0E\x02\u014B\u014D\x05|?\x02\u014C\u014B\x03\x02" +
        "\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E" +
        "\u014F\x03\x02\x02\x02\u014F\x19\x03\x02\x02\x02\u0150\u014E\x03\x02\x02" +
        "\x02\u0151\u0152\b\x0E\x01\x02\u0152\u0162\x05\b\x05\x02\u0153\u015A\x05" +
        "\b\x05\x02\u0154\u0155\x07@\x02\x02\u0155\u0157\x07\x05\x02\x02\u0156" +
        "\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02" +
        "\x02\x02\u0158\u015A\x07\x07\x02\x02\u0159\u0153\x03\x02\x02\x02\u0159" +
        "\u0156\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02";
    ScalaParser._serializedATNSegment1 = "\u015B\u015C\x07\x05\x02\x02\u015C\u0162\x07\x11\x02\x02\u015D\u015E\x07" +
        "\f\x02\x02\u015E\u015F\x05\x1E\x10\x02\u015F\u0160\x07\r\x02\x02\u0160" +
        "\u0162\x03\x02\x02\x02\u0161\u0151\x03\x02\x02\x02\u0161\u0159\x03\x02" +
        "\x02\x02\u0161\u015D\x03\x02\x02\x02\u0162\u016A\x03\x02\x02\x02\u0163" +
        "\u0164\f\x07\x02\x02\u0164\u0169\x05\x1C\x0F\x02\u0165\u0166\f\x06\x02" +
        "\x02\u0166\u0167\x07\x14\x02\x02\u0167\u0169\x07@\x02\x02\u0168\u0163" +
        "\x03\x02\x02\x02\u0168\u0165\x03\x02\x02\x02\u0169\u016C\x03\x02\x02\x02" +
        "\u016A\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\x1B\x03" +
        "\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D\u016E\x07\t\x02\x02\u016E" +
        "\u016F\x05\x1E\x10\x02\u016F\u0170\x07\n\x02\x02\u0170\x1D\x03\x02\x02" +
        "\x02\u0171\u0176\x05\f\x07\x02\u0172\u0173\x07\x06\x02\x02\u0173\u0175" +
        "\x05\f\x07\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02" +
        "\u0176\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\x1F\x03" +
        "\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179\u017A\x07\x0F\x02\x02\u017A" +
        "\u017F\x05\"\x12\x02\u017B\u017C\x07K\x02\x02\u017C\u017E\x05\"\x12\x02" +
        "\u017D\u017B\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03" +
        "\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0182\x03\x02\x02\x02\u0181" +
        "\u017F\x03\x02\x02\x02\u0182\u0183\x07\x10\x02\x02\u0183!\x03\x02\x02" +
        "\x02\u0184\u0189\x05\x8EH\x02\u0185\u0186\x07\x11\x02\x02\u0186\u0189" +
        "\x05\xA4S\x02\u0187\u0189\x03\x02\x02\x02\u0188\u0184\x03\x02\x02\x02" +
        "\u0188\u0185\x03\x02\x02\x02\u0188\u0187\x03\x02\x02\x02\u0189#\x03\x02" +
        "\x02\x02\u018A\u018B\x05\f\x07\x02\u018B%\x03\x02\x02\x02\u018C\u018D" +
        "\x07\x15\x02\x02\u018D\u0198\x05\x14\v\x02\u018E\u0190\x07\x15\x02\x02" +
        "\u018F\u0191\x05|?\x02\u0190\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02" +
        "\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193" +
        "\u0198\x03\x02\x02\x02\u0194\u0195\x07\x15\x02\x02\u0195\u0196\x07\x16" +
        "\x02\x02\u0196\u0198\x07\x17\x02\x02\u0197\u018C\x03\x02\x02\x02\u0197" +
        "\u018E\x03\x02\x02\x02\u0197\u0194\x03\x02\x02\x02\u0198\'\x03\x02\x02" +
        "\x02\u0199\u01A0\x05p9\x02\u019A\u019C\x07\x18\x02\x02\u019B\u019A\x03" +
        "\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D" +
        "\u01A0\x07@\x02\x02\u019E\u01A0\x07\x16\x02\x02\u019F\u0199\x03\x02\x02" +
        "\x02\u019F\u019B\x03\x02\x02\x02\u019F\u019E\x03\x02\x02\x02\u01A0\u01A1" +
        "\x03\x02\x02\x02\u01A1\u01A2\x07\v\x02\x02\u01A2\u01A5\x05(\x15\x02\u01A3" +
        "\u01A5\x05*\x16\x02\u01A4\u019F\x03\x02\x02\x02\u01A4\u01A3\x03\x02\x02" +
        "\x02\u01A5)\x03\x02\x02\x02\u01A6\u01A7\x07\x19\x02\x02\u01A7\u01A8\x07" +
        "\f\x02\x02\u01A8\u01A9\x05(\x15\x02\u01A9\u01AA\x07\r\x02\x02\u01AA\u01B0" +
        "\x05(\x15\x02\u01AB\u01AD\x07L\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AC" +
        "\u01AD\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF\x07\x1A" +
        "\x02\x02\u01AF\u01B1\x05(\x15\x02\u01B0\u01AC\x03\x02\x02\x02\u01B0\u01B1" +
        "\x03\x02\x02\x02\u01B1\u020D\x03\x02\x02\x02\u01B2\u01B3\x07\x1B\x02\x02" +
        "\u01B3\u01B4\x07\f\x02\x02\u01B4\u01B5\x05(\x15\x02\u01B5\u01B6\x07\r" +
        "\x02\x02\u01B6\u01B7\x05(\x15\x02\u01B7\u020D\x03\x02\x02\x02\u01B8\u01BE" +
        "\x07\x1C\x02\x02\u01B9\u01BA\x07\x0F\x02\x02\u01BA\u01BB\x05:\x1E\x02" +
        "\u01BB\u01BC\x07\x10\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BF\x05" +
        "(\x15\x02\u01BE\u01B9\x03\x02\x02\x02\u01BE\u01BD\x03\x02\x02\x02\u01BF" +
        "\u01C5\x03\x02\x02\x02\u01C0\u01C1\x07\x1D\x02\x02\u01C1\u01C2\x07\x0F" +
        "\x02\x02\u01C2\u01C3\x05D#\x02\u01C3\u01C4\x07\x10\x02\x02\u01C4\u01C6" +
        "\x03\x02\x02\x02\u01C5\u01C0\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02" +
        "\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C8\x07\x1E\x02\x02\u01C8\u01CA\x05" +
        "(\x15\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA" +
        "\u020D\x03\x02\x02\x02\u01CB\u01CC\x07\x1F\x02\x02\u01CC\u01CE\x05(\x15" +
        "\x02\u01CD\u01CF\x07L\x02\x02\u01CE\u01CD\x03\x02\x02\x02\u01CE\u01CF" +
        "\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D1\x07\x1B\x02\x02" +
        "\u01D1\u01D2\x07\f\x02\x02\u01D2\u01D3\x05(\x15\x02\u01D3\u01D4\x07\r" +
        "\x02\x02\u01D4\u020D\x03\x02\x02\x02\u01D5\u01DE\x07 \x02\x02\u01D6\u01D7" +
        "\x07\f\x02\x02\u01D7\u01D8\x05@!\x02\u01D8\u01D9\x07\r\x02\x02\u01D9\u01DF" +
        "\x03\x02\x02\x02\u01DA\u01DB\x07\x0F\x02\x02\u01DB\u01DC\x05@!\x02\u01DC" +
        "\u01DD\x07\x10\x02\x02\u01DD\u01DF\x03\x02\x02\x02\u01DE\u01D6\x03\x02" +
        "\x02\x02\u01DE\u01DA\x03\x02\x02\x02\u01DF\u01E1\x03\x02\x02\x02\u01E0" +
        "\u01E2\x07!\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02" +
        "\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x05(\x15\x02\u01E4\u020D" +
        "\x03\x02\x02\x02\u01E5\u01E6\x07\"\x02\x02\u01E6\u020D\x05(\x15\x02\u01E7" +
        "\u01E9\x07#\x02\x02\u01E8\u01EA\x05(\x15\x02\u01E9\u01E8\x03\x02\x02\x02" +
        "\u01E9\u01EA\x03\x02\x02\x02\u01EA\u020D\x03\x02\x02\x02\u01EB\u01EE\x07" +
        "$\x02\x02\u01EC\u01EF\x05\xB2Z\x02\u01ED\u01EF\x05\x80A\x02\u01EE\u01EC" +
        "\x03\x02\x02\x02\u01EE\u01ED\x03\x02\x02\x02\u01EF\u01F6\x03\x02\x02\x02" +
        "\u01F0\u01F6\x058\x1D\x02\u01F1\u01F3\x052\x1A\x02\u01F2\u01F4\x07\x16" +
        "\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4" +
        "\u01F6\x03\x02\x02\x02\u01F5\u01EB\x03\x02\x02\x02\u01F5\u01F0\x03\x02" +
        "\x02\x02\u01F5\u01F1\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7" +
        "\u01F8\x07\x05\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FA\x07@\x02" +
        "\x02\u01FA\u01FB\x07%\x02\x02\u01FB\u01FC\x05(\x15\x02\u01FC\u020D\x03" +
        "\x02\x02\x02\u01FD\u01FE\x052\x1A\x02\u01FE\u01FF\x056\x1C\x02\u01FF\u0200" +
        "\x07%\x02\x02\u0200\u0201\x05(\x15\x02\u0201\u020D\x03\x02\x02\x02\u0202" +
        "\u020D\x05,\x17\x02\u0203\u0204\x05,\x17\x02\u0204\u0205\x05&\x14\x02" +
        "\u0205\u020D\x03\x02\x02\x02\u0206\u0207\x05,\x17\x02\u0207\u0208\x07" +
        "&\x02\x02\u0208\u0209\x07\x0F\x02\x02\u0209\u020A\x05D#\x02\u020A\u020B" +
        "\x07\x10\x02\x02\u020B\u020D\x03\x02\x02\x02\u020C\u01A6\x03\x02\x02\x02" +
        "\u020C\u01B2\x03\x02\x02\x02\u020C\u01B8\x03\x02\x02\x02\u020C\u01CB\x03" +
        "\x02\x02\x02\u020C\u01D5\x03\x02\x02\x02\u020C\u01E5\x03\x02\x02\x02\u020C" +
        "\u01E7\x03\x02\x02\x02\u020C\u01F5\x03\x02\x02\x02\u020C\u01FD\x03\x02" +
        "\x02\x02\u020C\u0202\x03\x02\x02\x02\u020C\u0203\x03\x02\x02\x02\u020C" +
        "\u0206\x03\x02\x02\x02\u020D+\x03\x02\x02\x02\u020E\u0210\x05.\x18\x02" +
        "\u020F\u0211\x07@\x02\x02\u0210\u020F\x03\x02\x02\x02\u0210\u0211\x03" +
        "\x02\x02\x02\u0211-\x03\x02\x02\x02\u0212\u0213\b\x18\x01\x02\u0213\u0214" +
        "\x050\x19\x02\u0214\u021A\x03\x02\x02\x02\u0215\u0216\f\x03\x02\x02\u0216" +
        "\u0217\x07@\x02\x02\u0217\u0219\x05.\x18\x04\u0218\u0215\x03\x02\x02\x02" +
        "\u0219\u021C\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03" +
        "\x02\x02\x02\u021B/\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D" +
        "\u021F\t\x02\x02\x02\u021E\u021D\x03\x02\x02\x02\u021E\u021F\x03\x02\x02" +
        "\x02\u021F\u022A\x03\x02\x02\x02\u0220\u0223\x07$\x02\x02\u0221\u0224" +
        "\x05\xB2Z\x02\u0222\u0224\x05\x80A\x02\u0223\u0221\x03\x02\x02\x02\u0223" +
        "\u0222\x03\x02\x02\x02\u0224\u022B\x03\x02\x02\x02\u0225\u022B\x058\x1D" +
        "\x02\u0226\u0228\x052\x1A\x02\u0227\u0229\x07\x16\x02\x02\u0228\u0227" +
        "\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022B\x03\x02\x02\x02" +
        "\u022A\u0220\x03\x02\x02\x02\u022A\u0225\x03\x02\x02\x02\u022A\u0226\x03" +
        "\x02\x02\x02\u022B1\x03\x02\x02\x02\u022C\u022D\b\x1A\x01\x02\u022D\u0250" +
        "\x05\x02\x02\x02\u022E\u0250\x05\b\x05\x02\u022F\u0230\x07@\x02\x02\u0230" +
        "\u0232\x07\x05\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232\x03\x02" +
        "\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0250\x07\x07\x02\x02\u0234" +
        "\u0250\x07\x16\x02\x02\u0235\u0237\x07\f\x02\x02\u0236\u0238\x054\x1B" +
        "\x02\u0237\u0236\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0239" +
        "\x03\x02\x02\x02\u0239\u0250\x07\r\x02\x02\u023A\u023D\x07$\x02\x02\u023B" +
        "\u023E\x05\xB2Z\x02\u023C\u023E\x05\x80A\x02\u023D\u023B\x03\x02\x02\x02" +
        "\u023D\u023C\x03\x02\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F\u0241\x05" +
        "8\x1D\x02\u0240\u023A\x03\x02\x02\x02\u0240\u023F\x03\x02\x02\x02\u0241" +
        "\u0242\x03\x02\x02\x02\u0242\u0243\x07\x05\x02\x02\u0243\u0244\x07@\x02" +
        "\x02\u0244\u0250\x03\x02\x02\x02\u0245\u0248\x07$\x02\x02\u0246\u0249" +
        "\x05\xB2Z\x02\u0247\u0249\x05\x80A\x02\u0248\u0246\x03\x02\x02\x02\u0248" +
        "\u0247\x03\x02\x02\x02\u0249\u024C\x03\x02\x02\x02\u024A\u024C\x058\x1D" +
        "\x02\u024B\u0245\x03\x02\x02\x02\u024B\u024A\x03\x02\x02\x02\u024C\u024D" +
        "\x03\x02\x02\x02\u024D\u024E\x05\x1C\x0F\x02\u024E\u0250\x03\x02\x02\x02" +
        "\u024F\u022C\x03\x02\x02\x02\u024F\u022E\x03\x02\x02\x02\u024F\u0231\x03" +
        "\x02\x02\x02\u024F\u0234\x03\x02\x02\x02\u024F\u0235\x03\x02\x02\x02\u024F" +
        "\u0240\x03\x02\x02\x02\u024F\u024B\x03\x02\x02\x02\u0250\u0255\x03\x02" +
        "\x02\x02\u0251\u0252\f\x03\x02\x02\u0252\u0254\x056\x1C\x02\u0253\u0251" +
        "\x03\x02\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255\u0253\x03\x02\x02\x02" +
        "\u0255\u0256\x03\x02\x02\x02\u02563\x03\x02\x02\x02\u0257\u0255\x03\x02" +
        "\x02\x02\u0258\u025D\x05(\x15\x02\u0259\u025A\x07\x06\x02\x02\u025A\u025C" +
        "\x05(\x15\x02\u025B\u0259\x03\x02\x02\x02\u025C\u025F\x03\x02\x02\x02" +
        "\u025D\u025B\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E5\x03\x02" +
        "\x02\x02\u025F\u025D\x03\x02\x02\x02\u0260\u0262\x07\f\x02\x02\u0261\u0263" +
        "\x054\x1B\x02\u0262\u0261\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02" +
        "\u0263\u0264\x03\x02\x02\x02\u0264\u0273\x07\r\x02\x02\u0265\u0269\x07" +
        "\f\x02\x02\u0266\u0267\x054\x1B\x02\u0267\u0268\x07\x06\x02\x02\u0268" +
        "\u026A\x03\x02\x02\x02\u0269\u0266\x03\x02\x02\x02\u0269\u026A\x03\x02" +
        "\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u026C\x05,\x17\x02\u026C\u026D" +
        "\x07\x15\x02\x02\u026D\u026E\x07\x16\x02\x02\u026E\u026F\x07\x17\x02\x02" +
        "\u026F\u0270\x07\r\x02\x02\u0270\u0273\x03\x02\x02\x02\u0271\u0273\x05" +
        "8\x1D\x02\u0272\u0260\x03\x02\x02\x02\u0272\u0265\x03\x02\x02\x02\u0272" +
        "\u0271\x03\x02\x02\x02\u02737\x03\x02\x02\x02\u0274\u0275\x07\x0F\x02" +
        "\x02\u0275\u0276\x05D#\x02\u0276\u0277\x07\x10\x02\x02\u0277\u027D\x03" +
        "\x02\x02\x02\u0278\u0279\x07\x0F\x02\x02\u0279\u027A\x05:\x1E\x02\u027A" +
        "\u027B\x07\x10\x02\x02\u027B\u027D\x03\x02\x02\x02\u027C\u0274\x03\x02" +
        "\x02\x02\u027C\u0278\x03\x02\x02\x02\u027D9\x03\x02\x02\x02\u027E\u0283" +
        "\x05<\x1F\x02\u027F\u0280\x07K\x02\x02\u0280\u0282\x05<\x1F\x02\u0281" +
        "\u027F\x03\x02\x02\x02\u0282\u0285\x03\x02\x02\x02\u0283\u0281\x03\x02" +
        "\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0287\x03\x02\x02\x02\u0285" +
        "\u0283\x03\x02\x02\x02\u0286\u0288\x05> \x02\u0287\u0286\x03\x02\x02\x02" +
        "\u0287\u0288\x03\x02\x02\x02\u0288;\x03\x02\x02\x02\u0289\u02A4\x05\x86" +
        "D\x02\u028A\u028C\x05|?\x02\u028B\u028A\x03\x02\x02\x02\u028C\u028F\x03" +
        "\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E" +
        "\u0291\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u0290\u0292\t\x03\x02" +
        "\x02\u0291\u0290\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0293" +
        "\x03\x02\x02\x02\u0293\u02A4\x05\x9CO\x02\u0294\u0296\x05|?\x02\u0295" +
        "\u0294\x03\x02\x02\x02\u0296\u0299\x03\x02\x02\x02\u0297\u0295\x03\x02" +
        "\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u029D\x03\x02\x02\x02\u0299" +
        "\u0297\x03\x02\x02\x02\u029A\u029C\x05v<\x02\u029B\u029A\x03\x02\x02\x02" +
        "\u029C\u029F\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029D\u029E\x03" +
        "\x02\x02\x02\u029E\u02A0\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u02A0" +
        "\u02A4\x05\xA6T\x02\u02A1\u02A4\x05*\x16\x02\u02A2\u02A4\x03\x02\x02\x02" +
        "\u02A3\u0289\x03\x02\x02\x02\u02A3\u028D\x03\x02\x02\x02\u02A3\u0297\x03" +
        "\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A3\u02A2\x03\x02\x02\x02\u02A4" +
        "=\x03\x02\x02\x02\u02A5\u02B6\x05*\x16\x02\u02A6\u02B1\x05p9\x02\u02A7" +
        "\u02A9\x07\x18\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A8\u02A9\x03\x02" +
        "\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02AD\x07@\x02\x02\u02AB\u02AD" +
        "\x07\x16\x02\x02\u02AC\u02A8\x03\x02\x02\x02\u02AC\u02AB\x03\x02\x02\x02" +
        "\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02AF\x07\x15\x02\x02\u02AF\u02B1\x05" +
        "\x16\f\x02\u02B0\u02A6\x03\x02\x02\x02\u02B0\u02AC\x03\x02\x02\x02\u02B1" +
        "\u02B2\x03\x02\x02\x02\u02B2\u02B3\x07\v\x02\x02\u02B3\u02B4\x05:\x1E" +
        "\x02\u02B4\u02B6\x03\x02\x02\x02\u02B5\u02A5\x03\x02\x02\x02\u02B5\u02B0" +
        "\x03\x02\x02\x02\u02B6?\x03\x02\x02\x02\u02B7\u02BC\x05B\"\x02\u02B8\u02B9" +
        "\x07K\x02\x02\u02B9\u02BB\x05B\"\x02\u02BA\u02B8\x03\x02\x02\x02\u02BB" +
        "\u02BE\x03\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02\u02BC\u02BD\x03\x02" +
        "\x02\x02\u02BDA\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BF\u02C0" +
        "\x05L\'\x02\u02C0\u02C1\x07+\x02\x02\u02C1\u02CD\x05(\x15\x02\u02C2\u02C4" +
        "\x07L\x02\x02\u02C3\u02C2\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02" +
        "\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02CC\x05H%\x02\u02C6\u02C7\x07L\x02" +
        "\x02\u02C7\u02C8\x05L\'\x02\u02C8\u02C9\x07%\x02\x02\u02C9\u02CA\x05(" +
        "\x15\x02\u02CA\u02CC\x03\x02\x02\x02\u02CB\u02C3\x03\x02\x02\x02\u02CB" +
        "\u02C6\x03\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02\u02CD\u02CB\x03\x02" +
        "\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CEC\x03\x02\x02\x02\u02CF\u02CD" +
        "\x03\x02\x02\x02\u02D0\u02D2\x05F$\x02\u02D1\u02D0\x03\x02\x02\x02\u02D2" +
        "\u02D3\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03\x02" +
        "\x02\x02\u02D4E\x03\x02\x02\x02\u02D5\u02D6\x07,\x02\x02\u02D6\u02D8\x05" +
        "J&\x02\u02D7\u02D9\x05H%\x02\u02D8\u02D7\x03\x02\x02\x02\u02D8\u02D9\x03" +
        "\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB\x07\v\x02\x02\u02DB" +
        "\u02DC\x05:\x1E\x02\u02DCG\x03\x02\x02\x02\u02DD\u02DE\x07\x19\x02\x02" +
        "\u02DE\u02DF\x05,\x17\x02\u02DFI\x03\x02\x02\x02\u02E0\u02E5\x05L\'\x02" +
        "\u02E1\u02E2\x07-\x02\x02\u02E2\u02E4\x05L\'\x02\u02E3\u02E1\x03\x02\x02" +
        "\x02\u02E4\u02E7\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E5\u02E6" +
        "\x03\x02\x02\x02\u02E6K\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E8" +
        "\u02E9\x07G\x02\x02\u02E9\u02EA\x07\x15\x02\x02\u02EA\u02F0\x05$\x13\x02" +
        "\u02EB\u02EC\x07\x16\x02\x02\u02EC\u02ED\x07\x15\x02\x02\u02ED\u02F0\x05" +
        "$\x13\x02\u02EE\u02F0\x05N(\x02\u02EF\u02E8\x03\x02\x02\x02\u02EF\u02EB" +
        "\x03\x02\x02\x02\u02EF\u02EE\x03\x02\x02\x02\u02F0M\x03\x02\x02\x02\u02F1" +
        "\u02F4\x07G\x02\x02\u02F2\u02F3\x07.\x02\x02\u02F3\u02F5\x05P)\x02\u02F4" +
        "\u02F2\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u02F8\x03\x02" +
        "\x02\x02\u02F6\u02F8\x05P)\x02\u02F7\u02F1\x03\x02\x02\x02\u02F7\u02F6" +
        "\x03\x02\x02\x02\u02F8O\x03\x02\x02\x02\u02F9\u0303\x05R*\x02\u02FA\u02FF" +
        "\x05R*\x02\u02FB\u02FC\x07@\x02\x02\u02FC\u02FE\x05R*\x02\u02FD\u02FB" +
        "\x03\x02\x02\x02\u02FE\u0301\x03\x02\x02\x02\u02FF\u02FD\x03\x02\x02\x02" +
        "\u02FF\u0300\x03\x02\x02\x02\u0300\u0303\x03\x02\x02\x02\u0301\u02FF\x03" +
        "\x02\x02\x02\u0302\u02F9\x03\x02\x02\x02\u0302\u02FA\x03\x02\x02\x02\u0303" +
        "Q\x03\x02\x02\x02\u0304\u0325\x07\x16\x02\x02\u0305\u0325\x07G\x02\x02" +
        "\u0306\u0325\x05\x02\x02\x02\u0307\u030D\x05\b\x05\x02\u0308\u030A\x07" +
        "\f\x02\x02\u0309\u030B\x05T+\x02\u030A\u0309\x03\x02\x02\x02\u030A\u030B" +
        "\x03\x02\x02\x02\u030B\u030C\x03\x02\x02\x02\u030C\u030E\x07\r\x02\x02" +
        "\u030D\u0308\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u0325\x03" +
        "\x02\x02\x02\u030F\u0310\x05\b\x05\x02\u0310\u0315\x07\f\x02\x02\u0311" +
        "\u0313\x05T+\x02\u0312\u0311\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02" +
        "\u0313\u0314\x03\x02\x02\x02\u0314\u0316\x07\x06\x02\x02\u0315\u0312\x03" +
        "\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316\u0319\x03\x02\x02\x02\u0317" +
        "\u0318\x07G\x02\x02\u0318\u031A\x07.\x02\x02\u0319\u0317\x03\x02\x02\x02" +
        "\u0319\u031A\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B\u031C\x07" +
        "\x16\x02\x02\u031C\u031D\x07\x17\x02\x02\u031D\u031E\x07\r\x02\x02\u031E" +
        "\u0325\x03\x02\x02\x02\u031F\u0321\x07\f\x02\x02\u0320\u0322\x05T+\x02" +
        "\u0321\u0320\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323\x03" +
        "\x02\x02\x02\u0323\u0325\x07\r\x02\x02\u0324\u0304\x03\x02\x02\x02\u0324" +
        "\u0305\x03\x02\x02\x02\u0324\u0306\x03\x02\x02\x02\u0324\u0307\x03\x02" +
        "\x02\x02\u0324\u030F\x03\x02\x02\x02\u0324\u031F\x03\x02\x02\x02\u0325" +
        "S\x03\x02\x02\x02\u0326\u032B\x05J&\x02\u0327\u0328\x07\x06\x02\x02\u0328" +
        "\u032A\x05J&\x02\u0329\u0327\x03\x02\x02\x02\u032A\u032D\x03\x02\x02\x02" +
        "\u032B\u0329\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C\u0334\x03" +
        "\x02\x02\x02\u032D\u032B\x03\x02\x02\x02\u032E\u0330\x07\x16\x02\x02\u032F" +
        "\u032E\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u032F\x03\x02" +
        "\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0334\x03\x02\x02\x02\u0333" +
        "\u0326\x03\x02\x02\x02\u0333\u032F\x03\x02\x02\x02\u0334U\x03\x02\x02" +
        "\x02\u0335\u0336\x07\t\x02\x02\u0336\u033B\x05Z.\x02\u0337\u0338\x07\x06" +
        "\x02\x02\u0338\u033A\x05Z.\x02\u0339\u0337\x03\x02\x02\x02\u033A\u033D" +
        "\x03\x02\x02\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02" +
        "\u033C\u033E\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033E\u033F\x07" +
        "\n\x02\x02\u033FW\x03\x02\x02\x02\u0340\u0341\x07\t\x02\x02\u0341\u0346" +
        "\x05\\/\x02\u0342\u0343\x07\x06\x02\x02\u0343\u0345\x05\\/\x02\u0344\u0342" +
        "\x03\x02\x02\x02\u0345\u0348\x03\x02\x02\x02\u0346\u0344\x03\x02\x02\x02" +
        "\u0346\u0347\x03\x02\x02\x02\u0347\u0349\x03\x02\x02\x02\u0348\u0346\x03" +
        "\x02\x02\x02\u0349\u034A\x07\n\x02\x02\u034AY\x03\x02\x02\x02\u034B\u034D" +
        "\x05|?\x02\u034C\u034B\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D" +
        "\u034F\x03\x02\x02\x02\u034E\u0350\t\x04\x02\x02\u034F\u034E\x03\x02\x02" +
        "\x02\u034F\u0350\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\u0352" +
        "\x05\\/\x02\u0352[\x03\x02\x02\x02\u0353\u0355\t\x05\x02\x02\u0354\u0356" +
        "\x05V,\x02\u0355\u0354\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356" +
        "\u0359\x03\x02\x02\x02\u0357\u0358\x07/\x02\x02\u0358\u035A\x05\f\x07" +
        "\x02\u0359\u0357\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035D" +
        "\x03\x02\x02\x02\u035B\u035C\x070\x02\x02\u035C\u035E\x05\f\x07\x02\u035D" +
        "\u035B\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u0363\x03\x02" +
        "\x02\x02\u035F\u0360\x071\x02\x02\u0360\u0362\x05\f\x07\x02\u0361\u035F" +
        "\x03\x02\x02\x02\u0362\u0365\x03\x02\x02\x02\u0363\u0361\x03\x02\x02\x02" +
        "\u0363\u0364\x03\x02\x02\x02\u0364\u036A\x03\x02\x02\x02\u0365\u0363\x03" +
        "\x02\x02\x02\u0366\u0367\x07\x15\x02\x02\u0367\u0369\x05\f\x07\x02\u0368" +
        "\u0366\x03\x02\x02\x02\u0369\u036C\x03\x02\x02\x02\u036A\u0368\x03\x02" +
        "\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B]\x03\x02\x02\x02\u036C\u036A" +
        "\x03\x02\x02\x02\u036D\u036F\x05`1\x02\u036E\u036D\x03\x02\x02\x02\u036F" +
        "\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0370\u0371\x03\x02" +
        "\x02\x02\u0371\u0378\x03\x02\x02\x02\u0372\u0370\x03\x02\x02\x02\u0373" +
        "\u0374\x07\f\x02\x02\u0374\u0375\x07\x18\x02\x02\u0375\u0376\x05b2\x02" +
        "\u0376\u0377\x07\r\x02\x02\u0377\u0379\x03\x02\x02\x02\u0378\u0373\x03" +
        "\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379_\x03\x02\x02\x02\u037A" +
        "\u037C\x07\f\x02\x02\u037B\u037D\x05b2\x02\u037C\u037B\x03\x02\x02\x02" +
        "\u037C\u037D\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u037F\x07" +
        "\r\x02\x02\u037Fa\x03\x02\x02\x02\u0380\u0385\x05d3\x02\u0381\u0382\x07" +
        "\x06\x02\x02\u0382\u0384\x05d3\x02\u0383\u0381\x03\x02\x02\x02\u0384\u0387" +
        "\x03\x02\x02\x02\u0385\u0383\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02" +
        "\u0386c\x03\x02\x02\x02\u0387\u0385\x03\x02\x02\x02\u0388\u038A\x05|?" +
        "\x02\u0389\u0388\x03\x02\x02\x02\u038A\u038D\x03\x02\x02\x02\u038B\u0389" +
        "\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u038E\x03\x02\x02\x02" +
        "\u038D\u038B\x03\x02\x02\x02\u038E\u0391\x07@\x02\x02\u038F\u0390\x07" +
        "\x15\x02\x02\u0390\u0392\x05f4\x02\u0391\u038F\x03\x02\x02\x02\u0391\u0392" +
        "\x03\x02\x02\x02\u0392\u0395\x03\x02\x02\x02\u0393\u0394\x07%\x02\x02" +
        "\u0394\u0396\x05(\x15\x02\u0395\u0393\x03\x02\x02\x02\u0395\u0396\x03" +
        "\x02\x02\x02\u0396e\x03\x02\x02\x02\u0397\u039E\x05\f\x07\x02\u0398\u0399" +
        "\x07\v\x02\x02\u0399\u039E\x05\f\x07\x02\u039A\u039B\x05\f\x07\x02\u039B" +
        "\u039C\x07\x17\x02\x02\u039C\u039E\x03\x02\x02\x02\u039D\u0397\x03\x02" +
        "\x02\x02\u039D\u0398\x03\x02\x02\x02\u039D\u039A\x03\x02\x02\x02\u039E" +
        "g\x03\x02\x02\x02\u039F\u03A1\x05j6\x02\u03A0\u039F\x03\x02\x02\x02\u03A1" +
        "\u03A4\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2\u03A3\x03\x02" +
        "\x02\x02\u03A3\u03AA\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A5" +
        "\u03A6\x07\f\x02\x02\u03A6\u03A7\x07\x18\x02\x02\u03A7\u03A8\x05l7\x02" +
        "\u03A8\u03A9\x07\r\x02\x02\u03A9\u03AB\x03\x02\x02\x02\u03AA\u03A5\x03" +
        "\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03ABi\x03\x02\x02\x02\u03AC" +
        "\u03AE\x07\f\x02\x02\u03AD\u03AF\x05l7\x02\u03AE\u03AD\x03\x02\x02\x02" +
        "\u03AE\u03AF\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B1\x07" +
        "\r\x02\x02\u03B1k\x03\x02\x02\x02\u03B2\u03B7\x05n8\x02\u03B3\u03B4\x07" +
        "\x06\x02\x02\u03B4\u03B6\x05n8\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6\u03B9" +
        "\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02" +
        "\u03B8m\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03BA\u03BC\x05|?" +
        "\x02\u03BB\u03BA\x03\x02\x02\x02\u03BC\u03BF\x03\x02\x02\x02\u03BD\u03BB" +
        "\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03C3\x03\x02\x02\x02" +
        "\u03BF\u03BD\x03\x02\x02\x02\u03C0\u03C2\x05t;\x02\u03C1\u03C0\x03\x02" +
        "\x02\x02\u03C2\u03C5\x03\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C3" +
        "\u03C4\x03\x02\x02\x02\u03C4\u03C7\x03\x02\x02\x02\u03C5\u03C3\x03\x02" +
        "\x02\x02\u03C6\u03C8\t\x06\x02\x02\u03C7\u03C6\x03\x02\x02\x02\u03C7\u03C8" +
        "\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CA\x07@\x02\x02" +
        "\u03CA\u03CB\x07\x15\x02\x02\u03CB\u03CE\x05f4\x02\u03CC\u03CD\x07%\x02" +
        "\x02\u03CD\u03CF\x05(\x15\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF" +
        "\x03\x02\x02\x02\u03CFo\x03\x02\x02\x02\u03D0\u03D1\x07\f\x02\x02\u03D1" +
        "\u03D6\x05r:\x02\u03D2\u03D3\x07\x06\x02\x02\u03D3\u03D5\x05r:\x02\u03D4" +
        "\u03D2\x03\x02\x02\x02\u03D5\u03D8\x03\x02\x02\x02\u03D6\u03D4\x03\x02" +
        "\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03D9\x03\x02\x02\x02\u03D8" +
        "\u03D6\x03\x02\x02\x02\u03D9\u03DA\x07\r\x02\x02\u03DAq\x03\x02\x02\x02" +
        "\u03DB\u03DE\t\x05\x02\x02\u03DC\u03DD\x07\x15\x02\x02\u03DD\u03DF\x05" +
        "\f\x07\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF" +
        "s\x03\x02\x02\x02\u03E0\u03E4\x05v<\x02\u03E1\u03E4\x05x=\x02\u03E2\u03E4" +
        "\x073\x02\x02\u03E3\u03E0\x03\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02" +
        "\u03E3\u03E2\x03\x02\x02\x02\u03E4u\x03\x02\x02\x02\u03E5\u03E6\t\x07" +
        "\x02\x02\u03E6w\x03\x02\x02\x02\u03E7\u03E9\t\b\x02\x02\u03E8\u03EA\x05" +
        "z>\x02\u03E9\u03E8\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EAy" +
        "\x03\x02\x02\x02\u03EB\u03EC\x07\t\x02\x02\u03EC\u03ED\t\t\x02\x02\u03ED" +
        "\u03EE\x07\n\x02\x02\u03EE{\x03\x02\x02\x02\u03EF\u03F0\x07.\x02\x02\u03F0" +
        "\u03F4\x05\x1A\x0E\x02\u03F1\u03F3\x056\x1C\x02\u03F2\u03F1\x03\x02\x02" +
        "\x02\u03F3\u03F6\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F4\u03F5" +
        "\x03\x02\x02\x02\u03F5}\x03\x02\x02\x02\u03F6\u03F4\x03\x02\x02\x02\u03F7" +
        "\u03F8\x07.\x02\x02\u03F8\u03F9\x05\x1A\x0E\x02\u03F9\u03FA\x056\x1C\x02" +
        "\u03FA\x7F\x03\x02\x02\x02\u03FB\u03FD\x07N\x02\x02\u03FC\u03FB\x03\x02" +
        "\x02\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE" +
        "\u0400\x07\x0F\x02\x02\u03FF\u0401\x05\x84C\x02\u0400\u03FF\x03\x02\x02" +
        "\x02\u0400\u0401\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0407" +
        "\x05\x82B\x02\u0403\u0404\x07K\x02\x02\u0404\u0406\x05\x82B\x02\u0405" +
        "\u0403\x03\x02\x02\x02\u0406\u0409\x03\x02\x02\x02\u0407\u0405\x03\x02" +
        "\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u040A\x03\x02\x02\x02\u0409" +
        "\u0407\x03\x02\x02\x02\u040A\u040B\x07\x10\x02\x02\u040B\x81\x03\x02\x02" +
        "\x02\u040C\u042A\x05\x86D\x02\u040D\u040F\x05|?\x02\u040E\u040D\x03\x02" +
        "\x02\x02\u040F\u0412";
    ScalaParser._serializedATNSegment2 = "\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0410\u0411\x03\x02\x02\x02" +
        "\u0411\u0416\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0413\u0415\x05" +
        "t;\x02\u0414\u0413\x03\x02\x02\x02\u0415\u0418\x03\x02\x02\x02\u0416\u0414" +
        "\x03\x02\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417\u0419\x03\x02\x02\x02" +
        "\u0418\u0416\x03\x02\x02\x02\u0419\u042A\x05\x9CO\x02\u041A\u041C\x05" +
        "|?\x02\u041B\u041A\x03\x02\x02\x02\u041C\u041F\x03\x02\x02\x02\u041D\u041B" +
        "\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02\u041E\u0423\x03\x02\x02\x02" +
        "\u041F\u041D\x03\x02\x02\x02\u0420\u0422\x05t;\x02\u0421\u0420\x03\x02" +
        "\x02\x02\u0422\u0425\x03\x02\x02\x02\u0423\u0421\x03\x02\x02\x02\u0423" +
        "\u0424\x03\x02\x02\x02\u0424\u0426\x03\x02\x02\x02\u0425\u0423\x03\x02" +
        "\x02\x02\u0426\u042A\x05\x8EH\x02\u0427\u042A\x05(\x15\x02\u0428\u042A" +
        "\x03\x02\x02\x02\u0429\u040C\x03\x02\x02\x02\u0429\u0410\x03\x02\x02\x02" +
        "\u0429\u041D\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u0429\u0428\x03" +
        "\x02\x02\x02\u042A\x83\x03\x02\x02\x02\u042B\u042E\x07@\x02\x02\u042C" +
        "\u042D\x07\x15\x02\x02\u042D\u042F\x05\f\x07\x02\u042E\u042C\x03\x02\x02" +
        "\x02\u042E\u042F\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0437" +
        "\x07\v\x02\x02\u0431\u0432\x07\x07\x02\x02\u0432\u0433\x07\x15\x02\x02" +
        "\u0433\u0434\x05\f\x07\x02\u0434\u0435\x07\v\x02\x02\u0435\u0437\x03\x02" +
        "\x02\x02\u0436\u042B\x03\x02\x02\x02\u0436\u0431\x03\x02\x02\x02\u0437" +
        "\x85\x03\x02\x02\x02\u0438\u0439\x079\x02\x02\u0439\u043E\x05\x88E\x02" +
        "\u043A\u043B\x07\x06\x02\x02\u043B\u043D\x05\x88E\x02\u043C\u043A\x03" +
        "\x02\x02\x02\u043D\u0440\x03\x02\x02\x02\u043E\u043C\x03\x02\x02\x02\u043E" +
        "\u043F\x03\x02\x02\x02\u043F\x87\x03\x02\x02\x02\u0440\u043E\x03\x02\x02" +
        "\x02\u0441\u0442\x05\b\x05\x02\u0442\u0446\x07\x05\x02\x02\u0443\u0447" +
        "\x07@\x02\x02\u0444\u0447\x07\x16\x02\x02\u0445\u0447\x05\x8AF\x02\u0446" +
        "\u0443\x03\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0446\u0445\x03\x02" +
        "\x02\x02\u0447\x89\x03\x02\x02\x02\u0448\u044E\x07\x0F\x02\x02\u0449\u044A" +
        "\x05\x8CG\x02\u044A\u044B\x07\x06\x02\x02\u044B\u044D\x03\x02\x02\x02" +
        "\u044C\u0449\x03\x02\x02\x02\u044D\u0450\x03\x02\x02\x02\u044E\u044C\x03" +
        "\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F\u0453\x03\x02\x02\x02\u0450" +
        "\u044E\x03\x02\x02\x02\u0451\u0454\x05\x8CG\x02\u0452\u0454\x07\x16\x02" +
        "\x02\u0453\u0451\x03\x02\x02\x02\u0453\u0452\x03\x02\x02\x02\u0454\u0455" +
        "\x03\x02\x02\x02\u0455\u0456\x07\x10\x02\x02\u0456\x8B\x03\x02\x02\x02" +
        "\u0457\u045C\x07@\x02\x02\u0458\u0459\x07\v\x02\x02\u0459\u045D\x07@\x02" +
        "\x02\u045A\u045B\x07\v\x02\x02\u045B\u045D\x07\x16\x02\x02\u045C\u0458" +
        "\x03\x02\x02\x02\u045C\u045A\x03\x02\x02\x02\u045D\x8D\x03\x02\x02\x02" +
        "\u045E\u045F\x07\x12\x02\x02\u045F\u0467\x05\x90I\x02\u0460\u0461\x07" +
        "2\x02\x02\u0461\u0467\x05\x92J\x02\u0462\u0463\x07:\x02\x02\u0463\u0467" +
        "\x05\x94K\x02\u0464\u0465\x07\x11\x02\x02\u0465\u0467\x05\x98M\x02\u0466" +
        "\u045E\x03\x02\x02\x02\u0466\u0460\x03\x02\x02\x02\u0466\u0462\x03\x02" +
        "\x02\x02\u0466\u0464\x03\x02\x02\x02\u0467\x8F\x03\x02\x02\x02\u0468\u0469" +
        "\x05\x06\x04\x02\u0469\u046A\x07\x15\x02\x02\u046A\u046B\x05\f\x07\x02" +
        "\u046B\x91\x03\x02\x02\x02\u046C\u046D\x05\x06\x04\x02\u046D\u046E\x07" +
        "\x15\x02\x02\u046E\u046F\x05\f\x07\x02\u046F\x93\x03\x02\x02\x02\u0470" +
        "\u0473\x05\x96L\x02\u0471\u0472\x07\x15\x02\x02\u0472\u0474\x05\f\x07" +
        "\x02\u0473\u0471\x03\x02\x02\x02\u0473\u0474\x03\x02\x02\x02\u0474\x95" +
        "\x03\x02\x02\x02\u0475\u0477\x07@\x02\x02\u0476\u0478\x05X-\x02\u0477" +
        "\u0476\x03\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478\u0479\x03\x02" +
        "\x02\x02\u0479\u047A\x05^0\x02\u047A\x97\x03\x02\x02\x02\u047B\u047D\x07" +
        "@\x02\x02\u047C\u047E\x05V,\x02\u047D\u047C\x03\x02\x02\x02\u047D\u047E" +
        "\x03\x02\x02\x02\u047E\u0481\x03\x02\x02\x02\u047F\u0480\x07/\x02\x02" +
        "\u0480\u0482\x05\f\x07\x02\u0481\u047F\x03\x02\x02\x02\u0481\u0482\x03" +
        "\x02\x02\x02\u0482\u0485\x03\x02\x02\x02\u0483\u0484\x070\x02\x02\u0484" +
        "\u0486\x05\f\x07\x02\u0485\u0483\x03\x02\x02\x02\u0485\u0486\x03\x02\x02" +
        "\x02\u0486\x99\x03\x02\x02\x02\u0487\u0488\x07\x12\x02\x02\u0488\u048C" +
        "\x05\x9EP\x02\u0489\u048A\x072\x02\x02\u048A\u048C\x05\xA0Q\x02\u048B" +
        "\u0487\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048C\x9B\x03\x02\x02" +
        "\x02\u048D\u0494\x05\x9AN\x02\u048E\u048F\x07:\x02\x02\u048F\u0494\x05" +
        "\xA2R\x02\u0490\u0491\x07\x11\x02\x02\u0491\u0494\x05\xA4S\x02\u0492\u0494" +
        "\x05\xA6T\x02\u0493\u048D\x03\x02\x02\x02\u0493\u048E\x03\x02\x02\x02" +
        "\u0493\u0490\x03\x02\x02\x02\u0493\u0492\x03\x02\x02\x02\u0494\x9D\x03" +
        "\x02\x02\x02\u0495\u049A\x05N(\x02\u0496\u0497\x07\x06\x02\x02\u0497\u0499" +
        "\x05N(\x02\u0498\u0496\x03\x02\x02\x02\u0499\u049C\x03\x02\x02\x02\u049A" +
        "\u0498\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u04A1\x03\x02" +
        "\x02\x02\u049C\u049A\x03\x02\x02\x02\u049D\u049E\x07\x15\x02\x02\u049E" +
        "\u04A0\x05\f\x07\x02\u049F\u049D\x03\x02\x02\x02\u04A0\u04A3\x03\x02\x02" +
        "\x02\u04A1\u049F\x03\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04A4" +
        "\x03\x02\x02\x02\u04A3\u04A1\x03\x02\x02\x02\u04A4\u04A5\x07%\x02\x02" +
        "\u04A5\u04A6\x05(\x15\x02\u04A6\x9F\x03\x02\x02\x02\u04A7\u04AF\x05\x9E" +
        "P\x02\u04A8\u04A9\x05\x06\x04\x02\u04A9\u04AA\x07\x15\x02\x02\u04AA\u04AB" +
        "\x05\f\x07\x02\u04AB\u04AC\x07%\x02\x02\u04AC\u04AD\x07\x16\x02\x02\u04AD" +
        "\u04AF\x03\x02\x02\x02\u04AE\u04A7\x03\x02\x02\x02\u04AE\u04A8\x03\x02" +
        "\x02\x02\u04AF\xA1\x03\x02\x02\x02\u04B0\u04B3\x05\x96L\x02\u04B1\u04B2" +
        "\x07\x15\x02\x02\u04B2\u04B4\x05\f\x07\x02\u04B3\u04B1\x03\x02\x02\x02" +
        "\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5\u04B6\x07" +
        "%\x02\x02\u04B6\u04B7\x05(\x15\x02\u04B7\u04C6\x03\x02\x02\x02\u04B8\u04B9" +
        "\x05\x96L\x02\u04B9\u04BA\x07\x0F\x02\x02\u04BA\u04BB\x05:\x1E\x02\u04BB" +
        "\u04BC\x07\x10\x02\x02\u04BC\u04C6\x03\x02\x02\x02\u04BD\u04BE\x07\x07" +
        "\x02\x02\u04BE\u04BF\x05`1\x02\u04BF\u04C3\x05^0\x02\u04C0\u04C1\x07%" +
        "\x02\x02\u04C1\u04C4\x05\xC0a\x02\u04C2\u04C4\x05\xC2b\x02\u04C3\u04C0" +
        "\x03\x02\x02\x02\u04C3\u04C2\x03\x02\x02\x02\u04C4\u04C6\x03\x02\x02\x02" +
        "\u04C5\u04B0\x03\x02\x02\x02\u04C5\u04B8\x03\x02\x02\x02\u04C5\u04BD\x03" +
        "\x02\x02\x02\u04C6\xA3\x03\x02\x02\x02\u04C7\u04C9\x07@\x02\x02\u04C8" +
        "\u04CA\x05V,\x02\u04C9\u04C8\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02" +
        "\u04CA\u04CB\x03\x02\x02\x02\u04CB\u04CC\x07%\x02\x02\u04CC\u04CD\x05" +
        "\f\x07\x02\u04CD\xA5\x03\x02\x02\x02\u04CE\u04D0\x07,\x02\x02\u04CF\u04CE" +
        "\x03\x02\x02\x02\u04CF\u04D0\x03\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02" +
        "\u04D1\u04D2\x07;\x02\x02\u04D2\u04DB\x05\xA8U\x02\u04D3\u04D5\x07,\x02" +
        "\x02\u04D4\u04D3\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5\u04D6" +
        "\x03\x02\x02\x02\u04D6\u04D7\x07<\x02\x02\u04D7\u04DB\x05\xACW\x02\u04D8" +
        "\u04D9\x07=\x02\x02\u04D9\u04DB\x05\xAAV\x02\u04DA\u04CF\x03\x02\x02\x02" +
        "\u04DA\u04D4\x03\x02\x02\x02\u04DA\u04D8\x03\x02\x02\x02\u04DB\xA7\x03" +
        "\x02\x02\x02\u04DC\u04DE\x07@\x02\x02\u04DD\u04DF\x05V,\x02\u04DE\u04DD" +
        "\x03\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF\u04E3\x03\x02\x02\x02" +
        "\u04E0\u04E2\x05~@\x02\u04E1\u04E0\x03\x02\x02\x02\u04E2\u04E5\x03\x02" +
        "\x02\x02\u04E3\u04E1\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02\u04E4" +
        "\u04E7\x03\x02\x02\x02\u04E5\u04E3\x03\x02\x02\x02\u04E6\u04E8\x05x=\x02" +
        "\u04E7\u04E6\x03\x02\x02\x02\u04E7\u04E8\x03\x02\x02\x02\u04E8\u04E9\x03" +
        "\x02\x02\x02\u04E9\u04EA\x05h5\x02\u04EA\u04EB\x05\xAEX\x02\u04EB\xA9" +
        "\x03\x02\x02\x02\u04EC\u04EE\x07@\x02\x02\u04ED\u04EF\x05V,\x02\u04EE" +
        "\u04ED\x03\x02\x02\x02\u04EE\u04EF\x03\x02\x02\x02\u04EF\u04F0\x03\x02" +
        "\x02\x02\u04F0\u04F1\x05\xB0Y\x02\u04F1\xAB\x03\x02\x02\x02\u04F2\u04F3" +
        "\x07@\x02\x02\u04F3\u04F4\x05\xAEX\x02\u04F4\xAD\x03\x02\x02\x02\u04F5" +
        "\u04F6\x07>\x02\x02\u04F6\u04FE\x05\xB2Z\x02\u04F7\u04F9\x07>\x02\x02" +
        "\u04F8\u04F7\x03\x02\x02\x02\u04F8\u04F9\x03\x02\x02\x02\u04F9\u04FA\x03" +
        "\x02\x02\x02\u04FA\u04FC\x05\x80A\x02\u04FB\u04F8\x03\x02\x02\x02\u04FB" +
        "\u04FC\x03\x02\x02\x02\u04FC\u04FE\x03\x02\x02\x02\u04FD\u04F5\x03\x02" +
        "\x02\x02\u04FD\u04FB\x03\x02\x02\x02\u04FE\xAF\x03\x02\x02\x02\u04FF\u0500" +
        "\x07>\x02\x02\u0500\u0508\x05\xB4[\x02\u0501\u0503\x07>\x02\x02\u0502" +
        "\u0501\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503\u0504\x03\x02" +
        "\x02\x02\u0504\u0506\x05\x80A\x02\u0505\u0502\x03\x02\x02\x02\u0505\u0506" +
        "\x03\x02\x02\x02\u0506\u0508\x03\x02\x02\x02\u0507\u04FF\x03\x02\x02\x02" +
        "\u0507\u0505\x03\x02\x02\x02\u0508\xB1\x03\x02\x02\x02\u0509\u050B\x05" +
        "\xBC_\x02\u050A\u0509\x03\x02\x02\x02\u050A\u050B\x03\x02\x02\x02\u050B" +
        "\u050C\x03\x02\x02\x02\u050C\u050E\x05\xB6\\\x02\u050D\u050F\x05\x80A" +
        "\x02\u050E\u050D\x03\x02\x02\x02\u050E\u050F\x03\x02\x02\x02\u050F\xB3" +
        "\x03\x02\x02\x02\u0510\u0512\x05\xBC_\x02\u0511\u0510\x03\x02\x02\x02" +
        "\u0511\u0512\x03\x02\x02\x02\u0512\u0513\x03\x02\x02\x02\u0513\u0515\x05" +
        "\xB8]\x02\u0514\u0516\x05\x80A\x02\u0515\u0514\x03\x02\x02\x02\u0515\u0516" +
        "\x03\x02\x02\x02\u0516\xB5\x03\x02\x02\x02\u0517\u051C\x05\xBA^\x02\u0518" +
        "\u0519\x07\x13\x02\x02\u0519\u051B\x05\x18\r\x02\u051A\u0518\x03\x02\x02" +
        "\x02\u051B\u051E\x03\x02\x02\x02\u051C\u051A\x03\x02\x02\x02\u051C\u051D" +
        "\x03\x02\x02\x02\u051D\xB7\x03\x02\x02\x02\u051E\u051C\x03\x02\x02\x02" +
        "\u051F\u0524\x05\x18\r\x02\u0520\u0521\x07\x13\x02\x02\u0521\u0523\x05" +
        "\x18\r\x02\u0522\u0520\x03\x02\x02\x02\u0523\u0526\x03\x02\x02\x02\u0524" +
        "\u0522\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\xB9\x03\x02\x02" +
        "\x02\u0526\u0524\x03\x02\x02\x02\u0527\u052B\x05\x18\r\x02\u0528\u052A" +
        "\x056\x1C\x02\u0529\u0528\x03\x02\x02\x02\u052A\u052D\x03\x02\x02\x02" +
        "\u052B\u0529\x03\x02\x02\x02\u052B\u052C\x03\x02\x02\x02\u052C\xBB\x03" +
        "\x02\x02\x02\u052D\u052B\x03\x02\x02\x02\u052E\u0537\x07\x0F\x02\x02\u052F" +
        "\u0534\x05\xBE`\x02\u0530\u0531\x07K\x02\x02\u0531\u0533\x05\xBE`\x02" +
        "\u0532\u0530\x03\x02\x02\x02\u0533\u0536\x03\x02\x02\x02\u0534\u0532\x03" +
        "\x02\x02\x02\u0534\u0535\x03\x02\x02\x02\u0535\u0538\x03\x02\x02\x02\u0536" +
        "\u0534\x03\x02\x02\x02\u0537\u052F\x03\x02\x02\x02\u0537\u0538\x03\x02" +
        "\x02\x02\u0538\u0539\x03\x02\x02\x02\u0539\u053A\x07\x10\x02\x02\u053A" +
        "\u053B\x07\x13\x02\x02\u053B\xBD\x03\x02\x02\x02\u053C\u053E\x05|?\x02" +
        "\u053D\u053C\x03\x02\x02\x02\u053E\u0541\x03\x02\x02\x02\u053F\u053D\x03" +
        "\x02\x02\x02\u053F\u0540\x03\x02\x02\x02\u0540\u0545\x03\x02\x02\x02\u0541" +
        "\u053F\x03\x02\x02\x02\u0542\u0544\x05t;\x02\u0543\u0542\x03\x02\x02\x02" +
        "\u0544\u0547\x03\x02\x02\x02\u0545\u0543\x03\x02\x02\x02\u0545\u0546\x03" +
        "\x02\x02\x02\u0546\u0548\x03\x02\x02\x02\u0547\u0545\x03\x02\x02\x02\u0548" +
        "\u0549\x05\x9AN\x02\u0549\xBF\x03\x02\x02\x02\u054A\u054D\x05\xC4c\x02" +
        "\u054B\u054D\x05\xC2b\x02\u054C\u054A\x03\x02\x02\x02\u054C\u054B\x03" +
        "\x02\x02\x02\u054D\xC1\x03\x02\x02\x02\u054E\u054F\x07\x0F\x02\x02\u054F" +
        "\u0554\x05\xC4c\x02\u0550\u0551\x07L\x02\x02\u0551\u0553\x05<\x1F\x02" +
        "\u0552\u0550\x03\x02\x02\x02\u0553\u0556\x03\x02\x02\x02\u0554\u0552\x03" +
        "\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555\u0557\x03\x02\x02\x02\u0556" +
        "\u0554\x03\x02\x02\x02\u0557\u0558\x07\x10\x02\x02\u0558\xC3\x03\x02\x02" +
        "\x02\u0559\u055B\x07\x07\x02\x02\u055A\u055C\x056\x1C\x02\u055B\u055A" +
        "\x03\x02\x02\x02\u055C\u055D\x03\x02\x02\x02\u055D\u055B\x03\x02\x02\x02" +
        "\u055D\u055E\x03\x02\x02\x02\u055E\xC5\x03\x02\x02\x02\u055F\u0564\x05" +
        "\xC8e\x02\u0560\u0561\x07K\x02\x02\u0561\u0563\x05\xC8e\x02\u0562\u0560" +
        "\x03\x02\x02\x02\u0563\u0566\x03\x02\x02\x02\u0564\u0562\x03\x02\x02\x02" +
        "\u0564\u0565\x03\x02\x02\x02\u0565\xC7\x03\x02\x02\x02\u0566\u0564\x03" +
        "\x02\x02\x02\u0567\u0569\x05|?\x02\u0568\u0567\x03\x02\x02\x02\u0569\u056C" +
        "\x03\x02\x02\x02\u056A\u0568\x03\x02\x02\x02\u056A\u056B\x03\x02\x02\x02" +
        "\u056B\u0570\x03\x02\x02\x02\u056C\u056A\x03\x02\x02\x02\u056D\u056F\x05" +
        "t;\x02\u056E\u056D\x03\x02\x02\x02\u056F\u0572\x03\x02\x02\x02\u0570\u056E" +
        "\x03\x02\x02\x02\u0570\u0571\x03\x02\x02\x02\u0571\u0573\x03\x02\x02\x02" +
        "\u0572\u0570\x03\x02\x02\x02\u0573\u0579\x05\xA6T\x02\u0574\u0579\x05" +
        "\x86D\x02\u0575\u0579\x05\xCAf\x02\u0576\u0579\x05\xCCg\x02\u0577\u0579" +
        "\x03\x02\x02\x02\u0578\u056A\x03\x02\x02\x02\u0578\u0574\x03\x02\x02\x02" +
        "\u0578\u0575\x03\x02\x02\x02\u0578\u0576\x03\x02\x02\x02\u0578\u0577\x03" +
        "\x02\x02\x02\u0579\xC9\x03\x02\x02\x02\u057A\u057B\x07?\x02\x02\u057B" +
        "\u057C\x05\x04\x03\x02\u057C\u057D\x07\x0F\x02\x02\u057D\u057E\x05\xC6" +
        "d\x02\u057E\u057F\x07\x10\x02\x02\u057F\xCB\x03\x02\x02\x02\u0580\u0581" +
        "\x07?\x02\x02\u0581\u0582\x07<\x02\x02\u0582\u0583\x05\xACW\x02\u0583" +
        "\xCD\x03\x02\x02\x02\u0584\u0585\x07?\x02\x02\u0585\u0587\x05\x04\x03" +
        "\x02\u0586\u0588\x07K\x02\x02\u0587\u0586\x03\x02\x02\x02\u0587\u0588" +
        "\x03\x02\x02\x02\u0588\u058A\x03\x02\x02\x02\u0589\u0584\x03\x02\x02\x02" +
        "\u058A\u058D\x03\x02\x02\x02\u058B\u0589\x03\x02\x02\x02\u058B\u058C\x03" +
        "\x02\x02\x02\u058C\u058E\x03\x02\x02\x02\u058D\u058B\x03\x02\x02\x02\u058E" +
        "\u058F\x05\xC6d\x02\u058F\xCF\x03\x02\x02\x02\xC3\xD1\xD5\xDD\xE4\xEC" +
        "\xF2\xF5\xFB\xFF\u0103\u010F\u0111\u011A\u011D\u0120\u0129\u0132\u0139" +
        "\u0141\u0145\u0148\u014E\u0156\u0159\u0161\u0168\u016A\u0176\u017F\u0188" +
        "\u0192\u0197\u019B\u019F\u01A4\u01AC\u01B0\u01BE\u01C5\u01C9\u01CE\u01DE" +
        "\u01E1\u01E9\u01EE\u01F3\u01F5\u020C\u0210\u021A\u021E\u0223\u0228\u022A" +
        "\u0231\u0237\u023D\u0240\u0248\u024B\u024F\u0255\u025D\u0262\u0269\u0272" +
        "\u027C\u0283\u0287\u028D\u0291\u0297\u029D\u02A3\u02A8\u02AC\u02B0\u02B5" +
        "\u02BC\u02C3\u02CB\u02CD\u02D3\u02D8\u02E5\u02EF\u02F4\u02F7\u02FF\u0302" +
        "\u030A\u030D\u0312\u0315\u0319\u0321\u0324\u032B\u0331\u0333\u033B\u0346" +
        "\u034C\u034F\u0355\u0359\u035D\u0363\u036A\u0370\u0378\u037C\u0385\u038B" +
        "\u0391\u0395\u039D\u03A2\u03AA\u03AE\u03B7\u03BD\u03C3\u03C7\u03CE\u03D6" +
        "\u03DE\u03E3\u03E9\u03F4\u03FC\u0400\u0407\u0410\u0416\u041D\u0423\u0429" +
        "\u042E\u0436\u043E\u0446\u044E\u0453\u045C\u0466\u0473\u0477\u047D\u0481" +
        "\u0485\u048B\u0493\u049A\u04A1\u04AE\u04B3\u04C3\u04C5\u04C9\u04CF\u04D4" +
        "\u04DA\u04DE\u04E3\u04E7\u04EE\u04F8\u04FB\u04FD\u0502\u0505\u0507\u050A" +
        "\u050E\u0511\u0515\u051C\u0524\u052B\u0534\u0537\u053F\u0545\u054C\u0554" +
        "\u055D\u0564\u056A\u0570\u0578\u0587\u058B";
    ScalaParser._serializedATN = Utils.join([
        ScalaParser._serializedATNSegment0,
        ScalaParser._serializedATNSegment1,
        ScalaParser._serializedATNSegment2,
    ], "");
    return ScalaParser;
}(Parser_1.Parser));
exports.ScalaParser = ScalaParser;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.IntegerLiteral = function () { return this.tryGetToken(ScalaParser.IntegerLiteral, 0); };
    LiteralContext.prototype.FloatingPointLiteral = function () { return this.tryGetToken(ScalaParser.FloatingPointLiteral, 0); };
    LiteralContext.prototype.BooleanLiteral = function () { return this.tryGetToken(ScalaParser.BooleanLiteral, 0); };
    LiteralContext.prototype.CharacterLiteral = function () { return this.tryGetToken(ScalaParser.CharacterLiteral, 0); };
    LiteralContext.prototype.StringLiteral = function () { return this.tryGetToken(ScalaParser.StringLiteral, 0); };
    LiteralContext.prototype.SymbolLiteral = function () { return this.tryGetToken(ScalaParser.SymbolLiteral, 0); };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteral) {
            listener.enterLiteral(this);
        }
    };
    // @Override
    LiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteral) {
            listener.exitLiteral(this);
        }
    };
    // @Override
    LiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LiteralContext = LiteralContext;
var QualIdContext = /** @class */ (function (_super) {
    __extends(QualIdContext, _super);
    function QualIdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualIdContext.prototype.Id = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Id);
        }
        else {
            return this.getToken(ScalaParser.Id, i);
        }
    };
    Object.defineProperty(QualIdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_qualId; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QualIdContext.prototype.enterRule = function (listener) {
        if (listener.enterQualId) {
            listener.enterQualId(this);
        }
    };
    // @Override
    QualIdContext.prototype.exitRule = function (listener) {
        if (listener.exitQualId) {
            listener.exitQualId(this);
        }
    };
    // @Override
    QualIdContext.prototype.accept = function (visitor) {
        if (visitor.visitQualId) {
            return visitor.visitQualId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QualIdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QualIdContext = QualIdContext;
var IdsContext = /** @class */ (function (_super) {
    __extends(IdsContext, _super);
    function IdsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdsContext.prototype.Id = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Id);
        }
        else {
            return this.getToken(ScalaParser.Id, i);
        }
    };
    Object.defineProperty(IdsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_ids; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdsContext.prototype.enterRule = function (listener) {
        if (listener.enterIds) {
            listener.enterIds(this);
        }
    };
    // @Override
    IdsContext.prototype.exitRule = function (listener) {
        if (listener.exitIds) {
            listener.exitIds(this);
        }
    };
    // @Override
    IdsContext.prototype.accept = function (visitor) {
        if (visitor.visitIds) {
            return visitor.visitIds(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdsContext = IdsContext;
var StableIdContext = /** @class */ (function (_super) {
    __extends(StableIdContext, _super);
    function StableIdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StableIdContext.prototype.Id = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Id);
        }
        else {
            return this.getToken(ScalaParser.Id, i);
        }
    };
    StableIdContext.prototype.classQualifier = function () {
        return this.tryGetRuleContext(0, ClassQualifierContext);
    };
    Object.defineProperty(StableIdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_stableId; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StableIdContext.prototype.enterRule = function (listener) {
        if (listener.enterStableId) {
            listener.enterStableId(this);
        }
    };
    // @Override
    StableIdContext.prototype.exitRule = function (listener) {
        if (listener.exitStableId) {
            listener.exitStableId(this);
        }
    };
    // @Override
    StableIdContext.prototype.accept = function (visitor) {
        if (visitor.visitStableId) {
            return visitor.visitStableId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StableIdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StableIdContext = StableIdContext;
var ClassQualifierContext = /** @class */ (function (_super) {
    __extends(ClassQualifierContext, _super);
    function ClassQualifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassQualifierContext.prototype.Id = function () { return this.getToken(ScalaParser.Id, 0); };
    Object.defineProperty(ClassQualifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_classQualifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassQualifierContext.prototype.enterRule = function (listener) {
        if (listener.enterClassQualifier) {
            listener.enterClassQualifier(this);
        }
    };
    // @Override
    ClassQualifierContext.prototype.exitRule = function (listener) {
        if (listener.exitClassQualifier) {
            listener.exitClassQualifier(this);
        }
    };
    // @Override
    ClassQualifierContext.prototype.accept = function (visitor) {
        if (visitor.visitClassQualifier) {
            return visitor.visitClassQualifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassQualifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassQualifierContext = ClassQualifierContext;
var Type_Context = /** @class */ (function (_super) {
    __extends(Type_Context, _super);
    function Type_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_Context.prototype.functionArgTypes = function () {
        return this.tryGetRuleContext(0, FunctionArgTypesContext);
    };
    Type_Context.prototype.type_ = function () {
        return this.tryGetRuleContext(0, Type_Context);
    };
    Type_Context.prototype.infixType = function () {
        return this.tryGetRuleContext(0, InfixTypeContext);
    };
    Type_Context.prototype.existentialClause = function () {
        return this.tryGetRuleContext(0, ExistentialClauseContext);
    };
    Object.defineProperty(Type_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_type_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_Context.prototype.enterRule = function (listener) {
        if (listener.enterType_) {
            listener.enterType_(this);
        }
    };
    // @Override
    Type_Context.prototype.exitRule = function (listener) {
        if (listener.exitType_) {
            listener.exitType_(this);
        }
    };
    // @Override
    Type_Context.prototype.accept = function (visitor) {
        if (visitor.visitType_) {
            return visitor.visitType_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_Context = Type_Context;
var FunctionArgTypesContext = /** @class */ (function (_super) {
    __extends(FunctionArgTypesContext, _super);
    function FunctionArgTypesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionArgTypesContext.prototype.infixType = function () {
        return this.tryGetRuleContext(0, InfixTypeContext);
    };
    FunctionArgTypesContext.prototype.paramType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamTypeContext);
        }
        else {
            return this.getRuleContext(i, ParamTypeContext);
        }
    };
    Object.defineProperty(FunctionArgTypesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_functionArgTypes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionArgTypesContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionArgTypes) {
            listener.enterFunctionArgTypes(this);
        }
    };
    // @Override
    FunctionArgTypesContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionArgTypes) {
            listener.exitFunctionArgTypes(this);
        }
    };
    // @Override
    FunctionArgTypesContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionArgTypes) {
            return visitor.visitFunctionArgTypes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionArgTypesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionArgTypesContext = FunctionArgTypesContext;
var ExistentialClauseContext = /** @class */ (function (_super) {
    __extends(ExistentialClauseContext, _super);
    function ExistentialClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExistentialClauseContext.prototype.existentialDcl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExistentialDclContext);
        }
        else {
            return this.getRuleContext(i, ExistentialDclContext);
        }
    };
    ExistentialClauseContext.prototype.Sep = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Sep);
        }
        else {
            return this.getToken(ScalaParser.Sep, i);
        }
    };
    Object.defineProperty(ExistentialClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_existentialClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExistentialClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterExistentialClause) {
            listener.enterExistentialClause(this);
        }
    };
    // @Override
    ExistentialClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitExistentialClause) {
            listener.exitExistentialClause(this);
        }
    };
    // @Override
    ExistentialClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitExistentialClause) {
            return visitor.visitExistentialClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExistentialClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExistentialClauseContext = ExistentialClauseContext;
var ExistentialDclContext = /** @class */ (function (_super) {
    __extends(ExistentialDclContext, _super);
    function ExistentialDclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExistentialDclContext.prototype.typeDcl = function () {
        return this.tryGetRuleContext(0, TypeDclContext);
    };
    ExistentialDclContext.prototype.valDcl = function () {
        return this.tryGetRuleContext(0, ValDclContext);
    };
    Object.defineProperty(ExistentialDclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_existentialDcl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExistentialDclContext.prototype.enterRule = function (listener) {
        if (listener.enterExistentialDcl) {
            listener.enterExistentialDcl(this);
        }
    };
    // @Override
    ExistentialDclContext.prototype.exitRule = function (listener) {
        if (listener.exitExistentialDcl) {
            listener.exitExistentialDcl(this);
        }
    };
    // @Override
    ExistentialDclContext.prototype.accept = function (visitor) {
        if (visitor.visitExistentialDcl) {
            return visitor.visitExistentialDcl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExistentialDclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExistentialDclContext = ExistentialDclContext;
var InfixTypeContext = /** @class */ (function (_super) {
    __extends(InfixTypeContext, _super);
    function InfixTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InfixTypeContext.prototype.compoundType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CompoundTypeContext);
        }
        else {
            return this.getRuleContext(i, CompoundTypeContext);
        }
    };
    InfixTypeContext.prototype.Id = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Id);
        }
        else {
            return this.getToken(ScalaParser.Id, i);
        }
    };
    Object.defineProperty(InfixTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_infixType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InfixTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterInfixType) {
            listener.enterInfixType(this);
        }
    };
    // @Override
    InfixTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitInfixType) {
            listener.exitInfixType(this);
        }
    };
    // @Override
    InfixTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitInfixType) {
            return visitor.visitInfixType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InfixTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InfixTypeContext = InfixTypeContext;
var CompoundTypeContext = /** @class */ (function (_super) {
    __extends(CompoundTypeContext, _super);
    function CompoundTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompoundTypeContext.prototype.annotType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotTypeContext);
        }
        else {
            return this.getRuleContext(i, AnnotTypeContext);
        }
    };
    CompoundTypeContext.prototype.refinement = function () {
        return this.tryGetRuleContext(0, RefinementContext);
    };
    Object.defineProperty(CompoundTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_compoundType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompoundTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterCompoundType) {
            listener.enterCompoundType(this);
        }
    };
    // @Override
    CompoundTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitCompoundType) {
            listener.exitCompoundType(this);
        }
    };
    // @Override
    CompoundTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitCompoundType) {
            return visitor.visitCompoundType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompoundTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompoundTypeContext = CompoundTypeContext;
var AnnotTypeContext = /** @class */ (function (_super) {
    __extends(AnnotTypeContext, _super);
    function AnnotTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotTypeContext.prototype.simpleType = function () {
        return this.getRuleContext(0, SimpleTypeContext);
    };
    AnnotTypeContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    Object.defineProperty(AnnotTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_annotType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotType) {
            listener.enterAnnotType(this);
        }
    };
    // @Override
    AnnotTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotType) {
            listener.exitAnnotType(this);
        }
    };
    // @Override
    AnnotTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotType) {
            return visitor.visitAnnotType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotTypeContext = AnnotTypeContext;
var SimpleTypeContext = /** @class */ (function (_super) {
    __extends(SimpleTypeContext, _super);
    function SimpleTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleTypeContext.prototype.simpleType = function () {
        return this.tryGetRuleContext(0, SimpleTypeContext);
    };
    SimpleTypeContext.prototype.typeArgs = function () {
        return this.tryGetRuleContext(0, TypeArgsContext);
    };
    SimpleTypeContext.prototype.Id = function () { return this.tryGetToken(ScalaParser.Id, 0); };
    SimpleTypeContext.prototype.stableId = function () {
        return this.tryGetRuleContext(0, StableIdContext);
    };
    SimpleTypeContext.prototype.types = function () {
        return this.tryGetRuleContext(0, TypesContext);
    };
    Object.defineProperty(SimpleTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_simpleType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleType) {
            listener.enterSimpleType(this);
        }
    };
    // @Override
    SimpleTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleType) {
            listener.exitSimpleType(this);
        }
    };
    // @Override
    SimpleTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleType) {
            return visitor.visitSimpleType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleTypeContext = SimpleTypeContext;
var TypeArgsContext = /** @class */ (function (_super) {
    __extends(TypeArgsContext, _super);
    function TypeArgsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeArgsContext.prototype.types = function () {
        return this.getRuleContext(0, TypesContext);
    };
    Object.defineProperty(TypeArgsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_typeArgs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeArgsContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeArgs) {
            listener.enterTypeArgs(this);
        }
    };
    // @Override
    TypeArgsContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeArgs) {
            listener.exitTypeArgs(this);
        }
    };
    // @Override
    TypeArgsContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeArgs) {
            return visitor.visitTypeArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeArgsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeArgsContext = TypeArgsContext;
var TypesContext = /** @class */ (function (_super) {
    __extends(TypesContext, _super);
    function TypesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypesContext.prototype.type_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }
        else {
            return this.getRuleContext(i, Type_Context);
        }
    };
    Object.defineProperty(TypesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_types; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypesContext.prototype.enterRule = function (listener) {
        if (listener.enterTypes) {
            listener.enterTypes(this);
        }
    };
    // @Override
    TypesContext.prototype.exitRule = function (listener) {
        if (listener.exitTypes) {
            listener.exitTypes(this);
        }
    };
    // @Override
    TypesContext.prototype.accept = function (visitor) {
        if (visitor.visitTypes) {
            return visitor.visitTypes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypesContext = TypesContext;
var RefinementContext = /** @class */ (function (_super) {
    __extends(RefinementContext, _super);
    function RefinementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RefinementContext.prototype.refineStat = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RefineStatContext);
        }
        else {
            return this.getRuleContext(i, RefineStatContext);
        }
    };
    RefinementContext.prototype.Sep = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Sep);
        }
        else {
            return this.getToken(ScalaParser.Sep, i);
        }
    };
    Object.defineProperty(RefinementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_refinement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RefinementContext.prototype.enterRule = function (listener) {
        if (listener.enterRefinement) {
            listener.enterRefinement(this);
        }
    };
    // @Override
    RefinementContext.prototype.exitRule = function (listener) {
        if (listener.exitRefinement) {
            listener.exitRefinement(this);
        }
    };
    // @Override
    RefinementContext.prototype.accept = function (visitor) {
        if (visitor.visitRefinement) {
            return visitor.visitRefinement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RefinementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RefinementContext = RefinementContext;
var RefineStatContext = /** @class */ (function (_super) {
    __extends(RefineStatContext, _super);
    function RefineStatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RefineStatContext.prototype.dcl = function () {
        return this.tryGetRuleContext(0, DclContext);
    };
    RefineStatContext.prototype.typeDef = function () {
        return this.tryGetRuleContext(0, TypeDefContext);
    };
    Object.defineProperty(RefineStatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_refineStat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RefineStatContext.prototype.enterRule = function (listener) {
        if (listener.enterRefineStat) {
            listener.enterRefineStat(this);
        }
    };
    // @Override
    RefineStatContext.prototype.exitRule = function (listener) {
        if (listener.exitRefineStat) {
            listener.exitRefineStat(this);
        }
    };
    // @Override
    RefineStatContext.prototype.accept = function (visitor) {
        if (visitor.visitRefineStat) {
            return visitor.visitRefineStat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RefineStatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RefineStatContext = RefineStatContext;
var TypePatContext = /** @class */ (function (_super) {
    __extends(TypePatContext, _super);
    function TypePatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypePatContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    Object.defineProperty(TypePatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_typePat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypePatContext.prototype.enterRule = function (listener) {
        if (listener.enterTypePat) {
            listener.enterTypePat(this);
        }
    };
    // @Override
    TypePatContext.prototype.exitRule = function (listener) {
        if (listener.exitTypePat) {
            listener.exitTypePat(this);
        }
    };
    // @Override
    TypePatContext.prototype.accept = function (visitor) {
        if (visitor.visitTypePat) {
            return visitor.visitTypePat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypePatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypePatContext = TypePatContext;
var AscriptionContext = /** @class */ (function (_super) {
    __extends(AscriptionContext, _super);
    function AscriptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AscriptionContext.prototype.infixType = function () {
        return this.tryGetRuleContext(0, InfixTypeContext);
    };
    AscriptionContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    Object.defineProperty(AscriptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_ascription; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AscriptionContext.prototype.enterRule = function (listener) {
        if (listener.enterAscription) {
            listener.enterAscription(this);
        }
    };
    // @Override
    AscriptionContext.prototype.exitRule = function (listener) {
        if (listener.exitAscription) {
            listener.exitAscription(this);
        }
    };
    // @Override
    AscriptionContext.prototype.accept = function (visitor) {
        if (visitor.visitAscription) {
            return visitor.visitAscription(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AscriptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AscriptionContext = AscriptionContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    ExprContext.prototype.bindings = function () {
        return this.tryGetRuleContext(0, BindingsContext);
    };
    ExprContext.prototype.Id = function () { return this.tryGetToken(ScalaParser.Id, 0); };
    ExprContext.prototype.expr1 = function () {
        return this.tryGetRuleContext(0, Expr1Context);
    };
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprContext.prototype.enterRule = function (listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    };
    // @Override
    ExprContext.prototype.exitRule = function (listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    };
    // @Override
    ExprContext.prototype.accept = function (visitor) {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprContext = ExprContext;
var Expr1Context = /** @class */ (function (_super) {
    __extends(Expr1Context, _super);
    function Expr1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr1Context.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Expr1Context.prototype.Semi = function () { return this.tryGetToken(ScalaParser.Semi, 0); };
    Expr1Context.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    Expr1Context.prototype.caseClauses = function () {
        return this.tryGetRuleContext(0, CaseClausesContext);
    };
    Expr1Context.prototype.enumerators = function () {
        return this.tryGetRuleContext(0, EnumeratorsContext);
    };
    Expr1Context.prototype.Id = function () { return this.tryGetToken(ScalaParser.Id, 0); };
    Expr1Context.prototype.blockExpr = function () {
        return this.tryGetRuleContext(0, BlockExprContext);
    };
    Expr1Context.prototype.simpleExpr1 = function () {
        return this.tryGetRuleContext(0, SimpleExpr1Context);
    };
    Expr1Context.prototype.classTemplate = function () {
        return this.tryGetRuleContext(0, ClassTemplateContext);
    };
    Expr1Context.prototype.templateBody = function () {
        return this.tryGetRuleContext(0, TemplateBodyContext);
    };
    Expr1Context.prototype.argumentExprs = function () {
        return this.tryGetRuleContext(0, ArgumentExprsContext);
    };
    Expr1Context.prototype.postfixExpr = function () {
        return this.tryGetRuleContext(0, PostfixExprContext);
    };
    Expr1Context.prototype.ascription = function () {
        return this.tryGetRuleContext(0, AscriptionContext);
    };
    Object.defineProperty(Expr1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_expr1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr1Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr1) {
            listener.enterExpr1(this);
        }
    };
    // @Override
    Expr1Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr1) {
            listener.exitExpr1(this);
        }
    };
    // @Override
    Expr1Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr1) {
            return visitor.visitExpr1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr1Context = Expr1Context;
var PostfixExprContext = /** @class */ (function (_super) {
    __extends(PostfixExprContext, _super);
    function PostfixExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PostfixExprContext.prototype.infixExpr = function () {
        return this.getRuleContext(0, InfixExprContext);
    };
    PostfixExprContext.prototype.Id = function () { return this.tryGetToken(ScalaParser.Id, 0); };
    Object.defineProperty(PostfixExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_postfixExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PostfixExprContext.prototype.enterRule = function (listener) {
        if (listener.enterPostfixExpr) {
            listener.enterPostfixExpr(this);
        }
    };
    // @Override
    PostfixExprContext.prototype.exitRule = function (listener) {
        if (listener.exitPostfixExpr) {
            listener.exitPostfixExpr(this);
        }
    };
    // @Override
    PostfixExprContext.prototype.accept = function (visitor) {
        if (visitor.visitPostfixExpr) {
            return visitor.visitPostfixExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostfixExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PostfixExprContext = PostfixExprContext;
var InfixExprContext = /** @class */ (function (_super) {
    __extends(InfixExprContext, _super);
    function InfixExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InfixExprContext.prototype.prefixExpr = function () {
        return this.tryGetRuleContext(0, PrefixExprContext);
    };
    InfixExprContext.prototype.infixExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InfixExprContext);
        }
        else {
            return this.getRuleContext(i, InfixExprContext);
        }
    };
    InfixExprContext.prototype.Id = function () { return this.tryGetToken(ScalaParser.Id, 0); };
    Object.defineProperty(InfixExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_infixExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InfixExprContext.prototype.enterRule = function (listener) {
        if (listener.enterInfixExpr) {
            listener.enterInfixExpr(this);
        }
    };
    // @Override
    InfixExprContext.prototype.exitRule = function (listener) {
        if (listener.exitInfixExpr) {
            listener.exitInfixExpr(this);
        }
    };
    // @Override
    InfixExprContext.prototype.accept = function (visitor) {
        if (visitor.visitInfixExpr) {
            return visitor.visitInfixExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InfixExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InfixExprContext = InfixExprContext;
var PrefixExprContext = /** @class */ (function (_super) {
    __extends(PrefixExprContext, _super);
    function PrefixExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrefixExprContext.prototype.blockExpr = function () {
        return this.tryGetRuleContext(0, BlockExprContext);
    };
    PrefixExprContext.prototype.simpleExpr1 = function () {
        return this.tryGetRuleContext(0, SimpleExpr1Context);
    };
    PrefixExprContext.prototype.classTemplate = function () {
        return this.tryGetRuleContext(0, ClassTemplateContext);
    };
    PrefixExprContext.prototype.templateBody = function () {
        return this.tryGetRuleContext(0, TemplateBodyContext);
    };
    Object.defineProperty(PrefixExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_prefixExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefixExprContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefixExpr) {
            listener.enterPrefixExpr(this);
        }
    };
    // @Override
    PrefixExprContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefixExpr) {
            listener.exitPrefixExpr(this);
        }
    };
    // @Override
    PrefixExprContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefixExpr) {
            return visitor.visitPrefixExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefixExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefixExprContext = PrefixExprContext;
var SimpleExpr1Context = /** @class */ (function (_super) {
    __extends(SimpleExpr1Context, _super);
    function SimpleExpr1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleExpr1Context.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    SimpleExpr1Context.prototype.stableId = function () {
        return this.tryGetRuleContext(0, StableIdContext);
    };
    SimpleExpr1Context.prototype.Id = function () { return this.tryGetToken(ScalaParser.Id, 0); };
    SimpleExpr1Context.prototype.exprs = function () {
        return this.tryGetRuleContext(0, ExprsContext);
    };
    SimpleExpr1Context.prototype.blockExpr = function () {
        return this.tryGetRuleContext(0, BlockExprContext);
    };
    SimpleExpr1Context.prototype.classTemplate = function () {
        return this.tryGetRuleContext(0, ClassTemplateContext);
    };
    SimpleExpr1Context.prototype.templateBody = function () {
        return this.tryGetRuleContext(0, TemplateBodyContext);
    };
    SimpleExpr1Context.prototype.typeArgs = function () {
        return this.tryGetRuleContext(0, TypeArgsContext);
    };
    SimpleExpr1Context.prototype.simpleExpr1 = function () {
        return this.tryGetRuleContext(0, SimpleExpr1Context);
    };
    SimpleExpr1Context.prototype.argumentExprs = function () {
        return this.tryGetRuleContext(0, ArgumentExprsContext);
    };
    Object.defineProperty(SimpleExpr1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_simpleExpr1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleExpr1Context.prototype.enterRule = function (listener) {
        if (listener.enterSimpleExpr1) {
            listener.enterSimpleExpr1(this);
        }
    };
    // @Override
    SimpleExpr1Context.prototype.exitRule = function (listener) {
        if (listener.exitSimpleExpr1) {
            listener.exitSimpleExpr1(this);
        }
    };
    // @Override
    SimpleExpr1Context.prototype.accept = function (visitor) {
        if (visitor.visitSimpleExpr1) {
            return visitor.visitSimpleExpr1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleExpr1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleExpr1Context = SimpleExpr1Context;
var ExprsContext = /** @class */ (function (_super) {
    __extends(ExprsContext, _super);
    function ExprsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprsContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Object.defineProperty(ExprsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_exprs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprsContext.prototype.enterRule = function (listener) {
        if (listener.enterExprs) {
            listener.enterExprs(this);
        }
    };
    // @Override
    ExprsContext.prototype.exitRule = function (listener) {
        if (listener.exitExprs) {
            listener.exitExprs(this);
        }
    };
    // @Override
    ExprsContext.prototype.accept = function (visitor) {
        if (visitor.visitExprs) {
            return visitor.visitExprs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprsContext = ExprsContext;
var ArgumentExprsContext = /** @class */ (function (_super) {
    __extends(ArgumentExprsContext, _super);
    function ArgumentExprsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentExprsContext.prototype.exprs = function () {
        return this.tryGetRuleContext(0, ExprsContext);
    };
    ArgumentExprsContext.prototype.postfixExpr = function () {
        return this.tryGetRuleContext(0, PostfixExprContext);
    };
    ArgumentExprsContext.prototype.blockExpr = function () {
        return this.tryGetRuleContext(0, BlockExprContext);
    };
    Object.defineProperty(ArgumentExprsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_argumentExprs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentExprsContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentExprs) {
            listener.enterArgumentExprs(this);
        }
    };
    // @Override
    ArgumentExprsContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentExprs) {
            listener.exitArgumentExprs(this);
        }
    };
    // @Override
    ArgumentExprsContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentExprs) {
            return visitor.visitArgumentExprs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentExprsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentExprsContext = ArgumentExprsContext;
var BlockExprContext = /** @class */ (function (_super) {
    __extends(BlockExprContext, _super);
    function BlockExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockExprContext.prototype.caseClauses = function () {
        return this.tryGetRuleContext(0, CaseClausesContext);
    };
    BlockExprContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    Object.defineProperty(BlockExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_blockExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockExprContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockExpr) {
            listener.enterBlockExpr(this);
        }
    };
    // @Override
    BlockExprContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockExpr) {
            listener.exitBlockExpr(this);
        }
    };
    // @Override
    BlockExprContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockExpr) {
            return visitor.visitBlockExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockExprContext = BlockExprContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.blockStat = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatContext);
        }
        else {
            return this.getRuleContext(i, BlockStatContext);
        }
    };
    BlockContext.prototype.Sep = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Sep);
        }
        else {
            return this.getToken(ScalaParser.Sep, i);
        }
    };
    BlockContext.prototype.resultExpr = function () {
        return this.tryGetRuleContext(0, ResultExprContext);
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockContext = BlockContext;
var BlockStatContext = /** @class */ (function (_super) {
    __extends(BlockStatContext, _super);
    function BlockStatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockStatContext.prototype.import_ = function () {
        return this.tryGetRuleContext(0, Import_Context);
    };
    BlockStatContext.prototype.def = function () {
        return this.tryGetRuleContext(0, DefContext);
    };
    BlockStatContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    BlockStatContext.prototype.tmplDef = function () {
        return this.tryGetRuleContext(0, TmplDefContext);
    };
    BlockStatContext.prototype.localModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LocalModifierContext);
        }
        else {
            return this.getRuleContext(i, LocalModifierContext);
        }
    };
    BlockStatContext.prototype.expr1 = function () {
        return this.tryGetRuleContext(0, Expr1Context);
    };
    Object.defineProperty(BlockStatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_blockStat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockStatContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockStat) {
            listener.enterBlockStat(this);
        }
    };
    // @Override
    BlockStatContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockStat) {
            listener.exitBlockStat(this);
        }
    };
    // @Override
    BlockStatContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockStat) {
            return visitor.visitBlockStat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockStatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockStatContext = BlockStatContext;
var ResultExprContext = /** @class */ (function (_super) {
    __extends(ResultExprContext, _super);
    function ResultExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ResultExprContext.prototype.expr1 = function () {
        return this.tryGetRuleContext(0, Expr1Context);
    };
    ResultExprContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    ResultExprContext.prototype.bindings = function () {
        return this.tryGetRuleContext(0, BindingsContext);
    };
    ResultExprContext.prototype.compoundType = function () {
        return this.tryGetRuleContext(0, CompoundTypeContext);
    };
    ResultExprContext.prototype.Id = function () { return this.tryGetToken(ScalaParser.Id, 0); };
    Object.defineProperty(ResultExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_resultExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ResultExprContext.prototype.enterRule = function (listener) {
        if (listener.enterResultExpr) {
            listener.enterResultExpr(this);
        }
    };
    // @Override
    ResultExprContext.prototype.exitRule = function (listener) {
        if (listener.exitResultExpr) {
            listener.exitResultExpr(this);
        }
    };
    // @Override
    ResultExprContext.prototype.accept = function (visitor) {
        if (visitor.visitResultExpr) {
            return visitor.visitResultExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ResultExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ResultExprContext = ResultExprContext;
var EnumeratorsContext = /** @class */ (function (_super) {
    __extends(EnumeratorsContext, _super);
    function EnumeratorsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumeratorsContext.prototype.generator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GeneratorContext);
        }
        else {
            return this.getRuleContext(i, GeneratorContext);
        }
    };
    EnumeratorsContext.prototype.Sep = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Sep);
        }
        else {
            return this.getToken(ScalaParser.Sep, i);
        }
    };
    Object.defineProperty(EnumeratorsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_enumerators; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumeratorsContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumerators) {
            listener.enterEnumerators(this);
        }
    };
    // @Override
    EnumeratorsContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumerators) {
            listener.exitEnumerators(this);
        }
    };
    // @Override
    EnumeratorsContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumerators) {
            return visitor.visitEnumerators(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumeratorsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumeratorsContext = EnumeratorsContext;
var GeneratorContext = /** @class */ (function (_super) {
    __extends(GeneratorContext, _super);
    function GeneratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GeneratorContext.prototype.pattern1 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Pattern1Context);
        }
        else {
            return this.getRuleContext(i, Pattern1Context);
        }
    };
    GeneratorContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    GeneratorContext.prototype.guard = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GuardContext);
        }
        else {
            return this.getRuleContext(i, GuardContext);
        }
    };
    GeneratorContext.prototype.Semi = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Semi);
        }
        else {
            return this.getToken(ScalaParser.Semi, i);
        }
    };
    Object.defineProperty(GeneratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_generator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GeneratorContext.prototype.enterRule = function (listener) {
        if (listener.enterGenerator) {
            listener.enterGenerator(this);
        }
    };
    // @Override
    GeneratorContext.prototype.exitRule = function (listener) {
        if (listener.exitGenerator) {
            listener.exitGenerator(this);
        }
    };
    // @Override
    GeneratorContext.prototype.accept = function (visitor) {
        if (visitor.visitGenerator) {
            return visitor.visitGenerator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeneratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GeneratorContext = GeneratorContext;
var CaseClausesContext = /** @class */ (function (_super) {
    __extends(CaseClausesContext, _super);
    function CaseClausesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseClausesContext.prototype.caseClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseClauseContext);
        }
        else {
            return this.getRuleContext(i, CaseClauseContext);
        }
    };
    Object.defineProperty(CaseClausesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_caseClauses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseClausesContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseClauses) {
            listener.enterCaseClauses(this);
        }
    };
    // @Override
    CaseClausesContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseClauses) {
            listener.exitCaseClauses(this);
        }
    };
    // @Override
    CaseClausesContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseClauses) {
            return visitor.visitCaseClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseClausesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseClausesContext = CaseClausesContext;
var CaseClauseContext = /** @class */ (function (_super) {
    __extends(CaseClauseContext, _super);
    function CaseClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseClauseContext.prototype.pattern = function () {
        return this.getRuleContext(0, PatternContext);
    };
    CaseClauseContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    CaseClauseContext.prototype.guard = function () {
        return this.tryGetRuleContext(0, GuardContext);
    };
    Object.defineProperty(CaseClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_caseClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseClause) {
            listener.enterCaseClause(this);
        }
    };
    // @Override
    CaseClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseClause) {
            listener.exitCaseClause(this);
        }
    };
    // @Override
    CaseClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseClause) {
            return visitor.visitCaseClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseClauseContext = CaseClauseContext;
var GuardContext = /** @class */ (function (_super) {
    __extends(GuardContext, _super);
    function GuardContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GuardContext.prototype.postfixExpr = function () {
        return this.getRuleContext(0, PostfixExprContext);
    };
    Object.defineProperty(GuardContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_guard; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GuardContext.prototype.enterRule = function (listener) {
        if (listener.enterGuard) {
            listener.enterGuard(this);
        }
    };
    // @Override
    GuardContext.prototype.exitRule = function (listener) {
        if (listener.exitGuard) {
            listener.exitGuard(this);
        }
    };
    // @Override
    GuardContext.prototype.accept = function (visitor) {
        if (visitor.visitGuard) {
            return visitor.visitGuard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GuardContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GuardContext = GuardContext;
var PatternContext = /** @class */ (function (_super) {
    __extends(PatternContext, _super);
    function PatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PatternContext.prototype.pattern1 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Pattern1Context);
        }
        else {
            return this.getRuleContext(i, Pattern1Context);
        }
    };
    Object.defineProperty(PatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_pattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PatternContext.prototype.enterRule = function (listener) {
        if (listener.enterPattern) {
            listener.enterPattern(this);
        }
    };
    // @Override
    PatternContext.prototype.exitRule = function (listener) {
        if (listener.exitPattern) {
            listener.exitPattern(this);
        }
    };
    // @Override
    PatternContext.prototype.accept = function (visitor) {
        if (visitor.visitPattern) {
            return visitor.visitPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PatternContext = PatternContext;
var Pattern1Context = /** @class */ (function (_super) {
    __extends(Pattern1Context, _super);
    function Pattern1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pattern1Context.prototype.Varid = function () { return this.tryGetToken(ScalaParser.Varid, 0); };
    Pattern1Context.prototype.typePat = function () {
        return this.tryGetRuleContext(0, TypePatContext);
    };
    Pattern1Context.prototype.pattern2 = function () {
        return this.tryGetRuleContext(0, Pattern2Context);
    };
    Object.defineProperty(Pattern1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_pattern1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pattern1Context.prototype.enterRule = function (listener) {
        if (listener.enterPattern1) {
            listener.enterPattern1(this);
        }
    };
    // @Override
    Pattern1Context.prototype.exitRule = function (listener) {
        if (listener.exitPattern1) {
            listener.exitPattern1(this);
        }
    };
    // @Override
    Pattern1Context.prototype.accept = function (visitor) {
        if (visitor.visitPattern1) {
            return visitor.visitPattern1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pattern1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pattern1Context = Pattern1Context;
var Pattern2Context = /** @class */ (function (_super) {
    __extends(Pattern2Context, _super);
    function Pattern2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pattern2Context.prototype.Varid = function () { return this.tryGetToken(ScalaParser.Varid, 0); };
    Pattern2Context.prototype.pattern3 = function () {
        return this.tryGetRuleContext(0, Pattern3Context);
    };
    Object.defineProperty(Pattern2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_pattern2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pattern2Context.prototype.enterRule = function (listener) {
        if (listener.enterPattern2) {
            listener.enterPattern2(this);
        }
    };
    // @Override
    Pattern2Context.prototype.exitRule = function (listener) {
        if (listener.exitPattern2) {
            listener.exitPattern2(this);
        }
    };
    // @Override
    Pattern2Context.prototype.accept = function (visitor) {
        if (visitor.visitPattern2) {
            return visitor.visitPattern2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pattern2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pattern2Context = Pattern2Context;
var Pattern3Context = /** @class */ (function (_super) {
    __extends(Pattern3Context, _super);
    function Pattern3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pattern3Context.prototype.simplePattern = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SimplePatternContext);
        }
        else {
            return this.getRuleContext(i, SimplePatternContext);
        }
    };
    Pattern3Context.prototype.Id = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Id);
        }
        else {
            return this.getToken(ScalaParser.Id, i);
        }
    };
    Object.defineProperty(Pattern3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_pattern3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pattern3Context.prototype.enterRule = function (listener) {
        if (listener.enterPattern3) {
            listener.enterPattern3(this);
        }
    };
    // @Override
    Pattern3Context.prototype.exitRule = function (listener) {
        if (listener.exitPattern3) {
            listener.exitPattern3(this);
        }
    };
    // @Override
    Pattern3Context.prototype.accept = function (visitor) {
        if (visitor.visitPattern3) {
            return visitor.visitPattern3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pattern3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pattern3Context = Pattern3Context;
var SimplePatternContext = /** @class */ (function (_super) {
    __extends(SimplePatternContext, _super);
    function SimplePatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimplePatternContext.prototype.Varid = function () { return this.tryGetToken(ScalaParser.Varid, 0); };
    SimplePatternContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    SimplePatternContext.prototype.stableId = function () {
        return this.tryGetRuleContext(0, StableIdContext);
    };
    SimplePatternContext.prototype.patterns = function () {
        return this.tryGetRuleContext(0, PatternsContext);
    };
    Object.defineProperty(SimplePatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_simplePattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimplePatternContext.prototype.enterRule = function (listener) {
        if (listener.enterSimplePattern) {
            listener.enterSimplePattern(this);
        }
    };
    // @Override
    SimplePatternContext.prototype.exitRule = function (listener) {
        if (listener.exitSimplePattern) {
            listener.exitSimplePattern(this);
        }
    };
    // @Override
    SimplePatternContext.prototype.accept = function (visitor) {
        if (visitor.visitSimplePattern) {
            return visitor.visitSimplePattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimplePatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimplePatternContext = SimplePatternContext;
var PatternsContext = /** @class */ (function (_super) {
    __extends(PatternsContext, _super);
    function PatternsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PatternsContext.prototype.pattern = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PatternContext);
        }
        else {
            return this.getRuleContext(i, PatternContext);
        }
    };
    Object.defineProperty(PatternsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_patterns; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PatternsContext.prototype.enterRule = function (listener) {
        if (listener.enterPatterns) {
            listener.enterPatterns(this);
        }
    };
    // @Override
    PatternsContext.prototype.exitRule = function (listener) {
        if (listener.exitPatterns) {
            listener.exitPatterns(this);
        }
    };
    // @Override
    PatternsContext.prototype.accept = function (visitor) {
        if (visitor.visitPatterns) {
            return visitor.visitPatterns(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PatternsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PatternsContext = PatternsContext;
var TypeParamClauseContext = /** @class */ (function (_super) {
    __extends(TypeParamClauseContext, _super);
    function TypeParamClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParamClauseContext.prototype.variantTypeParam = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariantTypeParamContext);
        }
        else {
            return this.getRuleContext(i, VariantTypeParamContext);
        }
    };
    Object.defineProperty(TypeParamClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_typeParamClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParamClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParamClause) {
            listener.enterTypeParamClause(this);
        }
    };
    // @Override
    TypeParamClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParamClause) {
            listener.exitTypeParamClause(this);
        }
    };
    // @Override
    TypeParamClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParamClause) {
            return visitor.visitTypeParamClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParamClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParamClauseContext = TypeParamClauseContext;
var FunTypeParamClauseContext = /** @class */ (function (_super) {
    __extends(FunTypeParamClauseContext, _super);
    function FunTypeParamClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunTypeParamClauseContext.prototype.typeParam = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParamContext);
        }
        else {
            return this.getRuleContext(i, TypeParamContext);
        }
    };
    Object.defineProperty(FunTypeParamClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_funTypeParamClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunTypeParamClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterFunTypeParamClause) {
            listener.enterFunTypeParamClause(this);
        }
    };
    // @Override
    FunTypeParamClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitFunTypeParamClause) {
            listener.exitFunTypeParamClause(this);
        }
    };
    // @Override
    FunTypeParamClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitFunTypeParamClause) {
            return visitor.visitFunTypeParamClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunTypeParamClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunTypeParamClauseContext = FunTypeParamClauseContext;
var VariantTypeParamContext = /** @class */ (function (_super) {
    __extends(VariantTypeParamContext, _super);
    function VariantTypeParamContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariantTypeParamContext.prototype.typeParam = function () {
        return this.getRuleContext(0, TypeParamContext);
    };
    VariantTypeParamContext.prototype.annotation = function () {
        return this.tryGetRuleContext(0, AnnotationContext);
    };
    Object.defineProperty(VariantTypeParamContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_variantTypeParam; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariantTypeParamContext.prototype.enterRule = function (listener) {
        if (listener.enterVariantTypeParam) {
            listener.enterVariantTypeParam(this);
        }
    };
    // @Override
    VariantTypeParamContext.prototype.exitRule = function (listener) {
        if (listener.exitVariantTypeParam) {
            listener.exitVariantTypeParam(this);
        }
    };
    // @Override
    VariantTypeParamContext.prototype.accept = function (visitor) {
        if (visitor.visitVariantTypeParam) {
            return visitor.visitVariantTypeParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariantTypeParamContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariantTypeParamContext = VariantTypeParamContext;
var TypeParamContext = /** @class */ (function (_super) {
    __extends(TypeParamContext, _super);
    function TypeParamContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParamContext.prototype.Id = function () { return this.getToken(ScalaParser.Id, 0); };
    TypeParamContext.prototype.typeParamClause = function () {
        return this.tryGetRuleContext(0, TypeParamClauseContext);
    };
    TypeParamContext.prototype.type_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }
        else {
            return this.getRuleContext(i, Type_Context);
        }
    };
    Object.defineProperty(TypeParamContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_typeParam; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParamContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParam) {
            listener.enterTypeParam(this);
        }
    };
    // @Override
    TypeParamContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParam) {
            listener.exitTypeParam(this);
        }
    };
    // @Override
    TypeParamContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParam) {
            return visitor.visitTypeParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParamContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParamContext = TypeParamContext;
var ParamClausesContext = /** @class */ (function (_super) {
    __extends(ParamClausesContext, _super);
    function ParamClausesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamClausesContext.prototype.paramClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamClauseContext);
        }
        else {
            return this.getRuleContext(i, ParamClauseContext);
        }
    };
    ParamClausesContext.prototype.params = function () {
        return this.tryGetRuleContext(0, ParamsContext);
    };
    Object.defineProperty(ParamClausesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_paramClauses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParamClausesContext.prototype.enterRule = function (listener) {
        if (listener.enterParamClauses) {
            listener.enterParamClauses(this);
        }
    };
    // @Override
    ParamClausesContext.prototype.exitRule = function (listener) {
        if (listener.exitParamClauses) {
            listener.exitParamClauses(this);
        }
    };
    // @Override
    ParamClausesContext.prototype.accept = function (visitor) {
        if (visitor.visitParamClauses) {
            return visitor.visitParamClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamClausesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParamClausesContext = ParamClausesContext;
var ParamClauseContext = /** @class */ (function (_super) {
    __extends(ParamClauseContext, _super);
    function ParamClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamClauseContext.prototype.params = function () {
        return this.tryGetRuleContext(0, ParamsContext);
    };
    Object.defineProperty(ParamClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_paramClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParamClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterParamClause) {
            listener.enterParamClause(this);
        }
    };
    // @Override
    ParamClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitParamClause) {
            listener.exitParamClause(this);
        }
    };
    // @Override
    ParamClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitParamClause) {
            return visitor.visitParamClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParamClauseContext = ParamClauseContext;
var ParamsContext = /** @class */ (function (_super) {
    __extends(ParamsContext, _super);
    function ParamsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamsContext.prototype.param = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }
        else {
            return this.getRuleContext(i, ParamContext);
        }
    };
    Object.defineProperty(ParamsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParamsContext.prototype.enterRule = function (listener) {
        if (listener.enterParams) {
            listener.enterParams(this);
        }
    };
    // @Override
    ParamsContext.prototype.exitRule = function (listener) {
        if (listener.exitParams) {
            listener.exitParams(this);
        }
    };
    // @Override
    ParamsContext.prototype.accept = function (visitor) {
        if (visitor.visitParams) {
            return visitor.visitParams(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParamsContext = ParamsContext;
var ParamContext = /** @class */ (function (_super) {
    __extends(ParamContext, _super);
    function ParamContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamContext.prototype.Id = function () { return this.getToken(ScalaParser.Id, 0); };
    ParamContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    ParamContext.prototype.paramType = function () {
        return this.tryGetRuleContext(0, ParamTypeContext);
    };
    ParamContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(ParamContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_param; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParamContext.prototype.enterRule = function (listener) {
        if (listener.enterParam) {
            listener.enterParam(this);
        }
    };
    // @Override
    ParamContext.prototype.exitRule = function (listener) {
        if (listener.exitParam) {
            listener.exitParam(this);
        }
    };
    // @Override
    ParamContext.prototype.accept = function (visitor) {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParamContext = ParamContext;
var ParamTypeContext = /** @class */ (function (_super) {
    __extends(ParamTypeContext, _super);
    function ParamTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamTypeContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    Object.defineProperty(ParamTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_paramType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParamTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterParamType) {
            listener.enterParamType(this);
        }
    };
    // @Override
    ParamTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitParamType) {
            listener.exitParamType(this);
        }
    };
    // @Override
    ParamTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitParamType) {
            return visitor.visitParamType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParamTypeContext = ParamTypeContext;
var ClassParamClausesContext = /** @class */ (function (_super) {
    __extends(ClassParamClausesContext, _super);
    function ClassParamClausesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassParamClausesContext.prototype.classParamClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassParamClauseContext);
        }
        else {
            return this.getRuleContext(i, ClassParamClauseContext);
        }
    };
    ClassParamClausesContext.prototype.classParams = function () {
        return this.tryGetRuleContext(0, ClassParamsContext);
    };
    Object.defineProperty(ClassParamClausesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_classParamClauses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassParamClausesContext.prototype.enterRule = function (listener) {
        if (listener.enterClassParamClauses) {
            listener.enterClassParamClauses(this);
        }
    };
    // @Override
    ClassParamClausesContext.prototype.exitRule = function (listener) {
        if (listener.exitClassParamClauses) {
            listener.exitClassParamClauses(this);
        }
    };
    // @Override
    ClassParamClausesContext.prototype.accept = function (visitor) {
        if (visitor.visitClassParamClauses) {
            return visitor.visitClassParamClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassParamClausesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassParamClausesContext = ClassParamClausesContext;
var ClassParamClauseContext = /** @class */ (function (_super) {
    __extends(ClassParamClauseContext, _super);
    function ClassParamClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassParamClauseContext.prototype.classParams = function () {
        return this.tryGetRuleContext(0, ClassParamsContext);
    };
    Object.defineProperty(ClassParamClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_classParamClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassParamClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterClassParamClause) {
            listener.enterClassParamClause(this);
        }
    };
    // @Override
    ClassParamClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitClassParamClause) {
            listener.exitClassParamClause(this);
        }
    };
    // @Override
    ClassParamClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitClassParamClause) {
            return visitor.visitClassParamClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassParamClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassParamClauseContext = ClassParamClauseContext;
var ClassParamsContext = /** @class */ (function (_super) {
    __extends(ClassParamsContext, _super);
    function ClassParamsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassParamsContext.prototype.classParam = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassParamContext);
        }
        else {
            return this.getRuleContext(i, ClassParamContext);
        }
    };
    Object.defineProperty(ClassParamsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_classParams; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassParamsContext.prototype.enterRule = function (listener) {
        if (listener.enterClassParams) {
            listener.enterClassParams(this);
        }
    };
    // @Override
    ClassParamsContext.prototype.exitRule = function (listener) {
        if (listener.exitClassParams) {
            listener.exitClassParams(this);
        }
    };
    // @Override
    ClassParamsContext.prototype.accept = function (visitor) {
        if (visitor.visitClassParams) {
            return visitor.visitClassParams(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassParamsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassParamsContext = ClassParamsContext;
var ClassParamContext = /** @class */ (function (_super) {
    __extends(ClassParamContext, _super);
    function ClassParamContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassParamContext.prototype.Id = function () { return this.getToken(ScalaParser.Id, 0); };
    ClassParamContext.prototype.paramType = function () {
        return this.getRuleContext(0, ParamTypeContext);
    };
    ClassParamContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    ClassParamContext.prototype.modifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    };
    ClassParamContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(ClassParamContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_classParam; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassParamContext.prototype.enterRule = function (listener) {
        if (listener.enterClassParam) {
            listener.enterClassParam(this);
        }
    };
    // @Override
    ClassParamContext.prototype.exitRule = function (listener) {
        if (listener.exitClassParam) {
            listener.exitClassParam(this);
        }
    };
    // @Override
    ClassParamContext.prototype.accept = function (visitor) {
        if (visitor.visitClassParam) {
            return visitor.visitClassParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassParamContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassParamContext = ClassParamContext;
var BindingsContext = /** @class */ (function (_super) {
    __extends(BindingsContext, _super);
    function BindingsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BindingsContext.prototype.binding = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BindingContext);
        }
        else {
            return this.getRuleContext(i, BindingContext);
        }
    };
    Object.defineProperty(BindingsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_bindings; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BindingsContext.prototype.enterRule = function (listener) {
        if (listener.enterBindings) {
            listener.enterBindings(this);
        }
    };
    // @Override
    BindingsContext.prototype.exitRule = function (listener) {
        if (listener.exitBindings) {
            listener.exitBindings(this);
        }
    };
    // @Override
    BindingsContext.prototype.accept = function (visitor) {
        if (visitor.visitBindings) {
            return visitor.visitBindings(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BindingsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BindingsContext = BindingsContext;
var BindingContext = /** @class */ (function (_super) {
    __extends(BindingContext, _super);
    function BindingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BindingContext.prototype.Id = function () { return this.getToken(ScalaParser.Id, 0); };
    BindingContext.prototype.type_ = function () {
        return this.tryGetRuleContext(0, Type_Context);
    };
    Object.defineProperty(BindingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_binding; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BindingContext.prototype.enterRule = function (listener) {
        if (listener.enterBinding) {
            listener.enterBinding(this);
        }
    };
    // @Override
    BindingContext.prototype.exitRule = function (listener) {
        if (listener.exitBinding) {
            listener.exitBinding(this);
        }
    };
    // @Override
    BindingContext.prototype.accept = function (visitor) {
        if (visitor.visitBinding) {
            return visitor.visitBinding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BindingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BindingContext = BindingContext;
var ModifierContext = /** @class */ (function (_super) {
    __extends(ModifierContext, _super);
    function ModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModifierContext.prototype.localModifier = function () {
        return this.tryGetRuleContext(0, LocalModifierContext);
    };
    ModifierContext.prototype.accessModifier = function () {
        return this.tryGetRuleContext(0, AccessModifierContext);
    };
    Object.defineProperty(ModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_modifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterModifier) {
            listener.enterModifier(this);
        }
    };
    // @Override
    ModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitModifier) {
            listener.exitModifier(this);
        }
    };
    // @Override
    ModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModifierContext = ModifierContext;
var LocalModifierContext = /** @class */ (function (_super) {
    __extends(LocalModifierContext, _super);
    function LocalModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(LocalModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_localModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LocalModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterLocalModifier) {
            listener.enterLocalModifier(this);
        }
    };
    // @Override
    LocalModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitLocalModifier) {
            listener.exitLocalModifier(this);
        }
    };
    // @Override
    LocalModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitLocalModifier) {
            return visitor.visitLocalModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LocalModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LocalModifierContext = LocalModifierContext;
var AccessModifierContext = /** @class */ (function (_super) {
    __extends(AccessModifierContext, _super);
    function AccessModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AccessModifierContext.prototype.accessQualifier = function () {
        return this.tryGetRuleContext(0, AccessQualifierContext);
    };
    Object.defineProperty(AccessModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_accessModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AccessModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterAccessModifier) {
            listener.enterAccessModifier(this);
        }
    };
    // @Override
    AccessModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitAccessModifier) {
            listener.exitAccessModifier(this);
        }
    };
    // @Override
    AccessModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitAccessModifier) {
            return visitor.visitAccessModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AccessModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AccessModifierContext = AccessModifierContext;
var AccessQualifierContext = /** @class */ (function (_super) {
    __extends(AccessQualifierContext, _super);
    function AccessQualifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AccessQualifierContext.prototype.Id = function () { return this.getToken(ScalaParser.Id, 0); };
    Object.defineProperty(AccessQualifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_accessQualifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AccessQualifierContext.prototype.enterRule = function (listener) {
        if (listener.enterAccessQualifier) {
            listener.enterAccessQualifier(this);
        }
    };
    // @Override
    AccessQualifierContext.prototype.exitRule = function (listener) {
        if (listener.exitAccessQualifier) {
            listener.exitAccessQualifier(this);
        }
    };
    // @Override
    AccessQualifierContext.prototype.accept = function (visitor) {
        if (visitor.visitAccessQualifier) {
            return visitor.visitAccessQualifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AccessQualifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AccessQualifierContext = AccessQualifierContext;
var AnnotationContext = /** @class */ (function (_super) {
    __extends(AnnotationContext, _super);
    function AnnotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationContext.prototype.simpleType = function () {
        return this.getRuleContext(0, SimpleTypeContext);
    };
    AnnotationContext.prototype.argumentExprs = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentExprsContext);
        }
        else {
            return this.getRuleContext(i, ArgumentExprsContext);
        }
    };
    Object.defineProperty(AnnotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_annotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotation) {
            listener.enterAnnotation(this);
        }
    };
    // @Override
    AnnotationContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotation) {
            listener.exitAnnotation(this);
        }
    };
    // @Override
    AnnotationContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotation) {
            return visitor.visitAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationContext = AnnotationContext;
var ConstrAnnotationContext = /** @class */ (function (_super) {
    __extends(ConstrAnnotationContext, _super);
    function ConstrAnnotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstrAnnotationContext.prototype.simpleType = function () {
        return this.getRuleContext(0, SimpleTypeContext);
    };
    ConstrAnnotationContext.prototype.argumentExprs = function () {
        return this.getRuleContext(0, ArgumentExprsContext);
    };
    Object.defineProperty(ConstrAnnotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_constrAnnotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstrAnnotationContext.prototype.enterRule = function (listener) {
        if (listener.enterConstrAnnotation) {
            listener.enterConstrAnnotation(this);
        }
    };
    // @Override
    ConstrAnnotationContext.prototype.exitRule = function (listener) {
        if (listener.exitConstrAnnotation) {
            listener.exitConstrAnnotation(this);
        }
    };
    // @Override
    ConstrAnnotationContext.prototype.accept = function (visitor) {
        if (visitor.visitConstrAnnotation) {
            return visitor.visitConstrAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstrAnnotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstrAnnotationContext = ConstrAnnotationContext;
var TemplateBodyContext = /** @class */ (function (_super) {
    __extends(TemplateBodyContext, _super);
    function TemplateBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TemplateBodyContext.prototype.templateStat = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TemplateStatContext);
        }
        else {
            return this.getRuleContext(i, TemplateStatContext);
        }
    };
    TemplateBodyContext.prototype.NL = function () { return this.tryGetToken(ScalaParser.NL, 0); };
    TemplateBodyContext.prototype.selfType = function () {
        return this.tryGetRuleContext(0, SelfTypeContext);
    };
    TemplateBodyContext.prototype.Sep = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Sep);
        }
        else {
            return this.getToken(ScalaParser.Sep, i);
        }
    };
    Object.defineProperty(TemplateBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_templateBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TemplateBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterTemplateBody) {
            listener.enterTemplateBody(this);
        }
    };
    // @Override
    TemplateBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitTemplateBody) {
            listener.exitTemplateBody(this);
        }
    };
    // @Override
    TemplateBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitTemplateBody) {
            return visitor.visitTemplateBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TemplateBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TemplateBodyContext = TemplateBodyContext;
var TemplateStatContext = /** @class */ (function (_super) {
    __extends(TemplateStatContext, _super);
    function TemplateStatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TemplateStatContext.prototype.import_ = function () {
        return this.tryGetRuleContext(0, Import_Context);
    };
    TemplateStatContext.prototype.def = function () {
        return this.tryGetRuleContext(0, DefContext);
    };
    TemplateStatContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    TemplateStatContext.prototype.modifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    };
    TemplateStatContext.prototype.dcl = function () {
        return this.tryGetRuleContext(0, DclContext);
    };
    TemplateStatContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(TemplateStatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_templateStat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TemplateStatContext.prototype.enterRule = function (listener) {
        if (listener.enterTemplateStat) {
            listener.enterTemplateStat(this);
        }
    };
    // @Override
    TemplateStatContext.prototype.exitRule = function (listener) {
        if (listener.exitTemplateStat) {
            listener.exitTemplateStat(this);
        }
    };
    // @Override
    TemplateStatContext.prototype.accept = function (visitor) {
        if (visitor.visitTemplateStat) {
            return visitor.visitTemplateStat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TemplateStatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TemplateStatContext = TemplateStatContext;
var SelfTypeContext = /** @class */ (function (_super) {
    __extends(SelfTypeContext, _super);
    function SelfTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelfTypeContext.prototype.Id = function () { return this.tryGetToken(ScalaParser.Id, 0); };
    SelfTypeContext.prototype.type_ = function () {
        return this.tryGetRuleContext(0, Type_Context);
    };
    Object.defineProperty(SelfTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_selfType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelfTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSelfType) {
            listener.enterSelfType(this);
        }
    };
    // @Override
    SelfTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSelfType) {
            listener.exitSelfType(this);
        }
    };
    // @Override
    SelfTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSelfType) {
            return visitor.visitSelfType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelfTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelfTypeContext = SelfTypeContext;
var Import_Context = /** @class */ (function (_super) {
    __extends(Import_Context, _super);
    function Import_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Import_Context.prototype.importExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportExprContext);
        }
        else {
            return this.getRuleContext(i, ImportExprContext);
        }
    };
    Object.defineProperty(Import_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_import_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Import_Context.prototype.enterRule = function (listener) {
        if (listener.enterImport_) {
            listener.enterImport_(this);
        }
    };
    // @Override
    Import_Context.prototype.exitRule = function (listener) {
        if (listener.exitImport_) {
            listener.exitImport_(this);
        }
    };
    // @Override
    Import_Context.prototype.accept = function (visitor) {
        if (visitor.visitImport_) {
            return visitor.visitImport_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Import_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Import_Context = Import_Context;
var ImportExprContext = /** @class */ (function (_super) {
    __extends(ImportExprContext, _super);
    function ImportExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportExprContext.prototype.stableId = function () {
        return this.getRuleContext(0, StableIdContext);
    };
    ImportExprContext.prototype.Id = function () { return this.tryGetToken(ScalaParser.Id, 0); };
    ImportExprContext.prototype.importSelectors = function () {
        return this.tryGetRuleContext(0, ImportSelectorsContext);
    };
    Object.defineProperty(ImportExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_importExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportExprContext.prototype.enterRule = function (listener) {
        if (listener.enterImportExpr) {
            listener.enterImportExpr(this);
        }
    };
    // @Override
    ImportExprContext.prototype.exitRule = function (listener) {
        if (listener.exitImportExpr) {
            listener.exitImportExpr(this);
        }
    };
    // @Override
    ImportExprContext.prototype.accept = function (visitor) {
        if (visitor.visitImportExpr) {
            return visitor.visitImportExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportExprContext = ImportExprContext;
var ImportSelectorsContext = /** @class */ (function (_super) {
    __extends(ImportSelectorsContext, _super);
    function ImportSelectorsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportSelectorsContext.prototype.importSelector = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportSelectorContext);
        }
        else {
            return this.getRuleContext(i, ImportSelectorContext);
        }
    };
    Object.defineProperty(ImportSelectorsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_importSelectors; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportSelectorsContext.prototype.enterRule = function (listener) {
        if (listener.enterImportSelectors) {
            listener.enterImportSelectors(this);
        }
    };
    // @Override
    ImportSelectorsContext.prototype.exitRule = function (listener) {
        if (listener.exitImportSelectors) {
            listener.exitImportSelectors(this);
        }
    };
    // @Override
    ImportSelectorsContext.prototype.accept = function (visitor) {
        if (visitor.visitImportSelectors) {
            return visitor.visitImportSelectors(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportSelectorsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportSelectorsContext = ImportSelectorsContext;
var ImportSelectorContext = /** @class */ (function (_super) {
    __extends(ImportSelectorContext, _super);
    function ImportSelectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportSelectorContext.prototype.Id = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Id);
        }
        else {
            return this.getToken(ScalaParser.Id, i);
        }
    };
    Object.defineProperty(ImportSelectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_importSelector; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportSelectorContext.prototype.enterRule = function (listener) {
        if (listener.enterImportSelector) {
            listener.enterImportSelector(this);
        }
    };
    // @Override
    ImportSelectorContext.prototype.exitRule = function (listener) {
        if (listener.exitImportSelector) {
            listener.exitImportSelector(this);
        }
    };
    // @Override
    ImportSelectorContext.prototype.accept = function (visitor) {
        if (visitor.visitImportSelector) {
            return visitor.visitImportSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportSelectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportSelectorContext = ImportSelectorContext;
var DclContext = /** @class */ (function (_super) {
    __extends(DclContext, _super);
    function DclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DclContext.prototype.valDcl = function () {
        return this.tryGetRuleContext(0, ValDclContext);
    };
    DclContext.prototype.varDcl = function () {
        return this.tryGetRuleContext(0, VarDclContext);
    };
    DclContext.prototype.funDcl = function () {
        return this.tryGetRuleContext(0, FunDclContext);
    };
    DclContext.prototype.typeDcl = function () {
        return this.tryGetRuleContext(0, TypeDclContext);
    };
    Object.defineProperty(DclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_dcl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DclContext.prototype.enterRule = function (listener) {
        if (listener.enterDcl) {
            listener.enterDcl(this);
        }
    };
    // @Override
    DclContext.prototype.exitRule = function (listener) {
        if (listener.exitDcl) {
            listener.exitDcl(this);
        }
    };
    // @Override
    DclContext.prototype.accept = function (visitor) {
        if (visitor.visitDcl) {
            return visitor.visitDcl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DclContext = DclContext;
var ValDclContext = /** @class */ (function (_super) {
    __extends(ValDclContext, _super);
    function ValDclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValDclContext.prototype.ids = function () {
        return this.getRuleContext(0, IdsContext);
    };
    ValDclContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    Object.defineProperty(ValDclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_valDcl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValDclContext.prototype.enterRule = function (listener) {
        if (listener.enterValDcl) {
            listener.enterValDcl(this);
        }
    };
    // @Override
    ValDclContext.prototype.exitRule = function (listener) {
        if (listener.exitValDcl) {
            listener.exitValDcl(this);
        }
    };
    // @Override
    ValDclContext.prototype.accept = function (visitor) {
        if (visitor.visitValDcl) {
            return visitor.visitValDcl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValDclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValDclContext = ValDclContext;
var VarDclContext = /** @class */ (function (_super) {
    __extends(VarDclContext, _super);
    function VarDclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarDclContext.prototype.ids = function () {
        return this.getRuleContext(0, IdsContext);
    };
    VarDclContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    Object.defineProperty(VarDclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_varDcl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarDclContext.prototype.enterRule = function (listener) {
        if (listener.enterVarDcl) {
            listener.enterVarDcl(this);
        }
    };
    // @Override
    VarDclContext.prototype.exitRule = function (listener) {
        if (listener.exitVarDcl) {
            listener.exitVarDcl(this);
        }
    };
    // @Override
    VarDclContext.prototype.accept = function (visitor) {
        if (visitor.visitVarDcl) {
            return visitor.visitVarDcl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarDclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarDclContext = VarDclContext;
var FunDclContext = /** @class */ (function (_super) {
    __extends(FunDclContext, _super);
    function FunDclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunDclContext.prototype.funSig = function () {
        return this.getRuleContext(0, FunSigContext);
    };
    FunDclContext.prototype.type_ = function () {
        return this.tryGetRuleContext(0, Type_Context);
    };
    Object.defineProperty(FunDclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_funDcl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunDclContext.prototype.enterRule = function (listener) {
        if (listener.enterFunDcl) {
            listener.enterFunDcl(this);
        }
    };
    // @Override
    FunDclContext.prototype.exitRule = function (listener) {
        if (listener.exitFunDcl) {
            listener.exitFunDcl(this);
        }
    };
    // @Override
    FunDclContext.prototype.accept = function (visitor) {
        if (visitor.visitFunDcl) {
            return visitor.visitFunDcl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunDclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunDclContext = FunDclContext;
var FunSigContext = /** @class */ (function (_super) {
    __extends(FunSigContext, _super);
    function FunSigContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunSigContext.prototype.Id = function () { return this.getToken(ScalaParser.Id, 0); };
    FunSigContext.prototype.paramClauses = function () {
        return this.getRuleContext(0, ParamClausesContext);
    };
    FunSigContext.prototype.funTypeParamClause = function () {
        return this.tryGetRuleContext(0, FunTypeParamClauseContext);
    };
    Object.defineProperty(FunSigContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_funSig; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunSigContext.prototype.enterRule = function (listener) {
        if (listener.enterFunSig) {
            listener.enterFunSig(this);
        }
    };
    // @Override
    FunSigContext.prototype.exitRule = function (listener) {
        if (listener.exitFunSig) {
            listener.exitFunSig(this);
        }
    };
    // @Override
    FunSigContext.prototype.accept = function (visitor) {
        if (visitor.visitFunSig) {
            return visitor.visitFunSig(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunSigContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunSigContext = FunSigContext;
var TypeDclContext = /** @class */ (function (_super) {
    __extends(TypeDclContext, _super);
    function TypeDclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeDclContext.prototype.Id = function () { return this.getToken(ScalaParser.Id, 0); };
    TypeDclContext.prototype.typeParamClause = function () {
        return this.tryGetRuleContext(0, TypeParamClauseContext);
    };
    TypeDclContext.prototype.type_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }
        else {
            return this.getRuleContext(i, Type_Context);
        }
    };
    Object.defineProperty(TypeDclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_typeDcl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeDclContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeDcl) {
            listener.enterTypeDcl(this);
        }
    };
    // @Override
    TypeDclContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeDcl) {
            listener.exitTypeDcl(this);
        }
    };
    // @Override
    TypeDclContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeDcl) {
            return visitor.visitTypeDcl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeDclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeDclContext = TypeDclContext;
var PatVarDefContext = /** @class */ (function (_super) {
    __extends(PatVarDefContext, _super);
    function PatVarDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PatVarDefContext.prototype.patDef = function () {
        return this.tryGetRuleContext(0, PatDefContext);
    };
    PatVarDefContext.prototype.varDef = function () {
        return this.tryGetRuleContext(0, VarDefContext);
    };
    Object.defineProperty(PatVarDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_patVarDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PatVarDefContext.prototype.enterRule = function (listener) {
        if (listener.enterPatVarDef) {
            listener.enterPatVarDef(this);
        }
    };
    // @Override
    PatVarDefContext.prototype.exitRule = function (listener) {
        if (listener.exitPatVarDef) {
            listener.exitPatVarDef(this);
        }
    };
    // @Override
    PatVarDefContext.prototype.accept = function (visitor) {
        if (visitor.visitPatVarDef) {
            return visitor.visitPatVarDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PatVarDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PatVarDefContext = PatVarDefContext;
var DefContext = /** @class */ (function (_super) {
    __extends(DefContext, _super);
    function DefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefContext.prototype.patVarDef = function () {
        return this.tryGetRuleContext(0, PatVarDefContext);
    };
    DefContext.prototype.funDef = function () {
        return this.tryGetRuleContext(0, FunDefContext);
    };
    DefContext.prototype.typeDef = function () {
        return this.tryGetRuleContext(0, TypeDefContext);
    };
    DefContext.prototype.tmplDef = function () {
        return this.tryGetRuleContext(0, TmplDefContext);
    };
    Object.defineProperty(DefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefContext.prototype.enterRule = function (listener) {
        if (listener.enterDef) {
            listener.enterDef(this);
        }
    };
    // @Override
    DefContext.prototype.exitRule = function (listener) {
        if (listener.exitDef) {
            listener.exitDef(this);
        }
    };
    // @Override
    DefContext.prototype.accept = function (visitor) {
        if (visitor.visitDef) {
            return visitor.visitDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefContext = DefContext;
var PatDefContext = /** @class */ (function (_super) {
    __extends(PatDefContext, _super);
    function PatDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PatDefContext.prototype.pattern2 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Pattern2Context);
        }
        else {
            return this.getRuleContext(i, Pattern2Context);
        }
    };
    PatDefContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    PatDefContext.prototype.type_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }
        else {
            return this.getRuleContext(i, Type_Context);
        }
    };
    Object.defineProperty(PatDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_patDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PatDefContext.prototype.enterRule = function (listener) {
        if (listener.enterPatDef) {
            listener.enterPatDef(this);
        }
    };
    // @Override
    PatDefContext.prototype.exitRule = function (listener) {
        if (listener.exitPatDef) {
            listener.exitPatDef(this);
        }
    };
    // @Override
    PatDefContext.prototype.accept = function (visitor) {
        if (visitor.visitPatDef) {
            return visitor.visitPatDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PatDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PatDefContext = PatDefContext;
var VarDefContext = /** @class */ (function (_super) {
    __extends(VarDefContext, _super);
    function VarDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarDefContext.prototype.patDef = function () {
        return this.tryGetRuleContext(0, PatDefContext);
    };
    VarDefContext.prototype.ids = function () {
        return this.tryGetRuleContext(0, IdsContext);
    };
    VarDefContext.prototype.type_ = function () {
        return this.tryGetRuleContext(0, Type_Context);
    };
    Object.defineProperty(VarDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_varDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarDefContext.prototype.enterRule = function (listener) {
        if (listener.enterVarDef) {
            listener.enterVarDef(this);
        }
    };
    // @Override
    VarDefContext.prototype.exitRule = function (listener) {
        if (listener.exitVarDef) {
            listener.exitVarDef(this);
        }
    };
    // @Override
    VarDefContext.prototype.accept = function (visitor) {
        if (visitor.visitVarDef) {
            return visitor.visitVarDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarDefContext = VarDefContext;
var FunDefContext = /** @class */ (function (_super) {
    __extends(FunDefContext, _super);
    function FunDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunDefContext.prototype.funSig = function () {
        return this.tryGetRuleContext(0, FunSigContext);
    };
    FunDefContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    FunDefContext.prototype.type_ = function () {
        return this.tryGetRuleContext(0, Type_Context);
    };
    FunDefContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    FunDefContext.prototype.paramClause = function () {
        return this.tryGetRuleContext(0, ParamClauseContext);
    };
    FunDefContext.prototype.paramClauses = function () {
        return this.tryGetRuleContext(0, ParamClausesContext);
    };
    FunDefContext.prototype.constrExpr = function () {
        return this.tryGetRuleContext(0, ConstrExprContext);
    };
    FunDefContext.prototype.constrBlock = function () {
        return this.tryGetRuleContext(0, ConstrBlockContext);
    };
    Object.defineProperty(FunDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_funDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunDefContext.prototype.enterRule = function (listener) {
        if (listener.enterFunDef) {
            listener.enterFunDef(this);
        }
    };
    // @Override
    FunDefContext.prototype.exitRule = function (listener) {
        if (listener.exitFunDef) {
            listener.exitFunDef(this);
        }
    };
    // @Override
    FunDefContext.prototype.accept = function (visitor) {
        if (visitor.visitFunDef) {
            return visitor.visitFunDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunDefContext = FunDefContext;
var TypeDefContext = /** @class */ (function (_super) {
    __extends(TypeDefContext, _super);
    function TypeDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeDefContext.prototype.Id = function () { return this.getToken(ScalaParser.Id, 0); };
    TypeDefContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    TypeDefContext.prototype.typeParamClause = function () {
        return this.tryGetRuleContext(0, TypeParamClauseContext);
    };
    Object.defineProperty(TypeDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_typeDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeDefContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeDef) {
            listener.enterTypeDef(this);
        }
    };
    // @Override
    TypeDefContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeDef) {
            listener.exitTypeDef(this);
        }
    };
    // @Override
    TypeDefContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeDef) {
            return visitor.visitTypeDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeDefContext = TypeDefContext;
var TmplDefContext = /** @class */ (function (_super) {
    __extends(TmplDefContext, _super);
    function TmplDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TmplDefContext.prototype.classDef = function () {
        return this.tryGetRuleContext(0, ClassDefContext);
    };
    TmplDefContext.prototype.objectDef = function () {
        return this.tryGetRuleContext(0, ObjectDefContext);
    };
    TmplDefContext.prototype.traitDef = function () {
        return this.tryGetRuleContext(0, TraitDefContext);
    };
    Object.defineProperty(TmplDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_tmplDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TmplDefContext.prototype.enterRule = function (listener) {
        if (listener.enterTmplDef) {
            listener.enterTmplDef(this);
        }
    };
    // @Override
    TmplDefContext.prototype.exitRule = function (listener) {
        if (listener.exitTmplDef) {
            listener.exitTmplDef(this);
        }
    };
    // @Override
    TmplDefContext.prototype.accept = function (visitor) {
        if (visitor.visitTmplDef) {
            return visitor.visitTmplDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TmplDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TmplDefContext = TmplDefContext;
var ClassDefContext = /** @class */ (function (_super) {
    __extends(ClassDefContext, _super);
    function ClassDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassDefContext.prototype.Id = function () { return this.getToken(ScalaParser.Id, 0); };
    ClassDefContext.prototype.classParamClauses = function () {
        return this.getRuleContext(0, ClassParamClausesContext);
    };
    ClassDefContext.prototype.classTemplateOpt = function () {
        return this.getRuleContext(0, ClassTemplateOptContext);
    };
    ClassDefContext.prototype.typeParamClause = function () {
        return this.tryGetRuleContext(0, TypeParamClauseContext);
    };
    ClassDefContext.prototype.constrAnnotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstrAnnotationContext);
        }
        else {
            return this.getRuleContext(i, ConstrAnnotationContext);
        }
    };
    ClassDefContext.prototype.accessModifier = function () {
        return this.tryGetRuleContext(0, AccessModifierContext);
    };
    Object.defineProperty(ClassDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_classDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassDefContext.prototype.enterRule = function (listener) {
        if (listener.enterClassDef) {
            listener.enterClassDef(this);
        }
    };
    // @Override
    ClassDefContext.prototype.exitRule = function (listener) {
        if (listener.exitClassDef) {
            listener.exitClassDef(this);
        }
    };
    // @Override
    ClassDefContext.prototype.accept = function (visitor) {
        if (visitor.visitClassDef) {
            return visitor.visitClassDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassDefContext = ClassDefContext;
var TraitDefContext = /** @class */ (function (_super) {
    __extends(TraitDefContext, _super);
    function TraitDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TraitDefContext.prototype.Id = function () { return this.getToken(ScalaParser.Id, 0); };
    TraitDefContext.prototype.traitTemplateOpt = function () {
        return this.getRuleContext(0, TraitTemplateOptContext);
    };
    TraitDefContext.prototype.typeParamClause = function () {
        return this.tryGetRuleContext(0, TypeParamClauseContext);
    };
    Object.defineProperty(TraitDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_traitDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TraitDefContext.prototype.enterRule = function (listener) {
        if (listener.enterTraitDef) {
            listener.enterTraitDef(this);
        }
    };
    // @Override
    TraitDefContext.prototype.exitRule = function (listener) {
        if (listener.exitTraitDef) {
            listener.exitTraitDef(this);
        }
    };
    // @Override
    TraitDefContext.prototype.accept = function (visitor) {
        if (visitor.visitTraitDef) {
            return visitor.visitTraitDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TraitDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TraitDefContext = TraitDefContext;
var ObjectDefContext = /** @class */ (function (_super) {
    __extends(ObjectDefContext, _super);
    function ObjectDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectDefContext.prototype.Id = function () { return this.getToken(ScalaParser.Id, 0); };
    ObjectDefContext.prototype.classTemplateOpt = function () {
        return this.getRuleContext(0, ClassTemplateOptContext);
    };
    Object.defineProperty(ObjectDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_objectDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectDefContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectDef) {
            listener.enterObjectDef(this);
        }
    };
    // @Override
    ObjectDefContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectDef) {
            listener.exitObjectDef(this);
        }
    };
    // @Override
    ObjectDefContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectDef) {
            return visitor.visitObjectDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectDefContext = ObjectDefContext;
var ClassTemplateOptContext = /** @class */ (function (_super) {
    __extends(ClassTemplateOptContext, _super);
    function ClassTemplateOptContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassTemplateOptContext.prototype.classTemplate = function () {
        return this.tryGetRuleContext(0, ClassTemplateContext);
    };
    ClassTemplateOptContext.prototype.templateBody = function () {
        return this.tryGetRuleContext(0, TemplateBodyContext);
    };
    Object.defineProperty(ClassTemplateOptContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_classTemplateOpt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassTemplateOptContext.prototype.enterRule = function (listener) {
        if (listener.enterClassTemplateOpt) {
            listener.enterClassTemplateOpt(this);
        }
    };
    // @Override
    ClassTemplateOptContext.prototype.exitRule = function (listener) {
        if (listener.exitClassTemplateOpt) {
            listener.exitClassTemplateOpt(this);
        }
    };
    // @Override
    ClassTemplateOptContext.prototype.accept = function (visitor) {
        if (visitor.visitClassTemplateOpt) {
            return visitor.visitClassTemplateOpt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassTemplateOptContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassTemplateOptContext = ClassTemplateOptContext;
var TraitTemplateOptContext = /** @class */ (function (_super) {
    __extends(TraitTemplateOptContext, _super);
    function TraitTemplateOptContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TraitTemplateOptContext.prototype.traitTemplate = function () {
        return this.tryGetRuleContext(0, TraitTemplateContext);
    };
    TraitTemplateOptContext.prototype.templateBody = function () {
        return this.tryGetRuleContext(0, TemplateBodyContext);
    };
    Object.defineProperty(TraitTemplateOptContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_traitTemplateOpt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TraitTemplateOptContext.prototype.enterRule = function (listener) {
        if (listener.enterTraitTemplateOpt) {
            listener.enterTraitTemplateOpt(this);
        }
    };
    // @Override
    TraitTemplateOptContext.prototype.exitRule = function (listener) {
        if (listener.exitTraitTemplateOpt) {
            listener.exitTraitTemplateOpt(this);
        }
    };
    // @Override
    TraitTemplateOptContext.prototype.accept = function (visitor) {
        if (visitor.visitTraitTemplateOpt) {
            return visitor.visitTraitTemplateOpt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TraitTemplateOptContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TraitTemplateOptContext = TraitTemplateOptContext;
var ClassTemplateContext = /** @class */ (function (_super) {
    __extends(ClassTemplateContext, _super);
    function ClassTemplateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassTemplateContext.prototype.classParents = function () {
        return this.getRuleContext(0, ClassParentsContext);
    };
    ClassTemplateContext.prototype.earlyDefs = function () {
        return this.tryGetRuleContext(0, EarlyDefsContext);
    };
    ClassTemplateContext.prototype.templateBody = function () {
        return this.tryGetRuleContext(0, TemplateBodyContext);
    };
    Object.defineProperty(ClassTemplateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_classTemplate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassTemplateContext.prototype.enterRule = function (listener) {
        if (listener.enterClassTemplate) {
            listener.enterClassTemplate(this);
        }
    };
    // @Override
    ClassTemplateContext.prototype.exitRule = function (listener) {
        if (listener.exitClassTemplate) {
            listener.exitClassTemplate(this);
        }
    };
    // @Override
    ClassTemplateContext.prototype.accept = function (visitor) {
        if (visitor.visitClassTemplate) {
            return visitor.visitClassTemplate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassTemplateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassTemplateContext = ClassTemplateContext;
var TraitTemplateContext = /** @class */ (function (_super) {
    __extends(TraitTemplateContext, _super);
    function TraitTemplateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TraitTemplateContext.prototype.traitParents = function () {
        return this.getRuleContext(0, TraitParentsContext);
    };
    TraitTemplateContext.prototype.earlyDefs = function () {
        return this.tryGetRuleContext(0, EarlyDefsContext);
    };
    TraitTemplateContext.prototype.templateBody = function () {
        return this.tryGetRuleContext(0, TemplateBodyContext);
    };
    Object.defineProperty(TraitTemplateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_traitTemplate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TraitTemplateContext.prototype.enterRule = function (listener) {
        if (listener.enterTraitTemplate) {
            listener.enterTraitTemplate(this);
        }
    };
    // @Override
    TraitTemplateContext.prototype.exitRule = function (listener) {
        if (listener.exitTraitTemplate) {
            listener.exitTraitTemplate(this);
        }
    };
    // @Override
    TraitTemplateContext.prototype.accept = function (visitor) {
        if (visitor.visitTraitTemplate) {
            return visitor.visitTraitTemplate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TraitTemplateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TraitTemplateContext = TraitTemplateContext;
var ClassParentsContext = /** @class */ (function (_super) {
    __extends(ClassParentsContext, _super);
    function ClassParentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassParentsContext.prototype.constr = function () {
        return this.getRuleContext(0, ConstrContext);
    };
    ClassParentsContext.prototype.annotType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotTypeContext);
        }
        else {
            return this.getRuleContext(i, AnnotTypeContext);
        }
    };
    Object.defineProperty(ClassParentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_classParents; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassParentsContext.prototype.enterRule = function (listener) {
        if (listener.enterClassParents) {
            listener.enterClassParents(this);
        }
    };
    // @Override
    ClassParentsContext.prototype.exitRule = function (listener) {
        if (listener.exitClassParents) {
            listener.exitClassParents(this);
        }
    };
    // @Override
    ClassParentsContext.prototype.accept = function (visitor) {
        if (visitor.visitClassParents) {
            return visitor.visitClassParents(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassParentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassParentsContext = ClassParentsContext;
var TraitParentsContext = /** @class */ (function (_super) {
    __extends(TraitParentsContext, _super);
    function TraitParentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TraitParentsContext.prototype.annotType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotTypeContext);
        }
        else {
            return this.getRuleContext(i, AnnotTypeContext);
        }
    };
    Object.defineProperty(TraitParentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_traitParents; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TraitParentsContext.prototype.enterRule = function (listener) {
        if (listener.enterTraitParents) {
            listener.enterTraitParents(this);
        }
    };
    // @Override
    TraitParentsContext.prototype.exitRule = function (listener) {
        if (listener.exitTraitParents) {
            listener.exitTraitParents(this);
        }
    };
    // @Override
    TraitParentsContext.prototype.accept = function (visitor) {
        if (visitor.visitTraitParents) {
            return visitor.visitTraitParents(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TraitParentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TraitParentsContext = TraitParentsContext;
var ConstrContext = /** @class */ (function (_super) {
    __extends(ConstrContext, _super);
    function ConstrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstrContext.prototype.annotType = function () {
        return this.getRuleContext(0, AnnotTypeContext);
    };
    ConstrContext.prototype.argumentExprs = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentExprsContext);
        }
        else {
            return this.getRuleContext(i, ArgumentExprsContext);
        }
    };
    Object.defineProperty(ConstrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_constr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstrContext.prototype.enterRule = function (listener) {
        if (listener.enterConstr) {
            listener.enterConstr(this);
        }
    };
    // @Override
    ConstrContext.prototype.exitRule = function (listener) {
        if (listener.exitConstr) {
            listener.exitConstr(this);
        }
    };
    // @Override
    ConstrContext.prototype.accept = function (visitor) {
        if (visitor.visitConstr) {
            return visitor.visitConstr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstrContext = ConstrContext;
var EarlyDefsContext = /** @class */ (function (_super) {
    __extends(EarlyDefsContext, _super);
    function EarlyDefsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EarlyDefsContext.prototype.earlyDef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EarlyDefContext);
        }
        else {
            return this.getRuleContext(i, EarlyDefContext);
        }
    };
    EarlyDefsContext.prototype.Sep = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Sep);
        }
        else {
            return this.getToken(ScalaParser.Sep, i);
        }
    };
    Object.defineProperty(EarlyDefsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_earlyDefs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EarlyDefsContext.prototype.enterRule = function (listener) {
        if (listener.enterEarlyDefs) {
            listener.enterEarlyDefs(this);
        }
    };
    // @Override
    EarlyDefsContext.prototype.exitRule = function (listener) {
        if (listener.exitEarlyDefs) {
            listener.exitEarlyDefs(this);
        }
    };
    // @Override
    EarlyDefsContext.prototype.accept = function (visitor) {
        if (visitor.visitEarlyDefs) {
            return visitor.visitEarlyDefs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EarlyDefsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EarlyDefsContext = EarlyDefsContext;
var EarlyDefContext = /** @class */ (function (_super) {
    __extends(EarlyDefContext, _super);
    function EarlyDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EarlyDefContext.prototype.patVarDef = function () {
        return this.getRuleContext(0, PatVarDefContext);
    };
    EarlyDefContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    EarlyDefContext.prototype.modifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    };
    Object.defineProperty(EarlyDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_earlyDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EarlyDefContext.prototype.enterRule = function (listener) {
        if (listener.enterEarlyDef) {
            listener.enterEarlyDef(this);
        }
    };
    // @Override
    EarlyDefContext.prototype.exitRule = function (listener) {
        if (listener.exitEarlyDef) {
            listener.exitEarlyDef(this);
        }
    };
    // @Override
    EarlyDefContext.prototype.accept = function (visitor) {
        if (visitor.visitEarlyDef) {
            return visitor.visitEarlyDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EarlyDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EarlyDefContext = EarlyDefContext;
var ConstrExprContext = /** @class */ (function (_super) {
    __extends(ConstrExprContext, _super);
    function ConstrExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstrExprContext.prototype.selfInvocation = function () {
        return this.tryGetRuleContext(0, SelfInvocationContext);
    };
    ConstrExprContext.prototype.constrBlock = function () {
        return this.tryGetRuleContext(0, ConstrBlockContext);
    };
    Object.defineProperty(ConstrExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_constrExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstrExprContext.prototype.enterRule = function (listener) {
        if (listener.enterConstrExpr) {
            listener.enterConstrExpr(this);
        }
    };
    // @Override
    ConstrExprContext.prototype.exitRule = function (listener) {
        if (listener.exitConstrExpr) {
            listener.exitConstrExpr(this);
        }
    };
    // @Override
    ConstrExprContext.prototype.accept = function (visitor) {
        if (visitor.visitConstrExpr) {
            return visitor.visitConstrExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstrExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstrExprContext = ConstrExprContext;
var ConstrBlockContext = /** @class */ (function (_super) {
    __extends(ConstrBlockContext, _super);
    function ConstrBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstrBlockContext.prototype.selfInvocation = function () {
        return this.getRuleContext(0, SelfInvocationContext);
    };
    ConstrBlockContext.prototype.Semi = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Semi);
        }
        else {
            return this.getToken(ScalaParser.Semi, i);
        }
    };
    ConstrBlockContext.prototype.blockStat = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatContext);
        }
        else {
            return this.getRuleContext(i, BlockStatContext);
        }
    };
    Object.defineProperty(ConstrBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_constrBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstrBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterConstrBlock) {
            listener.enterConstrBlock(this);
        }
    };
    // @Override
    ConstrBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitConstrBlock) {
            listener.exitConstrBlock(this);
        }
    };
    // @Override
    ConstrBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitConstrBlock) {
            return visitor.visitConstrBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstrBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstrBlockContext = ConstrBlockContext;
var SelfInvocationContext = /** @class */ (function (_super) {
    __extends(SelfInvocationContext, _super);
    function SelfInvocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelfInvocationContext.prototype.argumentExprs = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentExprsContext);
        }
        else {
            return this.getRuleContext(i, ArgumentExprsContext);
        }
    };
    Object.defineProperty(SelfInvocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_selfInvocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelfInvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterSelfInvocation) {
            listener.enterSelfInvocation(this);
        }
    };
    // @Override
    SelfInvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitSelfInvocation) {
            listener.exitSelfInvocation(this);
        }
    };
    // @Override
    SelfInvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitSelfInvocation) {
            return visitor.visitSelfInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelfInvocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelfInvocationContext = SelfInvocationContext;
var TopStatSeqContext = /** @class */ (function (_super) {
    __extends(TopStatSeqContext, _super);
    function TopStatSeqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TopStatSeqContext.prototype.topStat = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TopStatContext);
        }
        else {
            return this.getRuleContext(i, TopStatContext);
        }
    };
    TopStatSeqContext.prototype.Sep = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Sep);
        }
        else {
            return this.getToken(ScalaParser.Sep, i);
        }
    };
    Object.defineProperty(TopStatSeqContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_topStatSeq; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TopStatSeqContext.prototype.enterRule = function (listener) {
        if (listener.enterTopStatSeq) {
            listener.enterTopStatSeq(this);
        }
    };
    // @Override
    TopStatSeqContext.prototype.exitRule = function (listener) {
        if (listener.exitTopStatSeq) {
            listener.exitTopStatSeq(this);
        }
    };
    // @Override
    TopStatSeqContext.prototype.accept = function (visitor) {
        if (visitor.visitTopStatSeq) {
            return visitor.visitTopStatSeq(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TopStatSeqContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TopStatSeqContext = TopStatSeqContext;
var TopStatContext = /** @class */ (function (_super) {
    __extends(TopStatContext, _super);
    function TopStatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TopStatContext.prototype.tmplDef = function () {
        return this.tryGetRuleContext(0, TmplDefContext);
    };
    TopStatContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    TopStatContext.prototype.modifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    };
    TopStatContext.prototype.import_ = function () {
        return this.tryGetRuleContext(0, Import_Context);
    };
    TopStatContext.prototype.packaging = function () {
        return this.tryGetRuleContext(0, PackagingContext);
    };
    TopStatContext.prototype.packageObject = function () {
        return this.tryGetRuleContext(0, PackageObjectContext);
    };
    Object.defineProperty(TopStatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_topStat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TopStatContext.prototype.enterRule = function (listener) {
        if (listener.enterTopStat) {
            listener.enterTopStat(this);
        }
    };
    // @Override
    TopStatContext.prototype.exitRule = function (listener) {
        if (listener.exitTopStat) {
            listener.exitTopStat(this);
        }
    };
    // @Override
    TopStatContext.prototype.accept = function (visitor) {
        if (visitor.visitTopStat) {
            return visitor.visitTopStat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TopStatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TopStatContext = TopStatContext;
var PackagingContext = /** @class */ (function (_super) {
    __extends(PackagingContext, _super);
    function PackagingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PackagingContext.prototype.qualId = function () {
        return this.getRuleContext(0, QualIdContext);
    };
    PackagingContext.prototype.topStatSeq = function () {
        return this.getRuleContext(0, TopStatSeqContext);
    };
    Object.defineProperty(PackagingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_packaging; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PackagingContext.prototype.enterRule = function (listener) {
        if (listener.enterPackaging) {
            listener.enterPackaging(this);
        }
    };
    // @Override
    PackagingContext.prototype.exitRule = function (listener) {
        if (listener.exitPackaging) {
            listener.exitPackaging(this);
        }
    };
    // @Override
    PackagingContext.prototype.accept = function (visitor) {
        if (visitor.visitPackaging) {
            return visitor.visitPackaging(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PackagingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PackagingContext = PackagingContext;
var PackageObjectContext = /** @class */ (function (_super) {
    __extends(PackageObjectContext, _super);
    function PackageObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PackageObjectContext.prototype.objectDef = function () {
        return this.getRuleContext(0, ObjectDefContext);
    };
    Object.defineProperty(PackageObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_packageObject; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PackageObjectContext.prototype.enterRule = function (listener) {
        if (listener.enterPackageObject) {
            listener.enterPackageObject(this);
        }
    };
    // @Override
    PackageObjectContext.prototype.exitRule = function (listener) {
        if (listener.exitPackageObject) {
            listener.exitPackageObject(this);
        }
    };
    // @Override
    PackageObjectContext.prototype.accept = function (visitor) {
        if (visitor.visitPackageObject) {
            return visitor.visitPackageObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PackageObjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PackageObjectContext = PackageObjectContext;
var CompilationUnitContext = /** @class */ (function (_super) {
    __extends(CompilationUnitContext, _super);
    function CompilationUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompilationUnitContext.prototype.topStatSeq = function () {
        return this.getRuleContext(0, TopStatSeqContext);
    };
    CompilationUnitContext.prototype.qualId = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(QualIdContext);
        }
        else {
            return this.getRuleContext(i, QualIdContext);
        }
    };
    CompilationUnitContext.prototype.Sep = function (i) {
        if (i === undefined) {
            return this.getTokens(ScalaParser.Sep);
        }
        else {
            return this.getToken(ScalaParser.Sep, i);
        }
    };
    Object.defineProperty(CompilationUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ScalaParser.RULE_compilationUnit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompilationUnitContext.prototype.enterRule = function (listener) {
        if (listener.enterCompilationUnit) {
            listener.enterCompilationUnit(this);
        }
    };
    // @Override
    CompilationUnitContext.prototype.exitRule = function (listener) {
        if (listener.exitCompilationUnit) {
            listener.exitCompilationUnit(this);
        }
    };
    // @Override
    CompilationUnitContext.prototype.accept = function (visitor) {
        if (visitor.visitCompilationUnit) {
            return visitor.visitCompilationUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompilationUnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompilationUnitContext = CompilationUnitContext;
