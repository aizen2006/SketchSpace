import { type ReactNode ,useState} from "react";

interface TooltipButtonProps {
    children: ReactNode;
    note: string;
}

export  function TooltipButton({
    children,
    note,
}: TooltipButtonProps) {
    const [isSelected,setIsSelected ] =useState(false);

    return (
        <div className="relative inline-block group">
            <button type="button" 
            className={`flex h-10 w-10 items-center justify-center rounded-2xl border transition-colors ${
                isSelected
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white hover:bg-gray-50"
            }`}
            onClick={()=>(setIsSelected(!isSelected))}
            >
                {children}
            </button>

            <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 invisible opacity-0 transition-all duration-150 pointer-events-none group-hover:visible group-hover:opacity-100">
                <div className="relative whitespace-nowrap rounded-md bg-black px-3 py-1.5 text-sm font-medium text-white">
                    {note}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-black" />
                </div>
            </div>
        </div>
    );
}