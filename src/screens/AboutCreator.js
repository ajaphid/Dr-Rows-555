import { useEffect, useState } from "react";
import Papa from "papaparse";
import DrRowHeadshot from "../assets/images/dr_row_picture.jpeg";

export default function AboutCreator() {
  const [header, setHeader] = useState("");
  const [section, setSection] = useState("");

  useEffect(() => {
    fetch("/about_creator.csv")
      .then((response) => response.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          complete: (results) => {
            const data = results.data[0];
            setHeader(data.header);
            setSection(data.section);
          },
        });
      });
  }, []);

  return (
    <div className="mb-12">
      <h1 className="mx-auto py-8">{header}</h1>
      <div className="space-y-12">
        <img
          src={DrRowHeadshot}
          alt="Headshot of Dr.Row, founder of Dr. Row's 555 breathing technique"
          className="mx-auto border-4 border-darkBrown w-2/3 lg:w-1/2 h-auto"
        />
        <div>
          <div className="font-semibold text-darkRed text-xl">Who is Dr. Row?</div>
          <p>
            {section.split("\\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
