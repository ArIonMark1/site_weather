import { PuffLoader } from "react-spinners";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "calc(100vh - 550px)",
    padding: "0 15px",
    gap: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 40,
    textAlign: "center",
  },
};

const Loader = () => {
  return (
    <div style={styles.container}>
      {
        <div className="loaderBlock">
          <PuffLoader
            color="rgba(235, 110, 75, 0.5)"
            // color="#e84a5f"
            cssOverride={{
              margin: "0 auto",
            }}
            size={18}
          />
          <p>Loading content...</p>
        </div>
      }
    </div>
  );
};

export default Loader;
