function gold_power_up_effect (event) {
    var button = event.currentTarget;
    if (!button || button.value !== "gold") return;

    for (var i = 0; i < power_up_effects.length; i++) {
        if (power_up_effects[i].type === "gold") {
            var start_count_time = parseInt(time.innerHTML, 10);
            var duration = power_up_effects[i].duration;
            var multiple = power_up_effects[i].multiple;

            gold_power_up = true;
            gold_power_up_multiple = multiple;

            var timer_aux = setInterval(function () {
                if (start_count_time - parseInt(time.innerHTML, 10) >= duration || end_game_completly === true) {
                    gold_power_up = false;
                    gold_power_up_multiple = 0;
                    clearInterval(timer_aux);
                }
            }, 1000);

            consume_power_up(button);
            return;
        }
    }
}
