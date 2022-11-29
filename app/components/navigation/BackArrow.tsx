import { Link } from "@remix-run/react";

export function BackArrowButton() {
  return (
    <div>
      <Link to="..">
        <img className={`absolute inset-0 mt-2 ml-4 `} src="images/ButtonArrow.svg" alt="" />
      </Link>
    </div>
  )
}