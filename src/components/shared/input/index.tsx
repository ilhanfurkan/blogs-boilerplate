import styles from './index.module.scss';

type InputProps = {
  label?: string;
  type: 'text' | 'number';
  placeholder?: string;
};

export default function Input(props: InputProps) {
  return (
    <div className={styles.input_group}>
      {props?.label && <label>{props?.label}</label>}
      <input
        type={props?.type}
        placeholder={props?.placeholder}
        className={styles.input}
      />
    </div>
  );
}
