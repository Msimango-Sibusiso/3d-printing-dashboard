import { usersList } from "../../constants";
import { Footer } from "../../layouts/footer";
import { CirclePlus, PencilLine, Trash } from "lucide-react";

const Users = () => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Verified":
        return "bg-green-500 text-white";
      case "Not Verified":
        return "bg-yellow-500 text-black";
      case "Revoked":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Registered Users</h1>
      <div className="card">
        <div className="card-header">
          <div className="flex items-center gap-x-4">
            <button className="btn-global">
              <CirclePlus size={20} />
              New user
            </button>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
            <table className="table">
              <thead className="table-header">
                <tr className="table-row">
                  <th className="table-head">#</th>
                  <th className="table-head"></th>
                  <th className="table-head">User Name</th>
                  <th className="table-head">Email</th>
                  <th className="table-head">Address</th>
                  <th className="table-head">Registered At</th>
                  <th className="table-head">Status</th>
                  <th className="table-head">Action</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {usersList.map((user) => (
                  <tr
                    key={user}
                    className="table-row"
                  >
                    <td className="table-cell">{user.regNumber}</td>
                    <td className="table-cell">
                      <div className="flex w-max gap-x-4">
                        {user.image ? (
                          <img
                            src={user.image}
                            alt={`${user.userName.firstName} ${user.userName.lastName}`}
                            className="size-10 flex-shrink-0 rounded-full object-cover"
                          />
                        ) : (
                          <div className="avatar-placeholder">{`${user.userName.firstName[0]}${user.userName.lastName[0]}`.toUpperCase()}</div>
                        )}
                      </div>
                    </td>
                    <td className="table-cell">{`${user.userName.firstName} ${user.userName.lastName}`}</td>
                    <td className="table-cell">{user.email}</td>
                    <td>
                      <div className="flex w-max gap-x-4">
                        <div className="flex flex-col">
                          <p>{`${user.address.streetName} ${user.address.suburb}`}</p>
                          <p className="font-normal text-slate-600 dark:text-slate-400">{`${user.address.city} ${user.address.country}`}</p>
                          <p className="font-normal text-slate-600 dark:text-slate-400">{`${user.address.postalCode}`}</p>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell">{user.registeredAt}</td>
                    <td className="table-cell">
                      <div className={`rounded-md px-2 py-1 text-center ${getStatusClass(user.status)}`}>{user.status}</div>
                    </td>
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

export default Users;
