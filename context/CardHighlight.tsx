import { createContext, useContext, useState } from "react";

export const CardHiglightContext = createContext([] as any);

// Context provider
export function CardHiglightContextProvider({ children }: any) {
  const [card1Highlight, setCard1Highlight] = useState("");
  const [card2Highlight, setCard2Highlight] = useState("");
  const [card3Highlight, setCard3Highlight] = useState("");
  const [card4Highlight, setCard4Highlight] = useState("");
  const [card5Highlight, setCard5Highlight] = useState("");
  const [card6Highlight, setCard6Highlight] = useState("");
  const [card7Highlight, setCard7Highlight] = useState("");
  const [card8Highlight, setCard8Highlight] = useState("");
  const [card9Highlight, setCard9Highlight] = useState("");
  const [card10Highlight, setCard10Highlight] = useState("");

  // Note: because using array destructuring need to array destructure out EVERY value on pages it's imported on, otherwise the values will get mixed up due to index order
  return (
    <CardHiglightContext.Provider
      value={[
        card1Highlight,
        setCard1Highlight,
        card2Highlight,
        setCard2Highlight,
        card3Highlight,
        setCard3Highlight,
        card4Highlight,
        setCard4Highlight,
        card5Highlight,
        setCard5Highlight,
        card6Highlight,
        setCard6Highlight,
        card7Highlight,
        setCard7Highlight,
        card8Highlight,
        setCard8Highlight,
        card9Highlight,
        setCard9Highlight,
        card10Highlight,
        setCard10Highlight,
      ]}
    >
      {children}
    </CardHiglightContext.Provider>
  );
}

// Custom hook
export function useCardHiglightContext() {
  return useContext(CardHiglightContext);
}

export function chooseCard(index) {

}