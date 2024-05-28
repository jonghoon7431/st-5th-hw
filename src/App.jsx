import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { addText } from "./redux/slices/textSlice";

function App() {
  const texts = useSelector((state) => state.texts);
  const dispatch = useDispatch();

  console.log(texts);

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={(text) => dispatch(addText(text))} />
      <TextList />
    </div>
  );
}

export default App;
