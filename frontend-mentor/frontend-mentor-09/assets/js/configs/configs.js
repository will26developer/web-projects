

const configs = {
    options: ["paper","scissors","rock"],
    rules:{
        paper:"rock",
        scissors:"paper",
        rock:"scissors"
    },
    messages: {
        onGame:{
            player:"player's win",
            house:"house's win",
            tie:"it's a tie",
        },
        offGame: {
            player: "player win the game",
            house: "house win the game"
        }
    },
    renderOptions: {
        paper:"wrap__blue",
        scissors:"wrap__yellow",
        rock:"wrap__red"
    }
}

export default configs;