import type { MessageApiInjection } from "naive-ui/es/message/src/MessageProvider";

export interface taskDataType {
    name: string,       //任务名
    overallProgress: string,    //任务总长
    completed: string,          //已完成度
    datetimeValue: Date,        //创建日期
    state: "未开始" | "进行中" | "已完成" | "",  //任务状态
}