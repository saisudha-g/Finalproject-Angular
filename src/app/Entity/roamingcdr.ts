export class roamingcdr{
    constructor(
        public roamingStartTime: Date,
        public roamingEndTime: Date,
        public roamingLocation: string,
        public sessionDurationHours: number,
        public sessionDurationMinutes: number,
        public dataUsageMB: number,
        public voiceCalls: string,
        public smsSent: number,
        public smsReceived: number,
        public gprsDataUsageMB: number,
        public serviceType: string,
        public callRoutingInformation: string,
        public roamingPartner: string
    ) {}
}