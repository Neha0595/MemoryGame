# MemoryGame

Task2 - Memory Game Description : 
1. Create an even number grid dynamically using a given dropdown, where user can choose a number to create the grid i.e 8x8, 16x16, 32x32 --- Done
2. Each Grid will have a hidden number and each number in grids will repeat two time always but on random location --- Done 
3. As user clicks on box the number shows up and after clicking on another grid the first will hide --- Done
4. But if both box has same number then both will remain open permanently and hence one stage achieved --- Done
5. As soon as all stages achieved the user will become winner --- Done
6. You will have to count and print the total number of hit on the completion of game --- Done
7. Also, you need to use local storage to maintain current stage of game so that user can close window and start from same stage on next time --- Pending
8. There should be a reload button to refresh the game completely --- Done

Game Screens: 
It contain three Screens: 
1. Splash Screen: Show link to start  tha game
2. Playground: Screen which show game board.
3. EndGame: Show message that use is winner and a link to play again.Clicking on this link will land you on splash screen.

Code Files are: 
Folder which contain entire Memory Game code is : task2 ---> src ---> gameCode.
It Contain following subfolders:

1. Navigator: Contan code for navigation of app.
2. Containers: Contain code for three screen of app each screen code in separate folder "SplashScreen", "Playground", "EndGame"
3. Components: Contain code for Header and Card of Grid.
4. Config: Contain Constants i.e., GridArray of size 4, 8, 12
5. Assets: Contain image file of app - logo.png and you-won.png
6. utils: Contain ArrayUtility which in turn contain code for shuffle grid cards.

MemoryGame.pdf file: It contain screenshot of game, how to run the app and a little bit description of project.

Run the App:
To run app perform following steps from app folder
1. open CMD
2. cd task2
3. npm start

