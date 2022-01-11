/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack === null || needle === null){
        return -1;
    }
    
    if(haystack === null){
        return 0;
    }
    
    const needleLength = needle.length;
    
    for(let i=0; i<haystack.length - needleLength + 1; i++){
        if(haystack.substring(i, i+needleLength) === needle){
            return i;
        }
    }
    
    return -1;
};