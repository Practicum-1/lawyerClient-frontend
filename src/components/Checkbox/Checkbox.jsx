import styles from "./Checkbox.module.scss";

const Checkbox = ({ name, checked, onChange, ...rest }) => {
	return (
		<label className={styles.checkbox}>
			<input
				type="checkbox"
				name={name}
				checked={checked}
				onClick={() => {
					onChange(!checked);
				}}
				{...rest}
			/>
			<span className={styles.checkmark}></span>
		</label>
	);
};

export default Checkbox;
