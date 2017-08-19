import { IRules } from './../models/rule';
import { PsRules } from './../rules/psRules';

// Formats the provided code, by the specified rule set.
export class FormatCode {

    public static format(text: string) {
        // Define Language Rules.
        let languageRules = <IRules>(new PsRules());

        // Loop through all the Language Rules.
        for (var i = 0; i < languageRules.rules.length; i++) {
            var rule = languageRules.rules[i];
            text = text.replace(rule.match, rule.replace);
        }
        return text;
    }

}

