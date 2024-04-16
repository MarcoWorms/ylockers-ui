'use client'

import Button from './Button';
import Image from "next/image";


interface InputProps {
  title: string;
  button?: string;
  subtitle: string;
  value?: string;
  onChange?: (e:any) => void;
  noButton?: boolean;
  icon?: string;
}

export default function Input({ title, button, subtitle, noButton=false, value='', onChange=()=>{}, icon }: InputProps) {
 return (
   <div className="flex flex-col">
     <span className="font-thin pb-1 text-md">{title}</span>
     <div className="flex">
       <input type="number" className="p-2 bg-input-bg rounded-lg mr-2 w-full" placeholder="100" value={value} onChange={onChange}/>
       {icon && <Image src="/search.svg" alt="search"/>}
       {!noButton && <Button>{button}</Button>}
     </div>
     <span className="font-thin opacity-70 text-xs pl-3 pt-1">{subtitle}</span>
   </div>
 )
}