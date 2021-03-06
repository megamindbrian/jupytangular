// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/python/python3alt/AltPython3.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { AltPython3Listener } from "./AltPython3Listener";

export class AltPython3Parser extends Parser {
	public static readonly PRINT = 1;
	public static readonly DEF = 2;
	public static readonly RETURN = 3;
	public static readonly RAISE = 4;
	public static readonly FROM = 5;
	public static readonly IMPORT = 6;
	public static readonly AS = 7;
	public static readonly GLOBAL = 8;
	public static readonly NONLOCAL = 9;
	public static readonly ASSERT = 10;
	public static readonly IF = 11;
	public static readonly ELIF = 12;
	public static readonly ELSE = 13;
	public static readonly WHILE = 14;
	public static readonly FOR = 15;
	public static readonly IN = 16;
	public static readonly TRY = 17;
	public static readonly FINALLY = 18;
	public static readonly WITH = 19;
	public static readonly EXCEPT = 20;
	public static readonly LAMBDA = 21;
	public static readonly OR = 22;
	public static readonly AND = 23;
	public static readonly NOT = 24;
	public static readonly IS = 25;
	public static readonly NONE = 26;
	public static readonly TRUE = 27;
	public static readonly FALSE = 28;
	public static readonly CLASS = 29;
	public static readonly YIELD = 30;
	public static readonly DEL = 31;
	public static readonly PASS = 32;
	public static readonly CONTINUE = 33;
	public static readonly BREAK = 34;
	public static readonly NEWLINE = 35;
	public static readonly NAME = 36;
	public static readonly STRING_LITERAL = 37;
	public static readonly BYTES_LITERAL = 38;
	public static readonly DECIMAL_INTEGER = 39;
	public static readonly OCT_INTEGER = 40;
	public static readonly HEX_INTEGER = 41;
	public static readonly BIN_INTEGER = 42;
	public static readonly FLOAT_NUMBER = 43;
	public static readonly IMAG_NUMBER = 44;
	public static readonly DOT = 45;
	public static readonly ELLIPSIS = 46;
	public static readonly STAR = 47;
	public static readonly OPEN_PAREN = 48;
	public static readonly CLOSE_PAREN = 49;
	public static readonly COMMA = 50;
	public static readonly COLON = 51;
	public static readonly SEMI_COLON = 52;
	public static readonly POWER = 53;
	public static readonly ASSIGN = 54;
	public static readonly OPEN_BRACK = 55;
	public static readonly CLOSE_BRACK = 56;
	public static readonly OR_OP = 57;
	public static readonly XOR = 58;
	public static readonly AND_OP = 59;
	public static readonly LEFT_SHIFT = 60;
	public static readonly RIGHT_SHIFT = 61;
	public static readonly ADD = 62;
	public static readonly MINUS = 63;
	public static readonly DIV = 64;
	public static readonly MOD = 65;
	public static readonly IDIV = 66;
	public static readonly NOT_OP = 67;
	public static readonly OPEN_BRACE = 68;
	public static readonly CLOSE_BRACE = 69;
	public static readonly LESS_THAN = 70;
	public static readonly GREATER_THAN = 71;
	public static readonly EQUALS = 72;
	public static readonly GT_EQ = 73;
	public static readonly LT_EQ = 74;
	public static readonly NOT_EQ_1 = 75;
	public static readonly NOT_EQ_2 = 76;
	public static readonly AT = 77;
	public static readonly ARROW = 78;
	public static readonly ADD_ASSIGN = 79;
	public static readonly SUB_ASSIGN = 80;
	public static readonly MULT_ASSIGN = 81;
	public static readonly AT_ASSIGN = 82;
	public static readonly DIV_ASSIGN = 83;
	public static readonly MOD_ASSIGN = 84;
	public static readonly AND_ASSIGN = 85;
	public static readonly OR_ASSIGN = 86;
	public static readonly XOR_ASSIGN = 87;
	public static readonly LEFT_SHIFT_ASSIGN = 88;
	public static readonly RIGHT_SHIFT_ASSIGN = 89;
	public static readonly POWER_ASSIGN = 90;
	public static readonly IDIV_ASSIGN = 91;
	public static readonly SKIP_ = 92;
	public static readonly UNKNOWN_CHAR = 93;
	public static readonly INDENT = 94;
	public static readonly DEDENT = 95;
	public static readonly RULE_single_input = 0;
	public static readonly RULE_file_input = 1;
	public static readonly RULE_eval_input = 2;
	public static readonly RULE_decorator = 3;
	public static readonly RULE_decorators = 4;
	public static readonly RULE_decorated = 5;
	public static readonly RULE_funcdef = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_typedargslist = 8;
	public static readonly RULE_tfpdef = 9;
	public static readonly RULE_varargslist = 10;
	public static readonly RULE_vfpdef = 11;
	public static readonly RULE_stmt = 12;
	public static readonly RULE_simple_stmt = 13;
	public static readonly RULE_small_stmt = 14;
	public static readonly RULE_print_stmt = 15;
	public static readonly RULE_expr_stmt = 16;
	public static readonly RULE_testlist_star_expr = 17;
	public static readonly RULE_augassign = 18;
	public static readonly RULE_del_stmt = 19;
	public static readonly RULE_pass_stmt = 20;
	public static readonly RULE_flow_stmt = 21;
	public static readonly RULE_break_stmt = 22;
	public static readonly RULE_continue_stmt = 23;
	public static readonly RULE_return_stmt = 24;
	public static readonly RULE_yield_stmt = 25;
	public static readonly RULE_raise_stmt = 26;
	public static readonly RULE_import_stmt = 27;
	public static readonly RULE_import_name = 28;
	public static readonly RULE_import_from = 29;
	public static readonly RULE_import_as_name = 30;
	public static readonly RULE_dotted_as_name = 31;
	public static readonly RULE_import_as_names = 32;
	public static readonly RULE_dotted_as_names = 33;
	public static readonly RULE_dotted_name = 34;
	public static readonly RULE_global_stmt = 35;
	public static readonly RULE_nonlocal_stmt = 36;
	public static readonly RULE_assert_stmt = 37;
	public static readonly RULE_compound_stmt = 38;
	public static readonly RULE_if_stmt = 39;
	public static readonly RULE_while_stmt = 40;
	public static readonly RULE_for_stmt = 41;
	public static readonly RULE_try_stmt = 42;
	public static readonly RULE_with_stmt = 43;
	public static readonly RULE_with_item = 44;
	public static readonly RULE_except_clause = 45;
	public static readonly RULE_suite = 46;
	public static readonly RULE_test = 47;
	public static readonly RULE_test_nocond = 48;
	public static readonly RULE_lambdef = 49;
	public static readonly RULE_lambdef_nocond = 50;
	public static readonly RULE_or_test = 51;
	public static readonly RULE_and_test = 52;
	public static readonly RULE_not_test = 53;
	public static readonly RULE_comparison = 54;
	public static readonly RULE_comp_op = 55;
	public static readonly RULE_star_expr = 56;
	public static readonly RULE_expr = 57;
	public static readonly RULE_xor_expr = 58;
	public static readonly RULE_and_expr = 59;
	public static readonly RULE_shift_expr = 60;
	public static readonly RULE_arith_expr = 61;
	public static readonly RULE_term = 62;
	public static readonly RULE_factor = 63;
	public static readonly RULE_power = 64;
	public static readonly RULE_atom = 65;
	public static readonly RULE_testlist_comp = 66;
	public static readonly RULE_trailer = 67;
	public static readonly RULE_subscriptlist = 68;
	public static readonly RULE_subscript = 69;
	public static readonly RULE_sliceop = 70;
	public static readonly RULE_exprlist = 71;
	public static readonly RULE_testlist = 72;
	public static readonly RULE_dictorsetmaker = 73;
	public static readonly RULE_classdef = 74;
	public static readonly RULE_arglist = 75;
	public static readonly RULE_argument = 76;
	public static readonly RULE_comp_iter = 77;
	public static readonly RULE_comp_for = 78;
	public static readonly RULE_comp_if = 79;
	public static readonly RULE_yield_expr = 80;
	public static readonly RULE_yield_arg = 81;
	public static readonly RULE_str = 82;
	public static readonly RULE_number = 83;
	public static readonly RULE_integer = 84;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"single_input", "file_input", "eval_input", "decorator", "decorators", 
		"decorated", "funcdef", "parameters", "typedargslist", "tfpdef", "varargslist", 
		"vfpdef", "stmt", "simple_stmt", "small_stmt", "print_stmt", "expr_stmt", 
		"testlist_star_expr", "augassign", "del_stmt", "pass_stmt", "flow_stmt", 
		"break_stmt", "continue_stmt", "return_stmt", "yield_stmt", "raise_stmt", 
		"import_stmt", "import_name", "import_from", "import_as_name", "dotted_as_name", 
		"import_as_names", "dotted_as_names", "dotted_name", "global_stmt", "nonlocal_stmt", 
		"assert_stmt", "compound_stmt", "if_stmt", "while_stmt", "for_stmt", "try_stmt", 
		"with_stmt", "with_item", "except_clause", "suite", "test", "test_nocond", 
		"lambdef", "lambdef_nocond", "or_test", "and_test", "not_test", "comparison", 
		"comp_op", "star_expr", "expr", "xor_expr", "and_expr", "shift_expr", 
		"arith_expr", "term", "factor", "power", "atom", "testlist_comp", "trailer", 
		"subscriptlist", "subscript", "sliceop", "exprlist", "testlist", "dictorsetmaker", 
		"classdef", "arglist", "argument", "comp_iter", "comp_for", "comp_if", 
		"yield_expr", "yield_arg", "str", "number", "integer",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'print'", "'def'", "'return'", "'raise'", "'from'", "'import'", 
		"'as'", "'global'", "'nonlocal'", "'assert'", "'if'", "'elif'", "'else'", 
		"'while'", "'for'", "'in'", "'try'", "'finally'", "'with'", "'except'", 
		"'lambda'", "'or'", "'and'", "'not'", "'is'", "'None'", "'True'", "'False'", 
		"'class'", "'yield'", "'del'", "'pass'", "'continue'", "'break'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'.'", "'...'", "'*'", "'('", "')'", "','", "':'", 
		"';'", "'**'", "'='", "'['", "']'", "'|'", "'^'", "'&'", "'<<'", "'>>'", 
		"'+'", "'-'", "'/'", "'%'", "'//'", "'~'", "'{'", "'}'", "'<'", "'>'", 
		"'=='", "'>='", "'<='", "'<>'", "'!='", "'@'", "'->'", "'+='", "'-='", 
		"'*='", "'@='", "'/='", "'%='", "'&='", "'|='", "'^='", "'<<='", "'>>='", 
		"'**='", "'//='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PRINT", "DEF", "RETURN", "RAISE", "FROM", "IMPORT", "AS", 
		"GLOBAL", "NONLOCAL", "ASSERT", "IF", "ELIF", "ELSE", "WHILE", "FOR", 
		"IN", "TRY", "FINALLY", "WITH", "EXCEPT", "LAMBDA", "OR", "AND", "NOT", 
		"IS", "NONE", "TRUE", "FALSE", "CLASS", "YIELD", "DEL", "PASS", "CONTINUE", 
		"BREAK", "NEWLINE", "NAME", "STRING_LITERAL", "BYTES_LITERAL", "DECIMAL_INTEGER", 
		"OCT_INTEGER", "HEX_INTEGER", "BIN_INTEGER", "FLOAT_NUMBER", "IMAG_NUMBER", 
		"DOT", "ELLIPSIS", "STAR", "OPEN_PAREN", "CLOSE_PAREN", "COMMA", "COLON", 
		"SEMI_COLON", "POWER", "ASSIGN", "OPEN_BRACK", "CLOSE_BRACK", "OR_OP", 
		"XOR", "AND_OP", "LEFT_SHIFT", "RIGHT_SHIFT", "ADD", "MINUS", "DIV", "MOD", 
		"IDIV", "NOT_OP", "OPEN_BRACE", "CLOSE_BRACE", "LESS_THAN", "GREATER_THAN", 
		"EQUALS", "GT_EQ", "LT_EQ", "NOT_EQ_1", "NOT_EQ_2", "AT", "ARROW", "ADD_ASSIGN", 
		"SUB_ASSIGN", "MULT_ASSIGN", "AT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", 
		"AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "LEFT_SHIFT_ASSIGN", "RIGHT_SHIFT_ASSIGN", 
		"POWER_ASSIGN", "IDIV_ASSIGN", "SKIP_", "UNKNOWN_CHAR", "INDENT", "DEDENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AltPython3Parser._LITERAL_NAMES, AltPython3Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AltPython3Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "AltPython3.g4"; }

	// @Override
	public get ruleNames(): string[] { return AltPython3Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return AltPython3Parser._serializedATN; }



	  // Used in preventing double NoViableAltException throws on the current context's same start token.
	  static protected final int ALREADY_THROWN_TOKEN_TYPE = Integer.MIN_VALUE + 23;


	  // Whether we've encountered something that is legal Python2
	  private boolean likelyIsPython2 = false;

	  // This overly long variable denotes whether we should emit exceptions on illegal Python 3 items
	  //	(for example, no parens used in a print statement.) If you wish to use this parser to detect
	  //	legal Python2, this should be set to false via setStrictPython3Parsing(boolean).
	  private boolean throwNoViableAltExceptionOnLegalPython2ButIllegalPython3 = true;

	  // This will return an invalid value if getStrictPython3Parsing() returned true prior to parsing.
	  public boolean parsedCodeWasPython2 () {
	  	return this.likelyIsPython2;
	  }

	  public boolean getStrictPython3Parsing () {
	  	return this.throwNoViableAltExceptionOnLegalPython2ButIllegalPython3;
	  }

