import React from "react";
import { printQueue } from "../../constants";
import { PencilLine, Trash } from "lucide-react";
import { Footer } from "../../layouts/footer";

const PrintQueue = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Print Queue</h1>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body p-0">
          <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
            <table className="table">
              <thead className="table-header">
                <tr className="table-row">
                  <th className="table-head">Job Name</th>
                  <th className="table-head">Order</th>
                  <th className="table-head">User Name</th>
                  <th className="table-head">Status</th>
                  <th className="table-head">Duration</th>
                  <th className="table-head">Printer Location</th>
                  <th className="table-head">Priority</th>
                  <th className="table-head">Action</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {printQueue.map((print) => (
                  <tr
                    key={print}
                    className="table-row"
                  >
                    <td className="table-cell">{print.printName}</td>
                    <td className="table-cell">{print.printOrder}</td>
                    <td className="table-cell">{print.userName}</td>
                    <td className="table-cell">{print.printStatus}</td>
                    <td className="table-cell">
                      {print.duration} {print.duration > 1 ? "hrs" : "hr"}
                    </td>
                    <td className="table-cell">{print.printer}</td>
                    <td className="table-cell">{print.priority}</td>
                    <td className="table-cell">
                      <div className="flex items-center gap-x-4">
                        <button className="text-blue-500 dark:text-blue-600">
                          <PencilLine size={20} />
                        </button>
                        <button className="text-red-500">
                          <Trash size={20} />
                        </button>
                      </div>
                    </td>
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

export default PrintQueue;
