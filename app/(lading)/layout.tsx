
import { AntuThemeProvider } from "@/providers/ThemeProvider";
import HeaderAntu from "../components/HeaderAntu";

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <AntuThemeProvider>
      <div className="min-h-screen bg-[#050816] text-white">
        <HeaderAntu />

        {children}
      </div>
    </AntuThemeProvider>
  );
};

export default PublicLayout;