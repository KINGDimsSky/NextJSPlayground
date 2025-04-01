export default function Layout({
  children,
  admin,
  analytics,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  analytics: React.ReactNode
}) {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="flex gap-2 mt-2">
        {admin}
        {analytics}
      </div>
    </div>
  );
}
