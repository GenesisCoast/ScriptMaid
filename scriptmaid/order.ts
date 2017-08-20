import { IRules } from './models/rule';
import { RegexHelper } from './helpers/RegexHelper';
import { StringHelper } from './helpers/StringHelper';
import { CodeBlock } from './models/codeBlock';

// Reorders specific blocks of code to be in Alphabetical order.
export class OrderCode {

    constructor(
        private vsText: string,
        private langRules: IRules
    ) { }

    public order(): string {
        let blocks = this.matchCodeBlocks(this.langRules.pattern);
        let sortedBlocks = CodeBlock.sortByName(blocks);
        return CodeBlock.buildCode(blocks);
    }

    public getMatchingBracketLine(textBlock: string, lineNo: number): number {
        // Text Lines and Line No.
        let textLines = StringHelper.getLines(textBlock);

        // Number of Parenthesis found.
        let start: number = 0;
        let end: number = 0;

        // Keep Looping until matching Parenthesis is found. 
        do {
            if (StringHelper.contains(textLines[lineNo], "{")) {
                let x: number = start;
                start = x + 1;
            }   
            else if (StringHelper.contains(textLines[lineNo], "}")) {
                let x: number = end;
                end = x + 1;
            }
            lineNo++;
        } while (start != end && lineNo < textLines.length) 
        return lineNo;
    }

    public matchCodeBlocks(pattern: RegExp): CodeBlock[] {
        // Results, and Text Block in Lines.
        let textLines = StringHelper.getLines(this.vsText);
        let results: CodeBlock[] = [];

        // Iterate through lines and record matches.
        for (var startLine = 0; startLine < textLines.length; startLine++) {
            let line = textLines[startLine];
            // Check if the line matches.
            if (textLines[startLine].match(pattern)) {
                // Get CodeBlock ending line.
                let endLine = this.getMatchingBracketLine(this.vsText, startLine);
                results.push(new CodeBlock(
                    RegexHelper.getTargetGroup(line, pattern).toString(),
                    StringHelper.getTextFromRange(this.vsText, startLine, endLine).toString()
                ));
            }
        }
        return results;
    }

}

