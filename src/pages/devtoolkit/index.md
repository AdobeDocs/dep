---
title: Adobe Developer Experience Program
description: Training for the Enterprise Architect, Data Architect, Data Engineer and general developer
contributors:
  - https://github.com/eknee
hideBreadcrumbNav: true
---

<Hero slots="image, heading, text" background="rgb(51, 51, 51)" hideBreadcrumbNav={false} />

![Hero image](../images/aep-foundation-v2.png)

# Developer Toolkit

A collection of tools to help developers work with the Experience Platform




<TextBlock slots="image, heading, text1, text2, text3, text4, text5, text6, buttons"  />

![Experience Cloud Logo](../images/aep-foundation.png)

### Experience Platform Developer App

A simple node.js application that provides pre-packaged methods for working with the Adobe Experience Platform

Features:
- locally sign a JWT, request an access token from Adobe IMS and generate your pSQL connection directly from the application
- native ngrok integration to receive/respond to challenge requests when working with Adobe I/O webhooks


Dependencies:
- node.js - https://nodejs.org/en/download/
- Express - https://expressjs.com/en/starter/installing.html
- @adobe/jwt-auth - https://github.com/adobe/jwt-auth
- ngrok - https://ngrok.com/download

<br />

- [View docs](../guides/developer-app/getting-started/)
- [Github Repo](https://github.com/eknee/aep-developer-app/)




<TextBlock slots="heading, text1, text2, text3, text4, text5, text6, buttons, image"  />

### Postman Collections

A set of collections that can be used with Postman to accelerate implementation and administration of the Experience Platform.

Provides the following functionality:
- GET '/' - receives and responds to challenge request when setting up a webhook in Adobe I/O
- POST '/auth' - used to locally sign a JWT and request an access token from Adobe IMS

Dependencies:
- Postman App - https://expressjs.com/en/starter/installing.html
OR
- Postman Newman (CLI) - https://github.com/postmanlabs/newman
- node.js - https://nodejs.org/en/download/

<br />

- [View docs](../guides/)
- [Github Repo](https://github.com/eknee/aep-developer-app/)

![Experience Cloud Logo](../images/aep-foundation.png)


<br />
<br />
<br />
<br />


## Reference Material

**Before you dive in be sure to review the following doc's to better understand how to work the Experience Platform API's and the tools we leverage**

<DiscoverBlock slots="link, text"/>

[Getting Started with Platform APIs](https://experienceleague.adobe.com/docs/experience-platform/landing/platform-apis/api-guide.html?lang=en)

Returns information on the user's company that is necessary for making other Adobe Analytics API calls.


<DiscoverBlock slots="link, text"/>

[API Fundamentals](https://experienceleague.adobe.com/docs/experience-platform/landing/platform-apis/api-fundamentals.html?lang=en)

Provides configuration guidance and best practices for the /segments endpoint.


<DiscoverBlock slots="link, text"/>

[Adobe Experience Platform API Reference](https://www.adobe.io/experience-platform-apis/)

Provides configuration guidance and best practices for the /reports endpoint.




  

    

  
