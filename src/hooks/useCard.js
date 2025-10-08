import axios from "axios";
import { useEffect, useState } from "react";
const useCard = () => {
  const [applink, setApplink] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios("./data.json")
      .then((data) => setApplink(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { applink, loading, error };
};
export default useCard;
