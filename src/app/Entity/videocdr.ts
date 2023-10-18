export class videocdr{
    constructor(
        public  callId:string,
        public startTime:Date ,
        public endTime:Date ,
        public callDuration:number,
        public hostCallerNumber:string ,
        public  hostCallStatus:string,
        public participants:string ,
        public callStatus:string,
        public callType:string,
        public videoQualityMetrics:string,
        public callDirection:string
        
        ){}
}