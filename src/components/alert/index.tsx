export function Alert({
  severity,
  children,
}: {
  severity: string;
  children: React.ReactNode;
}) {
  return <div className={`alert-container ${severity}`}>{children}</div>;
}

export default Alert;
