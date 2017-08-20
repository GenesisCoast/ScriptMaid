import { IRules } from './models/rule';

// Formats the provided code, by the specified rule set.
export class FormatCode {

    constructor(
        private vsText: string,
        private langRules: IRules
    ) { }

    public format(): string {
        let result: string = this.vsText;

        // Loop through all the Language Rules.
        for (var i = 0; i < this.langRules.rules.length; i++) {
            var rule = this.langRules.rules[i];
            result = result.replace(rule.match, rule.replace);
        }
        return result;
    }

}

