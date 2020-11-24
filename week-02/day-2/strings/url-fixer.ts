'use strict';

import { replace } from "./simple-replace";

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url = url.replace(/bots/g, 'odds')
url = url.replace(/https/g, 'https:')

console.log(url);
