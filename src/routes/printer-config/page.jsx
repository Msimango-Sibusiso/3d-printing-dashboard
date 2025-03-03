import React from "react";
import { CirclePlus, PencilLine, Trash } from "lucide-react";
import { printers } from "../../constants";

const PrinterConfig = () => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-500 text-white";
      case "Busy":
        return "bg-yellow-500 text-black";
      case "Error":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const formatDuration = (duration) => {
    if (duration === "N/A") {
      return duration; // If "N/A", just return it
    }
    return `${duration} ${duration > 1 ? "hrs" : "hr"}`; // Add "hr" or "hrs" based on the number
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Printer Config</h1>
      <div className="card">
        <div className="card-header">
          <div className="flex items-center gap-x-4">
            <button className="btn-global">
              <CirclePlus size={20} />
              Add printer
            </button>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
            <table className="table">
              <thead className="table-header">
                <tr className="table-row">
                  <th className="table-head"></th>
                  <th className="table-head">#</th>
                  <th className="table-head">Name</th>
                  <th className="table-head">Status</th>
                  <th className="table-head">Progress</th>
                  <th className="table-head">Duration</th>
                  <th className="table-head">Action</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {printers.map((printer) => (
                  <tr
                    key={printer}
                    className="table-row"
                  >
                    <td className="table-cell">
                      <img
                        src={printer.image}
                        alt="Printer"
                        width={50}
                        height={50}
                      />
                    </td>
                    <td className="table-cell">{printer.number}</td>
                    <td className="table-cell">{printer.printerName}</td>
                    <td className="table-cell">
                      <div className={`rounded-md px-2 py-1 text-center ${getStatusClass(printer.status)}`}>{printer.status}</div>
                    </td>
                    {/* Show Progress Bar only if Status is 'Busy' */}
                    <td className="table-cell">
                      {printer.status === "Busy" && (
                        <div className="relative h-4 w-full rounded-full bg-gray-200">
                          <div
                            className="flex h-4 items-center justify-center rounded-full bg-blue-500 text-xs text-white"
                            style={{ width: printer.progress }}
                          >
                            {printer.progress}
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="table-cell">{formatDuration(printer.duration)}</td>
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
    </div>
  );
};

export default PrinterConfig;
