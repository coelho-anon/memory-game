
var old_hit_point = 0;
var old_error_point = 0;

var hit_points_array = [];
var error_points_array = [];

var two_points_array = [[],[]];

var first_hit_point = true;
var first_error_point = true;

function points (point) {

	if (point == "hit_point") {
		if (first_hit_point) {

			hit_points_array.push(parseInt(time.value)-parseInt(time.innerHTML))

			two_points_array[0].push(parseInt(time.value)-parseInt(time.innerHTML))
			two_points_array[1].push("hit")

			old_hit_point = parseInt(time.value)-parseInt(time.innerHTML);
			first_hit_point = false;
		}

		else {

			if (old_hit_point < parseInt(time.innerHTML)) {

				hit_points_array.push((parseInt(time.value)-parseInt(time.innerHTML))-old_hit_point)

				two_points_array[0].push((parseInt(time.value)-parseInt(time.innerHTML))-old_hit_point)
				two_points_array[1].push("hit")

				old_hit_point = parseInt(time.innerHTML)
			}

			else {
				hit_points_array.push(old_hit_point-parseInt(time.innerHTML))

				two_points_array[0].push(old_hit_point-parseInt(time.innerHTML))
				two_points_array[1].push("hit")

				old_hit_point = parseInt(time.innerHTML)
			}

		}
	}
	



	if (point == "error_point") {
		if (first_error_point) {

			old_error_point = parseInt(time.value)-parseInt(time.innerHTML);

			two_points_array[0].push(parseInt(time.value)-parseInt(time.innerHTML))
			two_points_array[1].push("error")

			error_points_array.push(parseInt(time.value)-parseInt(time.innerHTML))

			first_error_point = false;
		}

		else {

			if (old_error_point < parseInt(time.innerHTML)) {

				error_points_array.push((parseInt(time.value)-parseInt(time.innerHTML))-old_error_point)

				two_points_array[0].push((parseInt(time.value)-parseInt(time.innerHTML))-old_error_point)
				two_points_array[1].push("error")

				old_error_point = parseInt(time.innerHTML)
			}

			else {

				error_points_array.push(old_error_point-parseInt(time.innerHTML))

				two_points_array[0].push(old_error_point-parseInt(time.innerHTML))
				two_points_array[1].push("error")

				old_error_point = parseInt(time.innerHTML)
			}

		}
	}
	
}


