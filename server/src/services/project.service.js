import db from '../config/db.connection.js';
import toSQLDate from 'js-date-to-sql-datetime';

export default class ProjectService {
    async selectAll() {
        let sql = "SELECT * FROM `projects`";
        const [row] = await db.execute(sql);
        return row;
    }

    async selectById(id) {
        let sql = `SELECT * FROM projects WHERE id = ${id}`;
        const [row] = await db.execute(sql);
        return row[0];
    }

    async selectByUserId(id) {
        let sql = `SELECT projects.title, projects.description, projects.json_file, projects.date_upd FROM projects, project_user WHERE project_user.user_id = ${id}`;
        const [row] = await db.execute(sql);
        return row;
    }

    async create(body) {
        let sql = `INSERT INTO projects (title, description, json_file, date_upd) VALUES ('${body.title}', '${body.description}', '${body.json_file}', '${toSQLDate(Date.now())}')`;
        const [row] = await db.execute(sql);
        sql  = `INSERT INTO project_user (project_id, user_id, role_id) VALUES (${row.insertId}, ${body.user_id}, 3)`;
        const [row1] = await db.execute(sql);
        return row;
    }

    async update(body, id) {
        if(Object.entries(body).length !== 0){
            await Object.entries(body).filter(([key, value]) => value).map(([key, value]) => db.execute(`UPDATE projects SET ${key} = '${value}' WHERE id = ${id}`))
        }
	}

    async deleteById(id) {
        var sql = `DELETE FROM projects WHERE id = ${id}`;
        const [row] = await db.execute(sql);
        return row;
	}
}