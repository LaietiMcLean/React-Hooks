import { useState } from "react"


export const useForm = (initialState = {}) => {

    const [formsValues, setformsValues] = useState(initialState)

    const handleInputChange = ({target}) => {
        setformsValues({
            ...formsValues,
            [target.name]: target.value
        });
    }

return [formsValues, handleInputChange];

}
