import { prisma } from "../../../services/Prisma"

export default async function handler(req, res) {
   let user = await prisma.admin.findFirst({
       where:{
           id: req.query.id
       }
})
    if(user === undefined){
    await prisma.$disconnect()
        res.status(404)
    }else{
        let state = await prisma.election.findUnique({
            where: {
                user: user.email
            }
        })
        if(state){
            await prisma.$disconnect()
        res.status(200).json({user: user.email, state})
        }
        else{
        await prisma.$disconnect()
        res.status(200).json({user: user.email, state})
        }
        
    }    
}
  
  