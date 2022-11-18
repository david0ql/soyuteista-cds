import { Connection } from 'typeorm';
export declare class CarnetService {
    private readonly connection;
    constructor(connection: Connection);
    findAll(correo: string): Promise<{
        result: any;
    }>;
}
