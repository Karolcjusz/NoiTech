const fossilsLiquidifier = extendContent(GenericCrafter, "fossils-liquidifier", {
	draw(tile){
		Draw.rect(this.region, tile.drawx(), tile.drawy());
		Draw.color(tile.entity.liquids.current().color);
   		Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
   		Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
   		Draw.color();
		Draw.rect(Core.atlas.find(this.name + "-bottom-rotator"), tile.drawx(), tile.drawy(), tile.entity.totalProgress * 2.5);
		Draw.rect(Core.atlas.find(this.name + "-top-rotator"), tile.drawx(), tile.drawy(), tile.entity.totalProgress * 1.5);
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
			Core.atlas.find(this.name + "-bottom-rotator"),
			Core.atlas.find(this.name + "-top-rotator")
		];
	},	
});
fossilsLiquidifier = Layer.turret;