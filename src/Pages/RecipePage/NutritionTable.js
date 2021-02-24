import React from "react";

const useSortableData = (items, config = null) => {
	const [sortConfig, setSortConfig] = React.useState(config);

	const sortedItems = React.useMemo(() => {
		let sortableItems = [...items];
		if (sortConfig !== null) {
			sortableItems.sort((a, b) => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === "ascending" ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === "ascending" ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableItems;
	}, [items, sortConfig]);

	const requestSort = (key) => {
		let direction = "ascending";
		if (
			sortConfig &&
			sortConfig.key === key &&
			sortConfig.direction === "ascending"
		) {
			direction = "descending";
		}
		setSortConfig({ key, direction });
	};

	return { items: sortedItems, requestSort, sortConfig };
};

const NutritionTable = (props) => {
	const { items, requestSort, sortConfig } = useSortableData(props.products);
	const getClassNamesFor = (name) => {
		if (!sortConfig) {
			return;
		}
		return sortConfig.key === name ? sortConfig.direction : undefined;
	};
	return (
		<table>
			<caption>Nutrition Info</caption>
			<thead>
				<tr>
					<th>
						<button
							type="button"
							onClick={() => requestSort("title")}
							className={getClassNamesFor("title")}
						>
							Title
						</button>
					</th>
					<th>
						<button
							type="button"
							onClick={() => requestSort("amount")}
							className={getClassNamesFor("amount")}
						>
							Amount
						</button>
					</th>
					<th>
						<button
							type="button"
							onClick={() => requestSort("percentage")}
							className={getClassNamesFor("percentage")}
						>
							Percentage of Daily Needs
						</button>
					</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item) => (
					<tr key={items.indexOf(item)}>
						<td>{item.title}</td>
						<td>{item.amount}</td>
						<td>{item.percentOfDailyNeeds}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default NutritionTable;
