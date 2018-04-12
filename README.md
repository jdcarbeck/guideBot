# guideBot

**guideBot** helps sixth year secondary students find the right course and third level institution. Powered by IBM's Watson, this chat bot was developed for the software engineering project for Trinity College Dublin.

# Running the project
First you need to create your own bluemix account and create your own workspace. This can be done by going the following link:
- https://watson-assistant.ng.bluemix.net/

Here you can create a account and create a new watson assitant workspace. You can upload the workspace json that is in the root dir or create your own. Then navigate to the workspace deploy tab. Here you will need to copy the username, password, and workspace and create a cred.json file in the root dir.

    {
      "username" : "yourUsername",
      "password" : "yourPassword",
      "workspace" : "workspaceId"
    }

Once the cred.json file is created in the root directory the project is run using:

    npm start

The application can then be accessed by navigating to the following address in browser:

    http://localhost:3000


A hosted version of our implementation of the watson assistant can be found ibm cloud services at the following link: https://guidebot.eu-gb.mybluemix.net

