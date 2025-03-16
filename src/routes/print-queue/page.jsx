import React, { useEffect, useState } from "react";
import { printQueue } from "../../constants";
import { PencilLine, Trash } from "lucide-react";
import { Footer } from "../../layouts/footer";
import { useLocation } from "react-router-dom";

const PrintQueue = () => {
  const location = useLocation();
  const [filteredQueue, setFilteredQueue] = useState(printQueue); // State for filtered print queue

  useEffect(() => {
    const selectedCategory = location.state?.category; // Get selected category from location state
    if (selectedCategory) {
      // Filter print queue based on selected category
      const filtered = printQueue.filter((print) => print.category === selectedCategory);
      setFilteredQueue(filtered);
    } else {
      setFilteredQueue(printQueue); // If no category is selected, show all
    }
  }, [location.state?.category]); // Re-run the effect when the category changes

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
                  <th className="table-head">#</th>
                  <th className="table-head">Order Number</th>
                  <th className="table-head">Job Name</th>
                  <th className="table-head">Category</th>
                  <th className="table-head">Priority</th>
                  <th className="table-head">Status</th>
                  <th className="table-head">Duration</th>
                  <th className="table-head">Printer Location</th>
                  <th className="table-head">User Name</th>
                  <th className="table-head">Action</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {filteredQueue.map((print, index) => (
                  <tr
                    key={index}
                    className="table-row"
                  >
                    <td className="table-cell">{print.number}</td>
                    <td className="table-cell">{print.orderNumber}</td>
                    <td className="table-cell">{print.printName}</td>
                    <td className="table-cell">{print.category}</td>
                    <td className="table-cell">{print.priority}</td>
                    <td className="table-cell">{print.printStatus}</td>
                    <td className="table-cell">
                      {print.duration} {print.duration > 1 ? "hrs" : "hr"}
                    </td>
                    <td className="table-cell">{print.printer}</td>
                    <td className="table-cell">{print.userName}</td>
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
