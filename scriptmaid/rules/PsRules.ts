import { Inserting } from './../models/Inserting';
import { Ordering, OrderModes } from './../models/Ordering';
import { IRule } from './../models/IRule';
import { Formatting } from './../models/Formatting';

export class PsRules implements IRule {

    public readonly insert: Inserting[] = [

    ];
    
    public readonly order: Ordering[] = [
        {
            code: "PS001_O",
            title: "",
            singleLine: /function\s(\w+)\(.*\)\s*.*{/gi,
            multiLine: /function\s*(.+)\s*\(/gmi,
            sortBy: 1,
            orderBy: 1,
            mode: OrderModes.None
        }
        // {
        //     code: "PS001_O",
        //     title: "",
        //     parent: /class\s(\w+)\s{/g,
        //     match: /function\s(\w+)\(.*\)\s*.*{/g,
        //     sortBy: 1,
        //     orderBy: 1,
        //     mode: OrderModes.ParentOnly
        // } 
    ];
          
    public readonly format: Formatting[] = [
        {
            code: "PS001_F",
            title: "Function Declaration should have correct Spacing",
            match: /function\s*(.+)\s*\(((?:(\n?.*,)+\s*(.+\n?))|(?:.*))\s*\)\s*{/gmi,
            replace: "function $1($2) {"
        },
        {
            code: "PS002_F",
            title: "Functions should be separated by a Single Line",
            match: /(?:}\n*)(function\s\w+\(.*\)\s*{)/gmi,
            replace: "}\n\n$1"
        },
        {
            code: "PS003_F",
            title: "MultiLine Function Parameters should have a newline for Closing Brackets",
            match: /(.+,\n.\s+.+)(?:(?:\n\s*)?)\)\s*(?:\n\s*)?{/gm,
            replace: "$1\n) {"
        },
        {
            code: "PS004_F",
            title: "For(Each) statement should have correct Spacing",
            match: /(for(?:each)?)\s*\((.*)\)\s*(?:.*){/gi,
            replace: "$1 ($2) {"
        },
        {
            code: "PS005_F",
            title: "(Else)If statement should have correct Spacing",
            match: /((?:else)?if)\s*\((.*)\)\s*(?:.*){/gi,
            replace: "$1 ($2) {"
        },
        {
            code: "PS006_F",
            title: "Else statement should have correct Spacing",
            match: /(else)\s*{/gi,
            replace: "$1 {"
        },
        {
            code: "PS007_F",
            title: "Try, Catch, Finally statement should have correct Spacing",
            match: /((?:try)|(?:catch)|(?:finally))\s*(?:.)*{/gi,
            replace: "$1 {",
        },
        {
            code: "PS008_F",
            title: "Switch statement should have correct Spacing",
            match: /switch\s*\((.+)\)\s*{/gi,
            replace: "switch ($1) {"
        },
        {
            code: "PS009_F",
            title: "Advanced Switch statement should have correct Spacing",
            match: /switch\s*(-wildcard|-regex)\s*(\(.+)\)\s*{/gi,
            replace: "switch $1 ($2) {"
        },
        {
            code: "PS010_F",
            title: "Switch cases should have correct Spacing",
            match: /(".+"|\d|default|(?:{.+}))\s*{/gi,
            replace: "$1 {"
        },
        {
            code: "PS011_F",
            title: "Where(Object)|? pipeline should have correct Spacing",
            match: /\|\s*(?:Where(?:-Object)?|\?)\s*{\s*(.+)\s*}\s*/gi,
            replace: "| Where-Object {$2} "
        },
        {
            code: "PS012_F",
            title: "ForEach(Object)|% pipeline should have correct Spacing",
            match: /\|\s*(?:ForEach(?:-Object)?|%)\s*{/gi,
            replace: "| ForEach-Object {"
        }
    ];
}