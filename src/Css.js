import styles from './Css.module.scss';

export default function Css() {
  console.log(styles);
  return (
    <div class={styles.esimerkki}>
      <div class={styles.container}>
        <div id='box1' class={styles.box1}>
          1
        </div>
        <div id='box2' class={styles.box2}>
          2
        </div>
        <div id='box3' class={styles.box3}>
          3
        </div>
      </div>
    </div>
  );
}
