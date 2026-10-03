import React from "react";
function LeadTable({ leads }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Phone</th><th>Email</th><th>Company</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.name}</td>
              <td>{lead.phone}</td>
              <td>{lead.email || "-"}</td>
              <td>{lead.company || "-"}</td>
              <td>
                <a className="call" href={`tel:${lead.phone}`}>📞 Call</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadTable;
