import { TeamMemberProps } from "../../types/team";

export function TeamMember({ imageSrc, name, role }: TeamMemberProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          backgroundColor: "#ddd",
          border: "12px solid #FFC107",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <img
          src={imageSrc}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{name}</div>
        <div style={{ fontSize: "1rem" }}>{role}</div>
      </div>
    </div>
  );
}
