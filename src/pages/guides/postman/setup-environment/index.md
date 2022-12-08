---
title: Adobe Experience Platform - Setup Environment
description: Learn how to setup a Postman environment to work with the Experience Platform
contributors: 
  - https://github.com/eknee
hideBreadcrumbNav: true
---

## Get your environment file

There are two ways you can get a Postman environment file:

1. Download an `Environment Template` from our Github repository [here](https://github.com/adobe/experience-platform-postman-samples/blob/master/Postman%20Environment%20Template.postman_environment.json)
2. Utilize the environment file you downloaded directly from your Developer Project [covered in this guide](../../dev-console/getting-started/index.md)

<InlineAlert variant="info" slots="text" />

If you do not have an environment file proceed with option #1 listed above.

## Copy the Environment Template

Navigate to the Experience Platform Postman Samples Github repository and copy the [Postman Environment Template](https://github.com/adobe/experience-platform-postman-samples/blob/master/Postman%20Environment%20Template.postman_environment.json)

![Copy Raw Text](../images/copy-pm-environment.png)

<InlineAlert variant="info" slots="text" />

You can skip this step you already have your environment file from following the Developer Console Guide

## Import the Postman Environment

1. Open the Postman application and in the sidebar click on the `Import` button

  ![Postman Import Button](../images/import-btn-env.png)

<br/>

2. A new window should open. Be sure to select the 'Raw text' option and then paste in the raw text you copied in the previous step. When done click `Continue` to load the Postman Environment.

  ![Paste Raw Text](../images/import-copy-env.png)

<InlineAlert variant="info" slots="text" />

If you have your Developer Project environment file handy chose the `File` option and import the `service.postman_environment.json` file

<br/>

3. On the next screen you will be presented with the details about the Environment. You'll change the name in the next step so go ahead and click `Import`

![Import Environment](../images/import-create-env.png)

## Rename your Environment

1. In your Postman app click on `Environments` in the sidebar and then click on the environment name you just imported. You should now see the screen below.

  ![Environment Details Screen](../images/postman-env-select.png)

<br/>

2. In the work area of the Postman app click on the `pencil` icon that will display as you move your mouse over the environment name. Give your environment a friendly name as you will reference this environment later when you start working with the Experience Platform APIs

  ![Environment Details Screen](../images/postman-rename-env.gif)

## Populate the Environment Variables

In order to utilize the environment you have imported we need to populate a few of the variable values you see in the work area. These values will come from the Adobe Developer project under the `Service Account (JWT)` which you may have created in the previous [Developer Console guide](../../dev-console/getting-started/index.md) or have been supplied to you by your administrator. Below is quick sample mapping set of how to map the values from the Developer Project to the environment in Postman.

<br/>
<br/>

| Developer Project Credentials |  | Postman Environment Values * |
|---|---|---|
| CLIENT SECRET | --> | CLIENT_SECRET |
| CLIENT ID | --> | API_KEY |
| TECHNICAL ACCOUNT ID | --> | TECHNICAL_ACCOUNT_ID |
| ORGANIZATION ID | --> | IMS_ORG |

_* Ensure you populate the values of `Initial` and `Current` value in your environment's work area_

<br/>
<br/>

![Developer Console Creds](../images/dev-console-creds.png)

<InlineAlert variant="info" slots="text" />

If you do not have these available please contact your administrator or ones that have been supplied to you be your administrator.

### Mapping your Private Key

You also need to ensure you load your private key into the environment. This would have been provided as well if you came from the [Developer Console guide](../../dev-console/getting-started/index.md) or may have been supplied to you by your administrator. Copy/paste the private key value into both the `Initial` and `Current` values in the environment work area.

### Your Final Environment

When you are done your environment should look like below (both `ACCESS_TOKEN` and `JWT_TOKEN` values should be null). If everything looks good, click the `Save` icon in the upper right of the work area. Time to test things!

![Postman environment values](../images/postman-save-env.gif)

<InlineAlert variant="help" slots="text" />

As a best practice its always recommended that you change the `TYPE` value in Postman from `default` to `secret` for sensitive fields such as the `CLIENT_SECRET` and `PRIVATE_KEY`

<InlineAlert variant="help" slots="text" />

A common error that is often encountered when making the call is due to a poorly copied `PRIVATE_KEY`. Be sure that when you copy/paste your private key into the Postman environment variable values that you include the full text of the private key including the header (-----BEGIN RSA PRIVATE KEY------) and footer.
