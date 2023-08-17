"use strict";
const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } =
	Matter;
const width = 800;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: false,
		width,
		height,
	},
});
// console.log(Matter, engine, world, render);
Render.run(render);
Runner.run(Runner.create(), engine);

World.add(
	world,
	MouseConstraint.create(engine, {
		mouse: Mouse.create(render.canvas),
	})
);
console.log(MouseConstraint);
/////////////////////////////////////////////
// Walls
const walls = [
	Bodies.rectangle(400, 0, 800, 20, {
		isStatic: true,
	}),
	Bodies.rectangle(400, 600, 800, 20, {
		isStatic: true,
	}),
	Bodies.rectangle(0, 300, 20, 600, {
		isStatic: true,
	}),
	Bodies.rectangle(800, 300, 20, 600, {
		isStatic: true,
	}),
];
World.add(world, walls);
/////////////////////////////////////////////

// Random Shapes
const random = (value) =>
	Math.floor(Math.random() * (value * 0.8) + value / 10);
for (let i = 0; i < 30; i++) {
	if (Math.random() > 0.5)
		World.add(world, Bodies.rectangle(random(width), random(height), 50, 50));
	else World.add(world, Bodies.circle(random(width), random(height), 35));
}
