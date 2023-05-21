import ProjectService from "../services/project.service.js";
import * as jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

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
        const token = req.params.token;  
        const userData = jwt.verify(token, "jwt-key");
        let pathFile = "assets/projects/";
        if (!fs.existsSync(pathFile + userData.login)) {
            fs.mkdirSync(pathFile + userData.login);
        }

        const id = await this.service.create(req.body.project.mainInfo, userData.userId);

        pathFile += userData.login + "/" + req.body.project.mainInfo.title + id;
        if (!fs.existsSync(pathFile)) {
            fs.mkdirSync(pathFile);
        }

        pathFile += "/" + req.body.project.mainInfo.title + id + ".json"
        const jsonContent = JSON.stringify(req.body);
        fs.writeFile(pathFile, jsonContent, 'utf8', (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('JSON-файл успішно створений або перезаписаний.');
            }
        });
        await this.service.update_path(pathFile, id);
    }

    async save(req, res){
        const id = req.params.id;
        const token = req.params.token;  
        const userData = jwt.verify(token, "jwt-key");
        let pathFile = "assets/projects/";
        if (!fs.existsSync(pathFile + userData.login)) {
            fs.mkdirSync(pathFile + userData.login);
        }
        pathFile += userData.login + "/" + req.body.project.mainInfo.title + id;
        if (!fs.existsSync(pathFile)) {
            fs.mkdirSync(pathFile);
        }
        pathFile += "/" + req.body.project.mainInfo.title + id + ".json"
        const jsonContent = JSON.stringify(req.body);
        fs.writeFile(pathFile, jsonContent, 'utf8', (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('JSON-файл успішно створений або перезаписаний.');
            }
        });
        await this.service.update_path(pathFile, id);
    }

    async update(req, res){
        await this.service.update(req.body, req.params.id);
    }

    async deleteById(req, res) {
        const token = req.params.token;  
        const userData = jwt.verify(token, "jwt-key");
        const pathFile = "assets/projects/" + userData.login;

        const result = await this.service.selectById(req.params.id); 

        console.log(result);
        //await this.service.deleteById(req.params.id);
    }
}

const projectController = new ProjectController(new ProjectService());
export default projectController;