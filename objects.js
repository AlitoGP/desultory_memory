// objects.js - Game objects data
const objects = {
    paper: {
        name: "Paper",
        image: "https://cdn-icons-png.flaticon.com/512/4334/4334402.png",
        recipe: ["wood", "axe"]
    },
    rock: {
        name: "Rock",
        image: "https://cdn-icons-png.flaticon.com/512/835/835024.png",
        recipe: ["axe", "mountain"]
    },
    mountain: {
        name: "Mountain",
        image: "https://cdn-icons-png.flaticon.com/512/619/619131.png",
        recipe: ["rock", "steel"]
    },
    wood: {
        name: "Wood",
        image: "https://cdn-icons-png.flaticon.com/512/9920/9920887.png",
        recipe: ["paper", "rock"]
    },
    axe: {
        name: "Axe",
        image: "https://cdn-icons-png.flaticon.com/512/809/809037.png",
        recipe: ["steel", "wood"]
    },
    steel: {
        name: "Steel",
        image: "https://cdn-icons-png.flaticon.com/512/8654/8654449.png",
        recipe: ["rock", "mountain"]
    },
};