	  // Setting this to true will throw NoViableAltExceptions upon encountering Python2-only code facets; this is true
	  //	by default. Set this to false prior to parsing if you wish to invoke parsedCodeWasPython2() after parsing.
	  public void setStrictPython3Parsing (boolean flag) {
	  	this.throwNoViableAltExceptionOnLegalPython2ButIllegalPython3 = flag;
	  }


	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AltPython3Parser._ATN, this);
	}
	// @RuleVersion(0)
	public single_input(): Single_inputContext {
		let _localctx: Single_inputContext = new Single_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AltPython3Parser.RULE_single_input);
		try {
			this.state = 175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 170;
				this.match(AltPython3Parser.NEWLINE);
				}
				break;
			case AltPython3Parser.PRINT:
			case AltPython3Parser.RETURN:
			case AltPython3Parser.RAISE:
			case AltPython3Parser.FROM:
			case AltPython3Parser.IMPORT:
			case AltPython3Parser.GLOBAL:
			case AltPython3Parser.NONLOCAL:
			case AltPython3Parser.ASSERT:
			case AltPython3Parser.LAMBDA:
			case AltPython3Parser.NOT:
			case AltPython3Parser.NONE:
			case AltPython3Parser.TRUE:
			case AltPython3Parser.FALSE:
			case AltPython3Parser.YIELD:
			case AltPython3Parser.DEL:
			case AltPython3Parser.PASS:
			case AltPython3Parser.CONTINUE:
			case AltPython3Parser.BREAK:
			case AltPython3Parser.NAME:
			case AltPython3Parser.STRING_LITERAL:
			case AltPython3Parser.BYTES_LITERAL:
			case AltPython3Parser.DECIMAL_INTEGER:
			case AltPython3Parser.OCT_INTEGER:
			case AltPython3Parser.HEX_INTEGER:
			case AltPython3Parser.BIN_INTEGER:
			case AltPython3Parser.FLOAT_NUMBER:
			case AltPython3Parser.IMAG_NUMBER:
			case AltPython3Parser.ELLIPSIS:
			case AltPython3Parser.STAR:
			case AltPython3Parser.OPEN_PAREN:
			case AltPython3Parser.OPEN_BRACK:
			case AltPython3Parser.ADD:
			case AltPython3Parser.MINUS:
			case AltPython3Parser.NOT_OP:
			case AltPython3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 171;
				this.simple_stmt();
				}
				break;
			case AltPython3Parser.DEF:
			case AltPython3Parser.IF:
			case AltPython3Parser.WHILE:
			case AltPython3Parser.FOR:
			case AltPython3Parser.TRY:
			case AltPython3Parser.WITH:
			case AltPython3Parser.CLASS:
			case AltPython3Parser.AT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 172;
				this.compound_stmt();
				this.state = 173;
				this.match(AltPython3Parser.NEWLINE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public file_input(): File_inputContext {
		let _localctx: File_inputContext = new File_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AltPython3Parser.RULE_file_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AltPython3Parser.PRINT) | (1 << AltPython3Parser.DEF) | (1 << AltPython3Parser.RETURN) | (1 << AltPython3Parser.RAISE) | (1 << AltPython3Parser.FROM) | (1 << AltPython3Parser.IMPORT) | (1 << AltPython3Parser.GLOBAL) | (1 << AltPython3Parser.NONLOCAL) | (1 << AltPython3Parser.ASSERT) | (1 << AltPython3Parser.IF) | (1 << AltPython3Parser.WHILE) | (1 << AltPython3Parser.FOR) | (1 << AltPython3Parser.TRY) | (1 << AltPython3Parser.WITH) | (1 << AltPython3Parser.LAMBDA) | (1 << AltPython3Parser.NOT) | (1 << AltPython3Parser.NONE) | (1 << AltPython3Parser.TRUE) | (1 << AltPython3Parser.FALSE) | (1 << AltPython3Parser.CLASS) | (1 << AltPython3Parser.YIELD) | (1 << AltPython3Parser.DEL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AltPython3Parser.PASS - 32)) | (1 << (AltPython3Parser.CONTINUE - 32)) | (1 << (AltPython3Parser.BREAK - 32)) | (1 << (AltPython3Parser.NEWLINE - 32)) | (1 << (AltPython3Parser.NAME - 32)) | (1 << (AltPython3Parser.STRING_LITERAL - 32)) | (1 << (AltPython3Parser.BYTES_LITERAL - 32)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 32)) | (1 << (AltPython3Parser.OCT_INTEGER - 32)) | (1 << (AltPython3Parser.HEX_INTEGER - 32)) | (1 << (AltPython3Parser.BIN_INTEGER - 32)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 32)) | (1 << (AltPython3Parser.IMAG_NUMBER - 32)) | (1 << (AltPython3Parser.ELLIPSIS - 32)) | (1 << (AltPython3Parser.STAR - 32)) | (1 << (AltPython3Parser.OPEN_PAREN - 32)) | (1 << (AltPython3Parser.OPEN_BRACK - 32)) | (1 << (AltPython3Parser.ADD - 32)) | (1 << (AltPython3Parser.MINUS - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (AltPython3Parser.NOT_OP - 67)) | (1 << (AltPython3Parser.OPEN_BRACE - 67)) | (1 << (AltPython3Parser.AT - 67)))) !== 0)) {
				{
				this.state = 179;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AltPython3Parser.NEWLINE:
					{
					this.state = 177;
					this.match(AltPython3Parser.NEWLINE);
					}
					break;
				case AltPython3Parser.PRINT:
				case AltPython3Parser.DEF:
				case AltPython3Parser.RETURN:
				case AltPython3Parser.RAISE:
				case AltPython3Parser.FROM:
				case AltPython3Parser.IMPORT:
				case AltPython3Parser.GLOBAL:
				case AltPython3Parser.NONLOCAL:
				case AltPython3Parser.ASSERT:
				case AltPython3Parser.IF:
				case AltPython3Parser.WHILE:
				case AltPython3Parser.FOR:
				case AltPython3Parser.TRY:
				case AltPython3Parser.WITH:
				case AltPython3Parser.LAMBDA:
				case AltPython3Parser.NOT:
				case AltPython3Parser.NONE:
				case AltPython3Parser.TRUE:
				case AltPython3Parser.FALSE:
				case AltPython3Parser.CLASS:
				case AltPython3Parser.YIELD:
				case AltPython3Parser.DEL:
				case AltPython3Parser.PASS:
				case AltPython3Parser.CONTINUE:
				case AltPython3Parser.BREAK:
				case AltPython3Parser.NAME:
				case AltPython3Parser.STRING_LITERAL:
				case AltPython3Parser.BYTES_LITERAL:
				case AltPython3Parser.DECIMAL_INTEGER:
				case AltPython3Parser.OCT_INTEGER:
				case AltPython3Parser.HEX_INTEGER:
				case AltPython3Parser.BIN_INTEGER:
				case AltPython3Parser.FLOAT_NUMBER:
				case AltPython3Parser.IMAG_NUMBER:
				case AltPython3Parser.ELLIPSIS:
				case AltPython3Parser.STAR:
				case AltPython3Parser.OPEN_PAREN:
				case AltPython3Parser.OPEN_BRACK:
				case AltPython3Parser.ADD:
				case AltPython3Parser.MINUS:
				case AltPython3Parser.NOT_OP:
				case AltPython3Parser.OPEN_BRACE:
				case AltPython3Parser.AT:
					{
					this.state = 178;
					this.stmt();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 184;
			this.match(AltPython3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eval_input(): Eval_inputContext {
		let _localctx: Eval_inputContext = new Eval_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AltPython3Parser.RULE_eval_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.testlist();
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.NEWLINE) {
				{
				{
				this.state = 187;
				this.match(AltPython3Parser.NEWLINE);
				}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 193;
			this.match(AltPython3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decorator(): DecoratorContext {
		let _localctx: DecoratorContext = new DecoratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AltPython3Parser.RULE_decorator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(AltPython3Parser.AT);
			this.state = 196;
			this.dotted_name();
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.OPEN_PAREN) {
				{
				this.state = 197;
				this.match(AltPython3Parser.OPEN_PAREN);
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (AltPython3Parser.POWER - 53)) | (1 << (AltPython3Parser.OPEN_BRACK - 53)) | (1 << (AltPython3Parser.ADD - 53)) | (1 << (AltPython3Parser.MINUS - 53)) | (1 << (AltPython3Parser.NOT_OP - 53)) | (1 << (AltPython3Parser.OPEN_BRACE - 53)))) !== 0)) {
					{
					this.state = 198;
					this.arglist();
					}
				}

				this.state = 201;
				this.match(AltPython3Parser.CLOSE_PAREN);
				}
			}

			this.state = 204;
			this.match(AltPython3Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decorators(): DecoratorsContext {
		let _localctx: DecoratorsContext = new DecoratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AltPython3Parser.RULE_decorators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 206;
				this.decorator();
				}
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === AltPython3Parser.AT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decorated(): DecoratedContext {
		let _localctx: DecoratedContext = new DecoratedContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AltPython3Parser.RULE_decorated);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.decorators();
			this.state = 214;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.CLASS:
				{
				this.state = 212;
				this.classdef();
				}
				break;
			case AltPython3Parser.DEF:
				{
				this.state = 213;
				this.funcdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcdef(): FuncdefContext {
		let _localctx: FuncdefContext = new FuncdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AltPython3Parser.RULE_funcdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(AltPython3Parser.DEF);
			this.state = 217;
			this.match(AltPython3Parser.NAME);
			this.state = 218;
			this.parameters();
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.ARROW) {
				{
				this.state = 219;
				this.match(AltPython3Parser.ARROW);
				this.state = 220;
				this.test();
				}
			}

			this.state = 223;
			this.match(AltPython3Parser.COLON);
			this.state = 224;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AltPython3Parser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(AltPython3Parser.OPEN_PAREN);
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AltPython3Parser.NAME - 36)) | (1 << (AltPython3Parser.STAR - 36)) | (1 << (AltPython3Parser.POWER - 36)))) !== 0)) {
				{
				this.state = 227;
				this.typedargslist();
				}
			}

			this.state = 230;
			this.match(AltPython3Parser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedargslist(): TypedargslistContext {
		let _localctx: TypedargslistContext = new TypedargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AltPython3Parser.RULE_typedargslist);
		let _la: number;
		try {
			let _alt: number;
			this.state = 297;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 232;
				this.tfpdef();
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.ASSIGN) {
					{
					this.state = 233;
					this.match(AltPython3Parser.ASSIGN);
					this.state = 234;
					this.test();
					}
				}

				this.state = 245;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 237;
						this.match(AltPython3Parser.COMMA);
						this.state = 238;
						this.tfpdef();
						this.state = 241;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === AltPython3Parser.ASSIGN) {
							{
							this.state = 239;
							this.match(AltPython3Parser.ASSIGN);
							this.state = 240;
							this.test();
							}
						}

						}
						}
					}
					this.state = 247;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				}
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.COMMA) {
					{
					this.state = 248;
					this.match(AltPython3Parser.COMMA);
					this.state = 271;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case AltPython3Parser.STAR:
						{
						this.state = 249;
						this.match(AltPython3Parser.STAR);
						this.state = 251;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === AltPython3Parser.NAME) {
							{
							this.state = 250;
							this.tfpdef();
							}
						}

						this.state = 261;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 253;
								this.match(AltPython3Parser.COMMA);
								this.state = 254;
								this.tfpdef();
								this.state = 257;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === AltPython3Parser.ASSIGN) {
									{
									this.state = 255;
									this.match(AltPython3Parser.ASSIGN);
									this.state = 256;
									this.test();
									}
								}

								}
								}
							}
							this.state = 263;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
						}
						this.state = 267;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === AltPython3Parser.COMMA) {
							{
							this.state = 264;
							this.match(AltPython3Parser.COMMA);
							this.state = 265;
							this.match(AltPython3Parser.POWER);
							this.state = 266;
							this.tfpdef();
							}
						}

						}
						break;
					case AltPython3Parser.POWER:
						{
						this.state = 269;
						this.match(AltPython3Parser.POWER);
						this.state = 270;
						this.tfpdef();
						}
						break;
					case AltPython3Parser.CLOSE_PAREN:
						break;
					default:
						break;
					}
					}
				}

				}
				break;
			case AltPython3Parser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 275;
				this.match(AltPython3Parser.STAR);
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.NAME) {
					{
					this.state = 276;
					this.tfpdef();
					}
				}

				this.state = 287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 279;
						this.match(AltPython3Parser.COMMA);
						this.state = 280;
						this.tfpdef();
						this.state = 283;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === AltPython3Parser.ASSIGN) {
							{
							this.state = 281;
							this.match(AltPython3Parser.ASSIGN);
							this.state = 282;
							this.test();
							}
						}

						}
						}
					}
					this.state = 289;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.COMMA) {
					{
					this.state = 290;
					this.match(AltPython3Parser.COMMA);
					this.state = 291;
					this.match(AltPython3Parser.POWER);
					this.state = 292;
					this.tfpdef();
					}
				}

				}
				break;
			case AltPython3Parser.POWER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 295;
				this.match(AltPython3Parser.POWER);
				this.state = 296;
				this.tfpdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tfpdef(): TfpdefContext {
		let _localctx: TfpdefContext = new TfpdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AltPython3Parser.RULE_tfpdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(AltPython3Parser.NAME);
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.COLON) {
				{
				this.state = 300;
				this.match(AltPython3Parser.COLON);
				this.state = 301;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varargslist(): VarargslistContext {
		let _localctx: VarargslistContext = new VarargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AltPython3Parser.RULE_varargslist);
		let _la: number;
		try {
			let _alt: number;
			this.state = 369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 304;
				this.vfpdef();
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.ASSIGN) {
					{
					this.state = 305;
					this.match(AltPython3Parser.ASSIGN);
					this.state = 306;
					this.test();
					}
				}

				this.state = 317;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 309;
						this.match(AltPython3Parser.COMMA);
						this.state = 310;
						this.vfpdef();
						this.state = 313;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === AltPython3Parser.ASSIGN) {
							{
							this.state = 311;
							this.match(AltPython3Parser.ASSIGN);
							this.state = 312;
							this.test();
							}
						}

						}
						}
					}
					this.state = 319;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.COMMA) {
					{
					this.state = 320;
					this.match(AltPython3Parser.COMMA);
					this.state = 343;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case AltPython3Parser.STAR:
						{
						this.state = 321;
						this.match(AltPython3Parser.STAR);
						this.state = 323;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === AltPython3Parser.NAME) {
							{
							this.state = 322;
							this.vfpdef();
							}
						}

						this.state = 333;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 325;
								this.match(AltPython3Parser.COMMA);
								this.state = 326;
								this.vfpdef();
								this.state = 329;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === AltPython3Parser.ASSIGN) {
									{
									this.state = 327;
									this.match(AltPython3Parser.ASSIGN);
									this.state = 328;
									this.test();
									}
								}

								}
								}
							}
							this.state = 335;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
						}
						this.state = 339;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === AltPython3Parser.COMMA) {
							{
							this.state = 336;
							this.match(AltPython3Parser.COMMA);
							this.state = 337;
							this.match(AltPython3Parser.POWER);
							this.state = 338;
							this.vfpdef();
							}
						}

						}
						break;
					case AltPython3Parser.POWER:
						{
						this.state = 341;
						this.match(AltPython3Parser.POWER);
						this.state = 342;
						this.vfpdef();
						}
						break;
					case AltPython3Parser.COLON:
						break;
					default:
						break;
					}
					}
				}

				}
				break;
			case AltPython3Parser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 347;
				this.match(AltPython3Parser.STAR);
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.NAME) {
					{
					this.state = 348;
					this.vfpdef();
					}
				}

				this.state = 359;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 351;
						this.match(AltPython3Parser.COMMA);
						this.state = 352;
						this.vfpdef();
						this.state = 355;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === AltPython3Parser.ASSIGN) {
							{
							this.state = 353;
							this.match(AltPython3Parser.ASSIGN);
							this.state = 354;
							this.test();
							}
						}

						}
						}
					}
					this.state = 361;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				}
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.COMMA) {
					{
					this.state = 362;
					this.match(AltPython3Parser.COMMA);
					this.state = 363;
					this.match(AltPython3Parser.POWER);
					this.state = 364;
					this.vfpdef();
					}
				}

				}
				break;
			case AltPython3Parser.POWER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 367;
				this.match(AltPython3Parser.POWER);
				this.state = 368;
				this.vfpdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public vfpdef(): VfpdefContext {
		let _localctx: VfpdefContext = new VfpdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AltPython3Parser.RULE_vfpdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(AltPython3Parser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AltPython3Parser.RULE_stmt);
		try {
			this.state = 375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.PRINT:
			case AltPython3Parser.RETURN:
			case AltPython3Parser.RAISE:
			case AltPython3Parser.FROM:
			case AltPython3Parser.IMPORT:
			case AltPython3Parser.GLOBAL:
			case AltPython3Parser.NONLOCAL:
			case AltPython3Parser.ASSERT:
			case AltPython3Parser.LAMBDA:
			case AltPython3Parser.NOT:
			case AltPython3Parser.NONE:
			case AltPython3Parser.TRUE:
			case AltPython3Parser.FALSE:
			case AltPython3Parser.YIELD:
			case AltPython3Parser.DEL:
			case AltPython3Parser.PASS:
			case AltPython3Parser.CONTINUE:
			case AltPython3Parser.BREAK:
			case AltPython3Parser.NAME:
			case AltPython3Parser.STRING_LITERAL:
			case AltPython3Parser.BYTES_LITERAL:
			case AltPython3Parser.DECIMAL_INTEGER:
			case AltPython3Parser.OCT_INTEGER:
			case AltPython3Parser.HEX_INTEGER:
			case AltPython3Parser.BIN_INTEGER:
			case AltPython3Parser.FLOAT_NUMBER:
			case AltPython3Parser.IMAG_NUMBER:
			case AltPython3Parser.ELLIPSIS:
			case AltPython3Parser.STAR:
			case AltPython3Parser.OPEN_PAREN:
			case AltPython3Parser.OPEN_BRACK:
			case AltPython3Parser.ADD:
			case AltPython3Parser.MINUS:
			case AltPython3Parser.NOT_OP:
			case AltPython3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 373;
				this.simple_stmt();
				}
				break;
			case AltPython3Parser.DEF:
			case AltPython3Parser.IF:
			case AltPython3Parser.WHILE:
			case AltPython3Parser.FOR:
			case AltPython3Parser.TRY:
			case AltPython3Parser.WITH:
			case AltPython3Parser.CLASS:
			case AltPython3Parser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 374;
				this.compound_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simple_stmt(): Simple_stmtContext {
		let _localctx: Simple_stmtContext = new Simple_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AltPython3Parser.RULE_simple_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.small_stmt();
			this.state = 382;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 378;
					this.match(AltPython3Parser.SEMI_COLON);
					this.state = 379;
					this.small_stmt();
					}
					}
				}
				this.state = 384;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.SEMI_COLON) {
				{
				this.state = 385;
				this.match(AltPython3Parser.SEMI_COLON);
				}
			}

			this.state = 388;
			this.match(AltPython3Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public small_stmt(): Small_stmtContext {
		let _localctx: Small_stmtContext = new Small_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AltPython3Parser.RULE_small_stmt);
		try {
			this.state = 399;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.PRINT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 390;
				this.print_stmt();
				}
				break;
			case AltPython3Parser.LAMBDA:
			case AltPython3Parser.NOT:
			case AltPython3Parser.NONE:
			case AltPython3Parser.TRUE:
			case AltPython3Parser.FALSE:
			case AltPython3Parser.NAME:
			case AltPython3Parser.STRING_LITERAL:
			case AltPython3Parser.BYTES_LITERAL:
			case AltPython3Parser.DECIMAL_INTEGER:
			case AltPython3Parser.OCT_INTEGER:
			case AltPython3Parser.HEX_INTEGER:
			case AltPython3Parser.BIN_INTEGER:
			case AltPython3Parser.FLOAT_NUMBER:
			case AltPython3Parser.IMAG_NUMBER:
			case AltPython3Parser.ELLIPSIS:
			case AltPython3Parser.STAR:
			case AltPython3Parser.OPEN_PAREN:
			case AltPython3Parser.OPEN_BRACK:
			case AltPython3Parser.ADD:
			case AltPython3Parser.MINUS:
			case AltPython3Parser.NOT_OP:
			case AltPython3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 391;
				this.expr_stmt();
				}
				break;
			case AltPython3Parser.DEL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 392;
				this.del_stmt();
				}
				break;
			case AltPython3Parser.PASS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 393;
				this.pass_stmt();
				}
				break;
			case AltPython3Parser.RETURN:
			case AltPython3Parser.RAISE:
			case AltPython3Parser.YIELD:
			case AltPython3Parser.CONTINUE:
			case AltPython3Parser.BREAK:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 394;
				this.flow_stmt();
				}
				break;
			case AltPython3Parser.FROM:
			case AltPython3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 395;
				this.import_stmt();
				}
				break;
			case AltPython3Parser.GLOBAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 396;
				this.global_stmt();
				}
				break;
			case AltPython3Parser.NONLOCAL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 397;
				this.nonlocal_stmt();
				}
				break;
			case AltPython3Parser.ASSERT:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 398;
				this.assert_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public print_stmt(): Print_stmtContext {
		let _localctx: Print_stmtContext = new Print_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AltPython3Parser.RULE_print_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.state = 462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 401;
				this.match(AltPython3Parser.PRINT);
				this.state = 402;
				this.match(AltPython3Parser.OPEN_PAREN);
				this.state = 429;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AltPython3Parser.LAMBDA:
				case AltPython3Parser.NOT:
				case AltPython3Parser.NONE:
				case AltPython3Parser.TRUE:
				case AltPython3Parser.FALSE:
				case AltPython3Parser.NAME:
				case AltPython3Parser.STRING_LITERAL:
				case AltPython3Parser.BYTES_LITERAL:
				case AltPython3Parser.DECIMAL_INTEGER:
				case AltPython3Parser.OCT_INTEGER:
				case AltPython3Parser.HEX_INTEGER:
				case AltPython3Parser.BIN_INTEGER:
				case AltPython3Parser.FLOAT_NUMBER:
				case AltPython3Parser.IMAG_NUMBER:
				case AltPython3Parser.ELLIPSIS:
				case AltPython3Parser.STAR:
				case AltPython3Parser.OPEN_PAREN:
				case AltPython3Parser.CLOSE_PAREN:
				case AltPython3Parser.OPEN_BRACK:
				case AltPython3Parser.ADD:
				case AltPython3Parser.MINUS:
				case AltPython3Parser.NOT_OP:
				case AltPython3Parser.OPEN_BRACE:
					{
					this.state = 414;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
						{
						this.state = 403;
						this.test();
						this.state = 408;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 404;
								this.match(AltPython3Parser.COMMA);
								this.state = 405;
								this.test();
								}
								}
							}
							this.state = 410;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
						}
						this.state = 412;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === AltPython3Parser.COMMA) {
							{
							this.state = 411;
							this.match(AltPython3Parser.COMMA);
							}
						}

						}
					}

					}
					break;
				case AltPython3Parser.RIGHT_SHIFT:
					{
					this.state = 416;
					this.match(AltPython3Parser.RIGHT_SHIFT);
					this.state = 417;
					this.test();
					this.state = 427;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === AltPython3Parser.COMMA) {
						{
						this.state = 420;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 418;
								this.match(AltPython3Parser.COMMA);
								this.state = 419;
								this.test();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 422;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						this.state = 425;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === AltPython3Parser.COMMA) {
							{
							this.state = 424;
							this.match(AltPython3Parser.COMMA);
							}
						}

						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 431;
				this.match(AltPython3Parser.CLOSE_PAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 432;
				this.match(AltPython3Parser.PRINT);
				this.state = 459;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AltPython3Parser.LAMBDA:
				case AltPython3Parser.NOT:
				case AltPython3Parser.NONE:
				case AltPython3Parser.TRUE:
				case AltPython3Parser.FALSE:
				case AltPython3Parser.NEWLINE:
				case AltPython3Parser.NAME:
				case AltPython3Parser.STRING_LITERAL:
				case AltPython3Parser.BYTES_LITERAL:
				case AltPython3Parser.DECIMAL_INTEGER:
				case AltPython3Parser.OCT_INTEGER:
				case AltPython3Parser.HEX_INTEGER:
				case AltPython3Parser.BIN_INTEGER:
				case AltPython3Parser.FLOAT_NUMBER:
				case AltPython3Parser.IMAG_NUMBER:
				case AltPython3Parser.ELLIPSIS:
				case AltPython3Parser.STAR:
				case AltPython3Parser.OPEN_PAREN:
				case AltPython3Parser.SEMI_COLON:
				case AltPython3Parser.OPEN_BRACK:
				case AltPython3Parser.ADD:
				case AltPython3Parser.MINUS:
				case AltPython3Parser.NOT_OP:
				case AltPython3Parser.OPEN_BRACE:
					{
					this.state = 444;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
						{
						this.state = 433;
						this.test();
						this.state = 438;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 434;
								this.match(AltPython3Parser.COMMA);
								this.state = 435;
								this.test();
								}
								}
							}
							this.state = 440;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
						}
						this.state = 442;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === AltPython3Parser.COMMA) {
							{
							this.state = 441;
							this.match(AltPython3Parser.COMMA);
							}
						}

						}
					}

					}
					break;
				case AltPython3Parser.RIGHT_SHIFT:
					{
					this.state = 446;
					this.match(AltPython3Parser.RIGHT_SHIFT);
					this.state = 447;
					this.test();
					this.state = 457;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === AltPython3Parser.COMMA) {
						{
						this.state = 450;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 448;
								this.match(AltPython3Parser.COMMA);
								this.state = 449;
								this.test();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 452;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						this.state = 455;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === AltPython3Parser.COMMA) {
							{
							this.state = 454;
							this.match(AltPython3Parser.COMMA);
							}
						}

						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}

				 	if (this.getStrictPython3Parsing()) {
						Token printToken = ((org.antlr.v4.runtime.tree.TerminalNodeImpl)this._ctx.children.get(0)).getSymbol();
						Token startingOffender = ((org.antlr.v4.runtime.ParserRuleContext)this._ctx.children.get(1)).getStart();

						throw new NoViableAltException(this, this.getInputStream(), printToken, startingOffender, null,
													   this._ctx);
				 	}
				 	else {
				 		this.likelyIsPython2 = true;
				 	}
				 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr_stmt(): Expr_stmtContext {
		let _localctx: Expr_stmtContext = new Expr_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AltPython3Parser.RULE_expr_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this.testlist_star_expr();
			this.state = 480;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.ADD_ASSIGN:
			case AltPython3Parser.SUB_ASSIGN:
			case AltPython3Parser.MULT_ASSIGN:
			case AltPython3Parser.AT_ASSIGN:
			case AltPython3Parser.DIV_ASSIGN:
			case AltPython3Parser.MOD_ASSIGN:
			case AltPython3Parser.AND_ASSIGN:
			case AltPython3Parser.OR_ASSIGN:
			case AltPython3Parser.XOR_ASSIGN:
			case AltPython3Parser.LEFT_SHIFT_ASSIGN:
			case AltPython3Parser.RIGHT_SHIFT_ASSIGN:
			case AltPython3Parser.POWER_ASSIGN:
			case AltPython3Parser.IDIV_ASSIGN:
				{
				this.state = 465;
				this.augassign();
				this.state = 468;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AltPython3Parser.YIELD:
					{
					this.state = 466;
					this.yield_expr();
					}
					break;
				case AltPython3Parser.LAMBDA:
				case AltPython3Parser.NOT:
				case AltPython3Parser.NONE:
				case AltPython3Parser.TRUE:
				case AltPython3Parser.FALSE:
				case AltPython3Parser.NAME:
				case AltPython3Parser.STRING_LITERAL:
				case AltPython3Parser.BYTES_LITERAL:
				case AltPython3Parser.DECIMAL_INTEGER:
				case AltPython3Parser.OCT_INTEGER:
				case AltPython3Parser.HEX_INTEGER:
				case AltPython3Parser.BIN_INTEGER:
				case AltPython3Parser.FLOAT_NUMBER:
				case AltPython3Parser.IMAG_NUMBER:
				case AltPython3Parser.ELLIPSIS:
				case AltPython3Parser.STAR:
				case AltPython3Parser.OPEN_PAREN:
				case AltPython3Parser.OPEN_BRACK:
				case AltPython3Parser.ADD:
				case AltPython3Parser.MINUS:
				case AltPython3Parser.NOT_OP:
				case AltPython3Parser.OPEN_BRACE:
					{
					this.state = 467;
					this.testlist();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case AltPython3Parser.NEWLINE:
			case AltPython3Parser.SEMI_COLON:
			case AltPython3Parser.ASSIGN:
				{
				this.state = 477;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AltPython3Parser.ASSIGN) {
					{
					{
					this.state = 470;
					this.match(AltPython3Parser.ASSIGN);
					this.state = 473;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case AltPython3Parser.YIELD:
						{
						this.state = 471;
						this.yield_expr();
						}
						break;
					case AltPython3Parser.LAMBDA:
					case AltPython3Parser.NOT:
					case AltPython3Parser.NONE:
					case AltPython3Parser.TRUE:
					case AltPython3Parser.FALSE:
					case AltPython3Parser.NAME:
					case AltPython3Parser.STRING_LITERAL:
					case AltPython3Parser.BYTES_LITERAL:
					case AltPython3Parser.DECIMAL_INTEGER:
					case AltPython3Parser.OCT_INTEGER:
					case AltPython3Parser.HEX_INTEGER:
					case AltPython3Parser.BIN_INTEGER:
					case AltPython3Parser.FLOAT_NUMBER:
					case AltPython3Parser.IMAG_NUMBER:
					case AltPython3Parser.ELLIPSIS:
					case AltPython3Parser.STAR:
					case AltPython3Parser.OPEN_PAREN:
					case AltPython3Parser.OPEN_BRACK:
					case AltPython3Parser.ADD:
					case AltPython3Parser.MINUS:
					case AltPython3Parser.NOT_OP:
					case AltPython3Parser.OPEN_BRACE:
						{
						this.state = 472;
						this.testlist_star_expr();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 479;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testlist_star_expr(): Testlist_star_exprContext {
		let _localctx: Testlist_star_exprContext = new Testlist_star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AltPython3Parser.RULE_testlist_star_expr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 482;
				this.test();
				}
				break;

			case 2:
				{
				this.state = 483;
				this.star_expr();
				}
				break;
			}
			this.state = 493;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 486;
					this.match(AltPython3Parser.COMMA);
					this.state = 489;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
					case 1:
						{
						this.state = 487;
						this.test();
						}
						break;

					case 2:
						{
						this.state = 488;
						this.star_expr();
						}
						break;
					}
					}
					}
				}
				this.state = 495;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			}
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.COMMA) {
				{
				this.state = 496;
				this.match(AltPython3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public augassign(): AugassignContext {
		let _localctx: AugassignContext = new AugassignContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AltPython3Parser.RULE_augassign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			_la = this._input.LA(1);
			if (!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (AltPython3Parser.ADD_ASSIGN - 79)) | (1 << (AltPython3Parser.SUB_ASSIGN - 79)) | (1 << (AltPython3Parser.MULT_ASSIGN - 79)) | (1 << (AltPython3Parser.AT_ASSIGN - 79)) | (1 << (AltPython3Parser.DIV_ASSIGN - 79)) | (1 << (AltPython3Parser.MOD_ASSIGN - 79)) | (1 << (AltPython3Parser.AND_ASSIGN - 79)) | (1 << (AltPython3Parser.OR_ASSIGN - 79)) | (1 << (AltPython3Parser.XOR_ASSIGN - 79)) | (1 << (AltPython3Parser.LEFT_SHIFT_ASSIGN - 79)) | (1 << (AltPython3Parser.RIGHT_SHIFT_ASSIGN - 79)) | (1 << (AltPython3Parser.POWER_ASSIGN - 79)) | (1 << (AltPython3Parser.IDIV_ASSIGN - 79)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public del_stmt(): Del_stmtContext {
		let _localctx: Del_stmtContext = new Del_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, AltPython3Parser.RULE_del_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			this.match(AltPython3Parser.DEL);
			this.state = 502;
			this.exprlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pass_stmt(): Pass_stmtContext {
		let _localctx: Pass_stmtContext = new Pass_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AltPython3Parser.RULE_pass_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.match(AltPython3Parser.PASS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_stmt(): Flow_stmtContext {
		let _localctx: Flow_stmtContext = new Flow_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AltPython3Parser.RULE_flow_stmt);
		try {
			this.state = 511;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.BREAK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 506;
				this.break_stmt();
				}
				break;
			case AltPython3Parser.CONTINUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 507;
				this.continue_stmt();
				}
				break;
			case AltPython3Parser.RETURN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 508;
				this.return_stmt();
				}
				break;
			case AltPython3Parser.RAISE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 509;
				this.raise_stmt();
				}
				break;
			case AltPython3Parser.YIELD:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 510;
				this.yield_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public break_stmt(): Break_stmtContext {
		let _localctx: Break_stmtContext = new Break_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, AltPython3Parser.RULE_break_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.match(AltPython3Parser.BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continue_stmt(): Continue_stmtContext {
		let _localctx: Continue_stmtContext = new Continue_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, AltPython3Parser.RULE_continue_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this.match(AltPython3Parser.CONTINUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_stmt(): Return_stmtContext {
		let _localctx: Return_stmtContext = new Return_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, AltPython3Parser.RULE_return_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(AltPython3Parser.RETURN);
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
				{
				this.state = 518;
				this.testlist();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yield_stmt(): Yield_stmtContext {
		let _localctx: Yield_stmtContext = new Yield_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, AltPython3Parser.RULE_yield_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.yield_expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raise_stmt(): Raise_stmtContext {
		let _localctx: Raise_stmtContext = new Raise_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, AltPython3Parser.RULE_raise_stmt);
		let _la: number;
		try {
			this.state = 537;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 523;
				this.match(AltPython3Parser.RAISE);
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 524;
					this.test();
					this.state = 527;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === AltPython3Parser.FROM) {
						{
						this.state = 525;
						this.match(AltPython3Parser.FROM);
						this.state = 526;
						this.test();
						}
					}

					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 531;
				this.match(AltPython3Parser.RAISE);
				this.state = 532;
				this.match(AltPython3Parser.NAME);
				this.state = 533;
				this.match(AltPython3Parser.COMMA);
				this.state = 534;
				this.str();

				 	if (this.getStrictPython3Parsing()) {
						Token raiseToken = ((org.antlr.v4.runtime.tree.TerminalNodeImpl)this._ctx.children.get(0)).getSymbol();
						Token startingOffender = ((org.antlr.v4.runtime.tree.TerminalNodeImpl)this._ctx.children.get(1)).getSymbol();

						throw new NoViableAltException(this, this.getInputStream(), raiseToken, startingOffender, null,
													   this._ctx);
				 	}
				 	else {
				 		this.likelyIsPython2 = true;
				 	}
				 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_stmt(): Import_stmtContext {
		let _localctx: Import_stmtContext = new Import_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, AltPython3Parser.RULE_import_stmt);
		try {
			this.state = 541;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 539;
				this.import_name();
				}
				break;
			case AltPython3Parser.FROM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 540;
				this.import_from();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_name(): Import_nameContext {
		let _localctx: Import_nameContext = new Import_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, AltPython3Parser.RULE_import_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.match(AltPython3Parser.IMPORT);
			this.state = 544;
			this.dotted_as_names();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_from(): Import_fromContext {
		let _localctx: Import_fromContext = new Import_fromContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, AltPython3Parser.RULE_import_from);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(AltPython3Parser.FROM);
			this.state = 559;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AltPython3Parser.DOT || _la === AltPython3Parser.ELLIPSIS) {
					{
					{
					this.state = 547;
					_la = this._input.LA(1);
					if (!(_la === AltPython3Parser.DOT || _la === AltPython3Parser.ELLIPSIS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 552;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 553;
				this.dotted_name();
				}
				break;

			case 2:
				{
				this.state = 555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 554;
					_la = this._input.LA(1);
					if (!(_la === AltPython3Parser.DOT || _la === AltPython3Parser.ELLIPSIS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 557;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === AltPython3Parser.DOT || _la === AltPython3Parser.ELLIPSIS);
				}
				break;
			}
			this.state = 561;
			this.match(AltPython3Parser.IMPORT);
			this.state = 568;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.STAR:
				{
				this.state = 562;
				this.match(AltPython3Parser.STAR);
				}
				break;
			case AltPython3Parser.OPEN_PAREN:
				{
				this.state = 563;
				this.match(AltPython3Parser.OPEN_PAREN);
				this.state = 564;
				this.import_as_names();
				this.state = 565;
				this.match(AltPython3Parser.CLOSE_PAREN);
				}
				break;
			case AltPython3Parser.NAME:
				{
				this.state = 567;
				this.import_as_names();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_as_name(): Import_as_nameContext {
		let _localctx: Import_as_nameContext = new Import_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, AltPython3Parser.RULE_import_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this.match(AltPython3Parser.NAME);
			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.AS) {
				{
				this.state = 571;
				this.match(AltPython3Parser.AS);
				this.state = 572;
				this.match(AltPython3Parser.NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotted_as_name(): Dotted_as_nameContext {
		let _localctx: Dotted_as_nameContext = new Dotted_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, AltPython3Parser.RULE_dotted_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this.dotted_name();
			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.AS) {
				{
				this.state = 576;
				this.match(AltPython3Parser.AS);
				this.state = 577;
				this.match(AltPython3Parser.NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_as_names(): Import_as_namesContext {
		let _localctx: Import_as_namesContext = new Import_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, AltPython3Parser.RULE_import_as_names);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			this.import_as_name();
			this.state = 585;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 581;
					this.match(AltPython3Parser.COMMA);
					this.state = 582;
					this.import_as_name();
					}
					}
				}
				this.state = 587;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			}
			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.COMMA) {
				{
				this.state = 588;
				this.match(AltPython3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotted_as_names(): Dotted_as_namesContext {
		let _localctx: Dotted_as_namesContext = new Dotted_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, AltPython3Parser.RULE_dotted_as_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.dotted_as_name();
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.COMMA) {
				{
				{
				this.state = 592;
				this.match(AltPython3Parser.COMMA);
				this.state = 593;
				this.dotted_as_name();
				}
				}
				this.state = 598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotted_name(): Dotted_nameContext {
		let _localctx: Dotted_nameContext = new Dotted_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, AltPython3Parser.RULE_dotted_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this.match(AltPython3Parser.NAME);
			this.state = 604;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.DOT) {
				{
				{
				this.state = 600;
				this.match(AltPython3Parser.DOT);
				this.state = 601;
				this.match(AltPython3Parser.NAME);
				}
				}
				this.state = 606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global_stmt(): Global_stmtContext {
		let _localctx: Global_stmtContext = new Global_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, AltPython3Parser.RULE_global_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.match(AltPython3Parser.GLOBAL);
			this.state = 608;
			this.match(AltPython3Parser.NAME);
			this.state = 613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.COMMA) {
				{
				{
				this.state = 609;
				this.match(AltPython3Parser.COMMA);
				this.state = 610;
				this.match(AltPython3Parser.NAME);
				}
				}
				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonlocal_stmt(): Nonlocal_stmtContext {
		let _localctx: Nonlocal_stmtContext = new Nonlocal_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, AltPython3Parser.RULE_nonlocal_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			this.match(AltPython3Parser.NONLOCAL);
			this.state = 617;
			this.match(AltPython3Parser.NAME);
			this.state = 622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.COMMA) {
				{
				{
				this.state = 618;
				this.match(AltPython3Parser.COMMA);
				this.state = 619;
				this.match(AltPython3Parser.NAME);
				}
				}
				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assert_stmt(): Assert_stmtContext {
		let _localctx: Assert_stmtContext = new Assert_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, AltPython3Parser.RULE_assert_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
			this.match(AltPython3Parser.ASSERT);
			this.state = 626;
			this.test();
			this.state = 629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.COMMA) {
				{
				this.state = 627;
				this.match(AltPython3Parser.COMMA);
				this.state = 628;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_stmt(): Compound_stmtContext {
		let _localctx: Compound_stmtContext = new Compound_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, AltPython3Parser.RULE_compound_stmt);
		try {
			this.state = 639;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 631;
				this.if_stmt();
				}
				break;
			case AltPython3Parser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 632;
				this.while_stmt();
				}
				break;
			case AltPython3Parser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 633;
				this.for_stmt();
				}
				break;
			case AltPython3Parser.TRY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 634;
				this.try_stmt();
				}
				break;
			case AltPython3Parser.WITH:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 635;
				this.with_stmt();
				}
				break;
			case AltPython3Parser.DEF:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 636;
				this.funcdef();
				}
				break;
			case AltPython3Parser.CLASS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 637;
				this.classdef();
				}
				break;
			case AltPython3Parser.AT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 638;
				this.decorated();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, AltPython3Parser.RULE_if_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this.match(AltPython3Parser.IF);
			this.state = 642;
			this.test();
			this.state = 643;
			this.match(AltPython3Parser.COLON);
			this.state = 644;
			this.suite();
			this.state = 652;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.ELIF) {
				{
				{
				this.state = 645;
				this.match(AltPython3Parser.ELIF);
				this.state = 646;
				this.test();
				this.state = 647;
				this.match(AltPython3Parser.COLON);
				this.state = 648;
				this.suite();
				}
				}
				this.state = 654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.ELSE) {
				{
				this.state = 655;
				this.match(AltPython3Parser.ELSE);
				this.state = 656;
				this.match(AltPython3Parser.COLON);
				this.state = 657;
				this.suite();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public while_stmt(): While_stmtContext {
		let _localctx: While_stmtContext = new While_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, AltPython3Parser.RULE_while_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			this.match(AltPython3Parser.WHILE);
			this.state = 661;
			this.test();
			this.state = 662;
			this.match(AltPython3Parser.COLON);
			this.state = 663;
			this.suite();
			this.state = 667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.ELSE) {
				{
				this.state = 664;
				this.match(AltPython3Parser.ELSE);
				this.state = 665;
				this.match(AltPython3Parser.COLON);
				this.state = 666;
				this.suite();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_stmt(): For_stmtContext {
		let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, AltPython3Parser.RULE_for_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.match(AltPython3Parser.FOR);
			this.state = 670;
			this.exprlist();
			this.state = 671;
			this.match(AltPython3Parser.IN);
			this.state = 672;
			this.testlist();
			this.state = 673;
			this.match(AltPython3Parser.COLON);
			this.state = 674;
			this.suite();
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.ELSE) {
				{
				this.state = 675;
				this.match(AltPython3Parser.ELSE);
				this.state = 676;
				this.match(AltPython3Parser.COLON);
				this.state = 677;
				this.suite();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public try_stmt(): Try_stmtContext {
		let _localctx: Try_stmtContext = new Try_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, AltPython3Parser.RULE_try_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
			this.match(AltPython3Parser.TRY);
			this.state = 681;
			this.match(AltPython3Parser.COLON);
			this.state = 682;
			this.suite();
			this.state = 704;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.EXCEPT:
				{
				this.state = 687;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 683;
					this.except_clause();
					this.state = 684;
					this.match(AltPython3Parser.COLON);
					this.state = 685;
					this.suite();
					}
					}
					this.state = 689;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === AltPython3Parser.EXCEPT);
				this.state = 694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.ELSE) {
					{
					this.state = 691;
					this.match(AltPython3Parser.ELSE);
					this.state = 692;
					this.match(AltPython3Parser.COLON);
					this.state = 693;
					this.suite();
					}
				}

				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.FINALLY) {
					{
					this.state = 696;
					this.match(AltPython3Parser.FINALLY);
					this.state = 697;
					this.match(AltPython3Parser.COLON);
					this.state = 698;
					this.suite();
					}
				}

				}
				break;
			case AltPython3Parser.FINALLY:
				{
				this.state = 701;
				this.match(AltPython3Parser.FINALLY);
				this.state = 702;
				this.match(AltPython3Parser.COLON);
				this.state = 703;
				this.suite();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public with_stmt(): With_stmtContext {
		let _localctx: With_stmtContext = new With_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, AltPython3Parser.RULE_with_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			this.match(AltPython3Parser.WITH);
			this.state = 707;
			this.with_item();
			this.state = 712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.COMMA) {
				{
				{
				this.state = 708;
				this.match(AltPython3Parser.COMMA);
				this.state = 709;
				this.with_item();
				}
				}
				this.state = 714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 715;
			this.match(AltPython3Parser.COLON);
			this.state = 716;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public with_item(): With_itemContext {
		let _localctx: With_itemContext = new With_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, AltPython3Parser.RULE_with_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.test();
			this.state = 721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.AS) {
				{
				this.state = 719;
				this.match(AltPython3Parser.AS);
				this.state = 720;
				this.expr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public except_clause(): Except_clauseContext {
		let _localctx: Except_clauseContext = new Except_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, AltPython3Parser.RULE_except_clause);
		let _la: number;
		try {
			this.state = 736;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 723;
				this.match(AltPython3Parser.EXCEPT);
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 724;
					this.test();
					this.state = 727;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === AltPython3Parser.AS) {
						{
						this.state = 725;
						this.match(AltPython3Parser.AS);
						this.state = 726;
						this.match(AltPython3Parser.NAME);
						}
					}

					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 731;
				this.match(AltPython3Parser.EXCEPT);
				this.state = 732;
				this.match(AltPython3Parser.NAME);
				this.state = 733;
				this.match(AltPython3Parser.COMMA);
				this.state = 734;
				this.match(AltPython3Parser.NAME);

				 	if (this.getStrictPython3Parsing()) {
						Token exceptToken = ((org.antlr.v4.runtime.tree.TerminalNodeImpl)this._ctx.children.get(0)).getSymbol();
						Token startingOffender = ((org.antlr.v4.runtime.tree.TerminalNodeImpl)this._ctx.children.get(1)).getSymbol();

						throw new NoViableAltException(this, this.getInputStream(), exceptToken, startingOffender, null,
													   this._ctx);
				 	}
				 	else {
				 		this.likelyIsPython2 = true;
				 	}
				 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public suite(): SuiteContext {
		let _localctx: SuiteContext = new SuiteContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, AltPython3Parser.RULE_suite);
		let _la: number;
		try {
			this.state = 748;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.PRINT:
			case AltPython3Parser.RETURN:
			case AltPython3Parser.RAISE:
			case AltPython3Parser.FROM:
			case AltPython3Parser.IMPORT:
			case AltPython3Parser.GLOBAL:
			case AltPython3Parser.NONLOCAL:
			case AltPython3Parser.ASSERT:
			case AltPython3Parser.LAMBDA:
			case AltPython3Parser.NOT:
			case AltPython3Parser.NONE:
			case AltPython3Parser.TRUE:
			case AltPython3Parser.FALSE:
			case AltPython3Parser.YIELD:
			case AltPython3Parser.DEL:
			case AltPython3Parser.PASS:
			case AltPython3Parser.CONTINUE:
			case AltPython3Parser.BREAK:
			case AltPython3Parser.NAME:
			case AltPython3Parser.STRING_LITERAL:
			case AltPython3Parser.BYTES_LITERAL:
			case AltPython3Parser.DECIMAL_INTEGER:
			case AltPython3Parser.OCT_INTEGER:
			case AltPython3Parser.HEX_INTEGER:
			case AltPython3Parser.BIN_INTEGER:
			case AltPython3Parser.FLOAT_NUMBER:
			case AltPython3Parser.IMAG_NUMBER:
			case AltPython3Parser.ELLIPSIS:
			case AltPython3Parser.STAR:
			case AltPython3Parser.OPEN_PAREN:
			case AltPython3Parser.OPEN_BRACK:
			case AltPython3Parser.ADD:
			case AltPython3Parser.MINUS:
			case AltPython3Parser.NOT_OP:
			case AltPython3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 738;
				this.simple_stmt();
				}
				break;
			case AltPython3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 739;
				this.match(AltPython3Parser.NEWLINE);
				this.state = 740;
				this.match(AltPython3Parser.INDENT);
				this.state = 742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 741;
					this.stmt();
					}
					}
					this.state = 744;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AltPython3Parser.PRINT) | (1 << AltPython3Parser.DEF) | (1 << AltPython3Parser.RETURN) | (1 << AltPython3Parser.RAISE) | (1 << AltPython3Parser.FROM) | (1 << AltPython3Parser.IMPORT) | (1 << AltPython3Parser.GLOBAL) | (1 << AltPython3Parser.NONLOCAL) | (1 << AltPython3Parser.ASSERT) | (1 << AltPython3Parser.IF) | (1 << AltPython3Parser.WHILE) | (1 << AltPython3Parser.FOR) | (1 << AltPython3Parser.TRY) | (1 << AltPython3Parser.WITH) | (1 << AltPython3Parser.LAMBDA) | (1 << AltPython3Parser.NOT) | (1 << AltPython3Parser.NONE) | (1 << AltPython3Parser.TRUE) | (1 << AltPython3Parser.FALSE) | (1 << AltPython3Parser.CLASS) | (1 << AltPython3Parser.YIELD) | (1 << AltPython3Parser.DEL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AltPython3Parser.PASS - 32)) | (1 << (AltPython3Parser.CONTINUE - 32)) | (1 << (AltPython3Parser.BREAK - 32)) | (1 << (AltPython3Parser.NAME - 32)) | (1 << (AltPython3Parser.STRING_LITERAL - 32)) | (1 << (AltPython3Parser.BYTES_LITERAL - 32)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 32)) | (1 << (AltPython3Parser.OCT_INTEGER - 32)) | (1 << (AltPython3Parser.HEX_INTEGER - 32)) | (1 << (AltPython3Parser.BIN_INTEGER - 32)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 32)) | (1 << (AltPython3Parser.IMAG_NUMBER - 32)) | (1 << (AltPython3Parser.ELLIPSIS - 32)) | (1 << (AltPython3Parser.STAR - 32)) | (1 << (AltPython3Parser.OPEN_PAREN - 32)) | (1 << (AltPython3Parser.OPEN_BRACK - 32)) | (1 << (AltPython3Parser.ADD - 32)) | (1 << (AltPython3Parser.MINUS - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (AltPython3Parser.NOT_OP - 67)) | (1 << (AltPython3Parser.OPEN_BRACE - 67)) | (1 << (AltPython3Parser.AT - 67)))) !== 0));
				this.state = 746;
				this.match(AltPython3Parser.DEDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, AltPython3Parser.RULE_test);
		let _la: number;
		try {
			this.state = 759;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.NOT:
			case AltPython3Parser.NONE:
			case AltPython3Parser.TRUE:
			case AltPython3Parser.FALSE:
			case AltPython3Parser.NAME:
			case AltPython3Parser.STRING_LITERAL:
			case AltPython3Parser.BYTES_LITERAL:
			case AltPython3Parser.DECIMAL_INTEGER:
			case AltPython3Parser.OCT_INTEGER:
			case AltPython3Parser.HEX_INTEGER:
			case AltPython3Parser.BIN_INTEGER:
			case AltPython3Parser.FLOAT_NUMBER:
			case AltPython3Parser.IMAG_NUMBER:
			case AltPython3Parser.ELLIPSIS:
			case AltPython3Parser.STAR:
			case AltPython3Parser.OPEN_PAREN:
			case AltPython3Parser.OPEN_BRACK:
			case AltPython3Parser.ADD:
			case AltPython3Parser.MINUS:
			case AltPython3Parser.NOT_OP:
			case AltPython3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 750;
				this.or_test();
				this.state = 756;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.IF) {
					{
					this.state = 751;
					this.match(AltPython3Parser.IF);
					this.state = 752;
					this.or_test();
					this.state = 753;
					this.match(AltPython3Parser.ELSE);
					this.state = 754;
					this.test();
					}
				}

				}
				break;
			case AltPython3Parser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 758;
				this.lambdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test_nocond(): Test_nocondContext {
		let _localctx: Test_nocondContext = new Test_nocondContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, AltPython3Parser.RULE_test_nocond);
		try {
			this.state = 763;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.NOT:
			case AltPython3Parser.NONE:
			case AltPython3Parser.TRUE:
			case AltPython3Parser.FALSE:
			case AltPython3Parser.NAME:
			case AltPython3Parser.STRING_LITERAL:
			case AltPython3Parser.BYTES_LITERAL:
			case AltPython3Parser.DECIMAL_INTEGER:
			case AltPython3Parser.OCT_INTEGER:
			case AltPython3Parser.HEX_INTEGER:
			case AltPython3Parser.BIN_INTEGER:
			case AltPython3Parser.FLOAT_NUMBER:
			case AltPython3Parser.IMAG_NUMBER:
			case AltPython3Parser.ELLIPSIS:
			case AltPython3Parser.STAR:
			case AltPython3Parser.OPEN_PAREN:
			case AltPython3Parser.OPEN_BRACK:
			case AltPython3Parser.ADD:
			case AltPython3Parser.MINUS:
			case AltPython3Parser.NOT_OP:
			case AltPython3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 761;
				this.or_test();
				}
				break;
			case AltPython3Parser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 762;
				this.lambdef_nocond();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdef(): LambdefContext {
		let _localctx: LambdefContext = new LambdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, AltPython3Parser.RULE_lambdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 765;
			this.match(AltPython3Parser.LAMBDA);
			this.state = 767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AltPython3Parser.NAME - 36)) | (1 << (AltPython3Parser.STAR - 36)) | (1 << (AltPython3Parser.POWER - 36)))) !== 0)) {
				{
				this.state = 766;
				this.varargslist();
				}
			}

			this.state = 769;
			this.match(AltPython3Parser.COLON);
			this.state = 770;
			this.test();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdef_nocond(): Lambdef_nocondContext {
		let _localctx: Lambdef_nocondContext = new Lambdef_nocondContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, AltPython3Parser.RULE_lambdef_nocond);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
			this.match(AltPython3Parser.LAMBDA);
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AltPython3Parser.NAME - 36)) | (1 << (AltPython3Parser.STAR - 36)) | (1 << (AltPython3Parser.POWER - 36)))) !== 0)) {
				{
				this.state = 773;
				this.varargslist();
				}
			}

			this.state = 776;
			this.match(AltPython3Parser.COLON);
			this.state = 777;
			this.test_nocond();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public or_test(): Or_testContext {
		let _localctx: Or_testContext = new Or_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, AltPython3Parser.RULE_or_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this.and_test();
			this.state = 784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.OR) {
				{
				{
				this.state = 780;
				this.match(AltPython3Parser.OR);
				this.state = 781;
				this.and_test();
				}
				}
				this.state = 786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public and_test(): And_testContext {
		let _localctx: And_testContext = new And_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, AltPython3Parser.RULE_and_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			this.not_test();
			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.AND) {
				{
				{
				this.state = 788;
				this.match(AltPython3Parser.AND);
				this.state = 789;
				this.not_test();
				}
				}
				this.state = 794;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public not_test(): Not_testContext {
		let _localctx: Not_testContext = new Not_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, AltPython3Parser.RULE_not_test);
		try {
			this.state = 798;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 795;
				this.match(AltPython3Parser.NOT);
				this.state = 796;
				this.not_test();
				}
				break;
			case AltPython3Parser.NONE:
			case AltPython3Parser.TRUE:
			case AltPython3Parser.FALSE:
			case AltPython3Parser.NAME:
			case AltPython3Parser.STRING_LITERAL:
			case AltPython3Parser.BYTES_LITERAL:
			case AltPython3Parser.DECIMAL_INTEGER:
			case AltPython3Parser.OCT_INTEGER:
			case AltPython3Parser.HEX_INTEGER:
			case AltPython3Parser.BIN_INTEGER:
			case AltPython3Parser.FLOAT_NUMBER:
			case AltPython3Parser.IMAG_NUMBER:
			case AltPython3Parser.ELLIPSIS:
			case AltPython3Parser.STAR:
			case AltPython3Parser.OPEN_PAREN:
			case AltPython3Parser.OPEN_BRACK:
			case AltPython3Parser.ADD:
			case AltPython3Parser.MINUS:
			case AltPython3Parser.NOT_OP:
			case AltPython3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 797;
				this.comparison();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, AltPython3Parser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 800;
			this.star_expr();
			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AltPython3Parser.IN) | (1 << AltPython3Parser.NOT) | (1 << AltPython3Parser.IS))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (AltPython3Parser.LESS_THAN - 70)) | (1 << (AltPython3Parser.GREATER_THAN - 70)) | (1 << (AltPython3Parser.EQUALS - 70)) | (1 << (AltPython3Parser.GT_EQ - 70)) | (1 << (AltPython3Parser.LT_EQ - 70)) | (1 << (AltPython3Parser.NOT_EQ_1 - 70)) | (1 << (AltPython3Parser.NOT_EQ_2 - 70)))) !== 0)) {
				{
				{
				this.state = 801;
				this.comp_op();
				this.state = 802;
				this.star_expr();
				}
				}
				this.state = 808;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comp_op(): Comp_opContext {
		let _localctx: Comp_opContext = new Comp_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, AltPython3Parser.RULE_comp_op);
		try {
			this.state = 822;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 809;
				this.match(AltPython3Parser.LESS_THAN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 810;
				this.match(AltPython3Parser.GREATER_THAN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 811;
				this.match(AltPython3Parser.EQUALS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 812;
				this.match(AltPython3Parser.GT_EQ);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 813;
				this.match(AltPython3Parser.LT_EQ);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 814;
				this.match(AltPython3Parser.NOT_EQ_1);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 815;
				this.match(AltPython3Parser.NOT_EQ_2);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 816;
				this.match(AltPython3Parser.IN);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 817;
				this.match(AltPython3Parser.NOT);
				this.state = 818;
				this.match(AltPython3Parser.IN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 819;
				this.match(AltPython3Parser.IS);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 820;
				this.match(AltPython3Parser.IS);
				this.state = 821;
				this.match(AltPython3Parser.NOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public star_expr(): Star_exprContext {
		let _localctx: Star_exprContext = new Star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, AltPython3Parser.RULE_star_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.STAR) {
				{
				this.state = 824;
				this.match(AltPython3Parser.STAR);
				}
			}

			this.state = 827;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, AltPython3Parser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.xor_expr();
			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.OR_OP) {
				{
				{
				this.state = 830;
				this.match(AltPython3Parser.OR_OP);
				this.state = 831;
				this.xor_expr();
				}
				}
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xor_expr(): Xor_exprContext {
		let _localctx: Xor_exprContext = new Xor_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, AltPython3Parser.RULE_xor_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 837;
			this.and_expr();
			this.state = 842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.XOR) {
				{
				{
				this.state = 838;
				this.match(AltPython3Parser.XOR);
				this.state = 839;
				this.and_expr();
				}
				}
				this.state = 844;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public and_expr(): And_exprContext {
		let _localctx: And_exprContext = new And_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, AltPython3Parser.RULE_and_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this.shift_expr();
			this.state = 850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.AND_OP) {
				{
				{
				this.state = 846;
				this.match(AltPython3Parser.AND_OP);
				this.state = 847;
				this.shift_expr();
				}
				}
				this.state = 852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shift_expr(): Shift_exprContext {
		let _localctx: Shift_exprContext = new Shift_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, AltPython3Parser.RULE_shift_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 853;
			this.arith_expr();
			this.state = 860;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.LEFT_SHIFT || _la === AltPython3Parser.RIGHT_SHIFT) {
				{
				this.state = 858;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AltPython3Parser.LEFT_SHIFT:
					{
					this.state = 854;
					this.match(AltPython3Parser.LEFT_SHIFT);
					this.state = 855;
					this.arith_expr();
					}
					break;
				case AltPython3Parser.RIGHT_SHIFT:
					{
					this.state = 856;
					this.match(AltPython3Parser.RIGHT_SHIFT);
					this.state = 857;
					this.arith_expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 862;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arith_expr(): Arith_exprContext {
		let _localctx: Arith_exprContext = new Arith_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, AltPython3Parser.RULE_arith_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 863;
			this.term();
			this.state = 870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AltPython3Parser.ADD || _la === AltPython3Parser.MINUS) {
				{
				this.state = 868;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AltPython3Parser.ADD:
					{
					this.state = 864;
					this.match(AltPython3Parser.ADD);
					this.state = 865;
					this.term();
					}
					break;
				case AltPython3Parser.MINUS:
					{
					this.state = 866;
					this.match(AltPython3Parser.MINUS);
					this.state = 867;
					this.term();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, AltPython3Parser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 873;
			this.factor();
			this.state = 886;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (AltPython3Parser.STAR - 47)) | (1 << (AltPython3Parser.DIV - 47)) | (1 << (AltPython3Parser.MOD - 47)) | (1 << (AltPython3Parser.IDIV - 47)) | (1 << (AltPython3Parser.AT - 47)))) !== 0)) {
				{
				this.state = 884;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AltPython3Parser.STAR:
					{
					this.state = 874;
					this.match(AltPython3Parser.STAR);
					this.state = 875;
					this.factor();
					}
					break;
				case AltPython3Parser.DIV:
					{
					this.state = 876;
					this.match(AltPython3Parser.DIV);
					this.state = 877;
					this.factor();
					}
					break;
				case AltPython3Parser.MOD:
					{
					this.state = 878;
					this.match(AltPython3Parser.MOD);
					this.state = 879;
					this.factor();
					}
					break;
				case AltPython3Parser.IDIV:
					{
					this.state = 880;
					this.match(AltPython3Parser.IDIV);
					this.state = 881;
					this.factor();
					}
					break;
				case AltPython3Parser.AT:
					{
					this.state = 882;
					this.match(AltPython3Parser.AT);
					this.state = 883;
					this.factor();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, AltPython3Parser.RULE_factor);
		try {
			this.state = 896;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.ADD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 889;
				this.match(AltPython3Parser.ADD);
				this.state = 890;
				this.factor();
				}
				break;
			case AltPython3Parser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 891;
				this.match(AltPython3Parser.MINUS);
				this.state = 892;
				this.factor();
				}
				break;
			case AltPython3Parser.NOT_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 893;
				this.match(AltPython3Parser.NOT_OP);
				this.state = 894;
				this.factor();
				}
				break;
			case AltPython3Parser.NONE:
			case AltPython3Parser.TRUE:
			case AltPython3Parser.FALSE:
			case AltPython3Parser.NAME:
			case AltPython3Parser.STRING_LITERAL:
			case AltPython3Parser.BYTES_LITERAL:
			case AltPython3Parser.DECIMAL_INTEGER:
			case AltPython3Parser.OCT_INTEGER:
			case AltPython3Parser.HEX_INTEGER:
			case AltPython3Parser.BIN_INTEGER:
			case AltPython3Parser.FLOAT_NUMBER:
			case AltPython3Parser.IMAG_NUMBER:
			case AltPython3Parser.ELLIPSIS:
			case AltPython3Parser.OPEN_PAREN:
			case AltPython3Parser.OPEN_BRACK:
			case AltPython3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 895;
				this.power();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public power(): PowerContext {
		let _localctx: PowerContext = new PowerContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, AltPython3Parser.RULE_power);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 898;
			this.atom();
			this.state = 902;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (AltPython3Parser.DOT - 45)) | (1 << (AltPython3Parser.OPEN_PAREN - 45)) | (1 << (AltPython3Parser.OPEN_BRACK - 45)))) !== 0)) {
				{
				{
				this.state = 899;
				this.trailer();
				}
				}
				this.state = 904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 907;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.POWER) {
				{
				this.state = 905;
				this.match(AltPython3Parser.POWER);
				this.state = 906;
				this.factor();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, AltPython3Parser.RULE_atom);
		let _la: number;
		try {
			this.state = 937;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 909;
				this.match(AltPython3Parser.OPEN_PAREN);
				this.state = 912;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AltPython3Parser.YIELD:
					{
					this.state = 910;
					this.yield_expr();
					}
					break;
				case AltPython3Parser.LAMBDA:
				case AltPython3Parser.NOT:
				case AltPython3Parser.NONE:
				case AltPython3Parser.TRUE:
				case AltPython3Parser.FALSE:
				case AltPython3Parser.NAME:
				case AltPython3Parser.STRING_LITERAL:
				case AltPython3Parser.BYTES_LITERAL:
				case AltPython3Parser.DECIMAL_INTEGER:
				case AltPython3Parser.OCT_INTEGER:
				case AltPython3Parser.HEX_INTEGER:
				case AltPython3Parser.BIN_INTEGER:
				case AltPython3Parser.FLOAT_NUMBER:
				case AltPython3Parser.IMAG_NUMBER:
				case AltPython3Parser.ELLIPSIS:
				case AltPython3Parser.STAR:
				case AltPython3Parser.OPEN_PAREN:
				case AltPython3Parser.OPEN_BRACK:
				case AltPython3Parser.ADD:
				case AltPython3Parser.MINUS:
				case AltPython3Parser.NOT_OP:
				case AltPython3Parser.OPEN_BRACE:
					{
					this.state = 911;
					this.testlist_comp();
					}
					break;
				case AltPython3Parser.CLOSE_PAREN:
					break;
				default:
					break;
				}
				this.state = 914;
				this.match(AltPython3Parser.CLOSE_PAREN);
				}
				break;
			case AltPython3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 915;
				this.match(AltPython3Parser.OPEN_BRACK);
				this.state = 917;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 916;
					this.testlist_comp();
					}
				}

				this.state = 919;
				this.match(AltPython3Parser.CLOSE_BRACK);
				}
				break;
			case AltPython3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 920;
				this.match(AltPython3Parser.OPEN_BRACE);
				this.state = 922;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 921;
					this.dictorsetmaker();
					}
				}

				this.state = 924;
				this.match(AltPython3Parser.CLOSE_BRACE);
				}
				break;
			case AltPython3Parser.NAME:
				this.enterOuterAlt(_localctx, 4);
				{

					org.antlr.v4.runtime.CommonToken token = null;
					String tokenName = null;

					if (this._ctx.start instanceof org.antlr.v4.runtime.CommonToken) {
						token = (org.antlr.v4.runtime.CommonToken)this._ctx.start;

						if (token.getType() != AltPython3Parser.ALREADY_THROWN_TOKEN_TYPE) {
							tokenName = token.getText();
						}
					}

					if ("xrange".equals(tokenName) || "raw_input".equals(tokenName)) {
						if (this.getStrictPython3Parsing()) {
							// This throws twice - the second time on parenthesis close.
							token.setType(AltPython3Parser.ALREADY_THROWN_TOKEN_TYPE);

							throw new NoViableAltException(this);
						}
						else {
							this.likelyIsPython2 = true;
						}
					}
				 
				this.state = 926;
				this.match(AltPython3Parser.NAME);
				}
				break;
			case AltPython3Parser.DECIMAL_INTEGER:
			case AltPython3Parser.OCT_INTEGER:
			case AltPython3Parser.HEX_INTEGER:
			case AltPython3Parser.BIN_INTEGER:
			case AltPython3Parser.FLOAT_NUMBER:
			case AltPython3Parser.IMAG_NUMBER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 927;
				this.number();
				}
				break;
			case AltPython3Parser.STRING_LITERAL:
			case AltPython3Parser.BYTES_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 928;
					this.str();
					}
					}
					this.state = 931;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === AltPython3Parser.STRING_LITERAL || _la === AltPython3Parser.BYTES_LITERAL);
				}
				break;
			case AltPython3Parser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 933;
				this.match(AltPython3Parser.ELLIPSIS);
				}
				break;
			case AltPython3Parser.NONE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 934;
				this.match(AltPython3Parser.NONE);
				}
				break;
			case AltPython3Parser.TRUE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 935;
				this.match(AltPython3Parser.TRUE);
				}
				break;
			case AltPython3Parser.FALSE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 936;
				this.match(AltPython3Parser.FALSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testlist_comp(): Testlist_compContext {
		let _localctx: Testlist_compContext = new Testlist_compContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, AltPython3Parser.RULE_testlist_comp);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 939;
			this.test();
			this.state = 951;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.FOR:
				{
				this.state = 940;
				this.comp_for();
				}
				break;
			case AltPython3Parser.CLOSE_PAREN:
			case AltPython3Parser.COMMA:
			case AltPython3Parser.CLOSE_BRACK:
				{
				this.state = 945;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 941;
						this.match(AltPython3Parser.COMMA);
						this.state = 942;
						this.test();
						}
						}
					}
					this.state = 947;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
				}
				this.state = 949;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.COMMA) {
					{
					this.state = 948;
					this.match(AltPython3Parser.COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailer(): TrailerContext {
		let _localctx: TrailerContext = new TrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, AltPython3Parser.RULE_trailer);
		let _la: number;
		try {
			this.state = 965;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 953;
				this.match(AltPython3Parser.OPEN_PAREN);
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (AltPython3Parser.POWER - 53)) | (1 << (AltPython3Parser.OPEN_BRACK - 53)) | (1 << (AltPython3Parser.ADD - 53)) | (1 << (AltPython3Parser.MINUS - 53)) | (1 << (AltPython3Parser.NOT_OP - 53)) | (1 << (AltPython3Parser.OPEN_BRACE - 53)))) !== 0)) {
					{
					this.state = 954;
					this.arglist();
					}
				}

				this.state = 957;
				this.match(AltPython3Parser.CLOSE_PAREN);
				}
				break;
			case AltPython3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 958;
				this.match(AltPython3Parser.OPEN_BRACK);
				this.state = 959;
				this.subscriptlist();
				this.state = 960;
				this.match(AltPython3Parser.CLOSE_BRACK);
				}
				break;
			case AltPython3Parser.DOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 962;
				this.match(AltPython3Parser.DOT);
				this.state = 963;
				this.match(AltPython3Parser.NAME);

					if ("next".equals(this._ctx.children.get(1).getText())) {
						if (this.getStrictPython3Parsing()) {
							TerminalNode tn = ((org.antlr.v4.runtime.tree.TerminalNodeImpl)this._ctx.children.get(0));
							Token parentObject = ((PowerContext)tn.getParent().getParent()).start;
							Token offendingToken = ((org.antlr.v4.runtime.tree.TerminalNodeImpl)this._ctx.children.get(1)).getSymbol();

							throw new NoViableAltException(this, this.getInputStream(), parentObject, offendingToken, null,
														   this._ctx);
						}
						else {
							this.likelyIsPython2 = true;
						}
					}
				 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscriptlist(): SubscriptlistContext {
		let _localctx: SubscriptlistContext = new SubscriptlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, AltPython3Parser.RULE_subscriptlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			this.subscript();
			this.state = 972;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 968;
					this.match(AltPython3Parser.COMMA);
					this.state = 969;
					this.subscript();
					}
					}
				}
				this.state = 974;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			}
			this.state = 976;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.COMMA) {
				{
				this.state = 975;
				this.match(AltPython3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscript(): SubscriptContext {
		let _localctx: SubscriptContext = new SubscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, AltPython3Parser.RULE_subscript);
		let _la: number;
		try {
			this.state = 989;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 978;
				this.test();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 979;
					this.test();
					}
				}

				this.state = 982;
				this.match(AltPython3Parser.COLON);
				this.state = 984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 983;
					this.test();
					}
				}

				this.state = 987;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.COLON) {
					{
					this.state = 986;
					this.sliceop();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceop(): SliceopContext {
		let _localctx: SliceopContext = new SliceopContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, AltPython3Parser.RULE_sliceop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 991;
			this.match(AltPython3Parser.COLON);
			this.state = 993;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
				{
				this.state = 992;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprlist(): ExprlistContext {
		let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, AltPython3Parser.RULE_exprlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 995;
			this.star_expr();
			this.state = 1000;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 996;
					this.match(AltPython3Parser.COMMA);
					this.state = 997;
					this.star_expr();
					}
					}
				}
				this.state = 1002;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			}
			this.state = 1004;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.COMMA) {
				{
				this.state = 1003;
				this.match(AltPython3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testlist(): TestlistContext {
		let _localctx: TestlistContext = new TestlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, AltPython3Parser.RULE_testlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1006;
			this.test();
			this.state = 1011;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1007;
					this.match(AltPython3Parser.COMMA);
					this.state = 1008;
					this.test();
					}
					}
				}
				this.state = 1013;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
			}
			this.state = 1015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.COMMA) {
				{
				this.state = 1014;
				this.match(AltPython3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictorsetmaker(): DictorsetmakerContext {
		let _localctx: DictorsetmakerContext = new DictorsetmakerContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, AltPython3Parser.RULE_dictorsetmaker);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1050;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1017;
				this.test();
				this.state = 1018;
				this.match(AltPython3Parser.COLON);
				this.state = 1019;
				this.test();
				this.state = 1034;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AltPython3Parser.FOR:
					{
					this.state = 1020;
					this.comp_for();
					}
					break;
				case AltPython3Parser.COMMA:
				case AltPython3Parser.CLOSE_BRACE:
					{
					this.state = 1028;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1021;
							this.match(AltPython3Parser.COMMA);
							this.state = 1022;
							this.test();
							this.state = 1023;
							this.match(AltPython3Parser.COLON);
							this.state = 1024;
							this.test();
							}
							}
						}
						this.state = 1030;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
					}
					this.state = 1032;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === AltPython3Parser.COMMA) {
						{
						this.state = 1031;
						this.match(AltPython3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1036;
				this.test();
				this.state = 1048;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AltPython3Parser.FOR:
					{
					this.state = 1037;
					this.comp_for();
					}
					break;
				case AltPython3Parser.COMMA:
				case AltPython3Parser.CLOSE_BRACE:
					{
					this.state = 1042;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1038;
							this.match(AltPython3Parser.COMMA);
							this.state = 1039;
							this.test();
							}
							}
						}
						this.state = 1044;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
					}
					this.state = 1046;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === AltPython3Parser.COMMA) {
						{
						this.state = 1045;
						this.match(AltPython3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classdef(): ClassdefContext {
		let _localctx: ClassdefContext = new ClassdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, AltPython3Parser.RULE_classdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1052;
			this.match(AltPython3Parser.CLASS);
			this.state = 1053;
			this.match(AltPython3Parser.NAME);
			this.state = 1059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.OPEN_PAREN) {
				{
				this.state = 1054;
				this.match(AltPython3Parser.OPEN_PAREN);
				this.state = 1056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (AltPython3Parser.POWER - 53)) | (1 << (AltPython3Parser.OPEN_BRACK - 53)) | (1 << (AltPython3Parser.ADD - 53)) | (1 << (AltPython3Parser.MINUS - 53)) | (1 << (AltPython3Parser.NOT_OP - 53)) | (1 << (AltPython3Parser.OPEN_BRACE - 53)))) !== 0)) {
					{
					this.state = 1055;
					this.arglist();
					}
				}

				this.state = 1058;
				this.match(AltPython3Parser.CLOSE_PAREN);
				}
			}

			this.state = 1061;
			this.match(AltPython3Parser.COLON);
			this.state = 1062;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arglist(): ArglistContext {
		let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, AltPython3Parser.RULE_arglist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1069;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1064;
					this.argument();
					this.state = 1065;
					this.match(AltPython3Parser.COMMA);
					}
					}
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
			}
			this.state = 1092;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				{
				this.state = 1072;
				this.argument();
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.COMMA) {
					{
					this.state = 1073;
					this.match(AltPython3Parser.COMMA);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1076;
				this.match(AltPython3Parser.STAR);
				this.state = 1077;
				this.test();
				this.state = 1082;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1078;
						this.match(AltPython3Parser.COMMA);
						this.state = 1079;
						this.argument();
						}
						}
					}
					this.state = 1084;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
				}
				this.state = 1088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.COMMA) {
					{
					this.state = 1085;
					this.match(AltPython3Parser.COMMA);
					this.state = 1086;
					this.match(AltPython3Parser.POWER);
					this.state = 1087;
					this.test();
					}
				}

				}
				break;

			case 3:
				{
				this.state = 1090;
				this.match(AltPython3Parser.POWER);
				this.state = 1091;
				this.test();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, AltPython3Parser.RULE_argument);
		let _la: number;
		try {
			this.state = 1102;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1094;
				this.test();
				this.state = 1096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AltPython3Parser.FOR) {
					{
					this.state = 1095;
					this.comp_for();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1098;
				this.test();
				this.state = 1099;
				this.match(AltPython3Parser.ASSIGN);
				this.state = 1100;
				this.test();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comp_iter(): Comp_iterContext {
		let _localctx: Comp_iterContext = new Comp_iterContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, AltPython3Parser.RULE_comp_iter);
		try {
			this.state = 1106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1104;
				this.comp_for();
				}
				break;
			case AltPython3Parser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1105;
				this.comp_if();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comp_for(): Comp_forContext {
		let _localctx: Comp_forContext = new Comp_forContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, AltPython3Parser.RULE_comp_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1108;
			this.match(AltPython3Parser.FOR);
			this.state = 1109;
			this.exprlist();
			this.state = 1110;
			this.match(AltPython3Parser.IN);
			this.state = 1111;
			this.or_test();
			this.state = 1113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.IF || _la === AltPython3Parser.FOR) {
				{
				this.state = 1112;
				this.comp_iter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comp_if(): Comp_ifContext {
		let _localctx: Comp_ifContext = new Comp_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, AltPython3Parser.RULE_comp_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1115;
			this.match(AltPython3Parser.IF);
			this.state = 1116;
			this.test_nocond();
			this.state = 1118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AltPython3Parser.IF || _la === AltPython3Parser.FOR) {
				{
				this.state = 1117;
				this.comp_iter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yield_expr(): Yield_exprContext {
		let _localctx: Yield_exprContext = new Yield_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, AltPython3Parser.RULE_yield_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1120;
			this.match(AltPython3Parser.YIELD);
			this.state = 1122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (AltPython3Parser.FROM - 5)) | (1 << (AltPython3Parser.LAMBDA - 5)) | (1 << (AltPython3Parser.NOT - 5)) | (1 << (AltPython3Parser.NONE - 5)) | (1 << (AltPython3Parser.TRUE - 5)) | (1 << (AltPython3Parser.FALSE - 5)) | (1 << (AltPython3Parser.NAME - 5)))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (AltPython3Parser.STRING_LITERAL - 37)) | (1 << (AltPython3Parser.BYTES_LITERAL - 37)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 37)) | (1 << (AltPython3Parser.OCT_INTEGER - 37)) | (1 << (AltPython3Parser.HEX_INTEGER - 37)) | (1 << (AltPython3Parser.BIN_INTEGER - 37)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 37)) | (1 << (AltPython3Parser.IMAG_NUMBER - 37)) | (1 << (AltPython3Parser.ELLIPSIS - 37)) | (1 << (AltPython3Parser.STAR - 37)) | (1 << (AltPython3Parser.OPEN_PAREN - 37)) | (1 << (AltPython3Parser.OPEN_BRACK - 37)) | (1 << (AltPython3Parser.ADD - 37)) | (1 << (AltPython3Parser.MINUS - 37)) | (1 << (AltPython3Parser.NOT_OP - 37)) | (1 << (AltPython3Parser.OPEN_BRACE - 37)))) !== 0)) {
				{
				this.state = 1121;
				this.yield_arg();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yield_arg(): Yield_argContext {
		let _localctx: Yield_argContext = new Yield_argContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, AltPython3Parser.RULE_yield_arg);
		try {
			this.state = 1127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.FROM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1124;
				this.match(AltPython3Parser.FROM);
				this.state = 1125;
				this.test();
				}
				break;
			case AltPython3Parser.LAMBDA:
			case AltPython3Parser.NOT:
			case AltPython3Parser.NONE:
			case AltPython3Parser.TRUE:
			case AltPython3Parser.FALSE:
			case AltPython3Parser.NAME:
			case AltPython3Parser.STRING_LITERAL:
			case AltPython3Parser.BYTES_LITERAL:
			case AltPython3Parser.DECIMAL_INTEGER:
			case AltPython3Parser.OCT_INTEGER:
			case AltPython3Parser.HEX_INTEGER:
			case AltPython3Parser.BIN_INTEGER:
			case AltPython3Parser.FLOAT_NUMBER:
			case AltPython3Parser.IMAG_NUMBER:
			case AltPython3Parser.ELLIPSIS:
			case AltPython3Parser.STAR:
			case AltPython3Parser.OPEN_PAREN:
			case AltPython3Parser.OPEN_BRACK:
			case AltPython3Parser.ADD:
			case AltPython3Parser.MINUS:
			case AltPython3Parser.NOT_OP:
			case AltPython3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1126;
				this.testlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public str(): StrContext {
		let _localctx: StrContext = new StrContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, AltPython3Parser.RULE_str);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1129;
			_la = this._input.LA(1);
			if (!(_la === AltPython3Parser.STRING_LITERAL || _la === AltPython3Parser.BYTES_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, AltPython3Parser.RULE_number);
		try {
			this.state = 1134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AltPython3Parser.DECIMAL_INTEGER:
			case AltPython3Parser.OCT_INTEGER:
			case AltPython3Parser.HEX_INTEGER:
			case AltPython3Parser.BIN_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1131;
				this.integer();
				}
				break;
			case AltPython3Parser.FLOAT_NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1132;
				this.match(AltPython3Parser.FLOAT_NUMBER);
				}
				break;
			case AltPython3Parser.IMAG_NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1133;
				this.match(AltPython3Parser.IMAG_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, AltPython3Parser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1136;
			_la = this._input.LA(1);
			if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (AltPython3Parser.DECIMAL_INTEGER - 39)) | (1 << (AltPython3Parser.OCT_INTEGER - 39)) | (1 << (AltPython3Parser.HEX_INTEGER - 39)) | (1 << (AltPython3Parser.BIN_INTEGER - 39)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03a\u0475\x04\x02" +
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
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x05\x02\xB2\n\x02\x03\x03\x03\x03\x07\x03" +
		"\xB6\n\x03\f\x03\x0E\x03\xB9\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x07" +
		"\x04\xBF\n\x04\f\x04\x0E\x04\xC2\v\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\xCA\n\x05\x03\x05\x05\x05\xCD\n\x05\x03\x05\x03" +
		"\x05\x03\x06\x06\x06\xD2\n\x06\r\x06\x0E\x06\xD3\x03\x07\x03\x07\x03\x07" +
		"\x05\x07\xD9\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xE0\n\b\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x05\t\xE7\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n" +
		"\xEE\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\xF4\n\n\x07\n\xF6\n\n\f\n\x0E\n" +
		"\xF9\v\n\x03\n\x03\n\x03\n\x05\n\xFE\n\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
		"\u0104\n\n\x07\n\u0106\n\n\f\n\x0E\n\u0109\v\n\x03\n\x03\n\x03\n\x05\n" +
		"\u010E\n\n\x03\n\x03\n\x05\n\u0112\n\n\x05\n\u0114\n\n\x03\n\x03\n\x05" +
		"\n\u0118\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u011E\n\n\x07\n\u0120\n\n\f" +
		"\n\x0E\n\u0123\v\n\x03\n\x03\n\x03\n\x05\n\u0128\n\n\x03\n\x03\n\x05\n" +
		"\u012C\n\n\x03\v\x03\v\x03\v\x05\v\u0131\n\v\x03\f\x03\f\x03\f\x05\f\u0136" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u013C\n\f\x07\f\u013E\n\f\f\f\x0E\f" +
		"\u0141\v\f\x03\f\x03\f\x03\f\x05\f\u0146\n\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\u014C\n\f\x07\f\u014E\n\f\f\f\x0E\f\u0151\v\f\x03\f\x03\f\x03\f\x05" +
		"\f\u0156\n\f\x03\f\x03\f\x05\f\u015A\n\f\x05\f\u015C\n\f\x03\f\x03\f\x05" +
		"\f\u0160\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0166\n\f\x07\f\u0168\n\f\f" +
		"\f\x0E\f\u016B\v\f\x03\f\x03\f\x03\f\x05\f\u0170\n\f\x03\f\x03\f\x05\f" +
		"\u0174\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\u017A\n\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x07\x0F\u017F\n\x0F\f\x0F\x0E\x0F\u0182\v\x0F\x03\x0F\x05" +
		"\x0F\u0185\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0192\n\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\u0199\n\x11\f\x11\x0E\x11\u019C\v\x11\x03" +
		"\x11\x05\x11\u019F\n\x11\x05\x11\u01A1\n\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x06\x11\u01A7\n\x11\r\x11\x0E\x11\u01A8\x03\x11\x05\x11\u01AC\n\x11" +
		"\x05\x11\u01AE\n\x11\x05\x11\u01B0\n\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x07\x11\u01B7\n\x11\f\x11\x0E\x11\u01BA\v\x11\x03\x11\x05\x11" +
		"\u01BD\n\x11\x05\x11\u01BF\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11" +
		"\u01C5\n\x11\r\x11\x0E\x11\u01C6\x03\x11\x05\x11\u01CA\n\x11\x05\x11\u01CC" +
		"\n\x11\x05\x11\u01CE\n\x11\x03\x11\x05\x11\u01D1\n\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x05\x12\u01D7\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01DC" +
		"\n\x12\x07\x12\u01DE\n\x12\f\x12\x0E\x12\u01E1\v\x12\x05\x12\u01E3\n\x12" +
		"\x03\x13\x03\x13\x05\x13\u01E7\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01EC" +
		"\n\x13\x07\x13\u01EE\n\x13\f\x13\x0E\x13\u01F1\v\x13\x03\x13\x05\x13\u01F4" +
		"\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0202\n\x17\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u020A\n\x1A\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0212\n\x1C\x05\x1C\u0214\n\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u021C\n\x1C\x03\x1D\x03" +
		"\x1D\x05\x1D\u0220\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x07\x1F" +
		"\u0227\n\x1F\f\x1F\x0E\x1F\u022A\v\x1F\x03\x1F\x03\x1F\x06\x1F\u022E\n" +
		"\x1F\r\x1F\x0E\x1F\u022F\x05\x1F\u0232\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u023B\n\x1F\x03 \x03 \x03 \x05 \u0240" +
		"\n \x03!\x03!\x03!\x05!\u0245\n!\x03\"\x03\"\x03\"\x07\"\u024A\n\"\f\"" +
		"\x0E\"\u024D\v\"\x03\"\x05\"\u0250\n\"\x03#\x03#\x03#\x07#\u0255\n#\f" +
		"#\x0E#\u0258\v#\x03$\x03$\x03$\x07$\u025D\n$\f$\x0E$\u0260\v$\x03%\x03" +
		"%\x03%\x03%\x07%\u0266\n%\f%\x0E%\u0269\v%\x03&\x03&\x03&\x03&\x07&\u026F" +
		"\n&\f&\x0E&\u0272\v&\x03\'\x03\'\x03\'\x03\'\x05\'\u0278\n\'\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0282\n(\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x07)\u028D\n)\f)\x0E)\u0290\v)\x03)\x03)\x03)\x05" +
		")\u0295\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u029E\n*\x03+\x03+" +
		"\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u02A9\n+\x03,\x03,\x03,\x03," +
		"\x03,\x03,\x03,\x06,\u02B2\n,\r,\x0E,\u02B3\x03,\x03,\x03,\x05,\u02B9" +
		"\n,\x03,\x03,\x03,\x05,\u02BE\n,\x03,\x03,\x03,\x05,\u02C3\n,\x03-\x03" +
		"-\x03-\x03-\x07-\u02C9\n-\f-\x0E-\u02CC\v-\x03-\x03-\x03-\x03.\x03.\x03" +
		".\x05.\u02D4\n.\x03/\x03/\x03/\x03/\x05/\u02DA\n/\x05/\u02DC\n/\x03/\x03" +
		"/\x03/\x03/\x03/\x05/\u02E3\n/\x030\x030\x030\x030\x060\u02E9\n0\r0\x0E" +
		"0\u02EA\x030\x030\x050\u02EF\n0\x031\x031\x031\x031\x031\x031\x051\u02F7" +
		"\n1\x031\x051\u02FA\n1\x032\x032\x052\u02FE\n2\x033\x033\x053\u0302\n" +
		"3\x033\x033\x033\x034\x034\x054\u0309\n4\x034\x034\x034\x035\x035\x03" +
		"5\x075\u0311\n5\f5\x0E5\u0314\v5\x036\x036\x036\x076\u0319\n6\f6\x0E6" +
		"\u031C\v6\x037\x037\x037\x057\u0321\n7\x038\x038\x038\x038\x078\u0327" +
		"\n8\f8\x0E8\u032A\v8\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x059\u0339\n9\x03:\x05:\u033C\n:\x03:\x03:\x03;\x03;" +
		"\x03;\x07;\u0343\n;\f;\x0E;\u0346\v;\x03<\x03<\x03<\x07<\u034B\n<\f<\x0E" +
		"<\u034E\v<\x03=\x03=\x03=\x07=\u0353\n=\f=\x0E=\u0356\v=\x03>\x03>\x03" +
		">\x03>\x03>\x07>\u035D\n>\f>\x0E>\u0360\v>\x03?\x03?\x03?\x03?\x03?\x07" +
		"?\u0367\n?\f?\x0E?\u036A\v?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x07@\u0377\n@\f@\x0E@\u037A\v@\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x05A\u0383\nA\x03B\x03B\x07B\u0387\nB\fB\x0EB\u038A\vB\x03B\x03" +
		"B\x05B\u038E\nB\x03C\x03C\x03C\x05C\u0393\nC\x03C\x03C\x03C\x05C\u0398" +
		"\nC\x03C\x03C\x03C\x05C\u039D\nC\x03C\x03C\x03C\x03C\x03C\x06C\u03A4\n" +
		"C\rC\x0EC\u03A5\x03C\x03C\x03C\x03C\x05C\u03AC\nC\x03D\x03D\x03D\x03D" +
		"\x07D\u03B2\nD\fD\x0ED\u03B5\vD\x03D\x05D\u03B8\nD\x05D\u03BA\nD\x03E" +
		"\x03E\x05E\u03BE\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u03C8" +
		"\nE\x03F\x03F\x03F\x07F\u03CD\nF\fF\x0EF\u03D0\vF\x03F\x05F\u03D3\nF\x03" +
		"G\x03G\x05G\u03D7\nG\x03G\x03G\x05G\u03DB\nG\x03G\x05G\u03DE\nG\x05G\u03E0" +
		"\nG\x03H\x03H\x05H\u03E4\nH\x03I\x03I\x03I\x07I\u03E9\nI\fI\x0EI\u03EC" +
		"\vI\x03I\x05I\u03EF\nI\x03J\x03J\x03J\x07J\u03F4\nJ\fJ\x0EJ\u03F7\vJ\x03" +
		"J\x05J\u03FA\nJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x07K\u0405" +
		"\nK\fK\x0EK\u0408\vK\x03K\x05K\u040B\nK\x05K\u040D\nK\x03K\x03K\x03K\x03" +
		"K\x07K\u0413\nK\fK\x0EK\u0416\vK\x03K\x05K\u0419\nK\x05K\u041B\nK\x05" +
		"K\u041D\nK\x03L\x03L\x03L\x03L\x05L\u0423\nL\x03L\x05L\u0426\nL\x03L\x03" +
		"L\x03L\x03M\x03M\x03M\x07M\u042E\nM\fM\x0EM\u0431\vM\x03M\x03M\x05M\u0435" +
		"\nM\x03M\x03M\x03M\x03M\x07M\u043B\nM\fM\x0EM\u043E\vM\x03M\x03M\x03M" +
		"\x05M\u0443\nM\x03M\x03M\x05M\u0447\nM\x03N\x03N\x05N\u044B\nN\x03N\x03" +
		"N\x03N\x03N\x05N\u0451\nN\x03O\x03O\x05O\u0455\nO\x03P\x03P\x03P\x03P" +
		"\x03P\x05P\u045C\nP\x03Q\x03Q\x03Q\x05Q\u0461\nQ\x03R\x03R\x05R\u0465" +
		"\nR\x03S\x03S\x03S\x05S\u046A\nS\x03T\x03T\x03U\x03U\x03U\x05U\u0471\n" +
		"U\x03V\x03V\x03V\x02\x02\x02W\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\x02\x06" +
		"\x03\x02Q]\x03\x02/0\x03\x02\'(\x03\x02),\x02\u04F6\x02\xB1\x03\x02\x02" +
		"\x02\x04\xB7\x03\x02\x02\x02\x06\xBC\x03\x02\x02\x02\b\xC5\x03\x02\x02" +
		"\x02\n\xD1\x03\x02\x02\x02\f\xD5\x03\x02\x02\x02\x0E\xDA\x03\x02\x02\x02" +
		"\x10\xE4\x03\x02\x02\x02\x12\u012B\x03\x02\x02\x02\x14\u012D\x03\x02\x02" +
		"\x02\x16\u0173\x03\x02\x02\x02\x18\u0175\x03\x02\x02\x02\x1A\u0179\x03" +
		"\x02\x02\x02\x1C\u017B\x03\x02\x02\x02\x1E\u0191\x03\x02\x02\x02 \u01D0" +
		"\x03\x02\x02\x02\"\u01D2\x03\x02\x02\x02$\u01E6\x03\x02\x02\x02&\u01F5" +
		"\x03\x02\x02\x02(\u01F7\x03\x02\x02\x02*\u01FA\x03\x02\x02\x02,\u0201" +
		"\x03\x02\x02\x02.\u0203\x03\x02\x02\x020\u0205\x03\x02\x02\x022\u0207" +
		"\x03\x02\x02\x024\u020B\x03\x02\x02\x026\u021B\x03\x02\x02\x028\u021F" +
		"\x03\x02\x02\x02:\u0221\x03\x02\x02\x02<\u0224\x03\x02\x02\x02>\u023C" +
		"\x03\x02\x02\x02@\u0241\x03\x02\x02\x02B\u0246\x03\x02\x02\x02D\u0251" +
		"\x03\x02\x02\x02F\u0259\x03\x02\x02\x02H\u0261\x03\x02\x02\x02J\u026A" +
		"\x03\x02\x02\x02L\u0273\x03\x02\x02\x02N\u0281\x03\x02\x02\x02P\u0283" +
		"\x03\x02\x02\x02R\u0296\x03\x02\x02\x02T\u029F\x03\x02\x02\x02V\u02AA" +
		"\x03\x02\x02\x02X\u02C4\x03\x02\x02\x02Z\u02D0\x03\x02\x02\x02\\\u02E2" +
		"\x03\x02\x02\x02^\u02EE\x03\x02\x02\x02`\u02F9\x03\x02\x02\x02b\u02FD" +
		"\x03\x02\x02\x02d\u02FF\x03\x02\x02\x02f\u0306\x03\x02\x02\x02h\u030D" +
		"\x03\x02\x02\x02j\u0315\x03\x02\x02\x02l\u0320\x03\x02\x02\x02n\u0322" +
		"\x03\x02\x02\x02p\u0338\x03\x02\x02\x02r\u033B\x03\x02\x02\x02t\u033F" +
		"\x03\x02\x02\x02v\u0347\x03\x02\x02\x02x\u034F\x03\x02\x02\x02z\u0357" +
		"\x03\x02\x02\x02|\u0361\x03\x02\x02\x02~\u036B\x03\x02\x02\x02\x80\u0382" +
		"\x03\x02\x02\x02\x82\u0384\x03\x02\x02\x02\x84\u03AB\x03\x02\x02\x02\x86" +
		"\u03AD\x03\x02\x02\x02\x88\u03C7\x03\x02\x02\x02\x8A\u03C9\x03\x02\x02" +
		"\x02\x8C\u03DF\x03\x02\x02\x02\x8E\u03E1\x03\x02\x02\x02\x90\u03E5\x03" +
		"\x02\x02\x02\x92\u03F0\x03\x02\x02\x02\x94\u041C\x03\x02\x02\x02\x96\u041E" +
		"\x03\x02\x02\x02\x98\u042F\x03\x02\x02\x02\x9A\u0450\x03\x02\x02\x02\x9C" +
		"\u0454\x03\x02\x02\x02\x9E\u0456\x03\x02\x02\x02\xA0\u045D\x03\x02\x02" +
		"\x02\xA2\u0462\x03\x02\x02\x02\xA4\u0469\x03\x02\x02\x02\xA6\u046B\x03" +
		"\x02\x02\x02\xA8\u0470\x03\x02\x02\x02\xAA\u0472\x03\x02\x02\x02\xAC\xB2" +
		"\x07%\x02\x02\xAD\xB2\x05\x1C\x0F\x02\xAE\xAF\x05N(\x02\xAF\xB0\x07%\x02" +
		"\x02\xB0\xB2\x03\x02\x02\x02\xB1\xAC\x03\x02\x02\x02\xB1\xAD\x03\x02\x02" +
		"\x02\xB1\xAE\x03\x02\x02\x02\xB2\x03\x03\x02\x02\x02\xB3\xB6\x07%\x02" +
		"\x02\xB4\xB6\x05\x1A\x0E\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB4\x03\x02\x02" +
		"\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02" +
		"\x02\xB8\xBA\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBB\x07\x02\x02" +
		"\x03\xBB\x05\x03\x02\x02\x02\xBC\xC0\x05\x92J\x02\xBD\xBF\x07%\x02\x02" +
		"\xBE\xBD\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02" +
		"\xC0\xC1\x03\x02\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02" +
		"\xC3\xC4\x07\x02\x02\x03\xC4\x07\x03\x02\x02\x02\xC5\xC6\x07O\x02\x02" +
		"\xC6\xCC\x05F$\x02\xC7\xC9\x072\x02\x02\xC8\xCA\x05\x98M\x02\xC9\xC8\x03" +
		"\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x07" +
		"3\x02\x02\xCC\xC7\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x03" +
		"\x02\x02\x02\xCE\xCF\x07%\x02\x02\xCF\t\x03\x02\x02\x02\xD0\xD2\x05\b" +
		"\x05\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD1\x03\x02" +
		"\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\v\x03\x02\x02\x02\xD5\xD8\x05\n\x06" +
		"\x02\xD6\xD9\x05\x96L\x02\xD7\xD9\x05\x0E\b\x02\xD8\xD6\x03\x02\x02\x02" +
		"\xD8\xD7\x03\x02\x02\x02\xD9\r\x03\x02\x02\x02\xDA\xDB\x07\x04\x02\x02" +
		"\xDB\xDC\x07&\x02\x02\xDC\xDF\x05\x10\t\x02\xDD\xDE\x07P\x02\x02\xDE\xE0" +
		"\x05`1\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03" +
		"\x02\x02\x02\xE1\xE2\x075\x02\x02\xE2\xE3\x05^0\x02\xE3\x0F\x03\x02\x02" +
		"\x02\xE4\xE6\x072\x02\x02\xE5\xE7\x05\x12\n\x02\xE6\xE5\x03\x02\x02\x02" +
		"\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x073\x02\x02" +
		"\xE9\x11\x03\x02\x02\x02\xEA\xED\x05\x14\v\x02\xEB\xEC\x078\x02\x02\xEC" +
		"\xEE\x05`1\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF7" +
		"\x03\x02\x02\x02\xEF\xF0\x074\x02\x02\xF0\xF3\x05\x14\v\x02\xF1\xF2\x07" +
		"8\x02\x02\xF2\xF4\x05`1\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02" +
		"\x02\xF4\xF6\x03\x02\x02\x02\xF5\xEF\x03\x02\x02\x02\xF6\xF9\x03\x02\x02" +
		"\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\u0113\x03\x02" +
		"\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\u0111\x074\x02\x02\xFB\xFD\x071\x02" +
		"\x02\xFC\xFE\x05\x14\v\x02\xFD\xFC\x03\x02\x02\x02\xFD\xFE\x03\x02\x02" +
		"\x02\xFE\u0107\x03\x02\x02\x02\xFF\u0100\x074\x02\x02\u0100\u0103\x05" +
		"\x14\v\x02\u0101\u0102\x078\x02\x02\u0102\u0104\x05`1\x02\u0103\u0101" +
		"\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0106\x03\x02\x02\x02" +
		"\u0105\xFF\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03" +
		"\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010D\x03\x02\x02\x02\u0109" +
		"\u0107\x03\x02\x02\x02\u010A\u010B\x074\x02\x02\u010B\u010C\x077\x02\x02" +
		"\u010C\u010E\x05\x14\v\x02\u010D\u010A\x03\x02\x02\x02\u010D\u010E\x03" +
		"\x02\x02\x02\u010E\u0112\x03\x02\x02\x02\u010F\u0110\x077\x02\x02\u0110" +
		"\u0112\x05\x14\v\x02\u0111\xFB\x03\x02\x02\x02\u0111\u010F\x03\x02\x02" +
		"\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x03\x02\x02\x02\u0113\xFA" +
		"\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u012C\x03\x02\x02\x02" +
		"\u0115\u0117\x071\x02\x02\u0116\u0118\x05\x14\v\x02\u0117\u0116\x03\x02" +
		"\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0121\x03\x02\x02\x02\u0119" +
		"\u011A\x074\x02\x02\u011A\u011D\x05\x14\v\x02\u011B\u011C\x078\x02\x02" +
		"\u011C\u011E\x05`1\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02" +
		"\x02\x02\u011E\u0120\x03\x02\x02\x02\u011F\u0119\x03\x02\x02\x02\u0120" +
		"\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02" +
		"\x02\x02\u0122\u0127\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124" +
		"\u0125\x074\x02\x02\u0125\u0126\x077\x02\x02\u0126\u0128\x05\x14\v\x02" +
		"\u0127\u0124\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012C\x03" +
		"\x02\x02\x02\u0129\u012A\x077\x02\x02\u012A\u012C\x05\x14\v\x02\u012B" +
		"\xEA\x03\x02\x02\x02\u012B\u0115\x03\x02\x02\x02\u012B\u0129\x03\x02\x02" +
		"\x02\u012C\x13\x03\x02\x02\x02\u012D\u0130\x07&\x02\x02\u012E\u012F\x07" +
		"5\x02\x02\u012F\u0131\x05`1\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131" +
		"\x03\x02\x02\x02\u0131\x15\x03\x02\x02\x02\u0132\u0135\x05\x18\r\x02\u0133" +
		"\u0134\x078\x02\x02\u0134\u0136\x05`1\x02\u0135\u0133\x03\x02\x02\x02" +
		"\u0135\u0136\x03\x02\x02\x02\u0136\u013F\x03\x02\x02\x02\u0137\u0138\x07" +
		"4\x02\x02\u0138\u013B\x05\x18\r\x02\u0139\u013A\x078\x02\x02\u013A\u013C" +
		"\x05`1\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C" +
		"\u013E\x03\x02\x02\x02\u013D\u0137\x03\x02\x02\x02\u013E\u0141\x03\x02" +
		"\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140" +
		"\u015B\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0159\x074\x02" +
		"\x02\u0143\u0145\x071\x02\x02\u0144\u0146\x05\x18\r\x02\u0145\u0144\x03" +
		"\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u014F\x03\x02\x02\x02\u0147" +
		"\u0148\x074\x02\x02\u0148\u014B\x05\x18\r\x02\u0149\u014A\x078\x02\x02" +
		"\u014A\u014C\x05`1\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02" +
		"\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D\u0147\x03\x02\x02\x02\u014E" +
		"\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F\u0150\x03\x02" +
		"\x02\x02\u0150\u0155\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0152" +
		"\u0153\x074\x02\x02\u0153\u0154\x077\x02\x02\u0154\u0156\x05\x18\r\x02" +
		"\u0155\u0152\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u015A\x03" +
		"\x02\x02\x02\u0157\u0158\x077\x02\x02\u0158\u015A\x05\x18\r\x02\u0159" +
		"\u0143\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02" +
		"\x02\x02\u015A\u015C\x03\x02\x02\x02\u015B\u0142\x03\x02\x02\x02\u015B" +
		"\u015C\x03\x02\x02\x02\u015C\u0174\x03\x02\x02\x02\u015D\u015F\x071\x02" +
		"\x02\u015E\u0160\x05\x18\r\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160" +
		"\x03\x02\x02\x02\u0160\u0169\x03\x02\x02\x02\u0161\u0162\x074\x02\x02" +
		"\u0162\u0165\x05\x18\r\x02\u0163\u0164\x078\x02\x02\u0164\u0166\x05`1" +
		"\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0168" +
		"\x03\x02\x02\x02\u0167\u0161\x03\x02\x02\x02\u0168\u016B\x03\x02\x02\x02" +
		"\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016F\x03" +
		"\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C\u016D\x074\x02\x02\u016D" +
		"\u016E\x077\x02\x02\u016E\u0170\x05\x18\r\x02\u016F\u016C\x03\x02\x02" +
		"\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0174\x03\x02\x02\x02\u0171\u0172" +
		"\x077\x02\x02\u0172\u0174\x05\x18\r\x02\u0173\u0132\x03\x02\x02\x02\u0173" +
		"\u015D\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0174\x17\x03\x02\x02" +
		"\x02\u0175\u0176\x07&\x02\x02\u0176\x19\x03\x02\x02\x02\u0177\u017A\x05" +
		"\x1C\x0F\x02\u0178\u017A\x05N(\x02\u0179\u0177\x03\x02\x02\x02\u0179\u0178" +
		"\x03\x02\x02\x02\u017A\x1B\x03\x02\x02\x02\u017B\u0180\x05\x1E\x10\x02" +
		"\u017C\u017D\x076\x02\x02\u017D\u017F\x05\x1E\x10\x02\u017E\u017C\x03" +
		"\x02\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180" +
		"\u0181\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02" +
		"\x02\x02\u0183\u0185\x076\x02\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185" +
		"\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x07%\x02\x02" +
		"\u0187\x1D\x03\x02\x02\x02\u0188\u0192\x05 \x11\x02\u0189\u0192\x05\"" +
		"\x12\x02\u018A\u0192\x05(\x15\x02\u018B\u0192\x05*\x16\x02\u018C\u0192" +
		"\x05,\x17\x02\u018D\u0192\x058\x1D\x02\u018E\u0192\x05H%\x02\u018F\u0192" +
		"\x05J&\x02\u0190\u0192\x05L\'\x02\u0191\u0188\x03\x02\x02\x02\u0191\u0189" +
		"\x03\x02\x02\x02\u0191\u018A\x03\x02\x02\x02\u0191\u018B\x03\x02\x02\x02" +
		"\u0191\u018C\x03\x02\x02\x02\u0191\u018D\x03\x02\x02\x02\u0191\u018E\x03" +
		"\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0190\x03\x02\x02\x02\u0192" +
		"\x1F\x03\x02\x02\x02\u0193\u0194\x07\x03\x02\x02\u0194\u01AF\x072\x02" +
		"\x02\u0195\u019A\x05`1\x02\u0196\u0197\x074\x02\x02\u0197\u0199\x05`1" +
		"\x02\u0198\u0196\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198" +
		"\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02" +
		"\u019C\u019A\x03\x02\x02\x02\u019D\u019F\x074\x02\x02\u019E\u019D\x03" +
		"\x02\x02\x02\u019E\u019F\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u019F\u01A1\x03\x02\x02\x02\u01A0\u0195\x03\x02\x02\x02\u01A0" +
		"\u01A1\x03\x02\x02\x02\u01A1\u01B0\x03\x02\x02\x02\u01A2\u01A3\x07?\x02" +
		"\x02\u01A3\u01AD\x05`1\x02\u01A4\u01A5\x074\x02\x02\u01A5\u01A7\x05`1" +
		"\x02\u01A6\u01A4\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A6" +
		"\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02" +
		"\u01AA\u01AC\x074\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03" +
		"\x02\x02\x02\u01AC\u01AE\x03\x02\x02\x02\u01AD\u01A6\x03\x02\x02\x02\u01AD" +
		"\u01AE\x03\x02\x02\x02\u01AE\u01B0\x03\x02\x02\x02\u01AF\u01A0\x03\x02" +
		"\x02\x02\u01AF\u01A2\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1" +
		"\u01D1\x073\x02\x02\u01B2\u01CD\x07\x03\x02\x02\u01B3\u01B8\x05`1\x02" +
		"\u01B4\u01B5\x074\x02\x02\u01B5\u01B7\x05`1\x02\u01B6\u01B4\x03\x02\x02" +
		"\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9" +
		"\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02" +
		"\u01BB\u01BD\x074\x02\x02\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03" +
		"\x02\x02\x02\u01BD\u01BF\x03\x02\x02\x02\u01BE\u01B3\x03\x02\x02\x02\u01BE" +
		"\u01BF\x03\x02\x02\x02\u01BF\u01CE\x03\x02\x02\x02\u01C0\u01C1\x07?\x02" +
		"\x02\u01C1\u01CB\x05`1\x02\u01C2\u01C3\x074\x02\x02\u01C3\u01C5\x05`1" +
		"\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C4" +
		"\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03\x02\x02\x02" +
		"\u01C8\u01CA\x074\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03" +
		"\x02\x02\x02\u01CA\u01CC\x03\x02\x02\x02\u01CB\u01C4\x03\x02\x02\x02\u01CB" +
		"\u01CC\x03\x02\x02\x02\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01BE\x03\x02" +
		"\x02\x02\u01CD\u01C0\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF" +
		"\u01D1\b\x11\x01\x02\u01D0\u0193\x03\x02\x02\x02\u01D0\u01B2\x03\x02\x02" +
		"\x02\u01D1!\x03\x02\x02\x02\u01D2\u01E2\x05$\x13\x02\u01D3\u01D6\x05&" +
		"\x14\x02\u01D4\u01D7\x05\xA2R\x02\u01D5\u01D7\x05\x92J\x02\u01D6\u01D4" +
		"\x03\x02\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7\u01E3\x03\x02\x02\x02" +
		"\u01D8\u01DB\x078\x02\x02\u01D9\u01DC\x05\xA2R\x02\u01DA\u01DC\x05$\x13" +
		"\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC\u01DE" +
		"\x03\x02\x02\x02\u01DD\u01D8\x03\x02\x02\x02\u01DE\u01E1\x03\x02\x02\x02" +
		"\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E3\x03" +
		"\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01D3\x03\x02\x02\x02\u01E2" +
		"\u01DF\x03\x02\x02\x02\u01E3#\x03\x02\x02\x02\u01E4\u01E7\x05`1\x02\u01E5" +
		"\u01E7\x05r:\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E5\x03\x02\x02\x02" +
		"\u01E7\u01EF\x03\x02\x02\x02\u01E8\u01EB\x074\x02\x02\u01E9\u01EC\x05" +
		"`1\x02\u01EA\u01EC\x05r:\x02\u01EB\u01E9\x03\x02\x02\x02\u01EB\u01EA\x03" +
		"\x02\x02\x02\u01EC\u01EE\x03\x02\x02\x02\u01ED\u01E8\x03\x02\x02\x02\u01EE" +
		"\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02" +
		"\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2" +
		"\u01F4\x074\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02" +
		"\x02\u01F4%\x03\x02\x02\x02\u01F5\u01F6\t\x02\x02\x02\u01F6\'\x03\x02" +
		"\x02\x02\u01F7\u01F8\x07!\x02\x02\u01F8\u01F9\x05\x90I\x02\u01F9)\x03" +
		"\x02\x02\x02\u01FA\u01FB\x07\"\x02\x02\u01FB+\x03\x02\x02\x02\u01FC\u0202" +
		"\x05.\x18\x02\u01FD\u0202\x050\x19\x02\u01FE\u0202\x052\x1A\x02\u01FF" +
		"\u0202\x056\x1C\x02\u0200\u0202\x054\x1B\x02\u0201\u01FC\x03\x02\x02\x02" +
		"\u0201\u01FD\x03\x02\x02\x02\u0201\u01FE\x03\x02\x02\x02\u0201\u01FF\x03" +
		"\x02\x02\x02\u0201\u0200\x03\x02\x02\x02\u0202-\x03\x02\x02\x02\u0203" +
		"\u0204\x07$\x02\x02\u0204/\x03\x02\x02\x02\u0205\u0206\x07#\x02\x02\u0206" +
		"1\x03\x02\x02\x02\u0207\u0209\x07\x05\x02\x02\u0208\u020A\x05\x92J\x02" +
		"\u0209\u0208\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A3\x03\x02" +
		"\x02\x02\u020B\u020C\x05\xA2R\x02\u020C5\x03\x02\x02\x02\u020D\u0213\x07" +
		"\x06\x02\x02\u020E\u0211\x05`1\x02\u020F\u0210\x07\x07\x02\x02\u0210\u0212" +
		"\x05`1\x02\u0211\u020F\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212" +
		"\u0214\x03\x02\x02\x02\u0213\u020E\x03\x02\x02\x02\u0213\u0214\x03\x02" +
		"\x02\x02\u0214\u021C\x03\x02\x02\x02\u0215\u0216\x07\x06\x02\x02\u0216" +
		"\u0217\x07&\x02\x02\u0217\u0218\x074\x02\x02\u0218\u0219\x05\xA6T\x02" +
		"\u0219\u021A\b\x1C\x01\x02\u021A\u021C\x03\x02\x02\x02\u021B\u020D\x03" +
		"\x02\x02\x02\u021B\u0215\x03\x02\x02\x02\u021C7\x03\x02\x02\x02\u021D" +
		"\u0220\x05:\x1E\x02\u021E\u0220\x05<\x1F\x02\u021F\u021D\x03\x02\x02\x02" +
		"\u021F\u021E\x03\x02\x02\x02\u02209\x03\x02\x02\x02\u0221\u0222\x07\b" +
		"\x02\x02\u0222\u0223\x05D#\x02\u0223;\x03\x02\x02\x02\u0224\u0231\x07" +
		"\x07\x02\x02\u0225\u0227\t\x03\x02\x02\u0226\u0225\x03\x02\x02\x02\u0227" +
		"\u022A\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02" +
		"\x02\x02\u0229\u022B\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B" +
		"\u0232\x05F$\x02\u022C\u022E\t\x03\x02\x02\u022D\u022C\x03\x02\x02\x02" +
		"\u022E\u022F\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F\u0230\x03" +
		"\x02\x02\x02\u0230\u0232\x03\x02\x02\x02\u0231\u0228\x03\x02\x02\x02\u0231" +
		"\u022D\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u023A\x07\b\x02" +
		"\x02\u0234\u023B\x071\x02\x02\u0235\u0236\x072\x02\x02\u0236\u0237\x05" +
		"B\"\x02\u0237\u0238\x073\x02\x02\u0238\u023B\x03\x02\x02\x02\u0239\u023B" +
		"\x05B\"\x02\u023A\u0234\x03\x02\x02\x02\u023A\u0235\x03\x02\x02\x02\u023A" +
		"\u0239\x03\x02\x02\x02\u023B=\x03\x02\x02\x02\u023C\u023F\x07&\x02\x02" +
		"\u023D\u023E\x07\t\x02\x02\u023E\u0240\x07&\x02\x02\u023F\u023D\x03\x02" +
		"\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240?\x03\x02\x02\x02\u0241\u0244" +
		"\x05F$\x02\u0242\u0243\x07\t\x02\x02\u0243\u0245\x07&\x02\x02\u0244\u0242" +
		"\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245A\x03\x02\x02\x02\u0246" +
		"\u024B\x05> \x02\u0247\u0248\x074\x02\x02\u0248\u024A\x05> \x02\u0249" +
		"\u0247\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02" +
		"\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024F\x03\x02\x02\x02\u024D" +
		"\u024B\x03\x02\x02\x02\u024E\u0250\x074\x02\x02\u024F\u024E\x03\x02\x02" +
		"\x02\u024F\u0250\x03\x02\x02\x02\u0250C\x03\x02\x02\x02\u0251\u0256\x05" +
		"@!\x02\u0252\u0253\x074\x02\x02\u0253\u0255\x05@!\x02\u0254\u0252\x03" +
		"\x02\x02\x02\u0255\u0258\x03\x02\x02\x02\u0256\u0254\x03\x02\x02\x02\u0256" +
		"\u0257\x03\x02\x02\x02\u0257E\x03\x02\x02\x02\u0258\u0256\x03\x02\x02" +
		"\x02\u0259\u025E\x07&\x02\x02\u025A\u025B\x07/\x02\x02\u025B\u025D\x07" +
		"&\x02\x02\u025C\u025A\x03\x02\x02\x02\u025D\u0260\x03\x02\x02\x02\u025E" +
		"\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025FG\x03\x02\x02" +
		"\x02\u0260\u025E\x03\x02\x02\x02\u0261\u0262\x07\n\x02\x02\u0262\u0267" +
		"\x07&\x02\x02\u0263\u0264\x074\x02\x02\u0264\u0266\x07&\x02\x02\u0265" +
		"\u0263\x03\x02\x02\x02\u0266\u0269\x03\x02\x02\x02\u0267\u0265\x03\x02" +
		"\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268I\x03\x02\x02\x02\u0269\u0267" +
		"\x03\x02\x02\x02\u026A\u026B\x07\v\x02\x02\u026B\u0270\x07&\x02\x02\u026C" +
		"\u026D\x074\x02\x02\u026D\u026F\x07&\x02\x02\u026E\u026C\x03\x02\x02\x02" +
		"\u026F\u0272\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03" +
		"\x02\x02\x02\u0271K\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0273" +
		"\u0274\x07\f\x02\x02\u0274\u0277\x05`1\x02\u0275\u0276\x074\x02\x02\u0276" +
		"\u0278\x05`1\x02\u0277\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02" +
		"\u0278M\x03\x02\x02\x02\u0279\u0282\x05P)\x02\u027A\u0282\x05R*\x02\u027B" +
		"\u0282\x05T+\x02\u027C\u0282\x05V,\x02\u027D\u0282\x05X-\x02\u027E\u0282" +
		"\x05\x0E\b\x02\u027F\u0282\x05\x96L\x02\u0280\u0282\x05\f\x07\x02\u0281" +
		"\u0279\x03\x02\x02\x02\u0281\u027A\x03\x02\x02\x02\u0281\u027B\x03\x02" +
		"\x02\x02\u0281\u027C\x03\x02\x02\x02\u0281\u027D\x03\x02\x02\x02\u0281" +
		"\u027E\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0280\x03\x02" +
		"\x02\x02\u0282O\x03\x02\x02\x02\u0283\u0284\x07\r\x02\x02\u0284\u0285" +
		"\x05`1\x02\u0285\u0286\x075\x02\x02\u0286\u028E\x05^0\x02\u0287\u0288" +
		"\x07\x0E\x02\x02\u0288\u0289\x05`1\x02\u0289\u028A\x075\x02\x02\u028A" +
		"\u028B\x05^0\x02\u028B\u028D\x03\x02\x02\x02\u028C\u0287\x03\x02\x02\x02" +
		"\u028D\u0290\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E\u028F\x03" +
		"\x02\x02\x02\u028F\u0294\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02\u0291" +
		"\u0292\x07\x0F\x02\x02\u0292\u0293\x075\x02\x02\u0293\u0295\x05^0\x02" +
		"\u0294\u0291\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295Q\x03\x02" +
		"\x02\x02\u0296\u0297\x07\x10\x02\x02\u0297\u0298\x05`1\x02\u0298\u0299" +
		"\x075\x02\x02\u0299\u029D\x05^0\x02\u029A\u029B\x07\x0F\x02\x02\u029B" +
		"\u029C\x075\x02\x02\u029C\u029E\x05^0\x02\u029D\u029A\x03\x02\x02\x02" +
		"\u029D\u029E\x03\x02\x02\x02\u029ES\x03\x02\x02\x02\u029F\u02A0\x07\x11" +
		"\x02\x02\u02A0\u02A1\x05\x90I\x02\u02A1\u02A2\x07\x12\x02\x02\u02A2\u02A3" +
		"\x05\x92J\x02\u02A3\u02A4\x075\x02\x02\u02A4\u02A8\x05^0\x02\u02A5\u02A6" +
		"\x07\x0F\x02\x02\u02A6\u02A7\x075\x02\x02\u02A7\u02A9\x05^0\x02\u02A8" +
		"\u02A5\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9U\x03\x02\x02" +
		"\x02\u02AA\u02AB\x07\x13\x02\x02\u02AB\u02AC\x075\x02\x02\u02AC\u02C2" +
		"\x05^0\x02\u02AD\u02AE\x05\\/\x02\u02AE\u02AF\x075\x02\x02\u02AF\u02B0" +
		"\x05^0\x02\u02B0\u02B2\x03\x02\x02\x02\u02B1\u02AD\x03\x02\x02\x02\u02B2" +
		"\u02B3\x03\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03\x02" +
		"\x02\x02\u02B4\u02B8\x03\x02\x02\x02\u02B5\u02B6\x07\x0F\x02\x02\u02B6" +
		"\u02B7\x075\x02\x02\u02B7\u02B9\x05^0\x02\u02B8\u02B5\x03\x02\x02\x02" +
		"\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BD\x03\x02\x02\x02\u02BA\u02BB\x07" +
		"\x14\x02\x02\u02BB\u02BC\x075\x02\x02\u02BC\u02BE\x05^0\x02\u02BD\u02BA" +
		"\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02C3\x03\x02\x02\x02" +
		"\u02BF\u02C0\x07\x14\x02\x02\u02C0\u02C1\x075\x02\x02\u02C1\u02C3\x05" +
		"^0\x02\u02C2\u02B1\x03\x02\x02\x02\u02C2\u02BF\x03\x02\x02\x02\u02C3W" +
		"\x03\x02\x02\x02\u02C4\u02C5\x07\x15\x02\x02\u02C5\u02CA\x05Z.\x02\u02C6" +
		"\u02C7\x074\x02\x02\u02C7\u02C9\x05Z.\x02\u02C8\u02C6\x03\x02\x02\x02" +
		"\u02C9\u02CC\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02CB\x03" +
		"\x02\x02\x02\u02CB\u02CD\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CD" +
		"\u02CE\x075\x02\x02\u02CE\u02CF\x05^0\x02\u02CFY\x03\x02\x02\x02\u02D0" +
		"\u02D3\x05`1\x02\u02D1\u02D2\x07\t\x02\x02\u02D2\u02D4\x05t;\x02\u02D3" +
		"\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4[\x03\x02\x02" +
		"\x02\u02D5\u02DB\x07\x16\x02\x02\u02D6\u02D9\x05`1\x02\u02D7\u02D8\x07" +
		"\t\x02\x02\u02D8\u02DA\x07&\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02D9" +
		"\u02DA\x03\x02\x02\x02\u02DA\u02DC\x03\x02\x02\x02\u02DB\u02D6\x03\x02" +
		"\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02E3\x03\x02\x02\x02\u02DD" +
		"\u02DE\x07\x16\x02\x02\u02DE\u02DF\x07&\x02\x02\u02DF\u02E0\x074\x02\x02" +
		"\u02E0\u02E1\x07&\x02\x02\u02E1\u02E3\b/\x01\x02\u02E2\u02D5\x03\x02\x02" +
		"\x02\u02E2\u02DD\x03\x02\x02\x02\u02E3]\x03\x02\x02\x02\u02E4\u02EF\x05" +
		"\x1C\x0F\x02\u02E5\u02E6\x07%\x02\x02\u02E6\u02E8\x07`\x02\x02\u02E7\u02E9" +
		"\x05\x1A\x0E\x02\u02E8\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02" +
		"\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC\x03" +
		"\x02\x02\x02\u02EC\u02ED\x07a\x02\x02\u02ED\u02EF\x03\x02\x02\x02\u02EE" +
		"\u02E4\x03\x02\x02\x02\u02EE\u02E5\x03\x02\x02\x02\u02EF_\x03\x02\x02" +
		"\x02\u02F0\u02F6\x05h5\x02\u02F1\u02F2\x07\r\x02\x02\u02F2\u02F3\x05h" +
		"5\x02\u02F3\u02F4\x07\x0F\x02\x02\u02F4\u02F5\x05`1\x02\u02F5\u02F7\x03" +
		"\x02\x02\x02\u02F6\u02F1\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7" +
		"\u02FA\x03\x02\x02\x02\u02F8\u02FA\x05d3\x02\u02F9\u02F0\x03\x02\x02\x02" +
		"\u02F9\u02F8\x03\x02\x02\x02\u02FAa\x03\x02\x02\x02\u02FB\u02FE\x05h5" +
		"\x02\u02FC\u02FE\x05f4\x02\u02FD\u02FB\x03\x02\x02\x02\u02FD\u02FC\x03" +
		"\x02\x02\x02\u02FEc\x03\x02\x02\x02\u02FF\u0301\x07\x17\x02\x02\u0300" +
		"\u0302\x05\x16\f\x02\u0301\u0300\x03\x02\x02\x02\u0301\u0302\x03\x02\x02" +
		"\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0304\x075\x02\x02\u0304\u0305" +
		"\x05`1\x02\u0305e\x03\x02\x02\x02\u0306\u0308\x07\x17\x02\x02\u0307\u0309" +
		"\x05\x16\f\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02" +
		"\u0309\u030A\x03\x02\x02\x02\u030A\u030B\x075\x02\x02\u030B\u030C\x05" +
		"b2\x02\u030Cg\x03\x02\x02\x02\u030D\u0312\x05j6\x02\u030E\u030F\x07\x18" +
		"\x02\x02\u030F\u0311\x05j6\x02\u0310\u030E\x03\x02\x02\x02\u0311\u0314" +
		"\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02" +
		"\u0313i\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0315\u031A\x05l7" +
		"\x02\u0316\u0317\x07\x19\x02\x02\u0317\u0319\x05l7\x02\u0318\u0316\x03" +
		"\x02\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03\x02\x02\x02\u031A" +
		"\u031B\x03\x02\x02\x02\u031Bk\x03\x02\x02\x02\u031C\u031A\x03\x02\x02" +
		"\x02\u031D\u031E\x07\x1A\x02\x02\u031E\u0321\x05l7\x02\u031F\u0321\x05" +
		"n8\x02\u0320\u031D\x03\x02\x02\x02\u0320\u031F\x03\x02\x02\x02\u0321m" +
		"\x03\x02\x02\x02\u0322\u0328\x05r:\x02\u0323\u0324\x05p9\x02\u0324\u0325" +
		"\x05r:\x02\u0325\u0327\x03\x02\x02\x02\u0326\u0323\x03\x02\x02\x02\u0327" +
		"\u032A\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0328\u0329\x03\x02" +
		"\x02\x02\u0329o\x03\x02\x02\x02\u032A\u0328\x03\x02\x02\x02\u032B\u0339" +
		"\x07H\x02\x02\u032C\u0339\x07I\x02\x02\u032D\u0339\x07J\x02\x02\u032E" +
		"\u0339\x07K\x02\x02\u032F\u0339\x07L\x02\x02\u0330\u0339\x07M\x02\x02" +
		"\u0331\u0339\x07N\x02\x02\u0332\u0339\x07\x12\x02\x02\u0333\u0334\x07" +
		"\x1A\x02\x02\u0334\u0339\x07\x12\x02\x02\u0335\u0339\x07\x1B\x02\x02\u0336" +
		"\u0337\x07\x1B\x02\x02\u0337\u0339\x07\x1A\x02\x02\u0338\u032B\x03\x02" +
		"\x02\x02\u0338\u032C\x03\x02\x02\x02\u0338\u032D\x03\x02\x02\x02\u0338" +
		"\u032E\x03\x02\x02\x02\u0338\u032F\x03\x02\x02\x02\u0338\u0330\x03\x02" +
		"\x02\x02\u0338\u0331\x03\x02\x02\x02\u0338\u0332\x03\x02\x02\x02\u0338" +
		"\u0333\x03\x02\x02\x02\u0338\u0335\x03\x02\x02\x02\u0338\u0336\x03\x02" +
		"\x02\x02\u0339q\x03\x02\x02\x02\u033A\u033C\x071\x02\x02\u033B\u033A\x03" +
		"\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D" +
		"\u033E\x05t;\x02\u033Es\x03\x02\x02\x02\u033F\u0344\x05v<\x02\u0340\u0341" +
		"\x07;\x02\x02\u0341\u0343\x05v<\x02\u0342\u0340\x03\x02\x02\x02\u0343" +
		"\u0346\x03\x02\x02\x02\u0344\u0342\x03\x02\x02\x02\u0344\u0345\x03\x02" +
		"\x02\x02\u0345u\x03\x02\x02\x02\u0346\u0344\x03\x02\x02\x02\u0347\u034C" +
		"\x05x=\x02\u0348\u0349\x07<\x02\x02\u0349\u034B\x05x=\x02\u034A\u0348" +
		"\x03\x02\x02\x02\u034B\u034E\x03\x02\x02\x02\u034C\u034A\x03\x02\x02\x02" +
		"\u034C\u034D\x03\x02\x02\x02\u034Dw\x03\x02\x02\x02\u034E\u034C\x03\x02" +
		"\x02\x02\u034F\u0354\x05z>\x02\u0350\u0351\x07=\x02\x02\u0351\u0353\x05" +
		"z>\x02\u0352\u0350\x03\x02\x02\x02\u0353\u0356\x03\x02\x02\x02\u0354\u0352" +
		"\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355y\x03\x02\x02\x02\u0356" +
		"\u0354\x03\x02\x02\x02\u0357\u035E\x05|?\x02\u0358\u0359\x07>\x02\x02" +
		"\u0359\u035D\x05|?\x02\u035A\u035B\x07?\x02\x02\u035B\u035D\x05|?\x02" +
		"\u035C\u0358\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035D\u0360\x03" +
		"\x02\x02\x02\u035E\u035C\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F" +
		"{\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0361\u0368\x05~@\x02\u0362" +
		"\u0363\x07@\x02\x02\u0363\u0367\x05~@\x02\u0364\u0365\x07A\x02\x02\u0365" +
		"\u0367\x05~@\x02\u0366\u0362\x03\x02\x02\x02\u0366\u0364\x03\x02\x02\x02" +
		"\u0367\u036A\x03\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0368\u0369\x03" +
		"\x02\x02\x02\u0369}\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036B" +
		"\u0378\x05\x80A\x02\u036C\u036D\x071\x02\x02\u036D\u0377\x05\x80A\x02" +
		"\u036E\u036F\x07B\x02\x02\u036F\u0377\x05\x80A\x02\u0370\u0371\x07C\x02" +
		"\x02\u0371\u0377\x05\x80A\x02\u0372\u0373\x07D\x02\x02\u0373\u0377\x05" +
		"\x80A\x02\u0374\u0375\x07O\x02\x02\u0375\u0377\x05\x80A\x02\u0376\u036C" +
		"\x03\x02\x02\x02\u0376\u036E\x03\x02\x02\x02\u0376\u0370\x03\x02\x02\x02" +
		"\u0376\u0372\x03\x02\x02\x02\u0376\u0374\x03\x02\x02\x02\u0377\u037A\x03" +
		"\x02\x02\x02\u0378\u0376\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379" +
		"\x7F\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037B\u037C\x07@\x02" +
		"\x02\u037C\u0383\x05\x80A\x02\u037D\u037E\x07A\x02\x02\u037E\u0383\x05" +
		"\x80A\x02\u037F\u0380\x07E\x02\x02\u0380\u0383\x05\x80A\x02\u0381\u0383" +
		"\x05\x82B\x02\u0382\u037B\x03\x02\x02\x02\u0382\u037D\x03\x02\x02\x02" +
		"\u0382\u037F\x03\x02\x02\x02\u0382\u0381\x03\x02\x02\x02\u0383\x81\x03" +
		"\x02\x02\x02\u0384\u0388\x05\x84C\x02\u0385\u0387\x05\x88E\x02\u0386\u0385" +
		"\x03\x02\x02\x02\u0387\u038A\x03\x02\x02\x02\u0388\u0386\x03\x02\x02\x02" +
		"\u0388\u0389\x03\x02\x02\x02\u0389\u038D\x03\x02\x02\x02\u038A\u0388\x03" +
		"\x02\x02\x02\u038B\u038C\x077\x02\x02\u038C\u038E\x05\x80A\x02\u038D\u038B" +
		"\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\x83\x03\x02\x02\x02" +
		"\u038F\u0392\x072\x02\x02\u0390\u0393\x05\xA2R\x02\u0391\u0393\x05\x86" +
		"D\x02\u0392\u0390\x03\x02\x02\x02\u0392\u0391\x03\x02\x02\x02\u0392\u0393" +
		"\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u03AC\x073\x02\x02" +
		"\u0395\u0397\x079\x02\x02\u0396\u0398\x05\x86D\x02\u0397\u0396\x03\x02" +
		"\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399" +
		"\u03AC\x07:\x02\x02\u039A\u039C\x07F\x02\x02\u039B\u039D\x05\x94K\x02" +
		"\u039C\u039B\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u039E\x03" +
		"\x02\x02\x02\u039E\u03AC\x07G\x02\x02\u039F\u03A0\bC\x01\x02\u03A0\u03AC" +
		"\x07&\x02\x02\u03A1\u03AC\x05\xA8U\x02\u03A2\u03A4\x05\xA6T\x02\u03A3" +
		"\u03A2\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A3\x03\x02" +
		"\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03AC\x03\x02\x02\x02\u03A7" +
		"\u03AC\x070\x02\x02\u03A8\u03AC\x07\x1C\x02\x02\u03A9\u03AC\x07\x1D\x02" +
		"\x02\u03AA\u03AC\x07\x1E\x02\x02\u03AB\u038F\x03\x02\x02\x02\u03AB\u0395" +
		"\x03\x02\x02\x02\u03AB\u039A\x03\x02\x02\x02\u03AB\u039F\x03\x02\x02\x02" +
		"\u03AB\u03A1\x03\x02\x02\x02\u03AB\u03A3\x03\x02\x02\x02\u03AB\u03A7\x03" +
		"\x02\x02\x02\u03AB\u03A8\x03\x02\x02\x02\u03AB\u03A9\x03\x02\x02\x02\u03AB" +
		"\u03AA\x03\x02\x02\x02\u03AC\x85\x03\x02\x02\x02\u03AD\u03B9\x05`1\x02" +
		"\u03AE\u03BA\x05\x9EP\x02\u03AF\u03B0\x074\x02\x02\u03B0\u03B2\x05`1\x02" +
		"\u03B1\u03AF\x03\x02\x02\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3\u03B1\x03" +
		"\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B7\x03\x02\x02\x02\u03B5" +
		"\u03B3\x03\x02\x02\x02\u03B6\u03B8\x074\x02\x02\u03B7\u03B6\x03\x02\x02" +
		"\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8\u03BA\x03\x02\x02\x02\u03B9\u03AE" +
		"\x03\x02\x02\x02\u03B9\u03B3\x03\x02\x02\x02\u03BA\x87\x03\x02\x02\x02" +
		"\u03BB\u03BD\x072\x02\x02\u03BC\u03BE\x05\x98M\x02\u03BD\u03BC\x03\x02" +
		"\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF" +
		"\u03C8\x073\x02\x02\u03C0\u03C1\x079\x02\x02\u03C1\u03C2\x05\x8AF\x02" +
		"\u03C2\u03C3\x07:\x02\x02\u03C3\u03C8\x03\x02\x02\x02\u03C4\u03C5\x07" +
		"/\x02\x02\u03C5\u03C6\x07&\x02\x02\u03C6\u03C8\bE\x01\x02\u03C7\u03BB" +
		"\x03\x02\x02\x02\u03C7\u03C0\x03\x02\x02\x02\u03C7\u03C4\x03\x02\x02\x02" +
		"\u03C8\x89\x03\x02\x02\x02\u03C9\u03CE\x05\x8CG\x02\u03CA\u03CB\x074\x02" +
		"\x02\u03CB\u03CD\x05\x8CG\x02\u03CC\u03CA\x03\x02\x02\x02\u03CD\u03D0" +
		"\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02" +
		"\u03CF\u03D2\x03\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D1\u03D3\x07" +
		"4\x02\x02\u03D2\u03D1\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3" +
		"\x8B\x03\x02\x02\x02\u03D4\u03E0\x05`1\x02\u03D5\u03D7\x05`1\x02\u03D6" +
		"\u03D5\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03D8\x03\x02" +
		"\x02\x02\u03D8\u03DA\x075\x02\x02\u03D9\u03DB\x05`1\x02\u03DA\u03D9\x03" +
		"\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DD\x03\x02\x02\x02\u03DC" +
		"\u03DE\x05\x8EH\x02\u03DD\u03DC\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02" +
		"\x02\u03DE\u03E0\x03\x02\x02\x02\u03DF\u03D4\x03\x02\x02\x02\u03DF\u03D6" +
		"\x03\x02\x02\x02\u03E0\x8D\x03\x02\x02\x02\u03E1\u03E3\x075\x02\x02\u03E2" +
		"\u03E4\x05`1\x02\u03E3\u03E2\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02" +
		"\u03E4\x8F\x03\x02\x02\x02\u03E5\u03EA\x05r:\x02\u03E6\u03E7\x074\x02" +
		"\x02\u03E7\u03E9\x05r:\x02\u03E8\u03E6\x03\x02\x02\x02\u03E9\u03EC\x03" +
		"\x02\x02\x02\u03EA\u03E8\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB" +
		"\u03EE\x03\x02\x02\x02\u03EC\u03EA\x03\x02\x02\x02\u03ED\u03EF\x074\x02" +
		"\x02\u03EE\u03ED\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\x91" +
		"\x03\x02\x02\x02\u03F0\u03F5\x05`1\x02\u03F1\u03F2\x074\x02\x02\u03F2" +
		"\u03F4\x05`1\x02\u03F3\u03F1\x03\x02\x02\x02\u03F4\u03F7\x03\x02\x02\x02" +
		"\u03F5\u03F3\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F9\x03" +
		"\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F8\u03FA\x074\x02\x02\u03F9" +
		"\u03F8\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\x93\x03\x02\x02" +
		"\x02\u03FB\u03FC\x05`1\x02\u03FC\u03FD\x075\x02\x02\u03FD\u040C\x05`1" +
		"\x02\u03FE\u040D\x05\x9EP\x02\u03FF\u0400\x074\x02\x02\u0400\u0401\x05" +
		"`1\x02\u0401\u0402\x075\x02\x02\u0402\u0403\x05`1\x02\u0403\u0405\x03" +
		"\x02\x02\x02\u0404\u03FF\x03\x02\x02\x02\u0405\u0408\x03\x02\x02\x02\u0406" +
		"\u0404\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02\u0407\u040A\x03\x02" +
		"\x02\x02\u0408\u0406\x03\x02\x02\x02\u0409\u040B\x074\x02\x02\u040A\u0409" +
		"\x03\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B\u040D\x03\x02\x02\x02" +
		"\u040C\u03FE\x03\x02\x02\x02\u040C\u0406\x03\x02\x02\x02\u040D\u041D\x03" +
		"\x02\x02\x02\u040E\u041A\x05`1\x02\u040F\u041B\x05\x9EP\x02\u0410\u0411" +
		"\x074\x02\x02\u0411\u0413\x05`1\x02\u0412\u0410\x03\x02\x02\x02\u0413" +
		"\u0416\x03\x02\x02\x02\u0414\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02" +
		"\x02\x02\u0415\u0418\x03\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0417" +
		"\u0419\x074\x02\x02\u0418\u0417\x03\x02\x02\x02\u0418\u0419\x03\x02\x02" +
		"\x02\u0419\u041B\x03\x02\x02\x02\u041A\u040F\x03\x02\x02\x02\u041A\u0414" +
		"\x03\x02\x02\x02\u041B\u041D\x03\x02\x02\x02\u041C\u03FB\x03\x02\x02\x02" +
		"\u041C\u040E\x03\x02\x02\x02\u041D\x95\x03\x02\x02\x02\u041E\u041F\x07" +
		"\x1F\x02\x02\u041F\u0425\x07&\x02\x02\u0420\u0422\x072\x02\x02\u0421\u0423" +
		"\x05\x98M\x02\u0422\u0421\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02" +
		"\u0423\u0424\x03\x02\x02\x02\u0424\u0426\x073\x02\x02\u0425\u0420\x03" +
		"\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427" +
		"\u0428\x075\x02\x02\u0428\u0429\x05^0\x02\u0429\x97\x03\x02\x02\x02\u042A" +
		"\u042B\x05\x9AN\x02\u042B\u042C\x074\x02\x02\u042C\u042E\x03\x02\x02\x02" +
		"\u042D\u042A\x03\x02\x02\x02\u042E\u0431\x03\x02\x02\x02\u042F\u042D\x03" +
		"\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0446\x03\x02\x02\x02\u0431" +
		"\u042F\x03\x02\x02\x02\u0432\u0434\x05\x9AN\x02\u0433\u0435\x074\x02\x02" +
		"\u0434\u0433\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0447\x03" +
		"\x02\x02\x02\u0436\u0437\x071\x02\x02\u0437\u043C\x05`1\x02\u0438\u0439" +
		"\x074\x02\x02\u0439\u043B\x05\x9AN\x02\u043A\u0438\x03\x02\x02\x02\u043B" +
		"\u043E\x03\x02\x02\x02\u043C\u043A\x03\x02\x02\x02\u043C\u043D\x03\x02" +
		"\x02\x02\u043D\u0442\x03\x02\x02\x02\u043E\u043C\x03\x02\x02\x02\u043F" +
		"\u0440\x074\x02\x02\u0440\u0441\x077\x02\x02\u0441\u0443\x05`1\x02\u0442" +
		"\u043F\x03\x02\x02\x02\u0442\u0443\x03\x02\x02\x02\u0443\u0447\x03\x02" +
		"\x02\x02\u0444\u0445\x077\x02\x02\u0445\u0447\x05`1\x02\u0446\u0432\x03" +
		"\x02\x02\x02\u0446\u0436\x03\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0447" +
		"\x99\x03\x02\x02\x02\u0448\u044A\x05`1\x02\u0449\u044B\x05\x9EP\x02\u044A" +
		"\u0449\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u044A\u044B\x03\x02\x02\x02\u044B\u0451\x03\x02\x02\x02\u044C\u044D" +
		"\x05`1\x02\u044D\u044E\x078\x02\x02\u044E\u044F\x05`1\x02\u044F\u0451" +
		"\x03\x02\x02\x02\u0450\u0448\x03\x02\x02\x02\u0450\u044C\x03\x02\x02\x02" +
		"\u0451\x9B\x03\x02\x02\x02\u0452\u0455\x05\x9EP\x02\u0453\u0455\x05\xA0" +
		"Q\x02\u0454\u0452\x03\x02\x02\x02\u0454\u0453\x03\x02\x02\x02\u0455\x9D" +
		"\x03\x02\x02\x02\u0456\u0457\x07\x11\x02\x02\u0457\u0458\x05\x90I\x02" +
		"\u0458\u0459\x07\x12\x02\x02\u0459\u045B\x05h5\x02\u045A\u045C\x05\x9C" +
		"O\x02\u045B\u045A\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C\x9F" +
		"\x03\x02\x02\x02\u045D\u045E\x07\r\x02\x02\u045E\u0460\x05b2\x02\u045F" +
		"\u0461\x05\x9CO\x02\u0460\u045F\x03\x02\x02\x02\u0460\u0461\x03\x02\x02" +
		"\x02\u0461\xA1\x03\x02\x02\x02\u0462\u0464\x07 \x02\x02\u0463\u0465\x05" +
		"\xA4S\x02\u0464\u0463\x03\x02\x02\x02\u0464\u0465\x03\x02\x02\x02\u0465" +
		"\xA3\x03\x02\x02\x02\u0466\u0467\x07\x07\x02\x02\u0467\u046A\x05`1\x02" +
		"\u0468\u046A\x05\x92J\x02\u0469\u0466\x03\x02\x02\x02\u0469\u0468\x03" +
		"\x02\x02\x02\u046A\xA5\x03\x02\x02\x02\u046B\u046C\t\x04\x02\x02\u046C" +
		"\xA7\x03\x02\x02\x02\u046D\u0471\x05\xAAV\x02\u046E\u0471\x07-\x02\x02" +
		"\u046F\u0471\x07.\x02\x02\u0470\u046D\x03\x02\x02\x02\u0470\u046E\x03" +
		"\x02\x02\x02\u0470\u046F\x03\x02\x02\x02\u0471\xA9\x03\x02\x02\x02\u0472" +
		"\u0473\t\x05\x02\x02\u0473\xAB\x03\x02\x02\x02\xA9\xB1\xB5\xB7\xC0\xC9" +
		"\xCC\xD3\xD8\xDF\xE6\xED\xF3\xF7\xFD\u0103\u0107\u010D\u0111\u0113\u0117" +
		"\u011D\u0121\u0127\u012B\u0130\u0135\u013B\u013F\u0145\u014B\u014F\u0155" +
		"\u0159\u015B\u015F\u0165\u0169\u016F\u0173\u0179\u0180\u0184\u0191\u019A" +
		"\u019E\u01A0\u01A8\u01AB\u01AD\u01AF\u01B8\u01BC\u01BE\u01C6\u01C9\u01CB" +
		"\u01CD\u01D0\u01D6\u01DB\u01DF\u01E2\u01E6\u01EB\u01EF\u01F3\u0201\u0209" +
		"\u0211\u0213\u021B\u021F\u0228\u022F\u0231\u023A\u023F\u0244\u024B\u024F" +
		"\u0256\u025E\u0267\u0270\u0277\u0281\u028E\u0294\u029D\u02A8\u02B3\u02B8" +
		"\u02BD\u02C2\u02CA\u02D3\u02D9\u02DB\u02E2\u02EA\u02EE\u02F6\u02F9\u02FD" +
		"\u0301\u0308\u0312\u031A\u0320\u0328\u0338\u033B\u0344\u034C\u0354\u035C" +
		"\u035E\u0366\u0368\u0376\u0378\u0382\u0388\u038D\u0392\u0397\u039C\u03A5" +
		"\u03AB\u03B3\u03B7\u03B9\u03BD\u03C7\u03CE\u03D2\u03D6\u03DA\u03DD\u03DF" +
		"\u03E3\u03EA\u03EE\u03F5\u03F9\u0406\u040A\u040C\u0414\u0418\u041A\u041C" +
		"\u0422\u0425\u042F\u0434\u043C\u0442\u0446\u044A\u0450\u0454\u045B\u0460" +
		"\u0464\u0469\u0470";
	public static readonly _serializedATN: string = Utils.join(
		[
			AltPython3Parser._serializedATNSegment0,
			AltPython3Parser._serializedATNSegment1,
			AltPython3Parser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AltPython3Parser.__ATN) {
			AltPython3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AltPython3Parser._serializedATN));
		}

		return AltPython3Parser.__ATN;
	}

}

