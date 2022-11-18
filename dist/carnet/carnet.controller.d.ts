import { CarnetService } from './carnet.service';
export declare class CarnetController {
    private readonly carnetService;
    constructor(carnetService: CarnetService);
    findAll(correo: string): Promise<{
        result: any;
    }>;
}
