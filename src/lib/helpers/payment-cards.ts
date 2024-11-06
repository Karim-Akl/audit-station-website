export const handleExpireDate = (value: string) => {
  // Remove all non-numeric characters from the input
  const input = value.replace(/\D/g, "");

  // Add a '/' after the first 2 digits
  let formattedInput = "";
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0 && i > 0) {
      formattedInput += "/";
    }
    formattedInput += input[i];
  }

  return formattedInput;
};

//   event: React.FocusEvent<HTMLInputElement>
export const handleExpireDateValidation = (value: string) => {
  const [month, year] = value.split("/");
  if (month && year) {
    const currentYear = new Date().getFullYear() % 100; //ex: 24
    const currentMonth = new Date().getMonth() + 1; //ex: 7
    const parsedMonth = parseInt(month, 10);
    const parsedYear = parseInt(year, 10);

    if (
      parsedMonth >= 1 &&
      parsedMonth <= 12 &&
      (parsedYear > currentYear ||
        (parsedYear === currentYear && parsedMonth >= currentMonth))
    ) {
      return `20${year}-${month.padStart(2, "0")}`;
    }
  }
  return null;
};

export const handleCardNumber = (value: string) => {
  //   Remove all non-numeric characters from the input
  const input = value.replace(/\D/g, "");

  // Add a space after every 4 digits
  let formattedInput = "";
  for (let i = 0; i < input.length; i++) {
    if (i % 4 === 0 && i > 0) {
      formattedInput += " ";
    }
    formattedInput += input[i];
  }

  return formattedInput;
};

export const handleCVV = (value: string) => {
  // Remove all non-numeric characters from the input
  const input = value.replace(/\D/g, "");
  return input;
};
