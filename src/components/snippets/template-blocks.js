import { DNA } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { NORECORDFOUND } from "../../utils/aap-image-constant";


export const Breadcrumb = ({ _structure = [] }) => {
  return (
    <ul className="breadcrumb ">
      <li className="breadcrumb-item font-75">
        <Link to="/dashboard" className="">
          Dashboard
        </Link>
      </li>
      {_structure &&
        _structure.map((e, index) => {
          return e.url ? (
            <li className="breadcrumb-item font-75 " key={index}>
              <Link to={e.url}>{e.name}</Link>
            </li>
          ) : (
            <li className="breadcrumb-item font-75" key={index}>
              <span>{e.name}</span>
            </li>
          );
        })}
    </ul>
  );
};

export const TableLoader = () => {
  return (
    <div className="text-center my-3">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperclassName="dna-wrapper"
      />
      <p className="mb-0">Loading, please wait...</p>
    </div>
  );
};

export const TableWithNoData = ({ hasData = false }) => {
  return (
    <div
      className="w-100 text-center py-5"
      style={{ background: "#f2f4f8", borderRadius: "6px" }}
    >
      <img src={NORECORDFOUND} height="100px" alt="icon" />
      <p>There are no records to display!</p>
      {hasData && (
        <button
          className="btn btn-warning mt-2"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      )}
    </div>
  );
};
