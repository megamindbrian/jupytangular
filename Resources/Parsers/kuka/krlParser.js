"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/kuka/krl.g4 by ANTLR 4.7.3-SNAPSHOT
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
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var krlParser = /** @class */ (function (_super) {
    __extends(krlParser, _super);
    function krlParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(krlParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(krlParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return krlParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(krlParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "krl.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(krlParser.prototype, "ruleNames", {
        // @Override
        get: function () { return krlParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(krlParser.prototype, "serializedATN", {
        // @Override
        get: function () { return krlParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    krlParser.prototype.module = function () {
        var _localctx = new ModuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, krlParser.RULE_module);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 128;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case krlParser.DEFDAT:
                        {
                            this.state = 126;
                            this.moduleData();
                        }
                        break;
                    case krlParser.DEF:
                    case krlParser.DEFFCT:
                    case krlParser.GLOBAL:
                        {
                            this.state = 127;
                            this.moduleRoutines();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 130;
                this.match(krlParser.EOF);
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
    krlParser.prototype.moduleRoutines = function () {
        var _localctx = new ModuleRoutinesContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, krlParser.RULE_moduleRoutines);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 132;
                this.mainRoutine();
                this.state = 137;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (krlParser.DEF - 47)) | (1 << (krlParser.DEFFCT - 47)) | (1 << (krlParser.GLOBAL - 47)))) !== 0) || _la === krlParser.NEWLINE) {
                    {
                        this.state = 135;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case krlParser.DEF:
                            case krlParser.DEFFCT:
                            case krlParser.GLOBAL:
                                {
                                    this.state = 133;
                                    this.subRoutine();
                                }
                                break;
                            case krlParser.NEWLINE:
                                {
                                    this.state = 134;
                                    this.match(krlParser.NEWLINE);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 139;
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
    krlParser.prototype.mainRoutine = function () {
        var _localctx = new MainRoutineContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, krlParser.RULE_mainRoutine);
        try {
            this.state = 142;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 140;
                        this.procedureDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 141;
                        this.functionDefinition();
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
    krlParser.prototype.subRoutine = function () {
        var _localctx = new SubRoutineContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, krlParser.RULE_subRoutine);
        try {
            this.state = 146;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 144;
                        this.procedureDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 145;
                        this.functionDefinition();
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
    krlParser.prototype.procedureDefinition = function () {
        var _localctx = new ProcedureDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, krlParser.RULE_procedureDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 149;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.GLOBAL) {
                    {
                        this.state = 148;
                        this.match(krlParser.GLOBAL);
                    }
                }
                this.state = 151;
                this.match(krlParser.DEF);
                this.state = 152;
                this.procedureName();
                this.state = 153;
                this.formalParameters();
                this.state = 154;
                this.match(krlParser.NEWLINE);
                this.state = 155;
                this.routineBody();
                this.state = 156;
                this.match(krlParser.END);
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
    krlParser.prototype.procedureName = function () {
        var _localctx = new ProcedureNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, krlParser.RULE_procedureName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 158;
                this.match(krlParser.IDENTIFIER);
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
    krlParser.prototype.functionDefinition = function () {
        var _localctx = new FunctionDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, krlParser.RULE_functionDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.GLOBAL) {
                    {
                        this.state = 160;
                        this.match(krlParser.GLOBAL);
                    }
                }
                this.state = 163;
                this.match(krlParser.DEFFCT);
                this.state = 164;
                this.type();
                this.state = 165;
                this.functionName();
                this.state = 166;
                this.formalParameters();
                this.state = 167;
                this.match(krlParser.NEWLINE);
                this.state = 168;
                this.routineBody();
                this.state = 169;
                this.match(krlParser.ENDFCT);
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
    krlParser.prototype.functionName = function () {
        var _localctx = new FunctionNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, krlParser.RULE_functionName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 171;
                this.match(krlParser.IDENTIFIER);
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
    krlParser.prototype.moduleData = function () {
        var _localctx = new ModuleDataContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, krlParser.RULE_moduleData);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 173;
                this.match(krlParser.DEFDAT);
                this.state = 174;
                this.moduleName();
                this.state = 176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.PUBLIC) {
                    {
                        this.state = 175;
                        this.match(krlParser.PUBLIC);
                    }
                }
                this.state = 178;
                this.match(krlParser.NEWLINE);
                this.state = 179;
                this.dataList();
                this.state = 180;
                this.match(krlParser.ENDDAT);
                this.state = 184;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.NEWLINE) {
                    {
                        {
                            this.state = 181;
                            this.match(krlParser.NEWLINE);
                        }
                    }
                    this.state = 186;
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
    krlParser.prototype.moduleName = function () {
        var _localctx = new ModuleNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, krlParser.RULE_moduleName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 187;
                this.match(krlParser.IDENTIFIER);
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
    krlParser.prototype.dataList = function () {
        var _localctx = new DataListContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, krlParser.RULE_dataList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 207;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (krlParser.BOOL - 31)) | (1 << (krlParser.CHAR - 31)) | (1 << (krlParser.CONST - 31)) | (1 << (krlParser.DECL - 31)) | (1 << (krlParser.ENUM - 31)))) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (krlParser.EXT - 63)) | (1 << (krlParser.EXTFCT - 63)) | (1 << (krlParser.GLOBAL - 63)) | (1 << (krlParser.IMPORT - 63)) | (1 << (krlParser.INT - 63)) | (1 << (krlParser.REAL - 63)) | (1 << (krlParser.SIGNAL - 63)) | (1 << (krlParser.STRUC - 63)))) !== 0) || _la === krlParser.NEWLINE || _la === krlParser.IDENTIFIER) {
                    {
                        this.state = 205;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                            case 1:
                                {
                                    this.state = 189;
                                    this.match(krlParser.NEWLINE);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 190;
                                    this.forwardDeclaration();
                                    this.state = 191;
                                    this.match(krlParser.NEWLINE);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 193;
                                    this.typeDeclaration();
                                    this.state = 194;
                                    this.match(krlParser.NEWLINE);
                                }
                                break;
                            case 4:
                                {
                                    this.state = 196;
                                    this.variableDeclarationInDataList();
                                    this.state = 197;
                                    this.match(krlParser.NEWLINE);
                                }
                                break;
                            case 5:
                                {
                                    this.state = 199;
                                    this.arrayInitialisation();
                                    this.state = 200;
                                    this.match(krlParser.NEWLINE);
                                }
                                break;
                            case 6:
                                {
                                    this.state = 202;
                                    this.importStatement();
                                    this.state = 203;
                                    this.match(krlParser.NEWLINE);
                                }
                                break;
                        }
                    }
                    this.state = 209;
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
    krlParser.prototype.arrayInitialisation = function () {
        var _localctx = new ArrayInitialisationContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, krlParser.RULE_arrayInitialisation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 210;
                this.match(krlParser.IDENTIFIER);
                this.state = 211;
                this.arrayVariableSuffix();
                this.state = 212;
                this.match(krlParser.T__0);
                this.state = 213;
                this.unaryPlusMinuxExpression();
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
    krlParser.prototype.typeDeclaration = function () {
        var _localctx = new TypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, krlParser.RULE_typeDeclaration);
        try {
            this.state = 217;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 215;
                        this.structureDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 216;
                        this.enumDefinition();
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
    krlParser.prototype.structureDefinition = function () {
        var _localctx = new StructureDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, krlParser.RULE_structureDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.GLOBAL) {
                    {
                        this.state = 219;
                        this.match(krlParser.GLOBAL);
                    }
                }
                this.state = 222;
                this.match(krlParser.STRUC);
                this.state = 223;
                this.typeName();
                this.state = 224;
                this.type();
                this.state = 225;
                this.variableName();
                this.state = 226;
                this.variableListRest();
                this.state = 234;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.T__1) {
                    {
                        {
                            this.state = 227;
                            this.match(krlParser.T__1);
                            this.state = 228;
                            this.type();
                            this.state = 229;
                            this.variableName();
                            this.state = 230;
                            this.variableListRest();
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
    krlParser.prototype.enumDefinition = function () {
        var _localctx = new EnumDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, krlParser.RULE_enumDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.GLOBAL) {
                    {
                        this.state = 237;
                        this.match(krlParser.GLOBAL);
                    }
                }
                this.state = 240;
                this.match(krlParser.ENUM);
                this.state = 241;
                this.typeName();
                this.state = 242;
                this.enumValue();
                this.state = 247;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.T__1) {
                    {
                        {
                            this.state = 243;
                            this.match(krlParser.T__1);
                            this.state = 244;
                            this.enumValue();
                        }
                    }
                    this.state = 249;
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
    krlParser.prototype.enumValue = function () {
        var _localctx = new EnumValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, krlParser.RULE_enumValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 250;
                this.match(krlParser.IDENTIFIER);
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
    krlParser.prototype.variableDeclaration = function () {
        var _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, krlParser.RULE_variableDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 253;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.DECL) {
                    {
                        this.state = 252;
                        this.match(krlParser.DECL);
                    }
                }
                this.state = 260;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case krlParser.BOOL:
                    case krlParser.CHAR:
                    case krlParser.INT:
                    case krlParser.REAL:
                    case krlParser.IDENTIFIER:
                        {
                            this.state = 255;
                            this.type();
                            this.state = 256;
                            this.variableName();
                            this.state = 257;
                            this.variableListRest();
                        }
                        break;
                    case krlParser.SIGNAL:
                        {
                            this.state = 259;
                            this.signalDeclaration();
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
    krlParser.prototype.signalDeclaration = function () {
        var _localctx = new SignalDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, krlParser.RULE_signalDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 262;
                this.match(krlParser.SIGNAL);
                this.state = 263;
                this.match(krlParser.IDENTIFIER);
                this.state = 264;
                this.primary();
                this.state = 267;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.TO) {
                    {
                        this.state = 265;
                        this.match(krlParser.TO);
                        this.state = 266;
                        this.primary();
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
    krlParser.prototype.variableDeclarationInDataList = function () {
        var _localctx = new VariableDeclarationInDataListContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, krlParser.RULE_variableDeclarationInDataList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.DECL) {
                    {
                        this.state = 269;
                        this.match(krlParser.DECL);
                    }
                }
                this.state = 273;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.GLOBAL) {
                    {
                        this.state = 272;
                        this.match(krlParser.GLOBAL);
                    }
                }
                this.state = 276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.CONST) {
                    {
                        this.state = 275;
                        this.match(krlParser.CONST);
                    }
                }
                this.state = 285;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case krlParser.BOOL:
                    case krlParser.CHAR:
                    case krlParser.INT:
                    case krlParser.REAL:
                    case krlParser.IDENTIFIER:
                        {
                            this.state = 278;
                            this.type();
                            this.state = 279;
                            this.variableName();
                            this.state = 282;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case krlParser.T__1:
                                case krlParser.NEWLINE:
                                    {
                                        this.state = 280;
                                        this.variableListRest();
                                    }
                                    break;
                                case krlParser.T__0:
                                    {
                                        this.state = 281;
                                        this.variableInitialisation();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        break;
                    case krlParser.SIGNAL:
                        {
                            this.state = 284;
                            this.signalDeclaration();
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
    krlParser.prototype.variableListRest = function () {
        var _localctx = new VariableListRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, krlParser.RULE_variableListRest);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 287;
                                this.match(krlParser.T__1);
                                this.state = 288;
                                this.variableName();
                            }
                        }
                    }
                    this.state = 293;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
    krlParser.prototype.variableInitialisation = function () {
        var _localctx = new VariableInitialisationContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, krlParser.RULE_variableInitialisation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 294;
                this.match(krlParser.T__0);
                this.state = 295;
                this.unaryPlusMinuxExpression();
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
    krlParser.prototype.structLiteral = function () {
        var _localctx = new StructLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, krlParser.RULE_structLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 297;
                this.match(krlParser.T__2);
                this.state = 301;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                    case 1:
                        {
                            this.state = 298;
                            this.typeName();
                            this.state = 299;
                            this.match(krlParser.T__3);
                        }
                        break;
                }
                this.state = 303;
                this.structElementList();
                this.state = 304;
                this.match(krlParser.T__4);
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
    krlParser.prototype.structElementList = function () {
        var _localctx = new StructElementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, krlParser.RULE_structElementList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 306;
                this.structElement();
                this.state = 311;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.T__1) {
                    {
                        {
                            this.state = 307;
                            this.match(krlParser.T__1);
                            this.state = 308;
                            this.structElement();
                        }
                    }
                    this.state = 313;
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
    krlParser.prototype.structElement = function () {
        var _localctx = new StructElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, krlParser.RULE_structElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 314;
                this.variableName();
                this.state = 315;
                this.unaryPlusMinuxExpression();
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
    krlParser.prototype.formalParameters = function () {
        var _localctx = new FormalParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, krlParser.RULE_formalParameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 317;
                this.match(krlParser.T__5);
                this.state = 326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.IDENTIFIER) {
                    {
                        this.state = 318;
                        this.parameter();
                        this.state = 323;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === krlParser.T__1) {
                            {
                                {
                                    this.state = 319;
                                    this.match(krlParser.T__1);
                                    this.state = 320;
                                    this.parameter();
                                }
                            }
                            this.state = 325;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 328;
                this.match(krlParser.T__6);
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
    krlParser.prototype.parameter = function () {
        var _localctx = new ParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, krlParser.RULE_parameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                this.variableName();
                this.state = 332;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.T__3) {
                    {
                        this.state = 331;
                        this.parameterCallType();
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
    krlParser.prototype.routineBody = function () {
        var _localctx = new RoutineBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, krlParser.RULE_routineBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 334;
                this.routineDataSection();
                this.state = 335;
                this.routineImplementationSection();
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
    krlParser.prototype.routineDataSection = function () {
        var _localctx = new RoutineDataSectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, krlParser.RULE_routineDataSection);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 350;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 348;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case krlParser.EXT:
                                case krlParser.EXTFCT:
                                    {
                                        this.state = 337;
                                        this.forwardDeclaration();
                                        this.state = 338;
                                        this.match(krlParser.NEWLINE);
                                    }
                                    break;
                                case krlParser.BOOL:
                                case krlParser.CHAR:
                                case krlParser.DECL:
                                case krlParser.INT:
                                case krlParser.REAL:
                                case krlParser.SIGNAL:
                                case krlParser.IDENTIFIER:
                                    {
                                        this.state = 340;
                                        this.variableDeclaration();
                                        this.state = 341;
                                        this.match(krlParser.NEWLINE);
                                    }
                                    break;
                                case krlParser.NEWLINE:
                                    {
                                        {
                                            this.state = 343;
                                            this.match(krlParser.NEWLINE);
                                        }
                                        this.state = 344;
                                        this.match(krlParser.NEWLINE);
                                    }
                                    break;
                                case krlParser.IMPORT:
                                    {
                                        this.state = 345;
                                        this.importStatement();
                                        this.state = 346;
                                        this.match(krlParser.NEWLINE);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 352;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
    krlParser.prototype.forwardDeclaration = function () {
        var _localctx = new ForwardDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, krlParser.RULE_forwardDeclaration);
        try {
            this.state = 362;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case krlParser.EXT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 353;
                        this.match(krlParser.EXT);
                        this.state = 354;
                        this.procedureName();
                        this.state = 355;
                        this.formalParametersWithType();
                    }
                    break;
                case krlParser.EXTFCT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 357;
                        this.match(krlParser.EXTFCT);
                        this.state = 358;
                        this.type();
                        this.state = 359;
                        this.functionName();
                        this.state = 360;
                        this.formalParametersWithType();
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
    krlParser.prototype.formalParametersWithType = function () {
        var _localctx = new FormalParametersWithTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, krlParser.RULE_formalParametersWithType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 364;
                this.match(krlParser.T__5);
                this.state = 373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.BOOL || _la === krlParser.CHAR || _la === krlParser.INT || _la === krlParser.REAL || _la === krlParser.IDENTIFIER) {
                    {
                        this.state = 365;
                        this.parameterWithType();
                        this.state = 370;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === krlParser.T__1) {
                            {
                                {
                                    this.state = 366;
                                    this.match(krlParser.T__1);
                                    this.state = 367;
                                    this.parameterWithType();
                                }
                            }
                            this.state = 372;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 375;
                this.match(krlParser.T__6);
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
    krlParser.prototype.parameterWithType = function () {
        var _localctx = new ParameterWithTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, krlParser.RULE_parameterWithType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                this.type();
                this.state = 379;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.T__3) {
                    {
                        this.state = 378;
                        this.parameterCallType();
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
    krlParser.prototype.parameterCallType = function () {
        var _localctx = new ParameterCallTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, krlParser.RULE_parameterCallType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 381;
                this.match(krlParser.T__3);
                this.state = 382;
                this.match(krlParser.IDENTIFIER);
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
    krlParser.prototype.importStatement = function () {
        var _localctx = new ImportStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, krlParser.RULE_importStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 384;
                this.match(krlParser.IMPORT);
                this.state = 385;
                this.type();
                this.state = 386;
                this.variableName();
                this.state = 387;
                this.match(krlParser.IS);
                this.state = 388;
                this.match(krlParser.T__7);
                this.state = 389;
                this.moduleName();
                this.state = 390;
                this.match(krlParser.T__8);
                this.state = 391;
                this.variableName();
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
    krlParser.prototype.variableName = function () {
        var _localctx = new VariableNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, krlParser.RULE_variableName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 393;
                this.match(krlParser.IDENTIFIER);
                this.state = 395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.T__9) {
                    {
                        this.state = 394;
                        this.arrayVariableSuffix();
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
    krlParser.prototype.arrayVariableSuffix = function () {
        var _localctx = new ArrayVariableSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, krlParser.RULE_arrayVariableSuffix);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 397;
                this.match(krlParser.T__9);
                this.state = 411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << krlParser.T__2) | (1 << krlParser.T__5) | (1 << krlParser.T__17) | (1 << krlParser.T__18) | (1 << krlParser.T__22) | (1 << krlParser.B_NOT))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (krlParser.FALSE - 65)) | (1 << (krlParser.NOT - 65)) | (1 << (krlParser.TRUE - 65)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (krlParser.CHARLITERAL - 106)) | (1 << (krlParser.STRINGLITERAL - 106)) | (1 << (krlParser.FLOATLITERAL - 106)) | (1 << (krlParser.INTLITERAL - 106)) | (1 << (krlParser.IDENTIFIER - 106)))) !== 0)) {
                    {
                        this.state = 398;
                        this.expression();
                        this.state = 409;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === krlParser.T__1) {
                            {
                                this.state = 399;
                                this.match(krlParser.T__1);
                                this.state = 407;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << krlParser.T__2) | (1 << krlParser.T__5) | (1 << krlParser.T__17) | (1 << krlParser.T__18) | (1 << krlParser.T__22) | (1 << krlParser.B_NOT))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (krlParser.FALSE - 65)) | (1 << (krlParser.NOT - 65)) | (1 << (krlParser.TRUE - 65)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (krlParser.CHARLITERAL - 106)) | (1 << (krlParser.STRINGLITERAL - 106)) | (1 << (krlParser.FLOATLITERAL - 106)) | (1 << (krlParser.INTLITERAL - 106)) | (1 << (krlParser.IDENTIFIER - 106)))) !== 0)) {
                                    {
                                        this.state = 400;
                                        this.expression();
                                        this.state = 405;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === krlParser.T__1) {
                                            {
                                                this.state = 401;
                                                this.match(krlParser.T__1);
                                                this.state = 403;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << krlParser.T__2) | (1 << krlParser.T__5) | (1 << krlParser.T__17) | (1 << krlParser.T__18) | (1 << krlParser.T__22) | (1 << krlParser.B_NOT))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (krlParser.FALSE - 65)) | (1 << (krlParser.NOT - 65)) | (1 << (krlParser.TRUE - 65)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (krlParser.CHARLITERAL - 106)) | (1 << (krlParser.STRINGLITERAL - 106)) | (1 << (krlParser.FLOATLITERAL - 106)) | (1 << (krlParser.INTLITERAL - 106)) | (1 << (krlParser.IDENTIFIER - 106)))) !== 0)) {
                                                    {
                                                        this.state = 402;
                                                        this.expression();
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.state = 413;
                this.match(krlParser.T__10);
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
    krlParser.prototype.routineImplementationSection = function () {
        var _localctx = new RoutineImplementationSectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, krlParser.RULE_routineImplementationSection);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 415;
                this.statementList();
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
    krlParser.prototype.statementList = function () {
        var _localctx = new StatementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, krlParser.RULE_statementList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << krlParser.T__2) | (1 << krlParser.T__5) | (1 << krlParser.T__17) | (1 << krlParser.T__18) | (1 << krlParser.T__22) | (1 << krlParser.ANIN) | (1 << krlParser.ANOUT) | (1 << krlParser.B_NOT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (krlParser.BRAKE - 32)) | (1 << (krlParser.CIRC_REL - 32)) | (1 << (krlParser.CIRC - 32)) | (1 << (krlParser.CONTINUE - 32)) | (1 << (krlParser.EXIT - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (krlParser.FALSE - 65)) | (1 << (krlParser.FOR - 65)) | (1 << (krlParser.GLOBAL - 65)) | (1 << (krlParser.GOTO - 65)) | (1 << (krlParser.HALT - 65)) | (1 << (krlParser.IF - 65)) | (1 << (krlParser.INTERRUPT - 65)) | (1 << (krlParser.LIN_REL - 65)) | (1 << (krlParser.LIN - 65)) | (1 << (krlParser.LOOP - 65)) | (1 << (krlParser.NOT - 65)) | (1 << (krlParser.PTP_REL - 65)) | (1 << (krlParser.PTP - 65)) | (1 << (krlParser.REPEAT - 65)) | (1 << (krlParser.RETURN - 65)) | (1 << (krlParser.SWITCH - 65)) | (1 << (krlParser.TRIGGER - 65)) | (1 << (krlParser.TRUE - 65)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (krlParser.WAIT - 98)) | (1 << (krlParser.WHILE - 98)) | (1 << (krlParser.NEWLINE - 98)) | (1 << (krlParser.CHARLITERAL - 98)) | (1 << (krlParser.STRINGLITERAL - 98)) | (1 << (krlParser.FLOATLITERAL - 98)) | (1 << (krlParser.INTLITERAL - 98)) | (1 << (krlParser.IDENTIFIER - 98)))) !== 0)) {
                    {
                        {
                            this.state = 417;
                            this.statement();
                        }
                    }
                    this.state = 422;
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
    krlParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, krlParser.RULE_statement);
        var _la;
        try {
            this.state = 595;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 423;
                        this.match(krlParser.CONTINUE);
                        this.state = 424;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 425;
                        this.match(krlParser.EXIT);
                        this.state = 426;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 427;
                        this.match(krlParser.FOR);
                        this.state = 428;
                        this.match(krlParser.IDENTIFIER);
                        this.state = 429;
                        this.match(krlParser.T__0);
                        this.state = 430;
                        this.expression();
                        this.state = 431;
                        this.match(krlParser.TO);
                        this.state = 432;
                        this.expression();
                        this.state = 435;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === krlParser.IDENTIFIER) {
                            {
                                this.state = 433;
                                this.match(krlParser.IDENTIFIER);
                                this.state = 434;
                                this.expression();
                            }
                        }
                        this.state = 437;
                        this.match(krlParser.NEWLINE);
                        this.state = 438;
                        this.statementList();
                        this.state = 439;
                        this.match(krlParser.ENDFOR);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 441;
                        this.match(krlParser.GOTO);
                        this.state = 442;
                        this.match(krlParser.IDENTIFIER);
                        this.state = 443;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 444;
                        this.match(krlParser.HALT);
                        this.state = 445;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 446;
                        this.match(krlParser.IF);
                        this.state = 447;
                        this.expression();
                        this.state = 448;
                        this.match(krlParser.THEN);
                        this.state = 449;
                        this.match(krlParser.NEWLINE);
                        this.state = 450;
                        this.statementList();
                        this.state = 454;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === krlParser.ELSE) {
                            {
                                this.state = 451;
                                this.match(krlParser.ELSE);
                                this.state = 452;
                                this.match(krlParser.NEWLINE);
                                this.state = 453;
                                this.statementList();
                            }
                        }
                        this.state = 456;
                        this.match(krlParser.ENDIF);
                        this.state = 457;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 459;
                        this.match(krlParser.LOOP);
                        this.state = 460;
                        this.match(krlParser.NEWLINE);
                        this.state = 461;
                        this.statementList();
                        this.state = 462;
                        this.match(krlParser.ENDLOOP);
                        this.state = 463;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 465;
                        this.match(krlParser.REPEAT);
                        this.state = 466;
                        this.match(krlParser.NEWLINE);
                        this.state = 467;
                        this.statementList();
                        this.state = 468;
                        this.match(krlParser.UNTIL);
                        this.state = 469;
                        this.expression();
                        this.state = 470;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 472;
                        this.match(krlParser.SWITCH);
                        this.state = 473;
                        this.expression();
                        this.state = 474;
                        this.match(krlParser.NEWLINE);
                        this.state = 475;
                        this.switchBlockStatementGroups();
                        this.state = 476;
                        this.match(krlParser.ENDSWITCH);
                        this.state = 477;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 479;
                        this.match(krlParser.WAIT);
                        this.state = 480;
                        this.match(krlParser.FOR);
                        this.state = 481;
                        this.expression();
                        this.state = 482;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 484;
                        this.match(krlParser.WAIT);
                        this.state = 485;
                        this.match(krlParser.SEC);
                        this.state = 486;
                        this.expression();
                        this.state = 487;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 489;
                        this.match(krlParser.WHILE);
                        this.state = 490;
                        this.expression();
                        this.state = 491;
                        this.match(krlParser.NEWLINE);
                        this.state = 492;
                        this.statementList();
                        this.state = 493;
                        this.match(krlParser.ENDWHILE);
                        this.state = 494;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 496;
                        this.match(krlParser.RETURN);
                        this.state = 498;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << krlParser.T__2) | (1 << krlParser.T__5) | (1 << krlParser.T__17) | (1 << krlParser.T__18) | (1 << krlParser.T__22) | (1 << krlParser.B_NOT))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (krlParser.FALSE - 65)) | (1 << (krlParser.NOT - 65)) | (1 << (krlParser.TRUE - 65)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (krlParser.CHARLITERAL - 106)) | (1 << (krlParser.STRINGLITERAL - 106)) | (1 << (krlParser.FLOATLITERAL - 106)) | (1 << (krlParser.INTLITERAL - 106)) | (1 << (krlParser.IDENTIFIER - 106)))) !== 0)) {
                            {
                                this.state = 497;
                                this.assignmentExpression();
                            }
                        }
                        this.state = 500;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 501;
                        this.match(krlParser.BRAKE);
                        this.state = 503;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === krlParser.IDENTIFIER) {
                            {
                                this.state = 502;
                                this.match(krlParser.IDENTIFIER);
                            }
                        }
                        this.state = 505;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 506;
                        this.assignmentExpression();
                        this.state = 507;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 509;
                        this.match(krlParser.IDENTIFIER);
                        this.state = 510;
                        this.match(krlParser.T__3);
                        this.state = 511;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 512;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 514;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === krlParser.GLOBAL) {
                            {
                                this.state = 513;
                                this.match(krlParser.GLOBAL);
                            }
                        }
                        this.state = 516;
                        this.match(krlParser.INTERRUPT);
                        this.state = 517;
                        this.match(krlParser.DECL);
                        this.state = 518;
                        this.primary();
                        this.state = 519;
                        this.match(krlParser.WHEN);
                        this.state = 520;
                        this.expression();
                        this.state = 521;
                        this.match(krlParser.DO);
                        this.state = 522;
                        this.assignmentExpression();
                        this.state = 523;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 525;
                        this.match(krlParser.INTERRUPT);
                        this.state = 526;
                        this.match(krlParser.IDENTIFIER);
                        this.state = 528;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << krlParser.T__2) | (1 << krlParser.T__5) | (1 << krlParser.T__22))) !== 0) || _la === krlParser.FALSE || _la === krlParser.TRUE || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (krlParser.CHARLITERAL - 106)) | (1 << (krlParser.STRINGLITERAL - 106)) | (1 << (krlParser.FLOATLITERAL - 106)) | (1 << (krlParser.INTLITERAL - 106)) | (1 << (krlParser.IDENTIFIER - 106)))) !== 0)) {
                            {
                                this.state = 527;
                                this.primary();
                            }
                        }
                        this.state = 530;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 531;
                        _la = this._input.LA(1);
                        if (!(_la === krlParser.PTP_REL || _la === krlParser.PTP)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 532;
                        this.geometricExpression();
                        this.state = 537;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === krlParser.C_PTP) {
                            {
                                this.state = 533;
                                this.match(krlParser.C_PTP);
                                this.state = 535;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (krlParser.C_DIS - 33)) | (1 << (krlParser.C_ORI - 33)) | (1 << (krlParser.C_VEL - 33)))) !== 0)) {
                                    {
                                        this.state = 534;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (krlParser.C_DIS - 33)) | (1 << (krlParser.C_ORI - 33)) | (1 << (krlParser.C_VEL - 33)))) !== 0))) {
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
                            }
                        }
                        this.state = 539;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 541;
                        this.match(krlParser.LIN);
                        this.state = 542;
                        this.geometricExpression();
                        this.state = 544;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (krlParser.C_DIS - 33)) | (1 << (krlParser.C_ORI - 33)) | (1 << (krlParser.C_VEL - 33)))) !== 0)) {
                            {
                                this.state = 543;
                                _la = this._input.LA(1);
                                if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (krlParser.C_DIS - 33)) | (1 << (krlParser.C_ORI - 33)) | (1 << (krlParser.C_VEL - 33)))) !== 0))) {
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
                        this.state = 546;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 548;
                        this.match(krlParser.LIN_REL);
                        this.state = 549;
                        this.geometricExpression();
                        this.state = 551;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (krlParser.C_DIS - 33)) | (1 << (krlParser.C_ORI - 33)) | (1 << (krlParser.C_VEL - 33)))) !== 0)) {
                            {
                                this.state = 550;
                                _la = this._input.LA(1);
                                if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (krlParser.C_DIS - 33)) | (1 << (krlParser.C_ORI - 33)) | (1 << (krlParser.C_VEL - 33)))) !== 0))) {
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
                        this.state = 554;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === krlParser.T__22) {
                            {
                                this.state = 553;
                                this.enumElement();
                            }
                        }
                        this.state = 556;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 558;
                        _la = this._input.LA(1);
                        if (!(_la === krlParser.CIRC_REL || _la === krlParser.CIRC)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 559;
                        this.geometricExpression();
                        this.state = 560;
                        this.match(krlParser.T__1);
                        this.state = 561;
                        this.geometricExpression();
                        this.state = 565;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === krlParser.T__1) {
                            {
                                this.state = 562;
                                this.match(krlParser.T__1);
                                this.state = 563;
                                this.match(krlParser.IDENTIFIER);
                                this.state = 564;
                                this.primary();
                            }
                        }
                        this.state = 568;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (krlParser.C_DIS - 33)) | (1 << (krlParser.C_ORI - 33)) | (1 << (krlParser.C_VEL - 33)))) !== 0)) {
                            {
                                this.state = 567;
                                _la = this._input.LA(1);
                                if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (krlParser.C_DIS - 33)) | (1 << (krlParser.C_ORI - 33)) | (1 << (krlParser.C_VEL - 33)))) !== 0))) {
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
                        this.state = 570;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 572;
                        this.match(krlParser.TRIGGER);
                        this.state = 573;
                        this.match(krlParser.WHEN);
                        {
                            this.state = 574;
                            this.match(krlParser.IDENTIFIER);
                        }
                        this.state = 575;
                        this.match(krlParser.T__0);
                        this.state = 576;
                        this.expression();
                        this.state = 577;
                        this.match(krlParser.DELAY);
                        this.state = 578;
                        this.match(krlParser.T__0);
                        this.state = 579;
                        this.expression();
                        this.state = 580;
                        this.match(krlParser.DO);
                        this.state = 581;
                        this.assignmentExpression();
                        this.state = 585;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === krlParser.PRIO) {
                            {
                                this.state = 582;
                                this.match(krlParser.PRIO);
                                this.state = 583;
                                this.match(krlParser.T__0);
                                this.state = 584;
                                this.expression();
                            }
                        }
                        this.state = 587;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 589;
                        this.analogInputStatement();
                        this.state = 590;
                        this.match(krlParser.NEWLINE);
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 592;
                        this.analogOutputStatement();
                        this.state = 593;
                        this.match(krlParser.NEWLINE);
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
    krlParser.prototype.analogOutputStatement = function () {
        var _localctx = new AnalogOutputStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, krlParser.RULE_analogOutputStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 597;
                this.match(krlParser.ANOUT);
                this.state = 610;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                    case 1:
                        {
                            this.state = 598;
                            this.match(krlParser.IDENTIFIER);
                            this.state = 599;
                            this.assignmentExpression();
                            this.state = 605;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === krlParser.IDENTIFIER) {
                                {
                                    {
                                        this.state = 600;
                                        this.match(krlParser.IDENTIFIER);
                                        this.state = 601;
                                        this.match(krlParser.T__0);
                                        this.state = 602;
                                        this.literal();
                                    }
                                }
                                this.state = 607;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 608;
                            this.match(krlParser.IDENTIFIER);
                            this.state = 609;
                            this.match(krlParser.IDENTIFIER);
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
    krlParser.prototype.analogInputStatement = function () {
        var _localctx = new AnalogInputStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, krlParser.RULE_analogInputStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 612;
                this.match(krlParser.ANIN);
                this.state = 617;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                    case 1:
                        {
                            this.state = 613;
                            this.match(krlParser.IDENTIFIER);
                            this.state = 614;
                            this.assignmentExpression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 615;
                            this.match(krlParser.IDENTIFIER);
                            this.state = 616;
                            this.match(krlParser.IDENTIFIER);
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
    krlParser.prototype.switchBlockStatementGroups = function () {
        var _localctx = new SwitchBlockStatementGroupsContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, krlParser.RULE_switchBlockStatementGroups);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 622;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.NEWLINE) {
                    {
                        {
                            this.state = 619;
                            this.match(krlParser.NEWLINE);
                        }
                    }
                    this.state = 624;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 628;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 625;
                            this.caseLabel();
                            this.state = 626;
                            this.statementList();
                        }
                    }
                    this.state = 630;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === krlParser.CASE);
                this.state = 635;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === krlParser.DEFAULT) {
                    {
                        this.state = 632;
                        this.defaultLabel();
                        this.state = 633;
                        this.statementList();
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
    krlParser.prototype.caseLabel = function () {
        var _localctx = new CaseLabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, krlParser.RULE_caseLabel);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 637;
                this.match(krlParser.CASE);
                this.state = 638;
                this.expression();
                this.state = 643;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.T__1) {
                    {
                        {
                            this.state = 639;
                            this.match(krlParser.T__1);
                            this.state = 640;
                            this.expression();
                        }
                    }
                    this.state = 645;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 646;
                this.match(krlParser.NEWLINE);
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
    krlParser.prototype.defaultLabel = function () {
        var _localctx = new DefaultLabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, krlParser.RULE_defaultLabel);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 648;
                this.match(krlParser.DEFAULT);
                this.state = 649;
                this.match(krlParser.NEWLINE);
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
    krlParser.prototype.expressionList = function () {
        var _localctx = new ExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, krlParser.RULE_expressionList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 651;
                this.assignmentExpression();
                this.state = 656;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.T__1) {
                    {
                        {
                            this.state = 652;
                            this.match(krlParser.T__1);
                            this.state = 653;
                            this.assignmentExpression();
                        }
                    }
                    this.state = 658;
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
    krlParser.prototype.assignmentExpression = function () {
        var _localctx = new AssignmentExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, krlParser.RULE_assignmentExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 659;
                this.expression();
                this.state = 664;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.T__0) {
                    {
                        {
                            this.state = 660;
                            this.match(krlParser.T__0);
                            this.state = 661;
                            this.expression();
                        }
                    }
                    this.state = 666;
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
    krlParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, krlParser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 667;
                this.conditionalOrExpression();
                this.state = 673;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << krlParser.T__11) | (1 << krlParser.T__12) | (1 << krlParser.T__13) | (1 << krlParser.T__14) | (1 << krlParser.T__15) | (1 << krlParser.T__16))) !== 0)) {
                    {
                        {
                            this.state = 668;
                            this.relationalOp();
                            this.state = 669;
                            this.conditionalOrExpression();
                        }
                    }
                    this.state = 675;
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
    krlParser.prototype.relationalOp = function () {
        var _localctx = new RelationalOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, krlParser.RULE_relationalOp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 676;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << krlParser.T__11) | (1 << krlParser.T__12) | (1 << krlParser.T__13) | (1 << krlParser.T__14) | (1 << krlParser.T__15) | (1 << krlParser.T__16))) !== 0))) {
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
    krlParser.prototype.conditionalOrExpression = function () {
        var _localctx = new ConditionalOrExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, krlParser.RULE_conditionalOrExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 678;
                this.exclusiveOrExpression();
                this.state = 683;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.B_OR || _la === krlParser.OR) {
                    {
                        {
                            this.state = 679;
                            _la = this._input.LA(1);
                            if (!(_la === krlParser.B_OR || _la === krlParser.OR)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 680;
                            this.exclusiveOrExpression();
                        }
                    }
                    this.state = 685;
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
    krlParser.prototype.exclusiveOrExpression = function () {
        var _localctx = new ExclusiveOrExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, krlParser.RULE_exclusiveOrExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 686;
                this.conditionalAndExpression();
                this.state = 691;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.B_EXOR || _la === krlParser.EXOR) {
                    {
                        {
                            this.state = 687;
                            _la = this._input.LA(1);
                            if (!(_la === krlParser.B_EXOR || _la === krlParser.EXOR)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 688;
                            this.conditionalAndExpression();
                        }
                    }
                    this.state = 693;
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
    krlParser.prototype.conditionalAndExpression = function () {
        var _localctx = new ConditionalAndExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, krlParser.RULE_conditionalAndExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 694;
                this.additiveExpression();
                this.state = 699;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.AND || _la === krlParser.B_AND) {
                    {
                        {
                            this.state = 695;
                            _la = this._input.LA(1);
                            if (!(_la === krlParser.AND || _la === krlParser.B_AND)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 696;
                            this.additiveExpression();
                        }
                    }
                    this.state = 701;
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
    krlParser.prototype.additiveExpression = function () {
        var _localctx = new AdditiveExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, krlParser.RULE_additiveExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 702;
                this.multiplicativeExpression();
                this.state = 707;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.T__17 || _la === krlParser.T__18) {
                    {
                        {
                            this.state = 703;
                            _la = this._input.LA(1);
                            if (!(_la === krlParser.T__17 || _la === krlParser.T__18)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 704;
                            this.multiplicativeExpression();
                        }
                    }
                    this.state = 709;
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
    krlParser.prototype.multiplicativeExpression = function () {
        var _localctx = new MultiplicativeExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, krlParser.RULE_multiplicativeExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 710;
                this.geometricExpression();
                this.state = 715;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.T__19 || _la === krlParser.T__20) {
                    {
                        {
                            this.state = 711;
                            _la = this._input.LA(1);
                            if (!(_la === krlParser.T__19 || _la === krlParser.T__20)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 712;
                            this.geometricExpression();
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
    krlParser.prototype.geometricExpression = function () {
        var _localctx = new GeometricExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, krlParser.RULE_geometricExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 718;
                this.unaryNotExpression();
                this.state = 723;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === krlParser.T__3) {
                    {
                        {
                            this.state = 719;
                            this.match(krlParser.T__3);
                            this.state = 720;
                            this.unaryNotExpression();
                        }
                    }
                    this.state = 725;
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
    krlParser.prototype.unaryNotExpression = function () {
        var _localctx = new UnaryNotExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, krlParser.RULE_unaryNotExpression);
        try {
            this.state = 731;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case krlParser.NOT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 726;
                        this.match(krlParser.NOT);
                        this.state = 727;
                        this.unaryNotExpression();
                    }
                    break;
                case krlParser.B_NOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 728;
                        this.match(krlParser.B_NOT);
                        this.state = 729;
                        this.unaryNotExpression();
                    }
                    break;
                case krlParser.T__2:
                case krlParser.T__5:
                case krlParser.T__17:
                case krlParser.T__18:
                case krlParser.T__22:
                case krlParser.FALSE:
                case krlParser.TRUE:
                case krlParser.CHARLITERAL:
                case krlParser.STRINGLITERAL:
                case krlParser.FLOATLITERAL:
                case krlParser.INTLITERAL:
                case krlParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 730;
                        this.unaryPlusMinuxExpression();
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
    krlParser.prototype.unaryPlusMinuxExpression = function () {
        var _localctx = new UnaryPlusMinuxExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, krlParser.RULE_unaryPlusMinuxExpression);
        try {
            this.state = 738;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case krlParser.T__17:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 733;
                        this.match(krlParser.T__17);
                        this.state = 734;
                        this.unaryPlusMinuxExpression();
                    }
                    break;
                case krlParser.T__18:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 735;
                        this.match(krlParser.T__18);
                        this.state = 736;
                        this.unaryPlusMinuxExpression();
                    }
                    break;
                case krlParser.T__2:
                case krlParser.T__5:
                case krlParser.T__22:
                case krlParser.FALSE:
                case krlParser.TRUE:
                case krlParser.CHARLITERAL:
                case krlParser.STRINGLITERAL:
                case krlParser.FLOATLITERAL:
                case krlParser.INTLITERAL:
                case krlParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 737;
                        this.primary();
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
    krlParser.prototype.primary = function () {
        var _localctx = new PrimaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, krlParser.RULE_primary);
        var _la;
        try {
            this.state = 753;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case krlParser.T__5:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 740;
                        this.parExpression();
                    }
                    break;
                case krlParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 741;
                        this.variableName();
                        this.state = 746;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === krlParser.T__21) {
                            {
                                {
                                    this.state = 742;
                                    this.match(krlParser.T__21);
                                    this.state = 743;
                                    this.variableName();
                                }
                            }
                            this.state = 748;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 750;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === krlParser.T__5) {
                            {
                                this.state = 749;
                                this.arguments();
                            }
                        }
                    }
                    break;
                case krlParser.T__2:
                case krlParser.T__22:
                case krlParser.FALSE:
                case krlParser.TRUE:
                case krlParser.CHARLITERAL:
                case krlParser.STRINGLITERAL:
                case krlParser.FLOATLITERAL:
                case krlParser.INTLITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 752;
                        this.literal();
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
    krlParser.prototype.parExpression = function () {
        var _localctx = new ParExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, krlParser.RULE_parExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 755;
                this.match(krlParser.T__5);
                this.state = 756;
                this.assignmentExpression();
                this.state = 757;
                this.match(krlParser.T__6);
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
    krlParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, krlParser.RULE_type);
        var _la;
        try {
            this.state = 775;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case krlParser.BOOL:
                case krlParser.CHAR:
                case krlParser.INT:
                case krlParser.REAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 759;
                        this.primitiveType();
                        this.state = 765;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === krlParser.T__9) {
                            {
                                this.state = 760;
                                this.match(krlParser.T__9);
                                this.state = 762;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === krlParser.INTLITERAL) {
                                    {
                                        this.state = 761;
                                        this.match(krlParser.INTLITERAL);
                                    }
                                }
                                this.state = 764;
                                this.match(krlParser.T__10);
                            }
                        }
                    }
                    break;
                case krlParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 767;
                        this.typeName();
                        this.state = 773;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === krlParser.T__9) {
                            {
                                this.state = 768;
                                this.match(krlParser.T__9);
                                this.state = 770;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === krlParser.INTLITERAL) {
                                    {
                                        this.state = 769;
                                        this.match(krlParser.INTLITERAL);
                                    }
                                }
                                this.state = 772;
                                this.match(krlParser.T__10);
                            }
                        }
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
    krlParser.prototype.typeName = function () {
        var _localctx = new TypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, krlParser.RULE_typeName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 777;
                this.match(krlParser.IDENTIFIER);
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
    krlParser.prototype.primitiveType = function () {
        var _localctx = new PrimitiveTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, krlParser.RULE_primitiveType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 779;
                _la = this._input.LA(1);
                if (!(_la === krlParser.BOOL || _la === krlParser.CHAR || _la === krlParser.INT || _la === krlParser.REAL)) {
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
    krlParser.prototype.arguments = function () {
        var _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, krlParser.RULE_arguments);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 781;
                this.match(krlParser.T__5);
                this.state = 783;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << krlParser.T__2) | (1 << krlParser.T__5) | (1 << krlParser.T__17) | (1 << krlParser.T__18) | (1 << krlParser.T__22) | (1 << krlParser.B_NOT))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (krlParser.FALSE - 65)) | (1 << (krlParser.NOT - 65)) | (1 << (krlParser.TRUE - 65)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (krlParser.CHARLITERAL - 106)) | (1 << (krlParser.STRINGLITERAL - 106)) | (1 << (krlParser.FLOATLITERAL - 106)) | (1 << (krlParser.INTLITERAL - 106)) | (1 << (krlParser.IDENTIFIER - 106)))) !== 0)) {
                    {
                        this.state = 782;
                        this.expressionList();
                    }
                }
                this.state = 785;
                this.match(krlParser.T__6);
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
    krlParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, krlParser.RULE_literal);
        try {
            this.state = 795;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case krlParser.INTLITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 787;
                        this.match(krlParser.INTLITERAL);
                    }
                    break;
                case krlParser.FLOATLITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 788;
                        this.match(krlParser.FLOATLITERAL);
                    }
                    break;
                case krlParser.CHARLITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 789;
                        this.match(krlParser.CHARLITERAL);
                    }
                    break;
                case krlParser.STRINGLITERAL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 790;
                        this.match(krlParser.STRINGLITERAL);
                    }
                    break;
                case krlParser.T__2:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 791;
                        this.structLiteral();
                    }
                    break;
                case krlParser.TRUE:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 792;
                        this.match(krlParser.TRUE);
                    }
                    break;
                case krlParser.FALSE:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 793;
                        this.match(krlParser.FALSE);
                    }
                    break;
                case krlParser.T__22:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 794;
                        this.enumElement();
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
    krlParser.prototype.enumElement = function () {
        var _localctx = new EnumElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, krlParser.RULE_enumElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 797;
                this.match(krlParser.T__22);
                this.state = 798;
                this.match(krlParser.IDENTIFIER);
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
    Object.defineProperty(krlParser, "_ATN", {
        get: function () {
            if (!krlParser.__ATN) {
                krlParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(krlParser._serializedATN));
            }
            return krlParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    krlParser.T__0 = 1;
    krlParser.T__1 = 2;
    krlParser.T__2 = 3;
    krlParser.T__3 = 4;
    krlParser.T__4 = 5;
    krlParser.T__5 = 6;
    krlParser.T__6 = 7;
    krlParser.T__7 = 8;
    krlParser.T__8 = 9;
    krlParser.T__9 = 10;
    krlParser.T__10 = 11;
    krlParser.T__11 = 12;
    krlParser.T__12 = 13;
    krlParser.T__13 = 14;
    krlParser.T__14 = 15;
    krlParser.T__15 = 16;
    krlParser.T__16 = 17;
    krlParser.T__17 = 18;
    krlParser.T__18 = 19;
    krlParser.T__19 = 20;
    krlParser.T__20 = 21;
    krlParser.T__21 = 22;
    krlParser.T__22 = 23;
    krlParser.AND = 24;
    krlParser.ANIN = 25;
    krlParser.ANOUT = 26;
    krlParser.B_AND = 27;
    krlParser.B_NOT = 28;
    krlParser.B_OR = 29;
    krlParser.B_EXOR = 30;
    krlParser.BOOL = 31;
    krlParser.BRAKE = 32;
    krlParser.C_DIS = 33;
    krlParser.C_ORI = 34;
    krlParser.C_PTP = 35;
    krlParser.C_VEL = 36;
    krlParser.CASE = 37;
    krlParser.CAST_FROM = 38;
    krlParser.CAST_TO = 39;
    krlParser.CHAR = 40;
    krlParser.CIRC_REL = 41;
    krlParser.CIRC = 42;
    krlParser.CONST = 43;
    krlParser.CONTINUE = 44;
    krlParser.DELAY = 45;
    krlParser.DECL = 46;
    krlParser.DEF = 47;
    krlParser.DEFAULT = 48;
    krlParser.DEFDAT = 49;
    krlParser.DEFFCT = 50;
    krlParser.DO = 51;
    krlParser.ELSE = 52;
    krlParser.END = 53;
    krlParser.ENDDAT = 54;
    krlParser.ENDFCT = 55;
    krlParser.ENDFOR = 56;
    krlParser.ENDIF = 57;
    krlParser.ENDLOOP = 58;
    krlParser.ENDSWITCH = 59;
    krlParser.ENDWHILE = 60;
    krlParser.ENUM = 61;
    krlParser.EXIT = 62;
    krlParser.EXT = 63;
    krlParser.EXTFCT = 64;
    krlParser.FALSE = 65;
    krlParser.FOR = 66;
    krlParser.GLOBAL = 67;
    krlParser.GOTO = 68;
    krlParser.HALT = 69;
    krlParser.IF = 70;
    krlParser.IMPORT = 71;
    krlParser.INTERRUPT = 72;
    krlParser.INT = 73;
    krlParser.IS = 74;
    krlParser.LIN_REL = 75;
    krlParser.LIN = 76;
    krlParser.LOOP = 77;
    krlParser.MAXIMUM = 78;
    krlParser.MINIMUM = 79;
    krlParser.NOT = 80;
    krlParser.OR = 81;
    krlParser.PRIO = 82;
    krlParser.PTP_REL = 83;
    krlParser.PTP = 84;
    krlParser.PUBLIC = 85;
    krlParser.REAL = 86;
    krlParser.REPEAT = 87;
    krlParser.RETURN = 88;
    krlParser.SEC = 89;
    krlParser.SIGNAL = 90;
    krlParser.STRUC = 91;
    krlParser.SWITCH = 92;
    krlParser.THEN = 93;
    krlParser.TO = 94;
    krlParser.TRIGGER = 95;
    krlParser.TRUE = 96;
    krlParser.UNTIL = 97;
    krlParser.WAIT = 98;
    krlParser.WHEN = 99;
    krlParser.WHILE = 100;
    krlParser.EXOR = 101;
    krlParser.HEADERLINE = 102;
    krlParser.WS = 103;
    krlParser.NEWLINE = 104;
    krlParser.LINE_COMMENT = 105;
    krlParser.CHARLITERAL = 106;
    krlParser.STRINGLITERAL = 107;
    krlParser.FLOATLITERAL = 108;
    krlParser.INTLITERAL = 109;
    krlParser.IDENTIFIER = 110;
    krlParser.RULE_module = 0;
    krlParser.RULE_moduleRoutines = 1;
    krlParser.RULE_mainRoutine = 2;
    krlParser.RULE_subRoutine = 3;
    krlParser.RULE_procedureDefinition = 4;
    krlParser.RULE_procedureName = 5;
    krlParser.RULE_functionDefinition = 6;
    krlParser.RULE_functionName = 7;
    krlParser.RULE_moduleData = 8;
    krlParser.RULE_moduleName = 9;
    krlParser.RULE_dataList = 10;
    krlParser.RULE_arrayInitialisation = 11;
    krlParser.RULE_typeDeclaration = 12;
    krlParser.RULE_structureDefinition = 13;
    krlParser.RULE_enumDefinition = 14;
    krlParser.RULE_enumValue = 15;
    krlParser.RULE_variableDeclaration = 16;
    krlParser.RULE_signalDeclaration = 17;
    krlParser.RULE_variableDeclarationInDataList = 18;
    krlParser.RULE_variableListRest = 19;
    krlParser.RULE_variableInitialisation = 20;
    krlParser.RULE_structLiteral = 21;
    krlParser.RULE_structElementList = 22;
    krlParser.RULE_structElement = 23;
    krlParser.RULE_formalParameters = 24;
    krlParser.RULE_parameter = 25;
    krlParser.RULE_routineBody = 26;
    krlParser.RULE_routineDataSection = 27;
    krlParser.RULE_forwardDeclaration = 28;
    krlParser.RULE_formalParametersWithType = 29;
    krlParser.RULE_parameterWithType = 30;
    krlParser.RULE_parameterCallType = 31;
    krlParser.RULE_importStatement = 32;
    krlParser.RULE_variableName = 33;
    krlParser.RULE_arrayVariableSuffix = 34;
    krlParser.RULE_routineImplementationSection = 35;
    krlParser.RULE_statementList = 36;
    krlParser.RULE_statement = 37;
    krlParser.RULE_analogOutputStatement = 38;
    krlParser.RULE_analogInputStatement = 39;
    krlParser.RULE_switchBlockStatementGroups = 40;
    krlParser.RULE_caseLabel = 41;
    krlParser.RULE_defaultLabel = 42;
    krlParser.RULE_expressionList = 43;
    krlParser.RULE_assignmentExpression = 44;
    krlParser.RULE_expression = 45;
    krlParser.RULE_relationalOp = 46;
    krlParser.RULE_conditionalOrExpression = 47;
    krlParser.RULE_exclusiveOrExpression = 48;
    krlParser.RULE_conditionalAndExpression = 49;
    krlParser.RULE_additiveExpression = 50;
    krlParser.RULE_multiplicativeExpression = 51;
    krlParser.RULE_geometricExpression = 52;
    krlParser.RULE_unaryNotExpression = 53;
    krlParser.RULE_unaryPlusMinuxExpression = 54;
    krlParser.RULE_primary = 55;
    krlParser.RULE_parExpression = 56;
    krlParser.RULE_type = 57;
    krlParser.RULE_typeName = 58;
    krlParser.RULE_primitiveType = 59;
    krlParser.RULE_arguments = 60;
    krlParser.RULE_literal = 61;
    krlParser.RULE_enumElement = 62;
    // tslint:disable:no-trailing-whitespace
    krlParser.ruleNames = [
        "module", "moduleRoutines", "mainRoutine", "subRoutine", "procedureDefinition",
        "procedureName", "functionDefinition", "functionName", "moduleData", "moduleName",
        "dataList", "arrayInitialisation", "typeDeclaration", "structureDefinition",
        "enumDefinition", "enumValue", "variableDeclaration", "signalDeclaration",
        "variableDeclarationInDataList", "variableListRest", "variableInitialisation",
        "structLiteral", "structElementList", "structElement", "formalParameters",
        "parameter", "routineBody", "routineDataSection", "forwardDeclaration",
        "formalParametersWithType", "parameterWithType", "parameterCallType",
        "importStatement", "variableName", "arrayVariableSuffix", "routineImplementationSection",
        "statementList", "statement", "analogOutputStatement", "analogInputStatement",
        "switchBlockStatementGroups", "caseLabel", "defaultLabel", "expressionList",
        "assignmentExpression", "expression", "relationalOp", "conditionalOrExpression",
        "exclusiveOrExpression", "conditionalAndExpression", "additiveExpression",
        "multiplicativeExpression", "geometricExpression", "unaryNotExpression",
        "unaryPlusMinuxExpression", "primary", "parExpression", "type", "typeName",
        "primitiveType", "arguments", "literal", "enumElement",
    ];
    krlParser._LITERAL_NAMES = [
        undefined, "'='", "','", "'{'", "':'", "'}'", "'('", "')'", "'/R1/'",
        "'..'", "'['", "']'", "'=='", "'<>'", "'<='", "'>='", "'<'", "'>'", "'+'",
        "'-'", "'*'", "'/'", "'.'", "'#'",
    ];
    krlParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "AND", "ANIN", "ANOUT", "B_AND", "B_NOT",
        "B_OR", "B_EXOR", "BOOL", "BRAKE", "C_DIS", "C_ORI", "C_PTP", "C_VEL",
        "CASE", "CAST_FROM", "CAST_TO", "CHAR", "CIRC_REL", "CIRC", "CONST", "CONTINUE",
        "DELAY", "DECL", "DEF", "DEFAULT", "DEFDAT", "DEFFCT", "DO", "ELSE", "END",
        "ENDDAT", "ENDFCT", "ENDFOR", "ENDIF", "ENDLOOP", "ENDSWITCH", "ENDWHILE",
        "ENUM", "EXIT", "EXT", "EXTFCT", "FALSE", "FOR", "GLOBAL", "GOTO", "HALT",
        "IF", "IMPORT", "INTERRUPT", "INT", "IS", "LIN_REL", "LIN", "LOOP", "MAXIMUM",
        "MINIMUM", "NOT", "OR", "PRIO", "PTP_REL", "PTP", "PUBLIC", "REAL", "REPEAT",
        "RETURN", "SEC", "SIGNAL", "STRUC", "SWITCH", "THEN", "TO", "TRIGGER",
        "TRUE", "UNTIL", "WAIT", "WHEN", "WHILE", "EXOR", "HEADERLINE", "WS",
        "NEWLINE", "LINE_COMMENT", "CHARLITERAL", "STRINGLITERAL", "FLOATLITERAL",
        "INTLITERAL", "IDENTIFIER",
    ];
    krlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(krlParser._LITERAL_NAMES, krlParser._SYMBOLIC_NAMES, []);
    krlParser._serializedATNSegments = 2;
    krlParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03p\u0323\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x03\x02\x03\x02\x05\x02\x83\n\x02\x03\x02" +
        "\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\x8A\n\x03\f\x03\x0E\x03\x8D\v" +
        "\x03\x03\x04\x03\x04\x05\x04\x91\n\x04\x03\x05\x03\x05\x05\x05\x95\n\x05" +
        "\x03\x06\x05\x06\x98\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x07\x03\x07\x03\b\x05\b\xA4\n\b\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\xB3\n\n" +
        "\x03\n\x03\n\x03\n\x03\n\x07\n\xB9\n\n\f\n\x0E\n\xBC\v\n\x03\v\x03\v\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x07\f\xD0\n\f\f\f\x0E\f\xD3\v\f\x03\r\x03\r\x03\r" +
        "\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\xDC\n\x0E\x03\x0F\x05\x0F\xDF\n\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x07\x0F\xEB\n\x0F\f\x0F\x0E\x0F\xEE\v\x0F\x03\x10\x05\x10\xF1" +
        "\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xF8\n\x10\f\x10" +
        "\x0E\x10\xFB\v\x10\x03\x11\x03\x11\x03\x12\x05\x12\u0100\n\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0107\n\x12\x03\x13\x03\x13\x03" +
        "\x13\x03\x13\x03\x13\x05\x13\u010E\n\x13\x03\x14\x05\x14\u0111\n\x14\x03" +
        "\x14\x05\x14\u0114\n\x14\x03\x14\x05\x14\u0117\n\x14\x03\x14\x03\x14\x03" +
        "\x14\x03\x14\x05\x14\u011D\n\x14\x03\x14\x05\x14\u0120\n\x14\x03\x15\x03" +
        "\x15\x07\x15\u0124\n\x15\f\x15\x0E\x15\u0127\v\x15\x03\x16\x03\x16\x03" +
        "\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0130\n\x17\x03\x17\x03\x17" +
        "\x03\x17\x03\x18\x03\x18\x03\x18\x07\x18\u0138\n\x18\f\x18\x0E\x18\u013B" +
        "\v\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A" +
        "\u0144\n\x1A\f\x1A\x0E\x1A\u0147\v\x1A\x05\x1A\u0149\n\x1A\x03\x1A\x03" +
        "\x1A\x03\x1B\x03\x1B\x05\x1B\u014F\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1D\x07\x1D\u015F\n\x1D\f\x1D\x0E\x1D\u0162\v\x1D\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u016D" +
        "\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0173\n\x1F\f\x1F\x0E\x1F" +
        "\u0176\v\x1F\x05\x1F\u0178\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x05 \u017E" +
        "\n \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
        "\"\x03#\x03#\x05#\u018E\n#\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0196\n" +
        "$\x05$\u0198\n$\x05$\u019A\n$\x05$\u019C\n$\x05$\u019E\n$\x03$\x03$\x03" +
        "%\x03%\x03&\x07&\u01A5\n&\f&\x0E&\u01A8\v&\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u01B6\n\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x05\'\u01C9\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x05\'\u01F5\n\'\x03\'\x03\'\x03\'\x05\'\u01FA\n\'\x03\'\x03\'\x03\'" +
        "\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0205\n\'\x03\'\x03\'\x03\'" +
        "\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0213\n\'" +
        "\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u021A\n\'\x05\'\u021C\n\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x05\'\u0223\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05" +
        "\'\u022A\n\'\x03\'\x05\'\u022D\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'" +
        "\x03\'\x03\'\x03\'\x05\'\u0238\n\'\x03\'\x05\'\u023B\n\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x05\'\u024C\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05" +
        "\'\u0256\n\'\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u025E\n(\f(\x0E(\u0261" +
        "\v(\x03(\x03(\x05(\u0265\n(\x03)\x03)\x03)\x03)\x03)\x05)\u026C\n)\x03" +
        "*\x07*\u026F\n*\f*\x0E*\u0272\v*\x03*\x03*\x03*\x06*\u0277\n*\r*\x0E*" +
        "\u0278\x03*\x03*\x03*\x05*\u027E\n*\x03+\x03+\x03+\x03+\x07+\u0284\n+" +
        "\f+\x0E+\u0287\v+\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03-\x07-\u0291\n" +
        "-\f-\x0E-\u0294\v-\x03.\x03.\x03.\x07.\u0299\n.\f.\x0E.\u029C\v.\x03/" +
        "\x03/\x03/\x03/\x07/\u02A2\n/\f/\x0E/\u02A5\v/\x030\x030\x031\x031\x03" +
        "1\x071\u02AC\n1\f1\x0E1\u02AF\v1\x032\x032\x032\x072\u02B4\n2\f2\x0E2" +
        "\u02B7\v2\x033\x033\x033\x073\u02BC\n3\f3\x0E3\u02BF\v3\x034\x034\x03" +
        "4\x074\u02C4\n4\f4\x0E4\u02C7\v4\x035\x035\x035\x075\u02CC\n5\f5\x0E5" +
        "\u02CF\v5\x036\x036\x036\x076\u02D4\n6\f6\x0E6\u02D7\v6\x037\x037\x03" +
        "7\x037\x037\x057\u02DE\n7\x038\x038\x038\x038\x038\x058\u02E5\n8\x039" +
        "\x039\x039\x039\x079\u02EB\n9\f9\x0E9\u02EE\v9\x039\x059\u02F1\n9\x03" +
        "9\x059\u02F4\n9\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x05;\u02FD\n;\x03;" +
        "\x05;\u0300\n;\x03;\x03;\x03;\x05;\u0305\n;\x03;\x05;\u0308\n;\x05;\u030A" +
        "\n;\x03<\x03<\x03=\x03=\x03>\x03>\x05>\u0312\n>\x03>\x03>\x03?\x03?\x03" +
        "?\x03?\x03?\x03?\x03?\x03?\x05?\u031E\n?\x03@\x03@\x03@\x03@\x02\x02\x02" +
        "A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
        "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
        "F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
        "b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
        "~\x02\x02\f\x03\x02UV\x04\x02#$&&\x03\x02+,\x03\x02\x0E\x13\x04\x02\x1F" +
        "\x1FSS\x04\x02  gg\x04\x02\x1A\x1A\x1D\x1D\x03\x02\x14\x15\x03\x02\x16" +
        "\x17\x06\x02!!**KKXX\x02\u0360\x02\x82\x03\x02\x02\x02\x04\x86\x03\x02" +
        "\x02\x02\x06\x90\x03\x02\x02\x02\b\x94\x03\x02\x02\x02\n\x97\x03\x02\x02" +
        "\x02\f\xA0\x03\x02\x02\x02\x0E\xA3\x03\x02\x02\x02\x10\xAD\x03\x02\x02" +
        "\x02\x12\xAF\x03\x02\x02\x02\x14\xBD\x03\x02\x02\x02\x16\xD1\x03\x02\x02" +
        "\x02\x18\xD4\x03\x02\x02\x02\x1A\xDB\x03\x02\x02\x02\x1C\xDE\x03\x02\x02" +
        "\x02\x1E\xF0\x03\x02\x02\x02 \xFC\x03\x02\x02\x02\"\xFF\x03\x02\x02\x02" +
        "$\u0108\x03\x02\x02\x02&\u0110\x03\x02\x02\x02(\u0125\x03\x02\x02\x02" +
        "*\u0128\x03\x02\x02\x02,\u012B\x03\x02\x02\x02.\u0134\x03\x02\x02\x02" +
        "0\u013C\x03\x02\x02\x022\u013F\x03\x02\x02\x024\u014C\x03\x02\x02\x02" +
        "6\u0150\x03\x02\x02\x028\u0160\x03\x02\x02\x02:\u016C\x03\x02\x02\x02" +
        "<\u016E\x03\x02\x02\x02>\u017B\x03\x02\x02\x02@\u017F\x03\x02\x02\x02" +
        "B\u0182\x03\x02\x02\x02D\u018B\x03\x02\x02\x02F\u018F\x03\x02\x02\x02" +
        "H\u01A1\x03\x02\x02\x02J\u01A6\x03\x02\x02\x02L\u0255\x03\x02\x02\x02" +
        "N\u0257\x03\x02\x02\x02P\u0266\x03\x02\x02\x02R\u0270\x03\x02\x02\x02" +
        "T\u027F\x03\x02\x02\x02V\u028A\x03\x02\x02\x02X\u028D\x03\x02\x02\x02" +
        "Z\u0295\x03\x02\x02\x02\\\u029D\x03\x02\x02\x02^\u02A6\x03\x02\x02\x02" +
        "`\u02A8\x03\x02\x02\x02b\u02B0\x03\x02\x02\x02d\u02B8\x03\x02\x02\x02" +
        "f\u02C0\x03\x02\x02\x02h\u02C8\x03\x02\x02\x02j\u02D0\x03\x02\x02\x02" +
        "l\u02DD\x03\x02\x02\x02n\u02E4\x03\x02\x02\x02p\u02F3\x03\x02\x02\x02" +
        "r\u02F5\x03\x02\x02\x02t\u0309\x03\x02\x02\x02v\u030B\x03\x02\x02\x02" +
        "x\u030D\x03\x02\x02\x02z\u030F\x03\x02\x02\x02|\u031D\x03\x02\x02\x02" +
        "~\u031F\x03\x02\x02\x02\x80\x83\x05\x12\n\x02\x81\x83\x05\x04\x03\x02" +
        "\x82\x80\x03\x02\x02\x02\x82\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02" +
        "\x84\x85\x07\x02\x02\x03\x85\x03\x03\x02\x02\x02\x86\x8B\x05\x06\x04\x02" +
        "\x87\x8A\x05\b\x05\x02\x88\x8A\x07j\x02\x02\x89\x87\x03\x02\x02\x02\x89" +
        "\x88\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B" +
        "\x8C\x03\x02\x02\x02\x8C\x05\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E" +
        "\x91\x05\n\x06\x02\x8F\x91\x05\x0E\b\x02\x90\x8E\x03\x02\x02\x02\x90\x8F" +
        "\x03\x02\x02\x02\x91\x07\x03\x02\x02\x02\x92\x95\x05\n\x06\x02\x93\x95" +
        "\x05\x0E\b\x02\x94\x92\x03\x02\x02\x02\x94\x93\x03\x02\x02\x02\x95\t\x03" +
        "\x02\x02\x02\x96\x98\x07E\x02\x02\x97\x96\x03\x02\x02\x02\x97\x98\x03" +
        "\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9A\x071\x02\x02\x9A\x9B\x05" +
        "\f\x07\x02\x9B\x9C\x052\x1A\x02\x9C\x9D\x07j\x02\x02\x9D\x9E\x056\x1C" +
        "\x02\x9E\x9F\x077\x02\x02\x9F\v\x03\x02\x02\x02\xA0\xA1\x07p\x02\x02\xA1" +
        "\r\x03\x02\x02\x02\xA2\xA4\x07E\x02\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4" +
        "\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA6\x074\x02\x02\xA6\xA7" +
        "\x05t;\x02\xA7\xA8\x05\x10\t\x02\xA8\xA9\x052\x1A\x02\xA9\xAA\x07j\x02" +
        "\x02\xAA\xAB\x056\x1C\x02\xAB\xAC\x079\x02\x02\xAC\x0F\x03\x02\x02\x02" +
        "\xAD\xAE\x07p\x02\x02\xAE\x11\x03\x02\x02\x02\xAF\xB0\x073\x02\x02\xB0" +
        "\xB2\x05\x14\v\x02\xB1\xB3\x07W\x02\x02\xB2\xB1\x03\x02\x02\x02\xB2\xB3" +
        "\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x07j\x02\x02\xB5\xB6" +
        "\x05\x16\f\x02\xB6\xBA\x078\x02\x02\xB7\xB9\x07j\x02\x02\xB8\xB7\x03\x02" +
        "\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02" +
        "\x02\x02\xBB\x13\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBE\x07p" +
        "\x02\x02\xBE\x15\x03\x02\x02\x02\xBF\xD0\x07j\x02\x02\xC0\xC1\x05:\x1E" +
        "\x02\xC1\xC2\x07j\x02\x02\xC2\xD0\x03\x02\x02\x02\xC3\xC4\x05\x1A\x0E" +
        "\x02\xC4\xC5\x07j\x02\x02\xC5\xD0\x03\x02\x02\x02\xC6\xC7\x05&\x14\x02" +
        "\xC7\xC8\x07j\x02\x02\xC8\xD0\x03\x02\x02\x02\xC9\xCA\x05\x18\r\x02\xCA" +
        "\xCB\x07j\x02\x02\xCB\xD0\x03\x02\x02\x02\xCC\xCD\x05B\"\x02\xCD\xCE\x07" +
        "j\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF\xBF\x03\x02\x02\x02\xCF\xC0\x03" +
        "\x02\x02\x02\xCF\xC3\x03\x02\x02\x02\xCF\xC6\x03\x02\x02\x02\xCF\xC9\x03" +
        "\x02\x02\x02\xCF\xCC\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03" +
        "\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\x17\x03\x02\x02\x02\xD3\xD1\x03" +
        "\x02\x02\x02\xD4\xD5\x07p\x02\x02\xD5\xD6\x05F$\x02\xD6\xD7\x07\x03\x02" +
        "\x02\xD7\xD8\x05n8\x02\xD8\x19\x03\x02\x02\x02\xD9\xDC\x05\x1C\x0F\x02" +
        "\xDA\xDC\x05\x1E\x10\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02" +
        "\xDC\x1B\x03\x02\x02\x02\xDD\xDF\x07E\x02\x02\xDE\xDD\x03\x02\x02\x02" +
        "\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x07]\x02\x02" +
        "\xE1\xE2\x05v<\x02\xE2\xE3\x05t;\x02\xE3\xE4\x05D#\x02\xE4\xEC\x05(\x15" +
        "\x02\xE5\xE6\x07\x04\x02\x02\xE6\xE7\x05t;\x02\xE7\xE8\x05D#\x02\xE8\xE9" +
        "\x05(\x15\x02\xE9\xEB\x03\x02\x02\x02\xEA\xE5\x03\x02\x02\x02\xEB\xEE" +
        "\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\x1D" +
        "\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF1\x07E\x02\x02\xF0\xEF" +
        "\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3" +
        "\x07?\x02\x02\xF3\xF4\x05v<\x02\xF4\xF9\x05 \x11\x02\xF5\xF6\x07\x04\x02" +
        "\x02\xF6\xF8\x05 \x11\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFB\x03\x02\x02" +
        "\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\x1F\x03\x02\x02" +
        "\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFD\x07p\x02\x02\xFD!\x03\x02\x02\x02" +
        "\xFE\u0100\x070\x02\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02" +
        "\x02\u0100\u0106\x03\x02\x02\x02\u0101\u0102\x05t;\x02\u0102\u0103\x05" +
        "D#\x02\u0103\u0104\x05(\x15\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0107" +
        "\x05$\x13\x02\u0106\u0101\x03\x02\x02\x02\u0106\u0105\x03\x02\x02\x02" +
        "\u0107#\x03\x02\x02\x02\u0108\u0109\x07\\\x02\x02\u0109\u010A\x07p\x02" +
        "\x02\u010A\u010D\x05p9\x02\u010B\u010C\x07`\x02\x02\u010C\u010E\x05p9" +
        "\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E%\x03" +
        "\x02\x02\x02\u010F\u0111\x070\x02\x02\u0110\u010F\x03\x02\x02\x02\u0110" +
        "\u0111\x03\x02\x02\x02\u0111\u0113\x03\x02\x02\x02\u0112\u0114\x07E\x02" +
        "\x02\u0113\u0112\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0116" +
        "\x03\x02\x02\x02\u0115\u0117\x07-\x02\x02\u0116\u0115\x03\x02\x02\x02" +
        "\u0116\u0117\x03\x02\x02\x02\u0117\u011F\x03\x02\x02\x02\u0118\u0119\x05" +
        "t;\x02\u0119\u011C\x05D#\x02\u011A\u011D\x05(\x15\x02\u011B\u011D\x05" +
        "*\x16\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011B\x03\x02\x02\x02\u011D" +
        "\u0120\x03\x02\x02\x02\u011E\u0120\x05$\x13\x02\u011F\u0118\x03\x02\x02" +
        "\x02\u011F\u011E\x03\x02\x02\x02\u0120\'\x03\x02\x02\x02\u0121\u0122\x07" +
        "\x04\x02\x02\u0122\u0124\x05D#\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0127" +
        "\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02" +
        "\u0126)\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0128\u0129\x07\x03" +
        "\x02\x02\u0129\u012A\x05n8\x02\u012A+\x03\x02\x02\x02\u012B\u012F\x07" +
        "\x05\x02\x02\u012C\u012D\x05v<\x02\u012D\u012E\x07\x06\x02\x02\u012E\u0130" +
        "\x03\x02\x02\x02\u012F\u012C\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02" +
        "\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x05.\x18\x02\u0132\u0133\x07" +
        "\x07\x02\x02\u0133-\x03\x02\x02\x02\u0134\u0139\x050\x19\x02\u0135\u0136" +
        "\x07\x04\x02\x02\u0136\u0138\x050\x19\x02\u0137\u0135\x03\x02\x02\x02" +
        "\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03" +
        "\x02\x02\x02\u013A/\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013C" +
        "\u013D\x05D#\x02\u013D\u013E\x05n8\x02\u013E1\x03\x02\x02\x02\u013F\u0148" +
        "\x07\b\x02\x02\u0140\u0145\x054\x1B\x02\u0141\u0142\x07\x04\x02\x02\u0142" +
        "\u0144\x054\x1B\x02\u0143\u0141\x03\x02\x02\x02\u0144\u0147\x03\x02\x02" +
        "\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0149" +
        "\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0148\u0140\x03\x02\x02\x02" +
        "\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B\x07" +
        "\t\x02\x02\u014B3\x03\x02\x02\x02\u014C\u014E\x05D#\x02\u014D\u014F\x05" +
        "@!\x02\u014E\u014D\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F5" +
        "\x03\x02\x02\x02\u0150\u0151\x058\x1D\x02\u0151\u0152\x05H%\x02\u0152" +
        "7\x03\x02\x02\x02\u0153\u0154\x05:\x1E\x02\u0154\u0155\x07j\x02\x02\u0155" +
        "\u015F\x03\x02\x02\x02\u0156\u0157\x05\"\x12\x02\u0157\u0158\x07j\x02" +
        "\x02\u0158\u015F\x03\x02\x02\x02\u0159\u015A\x07j\x02\x02\u015A\u015F" +
        "\x07j\x02\x02\u015B\u015C\x05B\"\x02\u015C\u015D\x07j\x02\x02\u015D\u015F" +
        "\x03\x02\x02\x02\u015E\u0153\x03\x02\x02\x02\u015E\u0156\x03\x02\x02\x02" +
        "\u015E\u0159\x03\x02\x02\x02\u015E\u015B\x03\x02\x02\x02\u015F\u0162\x03" +
        "\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161" +
        "9\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0163\u0164\x07A\x02\x02" +
        "\u0164\u0165\x05\f\x07\x02\u0165\u0166\x05<\x1F\x02\u0166\u016D\x03\x02" +
        "\x02\x02\u0167\u0168\x07B\x02\x02\u0168\u0169\x05t;\x02\u0169\u016A\x05" +
        "\x10\t\x02\u016A\u016B\x05<\x1F\x02\u016B\u016D\x03\x02\x02\x02\u016C" +
        "\u0163\x03\x02\x02\x02\u016C\u0167\x03\x02\x02\x02\u016D;\x03\x02\x02" +
        "\x02\u016E\u0177\x07\b\x02\x02\u016F\u0174\x05> \x02\u0170\u0171\x07\x04" +
        "\x02\x02\u0171\u0173\x05> \x02\u0172\u0170\x03\x02\x02\x02\u0173\u0176" +
        "\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02" +
        "\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0177\u016F\x03" +
        "\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179" +
        "\u017A\x07\t\x02\x02\u017A=\x03\x02\x02\x02\u017B\u017D\x05t;\x02\u017C" +
        "\u017E\x05@!\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02" +
        "\u017E?\x03\x02\x02\x02\u017F\u0180\x07\x06\x02\x02\u0180\u0181\x07p\x02" +
        "\x02\u0181A\x03\x02\x02\x02\u0182\u0183\x07I\x02\x02\u0183\u0184\x05t" +
        ";\x02\u0184\u0185\x05D#\x02\u0185\u0186\x07L\x02\x02\u0186\u0187\x07\n" +
        "\x02\x02\u0187\u0188\x05\x14\v\x02\u0188\u0189\x07\v\x02\x02\u0189\u018A" +
        "\x05D#\x02\u018AC\x03\x02\x02\x02\u018B\u018D\x07p\x02\x02\u018C\u018E" +
        "\x05F$\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E" +
        "E\x03\x02\x02\x02\u018F\u019D\x07\f\x02\x02\u0190\u019B\x05\\/\x02\u0191" +
        "\u0199\x07\x04\x02\x02\u0192\u0197\x05\\/\x02\u0193\u0195\x07\x04\x02" +
        "\x02\u0194\u0196\x05\\/\x02\u0195\u0194\x03\x02\x02\x02\u0195\u0196\x03" +
        "\x02\x02\x02\u0196\u0198\x03\x02\x02\x02\u0197\u0193\x03\x02\x02\x02\u0197" +
        "\u0198\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0192\x03\x02" +
        "\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C\x03\x02\x02\x02\u019B" +
        "\u0191\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019E\x03\x02" +
        "\x02\x02\u019D\u0190\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E" +
        "\u019F\x03\x02\x02\x02\u019F\u01A0\x07\r\x02\x02\u01A0G\x03\x02\x02\x02" +
        "\u01A1\u01A2\x05J&\x02\u01A2I\x03\x02\x02\x02\u01A3\u01A5\x05L\'\x02\u01A4" +
        "\u01A3\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02" +
        "\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7K\x03\x02\x02\x02\u01A8\u01A6" +
        "\x03\x02\x02\x02\u01A9\u01AA\x07.\x02\x02\u01AA\u0256\x07j\x02\x02\u01AB" +
        "\u01AC\x07@\x02\x02\u01AC\u0256\x07j\x02\x02\u01AD\u01AE\x07D\x02\x02" +
        "\u01AE\u01AF\x07p\x02\x02\u01AF\u01B0\x07\x03\x02\x02\u01B0\u01B1\x05" +
        "\\/\x02\u01B1\u01B2\x07`\x02\x02\u01B2\u01B5\x05\\/\x02\u01B3\u01B4\x07" +
        "p\x02\x02\u01B4\u01B6\x05\\/\x02\u01B5\u01B3\x03\x02\x02\x02\u01B5\u01B6" +
        "\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x07j\x02\x02" +
        "\u01B8\u01B9\x05J&\x02\u01B9\u01BA\x07:\x02\x02\u01BA\u0256\x03\x02\x02" +
        "\x02\u01BB\u01BC\x07F\x02\x02\u01BC\u01BD\x07p\x02\x02\u01BD\u0256\x07" +
        "j\x02\x02\u01BE\u01BF\x07G\x02\x02\u01BF\u0256\x07j\x02\x02\u01C0\u01C1" +
        "\x07H\x02\x02\u01C1\u01C2\x05\\/\x02\u01C2\u01C3\x07_\x02\x02\u01C3\u01C4" +
        "\x07j\x02\x02\u01C4\u01C8\x05J&\x02\u01C5\u01C6\x076\x02\x02\u01C6\u01C7" +
        "\x07j\x02\x02\u01C7\u01C9\x05J&\x02\u01C8\u01C5\x03\x02\x02\x02\u01C8" +
        "\u01C9\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x07;\x02" +
        "\x02\u01CB\u01CC\x07j\x02\x02\u01CC\u0256\x03\x02\x02\x02\u01CD\u01CE" +
        "\x07O\x02\x02\u01CE\u01CF\x07j\x02\x02\u01CF\u01D0\x05J&\x02\u01D0\u01D1" +
        "\x07<\x02\x02\u01D1\u01D2\x07j\x02\x02\u01D2\u0256\x03\x02\x02\x02\u01D3" +
        "\u01D4\x07Y\x02\x02\u01D4\u01D5\x07j\x02\x02\u01D5\u01D6\x05J&\x02\u01D6" +
        "\u01D7\x07c\x02\x02\u01D7\u01D8\x05\\/\x02\u01D8\u01D9\x07j\x02\x02\u01D9" +
        "\u0256\x03\x02\x02\x02\u01DA\u01DB\x07^\x02\x02\u01DB\u01DC\x05\\/\x02" +
        "\u01DC\u01DD\x07j\x02\x02\u01DD\u01DE\x05R*\x02\u01DE\u01DF\x07=\x02\x02" +
        "\u01DF\u01E0\x07j\x02\x02\u01E0\u0256\x03\x02\x02\x02\u01E1\u01E2\x07" +
        "d\x02\x02\u01E2\u01E3\x07D\x02\x02\u01E3\u01E4\x05\\/\x02\u01E4\u01E5" +
        "\x07j\x02\x02\u01E5\u0256\x03\x02\x02\x02\u01E6\u01E7\x07d\x02\x02\u01E7" +
        "\u01E8\x07[\x02\x02\u01E8\u01E9\x05\\/\x02\u01E9\u01EA\x07j\x02\x02\u01EA" +
        "\u0256\x03\x02\x02\x02\u01EB\u01EC\x07f\x02\x02\u01EC\u01ED\x05\\/\x02" +
        "\u01ED\u01EE\x07j\x02\x02\u01EE\u01EF\x05J&\x02\u01EF\u01F0\x07>\x02\x02" +
        "\u01F0\u01F1\x07j\x02\x02\u01F1\u0256\x03\x02\x02\x02\u01F2\u01F4\x07" +
        "Z\x02\x02\u01F3\u01F5\x05Z.\x02\u01F4\u01F3\x03\x02\x02\x02\u01F4\u01F5" +
        "\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u0256\x07j\x02\x02" +
        "\u01F7\u01F9\x07\"\x02\x02\u01F8\u01FA\x07p\x02\x02\u01F9\u01F8\x03\x02" +
        "\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB" +
        "\u0256\x07j\x02\x02\u01FC\u01FD\x05Z.\x02\u01FD\u01FE\x07j\x02\x02\u01FE" +
        "\u0256\x03\x02\x02\x02\u01FF\u0200\x07p\x02\x02\u0200\u0201\x07\x06\x02" +
        "\x02\u0201\u0256\x07j\x02\x02\u0202\u0256\x07j\x02\x02\u0203\u0205\x07" +
        "E\x02\x02\u0204\u0203\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205" +
        "\u0206\x03\x02\x02\x02\u0206\u0207\x07J\x02\x02\u0207\u0208\x070\x02\x02" +
        "\u0208\u0209\x05p9\x02\u0209\u020A\x07e\x02\x02\u020A\u020B\x05\\/\x02" +
        "\u020B\u020C\x075\x02\x02\u020C\u020D\x05Z.\x02\u020D\u020E\x07j\x02\x02";
    krlParser._serializedATNSegment1 = "\u020E\u0256\x03\x02\x02\x02\u020F\u0210\x07J\x02\x02\u0210\u0212\x07" +
        "p\x02\x02\u0211\u0213\x05p9\x02\u0212\u0211\x03\x02\x02\x02\u0212\u0213" +
        "\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0256\x07j\x02\x02" +
        "\u0215\u0216\t\x02\x02\x02\u0216\u021B\x05j6\x02\u0217\u0219\x07%\x02" +
        "\x02\u0218\u021A\t\x03\x02\x02\u0219\u0218\x03\x02\x02\x02\u0219\u021A" +
        "\x03\x02\x02\x02\u021A\u021C\x03\x02\x02\x02\u021B\u0217\x03\x02\x02\x02" +
        "\u021B\u021C\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x07" +
        "j\x02\x02\u021E\u0256\x03\x02\x02\x02\u021F\u0220\x07N\x02\x02\u0220\u0222" +
        "\x05j6\x02\u0221\u0223\t\x03\x02\x02\u0222\u0221\x03\x02\x02\x02\u0222" +
        "\u0223\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0225\x07j\x02" +
        "\x02\u0225\u0256\x03\x02\x02\x02\u0226\u0227\x07M\x02\x02\u0227\u0229" +
        "\x05j6\x02\u0228\u022A\t\x03\x02\x02\u0229\u0228\x03\x02\x02\x02\u0229" +
        "\u022A\x03\x02\x02\x02\u022A\u022C\x03\x02\x02\x02\u022B\u022D\x05~@\x02" +
        "\u022C\u022B\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022E\x03" +
        "\x02\x02\x02\u022E\u022F\x07j\x02\x02\u022F\u0256\x03\x02\x02\x02\u0230" +
        "\u0231\t\x04\x02\x02\u0231\u0232\x05j6\x02\u0232\u0233\x07\x04\x02\x02" +
        "\u0233\u0237\x05j6\x02\u0234\u0235\x07\x04\x02\x02\u0235\u0236\x07p\x02" +
        "\x02\u0236\u0238\x05p9\x02\u0237\u0234\x03\x02\x02\x02\u0237\u0238\x03" +
        "\x02\x02\x02\u0238\u023A\x03\x02\x02\x02\u0239\u023B\t\x03\x02\x02\u023A" +
        "\u0239\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x03\x02" +
        "\x02\x02\u023C\u023D\x07j\x02\x02\u023D\u0256\x03\x02\x02\x02\u023E\u023F" +
        "\x07a\x02\x02\u023F\u0240\x07e\x02\x02\u0240\u0241\x07p\x02\x02\u0241" +
        "\u0242\x07\x03\x02\x02\u0242\u0243\x05\\/\x02\u0243\u0244\x07/\x02\x02" +
        "\u0244\u0245\x07\x03\x02\x02\u0245\u0246\x05\\/\x02\u0246\u0247\x075\x02" +
        "\x02\u0247\u024B\x05Z.\x02\u0248\u0249\x07T\x02\x02\u0249\u024A\x07\x03" +
        "\x02\x02\u024A\u024C\x05\\/\x02\u024B\u0248\x03\x02\x02\x02\u024B\u024C" +
        "\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D\u024E\x07j\x02\x02" +
        "\u024E\u0256\x03\x02\x02\x02\u024F\u0250\x05P)\x02\u0250\u0251\x07j\x02" +
        "\x02\u0251\u0256\x03\x02\x02\x02\u0252\u0253\x05N(\x02\u0253\u0254\x07" +
        "j\x02\x02\u0254\u0256\x03\x02\x02\x02\u0255\u01A9\x03\x02\x02\x02\u0255" +
        "\u01AB\x03\x02\x02\x02\u0255\u01AD\x03\x02\x02\x02\u0255\u01BB\x03\x02" +
        "\x02\x02\u0255\u01BE\x03\x02\x02\x02\u0255\u01C0\x03\x02\x02\x02\u0255" +
        "\u01CD\x03\x02\x02\x02\u0255\u01D3\x03\x02\x02\x02\u0255\u01DA\x03\x02" +
        "\x02\x02\u0255\u01E1\x03\x02\x02\x02\u0255\u01E6\x03\x02\x02\x02\u0255" +
        "\u01EB\x03\x02\x02\x02\u0255\u01F2\x03\x02\x02\x02\u0255\u01F7\x03\x02" +
        "\x02\x02\u0255\u01FC\x03\x02\x02\x02\u0255\u01FF\x03\x02\x02\x02\u0255" +
        "\u0202\x03\x02\x02\x02\u0255\u0204\x03\x02\x02\x02\u0255\u020F\x03\x02" +
        "\x02\x02\u0255\u0215\x03\x02\x02\x02\u0255\u021F\x03\x02\x02\x02\u0255" +
        "\u0226\x03\x02\x02\x02\u0255\u0230\x03\x02\x02\x02\u0255\u023E\x03\x02" +
        "\x02\x02\u0255\u024F\x03\x02\x02\x02\u0255\u0252\x03\x02\x02\x02\u0256" +
        "M\x03\x02\x02\x02\u0257\u0264\x07\x1C\x02\x02\u0258\u0259\x07p\x02\x02" +
        "\u0259\u025F\x05Z.\x02\u025A\u025B\x07p\x02\x02\u025B\u025C\x07\x03\x02" +
        "\x02\u025C\u025E\x05|?\x02\u025D\u025A\x03\x02\x02\x02\u025E\u0261\x03" +
        "\x02\x02\x02\u025F\u025D\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260" +
        "\u0265\x03\x02\x02\x02\u0261\u025F\x03\x02\x02\x02\u0262\u0263\x07p\x02" +
        "\x02\u0263\u0265\x07p\x02\x02\u0264\u0258\x03\x02\x02\x02\u0264\u0262" +
        "\x03\x02\x02\x02\u0265O\x03\x02\x02\x02\u0266\u026B\x07\x1B\x02\x02\u0267" +
        "\u0268\x07p\x02\x02\u0268\u026C\x05Z.\x02\u0269\u026A\x07p\x02\x02\u026A" +
        "\u026C\x07p\x02\x02\u026B\u0267\x03\x02\x02\x02\u026B\u0269\x03\x02\x02" +
        "\x02\u026CQ\x03\x02\x02\x02\u026D\u026F\x07j\x02\x02\u026E\u026D\x03\x02" +
        "\x02\x02\u026F\u0272\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270" +
        "\u0271\x03\x02\x02\x02\u0271\u0276\x03\x02\x02\x02\u0272\u0270\x03\x02" +
        "\x02\x02\u0273\u0274\x05T+\x02\u0274\u0275\x05J&\x02\u0275\u0277\x03\x02" +
        "\x02\x02\u0276\u0273\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278" +
        "\u0276\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027D\x03\x02" +
        "\x02\x02\u027A\u027B\x05V,\x02\u027B\u027C\x05J&\x02\u027C\u027E\x03\x02" +
        "\x02\x02\u027D\u027A\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E" +
        "S\x03\x02\x02\x02\u027F\u0280\x07\'\x02\x02\u0280\u0285\x05\\/\x02\u0281" +
        "\u0282\x07\x04\x02\x02\u0282\u0284\x05\\/\x02\u0283\u0281\x03\x02\x02" +
        "\x02\u0284\u0287\x03\x02\x02\x02\u0285\u0283\x03\x02\x02\x02\u0285\u0286" +
        "\x03\x02\x02\x02\u0286\u0288\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02" +
        "\u0288\u0289\x07j\x02\x02\u0289U\x03\x02\x02\x02\u028A\u028B\x072\x02" +
        "\x02\u028B\u028C\x07j\x02\x02\u028CW\x03\x02\x02\x02\u028D\u0292\x05Z" +
        ".\x02\u028E\u028F\x07\x04\x02\x02\u028F\u0291\x05Z.\x02\u0290\u028E\x03" +
        "\x02\x02\x02\u0291\u0294\x03\x02\x02\x02\u0292\u0290\x03\x02\x02\x02\u0292" +
        "\u0293\x03\x02\x02\x02\u0293Y\x03\x02\x02\x02\u0294\u0292\x03\x02\x02" +
        "\x02\u0295\u029A\x05\\/\x02\u0296\u0297\x07\x03\x02\x02\u0297\u0299\x05" +
        "\\/\x02\u0298\u0296\x03\x02\x02\x02\u0299\u029C\x03\x02\x02\x02\u029A" +
        "\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B[\x03\x02\x02" +
        "\x02\u029C\u029A\x03\x02\x02\x02\u029D\u02A3\x05`1\x02\u029E\u029F\x05" +
        "^0\x02\u029F\u02A0\x05`1\x02\u02A0\u02A2\x03\x02\x02\x02\u02A1\u029E\x03" +
        "\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A3" +
        "\u02A4\x03\x02\x02\x02\u02A4]\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02" +
        "\x02\u02A6\u02A7\t\x05\x02\x02\u02A7_\x03\x02\x02\x02\u02A8\u02AD\x05" +
        "b2\x02\u02A9\u02AA\t\x06\x02\x02\u02AA\u02AC\x05b2\x02\u02AB\u02A9\x03" +
        "\x02\x02\x02\u02AC\u02AF\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD" +
        "\u02AE\x03\x02\x02\x02\u02AEa\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02" +
        "\x02\u02B0\u02B5\x05d3\x02\u02B1\u02B2\t\x07\x02\x02\u02B2\u02B4\x05d" +
        "3\x02\u02B3\u02B1\x03\x02\x02\x02\u02B4\u02B7\x03\x02\x02\x02\u02B5\u02B3" +
        "\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6c\x03\x02\x02\x02\u02B7" +
        "\u02B5\x03\x02\x02\x02\u02B8\u02BD\x05f4\x02\u02B9\u02BA\t\b\x02\x02\u02BA" +
        "\u02BC\x05f4\x02\u02BB\u02B9\x03\x02\x02\x02\u02BC\u02BF\x03\x02\x02\x02" +
        "\u02BD\u02BB\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BEe\x03\x02" +
        "\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02C0\u02C5\x05h5\x02\u02C1\u02C2" +
        "\t\t\x02\x02\u02C2\u02C4\x05h5\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C7" +
        "\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02" +
        "\u02C6g\x03\x02\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C8\u02CD\x05j6" +
        "\x02\u02C9\u02CA\t\n\x02\x02\u02CA\u02CC\x05j6\x02\u02CB\u02C9\x03\x02" +
        "\x02\x02\u02CC\u02CF\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CD" +
        "\u02CE\x03\x02\x02\x02\u02CEi\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02" +
        "\x02\u02D0\u02D5\x05l7\x02\u02D1\u02D2\x07\x06\x02\x02\u02D2\u02D4\x05" +
        "l7\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4\u02D7\x03\x02\x02\x02\u02D5\u02D3" +
        "\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6k\x03\x02\x02\x02\u02D7" +
        "\u02D5\x03\x02\x02\x02\u02D8\u02D9\x07R\x02\x02\u02D9\u02DE\x05l7\x02" +
        "\u02DA\u02DB\x07\x1E\x02\x02\u02DB\u02DE\x05l7\x02\u02DC\u02DE\x05n8\x02" +
        "\u02DD\u02D8\x03\x02\x02\x02\u02DD\u02DA\x03\x02\x02\x02\u02DD\u02DC\x03" +
        "\x02\x02\x02\u02DEm\x03\x02\x02\x02\u02DF\u02E0\x07\x14\x02\x02\u02E0" +
        "\u02E5\x05n8\x02\u02E1\u02E2\x07\x15\x02\x02\u02E2\u02E5\x05n8\x02\u02E3" +
        "\u02E5\x05p9\x02\u02E4\u02DF\x03\x02\x02\x02\u02E4\u02E1\x03\x02\x02\x02" +
        "\u02E4\u02E3\x03\x02\x02\x02\u02E5o\x03\x02\x02\x02\u02E6\u02F4\x05r:" +
        "\x02\u02E7\u02EC\x05D#\x02\u02E8\u02E9\x07\x18\x02\x02\u02E9\u02EB\x05" +
        "D#\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02EE\x03\x02\x02\x02\u02EC\u02EA" +
        "\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02F0\x03\x02\x02\x02" +
        "\u02EE\u02EC\x03\x02\x02\x02\u02EF\u02F1\x05z>\x02\u02F0\u02EF\x03\x02" +
        "\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F4\x03\x02\x02\x02\u02F2" +
        "\u02F4\x05|?\x02\u02F3\u02E6\x03\x02\x02\x02\u02F3\u02E7\x03\x02\x02\x02" +
        "\u02F3\u02F2\x03\x02\x02\x02\u02F4q\x03\x02\x02\x02\u02F5\u02F6\x07\b" +
        "\x02\x02\u02F6\u02F7\x05Z.\x02\u02F7\u02F8\x07\t\x02\x02\u02F8s\x03\x02" +
        "\x02\x02\u02F9\u02FF\x05x=\x02\u02FA\u02FC\x07\f\x02\x02\u02FB\u02FD\x07" +
        "o\x02\x02\u02FC\u02FB\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD" +
        "\u02FE\x03\x02\x02\x02\u02FE\u0300\x07\r\x02\x02\u02FF\u02FA\x03\x02\x02" +
        "\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u030A\x03\x02\x02\x02\u0301\u0307" +
        "\x05v<\x02\u0302\u0304\x07\f\x02\x02\u0303\u0305\x07o\x02\x02\u0304\u0303" +
        "\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0306\x03\x02\x02\x02" +
        "\u0306\u0308\x07\r\x02\x02\u0307\u0302\x03\x02\x02\x02\u0307\u0308\x03" +
        "\x02\x02\x02\u0308\u030A\x03\x02\x02\x02\u0309\u02F9\x03\x02\x02\x02\u0309" +
        "\u0301\x03\x02\x02\x02\u030Au\x03\x02\x02\x02\u030B\u030C\x07p\x02\x02" +
        "\u030Cw\x03\x02\x02\x02\u030D\u030E\t\v\x02\x02\u030Ey\x03\x02\x02\x02" +
        "\u030F\u0311\x07\b\x02\x02\u0310\u0312\x05X-\x02\u0311\u0310\x03\x02\x02" +
        "\x02\u0311\u0312\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0314" +
        "\x07\t\x02\x02\u0314{\x03\x02\x02\x02\u0315\u031E\x07o\x02\x02\u0316\u031E" +
        "\x07n\x02\x02\u0317\u031E\x07l\x02\x02\u0318\u031E\x07m\x02\x02\u0319" +
        "\u031E\x05,\x17\x02\u031A\u031E\x07b\x02\x02\u031B\u031E\x07C\x02\x02" +
        "\u031C\u031E\x05~@\x02\u031D\u0315\x03\x02\x02\x02\u031D\u0316\x03\x02" +
        "\x02\x02\u031D\u0317\x03\x02\x02\x02\u031D\u0318\x03\x02\x02\x02\u031D" +
        "\u0319\x03\x02\x02\x02\u031D\u031A\x03\x02\x02\x02\u031D\u031B\x03\x02" +
        "\x02\x02\u031D\u031C\x03\x02\x02\x02\u031E}\x03\x02\x02\x02\u031F\u0320" +
        "\x07\x19\x02\x02\u0320\u0321\x07p\x02\x02\u0321\x7F\x03\x02\x02\x02X\x82" +
        "\x89\x8B\x90\x94\x97\xA3\xB2\xBA\xCF\xD1\xDB\xDE\xEC\xF0\xF9\xFF\u0106" +
        "\u010D\u0110\u0113\u0116\u011C\u011F\u0125\u012F\u0139\u0145\u0148\u014E" +
        "\u015E\u0160\u016C\u0174\u0177\u017D\u018D\u0195\u0197\u0199\u019B\u019D" +
        "\u01A6\u01B5\u01C8\u01F4\u01F9\u0204\u0212\u0219\u021B\u0222\u0229\u022C" +
        "\u0237\u023A\u024B\u0255\u025F\u0264\u026B\u0270\u0278\u027D\u0285\u0292" +
        "\u029A\u02A3\u02AD\u02B5\u02BD\u02C5\u02CD\u02D5\u02DD\u02E4\u02EC\u02F0" +
        "\u02F3\u02FC\u02FF\u0304\u0307\u0309\u0311\u031D";
    krlParser._serializedATN = Utils.join([
        krlParser._serializedATNSegment0,
        krlParser._serializedATNSegment1,
    ], "");
    return krlParser;
}(Parser_1.Parser));
exports.krlParser = krlParser;
var ModuleContext = /** @class */ (function (_super) {
    __extends(ModuleContext, _super);
    function ModuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleContext.prototype.EOF = function () { return this.getToken(krlParser.EOF, 0); };
    ModuleContext.prototype.moduleData = function () {
        return this.tryGetRuleContext(0, ModuleDataContext);
    };
    ModuleContext.prototype.moduleRoutines = function () {
        return this.tryGetRuleContext(0, ModuleRoutinesContext);
    };
    Object.defineProperty(ModuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_module; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleContext.prototype.enterRule = function (listener) {
        if (listener.enterModule) {
            listener.enterModule(this);
        }
    };
    // @Override
    ModuleContext.prototype.exitRule = function (listener) {
        if (listener.exitModule) {
            listener.exitModule(this);
        }
    };
    // @Override
    ModuleContext.prototype.accept = function (visitor) {
        if (visitor.visitModule) {
            return visitor.visitModule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleContext = ModuleContext;
var ModuleRoutinesContext = /** @class */ (function (_super) {
    __extends(ModuleRoutinesContext, _super);
    function ModuleRoutinesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleRoutinesContext.prototype.mainRoutine = function () {
        return this.getRuleContext(0, MainRoutineContext);
    };
    ModuleRoutinesContext.prototype.subRoutine = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SubRoutineContext);
        }
        else {
            return this.getRuleContext(i, SubRoutineContext);
        }
    };
    ModuleRoutinesContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.NEWLINE);
        }
        else {
            return this.getToken(krlParser.NEWLINE, i);
        }
    };
    Object.defineProperty(ModuleRoutinesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_moduleRoutines; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleRoutinesContext.prototype.enterRule = function (listener) {
        if (listener.enterModuleRoutines) {
            listener.enterModuleRoutines(this);
        }
    };
    // @Override
    ModuleRoutinesContext.prototype.exitRule = function (listener) {
        if (listener.exitModuleRoutines) {
            listener.exitModuleRoutines(this);
        }
    };
    // @Override
    ModuleRoutinesContext.prototype.accept = function (visitor) {
        if (visitor.visitModuleRoutines) {
            return visitor.visitModuleRoutines(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleRoutinesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleRoutinesContext = ModuleRoutinesContext;
var MainRoutineContext = /** @class */ (function (_super) {
    __extends(MainRoutineContext, _super);
    function MainRoutineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MainRoutineContext.prototype.procedureDefinition = function () {
        return this.tryGetRuleContext(0, ProcedureDefinitionContext);
    };
    MainRoutineContext.prototype.functionDefinition = function () {
        return this.tryGetRuleContext(0, FunctionDefinitionContext);
    };
    Object.defineProperty(MainRoutineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_mainRoutine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MainRoutineContext.prototype.enterRule = function (listener) {
        if (listener.enterMainRoutine) {
            listener.enterMainRoutine(this);
        }
    };
    // @Override
    MainRoutineContext.prototype.exitRule = function (listener) {
        if (listener.exitMainRoutine) {
            listener.exitMainRoutine(this);
        }
    };
    // @Override
    MainRoutineContext.prototype.accept = function (visitor) {
        if (visitor.visitMainRoutine) {
            return visitor.visitMainRoutine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MainRoutineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MainRoutineContext = MainRoutineContext;
var SubRoutineContext = /** @class */ (function (_super) {
    __extends(SubRoutineContext, _super);
    function SubRoutineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubRoutineContext.prototype.procedureDefinition = function () {
        return this.tryGetRuleContext(0, ProcedureDefinitionContext);
    };
    SubRoutineContext.prototype.functionDefinition = function () {
        return this.tryGetRuleContext(0, FunctionDefinitionContext);
    };
    Object.defineProperty(SubRoutineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_subRoutine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubRoutineContext.prototype.enterRule = function (listener) {
        if (listener.enterSubRoutine) {
            listener.enterSubRoutine(this);
        }
    };
    // @Override
    SubRoutineContext.prototype.exitRule = function (listener) {
        if (listener.exitSubRoutine) {
            listener.exitSubRoutine(this);
        }
    };
    // @Override
    SubRoutineContext.prototype.accept = function (visitor) {
        if (visitor.visitSubRoutine) {
            return visitor.visitSubRoutine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubRoutineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubRoutineContext = SubRoutineContext;
var ProcedureDefinitionContext = /** @class */ (function (_super) {
    __extends(ProcedureDefinitionContext, _super);
    function ProcedureDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureDefinitionContext.prototype.DEF = function () { return this.getToken(krlParser.DEF, 0); };
    ProcedureDefinitionContext.prototype.procedureName = function () {
        return this.getRuleContext(0, ProcedureNameContext);
    };
    ProcedureDefinitionContext.prototype.formalParameters = function () {
        return this.getRuleContext(0, FormalParametersContext);
    };
    ProcedureDefinitionContext.prototype.NEWLINE = function () { return this.getToken(krlParser.NEWLINE, 0); };
    ProcedureDefinitionContext.prototype.routineBody = function () {
        return this.getRuleContext(0, RoutineBodyContext);
    };
    ProcedureDefinitionContext.prototype.END = function () { return this.getToken(krlParser.END, 0); };
    ProcedureDefinitionContext.prototype.GLOBAL = function () { return this.tryGetToken(krlParser.GLOBAL, 0); };
    Object.defineProperty(ProcedureDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_procedureDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureDefinition) {
            listener.enterProcedureDefinition(this);
        }
    };
    // @Override
    ProcedureDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureDefinition) {
            listener.exitProcedureDefinition(this);
        }
    };
    // @Override
    ProcedureDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureDefinition) {
            return visitor.visitProcedureDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureDefinitionContext = ProcedureDefinitionContext;
var ProcedureNameContext = /** @class */ (function (_super) {
    __extends(ProcedureNameContext, _super);
    function ProcedureNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureNameContext.prototype.IDENTIFIER = function () { return this.getToken(krlParser.IDENTIFIER, 0); };
    Object.defineProperty(ProcedureNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_procedureName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureNameContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureName) {
            listener.enterProcedureName(this);
        }
    };
    // @Override
    ProcedureNameContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureName) {
            listener.exitProcedureName(this);
        }
    };
    // @Override
    ProcedureNameContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureName) {
            return visitor.visitProcedureName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureNameContext = ProcedureNameContext;
var FunctionDefinitionContext = /** @class */ (function (_super) {
    __extends(FunctionDefinitionContext, _super);
    function FunctionDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDefinitionContext.prototype.DEFFCT = function () { return this.getToken(krlParser.DEFFCT, 0); };
    FunctionDefinitionContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    FunctionDefinitionContext.prototype.functionName = function () {
        return this.getRuleContext(0, FunctionNameContext);
    };
    FunctionDefinitionContext.prototype.formalParameters = function () {
        return this.getRuleContext(0, FormalParametersContext);
    };
    FunctionDefinitionContext.prototype.NEWLINE = function () { return this.getToken(krlParser.NEWLINE, 0); };
    FunctionDefinitionContext.prototype.routineBody = function () {
        return this.getRuleContext(0, RoutineBodyContext);
    };
    FunctionDefinitionContext.prototype.ENDFCT = function () { return this.getToken(krlParser.ENDFCT, 0); };
    FunctionDefinitionContext.prototype.GLOBAL = function () { return this.tryGetToken(krlParser.GLOBAL, 0); };
    Object.defineProperty(FunctionDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_functionDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionDefinition) {
            listener.enterFunctionDefinition(this);
        }
    };
    // @Override
    FunctionDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionDefinition) {
            listener.exitFunctionDefinition(this);
        }
    };
    // @Override
    FunctionDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionDefinition) {
            return visitor.visitFunctionDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDefinitionContext = FunctionDefinitionContext;
var FunctionNameContext = /** @class */ (function (_super) {
    __extends(FunctionNameContext, _super);
    function FunctionNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionNameContext.prototype.IDENTIFIER = function () { return this.getToken(krlParser.IDENTIFIER, 0); };
    Object.defineProperty(FunctionNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_functionName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionNameContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionName) {
            listener.enterFunctionName(this);
        }
    };
    // @Override
    FunctionNameContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionName) {
            listener.exitFunctionName(this);
        }
    };
    // @Override
    FunctionNameContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionName) {
            return visitor.visitFunctionName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionNameContext = FunctionNameContext;
var ModuleDataContext = /** @class */ (function (_super) {
    __extends(ModuleDataContext, _super);
    function ModuleDataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleDataContext.prototype.DEFDAT = function () { return this.getToken(krlParser.DEFDAT, 0); };
    ModuleDataContext.prototype.moduleName = function () {
        return this.getRuleContext(0, ModuleNameContext);
    };
    ModuleDataContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.NEWLINE);
        }
        else {
            return this.getToken(krlParser.NEWLINE, i);
        }
    };
    ModuleDataContext.prototype.dataList = function () {
        return this.getRuleContext(0, DataListContext);
    };
    ModuleDataContext.prototype.ENDDAT = function () { return this.getToken(krlParser.ENDDAT, 0); };
    ModuleDataContext.prototype.PUBLIC = function () { return this.tryGetToken(krlParser.PUBLIC, 0); };
    Object.defineProperty(ModuleDataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_moduleData; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleDataContext.prototype.enterRule = function (listener) {
        if (listener.enterModuleData) {
            listener.enterModuleData(this);
        }
    };
    // @Override
    ModuleDataContext.prototype.exitRule = function (listener) {
        if (listener.exitModuleData) {
            listener.exitModuleData(this);
        }
    };
    // @Override
    ModuleDataContext.prototype.accept = function (visitor) {
        if (visitor.visitModuleData) {
            return visitor.visitModuleData(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleDataContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleDataContext = ModuleDataContext;
var ModuleNameContext = /** @class */ (function (_super) {
    __extends(ModuleNameContext, _super);
    function ModuleNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleNameContext.prototype.IDENTIFIER = function () { return this.getToken(krlParser.IDENTIFIER, 0); };
    Object.defineProperty(ModuleNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_moduleName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleNameContext.prototype.enterRule = function (listener) {
        if (listener.enterModuleName) {
            listener.enterModuleName(this);
        }
    };
    // @Override
    ModuleNameContext.prototype.exitRule = function (listener) {
        if (listener.exitModuleName) {
            listener.exitModuleName(this);
        }
    };
    // @Override
    ModuleNameContext.prototype.accept = function (visitor) {
        if (visitor.visitModuleName) {
            return visitor.visitModuleName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleNameContext = ModuleNameContext;
var DataListContext = /** @class */ (function (_super) {
    __extends(DataListContext, _super);
    function DataListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataListContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.NEWLINE);
        }
        else {
            return this.getToken(krlParser.NEWLINE, i);
        }
    };
    DataListContext.prototype.forwardDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ForwardDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ForwardDeclarationContext);
        }
    };
    DataListContext.prototype.typeDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeDeclarationContext);
        }
        else {
            return this.getRuleContext(i, TypeDeclarationContext);
        }
    };
    DataListContext.prototype.variableDeclarationInDataList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationInDataListContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationInDataListContext);
        }
    };
    DataListContext.prototype.arrayInitialisation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArrayInitialisationContext);
        }
        else {
            return this.getRuleContext(i, ArrayInitialisationContext);
        }
    };
    DataListContext.prototype.importStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportStatementContext);
        }
        else {
            return this.getRuleContext(i, ImportStatementContext);
        }
    };
    Object.defineProperty(DataListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_dataList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataListContext.prototype.enterRule = function (listener) {
        if (listener.enterDataList) {
            listener.enterDataList(this);
        }
    };
    // @Override
    DataListContext.prototype.exitRule = function (listener) {
        if (listener.exitDataList) {
            listener.exitDataList(this);
        }
    };
    // @Override
    DataListContext.prototype.accept = function (visitor) {
        if (visitor.visitDataList) {
            return visitor.visitDataList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataListContext = DataListContext;
var ArrayInitialisationContext = /** @class */ (function (_super) {
    __extends(ArrayInitialisationContext, _super);
    function ArrayInitialisationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayInitialisationContext.prototype.IDENTIFIER = function () { return this.getToken(krlParser.IDENTIFIER, 0); };
    ArrayInitialisationContext.prototype.arrayVariableSuffix = function () {
        return this.getRuleContext(0, ArrayVariableSuffixContext);
    };
    ArrayInitialisationContext.prototype.unaryPlusMinuxExpression = function () {
        return this.getRuleContext(0, UnaryPlusMinuxExpressionContext);
    };
    Object.defineProperty(ArrayInitialisationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_arrayInitialisation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayInitialisationContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayInitialisation) {
            listener.enterArrayInitialisation(this);
        }
    };
    // @Override
    ArrayInitialisationContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayInitialisation) {
            listener.exitArrayInitialisation(this);
        }
    };
    // @Override
    ArrayInitialisationContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayInitialisation) {
            return visitor.visitArrayInitialisation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayInitialisationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayInitialisationContext = ArrayInitialisationContext;
var TypeDeclarationContext = /** @class */ (function (_super) {
    __extends(TypeDeclarationContext, _super);
    function TypeDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeDeclarationContext.prototype.structureDefinition = function () {
        return this.tryGetRuleContext(0, StructureDefinitionContext);
    };
    TypeDeclarationContext.prototype.enumDefinition = function () {
        return this.tryGetRuleContext(0, EnumDefinitionContext);
    };
    Object.defineProperty(TypeDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_typeDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeDeclaration) {
            listener.enterTypeDeclaration(this);
        }
    };
    // @Override
    TypeDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeDeclaration) {
            listener.exitTypeDeclaration(this);
        }
    };
    // @Override
    TypeDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeDeclaration) {
            return visitor.visitTypeDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeDeclarationContext = TypeDeclarationContext;
var StructureDefinitionContext = /** @class */ (function (_super) {
    __extends(StructureDefinitionContext, _super);
    function StructureDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructureDefinitionContext.prototype.STRUC = function () { return this.getToken(krlParser.STRUC, 0); };
    StructureDefinitionContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    StructureDefinitionContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    StructureDefinitionContext.prototype.variableName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableNameContext);
        }
        else {
            return this.getRuleContext(i, VariableNameContext);
        }
    };
    StructureDefinitionContext.prototype.variableListRest = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableListRestContext);
        }
        else {
            return this.getRuleContext(i, VariableListRestContext);
        }
    };
    StructureDefinitionContext.prototype.GLOBAL = function () { return this.tryGetToken(krlParser.GLOBAL, 0); };
    Object.defineProperty(StructureDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_structureDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructureDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterStructureDefinition) {
            listener.enterStructureDefinition(this);
        }
    };
    // @Override
    StructureDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitStructureDefinition) {
            listener.exitStructureDefinition(this);
        }
    };
    // @Override
    StructureDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitStructureDefinition) {
            return visitor.visitStructureDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructureDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructureDefinitionContext = StructureDefinitionContext;
var EnumDefinitionContext = /** @class */ (function (_super) {
    __extends(EnumDefinitionContext, _super);
    function EnumDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumDefinitionContext.prototype.ENUM = function () { return this.getToken(krlParser.ENUM, 0); };
    EnumDefinitionContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    EnumDefinitionContext.prototype.enumValue = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumValueContext);
        }
        else {
            return this.getRuleContext(i, EnumValueContext);
        }
    };
    EnumDefinitionContext.prototype.GLOBAL = function () { return this.tryGetToken(krlParser.GLOBAL, 0); };
    Object.defineProperty(EnumDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_enumDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumDefinition) {
            listener.enterEnumDefinition(this);
        }
    };
    // @Override
    EnumDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumDefinition) {
            listener.exitEnumDefinition(this);
        }
    };
    // @Override
    EnumDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumDefinition) {
            return visitor.visitEnumDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumDefinitionContext = EnumDefinitionContext;
var EnumValueContext = /** @class */ (function (_super) {
    __extends(EnumValueContext, _super);
    function EnumValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumValueContext.prototype.IDENTIFIER = function () { return this.getToken(krlParser.IDENTIFIER, 0); };
    Object.defineProperty(EnumValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_enumValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumValueContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumValue) {
            listener.enterEnumValue(this);
        }
    };
    // @Override
    EnumValueContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumValue) {
            listener.exitEnumValue(this);
        }
    };
    // @Override
    EnumValueContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumValue) {
            return visitor.visitEnumValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumValueContext = EnumValueContext;
var VariableDeclarationContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationContext, _super);
    function VariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    VariableDeclarationContext.prototype.variableName = function () {
        return this.tryGetRuleContext(0, VariableNameContext);
    };
    VariableDeclarationContext.prototype.variableListRest = function () {
        return this.tryGetRuleContext(0, VariableListRestContext);
    };
    VariableDeclarationContext.prototype.signalDeclaration = function () {
        return this.tryGetRuleContext(0, SignalDeclarationContext);
    };
    VariableDeclarationContext.prototype.DECL = function () { return this.tryGetToken(krlParser.DECL, 0); };
    Object.defineProperty(VariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_variableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationContext = VariableDeclarationContext;
var SignalDeclarationContext = /** @class */ (function (_super) {
    __extends(SignalDeclarationContext, _super);
    function SignalDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SignalDeclarationContext.prototype.SIGNAL = function () { return this.getToken(krlParser.SIGNAL, 0); };
    SignalDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(krlParser.IDENTIFIER, 0); };
    SignalDeclarationContext.prototype.primary = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PrimaryContext);
        }
        else {
            return this.getRuleContext(i, PrimaryContext);
        }
    };
    SignalDeclarationContext.prototype.TO = function () { return this.tryGetToken(krlParser.TO, 0); };
    Object.defineProperty(SignalDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_signalDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SignalDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterSignalDeclaration) {
            listener.enterSignalDeclaration(this);
        }
    };
    // @Override
    SignalDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitSignalDeclaration) {
            listener.exitSignalDeclaration(this);
        }
    };
    // @Override
    SignalDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitSignalDeclaration) {
            return visitor.visitSignalDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SignalDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SignalDeclarationContext = SignalDeclarationContext;
var VariableDeclarationInDataListContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationInDataListContext, _super);
    function VariableDeclarationInDataListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationInDataListContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    VariableDeclarationInDataListContext.prototype.variableName = function () {
        return this.tryGetRuleContext(0, VariableNameContext);
    };
    VariableDeclarationInDataListContext.prototype.signalDeclaration = function () {
        return this.tryGetRuleContext(0, SignalDeclarationContext);
    };
    VariableDeclarationInDataListContext.prototype.DECL = function () { return this.tryGetToken(krlParser.DECL, 0); };
    VariableDeclarationInDataListContext.prototype.GLOBAL = function () { return this.tryGetToken(krlParser.GLOBAL, 0); };
    VariableDeclarationInDataListContext.prototype.CONST = function () { return this.tryGetToken(krlParser.CONST, 0); };
    VariableDeclarationInDataListContext.prototype.variableListRest = function () {
        return this.tryGetRuleContext(0, VariableListRestContext);
    };
    VariableDeclarationInDataListContext.prototype.variableInitialisation = function () {
        return this.tryGetRuleContext(0, VariableInitialisationContext);
    };
    Object.defineProperty(VariableDeclarationInDataListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_variableDeclarationInDataList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationInDataListContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclarationInDataList) {
            listener.enterVariableDeclarationInDataList(this);
        }
    };
    // @Override
    VariableDeclarationInDataListContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclarationInDataList) {
            listener.exitVariableDeclarationInDataList(this);
        }
    };
    // @Override
    VariableDeclarationInDataListContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclarationInDataList) {
            return visitor.visitVariableDeclarationInDataList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationInDataListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationInDataListContext = VariableDeclarationInDataListContext;
var VariableListRestContext = /** @class */ (function (_super) {
    __extends(VariableListRestContext, _super);
    function VariableListRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableListRestContext.prototype.variableName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableNameContext);
        }
        else {
            return this.getRuleContext(i, VariableNameContext);
        }
    };
    Object.defineProperty(VariableListRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_variableListRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableListRestContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableListRest) {
            listener.enterVariableListRest(this);
        }
    };
    // @Override
    VariableListRestContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableListRest) {
            listener.exitVariableListRest(this);
        }
    };
    // @Override
    VariableListRestContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableListRest) {
            return visitor.visitVariableListRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableListRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableListRestContext = VariableListRestContext;
var VariableInitialisationContext = /** @class */ (function (_super) {
    __extends(VariableInitialisationContext, _super);
    function VariableInitialisationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableInitialisationContext.prototype.unaryPlusMinuxExpression = function () {
        return this.getRuleContext(0, UnaryPlusMinuxExpressionContext);
    };
    Object.defineProperty(VariableInitialisationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_variableInitialisation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableInitialisationContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableInitialisation) {
            listener.enterVariableInitialisation(this);
        }
    };
    // @Override
    VariableInitialisationContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableInitialisation) {
            listener.exitVariableInitialisation(this);
        }
    };
    // @Override
    VariableInitialisationContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableInitialisation) {
            return visitor.visitVariableInitialisation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableInitialisationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableInitialisationContext = VariableInitialisationContext;
var StructLiteralContext = /** @class */ (function (_super) {
    __extends(StructLiteralContext, _super);
    function StructLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructLiteralContext.prototype.structElementList = function () {
        return this.getRuleContext(0, StructElementListContext);
    };
    StructLiteralContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    Object.defineProperty(StructLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_structLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterStructLiteral) {
            listener.enterStructLiteral(this);
        }
    };
    // @Override
    StructLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitStructLiteral) {
            listener.exitStructLiteral(this);
        }
    };
    // @Override
    StructLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitStructLiteral) {
            return visitor.visitStructLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructLiteralContext = StructLiteralContext;
var StructElementListContext = /** @class */ (function (_super) {
    __extends(StructElementListContext, _super);
    function StructElementListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructElementListContext.prototype.structElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StructElementContext);
        }
        else {
            return this.getRuleContext(i, StructElementContext);
        }
    };
    Object.defineProperty(StructElementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_structElementList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructElementListContext.prototype.enterRule = function (listener) {
        if (listener.enterStructElementList) {
            listener.enterStructElementList(this);
        }
    };
    // @Override
    StructElementListContext.prototype.exitRule = function (listener) {
        if (listener.exitStructElementList) {
            listener.exitStructElementList(this);
        }
    };
    // @Override
    StructElementListContext.prototype.accept = function (visitor) {
        if (visitor.visitStructElementList) {
            return visitor.visitStructElementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructElementListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructElementListContext = StructElementListContext;
var StructElementContext = /** @class */ (function (_super) {
    __extends(StructElementContext, _super);
    function StructElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructElementContext.prototype.variableName = function () {
        return this.getRuleContext(0, VariableNameContext);
    };
    StructElementContext.prototype.unaryPlusMinuxExpression = function () {
        return this.getRuleContext(0, UnaryPlusMinuxExpressionContext);
    };
    Object.defineProperty(StructElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_structElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructElementContext.prototype.enterRule = function (listener) {
        if (listener.enterStructElement) {
            listener.enterStructElement(this);
        }
    };
    // @Override
    StructElementContext.prototype.exitRule = function (listener) {
        if (listener.exitStructElement) {
            listener.exitStructElement(this);
        }
    };
    // @Override
    StructElementContext.prototype.accept = function (visitor) {
        if (visitor.visitStructElement) {
            return visitor.visitStructElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructElementContext = StructElementContext;
var FormalParametersContext = /** @class */ (function (_super) {
    __extends(FormalParametersContext, _super);
    function FormalParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParametersContext.prototype.parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }
        else {
            return this.getRuleContext(i, ParameterContext);
        }
    };
    Object.defineProperty(FormalParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_formalParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameters) {
            listener.enterFormalParameters(this);
        }
    };
    // @Override
    FormalParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameters) {
            listener.exitFormalParameters(this);
        }
    };
    // @Override
    FormalParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameters) {
            return visitor.visitFormalParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParametersContext = FormalParametersContext;
var ParameterContext = /** @class */ (function (_super) {
    __extends(ParameterContext, _super);
    function ParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterContext.prototype.variableName = function () {
        return this.getRuleContext(0, VariableNameContext);
    };
    ParameterContext.prototype.parameterCallType = function () {
        return this.tryGetRuleContext(0, ParameterCallTypeContext);
    };
    Object.defineProperty(ParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterParameter) {
            listener.enterParameter(this);
        }
    };
    // @Override
    ParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitParameter) {
            listener.exitParameter(this);
        }
    };
    // @Override
    ParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterContext = ParameterContext;
var RoutineBodyContext = /** @class */ (function (_super) {
    __extends(RoutineBodyContext, _super);
    function RoutineBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RoutineBodyContext.prototype.routineDataSection = function () {
        return this.getRuleContext(0, RoutineDataSectionContext);
    };
    RoutineBodyContext.prototype.routineImplementationSection = function () {
        return this.getRuleContext(0, RoutineImplementationSectionContext);
    };
    Object.defineProperty(RoutineBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_routineBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RoutineBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterRoutineBody) {
            listener.enterRoutineBody(this);
        }
    };
    // @Override
    RoutineBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitRoutineBody) {
            listener.exitRoutineBody(this);
        }
    };
    // @Override
    RoutineBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitRoutineBody) {
            return visitor.visitRoutineBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RoutineBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RoutineBodyContext = RoutineBodyContext;
var RoutineDataSectionContext = /** @class */ (function (_super) {
    __extends(RoutineDataSectionContext, _super);
    function RoutineDataSectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RoutineDataSectionContext.prototype.forwardDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ForwardDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ForwardDeclarationContext);
        }
    };
    RoutineDataSectionContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.NEWLINE);
        }
        else {
            return this.getToken(krlParser.NEWLINE, i);
        }
    };
    RoutineDataSectionContext.prototype.variableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    };
    RoutineDataSectionContext.prototype.importStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportStatementContext);
        }
        else {
            return this.getRuleContext(i, ImportStatementContext);
        }
    };
    Object.defineProperty(RoutineDataSectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_routineDataSection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RoutineDataSectionContext.prototype.enterRule = function (listener) {
        if (listener.enterRoutineDataSection) {
            listener.enterRoutineDataSection(this);
        }
    };
    // @Override
    RoutineDataSectionContext.prototype.exitRule = function (listener) {
        if (listener.exitRoutineDataSection) {
            listener.exitRoutineDataSection(this);
        }
    };
    // @Override
    RoutineDataSectionContext.prototype.accept = function (visitor) {
        if (visitor.visitRoutineDataSection) {
            return visitor.visitRoutineDataSection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RoutineDataSectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RoutineDataSectionContext = RoutineDataSectionContext;
var ForwardDeclarationContext = /** @class */ (function (_super) {
    __extends(ForwardDeclarationContext, _super);
    function ForwardDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForwardDeclarationContext.prototype.EXT = function () { return this.tryGetToken(krlParser.EXT, 0); };
    ForwardDeclarationContext.prototype.procedureName = function () {
        return this.tryGetRuleContext(0, ProcedureNameContext);
    };
    ForwardDeclarationContext.prototype.formalParametersWithType = function () {
        return this.getRuleContext(0, FormalParametersWithTypeContext);
    };
    ForwardDeclarationContext.prototype.EXTFCT = function () { return this.tryGetToken(krlParser.EXTFCT, 0); };
    ForwardDeclarationContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    ForwardDeclarationContext.prototype.functionName = function () {
        return this.tryGetRuleContext(0, FunctionNameContext);
    };
    Object.defineProperty(ForwardDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_forwardDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForwardDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterForwardDeclaration) {
            listener.enterForwardDeclaration(this);
        }
    };
    // @Override
    ForwardDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitForwardDeclaration) {
            listener.exitForwardDeclaration(this);
        }
    };
    // @Override
    ForwardDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitForwardDeclaration) {
            return visitor.visitForwardDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForwardDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForwardDeclarationContext = ForwardDeclarationContext;
var FormalParametersWithTypeContext = /** @class */ (function (_super) {
    __extends(FormalParametersWithTypeContext, _super);
    function FormalParametersWithTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParametersWithTypeContext.prototype.parameterWithType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterWithTypeContext);
        }
        else {
            return this.getRuleContext(i, ParameterWithTypeContext);
        }
    };
    Object.defineProperty(FormalParametersWithTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_formalParametersWithType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParametersWithTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParametersWithType) {
            listener.enterFormalParametersWithType(this);
        }
    };
    // @Override
    FormalParametersWithTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParametersWithType) {
            listener.exitFormalParametersWithType(this);
        }
    };
    // @Override
    FormalParametersWithTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParametersWithType) {
            return visitor.visitFormalParametersWithType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParametersWithTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParametersWithTypeContext = FormalParametersWithTypeContext;
var ParameterWithTypeContext = /** @class */ (function (_super) {
    __extends(ParameterWithTypeContext, _super);
    function ParameterWithTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterWithTypeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    ParameterWithTypeContext.prototype.parameterCallType = function () {
        return this.tryGetRuleContext(0, ParameterCallTypeContext);
    };
    Object.defineProperty(ParameterWithTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_parameterWithType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterWithTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterWithType) {
            listener.enterParameterWithType(this);
        }
    };
    // @Override
    ParameterWithTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterWithType) {
            listener.exitParameterWithType(this);
        }
    };
    // @Override
    ParameterWithTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterWithType) {
            return visitor.visitParameterWithType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterWithTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterWithTypeContext = ParameterWithTypeContext;
var ParameterCallTypeContext = /** @class */ (function (_super) {
    __extends(ParameterCallTypeContext, _super);
    function ParameterCallTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterCallTypeContext.prototype.IDENTIFIER = function () { return this.getToken(krlParser.IDENTIFIER, 0); };
    Object.defineProperty(ParameterCallTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_parameterCallType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterCallTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterCallType) {
            listener.enterParameterCallType(this);
        }
    };
    // @Override
    ParameterCallTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterCallType) {
            listener.exitParameterCallType(this);
        }
    };
    // @Override
    ParameterCallTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterCallType) {
            return visitor.visitParameterCallType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterCallTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterCallTypeContext = ParameterCallTypeContext;
var ImportStatementContext = /** @class */ (function (_super) {
    __extends(ImportStatementContext, _super);
    function ImportStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportStatementContext.prototype.IMPORT = function () { return this.getToken(krlParser.IMPORT, 0); };
    ImportStatementContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    ImportStatementContext.prototype.variableName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableNameContext);
        }
        else {
            return this.getRuleContext(i, VariableNameContext);
        }
    };
    ImportStatementContext.prototype.IS = function () { return this.getToken(krlParser.IS, 0); };
    ImportStatementContext.prototype.moduleName = function () {
        return this.getRuleContext(0, ModuleNameContext);
    };
    Object.defineProperty(ImportStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_importStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterImportStatement) {
            listener.enterImportStatement(this);
        }
    };
    // @Override
    ImportStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitImportStatement) {
            listener.exitImportStatement(this);
        }
    };
    // @Override
    ImportStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitImportStatement) {
            return visitor.visitImportStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportStatementContext = ImportStatementContext;
var VariableNameContext = /** @class */ (function (_super) {
    __extends(VariableNameContext, _super);
    function VariableNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableNameContext.prototype.IDENTIFIER = function () { return this.getToken(krlParser.IDENTIFIER, 0); };
    VariableNameContext.prototype.arrayVariableSuffix = function () {
        return this.tryGetRuleContext(0, ArrayVariableSuffixContext);
    };
    Object.defineProperty(VariableNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_variableName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableNameContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableName) {
            listener.enterVariableName(this);
        }
    };
    // @Override
    VariableNameContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableName) {
            listener.exitVariableName(this);
        }
    };
    // @Override
    VariableNameContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableName) {
            return visitor.visitVariableName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableNameContext = VariableNameContext;
var ArrayVariableSuffixContext = /** @class */ (function (_super) {
    __extends(ArrayVariableSuffixContext, _super);
    function ArrayVariableSuffixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayVariableSuffixContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ArrayVariableSuffixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_arrayVariableSuffix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayVariableSuffixContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayVariableSuffix) {
            listener.enterArrayVariableSuffix(this);
        }
    };
    // @Override
    ArrayVariableSuffixContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayVariableSuffix) {
            listener.exitArrayVariableSuffix(this);
        }
    };
    // @Override
    ArrayVariableSuffixContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayVariableSuffix) {
            return visitor.visitArrayVariableSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayVariableSuffixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayVariableSuffixContext = ArrayVariableSuffixContext;
var RoutineImplementationSectionContext = /** @class */ (function (_super) {
    __extends(RoutineImplementationSectionContext, _super);
    function RoutineImplementationSectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RoutineImplementationSectionContext.prototype.statementList = function () {
        return this.getRuleContext(0, StatementListContext);
    };
    Object.defineProperty(RoutineImplementationSectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_routineImplementationSection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RoutineImplementationSectionContext.prototype.enterRule = function (listener) {
        if (listener.enterRoutineImplementationSection) {
            listener.enterRoutineImplementationSection(this);
        }
    };
    // @Override
    RoutineImplementationSectionContext.prototype.exitRule = function (listener) {
        if (listener.exitRoutineImplementationSection) {
            listener.exitRoutineImplementationSection(this);
        }
    };
    // @Override
    RoutineImplementationSectionContext.prototype.accept = function (visitor) {
        if (visitor.visitRoutineImplementationSection) {
            return visitor.visitRoutineImplementationSection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RoutineImplementationSectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RoutineImplementationSectionContext = RoutineImplementationSectionContext;
var StatementListContext = /** @class */ (function (_super) {
    __extends(StatementListContext, _super);
    function StatementListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementListContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(StatementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_statementList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementListContext.prototype.enterRule = function (listener) {
        if (listener.enterStatementList) {
            listener.enterStatementList(this);
        }
    };
    // @Override
    StatementListContext.prototype.exitRule = function (listener) {
        if (listener.exitStatementList) {
            listener.exitStatementList(this);
        }
    };
    // @Override
    StatementListContext.prototype.accept = function (visitor) {
        if (visitor.visitStatementList) {
            return visitor.visitStatementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementListContext = StatementListContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.CONTINUE = function () { return this.tryGetToken(krlParser.CONTINUE, 0); };
    StatementContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.NEWLINE);
        }
        else {
            return this.getToken(krlParser.NEWLINE, i);
        }
    };
    StatementContext.prototype.EXIT = function () { return this.tryGetToken(krlParser.EXIT, 0); };
    StatementContext.prototype.FOR = function () { return this.tryGetToken(krlParser.FOR, 0); };
    StatementContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.IDENTIFIER);
        }
        else {
            return this.getToken(krlParser.IDENTIFIER, i);
        }
    };
    StatementContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    StatementContext.prototype.TO = function () { return this.tryGetToken(krlParser.TO, 0); };
    StatementContext.prototype.statementList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementListContext);
        }
        else {
            return this.getRuleContext(i, StatementListContext);
        }
    };
    StatementContext.prototype.ENDFOR = function () { return this.tryGetToken(krlParser.ENDFOR, 0); };
    StatementContext.prototype.GOTO = function () { return this.tryGetToken(krlParser.GOTO, 0); };
    StatementContext.prototype.HALT = function () { return this.tryGetToken(krlParser.HALT, 0); };
    StatementContext.prototype.IF = function () { return this.tryGetToken(krlParser.IF, 0); };
    StatementContext.prototype.THEN = function () { return this.tryGetToken(krlParser.THEN, 0); };
    StatementContext.prototype.ENDIF = function () { return this.tryGetToken(krlParser.ENDIF, 0); };
    StatementContext.prototype.ELSE = function () { return this.tryGetToken(krlParser.ELSE, 0); };
    StatementContext.prototype.LOOP = function () { return this.tryGetToken(krlParser.LOOP, 0); };
    StatementContext.prototype.ENDLOOP = function () { return this.tryGetToken(krlParser.ENDLOOP, 0); };
    StatementContext.prototype.REPEAT = function () { return this.tryGetToken(krlParser.REPEAT, 0); };
    StatementContext.prototype.UNTIL = function () { return this.tryGetToken(krlParser.UNTIL, 0); };
    StatementContext.prototype.SWITCH = function () { return this.tryGetToken(krlParser.SWITCH, 0); };
    StatementContext.prototype.switchBlockStatementGroups = function () {
        return this.tryGetRuleContext(0, SwitchBlockStatementGroupsContext);
    };
    StatementContext.prototype.ENDSWITCH = function () { return this.tryGetToken(krlParser.ENDSWITCH, 0); };
    StatementContext.prototype.WAIT = function () { return this.tryGetToken(krlParser.WAIT, 0); };
    StatementContext.prototype.SEC = function () { return this.tryGetToken(krlParser.SEC, 0); };
    StatementContext.prototype.WHILE = function () { return this.tryGetToken(krlParser.WHILE, 0); };
    StatementContext.prototype.ENDWHILE = function () { return this.tryGetToken(krlParser.ENDWHILE, 0); };
    StatementContext.prototype.RETURN = function () { return this.tryGetToken(krlParser.RETURN, 0); };
    StatementContext.prototype.assignmentExpression = function () {
        return this.tryGetRuleContext(0, AssignmentExpressionContext);
    };
    StatementContext.prototype.BRAKE = function () { return this.tryGetToken(krlParser.BRAKE, 0); };
    StatementContext.prototype.INTERRUPT = function () { return this.tryGetToken(krlParser.INTERRUPT, 0); };
    StatementContext.prototype.DECL = function () { return this.tryGetToken(krlParser.DECL, 0); };
    StatementContext.prototype.primary = function () {
        return this.tryGetRuleContext(0, PrimaryContext);
    };
    StatementContext.prototype.WHEN = function () { return this.tryGetToken(krlParser.WHEN, 0); };
    StatementContext.prototype.DO = function () { return this.tryGetToken(krlParser.DO, 0); };
    StatementContext.prototype.GLOBAL = function () { return this.tryGetToken(krlParser.GLOBAL, 0); };
    StatementContext.prototype.geometricExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GeometricExpressionContext);
        }
        else {
            return this.getRuleContext(i, GeometricExpressionContext);
        }
    };
    StatementContext.prototype.PTP = function () { return this.tryGetToken(krlParser.PTP, 0); };
    StatementContext.prototype.PTP_REL = function () { return this.tryGetToken(krlParser.PTP_REL, 0); };
    StatementContext.prototype.C_PTP = function () { return this.tryGetToken(krlParser.C_PTP, 0); };
    StatementContext.prototype.C_DIS = function () { return this.tryGetToken(krlParser.C_DIS, 0); };
    StatementContext.prototype.C_ORI = function () { return this.tryGetToken(krlParser.C_ORI, 0); };
    StatementContext.prototype.C_VEL = function () { return this.tryGetToken(krlParser.C_VEL, 0); };
    StatementContext.prototype.LIN = function () { return this.tryGetToken(krlParser.LIN, 0); };
    StatementContext.prototype.LIN_REL = function () { return this.tryGetToken(krlParser.LIN_REL, 0); };
    StatementContext.prototype.enumElement = function () {
        return this.tryGetRuleContext(0, EnumElementContext);
    };
    StatementContext.prototype.CIRC = function () { return this.tryGetToken(krlParser.CIRC, 0); };
    StatementContext.prototype.CIRC_REL = function () { return this.tryGetToken(krlParser.CIRC_REL, 0); };
    StatementContext.prototype.TRIGGER = function () { return this.tryGetToken(krlParser.TRIGGER, 0); };
    StatementContext.prototype.DELAY = function () { return this.tryGetToken(krlParser.DELAY, 0); };
    StatementContext.prototype.PRIO = function () { return this.tryGetToken(krlParser.PRIO, 0); };
    StatementContext.prototype.analogInputStatement = function () {
        return this.tryGetRuleContext(0, AnalogInputStatementContext);
    };
    StatementContext.prototype.analogOutputStatement = function () {
        return this.tryGetRuleContext(0, AnalogOutputStatementContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementContext.prototype.enterRule = function (listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.exitRule = function (listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.accept = function (visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementContext = StatementContext;
var AnalogOutputStatementContext = /** @class */ (function (_super) {
    __extends(AnalogOutputStatementContext, _super);
    function AnalogOutputStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnalogOutputStatementContext.prototype.ANOUT = function () { return this.getToken(krlParser.ANOUT, 0); };
    AnalogOutputStatementContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.IDENTIFIER);
        }
        else {
            return this.getToken(krlParser.IDENTIFIER, i);
        }
    };
    AnalogOutputStatementContext.prototype.assignmentExpression = function () {
        return this.tryGetRuleContext(0, AssignmentExpressionContext);
    };
    AnalogOutputStatementContext.prototype.literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }
        else {
            return this.getRuleContext(i, LiteralContext);
        }
    };
    Object.defineProperty(AnalogOutputStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_analogOutputStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnalogOutputStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterAnalogOutputStatement) {
            listener.enterAnalogOutputStatement(this);
        }
    };
    // @Override
    AnalogOutputStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitAnalogOutputStatement) {
            listener.exitAnalogOutputStatement(this);
        }
    };
    // @Override
    AnalogOutputStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitAnalogOutputStatement) {
            return visitor.visitAnalogOutputStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnalogOutputStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnalogOutputStatementContext = AnalogOutputStatementContext;
var AnalogInputStatementContext = /** @class */ (function (_super) {
    __extends(AnalogInputStatementContext, _super);
    function AnalogInputStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnalogInputStatementContext.prototype.ANIN = function () { return this.getToken(krlParser.ANIN, 0); };
    AnalogInputStatementContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.IDENTIFIER);
        }
        else {
            return this.getToken(krlParser.IDENTIFIER, i);
        }
    };
    AnalogInputStatementContext.prototype.assignmentExpression = function () {
        return this.tryGetRuleContext(0, AssignmentExpressionContext);
    };
    Object.defineProperty(AnalogInputStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_analogInputStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnalogInputStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterAnalogInputStatement) {
            listener.enterAnalogInputStatement(this);
        }
    };
    // @Override
    AnalogInputStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitAnalogInputStatement) {
            listener.exitAnalogInputStatement(this);
        }
    };
    // @Override
    AnalogInputStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitAnalogInputStatement) {
            return visitor.visitAnalogInputStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnalogInputStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnalogInputStatementContext = AnalogInputStatementContext;
var SwitchBlockStatementGroupsContext = /** @class */ (function (_super) {
    __extends(SwitchBlockStatementGroupsContext, _super);
    function SwitchBlockStatementGroupsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SwitchBlockStatementGroupsContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.NEWLINE);
        }
        else {
            return this.getToken(krlParser.NEWLINE, i);
        }
    };
    SwitchBlockStatementGroupsContext.prototype.caseLabel = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseLabelContext);
        }
        else {
            return this.getRuleContext(i, CaseLabelContext);
        }
    };
    SwitchBlockStatementGroupsContext.prototype.statementList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementListContext);
        }
        else {
            return this.getRuleContext(i, StatementListContext);
        }
    };
    SwitchBlockStatementGroupsContext.prototype.defaultLabel = function () {
        return this.tryGetRuleContext(0, DefaultLabelContext);
    };
    Object.defineProperty(SwitchBlockStatementGroupsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_switchBlockStatementGroups; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SwitchBlockStatementGroupsContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitchBlockStatementGroups) {
            listener.enterSwitchBlockStatementGroups(this);
        }
    };
    // @Override
    SwitchBlockStatementGroupsContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitchBlockStatementGroups) {
            listener.exitSwitchBlockStatementGroups(this);
        }
    };
    // @Override
    SwitchBlockStatementGroupsContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitchBlockStatementGroups) {
            return visitor.visitSwitchBlockStatementGroups(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SwitchBlockStatementGroupsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SwitchBlockStatementGroupsContext = SwitchBlockStatementGroupsContext;
var CaseLabelContext = /** @class */ (function (_super) {
    __extends(CaseLabelContext, _super);
    function CaseLabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseLabelContext.prototype.CASE = function () { return this.getToken(krlParser.CASE, 0); };
    CaseLabelContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    CaseLabelContext.prototype.NEWLINE = function () { return this.getToken(krlParser.NEWLINE, 0); };
    Object.defineProperty(CaseLabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_caseLabel; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseLabelContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseLabel) {
            listener.enterCaseLabel(this);
        }
    };
    // @Override
    CaseLabelContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseLabel) {
            listener.exitCaseLabel(this);
        }
    };
    // @Override
    CaseLabelContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseLabel) {
            return visitor.visitCaseLabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseLabelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseLabelContext = CaseLabelContext;
var DefaultLabelContext = /** @class */ (function (_super) {
    __extends(DefaultLabelContext, _super);
    function DefaultLabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultLabelContext.prototype.DEFAULT = function () { return this.getToken(krlParser.DEFAULT, 0); };
    DefaultLabelContext.prototype.NEWLINE = function () { return this.getToken(krlParser.NEWLINE, 0); };
    Object.defineProperty(DefaultLabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_defaultLabel; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultLabelContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultLabel) {
            listener.enterDefaultLabel(this);
        }
    };
    // @Override
    DefaultLabelContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultLabel) {
            listener.exitDefaultLabel(this);
        }
    };
    // @Override
    DefaultLabelContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultLabel) {
            return visitor.visitDefaultLabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultLabelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultLabelContext = DefaultLabelContext;
var ExpressionListContext = /** @class */ (function (_super) {
    __extends(ExpressionListContext, _super);
    function ExpressionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionListContext.prototype.assignmentExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentExpressionContext);
        }
        else {
            return this.getRuleContext(i, AssignmentExpressionContext);
        }
    };
    Object.defineProperty(ExpressionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_expressionList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionListContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionList) {
            listener.enterExpressionList(this);
        }
    };
    // @Override
    ExpressionListContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionList) {
            listener.exitExpressionList(this);
        }
    };
    // @Override
    ExpressionListContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionListContext = ExpressionListContext;
