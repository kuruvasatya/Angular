import {Mobile} from './Mobile'

export class Nokia implements Mobile {
    
    makeCall() {
        console.log("Calling from Nokia mobile");
    }    

    makeMessage() {
        console.log("Making message from nokia mobile");
    }
    
    browse() {
        console.log("browsing from Nokia mobile");
    }



    
}