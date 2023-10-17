import React from "react";

function displayTime(readingTime) {
  if (readingTime < 30) {
    let time = " ";
    while (readingTime > 0) {
      time += "☕️";
      readingTime -= 5;
    }
    return time + " ";
  } else {
    let time = " ";
    while (readingTime > 0) {
      time += "🍱";
      readingTime -= 10;
    }
    return time + " ";
  }
}

const Article = ({ title, date = "January 1, 1970", preview, time }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date + " "}•{displayTime(time)}
        {time}
      </small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
