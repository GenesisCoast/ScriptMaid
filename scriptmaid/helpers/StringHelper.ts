export class StringHelper {
    
    public static contains(text: string, contains: string): boolean {
        if (text.indexOf(contains) >= 0) {
            return true;
        } 
        return false;
    }

    public static getLines(textBlock: string): string[] {
        return textBlock.split("\n");
    }

    public static getTextFromRange(textBlock: string, startLine: number, endLine: number): string {
        let lines = this.getLines(textBlock);
        let results: string[] = [];

        for (let i = startLine; (i < lines.length) && (i <= endLine); i++) {
            results.push(lines[i]);
        }
        return results.join("\n");
    }

    public static insertAtStart(oldText: string, insertText: string, newLine: boolean = true): string {
        if (newLine) {
            return insertText + "\n\n" + oldText;
        }
        return insertText + "\n" + oldText;
    }
    
}