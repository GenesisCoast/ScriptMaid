export class Ordering {

        public code: string;
    
        public title: string;

        public url?: string;

        public parent?: RegExp;

        public singleLine: RegExp;

        public multiLine: RegExp;

        public sortBy: number; // CaptureGroup to sortBy, $1 $2 $3

        public orderBy: number // Where section should be placed, where 0 is top

        public mode?: OrderModes = OrderModes.RespectParent;
    
        public static sortByOrderDesc(blocks: Ordering[]): Ordering[] {
                return blocks.sort(function compare(a, b) {
                        // Use toUpperCase() to ignore character casing
                        const orderA = a.orderBy;
                        const orderB = b.orderBy;
                        
                        if (orderA > orderB) {
                        return -1;
                        }
                        else if (orderA < orderB) {
                        return 1;
                        }
                        return 0;
                });
        }
    
}

export enum OrderModes {

        ParentOnly, // Only order items inside Parent
        ExcludeParent, // Order everything apart from items inside parent
        RespectParent, // Order items inside and outside of Parent
        None // Order the entire Document

}
