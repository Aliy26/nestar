import { Module } from "@nestjs/common";
import { InjectConnection, MongooseModule } from "@nestjs/mongoose";
import { Connection } from "mongoose";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri:
          process.env.NODE_ENV === "producton"
            ? process.env.MONGO_PROD
            : process.env.MONGO_DEV,
      }),
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {
  constructor(@InjectConnection() private readonly connection: Connection) {
    if (connection.readyState === 1) {
      console.log(
        `MongoDB connected to ${process.env.NODE_ENV === "production" ? "production" : "development"} db`,
      );
    } else {
      console.log("DB is not connected!");
    }
  }
}