export class Single_inputContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.NEWLINE, 0); }
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_single_input; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterSingle_input) {
			listener.enterSingle_input(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitSingle_input) {
			listener.exitSingle_input(this);
		}
	}
}


export class File_inputContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(AltPython3Parser.EOF, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.NEWLINE);
		} else {
			return this.getToken(AltPython3Parser.NEWLINE, i);
		}
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_file_input; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterFile_input) {
			listener.enterFile_input(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitFile_input) {
			listener.exitFile_input(this);
		}
	}
}


export class Eval_inputContext extends ParserRuleContext {
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public EOF(): TerminalNode { return this.getToken(AltPython3Parser.EOF, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.NEWLINE);
		} else {
			return this.getToken(AltPython3Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_eval_input; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterEval_input) {
			listener.enterEval_input(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitEval_input) {
			listener.exitEval_input(this);
		}
	}
}


export class DecoratorContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(AltPython3Parser.AT, 0); }
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(AltPython3Parser.NEWLINE, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.CLOSE_PAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_decorator; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterDecorator) {
			listener.enterDecorator(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitDecorator) {
			listener.exitDecorator(this);
		}
	}
}


export class DecoratorsContext extends ParserRuleContext {
	public decorator(): DecoratorContext[];
	public decorator(i: number): DecoratorContext;
	public decorator(i?: number): DecoratorContext | DecoratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecoratorContext);
		} else {
			return this.getRuleContext(i, DecoratorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_decorators; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterDecorators) {
			listener.enterDecorators(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitDecorators) {
			listener.exitDecorators(this);
		}
	}
}


