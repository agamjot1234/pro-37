class Form
{
    constructor()
    {
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting= createElement("h2");
        this.title = createElement("h2");
    }
    hide()
    {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display()
    {
        
        this.title.html("car racing game");
        this.title.position(130,0);


        this.input.position(130,160);
        this.button.position(250,200);

       this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player.name =this.input.value();
            playerCount+= 1
            player.index =playerCount;
            player.update(name);
            player.updateCount(playerCount);
            this.greeting.html("hello "+name);
            this.greeting.position(130,160);
        })
    }

}