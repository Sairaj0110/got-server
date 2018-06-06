const MongoClient = require('mongodb').MongoClient;

const dbProperties = require("./dbProperties");



class Database {

    constructor() {



        this.read = async function(readParams) {

            try {

                const connection = await crudOperations();

                const documents = await readHandler(connection, readParams);

                return documents;

            } catch (error) {

                throw error;

            }



        }

        this.count = async function(readParams) {

            try {

                const connection = await crudOperations();

                const documents = await countHandler(connection, readParams);

                return documents;

            } catch (error) {

                throw error;

            }



        }

                this.readOne = async function(readParams){
            try {
                const con=await crudOperations();
                const docs=await readOneHandler(con,readParams);
                return docs;
            } catch(e) {
                console.log(e);
                throw e;                
            }
        }

        //establishing connection

        async function crudOperations() {

            try {

                const connection = await MongoClient.connect(dbProperties.dbUrl);

                return connection;

            } catch (error) {

                throw error

            }

        }

        async function readHandler(connection, readParams) {

            try {

                const db = connection.db(dbProperties.databaseName);

                const collection = db.collection(readParams.collectionName);

                const documents = await collection.find(readParams.criteria).project(readParams.projection).toArray(); //chaining

                connection.close();

                return documents;

            } catch (error) {

                throw error

            }



        }

        async function countHandler(connection, readParams) {

            try {

                const db = connection.db(dbProperties.databaseName);

                const collection = db.collection(readParams.collectionName);

                const documents = await collection.count();
                connection.close();

                return documents;

            } catch (error) {

                throw error

            }



        }



                async function readOneHandler(connection,readParams){
            try {
                const db=connection.db(dbProperties.databaseName);
                const collection=db.collection(readParams.collectionName);              
                const docs=await collection.findOne(readParams.criteria,readParams.projection);
                connection.close();
                return docs;
            } catch(e) {
                console.log(e);
                throw e;                
            }
        }



    }

}



module.exports = Database;