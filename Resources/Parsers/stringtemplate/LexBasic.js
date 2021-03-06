"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stringtemplate/LexBasic.g4 by ANTLR 4.7.3-SNAPSHOT
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
var LexBasic = /** @class */ (function (_super) {
    __extends(LexBasic, _super);
    // tslint:enable:no-trailing-whitespace
    function LexBasic(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(LexBasic._ATN, _this);
        return _this;
    }
    Object.defineProperty(LexBasic.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return LexBasic.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexBasic.prototype, "grammarFileName", {
        // @Override
        get: function () { return "LexBasic.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexBasic.prototype, "ruleNames", {
        // @Override
        get: function () { return LexBasic.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexBasic.prototype, "serializedATN", {
        // @Override
        get: function () { return LexBasic._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexBasic.prototype, "channelNames", {
        // @Override
        get: function () { return LexBasic.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexBasic.prototype, "modeNames", {
        // @Override
        get: function () { return LexBasic.modeNames; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LexBasic.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 38:
                return this.JavaUnicodeChars_sempred(_localctx, predIndex);
        }
        return true;
    };
    LexBasic.prototype.JavaUnicodeChars_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return Character.isJavaIdentifierPart(_input.LA(-1));
            case 1:
                return Character.isJavaIdentifierPart(Character.toCodePoint((char), _input.LA(-2), (char), _input.LA(-1)));
        }
        return true;
    };
    Object.defineProperty(LexBasic, "_ATN", {
        get: function () {
            if (!LexBasic.__ATN) {
                LexBasic.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(LexBasic._serializedATN));
            }
            return LexBasic.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable:no-trailing-whitespace
    LexBasic.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    LexBasic.modeNames = [
        "DEFAULT_MODE",
    ];
    LexBasic.ruleNames = [
        "Ws", "Hws", "Vws", "DocComment", "BlockComment", "LineComment", "LineCommentExt",
        "EscSeq", "EscAny", "UnicodeEsc", "OctalEscape", "HexNumeral", "OctalNumeral",
        "DecimalNumeral", "BinaryNumeral", "HexDigits", "DecDigits", "OctalDigits",
        "BinaryDigits", "HexDigit", "DecDigit", "OctalDigit", "BinaryDigit", "BoolLiteral",
        "CharLiteral", "SQuoteLiteral", "DQuoteLiteral", "USQuoteLiteral", "DecimalFloatingPointLiteral",
        "ExponentPart", "FloatTypeSuffix", "HexadecimalFloatingPointLiteral",
        "HexSignificand", "BinaryExponent", "NameChar", "NameStartChar", "JavaLetter",
        "JavaLetterOrDigit", "JavaUnicodeChars", "Boolean", "Byte", "Short", "Int",
        "Long", "Char", "Float", "Double", "True", "False", "Esc", "Colon", "DColon",
        "SQuote", "DQuote", "BQuote", "LParen", "RParen", "LBrace", "RBrace",
        "LBrack", "RBrack", "RArrow", "Lt", "Gt", "Lte", "Gte", "Equal", "NotEqual",
        "Question", "Bang", "Star", "Slash", "Percent", "Caret", "Plus", "Minus",
        "PlusAssign", "MinusAssign", "MulAssign", "DivAssign", "AndAssign", "OrAssign",
        "XOrAssign", "ModAssign", "LShiftAssign", "RShiftAssign", "URShiftAssign",
        "Underscore", "Pipe", "Amp", "And", "Or", "Inc", "Dec", "LShift", "RShift",
        "Dollar", "Comma", "Semi", "Dot", "Range", "Ellipsis", "At", "Pound",
        "Tilde", "UnicodeLetter", "UnicodeClass_LU", "UnicodeClass_LL", "UnicodeClass_LT",
        "UnicodeClass_LM", "UnicodeClass_LO", "UnicodeDigit",
    ];
    LexBasic._LITERAL_NAMES = [];
    LexBasic._SYMBOLIC_NAMES = [];
    LexBasic.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(LexBasic._LITERAL_NAMES, LexBasic._SYMBOLIC_NAMES, []);
    LexBasic._serializedATNSegments = 2;
    LexBasic._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x02\u02D7\b\x01" +
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
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
        "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x03" +
        "\x02\x03\x02\x05\x02\xE6\n\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xF1\n\x05\f\x05\x0E\x05\xF4\v" +
        "\x05\x03\x05\x03\x05\x03\x05\x05\x05\xF9\n\x05\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x07\x06\xFF\n\x06\f\x06\x0E\x06\u0102\v\x06\x03\x06\x03\x06\x03" +
        "\x06\x05\x06\u0107\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u010D" +
        "\n\x07\f\x07\x0E\x07\u0110\v\x07\x03\b\x03\b\x03\b\x03\b\x07\b\u0116\n" +
        "\b\f\b\x0E\b\u0119\v\b\x03\b\x03\b\x07\b\u011D\n\b\f\b\x0E\b\u0120\v\b" +
        "\x03\b\x03\b\x03\b\x03\b\x07\b\u0126\n\b\f\b\x0E\b\u0129\v\b\x07\b\u012B" +
        "\n\b\f\b\x0E\b\u012E\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0135\n\t" +
        "\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u013F\n\v\x05\v" +
        "\u0141\n\v\x05\v\u0143\n\v\x05\v\u0145\n\v\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x05\f\u014F\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u015C\n\x0F\f\x0F" +
        "\x0E\x0F\u015F\v\x0F\x05\x0F\u0161\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x11\x06\x11\u0168\n\x11\r\x11\x0E\x11\u0169\x03\x12\x06\x12\u016D" +
        "\n\x12\r\x12\x0E\x12\u016E\x03\x13\x06\x13\u0172\n\x13\r\x13\x0E\x13\u0173" +
        "\x03\x14\x06\x14\u0177\n\x14\r\x14\x0E\x14\u0178\x03\x15\x03\x15\x03\x16" +
        "\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u0185" +
        "\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u018A\n\x1A\x03\x1A\x03\x1A\x03" +
        "\x1B\x03\x1B\x03\x1B\x07\x1B\u0191\n\x1B\f\x1B\x0E\x1B\u0194\v\x1B\x03" +
        "\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u019B\n\x1C\f\x1C\x0E\x1C" +
        "\u019E\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01A5\n\x1D" +
        "\f\x1D\x0E\x1D\u01A8\v\x1D\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01AD\n\x1E" +
        "\x03\x1E\x05\x1E\u01B0\n\x1E\x03\x1E\x05\x1E\u01B3\n\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x05\x1E\u01B8\n\x1E\x03\x1E\x05\x1E\u01BB\n\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x05\x1E\u01C0\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01C5\n\x1E" +
        "\x03\x1F\x03\x1F\x05\x1F\u01C9\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03!\x03" +
        "!\x03!\x05!\u01D2\n!\x03\"\x03\"\x05\"\u01D6\n\"\x03\"\x03\"\x03\"\x05" +
        "\"\u01DB\n\"\x03\"\x03\"\x03\"\x05\"\u01E0\n\"\x03#\x03#\x05#\u01E4\n" +
        "#\x03#\x03#\x03$\x03$\x03$\x03$\x05$\u01EC\n$\x03%\x03%\x03&\x03&\x05" +
        "&\u01F2\n&\x03\'\x03\'\x05\'\u01F6\n\'\x03(\x03(\x03(\x03(\x03(\x05(\u01FD" +
        "\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03" +
        "+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03" +
        "-\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x03" +
        "0\x030\x030\x030\x030\x031\x031\x031\x031\x031\x032\x032\x032\x032\x03" +
        "2\x032\x033\x033\x034\x034\x035\x035\x035\x036\x036\x037\x037\x038\x03" +
        "8\x039\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03" +
        "?\x03?\x03@\x03@\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03C\x03D\x03D\x03" +
        "E\x03E\x03E\x03F\x03F\x03G\x03G\x03H\x03H\x03I\x03I\x03J\x03J\x03K\x03" +
        "K\x03L\x03L\x03M\x03M\x03N\x03N\x03N\x03O\x03O\x03O\x03P\x03P\x03P\x03" +
        "Q\x03Q\x03Q\x03R\x03R\x03R\x03S\x03S\x03S\x03T\x03T\x03T\x03U\x03U\x03" +
        "U\x03V\x03V\x03V\x03V\x03W\x03W\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x03" +
        "Y\x03Y\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03^\x03^" +
        "\x03^\x03_\x03_\x03_\x03`\x03`\x03`\x03a\x03a\x03a\x03b\x03b\x03c\x03" +
        "c\x03d\x03d\x03e\x03e\x03f\x03f\x03f\x03g\x03g\x03g\x03g\x03h\x03h\x03" +
        "i\x03i\x03j\x03j\x03k\x03k\x03k\x03k\x03k\x05k\u02CA\nk\x03l\x03l\x03" +
        "m\x03m\x03n\x03n\x03o\x03o\x03p\x03p\x03q\x03q\x04\xF2\u0100\x02\x02r" +
        "\x03\x02\x02\x05\x02\x02\x07\x02\x02\t\x02\x02\v\x02\x02\r\x02\x02\x0F" +
        "\x02\x02\x11\x02\x02\x13\x02\x02\x15\x02\x02\x17\x02\x02\x19\x02\x02\x1B" +
        "\x02\x02\x1D\x02\x02\x1F\x02\x02!\x02\x02#\x02\x02%\x02\x02\'\x02\x02" +
        ")\x02\x02+\x02\x02-\x02\x02/\x02\x021\x02\x023\x02\x025\x02\x027\x02\x02" +
        "9\x02\x02;\x02\x02=\x02\x02?\x02\x02A\x02\x02C\x02\x02E\x02\x02G\x02\x02" +
        "I\x02\x02K\x02\x02M\x02\x02O\x02\x02Q\x02\x02S\x02\x02U\x02\x02W\x02\x02" +
        "Y\x02\x02[\x02\x02]\x02\x02_\x02\x02a\x02\x02c\x02\x02e\x02\x02g\x02\x02" +
        "i\x02\x02k\x02\x02m\x02\x02o\x02\x02q\x02\x02s\x02\x02u\x02\x02w\x02\x02" +
        "y\x02\x02{\x02\x02}\x02\x02\x7F\x02\x02\x81\x02\x02\x83\x02\x02\x85\x02" +
        "\x02\x87\x02\x02\x89\x02\x02\x8B\x02\x02\x8D\x02\x02\x8F\x02\x02\x91\x02" +
        "\x02\x93\x02\x02\x95\x02\x02\x97\x02\x02\x99\x02\x02\x9B\x02\x02\x9D\x02" +
        "\x02\x9F\x02\x02\xA1\x02\x02\xA3\x02\x02\xA5\x02\x02\xA7\x02\x02\xA9\x02" +
        "\x02\xAB\x02\x02\xAD\x02\x02\xAF\x02\x02\xB1\x02\x02\xB3\x02\x02\xB5\x02" +
        "\x02\xB7\x02\x02\xB9\x02\x02\xBB\x02\x02\xBD\x02\x02\xBF\x02\x02\xC1\x02" +
        "\x02\xC3\x02\x02\xC5\x02\x02\xC7\x02\x02\xC9\x02\x02\xCB\x02\x02\xCD\x02" +
        "\x02\xCF\x02\x02\xD1\x02\x02\xD3\x02\x02\xD5\x02\x02\xD7\x02\x02\xD9\x02" +
        "\x02\xDB\x02\x02\xDD\x02\x02\xDF\x02\x02\xE1\x02\x02\x03\x02\"\x04\x02" +
        "\v\v\"\"\x04\x02\f\f\x0E\x0F\x04\x02\f\f\x0F\x0F\x03\x02\f\f\n\x02$$)" +
        ")^^ddhhppttvv\x03\x0225\x04\x02ZZzz\x03\x023;\x04\x02DDdd\x05\x022;CH" +
        "ch\x03\x022;\x03\x0229\x03\x0223\x06\x02\f\f\x0F\x0F))^^\x06\x02\f\f\x0F" +
        "\x0F$$^^\x04\x02GGgg\x04\x02--//\x06\x02FFHHffhh\x04\x02RRrr\x05\x02\xB9" +
        "\xB9\u0302\u0371\u2041\u2042\x0F\x02C\\c|\xC2\xD8\xDA\xF8\xFA\u0301\u0372" +
        "\u037F\u0381\u2001\u200E\u200F\u2072\u2191\u2C02\u2FF1\u3003\uD801\uF902" +
        "\uFDD1\uFDF2\uFFFF\x06\x02&&C\\aac|\x07\x02&&2;C\\aac|\x04\x02\x02\u0101" +
        "\uD802\uDC01\x03\x02\uD802\uDC01\x03\x02\uDC02\uE001T\x02C\\\xC2\xD8\xDA" +
        "\xE0\u0102\u0138\u013B\u0149\u014C\u017F\u0183\u0184\u0186\u018D\u0190" +
        "\u0193\u0195\u0196\u0198\u019A\u019E\u019F\u01A1\u01A2\u01A4\u01AB\u01AE" +
        "\u01B5\u01B7\u01BE\u01C6\u01CF\u01D1\u01DD\u01E0\u01F0\u01F3\u01F6\u01F8" +
        "\u01FA\u01FC\u0234\u023C\u023D\u023F\u0240\u0243\u0248\u024A\u0250\u0372" +
        "\u0374\u0378\u0381\u0388\u038C\u038E\u03A3\u03A5\u03AD\u03D1\u03D6\u03DA" +
        "\u03F0\u03F6\u03F9\u03FB\u03FC\u03FF\u0431\u0462\u0482\u048C\u04CF\u04D2" +
        "\u0530\u0533\u0558\u10A2\u10C7\u10C9\u10CF\u1E02\u1E96\u1EA0\u1F00\u1F0A" +
        "\u1F11\u1F1A\u1F1F\u1F2A\u1F31\u1F3A\u1F41\u1F4A\u1F4F\u1F5B\u1F61\u1F6A" +
        "\u1F71\u1FBA\u1FBD\u1FCA\u1FCD\u1FDA\u1FDD\u1FEA\u1FEE\u1FFA\u1FFD\u2104" +
        "\u2109\u210D\u210F\u2112\u2114\u2117\u211F\u2126\u212F\u2132\u2135\u2140" +
        "\u2141\u2147\u2185\u2C02\u2C30\u2C62\u2C66\u2C69\u2C72\u2C74\u2C77\u2C80" +
        "\u2C82\u2C84\u2CE4\u2CED\u2CEF\u2CF4\uA642\uA644\uA66E\uA682\uA69C\uA724" +
        "\uA730\uA734\uA770\uA77B\uA788\uA78D\uA78F\uA792\uA794\uA798\uA7AF\uA7B2" +
        "\uA7B3\uFF23\uFF3CS\x02c|\xB7\xF8\xFA\u0101\u0103\u0179\u017C\u0182\u0185" +
        "\u0187\u018A\u0194\u0197\u019D\u01A0\u01A3\u01A5\u01A7\u01AA\u01AF\u01B2" +
        "\u01B6\u01B8\u01C1\u01C8\u01CE\u01D0\u01F5\u01F7\u01FB\u01FD\u023B\u023E" +
        "\u0244\u0249\u0295\u0297\u02B1\u0373\u0375\u0379\u037F\u0392\u03D0\u03D2" +
        "\u03D3\u03D7\u03D9\u03DB\u03F5\u03F7\u0461\u0463\u0483\u048D\u04C1\u04C4" +
        "\u0531\u0563\u0589\u1D02\u1D2D\u1D6D\u1D79\u1D7B\u1D9C\u1E03\u1E9F\u1EA1" +
        "\u1F09\u1F12\u1F17\u1F22\u1F29\u1F32\u1F39\u1F42\u1F47\u1F52\u1F59\u1F62" +
        "\u1F69\u1F72\u1F7F\u1F82\u1F89\u1F92\u1F99\u1FA2\u1FA9\u1FB2\u1FB6\u1FB8" +
        "\u1FB9\u1FC0\u1FC6\u1FC8\u1FC9\u1FD2\u1FD5\u1FD8\u1FD9\u1FE2\u1FE9\u1FF4" +
        "\u1FF6\u1FF8\u1FF9\u210C\u2115\u2131\u213B\u213E\u213F\u2148\u214B\u2150" +
        "\u2186\u2C32\u2C60\u2C63\u2C6E\u2C73\u2C7D\u2C83\u2CEE\u2CF0\u2CF5\u2D02" +
        "\u2D27\u2D29\u2D2F\uA643\uA66F\uA683\uA69D\uA725\uA733\uA735\uA77A\uA77C" +
        "\uA77E\uA781\uA789\uA78E\uA790\uA793\uA797\uA799\uA7AB\uA7FC\uAB5C\uAB66" +
        "\uAB67\uFB02\uFB08\uFB15\uFB19\uFF43\uFF5C\b\x02\u01C7\u01CD\u01F4\u1F91" +
        "\u1F9A\u1FA1\u1FAA\u1FB1\u1FBE\u1FCE\u1FFE\u1FFE#\x02\u02B2\u02C3\u02C8" +
        "\u02D3\u02E2\u02E6\u02EE\u02F0\u0376\u037C\u055B\u0642\u06E7\u06E8\u07F6" +
        "\u07F7\u07FC\u081C\u0826\u082A\u0973\u0E48\u0EC8\u10FE\u17D9\u1845\u1AA9" +
        "\u1C7F\u1D2E\u1D6C\u1D7A\u1DC1\u2073\u2081\u2092\u209E\u2C7E\u2C7F\u2D71" +
        "\u2E31\u3007\u3037\u303D\u3100\uA017\uA4FF\uA60E\uA681\uA69E\uA69F\uA719" +
        "\uA721\uA772\uA78A\uA7FA\uA7FB\uA9D1\uA9E8\uAA72\uAADF\uAAF5\uAAF6\uAB5E" +
        "\uAB61\uFF72\uFFA1\xEC\x02\xAC\xBC\u01BD\u01C5\u0296\u05EC\u05F2\u05F4" +
        "\u0622\u0641\u0643\u064C\u0670\u0671\u0673\u06D5\u06D7\u06FE\u0701\u0712" +
        "\u0714\u0731\u074F\u07A7\u07B3\u07EC\u0802\u0817\u0842\u085A\u08A2\u08B4" +
        "\u0906\u093B\u093F\u0952\u095A\u0963\u0974\u0982\u0987\u098E\u0991\u0992" +
        "\u0995\u09AA\u09AC\u09B2\u09B4\u09BB\u09BF\u09D0\u09DE\u09DF\u09E1\u09E3" +
        "\u09F2\u09F3\u0A07\u0A0C\u0A11\u0A12\u0A15\u0A2A\u0A2C\u0A32\u0A34\u0A35" +
        "\u0A37\u0A38\u0A3A\u0A3B\u0A5B\u0A5E\u0A60\u0A76\u0A87\u0A8F\u0A91\u0A93" +
        "\u0A95\u0AAA\u0AAC\u0AB2\u0AB4\u0AB5\u0AB7\u0ABB\u0ABF\u0AD2\u0AE2\u0AE3" +
        "\u0B07\u0B0E\u0B11\u0B12\u0B15\u0B2A\u0B2C\u0B32\u0B34\u0B35\u0B37\u0B3B" +
        "\u0B3F\u0B63\u0B73\u0B85\u0B87\u0B8C\u0B90\u0B92\u0B94\u0B97\u0B9B\u0B9C" +
        "\u0B9E\u0BAC\u0BB0\u0BBB\u0BD2\u0C0E\u0C10\u0C12\u0C14\u0C2A\u0C2C\u0C3B" +
        "\u0C3F\u0C8E\u0C90\u0C92\u0C94\u0CAA\u0CAC\u0CB5\u0CB7\u0CBB\u0CBF\u0CE0" +
        "\u0CE2\u0CE3\u0CF3\u0CF4\u0D07\u0D0E\u0D10\u0D12\u0D14\u0D3C\u0D3F\u0D50" +
        "\u0D62\u0D63\u0D7C\u0D81\u0D87\u0D98\u0D9C\u0DB3\u0DB5\u0DBD\u0DBF\u0DC8" +
        "\u0E03\u0E32\u0E34\u0E35\u0E42\u0E47\u0E83\u0E84\u0E86\u0E8C\u0E8F\u0E99" +
        "\u0E9B\u0EA1\u0EA3\u0EA5\u0EA7\u0EA9\u0EAC\u0EAD\u0EAF\u0EB2\u0EB4\u0EB5" +
        "\u0EBF\u0EC6\u0EDE\u0EE1\u0F02\u0F49\u0F4B\u0F6E\u0F8A\u0F8E\u1002\u102C" +
        "\u1041\u1057\u105C\u105F\u1063\u1072\u1077\u1083\u1090\u10FC\u10FF\u124A" +
        "\u124C\u124F\u1252\u1258\u125A\u125F\u1262\u128A\u128C\u128F\u1292\u12B2" +
        "\u12B4\u12B7\u12BA\u12C0\u12C2\u12C7\u12CA\u12D8\u12DA\u1312\u1314\u1317" +
        "\u131A\u135C\u1382\u1391\u13A2\u13F6\u1403\u166E\u1671\u1681\u1683\u169C" +
        "\u16A2\u16EC\u16F3\u16FA\u1702\u170E\u1710\u1713\u1722\u1733\u1742\u1753" +
        "\u1762\u176E\u1770\u1772\u1782\u17B5\u17DE\u1844\u1846\u1879\u1882\u18AA" +
        "\u18AC\u18F7\u1902\u1920\u1952\u196F\u1972\u1976\u1982\u19AD\u19C3\u19C9" +
        "\u1A02\u1A18\u1A22\u1A56\u1B07\u1B35\u1B47\u1B4D\u1B85\u1BA2\u1BB0\u1BB1" +
        "\u1BBC\u1BE7\u1C02\u1C25\u1C4F\u1C51\u1C5C\u1C79\u1CEB\u1CEE\u1CF0\u1CF3" +
        "\u1CF7\u1CF8\u2137\u213A\u2D32\u2D69\u2D82\u2D98\u2DA2\u2DA8\u2DAA\u2DB0" +
        "\u2DB2\u2DB8\u2DBA\u2DC0\u2DC2\u2DC8\u2DCA\u2DD0\u2DD2\u2DD8\u2DDA\u2DE0" +
        "\u3008\u303E\u3043\u3098\u30A1\u30FC\u3101\u312F\u3133\u3190\u31A2\u31BC" +
        "\u31F2\u3201\u3402\u4DB7\u4E02\u9FCE\uA002\uA016\uA018\uA48E\uA4D2\uA4F9" +
        "\uA502\uA60D\uA612\uA621\uA62C\uA62D\uA670\uA6E7\uA7F9\uA803\uA805\uA807" +
        "\uA809\uA80C\uA80E\uA824\uA842\uA875\uA884\uA8B5\uA8F4\uA8F9\uA8FD\uA927" +
        "\uA932\uA948\uA962\uA97E\uA986\uA9B4\uA9E2\uA9E6\uA9E9\uA9F1\uA9FC\uAA00" +
        "\uAA02\uAA2A\uAA42\uAA44\uAA46\uAA4D\uAA62\uAA71\uAA73\uAA78\uAA7C\uAAB1" +
        "\uAAB3\uAABF\uAAC2\uAAC4\uAADD\uAADE\uAAE2\uAAEC\uAAF4\uAB08\uAB0B\uAB10" +
        "\uAB13\uAB18\uAB22\uAB28\uAB2A\uAB30\uABC2\uABE4\uAC02\uD7A5\uD7B2\uD7C8" +
        "\uD7CD\uD7FD\uF902\uFA6F\uFA72\uFADB\uFB1F\uFB2A\uFB2C\uFB38\uFB3A\uFB3E" +
        "\uFB40\uFBB3\uFBD5\uFD3F\uFD52\uFD91\uFD94\uFDC9\uFDF2\uFDFD\uFE72\uFE76" +
        "\uFE78\uFEFE\uFF68\uFF71\uFF73\uFF9F\uFFA2\uFFC0\uFFC4\uFFC9\uFFCC\uFFD1" +
        "\uFFD4\uFFD9\uFFDC\uFFDE\'\x022;\u0662\u066B\u06F2\u06FB\u07C2\u07CB\u0968" +
        "\u0971\u09E8\u09F1\u0A68\u0A71\u0AE8\u0AF1\u0B68\u0B71\u0BE8\u0BF1\u0C68" +
        "\u0C71\u0CE8\u0CF1\u0D68\u0D71\u0DE8\u0DF1\u0E52\u0E5B\u0ED2\u0EDB\u0F22" +
        "\u0F2B\u1042\u104B\u1092\u109B\u17E2\u17EB\u1812\u181B\u1948\u1951\u19D2" +
        "\u19DB\u1A82\u1A8B\u1A92\u1A9B\u1B52\u1B5B\u1BB2\u1BBB\u1C42\u1C4B\u1C52" +
        "\u1C5B\uA622\uA62B\uA8D2\uA8DB\uA902\uA90B\uA9D2\uA9DB\uA9F2\uA9FB\uAA52" +
        "\uAA5B\uABF2\uABFB\uFF12\uFF1B\x02\u02A0\x03\xE5\x03\x02\x02\x02\x05\xE7" +
        "\x03\x02\x02\x02\x07\xE9\x03\x02\x02\x02\t\xEB\x03\x02\x02\x02\v\xFA\x03" +
        "\x02\x02\x02\r\u0108\x03\x02\x02\x02\x0F\u0111\x03\x02\x02\x02\x11\u012F" +
        "\x03\x02\x02\x02\x13\u0136\x03\x02\x02\x02\x15\u0139\x03\x02\x02\x02\x17" +
        "\u014E\x03\x02\x02\x02\x19\u0150\x03\x02\x02\x02\x1B\u0154\x03\x02\x02" +
        "\x02\x1D\u0160\x03\x02\x02\x02\x1F\u0162\x03\x02\x02\x02!\u0167\x03\x02" +
        "\x02\x02#\u016C\x03\x02\x02\x02%\u0171\x03\x02\x02\x02\'\u0176\x03\x02" +
        "\x02\x02)\u017A\x03\x02\x02\x02+\u017C\x03\x02\x02\x02-\u017E\x03\x02" +
        "\x02\x02/\u0180\x03\x02\x02\x021\u0184\x03\x02\x02\x023\u0186\x03\x02" +
        "\x02\x025\u018D\x03\x02\x02\x027\u0197\x03\x02\x02\x029\u01A1\x03\x02" +
        "\x02\x02;\u01C4\x03\x02\x02\x02=\u01C6\x03\x02\x02\x02?\u01CC\x03\x02" +
        "\x02\x02A\u01CE\x03\x02\x02\x02C\u01DF\x03\x02\x02\x02E\u01E1\x03\x02" +
        "\x02\x02G\u01EB\x03\x02\x02\x02I\u01ED\x03\x02\x02\x02K\u01F1\x03\x02" +
        "\x02\x02M\u01F5\x03\x02\x02\x02O\u01FC\x03\x02\x02\x02Q\u01FE\x03\x02" +
        "\x02\x02S\u0206\x03\x02\x02\x02U\u020B\x03\x02\x02\x02W\u0211\x03\x02" +
        "\x02\x02Y\u0215\x03\x02\x02\x02[\u021A\x03\x02\x02\x02]\u021F\x03\x02" +
        "\x02\x02_\u0225\x03\x02\x02\x02a\u022C\x03\x02\x02\x02c\u0231\x03\x02" +
        "\x02\x02e\u0237\x03\x02\x02\x02g\u0239\x03\x02\x02\x02i\u023B\x03\x02" +
        "\x02\x02k\u023E\x03\x02\x02\x02m\u0240\x03\x02\x02\x02o\u0242\x03\x02" +
        "\x02\x02q\u0244\x03\x02\x02\x02s\u0246\x03\x02\x02\x02u\u0248\x03\x02" +
        "\x02\x02w\u024A\x03\x02\x02\x02y\u024C\x03\x02\x02\x02{\u024E\x03\x02" +
        "\x02\x02}\u0250\x03\x02\x02\x02\x7F\u0253\x03\x02\x02\x02\x81\u0255\x03" +
        "\x02\x02\x02\x83\u0257\x03\x02\x02\x02\x85\u025A\x03\x02\x02\x02\x87\u025D" +
        "\x03\x02\x02\x02\x89\u025F\x03\x02\x02\x02\x8B\u0262\x03\x02\x02\x02\x8D" +
        "\u0264\x03\x02\x02\x02\x8F\u0266\x03\x02\x02\x02\x91\u0268\x03\x02\x02" +
        "\x02\x93\u026A\x03\x02\x02\x02\x95\u026C\x03\x02\x02\x02\x97\u026E\x03" +
        "\x02\x02\x02\x99\u0270\x03\x02\x02\x02\x9B\u0272\x03\x02\x02\x02\x9D\u0275" +
        "\x03\x02\x02\x02\x9F\u0278\x03\x02\x02\x02\xA1\u027B\x03\x02\x02\x02\xA3" +
        "\u027E\x03\x02\x02\x02\xA5\u0281\x03\x02\x02\x02\xA7\u0284\x03\x02\x02" +
        "\x02\xA9\u0287\x03\x02\x02\x02\xAB\u028A\x03\x02\x02\x02\xAD\u028E\x03" +
        "\x02\x02\x02\xAF\u0292\x03\x02\x02\x02\xB1\u0297\x03\x02\x02\x02\xB3\u0299" +
        "\x03\x02\x02\x02\xB5\u029B\x03\x02\x02\x02\xB7\u029D\x03\x02\x02\x02\xB9" +
        "\u02A0\x03\x02\x02\x02\xBB\u02A3\x03\x02\x02\x02\xBD\u02A6\x03\x02\x02" +
        "\x02\xBF\u02A9\x03\x02\x02\x02\xC1\u02AC\x03\x02\x02\x02\xC3\u02AF\x03" +
        "\x02\x02\x02\xC5\u02B1\x03\x02\x02\x02\xC7\u02B3\x03\x02\x02\x02\xC9\u02B5" +
        "\x03\x02\x02\x02\xCB\u02B7\x03\x02\x02\x02\xCD\u02BA\x03\x02\x02\x02\xCF" +
        "\u02BE\x03\x02\x02\x02\xD1\u02C0\x03\x02\x02\x02\xD3\u02C2\x03\x02\x02" +
        "\x02\xD5\u02C9\x03\x02\x02\x02\xD7\u02CB\x03\x02\x02\x02\xD9\u02CD\x03" +
        "\x02\x02\x02\xDB\u02CF\x03\x02\x02\x02\xDD\u02D1\x03\x02\x02\x02\xDF\u02D3" +
        "\x03\x02\x02\x02\xE1\u02D5\x03\x02\x02\x02\xE3\xE6\x05\x05\x03\x02\xE4" +
        "\xE6\x05\x07\x04\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6" +
        "\x04\x03\x02\x02\x02\xE7\xE8\t\x02\x02\x02\xE8\x06\x03\x02\x02\x02\xE9" +
        "\xEA\t\x03\x02\x02\xEA\b\x03\x02\x02\x02\xEB\xEC\x071\x02\x02\xEC\xED" +
        "\x07,\x02\x02\xED\xEE\x07,\x02\x02\xEE\xF2\x03\x02\x02\x02\xEF\xF1\v\x02" +
        "\x02\x02\xF0\xEF\x03\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF3\x03\x02" +
        "\x02\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF8\x03\x02\x02\x02\xF4\xF2\x03\x02" +
        "\x02\x02\xF5\xF6\x07,\x02\x02\xF6\xF9\x071\x02\x02\xF7\xF9\x07\x02\x02" +
        "\x03\xF8\xF5\x03\x02\x02\x02\xF8\xF7\x03\x02\x02\x02\xF9\n\x03\x02\x02" +
        "\x02\xFA\xFB\x071\x02\x02\xFB\xFC\x07,\x02\x02\xFC\u0100\x03\x02\x02\x02" +
        "\xFD\xFF\v\x02\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02" +
        "\u0100\u0101\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0106\x03" +
        "\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103\u0104\x07,\x02\x02\u0104" +
        "\u0107\x071\x02\x02\u0105\u0107\x07\x02\x02\x03\u0106\u0103\x03\x02\x02" +
        "\x02\u0106\u0105\x03\x02\x02\x02\u0107\f\x03\x02\x02\x02\u0108\u0109\x07" +
        "1\x02\x02\u0109\u010A\x071\x02\x02\u010A\u010E\x03\x02\x02\x02\u010B\u010D" +
        "\n\x04\x02\x02\u010C\u010B\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02" +
        "\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\x0E\x03" +
        "\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0112\x071\x02\x02\u0112" +
        "\u0113\x071\x02\x02\u0113\u0117\x03\x02\x02\x02\u0114\u0116\n\x05\x02" +
        "\x02\u0115\u0114\x03\x02\x02\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0115" +
        "\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u012C\x03\x02\x02\x02" +
        "\u0119\u0117\x03\x02\x02\x02\u011A\u011E\x07\f\x02\x02\u011B\u011D\x05" +
        "\x05\x03\x02\u011C\u011B\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E" +
        "\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0121\x03\x02" +
        "\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0122\x071\x02\x02\u0122\u0123" +
        "\x071\x02\x02\u0123\u0127\x03\x02\x02\x02\u0124\u0126\n\x05\x02\x02\u0125" +
        "\u0124\x03\x02\x02\x02\u0126\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02" +
        "\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129" +
        "\u0127\x03\x02\x02\x02\u012A\u011A\x03\x02\x02\x02\u012B\u012E\x03\x02" +
        "\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D" +
        "\x10\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0134\x05e3\x02" +
        "\u0130\u0135\t\x06\x02\x02\u0131\u0135\x05\x15\v\x02\u0132\u0135\v\x02" +
        "\x02\x02\u0133\u0135\x07\x02\x02\x03\u0134\u0130\x03\x02\x02\x02\u0134" +
        "\u0131\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0133\x03\x02" +
        "\x02\x02\u0135\x12\x03\x02\x02\x02\u0136\u0137\x05e3\x02\u0137\u0138\v" +
        "\x02\x02\x02\u0138\x14\x03\x02\x02\x02\u0139\u0144\x07w\x02\x02\u013A" +
        "\u0142\x05)\x15\x02\u013B\u0140\x05)\x15\x02\u013C\u013E\x05)\x15\x02" +
        "\u013D\u013F\x05)\x15\x02\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03" +
        "\x02\x02\x02\u013F\u0141\x03\x02\x02\x02\u0140\u013C\x03\x02\x02\x02\u0140" +
        "\u0141\x03\x02\x02\x02\u0141\u0143\x03\x02\x02\x02\u0142\u013B\x03\x02" +
        "\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0145\x03\x02\x02\x02\u0144" +
        "\u013A\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\x16\x03\x02\x02" +
        "\x02\u0146\u014F\x05-\x17\x02\u0147\u0148\x05-\x17\x02\u0148\u0149\x05" +
        "-\x17\x02\u0149\u014F\x03\x02\x02\x02\u014A\u014B\t\x07\x02\x02\u014B" +
        "\u014C\x05-\x17\x02\u014C\u014D\x05-\x17\x02\u014D\u014F\x03\x02\x02\x02" +
        "\u014E\u0146\x03\x02\x02\x02\u014E\u0147\x03\x02\x02\x02\u014E\u014A\x03" +
        "\x02\x02\x02\u014F\x18\x03\x02\x02\x02\u0150\u0151\x072\x02\x02\u0151" +
        "\u0152\t\b\x02\x02\u0152\u0153\x05!\x11\x02\u0153\x1A\x03\x02\x02\x02" +
        "\u0154\u0155\x072\x02\x02\u0155\u0156\x07a\x02\x02\u0156\u0157\x05%\x13" +
        "\x02\u0157\x1C\x03\x02\x02\x02\u0158\u0161\x072\x02\x02\u0159\u015D\t" +
        "\t\x02\x02\u015A\u015C\x05+\x16\x02\u015B\u015A\x03\x02\x02\x02\u015C" +
        "\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02" +
        "\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160" +
        "\u0158\x03\x02\x02\x02\u0160\u0159\x03\x02\x02\x02\u0161\x1E\x03\x02\x02" +
        "\x02\u0162\u0163\x072\x02\x02\u0163\u0164\t\n\x02\x02\u0164\u0165\x05" +
        "\'\x14\x02\u0165 \x03\x02\x02\x02\u0166\u0168\x05)\x15\x02\u0167\u0166" +
        "\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02" +
        "\u0169\u016A\x03\x02\x02\x02\u016A\"\x03\x02\x02\x02\u016B\u016D\x05+" +
        "\x16\x02\u016C\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E" +
        "\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F$\x03\x02\x02" +
        "\x02\u0170\u0172\x05-\x17\x02\u0171\u0170\x03\x02\x02\x02\u0172\u0173" +
        "\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02" +
        "\u0174&\x03\x02\x02\x02\u0175\u0177\x05/\x18\x02\u0176\u0175\x03\x02\x02" +
        "\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179" +
        "\x03\x02\x02\x02\u0179(\x03\x02\x02\x02\u017A\u017B\t\v\x02\x02\u017B" +
        "*\x03\x02\x02\x02\u017C\u017D\t\f\x02\x02\u017D,\x03\x02\x02\x02\u017E" +
        "\u017F\t\r\x02\x02\u017F.\x03\x02\x02\x02\u0180\u0181\t\x0E\x02\x02\u0181" +
        "0\x03\x02\x02\x02\u0182\u0185\x05a1\x02\u0183\u0185\x05c2\x02\u0184\u0182" +
        "\x03\x02\x02\x02\u0184\u0183\x03\x02\x02\x02\u01852\x03\x02\x02\x02\u0186" +
        "\u0189\x05k6\x02\u0187\u018A\x05\x11\t\x02\u0188\u018A\n\x0F\x02\x02\u0189" +
        "\u0187\x03\x02\x02\x02\u0189\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02" +
        "\x02\x02\u018B\u018C\x05k6\x02\u018C4\x03\x02\x02\x02\u018D\u0192\x05" +
        "k6\x02\u018E\u0191\x05\x11\t\x02\u018F\u0191\n\x0F\x02\x02\u0190\u018E" +
        "\x03\x02\x02\x02\u0190\u018F\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02" +
        "\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0195\x03" +
        "\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0196\x05k6\x02\u01966" +
        "\x03\x02\x02\x02\u0197\u019C\x05m7\x02\u0198\u019B\x05\x11\t\x02\u0199" +
        "\u019B\n\x10\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u0199\x03\x02\x02" +
        "\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019D" +
        "\x03\x02\x02";
    LexBasic._serializedATNSegment1 = "\x02\u019D\u019F\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A0" +
        "\x05m7\x02\u01A08\x03\x02\x02\x02\u01A1\u01A6\x05k6\x02\u01A2\u01A5\x05" +
        "\x11\t\x02\u01A3\u01A5\n\x0F\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4" +
        "\u01A3\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02" +
        "\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7:\x03\x02\x02\x02\u01A8\u01A6" +
        "\x03\x02\x02\x02\u01A9\u01AA\x05#\x12\x02\u01AA\u01AC\x05\xC9e\x02\u01AB" +
        "\u01AD\x05#\x12\x02\u01AC\u01AB\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02" +
        "\x02\u01AD\u01AF\x03\x02\x02\x02\u01AE\u01B0\x05=\x1F\x02\u01AF\u01AE" +
        "\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B2\x03\x02\x02\x02" +
        "\u01B1\u01B3\x05? \x02\u01B2\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02" +
        "\x02\x02\u01B3\u01C5\x03\x02\x02\x02\u01B4\u01B5\x05\xC9e\x02\u01B5\u01B7" +
        "\x05#\x12\x02\u01B6\u01B8\x05=\x1F\x02\u01B7\u01B6\x03\x02\x02\x02\u01B7" +
        "\u01B8\x03\x02\x02\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9\u01BB\x05? \x02" +
        "\u01BA\u01B9\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01C5\x03" +
        "\x02\x02\x02\u01BC\u01BD\x05#\x12\x02\u01BD\u01BF\x05=\x1F\x02\u01BE\u01C0" +
        "\x05? \x02\u01BF\u01BE\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0" +
        "\u01C5\x03\x02\x02\x02\u01C1\u01C2\x05#\x12\x02\u01C2\u01C3\x05? \x02" +
        "\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01A9\x03\x02\x02\x02\u01C4\u01B4\x03" +
        "\x02\x02\x02\u01C4\u01BC\x03\x02\x02\x02\u01C4\u01C1\x03\x02\x02\x02\u01C5" +
        "<\x03\x02\x02\x02\u01C6\u01C8\t\x11\x02\x02\u01C7\u01C9\t\x12\x02\x02" +
        "\u01C8\u01C7\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x03" +
        "\x02\x02\x02\u01CA\u01CB\x05#\x12\x02\u01CB>\x03\x02\x02\x02\u01CC\u01CD" +
        "\t\x13\x02\x02\u01CD@\x03\x02\x02\x02\u01CE\u01CF\x05C\"\x02\u01CF\u01D1" +
        "\x05E#\x02\u01D0\u01D2\x05? \x02\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2" +
        "\x03\x02\x02\x02\u01D2B\x03\x02\x02\x02\u01D3\u01D5\x05\x19\r\x02\u01D4" +
        "\u01D6\x05\xC9e\x02\u01D5\u01D4\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02" +
        "\x02\u01D6\u01E0\x03\x02\x02\x02\u01D7\u01D8\x072\x02\x02\u01D8\u01DA" +
        "\t\b\x02\x02\u01D9\u01DB\x05!\x11\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA" +
        "\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DD\x05\xC9" +
        "e\x02\u01DD\u01DE\x05!\x11\x02\u01DE\u01E0\x03\x02\x02\x02\u01DF\u01D3" +
        "\x03\x02\x02\x02\u01DF\u01D7\x03\x02\x02\x02\u01E0D\x03\x02\x02\x02\u01E1" +
        "\u01E3\t\x14\x02\x02\u01E2\u01E4\t\x12\x02\x02\u01E3\u01E2\x03\x02\x02" +
        "\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E6" +
        "\x05#\x12\x02\u01E6F\x03\x02\x02\x02\u01E7\u01EC\x05I%\x02\u01E8\u01EC" +
        "\x042;\x02\u01E9\u01EC\x05\xB1Y\x02\u01EA\u01EC\t\x15\x02\x02\u01EB\u01E7" +
        "\x03\x02\x02\x02\u01EB\u01E8\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02" +
        "\u01EB\u01EA\x03\x02\x02\x02\u01ECH\x03\x02\x02\x02\u01ED\u01EE\t\x16" +
        "\x02\x02\u01EEJ\x03\x02\x02\x02\u01EF\u01F2\t\x17\x02\x02\u01F0\u01F2" +
        "\x05O(\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F0\x03\x02\x02\x02\u01F2" +
        "L\x03\x02\x02\x02\u01F3\u01F6\t\x18\x02\x02\u01F4\u01F6\x05O(\x02\u01F5" +
        "\u01F3\x03\x02\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F6N\x03\x02\x02" +
        "\x02\u01F7\u01F8\n\x19\x02\x02\u01F8\u01FD\x06(\x02\x02\u01F9\u01FA\t" +
        "\x1A\x02\x02\u01FA\u01FB\t\x1B\x02\x02\u01FB\u01FD\x06(\x03\x02\u01FC" +
        "\u01F7\x03\x02\x02\x02\u01FC\u01F9\x03\x02\x02\x02\u01FDP\x03\x02\x02" +
        "\x02\u01FE\u01FF\x07d\x02\x02\u01FF\u0200\x07q\x02\x02\u0200\u0201\x07" +
        "q\x02\x02\u0201\u0202\x07n\x02\x02\u0202\u0203\x07g\x02\x02\u0203\u0204" +
        "\x07c\x02\x02\u0204\u0205\x07p\x02\x02\u0205R\x03\x02\x02\x02\u0206\u0207" +
        "\x07d\x02\x02\u0207\u0208\x07{\x02\x02\u0208\u0209\x07v\x02\x02\u0209" +
        "\u020A\x07g\x02\x02\u020AT\x03\x02\x02\x02\u020B\u020C\x07u\x02\x02\u020C" +
        "\u020D\x07j\x02\x02\u020D\u020E\x07q\x02\x02\u020E\u020F\x07t\x02\x02" +
        "\u020F\u0210\x07v\x02\x02\u0210V\x03\x02\x02\x02\u0211\u0212\x07k\x02" +
        "\x02\u0212\u0213\x07p\x02\x02\u0213\u0214\x07v\x02\x02\u0214X\x03\x02" +
        "\x02\x02\u0215\u0216\x07n\x02\x02\u0216\u0217\x07q\x02\x02\u0217\u0218" +
        "\x07p\x02\x02\u0218\u0219\x07i\x02\x02\u0219Z\x03\x02\x02\x02\u021A\u021B" +
        "\x07e\x02\x02\u021B\u021C\x07j\x02\x02\u021C\u021D\x07c\x02\x02\u021D" +
        "\u021E\x07t\x02\x02\u021E\\\x03\x02\x02\x02\u021F\u0220\x07h\x02\x02\u0220" +
        "\u0221\x07n\x02\x02\u0221\u0222\x07q\x02\x02\u0222\u0223\x07c\x02\x02" +
        "\u0223\u0224\x07v\x02\x02\u0224^\x03\x02\x02\x02\u0225\u0226\x07f\x02" +
        "\x02\u0226\u0227\x07q\x02\x02\u0227\u0228\x07w\x02\x02\u0228\u0229\x07" +
        "d\x02\x02\u0229\u022A\x07n\x02\x02\u022A\u022B\x07g\x02\x02\u022B`\x03" +
        "\x02\x02\x02\u022C\u022D\x07v\x02\x02\u022D\u022E\x07t\x02\x02\u022E\u022F" +
        "\x07w\x02\x02\u022F\u0230\x07g\x02\x02\u0230b\x03\x02\x02\x02\u0231\u0232" +
        "\x07h\x02\x02\u0232\u0233\x07c\x02\x02\u0233\u0234\x07n\x02\x02\u0234" +
        "\u0235\x07u\x02\x02\u0235\u0236\x07g\x02\x02\u0236d\x03\x02\x02\x02\u0237" +
        "\u0238\x07^\x02\x02\u0238f\x03\x02\x02\x02\u0239\u023A\x07<\x02\x02\u023A" +
        "h\x03\x02\x02\x02\u023B\u023C\x07<\x02\x02\u023C\u023D\x07<\x02\x02\u023D" +
        "j\x03\x02\x02\x02\u023E\u023F\x07)\x02\x02\u023Fl\x03\x02\x02\x02\u0240" +
        "\u0241\x07$\x02\x02\u0241n\x03\x02\x02\x02\u0242\u0243\x07b\x02\x02\u0243" +
        "p\x03\x02\x02\x02\u0244\u0245\x07*\x02\x02\u0245r\x03\x02\x02\x02\u0246" +
        "\u0247\x07+\x02\x02\u0247t\x03\x02\x02\x02\u0248\u0249\x07}\x02\x02\u0249" +
        "v\x03\x02\x02\x02\u024A\u024B\x07\x7F\x02\x02\u024Bx\x03\x02\x02\x02\u024C" +
        "\u024D\x07]\x02\x02\u024Dz\x03\x02\x02\x02\u024E\u024F\x07_\x02\x02\u024F" +
        "|\x03\x02\x02\x02\u0250\u0251\x07/\x02\x02\u0251\u0252\x07@\x02\x02\u0252" +
        "~\x03\x02\x02\x02\u0253\u0254\x07>\x02\x02\u0254\x80\x03\x02\x02\x02\u0255" +
        "\u0256\x07@\x02\x02\u0256\x82\x03\x02\x02\x02\u0257\u0258\x07>\x02\x02" +
        "\u0258\u0259\x07?\x02\x02\u0259\x84\x03\x02\x02\x02\u025A\u025B\x07@\x02" +
        "\x02\u025B\u025C\x07?\x02\x02\u025C\x86\x03\x02\x02\x02\u025D\u025E\x07" +
        "?\x02\x02\u025E\x88\x03\x02\x02\x02\u025F\u0260\x07#\x02\x02\u0260\u0261" +
        "\x07?\x02\x02\u0261\x8A\x03\x02\x02\x02\u0262\u0263\x07A\x02\x02\u0263" +
        "\x8C\x03\x02\x02\x02\u0264\u0265\x07#\x02\x02\u0265\x8E\x03\x02\x02\x02" +
        "\u0266\u0267\x07,\x02\x02\u0267\x90\x03\x02\x02\x02\u0268\u0269\x071\x02" +
        "\x02\u0269\x92\x03\x02\x02\x02\u026A\u026B\x07\'\x02\x02\u026B\x94\x03" +
        "\x02\x02\x02\u026C\u026D\x07`\x02\x02\u026D\x96\x03\x02\x02\x02\u026E" +
        "\u026F\x07-\x02\x02\u026F\x98\x03\x02\x02\x02\u0270\u0271\x07/\x02\x02" +
        "\u0271\x9A\x03\x02\x02\x02\u0272\u0273\x07-\x02\x02\u0273\u0274\x07?\x02" +
        "\x02\u0274\x9C\x03\x02\x02\x02\u0275\u0276\x07/\x02\x02\u0276\u0277\x07" +
        "?\x02\x02\u0277\x9E\x03\x02\x02\x02\u0278\u0279\x07,\x02\x02\u0279\u027A" +
        "\x07?\x02\x02\u027A\xA0\x03\x02\x02\x02\u027B\u027C\x071\x02\x02\u027C" +
        "\u027D\x07?\x02\x02\u027D\xA2\x03\x02\x02\x02\u027E\u027F\x07(\x02\x02" +
        "\u027F\u0280\x07?\x02\x02\u0280\xA4\x03\x02\x02\x02\u0281\u0282\x07~\x02" +
        "\x02\u0282\u0283\x07?\x02\x02\u0283\xA6\x03\x02\x02\x02\u0284\u0285\x07" +
        "`\x02\x02\u0285\u0286\x07?\x02\x02\u0286\xA8\x03\x02\x02\x02\u0287\u0288" +
        "\x07\'\x02\x02\u0288\u0289\x07?\x02\x02\u0289\xAA\x03\x02\x02\x02\u028A" +
        "\u028B\x07>\x02\x02\u028B\u028C\x07>\x02\x02\u028C\u028D\x07?\x02\x02" +
        "\u028D\xAC\x03\x02\x02\x02\u028E\u028F\x07@\x02\x02\u028F\u0290\x07@\x02" +
        "\x02\u0290\u0291\x07?\x02\x02\u0291\xAE\x03\x02\x02\x02\u0292\u0293\x07" +
        "@\x02\x02\u0293\u0294\x07@\x02\x02\u0294\u0295\x07@\x02\x02\u0295\u0296" +
        "\x07?\x02\x02\u0296\xB0\x03\x02\x02\x02\u0297\u0298\x07a\x02\x02\u0298" +
        "\xB2\x03\x02\x02\x02\u0299\u029A\x07~\x02\x02\u029A\xB4\x03\x02\x02\x02" +
        "\u029B\u029C\x07(\x02\x02\u029C\xB6\x03\x02\x02\x02\u029D\u029E\x07(\x02" +
        "\x02\u029E\u029F\x07(\x02\x02\u029F\xB8\x03\x02\x02\x02\u02A0\u02A1\x07" +
        "~\x02\x02\u02A1\u02A2\x07~\x02\x02\u02A2\xBA\x03\x02\x02\x02\u02A3\u02A4" +
        "\x07-\x02\x02\u02A4\u02A5\x07-\x02\x02\u02A5\xBC\x03\x02\x02\x02\u02A6" +
        "\u02A7\x07/\x02\x02\u02A7\u02A8\x07/\x02\x02\u02A8\xBE\x03\x02\x02\x02" +
        "\u02A9\u02AA\x07>\x02\x02\u02AA\u02AB\x07>\x02\x02\u02AB\xC0\x03\x02\x02" +
        "\x02\u02AC\u02AD\x07@\x02\x02\u02AD\u02AE\x07@\x02\x02\u02AE\xC2\x03\x02" +
        "\x02\x02\u02AF\u02B0\x07&\x02\x02\u02B0\xC4\x03\x02\x02\x02\u02B1\u02B2" +
        "\x07.\x02\x02\u02B2\xC6\x03\x02\x02\x02\u02B3\u02B4\x07=\x02\x02\u02B4" +
        "\xC8\x03\x02\x02\x02\u02B5\u02B6\x070\x02\x02\u02B6\xCA\x03\x02\x02\x02" +
        "\u02B7\u02B8\x070\x02\x02\u02B8\u02B9\x070\x02\x02\u02B9\xCC\x03\x02\x02" +
        "\x02\u02BA\u02BB\x070\x02\x02\u02BB\u02BC\x070\x02\x02\u02BC\u02BD\x07" +
        "0\x02\x02\u02BD\xCE\x03\x02\x02\x02\u02BE\u02BF\x07B\x02\x02\u02BF\xD0" +
        "\x03\x02\x02\x02\u02C0\u02C1\x07%\x02\x02\u02C1\xD2\x03\x02\x02\x02\u02C2" +
        "\u02C3\x07\x80\x02\x02\u02C3\xD4\x03\x02\x02\x02\u02C4\u02CA\x05\xD7l" +
        "\x02\u02C5\u02CA\x05\xD9m\x02\u02C6\u02CA\x05\xDBn\x02\u02C7\u02CA\x05" +
        "\xDDo\x02\u02C8\u02CA\x05\xDFp\x02\u02C9\u02C4\x03\x02\x02\x02\u02C9\u02C5" +
        "\x03\x02\x02\x02\u02C9\u02C6\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02" +
        "\u02C9\u02C8\x03\x02\x02\x02\u02CA\xD6\x03\x02\x02\x02\u02CB\u02CC\t\x1C" +
        "\x02\x02\u02CC\xD8\x03\x02\x02\x02\u02CD\u02CE\t\x1D\x02\x02\u02CE\xDA" +
        "\x03\x02\x02\x02\u02CF\u02D0\t\x1E\x02\x02\u02D0\xDC\x03\x02\x02\x02\u02D1" +
        "\u02D2\t\x1F\x02\x02\u02D2\xDE\x03\x02\x02\x02\u02D3\u02D4\t \x02\x02" +
        "\u02D4\xE0\x03\x02\x02\x02\u02D5\u02D6\t!\x02\x02\u02D6\xE2\x03\x02\x02" +
        "\x023\x02\xE5\xF2\xF8\u0100\u0106\u010E\u0117\u011E\u0127\u012C\u0134" +
        "\u013E\u0140\u0142\u0144\u014E\u015D\u0160\u0169\u016E\u0173\u0178\u0184" +
        "\u0189\u0190\u0192\u019A\u019C\u01A4\u01A6\u01AC\u01AF\u01B2\u01B7\u01BA" +
        "\u01BF\u01C4\u01C8\u01D1\u01D5\u01DA\u01DF\u01E3\u01EB\u01F1\u01F5\u01FC" +
        "\u02C9\x02";
    LexBasic._serializedATN = Utils.join([
        LexBasic._serializedATNSegment0,
        LexBasic._serializedATNSegment1,
    ], "");
    return LexBasic;
}(Lexer_1.Lexer));
exports.LexBasic = LexBasic;
