
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

		// ground_blob_5
		const ground_blob_5 = this.add.image(998, 532, "blob");
		ground_blob_5.scaleX = 0.6959016810421847;
		ground_blob_5.scaleY = 0.7306043674858783;
		ground_blob_5.tintTopLeft = 2513986;
		ground_blob_5.tintTopRight = 2513986;
		ground_blob_5.tintBottomLeft = 2513986;
		ground_blob_5.tintBottomRight = 2513986;

		// ground_blob_4
		const ground_blob_4 = this.add.image(306, 534, "blob");
		ground_blob_4.scaleX = 0.6959016810421847;
		ground_blob_4.scaleY = 0.7306043674858783;
		ground_blob_4.tintTopLeft = 2513986;
		ground_blob_4.tintTopRight = 2513986;
		ground_blob_4.tintBottomLeft = 2513986;
		ground_blob_4.tintBottomRight = 2513986;

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

		// ground_blob
		const ground_blob = this.add.image(109, 577, "blob");
		ground_blob.scaleX = 0.3750734387061162;
		ground_blob.scaleY = 0.4530602567960848;
		ground_blob.tintTopLeft = 6539085;
		ground_blob.tintTopRight = 6539085;
		ground_blob.tintBottomLeft = 6539085;
		ground_blob.tintBottomRight = 6539085;

		// ground_blob_1
		const ground_blob_1 = this.add.image(462, 577, "blob");
		ground_blob_1.scaleX = 0.4141229639719269;
		ground_blob_1.scaleY = 0.43566491296612964;
		ground_blob_1.tintTopLeft = 6539085;
		ground_blob_1.tintTopRight = 6539085;
		ground_blob_1.tintBottomLeft = 6539085;
		ground_blob_1.tintBottomRight = 6539085;

		// ground_blob_2
		const ground_blob_2 = this.add.image(822, 575, "blob");
		ground_blob_2.scaleX = 0.36705051209837025;
		ground_blob_2.scaleY = 0.3984601548845053;
		ground_blob_2.tintTopLeft = 6539085;
		ground_blob_2.tintTopRight = 6539085;
		ground_blob_2.tintBottomLeft = 6539085;
		ground_blob_2.tintBottomRight = 6539085;

		// ground_blob_3
		const ground_blob_3 = this.add.image(1186, 570, "blob");
		ground_blob_3.scaleX = 0.4159777155049014;
		ground_blob_3.scaleY = 0.4032882957279351;
		ground_blob_3.tintTopLeft = 6539085;
		ground_blob_3.tintTopRight = 6539085;
		ground_blob_3.tintBottomLeft = 6539085;
		ground_blob_3.tintBottomRight = 6539085;

		this.blob = blob;
		this.blob_1 = blob_1;
		this.blob_2 = blob_2;

		this.events.emit("scene-awake");
	}

	private blob!: Phaser.GameObjects.Image;
	private blob_1!: Phaser.GameObjects.Image;
	private blob_2!: Phaser.GameObjects.Image;

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
