import { useSelector } from "react-redux";

const TextList = () => {
  const texts = useSelector((state) => state.texts);
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
};

export default TextList;
