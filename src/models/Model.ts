import Database from "../services/database";

export default abstract class Model {
    private static database?: Database;

    public constructor() {
        Model.database = Model.getDbConnection();
    }

    protected static db() {
        if (!Model.database) {
            Model.database = Model.getDbConnection();
        }

        return Model.database;
    }

    private static getDbConnection(): Database {
        return new Database();
    }

    public abstract getById<T extends Model>(id: number): T | null;

    public abstract save<T extends Model>(model: Model): boolean ;
}