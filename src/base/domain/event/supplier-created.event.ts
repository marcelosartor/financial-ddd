export class SupplierCreatedEvent {
    constructor(
        public readonly supplierId: number,
        public readonly name: string,
        public readonly createdAt: Date,
    ) {}
}