export class DecoratedContext extends ParserRuleContext {
	public decorators(): DecoratorsContext {
		return this.getRuleContext(0, DecoratorsContext);
	}
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_decorated; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterDecorated) {
			listener.enterDecorated(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitDecorated) {
			listener.exitDecorated(this);
		}
	}
}


export class FuncdefContext extends ParserRuleContext {
	public DEF(): TerminalNode { return this.getToken(AltPython3Parser.DEF, 0); }
	public NAME(): TerminalNode { return this.getToken(AltPython3Parser.NAME, 0); }
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public COLON(): TerminalNode { return this.getToken(AltPython3Parser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.ARROW, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_funcdef; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterFuncdef) {
			listener.enterFuncdef(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitFuncdef) {
			listener.exitFuncdef(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(AltPython3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(AltPython3Parser.CLOSE_PAREN, 0); }
	public typedargslist(): TypedargslistContext | undefined {
		return this.tryGetRuleContext(0, TypedargslistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_parameters; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
}


export class TypedargslistContext extends ParserRuleContext {
	public tfpdef(): TfpdefContext[];
	public tfpdef(i: number): TfpdefContext;
	public tfpdef(i?: number): TfpdefContext | TfpdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TfpdefContext);
		} else {
			return this.getRuleContext(i, TfpdefContext);
		}
	}
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.ASSIGN);
		} else {
			return this.getToken(AltPython3Parser.ASSIGN, i);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.STAR, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.POWER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_typedargslist; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterTypedargslist) {
			listener.enterTypedargslist(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitTypedargslist) {
			listener.exitTypedargslist(this);
		}
	}
}


export class TfpdefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AltPython3Parser.NAME, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.COLON, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_tfpdef; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterTfpdef) {
			listener.enterTfpdef(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitTfpdef) {
			listener.exitTfpdef(this);
		}
	}
}


