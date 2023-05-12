'use strict';
/**
 * page controller
 */

import { factories } from '@strapi/strapi'
interface CustomResponse {
    head:{
    metaData: {
      title: string;
      slug:string
      seo: any;
    },
    rawHTML: string;
  };
    // bodyContent: any;
    // headerContent: any;
    // footerContent: any;
  }
  
export default factories.createCoreController('api::page.page',({strapi})=>({
    
    async customResponse(ctx){
        const {data} =await super.find(ctx);
      //  const { data } = await strapi.query('page').find({
      //   ...ctx.query,
      //   _populate: {
      //     path: 'Seo',
      //     select: 'metaTitle metaDescription',
      //     populate: {
      //       path: 'relatedArticle',
      //       select: 'title',
      //     },
      //   },
      // });
      
        
        
        

        const head = {
            metaData:{
            title: data[0].attributes.Title,
            slug: data[0].attributes.slug,
            seo: data[0].attributes.Seo,
          },
          rawHTML: "<div>Custom raw HTML</div>",
        }
        //   const bodyContent = { content: "Custom body content" };
        //   const headerContent = { content: "Custom header content" };
        //   const footerContent = { content: "Custom footer content" };
          
          // Generate the custom response object
          const response:CustomResponse = {
            head,
            // bodyContent,
            // headerContent,
            // footerContent,
          };
          
          // Set the response status code and body
          ctx.status = 200;
          ctx.body = response;
        return {head}
    },

    async find(ctx){
        ctx.query={...ctx.query,locale :'en'}
        //const data = await strapi.query('page').findOne({});
        
        const {data} =await super.find(ctx);
        console.log("consoleLOGGED check",data[0].attributes.Seo)

        
        return {data}
    }
}));
