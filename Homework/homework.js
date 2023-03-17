class Habit {
  constructor(name, goal) {//taking two paramaters name and goal and makes them properties
    this.name = name;
    this.goal = goal;
  }

  describe() {//no argument and returns string that describes a habit
    return `${this.name} is ${this.goal}`;//taking the property values of constructor from habit class
  }
}

class Dream {
  constructor(name) {//takes "name" paramater and sets it as a property of the instance class
    this.name = name;
    this.goals = [];//the goal from line 19 goes here if it matches from what is put on line 5 too, in this array
  }

  addGoal(goal) {//This goal needs to match same as line 5 what is entered
    if (goal instanceof Habit) {//if this goal is an insance of habit class goes to the goals array above 
      this.goals.push(goal);//where the goal is sent to the array line 16
    } else {//If not goal i wrote will throw a error message
      throw new Error(`You can only add an instance of Habit. argument is not a habit: ${goal}`);
    }
  }

  describe() {//This is describing the Class Dream
    return `${this.name} has ${this.goals.length} goals.`;//This is describing the name and length of goals in the array
  }
}

class Menu {//This Menu class has several Methods
  constructor() {//Initializes the dream
    this.dreams = [];//empty array
    this.selectedDream = null; //null means no value
  }

  start() { // Start method of Menu Class, called when program is run
    let selection = this.showMainMenuOptions();//You dont see main menu options yet in the code
    while (selection != 0) {//Selection is show main menu options
      switch(selection) {//like a if statement but used a switch statement
        case '1':
          this.createDream();//else/if
          break;
        case '2':
          this.viewDream();//else if
          break;
        case '3':
          this.deleteDream();//else if
          break;
        case '4':
          this.displayDreams();//else if
          break;
        default://else
          selection = 0;//if 0 selection takes you to exit
      }
      selection = this.showMainMenuOptions();//if 0 selection takes you to exit
    }
    alert('Goodbye!');//if selection is equal to zero, alert them Goodbye!
  }

  showMainMenuOptions() {
    return prompt(`
0) exit
1) create a new dream
2) view a dream
3) delete a dream
4) display all dreams
`);
  }

  showDreamMenuOptions(dreamInfo) {
    return prompt(`
0) back
1) add a new habit
2) delete a habit
-----------------
${dreamInfo}
`);
  }

  displayDreams() {
    let dreamString = '';
    for (let i = 0; i < this.dreams.length; i++) {
      dreamString += i + ') ' + this.dreams[i].name + '\n';
    }
    alert(dreamString);
  }

  createDream() {
    let name = prompt('Enter name for new dream: ');
    this.dreams.push(new Dream(name));
  }

  viewDream() {
    let index = prompt("Enter the index of the dream that you want to view:");
    if (index > -1 && index < this.dreams.length) {
      this.selectedDream = this.dreams[index];
      let description = 'Dream Name: ' + this.selectedDream.name + '\n';
      description += ' ' + this.selectedDream.describe() + '\n ';
      for (let i = 0; i < this.selectedDream.goals.length; i++) {
      // description += i + ') ' + this.selectedTeam.players[i].name + ' - '
      // + this.selectedDream.players[i].position + '\n';
      description += i + ') ' + this.selectedDream.goals[i].describe() + '\n';
      }
      let selection1 = this.showDreamMenuOptions(description);
      switch (selection1) {
      case '1' :
      this.createGoal();
      break;
      case '2' :
      this.deleteGoal();
      }
      } // validate user input
      }
      
      deleteDream() {
      let index = prompt('Enter the index of the dream that you wish to delete: ');
      if (index > -1 && index < this.dreams.length) {
      this.dreams.splice(index,1);
      }
      }
      
      
      createGoal() {
      let name = prompt('Enter habit for dream: ');
      let goal = prompt('Enter goal for dream: ');
      this.selectedDream.goals.push(new Habit(name, goal));
      
      }
      
      deleteGoal() {
      let index = prompt('Enter the index of the goal that you wish to delete: ');
      if (index > -1 && index < this.selectedDream.goals.length) { this.selectedDream.goals.splice(index,1);
      }
      }
      }
      let menu = new Menu();
      menu.start();
      
      
  