export const row = (data, i) => {
	return `
        <tr>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    ${i + 1}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">${
					data.initialInterval
				} - ${data.finalInterval}</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    ${data.frequency}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    ${data.pointMedian}
                </p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">${
					data.frecuencyRelative
				}</p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">${
					data.frecuencyAcumulated
				} </p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">${data.fx}</p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">${data.fx2}</p>
            </td>
        </tr>
        `;
};
