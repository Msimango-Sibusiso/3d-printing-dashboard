import React from "react";
import { printHistory } from "../../constants";
import { Footer } from "../../layouts/footer";

const PrintHistory = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Print History</h1>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body p-0">
          <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
            <table className="table">
              <thead className="table-header">
                <tr className="table-row">
                  <th className="table-head">Job Name</th>
                  <th className="table-head">User Name</th>
                  <th className="table-head">Status</th>
                  <th className="table-head">Duration</th>
                  <th className="table-head">Printer Location</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {printHistory.map((print, index) => (
                  <tr
                    key={index}
                    className="table-row"
                  >
                    <td className="table-cell">{print.printName}</td>
                    <td className="table-cell">{print.userName}</td>
                    <td className="table-cell">{print.printStatus}</td>
                    <td className="table-cell">
                      {print.duration} {(print.duration === 0) | (print.duration > 1) ? "hrs left" : "hr left"}
                    </td>
                    <td className="table-cell">{print.printer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrintHistory;
