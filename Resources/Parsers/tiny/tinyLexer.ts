// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tiny/tiny.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class tinyLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly ID = 9;
	public static readonly NUMBER = 10;
	public static readonly WS = 11;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "ID", 
		"NUMBER", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'BEGIN'", "'END'", "':='", "'READ'", "'WRITE'", "','", "'-'", 
		"'+'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "ID", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(tinyLexer._LITERAL_NAMES, tinyLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return tinyLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(tinyLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "tiny.g4"; }

	// @Override
	public get ruleNames(): string[] { return tinyLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return tinyLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return tinyLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return tinyLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\rE\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
		"\x03\t\x03\n\x06\n9\n\n\r\n\x0E\n:\x03\v\x06\v>\n\v\r\v\x0E\v?\x03\f\x03" +
		"\f\x03\f\x03\f\x02\x02\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
		"\r\x03\x02\x04\x04\x02C\\c|\x05\x02\f\f\x0F\x0F\"\"\x02F\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
		"\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1F\x03\x02\x02" +
		"\x02\x07#\x03\x02\x02\x02\t&\x03\x02\x02\x02\v+\x03\x02\x02\x02\r1\x03" +
		"\x02\x02\x02\x0F3\x03\x02\x02\x02\x115\x03\x02\x02\x02\x138\x03\x02\x02" +
		"\x02\x15=\x03\x02\x02\x02\x17A\x03\x02\x02\x02\x19\x1A\x07D\x02\x02\x1A" +
		"\x1B\x07G\x02\x02\x1B\x1C\x07I\x02\x02\x1C\x1D\x07K\x02\x02\x1D\x1E\x07" +
		"P\x02\x02\x1E\x04\x03\x02\x02\x02\x1F \x07G\x02\x02 !\x07P\x02\x02!\"" +
		"\x07F\x02\x02\"\x06\x03\x02\x02\x02#$\x07<\x02\x02$%\x07?\x02\x02%\b\x03" +
		"\x02\x02\x02&\'\x07T\x02\x02\'(\x07G\x02\x02()\x07C\x02\x02)*\x07F\x02" +
		"\x02*\n\x03\x02\x02\x02+,\x07Y\x02\x02,-\x07T\x02\x02-.\x07K\x02\x02." +
		"/\x07V\x02\x02/0\x07G\x02\x020\f\x03\x02\x02\x0212\x07.\x02\x022\x0E\x03" +
		"\x02\x02\x0234\x07/\x02\x024\x10\x03\x02\x02\x0256\x07-\x02\x026\x12\x03" +
		"\x02\x02\x0279\t\x02\x02\x0287\x03\x02\x02\x029:\x03\x02\x02\x02:8\x03" +
		"\x02\x02\x02:;\x03\x02\x02\x02;\x14\x03\x02\x02\x02<>\x042;\x02=<\x03" +
		"\x02\x02\x02>?\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\x16" +
		"\x03\x02\x02\x02AB\t\x03\x02\x02BC\x03\x02\x02\x02CD\b\f\x02\x02D\x18" +
		"\x03\x02\x02\x02\x05\x02:?\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tinyLexer.__ATN) {
			tinyLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(tinyLexer._serializedATN));
		}

		return tinyLexer.__ATN;
	}

}

