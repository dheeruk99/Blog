import { useState } from "react";

export function useFormInput(initialvalue){

            const [value, setValue] = useState(initialvalue);

            function change(e){
                setValue(e.target.value)
             }

             return{
                value,
                onChange:change
             }
}