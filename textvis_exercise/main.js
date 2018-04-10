/**
 * Created by Letty on 23/01/17.
 */

window.onload = function () {
	var data = [], rawData = [];

	// scaling font size
	var fontsize = d3.scaleLinear()
		.range([10, 50]);

	d3.select('#submit')
		.on('click', function () {

			// get input from textarea and split on space
			var t = document.getElementById('txtbx').value;
			rawData = t.split(' ');

			countInput();

			// scale fontsize based on max in data
			fontsize.domain([1, d3.max(data, function (d) {
				return d.count;
			})]);

			drawText();
		});

	drawText = function () {

		// select cloud div by id and all existing and non-existing elements with class txt
		var tags = d3.select('#cloud').selectAll('.txt')
			.data(data);

		// remove all tags from previous dataset
		tags.exit().remove();

		// update and enter all span's
		tags.enter().append('span')
			.merge(tags)
			.attr('class', 'txt')
			.text(function (d) {
				return ' '+d.val+' ';
			})
			.style('font-size', function (d) {
				return fontsize(d.count) + 'px';
			})
			.on('mouseover', function(d){
				console.log(d);
			})
			.on('mouseout', function(d){
				console.log('we are leaving obj +'+d.val);
		});
	};

	countInput = function () {
		// clear variables
		var count = {};
		data = [];

		// count words
		rawData.forEach(function (d) {
			if (count[d] === undefined) {
				count[d] = 0;
			}
			count[d] = count[d] + 1;
		});

		console.log(count);

		// convert obj to array
		for (var key in count) {
			if (count.hasOwnProperty(key)) {
				data.push({
					val: key,
					count: count[key]
				});
			}
		}

		console.log(data);
	};







};