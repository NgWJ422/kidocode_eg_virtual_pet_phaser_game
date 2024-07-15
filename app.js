let game = new Phaser.Game (500, 640, Phaser.CANVAS)

let GameState = {
    init: function() {
         this.load.crossOrigin = 'Anonymous';
         this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
         this.scale.pageAlignHorizontally = true
         this.scale.pageAlignVertically = true
       },

    preload: function () {
        this.load.image('background', 'https://s3.us-east-2.amazonaws.com/www.kassetstore.com/assets/phaser/virtual-pet/images/background.png')
        this.load.image('apple', 'https://s3.us-east-2.amazonaws.com/www.kassetstore.com/assets/phaser/virtual-pet/images/apple.png')
        this.load.spritesheet ('pet', 'https://s3.us-east-2.amazonaws.com/www.kassetstore.com/assets/phaser/virtual-pet/images/pet.png', 97, 83)
        },
        
    create: function () {
            this.background = this.game.add.sprite(0, 0,'background')
            this.background.inputEnabled = true
     
            this.pet = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'pet')
            this.pet.anchor.setTo(0.5, 0.5)
            this.pet.scale.setTo(0.8, 0.8)
            this.pet.inputEnabled = true
            this.pet.input.enableDrag()
        },
 }

 game.state.add('GameState', GameState)
 game.state.start('GameState')