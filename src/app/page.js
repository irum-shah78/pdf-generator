"use client";
import React, { useState } from "react";
import { generatePDF } from "../components/generatePDF";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const data = [
    {
      standard: "",
      number: "305-1",
      title: "Direct (Scope 1) GHG emissions",
      description:
        "Gross direct (Scope 1) GHG emissions in metric tons of CO2 equivalent.",
      assurance: "",
    },
    ...Array(10).fill({
      standard: "",
      number: "305-1",
      title: "Direct (Scope 1) GHG emissions",
      description:
        "Gross direct (Scope 1) GHG emissions in metric tons of CO2 equivalent.",
      assurance: "",
    }),
  ];

  const handleGeneratePDF = async () => {
    try {
      setLoading(true);
      const pdfBlob = await generatePDF(data);
      setLoading(false);

      const pdfURL = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfURL);
    } catch (error) {
      console.error("Error generating PDF:", error);
      setLoading(false);
    }
  };

  const handleDownloadPDF = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "generated_result.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <h1>PDF Generator</h1>
      <button onClick={handleGeneratePDF} disabled={loading}>
        {loading ? "Generating PDF..." : "Generate PDF"}
      </button>

      {pdfUrl && (
        <div>
          <iframe
            src={`${pdfUrl}#toolbar=0`}
            title="Generated PDF"
            style={{ width: "100%", height: "70vh", border: 0 }}
          ></iframe>
          <button onClick={handleDownloadPDF} style={{ marginTop: "10px" }}>
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}
