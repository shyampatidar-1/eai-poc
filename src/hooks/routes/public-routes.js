
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { decryptAEStoString } from "../../utils/utilities";

const PublicRoutes = ({ component }) => {
  let location = useLocation(),
    rawAccessToken = useSelector((state) => state.accessToken.value);
  rawAccessToken = rawAccessToken
    ? decryptAEStoString(rawAccessToken)
    : rawAccessToken;

  if (rawAccessToken)
    return <Navigate to="/dashboard" state={{ from: location }} replace />;

  return component;
};

export default PublicRoutes;
