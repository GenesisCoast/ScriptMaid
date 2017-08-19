import { RegexUtils } from './../utils/regexUtils';
import { StringUtils } from './../utils/stringUtils';
import { CodeBlock } from './../models/codeBlock';

// Reorders specific blocks of code to be in Alphabetical order.
export class OrderCode {

    public static getMatchingBracketLine(textBlock: string, lineNo: number) {
        // Text Lines and Line No.
        let textLines = StringUtils.getLines(textBlock);

        // Number of Parenthesis found.
        let start: number = 0;
        let end: number = 0;

        // Keep Looping until matching Parenthesis is found. 
        do {
            if (StringUtils.contains(textLines[lineNo], "{")) {
                let x: number = start;
                start = x + 1;
            }   
            else if (StringUtils.contains(textLines[lineNo], "}")) {
                let x: number = end;
                end = x + 1;
            }
            lineNo++;
        } while (start != end && lineNo < textLines.length) 
        return lineNo;
    }

    public static matchCodeBlocks(textBlock: string, pattern: RegExp): CodeBlock[] {
        // Results, and Text Block in Lines.
        let textLines = StringUtils.getLines(textBlock);
        let results: CodeBlock[] = [];

        // Iterate through lines and record matches.
        for (var startLine = 0; startLine < textLines.length; startLine++) {
            let line = textLines[startLine];
            // Check if the line matches.
            if (textLines[startLine].match(pattern)) {
                // Get CodeBlock ending line.
                let endLine = this.getMatchingBracketLine(textBlock, startLine);
                results.push(new CodeBlock(
                    RegexUtils.getTargetGroup(line, pattern).toString(),
                    StringUtils.getTextFromRange(textBlock, startLine, endLine).toString()
                ));
            }
        }
        return results;
    }

    public removeCodeBlocks(textBlock: string, blocks: CodeBlock[]) {
        blocks.forEach(b => {
            textBlock.replace(b.code, "");
        })
    }

}