var AssignmentExpressionContext = /** @class */ (function (_super) {
    __extends(AssignmentExpressionContext, _super);
    function AssignmentExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(AssignmentExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_assignmentExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentExpression) {
            listener.enterAssignmentExpression(this);
        }
    };
    // @Override
    AssignmentExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentExpression) {
            listener.exitAssignmentExpression(this);
        }
    };
    // @Override
    AssignmentExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentExpression) {
            return visitor.visitAssignmentExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentExpressionContext = AssignmentExpressionContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.conditionalOrExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConditionalOrExpressionContext);
        }
        else {
            return this.getRuleContext(i, ConditionalOrExpressionContext);
        }
    };
    ExpressionContext.prototype.relationalOp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationalOpContext);
        }
        else {
            return this.getRuleContext(i, RelationalOpContext);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    };
    // @Override
    ExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    };
    // @Override
    ExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var RelationalOpContext = /** @class */ (function (_super) {
    __extends(RelationalOpContext, _super);
    function RelationalOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(RelationalOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_relationalOp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationalOpContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationalOp) {
            listener.enterRelationalOp(this);
        }
    };
    // @Override
    RelationalOpContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationalOp) {
            listener.exitRelationalOp(this);
        }
    };
    // @Override
    RelationalOpContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationalOp) {
            return visitor.visitRelationalOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationalOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationalOpContext = RelationalOpContext;
var ConditionalOrExpressionContext = /** @class */ (function (_super) {
    __extends(ConditionalOrExpressionContext, _super);
    function ConditionalOrExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionalOrExpressionContext.prototype.exclusiveOrExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExclusiveOrExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExclusiveOrExpressionContext);
        }
    };
    ConditionalOrExpressionContext.prototype.OR = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.OR);
        }
        else {
            return this.getToken(krlParser.OR, i);
        }
    };
    ConditionalOrExpressionContext.prototype.B_OR = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.B_OR);
        }
        else {
            return this.getToken(krlParser.B_OR, i);
        }
    };
    Object.defineProperty(ConditionalOrExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_conditionalOrExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionalOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConditionalOrExpression) {
            listener.enterConditionalOrExpression(this);
        }
    };
    // @Override
    ConditionalOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConditionalOrExpression) {
            listener.exitConditionalOrExpression(this);
        }
    };
    // @Override
    ConditionalOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConditionalOrExpression) {
            return visitor.visitConditionalOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionalOrExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionalOrExpressionContext = ConditionalOrExpressionContext;
var ExclusiveOrExpressionContext = /** @class */ (function (_super) {
    __extends(ExclusiveOrExpressionContext, _super);
    function ExclusiveOrExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExclusiveOrExpressionContext.prototype.conditionalAndExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConditionalAndExpressionContext);
        }
        else {
            return this.getRuleContext(i, ConditionalAndExpressionContext);
        }
    };
    ExclusiveOrExpressionContext.prototype.EXOR = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.EXOR);
        }
        else {
            return this.getToken(krlParser.EXOR, i);
        }
    };
    ExclusiveOrExpressionContext.prototype.B_EXOR = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.B_EXOR);
        }
        else {
            return this.getToken(krlParser.B_EXOR, i);
        }
    };
    Object.defineProperty(ExclusiveOrExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_exclusiveOrExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExclusiveOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterExclusiveOrExpression) {
            listener.enterExclusiveOrExpression(this);
        }
    };
    // @Override
    ExclusiveOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitExclusiveOrExpression) {
            listener.exitExclusiveOrExpression(this);
        }
    };
    // @Override
    ExclusiveOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitExclusiveOrExpression) {
            return visitor.visitExclusiveOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExclusiveOrExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExclusiveOrExpressionContext = ExclusiveOrExpressionContext;
var ConditionalAndExpressionContext = /** @class */ (function (_super) {
    __extends(ConditionalAndExpressionContext, _super);
    function ConditionalAndExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionalAndExpressionContext.prototype.additiveExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveExpressionContext);
        }
        else {
            return this.getRuleContext(i, AdditiveExpressionContext);
        }
    };
    ConditionalAndExpressionContext.prototype.AND = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.AND);
        }
        else {
            return this.getToken(krlParser.AND, i);
        }
    };
    ConditionalAndExpressionContext.prototype.B_AND = function (i) {
        if (i === undefined) {
            return this.getTokens(krlParser.B_AND);
        }
        else {
            return this.getToken(krlParser.B_AND, i);
        }
    };
    Object.defineProperty(ConditionalAndExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_conditionalAndExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionalAndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConditionalAndExpression) {
            listener.enterConditionalAndExpression(this);
        }
    };
    // @Override
    ConditionalAndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConditionalAndExpression) {
            listener.exitConditionalAndExpression(this);
        }
    };
    // @Override
    ConditionalAndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConditionalAndExpression) {
            return visitor.visitConditionalAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionalAndExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionalAndExpressionContext = ConditionalAndExpressionContext;
var AdditiveExpressionContext = /** @class */ (function (_super) {
    __extends(AdditiveExpressionContext, _super);
    function AdditiveExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditiveExpressionContext.prototype.multiplicativeExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiplicativeExpressionContext);
        }
    };
    Object.defineProperty(AdditiveExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_additiveExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdditiveExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditiveExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditiveExpressionContext = AdditiveExpressionContext;
var MultiplicativeExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplicativeExpressionContext, _super);
    function MultiplicativeExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplicativeExpressionContext.prototype.geometricExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GeometricExpressionContext);
        }
        else {
            return this.getRuleContext(i, GeometricExpressionContext);
        }
    };
    Object.defineProperty(MultiplicativeExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_multiplicativeExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplicativeExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicativeExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
var GeometricExpressionContext = /** @class */ (function (_super) {
    __extends(GeometricExpressionContext, _super);
    function GeometricExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GeometricExpressionContext.prototype.unaryNotExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnaryNotExpressionContext);
        }
        else {
            return this.getRuleContext(i, UnaryNotExpressionContext);
        }
    };
    Object.defineProperty(GeometricExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_geometricExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GeometricExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterGeometricExpression) {
            listener.enterGeometricExpression(this);
        }
    };
    // @Override
    GeometricExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitGeometricExpression) {
            listener.exitGeometricExpression(this);
        }
    };
    // @Override
    GeometricExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitGeometricExpression) {
            return visitor.visitGeometricExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeometricExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GeometricExpressionContext = GeometricExpressionContext;
var UnaryNotExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryNotExpressionContext, _super);
    function UnaryNotExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryNotExpressionContext.prototype.NOT = function () { return this.tryGetToken(krlParser.NOT, 0); };
    UnaryNotExpressionContext.prototype.unaryNotExpression = function () {
        return this.tryGetRuleContext(0, UnaryNotExpressionContext);
    };
    UnaryNotExpressionContext.prototype.B_NOT = function () { return this.tryGetToken(krlParser.B_NOT, 0); };
    UnaryNotExpressionContext.prototype.unaryPlusMinuxExpression = function () {
        return this.tryGetRuleContext(0, UnaryPlusMinuxExpressionContext);
    };
    Object.defineProperty(UnaryNotExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_unaryNotExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnaryNotExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryNotExpression) {
            listener.enterUnaryNotExpression(this);
        }
    };
    // @Override
    UnaryNotExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryNotExpression) {
            listener.exitUnaryNotExpression(this);
        }
    };
    // @Override
    UnaryNotExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryNotExpression) {
            return visitor.visitUnaryNotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryNotExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryNotExpressionContext = UnaryNotExpressionContext;
var UnaryPlusMinuxExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryPlusMinuxExpressionContext, _super);
    function UnaryPlusMinuxExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryPlusMinuxExpressionContext.prototype.unaryPlusMinuxExpression = function () {
        return this.tryGetRuleContext(0, UnaryPlusMinuxExpressionContext);
    };
    UnaryPlusMinuxExpressionContext.prototype.primary = function () {
        return this.tryGetRuleContext(0, PrimaryContext);
    };
    Object.defineProperty(UnaryPlusMinuxExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_unaryPlusMinuxExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnaryPlusMinuxExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryPlusMinuxExpression) {
            listener.enterUnaryPlusMinuxExpression(this);
        }
    };
    // @Override
    UnaryPlusMinuxExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryPlusMinuxExpression) {
            listener.exitUnaryPlusMinuxExpression(this);
        }
    };
    // @Override
    UnaryPlusMinuxExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryPlusMinuxExpression) {
            return visitor.visitUnaryPlusMinuxExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryPlusMinuxExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryPlusMinuxExpressionContext = UnaryPlusMinuxExpressionContext;
var PrimaryContext = /** @class */ (function (_super) {
    __extends(PrimaryContext, _super);
    function PrimaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryContext.prototype.parExpression = function () {
        return this.tryGetRuleContext(0, ParExpressionContext);
    };
    PrimaryContext.prototype.variableName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableNameContext);
        }
        else {
            return this.getRuleContext(i, VariableNameContext);
        }
    };
    PrimaryContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    PrimaryContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    Object.defineProperty(PrimaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_primary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimary) {
            listener.enterPrimary(this);
        }
    };
    // @Override
    PrimaryContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimary) {
            listener.exitPrimary(this);
        }
    };
    // @Override
    PrimaryContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryContext = PrimaryContext;
