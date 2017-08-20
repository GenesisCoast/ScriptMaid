export interface IRules {

        rules: Rule[];

        pattern: RegExp;
        
}

export class Rule {

        public title: string;

        public url?: string;

        public match: RegExp;

        public replace?: string;
    
}
