class Question {

    constructor(){
        this.input = createInput("Name");
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.question = createElement('h2');
        this.title = createElement('h2');
    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.title.hide();
      }
    
      display(){
        this.title.html("My Quiz Game");
        this.title.position(350, 0);
        
        this.question.html("Question:-What starts and ends with letter 'E' , but has only one letter?");
        this.question.position(150,80);
        this.option1.html("1:Everyone");
        this.option1.position(150,100);
        this.option2.html("2:Envelope");
        this.option2.position(150,120);
        this.option3.html("3:Everywhere");
        this.option3.position(150,140);
        //this.reset.position(displayWidth-100,20);
    
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          contestant.name = this.input.value();
          contestantCount+=1;
          contestant.index = contestantCount;
          contestant.update();
          contestant.updateCount(contestantCount);
          /*this.greeting.html("Hello " + player.name)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);*/
        });
        /*this.reset.mousePressed(()=>{
          player.updateCount(0);
          game.update(0);
        })*/
    
      }
}