---
title: Adobe Experience Platform - Authenticate
description: Learn how to use Postman to authenticate to Adobe Identity Management Service
contributors: 
  - https://github.com/eknee
hideBreadcrumbNav: true
---

## A Brief Introduction to JWT (Service Account) Authentication

To establish a secure service-to-service Adobe API session, you must create a JSON Web Token (JWT) that encapsulates the identity of your developer project integration, and then exchange it for an access token. Every request to an Adobe service must include the access token in the Authorization header, along with the API Key (Client ID) that was generated when you created the Service Account Integration in the Adobe Developer Console.

### Creating a JSON Web Token

A JSON Web Token for Service Account authentication requires a particular set of claims and must be signed using a valid digital signing certificate. Your JWT must contain the following claims (all of which you learn more about [here](https://developer.adobe.com/developer-console/docs/guides/authentication/JWT/))

<br/>
<br/>

| Claim | Description |
|---|---|
| exp | Required. The expiration parameter is a required parameter measuring the absolute time since 01/01/1970 GMT. You must ensure that the expiration time is later than the time of issue. After this time, the JWT is no longer valid. Recommendation: Have a very short lived token (a few minutes) - such that it expires soon after it has been exchanged for an IMS access token. Every time a new access token is required, one such JWT is signed and exchanged. This is secure approach. Longer lived tokens that are re-used to obtain access tokens as needed are not recommended. |
| iss | Required. The issuer, your Organization ID from the Adobe Developer Console integration, in the format org_ident@AdobeOrg. Identifies your organization that has been configured for access to the Adobe I/O API. |
| sub | Required. The subject, your Technical Account ID from the Adobe Developer Console integration, in the format: id@techacct.adobe.com. |
| aud | Required. The audience for the token, your API Key from the Adobe Developer Console integration, in the format: https://ims-na1.adobelogin.com/c/api_key. |
| Metascopes | Required. The API-access claim configured for your organization: JWT Metascopes, in the format: "https://ims-na1.adobelogin.com/s/meta_scope": true |

### Bootstrapping the authentication process

To be able to authenticate, Adobe has developed a collection that locally signs the JWT on your machine and then passes that JWT in the call to Adobe's Identity Management Service (IMS) to authenticate. To locally sign the JWT a crypto JavaScript library is loaded as part of a pre-request script in the Postman request. This script uses the “RSA-Sign JavaScript Library” and creates a Global Postman environment variable (which persists even if you close Postman, nice!).

The response from the request to Adobe's IMS will always respond with the following upon a successful call

#### Success

```
{
    "token_type": "bearer",
    "access_token": "<value>",
    "expires_in": 86399979
}
```

<InlineAlert variant="help" slots="text" />

A common error that is often encountered when making the call is due to a poorly copied `PRIVATE_KEY`. Be sure that when you copy/paste your private key into the Postman environment variable values that you include the full text of the private key including the header (-----BEGIN RSA PRIVATE KEY------) and footer.

## Get the Identity Management Service Collection

1. Navigate to the Experience Platform Postman Samples Github repository to get the Identity Management Service Postman collection located [here](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/ims/Identity%20Management%20Service.postman_collection.json). Copy the raw contents as show below

    ![Copy Raw Text](../images/ims-copy-raw.png)

<br/>

## Import the Collection

1. Open the Postman application and in the sidebar click on the `Import` button

    ![Postman Import Button](../images/import-btn-env.png)

<br/>

2. A new window should open. Be sure to select the 'Raw text' option and then paste in the raw text you copied in the previous step. When done click `Continue` to load the collection

  ![Paste Raw Text](../images/import-copy-ims.png)

<br/>

3. On the next screen you will be presented with the details about the collection. Go ahead and click `Import`

    ![Import IMS Collection](../images/import-create-ims.png) 

<br/>

4. You should now see the collection in your Postman application. You can view it by simply selecting `Collections` in the sidebar and then clicking into the single request contained within the collection.

    ![Preview IMS Collection](../images/postman-ims-preview.png) 

## Generate your Access Token

Its time to test out your Postman setup to see if you can access the Experience Platform APIs via your developer project. Before you can go firing of your first call though we need to select the environment that Postman will use.

1. In the upper right of the work area select your environment from the environment drop-down

    ![Set Postman Environment](../images/postman-set-ims-env.gif) 

2. Navigate back to sidebar and select 'Collections' and then select the only call in the 'Identity Management Service' folder. Open the call and double check that variables in the 'Body' are populated.  If all is good then its time to make magic happen. Click `Send`.

    ![Set Postman Environment](../images/postman-ims-auth-censored.png) 

<br/>

The response from the request to Adobe's IMS will always respond with the following upon a successful call. If you see this awesome sauce!

#### Success

```
{
    "token_type": "bearer",
    "access_token": "<value>",
    "expires_in": 86399979
}
```
