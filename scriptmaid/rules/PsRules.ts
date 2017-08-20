import { Rule, IRules } from './../models/rule';

export class PsRules implements IRules {

    public pattern: RegExp = /function\s(\w+)\(.*\)\s*.*{/g;
          
    public rules: Rule[] = [
        {
            title: "PS001: Function Declaration should have correct Spacing",
            match: /(function\s\w+)\s*\((.*)\)\s*(?:.*){/gm,
            replace: "$1($2) {",
        },
        {
            title: "PS002: Functions should be separated by a Single Line",
            match: /(?:}\n*)(function\s\w+\(.*\)\s*{)/gm,
            replace: "}\n\n$1",
        },
        {
            title: "PS003",
            match: /function\s(\w+)\(.*\)\s*.*{/g
        },
        {
            title: "PS004: For(Each) statement should have correct Spacing",
            match: /(for(?:each)?)\s*\((.*)\)\s*(?:.*){/gm,
            replace: "$1 ($2) {",
        },
        {
            title: "PS005: (Else)If statement should have correct Spacing",
            match: /((?:else)?if)\s*\((.*)\)\s*(?:.*){/gm,
            replace: "$1 ($2) {",
        },
        {
            title: "PS006: Else statement should have correct Spacing",
            match: /(else)\s*(?:.*){/gm,
            replace: "$1 {",
        },
        {
            title: "PS007: Try, Catch, Finally statement should have correct Spacing",
            match: /((?:try)|(?:catch)|(?:finally))\s*(?:.)*{/gm,
            replace: "$1 {",
        },
        {
            title: "PS008: Switch statement should have correct Spacing",
            match: /(switch)\s*\(.*\)\s*{/gm,
            replace: "$1 {",
        },
    ];
}