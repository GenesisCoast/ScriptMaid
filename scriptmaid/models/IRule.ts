import { Inserting } from './Inserting';
import { Ordering } from './Ordering';
import { Formatting } from './Formatting';

export interface IRule {

    readonly insert: Inserting[];
    
    readonly order: Ordering[];

    readonly format: Formatting[];

    // readonly pattern: RegExp;
        
}