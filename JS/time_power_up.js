function time_power_up (event) {
    var button = event.currentTarget;
    if (!button || button.value !== "time") return;

    for (var i = 0; i < power_up_effects.length; i++) {
        if (power_up_effects[i].type === "time") {
            time.innerHTML = parseInt(time.innerHTML, 10) +
                (power_up_effects[i].duration * power_up_effects[i].multiple);
            consume_power_up(button);
            return;
        }
    }
}
