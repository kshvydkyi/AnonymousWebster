import { Router } from "express";
import { tryCatch } from "../../utils/tryCacth.utils.js";
import projectController from "../../controllers/projectController.js";
import { roleValidationChainMethod } from "../../validations/role.validation.js";
import { validateRequestSchema } from "../../middleware/validateRequestSchema.middleware.js";
import ProjectService from "../../services/role.service.js";
import { isTitleExist, isNotExistById } from "../../scripts/roleChecking.script.js";
import { isAutorised } from "../../middleware/isAuthorized.middleware.js";

const projectRouter = Router();

//Select All
projectRouter.get(
    '/',
    tryCatch(projectController.selectAll.bind(projectController))
);

//Select By Id
projectRouter.get(
    '/:id',
    isNotExistById(ProjectService),
    tryCatch(projectController.selectById.bind(projectController))
);

//Select By User Id
projectRouter.get(
    '/user/:id',
    tryCatch(projectController.selectByUserId.bind(projectController))
);

projectRouter.post(
    '/:token',
    isAutorised,
    roleValidationChainMethod,
    validateRequestSchema,
    isTitleExist(ProjectService),
    tryCatch(projectController.create.bind(projectController))
);

projectRouter.patch(
    '/:id/:token',
    isAutorised, 
    validateRequestSchema,
    tryCatch(projectController.update.bind(projectController))
);

//Delete by id
projectRouter.delete(
    '/:id/:token',
    isAutorised,
    isNotExistById(ProjectService),
    tryCatch(projectController.deleteById.bind(projectController))
);

export default projectRouter;