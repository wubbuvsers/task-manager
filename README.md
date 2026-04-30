This task manager app was made using Ionic and Angular components. Users can create tasks for themselves using a simple UI.
They can then edit, delete, or mark these task complete when they are done.
The language can also be switched between english and spanish

Installation:
1 - Clone the repository:
    git clone https://github.com/wubbuvsers/task-manager.git 
    cd task-manager

2 - Install dependencies
    npm install

3 - Run application using:
    ionic serve

this opens the app at:
    http://localhost:8100

To do unit testing:
    ng test
    
For end to end testing, start the app and run:
    npx cypress open
Then click on the test file:
    task-manager.cy.ts