export class RegexUtils {

    public static getTargetGroup(text: string, pattern: RegExp, groupNo: number = 1): string {
        return text.replace(pattern, "$" + groupNo);
    }

}

