You need to install Node.js, VSCode, Git if it is not installed. <br>
Open a local folder where you want to place the project.  <br>
Right click in the opened folder and select Git Gui.  <br>
Paste this link in Source location field: https://github.com/panksergei/test.git  <br>
Enter a name of folder where you want to clone the git project in Target directory (testProject for example). <br>
Click Clone. <br>
![image](https://github.com/user-attachments/assets/2e6fe78d-a729-4844-8bb8-8e5c9643649e)
Open VSCode -> File -> Open folder. <br>
Select testProject -> Open. <br>
View -> Terminal. <br>
In terminal: npm install cypress --save-dev <br>
After install is finished. <br>
In terminal: npx cypress open <br>
Cypress dialog will be opened. <br>
Click E2E Testing. <br>
Select needed browser and click E2E Testing...<br>
Select the test you want to run
