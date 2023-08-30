**Project Description**
In this project, there is a button and a paragraph present. Whenever we click the button, a popup should open with the same text and another button. Once the popup is open, the page scrolling is stopped. After clicking the popup button, the page scrolls as expected.

**Steps to run this Project**
1. Download this project.
2. Extract the zip file.
3. Open the file in visual studio code (any Developer tool).
4. Open termial and go to the project file path.
5. Run **npm install**.(to insall the node_modules folder)
6. run **npm start**. (Runs the app in the development mode)

**Code Explanation**
In this Project we have create 3 Folder.
1. Modal.js
: In the Model.js file, we create a 'ShowModel' button. To handle the button, we are using the useState hook.
3. InfoModal.js
: In InfoModal.js, we are passing the CloseModal function as a prop, and we are also using the useEffect hook to prevent scrolling of the page whenever the modal is opened.
5. Modal.css
: In the CSS file, we have written all the styles.

**ScreenShot**
![image](https://github.com/mona371998/ReactProject/assets/54792280/dee1922e-3e9a-4def-b46e-5f4245d67dde)
![image](https://github.com/mona371998/ReactProject/assets/54792280/379bbaa1-7b6a-4244-8e7c-76d99646446b)
