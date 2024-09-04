	
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PhaserTutorialMain extends Phaser.Scene {

	constructor() {
		super("PhaserTutorialMain");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// blob
		const blob = this.add.image(574, 89, "blob");
		blob.scaleX = 0.5;
		blob.scaleY = 0.5;

		// blob_1
		const blob_1 = this.add.image(257, 132, "blob");
		blob_1.scaleX = 0.5;
		blob_1.scaleY = 0.5;

		// blob_2
		const blob_2 = this.add.image(1076, 175, "blob");
		blob_2.scaleX = 0.5;
		blob_2.scaleY = 0.5;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(638, 683, 128, 128);
		rectangle_1.scaleX = 12.523231148107016;
		rectangle_1.scaleY = 1.11335280137961;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3898168;

		this.events.emit("scene-awake");
		console.log('editorCreate zzz'+blob_1 )
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		
		const clouds = [this.blob, this.blob_1, this.blob_2]
		console.log("clouds = " + clouds)
		clouds.forEach(cloud => {
			cloud.setInteractive()
			cloud.on('pointerdown', () => {
			  const t = this.tweens.add({
					targets: [cloud],
					x: {from: cloud.x, to:cloud.x + 2000},
					duration: 200,
					easing: 'bounce',
					yoyo: false,
					paused: true
				})
			  t.play()
			})
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