export class VarargslistContext extends ParserRuleContext {
	public vfpdef(): VfpdefContext[];
	public vfpdef(i: number): VfpdefContext;
	public vfpdef(i?: number): VfpdefContext | VfpdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VfpdefContext);
		} else {
			return this.getRuleContext(i, VfpdefContext);
		}
	}
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.ASSIGN);
		} else {
			return this.getToken(AltPython3Parser.ASSIGN, i);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.STAR, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.POWER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_varargslist; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterVarargslist) {
			listener.enterVarargslist(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitVarargslist) {
			listener.exitVarargslist(this);
		}
	}
}


export class VfpdefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AltPython3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_vfpdef; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterVfpdef) {
			listener.enterVfpdef(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitVfpdef) {
			listener.exitVfpdef(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
}


export class Simple_stmtContext extends ParserRuleContext {
	public small_stmt(): Small_stmtContext[];
	public small_stmt(i: number): Small_stmtContext;
	public small_stmt(i?: number): Small_stmtContext | Small_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Small_stmtContext);
		} else {
			return this.getRuleContext(i, Small_stmtContext);
		}
	}
	public NEWLINE(): TerminalNode { return this.getToken(AltPython3Parser.NEWLINE, 0); }
	public SEMI_COLON(): TerminalNode[];
	public SEMI_COLON(i: number): TerminalNode;
	public SEMI_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.SEMI_COLON);
		} else {
			return this.getToken(AltPython3Parser.SEMI_COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_simple_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterSimple_stmt) {
			listener.enterSimple_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitSimple_stmt) {
			listener.exitSimple_stmt(this);
		}
	}
}


