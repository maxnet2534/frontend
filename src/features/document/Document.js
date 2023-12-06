import { useRef, useState, useEffect } from "react"
import { DOCTYPES } from "../../config/DOCTYPES"
import R01 from "./R01"
import R11 from "./R11"
import R16 from "./R16"
import R17 from "./R17"
import R23 from "./R23"

const Document = () => {
    const contentRef = useRef(<R01 />)

    const [docType, setDocType] = useState('R01')
    
    const docTypeOptions = Object.values(DOCTYPES).map(type => {
        return (
            <option
            key={type}
            value={type}
            >{type}</option>
            )
    })
        
    const { current: content } = contentRef;
    
    useEffect(() => {
        const updateContent = () => {
            // logic to update content based on docType
            switch (docType) {
                case 'R01':
                    contentRef.current = <R01 />
                    break
                case 'R11':
                    contentRef.current = <R11 />
                    break
                case 'R16':
                    contentRef.current = <R16 />
                    break
                case 'R17':
                    contentRef.current = <R17 />
                    break
                case 'R23':
                    contentRef.current = <R23 />
                    break
                default:
                    contentRef.current = <R01 />
            }
        }

        updateContent() // Call the function initially
    }, [docType])
    
    const onDocTypeChanged = e => setDocType(e.target.value)

    return (
        <>
            <select 
                name="docType" 
                id="docType"
                className=""
                value={docType}
                onChange={onDocTypeChanged}
            >
                {docTypeOptions}
            </select>
            {content}
        </>
    )
}

export default Document