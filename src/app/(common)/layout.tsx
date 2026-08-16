export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <div className="">{children}</div>
    </main>
  );
}
