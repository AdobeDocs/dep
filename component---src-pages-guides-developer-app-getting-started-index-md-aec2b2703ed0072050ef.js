"use strict";(self.webpackChunkdep=self.webpackChunkdep||[]).push([[175],{91111:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return s}});var a=t(87462),o=t(63366),l=(t(15007),t(64983)),r=t(91515),i=["components"],d={},m={_frontmatter:d},p=r.Z;function s(e){var n=e.components,t=(0,o.Z)(e,i);return(0,l.mdx)(p,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"introduction-to-the-app"},"Introduction to the App"),(0,l.mdx)("p",null,"The Experience Platform Developer app was built to assist developers who wished to develop locally with the Experience Platform API's and Monitoring and Alert's functionality."),(0,l.mdx)("h2",{id:"features--benefits"},"Features & Benefits"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Authentication API for generating an Adobe access token for working with the Experience Platform API's",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added benefit of also generating the pSQL connection string for connecting to Query Service"))),(0,l.mdx)("li",{parentName:"ul"},"Standardized Postman Libraries",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Environment Template - aep-postman-enviornment.json"),(0,l.mdx)("li",{parentName:"ul"},"Authentication Collection - aep-auth-collection.json"))),(0,l.mdx)("li",{parentName:"ul"},"Webhook challenge response when utilizing ",(0,l.mdx)("a",{parentName:"li",href:""},"ngrok"))),(0,l.mdx)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Developer App - ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/eknee/aep-developer-app"},"https://github.com/eknee/aep-developer-app")),(0,l.mdx)("li",{parentName:"ul"},"node.js - ",(0,l.mdx)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),(0,l.mdx)("li",{parentName:"ul"},"Express - ",(0,l.mdx)("a",{parentName:"li",href:"https://expressjs.com/en/starter/installing.html"},"https://expressjs.com/en/starter/installing.html")),(0,l.mdx)("li",{parentName:"ul"},"@adobe/jwt-auth - ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/adobe/jwt-auth"},"https://github.com/adobe/jwt-auth")),(0,l.mdx)("li",{parentName:"ul"},"ngrok - ",(0,l.mdx)("a",{parentName:"li",href:"https://ngrok.com/download"},"https://ngrok.com/download")," (or other webhook software)")),(0,l.mdx)("h2",{id:"experience-platform-auth---postman-collection"},"Experience Platform Auth - Postman Collection"),(0,l.mdx)("p",null,"To make authentication calls to any Adobe application you must have an ",(0,l.mdx)("inlineCode",{parentName:"p"},"access token"),". An access token can only be created by passing a JWT token that contains the identity of your Adobe I/O project integration (",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.io/developer-console/docs/guides/authentication/JWT/"},"learn more here"),"). This API does three things for you as the developer when used with the Adobe I/O Developer App: "),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Creates a ",(0,l.mdx)("inlineCode",{parentName:"li"},"JWT")," locally on your machine using the Postman Environment variables "),(0,l.mdx)("li",{parentName:"ol"},"Exchanges the ",(0,l.mdx)("inlineCode",{parentName:"li"},"JWT")," with the Adobe Identity Management Service (IMS) along with your Adobe I/O Project ",(0,l.mdx)("inlineCode",{parentName:"li"},"client_id (api_key)")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"client_secret")," and responds with an ",(0,l.mdx)("inlineCode",{parentName:"li"},"access_token")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("em",{parentName:"li"},"(Optionally)")," will generate a psql statement which you can use to authenticate with the Experience Platform Query Service")),(0,l.mdx)("br",null),(0,l.mdx)("p",null,"Sample request looks like so:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"curl --location --request POST 'http://localhost:3000/auth' \\\n--header 'Cache-Control: no-cache' \\\n--header 'Content-Type: application/x-www-form-urlencoded' \\\n--data-urlencode 'client_id=XXXXX' \\\n--data-urlencode 'technical_account_id=XXXXX@techacct.adobe.com' \\\n--data-urlencode 'org_id=XXXXX@AdobeOrg' \\\n--data-urlencode 'client_secret=XXXXX' \\\n--data-urlencode 'private_key=XXXXX' \\\n--data-urlencode 'meta_scopes=ent_dataservices_sdk' \\\n--data-urlencode 'tenant_name=XXXXX' \\\n--data-urlencode 'sandbox_name=XXXXX'\n")),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},(0,l.mdx)("inlineCode",{parentName:"p"},"tenant_name")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"sandbox_name")," are optional to pass and only used for generating the psql statement in the response. They are not required for creating the JWT or requesting an access token")),(0,l.mdx)("br",null),(0,l.mdx)("p",null,"Sample response will look like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'{\n    "token_type": "bearer",\n    "access_token": "XXXXXXXX",\n    "expires_in": 86399988,\n    "psql": "psql \'sslmode=require host=XXXXX.platform-query.adobe.io port=80 dbname=prod:all user=XXXXX@AdobeOrg password=XXXXX\'"\n}\n')),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"token_type")," : always will be of type bearer"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"access_token")," : used to authenticate in any API call using Adobe APIs. Expires in 24hrs"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"expires_in")," : milliseconds until the access token expires"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"psql")," : authentication command you can copy/paste in your terminal to work with Experience Platform Query Service")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-developer-app-getting-started-index-md-aec2b2703ed0072050ef.js.map