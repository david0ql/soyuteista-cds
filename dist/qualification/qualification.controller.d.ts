import { QualificationService } from './qualification.service';
import { CreateQualificationDto } from './dto/create-qualification.dto';
import { UpdateQualificationDto } from './dto/update-qualification.dto';
export declare class QualificationController {
    private readonly qualificationService;
    constructor(qualificationService: QualificationService);
    create(createQualificationDto: CreateQualificationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateQualificationDto: UpdateQualificationDto): string;
    remove(id: string): string;
}
