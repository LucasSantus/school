import { Request, Response } from "express";
import { CreateTeacherService } from "../../services/Teachers/CreateTeacherService";

export class CreateTeacherController{
    async handle(request: Request, response: Response){
        const { name } = request.body;

        const service = new CreateTeacherService();

        const result = await service.execute({name});
        
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}