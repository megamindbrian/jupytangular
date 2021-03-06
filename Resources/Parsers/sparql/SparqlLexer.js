"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sparql/Sparql.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var Lexer_1 = require("antlr4ts/Lexer");
var LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var SparqlLexer = /** @class */ (function (_super) {
    __extends(SparqlLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function SparqlLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(SparqlLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(SparqlLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return SparqlLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparqlLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "Sparql.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparqlLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return SparqlLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparqlLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return SparqlLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparqlLexer.prototype, "channelNames", {
        // @Override
        get: function () { return SparqlLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparqlLexer.prototype, "modeNames", {
        // @Override
        get: function () { return SparqlLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparqlLexer, "_ATN", {
        get: function () {
            if (!SparqlLexer.__ATN) {
                SparqlLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SparqlLexer._serializedATN));
            }
            return SparqlLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    SparqlLexer.T__0 = 1;
    SparqlLexer.T__1 = 2;
    SparqlLexer.T__2 = 3;
    SparqlLexer.T__3 = 4;
    SparqlLexer.T__4 = 5;
    SparqlLexer.T__5 = 6;
    SparqlLexer.T__6 = 7;
    SparqlLexer.T__7 = 8;
    SparqlLexer.T__8 = 9;
    SparqlLexer.T__9 = 10;
    SparqlLexer.T__10 = 11;
    SparqlLexer.T__11 = 12;
    SparqlLexer.T__12 = 13;
    SparqlLexer.T__13 = 14;
    SparqlLexer.T__14 = 15;
    SparqlLexer.T__15 = 16;
    SparqlLexer.T__16 = 17;
    SparqlLexer.T__17 = 18;
    SparqlLexer.T__18 = 19;
    SparqlLexer.T__19 = 20;
    SparqlLexer.T__20 = 21;
    SparqlLexer.T__21 = 22;
    SparqlLexer.T__22 = 23;
    SparqlLexer.T__23 = 24;
    SparqlLexer.T__24 = 25;
    SparqlLexer.T__25 = 26;
    SparqlLexer.T__26 = 27;
    SparqlLexer.T__27 = 28;
    SparqlLexer.T__28 = 29;
    SparqlLexer.T__29 = 30;
    SparqlLexer.T__30 = 31;
    SparqlLexer.T__31 = 32;
    SparqlLexer.T__32 = 33;
    SparqlLexer.T__33 = 34;
    SparqlLexer.T__34 = 35;
    SparqlLexer.T__35 = 36;
    SparqlLexer.T__36 = 37;
    SparqlLexer.T__37 = 38;
    SparqlLexer.T__38 = 39;
    SparqlLexer.T__39 = 40;
    SparqlLexer.T__40 = 41;
    SparqlLexer.T__41 = 42;
    SparqlLexer.T__42 = 43;
    SparqlLexer.T__43 = 44;
    SparqlLexer.T__44 = 45;
    SparqlLexer.T__45 = 46;
    SparqlLexer.T__46 = 47;
    SparqlLexer.T__47 = 48;
    SparqlLexer.T__48 = 49;
    SparqlLexer.T__49 = 50;
    SparqlLexer.T__50 = 51;
    SparqlLexer.T__51 = 52;
    SparqlLexer.T__52 = 53;
    SparqlLexer.T__53 = 54;
    SparqlLexer.T__54 = 55;
    SparqlLexer.T__55 = 56;
    SparqlLexer.T__56 = 57;
    SparqlLexer.T__57 = 58;
    SparqlLexer.IRI_REF = 59;
    SparqlLexer.PNAME_NS = 60;
    SparqlLexer.PNAME_LN = 61;
    SparqlLexer.BLANK_NODE_LABEL = 62;
    SparqlLexer.VAR1 = 63;
    SparqlLexer.VAR2 = 64;
    SparqlLexer.LANGTAG = 65;
    SparqlLexer.INTEGER = 66;
    SparqlLexer.DECIMAL = 67;
    SparqlLexer.DOUBLE = 68;
    SparqlLexer.INTEGER_POSITIVE = 69;
    SparqlLexer.DECIMAL_POSITIVE = 70;
    SparqlLexer.DOUBLE_POSITIVE = 71;
    SparqlLexer.INTEGER_NEGATIVE = 72;
    SparqlLexer.DECIMAL_NEGATIVE = 73;
    SparqlLexer.DOUBLE_NEGATIVE = 74;
    SparqlLexer.EXPONENT = 75;
    SparqlLexer.STRING_LITERAL1 = 76;
    SparqlLexer.STRING_LITERAL2 = 77;
    SparqlLexer.STRING_LITERAL_LONG1 = 78;
    SparqlLexer.STRING_LITERAL_LONG2 = 79;
    SparqlLexer.ECHAR = 80;
    SparqlLexer.NIL = 81;
    SparqlLexer.ANON = 82;
    SparqlLexer.PN_CHARS_U = 83;
    SparqlLexer.VARNAME = 84;
    SparqlLexer.PN_PREFIX = 85;
    SparqlLexer.PN_LOCAL = 86;
    SparqlLexer.WS = 87;
    // tslint:disable:no-trailing-whitespace
    SparqlLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    SparqlLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    SparqlLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
        "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16",
        "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24",
        "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32",
        "T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40",
        "T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48",
        "T__49", "T__50", "T__51", "T__52", "T__53", "T__54", "T__55", "T__56",
        "T__57", "IRI_REF", "PNAME_NS", "PNAME_LN", "BLANK_NODE_LABEL", "VAR1",
        "VAR2", "LANGTAG", "INTEGER", "DECIMAL", "DOUBLE", "INTEGER_POSITIVE",
        "DECIMAL_POSITIVE", "DOUBLE_POSITIVE", "INTEGER_NEGATIVE", "DECIMAL_NEGATIVE",
        "DOUBLE_NEGATIVE", "EXPONENT", "STRING_LITERAL1", "STRING_LITERAL2", "STRING_LITERAL_LONG1",
        "STRING_LITERAL_LONG2", "ECHAR", "NIL", "ANON", "PN_CHARS_U", "VARNAME",
        "PN_CHARS", "PN_PREFIX", "PN_LOCAL", "PN_CHARS_BASE", "DIGIT", "WS",
    ];
    SparqlLexer._LITERAL_NAMES = [
        undefined, "'BASE'", "'PREFIX'", "'SELECT'", "'DISTINCT'", "'REDUCED'",
        "'*'", "'CONSTRUCT'", "'DESCRIBE'", "'ASK'", "'FROM'", "'NAMED'", "'WHERE'",
        "'ORDER'", "'BY'", "'ASC'", "'DESC'", "'LIMIT'", "'OFFSET'", "'{'", "'.'",
        "'}'", "'OPTIONAL'", "'GRAPH'", "'UNION'", "'FILTER'", "'('", "','", "')'",
        "';'", "'a'", "'['", "']'", "'||'", "'&&'", "'='", "'!='", "'<'", "'>'",
        "'<='", "'>='", "'+'", "'-'", "'/'", "'!'", "'STR'", "'LANG'", "'LANGMATCHES'",
        "'DATATYPE'", "'BOUND'", "'sameTerm'", "'isIRI'", "'isURI'", "'isBLANK'",
        "'isLITERAL'", "'REGEX'", "'^^'", "'true'", "'false'",
    ];
    SparqlLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "IRI_REF", "PNAME_NS", "PNAME_LN", "BLANK_NODE_LABEL",
        "VAR1", "VAR2", "LANGTAG", "INTEGER", "DECIMAL", "DOUBLE", "INTEGER_POSITIVE",
        "DECIMAL_POSITIVE", "DOUBLE_POSITIVE", "INTEGER_NEGATIVE", "DECIMAL_NEGATIVE",
        "DOUBLE_NEGATIVE", "EXPONENT", "STRING_LITERAL1", "STRING_LITERAL2", "STRING_LITERAL_LONG1",
        "STRING_LITERAL_LONG2", "ECHAR", "NIL", "ANON", "PN_CHARS_U", "VARNAME",
        "PN_PREFIX", "PN_LOCAL", "WS",
    ];
    SparqlLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SparqlLexer._LITERAL_NAMES, SparqlLexer._SYMBOLIC_NAMES, []);
    SparqlLexer._serializedATNSegments = 2;
    SparqlLexer._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02Y\u02E1\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
        "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
        "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
        "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
        "\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03" +
        "\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03" +
        "\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
        "\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
        "\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03" +
        "\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"\x03#\x03#\x03" +
        "#\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03)\x03" +
        ")\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03.\x03.\x03" +
        "/\x03/\x03/\x03/\x03/\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
        "0\x030\x030\x031\x031\x031\x031\x031\x031\x031\x031\x031\x032\x032\x03" +
        "2\x032\x032\x032\x033\x033\x033\x033\x033\x033\x033\x033\x033\x034\x03" +
        "4\x034\x034\x034\x034\x035\x035\x035\x035\x035\x035\x036\x036\x036\x03" +
        "6\x036\x036\x036\x036\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
        "7\x038\x038\x038\x038\x038\x038\x039\x039\x039\x03:\x03:\x03:\x03:\x03" +
        ":\x03;\x03;\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x07<\u01D4\n<\f<\x0E<\u01D7" +
        "\v<\x03<\x03<\x03=\x05=\u01DC\n=\x03=\x03=\x03>\x03>\x03>\x03?\x03?\x03" +
        "?\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x03A\x03B\x03B\x06B\u01F0\nB\rB\x0E" +
        "B\u01F1\x03B\x03B\x03B\x03B\x06B\u01F8\nB\rB\x0EB\u01F9\x07B\u01FC\nB" +
        "\fB\x0EB\u01FF\vB\x03C\x06C\u0202\nC\rC\x0EC\u0203\x03D\x06D\u0207\nD" +
        "\rD\x0ED\u0208\x03D\x03D\x07D\u020D\nD\fD\x0ED\u0210\vD\x03D\x03D\x06" +
        "D\u0214\nD\rD\x0ED\u0215\x05D\u0218\nD\x03E\x06E\u021B\nE\rE\x0EE\u021C" +
        "\x03E\x03E\x07E\u0221\nE\fE\x0EE\u0224\vE\x03E\x03E\x03E\x03E\x06E\u022A" +
        "\nE\rE\x0EE\u022B\x03E\x03E\x03E\x06E\u0231\nE\rE\x0EE\u0232\x03E\x03" +
        "E\x05E\u0237\nE\x03F\x03F\x03F\x03G\x03G\x03G\x03H\x03H\x03H\x03I\x03" +
        "I\x03I\x03J\x03J\x03J\x03K\x03K\x03K\x03L\x03L\x05L\u024D\nL\x03L\x06" +
        "L\u0250\nL\rL\x0EL\u0251\x03M\x03M\x03M\x07M\u0257\nM\fM\x0EM\u025A\v" +
        "M\x03M\x03M\x03N\x03N\x03N\x07N\u0261\nN\fN\x0EN\u0264\vN\x03N\x03N\x03" +
        "O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u026F\nO\x03O\x03O\x05O\u0273\nO" +
        "\x07O\u0275\nO\fO\x0EO\u0278\vO\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x03" +
        "P\x03P\x03P\x03P\x05P\u0285\nP\x03P\x03P\x05P\u0289\nP\x07P\u028B\nP\f" +
        "P\x0EP\u028E\vP\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03R\x03R\x07R\u0299" +
        "\nR\fR\x0ER\u029C\vR\x03R\x03R\x03S\x03S\x07S\u02A2\nS\fS\x0ES\u02A5\v" +
        "S\x03S\x03S\x03T\x03T\x05T\u02AB\nT\x03U\x03U\x05U\u02AF\nU\x03U\x03U" +
        "\x03U\x07U\u02B4\nU\fU\x0EU\u02B7\vU\x03V\x03V\x03V\x05V\u02BC\nV\x03" +
        "W\x03W\x03W\x07W\u02C1\nW\fW\x0EW\u02C4\vW\x03W\x05W\u02C7\nW\x03X\x03" +
        "X\x05X\u02CB\nX\x03X\x03X\x07X\u02CF\nX\fX\x0EX\u02D2\vX\x03X\x05X\u02D5" +
        "\nX\x03Y\x03Y\x03Z\x03Z\x03[\x06[\u02DC\n[\r[\x0E[\u02DD\x03[\x03[\x02" +
        "\x02\x02\\\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02" +
        "\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
        "\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02" +
        "\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02" +
        "\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(" +
        "O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x02" +
        "4g\x025i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02" +
        "@\x7F\x02A\x81\x02B\x83\x02C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02" +
        "H\x8F\x02I\x91\x02J\x93\x02K\x95\x02L\x97\x02M\x99\x02N\x9B\x02O\x9D\x02" +
        "P\x9F\x02Q\xA1\x02R\xA3\x02S\xA5\x02T\xA7\x02U\xA9\x02V\xAB\x02\x02\xAD" +
        "\x02W\xAF\x02X\xB1\x02\x02\xB3\x02\x02\xB5\x02Y\x03\x02\f\t\x02$$>>@@" +
        "^^``bb}\x7F\x04\x02GGgg\x04\x02--//\x06\x02\f\f\x0F\x0F))^^\x06\x02\f" +
        "\f\x0F\x0F$$^^\x04\x02))^^\t\x02$$))ddhhppttvv\x05\x02\xB9\xB9\u0302\u0371" +
        "\u2041\u2042\x0F\x02C\\c|\xC2\xD8\xDA\xF8\xFA\u0301\u0372\u037F\u0381" +
        "\u2001\u200E\u200F\u2072\u2191\u2C02\u2FF1\u3003\uD801\uF902\uFDD1\uFDF2" +
        "\uFFFF\x05\x02\v\f\x0F\x0F\"\"\x02\u030D\x02\x03\x03\x02\x02\x02\x02\x05" +
        "\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
        "\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
        "\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
        "\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03" +
        "\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02" +
        "\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02" +
        "\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03" +
        "\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02" +
        "\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02" +
        "?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02" +
        "\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02" +
        "\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03" +
        "\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02" +
        "\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02" +
        "a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02" +
        "\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02" +
        "\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03" +
        "\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02" +
        "\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02" +
        "\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02" +
        "\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02" +
        "\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02" +
        "\x02\x02\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02\x99\x03\x02\x02" +
        "\x02\x02\x9B\x03\x02\x02\x02\x02\x9D\x03\x02\x02\x02\x02\x9F\x03\x02\x02" +
        "\x02\x02\xA1\x03\x02\x02\x02\x02\xA3\x03\x02\x02\x02\x02\xA5\x03\x02\x02" +
        "\x02\x02\xA7\x03\x02\x02\x02\x02\xA9\x03\x02\x02\x02\x02\xAD\x03\x02\x02" +
        "\x02\x02\xAF\x03\x02\x02\x02\x02\xB5\x03\x02\x02\x02\x03\xB7\x03\x02\x02" +
        "\x02\x05\xBC\x03\x02\x02\x02\x07\xC3\x03\x02\x02\x02\t\xCA\x03\x02\x02" +
        "\x02\v\xD3\x03\x02\x02\x02\r\xDB\x03\x02\x02\x02\x0F\xDD\x03\x02\x02\x02" +
        "\x11\xE7\x03\x02\x02\x02\x13\xF0\x03\x02\x02\x02\x15\xF4\x03\x02\x02\x02" +
        "\x17\xF9\x03\x02\x02\x02\x19\xFF\x03\x02\x02\x02\x1B\u0105\x03\x02\x02" +
        "\x02\x1D\u010B\x03\x02\x02\x02\x1F\u010E\x03\x02\x02\x02!\u0112\x03\x02" +
        "\x02\x02#\u0117\x03\x02\x02\x02%\u011D\x03\x02\x02\x02\'\u0124\x03\x02" +
        "\x02\x02)\u0126\x03\x02\x02\x02+\u0128\x03\x02\x02\x02-\u012A\x03\x02" +
        "\x02\x02/\u0133\x03\x02\x02\x021\u0139\x03\x02\x02\x023\u013F\x03\x02" +
        "\x02\x025\u0146\x03\x02\x02\x027\u0148\x03\x02\x02\x029\u014A\x03\x02" +
        "\x02\x02;\u014C\x03\x02\x02\x02=\u014E\x03\x02\x02\x02?\u0150\x03\x02" +
        "\x02\x02A\u0152\x03\x02\x02\x02C\u0154\x03\x02\x02\x02E\u0157\x03\x02" +
        "\x02\x02G\u015A\x03\x02\x02\x02I\u015C\x03\x02\x02\x02K\u015F\x03\x02" +
        "\x02\x02M\u0161\x03\x02\x02\x02O\u0163\x03\x02\x02\x02Q\u0166\x03\x02" +
        "\x02\x02S\u0169\x03\x02\x02\x02U\u016B\x03\x02\x02\x02W\u016D\x03\x02" +
        "\x02\x02Y\u016F\x03\x02\x02\x02[\u0171\x03\x02\x02\x02]\u0175\x03\x02" +
        "\x02\x02_\u017A\x03\x02\x02\x02a\u0186\x03\x02\x02\x02c\u018F\x03\x02" +
        "\x02\x02e\u0195\x03\x02\x02\x02g\u019E\x03\x02\x02\x02i\u01A4\x03\x02" +
        "\x02\x02k\u01AA\x03\x02\x02\x02m\u01B2\x03\x02\x02\x02o\u01BC\x03\x02" +
        "\x02\x02q\u01C2\x03\x02\x02\x02s\u01C5\x03\x02\x02\x02u\u01CA\x03\x02" +
        "\x02\x02w\u01D0\x03\x02\x02\x02y\u01DB\x03\x02\x02\x02{\u01DF\x03\x02" +
        "\x02\x02}\u01E2\x03\x02\x02\x02\x7F\u01E7\x03\x02\x02\x02\x81\u01EA\x03" +
        "\x02\x02\x02\x83\u01ED\x03\x02\x02\x02\x85\u0201\x03\x02\x02\x02\x87\u0217" +
        "\x03\x02\x02\x02\x89\u0236\x03\x02\x02\x02\x8B\u0238\x03\x02\x02\x02\x8D" +
        "\u023B\x03\x02\x02\x02\x8F\u023E\x03\x02\x02\x02\x91\u0241\x03\x02\x02" +
        "\x02\x93\u0244\x03\x02\x02\x02\x95\u0247\x03\x02\x02\x02\x97\u024A\x03" +
        "\x02\x02\x02\x99\u0253\x03\x02\x02\x02\x9B\u025D\x03\x02\x02\x02\x9D\u0267" +
        "\x03\x02\x02\x02\x9F\u027D\x03\x02\x02\x02\xA1\u0293\x03\x02\x02\x02\xA3" +
        "\u0296\x03\x02\x02\x02\xA5\u029F\x03\x02\x02\x02\xA7\u02AA\x03\x02\x02" +
        "\x02\xA9\u02AE\x03\x02\x02\x02\xAB\u02BB\x03\x02\x02\x02\xAD\u02BD\x03" +
        "\x02\x02\x02\xAF\u02CA\x03\x02\x02\x02\xB1\u02D6\x03\x02\x02\x02\xB3\u02D8" +
        "\x03\x02\x02\x02\xB5\u02DB\x03\x02\x02\x02\xB7\xB8\x07D\x02\x02\xB8\xB9" +
        "\x07C\x02\x02\xB9\xBA\x07U\x02\x02\xBA\xBB\x07G\x02\x02\xBB\x04\x03\x02" +
        "\x02\x02\xBC\xBD\x07R\x02\x02\xBD\xBE\x07T\x02\x02\xBE\xBF\x07G\x02\x02" +
        "\xBF\xC0\x07H\x02\x02\xC0\xC1\x07K\x02\x02\xC1\xC2\x07Z\x02\x02\xC2\x06" +
        "\x03\x02\x02\x02\xC3\xC4\x07U\x02\x02\xC4\xC5\x07G\x02\x02\xC5\xC6\x07" +
        "N\x02\x02\xC6\xC7\x07G\x02\x02\xC7\xC8\x07E\x02\x02\xC8\xC9\x07V\x02\x02" +
        "\xC9\b\x03\x02\x02\x02\xCA\xCB\x07F\x02\x02\xCB\xCC\x07K\x02\x02\xCC\xCD" +
        "\x07U\x02\x02\xCD\xCE\x07V\x02\x02\xCE\xCF\x07K\x02\x02\xCF\xD0\x07P\x02" +
        "\x02\xD0\xD1\x07E\x02\x02\xD1\xD2\x07V\x02\x02\xD2\n\x03\x02\x02\x02\xD3" +
        "\xD4\x07T\x02\x02\xD4\xD5\x07G\x02\x02\xD5\xD6\x07F\x02\x02\xD6\xD7\x07" +
        "W\x02\x02\xD7\xD8\x07E\x02\x02\xD8\xD9\x07G\x02\x02\xD9\xDA\x07F\x02\x02" +
        "\xDA\f\x03\x02\x02\x02\xDB\xDC\x07,\x02\x02\xDC\x0E\x03\x02\x02\x02\xDD" +
        "\xDE\x07E\x02\x02\xDE\xDF\x07Q\x02\x02\xDF\xE0\x07P\x02\x02\xE0\xE1\x07" +
        "U\x02\x02\xE1\xE2\x07V\x02\x02\xE2\xE3\x07T\x02\x02\xE3\xE4\x07W\x02\x02" +
        "\xE4\xE5\x07E\x02\x02\xE5\xE6\x07V\x02\x02\xE6\x10\x03\x02\x02\x02\xE7" +
        "\xE8\x07F\x02\x02\xE8\xE9\x07G\x02\x02\xE9\xEA\x07U\x02\x02\xEA\xEB\x07" +
        "E\x02\x02\xEB\xEC\x07T\x02\x02\xEC\xED\x07K\x02\x02\xED\xEE\x07D\x02\x02" +
        "\xEE\xEF\x07G\x02\x02\xEF\x12\x03\x02\x02\x02\xF0\xF1\x07C\x02\x02\xF1" +
        "\xF2\x07U\x02\x02\xF2\xF3\x07M\x02\x02\xF3\x14\x03\x02\x02\x02\xF4\xF5" +
        "\x07H\x02\x02\xF5\xF6\x07T\x02\x02\xF6\xF7\x07Q\x02\x02\xF7\xF8\x07O\x02" +
        "\x02\xF8\x16\x03\x02\x02\x02\xF9\xFA\x07P\x02\x02\xFA\xFB\x07C\x02\x02" +
        "\xFB\xFC\x07O\x02\x02\xFC\xFD\x07G\x02\x02\xFD\xFE\x07F\x02\x02\xFE\x18" +
        "\x03\x02\x02\x02\xFF\u0100\x07Y\x02\x02\u0100\u0101\x07J\x02\x02\u0101" +
        "\u0102\x07G\x02\x02\u0102\u0103\x07T\x02\x02\u0103\u0104\x07G\x02\x02" +
        "\u0104\x1A\x03\x02\x02\x02\u0105\u0106\x07Q\x02\x02\u0106\u0107\x07T\x02" +
        "\x02\u0107\u0108\x07F\x02\x02\u0108\u0109\x07G\x02\x02\u0109\u010A\x07" +
        "T\x02\x02\u010A\x1C\x03\x02\x02\x02\u010B\u010C\x07D\x02\x02\u010C\u010D" +
        "\x07[\x02\x02\u010D\x1E\x03\x02\x02\x02\u010E\u010F\x07C\x02\x02\u010F" +
        "\u0110\x07U\x02\x02\u0110\u0111\x07E\x02\x02\u0111 \x03\x02\x02\x02\u0112" +
        "\u0113\x07F\x02\x02\u0113\u0114\x07G\x02\x02\u0114\u0115\x07U\x02\x02" +
        "\u0115\u0116\x07E\x02\x02\u0116\"\x03\x02\x02\x02\u0117\u0118\x07N\x02" +
        "\x02\u0118\u0119\x07K\x02\x02\u0119\u011A\x07O\x02\x02\u011A\u011B\x07" +
        "K\x02\x02\u011B\u011C\x07V\x02\x02\u011C$\x03\x02\x02\x02\u011D\u011E" +
        "\x07Q\x02\x02\u011E\u011F\x07H\x02\x02\u011F\u0120\x07H\x02\x02\u0120" +
        "\u0121\x07U\x02\x02\u0121\u0122\x07G\x02\x02\u0122\u0123\x07V\x02\x02" +
        "\u0123&\x03\x02\x02\x02\u0124\u0125\x07}\x02\x02\u0125(\x03\x02\x02\x02" +
        "\u0126\u0127\x070\x02\x02\u0127*\x03\x02\x02\x02\u0128\u0129\x07\x7F\x02" +
        "\x02\u0129,\x03\x02\x02\x02\u012A\u012B\x07Q\x02\x02\u012B\u012C\x07R" +
        "\x02\x02\u012C\u012D\x07V\x02\x02\u012D\u012E\x07K\x02\x02\u012E\u012F" +
        "\x07Q\x02\x02\u012F\u0130\x07P\x02\x02\u0130\u0131\x07C\x02\x02\u0131" +
        "\u0132\x07N\x02\x02\u0132.\x03\x02\x02\x02\u0133\u0134\x07I\x02\x02\u0134" +
        "\u0135\x07T\x02\x02\u0135\u0136\x07C\x02\x02\u0136\u0137\x07R\x02\x02" +
        "\u0137\u0138\x07J\x02\x02\u01380\x03\x02\x02\x02\u0139\u013A\x07W\x02" +
        "\x02\u013A\u013B\x07P\x02\x02\u013B\u013C\x07K\x02\x02\u013C\u013D\x07" +
        "Q\x02\x02\u013D\u013E\x07P\x02\x02\u013E2\x03\x02\x02\x02\u013F\u0140" +
        "\x07H\x02\x02\u0140\u0141\x07K\x02\x02\u0141\u0142\x07N\x02\x02\u0142" +
        "\u0143\x07V\x02\x02\u0143\u0144\x07G\x02\x02\u0144\u0145\x07T\x02\x02" +
        "\u01454\x03\x02\x02\x02\u0146\u0147\x07*\x02\x02\u01476\x03\x02\x02\x02" +
        "\u0148\u0149\x07.\x02\x02\u01498\x03\x02\x02\x02\u014A\u014B\x07+\x02" +
        "\x02\u014B:\x03\x02\x02\x02\u014C\u014D\x07=\x02\x02\u014D<\x03\x02\x02" +
        "\x02\u014E\u014F\x07c\x02\x02\u014F>\x03\x02\x02\x02\u0150\u0151\x07]" +
        "\x02\x02\u0151@\x03\x02\x02\x02\u0152\u0153\x07_\x02\x02\u0153B\x03\x02" +
        "\x02\x02\u0154\u0155\x07~\x02\x02\u0155\u0156\x07~\x02\x02\u0156D\x03" +
        "\x02\x02\x02\u0157\u0158\x07(\x02\x02\u0158\u0159\x07(\x02\x02\u0159F" +
        "\x03\x02\x02\x02\u015A\u015B\x07?\x02\x02\u015BH\x03\x02\x02\x02\u015C" +
        "\u015D\x07#\x02\x02\u015D\u015E\x07?\x02\x02\u015EJ\x03\x02\x02\x02\u015F" +
        "\u0160\x07>\x02\x02\u0160L\x03\x02\x02\x02\u0161\u0162\x07@\x02\x02\u0162" +
        "N\x03\x02\x02\x02\u0163\u0164\x07>\x02\x02\u0164\u0165\x07?\x02\x02\u0165" +
        "P\x03\x02\x02\x02\u0166\u0167\x07@\x02\x02\u0167\u0168\x07?\x02\x02\u0168" +
        "R\x03\x02\x02\x02\u0169\u016A\x07-\x02\x02\u016AT\x03\x02\x02\x02\u016B" +
        "\u016C\x07/\x02\x02\u016CV\x03\x02\x02\x02\u016D\u016E\x071\x02\x02\u016E" +
        "X\x03\x02\x02\x02\u016F\u0170\x07#\x02\x02\u0170Z\x03\x02\x02\x02\u0171" +
        "\u0172\x07U\x02\x02\u0172\u0173\x07V\x02\x02\u0173\u0174\x07T\x02\x02" +
        "\u0174\\\x03\x02\x02\x02\u0175\u0176\x07N\x02\x02\u0176\u0177\x07C\x02" +
        "\x02\u0177\u0178\x07P\x02\x02\u0178\u0179\x07I\x02\x02\u0179^\x03\x02" +
        "\x02\x02\u017A\u017B\x07N\x02\x02\u017B\u017C\x07C\x02\x02\u017C\u017D" +
        "\x07P\x02\x02\u017D\u017E\x07I\x02\x02\u017E\u017F\x07O\x02\x02\u017F" +
        "\u0180\x07C\x02\x02\u0180\u0181\x07V\x02\x02\u0181\u0182\x07E\x02\x02" +
        "\u0182\u0183\x07J\x02\x02\u0183\u0184\x07G\x02\x02\u0184\u0185\x07U\x02" +
        "\x02\u0185`\x03\x02\x02\x02\u0186\u0187\x07F\x02\x02\u0187\u0188\x07C" +
        "\x02\x02\u0188\u0189\x07V\x02\x02\u0189\u018A\x07C\x02\x02\u018A\u018B" +
        "\x07V\x02\x02\u018B\u018C\x07[\x02\x02\u018C\u018D\x07R\x02\x02\u018D" +
        "\u018E\x07G\x02\x02\u018Eb\x03\x02\x02\x02\u018F\u0190\x07D\x02\x02\u0190" +
        "\u0191\x07Q\x02\x02\u0191\u0192\x07W\x02\x02\u0192\u0193\x07P\x02\x02" +
        "\u0193\u0194\x07F\x02\x02\u0194d\x03\x02\x02\x02\u0195\u0196\x07u\x02" +
        "\x02\u0196\u0197\x07c\x02\x02\u0197\u0198\x07o\x02\x02\u0198\u0199\x07" +
        "g\x02\x02\u0199\u019A\x07V\x02\x02\u019A\u019B\x07g\x02\x02\u019B\u019C" +
        "\x07t\x02\x02\u019C\u019D\x07o\x02\x02\u019Df\x03\x02\x02\x02\u019E\u019F" +
        "\x07k\x02\x02\u019F\u01A0\x07u\x02\x02\u01A0\u01A1\x07K\x02\x02\u01A1" +
        "\u01A2\x07T\x02\x02\u01A2\u01A3\x07K\x02\x02\u01A3h\x03\x02\x02\x02\u01A4" +
        "\u01A5\x07k\x02\x02\u01A5\u01A6\x07u\x02\x02\u01A6\u01A7\x07W\x02\x02" +
        "\u01A7\u01A8\x07T\x02\x02\u01A8\u01A9\x07K\x02\x02\u01A9j\x03\x02\x02" +
        "\x02\u01AA\u01AB\x07k\x02\x02\u01AB\u01AC\x07u\x02\x02\u01AC\u01AD\x07" +
        "D\x02\x02\u01AD\u01AE\x07N\x02\x02\u01AE\u01AF\x07C\x02\x02\u01AF\u01B0" +
        "\x07P\x02\x02\u01B0\u01B1\x07M\x02\x02\u01B1l\x03\x02\x02\x02\u01B2\u01B3" +
        "\x07k\x02\x02\u01B3\u01B4\x07u\x02\x02\u01B4\u01B5\x07N\x02\x02\u01B5" +
        "\u01B6\x07K\x02\x02\u01B6\u01B7\x07V\x02\x02\u01B7\u01B8\x07G\x02\x02" +
        "\u01B8\u01B9\x07T\x02\x02\u01B9\u01BA\x07C\x02\x02\u01BA\u01BB\x07N\x02" +
        "\x02\u01BBn\x03\x02\x02\x02\u01BC\u01BD\x07T\x02\x02\u01BD\u01BE\x07G" +
        "\x02\x02\u01BE\u01BF\x07I\x02\x02\u01BF\u01C0\x07G\x02\x02\u01C0\u01C1" +
        "\x07Z\x02\x02\u01C1p\x03\x02\x02\x02\u01C2\u01C3\x07`\x02\x02\u01C3\u01C4" +
        "\x07`\x02\x02\u01C4r\x03\x02\x02\x02\u01C5\u01C6\x07v\x02\x02\u01C6\u01C7" +
        "\x07t\x02\x02\u01C7\u01C8\x07w\x02\x02\u01C8\u01C9\x07g\x02\x02\u01C9" +
        "t\x03\x02\x02\x02\u01CA\u01CB\x07h\x02\x02\u01CB\u01CC\x07c\x02\x02\u01CC" +
        "\u01CD\x07n\x02\x02\u01CD\u01CE\x07u\x02\x02\u01CE\u01CF\x07g\x02\x02" +
        "\u01CFv\x03\x02\x02\x02\u01D0\u01D5\x07>\x02\x02\u01D1\u01D4\n\x02\x02" +
        "\x02\u01D2\u01D4\x05\xABV\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D2" +
        "\x03\x02\x02\x02\u01D4\u01D7\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02" +
        "\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D8\x03\x02\x02\x02\u01D7\u01D5\x03" +
        "\x02\x02\x02\u01D8\u01D9\x07@\x02\x02\u01D9x\x03\x02\x02\x02\u01DA\u01DC" +
        "\x05\xADW\x02\u01DB\u01DA\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02" +
        "\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DE\x07<\x02\x02\u01DEz\x03\x02\x02" +
        "\x02\u01DF\u01E0\x05y=\x02\u01E0\u01E1\x05\xAFX\x02\u01E1|\x03\x02\x02" +
        "\x02\u01E2\u01E3\x07a\x02\x02\u01E3\u01E4\x07<\x02\x02\u01E4\u01E5\x03" +
        "\x02\x02\x02\u01E5\u01E6\x05\xAFX\x02\u01E6~\x03\x02\x02\x02\u01E7\u01E8" +
        "\x07A\x02\x02\u01E8\u01E9\x05\xA9U\x02\u01E9\x80\x03\x02\x02\x02\u01EA" +
        "\u01EB\x07&\x02\x02\u01EB\u01EC\x05\xA9U\x02\u01EC\x82\x03\x02\x02\x02" +
        "\u01ED\u01EF\x07B\x02\x02\u01EE\u01F0\x05\xB1Y\x02\u01EF\u01EE\x03\x02" +
        "\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1" +
        "\u01F2\x03\x02\x02\x02\u01F2\u01FD\x03\x02\x02\x02\u01F3\u01F7\x07/\x02" +
        "\x02\u01F4\u01F5\x05\xB1Y\x02\u01F5\u01F6\x05\xB3Z\x02\u01F6\u01F8\x03" +
        "\x02\x02\x02\u01F7\u01F4\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9" +
        "\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FC\x03\x02" +
        "\x02\x02\u01FB\u01F3\x03\x02\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD" +
        "\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\x84\x03\x02\x02";
    SparqlLexer._serializedATNSegment1 = "\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u0202\x05\xB3Z\x02\u0201\u0200" +
        "\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02" +
        "\u0203\u0204\x03\x02\x02\x02\u0204\x86\x03\x02\x02\x02\u0205\u0207\x05" +
        "\xB3Z\x02\u0206\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208" +
        "\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02" +
        "\x02\x02\u020A\u020E\x070\x02\x02\u020B\u020D\x05\xB3Z\x02\u020C\u020B" +
        "\x03\x02\x02\x02\u020D\u0210\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02" +
        "\u020E\u020F\x03\x02\x02\x02\u020F\u0218\x03\x02\x02\x02\u0210\u020E\x03" +
        "\x02\x02\x02\u0211\u0213\x070\x02\x02\u0212\u0214\x05\xB3Z\x02\u0213\u0212" +
        "\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02" +
        "\u0215\u0216\x03\x02\x02\x02\u0216\u0218\x03\x02\x02\x02\u0217\u0206\x03" +
        "\x02\x02\x02\u0217\u0211\x03\x02\x02\x02\u0218\x88\x03\x02\x02\x02\u0219" +
        "\u021B\x05\xB3Z\x02\u021A\u0219\x03\x02\x02\x02\u021B\u021C\x03\x02\x02" +
        "\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E" +
        "\x03\x02\x02\x02\u021E\u0222\x070\x02\x02\u021F\u0221\x05\xB3Z\x02\u0220" +
        "\u021F\x03\x02\x02\x02\u0221\u0224\x03\x02\x02\x02\u0222\u0220\x03\x02" +
        "\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0225\x03\x02\x02\x02\u0224" +
        "\u0222\x03\x02\x02\x02\u0225\u0226\x05\x97L\x02\u0226\u0237\x03\x02\x02" +
        "\x02\u0227\u0229\x070\x02\x02\u0228\u022A\x05\xB3Z\x02\u0229\u0228\x03" +
        "\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022B" +
        "\u022C\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022E\x05\x97" +
        "L\x02\u022E\u0237\x03\x02\x02\x02\u022F\u0231\x05\xB3Z\x02\u0230\u022F" +
        "\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02" +
        "\u0232\u0233\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x05" +
        "\x97L\x02\u0235\u0237\x03\x02\x02\x02\u0236\u021A\x03\x02\x02\x02\u0236" +
        "\u0227\x03\x02\x02\x02\u0236\u0230\x03\x02\x02\x02\u0237\x8A\x03\x02\x02" +
        "\x02\u0238\u0239\x07-\x02\x02\u0239\u023A\x05\x85C\x02\u023A\x8C\x03\x02" +
        "\x02\x02\u023B\u023C\x07-\x02\x02\u023C\u023D\x05\x87D\x02\u023D\x8E\x03" +
        "\x02\x02\x02\u023E\u023F\x07-\x02\x02\u023F\u0240\x05\x89E\x02\u0240\x90" +
        "\x03\x02\x02\x02\u0241\u0242\x07/\x02\x02\u0242\u0243\x05\x85C\x02\u0243" +
        "\x92\x03\x02\x02\x02\u0244\u0245\x07/\x02\x02\u0245\u0246\x05\x87D\x02" +
        "\u0246\x94\x03\x02\x02\x02\u0247\u0248\x07/\x02\x02\u0248\u0249\x05\x89" +
        "E\x02\u0249\x96\x03\x02\x02\x02\u024A\u024C\t\x03\x02\x02\u024B\u024D" +
        "\t\x04\x02\x02\u024C\u024B\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02" +
        "\u024D\u024F\x03\x02\x02\x02\u024E\u0250\x05\xB3Z\x02\u024F\u024E\x03" +
        "\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0251" +
        "\u0252\x03\x02\x02\x02\u0252\x98\x03\x02\x02\x02\u0253\u0258\x07)\x02" +
        "\x02\u0254\u0257\n\x05\x02\x02\u0255\u0257\x05\xA1Q\x02\u0256\u0254\x03" +
        "\x02\x02\x02\u0256\u0255\x03\x02\x02\x02\u0257\u025A\x03\x02\x02\x02\u0258" +
        "\u0256\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025B\x03\x02" +
        "\x02\x02\u025A\u0258\x03\x02\x02\x02\u025B\u025C\x07)\x02\x02\u025C\x9A" +
        "\x03\x02\x02\x02\u025D\u0262\x07$\x02\x02\u025E\u0261\n\x06\x02\x02\u025F" +
        "\u0261\x05\xA1Q\x02\u0260\u025E\x03\x02\x02\x02\u0260\u025F\x03\x02\x02" +
        "\x02\u0261\u0264\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0263" +
        "\x03\x02\x02\x02\u0263\u0265\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02" +
        "\u0265\u0266\x07$\x02\x02\u0266\x9C\x03\x02\x02\x02\u0267\u0268\x07)\x02" +
        "\x02\u0268\u0269\x07)\x02\x02\u0269\u026A\x07)\x02\x02\u026A\u0276\x03" +
        "\x02\x02\x02\u026B\u026F\x07)\x02\x02\u026C\u026D\x07)\x02\x02\u026D\u026F" +
        "\x07)\x02\x02\u026E\u026B\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02" +
        "\u026E\u026F\x03\x02\x02\x02\u026F\u0272\x03\x02\x02\x02\u0270\u0273\n" +
        "\x07\x02\x02\u0271\u0273\x05\xA1Q\x02\u0272\u0270\x03\x02\x02\x02\u0272" +
        "\u0271\x03\x02\x02\x02\u0273\u0275\x03\x02\x02\x02\u0274\u026E\x03\x02" +
        "\x02\x02\u0275\u0278\x03\x02\x02\x02\u0276\u0274\x03\x02\x02\x02\u0276" +
        "\u0277\x03\x02\x02\x02\u0277\u0279\x03\x02\x02\x02\u0278\u0276\x03\x02" +
        "\x02\x02\u0279\u027A\x07)\x02\x02\u027A\u027B\x07)\x02\x02\u027B\u027C" +
        "\x07)\x02\x02\u027C\x9E\x03\x02\x02\x02\u027D\u027E\x07$\x02\x02\u027E" +
        "\u027F\x07$\x02\x02\u027F\u0280\x07$\x02\x02\u0280\u028C\x03\x02\x02\x02" +
        "\u0281\u0285\x07$\x02\x02\u0282\u0283\x07$\x02\x02\u0283\u0285\x07$\x02" +
        "\x02\u0284\u0281\x03\x02\x02\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0285" +
        "\x03\x02\x02\x02\u0285\u0288\x03\x02\x02\x02\u0286\u0289\n\x07\x02\x02" +
        "\u0287\u0289\x05\xA1Q\x02\u0288\u0286\x03\x02\x02\x02\u0288\u0287\x03" +
        "\x02\x02\x02\u0289\u028B\x03\x02\x02\x02\u028A\u0284\x03\x02\x02\x02\u028B" +
        "\u028E\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02" +
        "\x02\x02\u028D\u028F\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F" +
        "\u0290\x07$\x02\x02\u0290\u0291\x07$\x02\x02\u0291\u0292\x07$\x02\x02" +
        "\u0292\xA0\x03\x02\x02\x02\u0293\u0294\x07^\x02\x02\u0294\u0295\t\b\x02" +
        "\x02\u0295\xA2\x03\x02\x02\x02\u0296\u029A\x07*\x02\x02\u0297\u0299\x05" +
        "\xB5[\x02\u0298\u0297\x03\x02\x02\x02\u0299\u029C\x03\x02\x02\x02\u029A" +
        "\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u029D\x03\x02" +
        "\x02\x02\u029C\u029A\x03\x02\x02\x02\u029D\u029E\x07+\x02\x02\u029E\xA4" +
        "\x03\x02\x02\x02\u029F\u02A3\x07]\x02\x02\u02A0\u02A2\x05\xB5[\x02\u02A1" +
        "\u02A0\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A1\x03\x02" +
        "\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02A6\x03\x02\x02\x02\u02A5" +
        "\u02A3\x03\x02\x02\x02\u02A6\u02A7\x07_\x02\x02\u02A7\xA6\x03\x02\x02" +
        "\x02\u02A8\u02AB\x05\xB1Y\x02\u02A9\u02AB\x07a\x02\x02\u02AA\u02A8\x03" +
        "\x02\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02AB\xA8\x03\x02\x02\x02\u02AC" +
        "\u02AF\x05\xA7T\x02\u02AD\u02AF\x05\xB3Z\x02\u02AE\u02AC\x03\x02\x02\x02" +
        "\u02AE\u02AD\x03\x02\x02\x02\u02AF\u02B5\x03\x02\x02\x02\u02B0\u02B4\x05" +
        "\xA7T\x02\u02B1\u02B4\x05\xB3Z\x02\u02B2\u02B4\t\t\x02\x02\u02B3\u02B0" +
        "\x03\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B2\x03\x02\x02\x02" +
        "\u02B4\u02B7\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B5\u02B6\x03" +
        "\x02\x02\x02\u02B6\xAA\x03\x02\x02\x02\u02B7\u02B5\x03\x02\x02\x02\u02B8" +
        "\u02BC\x05\xA7T\x02\u02B9\u02BC\x07/\x02\x02\u02BA\u02BC\x05\xB3Z\x02" +
        "\u02BB\u02B8\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB\u02BA\x03" +
        "\x02\x02\x02\u02BC\xAC\x03\x02\x02\x02\u02BD\u02C6\x05\xB1Y\x02\u02BE" +
        "\u02C1\x05\xABV\x02\u02BF\u02C1\x070\x02\x02\u02C0\u02BE\x03\x02\x02\x02" +
        "\u02C0\u02BF\x03\x02\x02\x02\u02C1\u02C4\x03\x02\x02\x02\u02C2\u02C0\x03" +
        "\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C5\x03\x02\x02\x02\u02C4" +
        "\u02C2\x03\x02\x02\x02\u02C5\u02C7\x05\xABV\x02\u02C6\u02C2\x03\x02\x02" +
        "\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7\xAE\x03\x02\x02\x02\u02C8\u02CB" +
        "\x05\xA7T\x02\u02C9\u02CB\x05\xB3Z\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA" +
        "\u02C9\x03\x02\x02\x02\u02CB\u02D4\x03\x02\x02\x02\u02CC\u02CF\x05\xAB" +
        "V\x02\u02CD\u02CF\x070\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CD" +
        "\x03\x02\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02" +
        "\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D3\x03\x02\x02\x02\u02D2\u02D0\x03" +
        "\x02\x02\x02\u02D3\u02D5\x05\xABV\x02\u02D4\u02D0\x03\x02\x02\x02\u02D4" +
        "\u02D5\x03\x02\x02\x02\u02D5\xB0\x03\x02\x02\x02\u02D6\u02D7\t\n\x02\x02" +
        "\u02D7\xB2\x03\x02\x02\x02\u02D8\u02D9\x042;\x02\u02D9\xB4\x03\x02\x02" +
        "\x02\u02DA\u02DC\t\v\x02\x02\u02DB\u02DA\x03\x02\x02\x02\u02DC\u02DD\x03" +
        "\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE" +
        "\u02DF\x03\x02\x02\x02\u02DF\u02E0\b[\x02\x02\u02E0\xB6\x03\x02\x02\x02" +
        ".\x02\u01D3\u01D5\u01DB\u01F1\u01F9\u01FD\u0203\u0208\u020E\u0215\u0217" +
        "\u021C\u0222\u022B\u0232\u0236\u024C\u0251\u0256\u0258\u0260\u0262\u026E" +
        "\u0272\u0276\u0284\u0288\u028C\u029A\u02A3\u02AA\u02AE\u02B3\u02B5\u02BB" +
        "\u02C0\u02C2\u02C6\u02CA\u02CE\u02D0\u02D4\u02DD\x03\b\x02\x02";
    SparqlLexer._serializedATN = Utils.join([
        SparqlLexer._serializedATNSegment0,
        SparqlLexer._serializedATNSegment1,
    ], "");
    return SparqlLexer;
}(Lexer_1.Lexer));
exports.SparqlLexer = SparqlLexer;
