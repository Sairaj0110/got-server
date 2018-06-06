const async = require(`async`);
const database = require(`../database/database`);
const BattleImpl = require(`./BattleImpl`);
const appConstants =  require(`../appConstants.json`)
class BattleBusinessLogic
{

     static async read(){
        try{
          let result = await BattleImpl.read()
          return result    
        }catch(e){
            throw e
        }

       
     }

    static async count(){
        try{
          let result = await BattleImpl.count()
          return result    
        }catch(e){
            throw e
        }

       
     }

     static async search(req){
        try{
          let result = await BattleImpl.search(req);
          return result    
        }catch(e){
            throw e
        }

       
     }
}

module.exports = BattleBusinessLogic