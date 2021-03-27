import Link from "next/link";
import classes from "./Button.module.css";

const Button = (props) => {
  // If you want to add styling we have to add a tag under link we cant style link tag
  //Link tag by default create a tag under hood but for styling we have to add it manually
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;
