export class mmscdr {
    constructor(
      public messageId: string,
      public sender: string,
      public recipient: string,
      public timestamp: Date,
      public messageSize: number,
      public messageType: string,
      public deliveryStatus: string,
      public contentType: string,
      public contentLocation: string,
      public serviceCenterIdentifier: string,
      public chargingAmount: number,
      public networkInformation: string,
      public messageStatus: string,
      public subject: string
    ) {}
  }
  