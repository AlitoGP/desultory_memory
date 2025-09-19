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

    fire: {
        name: "Fire",
        image: "https://cdn-icons-png.flaticon.com/512/2311/2311301.png",
        recipe: ["wood", "rock"]
    },
    water: {
        name: "Water",
        image: "https://cdn-icons-png.flaticon.com/512/3105/3105807.png",
        recipe: ["mountain", "cloud"]
    },
    cloud: {
        name: "Cloud",
        image: "https://cdn-icons-png.flaticon.com/512/5497/5497055.png",
        recipe: ["water", "air"]
    },
    air: {
        name: "Air",
        image: "https://cdn-icons-png.flaticon.com/512/2534/2534233.png",
        recipe: ["wind", "sky"]
    },
    wind: {
        name: "Wind",
        image: "https://cdn-icons-png.flaticon.com/512/1146/1146850.png",
        recipe: ["air", "mountain"]
    },
    sky: {
        name: "Sky",
        image: "https://cdn-icons-png.flaticon.com/512/5497/5497346.png",
        recipe: ["air", "cloud"]
    },
    lightning: {
        name: "Lightning",
        image: "https://cdn-icons-png.flaticon.com/512/7105/7105037.png",
        recipe: ["cloud", "fire"]
    },
    tree: {
        name: "Tree",
        image: "https://cdn-icons-png.flaticon.com/512/489/489969.png",
        recipe: ["wood", "water"]
    },
    leaf: {
        name: "Leaf",
        image: "https://cdn-icons-png.flaticon.com/512/692/692054.png",
        recipe: ["tree", "air"]
    },
    flower: {
        name: "Flower",
        image: "https://cdn-icons-png.flaticon.com/512/740/740909.png",
        recipe: ["leaf", "sun"]
    },
    sun: {
        name: "Sun",
        image: "https://cdn-icons-png.flaticon.com/512/495/495976.png",
        recipe: ["fire", "sky"]
    },
    moon: {
        name: "Moon",
        image: "https://cdn-icons-png.flaticon.com/512/768/768442.png",
        recipe: ["sky", "rock"]
    },
    dust: {
        name: "Dust",
        image: "https://cdn-icons-png.flaticon.com/512/4383/4383809.png",
        recipe: ["rock", "air"]
    },
    sand: {
        name: "Sand",
        image: "https://cdn-icons-png.flaticon.com/512/5984/5984009.png",
        recipe: ["dust", "water"]
    },
    glass: {
        name: "Glass",
        image: "https://cdn-icons-png.flaticon.com/512/896/896197.png",
        recipe: ["sand", "fire"]
    },
    mirror: {
        name: "Mirror",
        image: "https://cdn-icons-png.flaticon.com/512/3719/3719801.png",
        recipe: ["glass", "silver"]
    },
    silver: {
        name: "Silver",
        image: "https://cdn-icons-png.flaticon.com/512/16680/16680504.png",
        recipe: ["moon", "steel"]
    },
    gold: {
        name: "Gold",
        image: "https://cdn-icons-png.flaticon.com/512/3309/3309977.png",
        recipe: ["sun", "steel"]
    },
    coin: {
        name: "Coin",
        image: "https://cdn-icons-png.flaticon.com/512/1369/1369897.png",
        recipe: ["gold", "hammer"]
    },
    hammer: {
        name: "Hammer",
        image: "https://cdn-icons-png.flaticon.com/512/1815/1815742.png",
        recipe: ["steel", "axe"]
    },
    sword: {
        name: "Sword",
        image: "https://cdn-icons-png.flaticon.com/512/4155/4155897.png",
        recipe: ["steel", "fire"]
    },
    shield: {
        name: "Shield",
        image: "https://cdn-icons-png.flaticon.com/512/9414/9414678.png",
        recipe: ["tree", "steel"]
    },
    castle: {
        name: "Castle",
        image: "https://cdn-icons-png.flaticon.com/512/5305/5305106.png",
        recipe: ["rock", "king"]
    },
    king: {
        name: "King",
        image: "https://cdn-icons-png.flaticon.com/512/2701/2701700.png",
        recipe: ["crown", "man"]
    },
    crown: {
        name: "Crown",
        image: "https://cdn-icons-png.flaticon.com/512/4666/4666470.png",
        recipe: ["gold", "jewel"]
    },
    jewel: {
        name: "Jewel",
        image: "https://cdn-icons-png.freepik.com/512/785/785126.png",
        recipe: ["crystal", "fire"]
    },
    crystal: {
        name: "Crystal",
        image: "https://cdn-icons-png.flaticon.com/512/2464/2464317.png",
        recipe: ["glass", "lightning"]
    },
    man: {
        name: "Man",
        image: "https://cdn-icons-png.flaticon.com/512/4086/4086652.png",
        recipe: ["life", "dust"]
    },
    woman: {
        name: "Woman",
        image: "https://cdn-icons-png.flaticon.com/512/7127/7127269.png",
        recipe: ["life", "leaf"]
    },
    life: {
        name: "Life",
        image: "https://cdn-icons-png.flaticon.com/512/10372/10372067.png",
        recipe: ["water", "sun"]
    },
    book: {
        name: "Book",
        image: "https://cdn-icons-png.flaticon.com/512/3145/3145765.png",
        recipe: ["paper", "life"]
    },
    knowledge: {
        name: "Knowledge",
        image: "https://cdn-icons-png.flaticon.com/512/2725/2725686.png",
        recipe: ["book", "man"]
    },
    wisdom: {
        name: "Wisdom",
        image: "https://cdn-icons-png.flaticon.com/512/1092/1092254.png",
        recipe: ["knowledge", "time"]
    },
    time: {
        name: "Time",
        image: "https://cdn-icons-png.flaticon.com/512/2982/2982765.png",
        recipe: ["clock", "sun"]
    },
    clock: {
        name: "Clock",
        image: "https://cdn-icons-png.flaticon.com/512/3233/3233586.png",
        recipe: ["gear", "glass"]
    },
    gear: {
        name: "Gear",
        image: "https://cdn-icons-png.flaticon.com/512/850/850666.png",
        recipe: ["steel", "hammer"]
    },
    machine: {
        name: "Machine",
        image: "https://cdn-icons-png.flaticon.com/512/3947/3947740.png",
        recipe: ["gear", "fire"]
    },
    robot: {
        name: "Robot",
        image: "https://cdn-icons-png.flaticon.com/512/560/560938.png",
        recipe: ["machine", "life"]
    },
    computer: {
        name: "Computer",
        image: "https://cdn-icons-png.flaticon.com/512/3655/3655772.png",
        recipe: ["machine", "knowledge"]
    },
    internet: {
        name: "Internet",
        image: "https://cdn-icons-png.flaticon.com/512/4618/4618576.png",
        recipe: ["computer", "cloud"]
    },
    phone: {
        name: "Phone",
        image: "https://cdn-icons-png.flaticon.com/512/4812/4812676.png",
        recipe: ["computer", "man"]
    },
    sound: {
        name: "Sound",
        image: "https://cdn-icons-png.flaticon.com/512/3919/3919997.png",
        recipe: ["air", "life"]
    },
    painting: {
        name: "Painting",
        image: "https://cdn-icons-png.flaticon.com/512/3749/3749704.png",
        recipe: ["color", "canvas"]
    },
    canvas: {
        name: "Canvas",
        image: "https://cdn-icons-png.flaticon.com/512/5189/5189467.png",
        recipe: ["paper", "wood"]
    },
    color: {
        name: "Color",
        image: "https://cdn-icons-png.flaticon.com/512/2558/2558101.png",
        recipe: ["light", "leaf"]
    },
    light: {
        name: "Light",
        image: "https://cdn-icons-png.flaticon.com/512/344/344718.png",
        recipe: ["fire", "air"]
    },
    darkness: {
        name: "Darkness",
        image: "https://cdn-icons-png.flaticon.com/256/11637/11637644.png",
        recipe: ["moon", "time"]
    },
    dream: {
        name: "Dream",
        image: "https://cdn-icons-png.flaticon.com/512/5305/5305286.png",
        recipe: ["sleep", "imagination"]
    },
    sleep: {
        name: "Sleep",
        image: "https://cdn-icons-png.flaticon.com/512/6266/6266005.png",
        recipe: ["night", "man"]
    },
    night: {
        name: "Night",
        image: "https://cdn-icons-png.flaticon.com/512/3662/3662525.png",
        recipe: ["moon", "darkness"]
    },
    imagination: {
        name: "Imagination",
        image: "https://cdn-icons-png.flaticon.com/512/3940/3940182.png",
        recipe: ["knowledge", "dream"]
    },
    ocean: {
        name: "Ocean",
        image: "https://cdn-icons-png.flaticon.com/512/10873/10873773.png",
        recipe: ["water", "sand"]
    },
    river: {
        name: "River",
        image: "https://cdn-icons-png.flaticon.com/512/6903/6903564.png",
        recipe: ["water", "mountain"]
    },
    volcano: {
        name: "Volcano",
        image: "https://cdn-icons-png.flaticon.com/512/2227/2227010.png",
        recipe: ["mountain", "fire"]
    },
    lava: {
        name: "Lava",
        image: "https://cdn-icons-png.flaticon.com/512/3436/3436620.png",
        recipe: ["rock", "fire"]
    },
    planet: {
        name: "Planet",
        image: "https://cdn-icons-png.flaticon.com/512/1146/1146246.png",
        recipe: ["rock", "sky"]
    },
    bird: {
        name: "Bird",
        image: "https://cdn-icons-png.flaticon.com/512/6363/6363577.png",
        recipe: ["feather", "air"]
    },
    feather: {
        name: "Feather",
        image: "https://cdn-icons-png.flaticon.com/512/2570/2570448.png",
        recipe: ["leaf", "bird"]
    }
};
