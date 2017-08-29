import { CodeHelper } from './helpers/CodeHelper';
import { Ordering, OrderModes } from './models/Ordering';
import { IRule } from './models/IRule';
import { RegexHelper } from './helpers/RegexHelper';
import { StringHelper } from './helpers/StringHelper';
import { CodeBlock } from './models/codeBlock';

// Reorders specific blocks of code to be in Alphabetical order.
export class OrderCode {

    private newText: string;

    constructor(
        private readonly _vsText: string,
        private readonly _langRules: IRule
    ) { this.newText = _vsText; }

    public order(): string {
        // Order the rules, desc added to top
        Ordering.sortByOrderDesc(this._langRules.order).forEach(rule => {
            let blocks: CodeBlock[];
            switch (rule.mode) {
                case OrderModes.RespectParent:
                    
                    break;
                case OrderModes.ExcludeParent:
                    break;
                case OrderModes.ParentOnly:
                    // Get matching code blocks for parent only    
                    // blocks = this.matchCodeBlocks(
                    //     RegexHelper.inverseRemove(rule.parent, this.newText),
                    //     rule.match,
                    //     rule.sortBy
                    // );
                    break;
                default:
                    blocks = this.matchCodeBlocks(this.newText, rule);
                    break;
            }
            let sortedBlocks = CodeBlock.sortByName(blocks);
            this.newText = StringHelper.insertAtStart(this.newText, CodeBlock.buildCode(blocks));    
        });
        return this.newText;
    }

    

    public matchCodeBlocks(text:string, rule: Ordering, targetGroup: number = 1): CodeBlock[] {
        // Results, and Text Block in Lines.
        const textLines = StringHelper.getLines(this._vsText);
        let results: CodeBlock[] = [];

        // Iterate through lines and record matches.
        for (var startLine = 0; startLine < textLines.length; startLine++) {
            let line = textLines[startLine];
            // Check if the line matches.
            if (line.match(rule.singleLine)) {
                // Get CodeBlock ending line.
                let endLine = CodeHelper.getBracketEndLine(this._vsText, startLine, ["{", "}"]);
                let code = StringHelper.getTextFromRange(this._vsText, startLine, endLine);

                // Record new block info.
                results.push(new CodeBlock(
                    RegexHelper.getTargetGroup(line, rule.singleLine, targetGroup).toString(),
                    code
                ));

                this.newText = this.newText.replace(code.trim(), "").trim(); // Remove code from old pos
                startLine = endLine; // Jump index to end of block
            }
            else if (line.match(rule.multiLine)) {
                // Get CodeBlock ending line.
                let midLine = CodeHelper.getBracketEndLine(this._vsText, startLine, ["(", ")"]);
                let endLine = CodeHelper.getBracketEndLine(this._vsText, midLine, ["{", "}"]);
                let code = StringHelper.getTextFromRange(this._vsText, startLine, endLine);
                
                // Record new block info.
                results.push(new CodeBlock(
                    RegexHelper.getTargetGroup(line, rule.multiLine, targetGroup).toString(),
                    code
                ));

                this.newText = this.newText.replace(code.trim(), "").trim(); // Remove code from old pos
                startLine = endLine; // Jump index to end of block
            }
        }
        return results;
    }

    

}

