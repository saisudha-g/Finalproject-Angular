export class voipcdr{
    constructor(
        callStartTime: Date,
        callEndTime: Date,
        callDurationMinutes: number,
        sourceIP: string,
        destinationIP: string,
        callDirection: string,
        callType: string,
        codecUsed: string,
        qualityMetrics: string,
        callTerminationReason: string,
        callID: string,
        callSetupTime: number,
        callStatus: string
    ) {}

}
