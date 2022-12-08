---
title: Adobe Experience Platform Developer App - Install & Setup
description: Learn how to install & setup the Adobe Experience Platform Developer app 
contributors: 
  - https://github.com/eknee
hideBreadcrumbNav: true
---

## Install Dependencies

In order to run the app you must have node.js and express installed on your machine. If you already have those installed skip ahead to the next step [Downloading the App](#downloading-the-app).

1. Download and install [node.js](https://nodejs.org/en/download/)

   ```
   sudo apt-get install nodejs
   ```

<CodeBlock slots="heading, code" repeat="3" languages=""/>

#### WSL/Linux

```
sudo apt-get install npm
```

#### Mac

```
sudo apt-get install npm
```

#### Windows

```
sudo apt-get install npm
```

## Downloading the App

_This instruction list applies for users installing via linux or WSL_

1. Download the [aep-developer-app](https://github.com/eknee/aep-developer-app.git) repo to your local computer  

   ```
   git clone https://github.com/eknee/aep-developer-app.git <your-directory>
   ```

1. In the directory you cloned the git repo in run the following command to install the dependencies

      ```
      npm install
      ```

1. The app should now be installed on your local machine. You can run it by simply executing the following command:

   ```
   node /<directory>/app.js
   ```

   You should then see the following response in your console:
   `Started server at http://localhost:3000`
