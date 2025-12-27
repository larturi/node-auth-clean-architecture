import mongoose from "mongoose";

interface MongoConfig {
    uri: string;
    dbName: string;
}

export class MongoDatabase {
    static async connect(options: MongoConfig) {
        const { uri, dbName } = options;

        try {
            await mongoose.connect(uri, {
                dbName
            });

            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw error;
        }
    }
}