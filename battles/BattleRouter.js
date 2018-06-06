const router = require(`express`).Router();
const Database = require(`../database/database`);
const BattleBusinessLogic = require(`./BattleBusinessLogic`);

class battleRouteHandler {
    static handle() {//http method for restfull services

          
       router.get(`/list`, async(req, res)=> {
           try{
            let result = await BattleBusinessLogic.read()
            res.status(200).send(result)
           }catch(e){
               console.error(e)
               res.status(500).send(e)
           }
       })

       router.get(`/count`, async(req, res)=> {
           try{
            let result = await BattleBusinessLogic.count()
            res.status(200).send({count:result})
           }catch(e){
               console.error(e)
               res.status(500).send(e)
           }
       })


       router.get("/search", async(req, res)=> {
           try{
            let result = await BattleBusinessLogic.search(req)
            res.status(200).send(result)
           }catch(e){
               console.error(e)
               res.status(500).send(e)
           }
       })     

        return router;
   }
       
}
module.exports = battleRouteHandler