export class Small_stmtContext extends ParserRuleContext {
	public print_stmt(): Print_stmtContext | undefined {
		return this.tryGetRuleContext(0, Print_stmtContext);
	}
	public expr_stmt(): Expr_stmtContext | undefined {
		return this.tryGetRuleContext(0, Expr_stmtContext);
	}
	public del_stmt(): Del_stmtContext | undefined {
		return this.tryGetRuleContext(0, Del_stmtContext);
	}
	public pass_stmt(): Pass_stmtContext | undefined {
		return this.tryGetRuleContext(0, Pass_stmtContext);
	}
	public flow_stmt(): Flow_stmtContext | undefined {
		return this.tryGetRuleContext(0, Flow_stmtContext);
	}
	public import_stmt(): Import_stmtContext | undefined {
		return this.tryGetRuleContext(0, Import_stmtContext);
	}
	public global_stmt(): Global_stmtContext | undefined {
		return this.tryGetRuleContext(0, Global_stmtContext);
	}
	public nonlocal_stmt(): Nonlocal_stmtContext | undefined {
		return this.tryGetRuleContext(0, Nonlocal_stmtContext);
	}
	public assert_stmt(): Assert_stmtContext | undefined {
		return this.tryGetRuleContext(0, Assert_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_small_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterSmall_stmt) {
			listener.enterSmall_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitSmall_stmt) {
			listener.exitSmall_stmt(this);
		}
	}
}


