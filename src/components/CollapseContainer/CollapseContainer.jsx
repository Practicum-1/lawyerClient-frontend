import { useState } from "react";
import THEMES from "./themes";

import { TriangleArrow } from "@cadence-frontend/icons";

import styles from "./CollapseContainer.module.scss";

const CollapseContainer = ({
	children,
	className,
	theme = "PRIMARY",
	openByDefault = true,
}) => {
	const [isOpen, setIsOpen] = useState(openByDefault ?? false);

	return (
		<div
			className={`${styles.collapseContainer} ${isOpen && styles.open} ${
				styles[THEMES[theme]]
			} ${className ?? ""}`}>
			<button
				className={`${styles.arrow} ${isOpen && styles.arrowDown}`}
				onClick={() => setIsOpen(prev => !prev)}>
				<TriangleArrow size="0.8rem" />
			</button>
			{children}
		</div>
	);
};

export default CollapseContainer;
