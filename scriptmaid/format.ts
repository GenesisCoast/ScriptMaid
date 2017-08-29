import { IRule } from './models/IRule';

// Formats the provided code, by the specified rule set.
export class FormatCode {

    constructor(
        private readonly _vsText: string,
        private readonly _langRules: IRule
    ) { }

    public format(): string {

        // Result text.
        let result: string = this._vsText;

        // Iterate through each rule and apply
        this._langRules.format.forEach(rule => {
            result = result.replace(rule.match, rule.replace);
        });
        return result;

    }

}

