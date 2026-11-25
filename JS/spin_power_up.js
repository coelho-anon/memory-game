function spin_power_up (event) {
    var button = event.currentTarget;
    if (!button || button.value !== "spin") return;

    for (var i = 0; i < power_up_effects.length; i++) {
        if (power_up_effects[i].type === "spin") {
            var effect_duration = power_up_effects[i].duration;
            var cards_covered = [];

            var spin_timer_count = setInterval(function () {
                effect_duration -= 1;

                for (var j = 0; j < cards_array.length; j++) {
                    var card = cards_array[j];
                    if (card && getYRotation(card) === 0 && cards_covered.indexOf(card) === -1) {
                        cards_covered.push(card);
                        card.removeEventListener("click", match_cards);
                        card.style.transform = "rotateY(180deg)";
                        card.style.transition = ".2s";
                        card.style.perspective = "2000px";
                    }
                }

                if (effect_duration <= 0 || end_game_completly === true) {
                    clearInterval(spin_timer_count);
                    for (var k = 0; k < cards_covered.length; k++) {
                        cards_covered[k].style.transform = "rotateY(0deg)";
                        cards_covered[k].style.transition = ".2s";
                        cards_covered[k].style.perspective = "2000px";
                        cards_covered[k].addEventListener("click", match_cards);
                    }
                }
            }, 1000);

            consume_power_up(button);
            return;
        }
    }
}
