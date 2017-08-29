import { StringHelper } from './StringHelper';


export class CodeHelper {

  public static getBracketEndLine(textBlock: string, lineNo: number, brackets: string[]): number {
    // Text Lines and Line No.
    let textLines = StringHelper.getLines(textBlock);

    // Number of Parenthesis found.
    let start: number = 0;
    let end: number = 0;
    
    // Try and account for additional line.  
    if (!textLines[lineNo].trim().endsWith(brackets[0])) {
        lineNo++;
    }  

    // Keep Looping until matching Parenthesis is found. 
    do {
        if (StringHelper.contains(textLines[lineNo], brackets[0]) &&
            StringHelper.contains(textLines[lineNo], brackets[1])
        ) {
            start++;
            end++;
        }
        else if (StringHelper.contains(textLines[lineNo], brackets[0])) {
            start++;
        }   
        else if (StringHelper.contains(textLines[lineNo], brackets[1])) {
            end++;
        }
        lineNo++;
    } while (start != end && lineNo < textLines.length) 
    // Adjust for 0 based lines  
    return lineNo - 1;
  }

  public static getParentBlock

}