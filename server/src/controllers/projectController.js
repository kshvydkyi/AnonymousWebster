import ProjectService from "../services/project.service.js";

export class ProjectController {
    constructor (service) {
        this.service = new ProjectService();
    }

    async selectAll(req, res) {
        const result = await this.service.selectAll();
        return result;
    }

    async selectById(req, res) {
        const result = await this.service.selectById(req.params.id);
        return result;
    }

    async selectByUserId(req, res) {
        const result = await this.service.selectByUserId(req.params.id);
        return result;
    }

    async create(req, res) {
        await this.service.create(req.body);
    }

    async update(req, res){
        await this.service.update(req.body, req.params.id);
    }

    async deleteById(req, res) {
        await this.service.deleteById(req.params.id);
    }
}

const projectController = new ProjectController(new ProjectService());
export default projectController;