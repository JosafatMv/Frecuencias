import { table } from '../components/table.js';

const form = document.getElementById('form');
const tableHtml = document.getElementById('table');

const formatData = (data) => {
	const arr = data.split(',');
	const result = arr.filter((number) => number.trim().length > 0);

	return result;
};

const orderData = (data) => {
	const arrOrdered = data.sort((a, b) => a - b);

	return arrOrdered;
};

const frecuency = (data) => {
	console.log(data);
	const n = data.length;
	let classes;
	const maxValue = Math.max(...data);
	const minValue = Math.min(...data);

	for (let i = 0; i <= data.length; i++) {
		let aux = Math.pow(2, i);
		if (aux > n || aux === n) {
			classes = i;
			break;
		}
	}

	const intervalClass = Math.round((maxValue - minValue) / classes) + 1;

	const initialValue = minValue;

	let rowsData = [];

	for (let i = 0; i < classes; i++) {
		const initialInterval =
			rowsData.length === 0
				? initialValue
				: rowsData[rowsData.length - 1].finalInterval + 1;
		const finalInterval = initialInterval + (intervalClass - 1);
		const frequency = data.filter(
			(number) => number >= initialInterval && number <= finalInterval
		).length;
		const pointMedian = (initialInterval + finalInterval) / 2;
		const frecuencyRelative = frequency / n;
		const frecuencyAcumulated =
			rowsData.length > 0
				? frequency + rowsData[rowsData.length - 1].frecuencyAcumulated
				: frequency;
		const fx = frequency * pointMedian;
		const fx2 = Math.pow(fx, 2);

		rowsData.push({
			initialInterval,
			finalInterval,
			frequency,
			pointMedian,
			frecuencyRelative,
			frecuencyAcumulated,
			fx,
			fx2,
		});
	}

	return rowsData;
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const data = document.getElementById('dataSet').value;
	const arrData = formatData(data);
	const orderedData = orderData(arrData);
	const frecuencyData = frecuency(orderedData);
	tableHtml.innerHTML = table(frecuencyData);
});
