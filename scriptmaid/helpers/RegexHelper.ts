import { StringHelper } from './StringHelper';

export class RegexHelper {

    public static getTargetGroup(text: string, pattern: RegExp, groupNo: number = 1): string {

        let group = "$" + groupNo;
        let result = text.replace(pattern, group);

        // Check that the Capture group has been found
        if (result == group) {
            return "";
        }
        else {
            return result;
        }

    }

    public static inverseRemove(pattern: RegExp, text: string): string {
        return text.replace(pattern, "");
    }

}

