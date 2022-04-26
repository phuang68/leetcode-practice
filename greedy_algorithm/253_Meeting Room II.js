function minMeetingRooms(intervals){
    //如果仅有0或1个会议就直接返回
    if(intervals.length <= 1) return intervals.length;
    //按照右边界排序
    intervals.sort((a,b) => a[1] - b[1]);
    //从第一个会议开始, 一定有一个不重叠
    let nonOverlap = 1;
    //第一个会议结束
    let end = intervals[0][1];
    for(let i = 1; i < intervals.length; i++){
        //如果下一个会议开始大于前一个会议结束, 说明又多了一个不重叠的会议
        if(intervals[i][0] >= end){
            nonOverlap++;
            end = intervals[i][1];//更新不重叠的会议时间
        }
    }
    //计算重叠会议的个数
    let overlap = intervals.length - nonOverlap;
    //重叠会议需要另外开房间, 不重叠的会议只需要一间
    return overlap + 1;
}

const intervals = [[0,30],[5,10],[15,20]];
console.log(minMeetingRooms(intervals));