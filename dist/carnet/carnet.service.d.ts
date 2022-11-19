import { DataSource } from 'typeorm';
export declare class CarnetService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    findAll(correo: string): Promise<{
        result: any;
    }>;
}
