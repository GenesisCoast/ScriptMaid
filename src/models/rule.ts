export interface IRules {

        rules: Rule[];

        styles: Rule[];

}

export class Rule {

        public title: string;

        public url?: string;

        public match: RegExp;

        public replace?: string;
    
}
