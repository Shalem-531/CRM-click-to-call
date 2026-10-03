import { useEffect, useState } from "react";
import LeadTable from "./components/LeadTable.jsx";
import React from "react";

function App() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/leads")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setLeads)
      .catch(() => setError("Could not connect to backend."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
    <div className="page">
      <header>
        <div>
          <h1>CRM Leads</h1>
          <p>Simple click-to-call CRM demo</p>
        </div>
        <span className="count">{leads.length} Leads</span>
      </header>

      <main>
        {loading && <p className="message">Loading leads...</p>}
        {error && <p className="message error">{error}</p>}
        {!loading && !error && <LeadTable leads={leads} />}
      </main>
    </div>
    </>
  );
}

export default App;
