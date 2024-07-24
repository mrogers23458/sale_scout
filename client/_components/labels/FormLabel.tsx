import styles from "./label.module.css";
interface FormLabelProps {
  labelText: string;
}

export default function FormLabel({ labelText }: FormLabelProps) {
  return <label className={styles.label}>{labelText}</label>;
}
