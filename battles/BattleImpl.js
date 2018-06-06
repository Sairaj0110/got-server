const Database = require(`./../database/database`);
const ObjectID = require(`mongodb`).ObjectID;
class BattleImpl{

   static async read() {
       const userDb = new Database();
       const readParams = {
                "collectionName": `battles`,
                "criteria": {},
                "projection": { location : 1, _id: 0 }
            };
       try {
           let result = await userDb.read(readParams);
           return result;
       }catch(e){
           throw e
       }

   }

   static async count() {
       const userDb = new Database();
       const readParams = {
                "collectionName": `battles`,
                "criteria": {},
                "projection": {}
            };
       try {
           let result = await userDb.count(readParams);
           return result;
       }catch(e){
           throw e
       }

   }

       static async search(req) {
       const userDb = new Database();

let criteria = {}
if(req.query.king!==undefined){
    criteria["$or"]=[{"attacker_king":req.query.king},{"defender_king":req.query.king}]
}else if(req.query.location!==undefined){
criteria["location"]=req.query.location
}else if(req.query.type!==undefined){
  criteria["battle_type"]=req.query.type
}

       const readParams = {
                "collectionName": "battles",
                "criteria":criteria,
                "projection": {}
            };
       try {
           let result = await userDb.read(readParams);
           return result;
       }catch(e){
           throw e
       }

   }

}
module.exports = BattleImpl;

