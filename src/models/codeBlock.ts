export class CodeBlock {

    public name: string;
    public code: string;

    constructor(name: string, code: string) {
        this.name = name;
        this.code = code;
    }

    public static sortByName(blocks: CodeBlock[]): CodeBlock[] {
        return blocks.sort(function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
          
            if (nameA > nameB) {
              return 1;
            }
            else if (nameA < nameB) {
              return -1;
            }
            return 0;
        });
    }

    public static buildCode(blocks: CodeBlock[]): string {
        return blocks.map(b => b.code).join("\n\n");
    }
}