export class Print_stmtContext extends ParserRuleContext {
	public PRINT(): TerminalNode { return this.getToken(AltPython3Parser.PRINT, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.CLOSE_PAREN, 0); }
	public RIGHT_SHIFT(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.RIGHT_SHIFT, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_print_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterPrint_stmt) {
			listener.enterPrint_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitPrint_stmt) {
			listener.exitPrint_stmt(this);
		}
	}
}


export class Expr_stmtContext extends ParserRuleContext {
	public testlist_star_expr(): Testlist_star_exprContext[];
	public testlist_star_expr(i: number): Testlist_star_exprContext;
	public testlist_star_expr(i?: number): Testlist_star_exprContext | Testlist_star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Testlist_star_exprContext);
		} else {
			return this.getRuleContext(i, Testlist_star_exprContext);
		}
	}
	public augassign(): AugassignContext | undefined {
		return this.tryGetRuleContext(0, AugassignContext);
	}
	public yield_expr(): Yield_exprContext[];
	public yield_expr(i: number): Yield_exprContext;
	public yield_expr(i?: number): Yield_exprContext | Yield_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Yield_exprContext);
		} else {
			return this.getRuleContext(i, Yield_exprContext);
		}
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.ASSIGN);
		} else {
			return this.getToken(AltPython3Parser.ASSIGN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_expr_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterExpr_stmt) {
			listener.enterExpr_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitExpr_stmt) {
			listener.exitExpr_stmt(this);
		}
	}
}


export class Testlist_star_exprContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_testlist_star_expr; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterTestlist_star_expr) {
			listener.enterTestlist_star_expr(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitTestlist_star_expr) {
			listener.exitTestlist_star_expr(this);
		}
	}
}


export class AugassignContext extends ParserRuleContext {
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.SUB_ASSIGN, 0); }
	public MULT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.MULT_ASSIGN, 0); }
	public AT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.AT_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.MOD_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.XOR_ASSIGN, 0); }
	public LEFT_SHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.LEFT_SHIFT_ASSIGN, 0); }
	public RIGHT_SHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.RIGHT_SHIFT_ASSIGN, 0); }
	public POWER_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.POWER_ASSIGN, 0); }
	public IDIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.IDIV_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_augassign; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterAugassign) {
			listener.enterAugassign(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitAugassign) {
			listener.exitAugassign(this);
		}
	}
}


export class Del_stmtContext extends ParserRuleContext {
	public DEL(): TerminalNode { return this.getToken(AltPython3Parser.DEL, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_del_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterDel_stmt) {
			listener.enterDel_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitDel_stmt) {
			listener.exitDel_stmt(this);
		}
	}
}


export class Pass_stmtContext extends ParserRuleContext {
	public PASS(): TerminalNode { return this.getToken(AltPython3Parser.PASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_pass_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterPass_stmt) {
			listener.enterPass_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitPass_stmt) {
			listener.exitPass_stmt(this);
		}
	}
}


export class Flow_stmtContext extends ParserRuleContext {
	public break_stmt(): Break_stmtContext | undefined {
		return this.tryGetRuleContext(0, Break_stmtContext);
	}
	public continue_stmt(): Continue_stmtContext | undefined {
		return this.tryGetRuleContext(0, Continue_stmtContext);
	}
	public return_stmt(): Return_stmtContext | undefined {
		return this.tryGetRuleContext(0, Return_stmtContext);
	}
	public raise_stmt(): Raise_stmtContext | undefined {
		return this.tryGetRuleContext(0, Raise_stmtContext);
	}
	public yield_stmt(): Yield_stmtContext | undefined {
		return this.tryGetRuleContext(0, Yield_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_flow_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterFlow_stmt) {
			listener.enterFlow_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitFlow_stmt) {
			listener.exitFlow_stmt(this);
		}
	}
}


export class Break_stmtContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(AltPython3Parser.BREAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_break_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterBreak_stmt) {
			listener.enterBreak_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitBreak_stmt) {
			listener.exitBreak_stmt(this);
		}
	}
}


