import { Request, Response } from "express";
import { CreateDisciplineService } from "../../services/Class/CreateDisciplineService";

export class CreateDisciplineController{
    async handle(request: Request, response: Response){
        const { name, description, teacher_id, students } = request.body;

        const service = new CreateDisciplineService();

        const result = await service.execute({name, description, teacher_id, students});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}