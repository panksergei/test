You need to install Node.js, VSCode, Git if it is not installed
Open local folder where you want to place project
Right click in opened folder and select Git Gui
Paste link in Source location field: https://github.com/panksergei/test.git 
Enter name of folder where you want to clone git project in Target directory (testProject for example)
Click Clone
![image](https://github.com/user-attachments/assets/2e6fe78d-a729-4844-8bb8-8e5c9643649e)
Open VSCode -> File -> Open folder
Select testProject -> Open
View -> Terminal
In terminal: npm install cypress --save-dev
After install is finished.
In terminal: npx cypress open
Cypress dialog will be opened.
Click E2E Testing.
Select needed browser and click E2E Testing...
