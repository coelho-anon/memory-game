function xp_power_up_effect (event) {
    var button = event.currentTarget;
    if (!button || button.value !== "xp") return;

    for (var i = 0; i < power_up_effects.length; i++) {
        if (power_up_effects[i].type === "xp") {
            var effect_duration = power_up_effects[i].duration;
            var multiple = power_up_effects[i].multiple;

            xp_power_up = true;
            xp_power_up_multiple = multiple;

            var double_xp_counter = setInterval(function () {
                effect_duration -= 1;
                if (effect_duration <= 0 || end_game_completly === true) {
                    clearInterval(double_xp_counter);
                    xp_power_up = false;
                    xp_power_up_multiple = 0;
                }
            }, 1000);

            consume_power_up(button);
            return;
        }
    }
}
