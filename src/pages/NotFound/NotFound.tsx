import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gap-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button 
      className="cursor-pointer"
      onClick={() => {
        navigate('/');
      }}>Go to Home</Button>
    </div>
  );
};