export class Continue_stmtContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(AltPython3Parser.CONTINUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_continue_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterContinue_stmt) {
			listener.enterContinue_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitContinue_stmt) {
			listener.exitContinue_stmt(this);
		}
	}
}


export class Return_stmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(AltPython3Parser.RETURN, 0); }
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_return_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterReturn_stmt) {
			listener.enterReturn_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitReturn_stmt) {
			listener.exitReturn_stmt(this);
		}
	}
}


export class Yield_stmtContext extends ParserRuleContext {
	public yield_expr(): Yield_exprContext {
		return this.getRuleContext(0, Yield_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_yield_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterYield_stmt) {
			listener.enterYield_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitYield_stmt) {
			listener.exitYield_stmt(this);
		}
	}
}


export class Raise_stmtContext extends ParserRuleContext {
	public RAISE(): TerminalNode { return this.getToken(AltPython3Parser.RAISE, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.FROM, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.NAME, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.COMMA, 0); }
	public str(): StrContext | undefined {
		return this.tryGetRuleContext(0, StrContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_raise_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterRaise_stmt) {
			listener.enterRaise_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitRaise_stmt) {
			listener.exitRaise_stmt(this);
		}
	}
}


export class Import_stmtContext extends ParserRuleContext {
	public import_name(): Import_nameContext | undefined {
		return this.tryGetRuleContext(0, Import_nameContext);
	}
	public import_from(): Import_fromContext | undefined {
		return this.tryGetRuleContext(0, Import_fromContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_import_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterImport_stmt) {
			listener.enterImport_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitImport_stmt) {
			listener.exitImport_stmt(this);
		}
	}
}


export class Import_nameContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(AltPython3Parser.IMPORT, 0); }
	public dotted_as_names(): Dotted_as_namesContext {
		return this.getRuleContext(0, Dotted_as_namesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_import_name; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterImport_name) {
			listener.enterImport_name(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitImport_name) {
			listener.exitImport_name(this);
		}
	}
}


export class Import_fromContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(AltPython3Parser.FROM, 0); }
	public IMPORT(): TerminalNode { return this.getToken(AltPython3Parser.IMPORT, 0); }
	public dotted_name(): Dotted_nameContext | undefined {
		return this.tryGetRuleContext(0, Dotted_nameContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.STAR, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.OPEN_PAREN, 0); }
	public import_as_names(): Import_as_namesContext | undefined {
		return this.tryGetRuleContext(0, Import_as_namesContext);
	}
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.CLOSE_PAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.DOT);
		} else {
			return this.getToken(AltPython3Parser.DOT, i);
		}
	}
	public ELLIPSIS(): TerminalNode[];
	public ELLIPSIS(i: number): TerminalNode;
	public ELLIPSIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.ELLIPSIS);
		} else {
			return this.getToken(AltPython3Parser.ELLIPSIS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_import_from; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterImport_from) {
			listener.enterImport_from(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitImport_from) {
			listener.exitImport_from(this);
		}
	}
}


export class Import_as_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.NAME);
		} else {
			return this.getToken(AltPython3Parser.NAME, i);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_import_as_name; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterImport_as_name) {
			listener.enterImport_as_name(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitImport_as_name) {
			listener.exitImport_as_name(this);
		}
	}
}


export class Dotted_as_nameContext extends ParserRuleContext {
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.AS, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_dotted_as_name; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterDotted_as_name) {
			listener.enterDotted_as_name(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitDotted_as_name) {
			listener.exitDotted_as_name(this);
		}
	}
}


export class Import_as_namesContext extends ParserRuleContext {
	public import_as_name(): Import_as_nameContext[];
	public import_as_name(i: number): Import_as_nameContext;
	public import_as_name(i?: number): Import_as_nameContext | Import_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Import_as_nameContext);
		} else {
			return this.getRuleContext(i, Import_as_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_import_as_names; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterImport_as_names) {
			listener.enterImport_as_names(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitImport_as_names) {
			listener.exitImport_as_names(this);
		}
	}
}


export class Dotted_as_namesContext extends ParserRuleContext {
	public dotted_as_name(): Dotted_as_nameContext[];
	public dotted_as_name(i: number): Dotted_as_nameContext;
	public dotted_as_name(i?: number): Dotted_as_nameContext | Dotted_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dotted_as_nameContext);
		} else {
			return this.getRuleContext(i, Dotted_as_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_dotted_as_names; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterDotted_as_names) {
			listener.enterDotted_as_names(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitDotted_as_names) {
			listener.exitDotted_as_names(this);
		}
	}
}


export class Dotted_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.NAME);
		} else {
			return this.getToken(AltPython3Parser.NAME, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.DOT);
		} else {
			return this.getToken(AltPython3Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_dotted_name; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterDotted_name) {
			listener.enterDotted_name(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitDotted_name) {
			listener.exitDotted_name(this);
		}
	}
}


export class Global_stmtContext extends ParserRuleContext {
	public GLOBAL(): TerminalNode { return this.getToken(AltPython3Parser.GLOBAL, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.NAME);
		} else {
			return this.getToken(AltPython3Parser.NAME, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_global_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterGlobal_stmt) {
			listener.enterGlobal_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitGlobal_stmt) {
			listener.exitGlobal_stmt(this);
		}
	}
}


export class Nonlocal_stmtContext extends ParserRuleContext {
	public NONLOCAL(): TerminalNode { return this.getToken(AltPython3Parser.NONLOCAL, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.NAME);
		} else {
			return this.getToken(AltPython3Parser.NAME, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_nonlocal_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterNonlocal_stmt) {
			listener.enterNonlocal_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitNonlocal_stmt) {
			listener.exitNonlocal_stmt(this);
		}
	}
}


export class Assert_stmtContext extends ParserRuleContext {
	public ASSERT(): TerminalNode { return this.getToken(AltPython3Parser.ASSERT, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_assert_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterAssert_stmt) {
			listener.enterAssert_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitAssert_stmt) {
			listener.exitAssert_stmt(this);
		}
	}
}


export class Compound_stmtContext extends ParserRuleContext {
	public if_stmt(): If_stmtContext | undefined {
		return this.tryGetRuleContext(0, If_stmtContext);
	}
	public while_stmt(): While_stmtContext | undefined {
		return this.tryGetRuleContext(0, While_stmtContext);
	}
	public for_stmt(): For_stmtContext | undefined {
		return this.tryGetRuleContext(0, For_stmtContext);
	}
	public try_stmt(): Try_stmtContext | undefined {
		return this.tryGetRuleContext(0, Try_stmtContext);
	}
	public with_stmt(): With_stmtContext | undefined {
		return this.tryGetRuleContext(0, With_stmtContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public decorated(): DecoratedContext | undefined {
		return this.tryGetRuleContext(0, DecoratedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_compound_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterCompound_stmt) {
			listener.enterCompound_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitCompound_stmt) {
			listener.exitCompound_stmt(this);
		}
	}
}


export class If_stmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(AltPython3Parser.IF, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COLON);
		} else {
			return this.getToken(AltPython3Parser.COLON, i);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public ELIF(): TerminalNode[];
	public ELIF(i: number): TerminalNode;
	public ELIF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.ELIF);
		} else {
			return this.getToken(AltPython3Parser.ELIF, i);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_if_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterIf_stmt) {
			listener.enterIf_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitIf_stmt) {
			listener.exitIf_stmt(this);
		}
	}
}


export class While_stmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(AltPython3Parser.WHILE, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COLON);
		} else {
			return this.getToken(AltPython3Parser.COLON, i);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_while_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterWhile_stmt) {
			listener.enterWhile_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitWhile_stmt) {
			listener.exitWhile_stmt(this);
		}
	}
}


export class For_stmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(AltPython3Parser.FOR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public IN(): TerminalNode { return this.getToken(AltPython3Parser.IN, 0); }
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COLON);
		} else {
			return this.getToken(AltPython3Parser.COLON, i);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_for_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterFor_stmt) {
			listener.enterFor_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitFor_stmt) {
			listener.exitFor_stmt(this);
		}
	}
}


export class Try_stmtContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(AltPython3Parser.TRY, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COLON);
		} else {
			return this.getToken(AltPython3Parser.COLON, i);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.FINALLY, 0); }
	public except_clause(): Except_clauseContext[];
	public except_clause(i: number): Except_clauseContext;
	public except_clause(i?: number): Except_clauseContext | Except_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Except_clauseContext);
		} else {
			return this.getRuleContext(i, Except_clauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_try_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterTry_stmt) {
			listener.enterTry_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitTry_stmt) {
			listener.exitTry_stmt(this);
		}
	}
}


export class With_stmtContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(AltPython3Parser.WITH, 0); }
	public with_item(): With_itemContext[];
	public with_item(i: number): With_itemContext;
	public with_item(i?: number): With_itemContext | With_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(With_itemContext);
		} else {
			return this.getRuleContext(i, With_itemContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(AltPython3Parser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_with_stmt; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterWith_stmt) {
			listener.enterWith_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitWith_stmt) {
			listener.exitWith_stmt(this);
		}
	}
}


export class With_itemContext extends ParserRuleContext {
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.AS, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_with_item; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterWith_item) {
			listener.enterWith_item(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitWith_item) {
			listener.exitWith_item(this);
		}
	}
}


export class Except_clauseContext extends ParserRuleContext {
	public EXCEPT(): TerminalNode { return this.getToken(AltPython3Parser.EXCEPT, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.AS, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.NAME);
		} else {
			return this.getToken(AltPython3Parser.NAME, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_except_clause; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterExcept_clause) {
			listener.enterExcept_clause(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitExcept_clause) {
			listener.exitExcept_clause(this);
		}
	}
}


export class SuiteContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.NEWLINE, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.DEDENT, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_suite; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterSuite) {
			listener.enterSuite(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitSuite) {
			listener.exitSuite(this);
		}
	}
}


export class TestContext extends ParserRuleContext {
	public or_test(): Or_testContext[];
	public or_test(i: number): Or_testContext;
	public or_test(i?: number): Or_testContext | Or_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Or_testContext);
		} else {
			return this.getRuleContext(i, Or_testContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.IF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.ELSE, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public lambdef(): LambdefContext | undefined {
		return this.tryGetRuleContext(0, LambdefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_test; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterTest) {
			listener.enterTest(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitTest) {
			listener.exitTest(this);
		}
	}
}


export class Test_nocondContext extends ParserRuleContext {
	public or_test(): Or_testContext | undefined {
		return this.tryGetRuleContext(0, Or_testContext);
	}
	public lambdef_nocond(): Lambdef_nocondContext | undefined {
		return this.tryGetRuleContext(0, Lambdef_nocondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_test_nocond; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterTest_nocond) {
			listener.enterTest_nocond(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitTest_nocond) {
			listener.exitTest_nocond(this);
		}
	}
}


export class LambdefContext extends ParserRuleContext {
	public LAMBDA(): TerminalNode { return this.getToken(AltPython3Parser.LAMBDA, 0); }
	public COLON(): TerminalNode { return this.getToken(AltPython3Parser.COLON, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_lambdef; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterLambdef) {
			listener.enterLambdef(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitLambdef) {
			listener.exitLambdef(this);
		}
	}
}


export class Lambdef_nocondContext extends ParserRuleContext {
	public LAMBDA(): TerminalNode { return this.getToken(AltPython3Parser.LAMBDA, 0); }
	public COLON(): TerminalNode { return this.getToken(AltPython3Parser.COLON, 0); }
	public test_nocond(): Test_nocondContext {
		return this.getRuleContext(0, Test_nocondContext);
	}
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_lambdef_nocond; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterLambdef_nocond) {
			listener.enterLambdef_nocond(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitLambdef_nocond) {
			listener.exitLambdef_nocond(this);
		}
	}
}


export class Or_testContext extends ParserRuleContext {
	public and_test(): And_testContext[];
	public and_test(i: number): And_testContext;
	public and_test(i?: number): And_testContext | And_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_testContext);
		} else {
			return this.getRuleContext(i, And_testContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.OR);
		} else {
			return this.getToken(AltPython3Parser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_or_test; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterOr_test) {
			listener.enterOr_test(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitOr_test) {
			listener.exitOr_test(this);
		}
	}
}


export class And_testContext extends ParserRuleContext {
	public not_test(): Not_testContext[];
	public not_test(i: number): Not_testContext;
	public not_test(i?: number): Not_testContext | Not_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Not_testContext);
		} else {
			return this.getRuleContext(i, Not_testContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.AND);
		} else {
			return this.getToken(AltPython3Parser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_and_test; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterAnd_test) {
			listener.enterAnd_test(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitAnd_test) {
			listener.exitAnd_test(this);
		}
	}
}


export class Not_testContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.NOT, 0); }
	public not_test(): Not_testContext | undefined {
		return this.tryGetRuleContext(0, Not_testContext);
	}
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_not_test; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterNot_test) {
			listener.enterNot_test(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitNot_test) {
			listener.exitNot_test(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public comp_op(): Comp_opContext[];
	public comp_op(i: number): Comp_opContext;
	public comp_op(i?: number): Comp_opContext | Comp_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comp_opContext);
		} else {
			return this.getRuleContext(i, Comp_opContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_comparison; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
}


export class Comp_opContext extends ParserRuleContext {
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.LESS_THAN, 0); }
	public GREATER_THAN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.GREATER_THAN, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.EQUALS, 0); }
	public GT_EQ(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.GT_EQ, 0); }
	public LT_EQ(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.LT_EQ, 0); }
	public NOT_EQ_1(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.NOT_EQ_1, 0); }
	public NOT_EQ_2(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.NOT_EQ_2, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.IN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.NOT, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.IS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_comp_op; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterComp_op) {
			listener.enterComp_op(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitComp_op) {
			listener.exitComp_op(this);
		}
	}
}


export class Star_exprContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.STAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_star_expr; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterStar_expr) {
			listener.enterStar_expr(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitStar_expr) {
			listener.exitStar_expr(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public xor_expr(): Xor_exprContext[];
	public xor_expr(i: number): Xor_exprContext;
	public xor_expr(i?: number): Xor_exprContext | Xor_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xor_exprContext);
		} else {
			return this.getRuleContext(i, Xor_exprContext);
		}
	}
	public OR_OP(): TerminalNode[];
	public OR_OP(i: number): TerminalNode;
	public OR_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.OR_OP);
		} else {
			return this.getToken(AltPython3Parser.OR_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_expr; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
}


export class Xor_exprContext extends ParserRuleContext {
	public and_expr(): And_exprContext[];
	public and_expr(i: number): And_exprContext;
	public and_expr(i?: number): And_exprContext | And_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_exprContext);
		} else {
			return this.getRuleContext(i, And_exprContext);
		}
	}
	public XOR(): TerminalNode[];
	public XOR(i: number): TerminalNode;
	public XOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.XOR);
		} else {
			return this.getToken(AltPython3Parser.XOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_xor_expr; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterXor_expr) {
			listener.enterXor_expr(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitXor_expr) {
			listener.exitXor_expr(this);
		}
	}
}


export class And_exprContext extends ParserRuleContext {
	public shift_expr(): Shift_exprContext[];
	public shift_expr(i: number): Shift_exprContext;
	public shift_expr(i?: number): Shift_exprContext | Shift_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Shift_exprContext);
		} else {
			return this.getRuleContext(i, Shift_exprContext);
		}
	}
	public AND_OP(): TerminalNode[];
	public AND_OP(i: number): TerminalNode;
	public AND_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.AND_OP);
		} else {
			return this.getToken(AltPython3Parser.AND_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_and_expr; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterAnd_expr) {
			listener.enterAnd_expr(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitAnd_expr) {
			listener.exitAnd_expr(this);
		}
	}
}


export class Shift_exprContext extends ParserRuleContext {
	public arith_expr(): Arith_exprContext[];
	public arith_expr(i: number): Arith_exprContext;
	public arith_expr(i?: number): Arith_exprContext | Arith_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Arith_exprContext);
		} else {
			return this.getRuleContext(i, Arith_exprContext);
		}
	}
	public LEFT_SHIFT(): TerminalNode[];
	public LEFT_SHIFT(i: number): TerminalNode;
	public LEFT_SHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.LEFT_SHIFT);
		} else {
			return this.getToken(AltPython3Parser.LEFT_SHIFT, i);
		}
	}
	public RIGHT_SHIFT(): TerminalNode[];
	public RIGHT_SHIFT(i: number): TerminalNode;
	public RIGHT_SHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.RIGHT_SHIFT);
		} else {
			return this.getToken(AltPython3Parser.RIGHT_SHIFT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_shift_expr; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterShift_expr) {
			listener.enterShift_expr(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitShift_expr) {
			listener.exitShift_expr(this);
		}
	}
}


export class Arith_exprContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public ADD(): TerminalNode[];
	public ADD(i: number): TerminalNode;
	public ADD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.ADD);
		} else {
			return this.getToken(AltPython3Parser.ADD, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.MINUS);
		} else {
			return this.getToken(AltPython3Parser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_arith_expr; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterArith_expr) {
			listener.enterArith_expr(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitArith_expr) {
			listener.exitArith_expr(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.STAR);
		} else {
			return this.getToken(AltPython3Parser.STAR, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.DIV);
		} else {
			return this.getToken(AltPython3Parser.DIV, i);
		}
	}
	public MOD(): TerminalNode[];
	public MOD(i: number): TerminalNode;
	public MOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.MOD);
		} else {
			return this.getToken(AltPython3Parser.MOD, i);
		}
	}
	public IDIV(): TerminalNode[];
	public IDIV(i: number): TerminalNode;
	public IDIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.IDIV);
		} else {
			return this.getToken(AltPython3Parser.IDIV, i);
		}
	}
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.AT);
		} else {
			return this.getToken(AltPython3Parser.AT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_term; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public ADD(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.ADD, 0); }
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.MINUS, 0); }
	public NOT_OP(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.NOT_OP, 0); }
	public power(): PowerContext | undefined {
		return this.tryGetRuleContext(0, PowerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_factor; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
}


export class PowerContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public trailer(): TrailerContext[];
	public trailer(i: number): TrailerContext;
	public trailer(i?: number): TrailerContext | TrailerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TrailerContext);
		} else {
			return this.getRuleContext(i, TrailerContext);
		}
	}
	public POWER(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.POWER, 0); }
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_power; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterPower) {
			listener.enterPower(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitPower) {
			listener.exitPower(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.CLOSE_PAREN, 0); }
	public yield_expr(): Yield_exprContext | undefined {
		return this.tryGetRuleContext(0, Yield_exprContext);
	}
	public testlist_comp(): Testlist_compContext | undefined {
		return this.tryGetRuleContext(0, Testlist_compContext);
	}
	public OPEN_BRACK(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.OPEN_BRACK, 0); }
	public CLOSE_BRACK(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.CLOSE_BRACK, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.CLOSE_BRACE, 0); }
	public dictorsetmaker(): DictorsetmakerContext | undefined {
		return this.tryGetRuleContext(0, DictorsetmakerContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.NAME, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public str(): StrContext[];
	public str(i: number): StrContext;
	public str(i?: number): StrContext | StrContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StrContext);
		} else {
			return this.getRuleContext(i, StrContext);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.ELLIPSIS, 0); }
	public NONE(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.NONE, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_atom; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}


export class Testlist_compContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_testlist_comp; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterTestlist_comp) {
			listener.enterTestlist_comp(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitTestlist_comp) {
			listener.exitTestlist_comp(this);
		}
	}
}


export class TrailerContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.CLOSE_PAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	public OPEN_BRACK(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.OPEN_BRACK, 0); }
	public subscriptlist(): SubscriptlistContext | undefined {
		return this.tryGetRuleContext(0, SubscriptlistContext);
	}
	public CLOSE_BRACK(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.CLOSE_BRACK, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.DOT, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_trailer; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterTrailer) {
			listener.enterTrailer(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitTrailer) {
			listener.exitTrailer(this);
		}
	}
}


export class SubscriptlistContext extends ParserRuleContext {
	public subscript(): SubscriptContext[];
	public subscript(i: number): SubscriptContext;
	public subscript(i?: number): SubscriptContext | SubscriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptContext);
		} else {
			return this.getRuleContext(i, SubscriptContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_subscriptlist; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterSubscriptlist) {
			listener.enterSubscriptlist(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitSubscriptlist) {
			listener.exitSubscriptlist(this);
		}
	}
}


export class SubscriptContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.COLON, 0); }
	public sliceop(): SliceopContext | undefined {
		return this.tryGetRuleContext(0, SliceopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_subscript; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
}


export class SliceopContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(AltPython3Parser.COLON, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_sliceop; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterSliceop) {
			listener.enterSliceop(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitSliceop) {
			listener.exitSliceop(this);
		}
	}
}


export class ExprlistContext extends ParserRuleContext {
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_exprlist; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterExprlist) {
			listener.enterExprlist(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitExprlist) {
			listener.exitExprlist(this);
		}
	}
}


export class TestlistContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_testlist; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterTestlist) {
			listener.enterTestlist(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitTestlist) {
			listener.exitTestlist(this);
		}
	}
}


export class DictorsetmakerContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COLON);
		} else {
			return this.getToken(AltPython3Parser.COLON, i);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_dictorsetmaker; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterDictorsetmaker) {
			listener.enterDictorsetmaker(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitDictorsetmaker) {
			listener.exitDictorsetmaker(this);
		}
	}
}


export class ClassdefContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(AltPython3Parser.CLASS, 0); }
	public NAME(): TerminalNode { return this.getToken(AltPython3Parser.NAME, 0); }
	public COLON(): TerminalNode { return this.getToken(AltPython3Parser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.CLOSE_PAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_classdef; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterClassdef) {
			listener.enterClassdef(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitClassdef) {
			listener.exitClassdef(this);
		}
	}
}


export class ArglistContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.STAR, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public POWER(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.POWER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AltPython3Parser.COMMA);
		} else {
			return this.getToken(AltPython3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_arglist; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterArglist) {
			listener.enterArglist(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitArglist) {
			listener.exitArglist(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_argument; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class Comp_iterContext extends ParserRuleContext {
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public comp_if(): Comp_ifContext | undefined {
		return this.tryGetRuleContext(0, Comp_ifContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_comp_iter; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterComp_iter) {
			listener.enterComp_iter(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitComp_iter) {
			listener.exitComp_iter(this);
		}
	}
}


export class Comp_forContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(AltPython3Parser.FOR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public IN(): TerminalNode { return this.getToken(AltPython3Parser.IN, 0); }
	public or_test(): Or_testContext {
		return this.getRuleContext(0, Or_testContext);
	}
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_comp_for; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterComp_for) {
			listener.enterComp_for(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitComp_for) {
			listener.exitComp_for(this);
		}
	}
}


export class Comp_ifContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(AltPython3Parser.IF, 0); }
	public test_nocond(): Test_nocondContext {
		return this.getRuleContext(0, Test_nocondContext);
	}
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_comp_if; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterComp_if) {
			listener.enterComp_if(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitComp_if) {
			listener.exitComp_if(this);
		}
	}
}


export class Yield_exprContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(AltPython3Parser.YIELD, 0); }
	public yield_arg(): Yield_argContext | undefined {
		return this.tryGetRuleContext(0, Yield_argContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_yield_expr; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterYield_expr) {
			listener.enterYield_expr(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitYield_expr) {
			listener.exitYield_expr(this);
		}
	}
}


export class Yield_argContext extends ParserRuleContext {
	public FROM(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.FROM, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_yield_arg; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterYield_arg) {
			listener.enterYield_arg(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitYield_arg) {
			listener.exitYield_arg(this);
		}
	}
}


export class StrContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.STRING_LITERAL, 0); }
	public BYTES_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.BYTES_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_str; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterStr) {
			listener.enterStr(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitStr) {
			listener.exitStr(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public FLOAT_NUMBER(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.FLOAT_NUMBER, 0); }
	public IMAG_NUMBER(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.IMAG_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_number; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public DECIMAL_INTEGER(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.DECIMAL_INTEGER, 0); }
	public OCT_INTEGER(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.OCT_INTEGER, 0); }
	public HEX_INTEGER(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.HEX_INTEGER, 0); }
	public BIN_INTEGER(): TerminalNode | undefined { return this.tryGetToken(AltPython3Parser.BIN_INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AltPython3Parser.RULE_integer; }
	// @Override
	public enterRule(listener: AltPython3Listener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: AltPython3Listener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
}


