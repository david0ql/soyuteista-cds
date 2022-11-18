import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    create(createScheduleDto: CreateScheduleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateScheduleDto: UpdateScheduleDto): string;
    remove(id: string): string;
}
