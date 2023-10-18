export class datacdr{
constructor(public sessionStartTime: Date,
    public sessionEndTime: Date,
    public sessionStatusValue: string,
    public dataUsageVolume: number,
    public serviceType: string,
    public sessionID: string,
    public latency: number,
    public jitter: number,
    public packetLoss: number,
    public contentType: string,
    public protocol: string,
    public roamingStatusValue: string,
    public sessionDirectionValue: string,
    public serviceProvider: string){}
}