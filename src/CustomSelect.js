import { useEffect,memo } from "react";
import { useFormContext } from "react-hook-form";

const CustomSelect = ({ name, options }) => {
   const {setValue } = useFormContext();
 
   useEffect(() => {
     // Set first option as value here, without causing infinite loop.
     console.log("render");
   }, [options]);
 
   useEffect(() => {
     console.log("name update");
   }, [name]);
 
   console.log("render out");
 
   return (
     <select name={name} onChange={(e) => setValue(name, e.target.value)}>
       {options.map((option, i) => {
         return (
           <option key={i} value={option}>
             {option}
           </option>
         );
       })}
     </select>
   );
 }

 export default memo(CustomSelect);