var ParExpressionContext = /** @class */ (function (_super) {
    __extends(ParExpressionContext, _super);
    function ParExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParExpressionContext.prototype.assignmentExpression = function () {
        return this.getRuleContext(0, AssignmentExpressionContext);
    };
    Object.defineProperty(ParExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_parExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterParExpression) {
            listener.enterParExpression(this);
        }
    };
    // @Override
    ParExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitParExpression) {
            listener.exitParExpression(this);
        }
    };
    // @Override
    ParExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitParExpression) {
            return visitor.visitParExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParExpressionContext = ParExpressionContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.primitiveType = function () {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    };
    TypeContext.prototype.INTLITERAL = function () { return this.tryGetToken(krlParser.INTLITERAL, 0); };
    TypeContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeContext.prototype.enterRule = function (listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    };
    // @Override
    TypeContext.prototype.exitRule = function (listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    };
    // @Override
    TypeContext.prototype.accept = function (visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeContext = TypeContext;
var TypeNameContext = /** @class */ (function (_super) {
    __extends(TypeNameContext, _super);
    function TypeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeNameContext.prototype.IDENTIFIER = function () { return this.getToken(krlParser.IDENTIFIER, 0); };
    Object.defineProperty(TypeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_typeName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeNameContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeName) {
            listener.enterTypeName(this);
        }
    };
    // @Override
    TypeNameContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeName) {
            listener.exitTypeName(this);
        }
    };
    // @Override
    TypeNameContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeName) {
            return visitor.visitTypeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeNameContext = TypeNameContext;
var PrimitiveTypeContext = /** @class */ (function (_super) {
    __extends(PrimitiveTypeContext, _super);
    function PrimitiveTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimitiveTypeContext.prototype.BOOL = function () { return this.tryGetToken(krlParser.BOOL, 0); };
    PrimitiveTypeContext.prototype.CHAR = function () { return this.tryGetToken(krlParser.CHAR, 0); };
    PrimitiveTypeContext.prototype.INT = function () { return this.tryGetToken(krlParser.INT, 0); };
    PrimitiveTypeContext.prototype.REAL = function () { return this.tryGetToken(krlParser.REAL, 0); };
    Object.defineProperty(PrimitiveTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_primitiveType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimitiveTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimitiveType) {
            listener.enterPrimitiveType(this);
        }
    };
    // @Override
    PrimitiveTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimitiveType) {
            listener.exitPrimitiveType(this);
        }
    };
    // @Override
    PrimitiveTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimitiveType) {
            return visitor.visitPrimitiveType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimitiveTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimitiveTypeContext = PrimitiveTypeContext;
var ArgumentsContext = /** @class */ (function (_super) {
    __extends(ArgumentsContext, _super);
    function ArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentsContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_arguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentsContext = ArgumentsContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.INTLITERAL = function () { return this.tryGetToken(krlParser.INTLITERAL, 0); };
    LiteralContext.prototype.FLOATLITERAL = function () { return this.tryGetToken(krlParser.FLOATLITERAL, 0); };
    LiteralContext.prototype.CHARLITERAL = function () { return this.tryGetToken(krlParser.CHARLITERAL, 0); };
    LiteralContext.prototype.STRINGLITERAL = function () { return this.tryGetToken(krlParser.STRINGLITERAL, 0); };
    LiteralContext.prototype.structLiteral = function () {
        return this.tryGetRuleContext(0, StructLiteralContext);
    };
    LiteralContext.prototype.TRUE = function () { return this.tryGetToken(krlParser.TRUE, 0); };
    LiteralContext.prototype.FALSE = function () { return this.tryGetToken(krlParser.FALSE, 0); };
    LiteralContext.prototype.enumElement = function () {
        return this.tryGetRuleContext(0, EnumElementContext);
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_literal; },
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
var EnumElementContext = /** @class */ (function (_super) {
    __extends(EnumElementContext, _super);
    function EnumElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumElementContext.prototype.IDENTIFIER = function () { return this.getToken(krlParser.IDENTIFIER, 0); };
    Object.defineProperty(EnumElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return krlParser.RULE_enumElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumElementContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumElement) {
            listener.enterEnumElement(this);
        }
    };
    // @Override
    EnumElementContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumElement) {
            listener.exitEnumElement(this);
        }
    };
    // @Override
    EnumElementContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumElement) {
            return visitor.visitEnumElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumElementContext = EnumElementContext;
