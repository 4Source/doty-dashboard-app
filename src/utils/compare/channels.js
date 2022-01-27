/**
 * @param {channel} a Guild Channels
 * @param {channel} b Guild Channels
 * @description Sort By Possition means * sorted by ther Position
 */
export function sortByPossition(a, b) {
    return a.position - b.position;
}

/*
GUILD_CATEGORY 4
    GUILD_TEXT	0
        GUILD_PUBLIC_THREAD	11
        GUILD_PRIVATE_THREAD	12
    GUILD_VOICE	2
    GUILD_NEWS	5
        GUILD_NEWS_THREAD	10
    GUILD_STORE	6
    GUILD_STAGE_VOICE	13
DM	1
GROUP_DM	3
*/
/**
 * @param {channel} a Guild Channels
 * @param {channel} b Guild Channels
 */
/*
export function sortByType(a, b) {
    
}
*/
/**
 * @param {channel} a Guild Channels
 * @param {channel} b Guild Channels
 * @description Sort By Hierarchy means Categorys sorted by ther Position with there containing Channels by ther Position
 */
/*
export function sortByHierarchy(a, b) {
    
}
*/
/*
 * type:integer
 * position?:integer
 * parent_id?:?{snowflake}
 */