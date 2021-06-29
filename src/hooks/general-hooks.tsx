import { useEffect, useState } from "react";

export function useTitle(documentTitle: string){
    const [title,setTitle] = useState<string>(documentTitle);
    useEffect(() => {
        document.title = title
    },[title]);

    return setTitle;
}