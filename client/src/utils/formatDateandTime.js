const formatDateAndTime = (date = Date.now()) => {
  const newDate = new Date(date);
  const formattedTime = newDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
  });
  const formattedDate = newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
  });

  return {
      date: formattedDate,
      time: formattedTime
  };
};

export default formatDateAndTime;