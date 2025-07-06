// components/CenteredSection.tsx
export default function CenteredSection({
  children,
  
  padding = "p-8",
}: {
  children: React.ReactNode;
  
  padding?: string;
}) {
  return (
    <div className={`flex items-center justify-center min-h-screen ${padding}`}>
      {children}
    </div>
  );
}

