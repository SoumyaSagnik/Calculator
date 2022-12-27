import { useState } from "react";
import Container from "./components/Container";

const App = () => {
  const [screenValue, setScreenValue] = useState(0);
  const buttonText = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "+",
    "-",
    "*",
    "/",
    "=",
    ".",
    "C",
    "<",
    "%",
    "^",
  ];

  const updateScreen = (toBeAdded) => {
    let screenText = screenValue.toString();
    if (toBeAdded === 0 && screenValue === 0) {
      return;
    } else if (
      screenValue === 0 &&
      (toBeAdded === 1 ||
        toBeAdded === 2 ||
        toBeAdded === 3 ||
        toBeAdded === 4 ||
        toBeAdded === 5 ||
        toBeAdded === 6 ||
        toBeAdded === 7 ||
        toBeAdded === 8 ||
        toBeAdded === 9)
    ) {
      setScreenValue(toBeAdded);
    } else if (
      (screenValue === "Undefined" || screenValue === "Infinity") &&
      (toBeAdded === 0 ||
        toBeAdded === 1 ||
        toBeAdded === 2 ||
        toBeAdded === 3 ||
        toBeAdded === 4 ||
        toBeAdded === 5 ||
        toBeAdded === 6 ||
        toBeAdded === 7 ||
        toBeAdded === 8 ||
        toBeAdded === 9)
    ) {
      setScreenValue(toBeAdded);
    } else {
      const lastLetter = screenText.substring(screenText.length - 1);
      if (
        (lastLetter === "+" ||
          lastLetter === "-" ||
          lastLetter === "*" ||
          lastLetter === "/" ||
          lastLetter === "%" ||
          lastLetter === "^") &&
        (toBeAdded === "+" ||
          toBeAdded === "-" ||
          toBeAdded === "*" ||
          toBeAdded === "/" ||
          toBeAdded === "%" ||
          toBeAdded === "^")
      ) {
        screenText = screenText.substring(0, screenText.length - 1);
        screenText += toBeAdded;
        setScreenValue(screenText);
        return;
      }

      if (
        (toBeAdded === "+" ||
          toBeAdded === "-" ||
          toBeAdded === "*" ||
          toBeAdded === "/" ||
          toBeAdded === "%" ||
          toBeAdded === "^") &&
        (screenText.includes("+") ||
          screenText.includes("-") ||
          screenText.includes("*") ||
          screenText.includes("/") ||
          screenText.includes("%") ||
          screenText.includes("^"))
      ) {
        let result;
        if (screenText.includes("+")) {
          const nums = screenText.split("+");
          result = Number(nums[0]) + Number(nums[1]);
          const decimal = result.toString().split(".");
          if (decimal.length === 1)
            setScreenValue(Number(decimal[0]) + toBeAdded);
          else setScreenValue(result.toFixed(2) + toBeAdded);
          return;
        } else if (screenText.includes("*")) {
          const nums = screenText.split("*");
          result = Number(nums[0]) * Number(nums[1]);
          const decimal = result.toString().split(".");
          if (decimal.length === 1)
            setScreenValue(Number(decimal[0]) + toBeAdded);
          else setScreenValue(result.toFixed(2) + toBeAdded);
          return;
        } else if (screenText.includes("/")) {
          const nums = screenText.split("/");
          result = Number(nums[0]) / Number(nums[1]);
          const decimal = result.toString().split(".");
          if (decimal.length === 1)
            setScreenValue(Number(decimal[0]) + toBeAdded);
          else setScreenValue(result.toFixed(2) + toBeAdded);
          return;
        } else if (screenText.includes("%")) {
          const nums = screenText.split("%");
          result = Number(nums[0]) % Number(nums[1]);
          const decimal = result.toString().split(".");
          if (decimal.length === 1)
            setScreenValue(Number(decimal[0]) + toBeAdded);
          else setScreenValue(result.toFixed(2) + toBeAdded);
          return;
        } else if (screenText.includes("^")) {
          const nums = screenText.split("^");
          result = Math.pow(nums[0], nums[1]);
          const decimal = result.toString().split(".");
          if (decimal.length === 1)
            setScreenValue(Number(decimal[0]) + toBeAdded);
          else setScreenValue(result.toFixed(2) + toBeAdded);
          return;
        } else if (screenText.includes("-")) {
          const nums = screenText.split("-");
          if (nums.length === 3) {
            result = Number(-nums[1]) - Number(nums[2]);
          } else result = Number(nums[0]) - Number(nums[1]);
          const decimal = result.toString().split(".");
          if (decimal.length === 1)
            setScreenValue(Number(decimal[0]) + toBeAdded);
          else setScreenValue(result.toFixed(2) + toBeAdded);
          return;
        }
      }
      switch (toBeAdded) {
        case "C":
          setScreenValue(0);
          break;
        case "<":
          if (screenValue !== 0) {
            const screenValueInString = screenValue.toString();
            const length = screenValueInString.length;
            const newValue = screenValueInString.substring(0, length - 1);
            if (newValue === "") setScreenValue(0);
            else setScreenValue(newValue);
          }
          break;
        case "=":
          let result;
          const screenValueString = screenValue.toString();
          const lastLetter = screenValueString.substring(
            screenValueString.length - 1
          );
          if (
            lastLetter === "+" ||
            lastLetter === "-" ||
            lastLetter === "*" ||
            lastLetter === "/" ||
            lastLetter === "%" ||
            lastLetter === "^"
          )
            return;
          if (screenValueString.includes("+")) {
            let nums = screenValueString.split("+");
            if (nums[1] !== "") {
              result = Number(nums[0]) + Number(nums[1]);
            }
          } else if (screenValueString.includes("*")) {
            let nums = screenValueString.split("*");
            if (nums[1] !== "") {
              result = Number(nums[0]) * Number(nums[1]);
            }
          } else if (screenValueString.includes("/")) {
            let nums = screenValueString.split("/");
            if (nums[0] === 0 && nums[1] === 0) {
              setScreenValue("Undefined");
              return;
            }
            if (nums[1] !== "") {
              result = Number(nums[0]) / Number(nums[1]);
              if (isNaN(result)) {
                setScreenValue("Undefined");
                return;
              } else if (!isFinite(result)) {
                setScreenValue("Infinity");
                return;
              }
            }
          } else if (screenValueString.includes("%")) {
            let nums = screenValueString.split("%");
            if (nums[1] !== "") {
              result = Number(nums[0]) % Number(nums[1]);
            }
          } else if (screenValueString.includes("^")) {
            let nums = screenValueString.split("^");
            if (nums[1] !== "") {
              result = Math.pow(nums[0], nums[1]);
            }
          } else if (screenValueString.includes("-")) {
            let nums = screenValueString.split("-");
            if (nums[1] !== "") {
              result = Number(nums[0]) - Number(nums[1]);
            }
          } else return;
          const decimal = result.toString().split(".");
          if (decimal.length === 1) setScreenValue(Number(decimal[0]));
          else setScreenValue(result.toFixed(2));
          break;
        default:
          setScreenValue(screenValue + "" + toBeAdded);
      }
    }
  };

  return (
    <div className="calculator">
      <Container
        text={buttonText}
        screen={screenValue}
        changeValue={updateScreen}
      />
    </div>
  );
};

export default App;
