// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/objc/two-step-processing/ObjectiveCPreprocessorParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PreprocessorConstantContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorConditionalSymbolContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorParenthesisContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorNotContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorBinaryContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorDefinedContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorImportContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorConditionalContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorDefContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorPragmaContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorErrorContext } from "./ObjectiveCPreprocessorParser";
import { PreprocessorDefineContext } from "./ObjectiveCPreprocessorParser";
import { ObjectiveCDocumentContext } from "./ObjectiveCPreprocessorParser";
import { TextContext } from "./ObjectiveCPreprocessorParser";
import { CodeContext } from "./ObjectiveCPreprocessorParser";
import { DirectiveContext } from "./ObjectiveCPreprocessorParser";
import { Directive_textContext } from "./ObjectiveCPreprocessorParser";
import { Preprocessor_expressionContext } from "./ObjectiveCPreprocessorParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ObjectiveCPreprocessorParser`.
 */
export interface ObjectiveCPreprocessorParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `preprocessorConstant`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorConstant?: (ctx: PreprocessorConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorConstant`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorConstant?: (ctx: PreprocessorConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorConditionalSymbol`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorConditionalSymbol?: (ctx: PreprocessorConditionalSymbolContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorConditionalSymbol`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorConditionalSymbol?: (ctx: PreprocessorConditionalSymbolContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorParenthesis`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorParenthesis?: (ctx: PreprocessorParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorParenthesis`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorParenthesis?: (ctx: PreprocessorParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorNot`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorNot?: (ctx: PreprocessorNotContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorNot`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorNot?: (ctx: PreprocessorNotContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorBinary`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorBinary?: (ctx: PreprocessorBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorBinary`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorBinary?: (ctx: PreprocessorBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorDefined`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorDefined?: (ctx: PreprocessorDefinedContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorDefined`
	 * labeled alternative in `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorDefined?: (ctx: PreprocessorDefinedContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorImport`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorImport?: (ctx: PreprocessorImportContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorImport`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorImport?: (ctx: PreprocessorImportContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorConditional`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorConditional?: (ctx: PreprocessorConditionalContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorConditional`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorConditional?: (ctx: PreprocessorConditionalContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorDef`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorDef?: (ctx: PreprocessorDefContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorDef`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorDef?: (ctx: PreprocessorDefContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorPragma`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorPragma?: (ctx: PreprocessorPragmaContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorPragma`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorPragma?: (ctx: PreprocessorPragmaContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorError`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorError?: (ctx: PreprocessorErrorContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorError`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorError?: (ctx: PreprocessorErrorContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorDefine`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorDefine?: (ctx: PreprocessorDefineContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorDefine`
	 * labeled alternative in `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorDefine?: (ctx: PreprocessorDefineContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectiveCPreprocessorParser.objectiveCDocument`.
	 * @param ctx the parse tree
	 */
	enterObjectiveCDocument?: (ctx: ObjectiveCDocumentContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectiveCPreprocessorParser.objectiveCDocument`.
	 * @param ctx the parse tree
	 */
	exitObjectiveCDocument?: (ctx: ObjectiveCDocumentContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectiveCPreprocessorParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectiveCPreprocessorParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectiveCPreprocessorParser.code`.
	 * @param ctx the parse tree
	 */
	enterCode?: (ctx: CodeContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectiveCPreprocessorParser.code`.
	 * @param ctx the parse tree
	 */
	exitCode?: (ctx: CodeContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectiveCPreprocessorParser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectiveCPreprocessorParser.directive_text`.
	 * @param ctx the parse tree
	 */
	enterDirective_text?: (ctx: Directive_textContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectiveCPreprocessorParser.directive_text`.
	 * @param ctx the parse tree
	 */
	exitDirective_text?: (ctx: Directive_textContext) => void;

	/**
	 * Enter a parse tree produced by `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	enterPreprocessor_expression?: (ctx: Preprocessor_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `ObjectiveCPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	exitPreprocessor_expression?: (ctx: Preprocessor_expressionContext) => void;
}

