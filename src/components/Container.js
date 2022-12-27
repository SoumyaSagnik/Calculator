import Screen from "./Screen";
import Button from "./Button";

const Container = ({ text, screen, changeValue }) => {
  return (
    <div className="container">
      <Screen screen={screen} />
      <div className="button-container">
        <Button text={text[18]} newChar={() => changeValue(text[18])} />
        <Button text={text[19]} newChar={() => changeValue(text[19])} />
        <Button text={text[16]} newChar={() => changeValue(text[16])} />
        <Button text={text[17]} newChar={() => changeValue(text[17])} />
        <Button text={text[7]} newChar={() => changeValue(text[7])} />
        <Button text={text[8]} newChar={() => changeValue(text[8])} />
        <Button text={text[9]} newChar={() => changeValue(text[9])} />
        <Button text={text[12]} newChar={() => changeValue(text[12])} />
        <Button text={text[4]} newChar={() => changeValue(text[4])} />
        <Button text={text[5]} newChar={() => changeValue(text[5])} />
        <Button text={text[6]} newChar={() => changeValue(text[6])} />
        <Button text={text[11]} newChar={() => changeValue(text[11])} />
        <Button text={text[1]} newChar={() => changeValue(text[1])} />
        <Button text={text[2]} newChar={() => changeValue(text[2])} />
        <Button text={text[3]} newChar={() => changeValue(text[3])} />
        <Button text={text[10]} newChar={() => changeValue(text[10])} />
        <Button text={text[13]} newChar={() => changeValue(text[13])} />
        <Button text={text[0]} newChar={() => changeValue(text[0])} />
        <Button text={text[15]} newChar={() => changeValue(text[15])} />
        <Button text={text[14]} newChar={() => changeValue(text[14])} />
      </div>
    </div>
  );
};

export default Container;
