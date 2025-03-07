import { format } from "date-fns";

export const formatCardNumber = (cardNumber) => {
  if (isNaN(cardNumber)) return cardNumber;

  let chunks = cardNumber.match(/.{1,4}/g);
  return chunks
    .map((chunk, index) => {
      if (index === 0 || index === chunks.length - 1) {
        return chunk;
      } else {
        return "****";
      }
    })
    .join(" ");
};
