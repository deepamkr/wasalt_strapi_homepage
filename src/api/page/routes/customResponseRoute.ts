
module.exports={
    
    routes:[
        {
            method: "GET",
            path: "/customResponseRoute",
            handler: "customResponse.customResponse",
            config:{
                auth:false,
            }
          }
          
    ]
}