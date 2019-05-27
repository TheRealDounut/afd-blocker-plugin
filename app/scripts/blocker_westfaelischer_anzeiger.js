console.log("#### AfD CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.id-Teaser-el-content',
        type: 'small'
    },
	
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
