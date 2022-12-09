import { FaStar } from "react-icons/fa";

const Stars = ({ stars, reviewCount, className }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      {[...Array(5)].map((_, i) => {
        return (
          <FaStar
            style={{
              color: stars < i + 1 ? "gray" : "orange",
            }}
            key={i}
          />
        );
      })}
      {reviewCount && <p style={{ fontSize: 12 }}>({reviewCount})</p>}
    </div>
  );
};

export default Stars;
