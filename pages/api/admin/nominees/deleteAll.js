import { prisma } from "../../../../services/Prisma";

export default async function handler(req, res) {
    try{
      await prisma.nominee.deleteMany({
        where: {
          user: req.query.user
        }
      })
      await prisma.$disconnect();
      res.status(200).json({msg: `All Nominees Deleted successfully`});
    }  
    catch(err){
      console.log(err)
      res.status(404).json({msg: `Delete Request Failed`});
    } 
      }
      