import { CreateQualificationDto } from './dto/create-qualification.dto';
import { UpdateQualificationDto } from './dto/update-qualification.dto';
export declare class QualificationService {
    create(createQualificationDto: CreateQualificationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateQualificationDto: UpdateQualificationDto): string;
    remove(id: number): string;
}
