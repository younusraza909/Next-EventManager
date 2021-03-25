import Link from "next/link";
import classes from "./Button.module.css";

const Button = (props) => {
  // If you want to add styling we have to add a tag under link we cant style link tag
  //Link tag by default create a tag under hood but for styling we have to add it manually
  return (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;
