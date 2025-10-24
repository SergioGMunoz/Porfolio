interface BadgeProps {
  color: string;
  text: string;
}

const Badge = ({ color, text }: BadgeProps) => {
  const bgStyle = { backgroundColor: color };
  return (
    <div className="inline-block rounded-xl px-3 py-1" style={bgStyle}>
      <p className="text-black text-xs font-semibold">{text}</p>
    </div>
  );
};

export default Badge;
